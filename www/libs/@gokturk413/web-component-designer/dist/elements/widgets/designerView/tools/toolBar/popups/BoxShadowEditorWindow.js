const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x112))/0x1+-parseInt(r(0xfb))/0x2+parseInt(r(0xff))/0x3*(parseInt(r(0x13b))/0x4)+parseInt(r(0x15b))/0x5*(-parseInt(r(0x119))/0x6)+-parseInt(r(0x13f))/0x7+parseInt(r(0x157))/0x8*(-parseInt(r(0x134))/0x9)+parseInt(r(0x10c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd296));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x12f)](f=>f[s(0x100)](0x10)[s(0x156)](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0xf9)]();if(k)d[t(0x120)](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[t(0x120)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0x103))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e[u(0xf9)]());if(f)d[u(0x120)](f);}return d['length']?d:[defaultLayer()];}function b(c,d){c=c-0xf9;const e=a();let f=e[c];return f;}function parseOneShadowLayer(c){const v=b;let d=v(0x152),e=0x64,f=c;const g=f[v(0x144)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x114)](k,'')[v(0xf9)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f[v(0x144)](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1]['slice'](0x1)['split']('')['map'](o=>o+o)['join'](''):m[0x1][v(0x138)](0x0,0x7),f=f['replace'](m[0x1],'')[v(0xf9)]());}const h=f[v(0x11e)](/\s+/)[v(0x141)](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[v(0x120)](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c['color']),e=(c[w(0x124)]/0x64)['toFixed'](0x2);return''+(c['inset']?'inset\x20':'')+c[w(0x11a)]+w(0x126)+c[w(0x155)]+'px\x20'+c['blur']+'px\x20'+c['spread']+'px\x20rgba('+d+','+e+')';}function a(){const T=['_previewBox','_enabledCheck','616563JgsPfa','_removeBtn','writeText','_duplicateLayer','slice','bse-spread-val','bse-color','48aZnEeL','_currentLayer','bse-spread','spread','129612yaVhKo','bse-enabled','filter','_copyBtn','bse-up-btn','match','checked','_addLayer','_cssOutput','_inputOpacity','splice','classList','_removeLayer','catch','join','_inputY','commit','_opacityVal','background','#000000','_applyBtn','bse-inset','offsetY','padStart','40HFISia','_getDomElement','onchange','color','11345VpTnei','_inputBlur','bse-x','trim','_selectedIndex','2843332ieQkhS','onclick','box-shadow','textContent','419469uXlJmz','toString','_refresh','style','none','_designerCanvas','_inputSpread','_buildCss','bse-add-btn','inset\x20','_loadBtn','_renderList','bse-apply-btn','27062900QrUZbU','add','_layers','oninput','enabled','bse-blur-val','606186uVEPvG','length','replace','appendChild','boxShadow','className','box-shadow:\x20','3054oIPtLY','offsetX','bse-y','primarySelection','_inputColor','split','_moveLayer','push','value','_loadControls','bse-x-val','opacity','inset','px\x20','span','_insetCheck','clipboard','_layerList','selected','createElement','define','node-projects-designer-box-shadow-editor','map','windowContentStyle','bse-down-btn'];a=function(){return T;};return a();}function hexToRgb(c){const x=b,d=parseInt(c[x(0x138)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[y(0x10e)]=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];['_removeBtn'];[y(0x128)];[y(0x133)];['_inputX'];[y(0x14e)];[y(0x15c)];['_inputSpread'];['_inputColor'];[y(0x148)];[y(0x150)];[y(0x132)];[y(0x147)];[y(0x109)];['_copyBtn'];['_applyBtn'];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get[y(0x130)](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const z=y;super(c),this['_layerList']=this['_getDomElement']('bse-layer-list'),this[z(0x135)]=this['_getDomElement']('bse-remove-btn'),this['_insetCheck']=this[z(0x158)](z(0x154)),this['_enabledCheck']=this['_getDomElement'](z(0x140)),this['_inputX']=this['_getDomElement'](z(0x15d)),this['_inputY']=this['_getDomElement'](z(0x11b)),this[z(0x15c)]=this['_getDomElement']('bse-blur'),this[z(0x105)]=this[z(0x158)](z(0x13d)),this[z(0x11d)]=this[z(0x158)](z(0x13a)),this[z(0x148)]=this['_getDomElement']('bse-opacity'),this[z(0x150)]=this[z(0x158)]('bse-opacity-val'),this[z(0x132)]=this[z(0x158)]('bse-preview'),this[z(0x147)]=this[z(0x158)]('bse-css-out'),this['_loadBtn']=this['_getDomElement']('bse-load-btn'),this[z(0x142)]=this['_getDomElement']('bse-copy-btn'),this[z(0x153)]=this[z(0x158)](z(0x10b)),this[z(0x158)](z(0x107))['onclick']=()=>this[z(0x146)](),this['_getDomElement']('bse-dup-btn')['onclick']=()=>this[z(0x137)](),this[z(0x158)](z(0x143))[z(0xfc)]=()=>this[z(0x11f)](-0x1),this['_getDomElement'](z(0x131))['onclick']=()=>this['_moveLayer'](0x1),this[z(0x135)]['onclick']=()=>this[z(0x14b)](),this['_insetCheck'][z(0x159)]=()=>{const A=z;this[A(0x13c)]()['inset']=this['_insetCheck'][A(0x145)],this['_refresh']();},this[z(0x133)][z(0x159)]=()=>{const B=z;this['_currentLayer']()['enabled']=this[B(0x133)][B(0x145)],this[B(0x101)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX',z(0x123)],[this['_inputY'],'offsetY','bse-y-val'],[this['_inputBlur'],'blur','bse-blur-val'],[this[z(0x105)],'spread',z(0x139)]]){d['oninput']=()=>{const C=z;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)[C(0xfe)]=d[C(0x121)]+'px',this[C(0x101)]();};}this[z(0x11d)]['oninput']=()=>{const D=z;this[D(0x13c)]()[D(0x15a)]=this['_inputColor']['value'],this['_refresh']();},this['_inputOpacity'][z(0x10f)]=()=>{const E=z;this['_currentLayer']()[E(0x124)]=Number(this['_inputOpacity']['value']),this[E(0x150)]['textContent']=this[E(0x148)]['value']+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const F=z;navigator[F(0x129)]?.[F(0x136)](this[F(0x147)][F(0x121)])[F(0x14c)](()=>{});},this['_applyBtn'][z(0xfc)]=()=>this['_applyToSelection'](),this[z(0x109)]['onclick']=()=>{const G=z;this['_loadFromPrimarySelection'](),this[G(0x10a)](),this['_loadControls'](),this[G(0x101)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this[z(0x122)](),this['_refresh']();}['_loadFromPrimarySelection'](){const H=y,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.[H(0x11c)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this[H(0x10e)]=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}[y(0x146)](){const I=y;this[I(0x10e)][I(0x120)](defaultLayer()),this[I(0xfa)]=this['_layers']['length']-0x1,this[I(0x10a)](),this['_loadControls'](),this['_refresh']();}[y(0x137)](){const J=y,c={...this[J(0x13c)]()};this['_layers']['splice'](this[J(0xfa)]+0x1,0x0,c),this['_selectedIndex']=this[J(0xfa)]+0x1,this['_renderList'](),this['_loadControls'](),this[J(0x101)]();}[y(0x14b)](){const K=y;if(this[K(0x10e)]['length']<=0x1)return;this[K(0x10e)][K(0x149)](this['_selectedIndex'],0x1),this['_selectedIndex']=Math['min'](this[K(0xfa)],this['_layers']['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const L=y,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers'][L(0x113)])return;[this['_layers'][d],this['_layers'][e]]=[this['_layers'][e],this['_layers'][d]],this[L(0xfa)]=e,this[L(0x10a)](),this['_refresh']();}[y(0x10a)](){const M=y;this[M(0x12a)]['innerHTML']='',this[M(0x10e)]['forEach']((c,d)=>{const N=M,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList']['add'](N(0x12b));const f=document[N(0x12c)](N(0x127));f[N(0x117)]='swatch',f[N(0x102)][N(0x151)]=c['color'],e['appendChild'](f);const g=document[N(0x12c)]('span');g[N(0xfe)]=''+(c[N(0x125)]?N(0x108):'')+c[N(0x11a)]+N(0x126)+c['offsetY']+'px\x20'+c['blur']+N(0x126)+c['spread']+'px';if(!c['enabled'])g[N(0x14a)][N(0x10d)]('disabled-label');e[N(0x115)](g),e[N(0xfc)]=()=>{const O=N;this['_selectedIndex']=d,this['_renderList'](),this[O(0x122)]();},this[N(0x12a)]['appendChild'](e);});}[y(0x122)](){const P=y,c=this['_currentLayer']();this[P(0x128)]['checked']=c['inset'],this['_enabledCheck']['checked']=c['enabled'],this['_inputX']['value']=String(c[P(0x11a)]),this['_getDomElement'](P(0x123))['textContent']=c[P(0x11a)]+'px',this['_inputY']['value']=String(c['offsetY']),this[P(0x158)]('bse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this['_getDomElement'](P(0x111))['textContent']=c['blur']+'px',this['_inputSpread'][P(0x121)]=String(c[P(0x13e)]),this[P(0x158)]('bse-spread-val')['textContent']=c['spread']+'px',this[P(0x11d)]['value']=c[P(0x15a)],this[P(0x148)][P(0x121)]=String(c[P(0x124)]),this[P(0x150)][P(0xfe)]=c['opacity']+'%';}[y(0x106)](){const Q=y;return this[Q(0x10e)][Q(0x141)](c=>c[Q(0x110)])['map'](layerToCss)[Q(0x14d)](',\x20')||Q(0x103);}['_refresh'](){const R=y,c=this['_buildCss']();this[R(0x132)]['style'][R(0x116)]=c,this[R(0x147)][R(0x121)]=R(0x118)+c+';',this['_renderList']();}['_applyToSelection'](){const S=y;if(!this[S(0x104)])return;const c=this[S(0x104)]['instanceServiceContainer']['selectionService']['selectedElements'];if(!c?.[S(0x113)])return;const d=this['_buildCss'](),e=c[0x0]['openGroup']('Apply\x20box-shadow');for(const f of c){f['setStyle'](S(0xfd),d);}e[S(0x14f)]();}}customElements[y(0x12d)](y(0x12e),BoxShadowEditorWindow);