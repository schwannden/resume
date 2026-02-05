import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import nextPlugin from "@next/eslint-plugin-next"
import prettierConfig from "eslint-config-prettier"

export default [
  // Global ignores (must be first)
  {
    name: "project/ignores",
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "*.tsbuildinfo",
      "next-env.d.ts",
      "public/**",
    ],
  },

  // Base JavaScript config
  {
    name: "project/javascript",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        NodeJS: "readonly",
      },
    },
  },

  // TypeScript config with type-aware linting
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),
  {
    name: "project/typescript",
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Preserve all existing TypeScript rules from .eslintrc.json
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "warn",

      // Relax strict type-checking rules
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },

  // Disable type-checking for JS files
  {
    name: "project/javascript-disable-type-checking",
    files: ["**/*.{js,mjs,cjs}"],
    ...tseslint.configs.disableTypeChecked,
  },

  // React & JSX config
  {
    name: "project/react",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // Preserve all existing React rules from .eslintrc.json
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "warn",

      // Relax accessibility to warnings
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Next.js config
  {
    name: "project/next",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Code quality rules
  {
    name: "project/code-quality",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    rules: {
      // Preserve all existing rules from .eslintrc.json
      "no-console": "warn",
      "no-unused-vars": "off",
      "prefer-const": "warn",
      "no-var": "error",
    },
  },

  // Prettier integration (must be last)
  {
    name: "project/prettier",
    ...prettierConfig,
  },
]
