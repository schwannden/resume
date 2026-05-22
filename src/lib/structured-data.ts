import { siteConfig } from "../../resume.config"

// Evaluated once at module load. In a statically exported Next.js Server
// Component this becomes the build timestamp, frozen into out/*.html.
const BUILD_TIME = new Date().toISOString()

const PERSON_ID = `${siteConfig.url}/#person`
const WEBSITE_ID = `${siteConfig.url}/#website`
const PROFILE_ID = `${siteConfig.url}/#profile`

/**
 * Base @graph emitted in the root layout on every page.
 * Defines the Person and WebSite entities with stable @ids so other
 * page-level JSON-LD blocks can reference them without duplicating data.
 */
export function buildBaseGraph() {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    jobTitle: siteConfig.structuredData.jobTitle,
    description: siteConfig.shortDescription,
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
    hasOccupation: {
      "@type": "Occupation",
      name: "Technical Speaker & Thought Leader",
      description:
        "Delivers technical presentations on cloud native technologies, AI/ML, and DevOps to industry conferences and corporate audiences",
    },
    creator: siteConfig.structuredData.featuredWorks.map((work) => ({
      "@type": work.type,
      "@id": work.url,
      name: work.name,
      url: work.url,
      ...(work.description && { description: work.description }),
      ...(work.publisher && { publisher: work.publisher }),
    })),
  }

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} - Technical Portfolio`,
    description: siteConfig.description,
    author: { "@id": PERSON_ID },
    inLanguage: "en",
  }

  return {
    "@context": "https://schema.org",
    "@graph": [person, website],
  }
}

/**
 * ProfilePage JSON-LD for the home page only. References the Person
 * defined in buildBaseGraph() by @id, so the two scripts deduplicate
 * into a single Person node in the Knowledge Graph.
 */
export function buildProfilePage() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": PROFILE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.title}`,
    dateCreated: siteConfig.structuredData.profileDateCreated,
    dateModified: BUILD_TIME,
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  }
}
