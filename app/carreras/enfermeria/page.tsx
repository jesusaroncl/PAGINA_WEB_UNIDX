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
  Heart,
  Users,
  Clock,
  BookOpen,
  Award,
  Stethoscope,
  Activity,
  Shield,
  Phone,
  Mail,
  MapPin,
  Download,
  FileText,
  Building,
  UserCheck,
  TrendingUp,
  Calendar,
  Bell,
} from "lucide-react"

// Tipos para el curriculum
type SubjectType = "basic" | "professional" | "humanistic" | "research" | "practice" | "specialty"

interface Subject {
  code: string
  name: string
  credits: number
  hours: number
  type: SubjectType
  description: string
  prerequisites: string
  objectives: string[]
}

const curriculumData: Record<string, Subject[]> = {
  1: [
    {
      code: "ENF101",
      name: "Anatomía Humana I",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Estudio de la estructura del cuerpo humano, sistemas básicos y terminología médica. Incluye sistemas musculoesquelético, cardiovascular y respiratorio.",
      prerequisites: "Ninguno",
      objectives: [
        "Identificar estructuras anatómicas básicas",
        "Comprender terminología médica",
        "Relacionar estructura con función",
      ],
    },
    {
      code: "ENF102",
      name: "Fisiología Humana I",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Funcionamiento de los sistemas corporales y procesos fisiológicos básicos. Homeostasis y regulación corporal.",
      prerequisites: "ENF101",
      objectives: [
        "Comprender procesos fisiológicos",
        "Analizar mecanismos de regulación",
        "Integrar sistemas corporales",
      ],
    },
    {
      code: "ENF103",
      name: "Química General",
      credits: 3,
      hours: 4,
      type: "basic",
      description:
        "Principios fundamentales de química aplicados a las ciencias de la salud. Estructura atómica, enlaces químicos y reacciones.",
      prerequisites: "Ninguno",
      objectives: [
        "Dominar conceptos químicos básicos",
        "Aplicar química a procesos biológicos",
        "Resolver problemas químicos",
      ],
    },
    {
      code: "ENF104",
      name: "Introducción a la Enfermería",
      credits: 3,
      hours: 4,
      type: "professional",
      description:
        "Historia, filosofía y fundamentos teóricos de la profesión de enfermería. Modelos y teorías de enfermería.",
      prerequisites: "Ninguno",
      objectives: [
        "Conocer historia de enfermería",
        "Comprender modelos teóricos",
        "Desarrollar identidad profesional",
      ],
    },
    {
      code: "ENF105",
      name: "Comunicación en Salud",
      credits: 2,
      hours: 3,
      type: "humanistic",
      description:
        "Técnicas de comunicación efectiva con pacientes y equipos de salud. Comunicación terapéutica y asertiva.",
      prerequisites: "Ninguno",
      objectives: ["Desarrollar habilidades comunicativas", "Aplicar comunicación terapéutica", "Trabajar en equipo"],
    },
    {
      code: "ENF106",
      name: "Matemáticas Aplicadas",
      credits: 2,
      hours: 3,
      type: "basic",
      description:
        "Cálculos matemáticos aplicados a dosificación y administración de medicamentos. Sistemas de medidas y conversiones.",
      prerequisites: "Ninguno",
      objectives: ["Realizar cálculos de dosis", "Convertir unidades de medida", "Aplicar matemáticas en enfermería"],
    },
  ],
  2: [
    {
      code: "ENF201",
      name: "Anatomía Humana II",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Continuación del estudio anatómico con énfasis en sistemas complejos: nervioso, endocrino, digestivo y genitourinario.",
      prerequisites: "ENF101",
      objectives: ["Estudiar sistemas complejos", "Integrar conocimientos anatómicos", "Aplicar anatomía clínica"],
    },
    {
      code: "ENF202",
      name: "Fisiología Humana II",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Procesos fisiológicos avanzados y regulación homeostática. Integración de sistemas y respuestas adaptativas.",
      prerequisites: "ENF102",
      objectives: ["Comprender fisiología avanzada", "Analizar homeostasis", "Integrar respuestas corporales"],
    },
    {
      code: "ENF203",
      name: "Microbiología",
      credits: 3,
      hours: 5,
      type: "basic",
      description:
        "Estudio de microorganismos y su relación con la salud y enfermedad. Bacterias, virus, hongos y parásitos.",
      prerequisites: "ENF103",
      objectives: ["Identificar microorganismos", "Comprender patogénesis", "Aplicar medidas de control"],
    },
    {
      code: "ENF204",
      name: "Fundamentos de Enfermería",
      credits: 4,
      hours: 8,
      type: "professional",
      description:
        "Técnicas básicas de enfermería y cuidados fundamentales del paciente. Proceso de atención de enfermería.",
      prerequisites: "ENF104",
      objectives: ["Aplicar proceso de enfermería", "Realizar técnicas básicas", "Brindar cuidados fundamentales"],
    },
    {
      code: "ENF205",
      name: "Bioética",
      credits: 2,
      hours: 3,
      type: "humanistic",
      description:
        "Principios éticos aplicados a la práctica de enfermería y toma de decisiones. Dilemas éticos en salud.",
      prerequisites: "ENF105",
      objectives: ["Aplicar principios éticos", "Resolver dilemas morales", "Tomar decisiones éticas"],
    },
    {
      code: "ENF206",
      name: "Psicología General",
      credits: 3,
      hours: 4,
      type: "humanistic",
      description:
        "Fundamentos psicológicos del comportamiento humano en salud. Desarrollo psicológico y personalidad.",
      prerequisites: "ENF105",
      objectives: ["Comprender comportamiento humano", "Aplicar psicología en cuidados", "Desarrollar empatía"],
    },
  ],
  3: [
    {
      code: "ENF301",
      name: "Patología General",
      credits: 4,
      hours: 6,
      type: "basic",
      description:
        "Estudio de los procesos patológicos y mecanismos de enfermedad. Inflamación, neoplasias y trastornos degenerativos.",
      prerequisites: "ENF202, ENF203",
      objectives: [
        "Comprender procesos patológicos",
        "Identificar mecanismos de enfermedad",
        "Relacionar patología con clínica",
      ],
    },
    {
      code: "ENF302",
      name: "Farmacología I",
      credits: 3,
      hours: 5,
      type: "professional",
      description:
        "Principios farmacológicos y administración segura de medicamentos. Farmacocinética y farmacodinamia básica.",
      prerequisites: "ENF106, ENF202",
      objectives: ["Comprender acción de fármacos", "Administrar medicamentos", "Prevenir errores medicamentosos"],
    },
    {
      code: "ENF303",
      name: "Enfermería Médico-Quirúrgica I",
      credits: 5,
      hours: 10,
      type: "professional",
      description:
        "Cuidados de enfermería en pacientes adultos con patologías médicas. Valoración, diagnóstico e intervenciones.",
      prerequisites: "ENF204, ENF301",
      objectives: ["Brindar cuidados médicos", "Aplicar proceso de enfermería", "Manejar pacientes complejos"],
    },
    {
      code: "ENF304",
      name: "Semiología",
      credits: 3,
      hours: 6,
      type: "professional",
      description: "Técnicas de valoración física y reconocimiento de signos y síntomas. Examen físico sistemático.",
      prerequisites: "ENF202, ENF204",
      objectives: ["Realizar examen físico", "Identificar signos y síntomas", "Documentar hallazgos"],
    },
    {
      code: "ENF305",
      name: "Nutrición y Dietética",
      credits: 2,
      hours: 3,
      type: "professional",
      description: "Principios nutricionales y planificación dietética en salud y enfermedad. Terapia nutricional.",
      prerequisites: "ENF103",
      objectives: ["Evaluar estado nutricional", "Planificar dietas terapéuticas", "Educar sobre nutrición"],
    },
    {
      code: "ENF306",
      name: "Estadística en Salud",
      credits: 2,
      hours: 3,
      type: "research",
      description: "Métodos estadísticos aplicados a la investigación en enfermería. Análisis de datos en salud.",
      prerequisites: "ENF106",
      objectives: ["Aplicar estadística descriptiva", "Interpretar datos de salud", "Realizar análisis básicos"],
    },
  ],
  4: [
    {
      code: "ENF401",
      name: "Farmacología II",
      credits: 3,
      hours: 5,
      type: "professional",
      description:
        "Farmacología avanzada y manejo de medicamentos especializados. Interacciones medicamentosas y efectos adversos.",
      prerequisites: "ENF302",
      objectives: ["Manejar fármacos especializados", "Prevenir interacciones", "Monitorear efectos adversos"],
    },
    {
      code: "ENF402",
      name: "Enfermería Médico-Quirúrgica II",
      credits: 5,
      hours: 10,
      type: "professional",
      description: "Cuidados especializados en cirugía y procedimientos invasivos. Pre, trans y postoperatorio.",
      prerequisites: "ENF303",
      objectives: ["Brindar cuidados quirúrgicos", "Manejar complicaciones", "Aplicar cuidados perioperatorios"],
    },
    {
      code: "ENF403",
      name: "Enfermería Materno-Infantil",
      credits: 4,
      hours: 8,
      type: "professional",
      description: "Cuidados durante embarazo, parto, puerperio y pediatría básica. Salud reproductiva y neonatal.",
      prerequisites: "ENF303, ENF304",
      objectives: ["Atender embarazo y parto", "Cuidar recién nacidos", "Promover salud materno-infantil"],
    },
    {
      code: "ENF404",
      name: "Salud Mental",
      credits: 3,
      hours: 6,
      type: "professional",
      description: "Cuidados de enfermería en salud mental y trastornos psiquiátricos. Intervenciones terapéuticas.",
      prerequisites: "ENF206",
      objectives: ["Evaluar salud mental", "Aplicar intervenciones psiquiátricas", "Promover bienestar mental"],
    },
    {
      code: "ENF405",
      name: "Metodología de la Investigación",
      credits: 3,
      hours: 4,
      type: "research",
      description: "Diseño y metodología de investigación en ciencias de enfermería. Protocolo de investigación.",
      prerequisites: "ENF306",
      objectives: ["Diseñar investigaciones", "Aplicar metodología científica", "Elaborar protocolos"],
    },
    {
      code: "ENF406",
      name: "Epidemiología",
      credits: 2,
      hours: 3,
      type: "research",
      description: "Estudio de la distribución y determinantes de enfermedades. Vigilancia epidemiológica.",
      prerequisites: "ENF306",
      objectives: ["Comprender epidemiología", "Analizar patrones de enfermedad", "Aplicar vigilancia"],
    },
  ],
  5: [
    {
      code: "ENF501",
      name: "Enfermería en Cuidados Intensivos",
      credits: 4,
      hours: 8,
      type: "specialty",
      description: "Cuidados especializados en unidades de terapia intensiva. Monitoreo avanzado y soporte vital.",
      prerequisites: "ENF402",
      objectives: ["Manejar pacientes críticos", "Usar tecnología avanzada", "Aplicar soporte vital"],
    },
    {
      code: "ENF502",
      name: "Enfermería Pediátrica",
      credits: 4,
      hours: 8,
      type: "professional",
      description: "Cuidados especializados en población infantil y adolescente. Crecimiento y desarrollo.",
      prerequisites: "ENF403",
      objectives: ["Atender población pediátrica", "Evaluar crecimiento", "Aplicar cuidados especializados"],
    },
    {
      code: "ENF503",
      name: "Enfermería Geriátrica",
      credits: 3,
      hours: 6,
      type: "professional",
      description: "Cuidados específicos para adultos mayores y envejecimiento. Síndromes geriátricos.",
      prerequisites: "ENF402",
      objectives: ["Atender adultos mayores", "Manejar síndromes geriátricos", "Promover envejecimiento saludable"],
    },
    {
      code: "ENF504",
      name: "Salud Pública",
      credits: 3,
      hours: 5,
      type: "professional",
      description: "Promoción de la salud y prevención de enfermedades comunitarias. Programas de salud pública.",
      prerequisites: "ENF406",
      objectives: ["Promover salud comunitaria", "Diseñar programas preventivos", "Aplicar salud pública"],
    },
    {
      code: "ENF505",
      name: "Administración en Enfermería",
      credits: 3,
      hours: 4,
      type: "professional",
      description: "Gestión y liderazgo en servicios de enfermería. Administración de recursos humanos y materiales.",
      prerequisites: "ENF402",
      objectives: ["Liderar equipos de enfermería", "Gestionar recursos", "Aplicar administración"],
    },
    {
      code: "ENF506",
      name: "Práctica Clínica I",
      credits: 6,
      hours: 12,
      type: "practice",
      description: "Práctica supervisada en servicios hospitalarios básicos. Aplicación de conocimientos teóricos.",
      prerequisites: "ENF402, ENF403",
      objectives: ["Aplicar conocimientos clínicos", "Desarrollar habilidades prácticas", "Integrar teoría y práctica"],
    },
  ],
  6: [
    {
      code: "ENF601",
      name: "Enfermería de Emergencias",
      credits: 4,
      hours: 8,
      type: "specialty",
      description: "Atención de enfermería en situaciones de urgencia y emergencia. Triage y cuidados críticos.",
      prerequisites: "ENF501",
      objectives: ["Manejar emergencias", "Aplicar triage", "Brindar cuidados críticos"],
    },
    {
      code: "ENF602",
      name: "Enfermería Quirúrgica Avanzada",
      credits: 4,
      hours: 8,
      type: "specialty",
      description: "Cuidados especializados en cirugías complejas y postoperatorio. Instrumentación quirúrgica.",
      prerequisites: "ENF402",
      objectives: ["Asistir cirugías complejas", "Manejar instrumentación", "Brindar cuidados postoperatorios"],
    },
    {
      code: "ENF603",
      name: "Enfermería Oncológica",
      credits: 3,
      hours: 6,
      type: "specialty",
      description: "Cuidados especializados en pacientes con cáncer. Quimioterapia y cuidados paliativos.",
      prerequisites: "ENF501",
      objectives: ["Atender pacientes oncológicos", "Administrar quimioterapia", "Brindar cuidados paliativos"],
    },
    {
      code: "ENF604",
      name: "Educación para la Salud",
      credits: 2,
      hours: 4,
      type: "professional",
      description: "Diseño e implementación de programas educativos en salud. Metodologías educativas.",
      prerequisites: "ENF504",
      objectives: ["Diseñar programas educativos", "Aplicar metodologías", "Evaluar aprendizaje"],
    },
    {
      code: "ENF605",
      name: "Ética Profesional",
      credits: 2,
      hours: 3,
      type: "humanistic",
      description: "Dilemas éticos y responsabilidad profesional en enfermería. Código deontológico.",
      prerequisites: "ENF205",
      objectives: ["Aplicar ética profesional", "Resolver dilemas éticos", "Cumplir código deontológico"],
    },
    {
      code: "ENF606",
      name: "Práctica Clínica II",
      credits: 8,
      hours: 16,
      type: "practice",
      description: "Práctica avanzada en servicios especializados. Mayor autonomía y responsabilidad.",
      prerequisites: "ENF506",
      objectives: ["Desarrollar autonomía profesional", "Aplicar cuidados especializados", "Demostrar competencias"],
    },
  ],
  7: [
    {
      code: "ENF701",
      name: "Enfermería Comunitaria",
      credits: 4,
      hours: 8,
      type: "professional",
      description: "Cuidados de enfermería en atención primaria y comunidad. Programas comunitarios de salud.",
      prerequisites: "ENF504",
      objectives: ["Trabajar en comunidad", "Desarrollar programas", "Promover participación comunitaria"],
    },
    {
      code: "ENF702",
      name: "Calidad en Servicios de Salud",
      credits: 3,
      hours: 4,
      type: "professional",
      description: "Gestión de calidad y mejora continua en servicios de enfermería. Indicadores de calidad.",
      prerequisites: "ENF505",
      objectives: ["Gestionar calidad", "Implementar mejoras", "Evaluar indicadores"],
    },
    {
      code: "ENF703",
      name: "Enfermería Basada en Evidencia",
      credits: 3,
      hours: 4,
      type: "research",
      description: "Aplicación de evidencia científica en la práctica clínica. Revisión sistemática y metaanálisis.",
      prerequisites: "ENF405",
      objectives: ["Aplicar evidencia científica", "Realizar revisiones", "Mejorar práctica clínica"],
    },
    {
      code: "ENF704",
      name: "Seminario de Investigación",
      credits: 2,
      hours: 3,
      type: "research",
      description: "Desarrollo de proyecto de investigación en enfermería. Presentación de resultados.",
      prerequisites: "ENF405",
      objectives: ["Desarrollar investigación", "Presentar resultados", "Aplicar metodología"],
    },
    {
      code: "ENF705",
      name: "Práctica Clínica III",
      credits: 10,
      hours: 20,
      type: "practice",
      description: "Práctica intensiva con mayor autonomía profesional. Liderazgo en cuidados de enfermería.",
      prerequisites: "ENF606",
      objectives: ["Demostrar liderazgo", "Ejercer autonomía", "Integrar competencias"],
    },
  ],
  8: [
    {
      code: "ENF801",
      name: "Internado de Enfermería",
      credits: 15,
      hours: 30,
      type: "practice",
      description:
        "Práctica profesional supervisada en diferentes servicios hospitalarios. Rotación por especialidades.",
      prerequisites: "ENF705",
      objectives: ["Rotar por especialidades", "Aplicar competencias", "Prepararse para ejercicio profesional"],
    },
    {
      code: "ENF802",
      name: "Trabajo de Grado",
      credits: 4,
      hours: 6,
      type: "research",
      description: "Desarrollo y presentación de trabajo de investigación final. Defensa de tesis.",
      prerequisites: "ENF704",
      objectives: ["Completar investigación", "Defender tesis", "Demostrar competencias investigativas"],
    },
    {
      code: "ENF803",
      name: "Preparación para el Ejercicio Profesional",
      credits: 2,
      hours: 3,
      type: "professional",
      description: "Preparación para el ejercicio profesional independiente. Aspectos legales y profesionales.",
      prerequisites: "ENF705",
      objectives: ["Prepararse para ejercicio", "Conocer aspectos legales", "Desarrollar profesionalismo"],
    },
  ],
}

const typeColors: Record<SubjectType, string> = {
  basic: "bg-blue-100 text-blue-800 border-blue-200",
  professional: "bg-green-100 text-green-800 border-green-200",
  humanistic: "bg-purple-100 text-purple-800 border-purple-200",
  research: "bg-orange-100 text-orange-800 border-orange-200",
  practice: "bg-red-100 text-red-800 border-red-200",
  specialty: "bg-indigo-100 text-indigo-800 border-indigo-200",
}

const typeLabels: Record<SubjectType, string> = {
  basic: "Básica",
  professional: "Profesional",
  humanistic: "Humanística",
  research: "Investigación",
  practice: "Práctica",
  specialty: "Especialidad",
}

const programStats = [
  {
    icon: Users,
    label: "Estudiantes Activos",
    value: "450+",
    description: "Estudiantes matriculados en el programa",
  },
  {
    icon: GraduationCap,
    label: "Graduados",
    value: "1,200+",
    description: "Profesionales graduados desde 2010",
  },
  {
    icon: Award,
    label: "Tasa de Empleabilidad",
    value: "95%",
    description: "Graduados empleados en 6 meses",
  },
  {
    icon: TrendingUp,
    label: "Satisfacción",
    value: "4.8/5",
    description: "Calificación de empleadores",
  },
]

export default function EnfermeriaPage() {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false)
  const [admissionDialogOpen, setAdmissionDialogOpen] = useState(false)
  const [visitDialogOpen, setVisitDialogOpen] = useState(false)
  
  // Estados para formularios
  const [infoFormData, setInfoFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    informacionInteres: "",
  })
  const [visitFormData, setVisitFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fechaPreferida: "",
    horarioPreferido: "",
    acompanantes: "",
  })
  const [isSubmittingInfo, setIsSubmittingInfo] = useState(false)
  const [isSubmittingVisit, setIsSubmittingVisit] = useState(false)

  const handleInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingInfo(true)
    
    try {
      const response = await fetch('/api/carreras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...infoFormData,
          carrera: 'enfermeria'
        }),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert(`¡Solicitud enviada exitosamente! Número de solicitud: ${result.numeroSolicitud}`)
        setInfoDialogOpen(false)
        setInfoFormData({ nombre: "", email: "", telefono: "", informacionInteres: "" })
      } else {
        alert(result.error || 'Error al enviar la solicitud')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error de conexión al enviar la solicitud')
    } finally {
      setIsSubmittingInfo(false)
    }
  }

  const handleVisitSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingVisit(true)
    
    try {
      const response = await fetch('/api/carreras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...visitFormData,
          carrera: 'enfermeria'
        }),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert(`¡Visita agendada exitosamente! Número de solicitud: ${result.numeroSolicitud}`)
        setVisitDialogOpen(false)
        setVisitFormData({ nombre: "", email: "", telefono: "", fechaPreferida: "", horarioPreferido: "", acompanantes: "" })
      } else {
        alert(result.error || 'Error al agendar la visita')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error de conexión al agendar la visita')
    } finally {
      setIsSubmittingVisit(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-700/20" />
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
                <Stethoscope className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Licenciatura en Enfermería
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Formamos profesionales comprometidos con el cuidado integral de la salud humana, combinando ciencia,
              tecnología y humanismo
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span>8 Semestres</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <BookOpen className="w-5 h-5" />
                <span>160 Créditos</span>
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
                <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-100">
                  <CardContent className="pt-6">
                    <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
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
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-2xl text-blue-800">Misión del Programa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Formar profesionales de enfermería con sólidos conocimientos científicos, técnicos y humanísticos,
                    capaces de brindar cuidado integral de calidad, promover la salud, prevenir enfermedades y
                    contribuir al bienestar de individuos, familias y comunidades.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Nuestro enfoque se centra en la excelencia académica, la práctica basada en evidencia y el
                    desarrollo de competencias profesionales que respondan a las necesidades actuales del sector salud.
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
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-2xl text-blue-800">Visión del Programa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ser reconocidos como un programa líder en la formación de enfermeros profesionales, comprometidos
                    con la excelencia académica, la investigación y la práctica basada en evidencia, contribuyendo al
                    desarrollo del sistema de salud nacional e internacional.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Aspiramos a formar líderes en enfermería que transformen la atención en salud mediante la
                    innovación, la investigación y el compromiso social.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Competencias Profesionales</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Nuestros graduados desarrollan competencias integrales que les permiten destacar en diferentes áreas del
              ejercicio profesional de enfermería
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Cuidado Directo",
                  description:
                    "Brindar cuidado integral basado en el proceso de enfermería, aplicando conocimientos científicos y técnicas especializadas para la atención de pacientes en diferentes niveles de complejidad.",
                  skills: ["Proceso de Enfermería", "Técnicas Clínicas", "Cuidados Especializados"],
                },
                {
                  icon: Shield,
                  title: "Promoción y Prevención",
                  description:
                    "Desarrollar programas de promoción de salud y prevención de enfermedades, trabajando con individuos, familias y comunidades para mejorar los indicadores de salud.",
                  skills: ["Educación en Salud", "Programas Preventivos", "Salud Comunitaria"],
                },
                {
                  icon: UserCheck,
                  title: "Liderazgo y Gestión",
                  description:
                    "Liderar equipos de salud, gestionar recursos y servicios de enfermería, garantizando la calidad y seguridad en la atención de los pacientes.",
                  skills: ["Liderazgo", "Gestión de Calidad", "Administración"],
                },
              ].map((competency, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-blue-50">
                  <CardContent className="pt-6">
                    <competency.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">{competency.title}</h3>
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
            <h2 className="text-4xl font-bold mb-4 text-blue-800">Malla Curricular</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan de estudios estructurado en 8 semestres con enfoque teórico-práctico, diseñado para formar
              profesionales competentes y comprometidos
            </p>
          </motion.div>

          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              {Object.keys(curriculumData).map((semester) => (
                <TabsTrigger key={semester} value={semester} className="text-sm">
                  Sem {semester}
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
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">Semestre {semester}</h3>
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
                        <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge variant="outline" className="font-mono text-xs">
                                    {subject.code}
                                  </Badge>
                                  <Badge className={`text-xs ${typeColors[subject.type]}`}>
                                    {typeLabels[subject.type]}
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
                                  <div className="font-semibold text-blue-600">{subject.credits}</div>
                                  <div>Créditos</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-semibold text-green-600">{subject.hours}</div>
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
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Campo Laboral</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Amplias oportunidades profesionales en el sector salud con alta demanda laboral y crecimiento profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hospitales y Clínicas",
                description: "Atención directa en servicios de hospitalización, urgencias y consulta externa",
                icon: Building,
              },
              {
                title: "Centros de Salud",
                description: "Atención primaria, programas de promoción y prevención en salud",
                icon: Heart,
              },
              {
                title: "Cuidados Domiciliarios",
                description: "Atención personalizada en el hogar para pacientes con necesidades especiales",
                icon: Users,
              },
              {
                title: "Educación en Enfermería",
                description: "Docencia universitaria y formación de nuevos profesionales",
                icon: GraduationCap,
              },
              {
                title: "Investigación en Salud",
                description: "Desarrollo de proyectos de investigación y evidencia científica",
                icon: BookOpen,
              },
              {
                title: "Salud Ocupacional",
                description: "Prevención de riesgos laborales y promoción de salud en empresas",
                icon: Shield,
              },
              {
                title: "Cuidados Intensivos",
                description: "Atención especializada en unidades de cuidados críticos",
                icon: Activity,
              },
              {
                title: "Emergencias Médicas",
                description: "Atención prehospitalaria y servicios de urgencias médicas",
                icon: Stethoscope,
              },
            ].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full border-2 border-blue-50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <field.icon className="w-6 h-6 text-blue-600" />
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="font-medium">Coordinación Académica</span>
                      <p className="text-sm text-gray-600">+57 (1) 234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="font-medium">Correo Electrónico</span>
                      <p className="text-sm text-gray-600">informes@unidx.edu.pe</p>
                      <p className="text-xs text-gray-500">(temporalmente: rector@unidx.edu.pe)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="font-medium">Ubicación</span>
                      <p className="text-sm text-gray-600">
                        Campus Universitario, Edificio de Ciencias de la Salud, Piso 3
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Horario de Atención:</strong>
                      <br />
                      Lunes a Viernes: 8:00 AM - 5:00 PM
                      <br />
                      Sábados: 8:00 AM - 12:00 PM
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
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Recursos y Acciones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Malla Curricular
                  </Button>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setInfoDialogOpen(true)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Solicitar Información Detallada
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 hover:bg-blue-50 bg-transparent"
                    onClick={() => setAdmissionDialogOpen(true)}
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Proceso de Admisión 2025
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 hover:bg-blue-50 bg-transparent"
                    onClick={() => setVisitDialogOpen(true)}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Agendar Visita al Campus
                  </Button>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 text-center">
                      ¿Tienes preguntas específicas? Contáctanos y te ayudaremos a resolver todas tus dudas sobre el
                      programa.
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
          <form onSubmit={handleInfoSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md" 
                placeholder="Tu nombre completo"
                value={infoFormData.nombre}
                onChange={(e) => setInfoFormData(prev => ({ ...prev, nombre: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                className="w-full p-2 border rounded-md" 
                placeholder="tu@email.com"
                value={infoFormData.email}
                onChange={(e) => setInfoFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input 
                type="tel" 
                className="w-full p-2 border rounded-md" 
                placeholder="Tu número de teléfono"
                value={infoFormData.telefono}
                onChange={(e) => setInfoFormData(prev => ({ ...prev, telefono: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Información de Interés</label>
              <select 
                className="w-full p-2 border rounded-md"
                value={infoFormData.informacionInteres}
                onChange={(e) => setInfoFormData(prev => ({ ...prev, informacionInteres: e.target.value }))}
              >
                <option value="">Selecciona una opción</option>
                <option value="Plan de estudios completo">Plan de estudios completo</option>
                <option value="Costos y financiamiento">Costos y financiamiento</option>
                <option value="Requisitos de admisión">Requisitos de admisión</option>
                <option value="Prácticas profesionales">Prácticas profesionales</option>
                <option value="Campo laboral">Campo laboral</option>
              </select>
            </div>
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmittingInfo}
            >
              {isSubmittingInfo ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Enviando...
                </>
              ) : (
                "Enviar Solicitud"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Admission Process Dialog */}
      <Dialog open={admissionDialogOpen} onOpenChange={setAdmissionDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center space-x-2 text-xl">
              <Calendar className="h-6 w-6 text-blue-600" />
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
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-blue-600 font-medium">Fecha de Lanzamiento</p>
                    <p className="text-2xl font-bold text-blue-900">15 de Marzo, 2025</p>
                  </div>
                </div>
                <p className="text-blue-700 text-sm">
                  El proceso de admisiones se abrirá oficialmente el 15 de marzo de 2025
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
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="font-medium text-green-900 text-sm mb-2">Información y Consultas</p>
                  <div className="space-y-1 text-xs text-green-800">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3" />
                      <span>+51 945987048</span>
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setAdmissionDialogOpen(false)}
                >
                  Entendido
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Campus Visit Dialog */}
      <Dialog open={visitDialogOpen} onOpenChange={setVisitDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Agendar Visita al Campus</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleVisitSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md" 
                placeholder="Tu nombre completo"
                value={visitFormData.nombre}
                onChange={(e) => setVisitFormData(prev => ({ ...prev, nombre: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                className="w-full p-2 border rounded-md" 
                placeholder="tu@email.com"
                value={visitFormData.email}
                onChange={(e) => setVisitFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input 
                type="tel" 
                className="w-full p-2 border rounded-md" 
                placeholder="Tu número de teléfono"
                value={visitFormData.telefono}
                onChange={(e) => setVisitFormData(prev => ({ ...prev, telefono: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fecha Preferida</label>
              <input 
                type="date" 
                className="w-full p-2 border rounded-md"
                value={visitFormData.fechaPreferida}
                onChange={(e) => setVisitFormData(prev => ({ ...prev, fechaPreferida: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Horario Preferido</label>
              <select 
                className="w-full p-2 border rounded-md"
                value={visitFormData.horarioPreferido}
                onChange={(e) => setVisitFormData(prev => ({ ...prev, horarioPreferido: e.target.value }))}
              >
                <option value="">Selecciona un horario</option>
                <option value="Mañana (8:00 AM - 12:00 PM)">Mañana (8:00 AM - 12:00 PM)</option>
                <option value="Tarde (2:00 PM - 6:00 PM)">Tarde (2:00 PM - 6:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Número de Acompañantes</label>
              <select 
                className="w-full p-2 border rounded-md"
                value={visitFormData.acompanantes}
                onChange={(e) => setVisitFormData(prev => ({ ...prev, acompanantes: e.target.value }))}
              >
                <option value="">Selecciona cantidad</option>
                <option value="Solo yo">Solo yo</option>
                <option value="1 acompañante">1 acompañante</option>
                <option value="2 acompañantes">2 acompañantes</option>
                <option value="3 o más acompañantes">3 o más acompañantes</option>
              </select>
            </div>
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmittingVisit}
            >
              {isSubmittingVisit ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Agendando...
                </>
              ) : (
                "Agendar Visita"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <ModernFooter />
    </div>
  )
}
