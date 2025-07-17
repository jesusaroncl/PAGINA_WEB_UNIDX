"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { FlaskConical, BookOpen, Monitor } from "lucide-react"
import Image from "next/image"

export function FacilitiesSection() {
  const { t } = useLanguage()

  const facilities = [
    {
      icon: FlaskConical,
      title: t("facilities.labs.title"),
      description: t("facilities.labs.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: BookOpen,
      title: t("facilities.library.title"),
      description: t("facilities.library.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Monitor,
      title: t("facilities.simulation.title"),
      description: t("facilities.simulation.desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="facilities" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("facilities.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("facilities.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 hover:border-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{facility.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
