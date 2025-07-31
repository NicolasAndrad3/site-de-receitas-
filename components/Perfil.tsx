import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { User, Menu, X } from "lucide-react"
import { useSearchParams } from "react-router-dom"


export default function PerfilPage() {
  const [searchParams] = useSearchParams()
  const defaultTab = searchParams.get("tab") || "perfil"
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "perfil":
        return (
          <div className="bg-black/70 mt-10 md:mt-0 rounded-xl border border-purple-600 shadow-2xl backdrop-blur-md overflow-hidden">
            {/* Banner com gradiente ajustado */}
            <div className="relative h-32 w-full bg-gradient-to-r from-[#620046] via-[#a3360a] to-[#ff6f00]">
              {/* Avatar */}
              <div className="absolute bottom-[-2.5rem] right-6 w-20 h-20 rounded-full border-4 border-black bg-zinc-900 flex items-center justify-center shadow-lg">
                <User className="text-zinc-300 w-8 h-8" />
              </div>
            </div>
  
            {/* Conteúdo abaixo do banner */}
            <div className="p-6 pt-14 space-y-4">
              <h2 className="text-purple-200 font-bold font-orbitron text-lg tracking-widest">
                Nicolas Andrade
              </h2>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-zinc-300">
                <div>
                  <span className="text-purple-400 block">E-mail:</span>
                  <span>nicolas@email.com</span>
                </div>
                <div>
                  <span className="text-orange-400 block">Plano:</span>
                  <span>Assinatura PRO</span>
                </div>
                <div>
                  <span className="text-green-400 block">Status:</span>
                  <span className="text-green-300">Ativo</span>
                </div>
                <div>
                  <span className="text-purple-400 block">Nascimento:</span>
                  <span>24/07/1992</span>
                </div>
                <div>
                  <span className="text-purple-400 block">Localização:</span>
                  <span>São Paulo, SP</span>
                </div>
                <div>
                  <span className="text-purple-400 block">Membro desde:</span>
                  <span>Mar 2024</span>
                </div>
                <div>
                  <span className="text-purple-400 block">Telefone:</span>
                  <span>+55 99 99999-9999</span>
                </div>
                <div>
                  <span className="text-purple-400 block">Último acesso:</span>
                  <span>Hoje às 13:45</span>
                </div>
              </div>
  
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#a3360a] to-[#ff6f00] text-white rounded hover:opacity-90 transition-all">
                Editar Perfil
              </button>
  
              {/* Avatares sobrepostos + info de amigos */}
              <div className="flex items-center gap-2 mt-6">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-black" />
                  <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-black" />
                  <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-black" />
                </div>
                <span className="text-sm text-zinc-300 ml-4">+ 2 amigos online</span>
              </div>
            </div>
          </div>
        )
  
        case "carrinho":

  return (
    <div className="bg-black/70 mt-10 md:mt-0 rounded-xl border border-purple-600 shadow-2xl backdrop-blur-md overflow-hidden p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-purple-300 text-2xl font-bold font-orbitron tracking-wide">
          Seu Carrinho
        </h2>
        <span className="ml-2 px-3 py-0.5 text-xs bg-purple-700 text-white rounded-full font-mono">
          3 itens
        </span>
      </div>

      {/* Itens do carrinho */}
      <div className="space-y-3">
        {[
          {
            nome: "Impressão 3D Culinária",
            categoria: "Tech",
            preco: "18.90",
            cor: "text-purple-700"
          },
          {
            nome: "Doces com Dados",
            categoria: "Popular",
            preco: "12.50",
            cor: "text-purple-700"
          },
          {
            nome: "Sabores do Futuro",
            categoria: "Futurista",
            preco: "15.75",
            cor: "text-purple-700"
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-4 rounded flex justify-between items-start border border-zinc-800 hover:border-purple-600 transition-all"
          >
            <div>
              <h3 className="text-white font-bold">{item.nome}</h3>
              <span className={`text-xs font-mono ${item.cor}`}>
                {item.categoria}
              </span>
            </div>
            <div className="text-right space-y-1">
              <p className="text-orange-400 font-mono font-bold">
                R$ {item.preco}
              </p>
              <button className="text-zinc-500 hover:text-red-400 transition">
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Separador */}
      <div className="h-0.5 w-full bg-gradient-to-r from-zinc-800 via-transparent to-zinc-800 my-2" />

{/* Total e botão */}
<div className="flex items-center justify-between text-sm font-mono">
  <span className="text-zinc-400">Total:</span>
  <span className="text-green-400 font-bold">R$ 47.15</span>
</div>

<button className="w-full mt-2 py-2 bg-gradient-to-r from-[#a3360a] to-[#ff6f00] text-white rounded hover:scale-[1.01] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13l1.6-8m9.8 0L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
    />
  </svg>
  Finalizar Compra
</button>

    </div>
  )      
  
  case "assinatura":
    return (
      <div className="bg-black/70 mt-10 md:mt-0 rounded-xl border border-purple-600 shadow-2xl backdrop-blur-md overflow-hidden">
        {/* Cabeçalho com gradiente */}
        <div className="relative h-24 w-full bg-gradient-to-r from-[#620046] via-[#a3360a] to-[#ff6f00] flex items-center px-6">
          <h2 className="text-white font-bold font-orbitron text-xl tracking-widest">
            CookMind
          </h2>
        </div>
  
        {/* Detalhes do plano */}
        <div className="p-6 space-y-4 font-mono text-sm text-zinc-300">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <span className="text-purple-400 block">Início:</span>
              <span>01/07/2025</span>
            </div>
            <div>
              <span className="text-orange-400 block">Expira em:</span>
              <span>01/07/2026</span>
            </div>
            <div>
              <span className="text-green-400 block">Status:</span>
              <span className="text-green-300">Ativa</span>
            </div>
            <div>
              <span className="text-purple-400 block">Forma de Pagamento:</span>
              <span>Cartão de crédito</span>
            </div>
          </div>
  
          {/* Planos sugeridos */}
          <div className="mt-6">
            <h3 className="text-white font-bold font-orbitron text-base mb-2">Planos disponíveis</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Plano Básico */}
              <div className="bg-zinc-900 p-4 rounded border border-zinc-700 shadow hover:scale-[1.01] transition-all">
                <h4 className="text-orange-400 font-bold">Plano Básico</h4>
                <p className="text-zinc-400 mt-1">Ideal para quem está começando</p>
                <p className="text-green-400 mt-2 font-bold">R$ 9,90/mês</p>
                <button className="mt-3 w-full py-1.5 bg-gradient-to-r from-[#a3360a] to-[#ff6f00] text-white rounded active:scale-[0.98] transition-all">
                  Assinar
                </button>
              </div>
  
              {/* Plano Premium */}
              <div className="bg-zinc-900 p-4 rounded border border-zinc-700 shadow hover:scale-[1.01] transition-all">
                <h4 className="text-purple-400 font-bold">Plano Premium</h4>
                <p className="text-zinc-400 mt-1">Acesso ilimitado a todas receitas</p>
                <p className="text-green-400 mt-2 font-bold">R$ 19,90/mês</p>
                <button className="mt-3 w-full py-1.5 bg-gradient-to-r from-[#a3360a] to-[#ff6f00] text-white rounded active:scale-[0.98] transition-all">
                  Fazer Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )  
  
      default:
        return null
    }
  }  

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-black via-[#1a001a] to-[#280028]">

{!sidebarOpen && (
  <div className="absolute top-4 left-4 z-50 md:hidden">
    <button
      className="p-2 bg-black/60 rounded-md border border-purple-600"
      onClick={() => setSidebarOpen(true)}
    >
      <Menu className="text-white w-6 h-6" />
    </button>
  </div>
)}

<AnimatePresence>
  {sidebarOpen && (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Fundo escuro que fecha ao clicar fora */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Menu lateral */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", stiffness: 70 }}
        className="relative h-full w-64 bg-black/95 border-r border-purple-700 p-6 z-50 flex flex-col space-y-4"
      >
        <h2 className="text-purple-300 text-xl font-bold font-mono mb-2">CookMind</h2>

        {[
          { tab: "perfil", label: "Perfil" },
          { tab: "carrinho", label: "Carrinho" },
          { tab: "assinatura", label: "Assinaturas" }
        ].map(({ tab, label }) => (
          <button
            key={tab}
            className={`block w-full text-left px-4 py-2 rounded transition font-mono text-sm ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#a3360a] to-[#ff6f00] text-white"
                : "text-zinc-300 hover:bg-zinc-800"
            }`}
            onClick={() => {
              setActiveTab(tab)
              setSidebarOpen(false)
            }}
          >
            {label}
          </button>
        ))}
      </motion.div>
    </div>
  )}
</AnimatePresence>

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-black/80 border-r border-purple-700 p-6 flex-col space-y-4">
  
        <h2 className="text-purple-300 text-xl font-bold font-mono mb-4">CookMind</h2>
        {[
          { tab: "perfil", label: "Perfil" },
          { tab: "carrinho", label: "Carrinho" },
          { tab: "assinatura", label: "Assinaturas" }
        ].map(({ tab, label }) => (
          <button
            key={tab}
            className={`block w-full text-left px-4 py-2 rounded transition font-mono text-sm ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#a3360a] to-[#ff6f00] text-white"
                : "text-zinc-300 hover:bg-zinc-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {label}
          </button>
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-purple-400 text-2xl font-bold font-mono mb-6 capitalize text-right md:text-left">
  {{
    perfil: "Perfil",
    carrinho: "Carrinho",
    assinatura: "Assinaturas"
  }[activeTab] || "Seção"}
</h1>
          {renderContent()}
        </motion.div>
      </main>
    </div>
  )
}
