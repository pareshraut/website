import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Wrench } from "lucide-react"

export default function ExperimentsPage() {
  const experiments = [
    {
      title: "Climate-Tech Pitch Deck Analysis with Claude",
      description: "Built an automated system to analyze sustainability metrics and market positioning in pitch decks.",
      tech: ["Claude API", "Python", "PDF Processing"],
      outcome: "Reduced initial screening time by 60%",
    },
    {
      title: "VC Startup Scoring Agent in LangChain",
      description: "Created an AI agent that scores startups based on team, market, and traction signals.",
      tech: ["LangChain", "OpenAI", "Airtable API"],
      outcome: "Achieved 78% correlation with partner decisions",
    },
    {
      title: "Real-time ESG Monitoring Dashboard",
      description:
        "Developed a dashboard that tracks ESG metrics across portfolio companies using web scraping and NLP.",
      tech: ["React", "Node.js", "Puppeteer", "OpenAI"],
      outcome: "Automated 90% of manual ESG reporting",
    },
    {
      title: "AI-Powered Market Research Assistant",
      description: "Built a conversational AI that can research market trends and competitive landscapes on demand.",
      tech: ["GPT-4", "Perplexity API", "Streamlit"],
      outcome: "Cut research time from days to hours",
    },
    {
      title: "Carbon Credit Verification Bot",
      description: "Experimental bot that verifies carbon credit claims using satellite data and machine learning.",
      tech: ["Python", "Satellite APIs", "TensorFlow"],
      outcome: "85% accuracy in fraud detection",
    },
    {
      title: "Startup Trend Prediction Model",
      description:
        "Machine learning model that predicts emerging startup trends based on patent filings and research papers.",
      tech: ["scikit-learn", "Patent APIs", "arXiv API"],
      outcome: "Identified 3 trends 6 months early",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center mb-8 sm:mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Tool Demos & Experiments</h1>
            <p className="text-muted-foreground mt-2">What I'm Building / Testing</p>
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Zap className="w-5 h-5 mr-2 text-orange-500" />
                  {experiment.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">{experiment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiment.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="bg-muted text-xs sm:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-600">{experiment.outcome}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
