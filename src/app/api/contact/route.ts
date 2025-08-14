import { Resend } from "resend";

// Use the ! to tell TypeScript the key exists
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  console.log("RESEND_API_KEY in API route:", process.env.RESEND_API_KEY);

  const body = await req.json();
  try {
    const response = await resend.emails.send({
      from: "your-email@example.com",
      to: body.email,
      subject: "Test Email",
      html: "<p>Hello from Resend!</p>",
    });

    return new Response(JSON.stringify({ success: true, response }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err }), { status: 500 });
  }
}
