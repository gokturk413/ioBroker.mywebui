const z=b;function b(c,d){c=c-0x1a1;const e=a();let f=e[c];return f;}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1a2))/0x1+-parseInt(r(0x1be))/0x2+-parseInt(r(0x1f4))/0x3*(parseInt(r(0x1fa))/0x4)+parseInt(r(0x1c4))/0x5+parseInt(r(0x1c6))/0x6*(parseInt(r(0x1c8))/0x7)+parseInt(r(0x1f3))/0x8*(-parseInt(r(0x1ef))/0x9)+parseInt(r(0x1aa))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4bdb0));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x1d0),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x1c0)](f=>f['toString'](0x10)['padStart'](0x2,'0'))['join']('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0x1a6)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d[u(0x1d1)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d['push'](f);}return d[v(0x1a6)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d=w(0x1d0),e=0x64,f=c;const g=f[w(0x1cf)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')['trim']();const l=k[w(0x1cf)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[w(0x1ba)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[w(0x1cf)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)[w(0x1b2)]('')['map'](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')[w(0x1fd)]());}const h=f['split'](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x1d1)](q);}if(j[w(0x1a6)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c[x(0x1b4)]?x(0x1e1):'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c['spread']+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[y(0x1bb)](0x3,0x5),0x10),f=parseInt(c[y(0x1bb)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[z(0x1bf)]=0x0;['_layerList'];[z(0x1d5)];['_insetCheck'];['_enabledCheck'];['_inputX'];['_inputY'];[z(0x1b3)];['_inputSpread'];['_inputColor'];['_inputOpacity'];[z(0x1dd)];['_previewBox'];[z(0x1d7)];[z(0x1b8)];['_copyBtn'];[z(0x1a4)];get[z(0x1a8)](){const A=z;return A(0x1e0);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const B=z;super(c),this[B(0x1dc)]=this['_getDomElement']('bse-layer-list'),this['_removeBtn']=this[B(0x1bd)]('bse-remove-btn'),this[B(0x1f2)]=this[B(0x1bd)]('bse-inset'),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this['_inputX']=this['_getDomElement']('bse-x'),this[B(0x1c3)]=this['_getDomElement']('bse-y'),this[B(0x1b3)]=this['_getDomElement']('bse-blur'),this[B(0x1e7)]=this['_getDomElement']('bse-spread'),this[B(0x1fb)]=this[B(0x1bd)](B(0x1a1)),this[B(0x1f9)]=this[B(0x1bd)](B(0x1f1)),this[B(0x1dd)]=this['_getDomElement'](B(0x1e3)),this[B(0x1b5)]=this[B(0x1bd)]('bse-preview'),this['_cssOutput']=this['_getDomElement'](B(0x1e6)),this[B(0x1b8)]=this[B(0x1bd)]('bse-load-btn'),this[B(0x1b0)]=this['_getDomElement']('bse-copy-btn'),this[B(0x1a4)]=this['_getDomElement']('bse-apply-btn'),this['_getDomElement']('bse-add-btn')['onclick']=()=>this['_addLayer'](),this['_getDomElement'](B(0x1bc))[B(0x1f5)]=()=>this['_duplicateLayer'](),this['_getDomElement'](B(0x1cd))['onclick']=()=>this[B(0x1d3)](-0x1),this['_getDomElement']('bse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this[B(0x1ac)](),this['_insetCheck']['onchange']=()=>{const C=B;this['_currentLayer']()[C(0x1b4)]=this[C(0x1f2)][C(0x1cb)],this[C(0x1b7)]();},this[B(0x1cc)]['onchange']=()=>{const D=B;this[D(0x1d2)]()['enabled']=this[D(0x1cc)][D(0x1cb)],this['_refresh']();};for(const [d,e,f]of[[this[B(0x1c5)],'offsetX',B(0x1d4)],[this[B(0x1c3)],B(0x1eb),'bse-y-val'],[this['_inputBlur'],B(0x1ec),'bse-blur-val'],[this['_inputSpread'],'spread','bse-spread-val']]){d['oninput']=()=>{const E=B;this['_currentLayer']()[e]=Number(d['value']),this[E(0x1bd)](f)['textContent']=d[E(0x1c7)]+'px',this['_refresh']();};}this[B(0x1fb)][B(0x1c2)]=()=>{const F=B;this[F(0x1d2)]()['color']=this[F(0x1fb)]['value'],this[F(0x1b7)]();},this[B(0x1f9)]['oninput']=()=>{const G=B;this[G(0x1d2)]()['opacity']=Number(this[G(0x1f9)][G(0x1c7)]),this[G(0x1dd)][G(0x1c1)]=this[G(0x1f9)][G(0x1c7)]+'%',this[G(0x1b7)]();},this[B(0x1b0)]['onclick']=()=>{const H=B;navigator['clipboard']?.['writeText'](this['_cssOutput'][H(0x1c7)])[H(0x1ea)](()=>{});},this['_applyBtn']['onclick']=()=>this[B(0x1db)](),this[B(0x1b8)]['onclick']=()=>{const I=B;this['_loadFromPrimarySelection'](),this['_renderList'](),this[I(0x1f7)](),this['_refresh']();},this[B(0x1df)](),this[B(0x1f0)](),this[B(0x1f7)](),this[B(0x1b7)]();}['_loadFromPrimarySelection'](){const J=z,c=this[J(0x1a7)]?.['instanceServiceContainer']?.['selectionService']?.[J(0x1e8)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this[J(0x1bf)]=0x0);}[z(0x1d2)](){const K=z;return this[K(0x1da)][this[K(0x1bf)]];}[z(0x1ed)](){const L=z;this[L(0x1da)]['push'](defaultLayer()),this['_selectedIndex']=this['_layers'][L(0x1a6)]-0x1,this[L(0x1f0)](),this[L(0x1f7)](),this[L(0x1b7)]();}[z(0x1a9)](){const M=z,c={...this[M(0x1d2)]()};this['_layers']['splice'](this['_selectedIndex']+0x1,0x0,c),this[M(0x1bf)]=this[M(0x1bf)]+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_removeLayer'](){const N=z;if(this['_layers'][N(0x1a6)]<=0x1)return;this['_layers'][N(0x1b9)](this['_selectedIndex'],0x1),this['_selectedIndex']=Math[N(0x1d9)](this['_selectedIndex'],this[N(0x1da)]['length']-0x1),this[N(0x1f0)](),this[N(0x1f7)](),this['_refresh']();}[z(0x1d3)](c){const O=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this['_layers'][e]]=[this[O(0x1da)][e],this[O(0x1da)][d]],this['_selectedIndex']=e,this[O(0x1f0)](),this[O(0x1b7)]();}[z(0x1f0)](){const P=z;this[P(0x1dc)]['innerHTML']='',this['_layers'][P(0x1a5)]((c,d)=>{const Q=P,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList']['add'](Q(0x1ad));const f=document[Q(0x1b6)]('span');f['className']='swatch',f['style']['background']=c['color'],e[Q(0x1d8)](f);const g=document['createElement'](Q(0x1ae));g[Q(0x1c1)]=''+(c['inset']?Q(0x1e1):'')+c['offsetX']+'px\x20'+c['offsetY']+Q(0x1e4)+c['blur']+Q(0x1e4)+c['spread']+'px';if(!c['enabled'])g[Q(0x1de)]['add']('disabled-label');e['appendChild'](g),e[Q(0x1f5)]=()=>{const R=Q;this[R(0x1bf)]=d,this['_renderList'](),this[R(0x1f7)]();},this['_layerList']['appendChild'](e);});}[z(0x1f7)](){const S=z,c=this['_currentLayer']();this[S(0x1f2)][S(0x1cb)]=c[S(0x1b4)],this[S(0x1cc)][S(0x1cb)]=c['enabled'],this[S(0x1c5)]['value']=String(c['offsetX']),this[S(0x1bd)](S(0x1d4))['textContent']=c[S(0x1e9)]+'px',this['_inputY'][S(0x1c7)]=String(c[S(0x1eb)]),this[S(0x1bd)](S(0x1ab))['textContent']=c[S(0x1eb)]+'px',this['_inputBlur']['value']=String(c[S(0x1ec)]),this[S(0x1bd)]('bse-blur-val')['textContent']=c['blur']+'px',this[S(0x1e7)][S(0x1c7)]=String(c['spread']),this[S(0x1bd)]('bse-spread-val')['textContent']=c[S(0x1e2)]+'px',this[S(0x1fb)][S(0x1c7)]=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this[S(0x1dd)]['textContent']=c['opacity']+'%';}[z(0x1ee)](){const T=z;return this['_layers'][T(0x1fc)](c=>c['enabled'])[T(0x1c0)](layerToCss)[T(0x1f8)](',\x20')||T(0x1c9);}[z(0x1b7)](){const U=z,c=this['_buildCss']();this[U(0x1b5)]['style'][U(0x1d6)]=c,this['_cssOutput']['value']=U(0x1ce)+c+';',this[U(0x1f0)]();}['_applyToSelection'](){const V=z;if(!this['_designerCanvas'])return;const c=this['_designerCanvas']['instanceServiceContainer'][V(0x1f6)][V(0x1b1)];if(!c?.['length'])return;const d=this[V(0x1ee)](),e=c[0x0][V(0x1af)](V(0x1a3));for(const f of c){f[V(0x1e5)]('box-shadow',d);}e['commit']();}}function a(){const W=['380454PeUDPy','value','28wysOTH','none','define','checked','_enabledCheck','bse-up-btn','box-shadow:\x20','match','#000000','push','_currentLayer','_moveLayer','bse-x-val','_removeBtn','boxShadow','_cssOutput','appendChild','min','_layers','_applyToSelection','_layerList','_opacityVal','classList','_loadFromPrimarySelection','Box\x20Shadow\x20Editor','inset\x20','spread','bse-opacity-val','px\x20','setStyle','bse-css-out','_inputSpread','primarySelection','offsetX','catch','offsetY','blur','_addLayer','_buildCss','909bNTcYd','_renderList','bse-opacity','_insetCheck','12024SQxXPH','91515cWcsWr','onclick','selectionService','_loadControls','join','_inputOpacity','76aqsWUv','_inputColor','filter','trim','bse-color','588544fFmHWf','Apply\x20box-shadow','_applyBtn','forEach','length','_designerCanvas','windowTitle','_duplicateLayer','11955040iwYDML','bse-y-val','_removeLayer','selected','span','openGroup','_copyBtn','selectedElements','split','_inputBlur','inset','_previewBox','createElement','_refresh','_loadBtn','splice','round','slice','bse-dup-btn','_getDomElement','9482PzxaZO','_selectedIndex','map','textContent','oninput','_inputY','931235OukdIG','_inputX'];a=function(){return W;};return a();}customElements[z(0x1ca)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);