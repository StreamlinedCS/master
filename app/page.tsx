import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Sparkles,
  Clock,
  Shield,
  Home,
  Building2,
  Scan,
  Truck,
  Hammer,
  Star,
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
    <main className="relative min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat brightness-75"
        style={{ backgroundImage: "url('/images/background-cleaning.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex-grow flex flex-col px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="max-w-xl flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg leading-tight">
              Streamlined Cleaning Solutions
            </h1>
            <p className="text-lg sm:text-xl drop-shadow-md max-w-lg mx-auto lg:mx-0">
              Professional cleaning services tailored to your needs. We make your space shine so you can focus on what matters.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <a
                href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                target="_top"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 text-white font-semibold rounded-md px-8 py-3 transition-shadow shadow-lg"
              >
                Book Now
              </a>
              <Button
                asChild
                variant="default"
                size="lg"
                className="w-auto"
              >
                <Link
                  href="#services"
                  className="text-blue-400 font-semibold hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Our Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Logo Image */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 drop-shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Streamlined Cleaning Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            {
              icon: <Sparkles className="mx-auto h-12 w-12 text-blue-400" />,
              title: "Spotless Results",
              description: "Our thorough cleaning process ensures your space is immaculate.",
            },
            {
              icon: <Clock className="mx-auto h-12 w-12 text-blue-400" />,
              title: "Reliable Service",
              description: "We arrive on time, every time, with all the supplies needed.",
            },
            {
              icon: <Shield className="mx-auto h-12 w-12 text-blue-400" />,
              title: "Trusted Team",
              description: "Our vetted professionals are background-checked and trained.",
            },
            {
              icon: <CheckCircle className="mx-auto h-12 w-12 text-blue-400" />,
              title: "Satisfaction Guaranteed",
              description: "Not happy? We'll come back and make it right at no extra cost.",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-center">
              {icon}
              <h3 className="mt-4 mb-2 text-2xl font-semibold drop-shadow-lg">{title}</h3>
              <p className="max-w-xs drop-shadow-md text-gray-300">{description}</p>
            </div>
          ))}
        </section>

        {/* Services Section */}
        <section id="services" className="mt-24">
          <h2 className="text-3xl font-bold mb-10 text-center drop-shadow-lg">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ServiceCard
              title="Residential Cleaning"
              description="Comprehensive home cleaning services customized to your preferences and schedule."
              icon={<Home className="h-8 w-8 text-blue-400" />}
              whiteText
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Professional cleaning solutions for offices, retail spaces, and commercial properties."
              icon={<Building2 className="h-8 w-8 text-blue-400" />}
              whiteText
            />
            <ServiceCard
              title="Deep Cleaning"
              description="Thorough cleaning of hard-to-reach areas and detailed attention to every surface."
              icon={<Scan className="h-8 w-8 text-blue-400" />}
              whiteText
            />
            <ServiceCard
              title="Move In/Out Cleaning"
              description="Prepare your new home or leave your old one spotless with our specialized service."
              icon={<Truck className="h-8 w-8 text-blue-400" />}
              whiteText
            />
            <ServiceCard
              title="Post-Construction"
              description="Remove dust, debris, and construction residue after renovation or building projects."
              icon={<Hammer className="h-8 w-8 text-blue-400" />}
              whiteText
            />
            <ServiceCard
              title="Specialized Services"
              description="Carpet cleaning, window washing, and other specialized cleaning solutions."
              icon={<Star className="h-8 w-8 text-blue-400" />}
              whiteText
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 w-auto shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-10 text-center drop-shadow-lg">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <TestimonialCard
              quote="Streamlined Cleaning Solutions transformed my home. Their attention to detail is remarkable!"
              author="Sarah"
              role="Homeowner"
              rating={5}
              whiteText
            />
            <TestimonialCard
              quote="As a business owner, I need reliable cleaning services. They never disappoint and always exceed expectations."
              author="Michael"
              role="Office Manager"
              rating={5}
              whiteText
            />
            <TestimonialCard
              quote="I've tried many cleaning services, but none compare to the quality and consistency of Streamlined Cleaning."
              author="Jennifer"
              role="Property Manager"
              rating={5}
              whiteText
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mt-24 mb-24 max-w-3xl mx-auto bg-gray-800 bg-opacity-80 rounded-xl p-10 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">Contact Us</h2>
          <ContactForm />
        </section>

        {/* Footer */}
        <SiteFooter whiteText />
      </div>
    </main>
  )
}
