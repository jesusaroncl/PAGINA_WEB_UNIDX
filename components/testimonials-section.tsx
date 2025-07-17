"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "María González",
      role: "Graduada de Enfermería",
      content:
        "La formación integral y las prácticas clínicas me prepararon perfectamente para mi carrera profesional.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Carlos Rodríguez",
      role: "Graduado de Farmacia y Bioquímica",
      content:
        "Los laboratorios modernos y la investigación de calidad fueron fundamentales en mi desarrollo profesional.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
            <Quote className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("testimonials.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3 pt-3 border-t">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
