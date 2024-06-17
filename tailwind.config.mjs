/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        grey: {
          0: "var(--grey-0) / <alpha-value>)",
          50: "var(--grey-50) / <alpha-value>)",
          100: "var(--grey-100) / <alpha-value>)",
          200: "var(--grey-200) / <alpha-value>)",
          300: "var(--grey-300) / <alpha-value>)",
          400: "var(--grey-400) / <alpha-value>)",
          500: "var(--grey-500) / <alpha-value>)",
          600: "var(--grey-600) / <alpha-value>)",
          700: "var(--grey-700) / <alpha-value>)",
          800: "var(--grey-800) / <alpha-value>)",
          900: "var(--grey-900) / <alpha-value>)",
          999: "var(--grey-999) / <alpha-value>)",
          "999-basis": "var(--grey-999-basis) / <alpha-value>)",
        },
        accent: {
          regular: "var(--accent-regular) / <alpha-value>)",
          light: "var(--accent-light) / <alpha-value>)",
          dark: "var(--accent-dark) / <alpha-value>)",
          overlay: "var(--accent-overlay) / <alpha-value>)",
          "subtle-overlay": "var(--accent-subtle-overlay) / <alpha-value>)",
          "text-over": "var(--accent-text-over) / <alpha-value>)",
        },
        link: {
          DEFAULT: "var(--link)/ <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
}
