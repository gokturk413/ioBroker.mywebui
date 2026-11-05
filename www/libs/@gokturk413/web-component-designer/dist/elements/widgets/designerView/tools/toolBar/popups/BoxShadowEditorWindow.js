const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1c6))/0x1*(parseInt(r(0x1b9))/0x2)+parseInt(r(0x1be))/0x3+parseInt(r(0x1c1))/0x4+-parseInt(r(0x1b1))/0x5+-parseInt(r(0x1ca))/0x6+-parseInt(r(0x193))/0x7+-parseInt(r(0x1c2))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbffc5));function b(c,d){c=c-0x17d;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x17d)](f=>f['toString'](0x10)['padStart'](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[t(0x1da)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0x19b)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[t(0x181)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0x195))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0x19b)]());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0x184),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')['trim']();const l=k[v(0x1cc)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[v(0x18e)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x1cc)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)['split']('')[v(0x17d)](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f['split'](/\s+/)[v(0x1bb)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function a(){const V=['2606008eynSkM','5048528TUmXiw','_getDomElement','span','setStyle','9057ssSTHi','_buildCss','bse-opacity-val','opacity','6732732QEuZQs','inset','match','_duplicateLayer','bse-css-out','_applyBtn','inset\x20','className','_layerList','_addLayer','box-shadow:\x20','bse-inset','_enabledCheck','color','_currentLayer','bse-opacity','length','onchange','bse-up-btn','add','_applyToSelection','_layers','map','bse-color','openGroup','_inputSpread','push','box-shadow','bse-y','#000000','_removeLayer','_selectedIndex','bse-preview','bse-copy-btn','bse-y-val','windowTitle','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','_designerCanvas','selectedElements','round','Box\x20Shadow\x20Editor','_removeBtn','enabled','_insetCheck','2032436wspSeQ','appendChild','none','_inputX','_renderList','_inputY','slice','_moveLayer','trim','selectionService','instanceServiceContainer','checked','bse-load-btn','_refresh','textContent','selected','offsetY','_previewBox','bse-spread','_inputOpacity','bse-x-val','value','offsetX','swatch','bse-layer-list','bse-apply-btn','_cssOutput','blur','onclick','bse-blur','366955kRcSoa','createElement','splice','spread','_copyBtn','windowTemplate','_inputColor','toFixed','274rhTRdC','oninput','filter','forEach','_loadControls','3032967KjdGJf','_loadFromPrimarySelection','px\x20'];a=function(){return V;};return a();}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c[w(0x1c9)]/0x64)[w(0x1b8)](0x2);return''+(c['inset']?w(0x1d0):'')+c['offsetX']+w(0x1c0)+c['offsetY']+'px\x20'+c['blur']+w(0x1c0)+c[w(0x1b4)]+'px\x20rgba('+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c[x(0x199)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];[y(0x190)];['_insetCheck'];[y(0x1d6)];['_inputX'];[y(0x198)];['_inputBlur'];[y(0x180)];['_inputColor'];[y(0x1a6)];['_opacityVal'];['_previewBox'];['_cssOutput'];['_loadBtn'];[y(0x1b5)];[y(0x1cf)];get[y(0x18a)](){const z=y;return z(0x18f);}get['windowContentStyle'](){return css`
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
    `;}get[y(0x1b6)](){const A=y;return A(0x18b);}constructor(c){const B=y;super(c),this[B(0x1d2)]=this['_getDomElement'](B(0x1ab)),this[B(0x190)]=this['_getDomElement']('bse-remove-btn'),this[B(0x192)]=this['_getDomElement'](B(0x1d5)),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this[B(0x196)]=this['_getDomElement']('bse-x'),this['_inputY']=this['_getDomElement'](B(0x183)),this['_inputBlur']=this['_getDomElement'](B(0x1b0)),this['_inputSpread']=this['_getDomElement'](B(0x1a5)),this['_inputColor']=this[B(0x1c3)](B(0x17e)),this['_inputOpacity']=this[B(0x1c3)](B(0x1d9)),this['_opacityVal']=this['_getDomElement'](B(0x1c8)),this['_previewBox']=this[B(0x1c3)](B(0x187)),this[B(0x1ad)]=this['_getDomElement'](B(0x1ce)),this['_loadBtn']=this['_getDomElement'](B(0x19f)),this[B(0x1b5)]=this[B(0x1c3)](B(0x188)),this[B(0x1cf)]=this[B(0x1c3)](B(0x1ac)),this[B(0x1c3)]('bse-add-btn')[B(0x1af)]=()=>this[B(0x1d3)](),this[B(0x1c3)]('bse-dup-btn')[B(0x1af)]=()=>this[B(0x1cd)](),this['_getDomElement'](B(0x1dc))['onclick']=()=>this[B(0x19a)](-0x1),this[B(0x1c3)]('bse-down-btn')[B(0x1af)]=()=>this[B(0x19a)](0x1),this['_removeBtn']['onclick']=()=>this[B(0x185)](),this['_insetCheck']['onchange']=()=>{const C=B;this['_currentLayer']()['inset']=this[C(0x192)][C(0x19e)],this[C(0x1a0)]();},this['_enabledCheck'][B(0x1db)]=()=>{const D=B;this[D(0x1d8)]()['enabled']=this['_enabledCheck'][D(0x19e)],this['_refresh']();};for(const [d,e,f]of[[this[B(0x196)],B(0x1a9),'bse-x-val'],[this['_inputY'],'offsetY',B(0x189)],[this['_inputBlur'],B(0x1ae),'bse-blur-val'],[this['_inputSpread'],B(0x1b4),'bse-spread-val']]){d[B(0x1ba)]=()=>{const E=B;this[E(0x1d8)]()[e]=Number(d['value']),this['_getDomElement'](f)[E(0x1a1)]=d['value']+'px',this[E(0x1a0)]();};}this[B(0x1b7)]['oninput']=()=>{const F=B;this[F(0x1d8)]()[F(0x1d7)]=this[F(0x1b7)]['value'],this['_refresh']();},this['_inputOpacity']['oninput']=()=>{const G=B;this[G(0x1d8)]()[G(0x1c9)]=Number(this[G(0x1a6)]['value']),this['_opacityVal']['textContent']=this[G(0x1a6)][G(0x1a8)]+'%',this[G(0x1a0)]();},this['_copyBtn'][B(0x1af)]=()=>{const H=B;navigator['clipboard']?.['writeText'](this[H(0x1ad)]['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this[B(0x1de)](),this['_loadBtn'][B(0x1af)]=()=>{const I=B;this['_loadFromPrimarySelection'](),this[I(0x197)](),this['_loadControls'](),this['_refresh']();},this['_loadFromPrimarySelection'](),this[B(0x197)](),this['_loadControls'](),this[B(0x1a0)]();}[y(0x1bf)](){const J=y,c=this[J(0x18c)]?.['instanceServiceContainer']?.[J(0x19c)]?.['primarySelection'];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this[J(0x1df)]=parseCssBoxShadow(d),this[J(0x186)]=0x0);}[y(0x1d8)](){const K=y;return this[K(0x1df)][this[K(0x186)]];}['_addLayer'](){const L=y;this['_layers'][L(0x181)](defaultLayer()),this[L(0x186)]=this[L(0x1df)][L(0x1da)]-0x1,this[L(0x197)](),this[L(0x1bd)](),this['_refresh']();}['_duplicateLayer'](){const M=y,c={...this[M(0x1d8)]()};this['_layers'][M(0x1b3)](this['_selectedIndex']+0x1,0x0,c),this['_selectedIndex']=this[M(0x186)]+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[y(0x185)](){const N=y;if(this[N(0x1df)][N(0x1da)]<=0x1)return;this['_layers'][N(0x1b3)](this[N(0x186)],0x1),this[N(0x186)]=Math['min'](this[N(0x186)],this['_layers'][N(0x1da)]-0x1),this['_renderList'](),this[N(0x1bd)](),this[N(0x1a0)]();}[y(0x19a)](c){const O=y,d=this[O(0x186)],e=d+c;if(e<0x0||e>=this['_layers'][O(0x1da)])return;[this['_layers'][d],this['_layers'][e]]=[this[O(0x1df)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this[O(0x1a0)]();}['_renderList'](){const P=y;this[P(0x1d2)]['innerHTML']='',this[P(0x1df)][P(0x1bc)]((c,d)=>{const Q=P,e=document[Q(0x1b2)]('li');if(d===this['_selectedIndex'])e['classList']['add'](Q(0x1a2));const f=document[Q(0x1b2)](Q(0x1c4));f[Q(0x1d1)]=Q(0x1aa),f['style']['background']=c[Q(0x1d7)],e[Q(0x194)](f);const g=document['createElement']('span');g['textContent']=''+(c['inset']?'inset\x20':'')+c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20'+c['spread']+'px';if(!c[Q(0x191)])g['classList'][Q(0x1dd)]('disabled-label');e[Q(0x194)](g),e['onclick']=()=>{const R=Q;this[R(0x186)]=d,this['_renderList'](),this['_loadControls']();},this[Q(0x1d2)][Q(0x194)](e);});}[y(0x1bd)](){const S=y,c=this['_currentLayer']();this[S(0x192)]['checked']=c[S(0x1cb)],this[S(0x1d6)]['checked']=c[S(0x191)],this[S(0x196)][S(0x1a8)]=String(c['offsetX']),this[S(0x1c3)](S(0x1a7))['textContent']=c[S(0x1a9)]+'px',this[S(0x198)][S(0x1a8)]=String(c['offsetY']),this['_getDomElement'](S(0x189))[S(0x1a1)]=c[S(0x1a3)]+'px',this['_inputBlur'][S(0x1a8)]=String(c[S(0x1ae)]),this[S(0x1c3)]('bse-blur-val')[S(0x1a1)]=c[S(0x1ae)]+'px',this[S(0x180)]['value']=String(c['spread']),this[S(0x1c3)]('bse-spread-val')[S(0x1a1)]=c[S(0x1b4)]+'px',this[S(0x1b7)][S(0x1a8)]=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this['_opacityVal']['textContent']=c['opacity']+'%';}['_buildCss'](){return this['_layers']['filter'](c=>c['enabled'])['map'](layerToCss)['join'](',\x20')||'none';}['_refresh'](){const T=y,c=this[T(0x1c7)]();this[T(0x1a4)]['style']['boxShadow']=c,this['_cssOutput'][T(0x1a8)]=T(0x1d4)+c+';',this[T(0x197)]();}['_applyToSelection'](){const U=y;if(!this[U(0x18c)])return;const c=this['_designerCanvas'][U(0x19d)]['selectionService'][U(0x18d)];if(!c?.[U(0x1da)])return;const d=this[U(0x1c7)](),e=c[0x0][U(0x17f)]('Apply\x20box-shadow');for(const f of c){f[U(0x1c5)](U(0x182),d);}e['commit']();}}customElements['define']('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);