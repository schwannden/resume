import { resumeData, additionalGitHubContributions } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, GitBranch } from "lucide-react"

interface ContributionListProps {
  mode?: "highlight" | "full"
}

export function ContributionList({
  mode = "highlight",
}: ContributionListProps) {
  // Group contributions by type
  const groupedContributions = resumeData.contributions.reduce(
    (acc, contribution) => {
      if (!acc[contribution.type]) {
        acc[contribution.type] = []
      }
      acc[contribution.type].push(contribution)
      return acc
    },
    {} as Record<string, typeof resumeData.contributions>
  )

  // Define display order and limits for highlight mode
  const typeOrder = ["tool", "community", "github"]
  const typeLabels = {
    tool: mode === "full" ? "Research & Development Tools" : "Research Tools",
    community: "Community Projects",
    github: "Open Source Libraries",
  }

  const getTypeVariant = (type: string) => {
    switch (type) {
      case "tool":
        return "info"
      case "community":
        return "success"
      case "github":
        return "secondary"
      default:
        return "secondary"
    }
  }

  // For highlight mode, limit items per category
  const getDisplayItems = (
    type: string,
    items: typeof resumeData.contributions
  ) => {
    if (mode === "highlight") {
      if (type === "tool") return items.slice(0, 2) // Show top 2 tools
      if (type === "community") return items.slice(0, 2) // Show top 1 community project
      if (type === "github") return items.slice(0, 3) // Show top 3 github contributions
      return items.slice(0, 2) // Show 2 items for other types
    }
    return items
  }

  const typesToShow =
    mode === "highlight"
      ? typeOrder.filter(
          (type) => type !== "github" && groupedContributions[type]
        )
      : Object.keys(groupedContributions).sort((a, b) => {
          const aIndex = typeOrder.indexOf(a)
          const bIndex = typeOrder.indexOf(b)
          if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
          if (aIndex === -1) return 1
          if (bIndex === -1) return -1
          return aIndex - bIndex
        })

  return (
    <>
      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-card-foreground">
            {mode === "highlight"
              ? "Open Source Contributions"
              : "Open Source Projects & Contributions"}
          </h3>
          {mode === "highlight" && (
            <a
              href="/contributions"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View all contributions →
            </a>
          )}
        </div>

        <div className="space-y-8">
          {typesToShow.map((type) => {
            const items = getDisplayItems(type, groupedContributions[type])
            const remainingCount =
              groupedContributions[type].length - items.length

            return (
              <div key={type}>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-medium text-card-foreground">
                    {typeLabels[type as keyof typeof typeLabels] || type}
                  </h4>
                  <Badge variant={getTypeVariant(type)} className="text-xs">
                    {groupedContributions[type].length}{" "}
                    {groupedContributions[type].length === 1
                      ? "project"
                      : "projects"}
                  </Badge>
                </div>

                {/* Use grid for github type, vertical layout for others */}
                {type === "github" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((contribution, index) => {
                      const borderColors = [
                        "border-blue-500",
                        "border-green-500",
                        "border-purple-500",
                        "border-orange-500",
                        "border-red-500",
                        "border-indigo-500",
                      ]

                      return (
                        <div
                          key={index}
                          className={`border rounded-lg p-4 hover:shadow-md transition-shadow border-l-4 ${borderColors[index % borderColors.length]}`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h5 className="font-medium text-card-foreground text-sm leading-tight">
                              {contribution.name}
                            </h5>
                            <a
                              href={contribution.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 flex-shrink-0"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          {contribution.description && (
                            <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                              {contribution.description}
                            </p>
                          )}

                          <Badge
                            variant={getTypeVariant(contribution.type)}
                            className="text-xs"
                          >
                            {contribution.type}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div
                    className={mode === "highlight" ? "space-y-4" : "space-y-6"}
                  >
                    {items.map((contribution, index) => {
                      const borderColors = [
                        "border-blue-500",
                        "border-green-500",
                        "border-purple-500",
                        "border-orange-500",
                        "border-red-500",
                        "border-indigo-500",
                      ]

                      return (
                        <div
                          key={index}
                          className={`border-l-4 ${borderColors[index % borderColors.length]} ${mode === "highlight" ? "pl-4 py-2" : "pl-6"}`}
                        >
                          <div
                            className={`flex ${mode === "highlight" ? "items-start justify-between gap-2 mb-2" : "flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3"}`}
                          >
                            <h5
                              className={`font-medium text-card-foreground flex-1 ${mode === "highlight" ? "text-sm" : "text-lg"}`}
                            >
                              {contribution.name}
                            </h5>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <Badge
                                variant={getTypeVariant(contribution.type)}
                                className="text-xs"
                              >
                                {contribution.type}
                              </Badge>
                              <a
                                href={contribution.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <ExternalLink
                                  className={
                                    mode === "highlight" ? "w-3 h-3" : "w-4 h-4"
                                  }
                                />
                              </a>
                            </div>
                          </div>

                          {contribution.description && (
                            <p
                              className={`text-muted-foreground mb-2 ${mode === "highlight" ? "text-sm" : "text-base mb-3"}`}
                            >
                              {contribution.description}
                            </p>
                          )}

                          {contribution.features &&
                            contribution.features.length > 0 &&
                            mode === "full" && (
                              <div className="space-y-1">
                                <h6 className="text-sm font-medium text-card-foreground mb-2">
                                  Key Features & Impact:
                                </h6>
                                {contribution.features.map(
                                  (feature, featureIndex) => (
                                    <div
                                      key={featureIndex}
                                      className="flex items-start gap-2 text-muted-foreground text-sm"
                                    >
                                      <GitBranch className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                          {contribution.features &&
                            contribution.features.length > 0 &&
                            mode === "highlight" && (
                              <div className="space-y-1">
                                {contribution.features
                                  .slice(0, 2)
                                  .map((feature, featureIndex) => (
                                    <div
                                      key={featureIndex}
                                      className="flex items-start gap-2 text-muted-foreground text-xs"
                                    >
                                      <GitBranch className="w-2 h-2 mt-0.5 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                {contribution.features.length > 2 && (
                                  <p className="text-xs text-muted-foreground ml-4">
                                    +{contribution.features.length - 2} more
                                    features
                                  </p>
                                )}
                              </div>
                            )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {mode === "highlight" && remainingCount > 0 && (
                  <div className="mt-3 text-center">
                    <p className="text-muted-foreground text-sm">
                      And {remainingCount} more{" "}
                      {typeLabels[
                        type as keyof typeof typeLabels
                      ]?.toLowerCase() || type}
                      ...
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {mode === "highlight" && (
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Active contributor to various open source projects in the cloud
              native, Python, and DevOps ecosystems.
            </p>
          </div>
        )}
      </div>

      {/* Additional GitHub Contributions Section - Only show in full mode */}
      {mode === "full" && (
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6 mt-6">
          <h3 className="text-2xl font-semibold text-card-foreground mb-4">
            Additional GitHub Contributions
          </h3>
          <p className="text-muted-foreground mb-6">
            Beyond major projects, I actively contribute to various open source
            libraries and tools across the Python, cloud-native, and DevOps
            ecosystems. My contributions help improve developer experience, fix
            critical bugs, and add essential features.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {additionalGitHubContributions.map((contribution, index) => (
              <a
                key={index}
                href={contribution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <Badge
                  variant="outline"
                  className="text-sm cursor-pointer hover:bg-accent"
                >
                  {contribution.displayName}
                </Badge>
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/schwannden"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All on GitHub
            </a>
          </div>
        </div>
      )}
    </>
  )
}
