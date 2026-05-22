import { resumeData } from "@/data/resume"
import { siteConfig } from "../../../resume.config"

export const dynamic = "force-static"

const SITE = siteConfig.url
const org = siteConfig.structuredData.currentOrganization

// Top blog posts surfaced to AI agents — pick the highest-signal entries
// rather than dumping the full publications list.
const featuredPublications = resumeData.publications
  .filter((p) => p.url && (p.type === "blog" || p.type === "paper"))
  .slice(0, 8)

const body = [
  `# ${resumeData.name}`,
  "",
  `> ${resumeData.name} is a Tech Lead at ${org} specializing in identity platforms, production AI agents, and high-throughput cloud-native architecture.`,
  "",
  "## Pages",
  `- [Home](${SITE}/): Resume and professional portfolio`,
  `- [Speaking](${SITE}/speaking/): Talks, workshops, and corporate trainings`,
  `- [Resume (markdown)](${SITE}/resume.md): Full resume in markdown form`,
  `- [Full content for agents](${SITE}/llms-full.txt): Complete profile for LLM consumption`,
  "",
  "## Publications",
  ...featuredPublications.map((p) => {
    const meta = [p.venue, p.date, p.views].filter(Boolean).join(" · ")
    const tail = meta ? ` — ${meta}` : ""
    return `- [${p.title}](${p.url})${tail}`
  }),
  "",
  "## External",
  `- [Blog](${siteConfig.social.blog}): Engineering and AI agent writing`,
  `- [GitHub](${siteConfig.social.github}): Open source contributions`,
  `- [LinkedIn](${siteConfig.social.linkedin}): Professional profile`,
  "",
].join("\n")

export function GET(): Response {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
