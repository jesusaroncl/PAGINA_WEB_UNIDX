"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react"

export function LocationMap() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      title: t("location.address"),
      content: t("location.full_address"),
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Phone",
      content: t("location.phone"),
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      content: t("location.email"),
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Hours",
      content: t("location.hours"),
      action: null,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
            <Navigation className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            {t("location.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("location.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <Card className="overflow-hidden shadow-2xl border-0 bg-white dark:bg-slate-800">
            <div className="relative h-96 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Interactive Map</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Click to view our campus location and surrounding area
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Maps
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{info.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{info.content}</p>
                        {info.action && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                          >
                            {info.action}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Quick Contact Form */}
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                ></textarea>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
