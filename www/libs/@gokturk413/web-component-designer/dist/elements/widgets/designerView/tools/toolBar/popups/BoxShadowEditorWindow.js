const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x17c))/0x1*(-parseInt(r(0x176))/0x2)+-parseInt(r(0x195))/0x3*(-parseInt(r(0x1b2))/0x4)+-parseInt(r(0x181))/0x5+-parseInt(r(0x1cc))/0x6*(-parseInt(r(0x18d))/0x7)+-parseInt(r(0x1ad))/0x8*(parseInt(r(0x17e))/0x9)+-parseInt(r(0x1a9))/0xa+-parseInt(r(0x192))/0xb*(-parseInt(r(0x1c9))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xab7b8));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x16f;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x1ac),'opacity':0x32,'enabled':!![]};}function a(){const V=['bse-opacity-val','bse-color','4555868YFzWKR','_refresh','selectedElements','checked','_renderList','_selectedIndex','commit','clipboard','bse-inset','_copyBtn','enabled','_cssOutput','_insetCheck','inset','value','blur','_currentLayer','_opacityVal','appendChild','replace','_inputBlur','oninput','bse-down-btn','96xOyBlB','_loadBtn','forEach','6dGOSWZ','bse-enabled','getStyle','_designerCanvas','_removeBtn','bse-preview','filter','_moveLayer','spread','_getDomElement','_duplicateLayer','toString','bse-spread-val','slice','trim','4OgShMO','inset\x20','_loadControls','bse-y-val','classList','bse-blur-val','221946wMdbgb','bse-blur','3871053wOOweY','boxShadow','_layerList','4951285MBBcDo','opacity','onchange','_inputOpacity','_previewBox','instanceServiceContainer','_inputX','_layers','_enabledCheck','bse-spread','bse-dup-btn','define','5778143ovmYYe','offsetX','split','_loadFromPrimarySelection','_addLayer','2469071VXcZIm','bse-remove-btn','windowTemplate','3kDUYOG','box-shadow','match','toFixed','push','_inputY','bse-copy-btn','createElement','textContent','_buildCss','length','_applyBtn','bse-x','offsetY','splice','px\x20','_inputColor','bse-opacity','catch','join','3332120Bubcmd','map','_inputSpread','#000000','24qMVHEN','add','onclick'];a=function(){return V;};return a();}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x1aa)](f=>f[t(0x172)](0x10)['padStart'](0x2,'0'))[t(0x1a8)]('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d[u(0x199)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[u(0x199)](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d['push'](f);}return d[v(0x19f)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f[w(0x197)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0x1c5)](k,'')[w(0x175)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][w(0x174)](0x1)[w(0x18f)]('')[w(0x1aa)](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f[w(0x18f)](/\s+/)[w(0x1d2)](Boolean);let i=![];const j=[];for(const o of h){if(o===w(0x1bf)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[w(0x19f)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c[x(0x182)]/0x64)[x(0x198)](0x2);return''+(c[x(0x1bf)]?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+x(0x1a4)+c[x(0x1c1)]+x(0x1a4)+c['spread']+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c[y(0x174)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[y(0x174)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[z(0x188)]=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];[z(0x1d0)];[z(0x1be)];['_enabledCheck'];[z(0x187)];['_inputY'];[z(0x1c6)];['_inputSpread'];['_inputColor'];[z(0x184)];[z(0x1c3)];['_previewBox'];[z(0x1bd)];['_loadBtn'];['_copyBtn'];['_applyBtn'];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[z(0x194)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=z;super(c),this[A(0x180)]=this[A(0x170)]('bse-layer-list'),this['_removeBtn']=this[A(0x170)](A(0x193)),this['_insetCheck']=this['_getDomElement'](A(0x1ba)),this['_enabledCheck']=this['_getDomElement'](A(0x1cd)),this[A(0x187)]=this[A(0x170)](A(0x1a1)),this[A(0x19a)]=this[A(0x170)]('bse-y'),this[A(0x1c6)]=this[A(0x170)](A(0x17d)),this[A(0x1ab)]=this[A(0x170)](A(0x18a)),this['_inputColor']=this[A(0x170)](A(0x1b1)),this[A(0x184)]=this['_getDomElement'](A(0x1a6)),this['_opacityVal']=this[A(0x170)](A(0x1b0)),this[A(0x185)]=this[A(0x170)](A(0x1d1)),this[A(0x1bd)]=this['_getDomElement']('bse-css-out'),this[A(0x1ca)]=this['_getDomElement']('bse-load-btn'),this[A(0x1bb)]=this['_getDomElement'](A(0x19b)),this['_applyBtn']=this[A(0x170)]('bse-apply-btn'),this[A(0x170)]('bse-add-btn')[A(0x1af)]=()=>this[A(0x191)](),this['_getDomElement'](A(0x18b))[A(0x1af)]=()=>this[A(0x171)](),this[A(0x170)]('bse-up-btn')['onclick']=()=>this[A(0x1d3)](-0x1),this[A(0x170)](A(0x1c8))[A(0x1af)]=()=>this['_moveLayer'](0x1),this[A(0x1d0)]['onclick']=()=>this['_removeLayer'](),this[A(0x1be)][A(0x183)]=()=>{const B=A;this['_currentLayer']()['inset']=this[B(0x1be)]['checked'],this[B(0x1b3)]();},this[A(0x189)]['onchange']=()=>{const C=A;this[C(0x1c2)]()[C(0x1bc)]=this['_enabledCheck']['checked'],this[C(0x1b3)]();};for(const [d,e,f]of[[this[A(0x187)],'offsetX','bse-x-val'],[this[A(0x19a)],A(0x1a2),A(0x179)],[this[A(0x1c6)],A(0x1c1),A(0x17b)],[this['_inputSpread'],A(0x16f),A(0x173)]]){d[A(0x1c7)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d[D(0x1c0)]),this['_getDomElement'](f)[D(0x19d)]=d[D(0x1c0)]+'px',this[D(0x1b3)]();};}this['_inputColor']['oninput']=()=>{const E=A;this[E(0x1c2)]()['color']=this[E(0x1a5)]['value'],this['_refresh']();},this[A(0x184)][A(0x1c7)]=()=>{const F=A;this[F(0x1c2)]()['opacity']=Number(this[F(0x184)]['value']),this[F(0x1c3)]['textContent']=this[F(0x184)][F(0x1c0)]+'%',this['_refresh']();},this[A(0x1bb)]['onclick']=()=>{const G=A;navigator[G(0x1b9)]?.['writeText'](this['_cssOutput'][G(0x1c0)])[G(0x1a7)](()=>{});},this[A(0x1a0)]['onclick']=()=>this['_applyToSelection'](),this['_loadBtn'][A(0x1af)]=()=>{const H=A;this[H(0x190)](),this[H(0x1b6)](),this['_loadControls'](),this[H(0x1b3)]();},this[A(0x190)](),this['_renderList'](),this[A(0x178)](),this[A(0x1b3)]();}[z(0x190)](){const I=z,c=this[I(0x1cf)]?.[I(0x186)]?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[I(0x1ce)](I(0x196));d&&(this[I(0x188)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const J=z;return this[J(0x188)][this['_selectedIndex']];}[z(0x191)](){const K=z;this['_layers']['push'](defaultLayer()),this['_selectedIndex']=this[K(0x188)][K(0x19f)]-0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_duplicateLayer'](){const L=z,c={...this[L(0x1c2)]()};this[L(0x188)][L(0x1a3)](this['_selectedIndex']+0x1,0x0,c),this['_selectedIndex']=this[L(0x1b7)]+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_removeLayer'](){const M=z;if(this['_layers'][M(0x19f)]<=0x1)return;this[M(0x188)][M(0x1a3)](this['_selectedIndex'],0x1),this[M(0x1b7)]=Math['min'](this['_selectedIndex'],this[M(0x188)][M(0x19f)]-0x1),this[M(0x1b6)](),this[M(0x178)](),this[M(0x1b3)]();}['_moveLayer'](c){const N=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this[N(0x188)][e]]=[this[N(0x188)][e],this[N(0x188)][d]],this[N(0x1b7)]=e,this[N(0x1b6)](),this[N(0x1b3)]();}['_renderList'](){const O=z;this['_layerList']['innerHTML']='',this['_layers'][O(0x1cb)]((c,d)=>{const P=O,e=document['createElement']('li');if(d===this[P(0x1b7)])e[P(0x17a)][P(0x1ae)]('selected');const f=document['createElement']('span');f['className']='swatch',f['style']['background']=c['color'],e['appendChild'](f);const g=document[P(0x19c)]('span');g[P(0x19d)]=''+(c[P(0x1bf)]?P(0x177):'')+c['offsetX']+'px\x20'+c['offsetY']+P(0x1a4)+c['blur']+'px\x20'+c['spread']+'px';if(!c[P(0x1bc)])g['classList']['add']('disabled-label');e[P(0x1c4)](g),e[P(0x1af)]=()=>{const Q=P;this[Q(0x1b7)]=d,this['_renderList'](),this['_loadControls']();},this[P(0x180)][P(0x1c4)](e);});}[z(0x178)](){const R=z,c=this[R(0x1c2)]();this[R(0x1be)]['checked']=c[R(0x1bf)],this[R(0x189)][R(0x1b5)]=c['enabled'],this['_inputX'][R(0x1c0)]=String(c[R(0x18e)]),this[R(0x170)]('bse-x-val')['textContent']=c['offsetX']+'px',this[R(0x19a)]['value']=String(c['offsetY']),this[R(0x170)]('bse-y-val')['textContent']=c[R(0x1a2)]+'px',this['_inputBlur']['value']=String(c['blur']),this[R(0x170)]('bse-blur-val')['textContent']=c[R(0x1c1)]+'px',this[R(0x1ab)][R(0x1c0)]=String(c[R(0x16f)]),this[R(0x170)](R(0x173))[R(0x19d)]=c['spread']+'px',this[R(0x1a5)]['value']=c['color'],this['_inputOpacity'][R(0x1c0)]=String(c['opacity']),this['_opacityVal']['textContent']=c['opacity']+'%';}[z(0x19e)](){const S=z;return this[S(0x188)]['filter'](c=>c['enabled'])['map'](layerToCss)[S(0x1a8)](',\x20')||'none';}[z(0x1b3)](){const T=z,c=this['_buildCss']();this[T(0x185)]['style'][T(0x17f)]=c,this[T(0x1bd)]['value']='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const U=z;if(!this[U(0x1cf)])return;const c=this['_designerCanvas']['instanceServiceContainer']['selectionService'][U(0x1b4)];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f['setStyle']('box-shadow',d);}e[U(0x1b8)]();}}customElements[z(0x18c)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);