"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Heart, Pill, ArrowRight, Clock, Users, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { useState, useEffect } from "react"

export function EnhancedPrograms() {
  const { t } = useLanguage()

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const programs = [
    {
      icon: Heart,
      title: "Licenciatura en Enfermería",
      description: "Formación integral en cuidados de enfermería con enfoque humanístico y científico.",
      duration: "4 años",
      credits: "240 créditos",
      students: "450 estudiantes",
      accreditation: "CONAEDO",
      features: [
        "Prácticas clínicas desde 2do semestre",
        "Simulación de alta fidelidad",
        "Investigación aplicada",
        "Intercambios internacionales",
      ],
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Pill,
      title: "Químico Farmacéutico Biólogo",
      description: "Programa especializado en ciencias farmacéuticas y análisis bioquímico.",
      duration: "5 años",
      credits: "300 créditos",
      students: "320 estudiantes",
      accreditation: "CONAEVA",
      features: [
        "Laboratorios especializados",
        "Análisis clínicos avanzados",
        "Farmacología aplicada",
        "Investigación farmacéutica",
      ],
      color: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-2xl"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Programas Acreditados
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Programas Académicos</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos programas de excelencia académica en ciencias de la salud con enfoque práctico, científico y
              humanístico.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <ScrollAnimation key={index} animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={index * 200}>
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-slate-800 hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {program.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mt-2">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {program.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {program.students}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                          {program.accreditation}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Duración</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{program.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Créditos</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{program.credits}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        Características principales:
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3 flex-shrink-0`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="group/btn text-blue-600 dark:text-blue-400 p-0 h-auto hover:bg-transparent"
                    >
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>

        <ScrollAnimation animation="fadeUp" delay={600}>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="group hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 bg-transparent"
            >
              Ver Todos los Programas
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
