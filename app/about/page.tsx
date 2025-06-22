import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Leaf, Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  const skills = [
    "Artificial Intelligence",
    "Climate Technology",
    "Venture Capital",
    "Machine Learning",
    "Data Analysis",
    "Python",
    "Generative AI",
    "LangChain",
    "Market Research",
  ]

  const experience = [
    {
      title: "AI Research & Development",
      description: "Building AI agents and tools for venture capital applications",
      icon: Brain,
    },
    {
      title: "Climate Tech Analysis",
      description: "Deep diving into sustainability metrics and carbon markets",
      icon: Leaf,
    },
    {
      title: "Technical Implementation",
      description: "Hands-on development of AI-powered investment tools",
      icon: Code,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-green-500/20">
            <Image
              src="/paresh-photo.jpg"
              alt="Paresh Raut"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Hi, I'm Paresh</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I explore the intersection of AI and climate technology, sharing insights on how these emerging technologies
            are reshaping venture capital and creating new opportunities for innovation.
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-12">
          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">My Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                In a rapidly evolving tech landscape, staying ahead of AI and climate technology trends isn't just
                valuable—it's essential. Through TechPulse, I document my journey of discovery, experimentation, and
                learning in these transformative fields.
              </p>
              <p>
                Whether you're a fellow technologist, investor, or simply curious about the future, I invite you to
                learn alongside me as we explore breakthrough startups, cutting-edge research, and practical
                applications that are shaping tomorrow's world.
              </p>
            </CardContent>
          </Card>

          {/* What I Do */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {experience.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Areas of Focus</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Connect */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <CardDescription>
                I'm always interested in discussing AI, climate tech, and emerging trends. Feel free to reach out!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex items-center" asChild>
                  <a href="mailto:pareshraut0527@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center" asChild>
                  <a href="https://www.linkedin.com/in/pareshraut76/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center" asChild>
                  <a href="https://twitter.com/pareshraut0527" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
