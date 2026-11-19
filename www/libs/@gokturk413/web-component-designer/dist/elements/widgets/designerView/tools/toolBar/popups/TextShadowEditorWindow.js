const s=b;function a(){const M=['slice','onclick','round','opacity','tse-y-val','_inputBlur','filter','appendChild','split','_inputColor','_cssOutput','checked','onchange','2NGPEAJ','offsetY','tse-up-btn','_layers','_currentLayer','px\x20rgba(','join','classList','_opacityVal','enabled','tse-remove-btn','_duplicateLayer','match','color','writeText','add','_renderList','_previewText','trim','textContent','_inputOpacity','_layerList','splice','tse-y','_getDomElement','setStyle','_buildCss','push','tse-blur','_removeLayer','tse-blur-val','selectionService','set\x20text-shadow','#000000','tse-preview','_loadControls','primarySelection','tse-x','8033328KIVFpb','_copyBtn','catch','commit','value','_addLayer','_selectedIndex','blur','replace','textShadow','tse-dup-btn','4265471ljEJfY','define','length','_inputY','_applyBtn','text-shadow','_enabledCheck','offsetX','tse-opacity-val','tse-opacity','4157130DMWPyb','_removeBtn','_loadFromPrimarySelection','109595xpBnas','_inputX','tse-x-val','221960yHBMdY','oninput','windowContentStyle','_refresh','span','px\x20','1916688vwRjce','1212932lPxMKn','createElement','_loadBtn','innerHTML'];a=function(){return M;};return a();}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x161))/0x1*(-parseInt(m(0x17c))/0x2)+-parseInt(m(0x15e))/0x3+parseInt(m(0x16b))/0x4+parseInt(m(0x164))/0x5+parseInt(m(0x149))/0x6+parseInt(m(0x154))/0x7+-parseInt(m(0x16a))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbe785));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)['padStart'](0x2,'0'))[n(0x182)]('');}function hexToRgb(c){const d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}function splitLayers(c){const o=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[o(0x135)]();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d[o(0x13e)](g);return d;}function layerToCss(c){const p=b,d=(c[p(0x172)]/0x64)['toFixed'](0x2);return c[p(0x15b)]+'px\x20'+c['offsetY']+p(0x169)+c[p(0x150)]+p(0x181)+hexToRgb(c[p(0x130)])+','+d+')';}function parseCssTextShadow(c){const q=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[q(0x135)]());if(f)d['push'](f);}return d[q(0x156)]?d:[defaultLayer()];}function parseOneLayer(c){const r=b;let d=r(0x144),e=0x64,f=c;const g=f[r(0x188)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[r(0x135)]();const j=i[r(0x188)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[r(0x171)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[r(0x188)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1]['slice'](0x1)[r(0x177)]('')['map'](l=>l+l)[r(0x182)](''):k[0x1][r(0x16f)](0x0,0x7),f=f[r(0x151)](k[0x1],'')['trim']());}const h=f[r(0x177)](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))[r(0x175)](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[s(0x14f)]=0x0;['_layerList'];['_removeBtn'];[s(0x15a)];[s(0x162)];['_inputY'];['_inputBlur'];['_inputColor'];[s(0x137)];['_opacityVal'];[s(0x134)];['_cssOutput'];[s(0x16d)];[s(0x14a)];['_applyBtn'];get['windowTitle'](){return'Text\x20Shadow\x20Editor';}get[s(0x166)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const t=s;super(c),this[t(0x138)]=this[t(0x13b)]('tse-layer-list'),this[t(0x15f)]=this[t(0x13b)](t(0x186)),this[t(0x15a)]=this['_getDomElement']('tse-enabled'),this[t(0x162)]=this['_getDomElement'](t(0x148)),this[t(0x157)]=this['_getDomElement'](t(0x13a)),this['_inputBlur']=this[t(0x13b)](t(0x13f)),this['_inputColor']=this['_getDomElement']('tse-color'),this[t(0x137)]=this['_getDomElement'](t(0x15d)),this[t(0x184)]=this['_getDomElement'](t(0x15c)),this[t(0x134)]=this['_getDomElement'](t(0x145)),this['_cssOutput']=this[t(0x13b)]('tse-css-out'),this[t(0x16d)]=this['_getDomElement']('tse-load-btn'),this[t(0x14a)]=this['_getDomElement']('tse-copy-btn'),this[t(0x158)]=this['_getDomElement']('tse-apply-btn'),this[t(0x13b)]('tse-add-btn')[t(0x170)]=()=>this[t(0x14e)](),this['_getDomElement'](t(0x153))['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement'](t(0x17e))[t(0x170)]=()=>this['_moveLayer'](-0x1),this[t(0x13b)]('tse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this['_removeBtn'][t(0x170)]=()=>this['_removeLayer'](),this[t(0x15a)][t(0x17b)]=()=>{const u=t;this[u(0x180)]()[u(0x185)]=this['_enabledCheck'][u(0x17a)],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],t(0x15b),'tse-x-val'],[this[t(0x157)],t(0x17d),'tse-y-val'],[this[t(0x174)],t(0x150),t(0x141)]]){d['oninput']=()=>{const v=t;this['_currentLayer']()[e]=Number(d[v(0x14d)]),this[v(0x13b)](f)[v(0x136)]=d['value']+'px',this['_refresh']();};}this[t(0x178)][t(0x165)]=()=>{const w=t;this['_currentLayer']()[w(0x130)]=this[w(0x178)][w(0x14d)],this[w(0x167)]();},this[t(0x137)][t(0x165)]=()=>{const x=t;this[x(0x180)]()[x(0x172)]=Number(this[x(0x137)]['value']),this['_opacityVal'][x(0x136)]=this['_inputOpacity']['value']+'%',this[x(0x167)]();},this[t(0x14a)][t(0x170)]=()=>{const y=t;navigator['clipboard']?.[y(0x131)](this[y(0x179)][y(0x14d)])[y(0x14b)](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this['_loadBtn'][t(0x170)]=()=>{const z=t;this['_loadFromPrimarySelection'](),this['_renderList'](),this[z(0x146)](),this['_refresh']();},this[t(0x160)](),this['_renderList'](),this['_loadControls'](),this[t(0x167)]();}[s(0x160)](){const A=s,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[A(0x147)];if(!c)return;const d=c['getStyle']('text-shadow');d&&(this[A(0x17f)]=parseCssTextShadow(d),this[A(0x14f)]=0x0);}[s(0x180)](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const B=s;this['_layers'][B(0x13e)](defaultLayer()),this[B(0x14f)]=this['_layers'][B(0x156)]-0x1,this[B(0x133)](),this[B(0x146)](),this[B(0x167)]();}[s(0x187)](){const C=s;this[C(0x17f)][C(0x139)](this['_selectedIndex']+0x1,0x0,{...this[C(0x180)]()}),this['_selectedIndex']=this['_selectedIndex']+0x1,this[C(0x133)](),this['_loadControls'](),this['_refresh']();}[s(0x140)](){const D=s;if(this['_layers'][D(0x156)]<=0x1)return;this[D(0x17f)]['splice'](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this[D(0x14f)],this['_layers']['length']-0x1),this['_renderList'](),this[D(0x146)](),this[D(0x167)]();}['_moveLayer'](c){const E=s,d=this[E(0x14f)],e=d+c;if(e<0x0||e>=this['_layers'][E(0x156)])return;[this[E(0x17f)][d],this[E(0x17f)][e]]=[this['_layers'][e],this[E(0x17f)][d]],this[E(0x14f)]=e,this['_renderList'](),this[E(0x167)]();}[s(0x133)](){const F=s;this[F(0x138)][F(0x16e)]='',this[F(0x17f)]['forEach']((c,d)=>{const G=F,e=document[G(0x16c)]('li');if(d===this['_selectedIndex'])e['classList'][G(0x132)]('selected');const f=document[G(0x16c)]('span');f['className']='swatch',f['style']['background']=c['color'],e['appendChild'](f);const g=document['createElement'](G(0x168));g[G(0x136)]=c['offsetX']+'px\x20'+c[G(0x17d)]+'px\x20'+c[G(0x150)]+'px';if(!c['enabled'])g[G(0x183)]['add']('disabled-label');e['appendChild'](g),e[G(0x170)]=()=>{const H=G;this['_selectedIndex']=d,this[H(0x133)](),this['_loadControls']();},this[G(0x138)][G(0x176)](e);});}['_loadControls'](){const I=s,c=this['_currentLayer']();this['_enabledCheck']['checked']=c['enabled'],this['_inputX'][I(0x14d)]=String(c['offsetX']),this['_getDomElement'](I(0x163))['textContent']=c['offsetX']+'px',this['_inputY']['value']=String(c['offsetY']),this['_getDomElement'](I(0x173))['textContent']=c[I(0x17d)]+'px',this['_inputBlur'][I(0x14d)]=String(c['blur']),this[I(0x13b)]('tse-blur-val')['textContent']=c[I(0x150)]+'px',this['_inputColor']['value']=c[I(0x130)],this[I(0x137)]['value']=String(c['opacity']),this['_opacityVal']['textContent']=c['opacity']+'%';}[s(0x13d)](){const J=s;return this[J(0x17f)]['filter'](c=>c[J(0x185)])['map'](layerToCss)[J(0x182)](',\x20')||'none';}[s(0x167)](){const K=s,c=this['_buildCss']();this[K(0x134)]['style'][K(0x152)]=c,this['_cssOutput'][K(0x14d)]=c,this[K(0x133)]();}['_applyToSelection'](){const L=s,c=this['_designerCanvas']?.['instanceServiceContainer']?.[L(0x142)]?.['selectedElements'];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0]['openGroup'](L(0x143));for(const f of c){if(d==='none')f['removeStyle']('text-shadow');else f[L(0x13c)](L(0x159),d);}e[L(0x14c)]();}}customElements[s(0x155)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);