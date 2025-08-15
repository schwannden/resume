import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://schwannden.github.io/resume"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
