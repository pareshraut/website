import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface InsightPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

export interface RadarUpdate {
  slug: string
  title: string
  type: string
  date: string
  insight: string
  content: string
}

function getContentDirectory(): string {
  // In Next.js environment, use the content directory directly
  return path.join(process.cwd(), "content")
}

function isValidMarkdownFile(filePath: string): boolean {
  try {
    const stats = fs.statSync(filePath)
    return stats.isFile() && filePath.endsWith(".md")
  } catch {
    return false
  }
}

export function getInsightPosts(): InsightPost[] {
  try {
    const contentDirectory = getContentDirectory()
    const insightsPath = path.join(contentDirectory, "insights")

    console.log("Looking for insights in:", insightsPath)

    if (!fs.existsSync(insightsPath)) {
      console.log("Insights directory does not exist, creating sample data")
      // Return sample data if directory doesn't exist
      return [
        {
          slug: "agentic-portfolio-monitoring",
          title: "AI-Powered Portfolio Monitoring: Beyond Traditional Metrics",
          excerpt:
            "How venture capital firms are leveraging AI agents to track portfolio company performance, predict risks, and identify growth opportunities in real-time.",
          date: "2025-06-18",
          readTime: "8 min read",
          category: "Portfolio Management",
          content: "Sample content for portfolio monitoring...",
        },
        {
          slug: "ai-deal-sourcing",
          title: "AI-Driven Deal Sourcing: Finding Hidden Gems in the Startup Ecosystem",
          excerpt:
            "Exploring how artificial intelligence is revolutionizing deal sourcing for venture capital firms, from automated startup discovery to predictive investment scoring.",
          date: "2025-06-17",
          readTime: "12 min read",
          category: "Deal Sourcing",
          content: "Sample content for deal sourcing...",
        },
        {
          slug: "climateai-june20",
          title: "Climate Tech & AI: Momentum, Mix, and Market Realities",
          excerpt:
            "How AI-driven sustainability startups are gaining traction through public funding and cross-sector innovation.",
          date: "2025-06-19",
          readTime: "10 min read",
          category: "Climate Innovation",
          content: "Sample content for climate AI...",
        },
        {
          slug: "agenticai-june20",
          title: "Agentic AI: From Bold Demos to Real-World Dependability",
          excerpt:
            "How startups, enterprises, and researchers are navigating the gap between agentic AI hype and practical implementation.",
          date: "2025-06-20",
          readTime: "10 min read",
          category: "Agentic Systems",
          content: "Sample content for agentic AI...",
        },
      ]
    }

    const entries = fs.readdirSync(insightsPath, { withFileTypes: true })
    console.log(
      "Found entries:",
      entries.map((e) => e.name),
    )

    const posts = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => {
        try {
          const filePath = path.join(insightsPath, entry.name)
          console.log("Processing file:", filePath)

          if (!isValidMarkdownFile(filePath)) {
            console.log("Invalid markdown file:", filePath)
            return null
          }

          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data, content } = matter(fileContents)

          const post = {
            slug: entry.name.replace(/\.md$/, ""),
            title: data.title || "Untitled",
            excerpt: data.excerpt || "",
            date: data.date || "",
            readTime: data.readTime || "",
            category: data.category || "General",
            content,
          }

          console.log("Successfully processed post:", post.slug)
          return post
        } catch (error) {
          console.error(`Error reading file ${entry.name}:`, error)
          return null
        }
      })
      .filter((post): post is InsightPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    console.log("Final posts count:", posts.length)
    return posts
  } catch (error) {
    console.error("Error getting insight posts:", error)
    // Return sample data on error
    return [
      {
        slug: "agentic-portfolio-monitoring",
        title: "AI-Powered Portfolio Monitoring: Beyond Traditional Metrics",
        excerpt:
          "How venture capital firms are leveraging AI agents to track portfolio company performance, predict risks, and identify growth opportunities in real-time.",
        date: "2025-06-18",
        readTime: "8 min read",
        category: "Portfolio Management",
        content: "Sample content for portfolio monitoring...",
      },
      {
        slug: "ai-deal-sourcing",
        title: "AI-Driven Deal Sourcing: Finding Hidden Gems in the Startup Ecosystem",
        excerpt:
          "Exploring how artificial intelligence is revolutionizing deal sourcing for venture capital firms, from automated startup discovery to predictive investment scoring.",
        date: "2025-06-17",
        readTime: "12 min read",
        category: "Deal Sourcing",
        content: "Sample content for deal sourcing...",
      },
    ]
  }
}

export function getRadarUpdates(): RadarUpdate[] {
  try {
    const contentDirectory = getContentDirectory()
    const radarPath = path.join(contentDirectory, "radar")

    console.log("Looking for radar updates in:", radarPath)

    if (!fs.existsSync(radarPath)) {
      console.log("Radar directory does not exist, creating sample data")
      // Return sample data if directory doesn't exist
      return [
        {
          slug: "panoai",
          title: "Pano AI Raises $44M to Scale Wildfire Detection",
          type: "Climate Tech",
          date: "2025-06-21",
          insight:
            "Pano AI's Series B funding marks a major milestone in the climate-tech space, combining panoramic imaging and real-time AI to detect and manage wildfires.",
          content: "Sample content for Pano AI...",
        },
        {
          slug: "ycagentsjune20",
          title: "Agentic AI Takes Center Stage at YC Spring 2025",
          type: "Agentic Systems",
          date: "2025-06-22",
          insight:
            "With over 70 startups building autonomous systems, agentic AI dominated Y Combinator's latest cohort—signaling a foundational shift in how startups are approaching automation.",
          content: "Sample content for YC agents...",
        },
      ]
    }

    const entries = fs.readdirSync(radarPath, { withFileTypes: true })
    console.log(
      "Found radar entries:",
      entries.map((e) => e.name),
    )

    const updates = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => {
        try {
          const filePath = path.join(radarPath, entry.name)
          console.log("Processing radar file:", filePath)

          if (!isValidMarkdownFile(filePath)) {
            console.log("Invalid radar markdown file:", filePath)
            return null
          }

          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data, content } = matter(fileContents)

          const update = {
            slug: entry.name.replace(/\.md$/, ""),
            title: data.title || "Untitled",
            type: data.type || data.category || "General",
            date: data.date || "",
            insight: data.insight || data.excerpt || "",
            content,
          }

          console.log("Successfully processed radar update:", update.slug)
          return update
        } catch (error) {
          console.error(`Error reading radar file ${entry.name}:`, error)
          return null
        }
      })
      .filter((update): update is RadarUpdate => update !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    console.log("Final radar updates count:", updates.length)
    return updates
  } catch (error) {
    console.error("Error getting radar updates:", error)
    // Return sample data on error
    return [
      {
        slug: "panoai",
        title: "Pano AI Raises $44M to Scale Wildfire Detection",
        type: "Climate Tech",
        date: "2025-06-21",
        insight:
          "Pano AI's Series B funding marks a major milestone in the climate-tech space, combining panoramic imaging and real-time AI to detect and manage wildfires.",
        content: "Sample content for Pano AI...",
      },
    ]
  }
}

export function getInsightPost(slug: string): InsightPost | null {
  try {
    const contentDirectory = getContentDirectory()
    const filePath = path.join(contentDirectory, "insights", `${slug}.md`)

    console.log("Looking for insight post:", filePath)

    if (!isValidMarkdownFile(filePath)) {
      console.log("Insight post does not exist, checking sample data")

      // Return sample data for known slugs
      const samplePosts: Record<string, InsightPost> = {
        "agentic-portfolio-monitoring": {
          slug: "agentic-portfolio-monitoring",
          title: "AI-Powered Portfolio Monitoring: Beyond Traditional Metrics",
          excerpt:
            "How venture capital firms are leveraging AI agents to track portfolio company performance, predict risks, and identify growth opportunities in real-time.",
          date: "2025-06-18",
          readTime: "8 min read",
          category: "Portfolio Management",
          content: `# AI-Powered Portfolio Monitoring: Beyond Traditional Metrics

The venture capital landscape is evolving rapidly, and traditional portfolio monitoring methods are struggling to keep pace. Enter AI-powered portfolio monitoring—a game-changing approach that's transforming how VCs track, analyze, and support their investments.

## The Traditional Challenge

Most VC firms still rely on quarterly reports, board meetings, and manual data collection to monitor their portfolio companies. This approach has several limitations:

- **Delayed insights**: By the time issues surface in quarterly reports, it's often too late
- **Incomplete picture**: Traditional metrics miss early warning signs and growth opportunities
- **Resource intensive**: Manual monitoring doesn't scale across large portfolios
- **Subjective analysis**: Human bias can cloud judgment on company performance

## The AI Advantage

AI-powered monitoring systems are changing the game by providing real-time insights, predictive analytics, and automated reporting capabilities that help VCs stay ahead of the curve.`,
        },
        "ai-deal-sourcing": {
          slug: "ai-deal-sourcing",
          title: "AI-Driven Deal Sourcing: Finding Hidden Gems in the Startup Ecosystem",
          excerpt:
            "Exploring how artificial intelligence is revolutionizing deal sourcing for venture capital firms, from automated startup discovery to predictive investment scoring.",
          date: "2025-06-17",
          readTime: "12 min read",
          category: "Deal Sourcing",
          content: `# AI-Driven Deal Sourcing: Finding Hidden Gems in the Startup Ecosystem

The venture capital industry is experiencing a fundamental shift in how deals are sourced and evaluated. Traditional methods—relying on personal networks, warm introductions, and manual research—are being augmented and, in some cases, replaced by sophisticated AI-driven systems.

## The Evolution of Deal Sourcing

Historically, venture capital deal sourcing has been a relationship-driven business, but AI is changing the game by providing comprehensive market scanning, pattern recognition, and automated scoring capabilities.`,
        },
      }

      return samplePosts[slug] || null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    const post = {
      slug,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: data.readTime || "",
      category: data.category || "General",
      content,
    }

    console.log("Successfully loaded insight post:", post.slug)
    return post
  } catch (error) {
    console.error(`Error getting insight post ${slug}:`, error)
    return null
  }
}

export function getRadarUpdate(slug: string): RadarUpdate | null {
  try {
    const contentDirectory = getContentDirectory()
    const filePath = path.join(contentDirectory, "radar", `${slug}.md`)

    console.log("Looking for radar update:", filePath)

    if (!isValidMarkdownFile(filePath)) {
      console.log("Radar update does not exist, checking sample data")

      // Return sample data for known slugs
      const sampleUpdates: Record<string, RadarUpdate> = {
        panoai: {
          slug: "panoai",
          title: "Pano AI Raises $44M to Scale Wildfire Detection",
          type: "Climate Tech",
          date: "2025-06-21",
          insight:
            "Pano AI's Series B funding marks a major milestone in the climate-tech space, combining panoramic imaging and real-time AI to detect and manage wildfires.",
          content: `# Pano AI: Safeguarding Millions from Wildfires with $44M in Series B

## What happened:

Pano AI raised $44M Series B led by Giant Ventures, bringing its total to $89M. This builds on four years of success—serving 250+ first-responder agencies, 15 utilities, and covering ~30M acres across the U.S., Canada, and Australia.

## Why it matters:

Pano blends high-resolution panoramic cameras with deep-learning algorithms, real-time smoke detection, and human analyst verification to reduce false alarms—deploying in remote, high-risk environments.`,
        },
      }

      return sampleUpdates[slug] || null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    const update = {
      slug,
      title: data.title || "Untitled",
      type: data.type || data.category || "General",
      date: data.date || "",
      insight: data.insight || data.excerpt || "",
      content,
    }

    console.log("Successfully loaded radar update:", update.slug)
    return update
  } catch (error) {
    console.error(`Error getting radar update ${slug}:`, error)
    return null
  }
}
