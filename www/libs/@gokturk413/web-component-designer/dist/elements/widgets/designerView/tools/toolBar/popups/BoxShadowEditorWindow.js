const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1f1))/0x1*(-parseInt(r(0x214))/0x2)+-parseInt(r(0x208))/0x3*(parseInt(r(0x206))/0x4)+-parseInt(r(0x205))/0x5*(-parseInt(r(0x20a))/0x6)+-parseInt(r(0x1da))/0x7*(parseInt(r(0x1db))/0x8)+parseInt(r(0x235))/0x9+-parseInt(r(0x230))/0xa+parseInt(r(0x1ea))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a8b0));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x1fe)](f=>f[s(0x1f8)](0x10)[s(0x1de)](0x2,'0'))['join']('');}function a(){const U=['44PGLrrv','_loadFromPrimarySelection','primarySelection','className','offsetY','_inputY','replace','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','_inputOpacity','swatch','clipboard','span','bse-apply-btn','bse-enabled','catch','_inputSpread','add','none','bse-inset','#000000','selectionService','toFixed','offsetX','bse-x','px\x20','push','_loadBtn','_removeLayer','735080HEwtXk','split','spread','classList','bse-css-out','634626ZEdjmZ','_previewBox','box-shadow','appendChild','checked','_renderList','length','_removeBtn','_duplicateLayer','bse-add-btn','_loadControls','openGroup','_layerList','opacity','_getDomElement','_moveLayer','_designerCanvas','871822MfFyZu','8hLRDLT','_cssOutput','Box\x20Shadow\x20Editor','padStart','_enabledCheck','instanceServiceContainer','bse-load-btn','bse-dup-btn','define','bse-x-val','oninput','_inputX','splice','slice','_insetCheck','5596129gQgjpJ','_copyBtn','bse-copy-btn','textContent','innerHTML','_opacityVal','bse-spread','18467GtuBrt','trim','bse-opacity','_inputBlur','match','join','background','toString','bse-y-val','_inputColor','bse-remove-btn','_refresh','bse-blur-val','map','disabled-label','_applyBtn','enabled','blur','value','_buildCss','1574010OaCETt','199740zzxUYx','_layers','3WngYGh','windowTemplate','6fnDtWW','bse-spread-val','onclick','_selectedIndex','filter','createElement','color','commit','onchange','inset'];a=function(){return U;};return a();}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0x1f2)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[t(0x1f2)]();if(g)d[t(0x22d)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0x1f2)]());if(f)d[u(0x22d)](f);}return d[u(0x23b)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0x227),e=0x64,f=c;const g=f[v(0x1f5)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x21a)](k,'')[v(0x1f2)]();const l=k[v(0x1f5)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x1f5)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][v(0x23b)]===0x4?'#'+m[0x1][v(0x1e8)](0x1)['split']('')[v(0x1fe)](o=>o+o)['join'](''):m[0x1][v(0x1e8)](0x0,0x7),f=f[v(0x21a)](m[0x1],'')['trim']());}const h=f[v(0x231)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[v(0x22d)](q);}if(j[v(0x23b)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c[w(0x1d6)]/0x64)[w(0x229)](0x2);return''+(c[w(0x213)]?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[w(0x202)]+w(0x22c)+c['spread']+'px\x20rgba('+d+','+e+')';}function b(c,d){c=c-0x1d1;const e=a();let f=e[c];return f;}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[x(0x1e8)](0x3,0x5),0x10),f=parseInt(c[x(0x1e8)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[y(0x207)]=[defaultLayer()];[y(0x20d)]=0x0;[y(0x1d5)];[y(0x23c)];['_insetCheck'];['_enabledCheck'];[y(0x1e6)];[y(0x219)];[y(0x1f4)];['_inputSpread'];[y(0x1fa)];['_inputOpacity'];[y(0x1ef)];[y(0x236)];[y(0x1dc)];[y(0x22e)];[y(0x1eb)];[y(0x200)];get['windowTitle'](){const z=y;return z(0x1dd);}get['windowContentStyle'](){return css`
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
    `;}get[y(0x209)](){const A=y;return A(0x21b);}constructor(c){const B=y;super(c),this['_layerList']=this[B(0x1d7)]('bse-layer-list'),this['_removeBtn']=this['_getDomElement'](B(0x1fb)),this[B(0x1e9)]=this[B(0x1d7)](B(0x226)),this['_enabledCheck']=this[B(0x1d7)](B(0x221)),this['_inputX']=this['_getDomElement'](B(0x22b)),this['_inputY']=this[B(0x1d7)]('bse-y'),this[B(0x1f4)]=this[B(0x1d7)]('bse-blur'),this[B(0x223)]=this['_getDomElement'](B(0x1f0)),this[B(0x1fa)]=this[B(0x1d7)]('bse-color'),this[B(0x21c)]=this[B(0x1d7)](B(0x1f3)),this['_opacityVal']=this['_getDomElement']('bse-opacity-val'),this[B(0x236)]=this['_getDomElement']('bse-preview'),this['_cssOutput']=this[B(0x1d7)](B(0x234)),this['_loadBtn']=this[B(0x1d7)](B(0x1e1)),this['_copyBtn']=this['_getDomElement'](B(0x1ec)),this['_applyBtn']=this[B(0x1d7)](B(0x220)),this[B(0x1d7)](B(0x1d2))[B(0x20c)]=()=>this['_addLayer'](),this[B(0x1d7)](B(0x1e2))[B(0x20c)]=()=>this['_duplicateLayer'](),this[B(0x1d7)]('bse-up-btn')['onclick']=()=>this[B(0x1d8)](-0x1),this['_getDomElement']('bse-down-btn')[B(0x20c)]=()=>this[B(0x1d8)](0x1),this[B(0x23c)]['onclick']=()=>this[B(0x22f)](),this[B(0x1e9)][B(0x212)]=()=>{const C=B;this['_currentLayer']()[C(0x213)]=this['_insetCheck']['checked'],this['_refresh']();},this[B(0x1df)]['onchange']=()=>{const D=B;this['_currentLayer']()['enabled']=this['_enabledCheck']['checked'],this[D(0x1fc)]();};for(const [d,e,f]of[[this['_inputX'],B(0x22a),B(0x1e4)],[this[B(0x219)],'offsetY',B(0x1f9)],[this[B(0x1f4)],B(0x202),B(0x1fd)],[this['_inputSpread'],'spread',B(0x20b)]]){d[B(0x1e5)]=()=>{const E=B;this['_currentLayer']()[e]=Number(d[E(0x203)]),this['_getDomElement'](f)['textContent']=d[E(0x203)]+'px',this[E(0x1fc)]();};}this['_inputColor'][B(0x1e5)]=()=>{const F=B;this['_currentLayer']()[F(0x210)]=this[F(0x1fa)][F(0x203)],this[F(0x1fc)]();},this['_inputOpacity']['oninput']=()=>{const G=B;this['_currentLayer']()[G(0x1d6)]=Number(this['_inputOpacity'][G(0x203)]),this[G(0x1ef)]['textContent']=this['_inputOpacity']['value']+'%',this['_refresh']();},this[B(0x1eb)][B(0x20c)]=()=>{const H=B;navigator[H(0x21e)]?.['writeText'](this[H(0x1dc)][H(0x203)])[H(0x222)](()=>{});},this['_applyBtn'][B(0x20c)]=()=>this['_applyToSelection'](),this[B(0x22e)][B(0x20c)]=()=>{const I=B;this[I(0x215)](),this[I(0x23a)](),this['_loadControls'](),this['_refresh']();},this[B(0x215)](),this['_renderList'](),this['_loadControls'](),this[B(0x1fc)]();}[y(0x215)](){const J=y,c=this['_designerCanvas']?.['instanceServiceContainer']?.[J(0x228)]?.[J(0x216)];if(!c)return;const d=c['getStyle'](J(0x237));d&&(this[J(0x207)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const K=y;this[K(0x207)][K(0x22d)](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this[K(0x23a)](),this['_loadControls'](),this['_refresh']();}[y(0x1d1)](){const L=y,c={...this['_currentLayer']()};this[L(0x207)][L(0x1e7)](this['_selectedIndex']+0x1,0x0,c),this[L(0x20d)]=this[L(0x20d)]+0x1,this['_renderList'](),this['_loadControls'](),this[L(0x1fc)]();}[y(0x22f)](){const M=y;if(this['_layers'][M(0x23b)]<=0x1)return;this[M(0x207)]['splice'](this[M(0x20d)],0x1),this['_selectedIndex']=Math['min'](this[M(0x20d)],this['_layers']['length']-0x1),this[M(0x23a)](),this['_loadControls'](),this[M(0x1fc)]();}['_moveLayer'](c){const N=y,d=this[N(0x20d)],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this[N(0x207)][e]]=[this[N(0x207)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const O=y;this['_layerList'][O(0x1ee)]='',this['_layers']['forEach']((c,d)=>{const P=O,e=document['createElement']('li');if(d===this[P(0x20d)])e[P(0x233)][P(0x224)]('selected');const f=document[P(0x20f)]('span');f[P(0x217)]=P(0x21d),f['style'][P(0x1f7)]=c['color'],e[P(0x238)](f);const g=document['createElement'](P(0x21f));g['textContent']=''+(c['inset']?'inset\x20':'')+c[P(0x22a)]+P(0x22c)+c['offsetY']+P(0x22c)+c[P(0x202)]+'px\x20'+c[P(0x232)]+'px';if(!c['enabled'])g['classList']['add'](P(0x1ff));e['appendChild'](g),e['onclick']=()=>{this['_selectedIndex']=d,this['_renderList'](),this['_loadControls']();},this['_layerList']['appendChild'](e);});}[y(0x1d3)](){const Q=y,c=this['_currentLayer']();this[Q(0x1e9)][Q(0x239)]=c['inset'],this[Q(0x1df)][Q(0x239)]=c[Q(0x201)],this['_inputX'][Q(0x203)]=String(c[Q(0x22a)]),this['_getDomElement']('bse-x-val')['textContent']=c['offsetX']+'px',this[Q(0x219)]['value']=String(c['offsetY']),this['_getDomElement'](Q(0x1f9))['textContent']=c[Q(0x218)]+'px',this[Q(0x1f4)]['value']=String(c['blur']),this['_getDomElement']('bse-blur-val')[Q(0x1ed)]=c['blur']+'px',this['_inputSpread']['value']=String(c['spread']),this[Q(0x1d7)]('bse-spread-val')[Q(0x1ed)]=c['spread']+'px',this[Q(0x1fa)][Q(0x203)]=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this['_opacityVal'][Q(0x1ed)]=c[Q(0x1d6)]+'%';}['_buildCss'](){const R=y;return this[R(0x207)][R(0x20e)](c=>c['enabled'])[R(0x1fe)](layerToCss)[R(0x1f6)](',\x20')||R(0x225);}[y(0x1fc)](){const S=y,c=this[S(0x204)]();this[S(0x236)]['style']['boxShadow']=c,this['_cssOutput'][S(0x203)]='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const T=y;if(!this[T(0x1d9)])return;const c=this['_designerCanvas'][T(0x1e0)][T(0x228)]['selectedElements'];if(!c?.['length'])return;const d=this[T(0x204)](),e=c[0x0][T(0x1d4)]('Apply\x20box-shadow');for(const f of c){f['setStyle'](T(0x237),d);}e[T(0x211)]();}}customElements[y(0x1e3)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);