const { transparent } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js", "script.js"],
  theme: {
    extend: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'],
      keyframes: {
        'fade-left': {
          '0%': {
            transform: 'translateX(-150px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(150px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
        'fade-down': {
          '0%': {
            transform: 'translateY(150px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
        'fade-in': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1,
          }
        },
        'move': {
          // '0': {
          //   top: 0,
          // },
          '100%': {
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        'enter-left-0.6s': 'fade-left 0.6s ease-out',
        'enter-left-1s': 'fade-left 1s ease-out',
        'enter-left-2s': 'fade-left 2s linear',
        'enter-right-1s': 'fade-right 1s linear',
        'enter-right-2s': 'fade-right 2s linear',
        'enter-down-1s': 'fade-down 1s linear',
        'enter-down-2s': 'fade-down 2s linear',
        'fade-in-1s': 'fade-in 1s linear',
        'fade-in-2s': 'fade-in 2s linear',
        'move' : 'move 3s linear ease-out',
      },
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        'ingetelex1': '#509696',
        'ingetelex2': '#69d1d1',
        'ingetelex3': '#5AB7BC',
        ingetelexblue: {
          '50': '#ffffff',
          '100': '#e0f2ef',
          '200': '#c0e4df',
          '300': '#a1d7cf',
          '400': '#81c9bf',
          '500': '#62bcaf',
          '600': '#52a095',
          '700': '#41847a',
          '800': '#316760',
          '900': '#204b45',
        },
        ingetelexgreen: {
          '50': '#ffffff',
          '100': '#e9f4e3',
          '200': '#d4e9c7',
          '300': '#bedeab',
          '400': '#a9d38f',
          '500': '#93c873',
          '600': '#7eaf60',
          '700': '#68954d',
          '800': '#537c39',
          '900': '#3d6226',
        }
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}
