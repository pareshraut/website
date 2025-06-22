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
  // Try different possible content directory locations
  const possiblePaths = [
    path.join(process.cwd(), "content"),
    path.join(process.cwd(), "app", "content"),
    path.join(process.cwd(), "public", "content"),
  ]

  for (const contentPath of possiblePaths) {
    if (fs.existsSync(contentPath)) {
      return contentPath
    }
  }

  // If no content directory exists, return the default path
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

    if (!fs.existsSync(insightsPath)) {
      console.log("Insights directory does not exist:", insightsPath)
      return []
    }

    const entries = fs.readdirSync(insightsPath, { withFileTypes: true })
    const posts = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => {
        try {
          const filePath = path.join(insightsPath, entry.name)

          if (!isValidMarkdownFile(filePath)) {
            return null
          }

          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data, content } = matter(fileContents)

          return {
            slug: entry.name.replace(/\.md$/, ""),
            title: data.title || "Untitled",
            excerpt: data.excerpt || "",
            date: data.date || "",
            readTime: data.readTime || "",
            category: data.category || "General",
            content,
          }
        } catch (error) {
          console.error(`Error reading file ${entry.name}:`, error)
          return null
        }
      })
      .filter((post): post is InsightPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error("Error getting insight posts:", error)
    return []
  }
}

export function getRadarUpdates(): RadarUpdate[] {
  try {
    const contentDirectory = getContentDirectory()
    const radarPath = path.join(contentDirectory, "radar")

    if (!fs.existsSync(radarPath)) {
      console.log("Radar directory does not exist:", radarPath)
      return []
    }

    const entries = fs.readdirSync(radarPath, { withFileTypes: true })
    const updates = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => {
        try {
          const filePath = path.join(radarPath, entry.name)

          if (!isValidMarkdownFile(filePath)) {
            return null
          }

          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data, content } = matter(fileContents)

          return {
            slug: entry.name.replace(/\.md$/, ""),
            title: data.title || "Untitled",
            type: data.type || "General",
            date: data.date || "",
            insight: data.insight || "",
            content,
          }
        } catch (error) {
          console.error(`Error reading file ${entry.name}:`, error)
          return null
        }
      })
      .filter((update): update is RadarUpdate => update !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return updates
  } catch (error) {
    console.error("Error getting radar updates:", error)
    return []
  }
}

export function getInsightPost(slug: string): InsightPost | null {
  try {
    const contentDirectory = getContentDirectory()
    const filePath = path.join(contentDirectory, "insights", `${slug}.md`)

    if (!isValidMarkdownFile(filePath)) {
      console.log("Insight post does not exist or is not a valid file:", filePath)
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: data.readTime || "",
      category: data.category || "General",
      content,
    }
  } catch (error) {
    console.error(`Error getting insight post ${slug}:`, error)
    return null
  }
}

export function getRadarUpdate(slug: string): RadarUpdate | null {
  try {
    const contentDirectory = getContentDirectory()
    const filePath = path.join(contentDirectory, "radar", `${slug}.md`)

    if (!isValidMarkdownFile(filePath)) {
      console.log("Radar update does not exist or is not a valid file:", filePath)
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      type: data.type || "General",
      date: data.date || "",
      insight: data.insight || "",
      content,
    }
  } catch (error) {
    console.error(`Error getting radar update ${slug}:`, error)
    return null
  }
}
