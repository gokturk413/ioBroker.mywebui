const y=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1dc))/0x1+-parseInt(r(0x1f8))/0x2*(-parseInt(r(0x19b))/0x3)+-parseInt(r(0x1ae))/0x4+parseInt(r(0x19a))/0x5*(parseInt(r(0x1e3))/0x6)+-parseInt(r(0x1cf))/0x7*(parseInt(r(0x1e2))/0x8)+-parseInt(r(0x1b7))/0x9+parseInt(r(0x1fb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x91769));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x1ce)](f=>f[s(0x1d7)](0x10)[s(0x1f5)](0x2,'0'))[s(0x1e9)]('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c[t(0x199)];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d[t(0x1a3)](k);f='';continue;}}}f+=j;}const g=f[t(0x1bf)]();if(g)d['push'](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[u(0x1a3)](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d=v(0x1c9),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x197)](k,'')[v(0x1bf)]();const l=k['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[v(0x1f2)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][v(0x199)]===0x4?'#'+m[0x1]['slice'](0x1)['split']('')[v(0x1ce)](o=>o+o)['join'](''):m[0x1][v(0x1bd)](0x0,0x7),f=f[v(0x197)](m[0x1],'')[v(0x1bf)]());}const h=f[v(0x1b8)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o==='inset'){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function a(){const V=['offsetY','inset\x20','toString','bse-blur-val','filter','selectionService','value','342373ilzgts','classList','style','textContent','box-shadow','inset','403280vYtqeY','5821758ekDVGx','blur','bse-add-btn','windowTitle','innerHTML','_loadBtn','join','_selectedIndex','min','boxShadow','checked','px\x20rgba(','instanceServiceContainer','onchange','_copyBtn','round','bse-color','_loadControls','padStart','_insetCheck','_getDomElement','1160794ZMdOqj','disabled-label','bse-blur','10355490SypeuQ','commit','bse-y','background','replace','bse-x-val','length','5YQKOUb','3YtwDKw','openGroup','clipboard','spread','_duplicateLayer','_moveLayer','opacity','_designerCanvas','push','onclick','_refresh','_inputOpacity','_opacityVal','splice','px\x20','setStyle','define','_inputY','color','2184072DmCifm','_addLayer','offsetX','_applyToSelection','appendChild','createElement','_inputBlur','bse-inset','_previewBox','7196139dLIDog','split','span','bse-y-val','catch','_loadFromPrimarySelection','slice','toFixed','trim','enabled','_currentLayer','_renderList','_layers','bse-spread','_removeLayer','bse-opacity-val','_inputColor','_layerList','#000000','_removeBtn','bse-preview','_buildCss','bse-apply-btn','map','42BVOJWj','_inputX','primarySelection','_inputSpread','_enabledCheck','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>'];a=function(){return V;};return a();}function layerToCss(c){const w=b,d=hexToRgb(c[w(0x1ad)]),e=(c[w(0x1a1)]/0x64)[w(0x1be)](0x2);return''+(c['inset']?w(0x1d6):'')+c[w(0x1b0)]+w(0x1a9)+c[w(0x1d5)]+'px\x20'+c['blur']+'px\x20'+c['spread']+w(0x1ee)+d+','+e+')';}function hexToRgb(c){const x=b,d=parseInt(c[x(0x1bd)](0x1,0x3),0x10),e=parseInt(c[x(0x1bd)](0x3,0x5),0x10),f=parseInt(c[x(0x1bd)](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[y(0x1c8)];['_removeBtn'];['_insetCheck'];['_enabledCheck'];[y(0x1d0)];['_inputY'];['_inputBlur'];[y(0x1d2)];['_inputColor'];['_inputOpacity'];['_opacityVal'];[y(0x1b6)];['_cssOutput'];[y(0x1e8)];[y(0x1f1)];['_applyBtn'];get[y(0x1e6)](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const z=y;return z(0x1d4);}constructor(c){const A=y;super(c),this['_layerList']=this[A(0x1f7)]('bse-layer-list'),this['_removeBtn']=this[A(0x1f7)]('bse-remove-btn'),this[A(0x1f6)]=this['_getDomElement'](A(0x1b5)),this['_enabledCheck']=this['_getDomElement']('bse-enabled'),this[A(0x1d0)]=this[A(0x1f7)]('bse-x'),this['_inputY']=this['_getDomElement'](A(0x1fd)),this['_inputBlur']=this['_getDomElement'](A(0x1fa)),this[A(0x1d2)]=this['_getDomElement'](A(0x1c4)),this[A(0x1c7)]=this[A(0x1f7)](A(0x1f3)),this['_inputOpacity']=this['_getDomElement']('bse-opacity'),this[A(0x1a7)]=this['_getDomElement'](A(0x1c6)),this[A(0x1b6)]=this[A(0x1f7)](A(0x1cb)),this['_cssOutput']=this[A(0x1f7)]('bse-css-out'),this[A(0x1e8)]=this[A(0x1f7)]('bse-load-btn'),this['_copyBtn']=this[A(0x1f7)]('bse-copy-btn'),this['_applyBtn']=this[A(0x1f7)](A(0x1cd)),this[A(0x1f7)](A(0x1e5))['onclick']=()=>this['_addLayer'](),this['_getDomElement']('bse-dup-btn')[A(0x1a4)]=()=>this[A(0x19f)](),this['_getDomElement']('bse-up-btn')['onclick']=()=>this[A(0x1a0)](-0x1),this[A(0x1f7)]('bse-down-btn')['onclick']=()=>this[A(0x1a0)](0x1),this[A(0x1ca)][A(0x1a4)]=()=>this[A(0x1c5)](),this[A(0x1f6)][A(0x1f0)]=()=>{const B=A;this[B(0x1c1)]()[B(0x1e1)]=this['_insetCheck'][B(0x1ed)],this['_refresh']();},this['_enabledCheck']['onchange']=()=>{const C=A;this['_currentLayer']()['enabled']=this['_enabledCheck']['checked'],this[C(0x1a5)]();};for(const [d,e,f]of[[this[A(0x1d0)],A(0x1b0),A(0x198)],[this['_inputY'],'offsetY',A(0x1ba)],[this['_inputBlur'],A(0x1e4),A(0x1d8)],[this['_inputSpread'],A(0x19e),'bse-spread-val']]){d['oninput']=()=>{const D=A;this['_currentLayer']()[e]=Number(d[D(0x1db)]),this['_getDomElement'](f)['textContent']=d[D(0x1db)]+'px',this[D(0x1a5)]();};}this['_inputColor']['oninput']=()=>{const E=A;this[E(0x1c1)]()[E(0x1ad)]=this[E(0x1c7)][E(0x1db)],this[E(0x1a5)]();},this['_inputOpacity']['oninput']=()=>{const F=A;this['_currentLayer']()[F(0x1a1)]=Number(this['_inputOpacity']['value']),this['_opacityVal'][F(0x1df)]=this[F(0x1a6)][F(0x1db)]+'%',this[F(0x1a5)]();},this['_copyBtn']['onclick']=()=>{const G=A;navigator[G(0x19d)]?.['writeText'](this['_cssOutput']['value'])[G(0x1bb)](()=>{});},this['_applyBtn']['onclick']=()=>this[A(0x1b1)](),this[A(0x1e8)]['onclick']=()=>{const H=A;this[H(0x1bc)](),this['_renderList'](),this[H(0x1f4)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this[A(0x1c2)](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const I=y,c=this[I(0x1a2)]?.['instanceServiceContainer']?.[I(0x1da)]?.[I(0x1d1)];if(!c)return;const d=c['getStyle']('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[y(0x1c1)](){const J=y;return this[J(0x1c3)][this['_selectedIndex']];}[y(0x1af)](){const K=y;this['_layers'][K(0x1a3)](defaultLayer()),this[K(0x1ea)]=this[K(0x1c3)][K(0x199)]-0x1,this['_renderList'](),this['_loadControls'](),this[K(0x1a5)]();}[y(0x19f)](){const L=y,c={...this['_currentLayer']()};this[L(0x1c3)]['splice'](this[L(0x1ea)]+0x1,0x0,c),this['_selectedIndex']=this[L(0x1ea)]+0x1,this[L(0x1c2)](),this[L(0x1f4)](),this['_refresh']();}[y(0x1c5)](){const M=y;if(this['_layers'][M(0x199)]<=0x1)return;this[M(0x1c3)][M(0x1a8)](this[M(0x1ea)],0x1),this[M(0x1ea)]=Math[M(0x1eb)](this['_selectedIndex'],this['_layers']['length']-0x1),this[M(0x1c2)](),this[M(0x1f4)](),this[M(0x1a5)]();}[y(0x1a0)](c){const N=y,d=this[N(0x1ea)],e=d+c;if(e<0x0||e>=this[N(0x1c3)][N(0x199)])return;[this['_layers'][d],this['_layers'][e]]=[this[N(0x1c3)][e],this['_layers'][d]],this[N(0x1ea)]=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const O=y;this['_layerList'][O(0x1e7)]='',this['_layers']['forEach']((c,d)=>{const P=O,e=document[P(0x1b3)]('li');if(d===this[P(0x1ea)])e['classList']['add']('selected');const f=document['createElement'](P(0x1b9));f['className']='swatch',f[P(0x1de)][P(0x1fe)]=c['color'],e[P(0x1b2)](f);const g=document['createElement'](P(0x1b9));g['textContent']=''+(c['inset']?P(0x1d6):'')+c['offsetX']+'px\x20'+c['offsetY']+P(0x1a9)+c['blur']+'px\x20'+c[P(0x19e)]+'px';if(!c[P(0x1c0)])g[P(0x1dd)]['add'](P(0x1f9));e['appendChild'](g),e['onclick']=()=>{const Q=P;this[Q(0x1ea)]=d,this['_renderList'](),this['_loadControls']();},this['_layerList']['appendChild'](e);});}['_loadControls'](){const R=y,c=this[R(0x1c1)]();this['_insetCheck']['checked']=c['inset'],this[R(0x1d3)][R(0x1ed)]=c['enabled'],this['_inputX'][R(0x1db)]=String(c['offsetX']),this['_getDomElement']('bse-x-val')[R(0x1df)]=c[R(0x1b0)]+'px',this[R(0x1ac)][R(0x1db)]=String(c[R(0x1d5)]),this['_getDomElement']('bse-y-val')['textContent']=c[R(0x1d5)]+'px',this[R(0x1b4)]['value']=String(c[R(0x1e4)]),this[R(0x1f7)]('bse-blur-val')['textContent']=c[R(0x1e4)]+'px',this[R(0x1d2)]['value']=String(c['spread']),this[R(0x1f7)]('bse-spread-val')[R(0x1df)]=c[R(0x19e)]+'px',this[R(0x1c7)]['value']=c[R(0x1ad)],this['_inputOpacity'][R(0x1db)]=String(c[R(0x1a1)]),this[R(0x1a7)][R(0x1df)]=c['opacity']+'%';}[y(0x1cc)](){const S=y;return this['_layers'][S(0x1d9)](c=>c['enabled'])[S(0x1ce)](layerToCss)[S(0x1e9)](',\x20')||'none';}[y(0x1a5)](){const T=y,c=this[T(0x1cc)]();this['_previewBox']['style'][T(0x1ec)]=c,this['_cssOutput'][T(0x1db)]='box-shadow:\x20'+c+';',this['_renderList']();}[y(0x1b1)](){const U=y;if(!this[U(0x1a2)])return;const c=this['_designerCanvas'][U(0x1ef)][U(0x1da)]['selectedElements'];if(!c?.[U(0x199)])return;const d=this['_buildCss'](),e=c[0x0][U(0x19c)]('Apply\x20box-shadow');for(const f of c){f[U(0x1aa)](U(0x1e0),d);}e[U(0x1fc)]();}}function b(c,d){c=c-0x197;const e=a();let f=e[c];return f;}customElements[y(0x1ab)]('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);