/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        muted: "var(--text-muted)",
      },
      backgroundColor: {
        main: "var(--bg-primary)",
        card: "var(--bg-secondary)",
      },
      textColor: {
        main: "var(--text-main)",
        muted: "var(--text-muted)",
        accent: "var(--text-accent)",
      },
      borderColor: {
        subtle: "var(--border-color)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
