import Link from "next/link"
import { Facebook, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full py-6 bg-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Streamlined Cleaning Solutions</h3>
            <p className="text-sm text-blue-200">Professional cleaning services for homes and businesses.</p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/streamlined.cleaning.solution.s.2025/?viewas=100000686899395"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/StreamlinedCS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline text-blue-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline text-blue-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-blue-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/#services" className="hover:underline text-blue-200">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline text-blue-200">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline text-blue-200">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline text-blue-200">
                  Specialized Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm text-blue-200">(863) 662-2847</p>
            <p className="text-sm text-blue-200">streamlinedcleaningsolutions@gmail.com</p>
            <p className="text-sm text-blue-200">5522 Autumn Ridge Rd</p>
            <p className="text-sm text-blue-200">Lakeland, FL</p>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} Streamlined Cleaning Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
