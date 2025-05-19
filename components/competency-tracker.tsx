"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Competency {
  id: string
  name: string
  description: string
  level: number
  projects: string[]
  evidence: string
}

interface CompetencyBlock {
  id: string
  title: string
  competencies: Competency[]
}

const competencyBlocks: CompetencyBlock[] = [
  {
    id: "block1",
    title: "Développement Frontend",
    competencies: [
      {
        id: "comp1",
        name: "Intégration UI/UX",
        description: "Capacité à traduire des designs UI/UX en interfaces web fonctionnelles",
        level: 85,
        projects: ["Maquette Responsive", "MyMeetic"],
        evidence:
          "Implémentation de designs responsifs avec attention à l'accessibilité et l'expérience utilisateur. Utilisation de techniques CSS modernes et de bibliothèques de composants.",
      },
      {
        id: "comp2",
        name: "Maîtrise JavaScript",
        description: "Compétence en JavaScript et ses frameworks modernes",
        level: 80,
        projects: ["MyMeetic", "Maquette Responsive"],
        evidence:
          "Construction d'applications interactives complexes utilisant JavaScript. Implémentation d'architectures de composants optimisées.",
      },
      {
        id: "comp3",
        name: "Design Web Responsive",
        description: "Création de sites web fonctionnant sur tous les appareils et tailles d'écran",
        level: 85,
        projects: ["Maquette Responsive", "MyMeetic", "MyCinema"],
        evidence:
          "Implémentation de designs mobile-first utilisant Flexbox, Grid et les media queries. Garantie d'une expérience utilisateur cohérente sur tous les appareils.",
      },
    ],
  },
  {
    id: "block2",
    title: "Développement Backend",
    competencies: [
      {
        id: "comp4",
        name: "Développement PHP",
        description: "Construction d'applications backend avec PHP",
        level: 85,
        projects: ["MyCinema", "MyMeetic"],
        evidence:
          "Conception et implémentation d'applications PHP avec authentification, autorisation et validation des données. Utilisation de PHP orienté objet.",
      },
      {
        id: "comp5",
        name: "Gestion de Base de Données",
        description: "Travail avec des bases de données SQL",
        level: 80,
        projects: ["MyCinema", "MyMeetic"],
        evidence:
          "Conception de schémas de base de données, écriture de requêtes efficaces et implémentation de modèles de données. Expérience avec MySQL.",
      },
      {
        id: "comp6",
        name: "Architecture Serveur",
        description: "Conception et implémentation d'applications côté serveur",
        level: 70,
        projects: ["MyCinema", "MyMeetic"],
        evidence:
          "Construction d'architectures serveur évolutives avec gestion appropriée des erreurs, journalisation et mesures de sécurité. Implémentation de middleware pour l'authentification et la validation des requêtes.",
      },
    ],
  },
  {
    id: "block3",
    title: "Intégration Full-stack",
    competencies: [
      {
        id: "comp7",
        name: "Développement d'Applications Web",
        description: "Construction d'applications web de bout en bout",
        level: 75,
        projects: ["MyCinema", "MyMeetic"],
        evidence:
          "Développement d'applications web complètes, de la conception de la base de données à l'implémentation frontend. Garantie d'une intégration transparente entre les composants frontend et backend.",
      },
      {
        id: "comp8",
        name: "Déploiement & DevOps",
        description: "Déploiement et maintenance d'applications web",
        level: 60,
        projects: ["Maquette Responsive", "MyCinema"],
        evidence:
          "Configuration de pipelines CI/CD, conteneurisation d'applications et déploiement sur des plateformes cloud.",
      },
      {
        id: "comp9",
        name: "Optimisation des Performances",
        description: "Optimisation des applications web pour la vitesse et l'efficacité",
        level: 65,
        projects: ["MyCinema", "MyMeetic", "Maquette Responsive"],
        evidence:
          "Implémentation de stratégies de fractionnement de code, de chargement paresseux et de mise en cache. Optimisation des requêtes de base de données et des réponses API pour de meilleures performances.",
      },
    ],
  },
]

export default function CompetencyTracker() {
  const [expandedCompetencies, setExpandedCompetencies] = useState<string[]>([])

  const toggleCompetency = (id: string) => {
    setExpandedCompetencies((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <Tabs defaultValue="block1" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {competencyBlocks.map((block) => (
          <TabsTrigger key={block.id} value={block.id}>
            {block.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {competencyBlocks.map((block) => (
        <TabsContent key={block.id} value={block.id} className="space-y-6">
          {block.competencies.map((competency) => (
            <Card key={competency.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{competency.name}</CardTitle>
                    <CardDescription>{competency.description}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCompetency(competency.id)}
                    aria-label={
                      expandedCompetencies.includes(competency.id) ? "Réduire les détails" : "Voir plus de détails"
                    }
                  >
                    {expandedCompetencies.includes(competency.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Niveau de compétence</span>
                    <span className="text-sm font-medium">{competency.level}%</span>
                  </div>
                  <Progress value={competency.level} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {competency.projects.map((project, index) => (
                    <Badge key={index} variant="secondary">
                      {project}
                    </Badge>
                  ))}
                </div>

                {expandedCompetencies.includes(competency.id) && (
                  <div className="mt-4 p-4 bg-muted rounded-md">
                    <h4 className="font-medium mb-2">Preuve de compétence:</h4>
                    <p className="text-sm">{competency.evidence}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}

