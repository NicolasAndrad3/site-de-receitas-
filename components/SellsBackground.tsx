"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface SellsBackgroundProps {
  className?: string
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 40 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.5 + Math.random() * 1.2,
    opacity: 0.18 + Math.random() * 0.2,
    hue: 20 + Math.random() * 40, // laranja, salmão, dourado
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.015 + Math.random() * 0.025,
  }
}

export default function SellsBackground({ className }: SellsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      beamsRef.current = Array.from({ length: 40 }, () =>
        createBeam(canvas.width, canvas.height)
      )
    }

    const resetBeam = (beam: Beam, index: number) => {
      beam.y = canvas.height + 100
      const spacing = canvas.width / 3
      const column = index % 3
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 80 + Math.random() * 60
      beam.speed = 0.4 + Math.random() * 0.5
      beam.hue = 20 + (index * 60) / 40
      beam.opacity = 0.2 + Math.random() * 0.2
    }

    const drawBeam = (ctx: CanvasRenderingContext2D, beam: Beam) => {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulseOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2)
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
      gradient.addColorStop(0.2, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity * 0.6})`)
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity})`)
      gradient.addColorStop(0.8, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity * 0.6})`)
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    const animate = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = "blur(30px)"

      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed
        if (beam.y + beam.length < -100) {
          resetBeam(beam, i)
        }
        drawBeam(ctx, beam)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden bg-[#0e0c0a] ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(35px)" }}
      />
      <motion.div
        className="absolute inset-0 bg-orange-100/5 pointer-events-none"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        style={{ backdropFilter: "blur(25px)" }}
      />
    </div>
  )
}
