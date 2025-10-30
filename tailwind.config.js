/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#222249',
        'brand-primary': '#3b82f6',   // Professional blue for CTAs
        'brand-hover': '#2563eb',     // Darker blue for hover states
        'brand-accent': '#8b5cf6',    // Purple for highlights
        'dark-bg': '#0a0a0a',         // Slightly lighter than pure black
        'card-bg': '#1a1a2e',         // Card backgrounds
      },
    },
  },
  plugins: [],
}