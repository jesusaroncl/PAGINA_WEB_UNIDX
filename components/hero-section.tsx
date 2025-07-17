"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      gradient: "from-blue-900/60 via-blue-800/40 to-transparent",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Investigación de Vanguardia",
      subtitle: "Desarrollamos conocimiento científico para transformar la salud global",
      gradient: "from-slate-900/60 via-slate-800/40 to-transparent",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Formación Integral",
      subtitle: "Preparamos profesionales comprometidos con la excelencia y el servicio",
      gradient: "from-blue-800/60 via-indigo-700/40 to-transparent",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Advanced Transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : index === (currentSlide - 1 + slides.length) % slides.length
                ? "opacity-0 scale-105"
                : "opacity-0 scale-95"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={95}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
          <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/20" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-5xl px-6">
          <div
            className={`transform transition-all duration-1500 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 leading-tight tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                data-cursor-hover
                className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm font-light text-lg rounded-full transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Descubre Más</span>
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                data-cursor-hover
                className="group px-8 py-4 text-white hover:text-white border border-white/30 hover:border-white/50 font-light text-lg rounded-full transition-all duration-500 hover:scale-105"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        data-cursor-hover
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        data-cursor-hover
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            data-cursor-hover
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
          >
            {index === currentSlide && <div className="absolute inset-0 bg-blue-400 animate-pulse"></div>}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-3 text-white/60">
        <span className="text-xs font-light tracking-widest rotate-90 origin-center">SCROLL</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="w-full h-4 bg-white/60 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
