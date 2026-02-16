"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernFooter } from "@/components/modern-footer"
import { Calendar, Clock, Eye, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function NoticiaDetailPage() {
  const params = useParams()
  const id = params?.id

  // En un caso real, esto vendría de una API o base de datos
  const noticia = {
    id: id,
    title: "Inscripciones Abiertas 2026 - Proceso de Admisión",
    content: `
      <p>La Universidad UNIDx tiene el agrado de anunciar la apertura del proceso de inscripciones para el periodo académico 2026. Este es un momento crucial para todos aquellos jóvenes que desean formar parte de nuestra prestigiosa institución.</p>
      
      <h2>Fechas Importantes</h2>
      <ul>
        <li><strong>Inicio de Inscripciones:</strong> 10 de Febrero de 2026</li>
        <li><strong>Cierre de Inscripciones:</strong> 25 de Marzo de 2026</li>
        <li><strong>Examen de Admisión:</strong> 28 de Marzo de 2026</li>
        <li><strong>Publicación de Resultados:</strong> 5 de Abril de 2026</li>
      </ul>
      
      <h2>Carreras Disponibles</h2>
      <p>Ofrecemos dos carreras profesionales de alta calidad:</p>
      <ul>
        <li><strong>Enfermería:</strong> Formamos profesionales comprometidos con el cuidado de la salud.</li>
        <li><strong>Farmacia y Bioquímica:</strong> Preparamos expertos en medicamentos y análisis clínicos.</li>
      </ul>
      
      <h2>Requisitos</h2>
      <ul>
        <li>Certificado de estudios completo</li>
        <li>Copia de DNI</li>
        <li>Dos fotos tamaño carnet</li>
        <li>Pago de derecho de inscripción</li>
      </ul>
      
      <h2>Información de Contacto</h2>
      <p>Para más información, puedes comunicarte con nosotros:</p>
      <ul>
        <li><strong>Teléfono:</strong> +51 945 987 048</li>
        <li><strong>Email:</strong> informes@unidx.edu.pe</li>
        <li><strong>Dirección:</strong> Av. Bolivia 626 - Breña, Lima</li>
      </ul>
      
      <p>¡No pierdas esta oportunidad de ser parte de UNIDx y construir tu futuro profesional con nosotros!</p>
    `,
    image: "/images/noticias/flayer-inscripciones.webp",
    category: "Admisión",
    date: "2026-02-10",
    views: 1234,
    readTime: "3 min",
    author: "Departamento de Admisión",
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <ModernNavigation />

      <main className="flex-grow">
        {/* Hero Image */}
        <div className="relative h-[50vh] sm:h-[60vh] bg-gradient-to-r from-blue-900 to-blue-800">
          <Image
            src={noticia.image}
            alt={noticia.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/noticias"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a Noticias
                </Link>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                    {noticia.category}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
                  {noticia.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(noticia.date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {noticia.readTime} de lectura
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {noticia.views} vistas
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: noticia.content }}
                />
                
                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Compartir esta noticia
                  </h3>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4"
            >
              {/* Author Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Autor</h3>
                <p className="text-gray-700">{noticia.author}</p>
              </div>

              {/* Related News */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Noticias Relacionadas</h3>
                <div className="space-y-4">
                  <Link href="/noticias/2" className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src="/images/campus/laboratorio.jpg"
                          alt="Noticia relacionada"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          Nuevo proyecto de investigación
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">15 Feb 2026</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/noticias/3" className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src="/images/campus/auditorio.jpg"
                          alt="Noticia relacionada"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          Ceremonia de Graduación 2025
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">14 Feb 2026</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>

      <ModernFooter />
    </div>
  )
}
