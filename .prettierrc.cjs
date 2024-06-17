/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  printWidth: 100,
  semi: false,
  singleAttributePerLine: true,
}

module.exports = config