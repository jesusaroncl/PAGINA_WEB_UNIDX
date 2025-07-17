"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Target, Eye, Heart, Users, GraduationCap, BookOpen, TrendingUp, Award, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MainContent() {
  const { t } = useLanguage()
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, value: "1,250+", label: "Estudiantes" },
    { icon: GraduationCap, value: "85", label: "Docentes" },
    { icon: Award, value: "95%", label: "Empleabilidad" },
    { icon: BookOpen, value: "150+", label: "Publicaciones" },
    { icon: Building, value: "25", label: "Años" },
    { icon: TrendingUp, value: "98%", label: "Satisfacción" },
  ]

  const programs = [
    {
      icon: Heart,
      title: "Enfermería",
      description: "Formación integral en cuidados de enfermería con enfoque humanístico y científico",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Users,
      title: "Farmacia y Bioquímica",
      description: "Ciencias farmacéuticas y análisis bioquímico de vanguardia",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const news = [
    {
      title: "Nueva Acreditación Internacional para Enfermería",
      date: "15 Enero 2024",
      summary: "El programa de Enfermería recibe acreditación internacional por su excelencia académica.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Investigación en Fitoterapia Gana Premio Nacional",
      date: "10 Enero 2024",
      summary: "Estudio sobre plantas medicinales desarrollado por docentes obtiene reconocimiento nacional.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Convenio con Hospital Regional",
      date: "5 Enero 2024",
      summary: "Nuevo acuerdo amplía las oportunidades de práctica clínica para estudiantes.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const events = [
    {
      title: "Simposio de Farmacología Clínica",
      date: "25 Feb",
      time: "9:00 AM",
      location: "Auditorio Principal",
    },
    {
      title: "Taller de Cuidados Intensivos",
      date: "18 Feb",
      time: "2:00 PM",
      location: "Lab. Simulación",
    },
    {
      title: "Conferencia: Bioética en Salud",
      date: "12 Feb",
      time: "7:00 PM",
      location: "Virtual",
    },
  ]

  return (
    <div className="space-y-32">
      {/* Welcome Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            id="welcome"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has("welcome") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
              {t("main.welcome")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div
              id="mission"
              data-animate
              className={`transition-all duration-1000 delay-200 ${
                visibleSections.has("mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Target className="h-8 w-8 text-slate-400" />
                  <h3 className="text-2xl font-light text-slate-900 dark:text-white">{t("main.mission")}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {t("main.mission.text")}
                </p>
              </div>
            </div>

            <div
              id="vision"
              data-animate
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.has("vision") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Eye className="h-8 w-8 text-slate-400" />
                  <h3 className="text-2xl font-light text-slate-900 dark:text-white">{t("main.vision")}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{t("main.vision.text")}</p>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={index}
                  id={`program-${index}`}
                  data-animate
                  className={`transition-all duration-1000 ${
                    visibleSections.has(`program-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-slate-800">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-6 w-6 text-slate-400" />
                        <h3 className="text-xl font-light text-slate-900 dark:text-white">{program.title}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                        {program.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            id="stats"
            data-animate
            className={`transition-all duration-1000 ${
              visibleSections.has("stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center space-y-3">
                    <Icon className="h-8 w-8 text-slate-400 mx-auto" />
                    <div className="text-2xl font-light text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-light">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            id="news-header"
            data-animate
            className={`flex justify-between items-end mb-16 transition-all duration-1000 ${
              visibleSections.has("news-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-2">Noticias</h2>
              <p className="text-slate-600 dark:text-slate-400 font-light">Últimas novedades</p>
            </div>
            <Link
              href="/noticias"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm"
            >
              Ver todas →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div
                key={index}
                id={`news-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  visibleSections.has(`news-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-slate-800">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 font-light">{article.date}</div>
                    <h3 className="text-lg font-light text-slate-900 dark:text-white leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            id="events-header"
            data-animate
            className={`flex justify-between items-end mb-16 transition-all duration-1000 ${
              visibleSections.has("events-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-2">Eventos</h2>
              <p className="text-slate-600 dark:text-slate-400 font-light">Próximas actividades</p>
            </div>
            <Link
              href="/eventos"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm"
            >
              Ver calendario →
            </Link>
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                id={`event-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  visibleSections.has(`event-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-light text-slate-900 dark:text-white mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                          <span>{event.location}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-light text-slate-900 dark:text-white">
                          {event.date.split(" ")[0]}
                        </div>
                        <div className="text-xs text-slate-400">{event.date.split(" ")[1]}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
