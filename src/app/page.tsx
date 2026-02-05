import { Metadata } from "next"
import { resumeData, externalLinks } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { SpeakingHighlights } from "@/components/sections/speaking-highlights"
import { ContributionList } from "@/components/sections/contribution-list"
import { siteConfig } from "../../resume.config"

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.shortDescription,
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {resumeData.name}
          </h1>
          <h2 className="text-xl text-muted-foreground mb-6">
            {resumeData.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <span>📧 {resumeData.email}</span>
            <span>📍 {siteConfig.location}</span>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Work Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => {
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
                    <h4 className="text-lg font-medium text-card-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {exp.company} • {exp.duration}
                    </p>
                    <ul className="mt-3 text-card-foreground space-y-1">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>• {responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Speaking Highlights Section */}
        <section className="mb-12">
          <SpeakingHighlights mode="highlight" />
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumeData.skills.map((skillCategory, index) => (
                <div key={index}>
                  <h4 className="font-medium text-card-foreground mb-2">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant={skillCategory.variant}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & Writings Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Publications & Writings
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my technical publications, speaking engagements, and
              thought leadership contributions spanning cloud native
              technologies, AI/ML, and DevOps.
            </p>
            <a
              href="/speaking"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View Speaking & Publications
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Open Source Contributions Section */}
        <section className="mb-12">
          <ContributionList mode="highlight" />
        </section>

        {/* Education & Volunteer Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Education & Volunteer Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div>
                <h4 className="text-lg font-medium text-card-foreground mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-purple-500 pl-4"
                    >
                      <h5 className="font-medium text-card-foreground">
                        {edu.degree}
                      </h5>
                      <p className="text-muted-foreground">
                        {edu.institution} • {edu.year}
                      </p>
                      {edu.activities && (
                        <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                          {edu.activities.map((activity, actIndex) => (
                            <li key={actIndex}>• {activity}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer Experience */}
              <div>
                <h4 className="text-lg font-medium text-card-foreground mb-4">
                  Volunteer Experience
                </h4>
                <div className="space-y-4">
                  {resumeData.volunteer.map((vol, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-4"
                    >
                      <h5 className="font-medium text-card-foreground">
                        {vol.role}
                      </h5>
                      <p className="text-muted-foreground">
                        {vol.organization} • {vol.duration}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {vol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${resumeData.email}`}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
              <a
                href={externalLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-input text-foreground rounded-lg hover:bg-accent transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href={externalLinks.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-input text-foreground rounded-lg hover:bg-accent transition-colors"
              >
                Blog
              </a>
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-input text-foreground rounded-lg hover:bg-accent transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="/speaking"
                className="px-6 py-2 border border-input text-foreground rounded-lg hover:bg-accent transition-colors"
              >
                Speaking Portfolio
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
