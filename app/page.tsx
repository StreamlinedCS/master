import Head from "next/head"
import Script from "next/script"
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
    <>
      <Head>
        <title>Streamlined Cleaning Solutions | Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed."
        />
        <meta
          name="keywords"
          content="cleaning services, residential cleaning, commercial cleaning, Lakeland, Florida, deep cleaning, move-in cleaning, post-construction cleaning"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jeremy Bell" />
        <meta
          name="google-site-verification"
          content="0GXeUMv_9ji0wuK4hPeI4CkmgptM4aJyzDnTIaoD25U"
        />
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

      <main className="relative min-h-screen flex flex-col text-black">
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/background-cleaning.png')" }}
        />

        <div className="relative z-10 flex-grow flex flex-col px-6 md:px-12 lg:px-24 py-12 pb-48">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col justify-center space-y-6 max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Streamlined Cleaning Solutions
              </h1>
              <p className="text-lg sm:text-xl max-w-lg">
                Professional cleaning services tailored to your needs. We make your space
                shine so you can focus on what matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                  target="_top"
                  rel="nofollow"
                  className="inline-block bg-black hover:bg-gray-800 text-white font-semibold rounded-md px-7 py-3 transition-shadow shadow-lg"
                >
                  Book now
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

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
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
          <section className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
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
                description:
                  "Not happy? We'll come back and make it right at no extra cost.",
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
          <section id="services" className="max-w-7xl mx-auto mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
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
                className="bg-black hover:bg-gray-800 w-auto text-white font-semibold"
              >
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </section>

          {/* WHAT'S INCLUDED Section */}
          <section
            id="whats-included"
            className="max-w-7xl mx-auto mt-20 px-6 md:px-0"
          >
            <div className="bg-white rounded-lg shadow-lg p-10 text-black max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                What’s Included
              </h2>
              <p className="mb-8 text-center text-lg">
                At Streamlined Cleaning Solutions, we keep things transparent so you know exactly what you’re getting. Here's what each service includes:
              </p>

              <div className="space-y-6 max-w-md mx-auto">
                <div>
                  <p className="flex items-center gap-2 text-lg font-semibold">
                    <span className="text-green-600">✅</span> Standard Clean
                  </p>
                  <p className="ml-7 mt-1">
                    A general surface cleaning to keep your home tidy.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Add-ons available for:</p>
                  <ul className="list-disc list-inside ml-7 space-y-1">
                    <li>Baseboards ($25)</li>
                    <li>Fridge Interior ($25)</li>
                    <li>Oven Interior ($25)</li>
                    <li>Interior Windows ($20)</li>
                    <li>Pet ($35)</li>
                  </ul>
                </div>
              </div>

              {/* Pricing Table below */}
              <div className="overflow-x-auto mt-12">
                <table className="w-full text-left border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border border-gray-300">Service Type</th>
                      <th className="py-3 px-4 border border-gray-300">0–999 sq ft</th>
                      <th className="py-3 px-4 border border-gray-300">1000–1499 sq ft</th>
                      <th className="py-3 px-4 border border-gray-300">1500–1999 sq ft</th>
                      <th className="py-3 px-4 border border-gray-300">2000–2499 sq ft</th>
                      <th className="py-3 px-4 border border-gray-300">2500–2999 sq ft</th>
                      <th className="py-3 px-4 border border-gray-300">3000+ sq ft</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-semibold">Standard Clean</td>
                      <td className="py-3 px-4 border border-gray-300">$120</td>
                      <td className="py-3 px-4 border border-gray-300">$195</td>
                      <td className="py-3 px-4 border border-gray-300">$270</td>
                      <td className="py-3 px-4 border border-gray-300">$345</td>
                      <td className="py-3 px-4 border border-gray-300">$420</td>
                      <td className="py-3 px-4 border border-gray-300">Custom Quote</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-semibold">Deep Clean</td>
                      <td className="py-3 px-4 border border-gray-300">$190</td>
                      <td className="py-3 px-4 border border-gray-300">$265</td>
                      <td className="py-3 px-4 border border-gray-300">$340</td>
                      <td className="py-3 px-4 border border-gray-300">$415</td>
                      <td className="py-3 px-4 border border-gray-300">$490</td>
                      <td className="py-3 px-4 border border-gray-300">Custom Quote</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-semibold">Move-In/Out</td>
                      <td className="py-3 px-4 border border-gray-300">$220</td>
                      <td className="py-3 px-4 border border-gray-300">$295</td>
                      <td className="py-3 px-4 border border-gray-300">$370</td>
                      <td className="py-3 px-4 border border-gray-300">$445</td>
                      <td className="py-3 px-4 border border-gray-300">$520</td>
                      <td className="py-3 px-4 border border-gray-300">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="max-w-7xl mx-auto mt-28 px-6 md:px-0">
            <h2 className="text-3xl font-bold mb-10 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Alice M.",
                  text: "Streamlined Cleaning Solutions did a fantastic job with our office. Very professional and thorough!",
                  rating: 5,
                },
                {
                  name: "Michael T.",
                  text: "Our home has never looked better. Highly recommend their deep cleaning service.",
                  rating: 5,
                },
                {
                  name: "Sara L.",
                  text: "Fast, friendly, and affordable. They handled our move-out cleaning flawlessly.",
                  rating: 5,
                },
              ].map(({ name, text, rating }) => (
                <div
                  key={name}
                  className="bg-white rounded-lg shadow-lg p-8 text-black"
                >
                  <p className="mb-4 italic">"{text}"</p>
                  <div className="flex items-center mb-3">
                    {/* Display filled stars with Unicode */}
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="font-semibold text-right">— {name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="max-w-7xl mx-auto mt-28 mb-16 px-6 md:px-0"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <ContactForm />
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  )
}
