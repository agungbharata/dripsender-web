const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        sora: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        "custom-2em": "2em",
        "custom-1em": "1.5em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
