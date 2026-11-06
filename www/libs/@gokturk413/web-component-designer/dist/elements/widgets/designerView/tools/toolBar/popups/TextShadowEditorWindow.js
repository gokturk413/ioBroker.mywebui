const u=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1c7))/0x1+parseInt(m(0x1ba))/0x2+parseInt(m(0x1a3))/0x3+parseInt(m(0x19e))/0x4*(parseInt(m(0x192))/0x5)+-parseInt(m(0x196))/0x6*(-parseInt(m(0x1e3))/0x7)+parseInt(m(0x194))/0x8+-parseInt(m(0x1a8))/0x9*(parseInt(m(0x1ef))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x49112));import{css}from'@node-projects/base-custom-webcomponent';function a(){const Q=['_addLayer','9YLyrko','slice','_renderList','_loadControls','_refresh','_inputY','toFixed','appendChild','tse-css-out','createElement','windowTitle','_cssOutput','_moveLayer','opacity','tse-remove-btn','define','_duplicateLayer','add','1028666qXtczQ','tse-copy-btn','Text\x20Shadow\x20Editor','round','tse-x-val','_buildCss','tse-y-val','px\x20','textContent','tse-add-btn','offsetX','#000000','_selectedIndex','562468tXAVTt','style','join','_layerList','split','onclick','_currentLayer','oninput','tse-down-btn','_removeBtn','color','clipboard','primarySelection','getStyle','_previewText','_inputOpacity','none','_loadFromPrimarySelection','tse-x','toString','_getDomElement','_inputBlur','trim','map','checked','_inputColor','filter','_applyToSelection','456764SkXwoP','tse-color','_inputX','blur','instanceServiceContainer','splice','offsetY','classList','text-shadow','length','span','swatch','12555170fJDfRp','10FDZDVP','_opacityVal','3747464IlAaNC','openGroup','12dEnlla','min','padStart','innerHTML','push','tse-layer-list','_enabledCheck','replace','1195220ZPBZcF','_layers','_copyBtn','_loadBtn','tse-blur-val','1219161MFlAQh','match','value','enabled'];a=function(){return Q;};return a();}function b(c,d){c=c-0x192;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x1c5),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e][o(0x1de)](f=>f[o(0x1da)](0x10)[o(0x198)](0x2,'0'))['join']('');}function hexToRgb(c){const p=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[p(0x1a9)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[q(0x1dd)]();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f[q(0x1dd)]();if(g)d['push'](g);return d;}function layerToCss(c){const r=b,d=(c[r(0x1b5)]/0x64)[r(0x1ae)](0x2);return c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20rgba('+hexToRgb(c[r(0x1d1)])+','+d+')';}function parseCssTextShadow(c){const s=b;if(!c||c===s(0x1d7))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[s(0x1dd)]());if(f)d[s(0x19a)](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const t=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[t(0x19d)](i,'')['trim']();const j=i[t(0x1a4)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[t(0x1bd)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[t(0x1a4)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1]['slice'](0x1)[t(0x1cb)]('')['map'](l=>l+l)[t(0x1c9)](''):k[0x1][t(0x1a9)](0x0,0x7),f=f[t(0x19d)](k[0x1],'')[t(0x1dd)]());}const h=f['split'](/\s+/)[t(0x1e1)](Boolean)['map'](l=>parseFloat(l))[t(0x1e1)](l=>!isNaN(l));if(h[t(0x1ec)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[u(0x19f)]=[defaultLayer()];[u(0x1c6)]=0x0;[u(0x1ca)];['_removeBtn'];['_enabledCheck'];[u(0x1e5)];[u(0x1ad)];['_inputBlur'];[u(0x1e0)];[u(0x1d6)];['_opacityVal'];['_previewText'];['_cssOutput'];[u(0x1a1)];[u(0x1a0)];['_applyBtn'];get[u(0x1b2)](){const v=u;return v(0x1bc);}get['windowContentStyle'](){return css`
      * { box-sizing: border-box; }
      .tse-root {
        display: flex;
        flex-direction: column;
        width: 360px;
        color: var(--wcd-color-text, #ddd);
        font-family: sans-serif;
        font-size: 12px;
        gap: 6px;
        padding: 8px;
        background: var(--wcd-color-surface-raised, #2a2a2a);
      }
      .preview-area {
        background: var(--wcd-color-surface, #1a1a1a);
        border: 1px solid var(--wcd-color-border, #444);
        border-radius: 4px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .preview-text {
        font-size: 28px;
        font-weight: bold;
        color: var(--wcd-color-text, #fff);
        user-select: none;
      }
      .layers-row {
        display: flex;
        gap: 4px;
      }
      .layer-list {
        flex: 1;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid var(--wcd-color-border, #444);
        border-radius: 3px;
        max-height: 80px;
        overflow-y: auto;
        background: var(--wcd-color-surface, #1e1e1e);
      }
      .layer-list li {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 2px 5px;
        cursor: pointer;
        font-size: 11px;
      }
      .layer-list li:hover { background: #333; }
      .layer-list li.selected { background: #2a4a7a; }
      .swatch {
        width: 12px; height: 12px;
        border-radius: 2px;
        border: 1px solid var(--wcd-color-border, #555);
        flex-shrink: 0;
      }
      .disabled-label { opacity: 0.4; }
      .layer-buttons {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .layer-buttons button {
        width: 22px; height: 22px;
        background: var(--wcd-color-surface-raised, #3a3a3a);
        color: var(--wcd-color-text, #ddd);
        border: 1px solid var(--wcd-color-border, #555);
        border-radius: 3px;
        cursor: pointer;
        font-size: 13px;
        padding: 0;
      }
      .layer-buttons button:hover { background: #555; }
      .controls {
        display: grid;
        grid-template-columns: 60px 1fr 38px;
        gap: 3px 6px;
        align-items: center;
      }
      .controls label { color: var(--wcd-color-text-muted, #aaa); }
      .controls input[type=range] { width: 100%; }
      .controls input[type=color] {
        width: 100%;
        height: 22px;
        padding: 1px;
        border: 1px solid var(--wcd-color-border, #555);
        border-radius: 3px;
        background: var(--wcd-color-surface, #1e1e1e);
        cursor: pointer;
      }
      .check-row {
        display: flex;
        gap: 12px;
        align-items: center;
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
        height: 40px;
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const w=u;super(c),this[w(0x1ca)]=this[w(0x1db)](w(0x19b)),this[w(0x1d0)]=this['_getDomElement'](w(0x1b6)),this['_enabledCheck']=this['_getDomElement']('tse-enabled'),this['_inputX']=this[w(0x1db)](w(0x1d9)),this['_inputY']=this[w(0x1db)]('tse-y'),this['_inputBlur']=this[w(0x1db)]('tse-blur'),this[w(0x1e0)]=this['_getDomElement'](w(0x1e4)),this['_inputOpacity']=this['_getDomElement']('tse-opacity'),this[w(0x193)]=this[w(0x1db)]('tse-opacity-val'),this[w(0x1d5)]=this[w(0x1db)]('tse-preview'),this[w(0x1b3)]=this['_getDomElement'](w(0x1b0)),this['_loadBtn']=this['_getDomElement']('tse-load-btn'),this['_copyBtn']=this[w(0x1db)](w(0x1bb)),this['_applyBtn']=this[w(0x1db)]('tse-apply-btn'),this['_getDomElement'](w(0x1c3))['onclick']=()=>this[w(0x1a7)](),this[w(0x1db)]('tse-dup-btn')[w(0x1cc)]=()=>this['_duplicateLayer'](),this['_getDomElement']('tse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement'](w(0x1cf))['onclick']=()=>this[w(0x1b4)](0x1),this[w(0x1d0)]['onclick']=()=>this['_removeLayer'](),this[w(0x19c)]['onchange']=()=>{const x=w;this[x(0x1cd)]()['enabled']=this['_enabledCheck'][x(0x1df)],this['_refresh']();};for(const [d,e,f]of[[this[w(0x1e5)],w(0x1c4),w(0x1be)],[this[w(0x1ad)],w(0x1e9),w(0x1c0)],[this[w(0x1dc)],'blur',w(0x1a2)]]){d[w(0x1ce)]=()=>{const y=w;this['_currentLayer']()[e]=Number(d['value']),this[y(0x1db)](f)[y(0x1c2)]=d['value']+'px',this[y(0x1ac)]();};}this[w(0x1e0)]['oninput']=()=>{const z=w;this[z(0x1cd)]()[z(0x1d1)]=this[z(0x1e0)][z(0x1a5)],this['_refresh']();},this['_inputOpacity']['oninput']=()=>{const A=w;this[A(0x1cd)]()['opacity']=Number(this['_inputOpacity']['value']),this[A(0x193)][A(0x1c2)]=this['_inputOpacity']['value']+'%',this[A(0x1ac)]();},this[w(0x1a0)]['onclick']=()=>{const B=w;navigator[B(0x1d2)]?.['writeText'](this[B(0x1b3)][B(0x1a5)])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this[w(0x1e2)](),this[w(0x1a1)][w(0x1cc)]=()=>{const C=w;this[C(0x1d8)](),this['_renderList'](),this[C(0x1ab)](),this[C(0x1ac)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const D=u,c=this['_designerCanvas']?.[D(0x1e7)]?.['selectionService']?.[D(0x1d3)];if(!c)return;const d=c[D(0x1d4)]('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this[D(0x1c6)]=0x0);}[u(0x1cd)](){const E=u;return this[E(0x19f)][this['_selectedIndex']];}['_addLayer'](){const F=u;this['_layers'][F(0x19a)](defaultLayer()),this[F(0x1c6)]=this[F(0x19f)][F(0x1ec)]-0x1,this[F(0x1aa)](),this[F(0x1ab)](),this['_refresh']();}[u(0x1b8)](){const G=u;this['_layers'][G(0x1e8)](this[G(0x1c6)]+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this['_selectedIndex']+0x1,this[G(0x1aa)](),this[G(0x1ab)](),this[G(0x1ac)]();}['_removeLayer'](){const H=u;if(this[H(0x19f)][H(0x1ec)]<=0x1)return;this['_layers'][H(0x1e8)](this['_selectedIndex'],0x1),this[H(0x1c6)]=Math[H(0x197)](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[u(0x1b4)](c){const I=u,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[I(0x19f)][I(0x1ec)])return;[this['_layers'][d],this['_layers'][e]]=[this[I(0x19f)][e],this[I(0x19f)][d]],this[I(0x1c6)]=e,this[I(0x1aa)](),this['_refresh']();}['_renderList'](){const J=u;this['_layerList'][J(0x199)]='',this['_layers']['forEach']((c,d)=>{const K=J,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList'][K(0x1b9)]('selected');const f=document[K(0x1b1)](K(0x1ed));f['className']=K(0x1ee),f[K(0x1c8)]['background']=c['color'],e['appendChild'](f);const g=document['createElement'](K(0x1ed));g['textContent']=c[K(0x1c4)]+'px\x20'+c[K(0x1e9)]+K(0x1c1)+c[K(0x1e6)]+'px';if(!c['enabled'])g[K(0x1ea)]['add']('disabled-label');e[K(0x1af)](g),e['onclick']=()=>{const L=K;this['_selectedIndex']=d,this[L(0x1aa)](),this['_loadControls']();},this[K(0x1ca)][K(0x1af)](e);});}['_loadControls'](){const M=u,c=this['_currentLayer']();this['_enabledCheck']['checked']=c[M(0x1a6)],this[M(0x1e5)]['value']=String(c[M(0x1c4)]),this[M(0x1db)](M(0x1be))['textContent']=c[M(0x1c4)]+'px',this['_inputY']['value']=String(c[M(0x1e9)]),this['_getDomElement'](M(0x1c0))[M(0x1c2)]=c['offsetY']+'px',this[M(0x1dc)]['value']=String(c[M(0x1e6)]),this[M(0x1db)]('tse-blur-val')[M(0x1c2)]=c[M(0x1e6)]+'px',this[M(0x1e0)]['value']=c['color'],this[M(0x1d6)][M(0x1a5)]=String(c[M(0x1b5)]),this['_opacityVal']['textContent']=c['opacity']+'%';}[u(0x1bf)](){const N=u;return this['_layers']['filter'](c=>c[N(0x1a6)])['map'](layerToCss)['join'](',\x20')||'none';}['_refresh'](){const O=u,c=this[O(0x1bf)]();this['_previewText']['style']['textShadow']=c,this[O(0x1b3)]['value']=c,this[O(0x1aa)]();}[u(0x1e2)](){const P=u,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['selectedElements'];if(!c?.[P(0x1ec)])return;const d=this['_buildCss'](),e=c[0x0][P(0x195)]('set\x20text-shadow');for(const f of c){if(d===P(0x1d7))f['removeStyle'](P(0x1eb));else f['setStyle'](P(0x1eb),d);}e['commit']();}}customElements[u(0x1b7)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);