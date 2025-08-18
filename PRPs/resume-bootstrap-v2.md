name: "Resume Website Bootstrap - Context-Rich Implementation PRP"
description: |

## Purpose

Complete bootstrap of a modern personal resume website using cutting-edge tech stack with comprehensive validation loops for one-pass AI implementation success.

## Core Principles

1. **Context is King**: Include ALL necessary documentation, examples, and caveats for Next.js 15 + React 19 + Tailwind 4
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix iteratively
3. **Information Dense**: Use specific patterns and commands for the modern stack
4. **Progressive Success**: Start with basics, validate, then enhance with advanced features
5. **Global rules**: Follow all modern best practices for the technology stack

---

## Goal

Build a production-ready personal resume website that showcases modern web development skills using Next.js 15, React 19, Tailwind CSS 4, Shadcn UI, with Bun package management, comprehensive linting, and automated GitHub Pages deployment.

## Why

- **Personal Branding**: Professional online presence for career opportunities
- **Technology Showcase**: Demonstrate expertise with latest web technologies
- **Performance**: Lightning-fast static site with excellent SEO
- **Automation**: Complete CI/CD pipeline with code quality enforcement
- **Accessibility**: Modern, responsive design following web standards

## What

A single-page resume website with:

- Modern component architecture using React 19 features
- Responsive design with Tailwind CSS 4
- SEO optimization for GitHub Pages hosting
- Automated deployment pipeline
- Professional resume layout with personal information, experience, skills, projects
- Fast development experience with Turbopack

### Success Criteria

- [ ] Development server starts in <5 seconds with Turbopack
- [ ] Static build deploys successfully to GitHub Pages
- [ ] Lighthouse SEO score >95, Performance >90
- [ ] All linting/formatting rules pass in pre-commit hooks
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Page load time <2 seconds on GitHub Pages

## All Needed Context

### Documentation & References

```yaml
# MUST READ - Include these in your context window
- url: https://nextjs.org/docs/app/getting-started/installation
  why: Next.js 15 installation process, Turbopack setup, TypeScript configuration

- url: https://react.dev/blog/2024/12/05/react-19
  why: React 19 new features, Actions, form improvements, migration patterns

- url: https://tailwindcss.com/docs/installation/using-vite
  why: Tailwind CSS 4 setup with new @tailwindcss/vite plugin architecture

- url: https://ui.shadcn.com/docs/react-19
  why: Shadcn UI compatibility with React 19, installation with --force flags

- url: https://ui.shadcn.com/docs/installation
  why: Shadcn UI installation process, component integration patterns

- url: https://bun.sh/guides/ecosystem/nextjs
  why: Bun package manager integration with Next.js, Node.js runtime fallback

- url: https://nextjs.org/docs/app/api-reference/config/next-config-js/output
  why: Static export configuration for GitHub Pages deployment

- url: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
  why: GitHub Pages setup and configuration for Next.js static sites
```

### Current Codebase Tree

```bash
.
├── .claude
│   └── commands
│       ├── execute-prp.md
│       └── generate-prp.md
├── PRPs
│   ├── resume-bootstrap.md
│   └── templates
│       └── prp_base.md
└── spec.md
```

### Desired Codebase Tree with Files to be Added

```bash
resume/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment pipeline
├── .husky/
│   ├── pre-commit                  # Husky pre-commit hook
│   └── _/                          # Husky internal files
├── .next/                          # Next.js build output (ignored)
├── public/
│   ├── .nojekyll                   # Disable Jekyll processing
│   ├── favicon.ico                 # Site favicon
│   ├── resume.pdf                  # Downloadable resume
│   └── images/                     # Profile pictures, project images
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind imports and global styles
│   │   ├── layout.tsx              # Root layout with SEO metadata
│   │   ├── page.tsx                # Main resume page
│   │   └── not-found.tsx           # 404 page
│   ├── components/
│   │   ├── ui/                     # Shadcn UI components
│   │   ├── resume/
│   │   │   ├── Header.tsx          # Name, title, contact info
│   │   │   ├── About.tsx           # Professional summary
│   │   │   ├── Experience.tsx      # Work experience timeline
│   │   │   ├── Skills.tsx          # Technical skills grid
│   │   │   ├── Projects.tsx        # Portfolio projects
│   │   │   └── Contact.tsx         # Contact form/links
│   │   └── layout/
│   │       ├── Navigation.tsx      # Site navigation
│   │       └── Footer.tsx          # Site footer
│   ├── lib/
│   │   ├── utils.ts                # Utility functions (cn, etc.)
│   │   ├── resume-data.ts          # Resume content data
│   │   └── metadata.ts             # SEO metadata configuration
│   └── types/
│       └── resume.ts               # TypeScript interfaces
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore patterns
├── .lintstagedrc.js                # Lint-staged configuration
├── .prettierrc                     # Prettier configuration
├── bun.lockb                       # Bun lockfile
├── components.json                 # Shadcn UI configuration
├── next.config.js                  # Next.js configuration with static export
├── package.json                    # Project dependencies and scripts
├── postcss.config.js               # PostCSS configuration for Tailwind
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Known Gotchas & Library Quirks

```typescript
// CRITICAL: Bun Integration
// Use Bun for package management ONLY, Node.js for runtime
// Turbopack has compatibility issues with Bun APIs

// CRITICAL: React 19 Changes
// Remove forwardRef for new function components
// Use <Context> instead of <Context.Provider>
// New hooks: useActionState, useOptimistic, useFormStatus

// CRITICAL: Tailwind CSS 4
// New @tailwindcss/vite plugin architecture
// Import syntax: @import "tailwindcss"
// Zero-runtime approach with static CSS generation

// CRITICAL: Shadcn UI + React 19
// Install with --force flag for npm due to peer dependency warnings
// Bun handles peer dependencies better

// CRITICAL: GitHub Pages + Next.js
// Requires output: "export" in next.config.js
// Need .nojekyll file to prevent Jekyll processing
// Configure basePath for GitHub repository sub-path
// Disable image optimization: images: { unoptimized: true }

// CRITICAL: Static Export Limitations
// No server-side features (API routes, middleware)
// No dynamic imports with SSR
// No runtime image optimization
```

## Implementation Blueprint

### Data Models and Structure

```typescript
// Core resume data structure for type safety
interface ResumeData {
  personal: {
    name: string
    title: string
    email: string
    location: string
    website?: string
    linkedin?: string
    github?: string
  }
  summary: string
  experience: Experience[]
  skills: SkillCategory[]
  projects: Project[]
  education: Education[]
}

interface Experience {
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
}
```

### List of Tasks to Complete (In Order)

```yaml
Task 1 - Project Initialization:
CREATE package.json:
  - PATTERN: Use latest stable versions of all dependencies
  - CRITICAL: Include both npm and bun script variations
  - INJECT: lint-staged configuration
  - PRESERVE: Standard Next.js script structure

CREATE bun.lockb:
  - RUN: bun install
  - VERIFY: All peer dependencies resolved

Task 2 - Next.js Configuration:
CREATE next.config.js:
  - PATTERN: Static export configuration for GitHub Pages
  - CRITICAL: Set output: "export", disable image optimization
  - INJECT: basePath configuration for GitHub Pages
  - PRESERVE: Turbopack compatibility

CREATE tsconfig.json:
  - MIRROR: Next.js 15 TypeScript configuration
  - MODIFY: Include src/ directory structure
  - KEEP: Strict type checking enabled

Task 3 - Tailwind CSS Setup:
CREATE tailwind.config.ts:
  - PATTERN: Tailwind CSS 4 configuration with @tailwindcss/vite
  - CRITICAL: Configure content paths for src/ directory
  - INJECT: Custom color scheme and typography
  - PRESERVE: Shadcn UI compatibility

CREATE postcss.config.js:
  - PATTERN: Standard PostCSS configuration
  - INJECT: Tailwind CSS plugin

CREATE src/app/globals.css:
  - PATTERN: @import "tailwindcss" syntax
  - INJECT: Custom CSS variables
  - PRESERVE: Shadcn UI styles compatibility

Task 4 - Shadcn UI Integration:
CREATE components.json:
  - RUN: bunx shadcn@latest init --force
  - PATTERN: React 19 compatible configuration
  - CRITICAL: Use src/ directory structure
  - PRESERVE: TypeScript and Tailwind integration

INSTALL: Core Shadcn UI components
  - RUN: bunx shadcn@latest add button card badge
  - PATTERN: Install commonly used components
  - PRESERVE: React 19 compatibility

Task 5 - Code Quality Setup:
CREATE .eslintrc.json:
  - PATTERN: Next.js 15 + React 19 ESLint rules
  - INJECT: Additional rules for code quality
  - PRESERVE: Next.js built-in configuration

CREATE .prettierrc:
  - PATTERN: Standard Prettier configuration
  - INJECT: Project-specific formatting rules

CREATE .lintstagedrc.js:
  - PATTERN: Run ESLint and Prettier on staged files
  - INJECT: TypeScript checking
  - PRESERVE: Performance optimization

INSTALL: Husky pre-commit hooks
  - RUN: bunx husky init
  - CREATE: .husky/pre-commit with lint-staged
  - VERIFY: Hooks execute properly

Task 6 - App Structure Creation:
CREATE src/app/layout.tsx:
  - PATTERN: App Router root layout
  - INJECT: SEO metadata configuration
  - PRESERVE: Static export compatibility
  - CRITICAL: Include Tailwind CSS imports

CREATE src/app/page.tsx:
  - PATTERN: Main resume page component
  - INJECT: Resume sections integration
  - PRESERVE: Static generation

CREATE src/app/not-found.tsx:
  - PATTERN: Custom 404 page
  - PRESERVE: Static export compatibility

Task 7 - Resume Data Structure:
CREATE src/types/resume.ts:
  - PATTERN: TypeScript interfaces for resume data
  - INJECT: Comprehensive type definitions
  - PRESERVE: Type safety

CREATE src/lib/resume-data.ts:
  - PATTERN: Structured resume content
  - INJECT: Personal resume information
  - PRESERVE: Type safety with resume.ts interfaces

CREATE src/lib/utils.ts:
  - PATTERN: Utility functions (cn, etc.)
  - MIRROR: Shadcn UI utility patterns
  - PRESERVE: TypeScript compatibility

Task 8 - Resume Components:
CREATE src/components/resume/Header.tsx:
  - PATTERN: Name, title, contact information display
  - INJECT: Social media links
  - PRESERVE: Responsive design

CREATE src/components/resume/About.tsx:
  - PATTERN: Professional summary section
  - PRESERVE: Typography and spacing

CREATE src/components/resume/Experience.tsx:
  - PATTERN: Work experience timeline
  - INJECT: Technology badges
  - PRESERVE: Responsive layout

CREATE src/components/resume/Skills.tsx:
  - PATTERN: Technical skills grid
  - INJECT: Skill categories and proficiency
  - PRESERVE: Visual hierarchy

CREATE src/components/resume/Projects.tsx:
  - PATTERN: Portfolio projects showcase
  - INJECT: Project links and descriptions
  - PRESERVE: Image optimization compatibility

CREATE src/components/resume/Contact.tsx:
  - PATTERN: Contact information and links
  - PRESERVE: Static export compatibility

Task 9 - SEO Optimization:
CREATE src/lib/metadata.ts:
  - PATTERN: Next.js 15 metadata API
  - INJECT: SEO-optimized metadata
  - PRESERVE: Static generation compatibility

MODIFY src/app/layout.tsx:
  - INJECT: JSON-LD structured data
  - PRESERVE: SEO best practices

Task 10 - GitHub Pages Setup:
CREATE public/.nojekyll:
  - PATTERN: Empty file to disable Jekyll
  - CRITICAL: Required for GitHub Pages

CREATE .github/workflows/deploy.yml:
  - PATTERN: GitHub Actions workflow for deployment
  - INJECT: Bun package manager support
  - PRESERVE: Static export deployment

Task 11 - Final Validation:
RUN: Complete build and deployment test
  - VERIFY: All validation gates pass
  - FIX: Any linting or type errors
  - TEST: Local development and production builds
```

### Per Task Pseudocode

```typescript
// Task 1 - Package.json structure
{
  "name": "resume-website",
  "scripts": {
    "dev": "next dev --turbo",    // CRITICAL: Enable Turbopack
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "prepare": "husky"            // CRITICAL: Auto-setup husky
  },
  "dependencies": {
    "next": "^15.0.0",           // CRITICAL: Latest Next.js 15
    "react": "^19.0.0",          // CRITICAL: React 19
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0", // CRITICAL: New Tailwind plugin
    "tailwindcss": "^4.0.0",
    // ... other dev dependencies
  }
}

// Task 3 - Tailwind Configuration
// PATTERN: New Tailwind CSS 4 structure
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // CRITICAL: Correct content paths
  ],
  theme: {
    extend: {
      // PATTERN: Custom theme extensions
      colors: {
        // Professional color scheme
      }
    },
  },
  plugins: [],
}

// Task 6 - Layout Component Structure
// PATTERN: Next.js 15 App Router layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* CRITICAL: Include Tailwind classes */}
        {children}
      </body>
    </html>
  )
}

// PATTERN: SEO metadata generation
export const metadata = {
  title: "Your Name - Software Developer Resume",
  description: "Professional resume showcasing experience in...",
  // CRITICAL: GitHub Pages compatible URLs
}
```

### Integration Points

```yaml
PACKAGE_MANAGER:
  - tool: Bun for package management, Node.js for runtime
  - pattern: "bun install" for dependencies, "npm run dev" for development

STATIC_EXPORT:
  - config: next.config.js with output: "export"
  - pattern: "next build" generates static files in out/ directory

GITHUB_PAGES:
  - deploy: GitHub Actions workflow
  - pattern: Deploy out/ directory to gh-pages branch

SEO:
  - add: JSON-LD structured data in layout
  - pattern: generateMetadata for each page component
```

## Validation Loop

### Level 1: Syntax & Style

```bash
# Run these FIRST - fix any errors before proceeding
bun run lint                    # ESLint validation
bun run format                  # Prettier formatting
npx tsc --noEmit               # TypeScript type checking

# Expected: No errors. If errors, READ the error message and fix.
```

### Level 2: Development Server

```bash
# Test development environment
bun run dev                    # Should start Turbopack dev server
# Expected: Server starts at http://localhost:3000 in <5 seconds

# Test build process
bun run build                  # Should generate static export
# Expected: Build completes without errors, generates out/ directory
```

### Level 3: Component Integration Tests

```bash
# Test component rendering
curl http://localhost:3000/    # Should return HTML with resume content
# Expected: Valid HTML with meta tags and structured content

# Test responsive design
# Manual: Check mobile/tablet/desktop layouts
# Expected: Responsive design works across all breakpoints
```

### Level 4: Pre-commit Hooks

```bash
# Test code quality automation
git add .
git commit -m "test commit"    # Should run lint-staged
# Expected: All pre-commit hooks pass

# If failing: Read error output, fix issues, retry
```

### Level 5: Deployment Validation

```bash
# Test GitHub Pages deployment (after pushing to GitHub)
# Manual: Check GitHub Actions workflow
# Expected: Deployment completes successfully

# Test live site
curl https://username.github.io/resume/
# Expected: Site loads with correct content and SEO meta tags
```

## Final Validation Checklist

- [ ] All dependencies install without peer dependency errors: `bun install`
- [ ] Development server starts with Turbopack: `bun run dev`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No linting errors: `bun run lint`
- [ ] Prettier formatting applied: `bun run format`
- [ ] Static build succeeds: `bun run build`
- [ ] Pre-commit hooks work: `git add . && git commit -m "test"`
- [ ] GitHub Pages deployment succeeds (manual check)
- [ ] Lighthouse SEO score >95 (manual check)
- [ ] Responsive design works on all device sizes (manual check)

---

## Anti-Patterns to Avoid

- ❌ Don't use server-side features with static export
- ❌ Don't skip TypeScript configuration - type safety is critical
- ❌ Don't ignore peer dependency warnings - they indicate compatibility issues
- ❌ Don't use runtime image optimization with static export
- ❌ Don't hardcode personal information - use data structure
- ❌ Don't skip SEO optimization - it's crucial for professional presence
- ❌ Don't ignore responsive design - mobile-first is essential
- ❌ Don't commit without running pre-commit hooks
- ❌ Don't deploy without testing build locally first
