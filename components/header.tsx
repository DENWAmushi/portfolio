"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { t, language } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "apple-blur border-b border-border/10" : "bg-transparent"
      }`}
      lang={language}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-tight">
            JESSIM<span className="text-apple-blue">.</span>Belatrous
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-apple-blue transition-colors cursor-pointer"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium hover:text-apple-blue transition-colors cursor-pointer"
            >
              {t("nav.education")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-apple-blue transition-colors cursor-pointer"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-apple-blue transition-colors cursor-pointer"
            >
              {t("nav.skills")}
            </button>
            <Link href="/contact" className="text-sm font-medium hover:text-apple-blue transition-colors">
              {t("nav.contact")}
            </Link>
            <Link href="/cv" className="text-sm font-medium hover:text-apple-blue transition-colors">
              {t("nav.cv")}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ModeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden apple-blur border-t border-border/10 py-4"
          >
            <div className="container mx-auto px-6 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm font-medium py-2 hover:text-apple-blue transition-colors cursor-pointer w-full text-left"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block text-sm font-medium py-2 hover:text-apple-blue transition-colors cursor-pointer w-full text-left"
              >
                {t("nav.education")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-sm font-medium py-2 hover:text-apple-blue transition-colors cursor-pointer w-full text-left"
              >
                {t("nav.projects")}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-sm font-medium py-2 hover:text-apple-blue transition-colors cursor-pointer w-full text-left"
              >
                {t("nav.skills")}
              </button>
              <Link
                href="/contact"
                className="block text-sm font-medium py-2 hover:text-apple-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <Link
                href="/cv"
                className="block text-sm font-medium py-2 hover:text-apple-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.cv")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

