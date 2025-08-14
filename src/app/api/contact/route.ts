import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Betazu <onboarding@resend.dev>", // ✅ shared domain
      to: "mbikram210@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

   if (error) {
  console.error("Resend API error:", error);
  return new Response(JSON.stringify({ error }), { status: 500 });
}


    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
