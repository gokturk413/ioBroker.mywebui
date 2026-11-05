// Reusable Spectrum theme system for the webui designer (and runtime).
// - color modes: light / dark / darkest  (Spectrum 2)
// - custom accent colors
// - persisted in localStorage, applied to a global <sp-theme> root + CSS variables
// - emits 'webui-theme-change' on document
//
// Usage:
//   import { themeManager } from './theme-system.js';
//   themeManager.attach(document.body);     // wraps app in <sp-theme>, applies saved theme
//   themeManager.setColor('dark'); themeManager.setAccent('magenta');
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/spectrum-two/theme-light.js';
import '@spectrum-web-components/theme/spectrum-two/theme-dark.js';
import '@spectrum-web-components/theme/spectrum-two/theme-darkest.js';
import '@spectrum-web-components/theme/spectrum-two/scale-medium.js';
import '@spectrum-web-components/theme/spectrum-two/scale-large.js';

export const THEME_COLORS = { light: 'Light', dark: 'Dark', darkest: 'Darkest' };
export const THEME_ACCENTS = {
    blue:    '#2680eb',
    magenta: '#e54c8a',
    green:   '#33ab84',
    orange:  '#e08020',
    purple:  '#9256d9',
    cyan:    '#19b6c9',
};

const LS_KEY = 'webuiThemeV1';

class ThemeManager {
    constructor() {
        const saved = this._load();
        this.color = saved.color || 'darkest';
        this.accent = saved.accent || 'blue';
        this.scale = saved.scale || 'medium';      // medium (desktop) | large (touch)
        this._theme = null;                          // the <sp-theme> element
    }

    _load() { try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { return {}; } }
    _save() { localStorage.setItem(LS_KEY, JSON.stringify({ color: this.color, accent: this.accent, scale: this.scale })); }

    /** Ensure a global <sp-theme> exists; move `appRoot`'s children under it (or use existing). */
    attach(appRoot) {
        if (!this._theme) {
            this._theme = document.createElement('sp-theme');
            this._theme.setAttribute('system', 'spectrum-two');
            this._theme.id = 'webui-sp-theme';
        }
        if (appRoot && this._theme.parentElement !== appRoot) {
            // wrap: move existing children into the theme, then append theme
            while (appRoot.firstChild) this._theme.appendChild(appRoot.firstChild);
            appRoot.appendChild(this._theme);
        }
        this.apply();
        return this._theme;
    }

    /** Get the theme element (create detached if needed). */
    get element() {
        if (!this._theme) {
            this._theme = document.createElement('sp-theme');
            this._theme.setAttribute('system', 'spectrum-two');
            this._theme.id = 'webui-sp-theme';
        }
        return this._theme;
    }

    apply() {
        const t = this.element;
        t.setAttribute('color', this.color);
        t.setAttribute('scale', this.scale);
        const hex = THEME_ACCENTS[this.accent] || THEME_ACCENTS.blue;
        // expose accent both as our var and override Spectrum accent tokens
        t.style.setProperty('--accent', hex);
        t.style.setProperty('--spectrum-accent-color-default', hex);
        t.style.setProperty('--spectrum-accent-background-color-default', hex);
        document.documentElement.dataset.themeColor = this.color;
        document.documentElement.style.setProperty('--accent', hex);
        this._save();
        document.dispatchEvent(new CustomEvent('webui-theme-change', { detail: { color: this.color, accent: this.accent, scale: this.scale } }));
    }

    setColor(c) { if (THEME_COLORS[c]) { this.color = c; this.apply(); } }
    setAccent(a) { if (THEME_ACCENTS[a]) { this.accent = a; this.apply(); } }
    setScale(s) { if (s === 'medium' || s === 'large') { this.scale = s; this.apply(); } }
    get() { return { color: this.color, accent: this.accent, scale: this.scale }; }
}

export const themeManager = new ThemeManager();

/** Optional ready-made switcher control (returns a DOM element). */
export function createThemeSwitcher() {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;gap:8px;';
    const sel = document.createElement('select');
    sel.style.cssText = 'background:transparent;color:inherit;border:1px solid #555;border-radius:4px;padding:2px 6px;font-size:12px;';
    for (const [k, v] of Object.entries(THEME_COLORS)) { const o = document.createElement('option'); o.value = k; o.textContent = v; sel.appendChild(o); }
    sel.value = themeManager.color;
    sel.onchange = () => themeManager.setColor(sel.value);
    wrap.appendChild(sel);
    const acc = document.createElement('div'); acc.style.cssText = 'display:flex;gap:4px;';
    for (const [k, hex] of Object.entries(THEME_ACCENTS)) {
        const b = document.createElement('button');
        b.title = k; b.dataset.acc = k;
        b.style.cssText = `width:16px;height:16px;border-radius:50%;border:2px solid transparent;cursor:pointer;padding:0;background:${hex};`;
        b.onclick = () => { themeManager.setAccent(k); mark(); };
        acc.appendChild(b);
    }
    wrap.appendChild(acc);
    const mark = () => acc.querySelectorAll('button').forEach(b => b.style.borderColor = b.dataset.acc === themeManager.accent ? '#fff' : 'transparent');
    mark();
    return wrap;
}
