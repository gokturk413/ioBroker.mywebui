const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x140))/0x1+parseInt(m(0x126))/0x2*(parseInt(m(0x134))/0x3)+-parseInt(m(0x14c))/0x4*(-parseInt(m(0x121))/0x5)+parseInt(m(0x12f))/0x6*(parseInt(m(0x149))/0x7)+parseInt(m(0x10f))/0x8+parseInt(m(0x15c))/0x9*(-parseInt(m(0x14f))/0xa)+-parseInt(m(0x125))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xadfd3));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0x106;const e=a();let f=e[c];return f;}function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x15f)](f=>f['toString'](0x10)['padStart'](0x2,'0'))[n(0x113)]('');}function hexToRgb(c){const o=b,d=parseInt(c[o(0x120)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[o(0x120)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0x12c)]();if(i)d[p(0x119)](i);f='';continue;}}}f+=h;}const g=f[p(0x12c)]();if(g)d[p(0x119)](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x108)]/0x64)['toFixed'](0x2);return c['offsetX']+'px\x20'+c[q(0x111)]+'px\x20'+c['blur']+q(0x11c)+hexToRgb(c[q(0x156)])+','+d+')';}function a(){const N=['3678048GhNgEV','#000000','offsetY','checked','join','classList','appendChild','_layerList','_loadControls','_applyBtn','push','_loadBtn','primarySelection','px\x20rgba(','_currentLayer','textContent','tse-x-val','slice','145iwcDmt','selected','_removeBtn','_inputOpacity','17182407twLYcQ','1182Dlfivw','tse-opacity-val','_duplicateLayer','offsetX','min','onchange','trim','splice','style','3498042FaICuz','setStyle','createElement','_layers','_getDomElement','1494vrNBYd','tse-down-btn','_loadFromPrimarySelection','tse-add-btn','tse-up-btn','_inputY','_refresh','tse-blur-val','replace','span','oninput','tse-layer-list','324661SQeLPT','tse-css-out','tse-x','_inputX','windowTitle','_cssOutput','split','_renderList','writeText','7tVkiOo','text-shadow','match','140172YuNNKs','_moveLayer','tse-remove-btn','30ZLIvIn','add','tse-y-val','node-projects-text-shadow-editor-window','_applyToSelection','onclick','_opacityVal','color','length','tse-color','_selectedIndex','_addLayer','none','1209879EPRFMw','_inputColor','enabled','map','_copyBtn','_inputBlur','opacity','_enabledCheck','_previewText','blur','tse-blur','value','catch'];a=function(){return N;};return a();}function parseCssTextShadow(c){const r=b;if(!c||c===r(0x15b))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0x12c)]());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d=s(0x110),e=0x64,f=c;const g=f[s(0x14b)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[s(0x13c)](i,'')['trim']();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x157)]===0x4?'#'+k[0x1][s(0x120)](0x1)[s(0x146)]('')[s(0x15f)](l=>l+l)['join'](''):k[0x1][s(0x120)](0x0,0x7),f=f[s(0x13c)](k[0x1],'')['trim']());}const h=f[s(0x146)](/\s+/)['filter'](Boolean)[s(0x15f)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[s(0x157)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[t(0x159)]=0x0;[t(0x116)];['_removeBtn'];['_enabledCheck'];[t(0x143)];[t(0x139)];[t(0x107)];[t(0x15d)];[t(0x124)];['_opacityVal'];['_previewText'];['_cssOutput'];['_loadBtn'];[t(0x106)];[t(0x118)];get[t(0x144)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const u=t;super(c),this[u(0x116)]=this['_getDomElement'](u(0x13f)),this['_removeBtn']=this['_getDomElement'](u(0x14e)),this['_enabledCheck']=this[u(0x133)]('tse-enabled'),this[u(0x143)]=this['_getDomElement'](u(0x142)),this['_inputY']=this['_getDomElement']('tse-y'),this['_inputBlur']=this[u(0x133)](u(0x10c)),this['_inputColor']=this['_getDomElement'](u(0x158)),this[u(0x124)]=this[u(0x133)]('tse-opacity'),this[u(0x155)]=this['_getDomElement'](u(0x127)),this['_previewText']=this[u(0x133)]('tse-preview'),this['_cssOutput']=this['_getDomElement'](u(0x141)),this[u(0x11a)]=this['_getDomElement']('tse-load-btn'),this[u(0x106)]=this['_getDomElement']('tse-copy-btn'),this['_applyBtn']=this[u(0x133)]('tse-apply-btn'),this[u(0x133)](u(0x137))[u(0x154)]=()=>this[u(0x15a)](),this['_getDomElement']('tse-dup-btn')['onclick']=()=>this[u(0x128)](),this['_getDomElement'](u(0x138))['onclick']=()=>this[u(0x14d)](-0x1),this['_getDomElement'](u(0x135))['onclick']=()=>this['_moveLayer'](0x1),this[u(0x123)]['onclick']=()=>this['_removeLayer'](),this['_enabledCheck'][u(0x12b)]=()=>{const v=u;this[v(0x11d)]()['enabled']=this[v(0x109)][v(0x112)],this[v(0x13a)]();};for(const [d,e,f]of[[this[u(0x143)],u(0x129),u(0x11f)],[this['_inputY'],'offsetY','tse-y-val'],[this[u(0x107)],'blur','tse-blur-val']]){d[u(0x13e)]=()=>{const w=u;this['_currentLayer']()[e]=Number(d[w(0x10d)]),this[w(0x133)](f)[w(0x11e)]=d['value']+'px',this[w(0x13a)]();};}this['_inputColor'][u(0x13e)]=()=>{const x=u;this[x(0x11d)]()[x(0x156)]=this['_inputColor'][x(0x10d)],this[x(0x13a)]();},this['_inputOpacity']['oninput']=()=>{const y=u;this[y(0x11d)]()['opacity']=Number(this['_inputOpacity']['value']),this['_opacityVal']['textContent']=this[y(0x124)][y(0x10d)]+'%',this['_refresh']();},this[u(0x106)][u(0x154)]=()=>{const z=u;navigator['clipboard']?.[z(0x148)](this[z(0x145)][z(0x10d)])[z(0x10e)](()=>{});},this['_applyBtn'][u(0x154)]=()=>this['_applyToSelection'](),this[u(0x11a)][u(0x154)]=()=>{const A=u;this[A(0x136)](),this[A(0x147)](),this[A(0x117)](),this['_refresh']();},this[u(0x136)](),this[u(0x147)](),this[u(0x117)](),this[u(0x13a)]();}[t(0x136)](){const B=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[B(0x11b)];if(!c)return;const d=c['getStyle'](B(0x14a));d&&(this[B(0x132)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}[t(0x11d)](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const C=t;this[C(0x132)]['push'](defaultLayer()),this['_selectedIndex']=this[C(0x132)]['length']-0x1,this[C(0x147)](),this['_loadControls'](),this['_refresh']();}[t(0x128)](){const D=t;this[D(0x132)][D(0x12d)](this[D(0x159)]+0x1,0x0,{...this[D(0x11d)]()}),this[D(0x159)]=this[D(0x159)]+0x1,this[D(0x147)](),this[D(0x117)](),this[D(0x13a)]();}['_removeLayer'](){const E=t;if(this[E(0x132)][E(0x157)]<=0x1)return;this['_layers']['splice'](this[E(0x159)],0x1),this['_selectedIndex']=Math[E(0x12a)](this[E(0x159)],this[E(0x132)][E(0x157)]-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const F=t,d=this[F(0x159)],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this[F(0x132)][e]]=[this[F(0x132)][e],this[F(0x132)][d]],this['_selectedIndex']=e,this[F(0x147)](),this[F(0x13a)]();}[t(0x147)](){const G=t;this[G(0x116)]['innerHTML']='',this[G(0x132)]['forEach']((c,d)=>{const H=G,e=document[H(0x131)]('li');if(d===this[H(0x159)])e[H(0x114)]['add'](H(0x122));const f=document['createElement']('span');f['className']='swatch',f['style']['background']=c['color'],e[H(0x115)](f);const g=document[H(0x131)](H(0x13d));g[H(0x11e)]=c[H(0x129)]+'px\x20'+c[H(0x111)]+'px\x20'+c['blur']+'px';if(!c[H(0x15e)])g[H(0x114)][H(0x150)]('disabled-label');e['appendChild'](g),e[H(0x154)]=()=>{const I=H;this[I(0x159)]=d,this[I(0x147)](),this['_loadControls']();},this[H(0x116)]['appendChild'](e);});}['_loadControls'](){const J=t,c=this['_currentLayer']();this['_enabledCheck']['checked']=c[J(0x15e)],this[J(0x143)]['value']=String(c['offsetX']),this['_getDomElement'](J(0x11f))['textContent']=c[J(0x129)]+'px',this['_inputY']['value']=String(c[J(0x111)]),this['_getDomElement'](J(0x151))['textContent']=c['offsetY']+'px',this[J(0x107)][J(0x10d)]=String(c[J(0x10b)]),this[J(0x133)](J(0x13b))[J(0x11e)]=c['blur']+'px',this[J(0x15d)]['value']=c['color'],this['_inputOpacity']['value']=String(c[J(0x108)]),this[J(0x155)]['textContent']=c[J(0x108)]+'%';}['_buildCss'](){const K=t;return this['_layers']['filter'](c=>c[K(0x15e)])[K(0x15f)](layerToCss)[K(0x113)](',\x20')||K(0x15b);}['_refresh'](){const L=t,c=this['_buildCss']();this[L(0x10a)][L(0x12e)]['textShadow']=c,this[L(0x145)]['value']=c,this[L(0x147)]();}[t(0x153)](){const M=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['selectedElements'];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d==='none')f['removeStyle'](M(0x14a));else f[M(0x130)]('text-shadow',d);}e['commit']();}}customElements['define'](t(0x152),TextShadowEditorWindow);