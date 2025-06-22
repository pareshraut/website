
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

const contentDirectory = path.join(process.cwd(), 'content')

export function getInsightPosts(): InsightPost[] {
  const insightsPath = path.join(contentDirectory, 'insights')
  
  if (!fs.existsSync(insightsPath)) {
    return []
  }
  
  const filenames = fs.readdirSync(insightsPath)
  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(insightsPath, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.md$/, ''),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        category: data.category,
        content
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

export function getRadarUpdates(): RadarUpdate[] {
  const radarPath = path.join(contentDirectory, 'radar')
  
  if (!fs.existsSync(radarPath)) {
    return []
  }
  
  const filenames = fs.readdirSync(radarPath)
  const updates = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(radarPath, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.md$/, ''),
        title: data.title,
        type: data.type,
        date: data.date,
        insight: data.insight,
        content
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return updates
}

export function getInsightPost(slug: string): InsightPost | null {
  try {
    const filePath = path.join(contentDirectory, 'insights', `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      content
    }
  } catch {
    return null
  }
}

export function getRadarUpdate(slug: string): RadarUpdate | null {
  try {
    const filePath = path.join(contentDirectory, 'radar', `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      type: data.type,
      date: data.date,
      insight: data.insight,
      content
    }
  } catch {
    return null
  }
}
