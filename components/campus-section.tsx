"use client"

import { useLanguage } from "@/components/language-provider"
import { Camera } from "lucide-react"
import Image from "next/image"

export function CampusSection() {
  const { t } = useLanguage()

  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Campus exterior" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Laboratorio de enfermería" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Laboratorio de farmacia" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Biblioteca" },
  ]

  return (
    <section id="campus" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 dark:bg-white rounded-xl mb-4">
            <Camera className="h-6 w-6 text-white dark:text-slate-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("campus.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t("campus.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
