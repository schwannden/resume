import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GoogleAnalyticsRouteTracker } from "@/components/analytics/ga"
import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "../../resume.config"
import { buildBaseGraph } from "@/lib/structured-data"

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
            __html: JSON.stringify(buildBaseGraph()),
          }}
        />
      </body>
    </html>
  )
}
