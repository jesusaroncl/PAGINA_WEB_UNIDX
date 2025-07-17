"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function NewsSection() {
  const news = [
    {
      title: "Acreditación Internacional para el Programa de Enfermería",
      excerpt: "Nuestro programa de Enfermería recibe reconocimiento internacional por su excelencia académica.",
      date: "15 Enero 2024",
      category: "Académico",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Nueva Alianza con Hospital Regional",
      excerpt: "Convenio estratégico amplía las oportunidades de práctica clínica para nuestros estudiantes.",
      date: "10 Enero 2024",
      category: "Convenios",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Investigación en Fitoterapia Gana Premio Nacional",
      excerpt: "Proyecto de investigación sobre plantas medicinales obtiene reconocimiento a nivel nacional.",
      date: "5 Enero 2024",
      category: "Investigación",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Noticias y Eventos</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Mantente informado sobre las últimas novedades de nuestra facultad.
            </p>
          </div>
          <Button variant="ghost" className="text-blue-600 dark:text-blue-400">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-video relative">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
