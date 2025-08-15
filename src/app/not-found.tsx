import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Resume
          </Link>

          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <Link
              href="mailto:john.doe@email.com"
              className="hover:text-gray-700 transition-colors"
            >
              Contact Me
            </Link>
            <span>•</span>
            <Link
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              LinkedIn
            </Link>
            <span>•</span>
            <Link
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
