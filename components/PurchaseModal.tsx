"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef } from "react"
import { loadStripe } from "@stripe/stripe-js"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  titulo: string
  preco: string
  badge?: string[]
  bg?: string
}

const stripePromise = loadStripe("pk_test_51RCV4DGaty9PCEwOzxw4Ed8uxsEzDIjfjqdwig02gwuDLl7t9L7ap6b4koKLfIRpuJCZy4BKUvXFFzlRZ3L71GOQ00SuPz5dqY")

export default function PurchaseModal({
  isOpen,
  onClose,
  titulo,
  preco,
  badge = [],
  bg = "from-yellow-300 via-orange-400 to-pink-500"
}: PurchaseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleCheckout = async () => {
    const stripe = await stripePromise

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titulo,
        price: parseInt(preco.replace(/\D/g, ""), 10), // transforma R$ 22,90 → 2290
        method: "card"
      })
    })

    const session = await response.json()

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-zinc-900 border border-orange-300 text-white rounded-3xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden relative flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Imagem do eBook */}
            <div className={`h-1/2 w-full bg-gradient-to-br ${bg} flex items-center justify-center`}>
              <span className="text-zinc-900 font-black text-3xl tracking-widest drop-shadow-lg">EBOOK</span>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                {badge.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-3">
                    {badge.map((b, i) => (
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
                )}

                <h2 className="text-3xl font-bold text-orange-400 mb-2">{titulo}</h2>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
                  Este eBook explora as novas fronteiras da culinária digital com inteligência artificial,
                  precisão de dados e sabores inovadores. Aprenda como a tecnologia transforma o modo como
                  cozinhamos e nos alimentamos.
                </p>
                <p className="text-lg font-semibold text-white">
                  Valor: <span className="text-orange-300">{preco}</span>
                </p>
              </div>

              {/* Botões de pagamento */}
              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-xl text-sm transition-all shadow-md focus:outline-none focus:ring-0 active:scale-95 active:bg-orange-500"
                >
                  Pagar com Cartão
                </button>

                <button
                  onClick={() => alert("Pix em breve!")}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl text-sm transition-all shadow-md focus:outline-none focus:ring-0 active:scale-95 active:bg-purple-600"
                >
                  Pagar com Pix
                </button>

                <button
                  onClick={() => alert("Apple Pay em breve!")}
                  className="border border-orange-300 hover:bg-zinc-800 text-orange-300 font-semibold py-3 rounded-xl text-sm transition-all shadow-md focus:outline-none focus:ring-0 active:scale-95 active:bg-transparent"
                >
                  Apple Pay
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
