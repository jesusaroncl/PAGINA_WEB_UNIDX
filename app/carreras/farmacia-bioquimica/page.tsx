"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernFooter } from "@/components/modern-footer"
import {
  GraduationCap,
  FlaskRoundIcon as Flask,
  Microscope,
  Clock,
  BookOpen,
  Award,
  Pill,
  Atom,
  Beaker,
  Phone,
  Mail,
  MapPin,
  Download,
  FileText,
  Building2,
  Users,
  TrendingUp,
  Target,
  Zap,
  Calendar,
  Bell,
} from "lucide-react"

const curriculumData = {
  1: [
    {
      code: "FBQ101",
      name: "Química General",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Fundamentos de química general aplicados a las ciencias farmacéuticas. Estructura atómica, enlaces químicos, estequiometría y equilibrio químico.",
      prerequisites: "Ninguno",
      objectives: [
        "Comprender principios químicos fundamentales",
        "Aplicar conceptos a procesos farmacéuticos",
        "Resolver problemas químicos cuantitativos",
      ],
    },
    {
      code: "FBQ102",
      name: "Matemáticas I",
      credits: 3,
      hours: 4,
      type: "basic",
      description:
        "Cálculo diferencial e integral aplicado a ciencias farmacéuticas. Límites, derivadas, integrales y aplicaciones.",
      prerequisites: "Ninguno",
      objectives: ["Dominar cálculo diferencial", "Aplicar integrales", "Resolver problemas matemáticos"],
    },
    {
      code: "FBQ103",
      name: "Biología General",
      credits: 3,
      hours: 5,
      type: "basic",
      description:
        "Principios fundamentales de biología celular y molecular. Estructura celular, metabolismo básico y genética.",
      prerequisites: "Ninguno",
      objectives: ["Comprender estructura celular", "Analizar procesos metabólicos", "Entender principios genéticos"],
    },
    {
      code: "FBQ104",
      name: "Física General",
      credits: 3,
      hours: 5,
      type: "basic",
      description:
        "Principios físicos aplicados a procesos farmacéuticos. Mecánica, termodinámica, óptica y electricidad.",
      prerequisites: "FBQ102",
      objectives: ["Aplicar principios físicos", "Comprender fenómenos naturales", "Resolver problemas físicos"],
    },
    {
      code: "FBQ105",
      name: "Introducción a la Farmacia",
      credits: 2,
      hours: 3,
      type: "professional",
      description:
        "Historia, desarrollo y perspectivas de las ciencias farmacéuticas. Rol del farmacéutico en el sistema de salud.",
      prerequisites: "Ninguno",
      objectives: ["Conocer historia farmacéutica", "Comprender rol profesional", "Desarrollar identidad profesional"],
    },
    {
      code: "FBQ106",
      name: "Metodología de Estudio",
      credits: 2,
      hours: 3,
      type: "humanistic",
      description:
        "Técnicas de estudio y investigación científica. Métodos de aprendizaje y desarrollo de habilidades académicas.",
      prerequisites: "Ninguno",
      objectives: [
        "Desarrollar técnicas de estudio",
        "Mejorar habilidades académicas",
        "Aplicar metodología científica",
      ],
    },
  ],
  2: [
    {
      code: "FBQ201",
      name: "Química Orgánica I",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Fundamentos de química orgánica y grupos funcionales. Hidrocarburos, alcoholes, éteres y compuestos carbonílicos.",
      prerequisites: "FBQ101",
      objectives: ["Comprender química orgánica", "Identificar grupos funcionales", "Predecir reacciones orgánicas"],
    },
    {
      code: "FBQ202",
      name: "Matemáticas II",
      credits: 3,
      hours: 4,
      type: "basic",
      description:
        "Estadística y probabilidad aplicada a ciencias de la salud. Análisis de datos y métodos estadísticos.",
      prerequisites: "FBQ102",
      objectives: [
        "Aplicar estadística descriptiva",
        "Realizar análisis de datos",
        "Interpretar resultados estadísticos",
      ],
    },
    {
      code: "FBQ203",
      name: "Anatomía Humana",
      credits: 4,
      hours: 6,
      type: "basic",
      description: "Estructura anatómica del cuerpo humano. Sistemas orgánicos y su relación con la farmacología.",
      prerequisites: "FBQ103",
      objectives: ["Conocer anatomía humana", "Relacionar estructura-función", "Aplicar conocimientos anatómicos"],
    },
    {
      code: "FBQ204",
      name: "Bioquímica I",
      credits: 4,
      hours: 6,
      type: "professional",
      description:
        "Procesos bioquímicos fundamentales en organismos vivos. Proteínas, carbohidratos, lípidos y ácidos nucleicos.",
      prerequisites: "FBQ103, FBQ201",
      objectives: ["Comprender biomoléculas", "Analizar procesos metabólicos", "Relacionar estructura-función"],
    },
    {
      code: "FBQ205",
      name: "Microbiología General",
      credits: 3,
      hours: 5,
      type: "basic",
      description: "Estudio de microorganismos y su importancia farmacéutica. Bacterias, virus, hongos y su control.",
      prerequisites: "FBQ103",
      objectives: ["Identificar microorganismos", "Comprender patogénesis", "Aplicar control microbiano"],
    },
    {
      code: "FBQ206",
      name: "Ética Profesional",
      credits: 2,
      hours: 3,
      type: "humanistic",
      description: "Principios éticos en el ejercicio farmacéutico. Responsabilidad profesional y dilemas éticos.",
      prerequisites: "FBQ105",
      objectives: ["Aplicar principios éticos", "Resolver dilemas profesionales", "Desarrollar responsabilidad"],
    },
  ],
  3: [
    {
      code: "FBQ301",
      name: "Química Orgánica II",
      credits: 4,
      hours: 6,
      type: "basic",
      description: "Química orgánica avanzada y síntesis de compuestos. Reacciones complejas y mecanismos de reacción.",
      prerequisites: "FBQ201",
      objectives: ["Dominar síntesis orgánica", "Comprender mecanismos", "Diseñar rutas sintéticas"],
    },
    {
      code: "FBQ302",
      name: "Fisiología Humana",
      credits: 4,
      hours: 6,
      type: "basic",
      description: "Funcionamiento de sistemas corporales. Homeostasis y regulación fisiológica.",
      prerequisites: "FBQ203",
      objectives: ["Comprender fisiología", "Analizar homeostasis", "Integrar sistemas corporales"],
    },
    {
      code: "FBQ303",
      name: "Bioquímica II",
      credits: 4,
      hours: 6,
      type: "professional",
      description: "Metabolismo y regulación bioquímica. Vías metabólicas y control enzimático.",
      prerequisites: "FBQ204",
      objectives: ["Analizar metabolismo", "Comprender regulación", "Aplicar bioquímica clínica"],
    },
    {
      code: "FBQ304",
      name: "Química Analítica I",
      credits: 4,
      hours: 7,
      type: "professional",
      description: "Métodos clásicos de análisis químico cuantitativo. Gravimetría, volumetría y equilibrios.",
      prerequisites: "FBQ101, FBQ202",
      objectives: ["Realizar análisis cuantitativo", "Aplicar métodos clásicos", "Evaluar precisión y exactitud"],
    },
    {
      code: "FBQ305",
      name: "Botánica Farmacéutica",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Estudio de plantas medicinales y principios activos. Taxonomía y fitoquímica básica.",
      prerequisites: "FBQ103, FBQ201",
      objectives: ["Identificar plantas medicinales", "Comprender principios activos", "Aplicar fitoquímica"],
    },
    {
      code: "FBQ306",
      name: "Inglés Técnico",
      credits: 2,
      hours: 3,
      type: "humanistic",
      description: "Inglés especializado en ciencias farmacéuticas. Terminología técnica y comunicación científica.",
      prerequisites: "Ninguno",
      objectives: ["Dominar terminología técnica", "Comunicarse en inglés", "Leer literatura científica"],
    },
  ],
  4: [
    {
      code: "FBQ401",
      name: "Química Analítica II",
      credits: 4,
      hours: 7,
      type: "professional",
      description:
        "Métodos instrumentales de análisis químico. Espectroscopia, cromatografía y técnicas electroanalíticas.",
      prerequisites: "FBQ304",
      objectives: ["Usar métodos instrumentales", "Interpretar espectros", "Validar métodos analíticos"],
    },
    {
      code: "FBQ402",
      name: "Farmacología I",
      credits: 4,
      hours: 6,
      type: "professional",
      description:
        "Principios básicos de farmacología y farmacocinética. Absorción, distribución, metabolismo y excreción.",
      prerequisites: "FBQ302, FBQ303",
      objectives: ["Comprender farmacocinética", "Analizar mecanismos de acción", "Calcular parámetros farmacológicos"],
    },
    {
      code: "FBQ403",
      name: "Química Farmacéutica I",
      credits: 4,
      hours: 6,
      type: "professional",
      description: "Relación estructura-actividad de fármacos. Diseño molecular y química medicinal básica.",
      prerequisites: "FBQ301, FBQ402",
      objectives: ["Relacionar estructura-actividad", "Diseñar fármacos", "Aplicar química medicinal"],
    },
    {
      code: "FBQ404",
      name: "Microbiología Farmacéutica",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Microbiología aplicada a productos farmacéuticos. Control microbiológico y esterilización.",
      prerequisites: "FBQ205",
      objectives: [
        "Aplicar microbiología farmacéutica",
        "Realizar control microbiológico",
        "Implementar esterilización",
      ],
    },
    {
      code: "FBQ405",
      name: "Fisicoquímica",
      credits: 3,
      hours: 5,
      type: "basic",
      description:
        "Principios fisicoquímicos en sistemas farmacéuticos. Termodinámica, cinética y equilibrios de fases.",
      prerequisites: "FBQ104, FBQ301",
      objectives: ["Aplicar fisicoquímica", "Analizar sistemas farmacéuticos", "Comprender equilibrios"],
    },
    {
      code: "FBQ406",
      name: "Metodología de la Investigación",
      credits: 3,
      hours: 4,
      type: "research",
      description: "Diseño y metodología de investigación científica. Protocolo de investigación y análisis de datos.",
      prerequisites: "FBQ202",
      objectives: ["Diseñar investigaciones", "Aplicar metodología científica", "Analizar datos experimentales"],
    },
  ],
  5: [
    {
      code: "FBQ501",
      name: "Farmacología II",
      credits: 4,
      hours: 6,
      type: "professional",
      description:
        "Farmacología sistémica y terapéutica. Farmacología de sistemas específicos y terapia farmacológica.",
      prerequisites: "FBQ402",
      objectives: ["Aplicar farmacología sistémica", "Diseñar terapias", "Evaluar eficacia terapéutica"],
    },
    {
      code: "FBQ502",
      name: "Química Farmacéutica II",
      credits: 4,
      hours: 6,
      type: "professional",
      description: "Diseño y desarrollo de fármacos. Química medicinal avanzada y optimización molecular.",
      prerequisites: "FBQ403",
      objectives: ["Desarrollar fármacos", "Optimizar estructuras", "Aplicar química medicinal avanzada"],
    },
    {
      code: "FBQ503",
      name: "Tecnología Farmacéutica I",
      credits: 4,
      hours: 7,
      type: "professional",
      description: "Formas farmacéuticas sólidas y líquidas. Formulación, fabricación y control de calidad.",
      prerequisites: "FBQ405",
      objectives: ["Formular medicamentos", "Controlar procesos", "Garantizar calidad"],
    },
    {
      code: "FBQ504",
      name: "Análisis Clínicos I",
      credits: 4,
      hours: 7,
      type: "professional",
      description: "Análisis de fluidos biológicos básicos. Hematología, química clínica y uroanálisis.",
      prerequisites: "FBQ401, FBQ303",
      objectives: ["Realizar análisis clínicos", "Interpretar resultados", "Aplicar control de calidad"],
    },
    {
      code: "FBQ505",
      name: "Toxicología",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Efectos tóxicos de sustancias químicas. Toxicocinética, toxicodinamia y evaluación de riesgo.",
      prerequisites: "FBQ402",
      objectives: ["Evaluar toxicidad", "Comprender mecanismos tóxicos", "Aplicar toxicología clínica"],
    },
    {
      code: "FBQ506",
      name: "Farmacognosia",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Productos naturales de origen vegetal y animal. Extracción, purificación y caracterización.",
      prerequisites: "FBQ305, FBQ401",
      objectives: ["Extraer principios activos", "Caracterizar productos naturales", "Aplicar farmacognosia"],
    },
  ],
  6: [
    {
      code: "FBQ601",
      name: "Tecnología Farmacéutica II",
      credits: 4,
      hours: 7,
      type: "professional",
      description:
        "Formas farmacéuticas especiales y biotecnología. Sistemas de liberación controlada y nanotecnología.",
      prerequisites: "FBQ503",
      objectives: ["Desarrollar formas especiales", "Aplicar biotecnología", "Diseñar sistemas avanzados"],
    },
    {
      code: "FBQ602",
      name: "Análisis Clínicos II",
      credits: 4,
      hours: 7,
      type: "professional",
      description: "Análisis especializados y automatización. Inmunología, microbiología clínica y biología molecular.",
      prerequisites: "FBQ504",
      objectives: ["Realizar análisis especializados", "Usar automatización", "Aplicar biología molecular"],
    },
    {
      code: "FBQ603",
      name: "Control de Calidad",
      credits: 4,
      hours: 7,
      type: "professional",
      description: "Sistemas de calidad en la industria farmacéutica. Validación, calibración y buenas prácticas.",
      prerequisites: "FBQ503, FBQ401",
      objectives: ["Implementar sistemas de calidad", "Validar métodos", "Aplicar buenas prácticas"],
    },
    {
      code: "FBQ604",
      name: "Farmacia Hospitalaria",
      credits: 3,
      hours: 5,
      type: "professional",
      description:
        "Gestión farmacéutica en instituciones de salud. Farmacotecnia hospitalaria y atención farmacéutica.",
      prerequisites: "FBQ501, FBQ503",
      objectives: ["Gestionar farmacia hospitalaria", "Brindar atención farmacéutica", "Aplicar farmacotecnia"],
    },
    {
      code: "FBQ605",
      name: "Biofarmacia",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Biodisponibilidad y bioequivalencia de medicamentos. Estudios farmacocinéticos y bioanalíticos.",
      prerequisites: "FBQ501",
      objectives: ["Evaluar biodisponibilidad", "Realizar estudios farmacocinéticos", "Aplicar bioanalítica"],
    },
    {
      code: "FBQ606",
      name: "Legislación Farmacéutica",
      credits: 2,
      hours: 3,
      type: "professional",
      description: "Marco legal del ejercicio farmacéutico. Regulación sanitaria y normatividad farmacéutica.",
      prerequisites: "FBQ206",
      objectives: ["Conocer legislación", "Aplicar normatividad", "Cumplir regulaciones"],
    },
  ],
  7: [
    {
      code: "FBQ701",
      name: "Farmacia Comunitaria",
      credits: 4,
      hours: 7,
      type: "professional",
      description:
        "Atención farmacéutica en oficinas de farmacia. Dispensación, seguimiento farmacoterapéutico y educación sanitaria.",
      prerequisites: "FBQ604",
      objectives: ["Dispensar medicamentos", "Realizar seguimiento", "Educar pacientes"],
    },
    {
      code: "FBQ702",
      name: "Administración Farmacéutica",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Gestión y administración de servicios farmacéuticos. Recursos humanos, financieros y logística.",
      prerequisites: "FBQ604",
      objectives: ["Administrar servicios", "Gestionar recursos", "Optimizar procesos"],
    },
    {
      code: "FBQ703",
      name: "Farmacoeconomía",
      credits: 3,
      hours: 4,
      type: "professional",
      description: "Evaluación económica de medicamentos y tratamientos. Análisis costo-efectividad y farmacoeconomía.",
      prerequisites: "FBQ501, FBQ202",
      objectives: ["Evaluar costo-efectividad", "Realizar análisis económicos", "Optimizar recursos"],
    },
    {
      code: "FBQ704",
      name: "Seminario de Investigación",
      credits: 3,
      hours: 4,
      type: "research",
      description: "Desarrollo de proyecto de investigación. Protocolo, ejecución y análisis de resultados.",
      prerequisites: "FBQ406",
      objectives: ["Desarrollar investigación", "Ejecutar protocolos", "Analizar resultados"],
    },
    {
      code: "FBQ705",
      name: "Práctica Profesional I",
      credits: 8,
      hours: 16,
      type: "practice",
      description: "Práctica en laboratorios clínicos o industria. Aplicación de conocimientos en entorno real.",
      prerequisites: "FBQ602, FBQ603",
      objectives: ["Aplicar conocimientos", "Desarrollar habilidades", "Integrar competencias"],
    },
  ],
  8: [
    {
      code: "FBQ801",
      name: "Práctica Profesional II",
      credits: 10,
      hours: 20,
      type: "practice",
      description: "Práctica en farmacia comunitaria u hospitalaria. Atención farmacéutica y gestión farmacéutica.",
      prerequisites: "FBQ701, FBQ705",
      objectives: ["Brindar atención farmacéutica", "Gestionar servicios", "Demostrar competencias"],
    },
    {
      code: "FBQ802",
      name: "Trabajo de Grado",
      credits: 6,
      hours: 8,
      type: "research",
      description: "Desarrollo y defensa de tesis de grado. Investigación original en ciencias farmacéuticas.",
      prerequisites: "FBQ704",
      objectives: ["Completar investigación", "Defender tesis", "Contribuir al conocimiento"],
    },
    {
      code: "FBQ803",
      name: "Actualización Farmacéutica",
      credits: 2,
      hours: 3,
      type: "professional",
      description: "Tendencias actuales en ciencias farmacéuticas. Innovaciones tecnológicas y desarrollos recientes.",
      prerequisites: "FBQ701",
      objectives: ["Conocer tendencias", "Aplicar innovaciones", "Mantenerse actualizado"],
    },
  ],
  9: [
    {
      code: "FBQ901",
      name: "Internado Rotatorio",
      credits: 15,
      hours: 30,
      type: "practice",
      description:
        "Rotación por diferentes áreas de práctica farmacéutica. Experiencia integral en el ejercicio profesional.",
      prerequisites: "FBQ801",
      objectives: ["Rotar por áreas", "Integrar conocimientos", "Prepararse para ejercicio"],
    },
    {
      code: "FBQ902",
      name: "Seminario de Casos Clínicos",
      credits: 2,
      hours: 3,
      type: "professional",
      description: "Análisis de casos clínicos farmacéuticos. Resolución de problemas y toma de decisiones.",
      prerequisites: "FBQ801",
      objectives: ["Analizar casos", "Resolver problemas", "Tomar decisiones"],
    },
  ],
  10: [
    {
      code: "FBQ1001",
      name: "Residencia Farmacéutica",
      credits: 20,
      hours: 40,
      type: "practice",
      description: "Práctica profesional supervisada intensiva. Especialización en área específica de farmacia.",
      prerequisites: "FBQ901",
      objectives: ["Especializarse", "Ejercer autonomía", "Demostrar experticia"],
    },
  ],
}

const typeColors = {
  basic: "bg-blue-100 text-blue-800 border-blue-200",
  professional: "bg-green-100 text-green-800 border-green-200",
  humanistic: "bg-purple-100 text-purple-800 border-purple-200",
  research: "bg-orange-100 text-orange-800 border-orange-200",
  practice: "bg-red-100 text-red-800 border-red-200",
  specialty: "bg-indigo-100 text-indigo-800 border-indigo-200",
}

const typeLabels = {
  basic: "Básica",
  professional: "Profesional",
  humanistic: "Humanística",
  research: "Investigación",
  practice: "Práctica",
  specialty: "Especialidad",
} as const;

type SubjectType = keyof typeof typeLabels;

const programStats = [
  {
    icon: Users,
    label: "Estudiantes Activos",
    value: "320+",
    description: "Estudiantes matriculados en el programa",
  },
  {
    icon: GraduationCap,
    label: "Graduados",
    value: "800+",
    description: "Profesionales graduados desde 2008",
  },
  {
    icon: Award,
    label: "Tasa de Empleabilidad",
    value: "98%",
    description: "Graduados empleados en 6 meses",
  },
  {
    icon: TrendingUp,
    label: "Satisfacción",
    value: "4.9/5",
    description: "Calificación de empleadores",
  },
]

export default function FarmaciaBioquimicaPage() {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [infoDialogOpen, setInfoDialogOpen] = useState(false)
  const [admissionDialogOpen, setAdmissionDialogOpen] = useState(false)
  const [visitDialogOpen, setVisitDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-700/20" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-xl" />
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-xl" />
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                <Flask className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Farmacia y Bioquímica
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-green-100">
              Formamos profesionales expertos en medicamentos y análisis clínicos, líderes en innovación farmacéutica y
              salud pública
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span>10 Semestres</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <BookOpen className="w-5 h-5" />
                <span>220 Créditos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span>Título Profesional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
                  <CardContent className="pt-6">
                    <stat.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-800 mb-2">{stat.value}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Pill className="w-8 h-8 text-green-600" />
                    <CardTitle className="text-2xl text-green-800">Misión del Programa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Formar profesionales farmacéuticos-bioquímicos con sólida formación científica, técnica y
                    humanística, capaces de contribuir al uso racional de medicamentos, realizar análisis clínicos
                    especializados y participar en la investigación farmacéutica para mejorar la salud pública.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Nuestro programa integra la ciencia farmacéutica con la práctica clínica, formando profesionales
                    versátiles y altamente competentes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Microscope className="w-8 h-8 text-green-600" />
                    <CardTitle className="text-2xl text-green-800">Visión del Programa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ser reconocidos como el programa líder en formación de farmacéuticos-bioquímicos, destacando por la
                    excelencia académica, investigación innovadora y compromiso con el desarrollo de la industria
                    farmacéutica y los servicios de salud a nivel nacional e internacional.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Aspiramos a ser referente en innovación farmacéutica y análisis clínico, contribuyendo al avance
                    científico y tecnológico del sector.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Competencias Profesionales</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Formamos profesionales integrales con competencias especializadas en las áreas farmacéutica y bioquímica,
              preparados para los desafíos del sector salud
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Beaker,
                  title: "Análisis Clínicos",
                  description:
                    "Realizar análisis de laboratorio clínico con precisión y calidad, interpretando resultados y contribuyendo al diagnóstico médico mediante técnicas analíticas avanzadas.",
                  skills: ["Hematología", "Química Clínica", "Microbiología", "Inmunología"],
                },
                {
                  icon: Atom,
                  title: "Desarrollo Farmacéutico",
                  description:
                    "Participar en investigación y desarrollo de nuevos medicamentos, desde el diseño molecular hasta la formulación y evaluación de formas farmacéuticas innovadoras.",
                  skills: ["Química Medicinal", "Formulación", "Control de Calidad", "I+D"],
                },
                {
                  icon: Building2,
                  title: "Gestión Farmacéutica",
                  description:
                    "Administrar servicios farmacéuticos y garantizar calidad en la atención, liderando equipos y optimizando procesos en diferentes entornos de práctica profesional.",
                  skills: ["Atención Farmacéutica", "Gestión de Calidad", "Farmacovigilancia", "Administración"],
                },
              ].map((competency, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-green-50">
                  <CardContent className="pt-6">
                    <competency.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-green-800">{competency.title}</h3>
                    <p className="text-gray-600 mb-4">{competency.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {competency.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-800">Malla Curricular</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan de estudios estructurado en 10 semestres con formación integral, combinando ciencias básicas,
              profesionales y práctica clínica
            </p>
          </motion.div>

          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-8">
              {Object.keys(curriculumData).map((semester) => (
                <TabsTrigger key={semester} value={semester} className="text-sm">
                  S{semester}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(curriculumData).map(([semester, subjects]) => (
              <TabsContent key={semester} value={semester}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Semestre {semester}</h3>
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span>Total Créditos: {subjects.reduce((sum, subject) => sum + subject.credits, 0)}</span>
                      <span>Total Horas: {subjects.reduce((sum, subject) => sum + subject.hours, 0)}</span>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {subjects.map((subject, index) => (
                      <motion.div
                        key={subject.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-green-500">
                          <CardContent className="p-4">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge variant="outline" className="font-mono text-xs">
                                    {subject.code}
                                  </Badge>
                                  <Badge className={`text-xs ${typeColors[subject.type as keyof typeof typeColors]}`}>
                                    {typeLabels[subject.type as SubjectType]}
                                  </Badge>
                                  {subject.prerequisites !== "Ninguno" && (
                                    <Badge variant="secondary" className="text-xs">
                                      Prereq: {subject.prerequisites}
                                    </Badge>
                                  )}
                                </div>
                                <h4 className="font-semibold text-lg text-gray-900 mb-1">{subject.name}</h4>
                                <p className="text-sm text-gray-600 line-clamp-2">{subject.description}</p>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="text-center">
                                  <div className="font-semibold text-green-600">{subject.credits}</div>
                                  <div>Créditos</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-semibold text-blue-600">{subject.hours}</div>
                                  <div>Horas</div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Field of Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">Campo Laboral</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diversas oportunidades en el sector farmacéutico y de salud con excelentes perspectivas de crecimiento
              profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Farmacias Comunitarias",
                description: "Atención farmacéutica directa, dispensación y seguimiento farmacoterapéutico",
                icon: Building2,
              },
              {
                title: "Hospitales y Clínicas",
                description: "Farmacia hospitalaria, farmacotecnia y atención farmacéutica especializada",
                icon: Target,
              },
              {
                title: "Laboratorios Clínicos",
                description: "Análisis clínicos especializados, control de calidad y diagnóstico",
                icon: Microscope,
              },
              {
                title: "Industria Farmacéutica",
                description: "Investigación, desarrollo, producción y control de medicamentos",
                icon: Flask,
              },
              {
                title: "Control de Calidad",
                description: "Validación de métodos, análisis fisicoquímicos y microbiológicos",
                icon: Award,
              },
              {
                title: "Investigación y Desarrollo",
                description: "I+D farmacéutico, química medicinal y desarrollo de nuevos fármacos",
                icon: Atom,
              },
              {
                title: "Regulación Sanitaria",
                description: "Entidades regulatorias, registro sanitario y farmacovigilancia",
                icon: Users,
              },
              {
                title: "Consultoría Farmacéutica",
                description: "Asesoría técnica, auditorías y consultoría especializada",
                icon: GraduationCap,
              },
              {
                title: "Docencia Universitaria",
                description: "Formación académica e investigación en ciencias farmacéuticas",
                icon: BookOpen,
              },
              {
                title: "Farmacovigilancia",
                description: "Monitoreo de seguridad de medicamentos y reacciones adversas",
                icon: Zap,
              },
              {
                title: "Análisis Toxicológicos",
                description: "Toxicología clínica, forense y evaluación de riesgos",
                icon: Beaker,
              },
              {
                title: "Biotecnología Farmacéutica",
                description: "Desarrollo de biofármacos y tecnologías farmacéuticas avanzadas",
                icon: Pill,
              },
            ].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full border-2 border-green-50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <field.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{field.title}</h3>
                    <p className="text-sm text-gray-600">{field.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Actions */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-green-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="font-medium">Coordinación Académica</span>
                      <p className="text-sm text-gray-600">+51 945 987 048 / 01 9041269</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="font-medium">Correo Electrónico</span>
                      <p className="text-sm text-gray-600">informes@unidx.edu.pe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="font-medium">Ubicación</span>
                      <p className="text-sm text-gray-600">Av. Bolivia 626, Lima 15082, Perú</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Horario de Atención:</strong>
                      <br />
                      Lunes a Viernes: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-green-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Recursos y Acciones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Malla Curricular
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-200 hover:bg-green-50 bg-transparent"
                    onClick={() => setInfoDialogOpen(true)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Solicitar Información Detallada
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-200 hover:bg-green-50 bg-transparent"
                    onClick={() => setAdmissionDialogOpen(true)}
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Proceso de Admisión 2025
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-200 hover:bg-green-50 bg-transparent"
                    onClick={() => setVisitDialogOpen(true)}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Agendar Visita a Laboratorios
                  </Button>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 text-center">
                      ¿Interesado en conocer más sobre nuestros laboratorios y equipos especializados? Agenda una visita
                      guiada.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information Request Dialog */}
      <Dialog open={infoDialogOpen} onOpenChange={setInfoDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Solicitar Información Detallada</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Tu nombre completo" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input type="tel" className="w-full p-2 border rounded-md" placeholder="Tu número de teléfono" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Información de Interés</label>
              <select className="w-full p-2 border rounded-md">
                <option>Plan de estudios completo</option>
                <option>Laboratorios y equipos</option>
                <option>Costos y financiamiento</option>
                <option>Requisitos de admisión</option>
                <option>Prácticas profesionales</option>
                <option>Campo laboral</option>
              </select>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Enviar Solicitud</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Admission Process Dialog */}
      <Dialog open={admissionDialogOpen} onOpenChange={setAdmissionDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center space-x-2 text-xl">
              <Calendar className="h-6 w-6 text-green-600" />
              <span>Admisiones 2025</span>
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <div className="text-center space-y-6">
              {/* Próximamente Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full">
                <Clock className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-orange-800 font-semibold text-lg">Próximamente</span>
              </div>

              {/* Fecha de Lanzamiento */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-green-600 font-medium">Fecha de Lanzamiento</p>
                    <p className="text-2xl font-bold text-green-900">-- de ----, 202-</p>
                  </div>
                </div>
                <p className="text-green-700 text-sm">
                  El proceso de admisiones se abrirá oficialmente el -- de ---- de 202-
                </p>
              </div>

              {/* Información Adicional */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900 text-sm">¿Quieres ser notificado?</p>
                      <p className="text-gray-600 text-xs mt-1">
                        Regístrate para recibir información sobre fechas importantes, requisitos y modalidades de
                        ingreso.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Información de Contacto */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="font-medium text-blue-900 text-sm mb-2">Información y Consultas</p>
                  <div className="space-y-1 text-xs text-blue-800">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3" />
                      <span>+51 945987048 / 01 9041269</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3" />
                      <span>informes@unidx.edu.pe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de Acción */}
              <div className="pt-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setAdmissionDialogOpen(false)}
                >
                  Entendido
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Laboratory Visit Dialog */}
      <Dialog open={visitDialogOpen} onOpenChange={setVisitDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Agendar Visita a Laboratorios</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Tu nombre completo" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input type="tel" className="w-full p-2 border rounded-md" placeholder="Tu número de teléfono" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fecha Preferida</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Horario Preferido</label>
              <select className="w-full p-2 border rounded-md">
                <option>Mañana (8:00 AM - 12:00 PM)</option>
                <option>Tarde (2:00 PM - 6:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Laboratorios de Interés</label>
              <select className="w-full p-2 border rounded-md">
                <option>Todos los laboratorios</option>
                <option>Química Analítica</option>
                <option>Análisis Clínicos</option>
                <option>Farmacología</option>
                <option>Microbiología</option>
                <option>Control de Calidad</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Número de Acompañantes</label>
              <select className="w-full p-2 border rounded-md">
                <option>Solo yo</option>
                <option>1 acompañante</option>
                <option>2 acompañantes</option>
                <option>3 o más acompañantes</option>
              </select>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Agendar Visita</Button>
          </div>
        </DialogContent>
      </Dialog>

      <ModernFooter />
    </div>
  )
}
