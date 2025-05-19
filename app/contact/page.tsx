"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

export default function ContactPage() {
  const { t, language } = useLanguage()

  return (
    <div lang={language} className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{t("contact.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium mb-6">{t("contact.info.title")}</h2>

            <div className="space-y-6 mb-10">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-apple-blue/10 p-3 rounded-full dark:bg-apple-blue/20 dark:neon-effect">
                  <Mail className="h-5 w-5 text-apple-blue" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t("contact.email.label")}</h3>
                  <p className="text-muted-foreground">jessim.belatrous@epitech.eu</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-apple-green/10 p-3 rounded-full dark:bg-apple-green/20 dark:neon-effect">
                  <Phone className="h-5 w-5 text-apple-green" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t("contact.phone.label")}</h3>
                  <p className="text-muted-foreground">07 49 83 67 84</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-apple-pink/10 p-3 rounded-full dark:bg-apple-pink/20 dark:neon-effect">
                  <MapPin className="h-5 w-5 text-apple-pink" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t("contact.location.label")}</h3>
                  <p className="text-muted-foreground">Lyon, France</p>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-border/30 pt-8 mt-8 dark:border-white/10">
              <h3 className="font-medium mb-4">{t("contact.info.connect")}</h3>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://github.com/DENWAmushi"
                    target="_blank"
                    className="bg-secondary p-3 rounded-full hover:bg-apple-blue/10 hover:text-apple-blue transition-colors dark:bg-black/30 dark:hover:bg-apple-blue/20 dark:neon-effect"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.linkedin.com/in/jessim-belatrous-593931300/"
                    target="_blank"
                    className="bg-secondary p-3 rounded-full hover:bg-apple-blue/10 hover:text-apple-blue transition-colors dark:bg-black/30 dark:hover:bg-apple-blue/20 dark:neon-effect"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 p-6 bg-secondary rounded-2xl dark:bg-black/30 dark:border dark:border-white/5"
            >
              <p className="text-foreground/80 italic border-l-4 border-apple-blue pl-4">{t("contact.info.quote")}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-none shadow-xl overflow-hidden rounded-2xl dark:glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-medium mb-6">{t("contact.form.title")}</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

