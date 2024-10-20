import { FormState } from '@/types/Form'
import { InquiryCartState, InquiryProductState, InquiryProductVariantState } from '@/types/InquiryCart'
import { NextRequest, NextResponse } from 'next/server'
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'info@solar-components.cz',
      pass: process.env.NODEMAILER_PW,
    },
})

const htmlInquiry = (products: InquiryCartState['products']) => {
  var html = ''
  let index = 0
  products.forEach((product: InquiryProductState) => {
    product.variants.forEach((variant: InquiryProductVariantState, variantIndex: number) => {
      html += `
        <tr ${index % 2 === 0 ? 'style="border-top: 1px solid black; background-color: #dddddd"' : 'style="border-top: 1px solid black"'}>
          <td style='padding: 4px 1rem'>
            <img height="48" width="48" src="www.solar-components.cz/models/${product.id}/${product.id}.png" alt="obrázek ${product.id} ${variantIndex + 1}" />
          </td>
          <td style='padding: 4px 1rem'>
            <span>${variant.name}</span>
          </td>
          <td style='padding: 4px 1rem; text-align: center'>
            <span style="white-space: nowrap">${variant.price} Kč</span>
          </td>
          <td style='padding: 4px 1rem; text-align: center'>
            <span>${variant.amount}x</span>
          </td>
        </tr>
      `
      index++
    })
  })
  return html
}

const htmlTemplate = (data: FormState, products: InquiryCartState['products']) => `
  <div>
    <h1>Poptávka z <a style='text-decoration: underline' href='www.solar-components.cz' target='_blank'>našeho webu<a/></h1>
    <br />
    <table style='border-collapse: collapse; font-size: clamp(14px, 2.1vw, 21px);'>
      <thead>
        <tr>
          <td><strong>Obrázek</strong></td>
          <td><strong>Název</strong></td>
          <td><strong>Cena</strong></td>
          <td><strong>Množství</strong></td>
        <tr />
      </thead>
      <tbody>
        ${htmlInquiry(products)}
      </tbody>
    </table>
    <br />
    <h2>Tabulka s informacemi</h2>
    <table style='border-collapse: collapse; font-size: clamp(18px, 2.8vw, 26px);'>
      <tr style='background-color: #dddddd'>
        <td style='padding: 1rem; border: 1px solid black'><strong>Jméno</strong></td>
        <td style='padding: 1rem; border: 1px solid black'>${data.name}</td>
        </tr>
        <tr>
        <td style='padding: 1rem; border: 1px solid black'><strong>Příjmení</strong></td>
        <td style='padding: 1rem; border: 1px solid black'>${data.surname}</td>
      </tr>
      <tr />
      <tr style='background-color: #dddddd'>
        <td style='padding: 1rem; border: 1px solid black'><strong>Email</strong></td>
        <td style='padding: 1rem; border: 1px solid black'>${data.email}</td>
        </tr>
        <tr>
        <td style='padding: 1rem; border: 1px solid black'><strong>Telefon</strong></td>
        <td style='padding: 1rem; border: 1px solid black'>${data.phone}</td>
      </tr>
      <tr />
      <tr style='background-color: #dddddd'>
        <td style='padding: 1rem; border: 1px solid black'><strong>Zpráva</strong></td>
        <td style='padding: 1rem; border: 1px solid black'>${data.message}</td>
      </tr>
    </table>
  </div>
`

const sendMail = async(subject: 'dotaz' | 'poptavka', data: FormState, products: InquiryCartState['products']) => {
  const mailOptions = {
    from: 'Solar components info@solar-components.cz',
    to: 'info@solar-components.cz',
    subject: subject === 'dotaz' ? 'Nový dotaz' : 'Nová poptávka',
    text: 'Solar Components Poptávka',
    html: htmlTemplate(data, products),
  }

  return (await transporter.sendMail(mailOptions))?.rejected.length === 0
}

export async function POST(req: NextRequest) {
  const { data, subject, products } = await req.json()
  try {
    const success = await sendMail(subject, data, products)
    return NextResponse.json({ success })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}