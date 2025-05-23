// This is a basic example of using Resend
import { Resend } from "resend"

// Initialize with API key (stored in environment variable in your actual project)
const resend = new Resend("re_xxxxxxxxx")

// Basic email sending
await resend.emails.send({
  from: "Acme <onboarding@resend.dev>",
  to: ["delivered@resend.dev"],
  subject: "hello world",
  html: "<p>it works!</p>",
})
