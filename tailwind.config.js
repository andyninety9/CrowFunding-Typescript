/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        primary: '#1DC071',
        secondary: '#6F49FD',
        text1: '#171725',
        text2: '#4B5264',
        text3: '#808191',
        text4: '#B2B3BD',
        'icon-color': '#A2A2A8',
        white: '#FFFFFF',
        whiteSoft: '#FCFBFF',
        graySoft: '#FCFCFC',
        grayf3: '#f3f3f3',
        strock: '#F1F1F3',
        lite: '#FCFCFD',
        error: '#EB5757',
        darkbg: '#13131A',
        darkSecondary: '#1C1C24',
        softDark: '#22222C',
        darkSoft: '#24242C',
        darkStroke: '#3A3A43',
        darkRed: '#422C32'
      },
      backgroundImage: {
        'gradient-CyanBlue': `linear-gradient(86.88deg, #3DD5F3, #3D8BFD)`,
        'gradient-BluePurple': `linear-gradient(86.88deg, #3D8BFD, #8c68cd)`,
        'gradient-PurplePink': `linear-gradient(86.88deg, #8c68cd, #de5c9d)`,
        'gradient-PinkRed': `linear-gradient(86.88deg, #de5c9d, #e35d6a)`,
        'gradient-RedOrange': `linear-gradient(-180deg, #f53d2d, #f63)`,
        'gradient-YellowTeal': `linear-gradient(86.88deg, #ffcd39, #4dd4ac)`,
        'gradient-Background': `linear-gradient(86.88deg, #383838, #191414)`
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
