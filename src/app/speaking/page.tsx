import { Metadata } from "next"
import Link from "next/link"
import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { SpeakingHighlights } from "@/components/sections/speaking-highlights"
import { PublicationList } from "@/components/sections/publication-list"
import { Award } from "lucide-react"

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
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Professional Summary */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Speaking & Publications
          </h1>
          <h2 className="text-xl text-muted-foreground mb-6">
            Thought Leadership in Cloud Native & AI/ML
          </h2>
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Advocacy & Engagement Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
                className="px-6 py-2 border border-input text-muted-foreground rounded-lg hover:bg-accent transition-colors inline-block mr-4"
              >
                ← Back to Resume
              </Link>
              <Link
                href="/contributions"
                className="px-6 py-2 border border-input text-muted-foreground rounded-lg hover:bg-accent transition-colors inline-block"
              >
                View Contributions
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

        {/* English Proficiency */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              English Proficiency
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
                          <h4 className="font-medium text-card-foreground">
                            {award.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {award.organization}
                          </p>
                          {award.year && (
                            <p className="text-muted-foreground text-xs mt-1">
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
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-muted-foreground mb-6">
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
                className="px-6 py-2 border border-input text-muted-foreground rounded-lg hover:bg-accent transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://blog.schwannden.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-input text-muted-foreground rounded-lg hover:bg-accent transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
