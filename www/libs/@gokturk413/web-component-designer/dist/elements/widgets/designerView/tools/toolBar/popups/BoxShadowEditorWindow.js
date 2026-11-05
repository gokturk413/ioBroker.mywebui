const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x104))/0x1+parseInt(r(0x10f))/0x2*(-parseInt(r(0xf9))/0x3)+parseInt(r(0xdd))/0x4*(-parseInt(r(0x118))/0x5)+-parseInt(r(0xdf))/0x6*(parseInt(r(0xcc))/0x7)+parseInt(r(0x116))/0x8*(parseInt(r(0xdb))/0x9)+-parseInt(r(0xbe))/0xa*(-parseInt(r(0xd7))/0xb)+parseInt(r(0xf3))/0xc*(parseInt(r(0xc2))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe88ef));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0xb9),'opacity':0x32,'enabled':!![]};}function b(c,d){c=c-0xb6;const e=a();let f=e[c];return f;}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x119)](f=>f[t(0xc4)](0x10)['padStart'](0x2,'0'))['join']('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0x11a)]();if(k)d[u(0x108)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c===v(0xcf))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[v(0x108)](f);}return d[v(0xf0)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f[w(0xe9)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0xc5)](k,'')[w(0x11a)]();const l=k[w(0xe9)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][w(0xf6)](0x1)[w(0xc8)]('')['map'](o=>o+o)[w(0xec)](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')[w(0x11a)]());}const h=f['split'](/\s+/)[w(0xe2)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x108)](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c[x(0x11e)]/0x64)['toFixed'](0x2);return''+(c[x(0xf1)]?x(0xff):'')+c['offsetX']+x(0x110)+c[x(0x106)]+'px\x20'+c[x(0x10b)]+x(0x110)+c[x(0xef)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[y(0xf6)](0x3,0x5),0x10),f=parseInt(c[y(0xf6)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[z(0xfb)]=[defaultLayer()];['_selectedIndex']=0x0;[z(0x11b)];[z(0x111)];['_insetCheck'];['_enabledCheck'];[z(0xf5)];[z(0xbf)];['_inputBlur'];[z(0xc1)];['_inputColor'];[z(0x102)];[z(0xd3)];[z(0xe1)];['_cssOutput'];['_loadBtn'];[z(0xc6)];['_applyBtn'];get[z(0xe5)](){const A=z;return A(0xde);}get[z(0x101)](){return css`
      * { box-sizing: border-box; }
      .bse-root {
        display: flex;
        flex-direction: column;
        width: 380px;
        color: var(--wcd-color-text, #ddd);
        font-family: sans-serif;
        font-size: 12px;
        padding: 8px;
        gap: 8px;
        background: var(--wcd-color-surface-raised, #2c2c2c);
      }
      .preview-area {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 110px;
        background: repeating-conic-gradient(#444 0% 25%, #333 0% 50%) 0 0 / 16px 16px;
        border-radius: 4px;
        border: 1px solid var(--wcd-color-border-strong, #111);
      }
      .preview-box {
        width: 70px;
        height: 70px;
        background: var(--wcd-box-shadow-editor-preview-background, #fff);
        border-radius: 4px;
      }
      .layers-row {
        display: flex;
        gap: 6px;
        align-items: flex-start;
      }
      .layer-list {
        list-style: none;
        margin: 0;
        padding: 0;
        flex: 1;
        min-height: 60px;
        max-height: 100px;
        overflow-y: auto;
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border-strong, #111);
        border-radius: 3px;
      }
      .layer-list li {
        padding: 4px 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .layer-list li.selected {
        background: var(--wcd-box-shadow-editor-preview-box-background, #3a3a5a);
      }
      .layer-list li .swatch {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: 1px solid var(--wcd-color-border, #555);
        flex-shrink: 0;
        display: inline-block;
      }
      .layer-list li .disabled-label { opacity: 0.4; }
      .layer-buttons {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .layer-buttons button {
        width: 24px;
        height: 24px;
        padding: 0;
        font-size: 14px;
        background: var(--wcd-color-surface-hover, #444);
        color: var(--wcd-color-text, #ddd);
        border: 1px solid var(--wcd-color-border-strong, #222);
        border-radius: 3px;
        cursor: pointer;
        line-height: 1;
      }
      .layer-buttons button:hover { background: #666; }
      .controls {
        display: grid;
        grid-template-columns: 90px 1fr 36px;
        gap: 4px 6px;
        align-items: center;
      }
      .controls label { color: var(--wcd-color-text-muted, #aaa); }
      .controls input[type=range] { width: 100%; }
      .controls input[type=number] {
        width: 100%;
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border, #444);
        color: var(--wcd-color-text, #ddd);
        border-radius: 3px;
        padding: 2px 4px;
      }
      .controls input[type=color] {
        width: 100%;
        height: 24px;
        padding: 1px;
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border, #444);
        border-radius: 3px;
        cursor: pointer;
      }
      .check-row {
        display: flex;
        gap: 14px;
        align-items: center;
        margin-bottom: 2px;
      }
      .check-row label {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        user-select: none;
      }
      .css-out {
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border, #333);
        border-radius: 3px;
        color: var(--wcd-color-accent-text, #7ec8e3);
        font-family: monospace;
        font-size: 11px;
        padding: 6px;
        resize: none;
        width: 100%;
        height: 48px;
      }
      .actions {
        display: flex;
        gap: 6px;
        justify-content: flex-end;
      }
      .actions .load-btn { margin-right: auto; }
      .actions button, .apply-btn {
        padding: 4px 12px;
        background: var(--wcd-color-surface-raised, #3a3a3a);
        color: var(--wcd-color-text, #ddd);
        border: 1px solid var(--wcd-color-border, #555);
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
      }
      .actions button:hover, .apply-btn:hover { background: #555; }
      .apply-btn {
        background: var(--wcd-color-accent, #3a6a9a);
        border-color: var(--wcd-color-accent-border, #2a5a8a);
      }
      .apply-btn:hover { background: #4a7aaa; }
      .val-label { text-align: right; color: var(--wcd-color-text-muted, #888); }
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const B=z;super(c),this[B(0x11b)]=this['_getDomElement'](B(0x10a)),this[B(0x111)]=this[B(0xc3)]('bse-remove-btn'),this['_insetCheck']=this[B(0xc3)]('bse-inset'),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this[B(0xf5)]=this['_getDomElement'](B(0xd8)),this['_inputY']=this[B(0xc3)]('bse-y'),this[B(0x112)]=this['_getDomElement'](B(0xc9)),this['_inputSpread']=this['_getDomElement']('bse-spread'),this['_inputColor']=this[B(0xc3)](B(0xd0)),this['_inputOpacity']=this['_getDomElement'](B(0xf7)),this['_opacityVal']=this[B(0xc3)](B(0xca)),this[B(0xe1)]=this[B(0xc3)]('bse-preview'),this[B(0xfa)]=this[B(0xc3)](B(0xcd)),this['_loadBtn']=this[B(0xc3)]('bse-load-btn'),this['_copyBtn']=this[B(0xc3)](B(0x109)),this[B(0xe3)]=this['_getDomElement']('bse-apply-btn'),this[B(0xc3)](B(0xf2))['onclick']=()=>this['_addLayer'](),this['_getDomElement'](B(0xf4))[B(0xce)]=()=>this[B(0xd6)](),this[B(0xc3)]('bse-up-btn')[B(0xce)]=()=>this['_moveLayer'](-0x1),this[B(0xc3)]('bse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this[B(0x111)]['onclick']=()=>this[B(0x115)](),this[B(0x11c)]['onchange']=()=>{const C=B;this[C(0x11d)]()['inset']=this['_insetCheck'][C(0xfe)],this['_refresh']();},this[B(0xf8)]['onchange']=()=>{const D=B;this[D(0x11d)]()[D(0xfc)]=this[D(0xf8)][D(0xfe)],this[D(0x117)]();};for(const [d,e,f]of[[this[B(0xf5)],B(0x10e),B(0xbb)],[this[B(0xbf)],'offsetY','bse-y-val'],[this[B(0x112)],'blur','bse-blur-val'],[this[B(0xc1)],B(0xef),'bse-spread-val']]){d['oninput']=()=>{const E=B;this[E(0x11d)]()[e]=Number(d[E(0xc0)]),this['_getDomElement'](f)[E(0xe4)]=d['value']+'px',this['_refresh']();};}this['_inputColor'][B(0xd9)]=()=>{const F=B;this['_currentLayer']()['color']=this[F(0x107)]['value'],this[F(0x117)]();},this[B(0x102)]['oninput']=()=>{const G=B;this[G(0x11d)]()[G(0x11e)]=Number(this[G(0x102)]['value']),this['_opacityVal'][G(0xe4)]=this['_inputOpacity']['value']+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const H=B;navigator[H(0xbd)]?.['writeText'](this['_cssOutput'][H(0xc0)])['catch'](()=>{});},this[B(0xe3)]['onclick']=()=>this[B(0xdc)](),this['_loadBtn'][B(0xce)]=()=>{const I=B;this[I(0xe6)](),this[I(0xcb)](),this['_loadControls'](),this[I(0x117)]();},this[B(0xe6)](),this['_renderList'](),this[B(0xfd)](),this[B(0x117)]();}['_loadFromPrimarySelection'](){const J=z,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[J(0xea)];if(!c)return;const d=c[J(0xb6)](J(0xbc));d&&(this[J(0xfb)]=parseCssBoxShadow(d),this[J(0x10c)]=0x0);}['_currentLayer'](){const K=z;return this[K(0xfb)][this[K(0x10c)]];}['_addLayer'](){const L=z;this[L(0xfb)]['push'](defaultLayer()),this[L(0x10c)]=this[L(0xfb)]['length']-0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[z(0xd6)](){const M=z,c={...this[M(0x11d)]()};this['_layers'][M(0x103)](this['_selectedIndex']+0x1,0x0,c),this[M(0x10c)]=this['_selectedIndex']+0x1,this['_renderList'](),this[M(0xfd)](),this['_refresh']();}[z(0x115)](){const N=z;if(this['_layers']['length']<=0x1)return;this[N(0xfb)]['splice'](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this['_selectedIndex'],this['_layers']['length']-0x1),this[N(0xcb)](),this[N(0xfd)](),this[N(0x117)]();}['_moveLayer'](c){const O=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this[O(0xfb)][d],this[O(0xfb)][e]]=[this['_layers'][e],this[O(0xfb)][d]],this[O(0x10c)]=e,this[O(0xcb)](),this['_refresh']();}[z(0xcb)](){const P=z;this[P(0x11b)]['innerHTML']='',this[P(0xfb)][P(0xc7)]((c,d)=>{const Q=P,e=document[Q(0x113)]('li');if(d===this['_selectedIndex'])e[Q(0xb7)]['add'](Q(0xba));const f=document['createElement'](Q(0xd5));f[Q(0x114)]='swatch',f[Q(0xed)][Q(0x100)]=c['color'],e[Q(0xe0)](f);const g=document[Q(0x113)](Q(0xd5));g['textContent']=''+(c[Q(0xf1)]?'inset\x20':'')+c[Q(0x10e)]+Q(0x110)+c[Q(0x106)]+'px\x20'+c['blur']+Q(0x110)+c['spread']+'px';if(!c['enabled'])g['classList']['add']('disabled-label');e[Q(0xe0)](g),e['onclick']=()=>{const R=Q;this[R(0x10c)]=d,this[R(0xcb)](),this[R(0xfd)]();},this[Q(0x11b)]['appendChild'](e);});}['_loadControls'](){const S=z,c=this['_currentLayer']();this[S(0x11c)]['checked']=c[S(0xf1)],this[S(0xf8)]['checked']=c[S(0xfc)],this['_inputX']['value']=String(c[S(0x10e)]),this['_getDomElement'](S(0xbb))[S(0xe4)]=c[S(0x10e)]+'px',this[S(0xbf)]['value']=String(c[S(0x106)]),this['_getDomElement'](S(0xee))[S(0xe4)]=c['offsetY']+'px',this[S(0x112)]['value']=String(c['blur']),this['_getDomElement']('bse-blur-val')[S(0xe4)]=c['blur']+'px',this[S(0xc1)]['value']=String(c[S(0xef)]),this['_getDomElement'](S(0x105))['textContent']=c[S(0xef)]+'px',this[S(0x107)]['value']=c[S(0xd2)],this['_inputOpacity'][S(0xc0)]=String(c[S(0x11e)]),this[S(0xd3)]['textContent']=c[S(0x11e)]+'%';}['_buildCss'](){const T=z;return this['_layers'][T(0xe2)](c=>c['enabled'])['map'](layerToCss)[T(0xec)](',\x20')||'none';}['_refresh'](){const U=z,c=this['_buildCss']();this['_previewBox']['style']['boxShadow']=c,this['_cssOutput'][U(0xc0)]=U(0xd1)+c+';',this[U(0xcb)]();}['_applyToSelection'](){const V=z;if(!this['_designerCanvas'])return;const c=this[V(0xe8)][V(0xd4)]['selectionService']['selectedElements'];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0][V(0xb8)]('Apply\x20box-shadow');for(const f of c){f[V(0xe7)](V(0xbc),d);}e[V(0xda)]();}}function a(){const W=['bse-color','box-shadow:\x20','color','_opacityVal','instanceServiceContainer','span','_duplicateLayer','11kLdMhH','bse-x','oninput','commit','45vwgPUL','_applyToSelection','32XdmkSf','Box\x20Shadow\x20Editor','5695770VSJnAF','appendChild','_previewBox','filter','_applyBtn','textContent','windowTitle','_loadFromPrimarySelection','setStyle','_designerCanvas','match','primarySelection','define','join','style','bse-y-val','spread','length','inset','bse-add-btn','1183884klsRQo','bse-dup-btn','_inputX','slice','bse-opacity','_enabledCheck','843VHRVWi','_cssOutput','_layers','enabled','_loadControls','checked','inset\x20','background','windowContentStyle','_inputOpacity','splice','282913CwJbvJ','bse-spread-val','offsetY','_inputColor','push','bse-copy-btn','bse-layer-list','blur','_selectedIndex','node-projects-designer-box-shadow-editor','offsetX','3290FrIhyB','px\x20','_removeBtn','_inputBlur','createElement','className','_removeLayer','2524784GVIszt','_refresh','1176940uYnTbh','map','trim','_layerList','_insetCheck','_currentLayer','opacity','getStyle','classList','openGroup','#000000','selected','bse-x-val','box-shadow','clipboard','4857010uPbOwl','_inputY','value','_inputSpread','325aSDyTg','_getDomElement','toString','replace','_copyBtn','forEach','split','bse-blur','bse-opacity-val','_renderList','7YRmuin','bse-css-out','onclick','none'];a=function(){return W;};return a();}customElements[z(0xeb)](z(0x10d),BoxShadowEditorWindow);