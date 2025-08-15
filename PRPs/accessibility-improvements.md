name: "Accessibility Improvements PRP"
description: |

## Purpose

Implement comprehensive accessibility improvements including dark/light mode toggle and font size adjustment controls, accessible through a settings icon in the navigation bar with localStorage persistence. This follows shadcn/ui patterns and Next.js 15 best practices for theme management.

## Core Principles

1. **Context is King**: Leverage existing shadcn/ui components and next-themes patterns
2. **Validation Loops**: Use existing lint-staged setup for code quality validation
3. **Information Dense**: Complete accessibility controls with system preference detection
4. **Progressive Success**: Theme provider first, then font controls, then UI integration
5. **Global rules**: Follow existing TypeScript, React 19, Next.js 15, Tailwind CSS 4 patterns

---

## Goal

Implement comprehensive accessibility controls that allow users to:

- Toggle between light/dark/system theme modes with instant visual feedback
- Adjust font size across the entire site with 3 size options (normal, large, extra-large)
- Access these controls through a settings icon in the header navigation
- Have all preferences persist in localStorage across browser sessions
- Experience smooth transitions and professional UX consistent with existing design

## Why

- **Accessibility compliance**: Support users with visual impairments and reading difficulties
- **User preference**: Allow customization for better reading comfort and reduced eye strain
- **Professional standards**: Modern web applications are expected to provide theme and accessibility controls
- **Competitive advantage**: Sets the resume apart as a thoughtfully designed, accessible application

## What

A comprehensive accessibility system with:

1. **Theme Management**: Light/dark/system theme toggle using next-themes
2. **Font Size Controls**: Three size levels (normal/large/extra-large) with CSS custom properties
3. **Settings UI**: Accessible dropdown/popover with clear controls and icons
4. **Persistence**: localStorage for both theme and font size preferences
5. **Integration**: Seamless integration into existing header navigation

### Success Criteria

- [ ] Theme toggle works instantly with light/dark/system options
- [ ] Font size adjustment affects all text across the site with 3 levels
- [ ] Settings accessible via config icon in header (both desktop and mobile)
- [ ] All preferences persist in localStorage and restore on page load
- [ ] Smooth transitions and professional visual design
- [ ] No accessibility issues (proper ARIA labels, keyboard navigation)
- [ ] Lint-staged validation passes for all new code
- [ ] Build process generates static export successfully

## All Needed Context

### Documentation & References

```yaml
# MUST READ - Include these in your context window
- file: /src/components/layout/header.tsx
  why: Current navigation structure, existing component patterns to extend

- file: /src/app/layout.tsx
  why: Root layout structure for adding theme provider integration

- file: /src/app/globals.css
  why: Existing CSS custom properties and dark theme variables already defined

- file: /src/components/ui/sheet.tsx
  why: Sheet component pattern used for mobile navigation (potential pattern for settings)

- file: /src/components/layout/mobile-nav.tsx
  why: Mobile navigation patterns and state management examples

- file: /src/components/ui/button.tsx
  why: Button variants and styling patterns for consistency

- url: https://ui.shadcn.com/docs/dark-mode/next
  why: Official shadcn/ui Next.js dark mode implementation guide

- url: https://github.com/pacocoursey/next-themes
  why: next-themes documentation and API reference for theme management

- file: /src/data/resume.ts
  why: Understanding data structure patterns for consistent TypeScript interfaces
```

### Current Codebase Structure

```bash
src/
├── app/
│   ├── layout.tsx              # Root layout with Inter font, existing structure
│   ├── page.tsx                # Main resume page
│   └── globals.css             # CSS custom properties, dark theme vars already exist
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation with GitHub link, needs settings integration
│   │   └── mobile-nav.tsx      # Mobile navigation with Sheet component pattern
│   └── ui/
│       ├── button.tsx          # Button variants (ghost, outline, secondary, etc.)
│       ├── sheet.tsx           # Slide-out panel component for dropdowns
│       ├── badge.tsx           # Badge components for labels
│       └── card.tsx            # Card components for structured content
├── data/
│   └── resume.ts               # Data structures and TypeScript interfaces
└── hooks/                      # Directory for custom hooks (to be created)
```

### Desired Codebase Structure (New Files)

```bash
src/
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx          # next-themes wrapper component
│   └── ui/
│       └── accessibility-config.tsx    # Settings dropdown with theme + font controls
├── hooks/
│   └── use-font-size.ts               # Font size state management hook
└── lib/
    └── font-size-utils.ts             # Font size utilities and constants
```

### Known Gotchas of Codebase & Library Quirks

```typescript
// CRITICAL: Next.js 15 + next-themes requires suppressHydrationWarning
// The html element needs suppressHydrationWarning to avoid hydration mismatch

// CRITICAL: Dark theme CSS custom properties already exist in globals.css
// :root and .dark classes are already defined - just need activation

// CRITICAL: Tailwind CSS 4 beta uses PostCSS - custom properties work differently
// Font size scaling should use CSS calc() with existing Tailwind classes

// GOTCHA: localStorage access must be client-side only
// Use useEffect for initial load, check typeof window !== 'undefined'

// PATTERN: Existing mobile nav uses Sheet component with useState for open state
// Mirror this pattern for consistent UX across desktop and mobile

// CRITICAL: lucide-react icons available: Settings, Sun, Moon, Monitor, Type
// Use consistent icon sizing (h-4 w-4 or h-5 w-5) with existing header patterns
```

## Implementation Blueprint

### Data Models and Structure

Theme and font size state management with TypeScript interfaces:

```typescript
// Font size type definitions
type FontSize = "normal" | "large" | "extra-large"

// Font size configuration
interface FontSizeConfig {
  name: string
  label: string
  multiplier: number
  icon: LucideIcon
}

// Accessibility preferences
interface AccessibilityPreferences {
  theme: "light" | "dark" | "system"
  fontSize: FontSize
}
```

### List of Tasks (In Order)

```yaml
Task 1 - Install Dependencies:
  INSTALL: npm install next-themes
  WHY: Required for theme management following shadcn/ui best practices

Task 2 - Create Theme Provider:
  CREATE: src/components/providers/theme-provider.tsx
  PATTERN: Mirror shadcn/ui theme provider setup
  CRITICAL: Must be client component with NextThemesProvider wrapper

Task 3 - Update Root Layout:
  MODIFY: src/app/layout.tsx
  FIND: "<html lang="en" className="scroll-smooth">"
  REPLACE: Add suppressHydrationWarning and wrap children with ThemeProvider
  PRESERVE: Existing Inter font and metadata structure

Task 4 - Create Font Size Hook:
  CREATE: src/hooks/use-font-size.ts
  PATTERN: Similar to useTheme but for font size state
  INCLUDE: localStorage persistence, useEffect for hydration

Task 5 - Create Font Size Utilities:
  CREATE: src/lib/font-size-utils.ts
  PURPOSE: Font size configurations, CSS class mappings
  PATTERN: Similar to existing data structure patterns in resume.ts

Task 6 - Update Global CSS:
  MODIFY: src/app/globals.css
  INJECT: Font size CSS custom properties after existing theme variables
  PATTERN: Use calc() to modify base Tailwind font sizes

Task 7 - Create Accessibility Config Component:
  CREATE: src/components/ui/accessibility-config.tsx
  PATTERN: Use Sheet component like mobile-nav.tsx for consistent UX
  INCLUDE: Theme toggle buttons, font size controls, proper ARIA labels

Task 8 - Update Header Component:
  MODIFY: src/components/layout/header.tsx
  INJECT: Settings icon before GitHub icon in both desktop and mobile navigation
  PRESERVE: Existing spacing and icon sizing patterns

Task 9 - Add Font Size Classes to Body:
  MODIFY: src/app/layout.tsx
  DYNAMIC: Add font size class to body based on fontSize state
  PATTERN: Conditional className similar to existing patterns
```

### Per Task Pseudocode

```typescript
// Task 2: Theme Provider
"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

// Task 4: Font Size Hook
export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>('normal')

  useEffect(() => {
    // CRITICAL: Check localStorage only on client side
    const saved = localStorage.getItem('fontSize')
    if (saved) setFontSize(saved as FontSize)
  }, [])

  const updateFontSize = (size: FontSize) => {
    setFontSize(size)
    localStorage.setItem('fontSize', size)
    // PATTERN: Apply class to document.documentElement
    document.documentElement.className = document.documentElement.className
      .replace(/font-size-\w+/g, '') + ` font-size-${size}`
  }

  return { fontSize, setFontSize: updateFontSize }
}

// Task 7: Accessibility Config Component
export function AccessibilityConfig() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { fontSize, setFontSize } = useFontSize()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* Theme controls with Sun/Moon/Monitor icons */}
        {/* Font size controls with Type/ALarge icons */}
      </SheetContent>
    </Sheet>
  )
}
```

### Integration Points

```yaml
DEPENDENCIES:
  - install: "next-themes"
  - existing: "lucide-react (Settings, Sun, Moon, Monitor, Type icons)"
  - existing: "@radix-ui/react-dialog for Sheet component"

CSS:
  - modify: src/app/globals.css
  - add: "Font size custom properties using calc()"
  - pattern: ".font-size-large { --text-base: calc(1rem + 0.25rem); }"

LAYOUT:
  - modify: src/app/layout.tsx
  - wrap: "Children with ThemeProvider"
  - add: "suppressHydrationWarning to html tag"

NAVIGATION:
  - modify: src/components/layout/header.tsx
  - inject: "AccessibilityConfig component before GitHub link"
  - preserve: "Existing spacing and responsive patterns"
```

## Validation Loop

### Level 1: Syntax & Style

```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                        # ESLint check with existing config
npm run type-check                  # TypeScript compilation check
npm run format                      # Prettier formatting

# Expected: No errors. If errors, READ the error and fix.
```

### Level 2: Component Testing

```bash
# Start development server
npm run dev

# Manual testing checklist:
# 1. Settings icon appears in header (desktop and mobile)
# 2. Settings panel opens/closes properly
# 3. Theme toggle works (light/dark/system)
# 4. Font size adjustment affects all text
# 5. Preferences persist after page refresh
# 6. Smooth transitions without layout shift
```

### Level 3: Build & Static Export

```bash
# Test production build
npm run build                       # Static export for GitHub Pages

# Expected: Build succeeds, no TypeScript errors, assets optimized
# Check: out/ directory contains properly built static files
```

## Final Validation Checklist

```bash
# All quality checks must pass
git add -A                          # Stage all changes
npx --no-install lint-staged        # Run pre-commit hooks (lint + format)
```

- [ ] Theme toggle works instantly with visual feedback
- [ ] Font size controls affect all site text appropriately
- [ ] Settings UI is accessible (keyboard nav, ARIA labels)
- [ ] Preferences persist in localStorage correctly
- [ ] No hydration warnings in console
- [ ] Build process completes successfully: `npm run build`
- [ ] All linting passes: `npm run lint`
- [ ] Type checking passes: `npm run type-check`
- [ ] Code formatted consistently: `npm run format`

---

## Anti-Patterns to Avoid

- ❌ Don't create custom theme management when next-themes exists
- ❌ Don't use inline styles for font size - use CSS custom properties
- ❌ Don't access localStorage on server side (hydration mismatch)
- ❌ Don't ignore existing component patterns (use Sheet like mobile nav)
- ❌ Don't hardcode font sizes - use scalable rem-based system
- ❌ Don't skip suppressHydrationWarning on html tag (causes warnings)
- ❌ Don't create new icon sizes - follow existing h-4 w-4 pattern
- ❌ Don't place settings in different locations for mobile/desktop (consistency)

## Confidence Score: 9/10

High confidence for one-pass implementation success due to:

- ✅ Comprehensive context including all existing patterns
- ✅ Well-established next-themes integration approach
- ✅ Clear task breakdown with specific file modifications
- ✅ Executable validation steps with existing tooling
- ✅ Anti-patterns identified to avoid common pitfalls
- ✅ All necessary dependencies and components already available
- ✅ CSS custom properties and dark theme variables already exist
