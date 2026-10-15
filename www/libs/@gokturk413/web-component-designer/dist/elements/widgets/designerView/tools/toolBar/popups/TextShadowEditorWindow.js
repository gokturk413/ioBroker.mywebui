const u=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x8f))/0x1*(-parseInt(m(0xc7))/0x2)+parseInt(m(0x75))/0x3*(parseInt(m(0xc0))/0x4)+-parseInt(m(0xa3))/0x5*(parseInt(m(0x74))/0x6)+parseInt(m(0x9f))/0x7+-parseInt(m(0x9e))/0x8*(parseInt(m(0x95))/0x9)+parseInt(m(0xa0))/0xa+-parseInt(m(0x82))/0xb*(parseInt(m(0xa4))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xccaae));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x6f;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x84),'opacity':0x32,'enabled':!![]};}function a(){const P=['_renderList','9TxVNcJ','createElement','_previewText','_applyToSelection','_moveLayer','min','map','splice','filter','3001704wONUvH','2381673prDxoB','15508170PLPSDE','_designerCanvas','offsetX','35TQruHU','2424gZuUPX','blur','tse-apply-btn','slice','span','oninput','_inputOpacity','enabled','_layerList','onclick','color','none','tse-y-val','_getDomElement','split','writeText','_cssOutput','tse-x-val','_loadBtn','commit','px\x20','_opacityVal','value','setStyle','_applyBtn','textContent','tse-y','textShadow','116Ongjvf','length','_loadControls','opacity','checked','push','primarySelection','2FbRuco','_refresh','offsetY','_loadFromPrimarySelection','tse-add-btn','_removeBtn','swatch','_buildCss','Text\x20Shadow\x20Editor','1369122HNJqNc','83829rfVVay','selected','windowContentStyle','removeStyle','selectionService','style','text-shadow','_inputX','tse-layer-list','_selectedIndex','instanceServiceContainer','windowTemplate','_inputBlur','69432OhLzmj','classList','#000000','clipboard','join','toString','trim','onchange','appendChild','tse-copy-btn','match','_enabledCheck','_inputY','1384461FCtZxi','_copyBtn','_inputColor','_layers','_currentLayer'];a=function(){return P;};return a();}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e]['map'](f=>f[o(0x87)](0x10)['padStart'](0x2,'0'))[o(0x86)]('');}function hexToRgb(c){const p=b,d=parseInt(c[p(0xa7)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d[q(0xc5)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const r=b,d=(c['opacity']/0x64)['toFixed'](0x2);return c['offsetX']+r(0xb8)+c[r(0xc9)]+r(0xb8)+c[r(0xa5)]+'px\x20rgba('+hexToRgb(c[r(0xae)])+','+d+')';}function parseCssTextShadow(c){const s=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[s(0x88)]());if(f)d[s(0xc5)](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const t=b;let d=t(0x84),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')['trim']();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[t(0x8c)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1]['slice'](0x1)[t(0xb2)]('')[t(0x9b)](l=>l+l)[t(0x86)](''):k[0x1][t(0xa7)](0x0,0x7),f=f['replace'](k[0x1],'')[t(0x88)]());}const h=f['split'](/\s+/)[t(0x9d)](Boolean)[t(0x9b)](l=>parseFloat(l))[t(0x9d)](l=>!isNaN(l));if(h[t(0xc1)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[u(0x7e)]=0x0;['_layerList'];['_removeBtn'];['_enabledCheck'];[u(0x7c)];[u(0x8e)];[u(0x81)];['_inputColor'];[u(0xaa)];['_opacityVal'];[u(0x97)];[u(0xb4)];['_loadBtn'];[u(0x90)];['_applyBtn'];get['windowTitle'](){const v=u;return v(0x73);}get[u(0x77)](){return css`
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
    `;}get[u(0x80)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const w=u;super(c),this['_layerList']=this['_getDomElement'](w(0x7d)),this[w(0x70)]=this[w(0xb1)]('tse-remove-btn'),this['_enabledCheck']=this[w(0xb1)]('tse-enabled'),this['_inputX']=this[w(0xb1)]('tse-x'),this['_inputY']=this[w(0xb1)](w(0xbe)),this[w(0x81)]=this['_getDomElement']('tse-blur'),this['_inputColor']=this['_getDomElement']('tse-color'),this[w(0xaa)]=this['_getDomElement']('tse-opacity'),this['_opacityVal']=this[w(0xb1)]('tse-opacity-val'),this['_previewText']=this['_getDomElement']('tse-preview'),this[w(0xb4)]=this[w(0xb1)]('tse-css-out'),this[w(0xb6)]=this[w(0xb1)]('tse-load-btn'),this['_copyBtn']=this['_getDomElement'](w(0x8b)),this[w(0xbc)]=this['_getDomElement'](w(0xa6)),this[w(0xb1)](w(0x6f))[w(0xad)]=()=>this['_addLayer'](),this[w(0xb1)]('tse-dup-btn')['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement']('tse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement']('tse-down-btn')[w(0xad)]=()=>this[w(0x99)](0x1),this['_removeBtn'][w(0xad)]=()=>this['_removeLayer'](),this[w(0x8d)][w(0x89)]=()=>{const x=w;this[x(0x93)]()['enabled']=this['_enabledCheck']['checked'],this[x(0xc8)]();};for(const [d,e,f]of[[this[w(0x7c)],'offsetX',w(0xb5)],[this[w(0x8e)],'offsetY',w(0xb0)],[this[w(0x81)],'blur','tse-blur-val']]){d['oninput']=()=>{const y=w;this['_currentLayer']()[e]=Number(d[y(0xba)]),this['_getDomElement'](f)[y(0xbd)]=d['value']+'px',this['_refresh']();};}this[w(0x91)]['oninput']=()=>{const z=w;this['_currentLayer']()[z(0xae)]=this['_inputColor'][z(0xba)],this['_refresh']();},this['_inputOpacity'][w(0xa9)]=()=>{const A=w;this['_currentLayer']()[A(0xc3)]=Number(this[A(0xaa)]['value']),this[A(0xb9)]['textContent']=this['_inputOpacity']['value']+'%',this[A(0xc8)]();},this[w(0x90)]['onclick']=()=>{const B=w;navigator[B(0x85)]?.[B(0xb3)](this[B(0xb4)][B(0xba)])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this[w(0x98)](),this['_loadBtn'][w(0xad)]=()=>{const C=w;this['_loadFromPrimarySelection'](),this['_renderList'](),this[C(0xc2)](),this[C(0xc8)]();},this[w(0xca)](),this['_renderList'](),this[w(0xc2)](),this[w(0xc8)]();}['_loadFromPrimarySelection'](){const D=u,c=this['_designerCanvas']?.[D(0x7f)]?.[D(0x79)]?.[D(0xc6)];if(!c)return;const d=c['getStyle']('text-shadow');d&&(this[D(0x92)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const E=u;this[E(0x92)]['push'](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this[E(0x94)](),this[E(0xc2)](),this['_refresh']();}['_duplicateLayer'](){const F=u;this['_layers']['splice'](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this[F(0x7e)]=this['_selectedIndex']+0x1,this['_renderList'](),this[F(0xc2)](),this[F(0xc8)]();}['_removeLayer'](){const G=u;if(this[G(0x92)]['length']<=0x1)return;this['_layers'][G(0x9c)](this[G(0x7e)],0x1),this['_selectedIndex']=Math[G(0x9a)](this[G(0x7e)],this['_layers'][G(0xc1)]-0x1),this['_renderList'](),this[G(0xc2)](),this[G(0xc8)]();}[u(0x99)](c){const H=u,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[H(0x92)][H(0xc1)])return;[this[H(0x92)][d],this['_layers'][e]]=[this[H(0x92)][e],this[H(0x92)][d]],this['_selectedIndex']=e,this[H(0x94)](),this[H(0xc8)]();}['_renderList'](){const I=u;this['_layerList']['innerHTML']='',this[I(0x92)]['forEach']((c,d)=>{const J=I,e=document['createElement']('li');if(d===this[J(0x7e)])e[J(0x83)]['add'](J(0x76));const f=document['createElement']('span');f['className']=J(0x71),f['style']['background']=c[J(0xae)],e['appendChild'](f);const g=document[J(0x96)](J(0xa8));g[J(0xbd)]=c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[J(0xa5)]+'px';if(!c['enabled'])g[J(0x83)]['add']('disabled-label');e['appendChild'](g),e['onclick']=()=>{const K=J;this[K(0x7e)]=d,this[K(0x94)](),this[K(0xc2)]();},this[J(0xac)][J(0x8a)](e);});}['_loadControls'](){const L=u,c=this['_currentLayer']();this['_enabledCheck'][L(0xc4)]=c['enabled'],this['_inputX'][L(0xba)]=String(c['offsetX']),this['_getDomElement'](L(0xb5))['textContent']=c[L(0xa2)]+'px',this[L(0x8e)][L(0xba)]=String(c['offsetY']),this[L(0xb1)]('tse-y-val')['textContent']=c[L(0xc9)]+'px',this['_inputBlur']['value']=String(c[L(0xa5)]),this['_getDomElement']('tse-blur-val')[L(0xbd)]=c[L(0xa5)]+'px',this[L(0x91)][L(0xba)]=c[L(0xae)],this['_inputOpacity']['value']=String(c[L(0xc3)]),this[L(0xb9)]['textContent']=c[L(0xc3)]+'%';}['_buildCss'](){const M=u;return this['_layers'][M(0x9d)](c=>c[M(0xab)])[M(0x9b)](layerToCss)['join'](',\x20')||'none';}[u(0xc8)](){const N=u,c=this[N(0x72)]();this[N(0x97)][N(0x7a)][N(0xbf)]=c,this[N(0xb4)][N(0xba)]=c,this['_renderList']();}[u(0x98)](){const O=u,c=this[O(0xa1)]?.[O(0x7f)]?.[O(0x79)]?.['selectedElements'];if(!c?.[O(0xc1)])return;const d=this[O(0x72)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d===O(0xaf))f[O(0x78)]('text-shadow');else f[O(0xbb)](O(0x7b),d);}e[O(0xb7)]();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);