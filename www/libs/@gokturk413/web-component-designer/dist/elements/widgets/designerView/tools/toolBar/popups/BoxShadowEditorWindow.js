const x=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x204))/0x1+parseInt(r(0x210))/0x2*(parseInt(r(0x216))/0x3)+parseInt(r(0x1fa))/0x4+-parseInt(r(0x208))/0x5+-parseInt(r(0x1c1))/0x6*(parseInt(r(0x1d2))/0x7)+parseInt(r(0x1fc))/0x8*(parseInt(r(0x217))/0x9)+-parseInt(r(0x1d1))/0xa*(-parseInt(r(0x1f3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x33411));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function b(c,d){c=c-0x1b9;const e=a();let f=e[c];return f;}function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e]['map'](f=>f[s(0x1f6)](0x10)[s(0x1fd)](0x2,'0'))[s(0x1e3)]('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f[t(0x1da)]();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f['trim']();if(g)d[t(0x1c9)](g);return d;}function parseCssBoxShadow(c){if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneShadowLayer(c){const u=b;let d=u(0x1fb),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[u(0x1c0)](k,'')[u(0x1da)]();const l=k[u(0x1c7)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math['round'](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1]['length']===0x4?'#'+m[0x1][u(0x1f4)](0x1)['split']('')['map'](o=>o+o)['join'](''):m[0x1]['slice'](0x0,0x7),f=f['replace'](m[0x1],'')['trim']());}const h=f['split'](/\s+/)[u(0x1e8)](Boolean);let i=![];const j=[];for(const o of h){if(o===u(0x1be)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j[u(0x1c9)](q);}if(j['length']<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const v=b,d=hexToRgb(c[v(0x20b)]),e=(c[v(0x1f5)]/0x64)[v(0x1e4)](0x2);return''+(c[v(0x1be)]?'inset\x20':'')+c['offsetX']+v(0x1cf)+c['offsetY']+v(0x1cf)+c['blur']+'px\x20'+c['spread']+v(0x1bc)+d+','+e+')';}function hexToRgb(c){const w=b,d=parseInt(c[w(0x1f4)](0x1,0x3),0x10),e=parseInt(c[w(0x1f4)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}export class BoxShadowEditorWindow extends DraggableToolWindow{[x(0x1cb)]=[defaultLayer()];['_selectedIndex']=0x0;[x(0x20a)];['_removeBtn'];['_insetCheck'];[x(0x1cd)];['_inputX'];[x(0x213)];[x(0x1ef)];[x(0x1dd)];[x(0x207)];[x(0x1c8)];[x(0x1ea)];[x(0x1e0)];['_cssOutput'];[x(0x1f2)];[x(0x1c2)];['_applyBtn'];get['windowTitle'](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const y=x;super(c),this['_layerList']=this[y(0x1d8)](y(0x1b9)),this[y(0x1e6)]=this[y(0x1d8)](y(0x1e1)),this['_insetCheck']=this['_getDomElement']('bse-inset'),this[y(0x1cd)]=this['_getDomElement'](y(0x205)),this['_inputX']=this['_getDomElement'](y(0x20d)),this['_inputY']=this[y(0x1d8)]('bse-y'),this['_inputBlur']=this['_getDomElement'](y(0x1d9)),this['_inputSpread']=this['_getDomElement']('bse-spread'),this['_inputColor']=this['_getDomElement']('bse-color'),this['_inputOpacity']=this[y(0x1d8)](y(0x1df)),this[y(0x1ea)]=this[y(0x1d8)](y(0x206)),this[y(0x1e0)]=this[y(0x1d8)]('bse-preview'),this[y(0x1cc)]=this[y(0x1d8)](y(0x1e2)),this[y(0x1f2)]=this['_getDomElement']('bse-load-btn'),this[y(0x1c2)]=this['_getDomElement'](y(0x1d5)),this[y(0x1ff)]=this[y(0x1d8)]('bse-apply-btn'),this[y(0x1d8)]('bse-add-btn')[y(0x1e5)]=()=>this[y(0x214)](),this[y(0x1d8)](y(0x1f1))[y(0x1e5)]=()=>this['_duplicateLayer'](),this[y(0x1d8)]('bse-up-btn')[y(0x1e5)]=()=>this['_moveLayer'](-0x1),this['_getDomElement']('bse-down-btn')[y(0x1e5)]=()=>this['_moveLayer'](0x1),this['_removeBtn'][y(0x1e5)]=()=>this[y(0x1ce)](),this['_insetCheck']['onchange']=()=>{const z=y;this[z(0x1c3)]()[z(0x1be)]=this['_insetCheck']['checked'],this['_refresh']();},this['_enabledCheck']['onchange']=()=>{const A=y;this[A(0x1c3)]()['enabled']=this['_enabledCheck']['checked'],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],'offsetX',y(0x211)],[this[y(0x213)],y(0x1c4),'bse-y-val'],[this[y(0x1ef)],'blur','bse-blur-val'],[this['_inputSpread'],y(0x1eb),y(0x20c)]]){d[y(0x202)]=()=>{const B=y;this['_currentLayer']()[e]=Number(d['value']),this[B(0x1d8)](f)['textContent']=d['value']+'px',this[B(0x1fe)]();};}this['_inputColor']['oninput']=()=>{const C=y;this[C(0x1c3)]()[C(0x20b)]=this['_inputColor'][C(0x1e9)],this['_refresh']();},this[y(0x1c8)]['oninput']=()=>{const D=y;this['_currentLayer']()['opacity']=Number(this[D(0x1c8)][D(0x1e9)]),this['_opacityVal'][D(0x1d7)]=this[D(0x1c8)][D(0x1e9)]+'%',this[D(0x1fe)]();},this[y(0x1c2)][y(0x1e5)]=()=>{const E=y;navigator['clipboard']?.[E(0x1ee)](this['_cssOutput']['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this['_loadBtn']['onclick']=()=>{const F=y;this['_loadFromPrimarySelection'](),this['_renderList'](),this[F(0x1bb)](),this['_refresh']();},this[y(0x1ba)](),this['_renderList'](),this[y(0x1bb)](),this['_refresh']();}[x(0x1ba)](){const G=x,c=this['_designerCanvas']?.[G(0x1e7)]?.['selectionService']?.[G(0x1c5)];if(!c)return;const d=c[G(0x20e)]('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this['_selectedIndex']=0x0);}[x(0x1c3)](){const H=x;return this['_layers'][this[H(0x1bd)]];}['_addLayer'](){const I=x;this['_layers']['push'](defaultLayer()),this[I(0x1bd)]=this['_layers'][I(0x1f0)]-0x1,this[I(0x1c6)](),this[I(0x1bb)](),this[I(0x1fe)]();}['_duplicateLayer'](){const J=x,c={...this['_currentLayer']()};this[J(0x1cb)][J(0x20f)](this[J(0x1bd)]+0x1,0x0,c),this[J(0x1bd)]=this[J(0x1bd)]+0x1,this[J(0x1c6)](),this[J(0x1bb)](),this[J(0x1fe)]();}[x(0x1ce)](){const K=x;if(this[K(0x1cb)][K(0x1f0)]<=0x1)return;this['_layers']['splice'](this[K(0x1bd)],0x1),this[K(0x1bd)]=Math['min'](this[K(0x1bd)],this[K(0x1cb)]['length']-0x1),this[K(0x1c6)](),this[K(0x1bb)](),this[K(0x1fe)]();}[x(0x200)](c){const L=x,d=this[L(0x1bd)],e=d+c;if(e<0x0||e>=this[L(0x1cb)][L(0x1f0)])return;[this[L(0x1cb)][d],this[L(0x1cb)][e]]=[this['_layers'][e],this['_layers'][d]],this[L(0x1bd)]=e,this[L(0x1c6)](),this['_refresh']();}['_renderList'](){const M=x;this[M(0x20a)]['innerHTML']='',this[M(0x1cb)][M(0x212)]((c,d)=>{const N=M,e=document[N(0x1ca)]('li');if(d===this['_selectedIndex'])e[N(0x1f7)][N(0x1d4)]('selected');const f=document['createElement']('span');f['className']='swatch',f[N(0x209)]['background']=c[N(0x20b)],e['appendChild'](f);const g=document[N(0x1ca)](N(0x1de));g['textContent']=''+(c['inset']?'inset\x20':'')+c[N(0x201)]+N(0x1cf)+c[N(0x1c4)]+N(0x1cf)+c[N(0x1d0)]+N(0x1cf)+c[N(0x1eb)]+'px';if(!c['enabled'])g['classList'][N(0x1d4)]('disabled-label');e['appendChild'](g),e['onclick']=()=>{const O=N;this[O(0x1bd)]=d,this[O(0x1c6)](),this['_loadControls']();},this['_layerList'][N(0x1bf)](e);});}['_loadControls'](){const P=x,c=this['_currentLayer']();this['_insetCheck']['checked']=c['inset'],this['_enabledCheck']['checked']=c['enabled'],this[P(0x1dc)][P(0x1e9)]=String(c['offsetX']),this[P(0x1d8)](P(0x211))[P(0x1d7)]=c[P(0x201)]+'px',this[P(0x213)]['value']=String(c[P(0x1c4)]),this[P(0x1d8)](P(0x203))['textContent']=c[P(0x1c4)]+'px',this[P(0x1ef)]['value']=String(c['blur']),this[P(0x1d8)](P(0x1db))['textContent']=c[P(0x1d0)]+'px',this['_inputSpread'][P(0x1e9)]=String(c[P(0x1eb)]),this['_getDomElement']('bse-spread-val')['textContent']=c[P(0x1eb)]+'px',this['_inputColor'][P(0x1e9)]=c['color'],this['_inputOpacity'][P(0x1e9)]=String(c['opacity']),this['_opacityVal']['textContent']=c[P(0x1f5)]+'%';}[x(0x1f9)](){const Q=x;return this['_layers']['filter'](c=>c[Q(0x1ed)])[Q(0x1d6)](layerToCss)[Q(0x1e3)](',\x20')||'none';}[x(0x1fe)](){const R=x,c=this['_buildCss']();this[R(0x1e0)][R(0x209)]['boxShadow']=c,this['_cssOutput'][R(0x1e9)]='box-shadow:\x20'+c+';',this[R(0x1c6)]();}['_applyToSelection'](){const S=x;if(!this['_designerCanvas'])return;const c=this['_designerCanvas'][S(0x1e7)][S(0x1d3)]['selectedElements'];if(!c?.[S(0x1f0)])return;const d=this[S(0x1f9)](),e=c[0x0][S(0x215)]('Apply\x20box-shadow');for(const f of c){f[S(0x1ec)]('box-shadow',d);}e[S(0x1f8)]();}}function a(){const T=['replace','1926lECcxi','_copyBtn','_currentLayer','offsetY','primarySelection','_renderList','match','_inputOpacity','push','createElement','_layers','_cssOutput','_enabledCheck','_removeLayer','px\x20','blur','310wsHEqU','5173biXIcO','selectionService','add','bse-copy-btn','map','textContent','_getDomElement','bse-blur','trim','bse-blur-val','_inputX','_inputSpread','span','bse-opacity','_previewBox','bse-remove-btn','bse-css-out','join','toFixed','onclick','_removeBtn','instanceServiceContainer','filter','value','_opacityVal','spread','setStyle','enabled','writeText','_inputBlur','length','bse-dup-btn','_loadBtn','141262XKbibz','slice','opacity','toString','classList','commit','_buildCss','397100dJILdH','#000000','16664caHGls','padStart','_refresh','_applyBtn','_moveLayer','offsetX','oninput','bse-y-val','100504iuAeph','bse-enabled','bse-opacity-val','_inputColor','1279535ZCSmpr','style','_layerList','color','bse-spread-val','bse-x','getStyle','splice','2402CxcGvB','bse-x-val','forEach','_inputY','_addLayer','openGroup','39kuLDnn','387jcbSLM','bse-layer-list','_loadFromPrimarySelection','_loadControls','px\x20rgba(','_selectedIndex','inset','appendChild'];a=function(){return T;};return a();}customElements['define']('node-projects-designer-box-shadow-editor',BoxShadowEditorWindow);