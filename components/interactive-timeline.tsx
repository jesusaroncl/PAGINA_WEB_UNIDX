"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Award, Building, Users, BookOpen, Globe } from "lucide-react"

export function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const milestones = [
    {
      year: "1999",
      title: "Fundación de UNID",
      description: "Inicio de operaciones con la visión de formar profesionales de la salud de excelencia.",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      achievements: ["Primera sede establecida", "Programas iniciales de salud", "Equipo fundador conformado"],
    },
    {
      year: "2005",
      title: "Primera Acreditación",
      description: "Reconocimiento oficial de calidad académica por organismos nacionales.",
      icon: Award,
      color: "from-green-500 to-green-600",
      achievements: ["Acreditación CONAEDO", "Estándares de calidad", "Reconocimiento institucional"],
    },
    {
      year: "2010",
      title: "Expansión de Programas",
      description: "Incorporación de nuevas carreras y especialidades en ciencias de la salud.",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      achievements: ["Programa de Farmacia", "Laboratorios especializados", "Convenios hospitalarios"],
    },
    {
      year: "2015",
      title: "Internacionalización",
      description: "Establecimiento de alianzas estratégicas con universidades internacionales.",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      achievements: ["Intercambios estudiantiles", "Profesores visitantes", "Certificaciones internacionales"],
    },
    {
      year: "2020",
      title: "Innovación Digital",
      description: "Transformación digital y adopción de tecnologías educativas avanzadas.",
      icon: Users,
      color: "from-teal-500 to-teal-600",
      achievements: ["Plataformas virtuales", "Simulación 3D", "Telemedicina educativa"],
    },
    {
      year: "2024",
      title: "Excelencia Reconocida",
      description: "Consolidación como referente en educación superior en ciencias de la salud.",
      icon: Award,
      color: "from-pink-500 to-pink-600",
      achievements: ["Ranking nacional", "Investigación de impacto", "Egresados destacados"],
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
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
            <Calendar className="h-4 w-4 mr-2" />
            Nuestra Historia
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-white mb-6">
            25 Años de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excelencia
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            Un recorrido de crecimiento, innovación y compromiso con la formación de profesionales de la salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-white dark:bg-slate-900 shadow-xl border border-blue-200 dark:border-blue-800"
                        : "bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-900 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${milestone.color} shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-light text-slate-900 dark:text-white mb-1">{milestone.year}</div>
                        <div className="text-lg font-medium text-slate-900 dark:text-white mb-2">{milestone.title}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 font-light">
                          {milestone.description}
                        </div>
                      </div>
                    </div>
                  </motion.button>

                  {/* Timeline Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-8 top-20 w-px h-8 bg-slate-200 dark:bg-slate-700" />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Timeline Content */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${milestones[activeIndex].color} shadow-xl`}
                  >
                    {React.createElement(milestones[activeIndex].icon, { className: "h-10 w-10 text-white" })}
                  </div>
                  <div>
                    <div className="text-3xl font-extralight text-slate-900 dark:text-white">
                      {milestones[activeIndex].year}
                    </div>
                    <div className="text-xl font-medium text-slate-900 dark:text-white">
                      {milestones[activeIndex].title}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
                  {milestones[activeIndex].description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Logros Destacados:</h4>
                  <div className="space-y-3">
                    {milestones[activeIndex].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestones[activeIndex].color}`} />
                        <span className="text-slate-600 dark:text-slate-400 font-light">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
