"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function MinimalistContact() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Universidad 123, Col. Educación\nCiudad, CP 12345",
      action: "Ver en Maps",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 (55) 1234-5678\nLunes a Viernes: 8:00 - 18:00",
      action: "Llamar ahora",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@unid.edu.mx\nadmisiones@unid.edu.mx",
      action: "Enviar email",
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lunes a Viernes: 8:00 - 18:00\nSábados: 9:00 - 14:00",
      action: null,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-light border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Mail className="h-4 w-4 mr-2" />
            Contáctanos
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-white mb-6">
            Inicia tu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Futuro</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            Estamos aquí para resolver tus dudas y acompañarte en tu proceso de admisión a nuestros programas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-light text-slate-900 dark:text-white mb-2">{info.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed whitespace-pre-line mb-3">
                          {info.content}
                        </p>
                        {info.action && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 p-0 h-auto font-light"
                          >
                            {info.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600" />
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-6">Solicita Información</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-light transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-light transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-light transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <select className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-light transition-all duration-300">
                      <option>Programa de Interés</option>
                      <option>Licenciatura en Enfermería</option>
                      <option>Químico Farmacéutico Biólogo</option>
                      <option>Posgrados</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <textarea
                      placeholder="Mensaje (opcional)"
                      rows={4}
                      className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-light resize-none transition-all duration-300"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 rounded-xl group">
                      Enviar Solicitud
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
