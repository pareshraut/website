import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Brain } from "lucide-react"
import { getInsightPosts } from "@/lib/content"
import Link from "next/link"

export default function InsightsPage() {
  const insightPosts = getInsightPosts()

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
            <p className="text-muted-foreground mt-2">
              Thought leadership at the intersection of AI, systems innovation, and venture workflows — plus essays on
              tools, trends, and startups shaping the frontier.
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightPosts.length > 0 ? (
            insightPosts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className={`${
                          post.category === "Deal Sourcing"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : post.category === "Portfolio Management"
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
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
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No insights yet</h3>
              <p className="text-muted-foreground">
                Check back soon for thought leadership on AI, climate tech, and venture innovation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
