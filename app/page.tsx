import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Clock, Shield, PhoneCall } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"
import { Facebook, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/home-background.jpg')",
        }}
      >
        <div className="container px-4 md:px-6 text-center text-white max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to Streamlined Cleaning Solutions
          </h1>
          <p className="text-lg sm:text-2xl mb-8 drop-shadow-md">
            We turn your mess into spotless perfection. Serving homes, offices, and apartments with precision and care.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              target="_top"
              href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
              rel="nofollow"
              style={{
                backgroundColor: "#006aff",
                border: "none",
                color: "white",
                height: "48px",
                textTransform: "uppercase",
                fontFamily: "'Square Market', sans-serif",
                letterSpacing: "1px",
                lineHeight: "48px",
                padding: "0 30px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Book now
            </a>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white" id="services">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Cleaning Solutions</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Tailored cleaning services to meet your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Residential Cleaning"
              description="Comprehensive home cleaning services customized to your preferences and schedule."
              icon="Home"
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Professional cleaning solutions for offices, retail spaces, and commercial properties."
              icon="Building2"
            />
            <ServiceCard
              title="Deep Cleaning"
              description="Thorough cleaning of hard-to-reach areas and detailed attention to every surface."
              icon="Scan"
            />
            <ServiceCard
              title="Move In/Out Cleaning"
              description="Prepare your new home or leave your old one spotless with our specialized service."
              icon="Truck"
            />
            <ServiceCard
              title="Post-Construction"
              description="Remove dust, debris, and construction residue after renovation or building projects."
              icon="Hammer"
            />
            <ServiceCard
              title="Specialized Services"
              description="Carpet cleaning, window washing, and other specialized cleaning solutions."
              icon="Star"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Don’t just take our word for it. Here’s what our satisfied customers have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Streamlined Cleaning Solutions transformed my home. Their attention to detail is remarkable!"
              author="Sarah"
              role="Homeowner"
              rating={5}
            />
            <TestimonialCard
              quote="As a business owner, I need reliable cleaning services. They never disappoint and always exceed expectations."
              author="Michael"
              role="Office Manager"
              rating={5}
            />
            <TestimonialCard
              quote="I've tried many cleaning services, but none compare to the quality and consistency of Streamlined Cleaning."
              author="Jennifer"
              role="Property Manager"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-50" id="contact">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for a Cleaner Space?</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Get in touch with us today for a free quote or to schedule your cleaning service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneCall className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-medium">Call us: (863) 662-2874</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Service Areas</h3>
                <p className="text-gray-600">We proudly serve Lakeland FL and surrounding areas.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/streamlined.cleaning.solution.s.2025/?viewas=100000686899395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://x.com/StreamlinedCS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">X (Twitter)</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
