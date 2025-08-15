# Contributing to Resume Website Template

Thank you for your interest in contributing to this modern resume website template! This guide will help you understand the project structure and contribute effectively.

## 🚀 Quick Start for Contributors

### Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of Next.js, React, and TypeScript

### Setup Development Environment

1. **Fork and Clone**

   ```bash
   git clone https://github.com/yourusername/resume-website.git
   cd resume-website
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📋 Development Workflow

### Before Making Changes

Always run these commands to ensure code quality:

```bash
npm run type-check    # TypeScript compilation
npm run lint          # ESLint rules
npm run format        # Prettier formatting
npm run build         # Verify static export builds
```

### Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the project conventions

3. **Test your changes**

   ```bash
   npm run dev          # Test in development
   npm run build        # Ensure production build works
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your descriptive commit message"
   ```

## 🏗️ Project Architecture

### Data-Driven Architecture

- **Centralized Data**: All resume content is structured in `src/data/resume.ts` with TypeScript interfaces
- **Type-Safe**: Comprehensive TypeScript interfaces for `Experience`, `Publication`, `Talk`, `Award`, `Contribution`, etc.
- **Separation of Concerns**: Content data is separated from presentation components

### Component Structure

- **UI Components**: Reusable components in `src/components/ui/` following shadcn/ui patterns
- **Section Components**: Specialized components in `src/components/sections/` for complex sections
- **App Router**: Next.js 13+ app directory structure with layout.tsx and page.tsx

### Tech Stack

- **Next.js 15**: React framework with App Router and static export
- **React 19**: Frontend library with latest features
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS 4 beta**: Utility-first CSS framework
- **shadcn/ui**: Component library patterns
- **Turbopack**: Fast development bundler

## 📁 Key Files and Directories

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Main resume page
│   └── speaking/page.tsx  # Speaking engagements portfolio
├── components/
│   ├── sections/          # Resume section components
│   └── ui/               # Reusable UI components (Badge, Button, Card)
├── data/
│   └── resume.ts         # Centralized resume data with TypeScript interfaces
└── lib/
    └── utils.ts          # Utility functions
```

### Important Configuration Files

- `CLAUDE.md` - Development guidance for Claude Code
- `next.config.js` - Next.js configuration for static export
- `tailwind.config.ts` - Tailwind CSS configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment pipeline

## 🎯 Contribution Areas

### 1. Data Structure Improvements

Enhance TypeScript interfaces in `src/data/resume.ts`:

- Add new fields to existing interfaces
- Create new interfaces for additional resume sections
- Improve data validation and type safety

### 2. Component Development

Create or improve components following these guidelines:

- **UI Components**: Follow shadcn/ui patterns in `src/components/ui/`
- **Section Components**: Build specialized components in `src/components/sections/`
- **Responsive Design**: Use Tailwind CSS breakpoints
- **Accessibility**: Follow ARIA guidelines and semantic HTML

### 3. Styling and Design

- Use Tailwind CSS utility classes primarily
- Leverage custom CSS properties for theme consistency
- Maintain professional color palette and typography hierarchy
- Ensure ATS (Applicant Tracking System) compatibility

### 4. SEO and Performance

- Enhance meta tags and structured data in `src/app/layout.tsx`
- Optimize static generation for GitHub Pages
- Improve Core Web Vitals scores
- Add new JSON-LD structured data types

### 5. Documentation

- Update README.md with new features
- Enhance code comments for complex logic
- Create examples for new customization options
- Improve developer experience documentation

## 🔧 Development Guidelines

### Code Style

- **ESLint**: Follow Next.js, TypeScript, and Prettier rules
- **Prettier**: No semicolons, trailing commas ES5, consistent formatting
- **TypeScript**: Use strict type checking, avoid `any`
- **Tailwind**: Prefer utility classes over custom CSS

### Component Conventions

- Use existing UI components from `src/components/ui/` when possible
- Follow React 19 best practices and hooks patterns
- Implement proper error boundaries where needed
- Ensure components are tree-shakeable and performant

### Data Management

- Modify resume content in `src/data/resume.ts`
- Follow existing TypeScript interfaces when adding data types
- Maintain consistency in data structure for reliable component rendering
- Use proper TypeScript generics for reusable interfaces

### Static Generation

- Ensure all pages work with `output: "export"`
- Test GitHub Pages compatibility
- Verify no dynamic routes break static export
- Maintain SEO optimization for static sites

## 🧪 Testing

### Manual Testing Checklist

- [ ] Development server starts without errors
- [ ] All pages render correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Static export builds successfully
- [ ] Production build serves correctly
- [ ] PDF download functionality works
- [ ] SEO meta tags are properly rendered
- [ ] Accessibility standards are met

### Automated Checks

Run before submitting PR:

```bash
npm run type-check    # TypeScript compilation
npm run lint          # ESLint rules
npm run format        # Prettier formatting
npm run build         # Production build
```

## 📤 Submitting Contributions

### Pull Request Process

1. **Create descriptive PR title**
   - Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
   - Be specific: "Add dark mode toggle" not "Update styles"

2. **Write clear PR description**
   - Explain what changes were made and why
   - Include screenshots for UI changes
   - List any breaking changes
   - Reference related issues

3. **Ensure CI passes**
   - All GitHub Actions checks must pass
   - No TypeScript errors
   - No ESLint violations
   - Production build succeeds

4. **Request review**
   - Tag relevant maintainers
   - Be responsive to feedback
   - Make requested changes promptly

### Commit Message Format

Use conventional commit format:

```
type(scope): description

feat(ui): add dark mode toggle component
fix(data): correct TypeScript interface for publications
docs(readme): update deployment instructions
style(components): improve responsive design for mobile
refactor(api): simplify data fetching logic
```

## 🐛 Reporting Issues

### Bug Reports

Include:

- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable
- Error messages or console logs

### Feature Requests

Include:

- Clear description of the requested feature
- Use case and motivation
- Proposed implementation approach
- Any breaking changes considerations

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on code quality and user experience
- Help newcomers understand the codebase
- Follow the project's coding standards

## 📞 Getting Help

- Check existing issues and PRs first
- Review [CLAUDE.md](CLAUDE.md) for development guidance
- Review [llms.txt](llms.txt) for project overview
- Open an issue for questions
- Tag maintainers for urgent matters

## 🎉 Recognition

Contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- README.md acknowledgments section

Thank you for contributing to making this resume website template better for everyone! 🚀
