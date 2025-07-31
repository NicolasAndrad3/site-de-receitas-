"use client"

import { useState, Suspense } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Button } from "../ui/Button"
import {
  ArrowRight,
  Star,
  User,
  Info,
  CheckCircle,
  Sparkles
} from "lucide-react"
import { Link } from "react-router-dom"
import * as Tooltip from "@radix-ui/react-tooltip"

// function Logo3D() {
//   const { scene } = useGLTF("/logo3d.glb")
//   return <primitive object={scene} scale={1.8} />
// }

export default function AppLaunch() {
  const [hovering, setHovering] = useState(false)

  const features = [
    {
      text: "Escolha entre Modo Fitness ou Sabor",
      tooltip:
        "O app se adapta ao seu objetivo: Modo Fitness foca em performance nutricional e metas específicas, enquanto Modo Sabor prioriza o prazer de comer com sugestões mais indulgentes. Você escolhe o que importa mais em cada momento."
    },
    {
      text: "Dietas personalizadas e cálculo nutricional completo",
      tooltip:
        "O app gera dietas com base em seus objetivos, calcula a tabela nutricional completa e até dosa automaticamente ingredientes como óleo, sal e temperos para manter o equilíbrio ideal."
    },
    {
      text: "Adaptação dinâmica com base em preferências ou imprevistos",
      tooltip:
        "Se faltar um ingrediente ou houver necessidade de ajuste no tempo de preparo, o Chef Virtual sugere substituições baseadas em tabelas nutricionais e proteicas."
    },
    {
      text: "Receitas por ingredientes, voz ou imagem",
      tooltip:
        "Encontre receitas com o que você tem — por texto, comando de voz ou escaneando ingredientes."
    },
    {
      text: "Reconhecimento de ponto ideal em carnes e alimentos",
      tooltip:
        "Ao apontar a câmera para carnes ou outros alimentos, o app estima o tempo restante para alcançar o ponto ideal de preparo."
    },
    {
      text: "Auxílio em cortes ornamentais e técnicos",
      tooltip:
        "Guias visuais para cortes decorativos e profissionais, como julienne, brunoise ou cortes para apresentação."
    },
    {
      text: "Controle de despensa e lista de compras inteligente",
      tooltip:
        "Adicione itens automaticamente às suas listas e saiba o que está disponível na sua cozinha."
    },
    {
      text: "Aprendizado com seus hábitos e preferências",
      tooltip:
        "O app aprende com você: quanto mais usar, mais precisas serão as sugestões."
    }
  ]

  return (
    <section
      id="app"
      className="relative w-full min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black text-white px-6 py-32 md:py-20 overflow-hidden flex items-center justify-center lg:justify-between"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(165,94,234,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:100%_8px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 mt-6 lg:mt-0">
        <div className="flex flex-col items-start text-left max-w-xl gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold text-purple-300 animate-scan-glow drop-shadow-[0_0_10px_rgba(165,94,234,0.5)]"
          >
            CookMind — Seu Chef Inteligente. Sempre com Você.
          </motion.h2>

          <p className="text-sm font-semibold text-orange-300 uppercase tracking-wide">
            ⚡ Convites limitados — garanta sua vaga entre os primeiros
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-300"
          >
            Reconhece alimentos com a câmera. Cria dietas com base nos seus ingredientes. E ainda dosa automaticamente o que você usa. É o seu novo cérebro na cozinha.
          </motion.p>

          <Tooltip.Provider delayDuration={100}>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 text-sm text-zinc-400 relative"
            >
              {features.map((feature, idx) => (
                <li key={idx} className="relative flex items-center gap-2">
                  <CheckCircle className="text-green-400 shrink-0 animate-in fade-in" size={16} />
                  {feature.text}
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <Info size={14} className="text-purple-300 cursor-pointer" />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="right"
                        sideOffset={8}
                        className="z-50 rounded px-3 py-2 text-xs bg-zinc-800 text-white border border-purple-400 shadow-md w-56"
                      >
                        {feature.tooltip}
                        <Tooltip.Arrow className="fill-purple-400" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </li>
              ))}
            </motion.ul>
          </Tooltip.Provider>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Link to={""}>
              <Button
                variant="outline"
                size="lg"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="flex items-center gap-2 h-12 px-6 border-orange-400 text-orange-300 font-mono text-sm hover:bg-orange-400 hover:text-white transition duration-300"
              >
                <ArrowRight className="h-4 w-4" />
                <span className={hovering ? "typing-effect" : ""}>
                  Quero meu Chef Inteligente — Testar Grátis
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xs text-zinc-500 pt-3 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-blue-400" />
              🏅 Top 10 apps de culinária de 2025
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              “Melhor app pra quem mora sozinho.” — João, estudante
            </div>
            <div className="flex items-center gap-2">
              <User size={14} className="text-orange-400" />
              ⚡ Mais de <span className="font-semibold text-orange-300">12.000</span> usuários em lista de espera
            </div>
          </motion.div>
        </div>

        {/* MOCKUP 3D — VISÍVEL SOMENTE EM TELAS GRANDES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex w-full max-w-sm aspect-[9/18] rounded-[2.5rem] border-2 border-orange-400 bg-black/80 shadow-xl flex-col items-center justify-center text-center px-6 py-8 backdrop-blur-sm lg:ml-6 relative"
        >
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[3, 3, 3]} intensity={1.5} />
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} enablePan={false} />
              {/* <Logo3D /> */}
            </Suspense>
          </Canvas>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xs text-zinc-400 mt-4"
          >
            Seu assistente de cozinha já está quase pronto. Fique por dentro.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
