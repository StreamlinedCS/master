"use client";

import React, { useEffect } from "react";
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
  Home,
  Building2,
  Scan,
  Truck,
  Hammer,
  Star,
} from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";
import ServiceCard from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";

export default function Home(): JSX.Element {
  useEffect(() => {
    const widgetContainer = document.getElementById("booksy-widget");
    if (!widgetContainer) {
      console.warn("Booksy widget container not found");
      return;
    }

    // Remove previous script if any
    const existingScript = widgetContainer.querySelector(
      'script[src*="booksy.com/widget/code.js"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src =
      "https://booksy.com/widget/code.js?id=1498920&country=us&lang=en";
    script.async = true;

    script.onload = () => {
      console.log("Booksy widget script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load Booksy widget script");
    };

    widgetContainer.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-blue-700">
                  Streamlined Cleaning Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Professional cleaning services tailored to your needs. We make
                  your space shine so you can focus on what matters.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#contact">Book Now</Link>
                </Button>
                {/* Removed "Our Services" button here */}
              </div>

              {/* Booksy widget container under Book Now */}
              <div
                id="booksy-widget"
                data-booksy-widget-id="1498920"
                className="min-h-[400px] mt-6"
              />
            </div>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Cleaning Excellence, Every Time
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                We combine professional expertise with attention to detail to
                deliver exceptional cleaning results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
              <Sparkles className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Spotless Results</h3>
              <p className="text-center text-sm text-gray-500">
                Our thorough cleaning process ensures your space is immaculate.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
              <Clock className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Reliable Service</h3>
              <p className="text-center text-sm text-gray-500">
                We arrive on time, every time, with all the supplies needed.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
              <Shield className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Trusted Team</h3>
              <p className="text-center text-sm text-gray-500">
                Our vetted professionals are background-checked and trained.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
              <CheckCircle className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
              <p className="text-center text-sm text-gray-500">
                Not happy? We'll come back and make it right at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="services">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Professional Cleaning Solutions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                Tailored cleaning services to meet your specific needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                Don't just take our word for it. Here's what our satisfied customers
                have to say.
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
              role="Property Manager"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        id="contact"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready for a Cleaner Space?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                Get in touch with us today for a free quote or to book a service.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl py-12">
            <ContactForm />
          </div>

          <div className="mt-12 flex flex-col items-center space-y-2 text-center text-gray-700">
            <p>
              Call us:{" "}
              <a
                href="tel:+18636622847"
                className="text-blue-600 hover:underline"
              >
                (863) 662-2847
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:streamlinedcleaningsolutions@gmail.com"
                className="text-blue-600 hover:underline"
              >
                streamlinedcleaningsolutions@gmail.com
              </a>
            </p>
            <div className="flex space-x-6 justify-center mt-4 text-blue-600">
              <a
                href="https://www.facebook.com/StreamlinedCleaningSolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com/StreamlinedClean"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
