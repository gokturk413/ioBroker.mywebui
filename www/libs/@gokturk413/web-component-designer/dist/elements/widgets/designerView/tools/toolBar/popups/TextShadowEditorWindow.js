const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x117))/0x1+-parseInt(m(0x135))/0x2+parseInt(m(0xfd))/0x3*(parseInt(m(0x133))/0x4)+parseInt(m(0xea))/0x5+-parseInt(m(0xe2))/0x6*(-parseInt(m(0xfa))/0x7)+parseInt(m(0xd1))/0x8+-parseInt(m(0x115))/0x9*(parseInt(m(0x126))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe056d));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x11d)](f=>f[n(0x103)](0x10)['padStart'](0x2,'0'))['join']('');}function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}function a(){const P=['forEach','checked','toString','enabled','add','classList','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','windowTitle','px\x20','_layers','swatch','_previewText','color','replace','split','background','_applyToSelection','_enabledCheck','none','_buildCss','99LiTJVE','opacity','703456byphaZ','_applyBtn','tse-copy-btn','tse-blur','_inputOpacity','clipboard','map','textShadow','_renderList','_duplicateLayer','_cssOutput','appendChild','tse-x','length','slice','1237250QteFVi','tse-apply-btn','_moveLayer','tse-y-val','_removeLayer','offsetY','_refresh','splice','_inputY','_currentLayer','catch','_loadControls','disabled-label','4GhPhDa','_addLayer','526472lEWhPy','node-projects-text-shadow-editor-window','6513720wUeQmC','tse-x-val','textContent','tse-load-btn','className','writeText','windowContentStyle','_opacityVal','oninput','offsetX','tse-opacity-val','tse-remove-btn','_copyBtn','createElement','_selectedIndex','_loadFromPrimarySelection','onclick','10424346mMIRRW','push','value','_inputBlur','innerHTML','_getDomElement','style','tse-layer-list','2239215iYHWrV','_designerCanvas','#000000','_inputX','getStyle','tse-dup-btn','match','selected','text-shadow','tse-preview','_layerList','selectionService','min','setStyle','_loadBtn','blur','7SzwxTB','instanceServiceContainer','commit','741333aQgYaX','tse-y','_inputColor','trim'];a=function(){return P;};return a();}function hexToRgb(c){const o=b,d=parseInt(c[o(0x125)](0x1,0x3),0x10),e=parseInt(c[o(0x125)](0x3,0x5),0x10),f=parseInt(c[o(0x125)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0x100)]();if(i)d[p(0xe3)](i);f='';continue;}}}f+=h;}const g=f[p(0x100)]();if(g)d[p(0xe3)](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x116)]/0x64)['toFixed'](0x2);return c[q(0xda)]+q(0x109)+c['offsetY']+'px\x20'+c['blur']+'px\x20rgba('+hexToRgb(c[q(0x10d)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c===r(0x113))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[r(0xe3)](f);}return d[r(0x124)]?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d=s(0xec),e=0x64,f=c;const g=f[s(0xf0)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[s(0x10e)](i,'')['trim']();const j=i[s(0xf0)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x124)]===0x4?'#'+k[0x1]['slice'](0x1)[s(0x10f)]('')['map'](l=>l+l)['join'](''):k[0x1][s(0x125)](0x0,0x7),f=f[s(0x10e)](k[0x1],'')['trim']());}const h=f['split'](/\s+/)['filter'](Boolean)[s(0x11d)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[s(0x124)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0x10a)]=[defaultLayer()];['_selectedIndex']=0x0;[t(0xf4)];['_removeBtn'];[t(0x112)];['_inputX'];['_inputY'];['_inputBlur'];[t(0xff)];[t(0x11b)];['_opacityVal'];['_previewText'];[t(0x121)];['_loadBtn'];['_copyBtn'];[t(0x118)];get[t(0x108)](){return'Text\x20Shadow\x20Editor';}get[t(0xd7)](){return css`
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
    `;}get['windowTemplate'](){const u=t;return u(0x107);}constructor(c){const v=t;super(c),this[v(0xf4)]=this['_getDomElement'](v(0xe9)),this['_removeBtn']=this['_getDomElement'](v(0xdc)),this[v(0x112)]=this['_getDomElement']('tse-enabled'),this[v(0xed)]=this['_getDomElement'](v(0x123)),this[v(0x12e)]=this['_getDomElement'](v(0xfe)),this[v(0xe5)]=this[v(0xe7)](v(0x11a)),this[v(0xff)]=this['_getDomElement']('tse-color'),this[v(0x11b)]=this[v(0xe7)]('tse-opacity'),this['_opacityVal']=this[v(0xe7)](v(0xdb)),this[v(0x10c)]=this['_getDomElement'](v(0xf3)),this['_cssOutput']=this['_getDomElement']('tse-css-out'),this['_loadBtn']=this['_getDomElement'](v(0xd4)),this[v(0xdd)]=this['_getDomElement'](v(0x119)),this['_applyBtn']=this['_getDomElement'](v(0x127)),this[v(0xe7)]('tse-add-btn')['onclick']=()=>this['_addLayer'](),this['_getDomElement'](v(0xef))['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement']('tse-up-btn')['onclick']=()=>this[v(0x128)](-0x1),this[v(0xe7)]('tse-down-btn')[v(0xe1)]=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this[v(0x12a)](),this['_enabledCheck']['onchange']=()=>{const w=v;this[w(0x12f)]()['enabled']=this['_enabledCheck'][w(0x102)],this[w(0x12c)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX',v(0xd2)],[this[v(0x12e)],v(0x12b),v(0x129)],[this['_inputBlur'],'blur','tse-blur-val']]){d[v(0xd9)]=()=>{const x=v;this[x(0x12f)]()[e]=Number(d['value']),this[x(0xe7)](f)[x(0xd3)]=d[x(0xe4)]+'px',this[x(0x12c)]();};}this[v(0xff)]['oninput']=()=>{const y=v;this[y(0x12f)]()['color']=this[y(0xff)]['value'],this['_refresh']();},this[v(0x11b)][v(0xd9)]=()=>{const z=v;this['_currentLayer']()[z(0x116)]=Number(this[z(0x11b)][z(0xe4)]),this['_opacityVal'][z(0xd3)]=this[z(0x11b)][z(0xe4)]+'%',this['_refresh']();},this['_copyBtn'][v(0xe1)]=()=>{const A=v;navigator[A(0x11c)]?.[A(0xd6)](this['_cssOutput'][A(0xe4)])[A(0x130)](()=>{});},this[v(0x118)][v(0xe1)]=()=>this[v(0x111)](),this[v(0xf8)][v(0xe1)]=()=>{const B=v;this['_loadFromPrimarySelection'](),this[B(0x11f)](),this['_loadControls'](),this[B(0x12c)]();},this[v(0xe0)](),this[v(0x11f)](),this['_loadControls'](),this['_refresh']();}[t(0xe0)](){const C=t,c=this['_designerCanvas']?.[C(0xfb)]?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[C(0xee)](C(0xf2));d&&(this['_layers']=parseCssTextShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const D=t;return this[D(0x10a)][this[D(0xdf)]];}[t(0x134)](){const E=t;this['_layers']['push'](defaultLayer()),this['_selectedIndex']=this[E(0x10a)][E(0x124)]-0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[t(0x120)](){const F=t;this['_layers'][F(0x12d)](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this[F(0xdf)]+0x1,this[F(0x11f)](),this['_loadControls'](),this['_refresh']();}[t(0x12a)](){const G=t;if(this[G(0x10a)]['length']<=0x1)return;this['_layers'][G(0x12d)](this['_selectedIndex'],0x1),this['_selectedIndex']=Math[G(0xf6)](this[G(0xdf)],this['_layers']['length']-0x1),this['_renderList'](),this[G(0x131)](),this['_refresh']();}['_moveLayer'](c){const H=t,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[H(0x10a)][H(0x124)])return;[this['_layers'][d],this[H(0x10a)][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}[t(0x11f)](){const I=t;this[I(0xf4)][I(0xe6)]='',this['_layers'][I(0x101)]((c,d)=>{const J=I,e=document[J(0xde)]('li');if(d===this['_selectedIndex'])e[J(0x106)][J(0x105)](J(0xf1));const f=document[J(0xde)]('span');f[J(0xd5)]=J(0x10b),f['style'][J(0x110)]=c['color'],e[J(0x122)](f);const g=document['createElement']('span');g[J(0xd3)]=c['offsetX']+J(0x109)+c[J(0x12b)]+'px\x20'+c[J(0xf9)]+'px';if(!c['enabled'])g['classList'][J(0x105)](J(0x132));e['appendChild'](g),e[J(0xe1)]=()=>{const K=J;this['_selectedIndex']=d,this['_renderList'](),this[K(0x131)]();},this['_layerList']['appendChild'](e);});}[t(0x131)](){const L=t,c=this[L(0x12f)]();this[L(0x112)][L(0x102)]=c[L(0x104)],this[L(0xed)]['value']=String(c['offsetX']),this[L(0xe7)]('tse-x-val')['textContent']=c['offsetX']+'px',this['_inputY'][L(0xe4)]=String(c[L(0x12b)]),this[L(0xe7)](L(0x129))[L(0xd3)]=c['offsetY']+'px',this[L(0xe5)]['value']=String(c['blur']),this['_getDomElement']('tse-blur-val')['textContent']=c[L(0xf9)]+'px',this['_inputColor']['value']=c['color'],this[L(0x11b)]['value']=String(c['opacity']),this[L(0xd8)][L(0xd3)]=c[L(0x116)]+'%';}[t(0x114)](){const M=t;return this['_layers']['filter'](c=>c[M(0x104)])['map'](layerToCss)['join'](',\x20')||M(0x113);}[t(0x12c)](){const N=t,c=this['_buildCss']();this['_previewText'][N(0xe8)][N(0x11e)]=c,this['_cssOutput']['value']=c,this[N(0x11f)]();}['_applyToSelection'](){const O=t,c=this[O(0xeb)]?.['instanceServiceContainer']?.[O(0xf5)]?.['selectedElements'];if(!c?.['length'])return;const d=this[O(0x114)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d==='none')f['removeStyle']('text-shadow');else f[O(0xf7)](O(0xf2),d);}e[O(0xfc)]();}}customElements['define'](t(0x136),TextShadowEditorWindow);