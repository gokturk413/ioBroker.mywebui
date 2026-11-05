const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x20e))/0x1*(parseInt(m(0x20f))/0x2)+-parseInt(m(0x1f0))/0x3*(-parseInt(m(0x21c))/0x4)+parseInt(m(0x226))/0x5+-parseInt(m(0x1fd))/0x6*(-parseInt(m(0x207))/0x7)+parseInt(m(0x1fb))/0x8+-parseInt(m(0x218))/0x9+-parseInt(m(0x1d5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf1f4d));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function b(c,d){c=c-0x1d0;const e=a();let f=e[c];return f;}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)['padStart'](0x2,'0'))[n(0x1df)]('');}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[o(0x210)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function a(){const P=['tse-y-val','trim','filter','selectionService','appendChild','_getDomElement','offsetX','splice','tse-down-btn','_previewText','38403520qVZTvb','_renderList','px\x20rgba(','_inputY','_refresh','selectedElements','enabled','_inputOpacity','round','_enabledCheck','join','opacity','windowContentStyle','onclick','px\x20','_inputBlur','getStyle','textContent','push','_applyBtn','checked','windowTitle','tse-copy-btn','_loadBtn','min','onchange','_layers','821577VYjbOn','_duplicateLayer','#000000','span','define','_selectedIndex','add','none','_inputX','tse-opacity-val','_designerCanvas','9347936yzrtFV','text-shadow','12TQzsfz','color','style','_inputColor','value','className','toFixed','_buildCss','catch','classList','6507067HRXuZc','replace','_addLayer','length','offsetY','_loadControls','tse-load-btn','43292VQWunw','82NHNUJk','slice','_layerList','clipboard','commit','_applyToSelection','_removeLayer','map','_currentLayer','13295241NlwpfJ','match','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','blur','20SqKSsc','oninput','_removeBtn','_copyBtn','tse-up-btn','windowTemplate','_opacityVal','_cssOutput','createElement','disabled-label','683665hRqEVv','_moveLayer'];a=function(){return P;};return a();}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0x229)]();if(i)d[p(0x1e7)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x1e0)]/0x64)[q(0x203)](0x2);return c[q(0x1d1)]+q(0x1e3)+c['offsetY']+'px\x20'+c[q(0x21b)]+q(0x1d7)+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c===r(0x1f7))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[r(0x1e7)](f);}return d[r(0x20a)]?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d=s(0x1f2),e=0x64,f=c;const g=f[s(0x219)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[s(0x208)](i,'')[s(0x229)]();const j=i[s(0x219)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0x1dd)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x219)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x20a)]===0x4?'#'+k[0x1][s(0x210)](0x1)['split']('')['map'](l=>l+l)[s(0x1df)](''):k[0x1][s(0x210)](0x0,0x7),f=f[s(0x208)](k[0x1],'')['trim']());}const h=f['split'](/\s+/)[s(0x22a)](Boolean)[s(0x216)](l=>parseFloat(l))[s(0x22a)](l=>!isNaN(l));if(h[s(0x20a)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0x1ef)]=[defaultLayer()];['_selectedIndex']=0x0;[t(0x211)];[t(0x21e)];['_enabledCheck'];['_inputX'];[t(0x1d8)];[t(0x1e4)];[t(0x200)];['_inputOpacity'];[t(0x222)];[t(0x1d4)];[t(0x223)];['_loadBtn'];['_copyBtn'];['_applyBtn'];get[t(0x1ea)](){return'Text\x20Shadow\x20Editor';}get[t(0x1e1)](){return css`
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
    `;}get[t(0x221)](){const u=t;return u(0x21a);}constructor(c){const v=t;super(c),this[v(0x211)]=this['_getDomElement']('tse-layer-list'),this['_removeBtn']=this[v(0x1d0)]('tse-remove-btn'),this['_enabledCheck']=this['_getDomElement']('tse-enabled'),this['_inputX']=this[v(0x1d0)]('tse-x'),this[v(0x1d8)]=this['_getDomElement']('tse-y'),this[v(0x1e4)]=this[v(0x1d0)]('tse-blur'),this[v(0x200)]=this['_getDomElement']('tse-color'),this['_inputOpacity']=this['_getDomElement']('tse-opacity'),this['_opacityVal']=this[v(0x1d0)](v(0x1f9)),this[v(0x1d4)]=this[v(0x1d0)]('tse-preview'),this[v(0x223)]=this[v(0x1d0)]('tse-css-out'),this[v(0x1ec)]=this[v(0x1d0)](v(0x20d)),this[v(0x21f)]=this[v(0x1d0)](v(0x1eb)),this[v(0x1e8)]=this[v(0x1d0)]('tse-apply-btn'),this[v(0x1d0)]('tse-add-btn')['onclick']=()=>this[v(0x209)](),this['_getDomElement']('tse-dup-btn')[v(0x1e2)]=()=>this[v(0x1f1)](),this['_getDomElement'](v(0x220))['onclick']=()=>this[v(0x227)](-0x1),this[v(0x1d0)](v(0x1d3))[v(0x1e2)]=()=>this[v(0x227)](0x1),this[v(0x21e)]['onclick']=()=>this[v(0x215)](),this['_enabledCheck'][v(0x1ee)]=()=>{const w=v;this[w(0x217)]()['enabled']=this[w(0x1de)][w(0x1e9)],this[w(0x1d9)]();};for(const [d,e,f]of[[this[v(0x1f8)],v(0x1d1),'tse-x-val'],[this[v(0x1d8)],'offsetY',v(0x228)],[this['_inputBlur'],'blur','tse-blur-val']]){d[v(0x21d)]=()=>{const x=v;this['_currentLayer']()[e]=Number(d[x(0x201)]),this['_getDomElement'](f)[x(0x1e6)]=d[x(0x201)]+'px',this[x(0x1d9)]();};}this[v(0x200)][v(0x21d)]=()=>{const y=v;this[y(0x217)]()['color']=this['_inputColor']['value'],this['_refresh']();},this[v(0x1dc)][v(0x21d)]=()=>{const z=v;this[z(0x217)]()[z(0x1e0)]=Number(this['_inputOpacity']['value']),this[z(0x222)][z(0x1e6)]=this['_inputOpacity'][z(0x201)]+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const A=v;navigator[A(0x212)]?.['writeText'](this['_cssOutput'][A(0x201)])[A(0x205)](()=>{});},this['_applyBtn'][v(0x1e2)]=()=>this[v(0x214)](),this[v(0x1ec)][v(0x1e2)]=()=>{const B=v;this['_loadFromPrimarySelection'](),this['_renderList'](),this[B(0x20c)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this[v(0x1d6)](),this['_loadControls'](),this[v(0x1d9)]();}['_loadFromPrimarySelection'](){const C=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[C(0x1e5)]('text-shadow');d&&(this[C(0x1ef)]=parseCssTextShadow(d),this[C(0x1f5)]=0x0);}[t(0x217)](){const D=t;return this['_layers'][this[D(0x1f5)]];}['_addLayer'](){const E=t;this[E(0x1ef)][E(0x1e7)](defaultLayer()),this['_selectedIndex']=this[E(0x1ef)][E(0x20a)]-0x1,this[E(0x1d6)](),this[E(0x20c)](),this['_refresh']();}['_duplicateLayer'](){const F=t;this[F(0x1ef)]['splice'](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this['_selectedIndex']+0x1,this['_renderList'](),this[F(0x20c)](),this['_refresh']();}['_removeLayer'](){const G=t;if(this[G(0x1ef)][G(0x20a)]<=0x1)return;this[G(0x1ef)][G(0x1d2)](this[G(0x1f5)],0x1),this[G(0x1f5)]=Math[G(0x1ed)](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this[G(0x20c)](),this[G(0x1d9)]();}[t(0x227)](c){const H=t,d=this[H(0x1f5)],e=d+c;if(e<0x0||e>=this[H(0x1ef)][H(0x20a)])return;[this['_layers'][d],this[H(0x1ef)][e]]=[this['_layers'][e],this['_layers'][d]],this[H(0x1f5)]=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const I=t;this[I(0x211)]['innerHTML']='',this[I(0x1ef)]['forEach']((c,d)=>{const J=I,e=document[J(0x224)]('li');if(d===this['_selectedIndex'])e[J(0x206)][J(0x1f6)]('selected');const f=document[J(0x224)]('span');f[J(0x202)]='swatch',f[J(0x1ff)]['background']=c['color'],e['appendChild'](f);const g=document[J(0x224)](J(0x1f3));g['textContent']=c[J(0x1d1)]+'px\x20'+c[J(0x20b)]+'px\x20'+c[J(0x21b)]+'px';if(!c[J(0x1db)])g[J(0x206)][J(0x1f6)](J(0x225));e[J(0x22c)](g),e[J(0x1e2)]=()=>{const K=J;this[K(0x1f5)]=d,this['_renderList'](),this[K(0x20c)]();},this[J(0x211)][J(0x22c)](e);});}['_loadControls'](){const L=t,c=this[L(0x217)]();this[L(0x1de)][L(0x1e9)]=c['enabled'],this[L(0x1f8)][L(0x201)]=String(c[L(0x1d1)]),this[L(0x1d0)]('tse-x-val')['textContent']=c[L(0x1d1)]+'px',this['_inputY'][L(0x201)]=String(c[L(0x20b)]),this[L(0x1d0)]('tse-y-val')[L(0x1e6)]=c['offsetY']+'px',this['_inputBlur']['value']=String(c['blur']),this['_getDomElement']('tse-blur-val')['textContent']=c['blur']+'px',this['_inputColor'][L(0x201)]=c[L(0x1fe)],this['_inputOpacity']['value']=String(c[L(0x1e0)]),this['_opacityVal']['textContent']=c['opacity']+'%';}[t(0x204)](){const M=t;return this[M(0x1ef)][M(0x22a)](c=>c['enabled'])['map'](layerToCss)['join'](',\x20')||'none';}['_refresh'](){const N=t,c=this[N(0x204)]();this['_previewText'][N(0x1ff)]['textShadow']=c,this[N(0x223)][N(0x201)]=c,this['_renderList']();}[t(0x214)](){const O=t,c=this[O(0x1fa)]?.['instanceServiceContainer']?.[O(0x22b)]?.[O(0x1da)];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d==='none')f['removeStyle'](O(0x1fc));else f['setStyle']('text-shadow',d);}e[O(0x213)]();}}customElements[t(0x1f4)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);