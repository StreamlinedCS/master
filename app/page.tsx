"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";

import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";
import ServiceCard from "@/components/service-card";

export default function Home() {
  // Example: stars filled for testimonials
  const [testimonialStars, setTestimonialStars] = useState(4);

  useEffect(() => {
    // Example client-side logic (optional)
    console.log("Home page mounted");
  }, []);

  // Render stars for testimonial rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={i <= testimonialStars ? "#FFD700" : "#ccc"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          style={{ marginRight: 4 }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
      <Head>
        <title>Streamlined Cleaning Solutions | Lakeland, FL Professional Cleaning</title>
        <meta
          name="description"
          content="Professional home and office cleaning services including standard, deep, and move in/out cleaning in Lakeland, Florida."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main
        style={{
          fontFamily:
            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#222",
          padding: "1rem",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
          aria-label="Welcome Section"
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
              fontWeight: "700",
              lineHeight: 1.2,
            }}
          >
            Streamlined Cleaning Solutions
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#555",
              marginBottom: "1.5rem",
            }}
          >
            Professional Cleaning Services in Lakeland, Florida
          </p>
          <a
            href="#contact"
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: 5,
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
            }}
          >
            Book a Cleaning
          </a>
        </section>

        {/* Services Section */}
        <section aria-label="Our Cleaning Services" style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "2px solid #0070f3",
              paddingBottom: "0.3rem",
              maxWidth: "fit-content",
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <ServiceCard
              title="Standard Cleaning"
              description="Keep your home or office spotless with routine cleaning."
            />
            <ServiceCard
              title="Deep Cleaning"
              description="A thorough clean to reach hidden dirt and grime."
            />
            <ServiceCard
              title="Move In / Move Out Cleaning"
              description="Complete cleaning to prepare your space for moving."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          aria-label="Customer Testimonials"
          style={{ marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "2px solid #FFD700",
              paddingBottom: "0.3rem",
              maxWidth: "fit-content",
            }}
          >
            What Our Customers Say
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
            aria-label={`${testimonialStars} out of 5 stars`}
          >
            {renderStars()}
          </div>
          <blockquote
            style={{
              fontStyle: "italic",
              color: "#555",
              borderLeft: "4px solid #FFD700",
              paddingLeft: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            "Streamlined Cleaning Solutions made my home sparkle. Friendly
            and reliable service!"
          </blockquote>
          <cite
            style={{
              display: "block",
              textAlign: "right",
              color: "#888",
              fontWeight: "600",
            }}
          >
            – Jane Doe
          </cite>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact"
          aria-label="Contact Us"
          style={{ marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "2px solid #0070f3",
              paddingBottom: "0.3rem",
              maxWidth: "fit-content",
            }}
          >
            Contact Us
          </h2>
          <ContactForm />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
