"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { X } from "lucide-react"

export function GallerySection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Campus exterior" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Research laboratory" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Medical library" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Simulation center" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Student commons" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Lecture hall" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Clinical skills lab" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Campus courtyard" },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("gallery.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
