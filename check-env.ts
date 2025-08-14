import dotenv from "dotenv";

// Load .env.local manually
dotenv.config({ path: ".env.local" });

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);