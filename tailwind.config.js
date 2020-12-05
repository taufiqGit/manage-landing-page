

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      // #Primary
      BrightRed: 'hsl(12, 88%, 59%)',
      DarkBlue: 'hsl(228, 39%, 23%)',
      White: '#fff',
      // #Neutral
      DarkGrayishBlue: 'hsl(227, 12%, 61%)',
      VeryDarkBlue: 'hsl(233, 12%, 13%)',
      VeryPaleRed: 'hsl(13, 100%, 96%)',
      VaryLightGray: 'hsl(0, 0%, 98%)'
    },
    fontFamily: {
      BeVietnam: ['Be Vietnam', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
             'BostDesktop': "url('/src/images/bg-simplify-section-desktop.png')",
             'BostMobile': "url('/src/images/bg-simplify-section-mobile.png')",
      }),
     zIndex: {
        '-10': '-10',
     }, 
     inset: {
       '-32': '-16rem',
       '-8': '-2rem'
      },
      minWidth: {
        '25': '25rem'
      }
    }
  },
  variants: {},
  plugins: [],
}
