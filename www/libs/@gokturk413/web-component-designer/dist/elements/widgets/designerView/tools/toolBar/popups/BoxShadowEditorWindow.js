const y=b;function a(){const U=['enabled','_inputSpread','_applyBtn','map','1285144tSsLGQ','Box\x20Shadow\x20Editor','_moveLayer','bse-down-btn','195636lAJXqw','checked','_opacityVal','inset\x20','span','spread','6705ezJiMb','_currentLayer','forEach','className','bse-up-btn','_addLayer','bse-opacity','add','value','bse-css-out','push','_renderList','none','box-shadow','_selectedIndex','_inputX','_layers','bse-color','onclick','bse-inset','offsetX','selectedElements','split','join','2ysNowc','_inputOpacity','#000000','_insetCheck','3750fgwzGr','textContent','bse-x-val','trim','5180aoOgqK','replace','windowContentStyle','padStart','6377yavmyR','opacity','classList','innerHTML','bse-blur-val','appendChild','_loadFromPrimarySelection','splice','_removeLayer','_inputColor','slice','length','color','setStyle','bse-x','bse-copy-btn','blur','onchange','style','_removeBtn','_previewBox','inset','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','_cssOutput','_loadControls','_layerList','_copyBtn','1290BKlPOK','offsetY','bse-y-val','bse-enabled','12762981hbkIjJ','_buildCss','Apply\x20box-shadow','_inputBlur','bse-spread-val','9EauTiV','filter','background','px\x20','createElement','380345rMWjOs','_refresh','selectionService','bse-opacity-val','instanceServiceContainer','windowTemplate','oninput','match','_getDomElement','_applyToSelection','bse-y','_designerCanvas'];a=function(){return U;};return a();}(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1a4))/0x1*(-parseInt(r(0x19c))/0x2)+-parseInt(r(0x1cc))/0x3*(parseInt(r(0x17e))/0x4)+-parseInt(r(0x1d1))/0x5+-parseInt(r(0x1a0))/0x6*(parseInt(r(0x1a8))/0x7)+-parseInt(r(0x17a))/0x8+parseInt(r(0x184))/0x9*(parseInt(r(0x1c3))/0xa)+parseInt(r(0x1c7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x48d8e));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x19e),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x179)](f=>f['toString'](0x10)[t(0x1a7)](0x2,'0'))[t(0x19b)]('');}function b(c,d){c=c-0x174;const e=a();let f=e[c];return f;}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0x1a3)]();if(k)d[u(0x18e)](k);f='';continue;}}}f+=j;}const g=f[u(0x1a3)]();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0x19e),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x1a5)](k,'')['trim']();const l=k[v(0x1d8)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x1d8)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][v(0x1b2)](0x1)[v(0x19a)]('')[v(0x179)](o=>o+o)['join'](''):m[0x1][v(0x1b2)](0x0,0x7),f=f['replace'](m[0x1],'')[v(0x1a3)]());}const h=f[v(0x19a)](/\s+/)[v(0x1cd)](Boolean);let i=![];const j=[];for(const o of h){if(o===v(0x1bd)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0x1b3)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c[w(0x1bd)]?'inset\x20':'')+c[w(0x198)]+w(0x1cf)+c['offsetY']+'px\x20'+c[w(0x1b8)]+'px\x20'+c[w(0x183)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[x(0x1b2)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[y(0x192)]=0x0;['_layerList'];['_removeBtn'];['_insetCheck'];['_enabledCheck'];[y(0x193)];['_inputY'];[y(0x1ca)];['_inputSpread'];['_inputColor'];[y(0x19d)];['_opacityVal'];[y(0x1bc)];[y(0x1bf)];['_loadBtn'];[y(0x1c2)];['_applyBtn'];get['windowTitle'](){const z=y;return z(0x17b);}get[y(0x1a6)](){return css`
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
    `;}get[y(0x1d6)](){const A=y;return A(0x1be);}constructor(c){const B=y;super(c),this['_layerList']=this[B(0x1d9)]('bse-layer-list'),this[B(0x1bb)]=this['_getDomElement']('bse-remove-btn'),this['_insetCheck']=this['_getDomElement'](B(0x197)),this['_enabledCheck']=this['_getDomElement'](B(0x1c6)),this[B(0x193)]=this['_getDomElement'](B(0x1b6)),this['_inputY']=this['_getDomElement'](B(0x174)),this[B(0x1ca)]=this[B(0x1d9)]('bse-blur'),this[B(0x177)]=this['_getDomElement']('bse-spread'),this[B(0x1b1)]=this['_getDomElement'](B(0x195)),this['_inputOpacity']=this['_getDomElement'](B(0x18a)),this['_opacityVal']=this[B(0x1d9)](B(0x1d4)),this[B(0x1bc)]=this['_getDomElement']('bse-preview'),this[B(0x1bf)]=this[B(0x1d9)](B(0x18d)),this['_loadBtn']=this[B(0x1d9)]('bse-load-btn'),this[B(0x1c2)]=this['_getDomElement'](B(0x1b7)),this[B(0x178)]=this[B(0x1d9)]('bse-apply-btn'),this['_getDomElement']('bse-add-btn')['onclick']=()=>this[B(0x189)](),this[B(0x1d9)]('bse-dup-btn')[B(0x196)]=()=>this['_duplicateLayer'](),this['_getDomElement'](B(0x188))['onclick']=()=>this[B(0x17c)](-0x1),this[B(0x1d9)](B(0x17d))[B(0x196)]=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this[B(0x19f)][B(0x1b9)]=()=>{const C=B;this[C(0x185)]()[C(0x1bd)]=this[C(0x19f)][C(0x17f)],this[C(0x1d2)]();},this['_enabledCheck'][B(0x1b9)]=()=>{const D=B;this['_currentLayer']()['enabled']=this['_enabledCheck'][D(0x17f)],this[D(0x1d2)]();};for(const [d,e,f]of[[this[B(0x193)],B(0x198),'bse-x-val'],[this['_inputY'],'offsetY',B(0x1c5)],[this['_inputBlur'],'blur',B(0x1ac)],[this['_inputSpread'],'spread',B(0x1cb)]]){d[B(0x1d7)]=()=>{this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d['value']+'px',this['_refresh']();};}this['_inputColor']['oninput']=()=>{const E=B;this['_currentLayer']()['color']=this[E(0x1b1)][E(0x18c)],this[E(0x1d2)]();},this['_inputOpacity']['oninput']=()=>{const F=B;this[F(0x185)]()['opacity']=Number(this['_inputOpacity'][F(0x18c)]),this['_opacityVal'][F(0x1a1)]=this[F(0x19d)][F(0x18c)]+'%',this['_refresh']();},this[B(0x1c2)][B(0x196)]=()=>{const G=B;navigator['clipboard']?.['writeText'](this['_cssOutput'][G(0x18c)])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this[B(0x1da)](),this['_loadBtn'][B(0x196)]=()=>{const H=B;this[H(0x1ae)](),this[H(0x18f)](),this['_loadControls'](),this[H(0x1d2)]();},this[B(0x1ae)](),this['_renderList'](),this[B(0x1c0)](),this[B(0x1d2)]();}[y(0x1ae)](){const I=y,c=this[I(0x175)]?.['instanceServiceContainer']?.[I(0x1d3)]?.['primarySelection'];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this[I(0x192)]=0x0);}[y(0x185)](){return this['_layers'][this['_selectedIndex']];}[y(0x189)](){const J=y;this['_layers'][J(0x18e)](defaultLayer()),this['_selectedIndex']=this[J(0x194)][J(0x1b3)]-0x1,this[J(0x18f)](),this['_loadControls'](),this['_refresh']();}['_duplicateLayer'](){const K=y,c={...this[K(0x185)]()};this['_layers']['splice'](this[K(0x192)]+0x1,0x0,c),this[K(0x192)]=this['_selectedIndex']+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[y(0x1b0)](){const L=y;if(this['_layers'][L(0x1b3)]<=0x1)return;this[L(0x194)][L(0x1af)](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this[L(0x192)],this['_layers']['length']-0x1),this['_renderList'](),this[L(0x1c0)](),this['_refresh']();}['_moveLayer'](c){const M=y,d=this[M(0x192)],e=d+c;if(e<0x0||e>=this[M(0x194)]['length'])return;[this[M(0x194)][d],this['_layers'][e]]=[this[M(0x194)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this[M(0x1d2)]();}['_renderList'](){const N=y;this[N(0x1c1)][N(0x1ab)]='',this['_layers'][N(0x186)]((c,d)=>{const O=N,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList'][O(0x18b)]('selected');const f=document[O(0x1d0)]('span');f[O(0x187)]='swatch',f['style'][O(0x1ce)]=c['color'],e[O(0x1ad)](f);const g=document[O(0x1d0)](O(0x182));g['textContent']=''+(c['inset']?O(0x181):'')+c['offsetX']+'px\x20'+c[O(0x1c4)]+O(0x1cf)+c[O(0x1b8)]+O(0x1cf)+c['spread']+'px';if(!c['enabled'])g[O(0x1aa)]['add']('disabled-label');e['appendChild'](g),e[O(0x196)]=()=>{const P=O;this['_selectedIndex']=d,this[P(0x18f)](),this['_loadControls']();},this[O(0x1c1)]['appendChild'](e);});}[y(0x1c0)](){const Q=y,c=this['_currentLayer']();this[Q(0x19f)][Q(0x17f)]=c['inset'],this['_enabledCheck']['checked']=c[Q(0x176)],this['_inputX'][Q(0x18c)]=String(c['offsetX']),this[Q(0x1d9)](Q(0x1a2))['textContent']=c['offsetX']+'px',this['_inputY'][Q(0x18c)]=String(c[Q(0x1c4)]),this['_getDomElement']('bse-y-val')[Q(0x1a1)]=c['offsetY']+'px',this[Q(0x1ca)]['value']=String(c[Q(0x1b8)]),this[Q(0x1d9)]('bse-blur-val')[Q(0x1a1)]=c[Q(0x1b8)]+'px',this[Q(0x177)][Q(0x18c)]=String(c['spread']),this['_getDomElement'](Q(0x1cb))[Q(0x1a1)]=c['spread']+'px',this['_inputColor'][Q(0x18c)]=c[Q(0x1b4)],this[Q(0x19d)][Q(0x18c)]=String(c[Q(0x1a9)]),this[Q(0x180)][Q(0x1a1)]=c[Q(0x1a9)]+'%';}['_buildCss'](){const R=y;return this[R(0x194)]['filter'](c=>c['enabled'])[R(0x179)](layerToCss)[R(0x19b)](',\x20')||R(0x190);}['_refresh'](){const S=y,c=this[S(0x1c8)]();this['_previewBox'][S(0x1ba)]['boxShadow']=c,this['_cssOutput']['value']='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const T=y;if(!this['_designerCanvas'])return;const c=this[T(0x175)][T(0x1d5)][T(0x1d3)][T(0x199)];if(!c?.[T(0x1b3)])return;const d=this['_buildCss'](),e=c[0x0]['openGroup'](T(0x1c9));for(const f of c){f[T(0x1b5)](T(0x191),d);}e['commit']();}}customElements['define']('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);