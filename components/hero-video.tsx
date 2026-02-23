"use client"

import { useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function HeroVideo() {
  const [muted, setMuted] = useState(true)
  const [overlayDismissed, setOverlayDismissed] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const sendCommand = (func: string, args = "") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    )
  }

  const activateSound = () => {
    sendCommand("unMute")
    sendCommand("setVolume", "100")
    setMuted(false)
    setOverlayDismissed(true)
  }

  const toggleMute = () => {
    if (muted) {
      sendCommand("unMute")
      sendCommand("setVolume", "100")
    } else {
      sendCommand("mute")
    }
    setMuted(!muted)
  }

  return (
    <div className="w-full bg-black overflow-hidden" style={{ position: 'relative', aspectRatio: '16/9' }}>
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/i6SnS7mmGus?si=fiyf0xy1t6UxVKU_&autoplay=1&mute=1&loop=1&playlist=i6SnS7mmGus&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
        title="Video Institucional UNIDx"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          border: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* Overlay inicial: activa el sonido con un clic */}
      {!overlayDismissed && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
          onClick={activateSound}
        >
          <div className="flex flex-col items-center gap-3 bg-black/50 backdrop-blur-sm px-8 py-5 rounded-2xl border border-white/20 hover:bg-black/60 transition-all duration-200 hover:scale-105">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/50">
              <Volume2 className="w-7 h-7 text-white" />
            </div>
            <p className="text-white font-semibold text-base tracking-wide">Toca para activar el sonido</p>
          </div>
        </div>
      )}

      {/* Botón mute/unmute (esquina inferior derecha) */}
      {overlayDismissed && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer"
          title={muted ? "Activar sonido" : "Silenciar"}
        >
          {muted ? (
            <>
              <VolumeX className="w-5 h-5 text-red-400" />
              <span className="text-xs font-medium tracking-wide">Activar sonido</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 text-green-400" />
              <span className="text-xs font-medium tracking-wide">Silenciar</span>
            </>
          )}
        </button>
      )}
    </div>
  )
}
