#  Tailwind CSS Infinite Scroll Plugin

This plugin adds utilities to create infinite scrolling effects in Tailwind CSS.

## Installation

1. Install the plugin:

```bash
npm install tailwindcss-infinite-scroll
```

2. Add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-infinite-scroll'),
    // ...
  ],
}
```

## Usage

The plugin provides several utilities for creating infinite scroll effects:

### Basic Animation

Use the `animate-infinite-scroll` class to apply the infinite scroll animation:

```html
<div class="animate-infinite-scroll">
  <!-- Your content here -->
</div>
```

### Scroll Direction

Use the `scroll-{direction}` utilities to set the scroll direction:

- `scroll-left`
- `scroll-right`
- `scroll-up`
- `scroll-down`

Example:

```html
<div class="animate-infinite-scroll scroll-left">
  <!-- Content scrolling to the left -->
</div>
```

### Scroll Amount

You can specify a custom scroll amount:

```html
<div class="animate-infinite-scroll scroll-left-50%">
  <!-- Content scrolling to the left by 50% -->
</div>
```

### Scroll Duration

Control the animation duration with `scroll-duration-{time}`:

```html
<div class="animate-infinite-scroll scroll-left scroll-duration-10s">
  <!-- Content scrolling to the left over 10 seconds -->
</div>
```

### Horizontal vs Vertical Scrolling

Use `scroll-x` for horizontal scrolling and `scroll-y` for vertical scrolling:

```html
<div class="animate-infinite-scroll scroll-x scroll-left">
  <!-- Horizontal scrolling content -->
</div>

<div class="animate-infinite-scroll scroll-y scroll-up">
  <!-- Vertical scrolling content -->
</div>
```

## Customization

You can customize the available scroll directions and durations in your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      infiniteScroll: {
        'left-half': 'left 50%',
        'right-slow': 'right 25%',
        // Add more custom directions and amounts
      },
      duration: {
        '15s': '15s',
        '30s': '30s',
        // Add more custom durations
      }
    }
  }
}
```

## Examples

1. Simple left-to-right scroll:

```html
<div class="animate-infinite-scroll scroll-x scroll-right">
  <span class="inline-block px-4">Item 1</span>
  <span class="inline-block px-4">Item 2</span>
  <span class="inline-block px-4">Item 3</span>
</div>
```

2. Vertical scroll with custom duration:

```html
<div class="animate-infinite-scroll scroll-y scroll-down scroll-duration-15s">
  <p class="mb-4">Section 1</p>
  <p class="mb-4">Section 2</p>
  <p class="mb-4">Section 3</p>
</div>
```

3. Custom scroll amount:

```html
<div class="animate-infinite-scroll scroll-left-half">
  <!-- Content scrolling left by 50% -->
</div>
```

These utilities provide a flexible way to create infinite scroll effects in your Tailwind CSS projects. Experiment with different combinations to achieve the desired scrolling behavior.