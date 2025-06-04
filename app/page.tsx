import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Clock, Shield, PhoneCall, Facebook, Twitter } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <>
      {/* Background Image with subtle dark gradient overlay */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/images/background-cleaning.png"
          alt="Cleaning background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="/images/background-cleaning-blur.jpg" // Optional: small blurred placeholder for loading
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg max-w-4xl">
            Streamlined Cleaning Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-xl md:text-2xl font-light drop-shadow-md">
            Professional cleaning services tailored to your needs. We make your space shine so you can focus on what matters.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-900/50"
            >
              Book Now
            </a>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 transition">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </section>

        {/* Features Section with glassmorphism cards */}
        <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-200 text-blue-900 font-semibold text-sm tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-4xl font-bold drop-shadow-lg">
              Cleaning Excellence, Every Time
            </h2>
            <p className="mt-4 text-lg font-light max-w-xl mx-auto drop-shadow-md">
              We combine professional expertise with attention to detail to deliver exceptional cleaning results.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Sparkles className="h-12 w-12 text-blue-500" />,
                title: "Spotless Results",
                description: "Our thorough cleaning process ensures your space is immaculate.",
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-500" />,
                title: "Reliable Service",
                description: "We arrive on time, every time, with all the supplies needed.",
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-500" />,
                title: "Trusted Team",
                description: "Our vetted professionals are background-checked and trained.",
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
                title: "Satisfaction Guaranteed",
                description: "Not happy? We'll come back and make it right at no extra cost.",
              },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {icon}
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm font-light max-w-xs">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-200 text-blue-900 font-semibold text-sm tracking-wider">
              Our Services
            </span>
            <h2 className="mt-4 text-4xl font-bold">Professional Cleaning Solutions</h2>
            <p className="mt-4 text-lg font-light">
              Tailored cleaning services to meet your specific needs.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example service cards - you can customize icons and content */}
            <ServiceCard title="Residential Cleaning" description="Comprehensive home cleaning services customized to your preferences and schedule." icon="Home" />
            <ServiceCard title="Commercial Cleaning" description="Professional cleaning solutions for offices, retail spaces, and commercial properties." icon="Building2" />
            <ServiceCard title="Deep Cleaning" description="Thorough cleaning of hard-to-reach areas and detailed attention to every surface." icon="Scan" />
            <ServiceCard title="Move In/Out Cleaning" description="Prepare your new home or leave your old one spotless with our specialized service." icon="Truck" />
            <ServiceCard title="Post-Construction" description="Remove dust, debris, and construction residue after renovation or building projects." icon="Hammer" />
            <ServiceCard title="Specialized Services" description="Carpet cleaning, window washing, and other specialized cleaning solutions." icon="Star" />
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-auto px-12 font-semibold">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-200 text-blue-900 font-semibold text-sm tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl font-bold drop-shadow-lg">What Our Clients Say</h2>
            <p className="mt-4 text-lg font-light max-w-xl mx-auto drop-shadow-md">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard quote="Streamlined Cleaning Solutions transformed my home. Their attention to detail is remarkable!" author="Sarah" role="Homeowner" rating={5} />
            <TestimonialCard quote="As a business owner, I need reliable cleaning services. They never disappoint and always exceed expectations." author="Michael" role="Office Manager" rating={5} />
            <TestimonialCard quote="I've tried many cleaning services, but none compare to the quality and consistency of Streamlined Cleaning." author="Jennifer" role="Property Manager" rating={5} />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-xl shadow-lg"
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">Get In Touch</h2>
            <p className="mt-4 text-lg font-light text-white drop-shadow-md max-w-lg mx-auto">
              Have questions or want to schedule a cleaning? Reach out to us today!
            </p>
          </div>
          <ContactForm />
        </section>

        {/* Footer */}
        <SiteFooter className="bg-black bg-opacity-70 text-white" />
      </div>
    </>
  )
}
