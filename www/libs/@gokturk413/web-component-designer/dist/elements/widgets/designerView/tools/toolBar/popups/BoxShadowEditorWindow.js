const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0xe9))/0x1+-parseInt(r(0xb1))/0x2*(-parseInt(r(0xc4))/0x3)+parseInt(r(0x9c))/0x4*(-parseInt(r(0xd8))/0x5)+parseInt(r(0xe0))/0x6+-parseInt(r(0xd0))/0x7*(-parseInt(r(0xe3))/0x8)+-parseInt(r(0xeb))/0x9+-parseInt(r(0xf2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c4a6));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)[s(0xc3)](0x2,'0'))[s(0x9f)]('');}function b(c,d){c=c-0x92;const e=a();let f=e[c];return f;}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0xa2)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[t(0x93)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0xdf))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0xa2)]());if(f)d[u(0x93)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')[v(0xa2)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][v(0xb0)]===0x4?'#'+m[0x1][v(0xac)](0x1)[v(0x9a)]('')['map'](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f[v(0xce)](m[0x1],'')[v(0xa2)]());}const h=f['split'](/\s+/)[v(0xb8)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0xb0)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function a(){const U=['_getDomElement','bse-opacity','_inputOpacity','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','_applyToSelection','bse-blur-val','toFixed','_buildCss','slice','offsetY','bse-opacity-val','selectedElements','length','2JdDdVL','_selectedIndex','_loadControls','onchange','disabled-label','splice','onclick','filter','_addLayer','bse-add-btn','_applyBtn','_removeLayer','_layerList','inset','_moveLayer','value','_designerCanvas','bse-blur','padStart','2204691VgmKeR','_copyBtn','px\x20','offsetX','primarySelection','windowTitle','box-shadow','inset\x20','_enabledCheck','createElement','replace','node-projects-designer-box-shadow-editor','1298269yqppSj','color','forEach','bse-remove-btn','_layers','bse-x-val','bse-down-btn','textContent','133805JpFBkK','span','_currentLayer','_renderList','bse-dup-btn','opacity','_inputBlur','none','131682xqVASK','_inputY','_inputX','32FWcXHR','_inputColor','writeText','bse-css-out','instanceServiceContainer','appendChild','729446QHxXpe','define','6684426kFyMCM','spread','min','_loadBtn','_inputSpread','_cssOutput','blur','3848750BKSiCk','enabled','_insetCheck','getStyle','bse-spread-val','push','_loadFromPrimarySelection','_duplicateLayer','bse-color','_removeBtn','bse-spread','classList','split','commit','108FnMyDf','_refresh','style','join','bse-apply-btn','bse-inset','trim','bse-copy-btn'];a=function(){return U;};return a();}function layerToCss(c){const w=b,d=hexToRgb(c[w(0xd1)]),e=(c['opacity']/0x64)[w(0xaa)](0x2);return''+(c['inset']?'inset\x20':'')+c['offsetX']+w(0xc6)+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c['spread']+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[x(0xac)](0x3,0x5),0x10),f=parseInt(c[x(0xac)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];[y(0x97)];['_insetCheck'];['_enabledCheck'];[y(0xe2)];['_inputY'];[y(0xde)];['_inputSpread'];[y(0xe4)];['_inputOpacity'];['_opacityVal'];['_previewBox'];['_cssOutput'];['_loadBtn'];[y(0xc5)];['_applyBtn'];get[y(0xc9)](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const z=y;return z(0xa7);}constructor(c){const A=y;super(c),this['_layerList']=this[A(0xa4)]('bse-layer-list'),this['_removeBtn']=this[A(0xa4)](A(0xd3)),this['_insetCheck']=this[A(0xa4)](A(0xa1)),this['_enabledCheck']=this[A(0xa4)]('bse-enabled'),this['_inputX']=this[A(0xa4)]('bse-x'),this[A(0xe1)]=this[A(0xa4)]('bse-y'),this[A(0xde)]=this[A(0xa4)](A(0xc2)),this['_inputSpread']=this[A(0xa4)](A(0x98)),this['_inputColor']=this[A(0xa4)](A(0x96)),this[A(0xa6)]=this[A(0xa4)](A(0xa5)),this['_opacityVal']=this[A(0xa4)](A(0xae)),this['_previewBox']=this['_getDomElement']('bse-preview'),this[A(0xf0)]=this['_getDomElement'](A(0xe6)),this[A(0xee)]=this['_getDomElement']('bse-load-btn'),this[A(0xc5)]=this['_getDomElement'](A(0xa3)),this[A(0xbb)]=this['_getDomElement'](A(0xa0)),this['_getDomElement'](A(0xba))['onclick']=()=>this[A(0xb9)](),this['_getDomElement'](A(0xdc))['onclick']=()=>this[A(0x95)](),this[A(0xa4)]('bse-up-btn')[A(0xb7)]=()=>this['_moveLayer'](-0x1),this['_getDomElement'](A(0xd6))['onclick']=()=>this[A(0xbf)](0x1),this[A(0x97)][A(0xb7)]=()=>this[A(0xbc)](),this['_insetCheck']['onchange']=()=>{const B=A;this['_currentLayer']()[B(0xbe)]=this[B(0xf4)]['checked'],this[B(0x9d)]();},this['_enabledCheck'][A(0xb4)]=()=>{const C=A;this[C(0xda)]()[C(0xf3)]=this['_enabledCheck']['checked'],this[C(0x9d)]();};for(const [d,e,f]of[[this[A(0xe2)],A(0xc7),A(0xd5)],[this[A(0xe1)],A(0xad),'bse-y-val'],[this['_inputBlur'],'blur',A(0xa9)],[this[A(0xef)],A(0xec),A(0x92)]]){d['oninput']=()=>{const D=A;this['_currentLayer']()[e]=Number(d[D(0xc0)]),this[D(0xa4)](f)['textContent']=d['value']+'px',this['_refresh']();};}this[A(0xe4)]['oninput']=()=>{const E=A;this[E(0xda)]()[E(0xd1)]=this[E(0xe4)]['value'],this['_refresh']();},this['_inputOpacity']['oninput']=()=>{const F=A;this[F(0xda)]()['opacity']=Number(this['_inputOpacity']['value']),this['_opacityVal'][F(0xd7)]=this['_inputOpacity'][F(0xc0)]+'%',this['_refresh']();},this[A(0xc5)][A(0xb7)]=()=>{const G=A;navigator['clipboard']?.[G(0xe5)](this['_cssOutput']['value'])['catch'](()=>{});},this[A(0xbb)]['onclick']=()=>this[A(0xa8)](),this['_loadBtn']['onclick']=()=>{const H=A;this[H(0x94)](),this[H(0xdb)](),this['_loadControls'](),this[H(0x9d)]();},this[A(0x94)](),this['_renderList'](),this[A(0xb3)](),this['_refresh']();}['_loadFromPrimarySelection'](){const I=y,c=this[I(0xc1)]?.[I(0xe7)]?.['selectionService']?.[I(0xc8)];if(!c)return;const d=c[I(0xf5)](I(0xca));d&&(this['_layers']=parseCssBoxShadow(d),this[I(0xb2)]=0x0);}['_currentLayer'](){const J=y;return this[J(0xd4)][this['_selectedIndex']];}['_addLayer'](){const K=y;this['_layers']['push'](defaultLayer()),this[K(0xb2)]=this[K(0xd4)][K(0xb0)]-0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_duplicateLayer'](){const L=y,c={...this[L(0xda)]()};this[L(0xd4)][L(0xb6)](this['_selectedIndex']+0x1,0x0,c),this[L(0xb2)]=this['_selectedIndex']+0x1,this[L(0xdb)](),this[L(0xb3)](),this['_refresh']();}['_removeLayer'](){const M=y;if(this['_layers']['length']<=0x1)return;this[M(0xd4)]['splice'](this['_selectedIndex'],0x1),this[M(0xb2)]=Math[M(0xed)](this['_selectedIndex'],this['_layers'][M(0xb0)]-0x1),this[M(0xdb)](),this['_loadControls'](),this['_refresh']();}[y(0xbf)](c){const N=y,d=this[N(0xb2)],e=d+c;if(e<0x0||e>=this['_layers'][N(0xb0)])return;[this[N(0xd4)][d],this[N(0xd4)][e]]=[this['_layers'][e],this[N(0xd4)][d]],this[N(0xb2)]=e,this[N(0xdb)](),this['_refresh']();}['_renderList'](){const O=y;this[O(0xbd)]['innerHTML']='',this[O(0xd4)][O(0xd2)]((c,d)=>{const P=O,e=document['createElement']('li');if(d===this[P(0xb2)])e[P(0x99)]['add']('selected');const f=document[P(0xcd)]('span');f['className']='swatch',f[P(0x9e)]['background']=c[P(0xd1)],e[P(0xe8)](f);const g=document['createElement'](P(0xd9));g[P(0xd7)]=''+(c[P(0xbe)]?P(0xcb):'')+c[P(0xc7)]+'px\x20'+c[P(0xad)]+'px\x20'+c['blur']+P(0xc6)+c[P(0xec)]+'px';if(!c[P(0xf3)])g['classList']['add'](P(0xb5));e[P(0xe8)](g),e[P(0xb7)]=()=>{const Q=P;this['_selectedIndex']=d,this[Q(0xdb)](),this['_loadControls']();},this['_layerList']['appendChild'](e);});}[y(0xb3)](){const R=y,c=this['_currentLayer']();this['_insetCheck']['checked']=c['inset'],this[R(0xcc)]['checked']=c['enabled'],this['_inputX'][R(0xc0)]=String(c[R(0xc7)]),this['_getDomElement']('bse-x-val')[R(0xd7)]=c[R(0xc7)]+'px',this[R(0xe1)][R(0xc0)]=String(c[R(0xad)]),this[R(0xa4)]('bse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this[R(0xa4)]('bse-blur-val')[R(0xd7)]=c[R(0xf1)]+'px',this[R(0xef)][R(0xc0)]=String(c['spread']),this[R(0xa4)]('bse-spread-val')[R(0xd7)]=c['spread']+'px',this['_inputColor'][R(0xc0)]=c[R(0xd1)],this['_inputOpacity'][R(0xc0)]=String(c[R(0xdd)]),this['_opacityVal'][R(0xd7)]=c['opacity']+'%';}[y(0xab)](){const S=y;return this['_layers'][S(0xb8)](c=>c['enabled'])['map'](layerToCss)[S(0x9f)](',\x20')||'none';}[y(0x9d)](){const c=this['_buildCss']();this['_previewBox']['style']['boxShadow']=c,this['_cssOutput']['value']='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const T=y;if(!this['_designerCanvas'])return;const c=this[T(0xc1)]['instanceServiceContainer']['selectionService'][T(0xaf)];if(!c?.[T(0xb0)])return;const d=this['_buildCss'](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f['setStyle']('box-shadow',d);}e[T(0x9b)]();}}customElements[y(0xea)](y(0xcf),BoxShadowEditorWindow);