import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Sparkles,
  Clock,
  Shield,
  Menu,
  X,
  Home as HomeIcon,
  Building2,
} from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setNavOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>Streamlined Cleaning Solutions | Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jeremy Bell" />
        <meta
          property="og:title"
          content="Streamlined Cleaning Solutions | Professional Cleaning Services"
        />
        <meta
          property="og:description"
          content="Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed."
        />
        <meta property="og:url" content="https://streamlinedcleaningsolutions.com" />
        <meta property="og:type" content="website" />
      </Head>

      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Streamlined Cleaning Solutions",
            image: "https://streamlinedcleaningsolutions.com/images/logo_transparent.png",
            "@id": "https://streamlinedcleaningsolutions.com",
            url: "https://streamlinedcleaningsolutions.com",
            telephone: "+1-863-662-2874",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5522 Autumn Ridge Rd",
              addressLocality: "Lakeland",
              addressRegion: "FL",
              postalCode: "33805",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.1062,
              longitude: -81.8971,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "08:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.facebook.com/streamlinedcleaningsolutions",
              "https://twitter.com/StreamlinedCS",
            ],
            priceRange: "$$",
            description:
              "Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "20",
            },
          }),
        }}
      />

      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo_transparent.png"
              alt="Streamlined Cleaning Solutions Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="font-extrabold text-xl text-black select-none">
              Streamlined Cleaning
            </span>
          </Link>

          <ul className="hidden md:flex items-center space-x-8 text-black font-semibold">
            <li>
              <Link href="#services" className="hover:text-gray-700 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-gray-700 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-gray-700 transition">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-700 transition">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-black text-white rounded-md px-5 py-2 hover:bg-gray-800 transition"
              >
                Book Now
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {navOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <ul className="flex flex-col space-y-3 px-6 py-4 text-black font-semibold">
              <li>
                <Link href="#services" onClick={() => setNavOpen(false)} className="block py-2 hover:text-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" onClick={() => setNavOpen(false)} className="block py-2 hover:text-gray-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" onClick={() => setNavOpen(false)} className="block py-2 hover:text-gray-700">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setNavOpen(false)} className="block py-2 hover:text-gray-700">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block bg-black text-white rounded-md px-5 py-3 text-center hover:bg-gray-800 transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="relative min-h-screen flex flex-col text-black bg-white">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center space-y-6 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Streamlined Cleaning Solutions
            </h1>
            <p className="text-lg sm:text-xl max-w-lg mx-auto lg:mx-0">
              Professional cleaning services tailored to your needs. We make your space
              shine so you can focus on what matters.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-black hover:bg-gray-800 text-white font-semibold rounded-md px-7 py-3 transition-shadow shadow-lg"
              >
                Book Now
              </a>
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold"
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] mx-auto">
            <Image
              src="/images/logo_transparent.png"
              alt="Streamlined Cleaning Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section
          aria-label="Benefits Section"
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          {[{
              icon: <Sparkles className="h-10 w-10 text-black" />,
              title: "Spotless Results",
              description: "Our thorough cleaning process ensures your space is immaculate.",
            },
            {
              icon: <Clock className="h-10 w-10 text-black" />,
              title: "Reliable Service",
              description: "We arrive on time, every time, with all the supplies needed.",
            },
            {
              icon: <Shield className="h-10 w-10 text-black" />,
              title: "Trusted Team",
              description: "Our vetted professionals are background-checked and trained.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-black" />,
              title: "Satisfaction Guaranteed",
              description: "Not happy? We'll come back and make it right at no extra cost.",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              {icon}
              <h3 className="mt-4 mb-2 text-xl font-semibold">{title}</h3>
              <p className="max-w-xs">{description}</p>
            </div>
          ))}
        </section>

        {/* Services Section */}
        <section
          id="services"
          aria-label="Services Section"
          className="mt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Residential Cleaning"
              description="Comprehensive home cleaning services customized to your preferences and schedule."
              icon={<HomeIcon className="h-8 w-8 text-black" />}
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Reliable cleaning for offices, apartment complexes, and commercial spaces."
              icon={<Building2 className="h-8 w-8 text-black" />}
            />
            <ServiceCard
              title="Move In / Move Out"
              description="Specialized cleaning for a fresh start in your new home or after moving out."
              icon={<CheckCircle className="h-8 w-8 text-black" />}
            />
          </div>
        </section>

        {/* Pricing / What's Included Section */}
        <section
          id="pricing"
          aria-label="Pricing Section"
          className="mt-24 bg-gray-50 py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
          <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside text-lg">
            <li>Dusting and wiping all surfaces</li>
            <li>Vacuuming and mopping floors</li>
            <li>Cleaning kitchen appliances and counters</li>
            <li>Bathroom scrubbing and sanitizing</li>
            <li>Trash removal and recycling</li>
            <li>Deep cleaning options available upon request</li>
          </ul>
          <div className="flex justify-center mt-10">
            <a
              href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="bg-black text-white rounded-md px-7 py-3 font-semibold hover:bg-gray-800 transition"
            >
              Book Your Cleaning
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          aria-label="Testimonials Section"
          className="mt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TestimonialCard
              author="Sarah M."
              quote="Streamlined Cleaning did an amazing job on my apartment. They were thorough and professional!"
            />
            <TestimonialCard
              author="Michael B."
              quote="Reliable and friendly staff. I trust them with my office cleaning needs."
            />
            <TestimonialCard
              author="Emily R."
              quote="Excellent move-in cleaning service. Made my new home feel brand new!"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          aria-label="Contact Section"
          className="mt-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <ContactForm />
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
