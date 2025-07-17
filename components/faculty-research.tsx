"use client"

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Microscope, BookOpen, DollarSign, Globe, TrendingUp, Users, Award, Zap } from "lucide-react"
import Image from "next/image"

export function FacultyResearch() {
  const { t } = useLanguage()

  const researchAreas = [
    {
      icon: Microscope,
      title: t("faculty.research.title"),
      description: t("faculty.research.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: BookOpen,
      title: t("faculty.publications.title"),
      description: t("faculty.publications.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: DollarSign,
      title: t("faculty.grants.title"),
      description: t("faculty.grants.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Globe,
      title: t("faculty.collaboration.title"),
      description: t("faculty.collaboration.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const achievements = [
    { icon: Award, value: "95%", label: "Research Success Rate" },
    { icon: TrendingUp, value: "$50M+", label: "Annual Research Funding" },
    { icon: Users, value: "200+", label: "Research Collaborators" },
    { icon: Zap, value: "500+", label: "Publications per Year" },
  ]

  return (
    <section id="faculty" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 dark:bg-white rounded-2xl mb-6">
            <Microscope className="h-8 w-8 text-white dark:text-slate-900" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            {t("faculty.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {t("faculty.subtitle")}
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {researchAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 shadow-lg bg-white dark:bg-slate-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm lg:text-base text-slate-600 dark:text-slate-400 font-medium">
                    {achievement.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
