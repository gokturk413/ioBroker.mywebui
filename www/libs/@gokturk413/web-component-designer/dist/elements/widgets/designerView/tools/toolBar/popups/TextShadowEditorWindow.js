const u=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x232))/0x1*(parseInt(m(0x1fa))/0x2)+parseInt(m(0x243))/0x3*(parseInt(m(0x23b))/0x4)+parseInt(m(0x230))/0x5+parseInt(m(0x220))/0x6*(parseInt(m(0x24c))/0x7)+parseInt(m(0x1f9))/0x8*(-parseInt(m(0x23c))/0x9)+parseInt(m(0x22b))/0xa*(parseInt(m(0x219))/0xb)+parseInt(m(0x206))/0xc*(parseInt(m(0x209))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7a7c8));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x1f6),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e][o(0x201)](f=>f[o(0x23d)](0x10)['padStart'](0x2,'0'))[o(0x23f)]('');}function hexToRgb(c){const p=b,d=parseInt(c[p(0x1f3)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[p(0x1f3)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[q(0x1fb)]();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d[q(0x23a)](g);return d;}function layerToCss(c){const r=b,d=(c[r(0x21b)]/0x64)['toFixed'](0x2);return c[r(0x205)]+r(0x223)+c[r(0x234)]+'px\x20'+c['blur']+'px\x20rgba('+hexToRgb(c[r(0x20f)])+','+d+')';}function a(){const P=['onchange','_refresh','match','push','78388YqLULA','898119oaBIxY','toString','_loadControls','join','tse-layer-list','_moveLayer','none','12TUTUbA','oninput','_applyBtn','textContent','_loadBtn','_previewText','_opacityVal','_renderList','text-shadow','7XJJclx','tse-y','span','tse-x-val','writeText','_addLayer','_inputX','blur','createElement','slice','commit','_loadFromPrimarySelection','#000000','_applyToSelection','_inputColor','8mKsCDM','424894UVQUjs','trim','tse-down-btn','_layerList','windowTitle','_copyBtn','background','map','enabled','_cssOutput','tse-css-out','offsetX','16668xKBHag','_currentLayer','_inputOpacity','2938bfYSaL','instanceServiceContainer','_selectedIndex','checked','classList','onclick','color','_enabledCheck','_getDomElement','appendChild','_inputY','_inputBlur','define','_buildCss','_layers','selectionService','110wtjeRV','_removeBtn','opacity','min','forEach','tse-y-val','disabled-label','1664454osaYBm','length','style','px\x20','textShadow','tse-up-btn','filter','tse-blur','_removeLayer','openGroup','replace','73310acTUCX','tse-opacity','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','value','tse-load-btn','1416840dNoXqk','tse-opacity-val','2MNDUYp','innerHTML','offsetY','_designerCanvas','tse-apply-btn'];a=function(){return P;};return a();}function b(c,d){c=c-0x1ec;const e=a();let f=e[c];return f;}function parseCssTextShadow(c){const s=b;if(!c||c===s(0x242))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d['push'](f);}return d[s(0x221)]?d:[defaultLayer()];}function parseOneLayer(c){const t=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')['trim']();const j=i[t(0x239)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[t(0x239)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1][t(0x1f3)](0x1)['split']('')[t(0x201)](l=>l+l)['join'](''):k[0x1][t(0x1f3)](0x0,0x7),f=f[t(0x22a)](k[0x1],'')['trim']());}const h=f['split'](/\s+/)['filter'](Boolean)[t(0x201)](l=>parseFloat(l))[t(0x226)](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[u(0x217)]=[defaultLayer()];[u(0x20b)]=0x0;['_layerList'];['_removeBtn'];['_enabledCheck'];[u(0x1f0)];[u(0x213)];['_inputBlur'];[u(0x1f8)];['_inputOpacity'];['_opacityVal'];[u(0x248)];['_cssOutput'];[u(0x247)];[u(0x1ff)];[u(0x245)];get[u(0x1fe)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
      * { box-sizing: border-box; }
      .tse-root {
        display: flex;
        flex-direction: column;
        width: 360px;
        color: var(--wcd-color-text, #ddd);
        font-family: sans-serif;
        font-size: 12px;
        gap: 6px;
        padding: 8px;
        background: var(--wcd-color-surface-raised, #2a2a2a);
      }
      .preview-area {
        background: var(--wcd-color-surface, #1a1a1a);
        border: 1px solid var(--wcd-color-border, #444);
        border-radius: 4px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .preview-text {
        font-size: 28px;
        font-weight: bold;
        color: var(--wcd-color-text, #fff);
        user-select: none;
      }
      .layers-row {
        display: flex;
        gap: 4px;
      }
      .layer-list {
        flex: 1;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid var(--wcd-color-border, #444);
        border-radius: 3px;
        max-height: 80px;
        overflow-y: auto;
        background: var(--wcd-color-surface, #1e1e1e);
      }
      .layer-list li {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 2px 5px;
        cursor: pointer;
        font-size: 11px;
      }
      .layer-list li:hover { background: #333; }
      .layer-list li.selected { background: #2a4a7a; }
      .swatch {
        width: 12px; height: 12px;
        border-radius: 2px;
        border: 1px solid var(--wcd-color-border, #555);
        flex-shrink: 0;
      }
      .disabled-label { opacity: 0.4; }
      .layer-buttons {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .layer-buttons button {
        width: 22px; height: 22px;
        background: var(--wcd-color-surface-raised, #3a3a3a);
        color: var(--wcd-color-text, #ddd);
        border: 1px solid var(--wcd-color-border, #555);
        border-radius: 3px;
        cursor: pointer;
        font-size: 13px;
        padding: 0;
      }
      .layer-buttons button:hover { background: #555; }
      .controls {
        display: grid;
        grid-template-columns: 60px 1fr 38px;
        gap: 3px 6px;
        align-items: center;
      }
      .controls label { color: var(--wcd-color-text-muted, #aaa); }
      .controls input[type=range] { width: 100%; }
      .controls input[type=color] {
        width: 100%;
        height: 22px;
        padding: 1px;
        border: 1px solid var(--wcd-color-border, #555);
        border-radius: 3px;
        background: var(--wcd-color-surface, #1e1e1e);
        cursor: pointer;
      }
      .check-row {
        display: flex;
        gap: 12px;
        align-items: center;
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
        height: 40px;
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
    `;}get['windowTemplate'](){const v=u;return v(0x22d);}constructor(c){const w=u;super(c),this['_layerList']=this[w(0x211)](w(0x240)),this[w(0x21a)]=this[w(0x211)]('tse-remove-btn'),this[w(0x210)]=this['_getDomElement']('tse-enabled'),this['_inputX']=this['_getDomElement']('tse-x'),this['_inputY']=this[w(0x211)](w(0x24d)),this['_inputBlur']=this['_getDomElement'](w(0x227)),this[w(0x1f8)]=this['_getDomElement']('tse-color'),this[w(0x208)]=this['_getDomElement'](w(0x22c)),this['_opacityVal']=this['_getDomElement'](w(0x231)),this[w(0x248)]=this[w(0x211)]('tse-preview'),this['_cssOutput']=this[w(0x211)](w(0x204)),this['_loadBtn']=this[w(0x211)](w(0x22f)),this[w(0x1ff)]=this['_getDomElement']('tse-copy-btn'),this['_applyBtn']=this[w(0x211)](w(0x236)),this['_getDomElement']('tse-add-btn')['onclick']=()=>this[w(0x1ef)](),this['_getDomElement']('tse-dup-btn')[w(0x20e)]=()=>this['_duplicateLayer'](),this[w(0x211)](w(0x225))['onclick']=()=>this['_moveLayer'](-0x1),this['_getDomElement'](w(0x1fc))['onclick']=()=>this[w(0x241)](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this['_enabledCheck'][w(0x237)]=()=>{const x=w;this[x(0x207)]()['enabled']=this[x(0x210)][x(0x20c)],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],w(0x205),w(0x1ed)],[this['_inputY'],w(0x234),w(0x21e)],[this[w(0x214)],w(0x1f1),'tse-blur-val']]){d[w(0x244)]=()=>{const y=w;this[y(0x207)]()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d['value']+'px',this[y(0x238)]();};}this['_inputColor'][w(0x244)]=()=>{const z=w;this['_currentLayer']()['color']=this['_inputColor'][z(0x22e)],this['_refresh']();},this['_inputOpacity']['oninput']=()=>{const A=w;this[A(0x207)]()['opacity']=Number(this[A(0x208)]['value']),this['_opacityVal']['textContent']=this['_inputOpacity']['value']+'%',this[A(0x238)]();},this['_copyBtn']['onclick']=()=>{const B=w;navigator['clipboard']?.[B(0x1ee)](this['_cssOutput'][B(0x22e)])['catch'](()=>{});},this['_applyBtn'][w(0x20e)]=()=>this['_applyToSelection'](),this['_loadBtn']['onclick']=()=>{const C=w;this[C(0x1f5)](),this[C(0x24a)](),this['_loadControls'](),this['_refresh']();},this['_loadFromPrimarySelection'](),this['_renderList'](),this[w(0x23e)](),this[w(0x238)]();}[u(0x1f5)](){const D=u,c=this['_designerCanvas']?.[D(0x20a)]?.[D(0x218)]?.['primarySelection'];if(!c)return;const d=c['getStyle'](D(0x24b));d&&(this[D(0x217)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}[u(0x1ef)](){const E=u;this[E(0x217)]['push'](defaultLayer()),this[E(0x20b)]=this['_layers']['length']-0x1,this[E(0x24a)](),this[E(0x23e)](),this[E(0x238)]();}['_duplicateLayer'](){const F=u;this[F(0x217)]['splice'](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this[F(0x20b)]=this[F(0x20b)]+0x1,this['_renderList'](),this['_loadControls'](),this['_refresh']();}[u(0x228)](){const G=u;if(this[G(0x217)][G(0x221)]<=0x1)return;this['_layers']['splice'](this[G(0x20b)],0x1),this['_selectedIndex']=Math[G(0x21c)](this['_selectedIndex'],this[G(0x217)][G(0x221)]-0x1),this[G(0x24a)](),this[G(0x23e)](),this[G(0x238)]();}['_moveLayer'](c){const H=u,d=this[H(0x20b)],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this[H(0x217)][e]]=[this[H(0x217)][e],this['_layers'][d]],this[H(0x20b)]=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const I=u;this[I(0x1fd)][I(0x233)]='',this[I(0x217)][I(0x21d)]((c,d)=>{const J=I,e=document['createElement']('li');if(d===this['_selectedIndex'])e[J(0x20d)]['add']('selected');const f=document['createElement'](J(0x1ec));f['className']='swatch',f['style'][J(0x200)]=c[J(0x20f)],e[J(0x212)](f);const g=document[J(0x1f2)](J(0x1ec));g[J(0x246)]=c[J(0x205)]+'px\x20'+c[J(0x234)]+'px\x20'+c[J(0x1f1)]+'px';if(!c['enabled'])g['classList']['add'](J(0x21f));e['appendChild'](g),e['onclick']=()=>{const K=J;this[K(0x20b)]=d,this['_renderList'](),this[K(0x23e)]();},this['_layerList'][J(0x212)](e);});}['_loadControls'](){const L=u,c=this['_currentLayer']();this[L(0x210)][L(0x20c)]=c[L(0x202)],this['_inputX'][L(0x22e)]=String(c['offsetX']),this['_getDomElement'](L(0x1ed))[L(0x246)]=c[L(0x205)]+'px',this[L(0x213)]['value']=String(c['offsetY']),this['_getDomElement']('tse-y-val')['textContent']=c[L(0x234)]+'px',this['_inputBlur'][L(0x22e)]=String(c['blur']),this[L(0x211)]('tse-blur-val')['textContent']=c[L(0x1f1)]+'px',this['_inputColor']['value']=c['color'],this[L(0x208)]['value']=String(c[L(0x21b)]),this[L(0x249)]['textContent']=c['opacity']+'%';}[u(0x216)](){const M=u;return this[M(0x217)][M(0x226)](c=>c['enabled'])[M(0x201)](layerToCss)[M(0x23f)](',\x20')||M(0x242);}['_refresh'](){const N=u,c=this['_buildCss']();this['_previewText'][N(0x222)][N(0x224)]=c,this[N(0x203)]['value']=c,this['_renderList']();}[u(0x1f7)](){const O=u,c=this[O(0x235)]?.['instanceServiceContainer']?.[O(0x218)]?.['selectedElements'];if(!c?.['length'])return;const d=this[O(0x216)](),e=c[0x0][O(0x229)]('set\x20text-shadow');for(const f of c){if(d===O(0x242))f['removeStyle']('text-shadow');else f['setStyle']('text-shadow',d);}e[O(0x1f4)]();}}customElements[u(0x215)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);