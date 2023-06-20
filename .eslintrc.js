module.exports = /** @type {import("eslint").Linter.Config} */ ({
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    es2022: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:unicorn/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["!.storybook"],
  rules: {
    "no-console": ["warn"],
  },
  overrides: [
    {
      files: ["**/*.test.ts?(x)"],
      extends: ["plugin:jest/recommended"],
    },
    {
      files: ["**/*.stories.ts?(x)"],
      extends: ["plugin:storybook/recommended"],
    },
  ],
});
