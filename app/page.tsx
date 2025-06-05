import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Sparkles,
  Clock,
  Shield,
  PhoneCall,
  Facebook,
  Twitter,
} from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col text-black">
      {/* Fixed full opacity background image */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background-cleaning.png')" }}
      />

      {/* Page content container */}
      <div className="relative z-10 flex-grow flex flex-col px-6 md:px-12 lg:px-24 py-12 pb-48">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-col justify-center space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg leading-tight text-black">
              Streamlined Cleaning Solutions
            </h1>
            <p className="text-lg sm:text-xl drop-shadow-md max-w-lg text-black">
              Professional cleaning services tailored to your needs. We make
              your space shine so you can focus on what matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                target="_top"
                rel="nofollow"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-7 py-3 transition-shadow shadow-lg"
              >
                Book now
              </a>
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image
              src="/images/logo_transparent.png"
              alt="Streamlined Cleaning Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Sparkles className="h-10 w-10 text-black" />,
              title: "Spotless Results",
              description:
                "Our thorough cleaning process ensures your space is immaculate.",
            },
            {
              icon: <Clock className="h-10 w-10 text-black" />,
              title: "Reliable Service",
              description:
                "We arrive on time, every time, with all the supplies needed.",
            },
            {
              icon: <Shield className="h-10 w-10 text-black" />,
              title: "Trusted Team",
              description:
                "Our vetted professionals are background-checked and trained.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-black" />,
              title: "Satisfaction Guaranteed",
              description:
                "Not happy? We'll come back and make it right at no extra cost.",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center text-black">
              {icon}
              <h3 className="mt-4 mb-2 text-xl font-semibold drop-shadow-lg">{title}</h3>
              <p className="max-w-xs drop-shadow-md">{description}</p>
            </div>
          ))}
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto mt-24 text-black">
          <h2 className="text-3xl font-bold mb-8 drop-shadow-lg text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Residential Cleaning"
              description="Comprehensive home cleaning services customized to your preferences and schedule."
              icon="Home"
              whiteText={false}
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Professional cleaning solutions for offices, retail spaces, and commercial properties."
              icon="Building2"
              whiteText={false}
            />
            <ServiceCard
              title="Deep Cleaning"
              description="Thorough cleaning of hard-to-reach areas and detailed attention to every surface."
              icon="Scan"
              whiteText={false}
            />
            <ServiceCard
              title="Move In/Out Cleaning"
              description="Prepare your new home or leave your old one spotless with our specialized service."
              icon="Truck"
              whiteText={false}
            />
            <ServiceCard
              title="Post-Construction"
              description="Remove dust, debris, and construction residue after renovation or building projects."
              icon="Hammer"
              whiteText={false}
            />
            <ServiceCard
              title="Specialized Services"
              description="Carpet cleaning, window washing, and other specialized cleaning solutions."
              icon="Star"
              whiteText={false}
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 w-auto text-white"
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto mt-24 text-black">
          <h2 className="text-3xl font-bold mb-8 drop-shadow-lg text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TestimonialCard
              quote="Streamlined Cleaning Solutions transformed my home. Their attention to detail is remarkable!"
              author="Sarah"
              role="Homeowner"
              rating={5}
              whiteText={false}
            />
            <TestimonialCard
              quote="As a business owner, I need reliable cleaning services. They never disappoint and always exceed expectations."
              author="Michael"
              role="Office Manager"
              rating={5}
              whiteText={false}
            />
            <TestimonialCard
              quote="I've tried many cleaning services, but none compare to the quality and consistency of Streamlined Cleaning."
              author="Jennifer"
              role="Property Manager"
              rating={5}
              whiteText={false}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-transparent text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-black">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready for a Cleaner Space?
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us today for a free quote or to schedule your cleaning service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneCall className="h-6 w-6 text-black" />
                  <span className="text-lg font-medium">Call us: (863) 662-2847</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Service Areas</h3>
                  <p className="text-gray-700">
                    We proudly serve the greater metropolitan area and surrounding suburbs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.facebook.com/streamlined.cleaning.solution.s.2025/?viewas=100000686899395"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-800 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="https://x.com/StreamlinedCS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-800 transition-colors"
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
        <SiteFooter whiteText={false} />
      </div>
    </main>
  )
}
