"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Universidad 123, Col. Educación, Ciudad, CP 12345",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 (55) 1234-5678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@unid.edu.mx",
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lunes a Viernes: 8:00 - 18:00",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Contacto</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Estamos aquí para resolver tus dudas y acompañarte en tu proceso de admisión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{info.content}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Solicita Información</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
                <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                  <option>Programa de Interés</option>
                  <option>Licenciatura en Enfermería</option>
                  <option>Químico Farmacéutico Biólogo</option>
                </select>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                ></textarea>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar Solicitud</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
