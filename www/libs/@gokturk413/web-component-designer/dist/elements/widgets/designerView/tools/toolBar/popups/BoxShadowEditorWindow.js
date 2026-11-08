const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1d5))/0x1+-parseInt(r(0x1f5))/0x2*(-parseInt(r(0x235))/0x3)+parseInt(r(0x1cc))/0x4+-parseInt(r(0x1e5))/0x5*(-parseInt(r(0x1d9))/0x6)+parseInt(r(0x232))/0x7*(parseInt(r(0x1fb))/0x8)+-parseInt(r(0x20e))/0x9*(parseInt(r(0x22f))/0xa)+-parseInt(r(0x1cd))/0xb*(parseInt(r(0x231))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8e8e));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x220)](f=>f[s(0x229)](0x10)[s(0x207)](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d[t(0x1d0)](k);f='';continue;}}}f+=j;}const g=f[t(0x1fa)]();if(g)d['push'](g);return d;}function a(){const V=['replace','350NdfOas','add','_inputOpacity','offsetY','_inputColor','spread','selected','inset','offsetX','bse-blur','_designerCanvas','_loadBtn','_inputBlur','forEach','bse-dup-btn','box-shadow:\x20','12KWbQhn','_duplicateLayer','disabled-label','blur','bse-down-btn','trim','104TGyyxL','bse-load-btn','bse-remove-btn','appendChild','bse-apply-btn','color','_removeLayer','value','inset\x20','_applyBtn','background','split','padStart','_applyToSelection','px\x20','node-projects-designer-box-shadow-editor','bse-spread','_loadControls','bse-y','674217OkUGEh','_previewBox','_loadFromPrimarySelection','_moveLayer','_copyBtn','join','selectionService','writeText','bse-layer-list','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','windowTitle','commit','innerHTML','className','_layers','catch','_selectedIndex','_inputSpread','map','getStyle','none','swatch','slice','enabled','bse-x-val','_getDomElement','_layerList','toString','windowTemplate','bse-y-val','textContent','bse-blur-val','bse-opacity','20HStxMM','_inputY','14616372vwutVn','908047sMnLeg','bse-spread-val','_inputX','680364JeMWYA','oninput','primarySelection','onclick','splice','filter','5878600pCiPfc','22HNpiZZ','box-shadow','bse-x','push','_removeBtn','_refresh','opacity','match','1285285yOdupJ','toFixed','#000000','_renderList','26436PXIkzd','length','_enabledCheck','_opacityVal','_currentLayer','checked','bse-copy-btn','_buildCss','bse-inset','_addLayer','_cssOutput'];a=function(){return V;};return a();}function parseCssBoxShadow(c){const u=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0x1fa)]());if(f)d['push'](f);}return d[u(0x1da)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0x1d7),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x1d4)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][v(0x224)](0x1)[v(0x206)]('')[v(0x220)](o=>o+o)[v(0x213)](''):m[0x1][v(0x224)](0x0,0x7),f=f[v(0x1e4)](m[0x1],'')[v(0x1fa)]());}const h=f['split'](/\s+/)[v(0x23a)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[v(0x1d0)](q);}if(j[v(0x1da)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c[w(0x1d3)]/0x64)[w(0x1d6)](0x2);return''+(c[w(0x1ec)]?w(0x203):'')+c['offsetX']+'px\x20'+c[w(0x1e8)]+w(0x209)+c[w(0x1f8)]+w(0x209)+c[w(0x1ea)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[x(0x224)](0x3,0x5),0x10),f=parseInt(c[x(0x224)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[y(0x21c)]=[defaultLayer()];[y(0x21e)]=0x0;[y(0x228)];['_removeBtn'];['_insetCheck'];[y(0x1db)];[y(0x234)];[y(0x230)];[y(0x1f1)];['_inputSpread'];[y(0x1e9)];[y(0x1e7)];['_opacityVal'];[y(0x20f)];['_cssOutput'];['_loadBtn'];[y(0x212)];[y(0x204)];get[y(0x218)](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[y(0x22a)](){const z=y;return z(0x217);}constructor(c){const A=y;super(c),this[A(0x228)]=this['_getDomElement'](A(0x216)),this[A(0x1d1)]=this['_getDomElement'](A(0x1fd)),this['_insetCheck']=this['_getDomElement'](A(0x1e1)),this['_enabledCheck']=this[A(0x227)]('bse-enabled'),this[A(0x234)]=this[A(0x227)](A(0x1cf)),this['_inputY']=this['_getDomElement'](A(0x20d)),this[A(0x1f1)]=this[A(0x227)](A(0x1ee)),this['_inputSpread']=this['_getDomElement'](A(0x20b)),this[A(0x1e9)]=this[A(0x227)]('bse-color'),this['_inputOpacity']=this['_getDomElement'](A(0x22e)),this[A(0x1dc)]=this['_getDomElement']('bse-opacity-val'),this['_previewBox']=this['_getDomElement']('bse-preview'),this[A(0x1e3)]=this['_getDomElement']('bse-css-out'),this['_loadBtn']=this['_getDomElement'](A(0x1fc)),this['_copyBtn']=this[A(0x227)](A(0x1df)),this['_applyBtn']=this[A(0x227)](A(0x1ff)),this[A(0x227)]('bse-add-btn')[A(0x238)]=()=>this['_addLayer'](),this[A(0x227)](A(0x1f3))['onclick']=()=>this[A(0x1f6)](),this['_getDomElement']('bse-up-btn')[A(0x238)]=()=>this['_moveLayer'](-0x1),this['_getDomElement'](A(0x1f9))['onclick']=()=>this[A(0x211)](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this['_insetCheck']['onchange']=()=>{const B=A;this['_currentLayer']()[B(0x1ec)]=this['_insetCheck'][B(0x1de)],this['_refresh']();},this[A(0x1db)]['onchange']=()=>{const C=A;this[C(0x1dd)]()[C(0x225)]=this[C(0x1db)]['checked'],this[C(0x1d2)]();};for(const [d,e,f]of[[this['_inputX'],A(0x1ed),A(0x226)],[this[A(0x230)],'offsetY',A(0x22b)],[this['_inputBlur'],A(0x1f8),A(0x22d)],[this[A(0x21f)],A(0x1ea),A(0x233)]]){d[A(0x236)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d[D(0x202)]),this['_getDomElement'](f)['textContent']=d['value']+'px',this['_refresh']();};}this[A(0x1e9)][A(0x236)]=()=>{const E=A;this[E(0x1dd)]()['color']=this[E(0x1e9)]['value'],this['_refresh']();},this['_inputOpacity']['oninput']=()=>{const F=A;this['_currentLayer']()['opacity']=Number(this['_inputOpacity'][F(0x202)]),this['_opacityVal']['textContent']=this['_inputOpacity'][F(0x202)]+'%',this[F(0x1d2)]();},this[A(0x212)][A(0x238)]=()=>{const G=A;navigator['clipboard']?.[G(0x215)](this['_cssOutput']['value'])[G(0x21d)](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this[A(0x1f0)][A(0x238)]=()=>{const H=A;this['_loadFromPrimarySelection'](),this[H(0x1d8)](),this['_loadControls'](),this[H(0x1d2)]();},this[A(0x210)](),this[A(0x1d8)](),this[A(0x20c)](),this[A(0x1d2)]();}[y(0x210)](){const I=y,c=this['_designerCanvas']?.['instanceServiceContainer']?.[I(0x214)]?.[I(0x237)];if(!c)return;const d=c[I(0x221)]('box-shadow');d&&(this[I(0x21c)]=parseCssBoxShadow(d),this[I(0x21e)]=0x0);}[y(0x1dd)](){const J=y;return this[J(0x21c)][this['_selectedIndex']];}[y(0x1e2)](){const K=y;this[K(0x21c)][K(0x1d0)](defaultLayer()),this['_selectedIndex']=this[K(0x21c)][K(0x1da)]-0x1,this[K(0x1d8)](),this['_loadControls'](),this['_refresh']();}[y(0x1f6)](){const L=y,c={...this[L(0x1dd)]()};this[L(0x21c)]['splice'](this[L(0x21e)]+0x1,0x0,c),this['_selectedIndex']=this[L(0x21e)]+0x1,this[L(0x1d8)](),this[L(0x20c)](),this['_refresh']();}[y(0x201)](){const M=y;if(this['_layers']['length']<=0x1)return;this[M(0x21c)][M(0x239)](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this['_selectedIndex'],this['_layers']['length']-0x1),this[M(0x1d8)](),this['_loadControls'](),this[M(0x1d2)]();}[y(0x211)](c){const N=y,d=this[N(0x21e)],e=d+c;if(e<0x0||e>=this['_layers'][N(0x1da)])return;[this[N(0x21c)][d],this['_layers'][e]]=[this['_layers'][e],this[N(0x21c)][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const O=y;this['_layerList'][O(0x21a)]='',this[O(0x21c)][O(0x1f2)]((c,d)=>{const P=O,e=document['createElement']('li');if(d===this[P(0x21e)])e['classList'][P(0x1e6)](P(0x1eb));const f=document['createElement']('span');f[P(0x21b)]=P(0x223),f['style'][P(0x205)]=c[P(0x200)],e[P(0x1fe)](f);const g=document['createElement']('span');g[P(0x22c)]=''+(c['inset']?'inset\x20':'')+c[P(0x1ed)]+'px\x20'+c[P(0x1e8)]+'px\x20'+c['blur']+P(0x209)+c['spread']+'px';if(!c[P(0x225)])g['classList'][P(0x1e6)](P(0x1f7));e['appendChild'](g),e[P(0x238)]=()=>{const Q=P;this[Q(0x21e)]=d,this[Q(0x1d8)](),this[Q(0x20c)]();},this['_layerList']['appendChild'](e);});}['_loadControls'](){const R=y,c=this[R(0x1dd)]();this['_insetCheck'][R(0x1de)]=c[R(0x1ec)],this[R(0x1db)][R(0x1de)]=c[R(0x225)],this[R(0x234)]['value']=String(c['offsetX']),this['_getDomElement'](R(0x226))[R(0x22c)]=c[R(0x1ed)]+'px',this['_inputY'][R(0x202)]=String(c['offsetY']),this['_getDomElement']('bse-y-val')['textContent']=c['offsetY']+'px',this[R(0x1f1)]['value']=String(c[R(0x1f8)]),this[R(0x227)]('bse-blur-val')['textContent']=c['blur']+'px',this[R(0x21f)]['value']=String(c['spread']),this['_getDomElement']('bse-spread-val')['textContent']=c[R(0x1ea)]+'px',this[R(0x1e9)][R(0x202)]=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this['_opacityVal']['textContent']=c[R(0x1d3)]+'%';}[y(0x1e0)](){const S=y;return this[S(0x21c)]['filter'](c=>c['enabled'])[S(0x220)](layerToCss)[S(0x213)](',\x20')||S(0x222);}[y(0x1d2)](){const T=y,c=this[T(0x1e0)]();this[T(0x20f)]['style']['boxShadow']=c,this[T(0x1e3)][T(0x202)]=T(0x1f4)+c+';',this[T(0x1d8)]();}[y(0x208)](){const U=y;if(!this[U(0x1ef)])return;const c=this[U(0x1ef)]['instanceServiceContainer'][U(0x214)]['selectedElements'];if(!c?.['length'])return;const d=this[U(0x1e0)](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f['setStyle'](U(0x1ce),d);}e[U(0x219)]();}}customElements['define'](y(0x20a),BoxShadowEditorWindow);