"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronDown, Download, Github, Linkedin } from "lucide-react"
import ProjectCard from "@/components/project-card"
import CVDownloadButton from "@/components/cv-download-button"
import SkillsSection from "@/components/skills-section"
import { motion } from "framer-motion"

export default function Home() {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = clientX - innerWidth / 2
      const moveY = clientY - innerHeight / 2

      const offsetX = moveX * 0.01
      const offsetY = moveY * 0.01

      const heroImage = heroRef.current.querySelector(".hero-image") as HTMLElement
      if (heroImage) {
        heroImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: "smooth",
            })
          }, 100)
        }
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div lang={language}>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 hero-image">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80 z-10"></div>
          <Image src="/images/mountain-road.jpg" alt="Mountain road" fill className="object-cover" priority />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto apple-text-balance"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <Button
                size="lg"
                className="apple-btn apple-btn-primary group"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                {t("hero.cta.projects")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="apple-btn apple-btn-secondary" asChild>
                <Link href="/contact">{t("hero.cta.contact")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-foreground/70" />
        </motion.div>
      </section>

      <section id="about" className="apple-section scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildrenVariants}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants} className="md:w-1/3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden shadow-xl border-4 border-apple-blue dark:border-apple-blue/70 dark:shadow-[0_0_25px_rgba(0,122,255,0.4)]"
              >
                <Image
                  src="/images/photo-profil.jpg"
                  alt="Photo professionnelle de Jessim Belatrous"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="md:w-2/3">
              <h2 className="text-3xl font-medium tracking-tight mb-6">{t("about.title")}</h2>
              <p className="text-lg mb-6 text-foreground/80 leading-relaxed">{t("about.description")}</p>
              <motion.div
                variants={staggerChildrenVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {["JavaScript", "React", "PHP", "HTML/CSS", "SQL", "Tailwind CSS"].map((skill, index) => (
                  <motion.div key={skill} variants={fadeInUpVariants}>
                    <Badge
                      className={`apple-badge ${
                        index % 5 === 0
                          ? "bg-apple-blue/10 text-apple-blue"
                          : index % 5 === 1
                            ? "bg-apple-pink/10 text-apple-pink"
                            : index % 5 === 2
                              ? "bg-apple-purple/10 text-apple-purple"
                              : index % 5 === 3
                                ? "bg-apple-green/10 text-apple-green"
                                : "bg-apple-orange/10 text-apple-orange"
                      } border-none hover:bg-opacity-20`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex flex-wrap gap-4">
                <CVDownloadButton className="apple-btn apple-btn-secondary gap-2" />
                <Button variant="outline" className="apple-btn apple-btn-secondary gap-2" asChild>
                  <Link href="/cv">
                    <Download className="h-4 w-4" /> Voir CV
                  </Link>
                </Button>
                <Button variant="outline" className="apple-btn apple-btn-secondary gap-2" asChild>
                  <Link href="https://github.com/DENWAmushi" target="_blank">
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button variant="outline" className="apple-btn apple-btn-secondary gap-2" asChild>
                  <Link href="https://www.linkedin.com/in/jessim-belatrous-593931300/" target="_blank">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="education" className="apple-section bg-secondary scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-medium tracking-tight mb-16 text-center"
          >
            {t("education.title")}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                logo: "/images/logo-epitech.png",
                title: t("education.epitech.title"),
                program: t("education.epitech.program"),
                years: t("education.epitech.years"),
                badge: t("education.epitech.badge"),
                badgeColor: "blue",
              },
              {
                logo: "/images/logo_toille.png",
                title: t("education.emlyon.title"),
                program: t("education.emlyon.program"),
                years: t("education.emlyon.years"),
                badge: t("education.emlyon.badge"),
                badgeColor: "pink",
              },
              {
                logo: "/images/logo-simplon.webp",
                title: t("education.simplon.title"),
                program: t("education.simplon.program"),
                years: t("education.simplon.years"),
                badge: t("education.simplon.badge"),
                badgeColor: "orange",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <Card className="overflow-hidden border-none shadow-xl apple-card">
                  <div className="p-6 flex justify-center bg-card/50">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`Logo ${edu.title}`}
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">{edu.title}</h3>
                    <p className="text-muted-foreground mb-2">{edu.program}</p>
                    <p className="text-sm">{edu.years}</p>
                    <div className="mt-4">
                      <Badge
                        className={`apple-badge bg-apple-${edu.badgeColor}/10 text-apple-${edu.badgeColor} border-none hover:bg-apple-${edu.badgeColor}/20`}
                      >
                        {edu.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="apple-section scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-medium tracking-tight mb-16 text-center"
          >
            {t("projects.title")}
          </motion.h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-16 bg-secondary rounded-full p-1">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-apple-blue data-[state=active]:text-white"
              >
                {t("projects.tabs.all")}
              </TabsTrigger>
              <TabsTrigger
                value="php"
                className="rounded-full data-[state=active]:bg-apple-blue data-[state=active]:text-white"
              >
                {t("projects.tabs.php")}
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="rounded-full data-[state=active]:bg-apple-blue data-[state=active]:text-white"
              >
                {t("projects.tabs.web")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title={t("projects.cinema.title")}
                description={t("projects.cinema.description")}
                image="/images/project1.jpg"
                tags={["PHP", "MySQL", "Backend"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
                category="php"
                demoLabel={t("projects.button.demo")}
                codeLabel={t("projects.button.code")}
              />
              <ProjectCard
                title={t("projects.meetic.title")}
                description={t("projects.meetic.description")}
                image="/images/project2.jpg"
                tags={["PHP OOP", "JavaScript", "MySQL"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
                category="php"
                demoLabel={t("projects.button.demo")}
                codeLabel={t("projects.button.code")}
              />
              <ProjectCard
                title={t("projects.responsive.title")}
                description={t("projects.responsive.description")}
                image="/images/project3.jpg"
                tags={["HTML", "CSS", "JavaScript"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
                category="web"
                demoLabel={t("projects.button.demo")}
                codeLabel={t("projects.button.code")}
              />
            </TabsContent>
            <TabsContent value="php" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title={t("projects.cinema.title")}
                description={t("projects.cinema.description")}
                image="/images/project1.jpg"
                tags={["PHP", "MySQL", "Backend"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
                category="php"
                demoLabel={t("projects.button.demo")}
                codeLabel={t("projects.button.code")}
              />
              <ProjectCard
                title={t("projects.meetic.title")}
                description={t("projects.meetic.description")}
                image="/images/project2.jpg"
                tags={["PHP OOP", "JavaScript", "MySQL"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
                category="php"
                demoLabel={t("projects.button.demo")}
                codeLabel={t("projects.button.code")}
              />
            </TabsContent>
            <TabsContent value="web" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title={t("projects.responsive.title")}
                description={t("projects.responsive.description")}
                image="/images/project3.jpg"
                tags={["HTML", "CSS", "JavaScript"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
                category="web"
                demoLabel={t("projects.button.demo")}
                codeLabel={t("projects.button.code")}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="skills" className="apple-section bg-secondary scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-medium tracking-tight mb-16 text-center"
          >
            {t("skills.title")}
          </motion.h2>
          <SkillsSection />
        </div>
      </section>
    </div>
  )
}

