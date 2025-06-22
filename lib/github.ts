export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics: string[]
  updated_at: string
  stargazers_count: number
  forks_count: number
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch repos')
    }
    
    const repos: GitHubRepo[] = await response.json()
    
    // Filter out forks and sort by last updated
    return repos
      .filter(repo => !repo.fork && repo.description)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 12) // Limit to 12 most recent repos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}
