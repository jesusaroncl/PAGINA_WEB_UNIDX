"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Users, BookOpen } from "lucide-react"
import Image from "next/image"

export function AnimatedHero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { icon: Award, value: "25+", label: "Años de Experiencia", delay: "0ms" },
    { icon: Users, value: "1,200+", label: "Estudiantes", delay: "200ms" },
    { icon: BookOpen, value: "95%", label: "Empleabilidad", delay: "400ms" },
  ]

  return (
    <section
      ref={heroRef}
      className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Slowest */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>

        {/* Layer 2 - Medium */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl" />
          <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl" />
        </div>

        {/* Layer 3 - Fastest */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute top-60 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-60 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl" />
        </div>
      </div>

      {/* Animated Pattern Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Content */}
          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <Award className="h-4 w-4 mr-2" />
                Acreditación Internacional
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
                style={{
                  transform: `translateY(${scrollY * 0.15}px)`,
                }}
              >
                {t("hero.title")}
              </h1>

              <p
                className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                }}
              >
                {t("hero.subtitle")}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transform: `translateY(${scrollY * 0.25}px)`,
              }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Conoce Nuestros Programas
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Ver Video Institucional
              </Button>
            </div>

            {/* Animated Stats */}
            <div
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700 transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image with Parallax */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="relative">
              {/* Floating elements with different parallax speeds */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`,
                }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl"
                style={{
                  transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)`,
                }}
              />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Campus UNID"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-600"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-medium tracking-widest">SCROLL</span>
          <div className="w-px h-16 bg-current relative overflow-hidden">
            <div className="w-full h-4 bg-current animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
