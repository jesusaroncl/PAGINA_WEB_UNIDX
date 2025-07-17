"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function StudentTestimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Resident Physician, Johns Hopkins",
      program: "Doctor of Medicine, Class of 2023",
      content:
        "The comprehensive clinical training and research opportunities at this university prepared me exceptionally well for my residency. The faculty's mentorship and the state-of-the-art simulation center were invaluable in developing my clinical skills.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Maria Rodriguez, RN",
      role: "ICU Nurse, Mayo Clinic",
      program: "Bachelor of Science in Nursing, Class of 2022",
      content:
        "The nursing program here exceeded all my expectations. The combination of rigorous academic coursework and extensive hands-on clinical experience gave me the confidence and competence to excel in critical care nursing.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Pharmacist",
      program: "Doctor of Pharmacy, Class of 2024",
      content:
        "The pharmacy program's emphasis on clinical practice and research methodology has been instrumental in my career. The faculty's expertise and the collaborative learning environment fostered my growth as a healthcare professional.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Emily Davis",
      role: "Public Health Director",
      program: "Master of Public Health, Class of 2023",
      content:
        "This program opened my eyes to the broader impact of healthcare policy and population health. The interdisciplinary approach and real-world case studies prepared me to tackle complex public health challenges.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white dark:bg-slate-800 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-xl">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1">
                    <div className="font-bold text-xl text-slate-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonials[currentIndex].program}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full p-0 border-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full p-0 border-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
