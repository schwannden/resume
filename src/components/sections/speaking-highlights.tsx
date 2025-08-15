import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, ExternalLink } from "lucide-react"

interface SpeakingHighlightsProps {
  mode?: "highlight" | "full"
}

export function SpeakingHighlights({
  mode = "highlight",
}: SpeakingHighlightsProps) {
  // For highlight mode, show only featured talks
  const displayTalks =
    mode === "highlight"
      ? resumeData.talks
          .filter(
            (talk) =>
              talk.type === "keynote" ||
              talk.type === "workshop" ||
              talk.type === "invited"
          )
          .slice(0, 4)
      : resumeData.talks

  const getTalkTypeVariant = (type: string) => {
    switch (type) {
      case "keynote":
        return "destructive"
      case "invited":
        return "info"
      case "workshop":
        return "warning"
      case "internal":
        return "secondary"
      case "briefing":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        {mode === "highlight" ? "Speaking Highlights" : "Speaking Engagements"}
      </h3>

      <div className="space-y-6">
        {displayTalks.map((talk, index) => {
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
              className={`border-l-4 ${borderColors[index % borderColors.length]} pl-6`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h4 className="text-lg font-medium text-gray-900 flex-1">
                  {talk.title}
                </h4>
                <Badge
                  variant={getTalkTypeVariant(talk.type)}
                  className="self-start"
                >
                  {talk.type}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{talk.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{talk.venue}</span>
                </div>
              </div>

              {talk.description && (
                <p className="text-gray-700 mb-3">{talk.description}</p>
              )}

              <p className="text-gray-600 text-sm mb-3">
                <strong>Audience:</strong> {talk.audience}
              </p>

              {talk.materials && (
                <div className="flex flex-wrap gap-2">
                  {talk.materials.slides && (
                    <a
                      href={talk.materials.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Slides
                    </a>
                  )}
                  {talk.materials.video && (
                    <a
                      href={talk.materials.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Video
                    </a>
                  )}
                  {talk.materials.coverage && (
                    <a
                      href={talk.materials.coverage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Coverage
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {mode === "highlight" && resumeData.talks.length > 4 && (
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            And {resumeData.talks.length - 4} more speaking engagements...
          </p>
        </div>
      )}
    </div>
  )
}
