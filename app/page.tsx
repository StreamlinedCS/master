import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("booksy-widget-container");
    if (!container) return;

    const script = document.createElement("script");
    script.src = "https://booksy.com/widget/code.js?id=1498920&country=us&lang=en";
    script.async = true;

    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-2 p-8 md:gap-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Streamlined Cleaning Solutions LLC
        </h1>
        <h2 className="max-w-[700px] text-center text-lg text-muted-foreground md:text-xl">
          Serving Lakeland, FL and surrounding areas
        </h2>

        <section className="max-w-2xl">
          <h3 className="mb-3 text-xl font-semibold">Our Cleaning Services</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Standard Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Move In/Out Cleaning</li>
            <li>Apartment & Office Building Cleaning</li>
          </ul>
        </section>

        <section className="max-w-2xl mt-6">
          <h3 className="mb-3 text-xl font-semibold">Contact Us</h3>
          <p>Phone: (863) 662-2874</p>
          <p>
            Email:{" "}
            <a
              href="mailto:streamlinedcleaningsolutions@gmail.com"
              className="underline text-blue-600"
            >
              streamlinedcleaningsolutions@gmail.com
            </a>
          </p>
        </section>

        <section className="max-w-2xl mt-8">
          <h3 className="mb-3 text-xl font-semibold">Book an Appointment</h3>
          <p>Schedule your cleaning service with us easily through Booksy:</p>

          <div className="flex flex-col items-center space-y-3 mt-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://booksy.com/widget/code.js?id=1498920&country=us&lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on Booksy
              </Link>
            </Button>

            {/* Booksy widget will render here */}
            <div id="booksy-widget-container" className="mt-6"></div>
          </div>
        </section>
      </section>
    </>
  );
}
