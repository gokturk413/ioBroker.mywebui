function a(){const T=['_previewBox','_buildCss','selectionService','onclick','clipboard','catch','_inputY','toFixed','className','color','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','add','writeText','push','bse-add-btn','bse-blur','min','_layerList','selected','_getDomElement','define','_currentLayer','_removeBtn','_applyBtn','windowTitle','5962BexccD','offsetX','_layers','_inputColor','_loadBtn','offsetY','primarySelection','instanceServiceContainer','textContent','bse-remove-btn','_applyToSelection','49604omNRMD','split','bse-preview','#000000','bse-dup-btn','spread','_opacityVal','bse-color','1704051QMmZac','innerHTML','_removeLayer','3084018oaZobI','61107imzuaw','_inputBlur','_refresh','_addLayer','box-shadow','bse-y-val','slice','_inputSpread','match','5Kjvjbj','_inputX','_renderList','2571942aBAjaQ','bse-blur-val','_duplicateLayer','17dTJpPZ','_copyBtn','868720jvffiy','_designerCanvas','enabled','_enabledCheck','join','openGroup','bse-spread','background','getStyle','bse-spread-val','_insetCheck','style','bse-x-val','inset\x20','splice','trim','_inputOpacity','_loadFromPrimarySelection','_selectedIndex','selectedElements','length','px\x20','appendChild','createElement','replace','value','blur','64vBUwvk','checked','_moveLayer','onchange','18830PtxTrj','_loadControls','none'];a=function(){return T;};return a();}const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0xe7))/0x1*(parseInt(r(0xcc))/0x2)+-parseInt(r(0xd8))/0x3*(parseInt(r(0x104))/0x4)+-parseInt(r(0xe1))/0x5*(parseInt(r(0xe4))/0x6)+-parseInt(r(0xd7))/0x7+-parseInt(r(0xe9))/0x8+parseInt(r(0xd4))/0x9+parseInt(r(0x108))/0xa*(parseInt(r(0xc1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5009a));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xb8;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)['padStart'](0x2,'0'))[s(0xed)]('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[t(0xf8)]();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[u(0x118)](f);}return d[u(0xfd)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0xcf),e=0x64,f=c;const g=f[v(0xe0)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x101)](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][v(0xfd)]===0x4?'#'+m[0x1][v(0xde)](0x1)['split']('')['map'](o=>o+o)[v(0xed)](''):m[0x1][v(0xde)](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f[v(0xcd)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)[w(0x112)](0x2);return''+(c['inset']?w(0xf6):'')+c[w(0xc2)]+'px\x20'+c['offsetY']+w(0xfe)+c['blur']+w(0xfe)+c['spread']+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c[x(0xde)](0x1,0x3),0x10),e=parseInt(c[x(0xde)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[y(0xc3)]=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];['_removeBtn'];[y(0xf3)];['_enabledCheck'];['_inputX'];[y(0x111)];[y(0xd9)];['_inputSpread'];['_inputColor'];[y(0xf9)];['_opacityVal'];[y(0x10b)];['_cssOutput'];[y(0xc5)];['_copyBtn'];['_applyBtn'];get[y(0xc0)](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const z=y;return z(0x115);}constructor(c){const A=y;super(c),this[A(0xb9)]=this['_getDomElement']('bse-layer-list'),this['_removeBtn']=this['_getDomElement'](A(0xca)),this['_insetCheck']=this['_getDomElement']('bse-inset'),this[A(0xec)]=this['_getDomElement']('bse-enabled'),this[A(0xe2)]=this[A(0xbb)]('bse-x'),this[A(0x111)]=this['_getDomElement']('bse-y'),this['_inputBlur']=this[A(0xbb)](A(0x11a)),this['_inputSpread']=this['_getDomElement'](A(0xef)),this['_inputColor']=this['_getDomElement'](A(0xd3)),this[A(0xf9)]=this[A(0xbb)]('bse-opacity'),this[A(0xd2)]=this['_getDomElement']('bse-opacity-val'),this[A(0x10b)]=this['_getDomElement'](A(0xce)),this['_cssOutput']=this[A(0xbb)]('bse-css-out'),this['_loadBtn']=this['_getDomElement']('bse-load-btn'),this[A(0xe8)]=this[A(0xbb)]('bse-copy-btn'),this[A(0xbf)]=this[A(0xbb)]('bse-apply-btn'),this['_getDomElement'](A(0x119))[A(0x10e)]=()=>this['_addLayer'](),this[A(0xbb)](A(0xd0))[A(0x10e)]=()=>this[A(0xe6)](),this['_getDomElement']('bse-up-btn')['onclick']=()=>this[A(0x106)](-0x1),this['_getDomElement']('bse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this[A(0xbe)]['onclick']=()=>this[A(0xd6)](),this['_insetCheck'][A(0x107)]=()=>{const B=A;this[B(0xbd)]()['inset']=this[B(0xf3)]['checked'],this['_refresh']();},this[A(0xec)]['onchange']=()=>{const C=A;this['_currentLayer']()[C(0xeb)]=this['_enabledCheck'][C(0x105)],this[C(0xda)]();};for(const [d,e,f]of[[this[A(0xe2)],A(0xc2),'bse-x-val'],[this[A(0x111)],A(0xc6),A(0xdd)],[this[A(0xd9)],'blur',A(0xe5)],[this[A(0xdf)],'spread',A(0xf2)]]){d['oninput']=()=>{const D=A;this['_currentLayer']()[e]=Number(d[D(0x102)]),this[D(0xbb)](f)['textContent']=d['value']+'px',this[D(0xda)]();};}this['_inputColor']['oninput']=()=>{const E=A;this['_currentLayer']()['color']=this['_inputColor'][E(0x102)],this['_refresh']();},this[A(0xf9)]['oninput']=()=>{const F=A;this['_currentLayer']()['opacity']=Number(this[F(0xf9)][F(0x102)]),this[F(0xd2)]['textContent']=this['_inputOpacity'][F(0x102)]+'%',this['_refresh']();},this[A(0xe8)][A(0x10e)]=()=>{const G=A;navigator[G(0x10f)]?.[G(0x117)](this['_cssOutput']['value'])[G(0x110)](()=>{});},this['_applyBtn'][A(0x10e)]=()=>this[A(0xcb)](),this[A(0xc5)]['onclick']=()=>{const H=A;this[H(0xfa)](),this['_renderList'](),this['_loadControls'](),this['_refresh']();},this[A(0xfa)](),this['_renderList'](),this[A(0x109)](),this['_refresh']();}['_loadFromPrimarySelection'](){const I=y,c=this['_designerCanvas']?.[I(0xc8)]?.[I(0x10d)]?.[I(0xc7)];if(!c)return;const d=c[I(0xf1)](I(0xdc));d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[y(0xbd)](){return this['_layers'][this['_selectedIndex']];}[y(0xdb)](){this['_layers']['push'](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[y(0xe6)](){const J=y,c={...this['_currentLayer']()};this['_layers'][J(0xf7)](this['_selectedIndex']+0x1,0x0,c),this[J(0xfb)]=this[J(0xfb)]+0x1,this[J(0xe3)](),this[J(0x109)](),this[J(0xda)]();}[y(0xd6)](){const K=y;if(this['_layers']['length']<=0x1)return;this[K(0xc3)]['splice'](this['_selectedIndex'],0x1),this['_selectedIndex']=Math[K(0xb8)](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const L=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[L(0xc3)]['length'])return;[this['_layers'][d],this['_layers'][e]]=[this['_layers'][e],this[L(0xc3)][d]],this[L(0xfb)]=e,this['_renderList'](),this[L(0xda)]();}['_renderList'](){const M=y;this['_layerList'][M(0xd5)]='',this['_layers']['forEach']((c,d)=>{const N=M,e=document[N(0x100)]('li');if(d===this['_selectedIndex'])e['classList'][N(0x116)](N(0xba));const f=document['createElement']('span');f[N(0x113)]='swatch',f[N(0xf4)][N(0xf0)]=c['color'],e['appendChild'](f);const g=document['createElement']('span');g[N(0xc9)]=''+(c['inset']?N(0xf6):'')+c[N(0xc2)]+N(0xfe)+c[N(0xc6)]+N(0xfe)+c['blur']+N(0xfe)+c[N(0xd1)]+'px';if(!c[N(0xeb)])g['classList'][N(0x116)]('disabled-label');e['appendChild'](g),e['onclick']=()=>{const O=N;this[O(0xfb)]=d,this['_renderList'](),this[O(0x109)]();},this['_layerList'][N(0xff)](e);});}['_loadControls'](){const P=y,c=this[P(0xbd)]();this[P(0xf3)][P(0x105)]=c['inset'],this['_enabledCheck']['checked']=c['enabled'],this['_inputX'][P(0x102)]=String(c['offsetX']),this['_getDomElement'](P(0xf5))[P(0xc9)]=c['offsetX']+'px',this['_inputY']['value']=String(c[P(0xc6)]),this['_getDomElement']('bse-y-val')['textContent']=c[P(0xc6)]+'px',this['_inputBlur']['value']=String(c[P(0x103)]),this['_getDomElement']('bse-blur-val')[P(0xc9)]=c[P(0x103)]+'px',this['_inputSpread']['value']=String(c[P(0xd1)]),this[P(0xbb)]('bse-spread-val')[P(0xc9)]=c[P(0xd1)]+'px',this[P(0xc4)]['value']=c[P(0x114)],this[P(0xf9)]['value']=String(c['opacity']),this[P(0xd2)]['textContent']=c['opacity']+'%';}[y(0x10c)](){const Q=y;return this['_layers']['filter'](c=>c[Q(0xeb)])['map'](layerToCss)['join'](',\x20')||Q(0x10a);}[y(0xda)](){const R=y,c=this['_buildCss']();this[R(0x10b)]['style']['boxShadow']=c,this['_cssOutput'][R(0x102)]='box-shadow:\x20'+c+';',this[R(0xe3)]();}[y(0xcb)](){const S=y;if(!this[S(0xea)])return;const c=this['_designerCanvas']['instanceServiceContainer'][S(0x10d)][S(0xfc)];if(!c?.['length'])return;const d=this[S(0x10c)](),e=c[0x0][S(0xee)]('Apply\x20box-shadow');for(const f of c){f['setStyle'](S(0xdc),d);}e['commit']();}}customElements[y(0xbc)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);