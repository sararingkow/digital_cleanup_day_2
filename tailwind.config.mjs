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
      plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries"),
      ],
    },
  },
};
