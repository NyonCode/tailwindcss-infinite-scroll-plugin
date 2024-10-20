const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, theme, matchUtilities }) {
  const infiniteScrollUtilities = {
    '.animate-infinite-scroll': {
      animation: 'infinite-scroll var(--animation-duration, 20s) linear infinite',
    },
    '.scroll-x': {
      'white-space': 'nowrap',
    },
    '.scroll-y': {
      'writing-mode': 'vertical-lr',
      'text-orientation': 'sideways',
    },
    '@keyframes infinite-scroll': {
      'from': {
        'transform': 'translate(var(--scroll-start, 0))',
      },
      'to': {
        'transform': 'translate(var(--scroll-end, -100%))',
      },
    },
  }

  addUtilities(infiniteScrollUtilities)

  matchUtilities(
    {
      'scroll': (value) => {
        const [direction, amount = '100%'] = value.split(' ')
        const isNegative = direction === 'left' || direction === 'up'
        const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y'
        return {
          '--scroll-start': isNegative ? `0` : `-${amount}`,
          '--scroll-end': isNegative ? `-${amount}` : `0`,
        }
      },
    },
    { values: theme('infiniteScroll') }
  )

  matchUtilities(
    {
      'scroll-duration': (value) => ({
        '--animation-duration': value,
      }),
    },
    { values: theme('duration') }
  )
})