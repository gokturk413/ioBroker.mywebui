const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1ec))/0x1+-parseInt(r(0x20a))/0x2+parseInt(r(0x208))/0x3+-parseInt(r(0x230))/0x4*(-parseInt(r(0x20e))/0x5)+parseInt(r(0x1e5))/0x6*(-parseInt(r(0x23c))/0x7)+-parseInt(r(0x218))/0x8*(-parseInt(r(0x1fb))/0x9)+-parseInt(r(0x1f1))/0xa*(-parseInt(r(0x21f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7bb9d));function b(c,d){c=c-0x1e1;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x215),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x224)](f=>f[t(0x1ee)](0x10)[t(0x1ef)](0x2,'0'))['join']('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[u(0x228)]();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[v(0x22c)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f[w(0x235)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0x1e4)](k,'')[w(0x228)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][w(0x201)]===0x4?'#'+m[0x1]['slice'](0x1)[w(0x229)]('')[w(0x224)](o=>o+o)[w(0x1ea)](''):m[0x1][w(0x20d)](0x0,0x7),f=f[w(0x1e4)](m[0x1],'')[w(0x228)]());}const h=f[w(0x229)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x22c)](q);}if(j[w(0x201)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c[x(0x233)]?x(0x216):'')+c['offsetX']+'px\x20'+c[x(0x22d)]+'px\x20'+c[x(0x202)]+'px\x20'+c[x(0x211)]+x(0x237)+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[y(0x20d)](0x3,0x5),0x10),f=parseInt(c[y(0x20d)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[z(0x22a)];['_removeBtn'];[z(0x1f2)];[z(0x234)];['_inputX'];['_inputY'];['_inputBlur'];[z(0x1e9)];[z(0x21d)];[z(0x1ff)];[z(0x209)];[z(0x1f6)];[z(0x1f8)];['_loadBtn'];[z(0x1e2)];[z(0x200)];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=z;super(c),this[A(0x22a)]=this[A(0x1fe)](A(0x221)),this['_removeBtn']=this[A(0x1fe)]('bse-remove-btn'),this['_insetCheck']=this['_getDomElement'](A(0x205)),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this['_inputX']=this[A(0x1fe)]('bse-x'),this[A(0x23d)]=this['_getDomElement']('bse-y'),this['_inputBlur']=this['_getDomElement']('bse-blur'),this['_inputSpread']=this[A(0x1fe)]('bse-spread'),this['_inputColor']=this['_getDomElement'](A(0x210)),this['_inputOpacity']=this['_getDomElement']('bse-opacity'),this['_opacityVal']=this[A(0x1fe)](A(0x214)),this['_previewBox']=this['_getDomElement']('bse-preview'),this['_cssOutput']=this['_getDomElement'](A(0x1fc)),this[A(0x212)]=this[A(0x1fe)](A(0x223)),this['_copyBtn']=this['_getDomElement'](A(0x207)),this['_applyBtn']=this['_getDomElement'](A(0x1eb)),this[A(0x1fe)]('bse-add-btn')[A(0x21b)]=()=>this['_addLayer'](),this['_getDomElement']('bse-dup-btn')[A(0x21b)]=()=>this[A(0x21e)](),this[A(0x1fe)]('bse-up-btn')['onclick']=()=>this[A(0x20c)](-0x1),this[A(0x1fe)]('bse-down-btn')[A(0x21b)]=()=>this[A(0x20c)](0x1),this['_removeBtn'][A(0x21b)]=()=>this['_removeLayer'](),this[A(0x1f2)][A(0x1e7)]=()=>{const B=A;this['_currentLayer']()[B(0x233)]=this['_insetCheck'][B(0x238)],this['_refresh']();},this['_enabledCheck']['onchange']=()=>{const C=A;this['_currentLayer']()['enabled']=this[C(0x234)]['checked'],this['_refresh']();};for(const [d,e,f]of[[this[A(0x227)],A(0x20b),'bse-x-val'],[this[A(0x23d)],'offsetY','bse-y-val'],[this[A(0x220)],'blur',A(0x23a)],[this[A(0x1e9)],A(0x211),A(0x231)]]){d[A(0x1f9)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d['value']),this[D(0x1fe)](f)[D(0x203)]=d[D(0x22e)]+'px',this[D(0x1e8)]();};}this['_inputColor']['oninput']=()=>{const E=A;this['_currentLayer']()['color']=this[E(0x21d)]['value'],this[E(0x1e8)]();},this[A(0x1ff)][A(0x1f9)]=()=>{const F=A;this['_currentLayer']()[F(0x219)]=Number(this['_inputOpacity']['value']),this['_opacityVal']['textContent']=this[F(0x1ff)][F(0x22e)]+'%',this['_refresh']();},this[A(0x1e2)][A(0x21b)]=()=>{navigator['clipboard']?.['writeText'](this['_cssOutput']['value'])['catch'](()=>{});},this['_applyBtn'][A(0x21b)]=()=>this[A(0x1f7)](),this[A(0x212)][A(0x21b)]=()=>{const G=A;this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this[G(0x1e8)]();},this[A(0x206)](),this['_renderList'](),this[A(0x20f)](),this['_refresh']();}['_loadFromPrimarySelection'](){const H=z,c=this[H(0x1e6)]?.['instanceServiceContainer']?.[H(0x1f0)]?.[H(0x23b)];if(!c)return;const d=c[H(0x232)](H(0x1ed));d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const I=z;return this[I(0x1f4)][this['_selectedIndex']];}['_addLayer'](){const J=z;this['_layers'][J(0x22c)](defaultLayer()),this['_selectedIndex']=this[J(0x1f4)]['length']-0x1,this['_renderList'](),this[J(0x20f)](),this[J(0x1e8)]();}['_duplicateLayer'](){const K=z,c={...this['_currentLayer']()};this[K(0x1f4)]['splice'](this[K(0x1fa)]+0x1,0x0,c),this['_selectedIndex']=this['_selectedIndex']+0x1,this[K(0x22b)](),this[K(0x20f)](),this['_refresh']();}['_removeLayer'](){const L=z;if(this['_layers'][L(0x201)]<=0x1)return;this['_layers']['splice'](this['_selectedIndex'],0x1),this[L(0x1fa)]=Math['min'](this['_selectedIndex'],this[L(0x1f4)][L(0x201)]-0x1),this['_renderList'](),this['_loadControls'](),this[L(0x1e8)]();}['_moveLayer'](c){const M=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers'][M(0x201)])return;[this[M(0x1f4)][d],this['_layers'][e]]=[this[M(0x1f4)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this[M(0x1e8)]();}[z(0x22b)](){const N=z;this[N(0x22a)][N(0x1e1)]='',this['_layers'][N(0x1f3)]((c,d)=>{const O=N,e=document['createElement']('li');if(d===this[O(0x1fa)])e[O(0x217)]['add'](O(0x204));const f=document['createElement']('span');f[O(0x236)]='swatch',f['style']['background']=c[O(0x239)],e['appendChild'](f);const g=document['createElement']('span');g['textContent']=''+(c['inset']?'inset\x20':'')+c[O(0x20b)]+O(0x213)+c['offsetY']+'px\x20'+c[O(0x202)]+O(0x213)+c['spread']+'px';if(!c['enabled'])g['classList']['add']('disabled-label');e['appendChild'](g),e[O(0x21b)]=()=>{this['_selectedIndex']=d,this['_renderList'](),this['_loadControls']();},this[O(0x22a)][O(0x22f)](e);});}[z(0x20f)](){const P=z,c=this['_currentLayer']();this['_insetCheck'][P(0x238)]=c['inset'],this['_enabledCheck']['checked']=c['enabled'],this['_inputX']['value']=String(c[P(0x20b)]),this['_getDomElement']('bse-x-val')[P(0x203)]=c['offsetX']+'px',this['_inputY'][P(0x22e)]=String(c['offsetY']),this[P(0x1fe)]('bse-y-val')['textContent']=c[P(0x22d)]+'px',this[P(0x220)]['value']=String(c['blur']),this['_getDomElement'](P(0x23a))['textContent']=c[P(0x202)]+'px',this[P(0x1e9)][P(0x22e)]=String(c['spread']),this[P(0x1fe)](P(0x231))[P(0x203)]=c['spread']+'px',this[P(0x21d)][P(0x22e)]=c[P(0x239)],this['_inputOpacity']['value']=String(c['opacity']),this[P(0x209)][P(0x203)]=c['opacity']+'%';}['_buildCss'](){const Q=z;return this[Q(0x1f4)]['filter'](c=>c['enabled'])[Q(0x224)](layerToCss)['join'](',\x20')||'none';}[z(0x1e8)](){const R=z,c=this['_buildCss']();this[R(0x1f6)][R(0x225)][R(0x222)]=c,this[R(0x1f8)]['value']=R(0x1e3)+c+';',this['_renderList']();}['_applyToSelection'](){const S=z;if(!this[S(0x1e6)])return;const c=this[S(0x1e6)][S(0x21c)][S(0x1f0)]['selectedElements'];if(!c?.[S(0x201)])return;const d=this[S(0x1fd)](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f[S(0x226)](S(0x1ed),d);}e[S(0x21a)]();}}function a(){const T=['_moveLayer','slice','4428210LaNivZ','_loadControls','bse-color','spread','_loadBtn','px\x20','bse-opacity-val','#000000','inset\x20','classList','1255808qXWLVS','opacity','commit','onclick','instanceServiceContainer','_inputColor','_duplicateLayer','352jmHbwz','_inputBlur','bse-layer-list','boxShadow','bse-load-btn','map','style','setStyle','_inputX','trim','split','_layerList','_renderList','push','offsetY','value','appendChild','4pfiAtU','bse-spread-val','getStyle','inset','_enabledCheck','match','className','px\x20rgba(','checked','color','bse-blur-val','primarySelection','4209877NPvThC','_inputY','innerHTML','_copyBtn','box-shadow:\x20','replace','6VkchQN','_designerCanvas','onchange','_refresh','_inputSpread','join','bse-apply-btn','844056FdSqDV','box-shadow','toString','padStart','selectionService','371060ZOKdMZ','_insetCheck','forEach','_layers','define','_previewBox','_applyToSelection','_cssOutput','oninput','_selectedIndex','9UMcJrp','bse-css-out','_buildCss','_getDomElement','_inputOpacity','_applyBtn','length','blur','textContent','selected','bse-inset','_loadFromPrimarySelection','bse-copy-btn','1048719QOlXut','_opacityVal','1254670pgAJsL','offsetX'];a=function(){return T;};return a();}customElements[z(0x1f5)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);