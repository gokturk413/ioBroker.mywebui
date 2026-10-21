const u=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0xfe))/0x1*(-parseInt(m(0xcc))/0x2)+-parseInt(m(0xe1))/0x3*(-parseInt(m(0xf0))/0x4)+-parseInt(m(0xee))/0x5+parseInt(m(0xd7))/0x6+-parseInt(m(0xdc))/0x7+-parseInt(m(0xd1))/0x8*(parseInt(m(0x113))/0x9)+-parseInt(m(0xfd))/0xa*(-parseInt(m(0xd3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x539fc));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x122),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e]['map'](f=>f[o(0x11f)](0x10)[o(0x115)](0x2,'0'))[o(0xf9)]('');}function hexToRgb(c){const p=b,d=parseInt(c[p(0xf2)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[q(0x11b)]();if(i)d[q(0xd5)](i);f='';continue;}}}f+=h;}const g=f[q(0x11b)]();if(g)d['push'](g);return d;}function layerToCss(c){const r=b,d=(c['opacity']/0x64)[r(0x108)](0x2);return c['offsetX']+r(0x107)+c[r(0xe5)]+'px\x20'+c['blur']+r(0xea)+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const s=b;if(!c||c===s(0x11e))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[s(0xd5)](f);}return d['length']?d:[defaultLayer()];}function b(c,d){c=c-0xca;const e=a();let f=e[c];return f;}function a(){const P=['_layerList','_designerCanvas','2Wjqqxs','tse-preview','color','text-shadow','map','1938632THZWfy','set\x20text-shadow','11hkLslh','instanceServiceContainer','push','enabled','1282608EAEKfq','classList','_inputX','add','_opacityVal','2216928DGtBJF','_loadControls','_duplicateLayer','textContent','_buildCss','249468pFAghV','appendChild','tse-copy-btn','tse-load-btn','offsetY','tse-dup-btn','_inputOpacity','windowTitle','tse-blur','px\x20rgba(','_moveLayer','_enabledCheck','filter','2515985moWStB','splice','32REmueO','replace','slice','_cssOutput','tse-blur-val','_inputY','value','writeText','onchange','join','match','_applyToSelection','_layers','5645920QnOXib','38854yEcbIo','disabled-label','selectionService','tse-down-btn','_inputBlur','selectedElements','_renderList','tse-x-val','onclick','px\x20','toFixed','selected','split','_copyBtn','_previewText','windowTemplate','_addLayer','oninput','_refresh','_selectedIndex','round','9WqAQSn','background','padStart','swatch','_inputColor','_currentLayer','_removeBtn','createElement','trim','_getDomElement','tse-y-val','none','toString','blur','tse-color','#000000','_loadBtn','opacity','length'];a=function(){return P;};return a();}function parseOneLayer(c){const t=b;let d='#000000',e=0x64,f=c;const g=f[t(0xfa)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[t(0x11b)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[t(0x112)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][t(0x125)]===0x4?'#'+k[0x1]['slice'](0x1)[t(0x10a)]('')[t(0xd0)](l=>l+l)[t(0xf9)](''):k[0x1][t(0xf2)](0x0,0x7),f=f[t(0xf1)](k[0x1],'')['trim']());}const h=f[t(0x10a)](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))[t(0xed)](l=>!isNaN(l));if(h[t(0x125)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[u(0xca)];['_removeBtn'];['_enabledCheck'];[u(0xd9)];['_inputY'];['_inputBlur'];[u(0x117)];['_inputOpacity'];[u(0xdb)];['_previewText'];['_cssOutput'];['_loadBtn'];['_copyBtn'];['_applyBtn'];get[u(0xe8)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[u(0x10d)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const v=u;super(c),this['_layerList']=this['_getDomElement']('tse-layer-list'),this[v(0x119)]=this['_getDomElement']('tse-remove-btn'),this[v(0xec)]=this[v(0x11c)]('tse-enabled'),this['_inputX']=this[v(0x11c)]('tse-x'),this[v(0xf5)]=this['_getDomElement']('tse-y'),this['_inputBlur']=this[v(0x11c)](v(0xe9)),this[v(0x117)]=this['_getDomElement'](v(0x121)),this['_inputOpacity']=this['_getDomElement']('tse-opacity'),this[v(0xdb)]=this['_getDomElement']('tse-opacity-val'),this['_previewText']=this[v(0x11c)](v(0xcd)),this[v(0xf3)]=this['_getDomElement']('tse-css-out'),this[v(0x123)]=this['_getDomElement'](v(0xe4)),this[v(0x10b)]=this[v(0x11c)](v(0xe3)),this['_applyBtn']=this[v(0x11c)]('tse-apply-btn'),this['_getDomElement']('tse-add-btn')['onclick']=()=>this[v(0x10e)](),this['_getDomElement'](v(0xe6))[v(0x106)]=()=>this[v(0xde)](),this['_getDomElement']('tse-up-btn')[v(0x106)]=()=>this[v(0xeb)](-0x1),this[v(0x11c)](v(0x101))['onclick']=()=>this[v(0xeb)](0x1),this[v(0x119)]['onclick']=()=>this['_removeLayer'](),this[v(0xec)][v(0xf8)]=()=>{const w=v;this[w(0x118)]()['enabled']=this['_enabledCheck']['checked'],this[w(0x110)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX',v(0x105)],[this[v(0xf5)],'offsetY',v(0x11d)],[this[v(0x102)],v(0x120),v(0xf4)]]){d['oninput']=()=>{const x=v;this[x(0x118)]()[e]=Number(d['value']),this['_getDomElement'](f)[x(0xdf)]=d['value']+'px',this[x(0x110)]();};}this[v(0x117)][v(0x10f)]=()=>{const y=v;this['_currentLayer']()[y(0xce)]=this['_inputColor'][y(0xf6)],this['_refresh']();},this[v(0xe7)]['oninput']=()=>{const z=v;this['_currentLayer']()['opacity']=Number(this[z(0xe7)][z(0xf6)]),this['_opacityVal']['textContent']=this[z(0xe7)]['value']+'%',this[z(0x110)]();},this[v(0x10b)]['onclick']=()=>{const A=v;navigator['clipboard']?.[A(0xf7)](this['_cssOutput']['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this[v(0xfb)](),this['_loadBtn']['onclick']=()=>{const B=v;this['_loadFromPrimarySelection'](),this['_renderList'](),this[B(0xdd)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this[v(0x104)](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const C=u,c=this['_designerCanvas']?.[C(0xd4)]?.['selectionService']?.['primarySelection'];if(!c)return;const d=c['getStyle']('text-shadow');d&&(this[C(0xfc)]=parseCssTextShadow(d),this[C(0x111)]=0x0);}['_currentLayer'](){const D=u;return this[D(0xfc)][this[D(0x111)]];}['_addLayer'](){const E=u;this[E(0xfc)][E(0xd5)](defaultLayer()),this[E(0x111)]=this['_layers']['length']-0x1,this[E(0x104)](),this[E(0xdd)](),this['_refresh']();}[u(0xde)](){const F=u;this[F(0xfc)][F(0xef)](this[F(0x111)]+0x1,0x0,{...this['_currentLayer']()}),this[F(0x111)]=this[F(0x111)]+0x1,this[F(0x104)](),this[F(0xdd)](),this['_refresh']();}['_removeLayer'](){const G=u;if(this[G(0xfc)][G(0x125)]<=0x1)return;this['_layers']['splice'](this[G(0x111)],0x1),this[G(0x111)]=Math['min'](this[G(0x111)],this['_layers'][G(0x125)]-0x1),this[G(0x104)](),this[G(0xdd)](),this[G(0x110)]();}[u(0xeb)](c){const H=u,d=this[H(0x111)],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this[H(0xfc)][d],this[H(0xfc)][e]]=[this[H(0xfc)][e],this[H(0xfc)][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}[u(0x104)](){const I=u;this[I(0xca)]['innerHTML']='',this[I(0xfc)]['forEach']((c,d)=>{const J=I,e=document['createElement']('li');if(d===this[J(0x111)])e[J(0xd8)][J(0xda)](J(0x109));const f=document['createElement']('span');f['className']=J(0x116),f['style'][J(0x114)]=c[J(0xce)],e[J(0xe2)](f);const g=document[J(0x11a)]('span');g[J(0xdf)]=c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[J(0x120)]+'px';if(!c['enabled'])g[J(0xd8)][J(0xda)](J(0xff));e[J(0xe2)](g),e[J(0x106)]=()=>{const K=J;this[K(0x111)]=d,this[K(0x104)](),this['_loadControls']();},this[J(0xca)]['appendChild'](e);});}['_loadControls'](){const L=u,c=this['_currentLayer']();this[L(0xec)]['checked']=c[L(0xd6)],this[L(0xd9)]['value']=String(c['offsetX']),this[L(0x11c)](L(0x105))['textContent']=c['offsetX']+'px',this['_inputY'][L(0xf6)]=String(c[L(0xe5)]),this[L(0x11c)]('tse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this[L(0x11c)]('tse-blur-val')['textContent']=c['blur']+'px',this[L(0x117)]['value']=c[L(0xce)],this[L(0xe7)]['value']=String(c[L(0x124)]),this[L(0xdb)]['textContent']=c['opacity']+'%';}['_buildCss'](){const M=u;return this[M(0xfc)]['filter'](c=>c['enabled'])[M(0xd0)](layerToCss)['join'](',\x20')||M(0x11e);}['_refresh'](){const N=u,c=this[N(0xe0)]();this[N(0x10c)]['style']['textShadow']=c,this['_cssOutput']['value']=c,this['_renderList']();}[u(0xfb)](){const O=u,c=this[O(0xcb)]?.['instanceServiceContainer']?.[O(0x100)]?.[O(0x103)];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0]['openGroup'](O(0xd2));for(const f of c){if(d==='none')f['removeStyle'](O(0xcf));else f['setStyle']('text-shadow',d);}e['commit']();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);