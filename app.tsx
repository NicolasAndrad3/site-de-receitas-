import React, { useEffect, useState, useRef } from "react"
import { Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import Sells from "./components/Sells"
import AppLaunch from "./components/AppLaunch"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import EbookPage from "./pages/Ebook"
import { AnimatePresence, motion } from "framer-motion"
import PerfilPage from "./components/Perfil"

const sections = [Hero, Sells, AppLaunch, Footer]

const App = () => {
  const [sectionIndex, setSectionIndex] = useState(0)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return
      isScrollingRef.current = true

      if (e.deltaY > 0 && sectionIndex < sections.length - 1) {
        setSectionIndex((prev) => prev + 1)
      } else if (e.deltaY < 0 && sectionIndex > 0) {
        setSectionIndex((prev) => prev - 1)
      }

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }

    const handleNavTo = (e: Event) => {
      const customEvent = e as CustomEvent<number>
      setSectionIndex(customEvent.detail)
    }

    window.addEventListener("wheel", handleWheel)
    document.addEventListener("navigateToSection", handleNavTo)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      document.removeEventListener("navigateToSection", handleNavTo)
    }
  }, [sectionIndex])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-full h-screen overflow-hidden bg-black text-white relative">
            {/* ✅ Navbar só aparece após o Hero */}
            {sectionIndex > 0 && (
              <div className="absolute top-0 left-0 w-full z-[9999]">
                <Navbar />
              </div>
            )}

            {/* ✅ Seções com animações de entrada */}
            {sections.map((SectionComponent, index) => {
              const isVisible = index <= sectionIndex

              return (
                <AnimatePresence key={index}>
                  {isVisible && (
                    <motion.section
                      key={index}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                      style={{ zIndex: index }}
                    >
                      <SectionComponent />
                    </motion.section>
                  )}
                </AnimatePresence>
              )
            })}
          </div>
        }
      />
      <Route path="/ebooks" element={<EbookPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
    </Routes>
  )
}

export default App
