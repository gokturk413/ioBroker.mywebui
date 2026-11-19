const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0xea))/0x1*(-parseInt(r(0x114))/0x2)+-parseInt(r(0xf9))/0x3+parseInt(r(0xe9))/0x4+-parseInt(r(0x11b))/0x5*(-parseInt(r(0xf8))/0x6)+parseInt(r(0xe2))/0x7*(-parseInt(r(0x125))/0x8)+parseInt(r(0x12b))/0x9*(parseInt(r(0x12d))/0xa)+-parseInt(r(0x148))/0xb*(-parseInt(r(0x113))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96bdc));import{css}from'@node-projects/base-custom-webcomponent';function a(){const U=['1642077XsojLu','_loadControls','30WlUrou','bse-y','enabled','_buildCss','color','value','bse-down-btn','none','length','_layers','_inputOpacity','_applyToSelection','createElement','match','blur','_copyBtn','_opacityVal','_insetCheck','appendChild','bse-opacity','bse-enabled','selectedElements','background','box-shadow:\x20','_inputBlur','_designerCanvas','bse-blur-val','2981TWbudy','split','box-shadow','windowContentStyle','7uiQJbz','primarySelection','bse-preview','disabled-label','swatch','selected','textContent','4022184aFtqcZ','197759RcPzwB','oninput','slice','bse-up-btn','inset','selectionService','onclick','define','className','forEach','bse-blur','bse-spread','_currentLayer','map','2156106KApnAT','2668755TqcHrf','_inputColor','bse-opacity-val','_refresh','_previewBox','inset\x20','_getDomElement','_cssOutput','px\x20rgba(','_duplicateLayer','join','checked','trim','opacity','_moveLayer','_inputSpread','_inputX','replace','innerHTML','px\x20','add','bse-add-btn','offsetX','bse-x','_layerList','padStart','1164nFTMxH','6qgDPtb','bse-spread-val','bse-layer-list','_enabledCheck','windowTitle','_renderList','_inputY','5rpMvlR','bse-color','Apply\x20box-shadow','filter','_selectedIndex','bse-remove-btn','push','clipboard','_removeLayer','_applyBtn','8198392qaSCDu','style','writeText','#000000','instanceServiceContainer','spread'];a=function(){return U;};return a();}import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)[s(0x112)](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0x105)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[t(0x105)]();if(g)d[t(0x121)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0x134))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[u(0x121)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0x128),e=0x64,f=c;const g=f[v(0x13a)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x10a)](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x13a)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)[v(0x149)]('')['map'](o=>o+o)['join'](''):m[0x1][v(0xec)](0x0,0x7),f=f[v(0x10a)](m[0x1],'')['trim']());}const h=f['split'](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0x135)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c[w(0xee)]?w(0xfe):'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[w(0x13b)]+'px\x20'+c[w(0x12a)]+w(0x101)+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[x(0xec)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[y(0x136)]=[defaultLayer()];[y(0x11f)]=0x0;['_layerList'];['_removeBtn'];['_insetCheck'];[y(0x117)];[y(0x109)];['_inputY'];[y(0x145)];['_inputSpread'];[y(0xfa)];['_inputOpacity'];['_opacityVal'];[y(0xfd)];[y(0x100)];['_loadBtn'];['_copyBtn'];['_applyBtn'];get[y(0x118)](){return'Box\x20Shadow\x20Editor';}get[y(0x14b)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const z=y;super(c),this['_layerList']=this[z(0xff)](z(0x116)),this['_removeBtn']=this['_getDomElement'](z(0x120)),this['_insetCheck']=this[z(0xff)]('bse-inset'),this['_enabledCheck']=this[z(0xff)](z(0x141)),this['_inputX']=this['_getDomElement'](z(0x110)),this[z(0x11a)]=this['_getDomElement'](z(0x12e)),this[z(0x145)]=this[z(0xff)](z(0xf4)),this[z(0x108)]=this[z(0xff)](z(0xf5)),this['_inputColor']=this['_getDomElement'](z(0x11c)),this['_inputOpacity']=this[z(0xff)](z(0x140)),this['_opacityVal']=this[z(0xff)](z(0xfb)),this[z(0xfd)]=this[z(0xff)](z(0xe4)),this[z(0x100)]=this['_getDomElement']('bse-css-out'),this['_loadBtn']=this['_getDomElement']('bse-load-btn'),this[z(0x13c)]=this['_getDomElement']('bse-copy-btn'),this['_applyBtn']=this[z(0xff)]('bse-apply-btn'),this['_getDomElement'](z(0x10e))[z(0xf0)]=()=>this['_addLayer'](),this['_getDomElement']('bse-dup-btn')[z(0xf0)]=()=>this[z(0x102)](),this[z(0xff)](z(0xed))['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement'](z(0x133))[z(0xf0)]=()=>this[z(0x107)](0x1),this['_removeBtn'][z(0xf0)]=()=>this[z(0x123)](),this[z(0x13e)]['onchange']=()=>{const A=z;this['_currentLayer']()['inset']=this[A(0x13e)][A(0x104)],this[A(0xfc)]();},this['_enabledCheck']['onchange']=()=>{const B=z;this['_currentLayer']()['enabled']=this[B(0x117)]['checked'],this['_refresh']();};for(const [d,e,f]of[[this[z(0x109)],'offsetX','bse-x-val'],[this['_inputY'],'offsetY','bse-y-val'],[this['_inputBlur'],z(0x13b),z(0x147)],[this[z(0x108)],z(0x12a),z(0x115)]]){d[z(0xeb)]=()=>{const C=z;this[C(0xf6)]()[e]=Number(d[C(0x132)]),this[C(0xff)](f)['textContent']=d[C(0x132)]+'px',this['_refresh']();};}this['_inputColor']['oninput']=()=>{const D=z;this['_currentLayer']()[D(0x131)]=this['_inputColor'][D(0x132)],this[D(0xfc)]();},this['_inputOpacity'][z(0xeb)]=()=>{const E=z;this['_currentLayer']()[E(0x106)]=Number(this['_inputOpacity']['value']),this[E(0x13d)][E(0xe8)]=this[E(0x137)]['value']+'%',this['_refresh']();},this[z(0x13c)]['onclick']=()=>{const F=z;navigator[F(0x122)]?.[F(0x127)](this['_cssOutput'][F(0x132)])['catch'](()=>{});},this[z(0x124)][z(0xf0)]=()=>this[z(0x138)](),this['_loadBtn']['onclick']=()=>{const G=z;this['_loadFromPrimarySelection'](),this[G(0x119)](),this['_loadControls'](),this[G(0xfc)]();},this['_loadFromPrimarySelection'](),this[z(0x119)](),this[z(0x12c)](),this[z(0xfc)]();}['_loadFromPrimarySelection'](){const H=y,c=this['_designerCanvas']?.[H(0x129)]?.[H(0xef)]?.[H(0xe3)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this[H(0x11f)]=0x0);}[y(0xf6)](){const I=y;return this['_layers'][this[I(0x11f)]];}['_addLayer'](){const J=y;this['_layers']['push'](defaultLayer()),this['_selectedIndex']=this['_layers'][J(0x135)]-0x1,this[J(0x119)](),this[J(0x12c)](),this[J(0xfc)]();}[y(0x102)](){const K=y,c={...this[K(0xf6)]()};this['_layers']['splice'](this[K(0x11f)]+0x1,0x0,c),this[K(0x11f)]=this[K(0x11f)]+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[y(0x123)](){const L=y;if(this[L(0x136)]['length']<=0x1)return;this['_layers']['splice'](this[L(0x11f)],0x1),this['_selectedIndex']=Math['min'](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const M=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this[M(0x136)][d],this['_layers'][e]]=[this[M(0x136)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}[y(0x119)](){const N=y;this[N(0x111)][N(0x10b)]='',this['_layers'][N(0xf3)]((c,d)=>{const O=N,e=document[O(0x139)]('li');if(d===this['_selectedIndex'])e['classList'][O(0x10d)](O(0xe7));const f=document['createElement']('span');f[O(0xf2)]=O(0xe6),f['style'][O(0x143)]=c['color'],e['appendChild'](f);const g=document[O(0x139)]('span');g[O(0xe8)]=''+(c[O(0xee)]?'inset\x20':'')+c[O(0x10f)]+O(0x10c)+c['offsetY']+'px\x20'+c['blur']+O(0x10c)+c[O(0x12a)]+'px';if(!c['enabled'])g['classList'][O(0x10d)](O(0xe5));e['appendChild'](g),e['onclick']=()=>{const P=O;this[P(0x11f)]=d,this[P(0x119)](),this[P(0x12c)]();},this[O(0x111)][O(0x13f)](e);});}[y(0x12c)](){const Q=y,c=this['_currentLayer']();this[Q(0x13e)][Q(0x104)]=c[Q(0xee)],this['_enabledCheck'][Q(0x104)]=c['enabled'],this['_inputX'][Q(0x132)]=String(c['offsetX']),this[Q(0xff)]('bse-x-val')[Q(0xe8)]=c[Q(0x10f)]+'px',this[Q(0x11a)][Q(0x132)]=String(c['offsetY']),this['_getDomElement']('bse-y-val')[Q(0xe8)]=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this['_getDomElement'](Q(0x147))[Q(0xe8)]=c['blur']+'px',this['_inputSpread']['value']=String(c[Q(0x12a)]),this['_getDomElement']('bse-spread-val')['textContent']=c['spread']+'px',this['_inputColor'][Q(0x132)]=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this[Q(0x13d)]['textContent']=c['opacity']+'%';}['_buildCss'](){const R=y;return this[R(0x136)][R(0x11e)](c=>c[R(0x12f)])[R(0xf7)](layerToCss)[R(0x103)](',\x20')||'none';}['_refresh'](){const S=y,c=this['_buildCss']();this[S(0xfd)][S(0x126)]['boxShadow']=c,this[S(0x100)]['value']=S(0x144)+c+';',this[S(0x119)]();}[y(0x138)](){const T=y;if(!this[T(0x146)])return;const c=this[T(0x146)][T(0x129)]['selectionService'][T(0x142)];if(!c?.[T(0x135)])return;const d=this[T(0x130)](),e=c[0x0]['openGroup'](T(0x11d));for(const f of c){f['setStyle'](T(0x14a),d);}e['commit']();}}function b(c,d){c=c-0xe2;const e=a();let f=e[c];return f;}customElements[y(0xf1)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);