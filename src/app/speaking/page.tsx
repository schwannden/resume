import { Metadata } from "next"
import Link from "next/link"
import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { SpeakingHighlights } from "@/components/sections/speaking-highlights"
import { PublicationList } from "@/components/sections/publication-list"
import { ExternalLink, Award, GitBranch } from "lucide-react"

export const metadata: Metadata = {
  title: "Speaking & Publications - Schwannden Kuo",
  description:
    "Comprehensive speaking engagements, publications, and thought leadership contributions by Schwannden Kuo. Technical talks, blog posts, open source contributions, and industry recognition.",
  keywords: [
    "Speaking",
    "Publications",
    "Technical Talks",
    "Blog Posts",
    "Thought Leadership",
    "Open Source",
    "Cloud Native",
    "DevOps",
    "Machine Learning",
    "AutoML",
  ],
}

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Professional Summary */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Speaking & Publications
          </h1>
          <h2 className="text-xl text-gray-600 mb-6">
            Thought Leadership in Cloud Native & AI/ML
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Seasoned software and systems architect with a proven track
                record in the data products and cloud-native ecosystem, spanning
                roles from software engineer and data scientist to DevOps lead
                and director. Proficient in Python, Scala, and TypeScript, with
                hands-on expertise across AWS, Kubernetes, and CI/CD. Passionate
                about cloud technologies and open source, adept at translating
                complex technical challenges into elegant, scalable solutions
                that bridge the gap between R&D and business outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Advocacy & Engagement Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over the years, I have delivered a wide spectrum of public and
                internal presentations, workshops, and technical briefings on
                AI/ML, cloud-native infrastructure, industrial AIoT, and
                developer productivity. My speaking engagements span university
                lectures, industry conferences, investor/partner briefings, and
                corporate tech talks for global engineering teams, engaging
                audiences from dozens to several hundred. Beyond the stage, I
                actively contribute to open source, publish technical deep
                dives, and mentor teams on best practices — consistently driving
                innovation adoption and empowering developers to build, deploy,
                and scale with confidence.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors inline-block"
              >
                ← Back to Resume
              </Link>
            </div>
          </div>
        </section>

        {/* Speaking Engagements - Full Mode */}
        <section className="mb-12">
          <SpeakingHighlights mode="full" />
        </section>

        {/* Publications & Writings - Full Mode */}
        <section className="mb-12">
          <PublicationList mode="full" />
        </section>

        {/* Open Source Contributions */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Open Source Contributions & Projects
            </h3>
            <div className="space-y-6">
              {resumeData.contributions.map((contribution, index) => {
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
                        {contribution.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            contribution.type === "tool"
                              ? "success"
                              : contribution.type === "community"
                                ? "info"
                                : "secondary"
                          }
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
        </section>

        {/* Awards & Recognition */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.awards.map((award, index) => {
                const getLevelVariant = (level: string) => {
                  switch (level) {
                    case "national":
                      return "destructive"
                    case "university":
                      return "info"
                    case "regional":
                      return "warning"
                    default:
                      return "secondary"
                  }
                }

                return (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {award.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {award.organization}
                          </p>
                          {award.year && (
                            <p className="text-gray-500 text-xs mt-1">
                              {award.year}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge
                        variant={getLevelVariant(award.level)}
                        className="text-xs"
                      >
                        {award.level}
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-600 mb-6">
              Interested in having me speak at your event or collaborate on
              technical content? I&apos;m always excited to share knowledge and
              engage with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${resumeData.email}`}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/schwannden/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://medium.com/@schwanndenkuo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Medium Articles
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
