import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Radar, Wrench, TrendingUp, Leaf, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-green-50/30 to-blue-50/30 dark:from-background dark:via-green-950/10 dark:to-blue-950/10">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2"
            >
              <Leaf className="w-4 h-4 mr-2" />
              AI × Climate × Innovation
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Stay Ahead of{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              AI & Climate Innovation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I track the latest in AI tools, agentic systems, and climate-related technologies—spotlighting breakthrough
            startups, trends, and experiments that shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              asChild
            >
              <Link href="/insights">
                Explore Latest Trends
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/experiments">View Experiments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Main Sections Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Insights Preview */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" asChild>
            <Link href="/insights">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Insight Blog</CardTitle>
                <CardDescription>
                  Where AI meets strategy — tools, trends, and tech that move markets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Thought leadership at the intersection of AI, systems innovation, and venture workflows — plus essays on tools, trends, and startups shaping the frontier.
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Read insights</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Market Radar Preview */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" asChild>
            <Link href="/radar">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Radar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Market Radar</CardTitle>
                <CardDescription>AI × Climate/Agentic Tech Watch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated on funding rounds, breakthrough research, and emerging startups in AI and climate tech.
                </p>
                <div className="flex items-center text-green-600 group-hover:text-green-700">
                  <span className="text-sm font-medium">View radar</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Experiments Preview */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" asChild>
            <Link href="/experiments">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Experiments</CardTitle>
                <CardDescription>What I'm Building / Testing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Hands-on experiments with AI tools, climate tech APIs, and innovative applications.
                </p>
                <div className="flex items-center text-orange-600 group-hover:text-orange-700">
                  <span className="text-sm font-medium">See experiments</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">TechPulse</span>
                <span className="text-xs text-muted-foreground -mt-1">by Paresh</span>
              </div>
            </Link>

            {/* Contact Links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:pareshraut0527@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pareshraut76/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <div className="text-muted-foreground text-sm text-center md:text-right mt-4 md:mt-0">
              © 2024 TechPulse. Exploring the cutting edge of AI and climate technology.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
