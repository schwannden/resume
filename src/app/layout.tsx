import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GoogleAnalyticsRouteTracker } from "@/components/analytics/ga"
import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Schwannden Kuo — Software Architect & Speaker",
  description:
    "Experienced software and system architect, technical speaker with expertise in cloud native technologies, DevOps, and AI/ML. Featured in industry conferences, technical publications, and open source contributions.",
  icons: {
    icon: [
      {
        url: "/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Software Architect",
    "System Architect",
    "Technical Speaker",
    "AI Architect",
    "Cloud Native",
    "DevOps",
    "Python",
    "Scala",
    "TypeScript",
    "Kubernetes",
    "GCP",
    "AWS",
    "Machine Learning",
    "AutoML",
    "Data Science",
    "Speaking Engagements",
    "Technical Publications",
    "Medium Articles",
    "Open Source Contributor",
    "Industry Expert",
    "AI/ML Speaker",
    "DevOps Evangelist",
    "Resume",
    "Portfolio",
  ],
  authors: [{ name: "Schwannden Kuo" }],
  creator: "Schwannden Kuo",
  metadataBase: new URL("https://resume.schwannden.com"),
  openGraph: {
    title: "Schwannden Kuo — Software Architect & Speaker",
    description:
      "Experienced software and system architect, technical speaker, and thought leader. Featured in industry conferences, technical publications, and open source contributions. Expert in cloud native technologies, DevOps, and AI/ML.",
    url: "https://resume.schwannden.com",
    siteName: "Schwannden Kuo - Technical Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://resume.schwannden.com/preview.png",
        alt: "Schwannden Kuo — Software Architect & Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schwannden Kuo — Software Architect & Speaker",
    description:
      "Experienced software and system architect, technical speaker, and thought leader. Featured in industry conferences, technical publications, and open source contributions.",
    images: ["https://resume.schwannden.com/preview.png"],
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            <Header />
            {children}
          </div>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID &&
        process.env.NODE_ENV === "production" ? (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            <Suspense fallback={null}>
              <GoogleAnalyticsRouteTracker />
            </Suspense>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Schwannden Kuo",
              jobTitle: "Software and System Architect",
              url: "https://resume.schwannden.com",
              email: "schwannden@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/schwannden/",
                "https://github.com/schwannden",
                "https://medium.com/@schwanndenkuo",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Dell",
              },
              alumniOf: {
                "@type": "Organization",
                name: "National Chiao Tung University",
              },
              knowsAbout: [
                "Software Architecture",
                "System Architecture",
                "Cloud Native",
                "DevOps",
                "Python",
                "Scala",
                "TypeScript",
                "Kubernetes",
                "GCP",
                "AWS",
                "Machine Learning",
                "Data Science",
                "AutoML",
                "Apache Spark",
                "Docker",
                "CI/CD",
                "Technical Speaking",
                "Thought Leadership",
                "Open Source Development",
                "Technical Writing",
                "Industry Evangelism",
              ],
              // Speaking engagements and publications
              hasOccupation: {
                "@type": "Occupation",
                name: "Technical Speaker & Thought Leader",
                description:
                  "Delivers technical presentations on cloud native technologies, AI/ML, and DevOps to industry conferences and corporate audiences",
              },
              // Notable works and contributions
              creator: [
                {
                  "@type": "Article",
                  name: "Airflow with ArgoCD, kustomize, and Helm",
                  url: "https://medium.com/selectfrom/airflow-with-argocd-separating-develop-and-production-environment-with-fully-automated-ci-cd-d8aba7bd0db6",
                  publisher: "Medium",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "MetaOmics",
                  url: "https://github.com/metaOmics/metaOmics",
                  description:
                    "Analysis pipeline and browser-based software suite for transcriptomic meta-analysis",
                },
                {
                  "@type": "Event",
                  name: "End-to-End AutoML in Practice",
                  location: "机器之心 (Jiqizhixin) × MoBagel",
                  description:
                    "Technical workshop on AutoML pipeline design and real-world deployments",
                },
              ],
            }),
          }}
        />
        {/* Additional structured data for speaking page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Schwannden Kuo - Technical Portfolio",
              url: "https://resume.schwannden.com",
              description:
                "Technical portfolio showcasing software architecture expertise, speaking engagements, and thought leadership contributions",
              author: {
                "@type": "Person",
                name: "Schwannden Kuo",
              },
              mainEntity: {
                "@type": "Person",
                name: "Schwannden Kuo",
                description:
                  "Software Architect, Technical Speaker, and Thought Leader",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
