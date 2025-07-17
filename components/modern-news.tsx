"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Eye, Clock } from "lucide-react"
import Image from "next/image"

export function ModernNews() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const news = [
    {
      title: "Acreditación Internacional para el Programa de Enfermería",
      excerpt: "Nuestro programa de Enfermería recibe reconocimiento internacional por su excelencia académica.",
      date: "15 Enero 2024",
      readTime: "3 min",
      category: "Académico",
      image: "/placeholder.svg?height=300&width=500",
      views: "1.2k",
      featured: true,
    },
    {
      title: "Nueva Alianza con Hospital Regional",
      excerpt: "Convenio estratégico amplía las oportunidades de práctica clínica para estudiantes.",
      date: "10 Enero 2024",
      readTime: "2 min",
      category: "Convenios",
      image: "/placeholder.svg?height=200&width=300",
      views: "856",
    },
    {
      title: "Investigación en Fitoterapia Gana Premio Nacional",
      excerpt: "Proyecto sobre plantas medicinales obtiene reconocimiento nacional.",
      date: "5 Enero 2024",
      readTime: "4 min",
      category: "Investigación",
      image: "/placeholder.svg?height=200&width=300",
      views: "2.1k",
    },
    {
      title: "Congreso Internacional de Ciencias de la Salud 2024",
      excerpt: "UNID será sede del congreso más importante de la región.",
      date: "28 Diciembre 2023",
      readTime: "5 min",
      category: "Eventos",
      image: "/placeholder.svg?height=200&width=300",
      views: "3.4k",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Académico":
        return "from-blue-500 to-blue-600"
      case "Convenios":
        return "from-green-500 to-green-600"
      case "Investigación":
        return "from-purple-500 to-purple-600"
      case "Eventos":
        return "from-orange-500 to-orange-600"
      default:
        return "from-slate-500 to-slate-600"
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-light border border-blue-200/50 dark:border-blue-800/50 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Últimas Noticias
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-white mb-4">
              Noticias y{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Eventos
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl">
              Mantente informado sobre las últimas novedades, logros y eventos de nuestra facultad.
            </p>
          </div>
          <Button variant="ghost" className="text-blue-600 dark:text-blue-400 group hidden md:flex">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="group">
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white dark:bg-slate-900">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={news[0].image || "/placeholder.svg"}
                    alt={news[0].title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">DESTACADO</span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Eye className="h-3 w-3 text-white" />
                      <span className="text-xs text-white">{news[0].views}</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span
                        className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(news[0].category)} text-white`}
                      >
                        {news[0].category}
                      </span>
                      <div className="flex items-center text-xs text-white/80">
                        <Clock className="h-3 w-3 mr-1" />
                        {news[0].readTime}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {news[0].date}
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {news[0].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{news[0].excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Other Articles */}
          <div className="space-y-6">
            {news.slice(1).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }} className="group">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900">
                    <div className="flex">
                      <div className="relative w-24 h-20 flex-shrink-0">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}
                          >
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {article.views}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg font-light text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="group border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/50"
          >
            Ver Todas las Noticias
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
