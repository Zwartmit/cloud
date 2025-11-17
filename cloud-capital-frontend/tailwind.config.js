/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores exactos de tu plantilla
        'cc-primary': '#0A0A18',
        'cc-secondary': '#1F2937', 
        'cc-accent': '#3B82F6',
        'cc-profit': '#10B981',
        'cc-text': '#F9FAFB',
        'cc-subtext': '#9CA3AF',
        'cc-danger': '#EF4444',
        'cc-admin': '#FBBF24',
        'cc-super-admin': '#F97316',
        // Colores adicionales de la plantilla
        'cc-card': '#111827',
        'cc-border': '#374151',
        'cc-bg-canvas': '#0A0A18',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cc-card': '0 4px 10px rgba(0, 0, 0, 0.4)',
        'cc-card-hover': '0 8px 20px rgba(0, 0, 0, 0.6)',
        'cc-profit': '0 4px 8px rgba(16, 185, 129, 0.3)',
        'cc-accent': '0 4px 8px rgba(59, 130, 246, 0.3)',
        'cc-danger': '0 4px 8px rgba(239, 68, 68, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'cc': 'all 0.2s ease-in-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
