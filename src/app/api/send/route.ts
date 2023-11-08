// pages/api/sendEmail.ts
import sendEmail from "@/external/sendEmail";
import sendEmailParams from "@/app/models/sendEmailParams";

export async function POST(req: Request) {
  const emailData: sendEmailParams = await req.json();
  await sendEmail(emailData);
  
  return new Response("Email sent successfully", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
