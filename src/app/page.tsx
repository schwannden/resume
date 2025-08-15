export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
          <h2 className="text-xl text-gray-600 mb-6">Full Stack Developer</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
            <span>📧 john.doe@email.com</span>
            <span>📱 +1 (555) 123-4567</span>
            <span>📍 San Francisco, CA</span>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Experienced Full Stack Developer with 5+ years of expertise in
              building scalable web applications using React, TypeScript,
              Node.js, and cloud technologies. Passionate about creating
              efficient, user-friendly solutions and leading development teams
              to deliver high-quality software products.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Express
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Tools & Cloud
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    CI/CD
                  </span>
                </div>
              </div>
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
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-medium text-gray-900">
                  Senior Full Stack Developer
                </h4>
                <p className="text-gray-600">Tech Company • 2021 - Present</p>
                <ul className="mt-3 text-gray-700 space-y-1">
                  <li>
                    • Led development of customer-facing web applications
                    serving 100K+ users
                  </li>
                  <li>
                    • Architected scalable microservices using Node.js and AWS
                  </li>
                  <li>
                    • Mentored junior developers and established coding
                    standards
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-medium text-gray-900">
                  Full Stack Developer
                </h4>
                <p className="text-gray-600">StartupCo • 2019 - 2021</p>
                <ul className="mt-3 text-gray-700 space-y-1">
                  <li>
                    • Built responsive web applications using React and
                    TypeScript
                  </li>
                  <li>• Developed RESTful APIs with Node.js and Express</li>
                  <li>• Implemented automated testing and CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">
                  E-Commerce Platform
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Full-stack e-commerce solution with payment processing and
                  inventory management.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">
                  Task Management App
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Collaborative task management tool with real-time updates and
                  team features.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
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
              exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:john.doe@email.com"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                LinkedIn Profile
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
