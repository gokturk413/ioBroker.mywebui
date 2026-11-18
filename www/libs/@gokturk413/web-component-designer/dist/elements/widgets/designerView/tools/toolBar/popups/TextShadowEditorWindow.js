const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0xf5))/0x1+-parseInt(m(0xe6))/0x2+-parseInt(m(0x103))/0x3+parseInt(m(0x124))/0x4*(parseInt(m(0x11d))/0x5)+-parseInt(m(0xfa))/0x6+-parseInt(m(0xfd))/0x7*(-parseInt(m(0x125))/0x8)+-parseInt(m(0x119))/0x9*(-parseInt(m(0xec))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x60922));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x112)](f=>f['toString'](0x10)[n(0x109)](0x2,'0'))['join']('');}function hexToRgb(c){const o=b,d=parseInt(c[o(0xe3)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[o(0xe3)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d[p(0x111)](g);return d;}function layerToCss(c){const q=b,d=(c[q(0xef)]/0x64)[q(0x108)](0x2);return c[q(0xe9)]+'px\x20'+c[q(0x121)]+'px\x20'+c['blur']+'px\x20rgba('+hexToRgb(c[q(0xf9)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0x122)]());if(f)d[r(0x111)](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d=s(0x12b),e=0x64,f=c;const g=f[s(0x107)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0x122)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x107)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1][s(0xe3)](0x1)['split']('')[s(0x112)](l=>l+l)[s(0x101)](''):k[0x1][s(0xe3)](0x0,0x7),f=f[s(0x134)](k[0x1],'')[s(0x122)]());}const h=f['split'](/\s+/)[s(0x117)](Boolean)[s(0x112)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[s(0x110)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}function a(){const P=['_loadBtn','checked','set\x20text-shadow','openGroup','_refresh','_duplicateLayer','length','push','map','selectedElements','_getDomElement','_layerList','tse-y-val','filter','windowTitle','4697901AAGsWH','_removeLayer','_opacityVal','text-shadow','15IbrvdE','px\x20','classList','_inputX','offsetY','trim','tse-blur-val','869284lnOyKA','16224Amdsui','_buildCss','tse-color','_selectedIndex','_inputOpacity','blur','#000000','appendChild','add','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','innerHTML','_previewText','value','_renderList','windowContentStyle','replace','selectionService','background','instanceServiceContainer','textShadow','none','span','getStyle','textContent','writeText','enabled','primarySelection','min','splice','slice','_enabledCheck','_removeBtn','477144EPsQWV','clipboard','onclick','offsetX','_cssOutput','commit','10SMnoXv','_addLayer','oninput','opacity','tse-apply-btn','_inputY','_currentLayer','_layers','_loadControls','302947GhnNgP','disabled-label','_inputBlur','_inputColor','color','4167852yZcnnI','createElement','style','1946oDIhAs','tse-copy-btn','_designerCanvas','tse-x-val','join','onchange','2135745nvHtnp','_applyBtn','_moveLayer','tse-add-btn','match','toFixed','padStart'];a=function(){return P;};return a();}function b(c,d){c=c-0xdd;const e=a();let f=e[c];return f;}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0xf3)]=[defaultLayer()];[t(0x128)]=0x0;['_layerList'];[t(0xe5)];['_enabledCheck'];['_inputX'];['_inputY'];[t(0xf7)];[t(0xf8)];['_inputOpacity'];[t(0x11b)];[t(0x130)];['_cssOutput'];['_loadBtn'];['_copyBtn'];['_applyBtn'];get[t(0x118)](){return'Text\x20Shadow\x20Editor';}get[t(0x133)](){return css`
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
    `;}get['windowTemplate'](){const u=t;return u(0x12e);}constructor(c){const v=t;super(c),this['_layerList']=this[v(0x114)]('tse-layer-list'),this[v(0xe5)]=this[v(0x114)]('tse-remove-btn'),this[v(0xe4)]=this[v(0x114)]('tse-enabled'),this['_inputX']=this['_getDomElement']('tse-x'),this[v(0xf1)]=this[v(0x114)]('tse-y'),this[v(0xf7)]=this[v(0x114)]('tse-blur'),this['_inputColor']=this[v(0x114)](v(0x127)),this[v(0x129)]=this['_getDomElement']('tse-opacity'),this[v(0x11b)]=this[v(0x114)]('tse-opacity-val'),this[v(0x130)]=this[v(0x114)]('tse-preview'),this[v(0xea)]=this[v(0x114)]('tse-css-out'),this['_loadBtn']=this[v(0x114)]('tse-load-btn'),this['_copyBtn']=this[v(0x114)](v(0xfe)),this['_applyBtn']=this[v(0x114)](v(0xf0)),this[v(0x114)](v(0x106))['onclick']=()=>this['_addLayer'](),this['_getDomElement']('tse-dup-btn')[v(0xe8)]=()=>this[v(0x10f)](),this[v(0x114)]('tse-up-btn')[v(0xe8)]=()=>this['_moveLayer'](-0x1),this['_getDomElement']('tse-down-btn')[v(0xe8)]=()=>this[v(0x105)](0x1),this['_removeBtn']['onclick']=()=>this[v(0x11a)](),this['_enabledCheck'][v(0x102)]=()=>{const w=v;this[w(0xf2)]()['enabled']=this['_enabledCheck']['checked'],this[w(0x10e)]();};for(const [d,e,f]of[[this['_inputX'],v(0xe9),v(0x100)],[this[v(0xf1)],v(0x121),v(0x116)],[this[v(0xf7)],v(0x12a),v(0x123)]]){d['oninput']=()=>{const x=v;this[x(0xf2)]()[e]=Number(d['value']),this[x(0x114)](f)['textContent']=d['value']+'px',this['_refresh']();};}this['_inputColor'][v(0xee)]=()=>{const y=v;this[y(0xf2)]()['color']=this['_inputColor'][y(0x131)],this['_refresh']();},this[v(0x129)][v(0xee)]=()=>{const z=v;this['_currentLayer']()[z(0xef)]=Number(this['_inputOpacity']['value']),this[z(0x11b)]['textContent']=this['_inputOpacity'][z(0x131)]+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const A=v;navigator[A(0xe7)]?.[A(0xde)](this['_cssOutput']['value'])['catch'](()=>{});},this[v(0x104)][v(0xe8)]=()=>this['_applyToSelection'](),this[v(0x10a)][v(0xe8)]=()=>{const B=v;this['_loadFromPrimarySelection'](),this[B(0x132)](),this[B(0xf4)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const C=t,c=this['_designerCanvas']?.[C(0x137)]?.['selectionService']?.[C(0xe0)];if(!c)return;const d=c[C(0x13b)](C(0x11c));d&&(this[C(0xf3)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const D=t;return this[D(0xf3)][this['_selectedIndex']];}[t(0xed)](){const E=t;this['_layers'][E(0x111)](defaultLayer()),this[E(0x128)]=this['_layers'][E(0x110)]-0x1,this[E(0x132)](),this[E(0xf4)](),this['_refresh']();}['_duplicateLayer'](){const F=t;this[F(0xf3)]['splice'](this['_selectedIndex']+0x1,0x0,{...this[F(0xf2)]()}),this[F(0x128)]=this['_selectedIndex']+0x1,this['_renderList'](),this['_loadControls'](),this[F(0x10e)]();}[t(0x11a)](){const G=t;if(this['_layers'][G(0x110)]<=0x1)return;this[G(0xf3)][G(0xe2)](this[G(0x128)],0x1),this['_selectedIndex']=Math[G(0xe1)](this[G(0x128)],this[G(0xf3)][G(0x110)]-0x1),this[G(0x132)](),this[G(0xf4)](),this['_refresh']();}[t(0x105)](c){const H=t,d=this[H(0x128)],e=d+c;if(e<0x0||e>=this['_layers'][H(0x110)])return;[this[H(0xf3)][d],this['_layers'][e]]=[this[H(0xf3)][e],this['_layers'][d]],this['_selectedIndex']=e,this[H(0x132)](),this['_refresh']();}['_renderList'](){const I=t;this['_layerList'][I(0x12f)]='',this['_layers']['forEach']((c,d)=>{const J=I,e=document[J(0xfb)]('li');if(d===this[J(0x128)])e[J(0x11f)]['add']('selected');const f=document[J(0xfb)]('span');f['className']='swatch',f[J(0xfc)][J(0x136)]=c[J(0xf9)],e[J(0x12c)](f);const g=document['createElement'](J(0x13a));g[J(0xdd)]=c['offsetX']+J(0x11e)+c[J(0x121)]+J(0x11e)+c[J(0x12a)]+'px';if(!c[J(0xdf)])g['classList'][J(0x12d)](J(0xf6));e[J(0x12c)](g),e[J(0xe8)]=()=>{const K=J;this[K(0x128)]=d,this['_renderList'](),this[K(0xf4)]();},this[J(0x115)][J(0x12c)](e);});}[t(0xf4)](){const L=t,c=this[L(0xf2)]();this['_enabledCheck'][L(0x10b)]=c['enabled'],this[L(0x120)]['value']=String(c['offsetX']),this['_getDomElement'](L(0x100))['textContent']=c[L(0xe9)]+'px',this['_inputY'][L(0x131)]=String(c[L(0x121)]),this['_getDomElement'](L(0x116))[L(0xdd)]=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this[L(0x114)]('tse-blur-val')['textContent']=c['blur']+'px',this['_inputColor']['value']=c['color'],this['_inputOpacity']['value']=String(c[L(0xef)]),this[L(0x11b)][L(0xdd)]=c['opacity']+'%';}['_buildCss'](){const M=t;return this['_layers']['filter'](c=>c[M(0xdf)])['map'](layerToCss)['join'](',\x20')||'none';}['_refresh'](){const N=t,c=this[N(0x126)]();this[N(0x130)][N(0xfc)][N(0x138)]=c,this[N(0xea)][N(0x131)]=c,this[N(0x132)]();}['_applyToSelection'](){const O=t,c=this[O(0xff)]?.[O(0x137)]?.[O(0x135)]?.[O(0x113)];if(!c?.['length'])return;const d=this[O(0x126)](),e=c[0x0][O(0x10d)](O(0x10c));for(const f of c){if(d===O(0x139))f['removeStyle'](O(0x11c));else f['setStyle']('text-shadow',d);}e[O(0xeb)]();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);