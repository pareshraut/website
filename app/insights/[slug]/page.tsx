import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import { getInsightPost, getInsightPosts } from "@/lib/content"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getInsightPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function InsightPostPage({ params }: Props) {
  const post = getInsightPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Link */}
        <Link href="/insights" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {post.category}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </span>
            <span className="text-sm text-muted-foreground flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">{post.title}</h1>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 mt-8 text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>,
              h4: ({ children }) => <h4 className="text-lg font-semibold mb-2 mt-4 text-foreground">{children}</h4>,
              p: ({ children }) => <p className="mb-4 text-foreground leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 ml-6 list-disc text-foreground space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal text-foreground space-y-1">{children}</ol>,
              li: ({ children }) => <li className="text-foreground leading-relaxed">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({ children }) => <em className="italic text-foreground">{children}</em>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">{children}</code>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground mb-4">
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
