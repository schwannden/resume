import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer Resume",
  description:
    "Professional resume showcasing experience in modern web development, React, TypeScript, Node.js, and cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Resume",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  metadataBase: new URL("https://johndoe.github.io"),
  openGraph: {
    title: "John Doe - Full Stack Developer Resume",
    description:
      "Professional resume showcasing experience in modern web development, React, TypeScript, Node.js, and cloud technologies.",
    url: "https://johndoe.github.io/resume",
    siteName: "John Doe Resume",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer Resume",
    description:
      "Professional resume showcasing experience in modern web development, React, TypeScript, Node.js, and cloud technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Doe",
              jobTitle: "Full Stack Developer",
              url: "https://johndoe.github.io/resume",
              sameAs: [
                "https://linkedin.com/in/johndoe",
                "https://github.com/johndoe",
                "https://twitter.com/johndoe",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Tech Company",
              },
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "JavaScript",
                "Full Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
