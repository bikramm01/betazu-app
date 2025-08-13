import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, website, goal } = await req.json();

    // 1️⃣ Send to YOU
    await resend.emails.send({
      from: "Betazu <onboarding@resend.dev>", // Change after domain verification
      to: "betazuai@gmail.com", // Replace with your inbox
      subject: `New Free Audit Request from ${name}`,
      html: `
        <h2>New Free Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Goal:</strong> ${goal}</p>
      `,
    });

    // 2️⃣ Auto "No Reply" email to client
    await resend.emails.send({
      from: "Betazu Team <onboarding@resend.dev>",
      to: email,
      subject: "Your Free Website & AI Audit Request",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for requesting a <strong>Free Website & AI Audit</strong> from Betazu.</p>
        <p>We’ll review your website and send your detailed audit within <strong>24 hours</strong>.</p>
        <p style="color: gray; font-size: 12px;">
          This is an automated confirmation email — please do not reply.
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Free audit email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
