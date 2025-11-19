"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, BookOpen, Award, Globe, Stethoscope, FlaskRound } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function UniversityHero() {
  const { t } = useLanguage()
  const [careersModalOpen, setCareersModalOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const router = useRouter()

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function update() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Evitar renderizar partículas hasta que tengamos dimensiones válidas (solo en cliente)
  const canRenderParticles = dimensions.width > 0 && dimensions.height > 0;

  return (
    <section className="relative min-h-[400px] sm:min-h-[600px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {canRenderParticles && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* University Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-2 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-[10px] sm:text-sm font-medium mb-4 sm:mb-8 border border-white/20"
          >
            <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Universidad Interamericana para el Desarrollo
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-6 leading-tight px-2"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-base md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-12 max-w-4xl mx-auto px-2"
          >
            {[
              { icon: Users, number: "2,500+", label: "Estudiantes" },
              { icon: BookOpen, number: "150+", label: "Publicaciones" },
              { icon: Award, number: "25+", label: "Reconocimientos" },
              { icon: Globe, number: "15+", label: "Países" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg mb-1 sm:mb-2 lg:mb-3 backdrop-blur-sm border border-white/20">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1">{stat.number}</div>
                <div className="text-blue-200 text-[10px] sm:text-xs lg:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => setCareersModalOpen(true)}
                className="bg-white text-blue-900 hover:bg-blue-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVideoModalOpen(true)}
                className="border-white/30 text-white hover:bg-white/10 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent w-full sm:w-auto"
              >
                <Play className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                Ver video institucional
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Careers Selection Modal */}
      <Dialog open={careersModalOpen} onOpenChange={setCareersModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-blue-800 mb-4">Elige tu Carrera</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Button
              onClick={() => {
                router.push("/carreras/enfermeria")
                setCareersModalOpen(false)
              }}
              className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <Stethoscope className="h-6 w-6" />
                <span>Licenciatura en Enfermería</span>
              </div>
            </Button>

            <Button
              onClick={() => {
                router.push("/carreras/farmacia-bioquimica")
                setCareersModalOpen(false)
              }}
              className="w-full h-16 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <FlaskRound className="h-6 w-6" />
                <span>Farmacia y Bioquímica</span>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="sm:max-w-4xl p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center space-x-2 text-xl">
              <Play className="h-6 w-6 text-blue-600" />
              <span>Video Institucional</span>
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video className="w-full h-full object-cover" controls poster="images/video-poster.jpg">
                <source src="/video/video.mp4" type="video/mp4" />
                <p className="text-white p-4">
                  Tu navegador no soporta el elemento de video.
                  <a href="/video/video.mp4" className="text-blue-400 underline ml-2">
                    Descargar video
                  </a>
                </p>
              </video>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Conoce más sobre nuestra institución y nuestro compromiso con la formación de líderes en ciencias de la
                salud.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
