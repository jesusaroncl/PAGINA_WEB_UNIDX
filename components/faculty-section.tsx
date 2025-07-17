"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Users, Award, BookOpen, Microscope } from "lucide-react"

export function FacultySection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Users, value: "50+", label: "Docentes Expertos" },
    { icon: Award, value: "25+", label: "Años de Experiencia" },
    { icon: BookOpen, value: "100+", label: "Publicaciones" },
    { icon: Microscope, value: "15+", label: "Proyectos de Investigación" },
  ]

  return (
    <section id="faculty" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 dark:bg-white rounded-xl mb-4">
            <Users className="h-6 w-6 text-white dark:text-slate-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("faculty.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t("faculty.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800"
              >
                <CardContent className="p-0 space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
