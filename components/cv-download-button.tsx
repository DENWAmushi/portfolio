"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface CVDownloadButtonProps {
  className?: string
}

export default function CVDownloadButton({ className }: CVDownloadButtonProps) {
  const { t } = useLanguage()

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Jessim_Belatrous_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={handleDownload} className={`flex items-center gap-2 ${className}`}>
      <Download className="h-4 w-4" /> {t("about.download")}
    </Button>
  )
}

