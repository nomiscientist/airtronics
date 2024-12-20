import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      firstName, lastName, company, email, phone,
      streetAddress, addressLine2, city, stateProvince,
      zipCode, country, projectType, projectDescription 
    } = body

    const recipients = [
      "sales@airtronics.com.pk",
      "commercial@airtronics.com.pk"
    ]

    await transporter.sendMail({
      from: `"AirTronics Website" <${process.env.SMTP_USER}>`,
      to: recipients.join(', '),
      subject: `New Quotation Request: ${projectType} - ${company}`,
      html: `
        <h2>New Quotation Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Address</h3>
        <p>${streetAddress}</p>
        ${addressLine2 ? `<p>${addressLine2}</p>` : ''}
        <p>${city}, ${stateProvince} ${zipCode}</p>
        <p>${country}</p>
        
        <h3>Project Details</h3>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Description:</strong></p>
        <p>${projectDescription}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quotation form error:', error)
    return NextResponse.json(
      { error: 'Failed to send quotation request' },
      { status: 500 }
    )
  }
} 