"use client"

import { motion } from "framer-motion"
import { Users, Award, BookOpen, GraduationCap } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Estudiantes activos",
    description: "Formándose en nuestras aulas",
  },
  {
    icon: GraduationCap,
    number: "2",
    label: "Carreras profesionales",
    description: "Enfermería y Farmacia",
  },
  {
    icon: Award,
    number: "15+",
    label: "Años de experiencia",
    description: "En educación superior",
  },
  {
    icon: BookOpen,
    number: "45+",
    label: "Docentes especializados",
    description: "Con grados académicos",
  },
]

export function CompactStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">UNIDX en Números</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce las cifras que respaldan nuestro compromiso con la excelencia académica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
