// Spectrum 2 (S2) pilot — 2D DESIGNER property grid restyle + THEME SYSTEM.
// □ binding indicators + functionality preserved; value editors = Spectrum.
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/spectrum-two/theme-light.js';
import '@spectrum-web-components/theme/spectrum-two/theme-dark.js';
import '@spectrum-web-components/theme/spectrum-two/theme-darkest.js';
import '@spectrum-web-components/theme/spectrum-two/scale-medium.js';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/number-field/sp-number-field.js';
import '@spectrum-web-components/picker/sp-picker.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/switch/sp-switch.js';
import '@spectrum-web-components/swatch/sp-swatch.js';
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/action-group/sp-action-group.js';

const TABS = ['PROPERTIES', 'DYNAMIC', 'ATTRIBUTES', 'COMMON', 'STYLES'];

const PROPS = [
    { name: 'width',    type: 'number',  value: 75,  state: 'set' },
    { name: 'height',   type: 'number',  value: 200, state: 'set' },
    { name: 'greenOn',  type: 'signal',  value: '',  state: 'bound' },
    { name: 'yellowOn', type: 'signal',  value: '',  state: 'none' },
    { name: 'redOn',    type: 'boolean', value: true,state: 'set' },
    { name: 'label',    type: 'string',  value: 'Pump 1', state: 'set' },
    { name: 'mode',     type: 'enum',    value: 'auto', values: ['auto', 'manual', 'off'], state: 'none' },
    { name: 'color',    type: 'color',   value: '#3a6ea8', state: 'set' },
];

const STATE_BG = { none: 'transparent', set: '#ffffff', some: '#808080', bound: '#e08020' };
const STATE_ORDER = ['none', 'set', 'bound'];

// ── THEME SYSTEM ──────────────────────────────────────────────────────────────
// Spectrum color modes + custom accent colors. Persisted to localStorage.
const THEMES = { light: 'Light', dark: 'Dark', darkest: 'Darkest' };
const ACCENTS = { blue: '#2680eb', magenta: '#e54c8a', green: '#33ab84', orange: '#e08020', purple: '#9256d9' };

const root = document.getElementById('app');
const theme = document.createElement('sp-theme');
theme.setAttribute('system', 'spectrum-two');
theme.setAttribute('scale', 'medium');

function applyTheme(color, accent) {
    theme.setAttribute('color', color);
    theme.style.setProperty('--accent', ACCENTS[accent]);
    document.body.dataset.theme = color;
    localStorage.setItem('pilotTheme', JSON.stringify({ color, accent }));
}
const saved = (() => { try { return JSON.parse(localStorage.getItem('pilotTheme')); } catch { return null; } })() || { color: 'darkest', accent: 'magenta' };

// ── toolbar (theme switcher) ──
const bar = document.createElement('div');
bar.className = 'pg-themebar';
bar.innerHTML = `<span class="pg-tb-lbl">Theme</span>`;
const sel = document.createElement('sp-picker');
sel.setAttribute('size', 's');
sel.value = saved.color;
for (const [k, v] of Object.entries(THEMES)) { const mi = document.createElement('sp-menu-item'); mi.value = k; mi.textContent = v; sel.appendChild(mi); }
sel.addEventListener('change', () => applyTheme(sel.value, current.accent && current.accent || sel._acc || saved.accent));
bar.appendChild(sel);
const accWrap = document.createElement('div'); accWrap.className = 'pg-accents';
for (const [k, hex] of Object.entries(ACCENTS)) {
    const d = document.createElement('button'); d.className = 'pg-acc'; d.title = k; d.style.background = hex; d.dataset.acc = k;
    d.onclick = () => { current.accent = k; applyTheme(sel.value, k); markAcc(); };
    accWrap.appendChild(d);
}
bar.appendChild(accWrap);
const current = { accent: saved.accent };
function markAcc() { accWrap.querySelectorAll('.pg-acc').forEach(b => b.classList.toggle('on', b.dataset.acc === current.accent)); }

// ── panel ──
const panel = document.createElement('div');
panel.className = 'pg-panel';
panel.innerHTML = `
  <div class="pg-head">
    <div class="pg-head-row two"><span class="pg-head-lbl">Type:</span><span class="pg-type">webui-controls-pumps-pump</span></div>
    <div class="pg-head-row"><span class="pg-sq" title="id"></span><span></span><span class="pg-head-lbl">Id:</span><sp-textfield quiet size="s" class="pg-hi"></sp-textfield></div>
    <div class="pg-head-row"><span class="pg-sq" title="innerHTML" style="background:#fff"></span><span class="pg-sq" title="textContent"></span><span class="pg-head-lbl">Content:</span><sp-textfield quiet size="s" class="pg-hi"></sp-textfield></div>
  </div>
  <div class="pg-tabs"></div>
  <div class="pg-rows"></div>
  <div class="pg-ctx" id="pgctx">
    <div class="pg-ctx-i">clear</div>
    <div class="pg-ctx-i">edit as text</div>
    <div class="pg-ctx-sep"></div>
    <div class="pg-ctx-i">edit binding</div>
  </div>`;

const tabsEl = panel.querySelector('.pg-tabs');
TABS.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'pg-tab' + (i === 0 ? ' active' : '');
    el.textContent = t;
    el.onclick = () => { tabsEl.querySelectorAll('.pg-tab').forEach(x => x.classList.remove('active')); el.classList.add('active'); };
    tabsEl.appendChild(el);
});

const ctx = panel.querySelector('#pgctx');
const openCtx = (x, y) => { ctx.style.left = x + 'px'; ctx.style.top = y + 'px'; ctx.style.display = 'block'; };
document.addEventListener('click', () => ctx.style.display = 'none', true);

const rowsEl = panel.querySelector('.pg-rows');
for (const p of PROPS) {
    const row = document.createElement('div'); row.className = 'pg-row';
    const sq = document.createElement('span'); sq.className = 'pg-sq';
    sq.style.background = STATE_BG[p.state]; sq.title = p.name + ': ' + p.state;
    sq.onclick = (e) => { e.stopPropagation();
        const base = p.state === 'some' ? 'none' : p.state;
        const next = STATE_ORDER[(STATE_ORDER.indexOf(base) + 1) % STATE_ORDER.length];
        p.state = next; sq.style.background = STATE_BG[next]; sq.title = p.name + ': ' + next; renderEditor();
    };
    sq.oncontextmenu = (e) => { e.preventDefault(); e.stopPropagation(); openCtx(e.clientX, e.clientY); };

    const name = document.createElement('span'); name.className = 'pg-name'; name.textContent = p.name;
    const cell = document.createElement('span'); cell.className = 'pg-cell';

    const renderEditor = () => {
        cell.innerHTML = '';
        if (p.state === 'bound') { const b = document.createElement('span'); b.className = 'pg-bound'; b.textContent = p.value || '0_userdata.0.' + p.name; cell.appendChild(b); return; }
        let ed;
        if (p.type === 'number') { ed = document.createElement('sp-number-field'); ed.value = p.value; ed.setAttribute('size','s'); }
        else if (p.type === 'string' || p.type === 'signal') { ed = document.createElement('sp-textfield'); ed.value = p.value; ed.setAttribute('size','s'); }
        else if (p.type === 'boolean') { ed = document.createElement('sp-switch'); if (p.value) ed.setAttribute('checked',''); }
        else if (p.type === 'enum') { ed = document.createElement('sp-picker'); ed.setAttribute('size','s'); ed.value = p.value; (p.values||[]).forEach(v => { const mi = document.createElement('sp-menu-item'); mi.value = v; mi.textContent = v; ed.appendChild(mi); }); }
        else if (p.type === 'color') { ed = document.createElement('sp-swatch'); ed.setAttribute('color', p.value); ed.setAttribute('size','s'); }
        ed.style.width = (p.type === 'boolean' || p.type === 'color') ? 'auto' : '100%';
        cell.appendChild(ed);
        if (p.type === 'signal') { const btn = document.createElement('sp-action-button'); btn.setAttribute('size','s'); btn.setAttribute('quiet',''); btn.textContent = '…'; cell.appendChild(btn); }
    };
    renderEditor();
    row.appendChild(sq); row.appendChild(name); row.appendChild(cell); rowsEl.appendChild(row);
}

theme.appendChild(bar);
theme.appendChild(panel);
root.appendChild(theme);
applyTheme(saved.color, saved.accent);
markAcc();
