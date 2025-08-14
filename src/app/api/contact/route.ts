import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.re_56M53tcb_3jsMuEAShA6fDjrxzbehCx3Q);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // 1️⃣ Send to YOU
    await resend.emails.send({
      from: "Betazu Contact <onboarding@resend.dev>", // Resend test sender
      to: "betazuai@gmail.com", // Change to your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Send "No-Reply" Auto Email to Client
    await resend.emails.send({
      from: "Betazu Team <onboarding@resend.dev>", // Resend test sender
      to: email,
      subject: "We Received Your Message – Betazu",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting <strong>Betazu</strong>! We’ve received your message and our team will get back to you soon.</p>
        <p>Here’s what you sent:</p>
        <blockquote>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </blockquote>
        <p style="color: gray; font-size: 12px;">
          This is an automated confirmation email – please do not reply.
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
