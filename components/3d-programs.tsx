"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Pill, ArrowRight, Clock, Users, Award, Star } from "lucide-react"

export function ThreeDPrograms() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const programs = [
    {
      icon: Heart,
      title: "Licenciatura en Enfermería",
      description: "Formación integral en cuidados de enfermería con enfoque humanístico y científico de vanguardia.",
      duration: "4 años",
      credits: "240 créditos",
      students: "450 estudiantes",
      rating: 4.9,
      accreditation: "CONAEDO",
      features: [
        "Prácticas clínicas desde 2do semestre",
        "Simulación de alta fidelidad",
        "Investigación aplicada",
        "Intercambios internacionales",
      ],
      gradient: "from-red-500 via-pink-500 to-rose-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      icon: Pill,
      title: "Químico Farmacéutico Biólogo",
      description: "Programa especializado en ciencias farmacéuticas y análisis bioquímico con tecnología de punta.",
      duration: "5 años",
      credits: "300 créditos",
      students: "320 estudiantes",
      rating: 4.8,
      accreditation: "CONAEVA",
      features: [
        "Laboratorios especializados",
        "Análisis clínicos avanzados",
        "Farmacología aplicada",
        "Investigación farmacéutica",
      ],
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-light border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Award className="h-4 w-4 mr-2" />
            Programas Acreditados
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-white mb-6">
            Programas{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Académicos
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            Excelencia académica con enfoque práctico, científico y humanístico para formar los profesionales del
            futuro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <motion.div
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative preserve-3d"
                >
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white dark:bg-slate-900 backdrop-blur-sm transform-gpu">
                    {/* 3D Gradient Header */}
                    <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />

                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="flex items-center space-x-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-lg">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium text-slate-900 dark:text-white">{program.rating}</span>
                      </div>
                    </div>

                    <CardHeader className="pb-4 relative">
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotateZ: 5 }}
                          className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-light text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                            {program.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
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
                        <div className="inline-flex items-center text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">
                          <Award className="h-3 w-3 mr-1" />
                          {program.accreditation}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                        {program.description}
                      </p>

                      {/* Stats Grid */}
                      <div className={`grid grid-cols-2 gap-4 p-6 ${program.bgColor} rounded-2xl`}>
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">Duración</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{program.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">Créditos</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{program.credits}</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          Características principales:
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {program.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`}
                              />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="ghost"
                          className="group/btn w-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-xl"
                        >
                          Más información
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/50"
          >
            Ver Todos los Programas
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
