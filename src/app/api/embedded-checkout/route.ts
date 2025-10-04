import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';
import { InquiryProductState } from '@/types/InquiryCart';
import { Customer } from '@/types/Basket';

const isDevelopment = process.env.NODE_ENV === 'development';

export async function POST(request: Request) {
    try {
        const { products, shippingId, customer }: { products: InquiryProductState[]; shippingId: string; customer: Customer } = await request.json();

        if (!products || products.length === 0) {
            return NextResponse.json({ message: 'No products provided' }, { status: 400 });
        }
        if (!shippingId) {
            return NextResponse.json({ message: 'No shippingId provided' }, { status: 400 });
        }
        if (!customer) {
            return NextResponse.json({ message: 'No customer provided' }, { status: 400 });
        }

        const stripeProducts = products.flatMap((product) =>
            product.variants
                .filter(variant => variant.amount > 0)
                .map(variant => ({
                    price: isDevelopment ? variant.testPriceId : variant.priceId,
                    quantity: variant.amount,
                })
            )
        )

        const stripeCustomer = await stripe.customers.create(customer);

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: stripeProducts,
            automatic_tax: { enabled: true },
            customer: stripeCustomer.id,
            shipping_options: [
                { shipping_rate: shippingId },
            ],
            allow_promotion_codes: true,
            mode: 'payment',
            return_url: `${request.headers.get('origin')}/dekujeme?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({ id: session.id, client_secret: session.client_secret });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}