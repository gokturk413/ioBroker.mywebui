const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1b7))/0x1+parseInt(m(0x1a0))/0x2*(-parseInt(m(0x17d))/0x3)+-parseInt(m(0x1ac))/0x4*(parseInt(m(0x188))/0x5)+-parseInt(m(0x172))/0x6*(parseInt(m(0x1a1))/0x7)+parseInt(m(0x19b))/0x8+-parseInt(m(0x186))/0x9+-parseInt(m(0x1c7))/0xa*(-parseInt(m(0x17a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf3a6e));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x16b;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x1c9)](f=>f['toString'](0x10)['padStart'](0x2,'0'))['join']('');}function hexToRgb(c){const o=b,d=parseInt(c[o(0x19e)](0x1,0x3),0x10),e=parseInt(c[o(0x19e)](0x3,0x5),0x10),f=parseInt(c[o(0x19e)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d[p(0x1bb)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x181)]/0x64)['toFixed'](0x2);return c['offsetX']+'px\x20'+c['offsetY']+q(0x199)+c['blur']+q(0x18d)+hexToRgb(c[q(0x191)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[r(0x1bb)](f);}return d['length']?d:[defaultLayer()];}function a(){const N=['map','getStyle','innerHTML','tse-apply-btn','_currentLayer','_copyBtn','_cssOutput','_inputColor','onclick','1614282FuXvXC','_removeBtn','_refresh','tse-opacity','_addLayer','_loadControls','tse-blur-val','tse-x','407ISvsRJ','value','tse-y-val','1410246DjRwwh','classList','_opacityVal','split','opacity','_renderList','tse-blur','tse-copy-btn','min','9498870KNeSqK','_moveLayer','275GWhuzA','match','join','_getDomElement','setStyle','px\x20rgba(','span','offsetX','tse-css-out','color','background','_designerCanvas','_loadFromPrimarySelection','tse-enabled','_removeLayer','_inputY','windowTitle','px\x20','oninput','2005888nOHEuS','_buildCss','none','slice','length','8bknlLW','49QUKKjY','removeStyle','_applyToSelection','swatch','enabled','tse-x-val','_previewText','appendChild','offsetY','selectedElements','createElement','548ZFHctE','_loadBtn','openGroup','tse-color','add','_applyBtn','textContent','_inputX','_duplicateLayer','tse-add-btn','_inputOpacity','547692OTTIBV','trim','blur','round','push','_layerList','tse-down-btn','_layers','tse-y','_selectedIndex','_enabledCheck','checked','tse-up-btn','filter','splice','text-shadow','1654480tDvcMU','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>'];a=function(){return N;};return a();}function parseOneLayer(c){const s=b;let d='#000000',e=0x64,f=c;const g=f[s(0x189)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0x1b8)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0x1ba)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1][s(0x19e)](0x1)[s(0x180)]('')['map'](l=>l+l)['join'](''):k[0x1]['slice'](0x0,0x7),f=f['replace'](k[0x1],'')['trim']());}const h=f['split'](/\s+/)[s(0x1c4)](Boolean)['map'](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0x1be)]=[defaultLayer()];[t(0x1c0)]=0x0;['_layerList'];['_removeBtn'];[t(0x1c1)];['_inputX'];['_inputY'];['_inputBlur'];['_inputColor'];[t(0x1b6)];['_opacityVal'];['_previewText'];[t(0x16f)];[t(0x1ad)];[t(0x16e)];['_applyBtn'];get[t(0x198)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const u=t;return u(0x1c8);}constructor(c){const v=t;super(c),this['_layerList']=this[v(0x18b)]('tse-layer-list'),this[v(0x173)]=this['_getDomElement']('tse-remove-btn'),this[v(0x1c1)]=this['_getDomElement'](v(0x195)),this['_inputX']=this[v(0x18b)](v(0x179)),this[v(0x197)]=this[v(0x18b)](v(0x1bf)),this['_inputBlur']=this['_getDomElement'](v(0x183)),this[v(0x170)]=this[v(0x18b)](v(0x1af)),this['_inputOpacity']=this['_getDomElement'](v(0x175)),this[v(0x17f)]=this[v(0x18b)]('tse-opacity-val'),this[v(0x1a7)]=this[v(0x18b)]('tse-preview'),this[v(0x16f)]=this['_getDomElement'](v(0x190)),this['_loadBtn']=this[v(0x18b)]('tse-load-btn'),this[v(0x16e)]=this['_getDomElement'](v(0x184)),this[v(0x1b1)]=this[v(0x18b)](v(0x16c)),this[v(0x18b)](v(0x1b5))[v(0x171)]=()=>this['_addLayer'](),this['_getDomElement']('tse-dup-btn')['onclick']=()=>this[v(0x1b4)](),this['_getDomElement'](v(0x1c3))[v(0x171)]=()=>this['_moveLayer'](-0x1),this['_getDomElement'](v(0x1bd))['onclick']=()=>this[v(0x187)](0x1),this[v(0x173)]['onclick']=()=>this[v(0x196)](),this[v(0x1c1)]['onchange']=()=>{const w=v;this['_currentLayer']()[w(0x1a5)]=this['_enabledCheck'][w(0x1c2)],this[w(0x174)]();};for(const [d,e,f]of[[this[v(0x1b3)],v(0x18f),v(0x1a6)],[this[v(0x197)],v(0x1a9),v(0x17c)],[this['_inputBlur'],v(0x1b9),v(0x178)]]){d[v(0x19a)]=()=>{this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)['textContent']=d['value']+'px',this['_refresh']();};}this['_inputColor'][v(0x19a)]=()=>{const x=v;this[x(0x16d)]()[x(0x191)]=this[x(0x170)]['value'],this['_refresh']();},this['_inputOpacity'][v(0x19a)]=()=>{const y=v;this[y(0x16d)]()['opacity']=Number(this[y(0x1b6)][y(0x17b)]),this[y(0x17f)]['textContent']=this[y(0x1b6)][y(0x17b)]+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{navigator['clipboard']?.['writeText'](this['_cssOutput']['value'])['catch'](()=>{});},this[v(0x1b1)][v(0x171)]=()=>this[v(0x1a3)](),this[v(0x1ad)][v(0x171)]=()=>{const z=v;this['_loadFromPrimarySelection'](),this[z(0x182)](),this['_loadControls'](),this[z(0x174)]();},this[v(0x194)](),this['_renderList'](),this[v(0x177)](),this[v(0x174)]();}[t(0x194)](){const A=t,c=this[A(0x193)]?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[A(0x1ca)]('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this[A(0x1c0)]=0x0);}[t(0x16d)](){const B=t;return this[B(0x1be)][this['_selectedIndex']];}[t(0x176)](){const C=t;this['_layers']['push'](defaultLayer()),this[C(0x1c0)]=this[C(0x1be)]['length']-0x1,this['_renderList'](),this[C(0x177)](),this['_refresh']();}[t(0x1b4)](){const D=t;this['_layers'][D(0x1c5)](this['_selectedIndex']+0x1,0x0,{...this[D(0x16d)]()}),this['_selectedIndex']=this[D(0x1c0)]+0x1,this[D(0x182)](),this['_loadControls'](),this['_refresh']();}['_removeLayer'](){const E=t;if(this[E(0x1be)][E(0x19f)]<=0x1)return;this['_layers']['splice'](this[E(0x1c0)],0x1),this[E(0x1c0)]=Math[E(0x185)](this[E(0x1c0)],this[E(0x1be)]['length']-0x1),this[E(0x182)](),this[E(0x177)](),this[E(0x174)]();}['_moveLayer'](c){const F=t,d=this[F(0x1c0)],e=d+c;if(e<0x0||e>=this['_layers'][F(0x19f)])return;[this[F(0x1be)][d],this[F(0x1be)][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this[F(0x182)](),this[F(0x174)]();}['_renderList'](){const G=t;this[G(0x1bc)][G(0x16b)]='',this['_layers']['forEach']((c,d)=>{const H=G,e=document[H(0x1ab)]('li');if(d===this[H(0x1c0)])e[H(0x17e)][H(0x1b0)]('selected');const f=document[H(0x1ab)](H(0x18e));f['className']=H(0x1a4),f['style'][H(0x192)]=c['color'],e['appendChild'](f);const g=document[H(0x1ab)]('span');g[H(0x1b2)]=c[H(0x18f)]+'px\x20'+c['offsetY']+H(0x199)+c[H(0x1b9)]+'px';if(!c[H(0x1a5)])g[H(0x17e)][H(0x1b0)]('disabled-label');e[H(0x1a8)](g),e[H(0x171)]=()=>{const I=H;this['_selectedIndex']=d,this['_renderList'](),this[I(0x177)]();},this['_layerList'][H(0x1a8)](e);});}[t(0x177)](){const J=t,c=this['_currentLayer']();this['_enabledCheck'][J(0x1c2)]=c[J(0x1a5)],this[J(0x1b3)]['value']=String(c['offsetX']),this['_getDomElement'](J(0x1a6))['textContent']=c['offsetX']+'px',this[J(0x197)][J(0x17b)]=String(c['offsetY']),this['_getDomElement'](J(0x17c))[J(0x1b2)]=c[J(0x1a9)]+'px',this['_inputBlur']['value']=String(c[J(0x1b9)]),this['_getDomElement'](J(0x178))[J(0x1b2)]=c['blur']+'px',this['_inputColor'][J(0x17b)]=c['color'],this[J(0x1b6)]['value']=String(c['opacity']),this[J(0x17f)][J(0x1b2)]=c['opacity']+'%';}['_buildCss'](){const K=t;return this['_layers']['filter'](c=>c['enabled'])[K(0x1c9)](layerToCss)[K(0x18a)](',\x20')||'none';}[t(0x174)](){const L=t,c=this[L(0x19c)]();this[L(0x1a7)]['style']['textShadow']=c,this[L(0x16f)][L(0x17b)]=c,this[L(0x182)]();}['_applyToSelection'](){const M=t,c=this[M(0x193)]?.['instanceServiceContainer']?.['selectionService']?.[M(0x1aa)];if(!c?.['length'])return;const d=this[M(0x19c)](),e=c[0x0][M(0x1ae)]('set\x20text-shadow');for(const f of c){if(d===M(0x19d))f[M(0x1a2)](M(0x1c6));else f[M(0x18c)]('text-shadow',d);}e['commit']();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);