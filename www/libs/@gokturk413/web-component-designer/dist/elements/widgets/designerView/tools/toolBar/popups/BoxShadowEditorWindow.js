const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x141))/0x1+-parseInt(r(0x14f))/0x2+parseInt(r(0x137))/0x3+parseInt(r(0x161))/0x4+-parseInt(r(0x123))/0x5*(-parseInt(r(0x11a))/0x6)+parseInt(r(0x11b))/0x7+parseInt(r(0x120))/0x8*(-parseInt(r(0x129))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8d9e7));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x15a)](f=>f['toString'](0x10)['padStart'](0x2,'0'))[s(0x125)]('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[t(0x16c)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0x16b)]();if(k)d[t(0x15c)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0x14d))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0x16b)]());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f[v(0x13d)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f['replace'](k,'')['trim']();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[v(0x16d)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x13d)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)[v(0x127)]('')[v(0x15a)](o=>o+o)[v(0x125)](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f[v(0x127)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===v(0x122)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[v(0x15c)](q);}if(j[v(0x16c)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function b(c,d){c=c-0x11a;const e=a();let f=e[c];return f;}function layerToCss(c){const w=b,d=hexToRgb(c[w(0x12e)]),e=(c[w(0x166)]/0x64)['toFixed'](0x2);return''+(c['inset']?w(0x143):'')+c[w(0x121)]+w(0x16a)+c['offsetY']+'px\x20'+c['blur']+w(0x16a)+c[w(0x134)]+w(0x148)+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c[x(0x11e)](0x1,0x3),0x10),e=parseInt(c[x(0x11e)](0x3,0x5),0x10),f=parseInt(c[x(0x11e)](0x5,0x7),0x10);return d+','+e+','+f;}function a(){const V=['blur','none','_loadFromPrimarySelection','69420mIZGvM','selectionService','onclick','background','_enabledCheck','_designerCanvas','bse-layer-list','createElement','min','setStyle','appendChild','map','bse-enabled','push','_opacityVal','oninput','_insetCheck','bse-blur','1923428SLWTtP','_getDomElement','_cssOutput','bse-remove-btn','_copyBtn','opacity','_currentLayer','_inputY','swatch','px\x20','trim','length','round','writeText','_duplicateLayer','_inputBlur','_applyBtn','style','_removeLayer','span','_refresh','bse-y','_renderList','bse-apply-btn','checked','onchange','6eQXrNn','4101412Iuvqtv','_addLayer','bse-x-val','slice','_layers','214040wslJEJ','offsetX','inset','5053105KKOseL','_inputOpacity','join','_layerList','split','node-projects-designer-box-shadow-editor','333BPlfpV','instanceServiceContainer','windowTitle','bse-y-val','clipboard','color','add','offsetY','box-shadow:\x20','_applyToSelection','_inputX','spread','_selectedIndex','textContent','1410120XmcArd','_loadControls','bse-blur-val','_inputColor','_buildCss','value','match','windowContentStyle','bse-opacity','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','942718ddsfOQ','_previewBox','inset\x20','bse-copy-btn','_inputSpread','bse-css-out','splice','px\x20rgba(','bse-add-btn','classList','innerHTML'];a=function(){return V;};return a();}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];['_removeBtn'];[y(0x15f)];['_enabledCheck'];['_inputX'];[y(0x168)];[y(0x170)];['_inputSpread'];['_inputColor'];['_inputOpacity'];['_opacityVal'];[y(0x142)];['_cssOutput'];['_loadBtn'];['_copyBtn'];[y(0x171)];get[y(0x12b)](){return'Box\x20Shadow\x20Editor';}get[y(0x13e)](){return css`
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
    `;}get['windowTemplate'](){const z=y;return z(0x140);}constructor(c){const A=y;super(c),this[A(0x126)]=this[A(0x162)](A(0x155)),this['_removeBtn']=this['_getDomElement'](A(0x164)),this['_insetCheck']=this['_getDomElement']('bse-inset'),this['_enabledCheck']=this[A(0x162)](A(0x15b)),this['_inputX']=this[A(0x162)]('bse-x'),this[A(0x168)]=this['_getDomElement'](A(0x176)),this[A(0x170)]=this[A(0x162)](A(0x160)),this[A(0x145)]=this[A(0x162)]('bse-spread'),this['_inputColor']=this[A(0x162)]('bse-color'),this[A(0x124)]=this[A(0x162)](A(0x13f)),this[A(0x15d)]=this[A(0x162)]('bse-opacity-val'),this['_previewBox']=this['_getDomElement']('bse-preview'),this['_cssOutput']=this[A(0x162)](A(0x146)),this['_loadBtn']=this['_getDomElement']('bse-load-btn'),this[A(0x165)]=this['_getDomElement'](A(0x144)),this['_applyBtn']=this['_getDomElement'](A(0x178)),this['_getDomElement'](A(0x149))['onclick']=()=>this['_addLayer'](),this['_getDomElement']('bse-dup-btn')[A(0x151)]=()=>this['_duplicateLayer'](),this['_getDomElement']('bse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this[A(0x162)]('bse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this['_insetCheck']['onchange']=()=>{const B=A;this[B(0x167)]()['inset']=this['_insetCheck'][B(0x179)],this[B(0x175)]();},this[A(0x153)][A(0x17a)]=()=>{const C=A;this['_currentLayer']()['enabled']=this[C(0x153)][C(0x179)],this[C(0x175)]();};for(const [d,e,f]of[[this[A(0x133)],'offsetX',A(0x11d)],[this[A(0x168)],'offsetY','bse-y-val'],[this[A(0x170)],A(0x14c),A(0x139)],[this['_inputSpread'],A(0x134),'bse-spread-val']]){d['oninput']=()=>{const D=A;this['_currentLayer']()[e]=Number(d['value']),this[D(0x162)](f)['textContent']=d['value']+'px',this['_refresh']();};}this[A(0x13a)]['oninput']=()=>{const E=A;this[E(0x167)]()[E(0x12e)]=this[E(0x13a)]['value'],this['_refresh']();},this[A(0x124)][A(0x15e)]=()=>{const F=A;this[F(0x167)]()['opacity']=Number(this['_inputOpacity'][F(0x13c)]),this[F(0x15d)][F(0x136)]=this[F(0x124)][F(0x13c)]+'%',this['_refresh']();},this[A(0x165)][A(0x151)]=()=>{const G=A;navigator[G(0x12d)]?.[G(0x16e)](this['_cssOutput']['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this['_loadBtn'][A(0x151)]=()=>{const H=A;this['_loadFromPrimarySelection'](),this['_renderList'](),this[H(0x138)](),this[H(0x175)]();},this[A(0x14e)](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const I=y,c=this['_designerCanvas']?.[I(0x12a)]?.['selectionService']?.['primarySelection'];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[y(0x167)](){const J=y;return this[J(0x11f)][this[J(0x135)]];}[y(0x11c)](){const K=y;this['_layers'][K(0x15c)](defaultLayer()),this[K(0x135)]=this[K(0x11f)][K(0x16c)]-0x1,this['_renderList'](),this[K(0x138)](),this['_refresh']();}[y(0x16f)](){const L=y,c={...this['_currentLayer']()};this['_layers'][L(0x147)](this[L(0x135)]+0x1,0x0,c),this[L(0x135)]=this['_selectedIndex']+0x1,this['_renderList'](),this[L(0x138)](),this[L(0x175)]();}[y(0x173)](){const M=y;if(this['_layers']['length']<=0x1)return;this['_layers']['splice'](this[M(0x135)],0x1),this[M(0x135)]=Math[M(0x157)](this['_selectedIndex'],this[M(0x11f)]['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const N=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[N(0x11f)]['length'])return;[this['_layers'][d],this[N(0x11f)][e]]=[this[N(0x11f)][e],this[N(0x11f)][d]],this[N(0x135)]=e,this['_renderList'](),this[N(0x175)]();}[y(0x177)](){const O=y;this['_layerList'][O(0x14b)]='',this['_layers']['forEach']((c,d)=>{const P=O,e=document[P(0x156)]('li');if(d===this[P(0x135)])e['classList'][P(0x12f)]('selected');const f=document['createElement'](P(0x174));f['className']=P(0x169),f[P(0x172)][P(0x152)]=c['color'],e[P(0x159)](f);const g=document['createElement'](P(0x174));g[P(0x136)]=''+(c[P(0x122)]?'inset\x20':'')+c[P(0x121)]+'px\x20'+c[P(0x130)]+P(0x16a)+c['blur']+P(0x16a)+c['spread']+'px';if(!c['enabled'])g[P(0x14a)][P(0x12f)]('disabled-label');e['appendChild'](g),e[P(0x151)]=()=>{const Q=P;this[Q(0x135)]=d,this['_renderList'](),this['_loadControls']();},this['_layerList'][P(0x159)](e);});}['_loadControls'](){const R=y,c=this[R(0x167)]();this['_insetCheck'][R(0x179)]=c[R(0x122)],this['_enabledCheck']['checked']=c['enabled'],this[R(0x133)][R(0x13c)]=String(c['offsetX']),this['_getDomElement']('bse-x-val')['textContent']=c['offsetX']+'px',this[R(0x168)]['value']=String(c['offsetY']),this['_getDomElement'](R(0x12c))['textContent']=c['offsetY']+'px',this[R(0x170)]['value']=String(c['blur']),this['_getDomElement']('bse-blur-val')['textContent']=c[R(0x14c)]+'px',this['_inputSpread']['value']=String(c[R(0x134)]),this['_getDomElement']('bse-spread-val')['textContent']=c['spread']+'px',this['_inputColor']['value']=c[R(0x12e)],this['_inputOpacity']['value']=String(c[R(0x166)]),this['_opacityVal']['textContent']=c['opacity']+'%';}[y(0x13b)](){const S=y;return this['_layers']['filter'](c=>c['enabled'])[S(0x15a)](layerToCss)[S(0x125)](',\x20')||S(0x14d);}['_refresh'](){const T=y,c=this[T(0x13b)]();this['_previewBox'][T(0x172)]['boxShadow']=c,this[T(0x163)]['value']=T(0x131)+c+';',this['_renderList']();}[y(0x132)](){const U=y;if(!this[U(0x154)])return;const c=this[U(0x154)][U(0x12a)][U(0x150)]['selectedElements'];if(!c?.[U(0x16c)])return;const d=this[U(0x13b)](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f[U(0x158)]('box-shadow',d);}e['commit']();}}customElements['define'](y(0x128),BoxShadowEditorWindow);