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
      fontSize: {
        // Adjust heading font sizes (slightly smaller)
        '9xl': ['4.875rem', { lineHeight: '1' }],
        '8xl': ['3.875rem', { lineHeight: '1' }],
        '7xl': ['3rem', { lineHeight: '1.05' }],
        '6xl': ['2.5rem', { lineHeight: '1.1' }],
        '5xl': ['2.125rem', { lineHeight: '1.15' }],
        '4xl': ['1.75rem', { lineHeight: '1.2' }],
        '3xl': ['1.5rem', { lineHeight: '1.25' }],
        '2xl': ['1.375rem', { lineHeight: '1.3' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],

        // Adjust common text/subheadings (slightly larger)
        'lg': ['1.1875rem', { lineHeight: '1.5rem' }],
        'base': ['1.0625rem', { lineHeight: '1.5rem' }],
        'sm': ['0.9375rem', { lineHeight: '1.375rem' }],
        'xs': ['0.8125rem', { lineHeight: '1.125rem' }],
      },
    },
  },
  plugins: [],
}
