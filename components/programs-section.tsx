"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Heart, Pill, ArrowRight } from "lucide-react"

export function ProgramsSection() {
  const { t } = useLanguage()

  const programs = [
    {
      icon: Heart,
      title: "Licenciatura en Enfermería",
      description: "Formación integral en cuidados de enfermería con enfoque humanístico y científico.",
      duration: "4 años",
      credits: "240 créditos",
      features: ["Prácticas clínicas", "Simulación médica", "Investigación aplicada"],
    },
    {
      icon: Pill,
      title: "Químico Farmacéutico Biólogo",
      description: "Programa especializado en ciencias farmacéuticas y análisis bioquímico.",
      duration: "5 años",
      credits: "300 créditos",
      features: ["Laboratorios especializados", "Análisis clínicos", "Farmacología"],
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Programas Académicos</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Ofrecemos programas de excelencia académica en ciencias de la salud con enfoque práctico y científico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {program.duration} • {program.credits}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400">{program.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      Características principales:
                    </div>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="ghost" className="text-blue-600 dark:text-blue-400 p-0 h-auto">
                    Más información
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Ver Todos los Programas
          </Button>
        </div>
      </div>
    </section>
  )
}
