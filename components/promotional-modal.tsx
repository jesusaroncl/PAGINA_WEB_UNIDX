"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Mostrar el modal siempre al cargar o actualizar la página
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCTAClick = () => {
    window.open(
      "https://erpeduca.unidx.edu.pe/admision/proceso/InscripcionPostulante/ingresoExterno/inscripcionPostulanteExterno/universidad",
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed inset-0 bg-black/85 z-50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white/95 backdrop-blur-md shadow-2xl w-full max-w-3xl h-full max-h-[95vh] overflow-hidden flex flex-col rounded-lg">
              {/* Botón de cierre */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-2.5 transition-all duration-200 hover:scale-110 hover:rotate-90 touch-manipulation"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Contenedor de la imagen con scroll si es necesario */}
              <div className="relative w-full flex-1 bg-gradient-to-br from-blue-50/80 to-blue-100/80 overflow-auto flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/noticias/flayer-inscripciones.png"
                    alt="Inscripciones UNIDX"
                    fill
                    className="object-contain p-3 sm:p-4 md:p-6"
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Sección del CTA */}
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white/90 to-blue-50/90 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCTAClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white font-bold text-base sm:text-lg md:text-xl py-3.5 sm:py-4 md:py-5 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group touch-manipulation min-h-[48px]"
                >
                  <span>Inscríbete aquí</span>
                  <motion.svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </motion.button>

                <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 px-2">
                  ¡No pierdas esta oportunidad de ser parte de UNIDx!
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
