import { Metadata } from "next"
import Link from "next/link"
import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, GitBranch } from "lucide-react"

export const metadata: Metadata = {
  title: "Open Source Contributions - Schwannden Kuo",
  description:
    "Comprehensive open source contributions and community projects by Schwannden Kuo. GitHub projects, tools, and community initiatives spanning cloud native, DevOps, and data science ecosystems.",
  keywords: [
    "Open Source",
    "GitHub",
    "Contributions",
    "Community",
    "Cloud Native",
    "DevOps",
    "Python",
    "Kubernetes",
    "Docker",
    "FastAPI",
    "Bioinformatics",
    "IoT",
  ],
}

export default function ContributionsPage() {
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

  const typeOrder = ["tool", "community", "github"]
  const typeLabels = {
    tool: "Research & Development Tools",
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Professional Summary */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Open Source Contributions
          </h1>
          <h2 className="text-xl text-gray-600 mb-6">
            Community Projects & Development Tools
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Open Source Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I believe in the power of open source to drive innovation,
                education, and collaborative problem-solving. My contributions
                span research tools, community projects, and production
                libraries that help developers build better software. From
                biostatistics tools used in academic research to cloud-native
                infrastructure projects and Python libraries, each contribution
                aims to solve real-world problems and empower others.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Impact & Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                My open source work has been featured in academic publications,
                industry communities, and adopted by organizations worldwide.
                Projects range from groundbreaking biostatistics tools published
                in peer-reviewed journals to infrastructure solutions that
                streamline developer workflows and IoT platforms showcased by
                major tech companies.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors inline-block mr-4"
              >
                ← Back to Resume
              </Link>
              <Link
                href="/speaking"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors inline-block"
              >
                Speaking & Publications
              </Link>
            </div>
          </div>
        </section>

        {/* Open Source Contributions by Category */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Open Source Projects & Contributions
            </h3>

            <div className="space-y-10">
              {typeOrder.map((type) => {
                if (!groupedContributions[type]) return null
                const contributions = groupedContributions[type]

                return (
                  <div key={type}>
                    <div className="flex items-center gap-3 mb-6">
                      <h4 className="text-xl font-medium text-gray-900">
                        {typeLabels[type as keyof typeof typeLabels] || type}
                      </h4>
                      <Badge variant={getTypeVariant(type)} className="text-xs">
                        {contributions.length}{" "}
                        {contributions.length === 1 ? "project" : "projects"}
                      </Badge>
                    </div>

                    <div className="space-y-6">
                      {contributions.map((contribution, index) => {
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
                              <h5 className="text-lg font-medium text-gray-900 flex-1">
                                {contribution.name}
                              </h5>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={getTypeVariant(contribution.type)}
                                >
                                  {contribution.type}
                                </Badge>
                                <a
                                  href={contribution.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>

                            {contribution.description && (
                              <p className="text-gray-700 mb-3">
                                {contribution.description}
                              </p>
                            )}

                            {contribution.features &&
                              contribution.features.length > 0 && (
                                <div className="space-y-1">
                                  <h6 className="text-sm font-medium text-gray-900 mb-2">
                                    Key Features & Impact:
                                  </h6>
                                  {contribution.features.map(
                                    (feature, featureIndex) => (
                                      <div
                                        key={featureIndex}
                                        className="flex items-start gap-2 text-gray-600 text-sm"
                                      >
                                        <GitBranch className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional GitHub Contributions */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Additional GitHub Contributions
            </h3>
            <p className="text-gray-600 mb-6">
              Beyond major projects, I actively contribute to various open
              source libraries and tools across the Python, cloud-native, and
              DevOps ecosystems. My contributions help improve developer
              experience, fix critical bugs, and add essential features.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                "GoogleContainerTools/kaniko",
                "fastapi-users/fastapi-users",
                "BeanieODM/beanie",
                "offen/docker-volume-backup",
                "locustio/locust",
              ].map((contribution, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {contribution}
                </Badge>
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
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Let&apos;s Collaborate
            </h3>
            <p className="text-gray-600 mb-6">
              Interested in collaborating on open source projects or discussing
              technical solutions? I&apos;m always excited to work with fellow
              developers and contribute to meaningful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${resumeData.email}`}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/schwannden"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/schwannden/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
