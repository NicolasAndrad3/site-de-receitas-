"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import PurchaseModal from "./PurchaseModal"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import MobileSwiperCarousel from './MobileSwiperCarousel'

interface Ebook {
  id: number
  titulo: string
  descricao: string
  autor: string
  preco: string
  original?: string
  badge?: string[]
  bg: string
}

const ebooks: Ebook[] = [
  {
    id: 1,
    titulo: "Inteligência na Cozinha",
    descricao: "Receitas que combinam sabor e tecnologia.",
    autor: "Chef Neuralis",
    preco: "R$ 22,90",
    original: "R$ 29,90",
    badge: ["Tech", "Futurista"],
    bg: "bg-gradient-to-br from-pink-500 to-yellow-500"
  },
  {
    id: 2,
    titulo: "Sabores do Futuro",
    descricao: "Culinária com ingredientes inovadores.",
    autor: "Dr. Taste AI",
    preco: "R$ 19,90",
    bg: "bg-gradient-to-br from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    titulo: "Doces com Dados",
    descricao: "Sobremesas com precisão matemática.",
    autor: "Prof. Sugar Bot",
    preco: "R$ 15,90",
    original: "R$ 19,90",
    badge: ["Popular"],
    bg: "bg-gradient-to-br from-cyan-500 to-sky-500"
  },
  {
    id: 4,
    titulo: "Algoritmos de Sabor",
    descricao: "Combinações culinárias com inteligência artificial.",
    autor: "Chef Matrix",
    preco: "R$ 26,90",
    badge: ["IA"],
    bg: "bg-gradient-to-br from-orange-500 to-red-500"
  },
  {
    id: 5,
    titulo: "Panificação Neural",
    descricao: "Receitas de pães com fermentação controlada por IA.",
    autor: "Dr. Glúten AI",
    preco: "R$ 18,90",
    bg: "bg-gradient-to-br from-green-500 to-lime-500"
  },
  {
    id: 6,
    titulo: "Impressão 3D Culinária",
    descricao: "O futuro da comida em camadas impressas.",
    autor: "PrintChef",
    preco: "R$ 24,90",
    original: "R$ 32,90",
    bg: "bg-gradient-to-br from-blue-500 to-indigo-500"
  }
]

export default function Sells() {
  const [hovering, setHovering] = useState(false)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [autoExpandId, setAutoExpandId] = useState<number | null>(null)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [modalId, setModalId] = useState<number | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const autoPlayTimeout = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    if (autoPlayTimeout.current) clearTimeout(autoPlayTimeout.current)
    if (isUserInteracting || expandedId !== null) return

    autoPlayTimeout.current = setTimeout(() => {
      const random = ebooks[Math.floor(Math.random() * ebooks.length)]
      setAutoExpandId(random.id)
      startAutoPlay()
    }, 4000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (autoPlayTimeout.current) clearTimeout(autoPlayTimeout.current)
    }
  }, [isUserInteracting, expandedId])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsUserInteracting(false)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [isUserInteracting])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setExpandedId(null)
        setIsUserInteracting(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleCardClick = (id: number) => {
    setIsUserInteracting(true)
    setExpandedId(prev => (prev === id ? null : id))
    setAutoExpandId(null)
  }

  const isExpanded = (id: number) =>
    id === expandedId || (!isUserInteracting && id === autoExpandId)

  return (
    <section
      id="sells"
      className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-purple-900 text-white snap-start overflow-hidden scroll-mt-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-50 mix-blend-overlay"
          style={{ backgroundImage: "url('/tech-pattern-preview.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_6px] opacity-80 animate-subtleScan" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,153,102,0.1),transparent)]" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 pt-32 md:pt-10 pb-10 min-h-full flex flex-col">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="animate-bounce-slight"
          >
            <span className="px-4 py-1 border border-orange-300 text-orange-300 uppercase tracking-widest font-bricolage text-sm backdrop-blur-sm shadow-sm">
              MATRIZ DE CONHECIMENTO DIGITAL
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 flex-wrap mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold leading-tight text-purple-300 drop-shadow-[0_0_10px_rgba(165,94,234,0.6)]">
              GASTRONOMIA DO FUTURO
            </h2>

            <Link to="/ebooks">
              <button
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="flex items-center gap-2 h-12 px-6 border border-orange-300 text-white font-mono text-sm hover:bg-orange-400 hover:text-white transition duration-300 rounded-none"
              >
                <ArrowRight className="h-4 w-4" />
                <span className={hovering ? "typing-effect" : ""}>
                  Acessar biblioteca completa
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* EBOOKS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full"
        >
          {/* DESKTOP GRID */}
          <div
            ref={wrapperRef}
            className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-6 px-2 sm:px-4 grid-flow-dense max-w-full min-w-0"
          >
            {ebooks.map((ebook, index) => {
              const isExpandedCard = isExpanded(ebook.id)
              const totalCols = 3
              const colIndex = index % totalCols
              const rowIndex = Math.floor(index / totalCols)
              const isLastRow = rowIndex === Math.floor((ebooks.length - 1) / totalCols)

              const isOnlyInLastRow =
              isLastRow && index === ebooks.length - 1 && totalCols > 1

              const spanClasses = isExpandedCard
              ? isOnlyInLastRow
              ? ""
              : colIndex === totalCols - 1
              ? "md:col-span-2 md:col-start-2 md:row-span-2"
              : "md:col-span-2 md:row-span-2"
              : ""

              return (
                <motion.div
                  key={ebook.id}
                  layout
                  layoutRoot
                  transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                  onClick={() => handleCardClick(ebook.id)}
                  className={`cursor-pointer w-full min-w-0 ${spanClasses}`}
                >
                  <motion.div
                    layout
                    className="rounded-2xl border border-orange-300 bg-zinc-900 text-white transition-all duration-300 overflow-hidden w-full h-full flex flex-col min-w-0 shadow-[0_0_16px_rgba(255,165,0,0.2)] hover:shadow-[0_0_20px_rgba(255,165,0,0.35)]"
                  >
                    <motion.div
                      layout
                      className={`h-24 ${ebook.bg} flex items-center justify-center`}
                    >
                      <BookOpen className="h-10 w-10 text-white" />
                    </motion.div>

                    <div className="p-4 space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {ebook.badge?.map((b, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 text-xs font-mono rounded-full uppercase ${
                              i === 0
                                ? "bg-orange-300 text-black"
                                : "border border-orange-300 text-orange-300"
                            }`}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-white text-lg leading-tight">
                        {ebook.titulo}
                      </h3>
                      <p className="text-sm text-zinc-400">{ebook.descricao}</p>
                    </div>

                    <AnimatePresence>
                      {isExpandedCard && (
                        <motion.div
                          key="expand"
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-4 border-t border-zinc-800 bg-zinc-950"
                        >
                          <p className="text-sm text-zinc-500 mb-2 font-mono">
                            Autor: {ebook.autor}
                          </p>
                          <div className="flex gap-2 items-baseline font-mono mb-4">
                            <span className="text-lg text-orange-300 font-bold">{ebook.preco}</span>
                            {ebook.original && (
                              <span className="text-sm text-zinc-500 line-through">
                                {ebook.original}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setModalId(ebook.id)
                            }}
                            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-md text-sm tracking-wide transition"
                          >
                            Comprar
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          <MobileSwiperCarousel onCardClick={handleCardClick} />
        </motion.div>
      </div>

      {modalId !== null && (
        <PurchaseModal
          isOpen={true}
          titulo={ebooks.find(e => e.id === modalId)?.titulo || ""}
          preco={ebooks.find(e => e.id === modalId)?.preco || ""}
          badge={ebooks.find(e => e.id === modalId)?.badge || []}
          bg={ebooks.find(e => e.id === modalId)?.bg || ""}
          onClose={() => setModalId(null)}
        />
      )}
    </section>
  )
}
