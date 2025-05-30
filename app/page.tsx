"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Clock, Shield, PhoneCall } from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";
import ServiceCard from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";
import { Facebook, Twitter } from "lucide-react";

function SquareBookingEmbed() {
  useEffect(() => {
    (function () {
      function getScriptTag() {
        return document.currentScript || currentScriptPolyfill();
      }
      function currentScriptPolyfill() {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
      }
      function takeOverIframe() {
        var scriptTag = getScriptTag();
        var parentTags = { HEAD: 1, HTML: 1 };
        return !scriptTag.parentNode || parentTags[scriptTag.parentNode.tagName];
      }
      function embedIframe() {
        var scriptTag = getScriptTag();
        var iframe = document.createElement("iframe");
        var isSquareOnline =
          ((document.querySelector('meta[name="generator"]') || {}).content || "").includes(
            "Square Online"
          );
        var width = "100%";
        var height = "100%";
        iframe.style.minHeight = isSquareOnline ? "auto" : "500px";
        iframe.style.width = width;
        iframe.style.height = height;
        iframe.style.border = "none";
        iframe.src = "https://app.squareup.com/appointments/buyer/widget/plcqv5v04vbj6r/LDRMQXMCSEHN3";
        iframe.allow = "payment app.squareup.com";
        scriptTag.parentNode.insertBefore(iframe, scriptTag);
      }
      function embedBookingButton() {
        var scriptTag = getScriptTag();
        var container = document.createElement("div");
        var button = document.createElement("a");
        button.setAttribute(
          "style",
          "background-color: #006aff; color: white; height: 40px; line-height: 38px; " +
            "padding: 0 28px; border-radius: 3px; font-weight: 500; font-size: 14px; cursor: pointer; " +
            "display: inline-block; text-decoration: none"
        );
        button.setAttribute(
          "href",
          "https://app.squareup.com/appointments/book/plcqv5v04vbj6r/LDRMQXMCSEHN3/start"
        );
        button.textContent = "Book Appointment Now";
        container.setAttribute("style", "text-align: center");
        container.appendChild(button);
        scriptTag.parentNode.insertBefore(container, scriptTag);
      }
      function scriptParentWidth() {
        try {
          var scriptParent = getScriptTag().parentNode;
          var computedStyle = getComputedStyle(scriptParent);
          var paddingX =
            parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
          var borderX =
            parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
          return scriptParent.offsetWidth - paddingX - borderX;
        } catch (e) {
          return document.body.clientWidth;
        }
      }
      if (takeOverIframe()) {
        window.location.href =
          "https://app.squareup.com/appointments/buyer/widget/plcqv5v04vbj6r/LDRMQXMCSEHN3";
      } else {
        if (scriptParentWidth() < 280) {
          embedBookingButton();
        } else {
          embedIframe();
        }
      }
    })();
  }, []);

  return <script />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-700">
                  Streamlined Cleaning Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Professional cleaning services tailored to your needs. We make your space shine so you can focus on
                  what matters.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#contact">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
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

      {/* Booking Section - Square Widget */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Schedule Your Cleaning</h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* Replace iframe with the dynamic embed component */}
            <SquareBookingEmbed />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* ... rest of your original sections unchanged ... */}

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cleaning Excellence, Every Time</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We combine professional expertise with attention to detail to deliver exceptional cleaning results.
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
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Professional Cleaning Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <TestimonialCard
              author="Emily R."
              content="Streamlined Cleaning Solutions transformed my home! Reliable and thorough service."
            />
            <TestimonialCard
              author="Michael S."
              content="Professional team and excellent attention to detail. Highly recommend for office cleaning."
            />
            <TestimonialCard
              author="Sophia L."
              content="Fast, friendly, and affordable. My go-to cleaning service in Lakeland!"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="contact">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
