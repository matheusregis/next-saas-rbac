/**
 * @typedef { import('prettier').Config } PrettierConfig
 * @type { PrettierConfig }
 */

const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  tabWidth: 2,
  useTabs: true,
  semi: false,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSameLine: true,
  arrowParens: "always",
  endOfLine: "auto",
  bracketSpacing: false,
};

export default config;
