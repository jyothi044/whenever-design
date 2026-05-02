/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        ink: "rgb(26, 26, 26)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-source-serif)",
          "ui-serif",
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
        "display-mono": [
          "var(--font-fragment)",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.04)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
        450: "450ms",
      },
    },
  },
  plugins: [],
};

export default config;
