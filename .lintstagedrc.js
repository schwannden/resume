module.exports = {
  // Type check TypeScript files
  "**/*.{ts,tsx}": () => "npm run type-check",

  // Lint & format TS and JS files with caching
  "**/*.{ts,tsx,js,jsx}": (filenames) => [
    `npx eslint --fix --cache --cache-location .next/cache/eslint/ ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],

  // Format only Markdown and JSON files
  "**/*.{md,json}": (filenames) =>
    `npx prettier --write ${filenames.join(" ")}`,

  // Format CSS files
  "**/*.css": (filenames) => `npx prettier --write ${filenames.join(" ")}`,
}
