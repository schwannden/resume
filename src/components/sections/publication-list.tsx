import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye } from "lucide-react"

interface PublicationListProps {
  mode?: "highlight" | "full"
}

export function PublicationList({ mode = "highlight" }: PublicationListProps) {
  // Group publications by type
  const groupedPublications = resumeData.publications.reduce(
    (acc, pub) => {
      if (!acc[pub.type]) {
        acc[pub.type] = []
      }
      acc[pub.type].push(pub)
      return acc
    },
    {} as Record<string, typeof resumeData.publications>
  )

  // Define display order and limits for highlight mode
  const typeOrder = ["blog", "paper", "thesis", "certificate"]
  const typeLabels = {
    blog: "Technical Blog Posts",
    paper: "Academic Papers",
    thesis: "Thesis",
    certificate: "Certifications",
    article: "Articles",
    book: "Books",
  }

  const getTypeVariant = (type: string) => {
    switch (type) {
      case "blog":
        return "info"
      case "paper":
        return "success"
      case "thesis":
        return "warning"
      case "certificate":
        return "secondary"
      case "article":
        return "outline"
      case "book":
        return "destructive"
      default:
        return "secondary"
    }
  }

  // For highlight mode, limit items per category
  const getDisplayItems = (
    type: string,
    items: typeof resumeData.publications
  ) => {
    if (mode === "highlight") {
      if (type === "blog") return items.slice(0, 6) // Show top 6 blogs
      if (type === "certificate") return items.slice(0, 3) // Show all certificates
      return items.slice(0, 2) // Show 2 items for other types
    }
    return items
  }

  const typesToShow =
    mode === "highlight"
      ? typeOrder.filter((type) => groupedPublications[type])
      : Object.keys(groupedPublications).sort((a, b) => {
          const aIndex = typeOrder.indexOf(a)
          const bIndex = typeOrder.indexOf(b)
          if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
          if (aIndex === -1) return 1
          if (bIndex === -1) return -1
          return aIndex - bIndex
        })

  return (
    <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-card-foreground">
          {mode === "highlight"
            ? "Publications & Writings"
            : "Selected Publications & Writings"}
        </h3>
        {mode === "highlight" && (
          <a
            href="/speaking"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View all publications →
          </a>
        )}
      </div>

      <div className="space-y-8">
        {typesToShow.map((type) => {
          const items = getDisplayItems(type, groupedPublications[type])
          const remainingCount = groupedPublications[type].length - items.length

          return (
            <div key={type}>
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-lg font-medium text-card-foreground">
                  {typeLabels[type as keyof typeof typeLabels] || type}
                </h4>
                <Badge variant={getTypeVariant(type)} className="text-xs">
                  {groupedPublications[type].length}{" "}
                  {groupedPublications[type].length === 1 ? "item" : "items"}
                </Badge>
              </div>

              <div className="space-y-3">
                {items.map((pub, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded border hover:bg-accent transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-medium text-card-foreground text-sm leading-tight">
                          {pub.title}
                        </h5>
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-blue-600 hover:text-blue-800 text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
                        {pub.venue && <span>{pub.venue}</span>}
                        {pub.date && (
                          <>
                            {pub.venue && <span>•</span>}
                            <span>{pub.date}</span>
                          </>
                        )}
                        {pub.views && (
                          <>
                            {(pub.venue || pub.date) && <span>•</span>}
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {pub.views}
                            </span>
                          </>
                        )}
                      </div>

                      {pub.description && (
                        <p className="text-muted-foreground text-sm mt-1">
                          {pub.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

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
    </div>
  )
}
