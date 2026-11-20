const x=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x24c))/0x1+parseInt(r(0x24a))/0x2+parseInt(r(0x243))/0x3+-parseInt(r(0x228))/0x4*(parseInt(r(0x221))/0x5)+-parseInt(r(0x210))/0x6*(parseInt(r(0x234))/0x7)+-parseInt(r(0x254))/0x8+parseInt(r(0x222))/0x9*(parseInt(r(0x245))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x91d15));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'inset':![],'offsetX':0x5,'offsetY':0x5,'blur':0xa,'spread':0x0,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const s=b;return'#'+[c,d,e][s(0x251)](f=>f['toString'](0x10)['padStart'](0x2,'0'))['join']('');}function splitShadowLayers(c){const t=b,d=[];let e=0x0,f='';for(let h=0x0;h<c['length'];h++){const j=c[h];if(j==='(')e++;else{if(j===')')e--;else{if(j===','&&e===0x0){const k=f['trim']();if(k)d['push'](k);f='';continue;}}}f+=j;}const g=f[t(0x214)]();if(g)d[t(0x224)](g);return d;}function parseCssBoxShadow(c){const u=b;if(!c||c===u(0x24d))return[defaultLayer()];const d=[];for(const e of splitShadowLayers(c)){const f=parseOneShadowLayer(e['trim']());if(f)d[u(0x224)](f);}return d[u(0x225)]?d:[defaultLayer()];}function parseOneShadowLayer(c){const v=b;let d='#000000',e=0x64,f=c;const g=f[v(0x204)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const k=g[0x1];f=f[v(0x249)](k,'')['trim']();const l=k[v(0x204)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);l&&(d=rgbToHex(parseInt(l[0x1]),parseInt(l[0x2]),parseInt(l[0x3])),e=l[0x4]!=null?Math[v(0x217)](parseFloat(l[0x4])*0x64):0x64);}else{const m=f['match'](/(#[0-9a-fA-F]{3,8})/);m&&(d=m[0x1][v(0x225)]===0x4?'#'+m[0x1][v(0x218)](0x1)['split']('')['map'](o=>o+o)[v(0x244)](''):m[0x1][v(0x218)](0x0,0x7),f=f['replace'](m[0x1],'')[v(0x214)]());}const h=f[v(0x231)](/\s+/)['filter'](Boolean);let i=![];const j=[];for(const o of h){if(o===v(0x255)){i=!![];continue;}const q=parseFloat(o);if(!isNaN(q))j['push'](q);}if(j[v(0x225)]<0x2)return null;return{'inset':i,'offsetX':j[0x0]??0x0,'offsetY':j[0x1]??0x0,'blur':j[0x2]??0x0,'spread':j[0x3]??0x0,'color':d,'opacity':e,'enabled':!![]};}function layerToCss(c){const w=b,d=hexToRgb(c[w(0x1fa)]),e=(c[w(0x1f6)]/0x64)['toFixed'](0x2);return''+(c[w(0x255)]?'inset\x20':'')+c['offsetX']+w(0x21d)+c['offsetY']+'px\x20'+c[w(0x213)]+w(0x21d)+c[w(0x23c)]+w(0x233)+d+','+e+')';}function hexToRgb(c){const d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function b(c,d){c=c-0x1f3;const e=a();let f=e[c];return f;}export class BoxShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[x(0x236)]=0x0;['_layerList'];[x(0x252)];['_insetCheck'];[x(0x22a)];[x(0x24e)];['_inputY'];[x(0x239)];[x(0x229)];['_inputColor'];[x(0x202)];['_opacityVal'];[x(0x1f7)];['_cssOutput'];[x(0x240)];['_copyBtn'];[x(0x201)];get[x(0x241)](){return'Box\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const y=x;return y(0x21f);}constructor(c){const z=x;super(c),this['_layerList']=this['_getDomElement']('bse-layer-list'),this['_removeBtn']=this[z(0x1f5)]('bse-remove-btn'),this[z(0x1ff)]=this['_getDomElement'](z(0x226)),this['_enabledCheck']=this[z(0x1f5)](z(0x208)),this['_inputX']=this['_getDomElement']('bse-x'),this[z(0x253)]=this['_getDomElement']('bse-y'),this['_inputBlur']=this['_getDomElement'](z(0x24f)),this['_inputSpread']=this['_getDomElement'](z(0x20d)),this[z(0x23f)]=this[z(0x1f5)](z(0x246)),this['_inputOpacity']=this['_getDomElement'](z(0x1fd)),this['_opacityVal']=this[z(0x1f5)]('bse-opacity-val'),this['_previewBox']=this['_getDomElement']('bse-preview'),this[z(0x22c)]=this['_getDomElement'](z(0x227)),this[z(0x240)]=this[z(0x1f5)]('bse-load-btn'),this[z(0x1fb)]=this[z(0x1f5)](z(0x20f)),this['_applyBtn']=this['_getDomElement'](z(0x242)),this[z(0x1f5)]('bse-add-btn')['onclick']=()=>this['_addLayer'](),this[z(0x1f5)]('bse-dup-btn')[z(0x20e)]=()=>this[z(0x1f3)](),this['_getDomElement']('bse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement'](z(0x200))[z(0x20e)]=()=>this[z(0x23e)](0x1),this[z(0x252)][z(0x20e)]=()=>this['_removeLayer'](),this['_insetCheck'][z(0x205)]=()=>{const A=z;this[A(0x215)]()['inset']=this[A(0x1ff)][A(0x22f)],this['_refresh']();},this[z(0x22a)]['onchange']=()=>{const B=z;this[B(0x215)]()['enabled']=this[B(0x22a)]['checked'],this['_refresh']();};for(const [d,e,f]of[[this[z(0x24e)],'offsetX',z(0x23a)],[this['_inputY'],'offsetY',z(0x23d)],[this[z(0x239)],'blur','bse-blur-val'],[this['_inputSpread'],z(0x23c),z(0x21b)]]){d[z(0x1fc)]=()=>{const C=z;this[C(0x215)]()[e]=Number(d[C(0x1f4)]),this['_getDomElement'](f)['textContent']=d[C(0x1f4)]+'px',this['_refresh']();};}this[z(0x23f)]['oninput']=()=>{const D=z;this[D(0x215)]()[D(0x1fa)]=this[D(0x23f)][D(0x1f4)],this['_refresh']();},this[z(0x202)]['oninput']=()=>{const E=z;this['_currentLayer']()[E(0x1f6)]=Number(this['_inputOpacity'][E(0x1f4)]),this['_opacityVal'][E(0x21c)]=this[E(0x202)]['value']+'%',this[E(0x206)]();},this['_copyBtn'][z(0x20e)]=()=>{const F=z;navigator['clipboard']?.[F(0x22d)](this['_cssOutput']['value'])[F(0x207)](()=>{});},this[z(0x201)]['onclick']=()=>this[z(0x24b)](),this['_loadBtn']['onclick']=()=>{const G=z;this[G(0x237)](),this[G(0x209)](),this[G(0x247)](),this['_refresh']();},this[z(0x237)](),this[z(0x209)](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const H=x,c=this['_designerCanvas']?.[H(0x21e)]?.[H(0x238)]?.['primarySelection'];if(!c)return;const d=c[H(0x20b)]('box-shadow');d&&(this['_layers']=parseCssBoxShadow(d),this[H(0x236)]=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const I=x;this['_layers'][I(0x224)](defaultLayer()),this[I(0x236)]=this[I(0x220)][I(0x225)]-0x1,this[I(0x209)](),this['_loadControls'](),this[I(0x206)]();}[x(0x1f3)](){const J=x,c={...this[J(0x215)]()};this[J(0x220)][J(0x257)](this['_selectedIndex']+0x1,0x0,c),this['_selectedIndex']=this[J(0x236)]+0x1,this[J(0x209)](),this[J(0x247)](),this[J(0x206)]();}[x(0x223)](){const K=x;if(this[K(0x220)]['length']<=0x1)return;this[K(0x220)]['splice'](this[K(0x236)],0x1),this['_selectedIndex']=Math[K(0x1f8)](this['_selectedIndex'],this[K(0x220)][K(0x225)]-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const L=x,d=this[L(0x236)],e=d+c;if(e<0x0||e>=this[L(0x220)]['length'])return;[this[L(0x220)][d],this[L(0x220)][e]]=[this['_layers'][e],this[L(0x220)][d]],this[L(0x236)]=e,this['_renderList'](),this['_refresh']();}['_renderList'](){this['_layerList']['innerHTML']='',this['_layers']['forEach']((c,d)=>{const M=b,e=document['createElement']('li');if(d===this[M(0x236)])e[M(0x21a)]['add'](M(0x211));const f=document['createElement'](M(0x248));f['className']='swatch',f[M(0x203)][M(0x20a)]=c['color'],e[M(0x212)](f);const g=document[M(0x23b)](M(0x248));g[M(0x21c)]=''+(c[M(0x255)]?M(0x22b):'')+c['offsetX']+M(0x21d)+c[M(0x230)]+M(0x21d)+c[M(0x213)]+'px\x20'+c[M(0x23c)]+'px';if(!c['enabled'])g[M(0x21a)]['add']('disabled-label');e['appendChild'](g),e[M(0x20e)]=()=>{const N=M;this['_selectedIndex']=d,this[N(0x209)](),this[N(0x247)]();},this['_layerList'][M(0x212)](e);});}['_loadControls'](){const O=x,c=this[O(0x215)]();this[O(0x1ff)]['checked']=c[O(0x255)],this['_enabledCheck']['checked']=c[O(0x1f9)],this[O(0x24e)]['value']=String(c[O(0x256)]),this[O(0x1f5)](O(0x23a))['textContent']=c['offsetX']+'px',this['_inputY'][O(0x1f4)]=String(c['offsetY']),this[O(0x1f5)]('bse-y-val')[O(0x21c)]=c[O(0x230)]+'px',this['_inputBlur'][O(0x1f4)]=String(c['blur']),this[O(0x1f5)]('bse-blur-val')[O(0x21c)]=c[O(0x213)]+'px',this['_inputSpread']['value']=String(c[O(0x23c)]),this['_getDomElement'](O(0x21b))[O(0x21c)]=c['spread']+'px',this['_inputColor']['value']=c['color'],this[O(0x202)]['value']=String(c['opacity']),this[O(0x250)]['textContent']=c['opacity']+'%';}[x(0x22e)](){const P=x;return this['_layers'][P(0x216)](c=>c['enabled'])['map'](layerToCss)['join'](',\x20')||P(0x24d);}['_refresh'](){const Q=x,c=this[Q(0x22e)]();this['_previewBox']['style']['boxShadow']=c,this['_cssOutput'][Q(0x1f4)]='box-shadow:\x20'+c+';',this['_renderList']();}['_applyToSelection'](){const R=x;if(!this['_designerCanvas'])return;const c=this[R(0x20c)]['instanceServiceContainer']['selectionService']['selectedElements'];if(!c?.['length'])return;const d=this[R(0x22e)](),e=c[0x0][R(0x232)]('Apply\x20box-shadow');for(const f of c){f['setStyle'](R(0x219),d);}e[R(0x1fe)]();}}customElements['define'](x(0x235),BoxShadowEditorWindow);function a(){const S=['none','_inputX','bse-blur','_opacityVal','map','_removeBtn','_inputY','5953128vfPZop','inset','offsetX','splice','_duplicateLayer','value','_getDomElement','opacity','_previewBox','min','enabled','color','_copyBtn','oninput','bse-opacity','commit','_insetCheck','bse-down-btn','_applyBtn','_inputOpacity','style','match','onchange','_refresh','catch','bse-enabled','_renderList','background','getStyle','_designerCanvas','bse-spread','onclick','bse-copy-btn','372qwFHsZ','selected','appendChild','blur','trim','_currentLayer','filter','round','slice','box-shadow','classList','bse-spread-val','textContent','px\x20','instanceServiceContainer','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22bse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-box\x22\x20id=\x22bse-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22bse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22bse-inset\x22>\x20Inset</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-x\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-y\x22\x20min=\x22-100\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-blur\x22\x20min=\x220\x22\x20max=\x22200\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Spread</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-spread\x22\x20min=\x22-50\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-spread-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22bse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22bse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22bse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22bse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22bse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22bse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','_layers','14565GSIXzS','9hvRumc','_removeLayer','push','length','bse-inset','bse-css-out','1064LbltLf','_inputSpread','_enabledCheck','inset\x20','_cssOutput','writeText','_buildCss','checked','offsetY','split','openGroup','px\x20rgba(','116557ZrbxLQ','node-projects-designer-box-shadow-editor','_selectedIndex','_loadFromPrimarySelection','selectionService','_inputBlur','bse-x-val','createElement','spread','bse-y-val','_moveLayer','_inputColor','_loadBtn','windowTitle','bse-apply-btn','2417139DGgZQf','join','20529710FqcnJG','bse-color','_loadControls','span','replace','431174OPFiPU','_applyToSelection','74359Cdesyq'];a=function(){return S;};return a();}