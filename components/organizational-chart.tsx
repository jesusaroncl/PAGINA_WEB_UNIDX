"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Phone, ExternalLink, X, ZoomIn, Target, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface TeamMember {
  id: string
  name: string
  position: string
  department?: string
  education?: string[]
  experience?: string[]
  email: string
  phone?: string
  image: string
  cvUrl?: string
  ctiVitaeUrl?: string
  level: "rector" | "vicerrector" | "defensor" | "decano" | "direccion" | "oficina" | "servicio"
}

const teamMembers: TeamMember[] = [
  // RECTOR
  {
    id: "rector",
    name: "Dr. Atilio Rodolfo Buendía Giribaldi",
    position: "Rector / Gerente General",
    email: "rector@unidx.edu.pe | gerencia@unidx.edu.pe",
    phone: "+51 945987048",
    image: "/images/cvs/01.jpg",
    cvUrl: "/cv/atilio-buendia-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=77424",
    level: "rector",
  },
  
  // VICERRECTOR
  {
    id: "vicerrector-academico",
    name: "Dr. Luis Adolfo Pérez Ton",
    position: "Vicerrectorado Académico",
    email: "vicerrectorado.academico@unidx.edu.pe",
    image: "/images/cvs/05.jpg",
    cvUrl: "/cv/luis-perez-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=76785",
    level: "vicerrector",
  },

  // DEFENSORÍA
  {
    id: "defensoria",
    name: "Dra. Celín Pérez Nájera",
    position: "Defensoría Universitaria",
    email: "defensoria.universitaria@unidx.edu.pe",
    image: "/images/cvs/02.jpg",
    cvUrl: "/cv/celin-perez-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=356832",
    level: "defensor",
  },

  // DECANATO
  {
    id: "decanato",
    name: "Dr. Neuman Mario Pineda Pérez",
    position: "Decanato",
    email: "decanato@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/neuman-pineda-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=108254",
    level: "decano",
  },

  // DIRECCIONES
  {
    id: "investigacion",
    name: "Dr. Luis Angel Aguilar Mendoza",
    position: "Dirección de Investigación",
    email: "direccion.investigacion@unidx.edu.pe",
    image: "/images/cvs/06.jpg",
    cvUrl: "/cv/luis-aguilar-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=5",
    level: "direccion",
  },
  {
    id: "calidad",
    name: "Dr. Jorge Antonio Chávez Pérez",
    position: "Dirección de Calidad Institucional",
    email: "calidad.institucional@unidx.edu.pe",
    image: "/images/cvs/04.jpg",
    cvUrl: "/cv/jorge-chavez-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=10654",
    level: "direccion",
  },
  {
    id: "bienestar",
    name: "Dr. Roosevelt Edhair Aylas Canicela",
    position: "Dirección de Bienestar Universitario",
    email: "bienestar.universitario@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/roosevelt-aylas-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=110881",
    level: "direccion",
  },
  {
    id: "enfermeria",
    name: "Dra. Carmen Raquel Guzmán Damián",
    position: "Dirección de Carrera Profesional de Enfermería",
    email: "direccion.enfermeria@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/carmen-guzman-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=83483",
    level: "direccion",
  },
  {
    id: "farmacia",
    name: "Dra. Silvana Yanire Sam Zavala",
    position: "Dirección de Carrera Profesional de Farmacia y Bioquímica",
    email: "direccion.farmaciaybioquimica@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/silvana-sam-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=44460",
    level: "direccion",
  },
  {
    id: "tecnologia",
    name: "Ing. Donny Marlon Acosta Benites",
    position: "Dirección de Tecnología de la Información y Comunicación / Tribunal de Honor",
    email: "direccion.tecnologia@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/donny-acosta-cv.pdf",
    ctiVitaeUrl: "",
    level: "direccion",
  },
  {
    id: "administracion",
    name: "Mg. Isaias Ofir Pérez Anticona",
    position: "Dirección General de Administración / Planeamiento y Finanzas",
    email: "administracion.finanzas@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/isaias-perez-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=355199",
    level: "direccion",
  },

  // OFICINAS
  {
    id: "secretaria",
    name: "Lic. Gloria Maria Alvarado Carrasco",
    position: "Secretaría General",
    email: "secretaria.general@unidx.edu.pe",
    image: "/images/cvs/03.jpg",
    cvUrl: "/cv/gloria-alvarado-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=337907",
    level: "oficina",
  },
  {
    id: "grados-titulos",
    name: "Mg. Marco Antonio Alvarado Figueroa",
    position: "Oficina de Grados y Títulos / Tribunal de Honor",
    email: "gradosytitulos@unidx.edu.pe",
    image: "/images/cvs/07.jpg",
    cvUrl: "/cv/marco-alvarado-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=107698",
    level: "oficina",
  },
  {
    id: "infraestructura",
    name: "Arq. Miriam Sara Quispe Salas",
    position: "Oficina de Infraestructura",
    email: "infraestructura@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/miriam-quispe-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=95151",
    level: "oficina",
  },
  {
    id: "personal",
    name: "Lic. José Luis Pizarro Carrasco",
    position: "Oficina de Personal",
    email: "oficina.personal@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/jose-pizarro-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=111481",
    level: "oficina",
  },
  {
    id: "tramite",
    name: "Lic. Farah Karín Lluen Miranda",
    position: "Oficina de Trámite Documentario",
    email: "oficina.tramite@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/farah-lluen-cv.pdf",
    ctiVitaeUrl: "",
    level: "oficina",
  },
  {
    id: "marketing",
    name: "Lic. Natali Rivera Marca",
    position: "Oficina de Marketing Institucional y Admisión",
    email: "oficina.marketingyadmision@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/natali-rivera-cv.pdf",
    ctiVitaeUrl: "",
    level: "oficina",
  },
  {
    id: "servicios-academicos",
    name: "Dra. Felicita Martha Padilla Montes",
    position: "Oficina de Servicios Académicos",
    email: "servicios.academicos@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/felicita-padilla-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=66843",
    level: "oficina",
  },
  {
    id: "auditoria",
    name: "CPC. Lucy Mireya Armijo Naupa",
    position: "Auditoría Interna",
    email: "auditor.interno@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/lucy-armijo-cv.pdf",
    ctiVitaeUrl: "",
    level: "oficina",
  },
  {
    id: "marketing-comunicacion",
    name: "Lic. Gonzalo Jesús Cárdenas Lizana",
    position: "Marketing, Comunicación Institucional y Admisión",
    email: "marketing.admision@unidx.edu.pe",
    image: "/images/cvs/09.png",
    cvUrl: "/cv/gonzalo-cardenas-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=431299",
    level: "oficina",
  },
  {
    id: "responsabilidad-social",
    name: "Mg. Luis Allende Manco Malpica",
    position: "Oficina de Responsabilidad Social Universitaria / Proyectos Comunitarios",
    email: "responsabilidad.social@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/luis-manco-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=109069",
    level: "oficina",
  },
  {
    id: "asesoria-legal",
    name: "Abg. Percy Orlando Huertas Chiu",
    position: "Oficina de Asesoría Legal / Tribunal de Honor",
    email: "asesoria.tribunaldehonor@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/percy-huertas-cv.pdf",
    ctiVitaeUrl: "",
    level: "oficina",
  },

  // SERVICIOS
  {
    id: "empleabilidad",
    name: "Mg. Miguel Ángel Inocente Camones",
    position: "Servicio de Empleabilidad y Seguimiento al Graduado",
    email: "servicio.empleabilidad@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/miguel-camones-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=444",
    level: "servicio",
  },
  {
    id: "psicopedagogia",
    name: "Lic. José Eduardo Eneque Patazca",
    position: "Servicio de Psicopedagogía",
    email: "servicio.psicopedagogia@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/jose-eneque-cv.pdf",
    ctiVitaeUrl: "",
    level: "servicio",
  },
  {
    id: "deporte",
    name: "Prof. Juan Carlos Gómez Castillo",
    position: "Servicio de Deporte – PRODAC",
    email: "servicio.deporte@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/juan-gomez-cv.pdf",
    ctiVitaeUrl: "",
    level: "servicio",
  },
  {
    id: "social",
    name: "Mg. Ruth Antolina Pariasca Pérez",
    position: "Servicio Social",
    email: "servicio.social@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/ruth-pariasca-cv.pdf",
    ctiVitaeUrl: "",
    level: "servicio",
  },
  {
    id: "topico",
    name: "Mg. Hugo Gilberto Villanueva Vilchez",
    position: "Servicio de Tópico",
    email: "servicio.topico@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/hugo-villanueva-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=102563",
    level: "servicio",
  },
  {
    id: "prevencion",
    name: "Mg. María Susana Roque Marroquín",
    position: "Servicio de Prevención e Intervención contra el Acoso Sexual",
    email: "servicio.prevencion@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/maria-roque-cv.pdf",
    ctiVitaeUrl: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=46583",
    level: "servicio",
  },
  {
    id: "actividades",
    name: "Lic. Jhoana Marliz Morales Rueda",
    position: "Servicio de Actividades Artísticas y Culturales",
    email: "servicio.actividades@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/jhoana-morales-cv.pdf",
    ctiVitaeUrl: "",
    level: "servicio",
  },
  {
    id: "mantenimiento",
    name: "Téc. Yul Ignacio Trujillo Mejía",
    position: "Responsable de Mantenimiento",
    email: "mantenimiento@unidx.edu.pe",
    image: "/placeholder-user.jpg",
    cvUrl: "/cv/yul-trujillo-cv.pdf",
    ctiVitaeUrl: "",
    level: "servicio",
  },
]

const levelStyles = {
  rector: {
    cardClass: "bg-gradient-to-br from-blue-900 to-blue-800 text-white border-blue-900",
    titleClass: "text-white",
    subtitleClass: "text-blue-100",
    iconClass: "text-blue-200",
  },
  vicerrector: {
    cardClass: "bg-gradient-to-br from-blue-800 to-blue-700 text-white border-blue-800",
    titleClass: "text-white",
    subtitleClass: "text-blue-100",
    iconClass: "text-blue-200",
  },
  defensor: {
    cardClass: "bg-gradient-to-br from-green-100 to-white border-green-200",
    titleClass: "text-green-900",
    subtitleClass: "text-green-700",
    iconClass: "text-green-600",
  },
  decano: {
    cardClass: "bg-gradient-to-br from-purple-100 to-white border-purple-200",
    titleClass: "text-purple-900",
    subtitleClass: "text-purple-700",
    iconClass: "text-purple-600",
  },
  direccion: {
    cardClass: "bg-gradient-to-br from-slate-100 to-white border-blue-200",
    titleClass: "text-blue-900",
    subtitleClass: "text-gray-600",
    iconClass: "text-blue-600",
  },
  oficina: {
    cardClass: "bg-gradient-to-br from-orange-100 to-white border-orange-200",
    titleClass: "text-orange-900",
    subtitleClass: "text-orange-700",
    iconClass: "text-orange-600",
  },
  servicio: {
    cardClass: "bg-white border-gray-200",
    titleClass: "text-gray-900",
    subtitleClass: "text-gray-600",
    iconClass: "text-gray-500",
  },
}

export function OrganizationalChart() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleDownloadCV = (cvUrl: string, name: string) => {
    if (!cvUrl) return
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = `CV-${name.replace(/\s+/g, "-")}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenCTIVitae = (ctiVitaeUrl: string) => {
    if (!ctiVitaeUrl) return
    window.open(ctiVitaeUrl, "_blank", "noopener,noreferrer")
  }

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const renderMemberCard = (member: TeamMember, index: number) => {
    const styles = levelStyles[member.level]
    const isRectorOrVicerrector = member.level === "rector" || member.level === "vicerrector"

    return (
      <motion.div
        key={member.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full"
      >
        <Card className={`${styles.cardClass} shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group cursor-pointer"
                   onClick={() => openImageModal(member.image)}>
                <Image 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 rounded-full p-1 backdrop-blur-sm">
                    <ZoomIn className="w-3 h-3 text-gray-800" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className={`text-lg font-bold ${styles.titleClass}`}>{member.name}</h3>
                <p className={`text-sm font-medium ${styles.subtitleClass}`}>{member.position}</p>
              </div>

              <div className="space-y-2 w-full">
                <div className={`flex items-center justify-center space-x-2 text-sm ${styles.subtitleClass}`}>
                  <Mail className={`h-4 w-4 ${styles.iconClass}`} />
                  <span className="truncate">{member.email}</span>
                </div>
                {member.phone && (
                  <div className={`flex items-center justify-center space-x-2 text-sm ${styles.subtitleClass}`}>
                    <Phone className={`h-4 w-4 ${styles.iconClass}`} />
                    <span>{member.phone}</span>
                  </div>
                )}
              </div>

              {member.ctiVitaeUrl && (
                <div className="w-full flex justify-center mt-4">
                  <Button
                    onClick={() => handleOpenCTIVitae(member.ctiVitaeUrl!)}
                    className={`${
                      isRectorOrVicerrector
                        ? "bg-white text-blue-900 hover:bg-blue-50"
                        : "bg-blue-900 text-white hover:bg-blue-800"
                    } transition-all duration-200`}
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    CTI Vitae
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Group members by level
  const rectorLevel = teamMembers.filter((m) => m.level === "rector")
  const vicerrectorLevel = teamMembers.filter((m) => m.level === "vicerrector")
  const defensorLevel = teamMembers.filter((m) => m.level === "defensor")
  const decanoLevel = teamMembers.filter((m) => m.level === "decano")
  const direccionLevel = teamMembers.filter((m) => m.level === "direccion")
  const oficinaLevel = teamMembers.filter((m) => m.level === "oficina")
  const servicioLevel = teamMembers.filter((m) => m.level === "servicio")

  return (
    <div className="space-y-12">
      {/* Rector Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Rectorado</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">{rectorLevel.map((member, index) => renderMemberCard(member, index))}</div>
        </div>
      </div>

      {/* Vicerrector Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Vicerrectorado</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {vicerrectorLevel.map((member, index) => renderMemberCard(member, index))}
          </div>
        </div>
      </div>

      {/* Defensoría Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Defensoría Universitaria</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">{defensorLevel.map((member, index) => renderMemberCard(member, index))}</div>
        </div>
      </div>

      {/* Decanato Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Decanato</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">{decanoLevel.map((member, index) => renderMemberCard(member, index))}</div>
        </div>
      </div>

      {/* Direcciones Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Direcciones</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {direccionLevel.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>

      {/* Oficinas Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Oficinas</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {oficinaLevel.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>

      {/* Servicios Level */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Servicios</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicioLevel.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="space-y-8 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Misión y Visión</h2>
          <div className="w-32 h-1 bg-blue-900 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia académica y la formación integral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Misión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                 Formar profesionales con un sólido compromiso social, capaces de
                 identificar y resolver los problemas socialmente relevantes
                 interrelacionando la investigación y la docencia. 
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-white border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Visión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                 Ser una institución referente en la educación superior, reconocida por
                 formar profesionales que se distinguen por su calidad humana,
                 competitividad profesional, vocación de servicio a la comunidad y
                 motivación por la investigación, que orienta su acción y sus servicios a la
                 generación y ejecución de proyectos que contribuyan al desarrollo social y
                 económico del país.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Valores Institucionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-center text-blue-900 mb-6">Valores Institucionales</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Universalidad</h4>
                  <p className="text-sm text-gray-600">Educación accesible y de calidad para todos</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <h4 className="font-semibold text-green-900 mb-2">Nobleza</h4>
                  <p className="text-sm text-gray-600">Grandeza de espíritu y dignidad en el actuar</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-2">Innovación</h4>
                  <p className="text-sm text-gray-600">Desarrollo continuo y creatividad en la educación</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <h4 className="font-semibold text-orange-900 mb-2">Desarrollo</h4>
                  <p className="text-sm text-gray-600">Crecimiento integral de la comunidad universitaria</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-2xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={selectedImage}
                alt="Imagen ampliada"
                fill
                className="object-cover rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
