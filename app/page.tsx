import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Clock, Shield, PhoneCall, Facebook, Twitter } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/background-cleaning.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        filter: "brightness(1) contrast(1)", // neutral filter to keep image bright
      }}
    >
      {/* Very light overlay to slightly darken background for contrast */}
      <div className="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>

      {/* Content container with relative z-index so it appears above overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

              {/* Text Block with subtle semi-transparent white background for readability */}
              <div className="flex flex-col justify-center space-y-4 bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-700 drop-shadow-md">
                    Streamlined Cleaning Solutions
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl drop-shadow-sm">
                    Professional cleaning services tailored to your needs. We make your space shine so you can focus on
                    what matters.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <a
                    target="_top"
                    href="https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
                    rel="nofollow"
                    style={{
                      backgroundColor: "#006aff",
                      border: "none",
                      color: "white",
                      height: "40px",
                      textTransform: "uppercase",
                      fontFamily: "'Square Market', sans-serif",
                      letterSpacing: "1px",
                      lineHeight: "38px",
                      padding: "0 28px",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "inline-block",
                      width: "auto",
                      minWidth: "120px",
                      textAlign: "center",
                      boxShadow: "0 4px 8px rgb(0 106 255 / 0.4)",
                    }}
                  >
                    Book now
                  </a>
                  <Button asChild variant="outline" size="lg" className="w-auto">
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </div>

              {/* Logo Image */}
              <div className="flex justify-center items-center">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src="/images/logo.png"
                    alt="Streamlined Cleaning Solutions Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 bg-white bg-opacity-70 p-6 rounded-lg shadow-md max-w-[900px] mx-auto">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Why Choose Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight drop-shadow-sm">Cleaning Excellence, Every Time</h2>
                <p className="text-gray-700 md:text-xl/relaxed drop-shadow-sm">
                  We combine professional expertise with attention to detail to deliver exceptional cleaning results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm bg-white bg-opacity-80">
                <Sparkles className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold drop-shadow-sm">Spotless Results</h3>
                <p className="text-center text-sm text-gray-700">Our thorough cleaning process ensures your space is immaculate.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm bg-white bg-opacity-80">
                <Clock className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold drop-shadow-sm">Reliable Service</h3>
                <p className="text-center text-sm text-gray-700">We arrive on time, every time, with all the supplies needed.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm bg-white bg-opacity-80">
                <Shield className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold drop-shadow-sm">Trusted Team</h3>
                <p className="text-center text-sm text-gray-700">Our vetted professionals are background-checked and trained.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm bg-white bg-opacity-80">
                <CheckCircle className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold drop-shadow-sm">Satisfaction Guaranteed</h3>
                <p className="text-center text-sm text-gray-700">Not happy? We'll come back and make it right at no extra cost.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 bg-white bg-opacity-70 p-6 rounded-lg shadow-md max-w-[900px] mx-auto">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight drop-shadow-sm">Professional Cleaning Solutions</h2>
                <p className="text-gray-700 md:text-xl/relaxed drop-shadow-sm">
                  Tailored cleaning services to meet your specific needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-auto">
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 bg-white bg-opacity-70 p-6 rounded-lg shadow-md max-w-[900px] mx-auto">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight drop-shadow-sm">What Our Clients Say</h2>
                <p className="text-gray-700 md:text-xl/relaxed drop-shadow-sm">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                role="Apartment Manager"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          id="contact"
        >
          <div className="container px-4 md:px-6 max-w-4xl mx-auto bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-700 drop-shadow-sm">
                Get In Touch
              </h2>
              <p className="max-w-[700px] text-gray-700 md:text-lg drop-shadow-sm">
                Have questions or want to book a cleaning? Use the form below or call us directly.
              </p>
              <div className="flex space-x-4 text-blue-600">
                <PhoneCall className="h-6 w-6" />
                <span>863-662-2874</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
      </div>
    </main>
  )
}
