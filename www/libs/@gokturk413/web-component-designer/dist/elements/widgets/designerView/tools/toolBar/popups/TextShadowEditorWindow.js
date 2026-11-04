function a(){const N=['_applyToSelection','57805YLDwWR','textShadow','_layers','tse-blur','tse-preview','_removeBtn','toString','replace','_enabledCheck','selected','className','innerHTML','_copyBtn','18AEoKtT','px\x20','_selectedIndex','splice','getStyle','enabled','501249eqZpUR','102955TdUdMm','_applyBtn','_removeLayer','checked','_loadFromPrimarySelection','_inputY','filter','_loadControls','tse-apply-btn','tse-add-btn','opacity','windowTemplate','_inputOpacity','map','_inputBlur','tse-x-val','_layerList','createElement','split','_designerCanvas','slice','span','length','push','_inputColor','111538gvZqwY','oninput','setStyle','_loadBtn','onclick','_currentLayer','value','toFixed','color','#000000','selectionService','tse-css-out','writeText','_inputX','match','offsetY','textContent','623238pkQVlc','_refresh','_buildCss','156496zBVqxK','_renderList','offsetX','instanceServiceContainer','none','appendChild','tse-y-val','set\x20text-shadow','node-projects-text-shadow-editor-window','style','catch','add','_previewText','_moveLayer','blur','tse-load-btn','tse-blur-val','12qqfJyd','_getDomElement','join','text-shadow','clipboard','_duplicateLayer','8244830NmFyfB','trim','4HmyrlH'];a=function(){return N;};return a();}const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x160))/0x1+-parseInt(m(0x18a))/0x2+-parseInt(m(0x15f))/0x3+parseInt(m(0x1a6))/0x4*(parseInt(m(0x1a8))/0x5)+parseInt(m(0x19e))/0x6*(-parseInt(m(0x179))/0x7)+parseInt(m(0x18d))/0x8*(-parseInt(m(0x1b5))/0x9)+parseInt(m(0x1a4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2cc63));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x16d)](f=>f[n(0x1ae)](0x10)['padStart'](0x2,'0'))[n(0x1a0)]('');}function hexToRgb(c){const o=b,d=parseInt(c[o(0x174)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[o(0x174)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d[p(0x177)](i);f='';continue;}}}f+=h;}const g=f[p(0x1a5)]();if(g)d[p(0x177)](g);return d;}function layerToCss(c){const q=b,d=(c['opacity']/0x64)[q(0x180)](0x2);return c['offsetX']+'px\x20'+c['offsetY']+q(0x1b6)+c['blur']+'px\x20rgba('+hexToRgb(c[q(0x181)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c===r(0x191))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0x1a5)]());if(f)d['push'](f);}return d[r(0x176)]?d:[defaultLayer()];}function b(c,d){c=c-0x15b;const e=a();let f=e[c];return f;}function parseOneLayer(c){const s=b;let d=s(0x182),e=0x64,f=c;const g=f[s(0x187)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0x1a5)]();const j=i[s(0x187)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x176)]===0x4?'#'+k[0x1][s(0x174)](0x1)['split']('')['map'](l=>l+l)['join'](''):k[0x1][s(0x174)](0x0,0x7),f=f[s(0x1af)](k[0x1],'')['trim']());}const h=f[s(0x172)](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0x1aa)]=[defaultLayer()];['_selectedIndex']=0x0;[t(0x170)];[t(0x1ad)];['_enabledCheck'];['_inputX'];[t(0x165)];['_inputBlur'];[t(0x178)];['_inputOpacity'];['_opacityVal'];[t(0x199)];['_cssOutput'];[t(0x17c)];[t(0x1b4)];['_applyBtn'];get['windowTitle'](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[t(0x16b)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const u=t;super(c),this['_layerList']=this[u(0x19f)]('tse-layer-list'),this[u(0x1ad)]=this[u(0x19f)]('tse-remove-btn'),this[u(0x1b0)]=this['_getDomElement']('tse-enabled'),this[u(0x186)]=this['_getDomElement']('tse-x'),this['_inputY']=this[u(0x19f)]('tse-y'),this['_inputBlur']=this[u(0x19f)](u(0x1ab)),this[u(0x178)]=this['_getDomElement']('tse-color'),this['_inputOpacity']=this[u(0x19f)]('tse-opacity'),this['_opacityVal']=this[u(0x19f)]('tse-opacity-val'),this['_previewText']=this['_getDomElement'](u(0x1ac)),this['_cssOutput']=this['_getDomElement'](u(0x184)),this[u(0x17c)]=this['_getDomElement'](u(0x19c)),this['_copyBtn']=this['_getDomElement']('tse-copy-btn'),this[u(0x161)]=this['_getDomElement'](u(0x168)),this[u(0x19f)](u(0x169))[u(0x17d)]=()=>this['_addLayer'](),this['_getDomElement']('tse-dup-btn')[u(0x17d)]=()=>this[u(0x1a3)](),this[u(0x19f)]('tse-up-btn')[u(0x17d)]=()=>this['_moveLayer'](-0x1),this[u(0x19f)]('tse-down-btn')['onclick']=()=>this[u(0x19a)](0x1),this[u(0x1ad)][u(0x17d)]=()=>this[u(0x162)](),this[u(0x1b0)]['onchange']=()=>{const v=u;this['_currentLayer']()[v(0x15e)]=this['_enabledCheck']['checked'],this['_refresh']();};for(const [d,e,f]of[[this[u(0x186)],'offsetX','tse-x-val'],[this['_inputY'],u(0x188),'tse-y-val'],[this[u(0x16e)],'blur','tse-blur-val']]){d[u(0x17a)]=()=>{const w=u;this[w(0x17e)]()[e]=Number(d[w(0x17f)]),this['_getDomElement'](f)[w(0x189)]=d[w(0x17f)]+'px',this['_refresh']();};}this[u(0x178)]['oninput']=()=>{const x=u;this[x(0x17e)]()['color']=this[x(0x178)][x(0x17f)],this[x(0x18b)]();},this[u(0x16c)]['oninput']=()=>{const y=u;this['_currentLayer']()[y(0x16a)]=Number(this['_inputOpacity']['value']),this['_opacityVal'][y(0x189)]=this[y(0x16c)][y(0x17f)]+'%',this[y(0x18b)]();},this[u(0x1b4)]['onclick']=()=>{const z=u;navigator[z(0x1a2)]?.[z(0x185)](this['_cssOutput']['value'])[z(0x197)](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this[u(0x17c)][u(0x17d)]=()=>{const A=u;this[A(0x164)](),this[A(0x18e)](),this['_loadControls'](),this[A(0x18b)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this[u(0x167)](),this[u(0x18b)]();}['_loadFromPrimarySelection'](){const B=t,c=this[B(0x173)]?.['instanceServiceContainer']?.[B(0x183)]?.['primarySelection'];if(!c)return;const d=c[B(0x15d)](B(0x1a1));d&&(this[B(0x1aa)]=parseCssTextShadow(d),this[B(0x15b)]=0x0);}[t(0x17e)](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const C=t;this['_layers']['push'](defaultLayer()),this[C(0x15b)]=this[C(0x1aa)][C(0x176)]-0x1,this[C(0x18e)](),this['_loadControls'](),this[C(0x18b)]();}['_duplicateLayer'](){const D=t;this['_layers']['splice'](this[D(0x15b)]+0x1,0x0,{...this['_currentLayer']()}),this[D(0x15b)]=this[D(0x15b)]+0x1,this[D(0x18e)](),this['_loadControls'](),this['_refresh']();}['_removeLayer'](){const E=t;if(this[E(0x1aa)][E(0x176)]<=0x1)return;this['_layers'][E(0x15c)](this[E(0x15b)],0x1),this['_selectedIndex']=Math['min'](this[E(0x15b)],this['_layers'][E(0x176)]-0x1),this[E(0x18e)](),this['_loadControls'](),this[E(0x18b)]();}['_moveLayer'](c){const F=t,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this[F(0x1aa)][e]]=[this[F(0x1aa)][e],this['_layers'][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}[t(0x18e)](){const G=t;this[G(0x170)][G(0x1b3)]='',this[G(0x1aa)]['forEach']((c,d)=>{const H=G,e=document[H(0x171)]('li');if(d===this[H(0x15b)])e['classList'][H(0x198)](H(0x1b1));const f=document[H(0x171)]('span');f[H(0x1b2)]='swatch',f[H(0x196)]['background']=c['color'],e[H(0x192)](f);const g=document['createElement'](H(0x175));g['textContent']=c[H(0x18f)]+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px';if(!c[H(0x15e)])g['classList']['add']('disabled-label');e[H(0x192)](g),e['onclick']=()=>{const I=H;this[I(0x15b)]=d,this[I(0x18e)](),this[I(0x167)]();},this['_layerList'][H(0x192)](e);});}['_loadControls'](){const J=t,c=this['_currentLayer']();this['_enabledCheck'][J(0x163)]=c['enabled'],this[J(0x186)][J(0x17f)]=String(c[J(0x18f)]),this[J(0x19f)](J(0x16f))[J(0x189)]=c['offsetX']+'px',this['_inputY']['value']=String(c[J(0x188)]),this[J(0x19f)](J(0x193))['textContent']=c[J(0x188)]+'px',this[J(0x16e)]['value']=String(c[J(0x19b)]),this[J(0x19f)](J(0x19d))['textContent']=c['blur']+'px',this[J(0x178)]['value']=c['color'],this['_inputOpacity']['value']=String(c['opacity']),this['_opacityVal'][J(0x189)]=c[J(0x16a)]+'%';}[t(0x18c)](){const K=t;return this['_layers'][K(0x166)](c=>c[K(0x15e)])[K(0x16d)](layerToCss)['join'](',\x20')||'none';}['_refresh'](){const L=t,c=this[L(0x18c)]();this['_previewText']['style'][L(0x1a9)]=c,this['_cssOutput']['value']=c,this['_renderList']();}[t(0x1a7)](){const M=t,c=this['_designerCanvas']?.[M(0x190)]?.[M(0x183)]?.['selectedElements'];if(!c?.['length'])return;const d=this[M(0x18c)](),e=c[0x0]['openGroup'](M(0x194));for(const f of c){if(d===M(0x191))f['removeStyle']('text-shadow');else f[M(0x17b)](M(0x1a1),d);}e['commit']();}}customElements['define'](t(0x195),TextShadowEditorWindow);