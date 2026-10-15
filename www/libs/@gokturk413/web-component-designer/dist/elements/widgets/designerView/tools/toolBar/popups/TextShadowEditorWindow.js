const u=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x199))/0x1+parseInt(m(0x180))/0x2*(-parseInt(m(0x197))/0x3)+-parseInt(m(0x174))/0x4+parseInt(m(0x185))/0x5+-parseInt(m(0x192))/0x6+-parseInt(m(0x18b))/0x7+parseInt(m(0x16d))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1d941));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function a(){const P=['_applyBtn','134810KjltYW','textContent','length','tse-css-out','_addLayer','filter','121667wxbXUw','text-shadow','splice','_inputBlur','opacity','background','commit','988170iEKVnm','_copyBtn','px\x20','tse-x','appendChild','6sGAXlb','selectedElements','216550hncASY','slice','blur','tse-opacity','clipboard','createElement','map','instanceServiceContainer','push','_buildCss','_renderList','offsetY','_applyToSelection','_loadControls','match','_previewText','_currentLayer','tse-blur','_inputOpacity','tse-remove-btn','_layerList','_enabledCheck','span','oninput','trim','offsetX','_opacityVal','define','_layers','checked','catch','_selectedIndex','primarySelection','set\x20text-shadow','_cssOutput','min','onchange','_removeLayer','_inputColor','_refresh','#000000','style','_inputX','809712iwLDNp','onclick','add','none','Text\x20Shadow\x20Editor','value','replace','25964gKducq','selected','_loadFromPrimarySelection','split','color','windowTemplate','_removeBtn','tse-load-btn','_moveLayer','join','padStart','tse-color','35006ylmPQM','enabled','forEach','_getDomElement'];a=function(){return P;};return a();}function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x16a),'opacity':0x32,'enabled':!![]};}function b(c,d){c=c-0x159;const e=a();let f=e[c];return f;}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)[o(0x17e)](0x2,'0'))['join']('');}function hexToRgb(c){const p=b,d=parseInt(c[p(0x19a)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d[q(0x1a1)](i);f='';continue;}}}f+=h;}const g=f[q(0x15a)]();if(g)d[q(0x1a1)](g);return d;}function layerToCss(c){const r=b,d=(c[r(0x18f)]/0x64)['toFixed'](0x2);return c['offsetX']+'px\x20'+c[r(0x1a4)]+r(0x194)+c[r(0x19b)]+'px\x20rgba('+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const s=b;if(!c||c===s(0x170))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[s(0x1a1)](f);}return d[s(0x187)]?d:[defaultLayer()];}function parseOneLayer(c){const t=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[t(0x173)](i,'')['trim']();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[t(0x1a7)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1]['slice'](0x1)['split']('')['map'](l=>l+l)[t(0x17d)](''):k[0x1][t(0x19a)](0x0,0x7),f=f['replace'](k[0x1],'')['trim']());}const h=f[t(0x177)](/\s+/)[t(0x18a)](Boolean)['map'](l=>parseFloat(l))[t(0x18a)](l=>!isNaN(l));if(h[t(0x187)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[u(0x1ad)];['_removeBtn'];['_enabledCheck'];['_inputX'];['_inputY'];[u(0x18e)];['_inputColor'];['_inputOpacity'];['_opacityVal'];[u(0x1a8)];[u(0x164)];['_loadBtn'];[u(0x193)];[u(0x184)];get['windowTitle'](){const v=u;return v(0x171);}get['windowContentStyle'](){return css`
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
    `;}get[u(0x179)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const w=u;super(c),this['_layerList']=this['_getDomElement']('tse-layer-list'),this[w(0x17a)]=this['_getDomElement'](w(0x1ac)),this[w(0x1ae)]=this[w(0x183)]('tse-enabled'),this['_inputX']=this[w(0x183)](w(0x195)),this['_inputY']=this['_getDomElement']('tse-y'),this['_inputBlur']=this[w(0x183)](w(0x1aa)),this[w(0x168)]=this[w(0x183)](w(0x17f)),this['_inputOpacity']=this[w(0x183)](w(0x19c)),this['_opacityVal']=this['_getDomElement']('tse-opacity-val'),this['_previewText']=this['_getDomElement']('tse-preview'),this[w(0x164)]=this[w(0x183)](w(0x188)),this['_loadBtn']=this[w(0x183)](w(0x17b)),this['_copyBtn']=this['_getDomElement']('tse-copy-btn'),this['_applyBtn']=this['_getDomElement']('tse-apply-btn'),this[w(0x183)]('tse-add-btn')['onclick']=()=>this[w(0x189)](),this[w(0x183)]('tse-dup-btn')[w(0x16e)]=()=>this['_duplicateLayer'](),this[w(0x183)]('tse-up-btn')['onclick']=()=>this[w(0x17c)](-0x1),this['_getDomElement']('tse-down-btn')['onclick']=()=>this[w(0x17c)](0x1),this[w(0x17a)]['onclick']=()=>this['_removeLayer'](),this[w(0x1ae)][w(0x166)]=()=>{const x=w;this['_currentLayer']()[x(0x181)]=this['_enabledCheck'][x(0x15f)],this['_refresh']();};for(const [d,e,f]of[[this[w(0x16c)],w(0x15b),'tse-x-val'],[this['_inputY'],w(0x1a4),'tse-y-val'],[this[w(0x18e)],'blur','tse-blur-val']]){d[w(0x159)]=()=>{const y=w;this['_currentLayer']()[e]=Number(d[y(0x172)]),this['_getDomElement'](f)['textContent']=d[y(0x172)]+'px',this['_refresh']();};}this['_inputColor']['oninput']=()=>{const z=w;this[z(0x1a9)]()['color']=this[z(0x168)]['value'],this['_refresh']();},this[w(0x1ab)]['oninput']=()=>{const A=w;this['_currentLayer']()[A(0x18f)]=Number(this[A(0x1ab)]['value']),this['_opacityVal'][A(0x186)]=this['_inputOpacity']['value']+'%',this['_refresh']();},this['_copyBtn'][w(0x16e)]=()=>{const B=w;navigator[B(0x19d)]?.['writeText'](this[B(0x164)][B(0x172)])[B(0x160)](()=>{});},this[w(0x184)][w(0x16e)]=()=>this['_applyToSelection'](),this['_loadBtn'][w(0x16e)]=()=>{const C=w;this[C(0x176)](),this[C(0x1a3)](),this[C(0x1a6)](),this[C(0x169)]();},this['_loadFromPrimarySelection'](),this[w(0x1a3)](),this[w(0x1a6)](),this['_refresh']();}[u(0x176)](){const D=u,c=this['_designerCanvas']?.[D(0x1a0)]?.['selectionService']?.[D(0x162)];if(!c)return;const d=c['getStyle'](D(0x18c));d&&(this[D(0x15e)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const E=u;this[E(0x15e)]['push'](defaultLayer()),this['_selectedIndex']=this[E(0x15e)]['length']-0x1,this['_renderList'](),this[E(0x1a6)](),this[E(0x169)]();}['_duplicateLayer'](){const F=u;this['_layers']['splice'](this[F(0x161)]+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this[F(0x161)]+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[u(0x167)](){const G=u;if(this[G(0x15e)]['length']<=0x1)return;this['_layers'][G(0x18d)](this[G(0x161)],0x1),this[G(0x161)]=Math[G(0x165)](this['_selectedIndex'],this['_layers'][G(0x187)]-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[u(0x17c)](c){const H=u,d=this[H(0x161)],e=d+c;if(e<0x0||e>=this[H(0x15e)]['length'])return;[this[H(0x15e)][d],this[H(0x15e)][e]]=[this['_layers'][e],this[H(0x15e)][d]],this[H(0x161)]=e,this['_renderList'](),this[H(0x169)]();}[u(0x1a3)](){const I=u;this[I(0x1ad)]['innerHTML']='',this['_layers'][I(0x182)]((c,d)=>{const J=I,e=document[J(0x19e)]('li');if(d===this['_selectedIndex'])e['classList']['add'](J(0x175));const f=document['createElement'](J(0x1af));f['className']='swatch',f[J(0x16b)][J(0x190)]=c[J(0x178)],e[J(0x196)](f);const g=document[J(0x19e)]('span');g['textContent']=c[J(0x15b)]+'px\x20'+c['offsetY']+J(0x194)+c[J(0x19b)]+'px';if(!c[J(0x181)])g['classList'][J(0x16f)]('disabled-label');e[J(0x196)](g),e[J(0x16e)]=()=>{const K=J;this[K(0x161)]=d,this[K(0x1a3)](),this[K(0x1a6)]();},this[J(0x1ad)]['appendChild'](e);});}[u(0x1a6)](){const L=u,c=this[L(0x1a9)]();this[L(0x1ae)]['checked']=c[L(0x181)],this[L(0x16c)][L(0x172)]=String(c[L(0x15b)]),this[L(0x183)]('tse-x-val')[L(0x186)]=c[L(0x15b)]+'px',this['_inputY']['value']=String(c['offsetY']),this['_getDomElement']('tse-y-val')['textContent']=c['offsetY']+'px',this[L(0x18e)][L(0x172)]=String(c['blur']),this['_getDomElement']('tse-blur-val')['textContent']=c[L(0x19b)]+'px',this['_inputColor']['value']=c[L(0x178)],this['_inputOpacity']['value']=String(c[L(0x18f)]),this[L(0x15c)][L(0x186)]=c[L(0x18f)]+'%';}['_buildCss'](){const M=u;return this[M(0x15e)]['filter'](c=>c['enabled'])[M(0x19f)](layerToCss)['join'](',\x20')||'none';}['_refresh'](){const N=u,c=this[N(0x1a2)]();this['_previewText']['style']['textShadow']=c,this[N(0x164)]['value']=c,this['_renderList']();}[u(0x1a5)](){const O=u,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[O(0x198)];if(!c?.[O(0x187)])return;const d=this[O(0x1a2)](),e=c[0x0]['openGroup'](O(0x163));for(const f of c){if(d==='none')f['removeStyle']('text-shadow');else f['setStyle']('text-shadow',d);}e[O(0x191)]();}}customElements[u(0x15d)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);