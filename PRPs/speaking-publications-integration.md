name: "Speaking & Publications Integration PRP"
description: |

## Purpose

Integrate comprehensive speaking and publications data from speaking-publications.md into the existing resume website, creating both an enhanced main resume page and a dedicated speaking/publications showcase page. This implementation ensures data sharing, proper SEO optimization, and design consistency with existing patterns.

## Core Principles

1. **Context is King**: Leverage existing data structures and component patterns
2. **Validation Loops**: Use existing lint-staged setup for validation
3. **Information Dense**: Rich speaking/publications data with proper categorization
4. **Progressive Success**: Update data structures, enhance main page, create new page, optimize SEO
5. **Global rules**: Follow existing TypeScript, React 19, Next.js 15 patterns

---

## Goal

Create a comprehensive speaking and publications integration that:

- Updates the main resume page with enhanced speaking/publications data
- Creates a dedicated /speaking page showcasing detailed speaking and publication record
- Shares data structures between pages to maintain consistency
- Ensures all external links open in new tabs
- Maintains design consistency with existing shadcn/ui patterns
- Provides comprehensive SEO optimization including sitemap and structured data

## Why

- **Business value**: Showcase comprehensive speaking experience and thought leadership
- **Professional credibility**: Highlight extensive industry contributions and expertise
- **SEO benefits**: Better visibility for speaking engagements and publications
- **User experience**: Dedicated page for detailed speaking portfolio while maintaining clean main resume

## What

A two-page solution with shared data structures:

1. **Enhanced main resume**: Updated with key speaking highlights
2. **Dedicated speaking page**: Comprehensive showcase of talks, publications, contributions
3. **Shared data layer**: TypeScript interfaces and data structures
4. **SEO optimization**: Enhanced metadata, structured data, sitemap generation

### Success Criteria

- [ ] Main resume page shows enhanced speaking/publications highlights
- [ ] New /speaking page displays comprehensive speaking and publication record
- [ ] All external links open in new tabs
- [ ] Design maintains consistency with existing shadcn/ui patterns
- [ ] SEO metadata properly configured for both pages
- [ ] Lint-staged validation passes for all new code
- [ ] Build process generates static export successfully

## All Needed Context

### Documentation & References

```yaml
# MUST READ - Include these in your context window
- file: /src/data/resume.ts
  why: Existing data structures, interfaces, and patterns to extend

- file: /src/app/page.tsx
  why: Component patterns, responsive design, section layouts to mirror

- file: /src/app/layout.tsx
  why: SEO metadata patterns, structured data setup to extend

- file: /src/components/ui/badge.tsx
  why: Badge component variants (success, warning, info, secondary)

- file: /src/components/ui/card.tsx
  why: Card component structure for consistent layouts

- file: /speaking-publications.md
  why: Source data for comprehensive speaking and publications content

- url: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
  why: Next.js sitemap generation for SEO optimization

- url: https://schema.org/Person
  why: Structured data enhancement for speaking engagements
```

### Current Codebase Structure

```bash
src/
├── app/
│   ├── layout.tsx          # SEO metadata, structured data
│   ├── page.tsx            # Main resume page
│   ├── globals.css         # Tailwind CSS setup
│   └── not-found.tsx       # 404 page
├── components/
│   └── ui/
│       ├── badge.tsx       # Badge variants (info, success, warning, secondary)
│       ├── button.tsx      # Button component
│       └── card.tsx        # Card components (Header, Content, Footer, etc.)
├── data/
│   └── resume.ts          # All data structures and resume data
└── lib/
    └── utils.ts           # Utility functions (cn for className merging)
```

### Desired Codebase Structure with Additions

```bash
src/
├── app/
│   ├── layout.tsx          # Enhanced SEO metadata
│   ├── page.tsx            # Enhanced main resume page
│   ├── speaking/
│   │   └── page.tsx        # NEW: Dedicated speaking/publications page
│   ├── sitemap.ts          # NEW: Dynamic sitemap generation
│   └── robots.ts           # NEW: Robots.txt configuration
├── components/
│   ├── ui/                 # Existing shadcn components
│   └── sections/
│       ├── speaking-highlights.tsx    # NEW: Reusable speaking highlights component
│       └── publication-list.tsx       # NEW: Reusable publication list component
├── data/
│   └── resume.ts          # ENHANCED: Extended with comprehensive speaking data
└── lib/
    └── utils.ts           # Existing utilities
```

### Known Gotchas & Library Quirks

```typescript
// CRITICAL: Next.js 15 with static export requires specific configurations
// - All routes must be pre-built at build time
// - Dynamic routes need generateStaticParams
// - Images need unoptimized: true flag

// CRITICAL: Tailwind 4.0 beta syntax differences
// - Uses new CSS variable system with hsl() functions
// - Custom properties defined in globals.css

// CRITICAL: React 19 patterns
// - New JSX transform, no need for React import in components
// - Enhanced TypeScript support for component props

// CRITICAL: External links must use target="_blank" rel="noopener noreferrer"
// Pattern already established in existing page.tsx

// CRITICAL: Badge variants are predefined
// Available: default, secondary, destructive, outline, success, warning, info
```

## Implementation Blueprint

### Data Models and Structure

Extend existing interfaces to support comprehensive speaking and publications data:

```typescript
// Extend existing Publication interface
export interface Publication {
  title: string
  type: "paper" | "article" | "book" | "certificate" | "blog" | "thesis"
  venue?: string
  date?: string
  url?: string
  views?: string // For blog articles with view counts
  description?: string
}

// New interfaces for speaking data
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

// Extend ResumeData interface
export interface ResumeData {
  // ... existing properties
  talks: Talk[]
  awards: Award[]
  contributions: Contribution[]
  // Enhanced publications with more data
  publications: Publication[]
}
```

### Tasks in Implementation Order

```yaml
Task 1 - Data Structure Enhancement:
MODIFY src/data/resume.ts:
  - EXTEND existing Publication interface with views, description fields
  - ADD new Talk, Award, Contribution interfaces
  - EXTEND ResumeData interface with talks, awards, contributions arrays
  - POPULATE with data from speaking-publications.md
  - PRESERVE all existing data and patterns

Task 2 - Reusable Components Creation:
CREATE src/components/sections/speaking-highlights.tsx:
  - MIRROR responsive card patterns from existing page.tsx
  - USE existing Card, Badge components
  - IMPLEMENT external link handling (target="_blank")
  - SUPPORT both "highlight" and "full" display modes

CREATE src/components/sections/publication-list.tsx:
  - MIRROR publication section patterns from page.tsx
  - EXTEND to handle blog posts with view counts
  - GROUP publications by type (papers, articles, blogs, certificates)
  - USE existing Badge component for categorization

Task 3 - Main Resume Page Enhancement:
MODIFY src/app/page.tsx:
  - REPLACE existing publications section with enhanced highlights
  - ADD speaking highlights section using new component
  - MAINTAIN existing responsive design patterns
  - ENSURE all external links use target="_blank"

Task 4 - Speaking Page Creation:
CREATE src/app/speaking/page.tsx:
  - IMPLEMENT comprehensive speaking and publications showcase
  - USE shared components from Task 2
  - MIRROR design patterns and responsive behavior from main page
  - ORGANIZE content in logical sections: talks, publications, contributions, awards

Task 5 - SEO Enhancement:
MODIFY src/app/layout.tsx:
  - ENHANCE structured data with speaking engagements
  - ADD keywords for speaking, publications, thought leadership
  - UPDATE OpenGraph and Twitter card metadata

CREATE src/app/sitemap.ts:
  - GENERATE dynamic sitemap with main and speaking pages
  - FOLLOW Next.js 15 sitemap conventions

CREATE src/app/robots.ts:
  - CONFIGURE robots.txt for proper crawling
  - INCLUDE sitemap reference

Task 6 - Build Validation:
RUN build process:
  - VALIDATE static export generation
  - CHECK all routes build successfully
  - VERIFY external links work in production build
```

### Task 1 Pseudocode - Data Enhancement

```typescript
// PATTERN: Extend existing interfaces, don't replace
interface Publication {
  // ... existing fields
  views?: string // For blog articles like "(2.3K views)"
  description?: string // For detailed descriptions
}

interface Talk {
  title: string
  venue: string // Host organization
  date: string
  type: "keynote" | "invited" | "workshop" | "internal" | "briefing"
  audience: string // Target audience description
  description?: string
  materials?: {
    slides?: string // Google Drive, Canva, etc.
    video?: string // If available
    coverage?: string // Media coverage links
  }
}

// CRITICAL: Parse speaking-publications.md systematically
// - Talks & Workshops section → Talk[]
// - Community section → Contribution[]
// - Writings sections → Publication[] (blogs, academic, books)
// - Speech & Debate Awards → Award[]
```

### Task 4 Pseudocode - Speaking Page Structure

```tsx
export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with professional summary */}
        <section className="text-center mb-12">
          {/* Mirror existing header patterns */}
        </section>

        {/* Speaking Highlights */}
        <section className="mb-12">
          <SpeakingHighlights mode="full" />
        </section>

        {/* Publications & Writings */}
        <section className="mb-12">
          <PublicationList mode="full" />
        </section>

        {/* Open Source Contributions */}
        <section className="mb-12">
          {/* Enhanced contribution showcase */}
        </section>

        {/* English Proficiency */}
        <section>{/* Speaking awards and recognition */}</section>
      </div>
    </main>
  )
}
```

### Integration Points

```yaml
ROUTING:
  - add: /speaking route via app router
  - pattern: Static generation with Next.js 15 app directory

SEO:
  - extend: metadata in layout.tsx for speaking page
  - add: structured data for speaking engagements
  - generate: sitemap including /speaking route

COMPONENTS:
  - reuse: existing Badge, Card, responsive patterns
  - extend: create reusable SpeakingHighlights and PublicationList
  - maintain: consistent design tokens and spacing

EXTERNAL LINKS:
  - pattern: target="_blank" rel="noopener noreferrer"
  - applies to: blog links, GitHub repos, slides, coverage
```

## Validation Loop

### Level 1: Syntax & Style

```bash
# CRITICAL: Run these FIRST - fix any errors before proceeding
npm run lint                    # Next.js ESLint configuration
npm run type-check             # TypeScript compilation check
npm run format                 # Prettier formatting

# Expected: No errors. If errors, READ the error message and fix.
```

### Level 2: Build Validation

```bash
# Test static export build
npm run build

# Expected:
# - Successful static export generation
# - All routes pre-rendered
# - No build errors or warnings

# If failing: Check Next.js build output for specific errors
# Common issues: missing generateMetadata, incorrect imports
```

### Level 3: Manual Validation

```bash
# Serve the built site
npm start

# Test main page at http://localhost:3000
# - Verify enhanced publications/speaking sections
# - Check all external links open in new tabs
# - Validate responsive design on mobile/desktop

# Test speaking page at http://localhost:3000/speaking
# - Verify comprehensive speaking showcase
# - Check component reuse and design consistency
# - Validate all external links work correctly

# Test SEO
# View page source for both routes
# - Verify proper meta tags and structured data
# - Check sitemap.xml accessibility
```

## Final Validation Checklist

- [ ] All tests pass: `npm run build` succeeds
- [ ] No linting errors: `npm run lint` passes
- [ ] No type errors: `npm run type-check` passes
- [ ] Manual test successful: Both pages render correctly
- [ ] External links open in new tabs with proper security attributes
- [ ] Mobile responsive design maintained
- [ ] SEO metadata complete for both pages
- [ ] Sitemap includes all routes
- [ ] Design consistency with existing shadcn/ui patterns

---

## Anti-Patterns to Avoid

- ❌ Don't create new design patterns - use existing shadcn/ui components
- ❌ Don't break existing data structures - extend interfaces carefully
- ❌ Don't forget target="\_blank" for external links
- ❌ Don't skip TypeScript types - maintain full type safety
- ❌ Don't hardcode data - use structured data from resume.ts
- ❌ Don't ignore responsive design - maintain mobile-first approach
- ❌ Don't skip SEO optimization - enhance metadata for both pages

## Confidence Score: 9/10

High confidence due to:

- Comprehensive codebase analysis completed
- Existing patterns clearly identified and documented
- Data source (speaking-publications.md) thoroughly analyzed
- Clear implementation path with reusable components
- Validation steps cover syntax, build, and manual testing
- SEO requirements clearly defined with Next.js 15 patterns
