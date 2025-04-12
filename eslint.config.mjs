// eslint.config.mjs
import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ...reactRecommended,
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
];
