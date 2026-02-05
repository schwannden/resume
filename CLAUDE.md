# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern, responsive resume website built with Next.js 16, React 19.2, TypeScript, and Tailwind CSS 4 beta. The site is optimized for static generation and deployed to GitHub Pages. Features include comprehensive resume data, speaking engagements, publications, and professional portfolio showcasing.

## Development Commands

```bash
# Start development server with Turbopack (enabled by default in Next.js 16)
npm run dev

# Build for production (static export for GitHub Pages)
npm run build

# Start production server (for local testing after build)
npm start

# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Type checking
npm run type-check

# Setup Husky git hooks
npm run prepare
```

## Architecture Overview

### Data-Driven Architecture

- **Centralized Data**: All resume content is structured in `src/data/resume.ts` with TypeScript interfaces
- **Type-Safe**: Comprehensive TypeScript interfaces for `Experience`, `Publication`, `Talk`, `Award`, `Contribution`, etc.
- **Separation of Concerns**: Content data is separated from presentation components

### Component Structure

- **UI Components**: Reusable components in `src/components/ui/` (Badge, Button, Card) following shadcn/ui patterns
- **Section Components**: Specialized components in `src/components/sections/` for complex sections like speaking highlights and publications
- **App Router**: Next.js 13+ app directory structure with layout.tsx and page.tsx

### Styling System

- **Tailwind CSS 4 Beta**: Latest version with new features and PostCSS integration
- **CSS Custom Properties**: Theme variables defined with HSL color system for consistency
- **Professional Design**: Clean, minimal design optimized for readability and ATS compatibility

### Static Generation & Deployment

- **Static Export**: Configured for GitHub Pages deployment with `output: "export"`
- **GitHub Actions**: Automated CI/CD pipeline for building and deploying to GitHub Pages
- **Asset Optimization**: Images unoptimized for static compatibility, proper meta tags for SEO

## Key Files and Their Purpose

- `src/data/resume.ts` - Centralized resume data with TypeScript interfaces
- `src/app/layout.tsx` - Root layout with comprehensive SEO metadata and structured data
- `src/app/page.tsx` - Main resume page consuming data from resume.ts
- `src/app/speaking/page.tsx` - Dedicated speaking engagements page
- `next.config.js` - Next.js configuration for static export and GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions deployment pipeline

## Configuration Notes

### Linting & Formatting

- **ESLint**: Configured with ESLint 9 flat config format (`eslint.config.mjs`)
- **Next.js**: Using @next/eslint-plugin-next for Next.js-specific rules and core-web-vitals
- **TypeScript**: Type-aware linting with typescript-eslint v8 and projectService
- **React**: React 19 support with Hooks rules, accessibility (jsx-a11y), and best practices
- **Prettier**: Configured for consistent code formatting, integrated with ESLint via eslint-config-prettier
- **Husky + lint-staged**: Pre-commit hooks with ESLint caching for code quality enforcement

### Tailwind Configuration

- Custom color system using CSS custom properties
- Professional typography with Inter font
- Component-specific styling patterns for resume sections

### Next.js Specific

- **Turbopack**: Enabled by default in Next.js 16 for faster development builds (2-5x faster builds, 10x faster Fast Refresh)
- **Static Export**: All pages pre-rendered at build time for GitHub Pages compatibility
- **SEO Optimization**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

## Development Guidelines

### Data Updates

- Modify resume content in `src/data/resume.ts`
- Follow existing TypeScript interfaces when adding new data types
- Maintain consistency in data structure for reliable component rendering

### Component Development

- Use existing UI components from `src/components/ui/` when possible
- Follow shadcn/ui patterns for new UI components
- Implement responsive design using Tailwind CSS breakpoints

### Styling Conventions

- Use Tailwind utility classes primarily
- Leverage custom CSS properties for theme consistency
- Maintain professional color palette and typography hierarchy

## Testing & Quality Assurance

Run the following commands before committing changes:

1. `npm run type-check` - Ensure TypeScript compilation
2. `npm run lint` - Check ESLint rules
3. `npm run format` - Apply Prettier formatting
4. `npm run build` - Verify static export builds successfully

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The deployment process:

1. Installs dependencies
2. Runs Next.js build with static export
3. Uploads build artifacts to GitHub Pages
4. Deploys to the live site

Build output goes to the `out/` directory which is deployed as the static site.
