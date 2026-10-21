const z=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x95))/0x1+-parseInt(r(0x9c))/0x2+parseInt(r(0xa0))/0x3+-parseInt(r(0xc1))/0x4+parseInt(r(0x9a))/0x5+parseInt(r(0xd4))/0x6+-parseInt(r(0xcf))/0x7*(parseInt(r(0x93))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcae43));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x9b),'opacity':0x32,'enabled':!![]};}function a(){const V=['3266967OUjulb','offsetY','map','blur','_enabledCheck','_insetCheck','match','enabled','padStart','selected','none','px\x20','bse-blur','writeText','clipboard','onchange','bse-up-btn','_moveLayer','split','inset\x20','bse-color','bse-opacity','_designerCanvas','_inputBlur','filter','bse-copy-btn','_addLayer','_previewBox','bse-apply-btn','_inputOpacity','_applyBtn','_loadBtn','appendChild','398492dGahWe','textContent','splice','openGroup','classList','push','value','selectionService','bse-preview','_refresh','onclick','_copyBtn','bse-x','inset','1464547lGBHSu','_removeLayer','checked','color','_removeBtn','8589360iHlhof','join','slice','_getDomElement','_renderList','oninput','commit','_inputColor','_inputSpread','_loadControls','bse-inset','_currentLayer','_applyToSelection','_layerList','selectedElements','trim','bse-dup-btn','_buildCss','bse-blur-val','innerHTML','createElement','instanceServiceContainer','spread','_cssOutput','bse-load-btn','opacity','box-shadow','background','span','swatch','add','windowContentStyle','bse-spread-val','_opacityVal','_selectedIndex','min','32rGGrtu','_layers','428097hbAehF','length','_duplicateLayer','bse-y-val','boxShadow','2523485oOcoCl','#000000','1659198IeBbWG','_inputY','bse-down-btn','round'];a=function(){return V;};return a();}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0xa2)](f=>f['toString'](0x10)[t(0xa8)](0x2,'0'))['join']('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0x96)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0xe3)]();if(k)d[u(0xc6)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c===v(0xaa))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[v(0xc6)](f);}return d['length']?d:[defaultLayer()];}function b(c,d){c=c-0x8c;const e=a();let f=e[c];return f;}function parseOneShadowLayer(c){const w=b;let d=w(0x9b),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')[w(0xe3)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[w(0x9f)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[w(0xa6)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)[w(0xb2)]('')['map'](o=>o+o)[w(0xd5)](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')[w(0xe3)]());}const h=f[w(0xb2)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===w(0xce)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c[x(0xd2)]),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c['inset']?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+x(0xab)+c[x(0xa3)]+x(0xab)+c[x(0xea)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[y(0xd6)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];['_removeBtn'];[z(0xa5)];[z(0xa4)];['_inputX'];['_inputY'];['_inputBlur'];[z(0xdc)];['_inputColor'];[z(0xbd)];[z(0x90)];[z(0xbb)];['_cssOutput'];[z(0xbf)];[z(0xcc)];['_applyBtn'];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get[z(0x8e)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=z;super(c),this[A(0xe1)]=this['_getDomElement']('bse-layer-list'),this[A(0xd3)]=this[A(0xd7)]('bse-remove-btn'),this['_insetCheck']=this[A(0xd7)](A(0xde)),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this['_inputX']=this['_getDomElement'](A(0xcd)),this['_inputY']=this['_getDomElement']('bse-y'),this['_inputBlur']=this[A(0xd7)](A(0xac)),this[A(0xdc)]=this['_getDomElement']('bse-spread'),this[A(0xdb)]=this[A(0xd7)](A(0xb4)),this[A(0xbd)]=this['_getDomElement'](A(0xb5)),this['_opacityVal']=this[A(0xd7)]('bse-opacity-val'),this[A(0xbb)]=this['_getDomElement'](A(0xc9)),this[A(0xeb)]=this['_getDomElement']('bse-css-out'),this['_loadBtn']=this[A(0xd7)](A(0xec)),this['_copyBtn']=this[A(0xd7)](A(0xb9)),this[A(0xbe)]=this[A(0xd7)](A(0xbc)),this['_getDomElement']('bse-add-btn')[A(0xcb)]=()=>this['_addLayer'](),this['_getDomElement'](A(0xe4))['onclick']=()=>this[A(0x97)](),this[A(0xd7)](A(0xb0))['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement'](A(0x9e))['onclick']=()=>this[A(0xb1)](0x1),this['_removeBtn'][A(0xcb)]=()=>this[A(0xd0)](),this[A(0xa5)][A(0xaf)]=()=>{const B=A;this[B(0xdf)]()[B(0xce)]=this['_insetCheck']['checked'],this['_refresh']();},this[A(0xa4)]['onchange']=()=>{const C=A;this[C(0xdf)]()[C(0xa7)]=this[C(0xa4)]['checked'],this[C(0xca)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX','bse-x-val'],[this[A(0x9d)],'offsetY','bse-y-val'],[this[A(0xb7)],'blur','bse-blur-val'],[this['_inputSpread'],A(0xea),'bse-spread-val']]){d[A(0xd9)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d['value']),this[D(0xd7)](f)['textContent']=d[D(0xc7)]+'px',this[D(0xca)]();};}this['_inputColor'][A(0xd9)]=()=>{const E=A;this[E(0xdf)]()[E(0xd2)]=this['_inputColor'][E(0xc7)],this[E(0xca)]();},this['_inputOpacity'][A(0xd9)]=()=>{const F=A;this[F(0xdf)]()['opacity']=Number(this[F(0xbd)][F(0xc7)]),this[F(0x90)][F(0xc2)]=this[F(0xbd)]['value']+'%',this['_refresh']();},this['_copyBtn'][A(0xcb)]=()=>{const G=A;navigator[G(0xae)]?.[G(0xad)](this['_cssOutput']['value'])['catch'](()=>{});},this[A(0xbe)]['onclick']=()=>this[A(0xe0)](),this['_loadBtn'][A(0xcb)]=()=>{const H=A;this['_loadFromPrimarySelection'](),this['_renderList'](),this[H(0xdd)](),this[H(0xca)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this[A(0xdd)](),this['_refresh']();}['_loadFromPrimarySelection'](){const I=z,c=this[I(0xb6)]?.[I(0xe9)]?.[I(0xc8)]?.['primarySelection'];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this[I(0x94)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const J=z;return this[J(0x94)][this['_selectedIndex']];}[z(0xba)](){const K=z;this[K(0x94)][K(0xc6)](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this['_renderList'](),this[K(0xdd)](),this['_refresh']();}['_duplicateLayer'](){const L=z,c={...this['_currentLayer']()};this['_layers']['splice'](this[L(0x91)]+0x1,0x0,c),this[L(0x91)]=this[L(0x91)]+0x1,this[L(0xd8)](),this[L(0xdd)](),this['_refresh']();}['_removeLayer'](){const M=z;if(this[M(0x94)][M(0x96)]<=0x1)return;this[M(0x94)][M(0xc3)](this[M(0x91)],0x1),this['_selectedIndex']=Math[M(0x92)](this[M(0x91)],this['_layers'][M(0x96)]-0x1),this['_renderList'](),this[M(0xdd)](),this['_refresh']();}['_moveLayer'](c){const N=z,d=this[N(0x91)],e=d+c;if(e<0x0||e>=this[N(0x94)][N(0x96)])return;[this[N(0x94)][d],this['_layers'][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this[N(0xd8)](),this['_refresh']();}[z(0xd8)](){const O=z;this['_layerList'][O(0xe7)]='',this[O(0x94)]['forEach']((c,d)=>{const P=O,e=document[P(0xe8)]('li');if(d===this['_selectedIndex'])e[P(0xc5)][P(0x8d)](P(0xa9));const f=document[P(0xe8)](P(0xf0));f['className']=P(0x8c),f['style'][P(0xef)]=c[P(0xd2)],e['appendChild'](f);const g=document[P(0xe8)]('span');g['textContent']=''+(c['inset']?P(0xb3):'')+c['offsetX']+P(0xab)+c['offsetY']+'px\x20'+c[P(0xa3)]+'px\x20'+c['spread']+'px';if(!c[P(0xa7)])g[P(0xc5)]['add']('disabled-label');e[P(0xc0)](g),e[P(0xcb)]=()=>{const Q=P;this['_selectedIndex']=d,this[Q(0xd8)](),this[Q(0xdd)]();},this['_layerList'][P(0xc0)](e);});}['_loadControls'](){const R=z,c=this['_currentLayer']();this['_insetCheck'][R(0xd1)]=c['inset'],this[R(0xa4)][R(0xd1)]=c[R(0xa7)],this['_inputX'][R(0xc7)]=String(c['offsetX']),this['_getDomElement']('bse-x-val')['textContent']=c['offsetX']+'px',this['_inputY'][R(0xc7)]=String(c[R(0xa1)]),this[R(0xd7)](R(0x98))['textContent']=c['offsetY']+'px',this[R(0xb7)]['value']=String(c[R(0xa3)]),this[R(0xd7)](R(0xe6))[R(0xc2)]=c[R(0xa3)]+'px',this[R(0xdc)][R(0xc7)]=String(c[R(0xea)]),this['_getDomElement'](R(0x8f))[R(0xc2)]=c['spread']+'px',this['_inputColor']['value']=c['color'],this[R(0xbd)]['value']=String(c[R(0xed)]),this['_opacityVal']['textContent']=c[R(0xed)]+'%';}['_buildCss'](){const S=z;return this[S(0x94)][S(0xb8)](c=>c[S(0xa7)])[S(0xa2)](layerToCss)['join'](',\x20')||S(0xaa);}['_refresh'](){const T=z,c=this[T(0xe5)]();this['_previewBox']['style'][T(0x99)]=c,this['_cssOutput'][T(0xc7)]='box-shadow:\x20'+c+';',this['_renderList']();}[z(0xe0)](){const U=z;if(!this[U(0xb6)])return;const c=this['_designerCanvas'][U(0xe9)]['selectionService'][U(0xe2)];if(!c?.[U(0x96)])return;const d=this[U(0xe5)](),e=c[0x0][U(0xc4)]('Apply\x20box-shadow');for(const f of c){f['setStyle'](U(0xee),d);}e[U(0xda)]();}}customElements['define']('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);