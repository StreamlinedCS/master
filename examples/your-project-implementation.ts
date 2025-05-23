// How it's implemented in your project (simplified version)
import { Resend } from "resend"

// Initialize with API key from environment variable (more secure)
const resend = new Resend(process.env.RESEND_API_KEY)

// Enhanced email sending with your verified domain
await resend.emails.send({
  from: "Streamlined Cleaning <noreply@streamlinedcleaningsolutions.com>", // Your verified domain
  to: "streamlinedcleaningsolutions@gmail.com",
  subject: "New Cleaning Service Request: Residential Cleaning",
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; }
        .header { background-color: #0369a1; color: white; padding: 20px; }
        /* More styling... */
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Contact Form Submission</h1>
      </div>
      <div class="content">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Message:</strong> I need a quote for weekly cleaning.</p>
      </div>
    </body>
    </html>
  `,
  replyTo: "john@example.com", // So you can reply directly to the customer
})
