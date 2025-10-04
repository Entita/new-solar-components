import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';
import { formatPhone, formatZip } from '@/utils/emailHelpers';
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'info@solar-components.cz',
    pass: process.env.NODEMAILER_PW,
  },
});

function htmlOrderTable(line_items: any[]) {
  let html = '';
  line_items.forEach((item, idx) => {
    html += `
      <tr ${idx % 2 === 0 ? 'style="background-color: #f5f5f5;"' : ''}>
        <td style="padding: 4px 1rem;">${item.description || item.price?.product?.name || ''}</td>
        <td style="padding: 4px 1rem; text-align: center;">${item.quantity}x</td>
        <td style="padding: 4px 1rem; text-align: right;">${(item.amount_total / 100).toLocaleString('cs-CZ', { style: 'currency', currency: item.currency?.toUpperCase() || 'CZK' })}</td>
      </tr>
    `;
  });
  return html;
}

function htmlShippingCost(session: any) {
  if (session.shipping_cost) {
    return `
      <tr>
        <td colspan="2" style="padding: 4px 1rem; text-align: right;"><strong>Doprava:</strong></td>
        <td style="padding: 4px 1rem; text-align: right;">
          ${(session.shipping_cost.amount_total / 100).toLocaleString('cs-CZ', { style: 'currency', currency: session.currency?.toUpperCase() || 'CZK' })}
        </td>
      </tr>
    `;
  }
  return '';
}

function htmlCustomerInfo(session: any) {
  const c = session.customer || session.customer_details || {};
  return `
    <h2>Fakturační údaje</h2>
    <table style="border-collapse: collapse;">
      <tr><td style="padding: 4px 1rem;"><strong>Jméno:</strong></td><td>${c.name || ''}</td></tr>
      <tr><td style="padding: 4px 1rem;"><strong>E-mail:</strong></td><td>${c.email || ''}</td></tr>
      <tr><td style="padding: 4px 1rem;"><strong>Telefon:</strong></td><td>${formatPhone(c.phone) || ''}</td></tr>
      <tr><td style="padding: 4px 1rem;"><strong>Adresa:</strong></td><td>${[c.address?.line1, c.address?.line2, c.address?.city, formatZip(c.address?.postal_code), c.address?.country].filter(Boolean).join(', ')}</td></tr>
    </table>
  `;
}

function htmlOrderSummary(session: any, line_items: any[]) {
  return `
    <h2>Souhrn objednávky</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="text-align: left; padding: 4px 1rem;">Produkt</th>
          <th style="text-align: center; padding: 4px 1rem;">Množství</th>
          <th style="text-align: right; padding: 4px 1rem;">Cena</th>
        </tr>
      </thead>
      <tbody>
        ${htmlOrderTable(line_items)}
        ${htmlShippingCost(session)}
        <tr>
          <td colspan="2" style="padding: 4px 1rem; text-align: right;"><strong>Celkem:</strong></td>
          <td style="padding: 4px 1rem; text-align: right;"><strong>${(session.amount_total / 100).toLocaleString('cs-CZ', { style: 'currency', currency: session.currency?.toUpperCase() || 'CZK' })}</strong></td>
        </tr>
      </tbody>
    </table>
  `;
}

function htmlTemplate(session: any, line_items: any[]) {
  return `
    <div>
      <h1>Děkujeme za vaši objednávku na <a href="https://www.solar-components.cz" target="_blank">solar-components.cz</a></h1>
      ${htmlCustomerInfo(session)}
      ${htmlOrderSummary(session, line_items)}
      <p>Pokud máte dotazy, kontaktujte nás na <a href="mailto:info@solar-components.cz">info@solar-components.cz</a>.</p>
    </div>
  `;
}

async function sendConfirmationEmail(to: string, session: any, line_items: any[]) {
  const mailOptions = {
    from: 'Solar Components <info@solar-components.cz>',
    to,
    subject: 'Potvrzení objednávky – Solar Components',
    html: htmlTemplate(session, line_items),
  };
  return transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json();
    if (!sessionId) return NextResponse.json({ message: "Missing sessionId" }, { status: 400 });

    // Získej detail objednávky ze Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'line_items.data.price.product'],
    });

    // Ochrana proti opakovanému odeslání
    if (session.metadata?.confirmation_sent === 'true') return NextResponse.json({ ok: true, alreadySent: true });

    // Odeslat e-mail zákazníkovi
    const line_items = session?.line_items?.data || [];
    const customerEmail = session.customer_details?.email;
    if (!customerEmail) return NextResponse.json({ message: "Customer email not found" }, { status: 400 });

    await sendConfirmationEmail(customerEmail, session, line_items);
    // await sendConfirmationEmail("info@solar-components.cz", session, line_items);

    // Zapiš do metadata, že e-mail byl odeslán
    await stripe.checkout.sessions.update(sessionId, {
      metadata: { ...(session.metadata || {}), confirmation_sent: 'true' }
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}