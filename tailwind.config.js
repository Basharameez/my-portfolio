/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0A0A0C',
        panelBg: '#121319',
        borderCol: '#1E202B',
        electricBlue: '#00F0FF',
        deepBlue: '#00A3FF',
        electricPurple: '#7000FF',
        glowCyan: 'rgba(0, 240, 255, 0.15)',
        glowPurple: 'rgba(112, 0, 255, 0.15)',
      },
      fontFamily: {
        mono: ['Outfit', 'Space Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
