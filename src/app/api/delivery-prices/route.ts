import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';

export async function GET() {
    try {
        const deliveryList = await stripe.shippingRates.list()
        const activeDeliveryList = deliveryList.data.filter(rate => rate.active);

        return NextResponse.json({ deliveryList: activeDeliveryList });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}