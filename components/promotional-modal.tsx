"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya vio el modal en esta sesión
    const hasSeenModalInSession = sessionStorage.getItem("hasSeenPromotionalModal")

    if (!hasSeenModalInSession) {
      // Mostrar el modal solo si no lo ha visto en esta sesión
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Guardar en sessionStorage que el usuario ya vio el modal en esta sesión
    sessionStorage.setItem("hasSeenPromotionalModal", "true")
  }

  const handleCTAClick = () => {
    // Guardar en sessionStorage que el usuario ya vio el modal en esta sesión
    sessionStorage.setItem("hasSeenPromotionalModal", "true")
    setIsOpen(false)
    window.open(
      "https://erpeduca.unidx.edu.pe/admision/proceso/InscripcionPostulante/ingresoExterno/inscripcionPostulanteExterno/universidad",
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
          {/* Overlay background - higher z-index than before */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="relative bg-white shadow-2xl w-full max-w-[550px] max-h-full sm:max-h-[90vh] flex flex-col rounded-2xl overflow-hidden ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre - Rediseñado para mejor visibilidad */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-2.5 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 drop-shadow-md" />
            </button>

            {/* Content with active scrollbar */}
            <div className="overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300">
              {/* Imagen del Flyer */}
              <div className="relative w-full overflow-hidden bg-white">
                <Image
                  src="/images/noticias/flayer-inscripciones.webp"
                  alt="Inscripciones UNIDX"
                  width={650}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>

              {/* Sección del CTA - Más compacta y elegante */}
              <div className="p-5 sm:p-8 bg-white border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCTAClick}
                  className="w-full bg-[#1a3a6e] hover:bg-[#254b8a] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span className="tracking-wide">Inscríbete aquí</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </motion.button>

                <p className="text-center text-sm md:text-base text-gray-500 mt-6 font-medium">
                  ¡No pierdas esta oportunidad de ser parte de <span className="text-[#1a3a6e]">UNIDx</span>!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
