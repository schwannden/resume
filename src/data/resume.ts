// Structured resume data for Schwannden Kuo
// Extracted from resume.md

export interface Experience {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  url?: string
  type: "github" | "talk" | "contribution" | "blog"
}

export interface SkillCategory {
  category: string
  skills: string[]
  variant: "info" | "success" | "warning" | "secondary"
}

export interface Publication {
  title: string
  type: "paper" | "article" | "book" | "certificate" | "blog" | "thesis"
  venue?: string
  date?: string
  url?: string
  views?: string // For blog articles with view counts
  description?: string
}

export interface Talk {
  title: string
  venue: string
  date: string
  type: "keynote" | "invited" | "workshop" | "internal" | "briefing"
  audience: string
  description?: string
  materials?: {
    slides?: string
    video?: string
    coverage?: string
  }
}

export interface Award {
  title: string
  organization: string
  level: "national" | "university" | "regional"
  year?: string
}

export interface Contribution {
  name: string
  type: "github" | "community" | "tool"
  url: string
  description?: string
  features?: string[]
}

export interface Education {
  institution: string
  degree: string
  year: string
  activities?: string[]
}

export interface ResumeData {
  name: string
  email: string
  linkedin: string
  title: string
  summary: string
  experience: Experience[]
  skills: SkillCategory[]
  projects: Project[]
  publications: Publication[]
  talks: Talk[]
  awards: Award[]
  contributions: Contribution[]
  education: Education[]
  volunteer: {
    role: string
    organization: string
    duration: string
    description: string
  }[]
}

export const resumeData: ResumeData = {
  name: "Schwannden Kuo",
  email: "schwannden@gmail.com",
  linkedin: "https://www.linkedin.com/in/schwannden/",
  title: "Tech Lead, Identity & Applied AI",
  summary:
    "Tech lead with a decade across data products, identity platforms, and applied AI. Currently leading SSO subsystem at Ubiquiti serving millions of active users under high-throughput production load, and built the team's portfolio of production AI agents — multi-agent triage, release monitoring, code review — that learn from each use. Previously Director of ML at MoBagel, where I won the enterprise accounts (Chunghwa Telecom, Wistron, AUO) that anchored Series A revenue and re-architected the AutoML engine for ~30× runtime efficiency. Author, speaker, open-source contributor.",

  experience: [
    {
      title: "SSO Team Lead",
      company: "Ubiquiti",
      duration: "Aug 2025 - Present",
      responsibilities: [
        "Built and shipped a suite of production AI tools for the SSO team, including a multi-agent release monitor and a read-only incident-triage agent that reduced alert-to-root-cause time by 70%. Additionally developed team-shared agents for feature development and code review to improve consistency in delivery quality and velocity.",
        "Led a multi-quarter API latency initiative to completion by optimizing caching strategies, identifying performance bottlenecks, and refactoring deployment architecture. Achieved a 90–97% reduction in P95 latency across six critical auth/MFA endpoints (e.g., login: 11.27s → 0.79s; email MFA: 10.18s → 0.31s; password reset: 9.27s → 0.54s) while reducing compute capacity requirements by over 60%.",
        'Owned cross-team architectural delivery for the SSO platform, leading the end-to-end implementation of "Bring Your Own IdP" (SAML/OIDC for Entra, Okta, and Google Workspace). Successfully managed the project from initial design through early access and full customer adoption, despite having no prior experience with these protocols.',
      ],
    },
    {
      title: "Cloud Software Engineer",
      company: "Ubiquiti",
      duration: "Aug 2024 - Aug 2025",
      responsibilities: [
        "Velocity: reduced feature lead time ~30% and accelerated security patching ~5× by revamping the release lifecycle and automating consistency checks.",
        "Resilience: diagnosed a 30-minute production login p95 spike (5.19s vs 1.5s baseline) as a Postgres row lock held across PBKDF2/Argon2 hashing; 15-LOC fix achieved a 697× improvement in mean exec time on hot-row updates.",
        "Resilience (DB): engineered high-availability database architecture with strict read/write separation, eliminating production impact during RDS replica events.",
        "Operated AWS SSO at millions of active users under high-throughput production load, aligning security architecture with business outcomes and reducing support cost.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Dell",
      duration: "Jan 2023 - Aug 2024",
      responsibilities: [
        "Modernized a legacy integration test platform into a cloud-native architecture (AWS & Kubernetes), reducing operational costs by 50% and accelerating product build time by 400%, directly improving time-to-market.",
        "Advocated for developer-first practices by gathering feedback from engineering teams and influencing CI/CD adoption (GitHub Actions, Argo, Kustomize, Helm).",
        "Established cloud security best practices (automated vulnerability scanning, SBOM, Trivy) to align engineering efficiency with enterprise compliance.",
      ],
    },
    {
      title: "Senior Software Architect",
      company: "MoBagel",
      duration: "Sep 2021 - Dec 2022",
      responsibilities: [
        "Architected 8ndpoint.com, the AI-driven advertising platform whose technical assets and customer traction anchored MoBagel's strategic M&A acquisition; integrated generative personalization for campaign engagement.",
        "Led the migration of core services to a hybrid-cloud environment, designing scalable IAM and network structures across GCP (GKE, Cloud SQL, BigQuery) and AWS (EC2, S3, VPC) utilizing orchestration tools like ArgoCD and Airflow.",
        "Partnered with product leadership to translate complex AI/ML capabilities into customer-facing benefits, effectively bridging the gap between R&D innovation and enterprise campaign ROI.",
      ],
    },
    {
      title: "Director of Machine Learning",
      company: "MoBagel",
      duration: "Jun 2018 - Sep 2021",
      responsibilities: [
        "Won three Taiwan enterprise accounts that anchored Series A revenue thesis — Chunghwa Telecom, Wistron, and AUO; two became strategic investors. Each engagement combined direct customer ownership with the technical solution: re-architected the general AutoML engine (Scala / Hadoop) for memory and compute efficiency to ship to Chunghwa Telecom — ~30× runtime improvement; designed bespoke algorithmic solutions for Wistron and AUO industrial problems with measured ROI per engagement.",
        "Built the engineering organization from the ground up as hiring manager — interviewed and onboarded engineers across QA, DevOps, Web, and Algorithm functions; coached the Frontend Lead and Algorithm Team Lead through their first 12 months; transitioned the QA function to a hired QA Lead.",
        'Restructured the product to enable an "inner-source" culture across teams, accelerating feature rollout ~4×.',
      ],
    },
    {
      title: "Senior Data Scientist",
      company: "MoBagel",
      duration: "Jun 2017 - Jun 2018",
      responsibilities: [
        "Automated machine learning design and reactive machine learning architecture with Scala, Akka, Spark.",
        "Design and implement the first generation AutoML system, achieve 300x speed up to secure key accounts.",
      ],
    },
    {
      title: "Software Developer",
      company: "University of Pittsburgh",
      duration: "Jun 2016 - Sep 2016",
      responsibilities: [
        "Integrate latest statistical methods in -omic study to build user friendly application for biostatisticians. Create open source project, to encourage open source collaboration and accelerate impact. Train researchers to maintain the project.",
        "Publish paper on biostatistics (See publications).",
      ],
    },
    {
      title: "Research Assistant",
      company: "Academia Sinica",
      duration: "Jul 2014 - Jul 2015",
      responsibilities: [
        "Assist research in NDN network. Open sourced project (source code and book) to deploy NDN on Galileo. Featured in intel maker community.",
      ],
    },
  ],

  skills: [
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "GCP",
        "Kubernetes",
        "Docker",
        "ArgoCD",
        "Helm",
        "Kustomize",
        "MinIO",
        "Github Actions",
        "CloudWatch / EMF",
        "Athena",
        "RDS / Aurora",
      ],
      variant: "info",
    },
    {
      category: "Languages & Frameworks",
      skills: [
        "Python",
        "Scala",
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind",
        "Shadcn UI",
        "Django",
        "FastAPI",
      ],
      variant: "success",
    },
    {
      category: "Data & ML",
      skills: [
        "Claude Code / Skills",
        "MCP",
        "Multi-agent systems",
        "LLM evaluation",
        "Apache Spark",
        "Akka",
        "AutoML",
        "Time Series",
        "Airflow",
        "Prefect",
        "Click",
        "Grafana",
      ],
      variant: "warning",
    },
  ],

  projects: [
    {
      name: "Argo + Airflow + Kustomize Template",
      description:
        "Infrastructure as Code template for deploying Airflow to GKE using ArgoCD with Workload Identity and Kustomization for Kubernetes manifests management.",
      technologies: ["ArgoCD", "Airflow", "Kustomize", "GKE", "Kubernetes"],
      url: "https://github.com/schwannden/airflow-argocd-template",
      type: "github",
    },
    {
      name: "MetaOmics",
      description:
        "Analysis pipeline and browser-based software suite for transcriptomic meta-analysis. Biostatistics tool for researchers.",
      technologies: ["Bioinformatics", "Statistics", "R", "Web Development"],
      url: "https://github.com/metaOmics/metaOmics",
      type: "github",
    },
    {
      name: "NDN on Galileo",
      description:
        "Open source project deploying Named Data Networking on Intel Galileo. Featured in Intel Maker Community.",
      technologies: ["NDN", "Intel Galileo", "IoT", "Networking"],
      url: "https://github.com/schwannden/ndn-on-galileo",
      type: "github",
    },
    {
      name: "機器之心 Featured Talk",
      description:
        "Featured technical talk on machine learning and data science innovations.",
      technologies: ["Machine Learning", "Data Science"],
      url: "https://www.jiqizhixin.com/articles/2019-12-19-18",
      type: "talk",
    },
  ],

  publications: [
    {
      title: "Google Cloud Professional Cloud Architect",
      type: "certificate",
    },
    {
      title: "Google Cloud Professional Cloud DevOps Engineer",
      type: "certificate",
    },
    {
      title: "Google Cloud Professional Cloud Developer",
      type: "certificate",
    },
    {
      title:
        "MetaOmics: analysis pipeline and browser-based software suite for transcriptomic meta-analysis",
      type: "paper",
      venue: "Bioinformatics",
      date: "2019 May",
      url: "https://academic.oup.com/bioinformatics/article/35/9/1597/5126234",
    },
    {
      title: "Formal Theory of Strategy",
      type: "thesis",
      description: "Master's thesis on strategic theory and decision-making",
      url: "https://drive.google.com/file/d/1AmjEnFqA7Ao_svBaBkyoaccR8WHlIltY/view?usp=sharing",
    },
    {
      title: "Theory of Probability",
      type: "book",
      description:
        "A theoretical treatment of probability with Riemann-Stieltjes integral.",
      url: "https://drive.google.com/file/d/0B3_JVAzZH1m9blhzb3oycDhBN28/view?usp=drive_link&resourcekey=0-9rpxF-egPh-pxuAQlYt8qg",
    },
    {
      title: "Theory of Statistics",
      type: "book",
      description: "Rigorous treatment of statistics with proofs.",
      url: "https://drive.google.com/file/d/0B3_JVAzZH1m9YUh0YjRSd0dnZDg/view?usp=drive_link&resourcekey=0-7M792w3TWJIHJul967L_tA",
    },
    // Blog articles
    {
      title:
        "AI Paradigm Shift, Ep. 1 — The Skill That Monitored Its Own Evolution",
      type: "blog",
      venue: "Blog",
      date: "2026 Mar",
      url: "https://blog.schwannden.com/ai-paradigm-shift-ep-1-the-skill-that-monitored-its-own-evolution/",
    },
    {
      title:
        "AI Paradigm Shift, Ep. 2 — The Triage Agent That Learned From Every Incident",
      type: "blog",
      venue: "Blog",
      date: "2026 Mar",
      url: "https://blog.schwannden.com/ai-paradigm-shift-ep-2-the-triage-agent-that-learned-from-every-incident/",
    },
    {
      title:
        "AI Paradigm Shift, Ep. 3 — From Copy-Paste to Commit: How Skills Replaced My Prompt Library",
      type: "blog",
      venue: "Blog",
      date: "2026 Mar",
      url: "https://blog.schwannden.com/ai-paradigm-shift-ep-3-from-copy-paste-to-commit-how-skills-replaced-my-prompt-library/",
    },
    {
      title:
        "Airflow with ArgoCD, kustomize, and Helm. Introducing CI/CD for Our Data Scientist Team",
      type: "blog",
      venue: "Blog",
      views: "5.2K views",
      url: "https://blog.schwannden.com/airflow-with-argocd-separating-develop-and-production-environment-with-fully-automated-ci-cd/",
    },
    {
      title: "Deploy Airflow to GKE from ArgoCD on GKE with Workload Identity",
      type: "blog",
      venue: "Blog",
      views: "4.3K views",
      url: "https://blog.schwannden.com/deploy-airflow-to-gke-from-argocd-on-gke-with-workload-identity/",
    },
    {
      title: "Multiple K8s Cluster Management",
      type: "blog",
      venue: "Blog",
      views: "4.3K views",
      url: "https://blog.schwannden.com/multiple-k8s-cluster-management-with-rancher-k3s-lightweight-k8s-cluster-for-edge-and/",
    },
    {
      title: "Hosting Your Own Helm Chart on GitHub with Chart Releaser",
      type: "blog",
      venue: "Blog",
      views: "2.6K views",
      url: "https://blog.schwannden.com/hosting-your-own-helm-chart-on-github-with-chart-releaser/",
    },
    {
      title: "Switch with a Functional and Generic turn",
      type: "blog",
      venue: "Blog",
      views: "2.3K views",
      url: "https://blog.schwannden.com/switch-with-a-functional-and-generic-turn/",
    },
    {
      title: "Helm and Kustomization: A Tale of K8s Manifests Management",
      type: "blog",
      venue: "Blog",
      views: "2.3K views",
      url: "https://blog.schwannden.com/helm-and-kustomization-a-tail-of-k8s-manifests-management/",
    },
    {
      title:
        "Airflow — Build, Host, Maintain Your Own Dependencies with GitHub and Docker Hub (for Free)",
      type: "blog",
      venue: "Blog",
      views: "1.3K views",
      url: "https://blog.schwannden.com/airflow-build-host-maintain-your-own-dependencies-with-github-and-docker-hub-for-free/",
    },
    {
      title: "MCP AI Agent在紅什麼 (What's the fuss about MCP AI Agent)",
      type: "blog",
      venue: "Blog",
      views: "1K views",
      url: "https://blog.schwannden.com/whats-the-fuzz-about-mcp-ai-agent-zh-tw/",
    },
    {
      title:
        "一手抱嬰兒，我用 20分鐘「嘴」出讀經計畫 (With my baby in one hand, I spent 20 minutes speaking a PWA into existence)",
      type: "blog",
      venue: "Blog",
      views: "0.2K views",
      url: "https://blog.schwannden.com/speak-a-pwa-into-existence/",
    },
  ],

  talks: [
    {
      title: "AI Agentic Development & Harness Engineering",
      venue: "MoBagel (private corporate training)",
      date: "2026 May",
      type: "workshop",
      audience:
        "MoBagel core developer team and agentic AI team (~15 engineers)",
      description:
        "Three-hour training across three parts. Part 1: paradigm shift to harness engineering — context engineering, skills as durable assets, the four eras of AI development. Part 2: bootstrapping the AI workflow — pre-commit/CI as agent sensory organs, skill authoring, plan-driven feature development. Part 3: provider-agnostic harness — portable artifacts (AGENTS.md, skills, MCP) across Claude, Codex, Cursor, and Gemini.",
    },
    {
      title: "End‑to‑End AutoML in Practice (Decanter AI)",
      venue: "机器之心 (Jiqizhixin) × MoBagel",
      date: "2019",
      type: "workshop",
      audience:
        "Industry practitioners and partners; workshop attracted hundreds of participants",
      description:
        "Practical AutoML pipeline design, speed/accuracy trade‑offs, and real‑world deployments",
      materials: {
        coverage: "https://www.jiqizhixin.com/articles/2019-12-19-18",
      },
    },
    {
      title: "AIoT and Data Analysis: Approaching Industrial AI",
      venue: "National Chiao Tung University (now NYCU)",
      date: "2019",
      type: "invited",
      audience: "Industry practitioners, partners, academics",
      description:
        "Key principles of 'ML Done Right' including speed/accuracy trade-offs, evaluation vs. implementation cost, human vs. machine decision-making, and real-world case studies",
      materials: {
        slides:
          "https://drive.google.com/file/d/1KGScx1pni-1ZuAzezkafGdOSLrzabM8f/view?usp=sharing",
      },
    },
    {
      title: "State‑of‑the‑Art Machine Learning & Briefing on Master's Thesis",
      venue: "Chunghwa Telecom",
      date: "2018",
      type: "briefing",
      audience: "Enterprise partners",
      description:
        "Enterprise briefing on machine learning innovations and master's thesis research",
      materials: {
        slides:
          "https://drive.google.com/file/d/1AmjEnFqA7Ao_svBaBkyoaccR8WHlIltY/view?usp=sharing",
      },
    },
    {
      title: "Statistical Machine Learning Workshop (Campus‑wide)",
      venue: "National Chiao Tung University (now NYCU)",
      date: "2017",
      type: "keynote",
      audience: "Students",
      description:
        "Intuitive approaches to high‑dimensional statistics for engineering students; emphasized how statistical thinking underpins modern AI/ML",
    },
    {
      title: "Cloud-Native Evangelism",
      venue: "Dell (global organization ~400)",
      date: "2020–2025",
      type: "internal",
      audience: "Global engineering teams",
      description:
        "Topics: containerization strategy, CI/CD (Prefect, GitHub Actions, Argo CD), continuous security patching, Kustomize, Helm. Notable impact: fostered a documentation-first culture, modernized a legacy integration-test platform to cloud-native architecture (cut ops cost by ~50%), and implemented shift-left testing.",
    },
    {
      title: "Annual Service Update Briefings",
      venue: "Ubiquiti",
      date: "2024–2025",
      type: "internal",
      audience: "Cross-functional stakeholders",
      description:
        "Presented service milestones, reliability improvements, and roadmap highlights",
    },
  ],

  awards: [
    {
      title: "Champion, National High School English Speech Contest",
      organization: "Taiwan",
      level: "national",
    },
    {
      title: "Champion (3 times), NCTU English Speech Contest",
      organization: "National Chiao Tung University",
      level: "university",
    },
  ],

  contributions: [
    {
      name: "MetaOmic",
      type: "tool",
      url: "https://github.com/metaOmics/metaOmics",
      description: "Biostatistic tool for transcriptomic meta-analysis",
      features: [
        "Featured in Bioinformatics journal",
        "Browser-based software suite",
        "Analysis pipeline",
      ],
    },
    {
      name: "AI Agent Study",
      type: "community",
      url: "https://schwannden.github.io/ai-agent-study/",
      description:
        "Educational documentation site for building autonomous AI agents using Claude",
      features: [
        "Progressive learning paths from beginner to production-ready",
        "Complete runnable code examples",
        "Covers ReAct patterns and Plan-Execute-Verify architectures",
      ],
    },
    {
      name: "NDN on Galileo",
      type: "community",
      url: "https://github.com/schwannden/ndn-on-galileo",
      description:
        "Named Data Networking implementation on Intel Galileo platform",
      features: [
        "Featured in Intel Maker Community",
        "Community wiki documentation",
        "Complete GitBook guide",
      ],
    },
    {
      name: "Chabod Church Management System",
      type: "community",
      url: "https://github.com/schwannden/chabod",
      description: "Multi-tenant open source church management system",
      features: [
        "Multi-tenant open source CMS",
        "Vibe Coding Enabled",
        "PRP (priject requirement prompt) driven development",
      ],
    },
    {
      name: "FastAPI Users",
      type: "github",
      url: "https://github.com/fastapi-users/fastapi-users",
      description: "Contributions to FastAPI authentication library",
    },
    {
      name: "GoogleContainerTools/kaniko",
      type: "github",
      url: "https://github.com/GoogleContainerTools/kaniko",
      description: "Contributions to Kaniko container image builder",
    },
    {
      name: "Beanie ODM",
      type: "github",
      url: "https://github.com/BeanieODM/beanie",
      description: "Contributions to MongoDB ODM for Python",
    },
    {
      name: "Docker Volume Backup",
      type: "github",
      url: "https://github.com/offen/docker-volume-backup",
      description: "Contributions to Docker volume backup solution",
    },
    {
      name: "Locust",
      type: "github",
      url: "https://github.com/locustio/locust",
      description: "Contributions to Python load testing framework",
    },
  ],

  education: [
    {
      institution: "National Chiao Tung University",
      degree: "Master's Degree",
      year: "2017",
      activities: [
        "Teaching Assistant for queueing theory, machine learning, and formal language",
        "Organizer and Speaker for 2017 NCTU Statistical Machine Learning Workshop",
      ],
    },
    {
      institution: "National Chiao Tung University",
      degree: "Bachelor's Degree",
      year: "2015",
    },
  ],

  volunteer: [
    {
      role: "Teacher for Special Kids (陪讀老師)",
      organization: "樂服社區關懷協會 - 兒少據點",
      duration: "Aug 2017 - Feb 2019",
      description:
        "Help kids on their homework, but most importantly just being there and let them know someone does care and love them.",
    },
  ],
}

// Additional external links
export const externalLinks = {
  blog: "https://blog.schwannden.com",
  github: "https://github.com/schwannden",
  linkedin: "https://www.linkedin.com/in/schwannden/",
}

// Additional GitHub contributions for display
export const additionalGitHubContributions = resumeData.contributions
  .filter((contrib) => contrib.type === "github")
  .map((contrib) => ({
    name: contrib.name,
    url: contrib.url,
    // Extract repository path from GitHub URL for display
    displayName: contrib.url.replace("https://github.com/", ""),
  }))

// Open source contributions mentioned in resume
export const openSourceContributions = [
  "GoogleContainerTools/kaniko",
  "fastapi-user",
  "roman-right/beanie",
  "offen/docker-volume-backup",
]
