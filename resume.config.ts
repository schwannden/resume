/**
 * Resume Website Configuration
 *
 * This file contains all site-wide configuration separate from your resume content.
 * Update these values when forking this template for your own use.
 *
 * For sensitive values (API keys, analytics IDs), use environment variables instead.
 * See .env.example for required environment variables.
 */

// ============================================================================
// Personal Information & Branding
// ============================================================================

export const siteConfig = {
  // Basic Information
  // These values are used across the site for SEO and display
  name: "Schwannden Kuo",
  title: "Software Architect & Speaker",
  tagline: "Building scalable systems and sharing knowledge",

  // Location (displayed on resume)
  location: "Taiwan",

  // Bio for SEO and social sharing
  description:
    "Experienced software and system architect, technical speaker with expertise in cloud native technologies, DevOps, and AI/ML. Featured in industry conferences, technical publications, and open source contributions.",

  // Short bio (used in some social cards)
  shortDescription: "Software Architect, Technical Speaker, and Thought Leader",

  // ============================================================================
  // URLs & Social Links
  // ============================================================================

  // Primary site URL (must match your deployment URL)
  url: "https://resume.schwannden.com",

  // Social media and external profiles
  social: {
    email: "schwannden@gmail.com",
    linkedin: "https://www.linkedin.com/in/schwannden/",
    github: "https://github.com/schwannden",
    blog: "https://blog.schwannden.com",
    youtube: "", // Optional: Add if you have YouTube
  },

  // ============================================================================
  // SEO & Metadata
  // ============================================================================

  seo: {
    // Keywords for search engines
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
      "Blog",
      "Open Source Contributor",
      "Industry Expert",
      "AI/ML Speaker",
      "DevOps Evangelist",
      "Resume",
      "Portfolio",
    ],

    // Author information
    author: "Schwannden Kuo",

    // Open Graph image (social sharing preview)
    // Should be placed in /public/preview.png
    ogImage: "/preview.png",

    // Twitter Card type
    twitterCard: "summary_large_image",

    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  },

  // ============================================================================
  // Analytics & Tracking
  // ============================================================================

  analytics: {
    // Google Analytics - use environment variable for security
    // Set NEXT_PUBLIC_GA_ID in your .env.local or deployment environment
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",

    // Enable analytics in production only
    enableInDev: false,
  },

  // ============================================================================
  // Site Features & Behavior
  // ============================================================================

  features: {
    // Enable/disable dark mode toggle
    darkMode: true,

    // Show/hide PDF download button
    pdfDownload: true,

    // Show/hide speaking page
    speakingPage: true,

    // Show/hide blog links
    blogLinks: true,

    // Show/hide open source contributions section
    openSourceSection: true,
  },

  // ============================================================================
  // Navigation & Pages
  // ============================================================================

  navigation: {
    // Main navigation items
    mainNav: [
      { title: "Home", href: "/" },
      { title: "Speaking", href: "/speaking" },
      { title: "Blog", href: "https://blog.schwannden.com", external: true },
    ],

    // Show/hide navigation
    showNav: true,
  },

  // ============================================================================
  // Deployment Configuration
  // ============================================================================

  deployment: {
    // GitHub Pages configuration
    // Uncomment and update these when deploying to GitHub Pages at username.github.io/repo-name
    // basePath: "/resume",
    // assetPrefix: "/resume/",

    // Leave empty for custom domain or username.github.io
    basePath: "",
    assetPrefix: "",
  },

  // ============================================================================
  // Structured Data (JSON-LD)
  // ============================================================================

  structuredData: {
    // Current organization
    currentOrganization: "Dell",

    // Alumni organization
    alumniOrganization: "National Chiao Tung University",

    // Job title for structured data
    jobTitle: "Software and System Architect",

    // Areas of expertise
    expertise: [
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

    // Featured works (for structured data)
    featuredWorks: [
      {
        type: "Article",
        name: "Airflow with ArgoCD, kustomize, and Helm",
        url: "https://blog.schwannden.com/airflow-with-argocd-separating-develop-and-production-environment-with-fully-automated-ci-cd/",
        publisher: "Blog",
      },
      {
        type: "SoftwareApplication",
        name: "MetaOmics",
        url: "https://github.com/metaOmics/metaOmics",
        description:
          "Analysis pipeline and browser-based software suite for transcriptomic meta-analysis",
      },
      {
        type: "Event",
        name: "End-to-End AutoML in Practice",
        location: "机器之心 (Jiqizhixin) × MoBagel",
        description:
          "Technical workshop on AutoML pipeline design and real-world deployments",
      },
    ],
  },

  // ============================================================================
  // Theme Customization
  // ============================================================================

  theme: {
    // Primary brand color (used for accents)
    primaryColor: "blue",

    // Font family (optional override)
    // Leave empty to use default Inter font
    fontFamily: "",
  },
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Validate configuration
 * Called at build time to ensure required fields are present
 */
export function validateConfig() {
  const required = ["name", "title", "url", "social.email"]

  const missing: string[] = []

  required.forEach((key) => {
    const value = key
      .split(".")
      .reduce(
        (obj: Record<string, unknown>, k) =>
          obj?.[k] as Record<string, unknown>,
        siteConfig as Record<string, unknown>
      )
    if (!value) {
      missing.push(key)
    }
  })

  if (missing.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      `⚠️  Missing required config fields: ${missing.join(", ")}\n` +
        `   Please update resume.config.ts`
    )
  }

  return missing.length === 0
}

// Validate on import in development
if (process.env.NODE_ENV === "development") {
  validateConfig()
}

// ============================================================================
// Type Exports
// ============================================================================

export type SiteConfig = typeof siteConfig
