"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calendar, Clock, User, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

export function CompactNews() {
  const [autoplay, setAutoplay] = useState<ReturnType<typeof Autoplay> | null>(null)

  useEffect(() => {
    setAutoplay(
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    )
  }, [])

  type Category =
    | "Académico"
    | "Internacional"
    | "Infraestructura"
    | "Logros"
    | "Comunidad"
    | "Invitación"

  type NewsItem = {
    id: number
    title: string
    excerpt: string
    date: string
    author: string
    category: Category
    image: string
    readTime: string
    documentUrl: string // Nueva propiedad para el documento
  }

  const news: NewsItem[] = [
    {
      id: 1,
      title: "Invitación al Foro Panel denominado: Latam-GPT: Primer modelo IA del lenguaje (LLM) Latinoamericano",
      excerpt:
        "Tengo a bien dirigirme a usted para saludarlo en mi calidad de presidente de la Comisión de Ciencia, Innovación y Tecnología (CCIT) del Congreso de la República, a fin de invitarlo muy cordialmente a participar en el Foro Panel denominado: Latam-GPT:Primer modelo IA del lenguaje (LLM) Latinoamericano",
      date: "02 Abril del 2025",
      author: "Congreso de la República",
      category: "Invitación",
      image: "/images/news/new01.jpg",
      readTime: "3 meses",
      documentUrl: "/documents/news/doc01.pdf", // Ruta al documento
    },
    {
      id: 2,
      title: "INVITACIÓN ANIVERSARIO DEL INSTITUTO LA MOLINA CALIDAD TOTAL LABORATORIOS [UNALM]",
      excerpt:
        "Invitación al Aniversario del Instituto La Molina Calidad Total Laboratorios de la Universidad Nacional Agraria La Molina, que se llevará a cabo el 12 de diciembre de 2024.",
      date: "06 Marzo del 2025",
      author: "UNALM",
      category: "Invitación",
      image: "/images/news/new02.jpg",
      readTime: "5 meses",
      documentUrl: "/documents/news/doc02.pdf", // Ruta al documento
    },
    {
      id: 3,
      title: "Invitación a ceremonia por el décimo año de creación del Instituto de Evaluación de Tecnologías en Salud e Investigación.",
      excerpt:
        "Tengo el agrado de dirigirme a usted, con la finalidad de expresarle mi cordial saludo y a su vez invitarlo a la ceremonia de aniversario que ofrecerá el Instituto de Evaluación de Tecnologías en Salud e Investigación - IETSI- EsSalud",
      date: "13 Febrero del 2025",
      author: "ESSALUD",
      category: "Invitación",
      image: "/images/news/new03.jpg",
      readTime: "5 meses",
      documentUrl: "/documents/news/doc03.pdf", // Ruta al documento
    },
    
  ]

  const categoryColors: Record<Category, string> = {
    Académico: "bg-blue-100 text-blue-700",
    Internacional: "bg-green-100 text-green-700",
    Infraestructura: "bg-purple-100 text-purple-700",
    Logros: "bg-yellow-100 text-yellow-700",
    Comunidad: "bg-red-100 text-red-700",
    Invitación: "bg-orange-100 text-orange-700", // Agregar color para la nueva categoría
  }

  // Función para manejar el click en la noticia
  const handleNewsClick = (documentUrl: string) => {
    // Opción 1: Abrir en nueva pestaña
    window.open(documentUrl, '_blank')
    
    // Opción 2: Descargar directamente
    // const link = document.createElement('a')
    // link.href = documentUrl
    // link.download = documentUrl.split('/').pop() || 'documento.pdf'
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestras Noticias</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mantente informado sobre los acontecimientos más importantes de nuestra facultad.
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={autoplay ? [autoplay] : []}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {news.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer group"
                    onClick={() => handleNewsClick(item.documentUrl)}
                  >
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={`${categoryColors[item.category]} border-0`}>{item.category}</Badge>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.readTime}
                      </div>
                      {/* Indicador de documento */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-2 backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4">{item.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {item.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
