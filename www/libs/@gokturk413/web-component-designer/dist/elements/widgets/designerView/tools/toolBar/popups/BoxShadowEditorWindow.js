const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x93))/0x1+parseInt(r(0xd8))/0x2*(parseInt(r(0x8d))/0x3)+-parseInt(r(0x84))/0x4+parseInt(r(0x7d))/0x5*(-parseInt(r(0x7f))/0x6)+-parseInt(r(0x7c))/0x7*(parseInt(r(0xd2))/0x8)+parseInt(r(0xb3))/0x9+-parseInt(r(0x87))/0xa*(-parseInt(r(0x94))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x65034));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0x7a;const e=a();let f=e[c];return f;}function a(){const V=['selected','_inputBlur','match','span','slice','filter','inset','_applyBtn','_previewBox','none','_layers','min','primarySelection','bse-y-val','_loadFromPrimarySelection','add','_inputSpread','bse-remove-btn','toFixed','bse-blur','join','disabled-label','_currentLayer','_renderList','trim','clipboard','_opacityVal','#000000','1048ftUsZD','_inputX','_removeLayer','split','_enabledCheck','_designerCanvas','652268VEMqLY','_layerList','bse-layer-list','42259VZmWzW','253060oHNfZx','splice','6UXTJjl','offsetX','_inputColor','offsetY','textContent','924224MpWOuw','background','onclick','10qvuwqw','push','_buildCss','bse-copy-btn','define','oninput','3gHelKx','checked','catch','_copyBtn','style','_selectedIndex','766840jSgHni','13945998xpNkzp','_loadControls','length','createElement','spread','bse-preview','bse-opacity','bse-load-btn','_getDomElement','_refresh','enabled','bse-add-btn','bse-color','_inputY','px\x20','bse-dup-btn','commit','value','Box\x20Shadow\x20Editor','_duplicateLayer','_cssOutput','_inputOpacity','opacity','swatch','replace','_moveLayer','_loadBtn','_removeBtn','Apply\x20box-shadow','appendChild','blur','5932359eHXwTa','map','bse-spread'];a=function(){return V;};return a();}function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0xd1),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){return'#'+[c,d,e]['map'](f=>f['toString'](0x10)['padStart'](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[t(0xce)]();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0xbf))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0xce)]());if(f)d[u(0x88)](f);}return d[u(0x96)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f[v(0xb8)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0xac)](k,'')[v(0xce)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][v(0xba)](0x1)[v(0xd5)]('')['map'](o=>o+o)[v(0xca)](''):m[0x1][v(0xba)](0x0,0x7),f=f[v(0xac)](m[0x1],'')['trim']());}const h=f[v(0xd5)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===v(0xbc)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[v(0x88)](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)[w(0xc8)](0x2);return''+(c['inset']?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+w(0xa2)+c['blur']+w(0xa2)+c['spread']+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[x(0xba)](0x3,0x5),0x10),f=parseInt(c[x(0xba)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[y(0x92)]=0x0;[y(0x7a)];[y(0xaf)];['_insetCheck'];[y(0xd6)];[y(0xd3)];['_inputY'];[y(0xb7)];[y(0xc6)];['_inputColor'];[y(0xa9)];[y(0xd0)];[y(0xbe)];[y(0xa8)];[y(0xae)];[y(0x90)];[y(0xbd)];get['windowTitle'](){const z=y;return z(0xa6);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const A=y;super(c),this['_layerList']=this[A(0x9c)](A(0x7b)),this['_removeBtn']=this['_getDomElement'](A(0xc7)),this['_insetCheck']=this[A(0x9c)]('bse-inset'),this['_enabledCheck']=this[A(0x9c)]('bse-enabled'),this['_inputX']=this[A(0x9c)]('bse-x'),this['_inputY']=this[A(0x9c)]('bse-y'),this['_inputBlur']=this[A(0x9c)](A(0xc9)),this['_inputSpread']=this['_getDomElement'](A(0xb5)),this[A(0x81)]=this['_getDomElement'](A(0xa0)),this[A(0xa9)]=this[A(0x9c)](A(0x9a)),this[A(0xd0)]=this['_getDomElement']('bse-opacity-val'),this[A(0xbe)]=this['_getDomElement'](A(0x99)),this['_cssOutput']=this['_getDomElement']('bse-css-out'),this['_loadBtn']=this[A(0x9c)](A(0x9b)),this[A(0x90)]=this[A(0x9c)](A(0x8a)),this[A(0xbd)]=this['_getDomElement']('bse-apply-btn'),this['_getDomElement'](A(0x9f))['onclick']=()=>this['_addLayer'](),this[A(0x9c)](A(0xa3))['onclick']=()=>this[A(0xa7)](),this[A(0x9c)]('bse-up-btn')[A(0x86)]=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')[A(0x86)]=()=>this[A(0xad)](0x1),this[A(0xaf)][A(0x86)]=()=>this['_removeLayer'](),this['_insetCheck']['onchange']=()=>{const B=A;this[B(0xcc)]()[B(0xbc)]=this['_insetCheck']['checked'],this[B(0x9d)]();},this[A(0xd6)]['onchange']=()=>{const C=A;this['_currentLayer']()['enabled']=this['_enabledCheck']['checked'],this[C(0x9d)]();};for(const [d,e,f]of[[this[A(0xd3)],A(0x80),'bse-x-val'],[this[A(0xa1)],A(0x82),A(0xc3)],[this['_inputBlur'],A(0xb2),'bse-blur-val'],[this['_inputSpread'],A(0x98),'bse-spread-val']]){d[A(0x8c)]=()=>{const D=A;this['_currentLayer']()[e]=Number(d['value']),this[D(0x9c)](f)[D(0x83)]=d['value']+'px',this[D(0x9d)]();};}this['_inputColor'][A(0x8c)]=()=>{const E=A;this[E(0xcc)]()['color']=this['_inputColor'][E(0xa5)],this[E(0x9d)]();},this['_inputOpacity'][A(0x8c)]=()=>{const F=A;this['_currentLayer']()['opacity']=Number(this['_inputOpacity'][F(0xa5)]),this[F(0xd0)][F(0x83)]=this['_inputOpacity']['value']+'%',this['_refresh']();},this[A(0x90)]['onclick']=()=>{const G=A;navigator[G(0xcf)]?.['writeText'](this[G(0xa8)][G(0xa5)])[G(0x8f)](()=>{});},this[A(0xbd)][A(0x86)]=()=>this['_applyToSelection'](),this[A(0xae)][A(0x86)]=()=>{const H=A;this['_loadFromPrimarySelection'](),this[H(0xcd)](),this[H(0x95)](),this[H(0x9d)]();},this[A(0xc4)](),this['_renderList'](),this['_loadControls'](),this[A(0x9d)]();}[y(0xc4)](){const I=y,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[I(0xc2)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){const J=y;return this['_layers'][this[J(0x92)]];}['_addLayer'](){const K=y;this['_layers']['push'](defaultLayer()),this[K(0x92)]=this[K(0xc0)]['length']-0x1,this[K(0xcd)](),this[K(0x95)](),this['_refresh']();}[y(0xa7)](){const L=y,c={...this[L(0xcc)]()};this['_layers'][L(0x7e)](this[L(0x92)]+0x1,0x0,c),this[L(0x92)]=this['_selectedIndex']+0x1,this['_renderList'](),this[L(0x95)](),this[L(0x9d)]();}[y(0xd4)](){const M=y;if(this[M(0xc0)][M(0x96)]<=0x1)return;this['_layers'][M(0x7e)](this[M(0x92)],0x1),this['_selectedIndex']=Math[M(0xc1)](this[M(0x92)],this[M(0xc0)][M(0x96)]-0x1),this[M(0xcd)](),this[M(0x95)](),this['_refresh']();}['_moveLayer'](c){const N=y,d=this[N(0x92)],e=d+c;if(e<0x0||e>=this['_layers'][N(0x96)])return;[this['_layers'][d],this[N(0xc0)][e]]=[this['_layers'][e],this['_layers'][d]],this[N(0x92)]=e,this[N(0xcd)](),this[N(0x9d)]();}['_renderList'](){const O=y;this['_layerList']['innerHTML']='',this[O(0xc0)]['forEach']((c,d)=>{const P=O,e=document[P(0x97)]('li');if(d===this[P(0x92)])e['classList'][P(0xc5)](P(0xb6));const f=document['createElement'](P(0xb9));f['className']=P(0xab),f['style'][P(0x85)]=c['color'],e[P(0xb1)](f);const g=document[P(0x97)]('span');g[P(0x83)]=''+(c['inset']?'inset\x20':'')+c['offsetX']+P(0xa2)+c['offsetY']+P(0xa2)+c[P(0xb2)]+P(0xa2)+c[P(0x98)]+'px';if(!c[P(0x9e)])g['classList']['add'](P(0xcb));e['appendChild'](g),e[P(0x86)]=()=>{const Q=P;this['_selectedIndex']=d,this[Q(0xcd)](),this['_loadControls']();},this['_layerList'][P(0xb1)](e);});}[y(0x95)](){const R=y,c=this['_currentLayer']();this['_insetCheck'][R(0x8e)]=c['inset'],this['_enabledCheck']['checked']=c['enabled'],this[R(0xd3)]['value']=String(c[R(0x80)]),this[R(0x9c)]('bse-x-val')['textContent']=c[R(0x80)]+'px',this[R(0xa1)][R(0xa5)]=String(c[R(0x82)]),this[R(0x9c)](R(0xc3))[R(0x83)]=c[R(0x82)]+'px',this[R(0xb7)]['value']=String(c['blur']),this[R(0x9c)]('bse-blur-val')['textContent']=c['blur']+'px',this[R(0xc6)][R(0xa5)]=String(c[R(0x98)]),this[R(0x9c)]('bse-spread-val')[R(0x83)]=c[R(0x98)]+'px',this['_inputColor'][R(0xa5)]=c['color'],this[R(0xa9)]['value']=String(c['opacity']),this[R(0xd0)]['textContent']=c[R(0xaa)]+'%';}[y(0x89)](){const S=y;return this['_layers'][S(0xbb)](c=>c['enabled'])[S(0xb4)](layerToCss)[S(0xca)](',\x20')||'none';}['_refresh'](){const T=y,c=this['_buildCss']();this['_previewBox'][T(0x91)]['boxShadow']=c,this[T(0xa8)][T(0xa5)]='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const U=y;if(!this[U(0xd7)])return;const c=this['_designerCanvas']['instanceServiceContainer']['selectionService']['selectedElements'];if(!c?.['length'])return;const d=this[U(0x89)](),e=c[0x0]['openGroup'](U(0xb0));for(const f of c){f['setStyle']('box-shadow',d);}e[U(0xa4)]();}}customElements[y(0x8b)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);