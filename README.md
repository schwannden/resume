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

### 1. Clone or Fork the Repository

```bash
git clone https://github.com/schwannden/resume.git
cd resume
```

**OR** click the "Use this template" button on GitHub to create your own copy.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your Site (Important!)

Edit `resume.config.ts` in the root directory with your information:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Professional Title",
  tagline: "Your tagline",
  location: "Your Location",
  description: "Your professional bio...",

  url: "https://yourdomain.com", // Your deployment URL

  social: {
    email: "you@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    blog: "https://yourblog.com",
  },

  seo: {
    keywords: ["Your", "Keywords", "Here"],
    // ... see resume.config.ts for all options
  },

  // ... see resume.config.ts for complete configuration options
}
```

**Why this file first?** This single file controls all site metadata, SEO, analytics, and deployment settings.

### 4. Add Your Resume Content

Edit `src/data/resume.ts` with your professional information:

```typescript
export const resumeData: ResumeData = {
  name: "Your Name", // Should match config
  email: "you@example.com", // Should match config
  linkedin: "https://linkedin.com/in/yourprofile", // Should match config
  title: "Your Professional Title",
  summary: "Your professional summary...",
  experience: [
    // Your work experience
  ],
  skills: [
    // Your technical skills
  ],
  // ... rest of your resume data
}
```

### 5. Set Up Environment Variables (Optional)

For analytics and other services, create `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Your Google Analytics ID
```

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your resume website.

### 7. Build for Production

```bash
npm run build
```

## ✅ Customization Checklist

Before deploying your resume site, make sure you've updated:

### Must Update

- [ ] `resume.config.ts` - Your name, title, location, tagline
- [ ] `resume.config.ts` - URLs: site URL (your deployment URL)
- [ ] `resume.config.ts` - Social media links (LinkedIn, GitHub, email, blog)
- [ ] `resume.config.ts` - SEO keywords for your field
- [ ] `src/data/resume.ts` - All resume content (experience, skills, education, etc.)
- [ ] `public/preview.png` - Your social sharing image (1200x630px recommended)
- [ ] `public/resume.pdf` - Your PDF resume (optional but recommended)

### Should Update

- [ ] `resume.config.ts` - Description and short description for SEO
- [ ] `resume.config.ts` - Structured data (current organization, expertise areas)
- [ ] `.env.local` - Google Analytics ID (if you want analytics)
- [ ] `public/favicon.png` - Your favicon (optional)

### Optional Customization

- [ ] `resume.config.ts` - Enable/disable features (dark mode, PDF download, etc.)
- [ ] `tailwind.config.ts` - Brand colors and typography
- [ ] `src/components/` - Customize component styles

## 📝 Configuration Guide

### Site Configuration (`resume.config.ts`)

**Primary Configuration File** - This is the FIRST file you should customize.

Contains:

- **Personal Information**: Name, title, location, tagline
- **Site Branding**: Description, short description for SEO
- **URLs**: Website, social media links (LinkedIn, GitHub, blog, etc.)
- **SEO Settings**: Keywords, Open Graph images, Twitter cards
- **Analytics**: Google Analytics configuration
- **Features**: Enable/disable dark mode, PDF download, speaking page, etc.
- **Deployment**: Base path and asset prefix for GitHub Pages
- **Structured Data**: Current organization, expertise areas, featured works

All metadata, structured data, and social links are generated from this single file.

### Resume Content (`src/data/resume.ts`)

**Content File** - Update this with your professional information after configuring the site.

Contains:

- **Basic Info**: Name, email, LinkedIn (should match config)
- **Experience**: Work history with detailed responsibilities
- **Skills**: Technical skills organized by categories with badge variants
- **Projects**: Featured projects with technologies and links
- **Publications**: Papers, articles, blog posts, certifications
- **Speaking**: Talks, workshops, conferences with materials
- **Education**: Academic background and activities
- **Volunteer**: Community involvement and contributions
- **Open Source**: GitHub and community contributions

### Environment Variables (`.env.local`)

For sensitive data that shouldn't be in Git:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (optional)
```

See `.env.example` for all available variables.

### Styling Customization

The project uses Tailwind CSS 4 beta with custom design tokens:

- **Colors**: Modify theme colors in `tailwind.config.ts`
- **Typography**: Update font families and sizes
- **CSS Variables**: Edit `src/app/globals.css` for theme colors
- **Components**: Customize UI components in `src/components/ui/`

### Adding New Resume Sections

1. Add new interface to `src/data/resume.ts`
2. Create data array for the new section
3. Build a new component in `src/components/sections/`
4. Import and render in `src/app/page.tsx`

## 🚀 Deployment

### Option 1: GitHub Pages (Free, Recommended)

**Perfect for: Personal resume sites**

1. Fork this repository to your GitHub account
2. Update `resume.config.ts` and `src/data/resume.ts` with your information
3. Enable GitHub Pages in Settings → Pages
4. Select "GitHub Actions" as the source
5. Push to main branch - automatic deployment!

**Your site will be at:** `https://yourusername.github.io/resume`

**For subdirectory deployment** (e.g., `username.github.io/resume`):

- Uncomment `basePath` and `assetPrefix` in `resume.config.ts`
- Or set environment variables: `NEXT_PUBLIC_BASE_PATH=/resume`

**Custom domain:**

1. Add `CNAME` file to `/public/` with your domain
2. Update `resume.config.ts` url to your custom domain
3. Configure DNS A/CNAME records with your provider
4. Enable custom domain in GitHub Pages settings

---

### Option 2: Vercel (Free, Easy)

**Perfect for: Fast deployment with preview links**

1. Push your repo to GitHub
2. Import to Vercel (vercel.com/new)
3. Add environment variables if needed (`NEXT_PUBLIC_GA_ID`)
4. Deploy!

---

### Option 3: Netlify (Free, Easy)

**Perfect for: Easy custom domain setup**

1. Push your repo to GitHub
2. Import to Netlify (netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy!

---

### Option 4: Manual/Other Hosts

```bash
npm run build
# Upload contents of 'out/' directory to your host
```

Works with: AWS S3, Azure Static Sites, Cloudflare Pages, DigitalOcean, etc.

## 🔧 Troubleshooting

### Build Fails with "Missing required config"

Make sure all required fields in `resume.config.ts` are filled:

- `name`, `title`, `url`, `social.email`

Check browser console for the specific missing field.

### Analytics Not Tracking

1. Verify `.env.local` has `NEXT_PUBLIC_GA_ID` set
2. Check you're in production mode (`npm run build && npm start`)
3. Or set `enableInDev: true` in `resume.config.ts` for testing
4. Check browser console for errors

### GitHub Pages Shows 404

1. Enable GitHub Pages in repository settings → Pages
2. Set source to "GitHub Actions"
3. Check that Actions workflow completed successfully
4. If using custom path (e.g., `/resume`), update `resume.config.ts`:
   ```typescript
   deployment: {
     basePath: "/resume",
     assetPrefix: "/resume/",
   }
   ```

### Custom Domain Not Working

1. Verify `CNAME` file in `/public/` directory
2. Update `resume.config.ts` url to your custom domain
3. Check DNS settings are correct (A or CNAME records)
4. Wait for DNS propagation (up to 48 hours)
5. Test with `dig yourdomain.com` or `nslookup yourdomain.com`

### Dark Mode Not Working

Check `resume.config.ts`:

```typescript
features: {
  darkMode: true,  // Must be true
}
```

### Build Warnings About Config Values

Review the console output - it will show which fields need attention. Update `resume.config.ts` accordingly.

### TypeScript Errors

1. Run `npm run type-check` to see all errors
2. Ensure all fields in `resume.config.ts` match the expected types
3. Check `src/data/resume.ts` interfaces are correctly typed

### Port Already in Use

If port 3000 is taken:

```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

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
