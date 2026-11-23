const z=b;function a(){const V=['_enabledCheck','_loadBtn','255eGkQKh','_removeLayer','none','background','color','bse-copy-btn','blur','_buildCss','_currentLayer','_applyBtn','49tuHTDJ','spread','appendChild','innerHTML','_moveLayer','_cssOutput','_getDomElement','_opacityVal','slice','_inputX','toString','windowTemplate','offsetX','checked','value','px\x20rgba(','selectionService','onclick','_insetCheck','_refresh','trim','oninput','define','enabled','span','2492232ISZDqN','bse-color','_loadControls','Box\x20Shadow\x20Editor','_layerList','inset','inset\x20','primarySelection','join','add','40UkvYLW','792801sJPtJG','_inputY','_renderList','bse-dup-btn','opacity','_selectedIndex','bse-spread-val','22454553PvuMue','classList','bse-x-val','_previewBox','bse-down-btn','offsetY','_applyToSelection','filter','_copyBtn','992024criIIj','_inputColor','style','textContent','_loadFromPrimarySelection','bse-add-btn','bse-y-val','bse-blur-val','px\x20','push','813lamamD','selected','_layers','replace','map','630OqvCQx','onchange','length','bse-layer-list','windowTitle','swatch','44468LFFIXd','_removeBtn','#000000','_inputBlur','_inputOpacity','492066VoDdkF','selectedElements','bse-css-out','_inputSpread','windowContentStyle','_duplicateLayer'];a=function(){return V;};return a();}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x145))/0x1*(-parseInt(r(0x14a))/0x2)+-parseInt(r(0x180))/0x3+-parseInt(r(0x150))/0x4*(parseInt(r(0x15d))/0x5)+parseInt(r(0x155))/0x6*(-parseInt(r(0x167))/0x7)+-parseInt(r(0x19b))/0x8+parseInt(r(0x18b))/0x9*(parseInt(r(0x18a))/0xa)+parseInt(r(0x192))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x873ff));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x152),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x149)](f=>f[t(0x171)](0x10)['padStart'](0x2,'0'))['join']('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0x14c)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[u(0x144)](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c===v(0x15f))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[v(0x17b)]());if(f)d[v(0x144)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d=w(0x152),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0x148)](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][w(0x14c)]===0x4?'#'+m[0x1]['slice'](0x1)['split']('')[w(0x149)](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f['split'](/\s+/)[w(0x199)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function b(c,d){c=c-0x141;const e=a();let f=e[c];return f;}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c[x(0x18f)]/0x64)['toFixed'](0x2);return''+(c[x(0x185)]?x(0x186):'')+c[x(0x173)]+x(0x143)+c['offsetY']+'px\x20'+c[x(0x163)]+x(0x143)+c['spread']+x(0x176)+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c[y(0x16f)](0x1,0x3),0x10),e=parseInt(c[y(0x16f)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[z(0x147)]=[defaultLayer()];[z(0x190)]=0x0;['_layerList'];['_removeBtn'];[z(0x179)];[z(0x15b)];[z(0x170)];['_inputY'];['_inputBlur'];['_inputSpread'];['_inputColor'];[z(0x154)];[z(0x16e)];[z(0x195)];['_cssOutput'];[z(0x15c)];['_copyBtn'];[z(0x166)];get[z(0x14e)](){const A=z;return A(0x183);}get[z(0x159)](){return css`
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
    `;}get[z(0x172)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const B=z;super(c),this['_layerList']=this['_getDomElement'](B(0x14d)),this['_removeBtn']=this['_getDomElement']('bse-remove-btn'),this['_insetCheck']=this['_getDomElement']('bse-inset'),this['_enabledCheck']=this[B(0x16d)]('bse-enabled'),this[B(0x170)]=this['_getDomElement']('bse-x'),this[B(0x18c)]=this[B(0x16d)]('bse-y'),this[B(0x153)]=this['_getDomElement']('bse-blur'),this[B(0x158)]=this['_getDomElement']('bse-spread'),this['_inputColor']=this[B(0x16d)](B(0x181)),this[B(0x154)]=this[B(0x16d)]('bse-opacity'),this[B(0x16e)]=this[B(0x16d)]('bse-opacity-val'),this[B(0x195)]=this['_getDomElement']('bse-preview'),this[B(0x16c)]=this[B(0x16d)](B(0x157)),this[B(0x15c)]=this[B(0x16d)]('bse-load-btn'),this[B(0x19a)]=this[B(0x16d)](B(0x162)),this['_applyBtn']=this[B(0x16d)]('bse-apply-btn'),this['_getDomElement'](B(0x1a0))[B(0x178)]=()=>this['_addLayer'](),this['_getDomElement'](B(0x18e))['onclick']=()=>this[B(0x15a)](),this['_getDomElement']('bse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this[B(0x16d)](B(0x196))['onclick']=()=>this[B(0x16b)](0x1),this[B(0x151)][B(0x178)]=()=>this[B(0x15e)](),this['_insetCheck'][B(0x14b)]=()=>{const C=B;this['_currentLayer']()['inset']=this['_insetCheck'][C(0x174)],this[C(0x17a)]();},this[B(0x15b)]['onchange']=()=>{const D=B;this[D(0x165)]()[D(0x17e)]=this[D(0x15b)]['checked'],this[D(0x17a)]();};for(const [d,e,f]of[[this[B(0x170)],'offsetX','bse-x-val'],[this['_inputY'],B(0x197),B(0x141)],[this['_inputBlur'],B(0x163),B(0x142)],[this[B(0x158)],B(0x168),'bse-spread-val']]){d[B(0x17c)]=()=>{const E=B;this['_currentLayer']()[e]=Number(d[E(0x175)]),this[E(0x16d)](f)[E(0x19e)]=d['value']+'px',this[E(0x17a)]();};}this['_inputColor'][B(0x17c)]=()=>{const F=B;this[F(0x165)]()['color']=this[F(0x19c)][F(0x175)],this[F(0x17a)]();},this[B(0x154)][B(0x17c)]=()=>{const G=B;this[G(0x165)]()['opacity']=Number(this['_inputOpacity']['value']),this['_opacityVal']['textContent']=this[G(0x154)][G(0x175)]+'%',this[G(0x17a)]();},this['_copyBtn'][B(0x178)]=()=>{navigator['clipboard']?.['writeText'](this['_cssOutput']['value'])['catch'](()=>{});},this[B(0x166)]['onclick']=()=>this[B(0x198)](),this['_loadBtn'][B(0x178)]=()=>{const H=B;this[H(0x19f)](),this[H(0x18d)](),this['_loadControls'](),this[H(0x17a)]();},this[B(0x19f)](),this[B(0x18d)](),this[B(0x182)](),this['_refresh']();}[z(0x19f)](){const I=z,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[I(0x187)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this[I(0x147)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[z(0x165)](){const J=z;return this['_layers'][this[J(0x190)]];}['_addLayer'](){const K=z;this['_layers']['push'](defaultLayer()),this['_selectedIndex']=this[K(0x147)]['length']-0x1,this[K(0x18d)](),this[K(0x182)](),this[K(0x17a)]();}['_duplicateLayer'](){const L=z,c={...this['_currentLayer']()};this['_layers']['splice'](this[L(0x190)]+0x1,0x0,c),this['_selectedIndex']=this[L(0x190)]+0x1,this[L(0x18d)](),this['_loadControls'](),this['_refresh']();}['_removeLayer'](){const M=z;if(this['_layers'][M(0x14c)]<=0x1)return;this[M(0x147)]['splice'](this[M(0x190)],0x1),this['_selectedIndex']=Math['min'](this[M(0x190)],this['_layers']['length']-0x1),this['_renderList'](),this[M(0x182)](),this[M(0x17a)]();}[z(0x16b)](c){const N=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[N(0x147)][N(0x14c)])return;[this['_layers'][d],this[N(0x147)][e]]=[this['_layers'][e],this[N(0x147)][d]],this[N(0x190)]=e,this['_renderList'](),this[N(0x17a)]();}['_renderList'](){const O=z;this['_layerList'][O(0x16a)]='',this['_layers']['forEach']((c,d)=>{const P=O,e=document['createElement']('li');if(d===this[P(0x190)])e['classList']['add'](P(0x146));const f=document['createElement'](P(0x17f));f['className']=P(0x14f),f[P(0x19d)][P(0x160)]=c['color'],e['appendChild'](f);const g=document['createElement']('span');g['textContent']=''+(c[P(0x185)]?P(0x186):'')+c[P(0x173)]+'px\x20'+c['offsetY']+'px\x20'+c[P(0x163)]+'px\x20'+c[P(0x168)]+'px';if(!c['enabled'])g[P(0x193)][P(0x189)]('disabled-label');e[P(0x169)](g),e['onclick']=()=>{const Q=P;this[Q(0x190)]=d,this['_renderList'](),this[Q(0x182)]();},this[P(0x184)]['appendChild'](e);});}[z(0x182)](){const R=z,c=this[R(0x165)]();this['_insetCheck']['checked']=c['inset'],this[R(0x15b)][R(0x174)]=c['enabled'],this['_inputX']['value']=String(c[R(0x173)]),this[R(0x16d)](R(0x194))['textContent']=c['offsetX']+'px',this[R(0x18c)]['value']=String(c[R(0x197)]),this['_getDomElement'](R(0x141))['textContent']=c[R(0x197)]+'px',this[R(0x153)][R(0x175)]=String(c['blur']),this['_getDomElement']('bse-blur-val')[R(0x19e)]=c['blur']+'px',this['_inputSpread']['value']=String(c['spread']),this['_getDomElement'](R(0x191))['textContent']=c[R(0x168)]+'px',this[R(0x19c)][R(0x175)]=c[R(0x161)],this['_inputOpacity'][R(0x175)]=String(c['opacity']),this[R(0x16e)]['textContent']=c[R(0x18f)]+'%';}['_buildCss'](){const S=z;return this[S(0x147)][S(0x199)](c=>c['enabled'])[S(0x149)](layerToCss)[S(0x188)](',\x20')||'none';}['_refresh'](){const T=z,c=this[T(0x164)]();this['_previewBox'][T(0x19d)]['boxShadow']=c,this[T(0x16c)][T(0x175)]='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const U=z;if(!this['_designerCanvas'])return;const c=this['_designerCanvas']['instanceServiceContainer'][U(0x177)][U(0x156)];if(!c?.['length'])return;const d=this[U(0x164)](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f['setStyle']('box-shadow',d);}e['commit']();}}customElements[z(0x17d)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);