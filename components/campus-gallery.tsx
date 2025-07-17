"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"

export function CampusGallery() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Modern campus exterior with students",
      category: "campus",
      title: "Campus Exterior",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Advanced research laboratory",
      category: "facilities",
      title: "Research Laboratory",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Medical library study area",
      category: "facilities",
      title: "Medical Library",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "High-tech simulation center",
      category: "facilities",
      title: "Simulation Center",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students collaborating in commons",
      category: "student-life",
      title: "Student Commons",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Modern lecture hall",
      category: "facilities",
      title: "Lecture Hall",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Clinical skills laboratory",
      category: "facilities",
      title: "Clinical Skills Lab",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Beautiful campus courtyard",
      category: "campus",
      title: "Campus Courtyard",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students in graduation ceremony",
      category: "student-life",
      title: "Graduation Day",
    },
  ]

  const filters = [
    { key: "all", label: "All" },
    { key: "campus", label: "Campus" },
    { key: "facilities", label: "Facilities" },
    { key: "student-life", label: "Student Life" },
  ]

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="campus" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 dark:bg-white rounded-2xl mb-6">
            <Camera className="h-8 w-8 text-white dark:text-slate-900" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            {t("gallery.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.key}
              variant={filter === filterOption.key ? "default" : "outline"}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === filterOption.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400"
              }`}
            >
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-slate-300 transition-colors z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-slate-300 transition-colors z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
                <p className="text-slate-300 text-sm mt-1">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
