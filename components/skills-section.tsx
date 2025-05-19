"use client"

import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  name: string
  level: "débutant" | "intermédiaire" | "avancé" | "expert"
  category: "frontend" | "backend" | "tools" | "languages"
}

export default function SkillsSection() {
  const { t, language } = useLanguage()

  const getLevelTranslation = (level: string) => {
    switch (level) {
      case "débutant":
        return t("skills.level.beginner")
      case "intermédiaire":
        return t("skills.level.intermediate")
      case "avancé":
        return t("skills.level.advanced")
      case "expert":
        return t("skills.level.expert")
      default:
        return level
    }
  }

  const skills: Skill[] = [
    { name: "HTML/CSS", level: "avancé", category: "frontend" },
    { name: "JavaScript", level: "avancé", category: "frontend" },
    { name: "React", level: "intermédiaire", category: "frontend" },
    { name: "Tailwind CSS", level: "intermédiaire", category: "frontend" },
    { name: "PHP", level: "avancé", category: "backend" },
    { name: "MySQL", level: "avancé", category: "backend" },
    { name: "SQL", level: "intermédiaire", category: "backend" },
    { name: "Bash", level: "intermédiaire", category: "backend" },
    { name: "Git", level: "intermédiaire", category: "tools" },
    { name: "VS Code", level: "avancé", category: "tools" },
    { name: "Français", level: "expert", category: "languages" },
    { name: "Anglais", level: "intermédiaire", category: "languages" },
    { name: "Japonais", level: "avancé", category: "languages" },
  ]

  const levelColors = {
    débutant: "bg-apple-gray/10 text-apple-gray",
    intermédiaire: "bg-apple-blue/10 text-apple-blue",
    avancé: "bg-apple-green/10 text-apple-green",
    expert: "bg-apple-pink/10 text-apple-pink",
  }

  const categories = {
    frontend: t("skills.category.frontend"),
    backend: t("skills.category.backend"),
    tools: t("skills.category.tools"),
    languages: t("skills.category.languages"),
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
        <Card key={category} className="overflow-hidden border-none shadow-xl apple-card">
          <CardContent className="p-6">
            <h4 className="text-lg font-medium mb-6">{categories[category]}</h4>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="flex flex-col items-center mb-4">
                    <Badge className={`px-4 py-2 text-sm font-medium border-none ${levelColors[skill.level]}`}>
                      {skill.name}
                    </Badge>
                    <span className="text-xs mt-1 text-muted-foreground">{getLevelTranslation(skill.level)}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

