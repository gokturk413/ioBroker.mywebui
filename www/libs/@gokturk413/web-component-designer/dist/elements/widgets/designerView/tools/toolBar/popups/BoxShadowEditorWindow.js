const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x214))/0x1*(-parseInt(r(0x210))/0x2)+parseInt(r(0x20c))/0x3+-parseInt(r(0x1ff))/0x4+-parseInt(r(0x1c4))/0x5+parseInt(r(0x1f4))/0x6*(-parseInt(r(0x1f3))/0x7)+parseInt(r(0x1ee))/0x8*(parseInt(r(0x227))/0x9)+parseInt(r(0x1ec))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4d87c));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)[s(0x222)](0x2,'0'))[s(0x1d4)]('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[t(0x22b)]();if(g)d[t(0x1cd)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0x22b)]());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function a(){const V=['_inputBlur','_insetCheck','trim','333380OKLVYC','color','match','box-shadow:\x20','_renderList','_applyBtn','split','_selectedIndex','swatch','push','_buildCss','catch','appendChild','_cssOutput','add','bse-opacity-val','join','bse-preview','_loadFromPrimarySelection','box-shadow','_removeBtn','selected','commit','onclick','node-projects-designer-box-shadow-editor','bse-opacity','classList','bse-inset','_moveLayer','bse-y-val','splice','_layerList','bse-x-val','_refresh','_getDomElement','slice','bse-layer-list','instanceServiceContainer','length','bse-up-btn','8471410ByQYZP','filter','28792nuJVue','_currentLayer','offsetY','toFixed','inset','1978144gzcscW','6ZLWZTc','bse-add-btn','textContent','_loadControls','bse-css-out','_copyBtn','spread','bse-spread-val','_applyToSelection','innerHTML','enabled','992132UeuPrS','windowContentStyle','define','selectionService','_inputColor','_inputY','inset\x20','replace','Box\x20Shadow\x20Editor','_enabledCheck','_layers','bse-remove-btn','selectedElements','970680nKJjVq','clipboard','onchange','_opacityVal','76daIrcV','checked','_removeLayer','blur','12794tZEgOT','_inputOpacity','px\x20','writeText','_previewBox','bse-load-btn','_inputSpread','_inputX','bse-apply-btn','_designerCanvas','createElement','opacity','_addLayer','forEach','padStart','map','oninput','offsetX','value','576RnwjqF','background'];a=function(){return V;};return a();}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x206)](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x1c6)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][v(0x1e7)](0x1)['split']('')[v(0x223)](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f[v(0x1ca)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===v(0x1f2)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0x1ea)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c[w(0x1c5)]),e=(c['opacity']/0x64)[w(0x1f1)](0x2);return''+(c[w(0x1f2)]?w(0x205):'')+c['offsetX']+'px\x20'+c[w(0x1f0)]+'px\x20'+c[w(0x213)]+'px\x20'+c[w(0x1fa)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c[x(0x1e7)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[x(0x1e7)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[y(0x1e3)];[y(0x1d8)];[y(0x22a)];[y(0x208)];['_inputX'];['_inputY'];[y(0x229)];[y(0x21a)];['_inputColor'];[y(0x215)];[y(0x20f)];['_previewBox'];[y(0x1d1)];['_loadBtn'];[y(0x1f9)];[y(0x1c9)];get['windowTitle'](){const z=y;return z(0x207);}get[y(0x200)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=y;super(c),this[A(0x1e3)]=this['_getDomElement'](A(0x1e8)),this['_removeBtn']=this[A(0x1e6)](A(0x20a)),this['_insetCheck']=this[A(0x1e6)](A(0x1df)),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this[A(0x21b)]=this['_getDomElement']('bse-x'),this['_inputY']=this[A(0x1e6)]('bse-y'),this[A(0x229)]=this[A(0x1e6)]('bse-blur'),this[A(0x21a)]=this[A(0x1e6)]('bse-spread'),this[A(0x203)]=this['_getDomElement']('bse-color'),this[A(0x215)]=this['_getDomElement'](A(0x1dd)),this['_opacityVal']=this[A(0x1e6)](A(0x1d3)),this[A(0x218)]=this[A(0x1e6)](A(0x1d5)),this['_cssOutput']=this[A(0x1e6)](A(0x1f8)),this['_loadBtn']=this[A(0x1e6)](A(0x219)),this[A(0x1f9)]=this[A(0x1e6)]('bse-copy-btn'),this['_applyBtn']=this['_getDomElement'](A(0x21c)),this[A(0x1e6)](A(0x1f5))[A(0x1db)]=()=>this[A(0x220)](),this[A(0x1e6)]('bse-dup-btn')[A(0x1db)]=()=>this['_duplicateLayer'](),this['_getDomElement'](A(0x1eb))['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')['onclick']=()=>this[A(0x1e0)](0x1),this['_removeBtn']['onclick']=()=>this[A(0x212)](),this['_insetCheck']['onchange']=()=>{const B=A;this[B(0x1ef)]()[B(0x1f2)]=this[B(0x22a)]['checked'],this[B(0x1e5)]();},this[A(0x208)][A(0x20e)]=()=>{const C=A;this[C(0x1ef)]()['enabled']=this[C(0x208)]['checked'],this[C(0x1e5)]();};for(const [d,e,f]of[[this[A(0x21b)],A(0x225),A(0x1e4)],[this[A(0x204)],'offsetY','bse-y-val'],[this[A(0x229)],'blur','bse-blur-val'],[this[A(0x21a)],A(0x1fa),A(0x1fb)]]){d[A(0x224)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d[D(0x226)]+'px',this['_refresh']();};}this['_inputColor'][A(0x224)]=()=>{const E=A;this[E(0x1ef)]()['color']=this['_inputColor'][E(0x226)],this['_refresh']();},this[A(0x215)]['oninput']=()=>{const F=A;this['_currentLayer']()[F(0x21f)]=Number(this['_inputOpacity'][F(0x226)]),this['_opacityVal'][F(0x1f6)]=this[F(0x215)]['value']+'%',this[F(0x1e5)]();},this[A(0x1f9)]['onclick']=()=>{const G=A;navigator[G(0x20d)]?.[G(0x217)](this['_cssOutput'][G(0x226)])[G(0x1cf)](()=>{});},this['_applyBtn'][A(0x1db)]=()=>this[A(0x1fc)](),this['_loadBtn'][A(0x1db)]=()=>{const H=A;this[H(0x1d6)](),this['_renderList'](),this[H(0x1f7)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const I=y,c=this[I(0x21d)]?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c['getStyle'](I(0x1d7));d&&(this[I(0x209)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const J=y;return this[J(0x209)][this['_selectedIndex']];}[y(0x220)](){const K=y;this['_layers'][K(0x1cd)](defaultLayer()),this['_selectedIndex']=this['_layers'][K(0x1ea)]-0x1,this['_renderList'](),this[K(0x1f7)](),this['_refresh']();}['_duplicateLayer'](){const L=y,c={...this['_currentLayer']()};this['_layers'][L(0x1e2)](this['_selectedIndex']+0x1,0x0,c),this['_selectedIndex']=this['_selectedIndex']+0x1,this[L(0x1c8)](),this[L(0x1f7)](),this[L(0x1e5)]();}[y(0x212)](){const M=y;if(this['_layers']['length']<=0x1)return;this[M(0x209)]['splice'](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this[M(0x1cb)],this['_layers']['length']-0x1),this['_renderList'](),this[M(0x1f7)](),this[M(0x1e5)]();}[y(0x1e0)](c){const N=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers'][N(0x1ea)])return;[this[N(0x209)][d],this[N(0x209)][e]]=[this[N(0x209)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this[N(0x1e5)]();}['_renderList'](){const O=y;this['_layerList'][O(0x1fd)]='',this[O(0x209)][O(0x221)]((c,d)=>{const P=O,e=document['createElement']('li');if(d===this[P(0x1cb)])e[P(0x1de)][P(0x1d2)](P(0x1d9));const f=document[P(0x21e)]('span');f['className']=P(0x1cc),f['style'][P(0x228)]=c[P(0x1c5)],e[P(0x1d0)](f);const g=document['createElement']('span');g[P(0x1f6)]=''+(c[P(0x1f2)]?'inset\x20':'')+c[P(0x225)]+P(0x216)+c['offsetY']+'px\x20'+c[P(0x213)]+P(0x216)+c[P(0x1fa)]+'px';if(!c['enabled'])g[P(0x1de)]['add']('disabled-label');e['appendChild'](g),e['onclick']=()=>{const Q=P;this[Q(0x1cb)]=d,this[Q(0x1c8)](),this['_loadControls']();},this[P(0x1e3)]['appendChild'](e);});}['_loadControls'](){const R=y,c=this['_currentLayer']();this[R(0x22a)][R(0x211)]=c[R(0x1f2)],this['_enabledCheck']['checked']=c[R(0x1fe)],this[R(0x21b)][R(0x226)]=String(c[R(0x225)]),this['_getDomElement'](R(0x1e4))['textContent']=c[R(0x225)]+'px',this[R(0x204)]['value']=String(c['offsetY']),this['_getDomElement'](R(0x1e1))['textContent']=c[R(0x1f0)]+'px',this['_inputBlur']['value']=String(c[R(0x213)]),this['_getDomElement']('bse-blur-val')[R(0x1f6)]=c['blur']+'px',this['_inputSpread']['value']=String(c['spread']),this['_getDomElement'](R(0x1fb))['textContent']=c[R(0x1fa)]+'px',this['_inputColor'][R(0x226)]=c['color'],this['_inputOpacity'][R(0x226)]=String(c['opacity']),this[R(0x20f)][R(0x1f6)]=c['opacity']+'%';}['_buildCss'](){const S=y;return this[S(0x209)][S(0x1ed)](c=>c['enabled'])['map'](layerToCss)['join'](',\x20')||'none';}[y(0x1e5)](){const T=y,c=this[T(0x1ce)]();this['_previewBox']['style']['boxShadow']=c,this['_cssOutput'][T(0x226)]=T(0x1c7)+c+';',this[T(0x1c8)]();}[y(0x1fc)](){const U=y;if(!this[U(0x21d)])return;const c=this['_designerCanvas'][U(0x1e9)][U(0x202)][U(0x20b)];if(!c?.['length'])return;const d=this[U(0x1ce)](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f['setStyle']('box-shadow',d);}e[U(0x1da)]();}}function b(c,d){c=c-0x1c4;const e=a();let f=e[c];return f;}customElements[y(0x201)](y(0x1dc),BoxShadowEditorWindow);