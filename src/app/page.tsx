import { resumeData, externalLinks } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { SpeakingHighlights } from "@/components/sections/speaking-highlights"
import { PublicationList } from "@/components/sections/publication-list"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {resumeData.name}
          </h1>
          <h2 className="text-xl text-gray-600 mb-6">{resumeData.title}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
            <span>📧 {resumeData.email}</span>
            <span>📱 {resumeData.phone}</span>
            <span>📍 Taiwan</span>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {resumeData.skills.map((skillCategory, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2">
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

        {/* Experience Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
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
                    <h4 className="text-lg font-medium text-gray-900">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600">
                      {exp.company} • {exp.duration}
                    </p>
                    <ul className="mt-3 text-gray-700 space-y-1">
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

        {/* Projects Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.projects.map((project, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 flex-1">
                      {project.name}
                    </h4>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:text-blue-800 text-sm"
                      >
                        {project.type === "github" ? "View Code" : "View"}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.type && (
                    <div className="text-xs text-gray-500 capitalize">
                      {project.type} project
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & Writings Section */}
        <section className="mb-12">
          <PublicationList mode="highlight" />
        </section>

        {/* Education & Volunteer Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Education & Volunteer Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-purple-500 pl-4"
                    >
                      <h5 className="font-medium text-gray-900">
                        {edu.degree}
                      </h5>
                      <p className="text-gray-600">
                        {edu.institution} • {edu.year}
                      </p>
                      {edu.activities && (
                        <ul className="mt-2 text-sm text-gray-700 space-y-1">
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
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Volunteer Experience
                </h4>
                <div className="space-y-4">
                  {resumeData.volunteer.map((vol, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-4"
                    >
                      <h5 className="font-medium text-gray-900">{vol.role}</h5>
                      <p className="text-gray-600">
                        {vol.organization} • {vol.duration}
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        {vol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Contributions Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Open Source Contributions
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "GoogleContainerTools/kaniko",
                "fastapi-user",
                "roman-right/beanie",
                "offen/docker-volume-backup",
              ].map((contribution, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {contribution}
                </Badge>
              ))}
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Active contributor to various open source projects in the cloud
              native and Python ecosystems.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always interested in discussing new opportunities and
              exciting projects in cloud architecture and DevOps.
            </p>
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
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href={externalLinks.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Medium Articles
              </a>
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="/speaking"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Speaking Portfolio
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
