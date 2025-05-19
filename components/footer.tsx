"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/10 py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-xl font-medium tracking-tight">
              JESSIM<span className="text-apple-blue">.</span>Belatrous
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/DENWAmushi"
                target="_blank"
                className="text-foreground/70 hover:text-apple-blue transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="text-foreground/70 hover:text-apple-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} {t("footer.rights")}
            </p>
            <p className="text-xs text-muted-foreground/70">{t("")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

