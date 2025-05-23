import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"
import { Home, Building2, Scan, Truck, Hammer, Star } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Map of icon names to components
  const iconMap: Record<string, React.ElementType> = {
    Home,
    Building2,
    Scan,
    Truck,
    Hammer,
    Star,
  }

  // Get the icon component or use HelpCircle as fallback
  const IconComponent = iconMap[icon] || HelpCircle

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 bg-blue-50 flex flex-row items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
