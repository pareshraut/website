import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, GitFork, Wrench } from "lucide-react";
import { getGitHubRepos } from "@/lib/github";

export default async function ExperimentsPage() {
  const repos = await getGitHubRepos("pareshraut"); // Replace with your GitHub username

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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Tool Demos & Experiments
            </h1>
            <p className="text-muted-foreground mt-2">
              What I'm Building / Testing
            </p>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <Card key={repo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <span className="mr-2">{repo.name}</span>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-orange-500 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-2">
                      {repo.description || "No description available"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Topics/Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 5).map((topic) => (
                          <Badge
                            key={topic}
                            variant="outline"
                            className="bg-muted text-xs sm:text-sm"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {repo.forks_count}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {repos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No repositories found. Check back soon for new experiments!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
