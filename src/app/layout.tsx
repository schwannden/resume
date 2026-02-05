import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GoogleAnalyticsRouteTracker } from "@/components/analytics/ga"
import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "../../resume.config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
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
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} - Technical Portfolio`,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.seo.ogImage}`,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: siteConfig.seo.twitterCard as "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.shortDescription,
    images: [`${siteConfig.url}${siteConfig.seo.ogImage}`],
  },
  robots: siteConfig.seo.robots,
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
        {siteConfig.analytics.googleAnalyticsId &&
        (process.env.NODE_ENV === "production" ||
          siteConfig.analytics.enableInDev) ? (
          <>
            <GoogleAnalytics gaId={siteConfig.analytics.googleAnalyticsId} />
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
              name: siteConfig.name,
              jobTitle: siteConfig.structuredData.jobTitle,
              url: siteConfig.url,
              email: siteConfig.social.email,
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.github,
                siteConfig.social.blog,
              ].filter(Boolean),
              worksFor: {
                "@type": "Organization",
                name: siteConfig.structuredData.currentOrganization,
              },
              alumniOf: {
                "@type": "Organization",
                name: siteConfig.structuredData.alumniOrganization,
              },
              knowsAbout: siteConfig.structuredData.expertise,
              // Speaking engagements and publications
              hasOccupation: {
                "@type": "Occupation",
                name: "Technical Speaker & Thought Leader",
                description:
                  "Delivers technical presentations on cloud native technologies, AI/ML, and DevOps to industry conferences and corporate audiences",
              },
              // Notable works and contributions
              creator: siteConfig.structuredData.featuredWorks.map((work) => ({
                "@type": work.type,
                name: work.name,
                url: work.url,
                ...(work.description && { description: work.description }),
                ...(work.publisher && { publisher: work.publisher }),
                ...(work.location && { location: work.location }),
              })),
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
              name: `${siteConfig.name} - Technical Portfolio`,
              url: siteConfig.url,
              description: siteConfig.description,
              author: {
                "@type": "Person",
                name: siteConfig.name,
              },
              mainEntity: {
                "@type": "Person",
                name: siteConfig.name,
                description: siteConfig.shortDescription,
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
