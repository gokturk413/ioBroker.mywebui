const u=b;function b(c,d){c=c-0x179;const e=a();let f=e[c];return f;}(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x17b))/0x1+-parseInt(m(0x17e))/0x2*(-parseInt(m(0x185))/0x3)+parseInt(m(0x1a2))/0x4*(parseInt(m(0x1cc))/0x5)+-parseInt(m(0x1a6))/0x6*(-parseInt(m(0x195))/0x7)+parseInt(m(0x1a7))/0x8*(parseInt(m(0x1c2))/0x9)+parseInt(m(0x1b4))/0xa+-parseInt(m(0x1aa))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7e314));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x18b),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e][o(0x1d0)](f=>f['toString'](0x10)[o(0x1cb)](0x2,'0'))['join']('');}function a(){const P=['_selectedIndex','none','textShadow','_renderList','getStyle','innerHTML','_addLayer','oninput','define','slice','Text\x20Shadow\x20Editor','6515919hHfgWI','textContent','_loadControls','tse-down-btn','join','opacity','_removeLayer','windowTemplate','px\x20','padStart','22735rckhHZ','span','tse-y-val','splice','map','tse-remove-btn','appendChild','_copyBtn','_cssOutput','forEach','_layers','_loadBtn','blur','offsetY','tse-color','add','266734xtpfcZ','_applyToSelection','_loadFromPrimarySelection','932938WTgfRw','onclick','removeStyle','className','_removeBtn','trim','style','3HgBgDR','tse-x','_moveLayer','_refresh','tse-add-btn','tse-blur-val','#000000','color','match','onchange','selectionService','_previewText','tse-load-btn','push','length','_getDomElement','4011tBRtyD','_designerCanvas','tse-opacity','checked','_layerList','_inputColor','enabled','split','createElement','swatch','_enabledCheck','_buildCss','text-shadow','428bSyvaJ','_currentLayer','_applyBtn','_inputY','2262HEYKWO','8RJFHAl','offsetX','min','26291045ENScVa','_inputX','tse-enabled','tse-layer-list','commit','filter','value','writeText','tse-opacity-val','_inputOpacity','7472350boDfzD','_inputBlur','tse-blur'];a=function(){return P;};return a();}function hexToRgb(c){const p=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[p(0x1c0)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[q(0x183)]();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f[q(0x183)]();if(g)d[q(0x192)](g);return d;}function layerToCss(c){const r=b,d=(c[r(0x1c7)]/0x64)['toFixed'](0x2);return c[r(0x1a8)]+r(0x1ca)+c[r(0x1d9)]+'px\x20'+c[r(0x1d8)]+'px\x20rgba('+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const s=b;if(!c||c===s(0x1b8))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[s(0x183)]());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const t=b;let d=t(0x18b),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')['trim']();const j=i[t(0x18d)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][t(0x193)]===0x4?'#'+k[0x1]['slice'](0x1)['split']('')['map'](l=>l+l)['join'](''):k[0x1][t(0x1c0)](0x0,0x7),f=f['replace'](k[0x1],'')[t(0x183)]());}const h=f[t(0x19c)](/\s+/)[t(0x1af)](Boolean)[t(0x1d0)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[t(0x193)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[u(0x1d6)]=[defaultLayer()];[u(0x1b7)]=0x0;['_layerList'];['_removeBtn'];['_enabledCheck'];['_inputX'];['_inputY'];[u(0x1b5)];[u(0x19a)];['_inputOpacity'];['_opacityVal'];[u(0x190)];[u(0x1d4)];[u(0x1d7)];[u(0x1d3)];[u(0x1a4)];get['windowTitle'](){const v=u;return v(0x1c1);}get['windowContentStyle'](){return css`
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
    `;}get[u(0x1c9)](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const w=u;super(c),this[w(0x199)]=this['_getDomElement'](w(0x1ad)),this['_removeBtn']=this[w(0x194)](w(0x1d1)),this['_enabledCheck']=this[w(0x194)](w(0x1ac)),this[w(0x1ab)]=this['_getDomElement'](w(0x186)),this[w(0x1a5)]=this['_getDomElement']('tse-y'),this[w(0x1b5)]=this['_getDomElement'](w(0x1b6)),this[w(0x19a)]=this['_getDomElement'](w(0x179)),this[w(0x1b3)]=this['_getDomElement'](w(0x197)),this['_opacityVal']=this['_getDomElement'](w(0x1b2)),this[w(0x190)]=this['_getDomElement']('tse-preview'),this[w(0x1d4)]=this['_getDomElement']('tse-css-out'),this['_loadBtn']=this['_getDomElement'](w(0x191)),this[w(0x1d3)]=this['_getDomElement']('tse-copy-btn'),this[w(0x1a4)]=this['_getDomElement']('tse-apply-btn'),this['_getDomElement'](w(0x189))['onclick']=()=>this[w(0x1bd)](),this[w(0x194)]('tse-dup-btn')['onclick']=()=>this['_duplicateLayer'](),this[w(0x194)]('tse-up-btn')['onclick']=()=>this['_moveLayer'](-0x1),this[w(0x194)](w(0x1c5))['onclick']=()=>this['_moveLayer'](0x1),this[w(0x182)][w(0x17f)]=()=>this[w(0x1c8)](),this[w(0x19f)][w(0x18e)]=()=>{const x=w;this['_currentLayer']()['enabled']=this[x(0x19f)][x(0x198)],this[x(0x188)]();};for(const [d,e,f]of[[this[w(0x1ab)],'offsetX','tse-x-val'],[this[w(0x1a5)],w(0x1d9),w(0x1ce)],[this['_inputBlur'],'blur',w(0x18a)]]){d[w(0x1be)]=()=>{const y=w;this['_currentLayer']()[e]=Number(d['value']),this[y(0x194)](f)[y(0x1c3)]=d['value']+'px',this['_refresh']();};}this[w(0x19a)]['oninput']=()=>{const z=w;this[z(0x1a3)]()[z(0x18c)]=this['_inputColor']['value'],this[z(0x188)]();},this['_inputOpacity']['oninput']=()=>{this['_currentLayer']()['opacity']=Number(this['_inputOpacity']['value']),this['_opacityVal']['textContent']=this['_inputOpacity']['value']+'%',this['_refresh']();},this[w(0x1d3)][w(0x17f)]=()=>{const A=w;navigator['clipboard']?.[A(0x1b1)](this[A(0x1d4)][A(0x1b0)])['catch'](()=>{});},this['_applyBtn'][w(0x17f)]=()=>this['_applyToSelection'](),this['_loadBtn'][w(0x17f)]=()=>{const B=w;this[B(0x17d)](),this['_renderList'](),this[B(0x1c4)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this['_renderList'](),this[w(0x1c4)](),this['_refresh']();}[u(0x17d)](){const C=u,c=this[C(0x196)]?.['instanceServiceContainer']?.[C(0x18f)]?.['primarySelection'];if(!c)return;const d=c[C(0x1bb)](C(0x1a1));d&&(this[C(0x1d6)]=parseCssTextShadow(d),this[C(0x1b7)]=0x0);}[u(0x1a3)](){const D=u;return this[D(0x1d6)][this[D(0x1b7)]];}[u(0x1bd)](){const E=u;this['_layers']['push'](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this[E(0x1ba)](),this[E(0x1c4)](),this[E(0x188)]();}['_duplicateLayer'](){const F=u;this[F(0x1d6)][F(0x1cf)](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this[F(0x1b7)]=this['_selectedIndex']+0x1,this[F(0x1ba)](),this['_loadControls'](),this['_refresh']();}[u(0x1c8)](){const G=u;if(this['_layers'][G(0x193)]<=0x1)return;this[G(0x1d6)][G(0x1cf)](this[G(0x1b7)],0x1),this[G(0x1b7)]=Math[G(0x1a9)](this['_selectedIndex'],this['_layers'][G(0x193)]-0x1),this[G(0x1ba)](),this[G(0x1c4)](),this[G(0x188)]();}[u(0x187)](c){const H=u,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[H(0x1d6)]['length'])return;[this[H(0x1d6)][d],this['_layers'][e]]=[this['_layers'][e],this['_layers'][d]],this[H(0x1b7)]=e,this[H(0x1ba)](),this[H(0x188)]();}['_renderList'](){const I=u;this[I(0x199)][I(0x1bc)]='',this[I(0x1d6)][I(0x1d5)]((c,d)=>{const J=I,e=document[J(0x19d)]('li');if(d===this[J(0x1b7)])e['classList'][J(0x17a)]('selected');const f=document['createElement'](J(0x1cd));f[J(0x181)]=J(0x19e),f[J(0x184)]['background']=c['color'],e[J(0x1d2)](f);const g=document['createElement'](J(0x1cd));g['textContent']=c[J(0x1a8)]+J(0x1ca)+c[J(0x1d9)]+'px\x20'+c[J(0x1d8)]+'px';if(!c['enabled'])g['classList']['add']('disabled-label');e[J(0x1d2)](g),e[J(0x17f)]=()=>{const K=J;this['_selectedIndex']=d,this['_renderList'](),this[K(0x1c4)]();},this['_layerList'][J(0x1d2)](e);});}[u(0x1c4)](){const L=u,c=this[L(0x1a3)]();this[L(0x19f)]['checked']=c['enabled'],this['_inputX'][L(0x1b0)]=String(c['offsetX']),this[L(0x194)]('tse-x-val')[L(0x1c3)]=c[L(0x1a8)]+'px',this['_inputY']['value']=String(c['offsetY']),this['_getDomElement'](L(0x1ce))[L(0x1c3)]=c[L(0x1d9)]+'px',this['_inputBlur'][L(0x1b0)]=String(c[L(0x1d8)]),this['_getDomElement'](L(0x18a))['textContent']=c['blur']+'px',this[L(0x19a)][L(0x1b0)]=c[L(0x18c)],this['_inputOpacity'][L(0x1b0)]=String(c[L(0x1c7)]),this['_opacityVal'][L(0x1c3)]=c['opacity']+'%';}['_buildCss'](){const M=u;return this[M(0x1d6)]['filter'](c=>c[M(0x19b)])[M(0x1d0)](layerToCss)[M(0x1c6)](',\x20')||'none';}['_refresh'](){const N=u,c=this['_buildCss']();this['_previewText']['style'][N(0x1b9)]=c,this['_cssOutput'][N(0x1b0)]=c,this[N(0x1ba)]();}[u(0x17c)](){const O=u,c=this[O(0x196)]?.['instanceServiceContainer']?.[O(0x18f)]?.['selectedElements'];if(!c?.[O(0x193)])return;const d=this[O(0x1a0)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d===O(0x1b8))f[O(0x180)](O(0x1a1));else f['setStyle'](O(0x1a1),d);}e[O(0x1ae)]();}}customElements[u(0x1bf)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);