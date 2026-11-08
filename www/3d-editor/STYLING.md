# 3D Editor - Styling & Theming Guide

## Overview

The 3D editor is fully customizable via **CSS variables**. Change colors, spacing, fonts, and animations without modifying any source code!

## Quick Start

### Default Dark Theme
```html
<editor-3d></editor-3d>
```

### Use Predefined Theme
```html
<editor-3d theme="light"></editor-3d>
<editor-3d theme="ocean"></editor-3d>
<editor-3d theme="dracula"></editor-3d>
```

### Custom Theme
```html
<style>
  editor-3d {
    --color-accent: #ff6b6b;
    --color-bg-primary: #0a0e27;
  }
</style>

<editor-3d></editor-3d>
```

## Available Themes

### Built-in Themes

| Theme | Use Case |
|-------|----------|
| `dark` (default) | Professional dark UI |
| `light` | Light background |
| `material-dark` | Material Design dark |
| `ocean` | Blue/teal color scheme |
| `nord` | Arctic, north-bluish color |
| `dracula` | Dracula color scheme |
| `solarized-dark` | Solarized dark |
| `one-dark` | Atom One Dark |
| `monokai` | Monokai color scheme |

### Example
```html
<editor-3d theme="nord"></editor-3d>
```

## CSS Variables Reference

### Colors

```css
editor-3d {
  /* Primary background - main editor area */
  --color-bg-primary: #1e1e1e;
  
  /* Secondary - toolbar, panels */
  --color-bg-secondary: #2d2d2d;
  
  /* Tertiary - buttons, inputs */
  --color-bg-tertiary: #3d3d3d;
  
  /* Text colors */
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #b0b0b0;
  
  /* Borders */
  --color-border: #404040;
  
  /* Accents */
  --color-accent: #0098ff;
  --color-accent-hover: #00b3ff;
  
  /* Status colors */
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-danger: #f44336;
}
```

### Spacing

```css
editor-3d {
  --spacing-xs: 4px;    /* Extra small */
  --spacing-sm: 8px;    /* Small */
  --spacing-md: 12px;   /* Medium */
  --spacing-lg: 16px;   /* Large */
  --spacing-xl: 24px;   /* Extra large */
}
```

### Typography

```css
editor-3d {
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-md: 13px;
  --font-size-lg: 14px;
  --font-size-xl: 16px;
}
```

### Borders & Shadows

```css
editor-3d {
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.3);
}
```

### Animations

```css
editor-3d {
  --transition-fast: 100ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

### Layout Sizes

```css
editor-3d {
  --toolbar-height: 44px;
  --statusbar-height: 24px;
  --panel-width: 300px;
  --tab-height: 36px;
}
```

## Usage Examples

### Example 1: Custom Brand Colors
```html
<style>
  editor-3d {
    /* Use your brand colors */
    --color-accent: #ff6b6b;      /* Brand red */
    --color-success: #51cf66;     /* Brand green */
    --color-bg-primary: #1a1a2e;  /* Dark background */
    --color-text-primary: #eaeaea; /* Light text */
  }
</style>

<editor-3d></editor-3d>
```

### Example 2: Compact UI (Mobile)
```html
<style>
  editor-3d[size="compact"] {
    --spacing-xs: 2px;
    --spacing-sm: 4px;
    --spacing-md: 6px;
    --font-size-sm: 11px;
    --toolbar-height: 36px;
    --panel-width: 200px;
  }
</style>

<editor-3d size="compact"></editor-3d>
```

### Example 3: Wide Panels (Desktop)
```html
<style>
  editor-3d[layout="wide"] {
    --panel-width: 500px;
  }
</style>

<editor-3d layout="wide"></editor-3d>
```

### Example 4: Inherit from Design System
```html
<style>
  :root {
    --my-primary: #1976d2;
    --my-surface: #f5f5f5;
    --my-text: #212121;
  }
  
  editor-3d {
    --color-accent: var(--my-primary);
    --color-bg-primary: var(--my-surface);
    --color-text-primary: var(--my-text);
  }
</style>

<editor-3d></editor-3d>
```

### Example 5: Theme Switcher
```html
<style>
  editor-3d[theme="dark"] {
    --color-bg-primary: #1e1e1e;
    --color-text-primary: #e0e0e0;
  }
  
  editor-3d[theme="light"] {
    --color-bg-primary: #f5f5f5;
    --color-text-primary: #212121;
  }
</style>

<script>
  function setTheme(name) {
    document.querySelector('editor-3d').setAttribute('theme', name);
  }
</script>

<button onclick="setTheme('dark')">Dark</button>
<button onclick="setTheme('light')">Light</button>
<editor-3d></editor-3d>
```

## Accessibility

### Respect User Preferences
```css
/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  editor-3d {
    --color-bg-primary: #1e1e1e;
  }
}

/* Light mode preference */
@media (prefers-color-scheme: light) {
  editor-3d {
    --color-bg-primary: #f5f5f5;
  }
}

/* High contrast mode */
@media (prefers-contrast: more) {
  editor-3d {
    --color-border: #ffffff;
    --color-accent: #ffff00;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  editor-3d {
    --transition-fast: 0ms;
    --transition-normal: 0ms;
  }
}
```

## Advanced Customization

### Override Specific Sections

```css
/* Style only toolbar buttons */
editor-3d {
  /* Custom toolbar background */
  --color-bg-secondary: #1a1a2e;
}

/* Style only panels */
editor-3d {
  /* Custom panel width */
  --panel-width: 400px;
}
```

### CSS Classes (if needed)

The editor uses Shadow DOM, so external CSS selectors won't work. Use CSS variables instead!

If you need to style shadow DOM elements, use `::part()` pseudo-element (future enhancement).

## Performance Tips

1. **Avoid !important** - Let cascade work naturally
2. **Use CSS variables** - Updates are instant
3. **Batch changes** - Set multiple variables at once
4. **Use media queries** - For responsive designs

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Variables | ✅ All | ✅ All | ✅ 9.1+ | ✅ All |
| Viewport Units | ✅ All | ✅ All | ✅ All | ✅ All |
| Flexbox | ✅ All | ✅ All | ✅ All | ✅ All |
| CSS Grid | ✅ All | ✅ All | ✅ 10.1+ | ✅ All |

## Troubleshooting

### Colors not changing?
- Make sure you're using `editor-3d` selector
- Check browser DevTools for CSS specificity
- Verify CSS variable names match exactly

### Layout broken?
- Check that you're overriding size variables together
- Verify panel-width doesn't exceed container
- Test with default theme first

### Performance issues?
- Use CSS variables instead of modifying classes
- Avoid updating variables on every frame
- Use `requestAnimationFrame` for animations

## Examples in `themes.css`

See `src/styles/themes.css` for complete examples of:
- 8+ built-in themes
- Size variants (compact, large)
- Layout variants
- System preference detection
- High contrast mode

## Migration from Old Themes

If upgrading from a previous version:

```css
/* Old approach - don't use */
.editor-toolbar { background: red; }

/* New approach - use CSS variables */
editor-3d {
  --color-bg-secondary: red;
}
```

## Future Enhancements

Planned styling features:
- [ ] `::part()` pseudo-elements for direct styling
- [ ] Theme editor UI
- [ ] Export/import custom themes
- [ ] Animation presets
- [ ] System-wide theme detection
