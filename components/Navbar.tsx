"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User } from "lucide-react"

const links = [
  { label: "Home", sectionIndex: 0 },
  { label: "E-books", sectionIndex: 1 },
  { label: "CookMind", sectionIndex: 2 },
  { label: "Contato", sectionIndex: 3 }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navigateTo = (index: number) => {
    const event = new CustomEvent("navigateToSection", {
      detail: index
    })
    document.dispatchEvent(event)
  }

  return (
    <>
      {/* Menu lateral esquerdo */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 z-[9999]"
      >
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-12 h-12 flex items-center justify-center border border-orange-300 text-orange-300 hover:bg-orange-500 hover:text-black transition duration-300 backdrop-blur-md bg-black/60 shadow-xl"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="absolute top-14 left-0 bg-black/90 border border-orange-300 rounded-md p-3 flex flex-col gap-2 min-w-[160px] shadow-xl backdrop-blur-lg"
              >
                {links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      navigateTo(link.sectionIndex)
                      setOpen(false)
                    }}
                    className="text-white hover:text-orange-400 text-sm font-mono text-left transition"
                  >
                    {link.label}
                  </button>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Botão de perfil no canto superior direito */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4 z-[9999]"
      >
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="w-12 h-12 flex items-center justify-center border border-orange-300 text-orange-300 hover:bg-orange-500 hover:text-black transition duration-300 backdrop-blur-md bg-black/60 shadow-xl"
          >
            <User className="w-6 h-6" />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="absolute top-14 right-0 bg-black/90 border border-orange-300 rounded-md p-3 min-w-[140px] shadow-xl backdrop-blur-lg flex flex-col gap-2"
              >
                <a
  href="/perfil?tab=perfil"
  onClick={() => setProfileOpen(false)}
  className="text-white hover:text-orange-400 text-sm font-mono block transition"
>
  Ver Perfil
</a>
<a
  href="/perfil?tab=carrinho"
  onClick={() => setProfileOpen(false)}
  className="text-white hover:text-orange-400 text-sm font-mono block transition"
>
  Carrinho
</a>
<a
  href="/perfil?tab=assinatura"
  onClick={() => setProfileOpen(false)}
  className="text-white hover:text-orange-400 text-sm font-mono block transition"
>
  Assinaturas
</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
