const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x10c))/0x1*(-parseInt(m(0xe8))/0x2)+-parseInt(m(0xe2))/0x3+parseInt(m(0xc1))/0x4+parseInt(m(0x115))/0x5*(-parseInt(m(0xfb))/0x6)+-parseInt(m(0xde))/0x7+-parseInt(m(0xf3))/0x8+parseInt(m(0xea))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x86596));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0xf8)](f=>f[n(0x106)](0x10)[n(0xdf)](0x2,'0'))['join']('');}function a(){const P=['_loadBtn','880404TxuYby','padStart','checked','enabled','1045632TRjIWn','#000000','textContent','Text\x20Shadow\x20Editor','tse-dup-btn','oninput','2zRgkNq','textShadow','8900676wWtwBq','_renderList','tse-opacity','_applyBtn','length','none','selectedElements','px\x20','_refresh','3318376ARWvjs','replace','_inputOpacity','tse-preview','setStyle','map','_layers','appendChild','654JdQiCX','split','_removeBtn','disabled-label','round','primarySelection','tse-y','push','add','opacity','catch','toString','offsetY','px\x20rgba(','_currentLayer','tse-opacity-val','selectionService','531491JLKwrR','createElement','_inputBlur','_moveLayer','color','value','swatch','_inputY','_designerCanvas','14815fLeKcK','blur','_enabledCheck','splice','tse-y-val','style','_layerList','_loadControls','_buildCss','offsetX','967676imrKwB','onclick','commit','slice','tse-enabled','_getDomElement','_previewText','_addLayer','_copyBtn','_loadFromPrimarySelection','define','windowTemplate','tse-x','tse-add-btn','classList','_inputX','_selectedIndex','forEach','_cssOutput','tse-apply-btn','_inputColor','_duplicateLayer','filter','trim','_opacityVal','background','span','removeStyle'];a=function(){return P;};return a();}function hexToRgb(c){const o=b,d=parseInt(c[o(0xc4)](0x1,0x3),0x10),e=parseInt(c[o(0xc4)](0x3,0x5),0x10),f=parseInt(c[o(0xc4)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0xd8)]();if(i)d[p(0x102)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d[p(0x102)](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x104)]/0x64)['toFixed'](0x2);return c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+q(0x108)+hexToRgb(c['color'])+','+d+')';}function b(c,d){c=c-0xbf;const e=a();let f=e[c];return f;}function parseCssTextShadow(c){const r=b;if(!c||c===r(0xef))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[r(0x102)](f);}return d[r(0xee)]?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d=s(0xe3),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[s(0xf4)](i,'')[s(0xd8)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0xff)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1]['slice'](0x1)[s(0xfc)]('')[s(0xf8)](l=>l+l)['join'](''):k[0x1]['slice'](0x0,0x7),f=f[s(0xf4)](k[0x1],'')[s(0xd8)]());}const h=f['split'](/\s+/)[s(0xd7)](Boolean)[s(0xf8)](l=>parseFloat(l))[s(0xd7)](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0xf9)]=[defaultLayer()];['_selectedIndex']=0x0;[t(0x11b)];['_removeBtn'];['_enabledCheck'];[t(0xd0)];[t(0x113)];[t(0x10e)];[t(0xd5)];['_inputOpacity'];['_opacityVal'];[t(0xc7)];[t(0xd3)];[t(0xdd)];[t(0xc9)];[t(0xed)];get['windowTitle'](){const u=t;return u(0xe5);}get['windowContentStyle'](){return css`
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
    `;}get[t(0xcc)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const v=t;super(c),this['_layerList']=this['_getDomElement']('tse-layer-list'),this[v(0xfd)]=this['_getDomElement']('tse-remove-btn'),this['_enabledCheck']=this['_getDomElement'](v(0xc5)),this[v(0xd0)]=this['_getDomElement'](v(0xcd)),this['_inputY']=this['_getDomElement'](v(0x101)),this[v(0x10e)]=this[v(0xc6)]('tse-blur'),this[v(0xd5)]=this[v(0xc6)]('tse-color'),this['_inputOpacity']=this['_getDomElement'](v(0xec)),this[v(0xd9)]=this['_getDomElement'](v(0x10a)),this['_previewText']=this['_getDomElement'](v(0xf6)),this['_cssOutput']=this['_getDomElement']('tse-css-out'),this[v(0xdd)]=this['_getDomElement']('tse-load-btn'),this['_copyBtn']=this['_getDomElement']('tse-copy-btn'),this['_applyBtn']=this['_getDomElement'](v(0xd4)),this['_getDomElement'](v(0xce))[v(0xc2)]=()=>this[v(0xc8)](),this[v(0xc6)](v(0xe6))[v(0xc2)]=()=>this[v(0xd6)](),this[v(0xc6)]('tse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this[v(0xc6)]('tse-down-btn')[v(0xc2)]=()=>this[v(0x10f)](0x1),this[v(0xfd)][v(0xc2)]=()=>this['_removeLayer'](),this['_enabledCheck']['onchange']=()=>{const w=v;this[w(0x109)]()[w(0xe1)]=this[w(0x117)][w(0xe0)],this['_refresh']();};for(const [d,e,f]of[[this[v(0xd0)],v(0xc0),'tse-x-val'],[this[v(0x113)],v(0x107),'tse-y-val'],[this[v(0x10e)],'blur','tse-blur-val']]){d['oninput']=()=>{const x=v;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d[x(0x111)]+'px',this[x(0xf2)]();};}this[v(0xd5)]['oninput']=()=>{const y=v;this[y(0x109)]()[y(0x110)]=this[y(0xd5)]['value'],this['_refresh']();},this[v(0xf5)][v(0xe7)]=()=>{const z=v;this[z(0x109)]()[z(0x104)]=Number(this[z(0xf5)]['value']),this[z(0xd9)]['textContent']=this[z(0xf5)][z(0x111)]+'%',this['_refresh']();},this[v(0xc9)][v(0xc2)]=()=>{const A=v;navigator['clipboard']?.['writeText'](this[A(0xd3)][A(0x111)])[A(0x105)](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this[v(0xdd)]['onclick']=()=>{const B=v;this['_loadFromPrimarySelection'](),this[B(0xeb)](),this['_loadControls'](),this[B(0xf2)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[t(0xca)](){const C=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[C(0x100)];if(!c)return;const d=c['getStyle']('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this[C(0xd1)]=0x0);}[t(0x109)](){const D=t;return this[D(0xf9)][this['_selectedIndex']];}[t(0xc8)](){const E=t;this['_layers']['push'](defaultLayer()),this[E(0xd1)]=this['_layers'][E(0xee)]-0x1,this['_renderList'](),this[E(0x11c)](),this[E(0xf2)]();}['_duplicateLayer'](){const F=t;this['_layers'][F(0x118)](this['_selectedIndex']+0x1,0x0,{...this[F(0x109)]()}),this[F(0xd1)]=this[F(0xd1)]+0x1,this['_renderList'](),this['_loadControls'](),this[F(0xf2)]();}['_removeLayer'](){const G=t;if(this['_layers'][G(0xee)]<=0x1)return;this['_layers']['splice'](this[G(0xd1)],0x1),this['_selectedIndex']=Math['min'](this[G(0xd1)],this[G(0xf9)][G(0xee)]-0x1),this['_renderList'](),this['_loadControls'](),this[G(0xf2)]();}['_moveLayer'](c){const H=t,d=this[H(0xd1)],e=d+c;if(e<0x0||e>=this[H(0xf9)]['length'])return;[this['_layers'][d],this[H(0xf9)][e]]=[this['_layers'][e],this[H(0xf9)][d]],this[H(0xd1)]=e,this[H(0xeb)](),this[H(0xf2)]();}['_renderList'](){const I=t;this['_layerList']['innerHTML']='',this['_layers'][I(0xd2)]((c,d)=>{const J=I,e=document['createElement']('li');if(d===this[J(0xd1)])e[J(0xcf)]['add']('selected');const f=document['createElement'](J(0xdb));f['className']=J(0x112),f['style'][J(0xda)]=c[J(0x110)],e[J(0xfa)](f);const g=document[J(0x10d)](J(0xdb));g[J(0xe4)]=c['offsetX']+J(0xf1)+c['offsetY']+J(0xf1)+c[J(0x116)]+'px';if(!c[J(0xe1)])g[J(0xcf)][J(0x103)](J(0xfe));e['appendChild'](g),e['onclick']=()=>{const K=J;this[K(0xd1)]=d,this['_renderList'](),this[K(0x11c)]();},this['_layerList']['appendChild'](e);});}[t(0x11c)](){const L=t,c=this['_currentLayer']();this['_enabledCheck'][L(0xe0)]=c[L(0xe1)],this['_inputX']['value']=String(c[L(0xc0)]),this[L(0xc6)]('tse-x-val')['textContent']=c['offsetX']+'px',this[L(0x113)]['value']=String(c['offsetY']),this[L(0xc6)](L(0x119))[L(0xe4)]=c[L(0x107)]+'px',this[L(0x10e)]['value']=String(c['blur']),this[L(0xc6)]('tse-blur-val')[L(0xe4)]=c[L(0x116)]+'px',this[L(0xd5)][L(0x111)]=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this[L(0xd9)]['textContent']=c[L(0x104)]+'%';}[t(0xbf)](){const M=t;return this['_layers'][M(0xd7)](c=>c[M(0xe1)])[M(0xf8)](layerToCss)['join'](',\x20')||M(0xef);}[t(0xf2)](){const N=t,c=this[N(0xbf)]();this['_previewText'][N(0x11a)][N(0xe9)]=c,this[N(0xd3)]['value']=c,this['_renderList']();}['_applyToSelection'](){const O=t,c=this[O(0x114)]?.['instanceServiceContainer']?.[O(0x10b)]?.[O(0xf0)];if(!c?.['length'])return;const d=this[O(0xbf)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d===O(0xef))f[O(0xdc)]('text-shadow');else f[O(0xf7)]('text-shadow',d);}e[O(0xc3)]();}}customElements[t(0xcb)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);