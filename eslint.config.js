// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // 🧹 Ignore build + coverage folders
  { ignores: ["dist", "coverage"] },

  // ✅ Base + TypeScript + React presets
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,

  // 🧩 App code (browser)
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
    plugins: { react },
    rules: {
      // 🧠 React 17+ no longer requires importing React in JSX
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // 🧹 Lint polish
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 🧪 Tests (Vitest)
  {
    files: ["tests/**/*.{ts,tsx,js,jsx}", "**/*.test.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.vitest },
    },
    plugins: { react },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  // ⚙️ Config + scripts (Node env)
  {
    files: [
      "*.config.{js,cjs,mjs,ts}",
      "vite.config.*",
      "vitest.config.*",
      "scripts/**",
    ],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
  },
];