"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("location.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("location.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="overflow-hidden shadow-xl border-2">
            <div className="relative h-96 bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Interactive Map</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in Maps
                </Button>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("location.address")}</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("location.phone")}</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("location.email")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
