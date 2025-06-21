import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Brain } from "lucide-react"

export default function InsightsPage() {
  const insightPosts = [
    {
      title: "5 Ways AI Can Automate VC Deal Sourcing",
      excerpt:
        "Exploring how machine learning can transform the way VCs discover and evaluate early-stage opportunities.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Deal Sourcing",
    },
    {
      title: "Agentic Workflows for Portfolio Monitoring",
      excerpt: "What's possible today with AI agents for tracking portfolio company performance and market dynamics.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      category: "Portfolio Management",
    },
    {
      title: "Using LLMs for Real-Time Competitor Benchmarking",
      excerpt: "How large language models can provide continuous competitive intelligence for investment decisions.",
      date: "Nov 10, 2024",
      readTime: "10 min read",
      category: "Market Analysis",
    },
    {
      title: "What AI Can (and Can't) Do for Climate Tech Due Diligence",
      excerpt: "A realistic assessment of AI's capabilities in evaluating climate technology investments.",
      date: "Oct 25, 2024",
      readTime: "15 min read",
      category: "Climate Tech",
    },
    {
      title: "The Future of AI-Powered Investment Thesis Generation",
      excerpt: "How artificial intelligence is reshaping how VCs develop and validate investment hypotheses.",
      date: "Oct 8, 2024",
      readTime: "11 min read",
      category: "Strategy",
    },
    {
      title: "Automating ESG Scoring with Natural Language Processing",
      excerpt:
        "Using NLP to automatically assess environmental, social, and governance factors in potential investments.",
      date: "Sep 20, 2024",
      readTime: "9 min read",
      category: "ESG",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center mb-8 sm:mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Insight Blog</h1>
            <p className="text-muted-foreground mt-2">How VCs Can Use AI - Thought Leadership</p>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors text-lg sm:text-xl">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
