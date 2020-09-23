module.exports = {
  purge: [],
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./pages/**/*.tsx",
  //     "./pages/**/*.jsx",
  //     "./container/**/*.tsx",
  //     "./container/**/*.jsx",
  //   ]
  // },
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      rotate: {
        '1': '1deg',
        '-1': '-1deg'
      },
      minWidth: {
        '275': '275px'
      },
      spacing: {
        '450': '450px',
        '400': '400px',
        '300': '300px',
        '260': '260px',
        '110': '110px'
      },
      fontSize: {
        '1-2': '1.2rem',
        '2-8': '2.8rem'
      },
      boxShadow: {
        xs: '0 0 40px rgba(0, 0, 0, 0.1)'
      },
      minHeight: {
        '778': '778px'
      },
      maxHeight: {
        'full-100': 'calc(100% - 100px)'
      },
      height: {
        '100-5': 'calc(100% - 5rem)'
      },
      letterSpacing: {
        widest: '6px',
        'widest-43': '0.43em'
      },
      width: {
        '23': '23.5rem'
      },
      flex: {
        '23': '0 0 23.5rem'
      },
      colors: {
        gray: {
          '100': '#E5E5E5',
          '200': '#BDBDBD',
          '300': '#4F4F4F',
          '400': '#191919',
          '500': '#242528',
          '600': '#5B5B5B',
          '700': '#343434'
        },
        purple: {
          '100': '#AD60CA',
          '200': '#803A9A',
          '300': '#BB51E2',
        },
        lightGreen: {
          '100': '#4AFF47',
          '200': '#16FF11',
        },
        blue: {
          '100': '#2F80ED'
        },
        darkBg: 'rgba(0, 0, 0, 0.8)',
      },
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      blender: 'Blender Pro',
      menlo: 'Menlo Regular'
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-blend-mode')(), // no options to configure
  ],
}