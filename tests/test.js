const plugin = require('../src/index')  // Upravte cestu podle vaší struktury projektu
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      Object.assign(config, {
        content: [{
          raw: String.raw`
            <div class="animate-infinite-scroll scroll-x scroll-right scroll-left scroll-duration-5s">
              Test content
            </div>
          `,
        }],
        corePlugins: false,
        plugins: [plugin],
      })
    )
  )
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then((result) => {
      return result.css
    })
}

describe('Tailwind Infinite Scroll Plugin', () => {
  it('generates the correct CSS for keyframes', async () => {
    const css = await generatePluginCss({})

    expect(css).toMatch(/@keyframes\s+infinite-scroll\s*{/);
    expect(css).toMatch(/from\s*{\s*transform:\s*translate\(var\(--scroll-start,\s*0\)\)\s*}/);
    expect(css).toMatch(/to\s*{\s*transform:\s*translate\(var\(--scroll-end,\s*-100%\)\)\s*}/);
  })

  it('generates the correct CSS for animation utility', async () => {
    const css = await generatePluginCss({})

    expect(css).toContain('.animate-infinite-scroll')
    expect(css).toContain('animation: infinite-scroll var(--animation-duration, 20s) linear infinite')
  })

  it('generates the correct CSS for scroll directions', async () => {
    const css = await generatePluginCss({
      theme: {
        infiniteScroll: {
          'left': 'left',
          'right': 'right',
        },
      },
    })

    expect(css).toContain('.scroll-left')
    expect(css).toContain('.scroll-right')
    expect(css).toContain('--scroll-start:')
    expect(css).toContain('--scroll-end:')
  })

  it('generates the correct CSS for scroll durations', async () => {
    const css = await generatePluginCss({
      theme: {
        duration: {
          '5s': '5s',
        },
      },
    })

    expect(css).toContain('.scroll-duration-5s')
    expect(css).toContain('--animation-duration: 5s')
  })
})