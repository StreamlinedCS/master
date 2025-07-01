import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="italic text-gray-600 flex-grow">"{quote}"</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
