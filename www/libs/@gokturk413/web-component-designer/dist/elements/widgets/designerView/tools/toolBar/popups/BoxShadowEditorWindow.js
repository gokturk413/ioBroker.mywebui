const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1df))/0x1+-parseInt(r(0x1e3))/0x2*(parseInt(r(0x229))/0x3)+parseInt(r(0x1f1))/0x4+parseInt(r(0x21a))/0x5*(parseInt(r(0x205))/0x6)+parseInt(r(0x214))/0x7*(-parseInt(r(0x223))/0x8)+parseInt(r(0x1dc))/0x9+-parseInt(r(0x20a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c28d));function b(c,d){c=c-0x1db;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x21f),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e]['map'](f=>f[t(0x239)](0x10)[t(0x206)](0x2,'0'))[t(0x227)]('');}function splitShadowLayers(c){const d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0x1ff))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0x1f9)]());if(f)d[u(0x220)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x1ec)](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[v(0x1e6)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][v(0x224)]===0x4?'#'+m[0x1][v(0x23a)](0x1)['split']('')[v(0x221)](o=>o+o)['join'](''):m[0x1][v(0x23a)](0x0,0x7),f=f[v(0x1ec)](m[0x1],'')[v(0x1f9)]());}const h=f['split'](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===v(0x211)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0x224)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c[w(0x23b)]),e=(c[w(0x1f5)]/0x64)['toFixed'](0x2);return''+(c['inset']?w(0x1e4):'')+c['offsetX']+'px\x20'+c[w(0x1e2)]+w(0x235)+c[w(0x20f)]+'px\x20'+c['spread']+w(0x207)+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[x(0x23a)](0x5,0x7),0x10);return d+','+e+','+f;}function a(){const T=['6sPryrH','inset\x20','splice','round','catch','background','Apply\x20box-shadow','_inputX','selectionService','replace','selectedElements','_inputColor','appendChild','primarySelection','1242496GnGioM','filter','bse-spread','oninput','opacity','Box\x20Shadow\x20Editor','_opacityVal','bse-blur-val','trim','value','bse-load-btn','bse-add-btn','_cssOutput','textContent','none','_loadControls','_inputSpread','windowTitle','_designerCanvas','_selectedIndex','6VvIUUm','padStart','px\x20rgba(','bse-y','_applyBtn','1791770POikDk','writeText','onchange','_getDomElement','_loadBtn','blur','_addLayer','inset','_refresh','_renderList','223433JDrkPB','bse-y-val','_inputY','style','_inputBlur','add','220895gTQsET','instanceServiceContainer','_applyToSelection','_buildCss','_previewBox','#000000','push','map','bse-inset','136huSSdW','length','_enabledCheck','bse-copy-btn','join','_insetCheck','320994uzjiHs','offsetX','bse-opacity','enabled','_layers','_loadFromPrimarySelection','_moveLayer','_inputOpacity','selected','bse-css-out','define','box-shadow','px\x20','bse-opacity-val','box-shadow:\x20','_layerList','toString','slice','color','onclick','_removeBtn','bse-spread-val','setStyle','_currentLayer','3401127NTGsAq','spread','bse-color','687573dPsfZC','classList','bse-x-val','offsetY'];a=function(){return T;};return a();}export class BoxShadowEditorWindow extends DraggableToolWindow{[y(0x22d)]=[defaultLayer()];[y(0x204)]=0x0;[y(0x238)];[y(0x23d)];[y(0x228)];[y(0x225)];['_inputX'];[y(0x216)];['_inputBlur'];[y(0x201)];['_inputColor'];['_inputOpacity'];[y(0x1f7)];[y(0x21e)];['_cssOutput'];['_loadBtn'];['_copyBtn'];['_applyBtn'];get[y(0x202)](){const z=y;return z(0x1f6);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=y;super(c),this['_layerList']=this['_getDomElement']('bse-layer-list'),this['_removeBtn']=this['_getDomElement']('bse-remove-btn'),this[A(0x228)]=this['_getDomElement'](A(0x222)),this[A(0x225)]=this[A(0x20d)]('bse-enabled'),this['_inputX']=this[A(0x20d)]('bse-x'),this[A(0x216)]=this[A(0x20d)](A(0x208)),this['_inputBlur']=this[A(0x20d)]('bse-blur'),this[A(0x201)]=this[A(0x20d)](A(0x1f3)),this[A(0x1ee)]=this['_getDomElement'](A(0x1de)),this[A(0x230)]=this['_getDomElement'](A(0x22b)),this[A(0x1f7)]=this['_getDomElement'](A(0x236)),this['_previewBox']=this['_getDomElement']('bse-preview'),this['_cssOutput']=this['_getDomElement'](A(0x232)),this['_loadBtn']=this[A(0x20d)](A(0x1fb)),this['_copyBtn']=this[A(0x20d)](A(0x226)),this[A(0x209)]=this[A(0x20d)]('bse-apply-btn'),this[A(0x20d)](A(0x1fc))[A(0x23c)]=()=>this[A(0x210)](),this['_getDomElement']('bse-dup-btn')['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement']('bse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')[A(0x23c)]=()=>this[A(0x22f)](0x1),this[A(0x23d)][A(0x23c)]=()=>this['_removeLayer'](),this[A(0x228)]['onchange']=()=>{const B=A;this['_currentLayer']()['inset']=this[B(0x228)]['checked'],this['_refresh']();},this['_enabledCheck'][A(0x20c)]=()=>{const C=A;this[C(0x1db)]()[C(0x22c)]=this['_enabledCheck']['checked'],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],A(0x22a),'bse-x-val'],[this[A(0x216)],A(0x1e2),A(0x215)],[this['_inputBlur'],A(0x20f),A(0x1f8)],[this['_inputSpread'],'spread',A(0x23e)]]){d['oninput']=()=>{const D=A;this[D(0x1db)]()[e]=Number(d[D(0x1fa)]),this[D(0x20d)](f)['textContent']=d[D(0x1fa)]+'px',this[D(0x212)]();};}this['_inputColor']['oninput']=()=>{const E=A;this['_currentLayer']()[E(0x23b)]=this[E(0x1ee)]['value'],this[E(0x212)]();},this[A(0x230)][A(0x1f4)]=()=>{const F=A;this['_currentLayer']()['opacity']=Number(this[F(0x230)][F(0x1fa)]),this['_opacityVal'][F(0x1fe)]=this['_inputOpacity'][F(0x1fa)]+'%',this[F(0x212)]();},this['_copyBtn']['onclick']=()=>{const G=A;navigator['clipboard']?.[G(0x20b)](this['_cssOutput'][G(0x1fa)])[G(0x1e7)](()=>{});},this['_applyBtn']['onclick']=()=>this[A(0x21c)](),this[A(0x20e)]['onclick']=()=>{this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();},this[A(0x22e)](),this['_renderList'](),this['_loadControls'](),this[A(0x212)]();}['_loadFromPrimarySelection'](){const H=y,c=this['_designerCanvas']?.[H(0x21b)]?.[H(0x1eb)]?.[H(0x1f0)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this[H(0x22d)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const I=y;return this['_layers'][this[I(0x204)]];}[y(0x210)](){const J=y;this[J(0x22d)]['push'](defaultLayer()),this['_selectedIndex']=this[J(0x22d)][J(0x224)]-0x1,this[J(0x213)](),this[J(0x200)](),this['_refresh']();}['_duplicateLayer'](){const K=y,c={...this[K(0x1db)]()};this['_layers'][K(0x1e5)](this[K(0x204)]+0x1,0x0,c),this['_selectedIndex']=this[K(0x204)]+0x1,this['_renderList'](),this[K(0x200)](),this['_refresh']();}['_removeLayer'](){const L=y;if(this[L(0x22d)]['length']<=0x1)return;this[L(0x22d)][L(0x1e5)](this['_selectedIndex'],0x1),this[L(0x204)]=Math['min'](this['_selectedIndex'],this['_layers']['length']-0x1),this[L(0x213)](),this[L(0x200)](),this[L(0x212)]();}['_moveLayer'](c){const M=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers'][M(0x224)])return;[this[M(0x22d)][d],this[M(0x22d)][e]]=[this[M(0x22d)][e],this[M(0x22d)][d]],this['_selectedIndex']=e,this[M(0x213)](),this['_refresh']();}[y(0x213)](){this['_layerList']['innerHTML']='',this['_layers']['forEach']((c,d)=>{const N=b,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList'][N(0x219)](N(0x231));const f=document['createElement']('span');f['className']='swatch',f[N(0x217)][N(0x1e8)]=c['color'],e[N(0x1ef)](f);const g=document['createElement']('span');g['textContent']=''+(c[N(0x211)]?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[N(0x20f)]+N(0x235)+c['spread']+'px';if(!c['enabled'])g[N(0x1e0)][N(0x219)]('disabled-label');e['appendChild'](g),e[N(0x23c)]=()=>{const O=N;this[O(0x204)]=d,this[O(0x213)](),this['_loadControls']();},this['_layerList'][N(0x1ef)](e);});}['_loadControls'](){const P=y,c=this[P(0x1db)]();this['_insetCheck']['checked']=c[P(0x211)],this[P(0x225)]['checked']=c[P(0x22c)],this[P(0x1ea)]['value']=String(c[P(0x22a)]),this[P(0x20d)](P(0x1e1))[P(0x1fe)]=c['offsetX']+'px',this[P(0x216)]['value']=String(c['offsetY']),this['_getDomElement'](P(0x215))['textContent']=c['offsetY']+'px',this[P(0x218)]['value']=String(c[P(0x20f)]),this[P(0x20d)]('bse-blur-val')[P(0x1fe)]=c['blur']+'px',this[P(0x201)][P(0x1fa)]=String(c[P(0x1dd)]),this[P(0x20d)](P(0x23e))[P(0x1fe)]=c['spread']+'px',this['_inputColor'][P(0x1fa)]=c[P(0x23b)],this[P(0x230)]['value']=String(c['opacity']),this['_opacityVal'][P(0x1fe)]=c[P(0x1f5)]+'%';}['_buildCss'](){const Q=y;return this['_layers'][Q(0x1f2)](c=>c['enabled'])[Q(0x221)](layerToCss)[Q(0x227)](',\x20')||'none';}['_refresh'](){const R=y,c=this[R(0x21d)]();this['_previewBox'][R(0x217)]['boxShadow']=c,this[R(0x1fd)][R(0x1fa)]=R(0x237)+c+';',this[R(0x213)]();}[y(0x21c)](){const S=y;if(!this[S(0x203)])return;const c=this['_designerCanvas']['instanceServiceContainer'][S(0x1eb)][S(0x1ed)];if(!c?.[S(0x224)])return;const d=this['_buildCss'](),e=c[0x0]['openGroup'](S(0x1e9));for(const f of c){f[S(0x23f)](S(0x234),d);}e['commit']();}}customElements[y(0x233)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);