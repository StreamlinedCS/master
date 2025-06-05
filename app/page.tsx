import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Sparkles,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";
import ServiceCard from "@/components/service-card";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Streamlined Cleaning Solutions | Professional Cleaning Services in Lakeland, FL
        </title>
        <meta
          name="description"
          content="Professional residential and commercial cleaning services in Lakeland, FL. Quality, reliable cleaning with satisfaction guaranteed."
        />
        <meta
          name="keywords"
          content="cleaning services, residential cleaning, commercial cleaning, Lakeland FL, deep cleaning, move-in cleaning, post-construction cleaning"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jeremy Bell" />
        <meta
          name="google-site-verification"
          content="0GXeUMv_9ji0wuK4hPeI4CkmgptM4aJyzDnTIaoD25U"
        />
        <meta
          property="og:title"
          content="Streamlined Cleaning Solutions | Professional Cleaning Services in Lakeland, FL"
        />
        <meta
          property="og:description"
          content="Professional residential and commercial cleaning services in Lakeland, FL. Quality, reliable cleaning with satisfaction guaranteed."
        />
        <meta property="og:url" content="https://streamlinedcleaningsolutions.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
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
            image:
              "https://streamlinedcleaningsolutions.com/images/logo_transparent.png",
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
              "Professional residential and commercial cleaning services in Lakeland, FL. Quality, reliable cleaning with satisfaction guaranteed.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "20",
            },
          }),
        }}
      />

      <main className="relative min-h-screen flex flex-col text-black bg-white selection:bg-yellow-300 selection:text-black">
        {/* Background image with blur */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20 filter blur-sm"
          style={{ backgroundImage: "url('/images/background-cleaning.png')" }}
        />

        <div className="relative z-10 flex-grow flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 py-10 md:py-16 pb-40 md:pb-48">
          {/* Hero Section */}
          <section
            className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-14 md:gap-20 animate-fade-in"
            aria-label="Hero introduction"
          >
            <div className="flex flex-col justify-center space-y-5 sm:space-y-6 max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Streamlined Cleaning Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-lg text-gray-800">
                Professional cleaning services tailored to your needs. We make your
                space shine so you can focus on what matters.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                  target="_top"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-black hover:bg-gray-900 text-white font-semibold rounded-md px-6 py-3 transition-shadow shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                >
                  Book now
                </a>
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                >
                  <Link href="#services" aria-label="Jump to Our Services section">
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/logo_transparent.png"
                alt="Streamlined Cleaning Solutions Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 400px"
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section
            className="max-w-7xl mx-auto mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
            aria-label="Benefits of choosing Streamlined Cleaning Solutions"
          >
            {[
              {
                icon: <Sparkles className="h-10 w-10 text-yellow-500" aria-hidden="true" />,
                title: "Spotless Results",
                description:
                  "Our thorough cleaning process ensures your space is immaculate.",
              },
              {
                icon: <Clock className="h-10 w-10 text-yellow-500" aria-hidden="true" />,
                title: "Reliable Service",
                description:
                  "We arrive on time, every time, with all the supplies needed.",
              },
              {
                icon: <Shield className="h-10 w-10 text-yellow-500" aria-hidden="true" />,
                title: "Trusted Team",
                description:
                  "Our vetted professionals are background-checked and trained.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-yellow-500" aria-hidden="true" />,
                title: "Satisfaction Guaranteed",
                description:
                  "Not happy? We'll come back and make it right at no extra cost.",
              },
            ].map(({ icon, title, description }) => (
              <article
                key={title}
                className="flex flex-col items-center text-center bg-white rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                tabIndex={0}
                aria-label={title}
              >
                {icon}
                <h3 className="mt-3 mb-1 text-lg sm:text-xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="max-w-xs text-gray-700 text-sm sm:text-base">{description}</p>
              </article>
            ))}
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="max-w-7xl mx-auto mt-20 animate-fade-in delay-200"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
            <div className="flex justify-center mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 sm:px-10"
                aria-label="See all cleaning services"
              >
                <Link href="/services">See All Services</Link>
              </Button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="max-w-7xl mx-auto mt-20 mb-16 animate-fade-in delay-400"
            aria-label="Customer testimonials"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  author: "Jane M.",
                  rating: 5,
                  quote:
                    "Streamlined Cleaning Solutions exceeded my expectations! My home has never looked better.",
                },
                {
                  author: "Carlos T.",
                  rating: 5,
                  quote:
                    "Reliable and thorough. They did a fantastic job cleaning our office space.",
                },
                {
                  author: "Melissa W.",
                  rating: 5,
                  quote:
                    "The team was professional and friendly. Highly recommend their deep cleaning service!",
                },
                {
                  author: "Kevin B.",
                  rating: 5,
                  quote:
                    "Affordable and excellent service. They made moving out so much easier with their move-out cleaning.",
                },
                {
                  author: "Emily R.",
                  rating: 5,
                  quote:
                    "I appreciate their attention to detail and consistent quality every time.",
                },
                {
                  author: "Sean P.",
                  rating: 5,
                  quote:
                    "Fast, efficient, and trustworthy. Will definitely use Streamlined Cleaning Solutions again.",
                },
              ].map(({ author, rating, quote }) => (
                <blockquote
                  key={author}
                  className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col"
                  tabIndex={0}
                  aria-label={`Testimonial from ${author}`}
                >
                  <p className="text-gray-900 italic mb-4 flex-grow">{`"${quote}"`}</p>
                  <footer className="mt-4 flex items-center justify-between">
                    <div aria-label={`${rating} out of 5 stars`} role="img" className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) =>
                        i < rating ? (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <Star
                            key={i}
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        )
                      )}
                    </div>
                    <cite className="not-italic font-semibold text-gray-800">{author}</cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="max-w-3xl mx-auto mt-20 mb-20 px-4 sm:px-6 md:px-8"
            aria-label="Contact form"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
              Get in Touch
            </h2>
            <ContactForm />
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
