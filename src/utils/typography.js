import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 2,
  headerFontFamily: [
    'Ubuntu',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Ubuntu',
    'serif'
  ],
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: [
        '700',
        '400'
      ]
    }
  ]
})

export default typography