"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with API key from environment variable
let resend: Resend | null = null
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY)
}

// Define a schema for form validation
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // Log the submission for development/testing
    console.log("Form submission received:", {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      phone: validatedData.phone,
      service: validatedData.service || "Not specified",
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    })

    // Create email content with professional styling
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0369a1; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f8fafc; padding: 20px; }
          .info-section { background-color: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .label { font-weight: bold; color: #0369a1; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Streamlined Cleaning Solutions</p>
          </div>
          <div class="content">
            <div class="info-section">
              <p><span class="label">Service Requested:</span> ${validatedData.service || "Not specified"}</p>
            </div>
            <div class="info-section">
              <h3>Contact Information</h3>
              <p><span class="label">Name:</span> ${validatedData.firstName} ${validatedData.lastName}</p>
              <p><span class="label">Email:</span> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><span class="label">Phone:</span> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
            </div>
            <div class="info-section">
              <h3>Message</h3>
              <p>${validatedData.message}</p>
            </div>
          </div>
          <div class="footer">
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Try to send email if Resend is configured
    if (resend && process.env.RESEND_API_KEY) {
      try {
        // Send email using Resend with your verified domain
        const { data, error } = await resend.emails.send({
          from: "noreply@streamlinedcleaningsolutions.com", // Now using your verified domain!
          to: "streamlinedcleaningsolutions@gmail.com",
          subject: `New Cleaning Service Request: ${validatedData.service || "General Inquiry"}`,
          html: emailContent,
          text: `
New request from ${validatedData.firstName} ${validatedData.lastName}
Service: ${validatedData.service || "Not specified"}
Contact: ${validatedData.email}, ${validatedData.phone}
Message: ${validatedData.message}
Submitted: ${new Date().toLocaleString()}
          `,
          // Optional: Add reply-to so you can reply directly to the customer
          replyTo: validatedData.email,
        })

        if (error) {
          console.error("Resend API error:", error)
        } else {
          console.log("Email sent successfully with Resend, ID:", data?.id)
        }
      } catch (emailError) {
        console.error("Failed to send email with Resend:", emailError)
        // Don't fail the form submission if email fails
      }
    } else {
      console.log("Resend not configured - email not sent")
      console.log("To enable email notifications:")
      console.log("1. Add RESEND_API_KEY to your environment variables")
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you shortly.",
    }
  } catch (error) {
    console.error("Form submission error:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your information and try again.",
        errors: error.errors,
      }
    }

    // Return generic error
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
