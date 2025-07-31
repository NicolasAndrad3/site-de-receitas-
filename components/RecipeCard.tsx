"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface RecipeCardProps {
  nome: string
  ingredientes: string[]
  origem: string
  descricao: string
  matchCount: number
}

export default function RecipeCard({
  nome,
  ingredientes,
  origem,
  descricao,
  matchCount,
}: RecipeCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="transition-all duration-300 transform bg-white dark:bg-neutral-900 border border-orange-200 dark:border-orange-400 rounded-xl shadow-md p-5 text-left hover:shadow-xl"
    >
      <div className="flex justify-between items-center">
        <motion.h3
          className="text-lg font-bold text-orange-600 dark:text-orange-300 mb-2"
          whileHover={{ scale: 1.02 }}
        >
          {nome}
        </motion.h3>
        <span className="text-xs font-semibold bg-orange-100 text-orange-800 px-2 py-1 rounded dark:bg-orange-900 dark:text-orange-200">
          {matchCount} ingrediente(s) encontrado(s)
        </span>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="flex flex-wrap gap-2 mb-3"
      >
        {ingredientes.map((ing, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black border border-white/20 dark:border-black/20 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {ing}
          </motion.span>
        ))}
      </motion.div>

      <p className="text-xs italic text-neutral-500 dark:text-neutral-400 mb-2">
        Origem: {origem || "Desconhecida"}
      </p>

      <motion.p
        className="text-sm text-neutral-700 dark:text-neutral-300"
        animate={{ opacity: hovered ? 1 : 0.9 }}
        transition={{ duration: 0.4 }}
      >
        {descricao}
      </motion.p>
    </motion.div>
  )
}
