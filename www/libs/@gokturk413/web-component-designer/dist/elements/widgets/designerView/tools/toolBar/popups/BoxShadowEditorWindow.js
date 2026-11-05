const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1da))/0x1+parseInt(r(0x1f3))/0x2+-parseInt(r(0x202))/0x3+-parseInt(r(0x1bc))/0x4*(parseInt(r(0x1d4))/0x5)+-parseInt(r(0x1bf))/0x6+parseInt(r(0x1c2))/0x7+parseInt(r(0x1af))/0x8*(parseInt(r(0x1e8))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc873f));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0x1ab;const e=a();let f=e[c];return f;}function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x1c9),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)[t(0x1f4)](0x2,'0'))['join']('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0x211)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0x1e9)]();if(k)d[u(0x1e2)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[v(0x1e2)](f);}return d[v(0x211)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f[w(0x201)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0x1e3)](k,'')[w(0x1e9)]();const l=k[w(0x201)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[w(0x201)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][w(0x20d)](0x1)['split']('')['map'](o=>o+o)['join'](''):m[0x1][w(0x20d)](0x0,0x7),f=f[w(0x1e3)](m[0x1],'')['trim']());}const h=f[w(0x1f1)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x1e2)](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c[x(0x1b9)]/0x64)[x(0x1d6)](0x2);return''+(c['inset']?'inset\x20':'')+c[x(0x1ed)]+'px\x20'+c['offsetY']+x(0x1fa)+c[x(0x1b4)]+'px\x20'+c[x(0x1e6)]+x(0x1f9)+d+','+e+')';}function hexToRgb(c){const d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[y(0x1bb)]=0x0;['_layerList'];[y(0x1b2)];[y(0x1cf)];['_enabledCheck'];['_inputX'];['_inputY'];['_inputBlur'];['_inputSpread'];['_inputColor'];['_inputOpacity'];['_opacityVal'];['_previewBox'];['_cssOutput'];['_loadBtn'];[y(0x1d0)];['_applyBtn'];get['windowTitle'](){const z=y;return z(0x1d8);}get[y(0x1d2)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=y;super(c),this[A(0x1b7)]=this['_getDomElement'](A(0x1ec)),this[A(0x1b2)]=this[A(0x1fc)]('bse-remove-btn'),this['_insetCheck']=this[A(0x1fc)]('bse-inset'),this[A(0x1d9)]=this['_getDomElement']('bse-enabled'),this[A(0x1c0)]=this['_getDomElement']('bse-x'),this[A(0x1c4)]=this[A(0x1fc)]('bse-y'),this['_inputBlur']=this[A(0x1fc)](A(0x1c8)),this[A(0x212)]=this['_getDomElement']('bse-spread'),this[A(0x208)]=this[A(0x1fc)](A(0x1d7)),this[A(0x1e7)]=this[A(0x1fc)](A(0x209)),this[A(0x1cd)]=this[A(0x1fc)]('bse-opacity-val'),this[A(0x1ab)]=this[A(0x1fc)](A(0x1c1)),this[A(0x1fd)]=this[A(0x1fc)](A(0x1db)),this[A(0x1de)]=this['_getDomElement']('bse-load-btn'),this['_copyBtn']=this[A(0x1fc)](A(0x1fe)),this['_applyBtn']=this[A(0x1fc)](A(0x200)),this['_getDomElement']('bse-add-btn')[A(0x1d3)]=()=>this['_addLayer'](),this[A(0x1fc)]('bse-dup-btn')['onclick']=()=>this['_duplicateLayer'](),this[A(0x1fc)]('bse-up-btn')[A(0x1d3)]=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this[A(0x1b2)][A(0x1d3)]=()=>this['_removeLayer'](),this['_insetCheck'][A(0x1f5)]=()=>{const B=A;this[B(0x1b6)]()['inset']=this[B(0x1cf)][B(0x1f8)],this['_refresh']();},this[A(0x1d9)][A(0x1f5)]=()=>{const C=A;this['_currentLayer']()[C(0x1d5)]=this[C(0x1d9)]['checked'],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],'offsetX',A(0x1df)],[this[A(0x1c4)],A(0x1dc),A(0x20a)],[this[A(0x1e5)],A(0x1b4),A(0x1e4)],[this[A(0x212)],A(0x1e6),A(0x1cb)]]){d[A(0x1ee)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d[D(0x1d1)]+'px',this[D(0x1e0)]();};}this['_inputColor'][A(0x1ee)]=()=>{const E=A;this[E(0x1b6)]()['color']=this['_inputColor'][E(0x1d1)],this['_refresh']();},this[A(0x1e7)]['oninput']=()=>{const F=A;this[F(0x1b6)]()[F(0x1b9)]=Number(this[F(0x1e7)][F(0x1d1)]),this['_opacityVal'][F(0x1ad)]=this[F(0x1e7)][F(0x1d1)]+'%',this['_refresh']();},this['_copyBtn'][A(0x1d3)]=()=>{const G=A;navigator['clipboard']?.[G(0x1c6)](this[G(0x1fd)]['value'])[G(0x20e)](()=>{});},this[A(0x1f6)]['onclick']=()=>this[A(0x1bd)](),this[A(0x1de)]['onclick']=()=>{const H=A;this[H(0x1ef)](),this[H(0x207)](),this['_loadControls'](),this[H(0x1e0)]();},this[A(0x1ef)](),this[A(0x207)](),this[A(0x1ff)](),this[A(0x1e0)]();}['_loadFromPrimarySelection'](){const I=y,c=this[I(0x1fb)]?.['instanceServiceContainer']?.['selectionService']?.[I(0x1b8)];if(!c)return;const d=c[I(0x1ca)]('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const J=y;return this[J(0x1b3)][this[J(0x1bb)]];}[y(0x203)](){const K=y;this['_layers'][K(0x1e2)](defaultLayer()),this['_selectedIndex']=this[K(0x1b3)]['length']-0x1,this['_renderList'](),this['_loadControls'](),this[K(0x1e0)]();}[y(0x20b)](){const L=y,c={...this['_currentLayer']()};this['_layers'][L(0x1f0)](this[L(0x1bb)]+0x1,0x0,c),this[L(0x1bb)]=this[L(0x1bb)]+0x1,this[L(0x207)](),this[L(0x1ff)](),this['_refresh']();}['_removeLayer'](){const M=y;if(this[M(0x1b3)]['length']<=0x1)return;this['_layers'][M(0x1f0)](this[M(0x1bb)],0x1),this[M(0x1bb)]=Math[M(0x205)](this['_selectedIndex'],this[M(0x1b3)][M(0x211)]-0x1),this[M(0x207)](),this[M(0x1ff)](),this[M(0x1e0)]();}[y(0x20c)](c){const N=y,d=this[N(0x1bb)],e=d+c;if(e<0x0||e>=this['_layers'][N(0x211)])return;[this[N(0x1b3)][d],this['_layers'][e]]=[this[N(0x1b3)][e],this['_layers'][d]],this[N(0x1bb)]=e,this[N(0x207)](),this[N(0x1e0)]();}['_renderList'](){const O=y;this[O(0x1b7)][O(0x1ae)]='',this['_layers'][O(0x1b0)]((c,d)=>{const P=O,e=document[P(0x1c3)]('li');if(d===this['_selectedIndex'])e[P(0x1ce)]['add']('selected');const f=document[P(0x1c3)](P(0x213));f[P(0x1b1)]=P(0x1c5),f['style'][P(0x1f2)]=c[P(0x1cc)],e[P(0x1eb)](f);const g=document['createElement'](P(0x213));g[P(0x1ad)]=''+(c[P(0x204)]?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[P(0x1b4)]+'px\x20'+c[P(0x1e6)]+'px';if(!c[P(0x1d5)])g[P(0x1ce)]['add']('disabled-label');e['appendChild'](g),e[P(0x1d3)]=()=>{const Q=P;this[Q(0x1bb)]=d,this[Q(0x207)](),this['_loadControls']();},this[P(0x1b7)][P(0x1eb)](e);});}[y(0x1ff)](){const R=y,c=this[R(0x1b6)]();this['_insetCheck']['checked']=c[R(0x204)],this['_enabledCheck']['checked']=c[R(0x1d5)],this['_inputX']['value']=String(c['offsetX']),this[R(0x1fc)]('bse-x-val')['textContent']=c['offsetX']+'px',this['_inputY']['value']=String(c[R(0x1dc)]),this['_getDomElement'](R(0x20a))[R(0x1ad)]=c['offsetY']+'px',this['_inputBlur'][R(0x1d1)]=String(c[R(0x1b4)]),this[R(0x1fc)]('bse-blur-val')['textContent']=c[R(0x1b4)]+'px',this[R(0x212)]['value']=String(c['spread']),this[R(0x1fc)]('bse-spread-val')[R(0x1ad)]=c[R(0x1e6)]+'px',this[R(0x208)][R(0x1d1)]=c['color'],this['_inputOpacity'][R(0x1d1)]=String(c['opacity']),this['_opacityVal']['textContent']=c[R(0x1b9)]+'%';}['_buildCss'](){const S=y;return this[S(0x1b3)]['filter'](c=>c[S(0x1d5)])[S(0x210)](layerToCss)['join'](',\x20')||S(0x1dd);}['_refresh'](){const T=y,c=this[T(0x1b5)]();this['_previewBox']['style'][T(0x1ea)]=c,this[T(0x1fd)]['value']=T(0x1ac)+c+';',this['_renderList']();}[y(0x1bd)](){const U=y;if(!this[U(0x1fb)])return;const c=this[U(0x1fb)][U(0x206)][U(0x1be)]['selectedElements'];if(!c?.['length'])return;const d=this[U(0x1b5)](),e=c[0x0][U(0x1ba)]('Apply\x20box-shadow');for(const f of c){f[U(0x20f)](U(0x1c7),d);}e[U(0x1f7)]();}}customElements[y(0x1e1)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);function a(){const V=['353055yxOUxT','enabled','toFixed','bse-color','Box\x20Shadow\x20Editor','_enabledCheck','532191JIXMpj','bse-css-out','offsetY','none','_loadBtn','bse-x-val','_refresh','define','push','replace','bse-blur-val','_inputBlur','spread','_inputOpacity','2484126ziPygM','trim','boxShadow','appendChild','bse-layer-list','offsetX','oninput','_loadFromPrimarySelection','splice','split','background','1754984YGBDNY','padStart','onchange','_applyBtn','commit','checked','px\x20rgba(','px\x20','_designerCanvas','_getDomElement','_cssOutput','bse-copy-btn','_loadControls','bse-apply-btn','match','3658563AleQUv','_addLayer','inset','min','instanceServiceContainer','_renderList','_inputColor','bse-opacity','bse-y-val','_duplicateLayer','_moveLayer','slice','catch','setStyle','map','length','_inputSpread','span','_previewBox','box-shadow:\x20','textContent','innerHTML','8HILYsS','forEach','className','_removeBtn','_layers','blur','_buildCss','_currentLayer','_layerList','primarySelection','opacity','openGroup','_selectedIndex','20Tfulft','_applyToSelection','selectionService','1120716izgpAj','_inputX','bse-preview','6263040sOsSoh','createElement','_inputY','swatch','writeText','box-shadow','bse-blur','#000000','getStyle','bse-spread-val','color','_opacityVal','classList','_insetCheck','_copyBtn','value','windowContentStyle','onclick'];a=function(){return V;};return a();}