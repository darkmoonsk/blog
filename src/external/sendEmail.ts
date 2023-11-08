import sendEmailParams from "@/app/models/sendEmailParams";
import { EmailParams, MailerSend, Sender, Recipient } from "mailersend"

async function sendEmail (emailData: sendEmailParams) {
  const mailer = new MailerSend({
    apiKey: process.env.NEXT_PUBLIC_MAILERSEND_API_KEY || "",
  })

  const emailModel = `
  <p>Nome: ${emailData.name}</p>
  <p>Email: ${emailData.email}</p>
  <p>Whatsapp: ${emailData.whatsapp}</p>
  <p>Descrição: ${emailData.description}</p>
  `

  const sentFrom = new Sender("contato@brunosouzadev.com", emailData.name);
  
  const recipients = [new Recipient("contato@brunosouzadev.com", emailData.name)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Contato pelo site")
    .setHtml(emailModel);

  await mailer.email.send(emailParams);
}

export default sendEmail;