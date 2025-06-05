"use client"; // for React hooks

import React, { useState } from "react";
import type ReactType from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Streamlined Cleaning Solutions | Professional Cleaning Services",
  description:
    "Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed.",
  keywords:
    "cleaning services, residential cleaning, commercial cleaning, Lakeland, Florida, deep cleaning, move-in cleaning, post-construction cleaning",
  openGraph: {
    title: "Streamlined Cleaning Solutions | Professional Cleaning Services",
    description:
      "Professional residential and commercial cleaning services in Lakeland, FL. Quality cleaning, reliable service, and customer satisfaction guaranteed.",
    url: "https://streamlinedcleaningsolutions.com",
    siteName: "Streamlined Cleaning Solutions",
    locale: "en_US",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  return (
    <html lang="en">
      <head>
        {/* Google Ads gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17096447827"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17096447827');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full py-4 bg-white border-b sticky top-0 z-50">
            <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logo_transparent.png"
                    alt="Streamlined Cleaning Solutions Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-black">SCS</span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link
                  href="/"
                  className="hover:text-black transition-colors text-black"
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  className="hover:text-black transition-colors text-black"
                >
                  Services
                </Link>
                <Link
                  href="/whats-included"
                  className="hover:text-black transition-colors text-black"
                >
                  What's Included
                </Link>
                <Link
                  href="/about"
                  className="hover:text-black transition-colors text-black"
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="hover:text-black transition-colors text-black"
                >
                  Contact
                </Link>
              </nav>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  asChild
                  className="bg-black hover:bg-neutral-800 text-white"
                >
                  <Link href="/#contact">Get a Quote</Link>
                </Button>
              </div>

              {/* Mobile Hamburger */}
              <div className="md:hidden flex items-center space-x-2">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 text-black" />
                  ) : (
                    <Menu className="h-6 w-6 text-black" />
                  )}
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <Link href="/#contact">
                    <PhoneCall className="h-5 w-5 text-black" />
                    <span className="sr-only">Contact</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
                <ul className="flex flex-col px-4 py-2 space-y-2 text-base font-medium">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full hover:text-black transition-colors text-black"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full hover:text-black transition-colors text-black"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whats-included"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full hover:text-black transition-colors text-black"
                    >
                      What's Included
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full hover:text-black transition-colors text-black"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full hover:text-black transition-colors text-black"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full bg-black text-white text-center py-2 rounded"
                    >
                      Get a Quote
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </header>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
