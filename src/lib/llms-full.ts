import { resumeData } from "@/data/resume"
import { siteConfig } from "../../resume.config"

// Generates the full resume as markdown for AI agents and /resume.md.
// Each section opens with a definitional first sentence so passages remain
// citable when an LLM extracts a single paragraph out of context.

const NAME = resumeData.name
const SITE = siteConfig.url

function hero(): string {
  const org = siteConfig.structuredData.currentOrganization
  return [
    `# ${NAME}`,
    "",
    `> ${NAME} is a Tech Lead at ${org} specializing in identity platforms, production AI agents, and high-throughput cloud-native architecture.`,
    "",
    resumeData.summary,
    "",
    `- Email: ${resumeData.email}`,
    `- LinkedIn: ${resumeData.linkedin}`,
    `- Blog: ${siteConfig.social.blog}`,
    `- GitHub: ${siteConfig.social.github}`,
    `- Site: ${SITE}`,
  ].join("\n")
}

function experience(): string {
  const lead = `${NAME}'s professional experience spans a decade across identity platforms, applied AI, and data products — currently leading SSO at Ubiquiti, previously Director of ML at MoBagel.`
  const items = resumeData.experience.map((e) =>
    [
      `### ${e.title} — ${e.company} (${e.duration})`,
      "",
      ...e.responsibilities.map((r) => `- ${r}`),
    ].join("\n")
  )
  return ["## Experience", "", lead, "", ...items].join("\n")
}

function skills(): string {
  const lead = `${NAME}'s technical expertise covers cloud and DevOps platforms, polyglot backend and frontend stacks, and modern AI/ML tooling including agentic systems and MCP.`
  const items = resumeData.skills.map(
    (s) => `- **${s.category}:** ${s.skills.join(", ")}`
  )
  return ["## Skills", "", lead, "", ...items].join("\n")
}

function talks(): string {
  const lead = `${NAME} speaks on AI agentic development, harness engineering, AutoML in practice, and cloud-native modernization — to corporate teams, industry workshops, and university audiences.`
  const items = resumeData.talks.map((t) =>
    [
      `### ${t.title}`,
      `- Venue: ${t.venue}`,
      `- Date: ${t.date}`,
      `- Audience: ${t.audience}`,
      ...(t.description ? [`- ${t.description}`] : []),
      ...(t.materials?.slides ? [`- Slides: ${t.materials.slides}`] : []),
      ...(t.materials?.video ? [`- Video: ${t.materials.video}`] : []),
      ...(t.materials?.coverage ? [`- Coverage: ${t.materials.coverage}`] : []),
    ].join("\n")
  )
  return ["## Speaking", "", lead, "", ...items].join("\n\n")
}

function publications(): string {
  const lead = `${NAME} has authored peer-reviewed bioinformatics research, two technical books on probability and statistics, and a long-running engineering blog with multiple posts in the 1K–5K-views range on Airflow/ArgoCD, Kubernetes, and AI agents.`
  const items = resumeData.publications.map((p) => {
    const meta = [p.venue, p.date, p.views].filter(Boolean).join(" · ")
    const head = p.url ? `- [${p.title}](${p.url})` : `- ${p.title}`
    return meta ? `${head} — ${meta}` : head
  })
  return ["## Publications & Writing", "", lead, "", ...items].join("\n")
}

function contributions(): string {
  const lead = `${NAME} contributes to open source projects in identity (FastAPI Users), container tooling (Kaniko), data infrastructure (Beanie ODM, Locust, Docker Volume Backup), and maintains educational resources on AI agent development.`
  const items = resumeData.contributions.map((c) =>
    [
      `### ${c.name}`,
      `- ${c.url}`,
      ...(c.description ? [`- ${c.description}`] : []),
      ...(c.features?.length ? c.features.map((f) => `  - ${f}`) : []),
    ].join("\n")
  )
  return ["## Open Source Contributions", "", lead, "", ...items].join("\n\n")
}

function awards(): string {
  const lead = `${NAME}'s recognitions include national- and university-level championships in English public speaking — foundational to a career in technical evangelism and cross-functional leadership.`
  const items = resumeData.awards.map((a) => `- ${a.title} (${a.organization})`)
  return ["## Awards", "", lead, "", ...items].join("\n")
}

function education(): string {
  const lead = `${NAME} holds a Master's degree from National Chiao Tung University (now NYCU) with a thesis on the Formal Theory of Strategy, and served as TA for queueing theory, machine learning, and formal language.`
  const items = resumeData.education.map((e) =>
    [
      `### ${e.degree} — ${e.institution} (${e.year})`,
      ...(e.activities?.length ? e.activities.map((a) => `- ${a}`) : []),
    ].join("\n")
  )
  return ["## Education", "", lead, "", ...items].join("\n")
}

export function renderResumeMarkdown(): string {
  return [
    hero(),
    experience(),
    skills(),
    talks(),
    publications(),
    contributions(),
    awards(),
    education(),
  ].join("\n\n")
}
