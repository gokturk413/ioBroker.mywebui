const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x152))/0x1+parseInt(r(0x181))/0x2*(parseInt(r(0x14e))/0x3)+-parseInt(r(0x19d))/0x4+parseInt(r(0x19a))/0x5*(parseInt(r(0x19e))/0x6)+-parseInt(r(0x173))/0x7+parseInt(r(0x1a5))/0x8*(parseInt(r(0x1ac))/0x9)+parseInt(r(0x174))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5cb3d));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x15b),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0x14f)](f=>f[t(0x15f)](0x10)['padStart'](0x2,'0'))[t(0x149)]('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0x150)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0x168)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[u(0x168)]();if(g)d[u(0x18c)](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c===v(0x161))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[v(0x18c)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d=w(0x15b),e=0x64,f=c;const g=f[w(0x17d)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[w(0x185)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][w(0x163)](0x1)[w(0x14b)]('')[w(0x14f)](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')[w(0x168)]());}const h=f['split'](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===w(0x147)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[w(0x18c)](q);}if(j[w(0x150)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function b(c,d){c=c-0x144;const e=a();let f=e[c];return f;}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c['inset']?'inset\x20':'')+c[x(0x160)]+x(0x182)+c[x(0x192)]+x(0x182)+c['blur']+'px\x20'+c[x(0x183)]+'px\x20rgba('+d+','+e+')';}function a(){const W=['_insetCheck','_inputColor','_inputX','9WrgNPw','bse-x','_opacityVal','commit','inset','_removeBtn','join','_inputY','split','classList','bse-x-val','237LewEiL','map','length','bse-opacity','598258DbjuxG','checked','Apply\x20box-shadow','_layerList','bse-add-btn','bse-opacity-val','disabled-label','define','oninput','#000000','bse-inset','onclick','bse-y-val','toString','offsetX','none','bse-load-btn','slice','_cssOutput','bse-spread-val','selected','_getDomElement','trim','add','_currentLayer','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','opacity','bse-down-btn','instanceServiceContainer','_removeLayer','_duplicateLayer','box-shadow:\x20','_loadBtn','1566600SrsGmU','7822050nYqpRb','splice','className','_copyBtn','windowTemplate','_loadFromPrimarySelection','windowContentStyle','_buildCss','blur','match','_previewBox','_inputOpacity','box-shadow','9004vRaoRA','px\x20','spread','span','round','getStyle','inset\x20','_layers','catch','writeText','color','push','_renderList','selectionService','_applyBtn','_refresh','bse-copy-btn','offsetY','_inputBlur','onchange','textContent','selectedElements','_addLayer','appendChild','_loadControls','2915130Whtqvx','_designerCanvas','innerHTML','2873836FyiQXx','6fxcmol','_selectedIndex','enabled','background','_enabledCheck','_moveLayer','bse-spread','1594696yDBpcO','value','_inputSpread','node-projects-designer-box-shadow-editor'];a=function(){return W;};return a();}function hexToRgb(c){const y=b,d=parseInt(c[y(0x163)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[z(0x19f)]=0x0;[z(0x155)];['_removeBtn'];['_insetCheck'];['_enabledCheck'];['_inputX'];['_inputY'];['_inputBlur'];['_inputSpread'];[z(0x1aa)];['_inputOpacity'];[z(0x145)];['_previewBox'];[z(0x164)];['_loadBtn'];['_copyBtn'];['_applyBtn'];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get[z(0x17a)](){return css`
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
    `;}get[z(0x178)](){const A=z;return A(0x16b);}constructor(c){const B=z;super(c),this['_layerList']=this['_getDomElement']('bse-layer-list'),this['_removeBtn']=this['_getDomElement']('bse-remove-btn'),this['_insetCheck']=this['_getDomElement'](B(0x15c)),this['_enabledCheck']=this[B(0x167)]('bse-enabled'),this[B(0x1ab)]=this[B(0x167)](B(0x144)),this['_inputY']=this['_getDomElement']('bse-y'),this[B(0x193)]=this[B(0x167)]('bse-blur'),this[B(0x1a7)]=this['_getDomElement'](B(0x1a4)),this['_inputColor']=this['_getDomElement']('bse-color'),this['_inputOpacity']=this['_getDomElement'](B(0x151)),this['_opacityVal']=this[B(0x167)](B(0x157)),this[B(0x17e)]=this[B(0x167)]('bse-preview'),this[B(0x164)]=this['_getDomElement']('bse-css-out'),this[B(0x172)]=this['_getDomElement'](B(0x162)),this[B(0x177)]=this[B(0x167)](B(0x191)),this[B(0x18f)]=this[B(0x167)]('bse-apply-btn'),this['_getDomElement'](B(0x156))[B(0x15d)]=()=>this[B(0x197)](),this['_getDomElement']('bse-dup-btn')['onclick']=()=>this[B(0x170)](),this['_getDomElement']('bse-up-btn')[B(0x15d)]=()=>this[B(0x1a3)](-0x1),this[B(0x167)](B(0x16d))['onclick']=()=>this['_moveLayer'](0x1),this[B(0x148)]['onclick']=()=>this['_removeLayer'](),this['_insetCheck']['onchange']=()=>{const C=B;this[C(0x16a)]()[C(0x147)]=this['_insetCheck']['checked'],this['_refresh']();},this[B(0x1a2)][B(0x194)]=()=>{const D=B;this['_currentLayer']()['enabled']=this[D(0x1a2)][D(0x153)],this[D(0x190)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX',B(0x14d)],[this['_inputY'],B(0x192),B(0x15e)],[this['_inputBlur'],B(0x17c),'bse-blur-val'],[this['_inputSpread'],'spread',B(0x165)]]){d[B(0x15a)]=()=>{const E=B;this[E(0x16a)]()[e]=Number(d[E(0x1a6)]),this['_getDomElement'](f)['textContent']=d[E(0x1a6)]+'px',this['_refresh']();};}this['_inputColor']['oninput']=()=>{const F=B;this[F(0x16a)]()[F(0x18b)]=this[F(0x1aa)][F(0x1a6)],this[F(0x190)]();},this[B(0x17f)]['oninput']=()=>{const G=B;this[G(0x16a)]()['opacity']=Number(this[G(0x17f)][G(0x1a6)]),this[G(0x145)][G(0x195)]=this['_inputOpacity']['value']+'%',this[G(0x190)]();},this[B(0x177)]['onclick']=()=>{const H=B;navigator['clipboard']?.[H(0x18a)](this['_cssOutput']['value'])[H(0x189)](()=>{});},this['_applyBtn'][B(0x15d)]=()=>this['_applyToSelection'](),this['_loadBtn'][B(0x15d)]=()=>{const I=B;this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this[I(0x190)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this[B(0x190)]();}[z(0x179)](){const J=z,c=this['_designerCanvas']?.[J(0x16e)]?.[J(0x18e)]?.['primarySelection'];if(!c)return;const d=c[J(0x186)](J(0x180));d&&(this[J(0x188)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[z(0x16a)](){const K=z;return this[K(0x188)][this[K(0x19f)]];}[z(0x197)](){const L=z;this['_layers']['push'](defaultLayer()),this[L(0x19f)]=this['_layers'][L(0x150)]-0x1,this['_renderList'](),this['_loadControls'](),this[L(0x190)]();}['_duplicateLayer'](){const M=z,c={...this['_currentLayer']()};this[M(0x188)][M(0x175)](this['_selectedIndex']+0x1,0x0,c),this['_selectedIndex']=this['_selectedIndex']+0x1,this[M(0x18d)](),this['_loadControls'](),this['_refresh']();}[z(0x16f)](){const N=z;if(this[N(0x188)]['length']<=0x1)return;this[N(0x188)][N(0x175)](this[N(0x19f)],0x1),this[N(0x19f)]=Math['min'](this[N(0x19f)],this[N(0x188)][N(0x150)]-0x1),this['_renderList'](),this[N(0x199)](),this['_refresh']();}['_moveLayer'](c){const O=z,d=this[O(0x19f)],e=d+c;if(e<0x0||e>=this[O(0x188)]['length'])return;[this['_layers'][d],this[O(0x188)][e]]=[this['_layers'][e],this[O(0x188)][d]],this[O(0x19f)]=e,this[O(0x18d)](),this[O(0x190)]();}[z(0x18d)](){const P=z;this[P(0x155)][P(0x19c)]='',this[P(0x188)]['forEach']((c,d)=>{const Q=P,e=document['createElement']('li');if(d===this['_selectedIndex'])e[Q(0x14c)][Q(0x169)](Q(0x166));const f=document['createElement'](Q(0x184));f[Q(0x176)]='swatch',f['style'][Q(0x1a1)]=c[Q(0x18b)],e[Q(0x198)](f);const g=document['createElement'](Q(0x184));g['textContent']=''+(c['inset']?Q(0x187):'')+c[Q(0x160)]+'px\x20'+c['offsetY']+Q(0x182)+c['blur']+Q(0x182)+c[Q(0x183)]+'px';if(!c['enabled'])g[Q(0x14c)][Q(0x169)](Q(0x158));e[Q(0x198)](g),e['onclick']=()=>{const R=Q;this['_selectedIndex']=d,this['_renderList'](),this[R(0x199)]();},this['_layerList'][Q(0x198)](e);});}[z(0x199)](){const S=z,c=this[S(0x16a)]();this[S(0x1a9)][S(0x153)]=c[S(0x147)],this[S(0x1a2)]['checked']=c[S(0x1a0)],this[S(0x1ab)]['value']=String(c['offsetX']),this['_getDomElement']('bse-x-val')['textContent']=c[S(0x160)]+'px',this[S(0x14a)][S(0x1a6)]=String(c[S(0x192)]),this[S(0x167)]('bse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur']['value']=String(c[S(0x17c)]),this['_getDomElement']('bse-blur-val')['textContent']=c['blur']+'px',this[S(0x1a7)]['value']=String(c[S(0x183)]),this[S(0x167)]('bse-spread-val')['textContent']=c['spread']+'px',this[S(0x1aa)][S(0x1a6)]=c['color'],this[S(0x17f)][S(0x1a6)]=String(c[S(0x16c)]),this['_opacityVal'][S(0x195)]=c[S(0x16c)]+'%';}['_buildCss'](){const T=z;return this[T(0x188)]['filter'](c=>c['enabled'])[T(0x14f)](layerToCss)[T(0x149)](',\x20')||T(0x161);}['_refresh'](){const U=z,c=this[U(0x17b)]();this[U(0x17e)]['style']['boxShadow']=c,this[U(0x164)]['value']=U(0x171)+c+';',this[U(0x18d)]();}['_applyToSelection'](){const V=z;if(!this[V(0x19b)])return;const c=this['_designerCanvas']['instanceServiceContainer'][V(0x18e)][V(0x196)];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0]['openGroup'](V(0x154));for(const f of c){f['setStyle']('box-shadow',d);}e[V(0x146)]();}}customElements[z(0x159)](z(0x1a8),BoxShadowEditorWindow);