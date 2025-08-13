"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, X, ZoomIn, Search, Mail } from "lucide-react"
import Image from "next/image"
import { useMemo, useState } from "react"

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

/** === DATOS (35 registros de tu tabla; se mantienen duplicados por cargo) === */
const teamMembers: TeamMember[] = [
  { id: "rector-gerencia",  name: "Dr. Atilio Rodolfo Buendía Giribaldi", position: "Gerencia General", email: "gerencia@unidx.edu.pe", image: "/images/cvs/01.jpg", level: "rector" },
  { id: "rector-rectorado", name: "Dr. Atilio Rodolfo Buendía Giribaldi", position: "Rectorado", email: "rector@unidx.edu.pe", image: "/images/cvs/01.jpg", level: "rector" },

  { id: "vicerrector-academico", name: "Dr. Luis Adolfo Pérez Ton", position: "Vicerrectorado Académico", email: "vicerrectorado.academico@unidx.edu.pe", image: "/images/cvs/05.jpg", level: "vicerrector" },

  { id: "defensoria-universitaria", name: "Dr. Celín Pérez Nájera", position: "Defensoría Universitaria", email: "defensoria.universitaria@unidx.edu.pe", image: "/images/cvs/02.jpg", level: "defensor" },

  { id: "decanato", name: "Mg. Neuman Mario Pineda Pérez", position: "Decanato", email: "decanato@unidx.edu.pe", image: "/images/cvs/neuman.jpeg", level: "decano" },

  { id: "direccion-biblioteca", name: "Manuel Jorge García Maruco", position: "Biblioteca y Repositorio Institucional", email: "biblioteca.repositorio@unidx.edu.pe", image: "/images/cvs/garcia.jpg", level: "direccion" },
  { id: "direccion-calidad", name: "Mg. Jorge Antonio Chávez Pérez", position: "Dirección de Calidad Institucional", email: "calidad.institucional@unidx.edu.pe", image: "/images/cvs/04.jpg", level: "direccion" },
  { id: "direccion-tecnologia", name: "Donny Marlon Acosta Benites", position: "Dirección de Tecnología de la Información y Comunicación", email: "direccion.tecnologia@unidx.edu.pe", image: "/images/cvs/donny.jpg", level: "direccion" },
  { id: "direccion-administracion", name: "Mg. Isaias Ofir Pérez Anticona", position: "Dirección General de Administración", email: "administracion.finanzas@unidx.edu.pe", image: "/images/cvs/isaias.jpg", level: "direccion" },
  { id: "direccion-rsu", name: "Mg. Luis Allende Manco Malpica", position: "Dirección de Responsabilidad Social Universitaria", email: "responsabilidad.social@unidx.edu.pe", image: "/images/cvs/manco.jpg", level: "direccion" },
  { id: "direccion-bienestar", name: "Mg. Roosevelt Edhair Aylas Canicela", position: "Dirección de Bienestar Universitario", email: "bienestar.universitario@unidx.edu.pe", image: "/images/cvs/roose.jpeg", level: "direccion" },
  { id: "direccion-investigacion", name: "Dr. Luis Ángel Aguilar Mendoza", position: "Dirección de Investigación", email: "direccion.investigacion@unidx.edu.pe", image: "/images/cvs/06.jpg", level: "direccion" },
  { id: "direccion-enfermeria", name: "Dr. Carmen Raquel Guzmán Damián", position: "Dirección de Carrera Profesional de Enfermería", email: "direccion.enfermeria@unidx.edu.pe", image: "/images/cvs/guzman.jpeg", level: "direccion" },
  { id: "direccion-farmacia", name: "Dr. Silvana Yanire Sam Zavala", position: "Dirección de Carrera Profesional de Farmacia y Bioquímica", email: "direccion.farmaciaybioquimica@unidx.edu.pe", image: "/images/cvs/silvana.jpeg", level: "direccion" },

  { id: "oficina-asesoria-legal", name: "Percy Orlando Huertas Chiu", position: "Oficina de Asesoría Legal", email: "oficina.asesorialegal@unidx.edu.pe", image: "/images/cvs/percy.jpg", level: "oficina" },
  { id: "oficina-personal", name: "José Luis Pizarro Carrasco", position: "Oficina de Personal", email: "oficina.personal@unidx.edu.pe", image: "/images/cvs/joseluis.jpeg", level: "oficina" },
  { id: "oficina-infraestructura", name: "Mg. Miriam Sara Quispe Salas", position: "Oficina de Infraestructura y Mantenimiento", email: "infraestructura@unidx.edu.pe", image: "/images/cvs/miriam.jpeg", level: "oficina" },
  { id: "oficina-planificacion", name: "Mg. Isaias Ofir Pérez Anticona", position: "Oficina de Planificación y Presupuesto", email: "planificacion.presupuesto@unidx.edu.pe", image: "/images/cvs/isaias.jpg", level: "oficina" },
  { id: "oficina-contabilidad", name: "Mg. Isaias Ofir Pérez Anticona", position: "Oficina de Contabilidad y Finanzas", email: "contabilidad.finanzas@unidx.edu.pe", image: "/images/cvs/isaias.jpg", level: "oficina" },
  { id: "oficina-marketing", name: "Natali Rivera Marca", position: "Oficina de Marketing Institucional y Admisión", email: "oficina.marketingyadmision@unidx.edu.pe", image: "/images/cvs/natali.png", level: "oficina" },
  { id: "oficina-secretaria-general", name: "Gloria Maria Alvarado Carrasco", position: "Secretaría General", email: "secretaria.general@unidx.edu.pe", image: "/images/cvs/03.jpg", level: "oficina" },
  { id: "oficina-tramite-documentario", name: "Mg. Farah Karín Lluen Miranda", position: "Oficina de Trámite Documentario", email: "oficina.tramite@unidx.edu.pe", image: "/images/cvs/lluen.jpg", level: "oficina" },
  { id: "tribunal-honor-huertas", name: "Percy Orlando Huertas Chiu", position: "Tribunal de Honor", email: "asesoria.tribunaldehonor@unidx.edu.pe", image: "/images/cvs/percy.jpg", level: "oficina" },
  { id: "tribunal-honor-alvarado", name: "Mg. Marco Antonio Alvarado Figueroa", position: "Tribunal de Honor", email: "asesoria.tribunaldehonor@unidx.edu.pe", image: "/images/cvs/07.jpg", level: "oficina" },
  { id: "tribunal-honor-acosta", name: "Donny Marlon Acosta Benites", position: "Tribunal de Honor", email: "asesoria.tribunaldehonor@unidx.edu.pe", image: "/images/cvs/donny.jpg", level: "oficina" },
  { id: "oficina-grados-titulos", name: "Mg. Marco Antonio Alvarado Figueroa", position: "Oficina de Grados y Títulos", email: "gradosytitulos@unidx.edu.pe", image: "/images/cvs/07.jpg", level: "oficina" },
  { id: "oficina-servicios-academicos", name: "Dr. Felicita Martha Padilla Montes", position: "Oficina de Servicios Académicos", email: "servicios.academicos@unidx.edu.pe", image: "/images/cvs/padilla.png", level: "oficina" },

  { id: "servicio-topico", name: "Mg. Ruth Antolina Pariasca Perez", position: "Servicio de Tópico", email: "servicio.topico@unidx.edu.pe", image: "/images/cvs/pariasca.jpg", level: "servicio" },
  { id: "servicio-social", name: "Mg. Hugo Gilberto Villanueva Vilchez", position: "Servicio Social", email: "servicio.social@unidx.edu.pe", image: "/images/cvs/villanueva.jpg", level: "servicio" },
  { id: "servicio-psicopedagogico", name: "José Eduardo Eneque Patazca", position: "Servicio Psicopedagógico", email: "servicio.psicopedagogia@unidx.edu.pe", image: "/images/cvs/eneque.jpg", level: "servicio" },
  { id: "servicio-prevencion-acoso", name: "Mg. María Susana Roque Marroquín", position: "Servicio de Prevención en Casos de Acoso Sexual", email: "servicio.prevencion@unidx.edu.pe", image: "/images/cvs/roque.jpg", level: "servicio" },
  { id: "servicio-deportivo", name: "Juan Carlos Gómez Castillo", position: "Servicio Deportivo Universitario", email: "servicio.deporte@unidx.edu.pe", image: "/images/cvs/gomez.jpeg", level: "servicio" },
  { id: "servicio-actividades-artisticas", name: "Jhoana Marliz Morales Rueda", position: "Programa de Actividades Artísticas y Culturales", email: "servicio.actividades@unidx.edu.pe", image: "/images/cvs/morales.jpg", level: "servicio" },
  { id: "servicio-insercion-laboral", name: "Dr. Miguel Ángel Inocente Camones", position: "Programa de Inserción Laboral y Seguimiento al Egresado", email: "servicio.empleabilidad@unidx.edu.pe", image: "/images/cvs/inocente.jpeg", level: "servicio" },
  { id: "servicio-laboratorio", name: "Mg. Javier Jack Calderón Gómez", position: "Encargado de Laboratorio", email: "laboratorio@unidx.edu.pe", image: "/images/cvs/calderon.jpg", level: "servicio" },
]

/** === Estructura por persona: lista de {cargo, correo} === */
type RoleEntry = { position: string; email: string; rank: number }

type PersonCard = {
  id: string
  name: string
  image: string
  roles: RoleEntry[]
  primaryRank: number
  phone?: string
  ctiVitaeUrl?: string
}

/** === Jerarquía compacta para ordenar (NO se muestra) ===
 *  0 Alta Dirección (Gerencia/Rectorado/Vicerrectorado)
 *  1 Órganos (Defensoría/Tribunal)
 *  2 Decanato
 *  3 Direcciones (todas)
 *  4 Oficinas y Servicios
 */
const rankOf = (position: string): number => {
  if (/(gerencia general|rectorado|vicerrectorado)/i.test(position)) return 0
  if (/(defensor[ií]a|tribunal de honor)/i.test(position)) return 1
  if (/decanato/i.test(position)) return 2
  if (/^direcci[oó]n\b|biblioteca|repositorio/i.test(position)) return 3
  return 4
}

type SortKey = "jerarquia" | "nombre"

/** === Acento visual acorde a landing (ajusta si usas otros colores) === */
const cardAccent = "from-sky-600 to-blue-600"

export function OrganizationalChart() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [sortKey, setSortKey] = useState<SortKey>("jerarquia")

  // Unificar por persona: cada tarjeta con todos sus cargos, y debajo de cada cargo su correo
  const people: PersonCard[] = useMemo(() => {
    const map: Record<string, PersonCard> = {}
    for (const m of teamMembers) {
      const key = m.name.trim()
      const role: RoleEntry = { position: m.position, email: m.email, rank: rankOf(m.position) }

      if (!map[key]) {
        map[key] = {
          id: key.toLowerCase().replace(/\s+/g, "-"),
          name: m.name,
          image: m.image,
          roles: [role],
          primaryRank: role.rank,
          phone: m.phone,
          ctiVitaeUrl: m.ctiVitaeUrl,
        }
      } else {
        // Evitar duplicados exactos
        if (!map[key].roles.some(r => r.position === role.position && r.email === role.email)) {
          map[key].roles.push(role)
        }
        // Rank principal = el más alto (menor número)
        if (role.rank < map[key].primaryRank) map[key].primaryRank = role.rank
      }
    }

    // Ordenar roles dentro de la tarjeta
    const list = Object.values(map).map(p => ({
      ...p,
      roles: p.roles.sort((a,b) => a.rank - b.rank || a.position.localeCompare(b.position, "es", { sensitivity: "base" }))
    }))

    // Ordenar tarjetas por jerarquía compacta y luego por nombre
    list.sort((a,b) => a.primaryRank - b.primaryRank || a.name.localeCompare(b.name, "es", { sensitivity: "base" }))
    return list
  }, [])

  // Filtro y alternativa de orden
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const base = q
      ? people.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.roles.some(r => r.position.toLowerCase().includes(q) || r.email.toLowerCase().includes(q))
        )
      : people

    if (sortKey === "nombre") {
      return [...base].sort((a,b)=>a.name.localeCompare(b.name,"es",{sensitivity:"base"}))
    }
    return base // ya está por jerarquía
  }, [people, query, sortKey])

  const openImageModal = (src: string) => setSelectedImage(src || "/placeholder.svg")
  const closeImageModal = () => setSelectedImage(null)

  const badgeByRank = [
    { rank: 0, label: "Alta Dirección", color: "bg-slate-100 text-sky-700 border border-sky-500" },
    { rank: 1, label: "Órgano", color: "bg-slate-100 text-pink-700 border border-pink-400" },
    { rank: 2, label: "Decanato", color: "bg-slate-100 text-green-700 border border-green-400" },
    { rank: 3, label: "Dirección", color: "bg-slate-100 text-blue-700 border border-blue-400" },
    { rank: 4, label: "Oficina/Servicio", color: "bg-slate-100 text-amber-700 border border-amber-400" },
  ];

  const renderCard = (p: PersonCard, index: number) => {
    const badge = badgeByRank.find(b => b.rank === p.primaryRank);
    return (
      <motion.div
        key={p.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.03 }}
  className="w-full max-w-xs mx-auto"
      >
        <Card className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full overflow-hidden relative">
          {/* Imagen ocupa todo el ancho arriba, más pequeña */}
          <div className="w-full aspect-[5/5] bg-slate-50 border-b border-slate-200 relative cursor-pointer" onClick={() => openImageModal(p.image)} title="Ampliar foto">
            <Image
              src={p.image || "/placeholder.svg"}
              alt={p.name}
              fill
              className="object-cover"
            />
          </div>
          {/* Información abajo, más compacta */}
          <CardContent className="flex flex-col items-center text-center gap-1 p-3">
            <div className="flex flex-col items-center gap-0.5">
              <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
              {badge && (
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${badge.color}`}>{badge.label}</span>
              )}
            </div>
            <div className="w-full space-y-1">
              {p.roles.map((r) => (
                <div key={`${r.position}-${r.email}`} className="mx-auto max-w-[34rem] text-left">
                  <p className="text-[13px] font-medium text-slate-900 leading-5">{r.position}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                    <a
                      href={`mailto:${r.email}`}
                      className="block w-full font-mono text-[11px] leading-5 px-2 py-1 rounded bg-slate-50 ring-1 ring-inset ring-slate-200 break-words break-all hover:underline"
                    >
                      {r.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {p.ctiVitaeUrl && (
              <div className="pt-1">
                <a
                  href={p.ctiVitaeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-700 hover:text-slate-900"
                >
                  <ExternalLink className="h-3 w-3" />
                  CTI Vitae
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Controles: búsqueda + orden */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre, cargo o correo…"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
          </div>
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm"
            title="Ordenar"
          >
            <option value="jerarquia">Orden: Jerarquía compacta</option>
            <option value="nombre">Orden: Nombre (A–Z)</option>
          </select>
        </div>
      </div>

      {/* Grilla más ancha: 1–2–2–3 columnas */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtered.map((p, i) => renderCard(p, i))}
        </div>
      </div>

      {/* Modal imagen */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full flex items-center justify-center">
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
