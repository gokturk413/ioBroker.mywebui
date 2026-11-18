const z=b;function b(c,d){c=c-0xad;const e=a();let f=e[c];return f;}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0xc5))/0x1+parseInt(r(0xe8))/0x2+parseInt(r(0xad))/0x3+parseInt(r(0xcb))/0x4*(-parseInt(r(0x109))/0x5)+parseInt(r(0xe4))/0x6+parseInt(r(0x10a))/0x7+parseInt(r(0xdd))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x95969));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const s=b;return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':s(0xbe),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const t=b;return'#'+[c,d,e][t(0xd8)](f=>f['toString'](0x10)['padStart'](0x2,'0'))[t(0xfe)]('');}function splitShadowLayers(c){const u=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[u(0xe5)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[u(0xe0)]();if(k)d[u(0x105)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[u(0x105)](g);return d;}function parseCssBoxShadow(c){const v=b;if(!c||c===v(0xc4))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[v(0x105)](f);}return d[v(0xe5)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const w=b;let d='#000000',e=0x64,f=c;const g=f[w(0xb8)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[w(0xf5)](k,'')[w(0xe0)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][w(0xaf)](0x1)[w(0xd1)]('')['map'](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f[w(0xd1)](/\s+/)[w(0xe7)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const x=b,d=hexToRgb(c['color']),e=(c['opacity']/0x64)['toFixed'](0x2);return''+(c[x(0xbc)]?x(0xb7):'')+c['offsetX']+'px\x20'+c[x(0xcd)]+'px\x20'+c[x(0xf3)]+'px\x20'+c['spread']+x(0xc7)+d+','+e+')';}function hexToRgb(c){const y=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[y(0xaf)](0x3,0x5),0x10),f=parseInt(c[y(0xaf)](0x5,0x7),0x10);return d+','+e+','+f;}function a(){const W=['opacity','openGroup','_layerList','bse-x','bse-dup-btn','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','join','span','bse-apply-btn','add','textContent','spread','_getDomElement','push','onclick','enabled','innerHTML','10mwmbEe','3666299gLyYie','_opacityVal','222009TtGkaW','catch','slice','swatch','_moveLayer','_inputX','_loadFromPrimarySelection','clipboard','splice','bse-up-btn','inset\x20','match','windowTitle','node-projects-designer-box-shadow-editor','_cssOutput','inset','oninput','#000000','_inputBlur','forEach','_applyToSelection','onchange','_designerCanvas','none','1183713xSIHvc','_selectedIndex','px\x20rgba(','_refresh','_inputY','_currentLayer','1440932csSCJq','_inputOpacity','offsetY','_renderList','box-shadow:\x20','bse-y','split','bse-css-out','offsetX','disabled-label','windowContentStyle','style','bse-y-val','map','bse-x-val','bse-blur','bse-spread','Apply\x20box-shadow','5684888ZIOzXu','bse-load-btn','checked','trim','_layers','_insetCheck','define','2896728rjeqpf','length','getStyle','filter','1451466ncaVwB','_removeBtn','_inputColor','_inputSpread','appendChild','value','bse-add-btn','createElement','_applyBtn','bse-remove-btn','_loadControls','blur','_loadBtn','replace','_buildCss','selectedElements'];a=function(){return W;};return a();}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[z(0xc6)]=0x0;[z(0xfa)];['_removeBtn'];['_insetCheck'];['_enabledCheck'];[z(0xb2)];['_inputY'];[z(0xbf)];[z(0xeb)];['_inputColor'];[z(0xcc)];['_opacityVal'];['_previewBox'];['_cssOutput'];[z(0xf4)];['_copyBtn'];['_applyBtn'];get[z(0xb9)](){return'Box\x20Shadow\x20Editor';}get[z(0xd5)](){return css`
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
    `;}get['windowTemplate'](){const A=z;return A(0xfd);}constructor(c){const B=z;super(c),this[B(0xfa)]=this[B(0x104)]('bse-layer-list'),this[B(0xe9)]=this['_getDomElement'](B(0xf1)),this[B(0xe2)]=this['_getDomElement']('bse-inset'),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this['_inputX']=this[B(0x104)](B(0xfb)),this['_inputY']=this[B(0x104)](B(0xd0)),this['_inputBlur']=this['_getDomElement'](B(0xda)),this[B(0xeb)]=this[B(0x104)](B(0xdb)),this[B(0xea)]=this[B(0x104)]('bse-color'),this[B(0xcc)]=this[B(0x104)]('bse-opacity'),this[B(0x10b)]=this['_getDomElement']('bse-opacity-val'),this['_previewBox']=this[B(0x104)]('bse-preview'),this['_cssOutput']=this[B(0x104)](B(0xd2)),this[B(0xf4)]=this['_getDomElement'](B(0xde)),this['_copyBtn']=this[B(0x104)]('bse-copy-btn'),this[B(0xf0)]=this['_getDomElement'](B(0x100)),this['_getDomElement'](B(0xee))[B(0x106)]=()=>this['_addLayer'](),this[B(0x104)](B(0xfc))['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement'](B(0xb6))[B(0x106)]=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')['onclick']=()=>this[B(0xb1)](0x1),this[B(0xe9)]['onclick']=()=>this['_removeLayer'](),this['_insetCheck'][B(0xc2)]=()=>{const C=B;this['_currentLayer']()['inset']=this[C(0xe2)]['checked'],this[C(0xc8)]();},this['_enabledCheck']['onchange']=()=>{const D=B;this['_currentLayer']()['enabled']=this['_enabledCheck'][D(0xdf)],this['_refresh']();};for(const [d,e,f]of[[this[B(0xb2)],'offsetX',B(0xd9)],[this[B(0xc9)],'offsetY',B(0xd7)],[this['_inputBlur'],'blur','bse-blur-val'],[this['_inputSpread'],B(0x103),'bse-spread-val']]){d[B(0xbd)]=()=>{const E=B;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d[E(0xed)]+'px',this['_refresh']();};}this['_inputColor']['oninput']=()=>{const F=B;this[F(0xca)]()['color']=this['_inputColor'][F(0xed)],this[F(0xc8)]();},this['_inputOpacity']['oninput']=()=>{const G=B;this['_currentLayer']()['opacity']=Number(this['_inputOpacity'][G(0xed)]),this['_opacityVal'][G(0x102)]=this['_inputOpacity'][G(0xed)]+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const H=B;navigator[H(0xb4)]?.['writeText'](this['_cssOutput']['value'])[H(0xae)](()=>{});},this[B(0xf0)]['onclick']=()=>this['_applyToSelection'](),this[B(0xf4)]['onclick']=()=>{const I=B;this[I(0xb3)](),this['_renderList'](),this[I(0xf2)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this[B(0xce)](),this['_loadControls'](),this[B(0xc8)]();}['_loadFromPrimarySelection'](){const J=z,c=this[J(0xc3)]?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[J(0xe6)]('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[z(0xca)](){const K=z;return this[K(0xe1)][this['_selectedIndex']];}['_addLayer'](){const L=z;this[L(0xe1)]['push'](defaultLayer()),this[L(0xc6)]=this['_layers'][L(0xe5)]-0x1,this['_renderList'](),this['_loadControls'](),this[L(0xc8)]();}['_duplicateLayer'](){const M=z,c={...this['_currentLayer']()};this['_layers'][M(0xb5)](this[M(0xc6)]+0x1,0x0,c),this[M(0xc6)]=this['_selectedIndex']+0x1,this[M(0xce)](),this[M(0xf2)](),this[M(0xc8)]();}['_removeLayer'](){const N=z;if(this['_layers']['length']<=0x1)return;this[N(0xe1)]['splice'](this[N(0xc6)],0x1),this['_selectedIndex']=Math['min'](this['_selectedIndex'],this[N(0xe1)]['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const O=z,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[O(0xe1)]['length'])return;[this['_layers'][d],this[O(0xe1)][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}[z(0xce)](){const P=z;this['_layerList'][P(0x108)]='',this[P(0xe1)][P(0xc0)]((c,d)=>{const Q=P,e=document[Q(0xef)]('li');if(d===this[Q(0xc6)])e['classList'][Q(0x101)]('selected');const f=document[Q(0xef)](Q(0xff));f['className']=Q(0xb0),f['style']['background']=c['color'],e['appendChild'](f);const g=document[Q(0xef)](Q(0xff));g[Q(0x102)]=''+(c['inset']?Q(0xb7):'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c['spread']+'px';if(!c['enabled'])g['classList'][Q(0x101)](Q(0xd4));e['appendChild'](g),e['onclick']=()=>{const R=Q;this['_selectedIndex']=d,this[R(0xce)](),this[R(0xf2)]();},this['_layerList'][Q(0xec)](e);});}['_loadControls'](){const S=z,c=this['_currentLayer']();this['_insetCheck'][S(0xdf)]=c['inset'],this['_enabledCheck']['checked']=c[S(0x107)],this[S(0xb2)]['value']=String(c[S(0xd3)]),this['_getDomElement']('bse-x-val')['textContent']=c[S(0xd3)]+'px',this[S(0xc9)][S(0xed)]=String(c['offsetY']),this[S(0x104)]('bse-y-val')['textContent']=c['offsetY']+'px',this[S(0xbf)]['value']=String(c[S(0xf3)]),this['_getDomElement']('bse-blur-val')['textContent']=c['blur']+'px',this['_inputSpread'][S(0xed)]=String(c['spread']),this['_getDomElement']('bse-spread-val')['textContent']=c['spread']+'px',this['_inputColor']['value']=c['color'],this['_inputOpacity']['value']=String(c[S(0xf8)]),this['_opacityVal']['textContent']=c['opacity']+'%';}[z(0xf6)](){const T=z;return this['_layers'][T(0xe7)](c=>c[T(0x107)])[T(0xd8)](layerToCss)[T(0xfe)](',\x20')||T(0xc4);}['_refresh'](){const U=z,c=this['_buildCss']();this['_previewBox'][U(0xd6)]['boxShadow']=c,this[U(0xbb)][U(0xed)]=U(0xcf)+c+';',this[U(0xce)]();}[z(0xc1)](){const V=z;if(!this[V(0xc3)])return;const c=this['_designerCanvas']['instanceServiceContainer']['selectionService'][V(0xf7)];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0][V(0xf9)](V(0xdc));for(const f of c){f['setStyle']('box-shadow',d);}e['commit']();}}customElements[z(0xe3)](z(0xba),BoxShadowEditorWindow);