"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Stethoscope, Heart, Pill, Users, Microscope, Activity, ArrowRight, GraduationCap } from "lucide-react"

export function ProgramsOverview() {
  const { t } = useLanguage()

  const programs = [
    {
      icon: Stethoscope,
      title: t("programs.medicine.title"),
      description: t("programs.medicine.desc"),
      color: "from-blue-600 to-blue-800",
      duration: "4 Years",
      type: "Doctoral",
    },
    {
      icon: Heart,
      title: t("programs.nursing.title"),
      description: t("programs.nursing.desc"),
      color: "from-red-500 to-red-700",
      duration: "4 Years",
      type: "Bachelor's",
    },
    {
      icon: Pill,
      title: t("programs.pharmacy.title"),
      description: t("programs.pharmacy.desc"),
      color: "from-green-600 to-green-800",
      duration: "4 Years",
      type: "Doctoral",
    },
    {
      icon: Users,
      title: t("programs.public.title"),
      description: t("programs.public.desc"),
      color: "from-purple-600 to-purple-800",
      duration: "2 Years",
      type: "Master's",
    },
    {
      icon: Microscope,
      title: t("programs.biomedical.title"),
      description: t("programs.biomedical.desc"),
      color: "from-indigo-600 to-indigo-800",
      duration: "4 Years",
      type: "Bachelor's",
    },
    {
      icon: Activity,
      title: t("programs.allied.title"),
      description: t("programs.allied.desc"),
      color: "from-orange-600 to-orange-800",
      duration: "2-4 Years",
      type: "Various",
    },
  ]

  return (
    <section id="programs" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            {t("programs.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("programs.subtitle")}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-slate-800 hover:shadow-blue-600/10"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 dark:to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{program.type}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{program.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {program.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
