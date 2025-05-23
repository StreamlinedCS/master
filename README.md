# Streamlined Cleaning Solutions Website

This is the official website for Streamlined Cleaning Solutions, a professional cleaning service based in Lakeland, FL.

## Features

- Modern, responsive design
- Contact form with email notifications via Resend
- Service showcase
- Testimonials section
- About page with company information

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/streamlined-cleaning.git
   cd streamlined-cleaning
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Email Setup with Resend

The contact form will work without email setup, but to receive email notifications:

### Setting Up Resend

1. **Create a Resend Account**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account (100 emails/day free)

2. **Get Your API Key**
   - In the Resend dashboard, go to API Keys
   - Create a new API key
   - Copy the API key

3. **Add Environment Variable**
   Create a `.env.local` file in the root directory:
   \`\`\`
   RESEND_API_KEY=your_resend_api_key_here
   \`\`\`

4. **Verify Your Domain (Optional but Recommended)**
   - In the Resend dashboard, go to Domains
   - Add your domain and verify it
   - Once verified, update the "from" email in app/actions/contact.ts

5. **Restart Your Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in the Vercel dashboard:
   - `RESEND_API_KEY` (for email notifications)
4. Deploy

### Deploy to Other Platforms

This Next.js app can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Testing the Contact Form

### Without Email Setup
- Form submissions will be logged to the console
- Users will see a success message
- Check the server logs to see form data

### With Email Setup
- Form submissions will be emailed to streamlinedcleaningsolutions@gmail.com
- Check your email inbox for notifications

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [Resend](https://resend.com/) - Email delivery

## Contact

Streamlined Cleaning Solutions
- Phone: (863) 662-2847
- Email: streamlinedcleaningsolutions@gmail.com
- Address: 5522 Autumn Ridge Rd, Lakeland, FL

## License

This project is licensed under the MIT License - see the LICENSE file for details.
