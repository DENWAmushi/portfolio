"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Car } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CVPage() {
  const { t, language } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Jessim_Belatrous_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div lang={language} className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            {language === "ja" ? t("cv.title") : "Curriculum Vitae"}
          </h1>
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-apple-blue hover:bg-apple-blue/90 text-white dark:neon-effect"
          >
            <Download className="h-4 w-4" /> {t("cv.download")}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6 border-none shadow-xl dark:glass-card">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-apple-blue dark:shadow-[0_0_15px_rgba(0,122,255,0.5)]">
                  <Image
                    src="/images/photo-profil.jpg"
                    alt="Jessim Belatrous"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center">JESSIM BELATROUS</h2>
                <p className="text-muted-foreground text-center mt-1">
                  {language === "ja" ? t("cv.personal.job") : "ALTERNANCE DÉVELOPPEUR WEB"}
                </p>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  {language === "ja" ? t("cv.personal.date") : "SEPTEMBRE 2025"}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-apple-blue" />
                  <span>jessim.belatrous@epitech.eu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-apple-blue" />
                  <span>07 49 83 67 84</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-apple-blue" />
                  <span>Lyon, France, Rhône</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-apple-blue" />
                  <span>Permis B</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 border-b pb-2 dark:border-white/10">
                  {language === "ja" ? t("cv.languages.title") : "LANGUES"}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{language === "ja" ? t("cv.languages.french") : "Français"}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full mx-0.5 bg-apple-blue dark:shadow-[0_0_5px_rgba(0,122,255,0.7)]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "ja" ? t("cv.languages.english") : "Anglais"}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full mx-0.5 ${
                            i < 3
                              ? "bg-apple-blue dark:shadow-[0_0_5px_rgba(0,122,255,0.7)]"
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "ja" ? t("cv.languages.japanese") : "Japonais"}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full mx-0.5 bg-apple-blue dark:shadow-[0_0_5px_rgba(0,122,255,0.7)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 border-b pb-2 dark:border-white/10">
                  {language === "ja" ? t("cv.strengths.title") : "ATOUTS"}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{language === "ja" ? t("cv.strengths.punctual") : "Ponctualité"}</li>
                  <li>{language === "ja" ? t("cv.strengths.sociable") : "Sociable"}</li>
                  <li>{language === "ja" ? t("cv.strengths.attentive") : "À l'écoute"}</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 border-b pb-2 dark:border-white/10">
                  {language === "ja" ? t("cv.interests.title") : "CE QUI M'INTÉRESSE"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-apple-blue/10 text-apple-blue dark:neon-effect">
                    {language === "ja" ? t("cv.interests.sports") : "Sports"}
                  </Badge>
                  <Badge className="bg-apple-pink/10 text-apple-pink dark:neon-effect">
                    {language === "ja" ? t("cv.interests.japan") : "Culture Japonaise"}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-6 mb-6 border-none shadow-xl dark:glass-card">
              <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-white/10">
                {language === "ja" ? t("cv.education.title") : "CURSUS SCOLAIRE"}
              </h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-secondary dark:bg-black/30 flex items-center justify-center">
                      <Image
                        src="/images/logo-epitech.png"
                        alt="Epitech"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {language === "ja" ? t("education.epitech.title") : "Epitech Lyon"}
                    </h4>
                    <p className="text-muted-foreground">
                      {language === "ja" ? t("education.epitech.program") : "Web Academy"}
                    </p>
                    <p className="text-sm">
                      {language === "ja" ? t("education.epitech.years") : "2024 - 2026"}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-secondary dark:bg-black/30 flex items-center justify-center">
                      <Image
                        src="/images/logo_toille.png"
                        alt="EmLyon"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {language === "ja" ? t("education.emlyon.title") : "EmLyon Business School"}
                    </h4>
                    <p className="text-muted-foreground">
                      {language === "ja" ? t("education.emlyon.program") : "La Toile"}
                    </p>
                    <p className="text-sm">
                      {language === "ja" ? t("education.emlyon.years") : "2024"}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-secondary dark:bg-black/30 flex items-center justify-center">
                      <Image
                        src="/images/logo-simplon.webp"
                        alt="Simplon"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {language === "ja" ? t("education.simplon.title") : "Simplon Lyon"}
                    </h4>
                    <p className="text-muted-foreground">
                      {language === "ja" ? t("education.simplon.program") : "Apple Foundation Program"}
                    </p>
                    <p className="text-sm">
                      {language === "ja" ? t("education.simplon.years") : "2023"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-6 border-none shadow-xl dark:glass-card">
              <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-white/10">
                {language === "ja" ? t("cv.experience.title") : "EXPÉRIENCE PROFESSIONNELLE"}
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold">
                      {language === "ja" ? t("cv.experience.animator.title") : "Animateur périscolaire"}
                    </h4>
                    <span className="text-sm">2023 - 2024</span>
                  </div>
                  <p className="text-muted-foreground">
                    {language === "ja" ? t("cv.experience.animator.company") : "École élémentaire Émile Zola"}
                  </p>
                  <p className="text-sm">
                    {language === "ja" ? t("cv.experience.animator.location") : "Villeurbanne"}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold">
                      {language === "ja" ? t("cv.experience.agent.title") : "Agent de quai"}
                    </h4>
                    <span className="text-sm">2023 - 2024</span>
                  </div>
                  <p className="text-muted-foreground">
                    {language === "ja" ? t("cv.experience.agent.company") : "Dachser Intelligent Logistique"}
                  </p>
                  <p className="text-sm">
                    {language === "ja" ? t("cv.experience.agent.location") : "Thil"}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-6 border-none shadow-xl dark:glass-card">
              <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-white/10">
                {language === "ja" ? t("cv.projects.title") : "PROJETS RÉALISÉS À EPITECH"}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">
                    {language === "ja" ? t("cv.projects.cinema.title") : "MyCinema"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "ja"
                      ? t("cv.projects.cinema.description")
                      : "Site de gestion de cinéma (PHP et MySQL)"}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {language === "ja" ? t("cv.projects.meetic.title") : "MyMeetic"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "ja"
                      ? t("cv.projects.meetic.description")
                      : "Site de rencontres (PHP orienté objet, JavaScript)"}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {language === "ja" ? t("cv.projects.responsive.title") : "Maquette-responsive"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "ja"
                      ? t("cv.projects.responsive.description")
                      : "Projet d'intégration web (HTML, CSS et JavaScript)"}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-none shadow-xl dark:glass-card">
              <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-white/10">
                {language === "ja" ? t("cv.skills.title") : "LANGAGE DE PROGRAMMATION"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span>PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span>JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span>HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span>Bash</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span>CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span>SQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <span>React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-apple-blue h-2.5 rounded-full dark:progress-bar-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span>TailWind</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-apple-blue hover:bg-apple-blue/90 text-white dark:neon-effect"
          >
            <Download className="h-4 w-4" /> {t("cv.download")}
          </Button>
        </div>
      </div>
    </div>
  );
}
