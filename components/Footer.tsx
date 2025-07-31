"use client"

import { ArrowUp, Apple, Play } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const handleScrollToTop = () => {
    const navigateToTop = new CustomEvent("navigateToSection", { detail: 0 })
    document.dispatchEvent(navigateToTop)
  }

  return (
    <footer
      id="footer"
      className="relative h-screen w-full bg-gradient-to-t from-zinc-950 via-black to-purple-950 text-white overflow-hidden"
    >
      {/* Textura leve tech com toque roxo-laranja */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(253,186,116,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(165,94,234,0.035),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:100%_6px] opacity-20 animate-subtleScan pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between items-center py-20 px-6 text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold font-['Share_Tech_Mono'] text-orange-500 drop-shadow-[0_0_20px_rgba(165,94,234,0.15)]"
        >
          Junte-se ao futuro da gastronomia
        </motion.h2>

        {/* Botão de voltar */}
        <div className="flex mt-10 justify-center">
          <button
            onClick={handleScrollToTop}
            className="px-6 py-3 border border-purple-400/40 bg-black/20 text-purple-200 hover:text-white hover:bg-purple-500/10 active:bg-purple-500/20 focus:outline-none focus:ring-1 focus:ring-purple-400 font-mono text-sm tracking-wide rounded-md flex items-center gap-2 transition-all shadow-sm"
          >
            <ArrowUp className="w-4 h-4" /> Voltar ao topo
          </button>
        </div>

        {/* Botões de download */}
        <div className="mt-14 flex flex-wrap gap-6 justify-center items-center">
          <a
            href="#"
            className="flex items-center gap-3 px-5 py-3 border border-purple-500/30 bg-zinc-800/40 rounded-lg text-orange-300 hover:text-white hover:border-orange-400 hover:bg-orange-100/10 transition font-mono text-sm"
          >
            <Apple className="w-5 h-5 text-purple-400" />
            Baixar na App Store
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-5 py-3 border border-purple-500/30 bg-zinc-800/40 rounded-lg text-orange-300 hover:text-white hover:border-orange-400 hover:bg-orange-100/10 transition font-mono text-sm"
          >
            <Play className="w-5 h-5 text-purple-400" />
            Baixar no Google Play
          </a>
        </div>

        {/* Créditos */}
        <div className="mt-20 text-sm text-purple-200/60 space-y-2 font-mono pb-20"> {/* <- padding extra aqui */}
          <p className="text-xs md:text-sm">
            © 2025 <span className="text-orange-400">CookMind</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 justify-center text-xs text-purple-300/50">
            <a href="#" className="hover:text-orange-400 transition">Sobre</a>
            <a href="#" className="hover:text-orange-400 transition">Contato</a>
            <a href="#" className="hover:text-orange-400 transition">Termos</a>
            <a href="#" className="hover:text-orange-400 transition">Privacidade</a>
          </div>
          <p className="text-xs text-purple-300/30 mt-8">
            Desenvolvido por <span className="text-orange-400">Nicolas Andrade</span>
          </p>
        </div>
      </div>

      <img
        src="/signature.png"
        alt="Assinatura"
        className="absolute bottom-4 md:bottom-6 right-4 w-36 rotate-[12deg] opacity-70 hover:opacity-100 transition duration-300 drop-shadow-[0_0_6px_rgba(253,186,116,0.5)]"
      />
    </footer>
  )
}