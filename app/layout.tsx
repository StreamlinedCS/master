import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
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
            <div className="container px-4 md:px-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/logo_transparent_corner.webp"
                      alt="Streamlined Cleaning Solutions Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold text-black">SCS</span>
                </Link>
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
                <div className="flex items-center space-x-2">
                  <Button asChild variant="ghost" size="icon" className="md:hidden">
                    <Link href="/#contact">
                      <PhoneCall className="h-5 w-5 text-black" />
                      <span className="sr-only">Contact</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="hidden md:inline-flex bg-black hover:bg-neutral-800 text-white"
                  >
                    <Link href="/#contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
