# Resume Data Population PRP

## Goal

Populate the Next.js 15 resume website with real data from `resume.md`, transforming it from a template with placeholder content ("John Doe") to Schwannden Kuo's professional resume while improving UI/UX components and ensuring all external links open in new tabs.

## Why

- **Professional Representation**: Replace placeholder data with authentic professional information
- **Enhanced User Experience**: Optimize UI components for real data structure and improve navigation
- **SEO Optimization**: Update metadata and structured data with accurate personal and professional information
- **Link Usability**: Ensure external links follow web standards by opening in new tabs

## What

Transform the current template-based resume website into a dynamic, data-driven application that:

- Populates all sections with Schwannden Kuo's professional information
- Improves UI/UX components based on real data requirements
- Implements proper external link handling
- Maintains SEO optimization with accurate metadata
- Preserves existing design patterns and component structure

### Success Criteria

- [ ] All placeholder "John Doe" content replaced with Schwannden Kuo's information
- [ ] Professional summary, experience, skills, projects, and contact information populated from resume.md
- [ ] External links (LinkedIn, Medium, GitHub) open in new tabs with proper security attributes
- [ ] UI components optimized for real data (badges, cards, typography)
- [ ] Metadata and structured data updated for SEO
- [ ] Build and lint checks pass without errors

## All Needed Context

### Documentation & References

```yaml
- file: resume.md
  why: Source of all professional data to be populated

- file: src/app/page.tsx
  why: Main component containing all resume sections that need data updates

- file: src/app/layout.tsx
  why: Contains metadata, SEO, and structured data that needs updating

- url: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
  why: Best practices for data handling in Next.js 15

- url: https://nextjs.org/docs/app/guides/mdx
  why: If markdown parsing is needed (alternative approach)

- file: src/components/ui/badge.tsx
  why: Badge variants for skills and technologies display

- file: src/components/ui/card.tsx
  why: Card components for project and experience sections
```

### Current Codebase Tree

```bash
.
├── PRPs
│   ├── resume-bootstrap-v2.md
│   └── templates
│       └── prp_base.md
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx      # SEO metadata to update
│   │   ├── not-found.tsx
│   │   └── page.tsx        # Main resume content to populate
│   ├── components
│   │   └── ui
│   │       ├── badge.tsx   # For skills/technologies
│   │       ├── button.tsx
│   │       └── card.tsx    # For projects/experience
│   └── lib
│       └── utils.ts
├── resume.md               # SOURCE DATA
├── spec.md
├── public
│   ├── favicon.ico
│   └── resume.pdf         # May need updating
└── package.json           # Contains lint-staged commands
```

### Known Gotchas & Library Quirks

```typescript
// CRITICAL: External links already use target="_blank" pattern in codebase
// Example from src/app/page.tsx:212-217
<a
  href="https://linkedin.com/in/johndoe"
  target="_blank"
  rel="noopener noreferrer"  // Security best practice
  className="..."
>

// CRITICAL: Using Next.js 15 with React 19 - uses new patterns
// - No automatic caching by default (cache: 'no-store')
// - Server Components are default
// - Turbopack for dev mode (--turbo flag in package.json)

// CRITICAL: Tailwind CSS 4 beta being used - newer class names
// - Uses design tokens and modern utility classes
// - May have different responsive breakpoints

// CRITICAL: Component imports use @/ alias (see tsconfig.json)
import { cn } from "@/lib/utils"

// CRITICAL: Badge component has predefined variants
// - success: green-100/green-800
// - info: blue-100/blue-800
// - warning: yellow-100/yellow-800
```

## Implementation Blueprint

### Data Structure Mapping

Map resume.md content to existing UI sections:

```typescript
// Data extraction from resume.md:
interface ResumeData {
  name: string // "Schwannden Kuo"
  email: string // "schwannden@gmail.com"
  phone: string // "(886) 972006041"
  linkedin: string // LinkedIn URL
  title: string // "Software and System architect"
  summary: string // Professional summary paragraph
  experience: Experience[]
  skills: SkillCategory[]
  projects: Project[]
  education: Education[]
  certifications: string[]
  publications: string[]
}
```

### List of Tasks (In Order)

```yaml
Task 1 - Data Extraction:
  CREATE src/data/resume.ts:
    - EXTRACT structured data from resume.md
    - DEFINE TypeScript interfaces for type safety
    - ORGANIZE data by sections (experience, skills, projects, etc.)
    - PRESERVE all URLs and external links

Task 2 - Header & Contact Update:
  MODIFY src/app/page.tsx lines 7-13:
    - REPLACE "John Doe" with "Schwannden Kuo"
    - REPLACE "Full Stack Developer" with "Software and System architect"
    - UPDATE email to "schwannden@gmail.com"
    - UPDATE phone to "(886) 972006041"
    - ADD location if needed

Task 3 - Professional Summary Update:
  MODIFY src/app/page.tsx lines 22-28:
    - REPLACE placeholder summary with Schwannden's professional summary
    - MAINTAIN existing paragraph structure and styling

Task 4 - Skills Section Restructure:
  MODIFY src/app/page.tsx lines 32-94:
    - ANALYZE Schwannden's technical skills from resume.md
    - REORGANIZE into logical categories (Cloud/DevOps, Languages, Tools)
    - USE Badge component variants appropriately
    - UPDATE skill badges to match real expertise

Task 5 - Experience Section Population:
  MODIFY src/app/page.tsx lines 96-139:
    - REPLACE placeholder jobs with real experience from resume.md
    - MAINTAIN timeline structure with proper dates
    - PRESERVE bullet point formatting
    - ENSURE company names and roles are accurate
    - ADD more experience entries as needed

Task 6 - Projects Section Enhancement:
  MODIFY src/app/page.tsx lines 141-191:
    - REPLACE placeholder projects with real projects from resume.md
    - ADD GitHub links where available
    - ENSURE external links use target="_blank" pattern
    - UPDATE technology badges to match project tech stack

Task 7 - Contact Section Update:
  MODIFY src/app/page.tsx lines 193-227:
    - UPDATE email link to schwannden@gmail.com
    - UPDATE LinkedIn to real LinkedIn profile
    - ENSURE Medium profile link is added if available
    - ADD GitHub profile link
    - VERIFY all external links use proper target="_blank" + rel="noopener noreferrer"

Task 8 - SEO & Metadata Update:
  MODIFY src/app/layout.tsx:
    - UPDATE title and description for Schwannden Kuo
    - MODIFY keywords to match actual skills and expertise
    - UPDATE structured data (JSON-LD) with real information
    - CHANGE metadataBase URL if different
    - UPDATE Open Graph and Twitter meta tags

Task 9 - Additional Sections:
  ADD new sections if needed in src/app/page.tsx:
    - Certifications section (Google Cloud certs mentioned)
    - Publications section (research papers)
    - Volunteer work section
    - Education section (NCTU degrees)

Task 10 - UI/UX Improvements:
  ENHANCE components based on real data:
    - ADJUST responsive breakpoints if needed
    - OPTIMIZE typography for longer content
    - IMPROVE spacing and layout for additional sections
    - ENSURE proper color coding for different categories
```

### Integration Points

```yaml
METADATA:
  - update: src/app/layout.tsx metadata object
  - pattern: "title: 'Schwannden Kuo - Software and System Architect'"
  - keywords: ["Cloud Architecture", "DevOps", "Python", "Scala", "TypeScript"]

EXTERNAL_LINKS:
  - pattern: target="_blank" rel="noopener noreferrer"
  - apply_to: LinkedIn, Medium, GitHub, project links
  - security: Always include rel attributes for external links

STYLING:
  - maintain: existing Tailwind classes and responsive design
  - enhance: badge variants for different skill categories
  - preserve: current color schemes and visual hierarchy
```

## Validation Loop

### Level 1: Syntax & Style

```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                    # Next.js linting
npm run type-check             # TypeScript checking
npm run format                 # Prettier formatting

# Expected: No errors. If errors exist, READ and fix them.
```

### Level 2: Data Validation

```bash
# Verify all data is populated correctly
npm run build                  # Ensure build succeeds with new data

# Manual verification checklist:
# - All "John Doe" references replaced
# - Email links work correctly
# - External links open in new tabs
# - All resume.md content represented
# - No broken links or missing data
```

### Level 3: Development Server Testing

```bash
# Start development server and test functionality
npm run dev

# Test in browser:
# - Navigate to http://localhost:3000
# - Verify all sections load with real data
# - Test all external links (LinkedIn, Medium, GitHub)
# - Check responsive design on mobile/desktop
# - Validate all interactive elements work
```

### Level 4: Production Build Testing

```bash
# Test production build
npm run build && npm run start

# Test static export if needed
# Check all optimizations are applied
# Verify no console errors in browser
```

## Final Validation Checklist

- [ ] All placeholder content replaced: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] No type errors: `npm run type-check`
- [ ] External links open in new tabs with proper security attributes
- [ ] All resume.md content accurately represented
- [ ] SEO metadata updated with correct information
- [ ] Responsive design works across devices
- [ ] Performance optimizations maintained
- [ ] PDF resume link works (public/resume.pdf updated if needed)

## Final Git Validation

```bash
git add -A                    # Stage all changes
npx --no-install lint-staged  # Run lint-staged checks (from package.json)

# Expected: All checks pass
# If any fail: Fix issues and re-run
```

---

## Anti-Patterns to Avoid

- ❌ Don't hardcode data directly in components - use structured data approach
- ❌ Don't break existing responsive design patterns
- ❌ Don't remove security attributes from external links (rel="noopener noreferrer")
- ❌ Don't skip TypeScript type definitions for data structures
- ❌ Don't ignore lint-staged failures - fix them
- ❌ Don't modify package.json scripts or dependencies unless necessary
- ❌ Don't break existing component patterns (Badge variants, Card usage)

## PRP Confidence Score: 9/10

This PRP provides comprehensive context including:

- ✅ Detailed codebase analysis with specific file/line references
- ✅ Clear data mapping from resume.md to UI components
- ✅ Executable validation commands from package.json
- ✅ External link best practices research
- ✅ Next.js 15 and React 19 considerations
- ✅ TypeScript patterns and component usage examples
- ✅ Specific gotchas and library quirks identified
- ✅ Step-by-step task breakdown with file modifications

The only uncertainty is potential edge cases in resume.md data parsing, but the structured approach should handle most scenarios effectively.
