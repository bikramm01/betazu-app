import { Resend } from "resend";

// Log the API key to check if it's loaded
console.log("Resend API key:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY!); // the ! tells TypeScript it’s not null

export async function POST(req: Request) {
  const body = await req.json();

  // Example usage of Resend
  try {
    const response = await resend.emails.send({
      from: "your-email@example.com",
      to: body.email,
      subject: "Test Email",
      html: "<p>Hello from Resend!</p>",
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err }), {
      status: 500,
    });
  }
}
