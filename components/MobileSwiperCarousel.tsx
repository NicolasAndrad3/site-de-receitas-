"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { BookOpen } from "lucide-react"
import PurchaseModal from "./PurchaseModal"

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

export default function MobileSwiperCarousel({ onCardClick }: { onCardClick: (id: number) => void }) {
  const [modalId, setModalId] = useState<number | null>(null)

  return (
    <div className="md:hidden w-full px-4 pt-8 pb-20 relative z-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="w-full max-w-sm mx-auto"
      >
        {ebooks.map((ebook) => (
          <SwiperSlide
            key={ebook.id}
            className="!w-[250px] transition-transform duration-300 relative"
          >
            {/* Glow visível somente no slide ativo */}
            <div className="swiper-slide-glow absolute inset-0 rounded-2xl z-0 pointer-events-none" />

            <div
              onClick={() => onCardClick(ebook.id)}
              className="relative z-10 rounded-2xl border border-orange-300 bg-zinc-900 overflow-hidden"
            >
              <div className={`h-24 ${ebook.bg} flex items-center justify-center rounded-t-2xl`}>
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <div className="p-4 space-y-2 text-center">
                <h3 className="font-bold text-white text-lg">{ebook.titulo}</h3>
                <p className="text-sm text-zinc-400">{ebook.descricao}</p>
                <p className="text-xs text-zinc-500 font-mono mt-1">Autor: {ebook.autor}</p>
                <p className="text-orange-300 font-bold">{ebook.preco}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setModalId(ebook.id)
                  }}
                  className="w-full mt-2 py-2 bg-orange-500 text-black font-bold rounded-md text-sm hover:bg-orange-600"
                >
                  Comprar
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
    </div>
  )
}
