"use client"

import { useState } from "react"
import { useActionState } from "react" // Changed from useFormState to useActionState
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { Alert, AlertDescription } from "@/components/ui/alert"

const initialState = {
  success: false,
  message: "",
  errors: [],
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState) // Changed from useFormState to useActionState
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-gray-500">{state.message}</p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form action={formAction} onSubmit={() => setIsSubmitting(true)} className="space-y-4">
      {state.message && !state.success && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="john.doe@example.com" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="(555) 123-4567" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Needed</Label>
        <Select onValueChange={setSelectedService} value={selectedService}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential Cleaning</SelectItem>
            <SelectItem value="commercial">Commercial Cleaning</SelectItem>
            <SelectItem value="deep">Deep Cleaning</SelectItem>
            <SelectItem value="move">Move In/Out Cleaning</SelectItem>
            <SelectItem value="construction">Post-Construction</SelectItem>
            <SelectItem value="specialized">Specialized Services</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="service" value={selectedService} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your cleaning needs..."
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
