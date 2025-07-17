"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Users, GraduationCap, Award, BookOpen, Building, TrendingUp } from "lucide-react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
}

function AnimatedCounter({ value, duration = 2, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }, [springValue])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-white">
      {displayValue.toLocaleString()}
      {suffix}
    </div>
  )
}

export function AnimatedStats() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    {
      icon: Users,
      value: 1250,
      suffix: "+",
      label: "Estudiantes Activos",
      description: "Formándose en nuestros programas",
    },
    {
      icon: GraduationCap,
      value: 85,
      label: "Docentes Expertos",
      description: "Con experiencia internacional",
    },
    {
      icon: Award,
      value: 95,
      suffix: "%",
      label: "Empleabilidad",
      description: "De nuestros egresados",
    },
    {
      icon: BookOpen,
      value: 150,
      suffix: "+",
      label: "Publicaciones",
      description: "Investigaciones anuales",
    },
    {
      icon: Building,
      value: 25,
      suffix: "+",
      label: "Años de Experiencia",
      description: "En educación superior",
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Satisfacción",
      description: "Estudiantil y familiar",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/30"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-white mb-6">
            Números que nos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Definen</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            Más de dos décadas formando profesionales de la salud con excelencia académica y compromiso social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <div className="text-lg font-light text-slate-900 dark:text-white mt-1">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-light">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
