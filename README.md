# Modern Resume Website Template

A sleek, modern resume website built with Next.js 16, React 19.2, TypeScript, and Tailwind CSS 4 beta. Perfect for creating a professional online presence with comprehensive resume data, speaking engagements, publications, and portfolio showcasing.

## 🔗 Deep Wiki

- [AI Powered Deep Wiki — Resume](https://deepwiki.com/schwannden/resume)

## ✨ Features

- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast**: Built with Next.js 16 and Turbopack for optimal performance
- **🎨 Modern Design**: Clean, professional design optimized for readability and ATS compatibility
- **📊 Data-Driven**: Centralized content management with TypeScript interfaces
- **🔍 SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **🚀 Easy Deployment**: Automated GitHub Pages deployment with GitHub Actions
- **♿ Accessible**: Built with accessibility best practices
- **📄 PDF Download**: Direct resume PDF download capability

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19.2, TypeScript
- **Styling**: Tailwind CSS 4 beta, shadcn/ui components
- **Build Tool**: Turbopack (Next.js 16 fast refresh)
- **Deployment**: GitHub Pages with GitHub Actions
- **Code Quality**: ESLint, Prettier, Husky + lint-staged

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/resume-website.git
cd resume-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Customize Your Data

Edit `src/data/resume.ts` with your information:

```typescript
export const resumeData: ResumeData = {
  name: "Your Name",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  title: "Your Professional Title",
  summary: "Your professional summary...",
  // ... rest of your data
}
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your resume website.

### 5. Build for Production

```bash
npm run build
```

## 📝 Customization Guide

### Personal Information

Update the following in `src/data/resume.ts`:

- **Basic Info**: Name, email, LinkedIn, title, summary
- **Experience**: Work history with responsibilities
- **Skills**: Technical skills organized by categories
- **Projects**: Featured projects with descriptions and links
- **Publications**: Papers, articles, certifications, blog posts
- **Speaking**: Talks, workshops, conferences
- **Education**: Academic background
- **Volunteer**: Community involvement
- **Open Source**: Contributions to projects

### Styling Customization

The project uses Tailwind CSS with custom design tokens:

- **Colors**: Modify theme colors in `tailwind.config.ts`
- **Typography**: Update font families and sizes
- **Components**: Customize UI components in `src/components/ui/`

### SEO and Metadata

Update metadata in `src/app/layout.tsx`:

- Page titles and descriptions
- Open Graph images and data
- JSON-LD structured data
- Social media links

### Adding New Sections

1. Add new interface to `src/data/resume.ts`
2. Create data for the new section
3. Build a new component in `src/components/sections/`
4. Import and use in `src/app/page.tsx`

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages** in repository settings
3. **Update GitHub Actions** workflow if needed
4. **Push changes** to main branch - automatic deployment!

The site will be available at `https://yourusername.github.io/resume`

### Manual Deployment

```bash
npm run build
# Upload contents of 'out/' directory to your hosting provider
```

### Custom Domain

1. Add `CNAME` file to `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## 📱 Pages Structure

- **`/`** - Main resume page with all sections
- **`/speaking`** - Detailed speaking engagements and portfolio
- **`/resume.pdf`** - Direct PDF download

## 🛠️ Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production (static export)
npm run build

# Start production server (for local testing)
npm start

# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Type checking
npm run type-check

# Setup git hooks
npm run prepare
```

## 📦 Project Structure

```text
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main resume page
│   └── speaking/          # Speaking portfolio
├── components/
│   ├── sections/          # Resume section components
│   └── ui/               # Reusable UI components
├── data/
│   └── resume.ts         # Your resume data
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Customization Examples

### Adding a New Skill Category

```typescript
// In src/data/resume.ts
{
  category: "Databases",
  skills: ["PostgreSQL", "MongoDB", "Redis"],
  variant: "info",
}
```

### Adding a New Experience

```typescript
// In src/data/resume.ts
{
  title: "Senior Software Engineer",
  company: "Amazing Company",
  duration: "Jan 2024 - Present",
  responsibilities: [
    "Led development of scalable web applications",
    "Mentored junior developers",
  ],
}
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for detailed information on:

- Setting up the development environment
- Understanding the project architecture
- Following coding standards and conventions
- Submitting pull requests
- Reporting issues and feature requests

For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)

## 💬 Support

If you have questions or need help customizing this template:

1. Check the [CLAUDE.md](CLAUDE.md) file for development guidance
2. Review the [llms.txt](llms.txt) for project overview
3. Open an issue in this repository
4. Contact the maintainer

---

⭐ If this template helped you create an awesome resume website, please give it a star!
