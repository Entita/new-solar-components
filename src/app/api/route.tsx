import { NextRequest, NextResponse } from 'next/server'
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'info@solar-components.cz',
      pass: process.env.NODEMAILER_PW,
    },
})

const sendMail = async(subject: 'dotaz' | 'poptavka') => {
  const mailOptions = {
    from: 'info@solar-components.cz',
    to: 'entitak@gmail.com',
    subject: subject,
    text: 'example',
    html: '<h2>example</h2>',
  }

  return (await transporter.sendMail(mailOptions))?.rejected.length === 0
}

export async function POST(req: NextRequest) {
  const { data, subject } = await req.json()
  try {
    const success = await sendMail(subject)
    console.log('HUH', data)
    return NextResponse.json({ success })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}