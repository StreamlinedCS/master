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
} from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")

  // Smooth scroll + active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "contact"]
      let current = ""
      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section && window.scrollY >= section.offsetTop - 150) {
          current = id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen flex flex-col font-sans text-gray-900 bg-gradient-to-b from-white/90 via-white/70 to-white/90">

      {/* Background image with subtle dark overlay for text contrast */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background-cleaning.png')" }}
      />
      <div aria-hidden="true" className="fixed inset-0 -z-5 bg-black opacity-30" />

      {/* Container */}
      <div className="relative z-10 flex-grow flex flex-col px-8 md:px-16 lg:px-32 py-16 max-w-7xl mx-auto">

        {/* Header with logo and navigation */}
        <header className="flex items-center justify-between mb-16">
          <div className="relative w-28 h-14 sm:w-36 sm:h-18">
            <Image
              src="/images/logo.png"
              alt="Streamlined Cleaning Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <nav className="hidden md:flex space-x-10 text-lg font-semibold">
            <a
              href="#services"
              className={`cursor-pointer transition-colors duration-300 hover:text-blue-600 ${
                activeSection === "services"
                  ? "text-blue-700 underline underline-offset-4"
                  : "text-gray-700"
              }`}
            >
              Services
            </a>
            <a
              href="#contact"
              className={`cursor-pointer transition-colors duration-300 hover:text-blue-600 ${
                activeSection === "contact"
                  ? "text-blue-700 underline underline-offset-4"
                  : "text-gray-700"
              }`}
            >
              Contact
            </a>
            <a
              href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
              target="_top"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg transition"
            >
              Book Now
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
              Streamlined Cleaning Solutions
            </h1>
            <p className="text-xl text-gray-800 drop-shadow-md">
              Professional cleaning services tailored to your needs. We make your space shine so you can focus on what matters.
            </p>
            <div className="flex justify-center lg:justify-start gap-6 mt-6">
              <Link
                href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                target="_top"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 shadow-lg transition-transform transform hover:scale-105"
              >
                Book Now
              </Link>
              <a
                href="#services"
                className="inline-block border-2 border-blue-600 text-blue-600 font-semibold rounded-lg px-8 py-4 hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] drop-shadow-xl">
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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-28 text-center">
          {[
            {
              icon: <Sparkles className="mx-auto h-12 w-12 text-blue-600" />,
              title: "Spotless Results",
              description: "Our thorough cleaning process ensures your space is immaculate.",
            },
            {
              icon: <Clock className="mx-auto h-12 w-12 text-blue-600" />,
              title: "Reliable Service",
              description: "We arrive on time, every time, with all the supplies needed.",
            },
            {
              icon: <Shield className="mx-auto h-12 w-12 text-blue-600" />,
              title: "Trusted Team",
              description: "Our vetted professionals are background-checked and trained.",
            },
            {
              icon: <CheckCircle className="mx-auto h-12 w-12 text-blue-600" />,
              title: "Satisfaction Guaranteed",
              description: "Not happy? We'll come back and make it right at no extra cost.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {icon}
              <h3 className="mt-6 mb-2 text-2xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </section>

        {/* Services Section */}
        <section id="services" className="mb-32">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 drop-shadow-md">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <ServiceCard
              title="Residential Cleaning"
              description="Comprehensive home cleaning services customized to your preferences and schedule."
              icon={<Home className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Professional cleaning solutions for offices, retail spaces, and commercial properties."
              icon={<Building2 className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard
              title="Deep Cleaning"
              description="Thorough cleaning of hard-to-reach areas and detailed attention to every surface."
              icon={<Scan className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard
              title="Move In/Out Cleaning"
              description="Prepare your new home or leave your old one spotless with our specialized service."
              icon={<Truck className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard
              title="Post-Construction"
              description="Remove dust, debris, and construction residue after renovation or building projects."
              icon={<Hammer className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard
              title="Specialized Services"
              description="Carpet cleaning, window washing, and other specialized cleaning solutions."
              icon={<Star className="h-8 w-8 text-blue-600" />}
            />
          </div>
          <div className="flex justify-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 drop-shadow-md">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <TestimonialCard
              quote="Streamlined Cleaning Solutions transformed my home. Their attention to detail is remarkable!"
              author="Sarah"
              role="Homeowner"
            />
            <TestimonialCard
              quote="As a business owner, I need reliable cleaning services. They never disappoint and always exceed expectations."
              author="Michael"
              role="Office Manager"
            />
            <TestimonialCard
              quote="I've tried many cleaning services, but none compare to the quality and consistency of Streamlined Cleaning."
              author="Jennifer"
              role="Property Manager"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mb-24 max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-12"
          aria-label="Contact form"
        >
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 drop-shadow-md">
            Contact Us
          </h2>
          <ContactForm />
        </section>
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
