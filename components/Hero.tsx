"use client"

import HeroBackground from "../components/HeroBackground"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  const [input, setInput] = useState("")
  const [focado, setFocado] = useState(false)
  const [termos, setTermos] = useState<string[]>([])
  const [sugestoes, setSugestoes] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarTermo = (termo: string) => {
    if (!termos.includes(termo.toLowerCase())) {
      setTermos([...termos, termo.toLowerCase()])
      setInput("")
    }
  }

  const removerTermo = (termo: string) => {
    setTermos(termos.filter((t) => t !== termo))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      adicionarTermo(input.trim())
    }
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden snap-start">
      <HeroBackground />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 sm:px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-['Share_Tech_Mono'] text-purple-400 drop-shadow-[0_0_18px_rgba(192,132,252,0.9)] mb-8 text-center"
        >
          CookMind
        </motion.h1>

        <div className="w-full max-w-xl relative">
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {termos.map((termo) => (
              <motion.div
                key={termo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-black text-white px-3 py-1 rounded-full text-sm border border-purple-500 hover:bg-purple-600 cursor-pointer transition-all"
                onClick={() => removerTermo(termo)}
              >
                {termo}
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setFocado(true)}
              onBlur={() => setFocado(false)}
              placeholder="Digite um ingrediente e pressione Enter..."
              className={`w-full px-5 py-3 rounded-lg bg-black/70 ${
                focado ? "text-black placeholder-black" : "text-white placeholder-white"
              } border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-[0_0_18px_rgba(165,94,234,0.4)] backdrop-blur-sm`}
            />
          </div>

          {termos.includes("banana") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-zinc-900 border border-purple-600 rounded-xl p-6 shadow-2xl max-w-[95%] md:max-w-3xl w-full flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="w-full md:w-1/3 rounded overflow-hidden">
                <img
                  src="public/banana.webp"
                  alt="Smoothie de Banana"
                  className="w-full h-40 md:h-full object-cover rounded-md shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-2/3">
                <h2 className="text-white text-2xl font-bold mb-1 font-orbitron">
                  Smoothie de Banana
                </h2>
                <p className="text-zinc-300 text-sm mb-3">
                  Um delicioso smoothie de banana com aveia e mel.
                </p>
                <ul className="text-sm text-zinc-400 list-disc list-inside mb-3">
                  <li>1 banana madura</li>
                  <li>200ml de leite</li>
                  <li>2 colheres de aveia</li>
                  <li>1 colher de mel</li>
                </ul>
                <p className="text-green-400 text-xs font-mono flex items-center gap-1">
                  Categoria: Café da manhã
                </p>
              </div>
            </motion.div>
          )}

          {termos.includes("morango") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-zinc-900 border border-purple-600 rounded-xl p-6 shadow-2xl max-w-[95%] md:max-w-3xl w-full flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="w-full md:w-1/3 rounded overflow-hidden">
                <img
                  src="public/morango.webp"
                  alt="Smoothie de Morango"
                  className="w-full h-40 md:h-full object-cover rounded-md shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-2/3">
                <h2 className="text-white text-2xl font-bold mb-1 font-orbitron">
                  Smoothie de Morango
                </h2>
                <p className="text-zinc-300 text-sm mb-3">
                  Um smoothie refrescante com morangos frescos e iogurte natural.
                </p>
                <ul className="text-sm text-zinc-400 list-disc list-inside mb-3">
                  <li>1 xícara de morangos</li>
                  <li>1 copo de iogurte natural</li>
                  <li>1 colher de mel</li>
                  <li>Gelo a gosto</li>
                </ul>
                <p className="text-green-400 text-xs font-mono flex items-center gap-1">
                  Categoria: Lanche saudável
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-6 w-full max-w-[240px]">
          <button
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium rounded-md shadow-lg hover:shadow-[0_0_16px_rgba(192,132,252,0.7)] transition-all duration-300"
            onClick={() => {
              const event = new CustomEvent("navigateToSection", { detail: 2 })
              document.dispatchEvent(event)
            }}
          >
            Ver App
          </button>

          <button
            className="flex items-center justify-center gap-2 px-5 py-2.5 border border-purple-400 text-purple-500 bg-white/10 backdrop-blur-md font-medium rounded-md shadow-md hover:bg-purple-600 hover:text-white hover:shadow-[0_0_14px_rgba(192,132,252,0.5)] transition-all duration-300"
            onClick={() => {
              const event = new CustomEvent("navigateToSection", { detail: 1 })
              document.dispatchEvent(event)
            }}
          >
            E-books
          </button>
        </div>
      </div>

      <img
        src="/signature.png"
        alt="Assinatura"
        className="w-40 sm:w-52 opacity-95 rotate-[315deg] pointer-events-none select-none absolute right-4 bottom-4 sm:bottom-6"
      />
    </section>
  )
}
