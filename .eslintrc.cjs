module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Add this line
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "react-app",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "testing-library", "vitest", "prettier"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
