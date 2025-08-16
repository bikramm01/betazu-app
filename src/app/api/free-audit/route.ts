import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website, goal } = body;

    // ✅ Send only to your verified inbox in sandbox mode
    const { data, error } = await resend.emails.send({
      from: "Betazu <onboarding@resend.dev>", // allowed in sandbox
      to: "mbikram210@gmail.com", // must be your verified email in sandbox
      subject: `New Free Audit Request from ${name}`,
      html: `
        <h2>New Free Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Goal:</strong> ${goal}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return new Response(JSON.stringify({ error: error.message || error }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
