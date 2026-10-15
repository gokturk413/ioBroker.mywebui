const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1ce))/0x1*(-parseInt(r(0x1db))/0x2)+parseInt(r(0x1c7))/0x3+-parseInt(r(0x1fa))/0x4*(-parseInt(r(0x217))/0x5)+-parseInt(r(0x209))/0x6*(-parseInt(r(0x1e7))/0x7)+parseInt(r(0x20a))/0x8+-parseInt(r(0x1fb))/0x9*(-parseInt(r(0x1e2))/0xa)+-parseInt(r(0x212))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd8cd5));function b(c,d){c=c-0x1c2;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x1f2),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x1d4)](f=>f['toString'](0x10)[t(0x1e4)](0x2,'0'))[t(0x214)]('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0x1d9)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[v(0x1d9)]());if(f)d[v(0x1ff)](f);}return d[v(0x1cc)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')['trim']();const l=k[w(0x1d1)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][w(0x1cc)]===0x4?'#'+m[0x1]['slice'](0x1)[w(0x1cf)]('')['map'](o=>o+o)[w(0x214)](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')[w(0x1d9)]());}const h=f[w(0x1cf)](/\s+/)[w(0x1e5)](Boolean);let i=![];const j=[];for(const o of h){if(o===w(0x1eb)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x1ff)](q);}if(j[w(0x1cc)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function a(){const W=['_copyBtn','px\x20','_previewBox','3816KutsEn','4386472eVMNID','catch','_applyToSelection','innerHTML','bse-spread','checked','box-shadow','enabled','43261108UoGGoC','bse-css-out','join','_inputColor','bse-x-val','176590alzNHK','Apply\x20box-shadow','bse-x','_inputBlur','oninput','value','add','_layers','opacity','offsetY','_refresh','bse-y','getStyle','none','1365153RWhrPe','_inputX','bse-blur-val','span','px\x20rgba(','length','_insetCheck','10541NOwdDF','split','onclick','match','color','background','map','_inputOpacity','_loadFromPrimarySelection','toFixed','slice','trim','_selectedIndex','306OSodpW','_renderList','swatch','createElement','instanceServiceContainer','inset\x20','_inputY','15020xKLhLy','_enabledCheck','padStart','filter','appendChild','15029LVxsjz','_buildCss','textContent','_applyBtn','inset','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','style','spread','blur','_designerCanvas','className','#000000','_inputSpread','bse-spread-val','_layerList','_getDomElement','commit','bse-load-btn','_currentLayer','68iUTLnV','1431YRZyzt','windowTemplate','_loadBtn','setStyle','push','offsetX','_duplicateLayer','selectionService','_loadControls','_removeLayer','splice'];a=function(){return W;};return a();}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)[x(0x1d7)](0x2);return''+(c['inset']?x(0x1e0):'')+c['offsetX']+x(0x207)+c['offsetY']+x(0x207)+c[x(0x1ef)]+x(0x207)+c[x(0x1ee)]+x(0x1cb)+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[y(0x1d8)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];['_removeBtn'];[z(0x1cd)];['_enabledCheck'];[z(0x1c8)];[z(0x1e1)];['_inputBlur'];[z(0x1f3)];['_inputColor'];[z(0x1d5)];['_opacityVal'];[z(0x208)];['_cssOutput'];[z(0x1fd)];['_copyBtn'];['_applyBtn'];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[z(0x1fc)](){const A=z;return A(0x1ec);}constructor(c){const B=z;super(c),this['_layerList']=this['_getDomElement']('bse-layer-list'),this['_removeBtn']=this['_getDomElement']('bse-remove-btn'),this[B(0x1cd)]=this['_getDomElement']('bse-inset'),this[B(0x1e3)]=this[B(0x1f6)]('bse-enabled'),this[B(0x1c8)]=this['_getDomElement'](B(0x219)),this[B(0x1e1)]=this[B(0x1f6)](B(0x1c4)),this['_inputBlur']=this[B(0x1f6)]('bse-blur'),this[B(0x1f3)]=this['_getDomElement'](B(0x20e)),this['_inputColor']=this[B(0x1f6)]('bse-color'),this['_inputOpacity']=this[B(0x1f6)]('bse-opacity'),this['_opacityVal']=this[B(0x1f6)]('bse-opacity-val'),this['_previewBox']=this[B(0x1f6)]('bse-preview'),this['_cssOutput']=this[B(0x1f6)](B(0x213)),this['_loadBtn']=this[B(0x1f6)](B(0x1f8)),this['_copyBtn']=this['_getDomElement']('bse-copy-btn'),this['_applyBtn']=this[B(0x1f6)]('bse-apply-btn'),this[B(0x1f6)]('bse-add-btn')['onclick']=()=>this['_addLayer'](),this['_getDomElement']('bse-dup-btn')[B(0x1d0)]=()=>this[B(0x201)](),this[B(0x1f6)]('bse-up-btn')[B(0x1d0)]=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this[B(0x204)](),this['_insetCheck']['onchange']=()=>{const C=B;this['_currentLayer']()['inset']=this[C(0x1cd)][C(0x20f)],this[C(0x1c3)]();},this[B(0x1e3)]['onchange']=()=>{const D=B;this['_currentLayer']()['enabled']=this['_enabledCheck'][D(0x20f)],this[D(0x1c3)]();};for(const [d,e,f]of[[this[B(0x1c8)],'offsetX',B(0x216)],[this['_inputY'],'offsetY','bse-y-val'],[this['_inputBlur'],'blur',B(0x1c9)],[this['_inputSpread'],'spread',B(0x1f4)]]){d['oninput']=()=>{const E=B;this[E(0x1f9)]()[e]=Number(d[E(0x21c)]),this['_getDomElement'](f)[E(0x1e9)]=d['value']+'px',this['_refresh']();};}this['_inputColor'][B(0x21b)]=()=>{const F=B;this[F(0x1f9)]()[F(0x1d2)]=this['_inputColor']['value'],this[F(0x1c3)]();},this['_inputOpacity']['oninput']=()=>{const G=B;this[G(0x1f9)]()[G(0x21f)]=Number(this['_inputOpacity'][G(0x21c)]),this['_opacityVal']['textContent']=this['_inputOpacity']['value']+'%',this[G(0x1c3)]();},this[B(0x206)]['onclick']=()=>{const H=B;navigator['clipboard']?.['writeText'](this['_cssOutput'][H(0x21c)])[H(0x20b)](()=>{});},this[B(0x1ea)]['onclick']=()=>this['_applyToSelection'](),this['_loadBtn']['onclick']=()=>{const I=B;this[I(0x1d6)](),this['_renderList'](),this[I(0x203)](),this[I(0x1c3)]();},this[B(0x1d6)](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[z(0x1d6)](){const J=z,c=this[J(0x1f0)]?.[J(0x1df)]?.[J(0x202)]?.['primarySelection'];if(!c)return;const d=c[J(0x1c5)]('box-shadow');d&&(this[J(0x21e)]=parseCssBoxShadow(d),this[J(0x1da)]=0x0);}[z(0x1f9)](){const K=z;return this['_layers'][this[K(0x1da)]];}['_addLayer'](){const L=z;this[L(0x21e)][L(0x1ff)](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this[L(0x1dc)](),this[L(0x203)](),this['_refresh']();}[z(0x201)](){const M=z,c={...this['_currentLayer']()};this[M(0x21e)][M(0x205)](this[M(0x1da)]+0x1,0x0,c),this['_selectedIndex']=this['_selectedIndex']+0x1,this['_renderList'](),this['_loadControls'](),this[M(0x1c3)]();}['_removeLayer'](){const N=z;if(this[N(0x21e)][N(0x1cc)]<=0x1)return;this['_layers']['splice'](this[N(0x1da)],0x1),this['_selectedIndex']=Math['min'](this[N(0x1da)],this['_layers'][N(0x1cc)]-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const O=z,d=this[O(0x1da)],e=d+c;if(e<0x0||e>=this[O(0x21e)]['length'])return;[this['_layers'][d],this['_layers'][e]]=[this['_layers'][e],this[O(0x21e)][d]],this[O(0x1da)]=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const P=z;this['_layerList'][P(0x20d)]='',this['_layers']['forEach']((c,d)=>{const Q=P,e=document[Q(0x1de)]('li');if(d===this['_selectedIndex'])e['classList'][Q(0x21d)]('selected');const f=document[Q(0x1de)](Q(0x1ca));f[Q(0x1f1)]=Q(0x1dd),f[Q(0x1ed)][Q(0x1d3)]=c['color'],e[Q(0x1e6)](f);const g=document[Q(0x1de)](Q(0x1ca));g[Q(0x1e9)]=''+(c[Q(0x1eb)]?'inset\x20':'')+c[Q(0x200)]+'px\x20'+c[Q(0x1c2)]+Q(0x207)+c['blur']+'px\x20'+c[Q(0x1ee)]+'px';if(!c['enabled'])g['classList'][Q(0x21d)]('disabled-label');e[Q(0x1e6)](g),e[Q(0x1d0)]=()=>{const R=Q;this[R(0x1da)]=d,this[R(0x1dc)](),this[R(0x203)]();},this[Q(0x1f5)]['appendChild'](e);});}['_loadControls'](){const S=z,c=this[S(0x1f9)]();this['_insetCheck']['checked']=c['inset'],this['_enabledCheck'][S(0x20f)]=c['enabled'],this[S(0x1c8)]['value']=String(c[S(0x200)]),this[S(0x1f6)]('bse-x-val')['textContent']=c['offsetX']+'px',this[S(0x1e1)]['value']=String(c[S(0x1c2)]),this[S(0x1f6)]('bse-y-val')[S(0x1e9)]=c[S(0x1c2)]+'px',this[S(0x21a)]['value']=String(c[S(0x1ef)]),this['_getDomElement'](S(0x1c9))['textContent']=c['blur']+'px',this['_inputSpread']['value']=String(c['spread']),this[S(0x1f6)]('bse-spread-val')[S(0x1e9)]=c[S(0x1ee)]+'px',this[S(0x215)]['value']=c[S(0x1d2)],this[S(0x1d5)][S(0x21c)]=String(c[S(0x21f)]),this['_opacityVal']['textContent']=c[S(0x21f)]+'%';}[z(0x1e8)](){const T=z;return this['_layers'][T(0x1e5)](c=>c[T(0x211)])[T(0x1d4)](layerToCss)['join'](',\x20')||T(0x1c6);}['_refresh'](){const U=z,c=this[U(0x1e8)]();this[U(0x208)][U(0x1ed)]['boxShadow']=c,this['_cssOutput']['value']='box-shadow:\x20'+c+';',this[U(0x1dc)]();}[z(0x20c)](){const V=z;if(!this['_designerCanvas'])return;const c=this[V(0x1f0)][V(0x1df)][V(0x202)]['selectedElements'];if(!c?.[V(0x1cc)])return;const d=this[V(0x1e8)](),e=c[0x0]['openGroup'](V(0x218));for(const f of c){f[V(0x1fe)](V(0x210),d);}e[V(0x1f7)]();}}customElements['define']('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);