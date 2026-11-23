const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xc2))/0x1+parseInt(m(0xdc))/0x2*(-parseInt(m(0xb6))/0x3)+parseInt(m(0xe3))/0x4*(parseInt(m(0x9e))/0x5)+-parseInt(m(0xea))/0x6*(parseInt(m(0xdb))/0x7)+parseInt(m(0xbe))/0x8+-parseInt(m(0xda))/0x9+parseInt(m(0xc8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb68a2));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0xbc)](f=>f[n(0x8f)](0x10)[n(0xdd)](0x2,'0'))[n(0xc9)]('');}function b(c,d){c=c-0x8f;const e=a();let f=e[c];return f;}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[o(0xae)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0xb7)]();if(i)d[p(0xe2)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c['opacity']/0x64)['toFixed'](0x2);return c[q(0xca)]+'px\x20'+c[q(0xde)]+'px\x20'+c[q(0xc4)]+q(0x9c)+hexToRgb(c[q(0xce)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c===r(0xe4))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0xb7)]());if(f)d[r(0xe2)](f);}return d[r(0x98)]?d:[defaultLayer()];}function a(){const P=['className','30HwhxND','_currentLayer','toString','checked','_previewText','_selectedIndex','span','round','_applyBtn','match','textContent','length','selectionService','tse-opacity','catch','px\x20rgba(','_cssOutput','908945TVgZoU','tse-opacity-val','commit','_inputOpacity','_layerList','primarySelection','getStyle','_inputX','text-shadow','splice','_buildCss','_renderList','_inputColor','tse-css-out','_loadFromPrimarySelection','_enabledCheck','slice','createElement','instanceServiceContainer','split','_getDomElement','replace','style','oninput','169407sDZfNI','trim','tse-preview','_opacityVal','tse-blur-val','windowTemplate','map','add','1409864HIntDp','opacity','onchange','classList','625974qLnTkU','appendChild','blur','selected','windowContentStyle','_layers','26623310TYNVkf','join','offsetX','_inputBlur','_loadControls','disabled-label','color','px\x20','onclick','_refresh','tse-y-val','value','clipboard','tse-load-btn','_addLayer','tse-down-btn','tse-dup-btn','tse-color','4576653vSJTmS','1109395WCfxPj','38QuZNYH','padStart','offsetY','tse-x-val','_moveLayer','Text\x20Shadow\x20Editor','push','20SwTeEp','none','enabled','_loadBtn','writeText','_duplicateLayer'];a=function(){return P;};return a();}function parseOneLayer(c){const s=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0xb7)]();const j=i[s(0x96)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0x94)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x96)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x98)]===0x4?'#'+k[0x1][s(0xae)](0x1)[s(0xb1)]('')['map'](l=>l+l)[s(0xc9)](''):k[0x1]['slice'](0x0,0x7),f=f[s(0xb3)](k[0x1],'')['trim']());}const h=f[s(0xb1)](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[s(0x98)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0xc7)]=[defaultLayer()];[t(0x92)]=0x0;[t(0xa2)];['_removeBtn'];[t(0xad)];['_inputX'];['_inputY'];[t(0xcb)];[t(0xaa)];['_inputOpacity'];[t(0xb9)];[t(0x91)];[t(0x9d)];[t(0xe6)];['_copyBtn'];[t(0x95)];get['windowTitle'](){const u=t;return u(0xe1);}get[t(0xc6)](){return css`
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
    `;}get[t(0xbb)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const v=t;super(c),this['_layerList']=this[v(0xb2)]('tse-layer-list'),this['_removeBtn']=this[v(0xb2)]('tse-remove-btn'),this[v(0xad)]=this[v(0xb2)]('tse-enabled'),this[v(0xa5)]=this['_getDomElement']('tse-x'),this['_inputY']=this[v(0xb2)]('tse-y'),this['_inputBlur']=this[v(0xb2)]('tse-blur'),this['_inputColor']=this[v(0xb2)](v(0xd9)),this['_inputOpacity']=this['_getDomElement'](v(0x9a)),this['_opacityVal']=this['_getDomElement'](v(0x9f)),this[v(0x91)]=this[v(0xb2)](v(0xb8)),this['_cssOutput']=this[v(0xb2)](v(0xab)),this[v(0xe6)]=this['_getDomElement'](v(0xd5)),this['_copyBtn']=this[v(0xb2)]('tse-copy-btn'),this[v(0x95)]=this[v(0xb2)]('tse-apply-btn'),this[v(0xb2)]('tse-add-btn')['onclick']=()=>this[v(0xd6)](),this['_getDomElement'](v(0xd8))['onclick']=()=>this[v(0xe8)](),this['_getDomElement']('tse-up-btn')[v(0xd0)]=()=>this[v(0xe0)](-0x1),this['_getDomElement'](v(0xd7))[v(0xd0)]=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this[v(0xad)][v(0xc0)]=()=>{const w=v;this[w(0xeb)]()['enabled']=this[w(0xad)][w(0x90)],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],v(0xca),v(0xdf)],[this['_inputY'],v(0xde),'tse-y-val'],[this['_inputBlur'],'blur','tse-blur-val']]){d['oninput']=()=>{const x=v;this[x(0xeb)]()[e]=Number(d[x(0xd3)]),this['_getDomElement'](f)[x(0x97)]=d['value']+'px',this[x(0xd1)]();};}this[v(0xaa)][v(0xb5)]=()=>{const y=v;this[y(0xeb)]()['color']=this['_inputColor']['value'],this['_refresh']();},this['_inputOpacity'][v(0xb5)]=()=>{const z=v;this[z(0xeb)]()['opacity']=Number(this[z(0xa1)]['value']),this[z(0xb9)][z(0x97)]=this[z(0xa1)][z(0xd3)]+'%',this[z(0xd1)]();},this['_copyBtn'][v(0xd0)]=()=>{const A=v;navigator[A(0xd4)]?.[A(0xe7)](this['_cssOutput']['value'])[A(0x9b)](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this[v(0xe6)][v(0xd0)]=()=>{const B=v;this['_loadFromPrimarySelection'](),this['_renderList'](),this[B(0xcc)](),this['_refresh']();},this[v(0xac)](),this[v(0xa9)](),this[v(0xcc)](),this['_refresh']();}['_loadFromPrimarySelection'](){const C=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[C(0xa3)];if(!c)return;const d=c[C(0xa4)](C(0xa6));d&&(this[C(0xc7)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}[t(0xeb)](){const D=t;return this['_layers'][this[D(0x92)]];}[t(0xd6)](){const E=t;this['_layers']['push'](defaultLayer()),this[E(0x92)]=this['_layers'][E(0x98)]-0x1,this[E(0xa9)](),this['_loadControls'](),this[E(0xd1)]();}['_duplicateLayer'](){const F=t;this[F(0xc7)][F(0xa7)](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this['_selectedIndex']+0x1,this[F(0xa9)](),this['_loadControls'](),this[F(0xd1)]();}['_removeLayer'](){const G=t;if(this['_layers'][G(0x98)]<=0x1)return;this['_layers']['splice'](this[G(0x92)],0x1),this[G(0x92)]=Math['min'](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this[G(0xcc)](),this['_refresh']();}[t(0xe0)](c){const H=t,d=this[H(0x92)],e=d+c;if(e<0x0||e>=this['_layers'][H(0x98)])return;[this['_layers'][d],this[H(0xc7)][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this[H(0xa9)](),this['_refresh']();}['_renderList'](){const I=t;this[I(0xa2)]['innerHTML']='',this[I(0xc7)]['forEach']((c,d)=>{const J=I,e=document['createElement']('li');if(d===this['_selectedIndex'])e[J(0xc1)][J(0xbd)](J(0xc5));const f=document[J(0xaf)](J(0x93));f[J(0xe9)]='swatch',f[J(0xb4)]['background']=c['color'],e[J(0xc3)](f);const g=document['createElement'](J(0x93));g[J(0x97)]=c[J(0xca)]+J(0xcf)+c['offsetY']+'px\x20'+c[J(0xc4)]+'px';if(!c[J(0xe5)])g[J(0xc1)][J(0xbd)](J(0xcd));e[J(0xc3)](g),e[J(0xd0)]=()=>{const K=J;this['_selectedIndex']=d,this[K(0xa9)](),this[K(0xcc)]();},this['_layerList']['appendChild'](e);});}['_loadControls'](){const L=t,c=this[L(0xeb)]();this['_enabledCheck'][L(0x90)]=c['enabled'],this[L(0xa5)]['value']=String(c['offsetX']),this[L(0xb2)](L(0xdf))[L(0x97)]=c['offsetX']+'px',this['_inputY']['value']=String(c[L(0xde)]),this[L(0xb2)](L(0xd2))[L(0x97)]=c[L(0xde)]+'px',this[L(0xcb)]['value']=String(c[L(0xc4)]),this[L(0xb2)](L(0xba))[L(0x97)]=c[L(0xc4)]+'px',this[L(0xaa)]['value']=c['color'],this[L(0xa1)]['value']=String(c['opacity']),this['_opacityVal'][L(0x97)]=c[L(0xbf)]+'%';}[t(0xa8)](){const M=t;return this['_layers']['filter'](c=>c['enabled'])[M(0xbc)](layerToCss)['join'](',\x20')||M(0xe4);}['_refresh'](){const N=t,c=this[N(0xa8)]();this['_previewText']['style']['textShadow']=c,this[N(0x9d)]['value']=c,this[N(0xa9)]();}['_applyToSelection'](){const O=t,c=this['_designerCanvas']?.[O(0xb0)]?.[O(0x99)]?.['selectedElements'];if(!c?.[O(0x98)])return;const d=this[O(0xa8)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d==='none')f['removeStyle'](O(0xa6));else f['setStyle'](O(0xa6),d);}e[O(0xa0)]();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);