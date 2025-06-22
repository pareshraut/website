import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import { getRadarUpdate, getRadarUpdates } from "@/lib/content"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const updates = getRadarUpdates()
  return updates.map((update) => ({
    slug: update.slug,
  }))
}

export default function RadarUpdatePage({ params }: Props) {
  const update = getRadarUpdate(params.slug)

  if (!update) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Link */}
        <Link href="/radar" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Market Radar
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className={`${
                update.type === "Funding Round"
                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  : update.type === "Climate Tech"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
              }`}
            >
              {update.type}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {update.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">{update.title}</h1>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold text-foreground mb-6 mt-8">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-semibold text-foreground mb-4 mt-6">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mb-3 mt-5">{children}</h3>,
              h4: ({ children }) => <h4 className="text-lg font-semibold text-foreground mb-2 mt-4">{children}</h4>,
              p: ({ children }) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>
              ),
              li: ({ children }) => <li className="text-foreground leading-relaxed">{children}</li>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-green-600 hover:text-green-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({ children }) => <em className="italic text-foreground">{children}</em>,
              code: ({ children }) => (
                <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">{children}</code>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-muted-foreground mb-4">
                  {children}
                </blockquote>
              ),
            }}
          >
            {update.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
