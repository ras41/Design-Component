import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}','./.storybook/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Modern blue
        secondary: '#9333ea', // Purple
        accent: '#f59e0b', // Amber
        neutral: '#64748b', // Cool gray
        background: '#f9fafb', // Light gray
        dark: '#1e293b', // Dark gray
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
