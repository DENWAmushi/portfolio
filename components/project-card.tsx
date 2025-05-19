"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  codeUrl: string
  category: "php" | "web" | "all"
  demoLabel: string
  codeLabel: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl,
  category,
  demoLabel,
  codeLabel,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden border-none shadow-xl apple-card dark:hover-glow">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-black/70 text-white hover:bg-black/80 dark:bg-white/10 dark:hover:bg-white/20 dark:neon-effect">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => {
              let color = "apple-blue"
              if (index % 3 === 1) color = "apple-pink"
              if (index % 3 === 2) color = "apple-purple"

              return (
                <Badge
                  key={index}
                  className={`bg-${color}/10 text-${color} border-none hover:bg-${color}/20 dark:neon-effect`}
                >
                  {tag}
                </Badge>
              )
            })}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 rounded-full border-foreground/20 hover:border-foreground/40 apple-button dark:border-white/10 dark:hover:border-white/20"
            asChild
          >
            <Link href={demoUrl} target="_blank">
              <ExternalLink className="h-4 w-4" /> {demoLabel}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 rounded-full border-foreground/20 hover:border-foreground/40 apple-button dark:border-white/10 dark:hover:border-white/20"
            asChild
          >
            <Link href={codeUrl} target="_blank">
              <Github className="h-4 w-4" /> {codeLabel}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

