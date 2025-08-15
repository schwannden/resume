# Theme System Guidelines

> Complete guide for implementing and maintaining the dark/light theme system in the Schwannden Kuo resume website.

## Overview

This project implements a comprehensive accessibility theme system using `next-themes` with custom CSS properties, supporting light/dark/system modes and font size adjustment. All theme switching is handled client-side with localStorage persistence.

## Architecture

### Theme Provider Setup

```typescript
// src/components/providers/theme-provider.tsx
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
```

### Root Layout Integration

```typescript
// src/app/layout.tsx - CRITICAL: suppressHydrationWarning required
<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
```

## CSS Custom Properties

### Theme Variables (src/app/globals.css)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
}
```

## Theme-Aware Class Usage

### ✅ CORRECT - Use semantic CSS custom properties:

```typescript
// Backgrounds
className = "bg-background" // Main page background
className = "bg-card" // Card/section backgrounds
className = "bg-popover" // Dropdown/popup backgrounds

// Text Colors
className = "text-foreground" // Primary text (page titles)
className = "text-card-foreground" // Text within cards
className = "text-muted-foreground" // Secondary/muted text
className = "text-popover-foreground" // Text in dropdowns

// Borders & Interactive
className = "border-border" // General borders
className = "border-input" // Form input borders
className = "hover:bg-accent" // Hover states
```

### ❌ WRONG - Never use hardcoded colors:

```typescript
// These break dark theme:
className = "bg-white" // Always white
className = "bg-slate-50" // Fixed gray
className = "text-gray-900" // Hardcoded gray
className = "border-gray-300" // Fixed border color
className = "hover:bg-gray-50" // Fixed hover
```

## Implementation Checklist

### For New Pages/Components:

1. **Main Backgrounds**: Use `bg-background` instead of gradients or fixed colors
2. **Card Backgrounds**: Use `bg-card` for content containers
3. **Primary Headings**: Use `text-foreground` for main page titles
4. **Card Content**: Use `text-card-foreground` for headings within cards
5. **Secondary Text**: Use `text-muted-foreground` for descriptions/metadata
6. **Interactive Elements**: Use `border-input` and `hover:bg-accent`

### Theme Usage Hook:

```typescript
import { useTheme } from "next-themes"

function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  )
}
```

## Font Size System

### CSS Implementation:

```css
.font-size-large {
  --text-base: 1.25rem; /* 1rem * 1.25 */
  --text-lg: 1.40625rem; /* 1.125rem * 1.25 */
}

.font-size-large .text-base {
  font-size: var(--text-base);
}
.font-size-large p {
  font-size: var(--text-base);
}
```

### Usage Hook:

```typescript
import { useFontSize } from "@/hooks/use-font-size"

function MyComponent() {
  const { fontSize, setFontSize } = useFontSize()
  // fontSize: "normal" | "large" | "extra-large"
  // setFontSize automatically applies classes and persists to localStorage
}
```

## Accessibility UI Component

### Dropdown Pattern:

```typescript
// src/components/ui/accessibility-config.tsx
// Uses clean dropdown instead of slide-out panel
// Features theme toggle (Light/Dark/System) and font size controls
// Includes click-outside-to-close and proper ARIA labels
```

## Common Pitfalls

### 🚨 Critical Issues to Avoid:

1. **Missing suppressHydrationWarning**: Causes hydration mismatches
2. **Server-side localStorage**: Always check `typeof window !== "undefined"`
3. **Hardcoded colors**: Breaks theme switching completely
4. **Missing theme provider**: Components won't receive theme context
5. **Gradients**: Replace `bg-gradient-*` with solid `bg-background`

### 🔧 Migration Pattern:

```typescript
// OLD (hardcoded)
<div className="bg-white text-gray-900 border-gray-300">

// NEW (theme-aware)
<div className="bg-card text-card-foreground border-input">
```

## Testing Guidelines

1. **Theme Toggle**: Test light/dark/system modes work instantly
2. **Font Size**: Verify all 3 levels affect site-wide text
3. **Persistence**: Refresh page to confirm settings persist
4. **Build**: Ensure `npm run build` succeeds with no errors
5. **Pages**: Check all pages (main, speaking, contributions) support themes

## Best Practices

- Always use semantic color names over descriptive ones
- Test theme switching during development
- Maintain visual hierarchy in both light and dark modes
- Keep dropdown/popup backgrounds solid (avoid transparency)
- Use consistent hover states across all interactive elements
- Prioritize accessibility over visual complexity
