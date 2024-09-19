/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#798E7F",
        "dark-green": "#23483B",
        "off-white": "#F7F7F5",
        "light-yellow": "#FFBB00",
        "medium-yellow": "#FFCB3F",
        "dark-yellow": "#C89300",
      },

      fontSize: {
        brodtekst_mini: "1rem",
        brodtekst_grid: "1.25rem",
        brodtekst: "1.375rem",
        h4: "1.5rem",
        menu: "1.75rem",
        formular: "2rem",
        h3: "2.5rem",
        h2: "3rem",
        h1: "7.5rem",

        brodtekst_mini_m: "0.875rem",
        brodtekst_grid_m: "1rem",
        brodtekst_m: "1rem",
        h4_m: "1.375rem",
        menu_m: "1.25rem",
        formular_m: "1.375rem",
        h3_m: "1.625rem",
        h2_m: "2rem",
        h1_m: "3.5rem",
      },
      plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries"),
      ],
    },
  },
};
