const z=b;function b(c,d){c=c-0x7b;const e=a();let f=e[c];return f;}(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0xa2))/0x1*(-parseInt(r(0x7f))/0x2)+parseInt(r(0x82))/0x3*(-parseInt(r(0x94))/0x4)+parseInt(r(0xce))/0x5+-parseInt(r(0xa5))/0x6+-parseInt(r(0xdf))/0x7+-parseInt(r(0xda))/0x8+parseInt(r(0xde))/0x9*(parseInt(r(0x9f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x79c81));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0x8e),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0xd6)](f=>f[t(0x93)](0x10)[t(0x7b)](0x2,'0'))[t(0xa9)]('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d[u(0x9e)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[u(0x9e)](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c===v(0xae))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[v(0xba)]());if(f)d[v(0x9e)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d=w(0x8e),e=0x64,f=c;const g=f[w(0xb2)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')[w(0xba)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[w(0xc7)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[w(0xb2)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][w(0xcf)](0x1)[w(0x84)]('')[w(0xd6)](o=>o+o)['join'](''):m[0x1][w(0xcf)](0x0,0x7),f=f[w(0x7e)](m[0x1],'')['trim']());}const h=f[w(0x84)](/\s+/)[w(0x91)](Boolean);let i=![];const j=[];for(const o of h){if(o===w(0x9d)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c[x(0x9d)]?'inset\x20':'')+c['offsetX']+x(0xc0)+c[x(0xc3)]+x(0xc0)+c[x(0xb1)]+'px\x20'+c[x(0xdb)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c[y(0xcf)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];[z(0x97)];['_insetCheck'];['_enabledCheck'];['_inputX'];['_inputY'];['_inputBlur'];['_inputSpread'];['_inputColor'];['_inputOpacity'];['_opacityVal'];['_previewBox'];['_cssOutput'];['_loadBtn'];[z(0xb4)];[z(0xc9)];get[z(0x90)](){const A=z;return A(0x89);}get['windowContentStyle'](){return css`
      * { box-sizing: border-box; }
      .bse-root {
        display: flex;
        flex-direction: column;
        width: 380px;
        color: var(--wcd-color-text, #ddd);
        font-family: sans-serif;
        font-size: 12px;
        padding: 8px;
        gap: 8px;
        background: var(--wcd-color-surface-raised, #2c2c2c);
      }
      .preview-area {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 110px;
        background: repeating-conic-gradient(#444 0% 25%, #333 0% 50%) 0 0 / 16px 16px;
        border-radius: 4px;
        border: 1px solid var(--wcd-color-border-strong, #111);
      }
      .preview-box {
        width: 70px;
        height: 70px;
        background: var(--wcd-box-shadow-editor-preview-background, #fff);
        border-radius: 4px;
      }
      .layers-row {
        display: flex;
        gap: 6px;
        align-items: flex-start;
      }
      .layer-list {
        list-style: none;
        margin: 0;
        padding: 0;
        flex: 1;
        min-height: 60px;
        max-height: 100px;
        overflow-y: auto;
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border-strong, #111);
        border-radius: 3px;
      }
      .layer-list li {
        padding: 4px 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .layer-list li.selected {
        background: var(--wcd-box-shadow-editor-preview-box-background, #3a3a5a);
      }
      .layer-list li .swatch {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: 1px solid var(--wcd-color-border, #555);
        flex-shrink: 0;
        display: inline-block;
      }
      .layer-list li .disabled-label { opacity: 0.4; }
      .layer-buttons {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .layer-buttons button {
        width: 24px;
        height: 24px;
        padding: 0;
        font-size: 14px;
        background: var(--wcd-color-surface-hover, #444);
        color: var(--wcd-color-text, #ddd);
        border: 1px solid var(--wcd-color-border-strong, #222);
        border-radius: 3px;
        cursor: pointer;
        line-height: 1;
      }
      .layer-buttons button:hover { background: #666; }
      .controls {
        display: grid;
        grid-template-columns: 90px 1fr 36px;
        gap: 4px 6px;
        align-items: center;
      }
      .controls label { color: var(--wcd-color-text-muted, #aaa); }
      .controls input[type=range] { width: 100%; }
      .controls input[type=number] {
        width: 100%;
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border, #444);
        color: var(--wcd-color-text, #ddd);
        border-radius: 3px;
        padding: 2px 4px;
      }
      .controls input[type=color] {
        width: 100%;
        height: 24px;
        padding: 1px;
        background: var(--wcd-color-surface, #1e1e1e);
        border: 1px solid var(--wcd-color-border, #444);
        border-radius: 3px;
        cursor: pointer;
      }
      .check-row {
        display: flex;
        gap: 14px;
        align-items: center;
        margin-bottom: 2px;
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
        height: 48px;
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
    `;}get['windowTemplate'](){const B=z;return B(0xb8);}constructor(c){const C=z;super(c),this[C(0xa7)]=this['_getDomElement']('bse-layer-list'),this[C(0x97)]=this[C(0x8b)](C(0x80)),this['_insetCheck']=this[C(0x8b)](C(0x9a)),this[C(0x95)]=this['_getDomElement']('bse-enabled'),this['_inputX']=this['_getDomElement']('bse-x'),this['_inputY']=this['_getDomElement']('bse-y'),this['_inputBlur']=this['_getDomElement']('bse-blur'),this[C(0xb6)]=this[C(0x8b)](C(0x9c)),this[C(0xc4)]=this['_getDomElement']('bse-color'),this[C(0x7c)]=this['_getDomElement'](C(0x87)),this[C(0xc8)]=this['_getDomElement'](C(0xbb)),this[C(0xd8)]=this[C(0x8b)]('bse-preview'),this['_cssOutput']=this['_getDomElement'](C(0x8d)),this[C(0xa8)]=this[C(0x8b)]('bse-load-btn'),this['_copyBtn']=this['_getDomElement']('bse-copy-btn'),this['_applyBtn']=this['_getDomElement']('bse-apply-btn'),this[C(0x8b)]('bse-add-btn')[C(0xaf)]=()=>this[C(0x8f)](),this[C(0x8b)]('bse-dup-btn')[C(0xaf)]=()=>this['_duplicateLayer'](),this[C(0x8b)](C(0x8c))[C(0xaf)]=()=>this['_moveLayer'](-0x1),this[C(0x8b)]('bse-down-btn')['onclick']=()=>this[C(0xbf)](0x1),this[C(0x97)]['onclick']=()=>this[C(0xdd)](),this['_insetCheck']['onchange']=()=>{const D=C;this[D(0xa0)]()[D(0x9d)]=this['_insetCheck']['checked'],this['_refresh']();},this[C(0x95)]['onchange']=()=>{const E=C;this[E(0xa0)]()[E(0x9b)]=this[E(0x95)][E(0xc6)],this[E(0x8a)]();};for(const [d,e,f]of[[this[C(0xa3)],'offsetX','bse-x-val'],[this[C(0xc2)],'offsetY',C(0xd4)],[this[C(0xb3)],C(0xb1),'bse-blur-val'],[this['_inputSpread'],C(0xdb),'bse-spread-val']]){d['oninput']=()=>{const F=C;this[F(0xa0)]()[e]=Number(d[F(0xa6)]),this['_getDomElement'](f)['textContent']=d['value']+'px',this['_refresh']();};}this['_inputColor'][C(0xb7)]=()=>{const G=C;this[G(0xa0)]()[G(0xaa)]=this[G(0xc4)]['value'],this['_refresh']();},this[C(0x7c)][C(0xb7)]=()=>{const H=C;this['_currentLayer']()[H(0x92)]=Number(this[H(0x7c)]['value']),this[H(0xc8)][H(0xb5)]=this[H(0x7c)][H(0xa6)]+'%',this['_refresh']();},this[C(0xb4)]['onclick']=()=>{const I=C;navigator[I(0x96)]?.[I(0xab)](this[I(0xe0)]['value'])['catch'](()=>{});},this[C(0xc9)][C(0xaf)]=()=>this[C(0xc1)](),this['_loadBtn']['onclick']=()=>{const J=C;this['_loadFromPrimarySelection'](),this['_renderList'](),this[J(0xc5)](),this['_refresh']();},this[C(0xad)](),this['_renderList'](),this[C(0xc5)](),this['_refresh']();}[z(0xad)](){const K=z,c=this[K(0xbc)]?.[K(0xb0)]?.[K(0xb9)]?.['primarySelection'];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this[K(0xd9)]=0x0);}[z(0xa0)](){const L=z;return this[L(0x81)][this['_selectedIndex']];}['_addLayer'](){const M=z;this['_layers']['push'](defaultLayer()),this[M(0xd9)]=this[M(0x81)]['length']-0x1,this[M(0xe2)](),this['_loadControls'](),this['_refresh']();}['_duplicateLayer'](){const N=z,c={...this[N(0xa0)]()};this['_layers']['splice'](this[N(0xd9)]+0x1,0x0,c),this['_selectedIndex']=this['_selectedIndex']+0x1,this['_renderList'](),this[N(0xc5)](),this[N(0x8a)]();}[z(0xdd)](){const O=z;if(this[O(0x81)][O(0xcd)]<=0x1)return;this[O(0x81)][O(0xd7)](this['_selectedIndex'],0x1),this[O(0xd9)]=Math[O(0xcc)](this[O(0xd9)],this[O(0x81)][O(0xcd)]-0x1),this[O(0xe2)](),this['_loadControls'](),this[O(0x8a)]();}[z(0xbf)](c){const P=z,d=this[P(0xd9)],e=d+c;if(e<0x0||e>=this[P(0x81)][P(0xcd)])return;[this[P(0x81)][d],this['_layers'][e]]=[this['_layers'][e],this[P(0x81)][d]],this['_selectedIndex']=e,this[P(0xe2)](),this[P(0x8a)]();}[z(0xe2)](){const Q=z;this['_layerList'][Q(0xd1)]='',this['_layers'][Q(0xbe)]((c,d)=>{const R=Q,e=document['createElement']('li');if(d===this[R(0xd9)])e[R(0x98)]['add'](R(0x86));const f=document[R(0xa1)]('span');f[R(0xd2)]=R(0x85),f[R(0xbd)]['background']=c['color'],e['appendChild'](f);const g=document['createElement']('span');g[R(0xb5)]=''+(c['inset']?R(0x88):'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c[R(0xb1)]+'px\x20'+c[R(0xdb)]+'px';if(!c[R(0x9b)])g['classList'][R(0xca)]('disabled-label');e[R(0xdc)](g),e['onclick']=()=>{const S=R;this['_selectedIndex']=d,this[S(0xe2)](),this[S(0xc5)]();},this['_layerList']['appendChild'](e);});}['_loadControls'](){const T=z,c=this['_currentLayer']();this[T(0x83)][T(0xc6)]=c['inset'],this['_enabledCheck'][T(0xc6)]=c['enabled'],this['_inputX']['value']=String(c['offsetX']),this['_getDomElement']('bse-x-val')[T(0xb5)]=c[T(0xe1)]+'px',this['_inputY'][T(0xa6)]=String(c['offsetY']),this[T(0x8b)]('bse-y-val')[T(0xb5)]=c['offsetY']+'px',this['_inputBlur'][T(0xa6)]=String(c['blur']),this['_getDomElement']('bse-blur-val')['textContent']=c['blur']+'px',this[T(0xb6)][T(0xa6)]=String(c[T(0xdb)]),this['_getDomElement'](T(0xcb))[T(0xb5)]=c['spread']+'px',this[T(0xc4)][T(0xa6)]=c[T(0xaa)],this['_inputOpacity'][T(0xa6)]=String(c['opacity']),this[T(0xc8)]['textContent']=c[T(0x92)]+'%';}['_buildCss'](){const U=z;return this['_layers'][U(0x91)](c=>c[U(0x9b)])[U(0xd6)](layerToCss)[U(0xa9)](',\x20')||'none';}[z(0x8a)](){const V=z,c=this['_buildCss']();this['_previewBox']['style'][V(0xd0)]=c,this['_cssOutput'][V(0xa6)]='box-shadow:\x20'+c+';',this[V(0xe2)]();}[z(0xc1)](){const W=z;if(!this[W(0xbc)])return;const c=this['_designerCanvas'][W(0xb0)][W(0xb9)][W(0xd5)];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0][W(0x7d)](W(0xac));for(const f of c){f['setStyle'](W(0xd3),d);}e['commit']();}}customElements[z(0xa4)](z(0x99),BoxShadowEditorWindow);function a(){const X=['createElement','28833GYycWY','_inputX','define','5285988VLvKzK','value','_layerList','_loadBtn','join','color','writeText','Apply\x20box-shadow','_loadFromPrimarySelection','none','onclick','instanceServiceContainer','blur','match','_inputBlur','_copyBtn','textContent','_inputSpread','oninput','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','selectionService','trim','bse-opacity-val','_designerCanvas','style','forEach','_moveLayer','px\x20','_applyToSelection','_inputY','offsetY','_inputColor','_loadControls','checked','round','_opacityVal','_applyBtn','add','bse-spread-val','min','length','522200Kbjmlb','slice','boxShadow','innerHTML','className','box-shadow','bse-y-val','selectedElements','map','splice','_previewBox','_selectedIndex','6528208SHCnox','spread','appendChild','_removeLayer','18IlVFgd','4849670kjDJBT','_cssOutput','offsetX','_renderList','padStart','_inputOpacity','openGroup','replace','66faeUNs','bse-remove-btn','_layers','3tWUDij','_insetCheck','split','swatch','selected','bse-opacity','inset\x20','Box\x20Shadow\x20Editor','_refresh','_getDomElement','bse-up-btn','bse-css-out','#000000','_addLayer','windowTitle','filter','opacity','toString','2569624UZYbSv','_enabledCheck','clipboard','_removeBtn','classList','node-projects-designer-box-shadow-editor','bse-inset','enabled','bse-spread','inset','push','21890530hxQPgd','_currentLayer'];a=function(){return X;};return a();}