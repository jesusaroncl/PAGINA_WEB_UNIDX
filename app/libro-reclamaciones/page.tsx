"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, AlertCircle, CheckCircle } from "lucide-react"
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernFooter } from "@/components/modern-footer"

export default function LibroReclamacionesPage() {
  const [formData, setFormData] = useState({
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    direccion: "",
    tipoReclamo: "",
    detalle: "",
    pedido: "",
    fechaIncidente: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <ModernNavigation />
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Reclamo Registrado Exitosamente</h1>
              <p className="text-gray-600 mb-6">
                Su reclamo ha sido registrado con el número <strong>REC-2024-001234</strong>
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">¿Qué sigue ahora?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• Recibirá una confirmación por email en las próximas 24 horas</li>
                  <li>• Su reclamo será evaluado en un plazo máximo de 30 días calendario</li>
                  <li>• Puede hacer seguimiento con su número de reclamo</li>
                  <li>• Será contactado para informarle sobre la resolución</li>
                </ul>
              </div>
              <Button onClick={() => setIsSubmitted(false)} className="mr-4">
                Realizar Otro Reclamo
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Volver al Inicio
              </Button>
            </motion.div>
          </div>
        </div>
        <ModernFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ModernNavigation />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Libro de Reclamaciones</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Su opinión es importante para nosotros. Complete el formulario para registrar su reclamo o sugerencia.
            </p>
          </motion.div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    ¿Qué es un reclamo?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Es la manifestación de disconformidad relacionada con nuestros servicios educativos, o el
                    disconformidad sobre el personal que lo atiende.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                    Tiempo de Respuesta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Su reclamo será atendido en un plazo no mayor a 30 días calendario. Recibirá una respuesta por
                    escrito o por el medio que indique.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Formulario de Reclamo</CardTitle>
                <CardDescription>Complete todos los campos obligatorios marcados con *</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Datos Personales */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Badge variant="outline" className="mr-2">
                        1
                      </Badge>
                      Datos Personales
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="tipoDocumento">Tipo de Documento *</Label>
                        <Select onValueChange={(value) => handleInputChange("tipoDocumento", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione tipo de documento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dni">DNI</SelectItem>
                            <SelectItem value="ce">Carné de Extranjería</SelectItem>
                            <SelectItem value="pasaporte">Pasaporte</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="numeroDocumento">Número de Documento *</Label>
                        <Input
                          id="numeroDocumento"
                          value={formData.numeroDocumento}
                          onChange={(e) => handleInputChange("numeroDocumento", e.target.value)}
                          placeholder="Ingrese número de documento"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="nombres">Nombres *</Label>
                        <Input
                          id="nombres"
                          value={formData.nombres}
                          onChange={(e) => handleInputChange("nombres", e.target.value)}
                          placeholder="Ingrese sus nombres"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="apellidos">Apellidos *</Label>
                        <Input
                          id="apellidos"
                          value={formData.apellidos}
                          onChange={(e) => handleInputChange("apellidos", e.target.value)}
                          placeholder="Ingrese sus apellidos"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          placeholder="Ingrese su teléfono"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Ingrese su email"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="direccion">Dirección *</Label>
                      <Input
                        id="direccion"
                        value={formData.direccion}
                        onChange={(e) => handleInputChange("direccion", e.target.value)}
                        placeholder="Ingrese su dirección completa"
                        required
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Detalle del Reclamo */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Badge variant="outline" className="mr-2">
                        2
                      </Badge>
                      Detalle del Reclamo
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="tipoReclamo">Tipo de Reclamo *</Label>
                        <Select onValueChange={(value) => handleInputChange("tipoReclamo", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione el tipo de reclamo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="academico">Académico</SelectItem>
                            <SelectItem value="administrativo">Administrativo</SelectItem>
                            <SelectItem value="infraestructura">Infraestructura</SelectItem>
                            <SelectItem value="atencion">Atención al Cliente</SelectItem>
                            <SelectItem value="facturacion">Facturación</SelectItem>
                            <SelectItem value="otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="fechaIncidente">Fecha del Incidente</Label>
                        <Input
                          id="fechaIncidente"
                          type="date"
                          value={formData.fechaIncidente}
                          onChange={(e) => handleInputChange("fechaIncidente", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="detalle">Detalle del Reclamo *</Label>
                        <Textarea
                          id="detalle"
                          value={formData.detalle}
                          onChange={(e) => handleInputChange("detalle", e.target.value)}
                          placeholder="Describa detalladamente su reclamo..."
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pedido">Pedido del Consumidor *</Label>
                        <Textarea
                          id="pedido"
                          value={formData.pedido}
                          onChange={(e) => handleInputChange("pedido", e.target.value)}
                          placeholder="¿Qué solicita como solución a su reclamo?"
                          className="min-h-[80px]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4">
                    <Button type="button" variant="outline">
                      Limpiar Formulario
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Enviar Reclamo
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-4 bg-gray-50 rounded-lg"
          >
            <p className="text-sm text-gray-600">
              <strong>Nota Legal:</strong> La formulación del reclamo no impide acudir a otras vías de solución de
              controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. El proveedor debe dar
              respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliar el plazo hasta
              por treinta (30) días más, previa comunicación al reclamante.
            </p>
          </motion.div>
        </div>
      </div>

      <ModernFooter />
    </div>
  )
}
