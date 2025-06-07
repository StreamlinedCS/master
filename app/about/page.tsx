import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import SiteFooter from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative w-[150px] h-[150px] mb-4">
              <Image
                src="/images/logo_transparent_corner.webp"
                alt="Streamlined Cleaning Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-700">
                About Streamlined Cleaning Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We're on a mission to provide exceptional cleaning services that make your life easier and your spaces
                cleaner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Story</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How We Started</h2>
            <p className="text-gray-500 md:text-lg">
              Streamlined Cleaning Solutions was founded with a simple goal: to provide high-quality cleaning services
              that truly meet our clients' needs. What started as a small family business has grown into a trusted
              cleaning service provider in the community.
            </p>
            <p className="text-gray-500 md:text-lg">
              Our founders, Jeremy and Keeyawna Bell, noticed that many cleaning services were cutting corners and not
              delivering the quality that customers deserved. They set out to create a company that would prioritize
              thoroughness, reliability, and customer satisfaction above all else.
            </p>
            <p className="text-gray-500 md:text-lg">
              Today, we're proud to have a team of dedicated cleaning professionals who share our commitment to
              excellence and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Drives Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our core values guide everything we do, from how we clean to how we interact with our clients.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
              <CheckCircle className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-gray-500">
                We never compromise on the quality of our work. Every cleaning job is performed with meticulous
                attention to detail.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
              <Users className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Customer-Focused</h3>
              <p className="text-gray-500">
                We listen to our clients' needs and tailor our services to meet their specific requirements and
                preferences.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
              <Award className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-500">
                We operate with honesty and transparency in all our dealings, building trust with our clients.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
              <Clock className="h-10 w-10 text-blue-600" />
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500">
                We show up on time, every time, and consistently deliver the high-quality service our clients expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet the People Behind Our Success</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our dedicated team of cleaning professionals is what makes Streamlined Cleaning Solutions special.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-xl font-bold">Jeremy Bell</h3>
              <p className="text-blue-600">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-xl font-bold">Keeyawna Bell</h3>
              <p className="text-blue-600">Founder & COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Experience the Difference?</h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Let us take care of your cleaning needs so you can focus on what matters most to you.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
