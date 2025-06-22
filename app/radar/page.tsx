import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Radar } from "lucide-react"
import { getRadarUpdates } from "@/lib/content"
import Link from "next/link"

export default function RadarPage() {
  const marketUpdates = getRadarUpdates()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center mb-8 sm:mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
            <Radar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Market Radar</h1>
            <p className="text-muted-foreground mt-2">AI × Climate/Agentic Tech Watch</p>
          </div>
        </div>

        {/* Updates List */}
        <div className="space-y-4 sm:space-y-6">
          {marketUpdates.length > 0 ? (
            marketUpdates.map((update) => (
              <Link key={update.slug} href={`/radar/${update.slug}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2">
                          <Badge
                            variant="secondary"
                            className={`w-fit ${
                              update.type === "Funding Round"
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                                : update.type === "Climate Tech"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                            }`}
                          >
                            {update.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{update.date}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{update.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">{update.insight}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground ml-4 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <Radar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No radar updates yet</h3>
              <p className="text-muted-foreground">
                Check back soon for the latest in AI and climate tech developments.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
