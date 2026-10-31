const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x127))/0x1+-parseInt(m(0x134))/0x2*(-parseInt(m(0x128))/0x3)+-parseInt(m(0xf6))/0x4*(parseInt(m(0x139))/0x5)+-parseInt(m(0x13b))/0x6+-parseInt(m(0x119))/0x7*(-parseInt(m(0xee))/0x8)+parseInt(m(0x112))/0x9+parseInt(m(0x101))/0xa*(-parseInt(m(0xf9))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xac295));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function a(){const P=['color','tse-load-btn','oninput','node-projects-text-shadow-editor-window','tse-enabled','background','map','_layers','tse-x-val','_loadFromPrimarySelection','offsetX','textContent','none','tse-up-btn','7375275mfRsnE','className','text-shadow','trim','_removeLayer','tse-add-btn','blur','7bJJotn','replace','classList','tse-remove-btn','_refresh','tse-copy-btn','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','_inputX','_previewText','_addLayer','slice','join','#000000','_inputColor','775985dGnokx','2527998QAQjLu','_loadControls','_layerList','disabled-label','primarySelection','style','opacity','writeText','tse-down-btn','_applyBtn','_selectedIndex','_copyBtn','2grxPGa','commit','_inputBlur','offsetY','windowTemplate','2355NmKFZS','selectionService','7949550WhdjVL','round','value','createElement','enabled','match','instanceServiceContainer','selectedElements','textShadow','_designerCanvas','onclick','_inputOpacity','_getDomElement','_enabledCheck','tse-blur','windowTitle','1613840slBYdd','_cssOutput','tse-y-val','filter','innerHTML','tse-dup-btn','_inputY','length','3404cjBggC','_moveLayer','appendChild','53449GeXkiK','tse-apply-btn','add','_renderList','push','_opacityVal','Text\x20Shadow\x20Editor','_currentLayer','430EhKnEm','_buildCss','windowContentStyle'];a=function(){return P;};return a();}function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x10a)](f=>f['toString'](0x10)['padStart'](0x2,'0'))[n(0x124)]('');}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[o(0x123)](0x3,0x5),0x10),f=parseInt(c[o(0x123)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0x115)]();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f[p(0x115)]();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c['opacity']/0x64)['toFixed'](0x2);return c[q(0x10e)]+'px\x20'+c[q(0x137)]+'px\x20'+c[q(0x118)]+'px\x20rgba('+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c===r(0x110))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0x115)]());if(f)d[r(0xfd)](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d=s(0x125),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0x115)]();const j=i[s(0x140)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0x13c)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x140)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0xf5)]===0x4?'#'+k[0x1]['slice'](0x1)['split']('')['map'](l=>l+l)[s(0x124)](''):k[0x1]['slice'](0x0,0x7),f=f[s(0x11a)](k[0x1],'')[s(0x115)]());}const h=f['split'](/\s+/)['filter'](Boolean)[s(0x10a)](l=>parseFloat(l))[s(0xf1)](l=>!isNaN(l));if(h[s(0xf5)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[t(0x132)]=0x0;['_layerList'];['_removeBtn'];['_enabledCheck'];[t(0x120)];['_inputY'];['_inputBlur'];['_inputColor'];[t(0x146)];[t(0xfe)];['_previewText'];['_cssOutput'];['_loadBtn'];[t(0x133)];['_applyBtn'];get[t(0xed)](){const u=t;return u(0xff);}get[t(0x103)](){return css`
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
    `;}get[t(0x138)](){const v=t;return v(0x11f);}constructor(c){const w=t;super(c),this[w(0x12a)]=this[w(0xea)]('tse-layer-list'),this['_removeBtn']=this[w(0xea)](w(0x11c)),this[w(0xeb)]=this['_getDomElement'](w(0x108)),this['_inputX']=this[w(0xea)]('tse-x'),this[w(0xf4)]=this['_getDomElement']('tse-y'),this['_inputBlur']=this[w(0xea)](w(0xec)),this['_inputColor']=this['_getDomElement']('tse-color'),this['_inputOpacity']=this['_getDomElement']('tse-opacity'),this[w(0xfe)]=this[w(0xea)]('tse-opacity-val'),this[w(0x121)]=this['_getDomElement']('tse-preview'),this['_cssOutput']=this['_getDomElement']('tse-css-out'),this['_loadBtn']=this['_getDomElement'](w(0x105)),this['_copyBtn']=this['_getDomElement'](w(0x11e)),this[w(0x131)]=this[w(0xea)](w(0xfa)),this['_getDomElement'](w(0x117))['onclick']=()=>this['_addLayer'](),this[w(0xea)](w(0xf3))['onclick']=()=>this['_duplicateLayer'](),this[w(0xea)](w(0x111))[w(0x145)]=()=>this[w(0xf7)](-0x1),this['_getDomElement'](w(0x130))[w(0x145)]=()=>this[w(0xf7)](0x1),this['_removeBtn'][w(0x145)]=()=>this[w(0x116)](),this[w(0xeb)]['onchange']=()=>{const x=w;this['_currentLayer']()['enabled']=this['_enabledCheck']['checked'],this[x(0x11d)]();};for(const [d,e,f]of[[this['_inputX'],w(0x10e),w(0x10c)],[this['_inputY'],'offsetY',w(0xf0)],[this[w(0x136)],w(0x118),'tse-blur-val']]){d['oninput']=()=>{const y=w;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)[y(0x10f)]=d['value']+'px',this[y(0x11d)]();};}this['_inputColor'][w(0x106)]=()=>{const z=w;this['_currentLayer']()[z(0x104)]=this[z(0x126)]['value'],this['_refresh']();},this[w(0x146)][w(0x106)]=()=>{const A=w;this['_currentLayer']()['opacity']=Number(this['_inputOpacity']['value']),this['_opacityVal']['textContent']=this[A(0x146)][A(0x13d)]+'%',this[A(0x11d)]();},this[w(0x133)]['onclick']=()=>{const B=w;navigator['clipboard']?.[B(0x12f)](this[B(0xef)]['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this['_loadBtn']['onclick']=()=>{const C=w;this[C(0x10d)](),this['_renderList'](),this['_loadControls'](),this[C(0x11d)]();},this[w(0x10d)](),this['_renderList'](),this[w(0x129)](),this[w(0x11d)]();}['_loadFromPrimarySelection'](){const D=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.[D(0x13a)]?.[D(0x12c)];if(!c)return;const d=c['getStyle']('text-shadow');d&&(this[D(0x10b)]=parseCssTextShadow(d),this[D(0x132)]=0x0);}[t(0x100)](){return this['_layers'][this['_selectedIndex']];}[t(0x122)](){const E=t;this['_layers']['push'](defaultLayer()),this[E(0x132)]=this['_layers']['length']-0x1,this[E(0xfc)](),this[E(0x129)](),this[E(0x11d)]();}['_duplicateLayer'](){const F=t;this['_layers']['splice'](this[F(0x132)]+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this[F(0x132)]+0x1,this[F(0xfc)](),this[F(0x129)](),this[F(0x11d)]();}[t(0x116)](){const G=t;if(this['_layers'][G(0xf5)]<=0x1)return;this[G(0x10b)]['splice'](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this[G(0x132)],this['_layers'][G(0xf5)]-0x1),this['_renderList'](),this[G(0x129)](),this['_refresh']();}['_moveLayer'](c){const H=t,d=this[H(0x132)],e=d+c;if(e<0x0||e>=this['_layers'][H(0xf5)])return;[this['_layers'][d],this['_layers'][e]]=[this['_layers'][e],this['_layers'][d]],this[H(0x132)]=e,this[H(0xfc)](),this['_refresh']();}[t(0xfc)](){const I=t;this[I(0x12a)][I(0xf2)]='',this[I(0x10b)]['forEach']((c,d)=>{const J=I,e=document[J(0x13e)]('li');if(d===this[J(0x132)])e['classList']['add']('selected');const f=document['createElement']('span');f[J(0x113)]='swatch',f['style'][J(0x109)]=c['color'],e['appendChild'](f);const g=document['createElement']('span');g['textContent']=c['offsetX']+'px\x20'+c[J(0x137)]+'px\x20'+c['blur']+'px';if(!c[J(0x13f)])g[J(0x11b)][J(0xfb)](J(0x12b));e['appendChild'](g),e[J(0x145)]=()=>{const K=J;this[K(0x132)]=d,this['_renderList'](),this[K(0x129)]();},this['_layerList'][J(0xf8)](e);});}['_loadControls'](){const L=t,c=this[L(0x100)]();this[L(0xeb)]['checked']=c['enabled'],this['_inputX'][L(0x13d)]=String(c['offsetX']),this['_getDomElement']('tse-x-val')['textContent']=c[L(0x10e)]+'px',this[L(0xf4)][L(0x13d)]=String(c[L(0x137)]),this[L(0xea)]('tse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this['_getDomElement']('tse-blur-val')['textContent']=c[L(0x118)]+'px',this['_inputColor']['value']=c[L(0x104)],this['_inputOpacity'][L(0x13d)]=String(c['opacity']),this[L(0xfe)][L(0x10f)]=c[L(0x12e)]+'%';}['_buildCss'](){const M=t;return this[M(0x10b)][M(0xf1)](c=>c[M(0x13f)])['map'](layerToCss)[M(0x124)](',\x20')||'none';}['_refresh'](){const N=t,c=this['_buildCss']();this[N(0x121)][N(0x12d)][N(0x143)]=c,this[N(0xef)][N(0x13d)]=c,this['_renderList']();}['_applyToSelection'](){const O=t,c=this[O(0x144)]?.[O(0x141)]?.[O(0x13a)]?.[O(0x142)];if(!c?.['length'])return;const d=this[O(0x102)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d===O(0x110))f['removeStyle'](O(0x114));else f['setStyle'](O(0x114),d);}e[O(0x135)]();}}function b(c,d){c=c-0xea;const e=a();let f=e[c];return f;}customElements['define'](t(0x107),TextShadowEditorWindow);