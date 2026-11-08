const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x1a2))/0x1*(-parseInt(m(0x192))/0x2)+parseInt(m(0x1c7))/0x3+parseInt(m(0x197))/0x4*(parseInt(m(0x1dc))/0x5)+-parseInt(m(0x19a))/0x6*(-parseInt(m(0x18e))/0x7)+parseInt(m(0x1da))/0x8*(-parseInt(m(0x185))/0x9)+parseInt(m(0x1be))/0xa+parseInt(m(0x1a9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69f6b));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function a(){const O=['split','instanceServiceContainer','_renderList','join','tse-x-val','set\x20text-shadow','tse-remove-btn','3054420HwFGmo','toFixed','offsetY','textContent','filter','_layers','tse-blur-val','_inputBlur','tse-up-btn','1338144vEcBPW','splice','tse-apply-btn','none','round','_selectedIndex','_currentLayer','_loadControls','_applyToSelection','length','tse-preview','forEach','_inputX','enabled','windowTemplate','min','swatch','replace','_opacityVal','325112DEvkUm','createElement','1062895CVwcrY','color','_applyBtn','99OeCTrT','tse-color','_removeLayer','value','px\x20','checked','push','span','_moveLayer','196IrRevk','classList','windowTitle','blur','2Yrgvao','_loadBtn','tse-opacity-val','_loadFromPrimarySelection','_getDomElement','8UMJsvL','_buildCss','text-shadow','40656lPyYnD','getStyle','oninput','tse-y','map','disabled-label','catch','appendChild','515728edvVvD','tse-copy-btn','_duplicateLayer','selectionService','_inputColor','toString','_layerList','334488lGiqbS','writeText','slice','_inputY','_previewText','_inputOpacity','className','match','trim','add','onclick','offsetX','_refresh','clipboard'];a=function(){return O;};return a();}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x19e)](f=>f[n(0x1a7)](0x10)['padStart'](0x2,'0'))['join']('');}function hexToRgb(c){const o=b,d=parseInt(c[o(0x1ab)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f[p(0x1b1)]();if(g)d['push'](g);return d;}function b(c,d){c=c-0x185;const e=a();let f=e[c];return f;}function layerToCss(c){const q=b,d=(c['opacity']/0x64)[q(0x1bf)](0x2);return c[q(0x1b4)]+q(0x189)+c[q(0x1c0)]+'px\x20'+c[q(0x191)]+'px\x20rgba('+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[r(0x18b)](f);}return d[r(0x1d0)]?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d='#000000',e=0x64,f=c;const g=f[s(0x1b0)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0x1b1)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0x1cb)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x1b0)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x1d0)]===0x4?'#'+k[0x1][s(0x1ab)](0x1)['split']('')[s(0x19e)](l=>l+l)[s(0x1ba)](''):k[0x1]['slice'](0x0,0x7),f=f[s(0x1d8)](k[0x1],'')['trim']());}const h=f[s(0x1b7)](/\s+/)['filter'](Boolean)[s(0x19e)](l=>parseFloat(l))[s(0x1c2)](l=>!isNaN(l));if(h[s(0x1d0)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0x1c3)]=[defaultLayer()];['_selectedIndex']=0x0;[t(0x1a8)];['_removeBtn'];['_enabledCheck'];['_inputX'];['_inputY'];[t(0x1c5)];['_inputColor'];['_inputOpacity'];['_opacityVal'];[t(0x1ad)];['_cssOutput'];['_loadBtn'];['_copyBtn'];['_applyBtn'];get[t(0x190)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[t(0x1d5)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const u=t;super(c),this[u(0x1a8)]=this['_getDomElement']('tse-layer-list'),this['_removeBtn']=this[u(0x196)](u(0x1bd)),this['_enabledCheck']=this['_getDomElement']('tse-enabled'),this['_inputX']=this[u(0x196)]('tse-x'),this[u(0x1ac)]=this['_getDomElement'](u(0x19d)),this['_inputBlur']=this['_getDomElement']('tse-blur'),this[u(0x1a6)]=this[u(0x196)](u(0x186)),this[u(0x1ae)]=this['_getDomElement']('tse-opacity'),this[u(0x1d9)]=this[u(0x196)](u(0x194)),this['_previewText']=this[u(0x196)](u(0x1d1)),this['_cssOutput']=this[u(0x196)]('tse-css-out'),this[u(0x193)]=this[u(0x196)]('tse-load-btn'),this['_copyBtn']=this[u(0x196)](u(0x1a3)),this[u(0x1de)]=this[u(0x196)](u(0x1c9)),this[u(0x196)]('tse-add-btn')[u(0x1b3)]=()=>this['_addLayer'](),this[u(0x196)]('tse-dup-btn')[u(0x1b3)]=()=>this[u(0x1a4)](),this[u(0x196)](u(0x1c6))['onclick']=()=>this['_moveLayer'](-0x1),this[u(0x196)]('tse-down-btn')[u(0x1b3)]=()=>this[u(0x18d)](0x1),this['_removeBtn'][u(0x1b3)]=()=>this[u(0x187)](),this['_enabledCheck']['onchange']=()=>{const v=u;this['_currentLayer']()['enabled']=this['_enabledCheck'][v(0x18a)],this[v(0x1b5)]();};for(const [d,e,f]of[[this['_inputX'],'offsetX',u(0x1bb)],[this[u(0x1ac)],'offsetY','tse-y-val'],[this[u(0x1c5)],'blur','tse-blur-val']]){d[u(0x19c)]=()=>{const w=u;this[w(0x1cd)]()[e]=Number(d[w(0x188)]),this[w(0x196)](f)[w(0x1c1)]=d[w(0x188)]+'px',this['_refresh']();};}this[u(0x1a6)][u(0x19c)]=()=>{const x=u;this['_currentLayer']()[x(0x1dd)]=this['_inputColor'][x(0x188)],this['_refresh']();},this[u(0x1ae)]['oninput']=()=>{const y=u;this['_currentLayer']()['opacity']=Number(this[y(0x1ae)][y(0x188)]),this[y(0x1d9)]['textContent']=this['_inputOpacity']['value']+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const z=u;navigator[z(0x1b6)]?.[z(0x1aa)](this['_cssOutput']['value'])[z(0x1a0)](()=>{});},this['_applyBtn'][u(0x1b3)]=()=>this[u(0x1cf)](),this['_loadBtn'][u(0x1b3)]=()=>{const A=u;this['_loadFromPrimarySelection'](),this[A(0x1b9)](),this[A(0x1ce)](),this[A(0x1b5)]();},this[u(0x195)](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const B=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.[B(0x1a5)]?.['primarySelection'];if(!c)return;const d=c[B(0x19b)](B(0x199));d&&(this['_layers']=parseCssTextShadow(d),this[B(0x1cc)]=0x0);}[t(0x1cd)](){const C=t;return this['_layers'][this[C(0x1cc)]];}['_addLayer'](){const D=t;this[D(0x1c3)]['push'](defaultLayer()),this[D(0x1cc)]=this[D(0x1c3)][D(0x1d0)]-0x1,this['_renderList'](),this['_loadControls'](),this[D(0x1b5)]();}[t(0x1a4)](){const E=t;this['_layers'][E(0x1c8)](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this[E(0x1cc)]=this[E(0x1cc)]+0x1,this['_renderList'](),this[E(0x1ce)](),this['_refresh']();}[t(0x187)](){const F=t;if(this[F(0x1c3)]['length']<=0x1)return;this['_layers'][F(0x1c8)](this[F(0x1cc)],0x1),this['_selectedIndex']=Math[F(0x1d6)](this[F(0x1cc)],this['_layers'][F(0x1d0)]-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const G=t,d=this[G(0x1cc)],e=d+c;if(e<0x0||e>=this[G(0x1c3)][G(0x1d0)])return;[this[G(0x1c3)][d],this['_layers'][e]]=[this['_layers'][e],this['_layers'][d]],this[G(0x1cc)]=e,this[G(0x1b9)](),this[G(0x1b5)]();}[t(0x1b9)](){const H=t;this['_layerList']['innerHTML']='',this[H(0x1c3)][H(0x1d2)]((c,d)=>{const I=H,e=document[I(0x1db)]('li');if(d===this[I(0x1cc)])e[I(0x18f)]['add']('selected');const f=document['createElement'](I(0x18c));f[I(0x1af)]=I(0x1d7),f['style']['background']=c['color'],e[I(0x1a1)](f);const g=document[I(0x1db)](I(0x18c));g[I(0x1c1)]=c['offsetX']+I(0x189)+c['offsetY']+'px\x20'+c['blur']+'px';if(!c[I(0x1d4)])g['classList'][I(0x1b2)](I(0x19f));e['appendChild'](g),e['onclick']=()=>{const J=I;this['_selectedIndex']=d,this['_renderList'](),this[J(0x1ce)]();},this['_layerList'][I(0x1a1)](e);});}[t(0x1ce)](){const K=t,c=this['_currentLayer']();this['_enabledCheck'][K(0x18a)]=c[K(0x1d4)],this[K(0x1d3)]['value']=String(c['offsetX']),this[K(0x196)]('tse-x-val')[K(0x1c1)]=c['offsetX']+'px',this[K(0x1ac)]['value']=String(c[K(0x1c0)]),this[K(0x196)]('tse-y-val')[K(0x1c1)]=c['offsetY']+'px',this[K(0x1c5)]['value']=String(c['blur']),this[K(0x196)](K(0x1c4))['textContent']=c['blur']+'px',this[K(0x1a6)][K(0x188)]=c[K(0x1dd)],this['_inputOpacity'][K(0x188)]=String(c['opacity']),this['_opacityVal']['textContent']=c['opacity']+'%';}[t(0x198)](){const L=t;return this['_layers'][L(0x1c2)](c=>c['enabled'])[L(0x19e)](layerToCss)[L(0x1ba)](',\x20')||L(0x1ca);}[t(0x1b5)](){const M=t,c=this[M(0x198)]();this['_previewText']['style']['textShadow']=c,this['_cssOutput']['value']=c,this['_renderList']();}[t(0x1cf)](){const N=t,c=this['_designerCanvas']?.[N(0x1b8)]?.[N(0x1a5)]?.['selectedElements'];if(!c?.[N(0x1d0)])return;const d=this['_buildCss'](),e=c[0x0]['openGroup'](N(0x1bc));for(const f of c){if(d===N(0x1ca))f['removeStyle'](N(0x199));else f['setStyle'](N(0x199),d);}e['commit']();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);