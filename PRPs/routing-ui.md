# PRP: Routing UI Improvements

## Overview

Implement comprehensive routing UI improvements for the resume website including:

1. Publications & Writings section linking to speaking page
2. New /contributions page for open source contributions
3. Cross-linking between pages
4. Dual routing (/ and /resume to same page)
5. Mobile-friendly hamburger navigation menu

## Feature Requirements Analysis

Based on spec.md:

- **Publications linking**: Publications & Writings in resume page should link to speaking page
- **Contributions page**: Create new /contributions route and page, link from speaking and resume pages
- **Root routing**: Both "/" and "/resume" should route to resume page
- **Navigation menu**: Mobile-friendly hamburger menu on top right for all pages

## Codebase Context & Patterns

### Current Architecture

- **Framework**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS 4 beta with custom design system
- **UI Components**: shadcn/ui patterns (Badge, Button, Card)
- **Data Layer**: Centralized in `src/data/resume.ts` with TypeScript interfaces
- **Static Export**: Configured for GitHub Pages deployment

### Existing File Structure

```
src/
  app/
    layout.tsx           # Root layout with comprehensive SEO
    page.tsx            # Main resume page
    speaking/
      page.tsx          # Speaking engagements page
  components/
    ui/                 # shadcn/ui components
    sections/           # Specialized components
  data/
    resume.ts          # All resume data with TypeScript interfaces
```

### Current Components Available

- **Badge**: Used for skills, categories, types
- **Button**: Various variants for CTAs
- **Card**: Container patterns
- **SpeakingHighlights**: Component with mode="highlight" | "full"
- **PublicationList**: Component with mode="highlight" | "full"

### Data Structure Context

The `resumeData.contributions` array already exists in `src/data/resume.ts` with:

```typescript
interface Contribution {
  name: string
  type: "github" | "community" | "tool"
  url: string
  description?: string
  features?: string[]
}
```

Current contributions include MetaOmic, NDN on Galileo, Chabod Church Management System, FastAPI Users, GoogleContainerTools/kaniko, Beanie ODM, Docker Volume Backup, and Locust.

## Technical Research & Documentation

### Next.js 15 Routing Solutions

#### Option 1: Rewrites in next.config.js (Recommended)

```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/",
      },
    ]
  },
}
```

#### Option 2: Redirect Function

```javascript
// app/resume/page.tsx
import { redirect } from "next/navigation"
export default function ResumePage() {
  redirect("/")
}
```

**Documentation**: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

### Navigation Menu Implementation

#### Available shadcn/ui Components:

- **Navigation Menu**: Full navigation components with dropdowns
- **Sidebar**: Comprehensive sidebar with mobile sheet support

**Installation**:

```bash
npx shadcn@latest add navigation-menu
npx shadcn@latest add sidebar
```

**Key Components**:

- `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`
- `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`
- `SidebarProvider`, `Sidebar`, `SidebarContent`, `SidebarTrigger`

**Documentation**:

- https://ui.shadcn.com/docs/components/navigation-menu
- https://ui.shadcn.com/docs/components/sidebar

#### Mobile Navigation Pattern

Using Sheet component for mobile hamburger menu:

```bash
npx shadcn@latest add sheet
```

## Implementation Blueprint

### Phase 1: Navigation Infrastructure

1. **Install required components**:

   ```bash
   npx shadcn@latest add sheet
   npx shadcn@latest add navigation-menu
   ```

2. **Create navigation component** (`src/components/ui/mobile-nav.tsx`):
   - Sheet-based mobile navigation
   - Hamburger menu button (Menu icon from lucide-react)
   - Link to all pages (Resume, Speaking, Contributions)

3. **Create header navigation component** (`src/components/layout/header.tsx`):
   - Desktop navigation links
   - Mobile navigation trigger
   - Responsive design patterns

### Phase 2: Routing Setup

1. **Configure routing in next.config.js**:

   ```javascript
   async rewrites() {
     return [
       {
         source: '/resume',
         destination: '/'
       }
     ]
   }
   ```

2. **Update layout.tsx**:
   - Add header component with navigation
   - Maintain existing SEO metadata
   - Follow current styling patterns

### Phase 3: Contributions Page

1. **Create contributions page** (`src/app/contributions/page.tsx`):
   - Follow existing page patterns from speaking/page.tsx
   - Use same layout structure and styling
   - Display resumeData.contributions with consistent card design
   - Add metadata for SEO

2. **Create contributions component** (`src/components/sections/contribution-list.tsx`):
   - Similar to PublicationList component
   - Support mode="highlight" | "full"
   - Group by type (github, community, tool)
   - Use existing badge variants and styling

### Phase 4: Cross-Page Linking

1. **Update Publications section in page.tsx**:
   - Modify PublicationList component call to link to /speaking
   - Add "View all publications" link button

2. **Update Open Source section in page.tsx**:
   - Replace static contribution badges
   - Add link to /contributions page
   - Use "View all contributions" link button

3. **Add links in speaking page**:
   - Add link to /contributions in footer or relevant section
   - Maintain existing "Back to Resume" link

### Phase 5: Component Integration

1. **Update existing components**:
   - Ensure all components work with new navigation
   - Add navigation context if needed
   - Test responsive behavior

## Error Handling Strategy

### Static Export Compatibility

- Ensure all routes work with static export
- Test build process: `npm run build`
- Verify GitHub Pages deployment compatibility

### Mobile Navigation

- Test Sheet component on various screen sizes
- Ensure proper z-index handling
- Validate touch interactions

### Route Validation

- Test both / and /resume routes serve same content
- Verify no infinite redirects
- Check all internal links work correctly

## Task Implementation Order

1. **Install shadcn/ui components** (sheet, navigation-menu)
2. **Create mobile navigation component** with Sheet
3. **Create header component** with responsive design
4. **Update layout.tsx** to include header
5. **Configure routing** in next.config.js
6. **Create contributions page** (`/app/contributions/page.tsx`)
7. **Create contribution-list component**
8. **Update publications linking** in main page
9. **Update open source section** to link to contributions
10. **Add cross-links** in speaking page
11. **Test all routes** and navigation
12. **Validate mobile responsiveness**

## Validation Gates

```bash
# Install dependencies and components
npm install

# Type checking
npm run type-check

# Linting
npm run lint

# Build verification (critical for static export)
npm run build

# Staged changes check
git add -A
npx --no-install lint-staged
```

## Key Files to Reference

### Existing Patterns:

- `src/app/layout.tsx` - SEO metadata, structured data patterns
- `src/app/page.tsx` - Main page component structure, section organization
- `src/app/speaking/page.tsx` - Secondary page patterns, navigation links
- `src/components/sections/publication-list.tsx` - Component mode patterns
- `src/components/ui/badge.tsx` - Badge variant usage

### Data Source:

- `src/data/resume.ts` - All resume data including contributions array

### Configuration:

- `next.config.js` - Static export configuration, will add rewrites
- `package.json` - Available dependencies (lucide-react already installed)

## Expected Outcome

After implementation:

- **Dual routing**: Both `/` and `/resume` serve the resume page
- **Navigation**: Mobile-friendly hamburger menu on all pages
- **New page**: `/contributions` showcasing open source work
- **Improved UX**: Seamless linking between Publications → Speaking, Open Source → Contributions
- **Consistent design**: All new components follow existing Tailwind + shadcn/ui patterns
- **Static export compatibility**: All functionality works with GitHub Pages deployment

## Confidence Score: 9/10

This PRP provides comprehensive context for one-pass implementation including:

- ✅ Complete technical research with documentation URLs
- ✅ Existing codebase patterns and component references
- ✅ Available dependencies and installation commands
- ✅ Detailed implementation order with specific file paths
- ✅ Error handling and validation strategy
- ✅ Working knowledge of data structures and interfaces
