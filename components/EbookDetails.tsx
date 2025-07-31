import { useEffect, useState, useRef } from "react"
import { BookOpen, ChefHat, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/Button"
import { cn } from "../lib/Utils"

interface Ebook {
  id: number
  titulo: string
  descricao: string
  autor: string
  preco: string
  original?: string
  bg: string
  badge?: string
  destaque?: boolean
  rating?: number
  reviews?: number
}

interface Props {
  ebook: Ebook
  isActive: boolean
  onClick: () => void
}

export default function InteractiveEbookCard({ ebook, isActive, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      layout
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      className={cn(
        "relative rounded-xl bg-zinc-900 border border-zinc-700 overflow-hidden shadow-md cursor-pointer",
        isActive ? "col-span-2 row-span-2 md:flex-row" : ""
      )}
      onClick={onClick}
    >
      <div className={cn("p-6 w-full flex flex-col justify-between", isActive ? "md:flex-row" : "")}>        
        <div
          className={cn(
            "rounded-lg p-6 text-white mb-4 md:mb-0 md:w-1/2",
            `bg-gradient-to-br ${ebook.bg}`
          )}
        >
          <div className="font-mono text-sm opacity-80 mb-1">{ebook.destaque ? "DESTAQUE" : "PUBLICAÇÃO"}</div>
          <h3 className="text-2xl font-bold leading-tight">{ebook.titulo}</h3>
          {ebook.badge && (
            <span className="inline-block mt-2 px-3 py-1 text-xs bg-black/30 border border-white rounded-full">
              {ebook.badge}
            </span>
          )}
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="text-white">
            <p className="text-lg font-semibold mb-2">{ebook.titulo}</p>
            <p className="text-sm text-zinc-400 mb-4">{ebook.descricao}</p>

            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <ChefHat className="h-4 w-4" />
              <span>{ebook.autor}</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{ebook.preco}</span>
              {ebook.original && (
                <span className="text-sm line-through text-zinc-500">{ebook.original}</span>
              )}
            </div>

            {ebook.rating && (
              <div className="mt-2 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: ebook.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
                <span className="text-sm text-white/80 ml-2">({ebook.reviews} avaliações)</span>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="ghost">Ver detalhes</Button>
            <Button>Comprar agora</Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
