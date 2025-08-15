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
  type: "github" | "talk" | "contribution" | "medium"
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
  phone: string
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
  phone: "(886) 972006041",
  linkedin: "https://www.linkedin.com/in/schwannden/",
  title: "Software and System Architect",
  summary:
    "Experienced software and system architect, with a demonstrated history of working in the data product industry and DevOps. Skilled in Python, Scala, and TypeScript. Held diverse roles from software engineers, data scientist, DevOps, to director. Loves cloud and open source. Excels in creatively solving complex issues and bridging R&D and business for product excellence.",

  experience: [
    {
      title: "Cloud Software Engineer",
      company: "Ubiquiti",
      duration: "Aug 2024 - Present",
      responsibilities: [
        "Implement and operate Single Sign On servie with millions of users and 1000~10000 rps workload",
        "Design and implement the best security, authentication, authorization practices to drive company product growth.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Dell",
      duration: "Jan 2023 - Ayg 2024",
      responsibilities: [
        "Transformed a legacy integration test platform to modernized cloud native architecture, saves 50% operation cost, and shift left testing to increase lead time. Accelerate complex product build time by 400%, modernized build infrastructure.",
        "Cultivate a culture of documentation through CI/CD tools.",
        "Cloud native evangelist. Pushing better CI/CD adoption through various technologies (Prefect, Github action, Argo, Kustomize, Helm...etc). Shift left cloud security awareness (continuous security patch, SBOM, oss-scanner, trivy).",
      ],
    },
    {
      title: "Senior Software Architect",
      company: "MoBagel",
      duration: "Sep 2021 - Dec 2022",
      responsibilities: [
        "Architecting the new AI advertisement platform (8ndpoint.com), worked as fullstack engineer to build product from scratch. Design and implement the SSO strategies (both authentication and authorization).",
        "Introduced k8s, airflow, rancher, minio, argocd, longhorn. Solve scalability and maintainability issues with cloud native solutions. Design and executed migration that lift our product on to GCP (using GAE, GKE, cloud SQL, VPC Network Peering, Big Query, ...etc), design the necessary project structure, network structure, IAM, service account. Use CI/CD to give developers the best flexibility while strictly following the principle of least privilege.",
      ],
    },
    {
      title: "Director of Machine Learning",
      company: "MoBagel",
      duration: "Jun 2018 - Sep 2021",
      responsibilities: [
        "Lead an algorithm/architecture team, and a web team of size 8~11 to build products. Innovate and productize world class AutoML and Auto Time Series products.",
        "Build QA, DevOps Team, Web, and ML team. Design the entire software development and release process during various company stages.",
        "Setup OKR, company tech roadmap, HRD plan, recruiting plan. Tirelessly align company objectives and employees personal growth to cultivate a positive working environment.",
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
        "GCP",
        "AWS",
        "Kubernetes",
        "Docker",
        "ArgoCD",
        "Helm",
        "Kustomize",
        "MinIO",
        "Github Actions",
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
    // Blog articles from Medium
    {
      title:
        "Airflow with ArgoCD, kustomize, and Helm. Introducing CI/CD for Our Data Scientist Team",
      type: "blog",
      venue: "Medium",
      views: "5.2K views",
      url: "https://medium.com/selectfrom/airflow-with-argocd-separating-develop-and-production-environment-with-fully-automated-ci-cd-d8aba7bd0db6",
    },
    {
      title: "Deploy Airflow to GKE from ArgoCD on GKE with Workload Identity",
      type: "blog",
      venue: "Medium",
      views: "4.3K views",
    },
    {
      title: "Multiple K8s Cluster Management",
      type: "blog",
      venue: "Medium",
      views: "4.3K views",
      url: "https://medium.com/selectfrom/multiple-k8s-cluster-management-with-rancher-k3s-lightweight-k8s-cluster-for-edge-and-eea1f71175d0",
    },
    {
      title: "Hosting Your Own Helm Chart on GitHub with Chart Releaser",
      type: "blog",
      venue: "Medium",
      views: "2.6K views",
      url: "https://medium.com/devops-dev/hosting-your-own-helm-chart-on-github-with-chart-releaser-a356ac10ce5c",
    },
    {
      title: "Switch with a Functional and Generic turn",
      type: "blog",
      venue: "Medium",
      views: "2.3K views",
      url: "https://medium.com/selectfrom/switch-with-a-functional-and-generic-turn-547e17b0df9",
    },
    {
      title: "Helm and Kustomization: A Tale of K8s Manifests Management",
      type: "blog",
      venue: "Medium",
      views: "2.3K views",
      url: "https://medium.com/@schwanndenkuo/helm-and-kustomization-a-tail-of-k8s-manifests-management-c739b7cdf6b7",
    },
    {
      title:
        "Airflow — Build, Host, Maintain Your Own Dependencies with GitHub and Docker Hub (for Free)",
      type: "blog",
      venue: "Medium",
      views: "1.3K views",
      url: "https://medium.com/selectfrom/airflow-build-host-maintain-your-own-dependencies-with-github-and-docker-hub-for-free-936c811a5283",
    },
    {
      title: "MCP AI Agent在紅什麼 (What's the fuss about MCP AI Agent)",
      type: "blog",
      venue: "Medium",
      views: "1K views",
      url: "https://medium.com/@schwanndenkuo/mcp-ai-agent在紅什麼-e7fd2523c749",
    },
    {
      title:
        "一手抱嬰兒，我用 20分鐘「嘴」出讀經計畫 (With my baby in one hand, I spent 20 minutes speaking a PWA into existence)",
      type: "blog",
      venue: "Medium",
      views: "0.2K views",
      url: "https://medium.com/@schwanndenkuo/一手抱嬰兒-我用-20分鐘-嘴-出讀經計畫-progressive-web-app-fa693386452b",
    },
  ],

  talks: [
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
  medium: "https://medium.com/@schwanndenkuo",
  github: "https://github.com/schwannden",
  linkedin: "https://www.linkedin.com/in/schwannden/",
}

// Open source contributions mentioned in resume
export const openSourceContributions = [
  "GoogleContainerTools/kaniko",
  "fastapi-user",
  "roman-right/beanie",
  "offen/docker-volume-backup",
]
