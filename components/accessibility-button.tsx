"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accessibility, X, Type, Eye, Palette, Volume2, MousePointer, Keyboard, Pause } from "lucide-react"

interface AccessibilitySettings {
  fontSize: number
  highContrast: boolean
  reducedMotion: boolean
  screenReader: boolean
  keyboardNavigation: boolean
  colorBlindMode: string
  cursorSize: number
  lineHeight: number
}

export function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindMode: "none",
    cursorSize: 100,
    lineHeight: 150,
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibility-settings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [])

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement

    // Font size
    root.style.setProperty("--accessibility-font-scale", `${settings.fontSize / 100}`)

    // Line height
    root.style.setProperty("--accessibility-line-height", `${settings.lineHeight / 100}`)

    // High contrast
    if (settings.highContrast) {
      root.classList.add("accessibility-high-contrast")
    } else {
      root.classList.remove("accessibility-high-contrast")
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add("accessibility-reduced-motion")
    } else {
      root.classList.remove("accessibility-reduced-motion")
    }

    // Color blind mode
    root.classList.remove("accessibility-protanopia", "accessibility-deuteranopia", "accessibility-tritanopia")
    if (settings.colorBlindMode !== "none") {
      root.classList.add(`accessibility-${settings.colorBlindMode}`)
    }

    // Cursor size
    root.style.setProperty("--accessibility-cursor-scale", `${settings.cursorSize / 100}`)

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add("accessibility-keyboard-nav")
    } else {
      root.classList.remove("accessibility-keyboard-nav")
    }

    // Save to localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings))
  }, [settings])

  const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      highContrast: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      colorBlindMode: "none",
      cursorSize: 100,
      lineHeight: 150,
    }
    setSettings(defaultSettings)
    localStorage.removeItem("accessibility-settings")
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  return (
    <>
      {/* Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Abrir panel de accesibilidad"
        title="Opciones de accesibilidad"
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md max-h-[90vh] overflow-y-auto z-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Opciones de Accesibilidad
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar panel de accesibilidad"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Font Size */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Type className="w-4 h-4" />
                  Tamaño de texto: {settings.fontSize}%
                </Label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={([value]) => {
                    updateSetting("fontSize", value)
                    announceToScreenReader(`Tamaño de texto cambiado a ${value}%`)
                  }}
                  min={75}
                  max={200}
                  step={25}
                  className="w-full"
                />
              </div>

              {/* Line Height */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Type className="w-4 h-4" />
                  Espaciado de líneas: {settings.lineHeight}%
                </Label>
                <Slider
                  value={[settings.lineHeight]}
                  onValueChange={([value]) => {
                    updateSetting("lineHeight", value)
                    announceToScreenReader(`Espaciado de líneas cambiado a ${value}%`)
                  }}
                  min={100}
                  max={250}
                  step={25}
                  className="w-full"
                />
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  Alto contraste
                </Label>
                <Switch
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => {
                    updateSetting("highContrast", checked)
                    announceToScreenReader(`Alto contraste ${checked ? "activado" : "desactivado"}`)
                  }}
                />
              </div>

              {/* Color Blind Support */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Palette className="w-4 h-4" />
                  Soporte para daltonismo
                </Label>
                <Select
                  value={settings.colorBlindMode}
                  onValueChange={(value) => {
                    updateSetting("colorBlindMode", value)
                    announceToScreenReader(`Modo de daltonismo cambiado a ${value}`)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Ninguno</SelectItem>
                    <SelectItem value="protanopia">Protanopia</SelectItem>
                    <SelectItem value="deuteranopia">Deuteranopia</SelectItem>
                    <SelectItem value="tritanopia">Tritanopia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Cursor Size */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <MousePointer className="w-4 h-4" />
                  Tamaño del cursor: {settings.cursorSize}%
                </Label>
                <Slider
                  value={[settings.cursorSize]}
                  onValueChange={([value]) => {
                    updateSetting("cursorSize", value)
                    announceToScreenReader(`Tamaño del cursor cambiado a ${value}%`)
                  }}
                  min={100}
                  max={300}
                  step={50}
                  className="w-full"
                />
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Pause className="w-4 h-4" />
                  Reducir animaciones
                </Label>
                <Switch
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => {
                    updateSetting("reducedMotion", checked)
                    announceToScreenReader(`Animaciones reducidas ${checked ? "activadas" : "desactivadas"}`)
                  }}
                />
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Keyboard className="w-4 h-4" />
                  Navegación por teclado mejorada
                </Label>
                <Switch
                  checked={settings.keyboardNavigation}
                  onCheckedChange={(checked) => {
                    updateSetting("keyboardNavigation", checked)
                    announceToScreenReader(`Navegación por teclado ${checked ? "activada" : "desactivada"}`)
                  }}
                />
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Volume2 className="w-4 h-4" />
                  Anuncios de lector de pantalla
                </Label>
                <Switch
                  checked={settings.screenReader}
                  onCheckedChange={(checked) => {
                    updateSetting("screenReader", checked)
                    announceToScreenReader(`Lector de pantalla ${checked ? "activado" : "desactivado"}`)
                  }}
                />
              </div>

              {/* Reset Button */}
              <Button
                onClick={() => {
                  resetSettings()
                  announceToScreenReader("Configuración de accesibilidad restablecida")
                }}
                variant="outline"
                className="w-full"
              >
                Restablecer configuración
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" />
    </>
  )
}
