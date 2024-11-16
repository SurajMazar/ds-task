import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'doc-bg': 'var(--doc-background)',
        'sidebar-dark-bg': 'var(--sidebar-dark-bg)',
        'field-dark-bg': 'var(--field-dark-bg)',
      }
    }
  },
  plugins: []
} satisfies Config
