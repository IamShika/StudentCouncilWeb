import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ffc0cb',
          'pink-light': '#ffe4e8',
          blue: '#a8d8ea',
          'blue-light': '#d4f1f9',
          yellow: '#fff3b0',
          purple: '#e8d5f2',
          mint: '#b8f0d8',
        },
        accent: {
          red: '#ff4757',
          orange: '#ffa502',
          yellow: '#ffd93d',
          green: '#2ed573',
          blue: '#1e90ff',
          purple: '#8b5cf6',
          pink: '#ff6b9d',
        },
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
        cute: ['Comic Neue', 'cursive'],
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '5': '5deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
        '-5': '-5deg',
      },
      boxShadow: {
        'polaroid': '0 4px 15px rgba(0, 0, 0, 0.15)',
        'tape': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'paper': '2px 2px 8px rgba(0, 0, 0, 0.1)',
        'sticker': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
        'stars': 'radial-gradient(circle, #ffb6c1 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
export default config
