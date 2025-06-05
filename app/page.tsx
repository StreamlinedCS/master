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
  PhoneCall,
  Facebook,
  Twitter,
  Star,
} from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";
import ServiceCard from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";
import { useEffect } from "react";

export default function Home() {
  // Add smooth scroll behavior on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Streamlined Cleaning Solutions | Professional Cleaning Services
        </title>
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
              "Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "20",
            },
          }),
        }}
      />

      <main className="relative min-h-screen flex flex-col text-black bg-white selection:bg-yellow-300 selection:text-black">
        {/* Background image fixed with opacity and blur */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20 filter blur-sm"
          style={{ backgroundImage: "url('/images/background-cleaning.png')" }}
        />

        <div className="relative z-10 flex-grow flex flex-col px-6 md:px-12 lg:px-24 py-12 pb-48">
          {/* Hero Section */}
          <section
            className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12
          animate-fade-in"
          >
            <div className="flex flex-col justify-center space-y-6 max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Streamlined Cleaning Solutions
              </h1>
              <p className="text-lg sm:text-xl max-w-lg text-gray-800">
                Professional cleaning services tailored to your needs. We make your
                space shine so you can focus on what matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                  target="_top"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-black hover:bg-gray-900 text-white font-semibold rounded-md px-7 py-3 transition-shadow shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
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

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/logo_transparent.png"
                alt="Streamlined Cleaning Solutions Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 72vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section
            className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 animate-fade-in delay-200"
            aria-label="Benefits of choosing Streamlined Cleaning Solutions"
          >
            {[
              {
                icon: <Sparkles className="h-10 w-10 text-yellow-500" />,
                title: "Spotless Results",
                description:
                  "Our thorough cleaning process ensures your space is immaculate.",
              },
              {
                icon: <Clock className="h-10 w-10 text-yellow-500" />,
                title: "Reliable Service",
                description:
                  "We arrive on time, every time, with all the supplies needed.",
              },
              {
                icon: <Shield className="h-10 w-10 text-yellow-500" />,
                title: "Trusted Team",
                description:
                  "Our vetted professionals are background-checked and trained.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-yellow-500" />,
                title: "Satisfaction Guaranteed",
                description:
                  "Not happy? We'll come back and make it right at no extra cost.",
              },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {icon}
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="max-w-xs text-gray-700">{description}</p>
              </div>
            ))}
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="max-w-7xl mx-auto mt-24 animate-fade-in delay-400"
          >
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
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-100 focus:ring-yellow-400"
                asChild
              >
                <Link href="#pricing" aria-label="Jump to Pricing section">
                  View Pricing
                </Link>
              </Button>
            </div>
          </section>

          {/* Pricing Section */}
          <section
            id="pricing"
            className="max-w-5xl mx-auto mt-24 px-4 py-8 bg-yellow-50 rounded-lg shadow-md animate-fade-in delay-600"
            aria-label="Service Pricing"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Standard Cleaning",
                  price: "$99",
                  features: [
                    "Kitchen, bathrooms, living areas",
                    "Dusting and vacuuming",
                    "Trash removal",
                    "1-2 hours",
                  ],
                },
                {
                  title: "Deep Cleaning",
                  price: "$199",
                  features: [
                    "Includes Standard Cleaning",
                    "Baseboards, windows, vents",
                    "Appliance exteriors",
                    "3-4 hours",
                  ],
                },
                {
                  title: "Move In/Out Cleaning",
                  price: "$249",
                  features: [
                    "Includes Deep Cleaning",
                    "Inside cabinets and closets",
                    "Carpet spot treatment",
                    "4-6 hours",
                  ],
                },
              ].map(({ title, price, features }) => (
                <div
                  key={title}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
                >
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p className="text-4xl font-extrabold mb-6 text-yellow-600">{price}</p>
                  <ul className="mb-6 text-gray-700 flex-grow">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 mb-2"
                        aria-label={feature}
                      >
                        <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="yellow"
                    className="w-full mt-auto"
                    asChild
                  >
                    <a
                      href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                      target="_top"
                      rel="nofollow noopener noreferrer"
                      aria-label={`Book ${title} service`}
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="max-w-7xl mx-auto mt-24 animate-fade-in delay-800"
            aria-label="Customer Testimonials"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: "Sarah M.",
                  photo: "/images/customers/sarah.jpg",
                  rating: 5,
                  comment:
                    "Streamlined Cleaning Solutions did an amazing job cleaning my home. They were prompt, professional, and thorough!",
                },
                {
                  id: 2,
                  name: "Michael B.",
                  photo: "/images/customers/michael.jpg",
                  rating: 4,
                  comment:
                    "Great service with attention to detail. Highly recommend for anyone needing reliable cleaning.",
                },
                {
                  id: 3,
                  name: "Jessica L.",
                  photo: "/images/customers/jessica.jpg",
                  rating: 5,
                  comment:
                    "I love how spotless my apartment was after their deep cleaning service. Friendly and efficient team.",
                },
              ].map(({ id, name, photo, rating, comment }) => (
                <blockquote
                  key={id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={photo}
                      alt={`Photo of ${name}`}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{name}</p>
                      <StarRating rating={rating} />
                    </div>
                  </div>
                  <p className="text-gray-700 italic">“{comment}”</p>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="max-w-4xl mx-auto mt-24 mb-24 animate-fade-in delay-1000"
            aria-label="Contact Streamlined Cleaning Solutions"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <ContactForm />
          </section>
        </div>

        <SiteFooter />
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}

// StarRating component to display colored stars based on rating
function StarRating({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-1"
    >
      {[1, 2, 3, 4, 5].map((star) =>
        star <= rating ? (
          <StarFilled key={star} />
        ) : (
          <StarEmpty key={star} />
        )
      )}
    </div>
  );
}

function StarFilled() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <title>Filled star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.955c.3.92-.755 1.688-1.54 1.118l-3.37-2.455a1 1 0 00-1.175 0l-3.37 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.036 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
    </svg>
  );
}

function StarEmpty() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <title>Empty star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.955c.3.92-.755 1.688-1.54 1.118l-3.37-2.455a1 1 0 00-1.175 0l-3.37 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.036 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
    </svg>
  );
}
