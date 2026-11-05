const y=b;function a(){const T=['_buildCss','min','bse-blur-val','_designerCanvas','box-shadow','innerHTML','_selectedIndex','bse-color','117953cXPYTg','color','_layers','px\x20','appendChild','openGroup','windowTitle','bse-x','boxShadow','selected','8ylzPOp','filter','onclick','bse-spread-val','box-shadow:\x20','_duplicateLayer','createElement','px\x20rgba(','disabled-label','join','_renderList','none','bse-y','round','inset','_getDomElement','spread','_applyBtn','blur','bse-css-out','249888ogGpci','bse-x-val','116099BXvAjo','padStart','_moveLayer','_cssOutput','_opacityVal','offsetX','enabled','checked','catch','3837036nPgumN','bse-remove-btn','bse-y-val','bse-enabled','match','2knqLdU','_inputColor','bse-load-btn','span','map','windowContentStyle','_loadFromPrimarySelection','push','bse-down-btn','trim','toString','inset\x20','_inputBlur','oninput','classList','_layerList','1030414QocmXg','getStyle','bse-add-btn','node-projects-designer-box-shadow-editor','_copyBtn','_loadBtn','windowTemplate','11961ptOjNk','_addLayer','_inputX','slice','3340NAArge','splice','textContent','_currentLayer','_applyToSelection','468AAFtvE','add','onchange','_insetCheck','_enabledCheck','_inputOpacity','instanceServiceContainer','selectionService','writeText','_refresh','bse-opacity','selectedElements','split','bse-opacity-val','bse-preview','418195qzAinr','_removeBtn','className','4ZNdYgf','_loadControls','value','_inputY','_inputSpread','length'];a=function(){return T;};return a();}function b(c,d){c=c-0xdb;const e=a();let f=e[c];return f;}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x13a))/0x1*(-parseInt(r(0x148))/0x2)+-parseInt(r(0x138))/0x3+-parseInt(r(0x10c))/0x4*(parseInt(r(0x109))/0x5)+parseInt(r(0x143))/0x6+-parseInt(r(0xea))/0x7*(parseInt(r(0x124))/0x8)+-parseInt(r(0xf1))/0x9*(parseInt(r(0xf5))/0xa)+parseInt(r(0x11a))/0xb*(parseInt(r(0xfa))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x65823));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0xde)](f=>f[s(0xe4)](0x10)[s(0x13b)](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[t(0x111)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0xe3)]());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')[v(0xe3)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[v(0x131)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x147)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][v(0xf4)](0x1)['split']('')[v(0xde)](o=>o+o)[v(0x12d)](''):m[0x1][v(0xf4)](0x0,0x7),f=f['replace'](m[0x1],'')[v(0xe3)]());}const h=f[v(0x106)](/\s+/)[v(0x125)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0x111)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c[w(0x11b)]),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c['inset']?w(0xe5):'')+c[w(0x13f)]+w(0x11d)+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c[w(0x134)]+w(0x12b)+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[x(0xf4)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[y(0x118)]=0x0;[y(0xe9)];['_removeBtn'];['_insetCheck'];[y(0xfe)];['_inputX'];[y(0x10f)];[y(0xe6)];['_inputSpread'];['_inputColor'];['_inputOpacity'];[y(0x13e)];['_previewBox'];['_cssOutput'];['_loadBtn'];[y(0xee)];[y(0x135)];get[y(0x120)](){return'Box\x20Shadow\x20Editor';}get[y(0xdf)](){return css`
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
    `;}get[y(0xf0)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const z=y;super(c),this[z(0xe9)]=this[z(0x133)]('bse-layer-list'),this['_removeBtn']=this[z(0x133)](z(0x144)),this['_insetCheck']=this[z(0x133)]('bse-inset'),this['_enabledCheck']=this[z(0x133)](z(0x146)),this[z(0xf3)]=this['_getDomElement'](z(0x121)),this[z(0x10f)]=this['_getDomElement'](z(0x130)),this[z(0xe6)]=this[z(0x133)]('bse-blur'),this[z(0x110)]=this[z(0x133)]('bse-spread'),this['_inputColor']=this[z(0x133)](z(0x119)),this['_inputOpacity']=this[z(0x133)](z(0x104)),this[z(0x13e)]=this[z(0x133)](z(0x107)),this['_previewBox']=this[z(0x133)](z(0x108)),this['_cssOutput']=this[z(0x133)](z(0x137)),this[z(0xef)]=this['_getDomElement'](z(0xdc)),this[z(0xee)]=this[z(0x133)]('bse-copy-btn'),this[z(0x135)]=this['_getDomElement']('bse-apply-btn'),this['_getDomElement'](z(0xec))['onclick']=()=>this['_addLayer'](),this[z(0x133)]('bse-dup-btn')['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement']('bse-up-btn')[z(0x126)]=()=>this['_moveLayer'](-0x1),this['_getDomElement'](z(0xe2))['onclick']=()=>this['_moveLayer'](0x1),this[z(0x10a)][z(0x126)]=()=>this['_removeLayer'](),this['_insetCheck']['onchange']=()=>{const A=z;this[A(0xf8)]()['inset']=this['_insetCheck'][A(0x141)],this[A(0x103)]();},this[z(0xfe)][z(0xfc)]=()=>{const B=z;this[B(0xf8)]()[B(0x140)]=this[B(0xfe)][B(0x141)],this[B(0x103)]();};for(const [d,e,f]of[[this[z(0xf3)],z(0x13f),z(0x139)],[this[z(0x10f)],'offsetY',z(0x145)],[this[z(0xe6)],z(0x136),z(0x114)],[this['_inputSpread'],z(0x134),z(0x127)]]){d[z(0xe7)]=()=>{const C=z;this['_currentLayer']()[e]=Number(d[C(0x10e)]),this[C(0x133)](f)['textContent']=d['value']+'px',this[C(0x103)]();};}this[z(0xdb)][z(0xe7)]=()=>{const D=z;this[D(0xf8)]()[D(0x11b)]=this[D(0xdb)][D(0x10e)],this[D(0x103)]();},this[z(0xff)]['oninput']=()=>{const E=z;this[E(0xf8)]()['opacity']=Number(this[E(0xff)][E(0x10e)]),this[E(0x13e)][E(0xf7)]=this['_inputOpacity'][E(0x10e)]+'%',this[E(0x103)]();},this[z(0xee)]['onclick']=()=>{const F=z;navigator['clipboard']?.[F(0x102)](this[F(0x13d)][F(0x10e)])[F(0x142)](()=>{});},this[z(0x135)]['onclick']=()=>this[z(0xf9)](),this['_loadBtn']['onclick']=()=>{const G=z;this[G(0xe0)](),this['_renderList'](),this['_loadControls'](),this['_refresh']();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const H=y,c=this['_designerCanvas']?.[H(0x100)]?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[H(0xeb)]('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[y(0xf8)](){return this['_layers'][this['_selectedIndex']];}[y(0xf2)](){const I=y;this['_layers'][I(0xe1)](defaultLayer()),this[I(0x118)]=this['_layers']['length']-0x1,this['_renderList'](),this[I(0x10d)](),this['_refresh']();}[y(0x129)](){const J=y,c={...this['_currentLayer']()};this[J(0x11c)][J(0xf6)](this[J(0x118)]+0x1,0x0,c),this[J(0x118)]=this[J(0x118)]+0x1,this['_renderList'](),this['_loadControls'](),this[J(0x103)]();}['_removeLayer'](){const K=y;if(this[K(0x11c)][K(0x111)]<=0x1)return;this[K(0x11c)]['splice'](this[K(0x118)],0x1),this[K(0x118)]=Math[K(0x113)](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[y(0x13c)](c){const L=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this[L(0x11c)][d],this['_layers'][e]]=[this[L(0x11c)][e],this['_layers'][d]],this['_selectedIndex']=e,this[L(0x12e)](),this['_refresh']();}[y(0x12e)](){const M=y;this[M(0xe9)][M(0x117)]='',this[M(0x11c)]['forEach']((c,d)=>{const N=M,e=document[N(0x12a)]('li');if(d===this[N(0x118)])e[N(0xe8)][N(0xfb)](N(0x123));const f=document[N(0x12a)](N(0xdd));f[N(0x10b)]='swatch',f['style']['background']=c['color'],e[N(0x11e)](f);const g=document['createElement']('span');g[N(0xf7)]=''+(c[N(0x132)]?N(0xe5):'')+c[N(0x13f)]+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c[N(0x134)]+'px';if(!c[N(0x140)])g['classList']['add'](N(0x12c));e[N(0x11e)](g),e[N(0x126)]=()=>{const O=N;this['_selectedIndex']=d,this[O(0x12e)](),this[O(0x10d)]();},this['_layerList']['appendChild'](e);});}[y(0x10d)](){const P=y,c=this[P(0xf8)]();this[P(0xfd)][P(0x141)]=c[P(0x132)],this[P(0xfe)]['checked']=c['enabled'],this[P(0xf3)]['value']=String(c[P(0x13f)]),this[P(0x133)]('bse-x-val')[P(0xf7)]=c[P(0x13f)]+'px',this[P(0x10f)]['value']=String(c['offsetY']),this[P(0x133)]('bse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur'][P(0x10e)]=String(c['blur']),this[P(0x133)](P(0x114))['textContent']=c['blur']+'px',this['_inputSpread']['value']=String(c['spread']),this[P(0x133)](P(0x127))['textContent']=c['spread']+'px',this['_inputColor'][P(0x10e)]=c[P(0x11b)],this['_inputOpacity'][P(0x10e)]=String(c['opacity']),this['_opacityVal']['textContent']=c['opacity']+'%';}[y(0x112)](){const Q=y;return this['_layers']['filter'](c=>c[Q(0x140)])[Q(0xde)](layerToCss)[Q(0x12d)](',\x20')||Q(0x12f);}['_refresh'](){const R=y,c=this['_buildCss']();this['_previewBox']['style'][R(0x122)]=c,this[R(0x13d)]['value']=R(0x128)+c+';',this['_renderList']();}[y(0xf9)](){const S=y;if(!this[S(0x115)])return;const c=this['_designerCanvas'][S(0x100)][S(0x101)][S(0x105)];if(!c?.['length'])return;const d=this[S(0x112)](),e=c[0x0][S(0x11f)]('Apply\x20box-shadow');for(const f of c){f['setStyle'](S(0x116),d);}e['commit']();}}customElements['define'](y(0xed),BoxShadowEditorWindow);