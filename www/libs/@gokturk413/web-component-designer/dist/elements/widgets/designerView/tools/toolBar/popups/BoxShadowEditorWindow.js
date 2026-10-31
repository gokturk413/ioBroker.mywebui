function a(){const X=['_opacityVal','match','toFixed','selectionService','bse-blur-val','onclick','opacity','min','bse-down-btn','inset','className','classList','bse-x-val','enabled','_enabledCheck','span','color','box-shadow','bse-remove-btn','box-shadow:\x20','_inputX','_selectedIndex','bse-layer-list','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','481283MNAxGF','blur','commit','setStyle','primarySelection','_inputSpread','_inputY','_moveLayer','Box\x20Shadow\x20Editor','_layerList','_inputOpacity','1568616EzxRpo','bse-x','bse-y-val','add','spread','forEach','604iZfKce','#000000','join','trim','background','_refresh','selected','map','_insetCheck','value','_inputBlur','length','_loadFromPrimarySelection','appendChild','toString','replace','bse-inset','_designerCanvas','bse-dup-btn','_currentLayer','_renderList','filter','windowTemplate','6XTHDLg','156qjSplv','split','splice','_layers','3648870WuokXm','bse-add-btn','slice','textContent','bse-spread-val','push','26155tbCjZs','instanceServiceContainer','5406751qcygFz','_loadControls','openGroup','style','bse-up-btn','_previewBox','_removeBtn','204cEcXrj','innerHTML','_copyBtn','9LTWBiz','checked','_buildCss','oninput','5813TAptDM','disabled-label','1664040dNmqfB','_removeLayer','padStart','_applyToSelection','onchange','windowTitle','_cssOutput','_getDomElement','_inputColor','createElement'];a=function(){return X;};return a();}const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1b8))/0x1*(parseInt(r(0x1b1))/0x2)+-parseInt(r(0x1ba))/0x3+-parseInt(r(0x1ed))/0x4*(-parseInt(r(0x1a8))/0x5)+parseInt(r(0x204))/0x6*(parseInt(r(0x1aa))/0x7)+-parseInt(r(0x1e7))/0x8*(parseInt(r(0x1b4))/0x9)+-parseInt(r(0x1a2))/0xa+-parseInt(r(0x1dc))/0xb*(parseInt(r(0x19e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x72eef));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x1ee),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x1f4)](f=>f[t(0x1fb)](0x10)[t(0x1bc)](0x2,'0'))['join']('');}function b(c,d){c=c-0x19e;const e=a();let f=e[c];return f;}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0x1f8)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0x1f0)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[u(0x1a7)](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d['push'](f);}return d[v(0x1f8)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0x1fc)](k,'')[w(0x1f0)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[w(0x1c5)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)[w(0x19f)]('')['map'](o=>o+o)[w(0x1ef)](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')[w(0x1f0)]());}const h=f[w(0x19f)](/\s+/)[w(0x202)](Boolean);let i=![];const j=[];for(const o of h){if(o===w(0x1cd)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x1a7)](q);}if(j[w(0x1f8)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c[x(0x1d4)]),e=(c[x(0x1ca)]/0x64)[x(0x1c6)](0x2);return''+(c[x(0x1cd)]?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c['spread']+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c[y(0x1a4)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[y(0x1a4)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[z(0x1d9)]=0x0;['_layerList'];['_removeBtn'];['_insetCheck'];['_enabledCheck'];[z(0x1d8)];['_inputY'];[z(0x1f7)];['_inputSpread'];['_inputColor'];['_inputOpacity'];['_opacityVal'];[z(0x1af)];['_cssOutput'];['_loadBtn'];[z(0x1b3)];['_applyBtn'];get[z(0x1bf)](){const A=z;return A(0x1e4);}get['windowContentStyle'](){return css`
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
    `;}get[z(0x203)](){const B=z;return B(0x1db);}constructor(c){const C=z;super(c),this[C(0x1e5)]=this[C(0x1c1)](C(0x1da)),this[C(0x1b0)]=this['_getDomElement'](C(0x1d6)),this[C(0x1f5)]=this[C(0x1c1)](C(0x1fd)),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this[C(0x1d8)]=this[C(0x1c1)](C(0x1e8)),this['_inputY']=this[C(0x1c1)]('bse-y'),this['_inputBlur']=this['_getDomElement']('bse-blur'),this[C(0x1e1)]=this['_getDomElement']('bse-spread'),this['_inputColor']=this[C(0x1c1)]('bse-color'),this['_inputOpacity']=this[C(0x1c1)]('bse-opacity'),this['_opacityVal']=this['_getDomElement']('bse-opacity-val'),this['_previewBox']=this[C(0x1c1)]('bse-preview'),this['_cssOutput']=this[C(0x1c1)]('bse-css-out'),this['_loadBtn']=this['_getDomElement']('bse-load-btn'),this[C(0x1b3)]=this['_getDomElement']('bse-copy-btn'),this['_applyBtn']=this[C(0x1c1)]('bse-apply-btn'),this[C(0x1c1)](C(0x1a3))['onclick']=()=>this['_addLayer'](),this[C(0x1c1)](C(0x1ff))[C(0x1c9)]=()=>this['_duplicateLayer'](),this['_getDomElement'](C(0x1ae))[C(0x1c9)]=()=>this[C(0x1e3)](-0x1),this[C(0x1c1)](C(0x1cc))['onclick']=()=>this[C(0x1e3)](0x1),this[C(0x1b0)][C(0x1c9)]=()=>this[C(0x1bb)](),this[C(0x1f5)][C(0x1be)]=()=>{const D=C;this['_currentLayer']()[D(0x1cd)]=this['_insetCheck'][D(0x1b5)],this[D(0x1f2)]();},this['_enabledCheck'][C(0x1be)]=()=>{const E=C;this['_currentLayer']()[E(0x1d1)]=this[E(0x1d2)][E(0x1b5)],this[E(0x1f2)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX','bse-x-val'],[this[C(0x1e2)],'offsetY',C(0x1e9)],[this[C(0x1f7)],C(0x1dd),C(0x1c8)],[this[C(0x1e1)],C(0x1eb),'bse-spread-val']]){d[C(0x1b7)]=()=>{const F=C;this['_currentLayer']()[e]=Number(d[F(0x1f6)]),this['_getDomElement'](f)['textContent']=d['value']+'px',this['_refresh']();};}this['_inputColor'][C(0x1b7)]=()=>{const G=C;this['_currentLayer']()[G(0x1d4)]=this['_inputColor']['value'],this['_refresh']();},this[C(0x1e6)]['oninput']=()=>{const H=C;this[H(0x200)]()['opacity']=Number(this['_inputOpacity']['value']),this['_opacityVal']['textContent']=this[H(0x1e6)]['value']+'%',this['_refresh']();},this[C(0x1b3)]['onclick']=()=>{const I=C;navigator['clipboard']?.['writeText'](this[I(0x1c0)]['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this['_loadBtn']['onclick']=()=>{const J=C;this[J(0x1f9)](),this[J(0x201)](),this['_loadControls'](),this[J(0x1f2)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this[C(0x1ab)](),this[C(0x1f2)]();}['_loadFromPrimarySelection'](){const K=z,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[K(0x1e0)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this[K(0x1d9)]=0x0);}[z(0x200)](){const L=z;return this[L(0x1a1)][this['_selectedIndex']];}['_addLayer'](){const M=z;this[M(0x1a1)][M(0x1a7)](defaultLayer()),this['_selectedIndex']=this[M(0x1a1)]['length']-0x1,this['_renderList'](),this[M(0x1ab)](),this['_refresh']();}['_duplicateLayer'](){const N=z,c={...this['_currentLayer']()};this['_layers'][N(0x1a0)](this['_selectedIndex']+0x1,0x0,c),this[N(0x1d9)]=this['_selectedIndex']+0x1,this[N(0x201)](),this['_loadControls'](),this[N(0x1f2)]();}[z(0x1bb)](){const O=z;if(this['_layers'][O(0x1f8)]<=0x1)return;this[O(0x1a1)]['splice'](this[O(0x1d9)],0x1),this['_selectedIndex']=Math[O(0x1cb)](this[O(0x1d9)],this[O(0x1a1)]['length']-0x1),this[O(0x201)](),this[O(0x1ab)](),this[O(0x1f2)]();}[z(0x1e3)](c){const P=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers'][P(0x1f8)])return;[this[P(0x1a1)][d],this['_layers'][e]]=[this[P(0x1a1)][e],this['_layers'][d]],this[P(0x1d9)]=e,this[P(0x201)](),this[P(0x1f2)]();}['_renderList'](){const Q=z;this[Q(0x1e5)][Q(0x1b2)]='',this[Q(0x1a1)][Q(0x1ec)]((c,d)=>{const R=Q,e=document[R(0x1c3)]('li');if(d===this['_selectedIndex'])e[R(0x1cf)][R(0x1ea)](R(0x1f3));const f=document['createElement'](R(0x1d3));f[R(0x1ce)]='swatch',f['style'][R(0x1f1)]=c[R(0x1d4)],e[R(0x1fa)](f);const g=document[R(0x1c3)]('span');g['textContent']=''+(c[R(0x1cd)]?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[R(0x1dd)]+'px\x20'+c['spread']+'px';if(!c[R(0x1d1)])g['classList'][R(0x1ea)](R(0x1b9));e['appendChild'](g),e[R(0x1c9)]=()=>{const S=R;this[S(0x1d9)]=d,this[S(0x201)](),this['_loadControls']();},this[R(0x1e5)]['appendChild'](e);});}['_loadControls'](){const T=z,c=this[T(0x200)]();this[T(0x1f5)][T(0x1b5)]=c[T(0x1cd)],this[T(0x1d2)]['checked']=c['enabled'],this['_inputX']['value']=String(c['offsetX']),this['_getDomElement'](T(0x1d0))['textContent']=c['offsetX']+'px',this[T(0x1e2)]['value']=String(c['offsetY']),this['_getDomElement'](T(0x1e9))[T(0x1a5)]=c['offsetY']+'px',this[T(0x1f7)][T(0x1f6)]=String(c['blur']),this[T(0x1c1)](T(0x1c8))['textContent']=c['blur']+'px',this[T(0x1e1)][T(0x1f6)]=String(c[T(0x1eb)]),this[T(0x1c1)](T(0x1a6))[T(0x1a5)]=c[T(0x1eb)]+'px',this[T(0x1c2)]['value']=c[T(0x1d4)],this[T(0x1e6)]['value']=String(c['opacity']),this[T(0x1c4)]['textContent']=c[T(0x1ca)]+'%';}['_buildCss'](){const U=z;return this[U(0x1a1)][U(0x202)](c=>c[U(0x1d1)])['map'](layerToCss)[U(0x1ef)](',\x20')||'none';}[z(0x1f2)](){const V=z,c=this[V(0x1b6)]();this[V(0x1af)][V(0x1ad)]['boxShadow']=c,this[V(0x1c0)][V(0x1f6)]=V(0x1d7)+c+';',this[V(0x201)]();}[z(0x1bd)](){const W=z;if(!this[W(0x1fe)])return;const c=this[W(0x1fe)][W(0x1a9)][W(0x1c7)]['selectedElements'];if(!c?.[W(0x1f8)])return;const d=this[W(0x1b6)](),e=c[0x0][W(0x1ac)]('Apply\x20box-shadow');for(const f of c){f[W(0x1df)](W(0x1d5),d);}e[W(0x1de)]();}}customElements['define']('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);