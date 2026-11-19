const s=b;function b(c,d){c=c-0x1bc;const e=a();let f=e[c];return f;}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1cf))/0x1+parseInt(m(0x1d1))/0x2*(parseInt(m(0x1d3))/0x3)+parseInt(m(0x1be))/0x4+-parseInt(m(0x20a))/0x5*(parseInt(m(0x1f4))/0x6)+-parseInt(m(0x1db))/0x7*(parseInt(m(0x1ef))/0x8)+-parseInt(m(0x206))/0x9+parseInt(m(0x205))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x373c8));function a(){const N=['replace','px\x20','clipboard','_duplicateLayer','_opacityVal','tse-load-btn','length','_inputColor','_inputY','splice','offsetX','none','node-projects-text-shadow-editor-window','createElement','_getDomElement','tse-blur','130488rPvlZj','push','810462MmhKAH','onchange','3oCOHrK','_addLayer','getStyle','toFixed','toString','blur','enabled','classList','7hUHXny','tse-x-val','tse-layer-list','_inputOpacity','tse-dup-btn','tse-y-val','opacity','_applyToSelection','tse-blur-val','_removeLayer','_layers','openGroup','_moveLayer','offsetY','#000000','_previewText','filter','tse-up-btn','checked','_renderList','35752OOQnBn','text-shadow','oninput','round','match','6iztzDm','_refresh','_loadBtn','innerHTML','_loadControls','selectionService','_buildCss','map','_applyBtn','_selectedIndex','_inputX','_layerList','_cssOutput','color','split','_inputBlur','trim','3862310DeYmbq','2796282kxCJEI','tse-down-btn','join','tse-color','1714665JcUePg','textContent','value','_copyBtn','slice','_enabledCheck','_currentLayer','onclick','appendChild','893496CWiUJG'];a=function(){return N;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x1fb)](f=>f[n(0x1d7)](0x10)['padStart'](0x2,'0'))[n(0x208)]('');}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[o(0x20e)](0x3,0x5),0x10),f=parseInt(c[o(0x20e)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0x204)]();if(i)d[p(0x1d0)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x1e1)]/0x64)[q(0x1d6)](0x2);return c['offsetX']+'px\x20'+c['offsetY']+'px\x20'+c['blur']+'px\x20rgba('+hexToRgb(c[q(0x201)])+','+d+')';}function parseCssTextShadow(c){if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const r=b;let d=r(0x1e9),e=0x64,f=c;const g=f[r(0x1f3)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[r(0x204)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[r(0x1f2)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[r(0x1f3)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][r(0x1c5)]===0x4?'#'+k[0x1][r(0x20e)](0x1)[r(0x202)]('')[r(0x1fb)](l=>l+l)['join'](''):k[0x1][r(0x20e)](0x0,0x7),f=f[r(0x1bf)](k[0x1],'')[r(0x204)]());}const h=f[r(0x202)](/\s+/)[r(0x1eb)](Boolean)[r(0x1fb)](l=>parseFloat(l))[r(0x1eb)](l=>!isNaN(l));if(h[r(0x1c5)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[s(0x1e5)]=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];['_removeBtn'];['_enabledCheck'];[s(0x1fe)];['_inputY'];[s(0x203)];[s(0x1c6)];['_inputOpacity'];[s(0x1c3)];['_previewText'];[s(0x200)];[s(0x1f6)];[s(0x20d)];[s(0x1fc)];get['windowTitle'](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){return'\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>';}constructor(c){const t=s;super(c),this[t(0x1ff)]=this[t(0x1cd)](t(0x1dd)),this['_removeBtn']=this[t(0x1cd)]('tse-remove-btn'),this['_enabledCheck']=this['_getDomElement']('tse-enabled'),this['_inputX']=this['_getDomElement']('tse-x'),this['_inputY']=this[t(0x1cd)]('tse-y'),this['_inputBlur']=this['_getDomElement'](t(0x1ce)),this[t(0x1c6)]=this['_getDomElement'](t(0x209)),this['_inputOpacity']=this[t(0x1cd)]('tse-opacity'),this[t(0x1c3)]=this['_getDomElement']('tse-opacity-val'),this[t(0x1ea)]=this[t(0x1cd)]('tse-preview'),this[t(0x200)]=this['_getDomElement']('tse-css-out'),this['_loadBtn']=this[t(0x1cd)](t(0x1c4)),this['_copyBtn']=this['_getDomElement']('tse-copy-btn'),this[t(0x1fc)]=this[t(0x1cd)]('tse-apply-btn'),this['_getDomElement']('tse-add-btn')[t(0x1bc)]=()=>this[t(0x1d4)](),this[t(0x1cd)](t(0x1df))[t(0x1bc)]=()=>this['_duplicateLayer'](),this['_getDomElement'](t(0x1ec))[t(0x1bc)]=()=>this['_moveLayer'](-0x1),this['_getDomElement'](t(0x207))[t(0x1bc)]=()=>this[t(0x1e7)](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this[t(0x20f)][t(0x1d2)]=()=>{const u=t;this['_currentLayer']()[u(0x1d9)]=this[u(0x20f)]['checked'],this[u(0x1f5)]();};for(const [d,e,f]of[[this[t(0x1fe)],t(0x1c9),t(0x1dc)],[this[t(0x1c7)],'offsetY','tse-y-val'],[this['_inputBlur'],'blur','tse-blur-val']]){d[t(0x1f1)]=()=>{const v=t;this['_currentLayer']()[e]=Number(d[v(0x20c)]),this[v(0x1cd)](f)['textContent']=d['value']+'px',this['_refresh']();};}this['_inputColor']['oninput']=()=>{const w=t;this[w(0x210)]()[w(0x201)]=this['_inputColor']['value'],this[w(0x1f5)]();},this[t(0x1de)][t(0x1f1)]=()=>{const x=t;this[x(0x210)]()['opacity']=Number(this['_inputOpacity']['value']),this[x(0x1c3)]['textContent']=this['_inputOpacity']['value']+'%',this['_refresh']();},this[t(0x20d)]['onclick']=()=>{const y=t;navigator[y(0x1c1)]?.['writeText'](this[y(0x200)][y(0x20c)])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this[t(0x1f6)]['onclick']=()=>{const z=t;this['_loadFromPrimarySelection'](),this[z(0x1ee)](),this[z(0x1f8)](),this[z(0x1f5)]();},this['_loadFromPrimarySelection'](),this[t(0x1ee)](),this['_loadControls'](),this['_refresh']();}['_loadFromPrimarySelection'](){const A=s,c=this['_designerCanvas']?.['instanceServiceContainer']?.[A(0x1f9)]?.['primarySelection'];if(!c)return;const d=c[A(0x1d5)]('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this['_selectedIndex']=0x0);}[s(0x210)](){const B=s;return this[B(0x1e5)][this[B(0x1fd)]];}['_addLayer'](){const C=s;this['_layers'][C(0x1d0)](defaultLayer()),this['_selectedIndex']=this[C(0x1e5)][C(0x1c5)]-0x1,this[C(0x1ee)](),this['_loadControls'](),this['_refresh']();}[s(0x1c2)](){const D=s;this[D(0x1e5)][D(0x1c8)](this[D(0x1fd)]+0x1,0x0,{...this[D(0x210)]()}),this[D(0x1fd)]=this['_selectedIndex']+0x1,this[D(0x1ee)](),this[D(0x1f8)](),this[D(0x1f5)]();}[s(0x1e4)](){const E=s;if(this[E(0x1e5)]['length']<=0x1)return;this[E(0x1e5)][E(0x1c8)](this[E(0x1fd)],0x1),this['_selectedIndex']=Math['min'](this['_selectedIndex'],this['_layers'][E(0x1c5)]-0x1),this['_renderList'](),this['_loadControls'](),this[E(0x1f5)]();}[s(0x1e7)](c){const F=s,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[F(0x1e5)][F(0x1c5)])return;[this['_layers'][d],this[F(0x1e5)][e]]=[this[F(0x1e5)][e],this[F(0x1e5)][d]],this[F(0x1fd)]=e,this['_renderList'](),this['_refresh']();}['_renderList'](){const G=s;this[G(0x1ff)][G(0x1f7)]='',this[G(0x1e5)]['forEach']((c,d)=>{const H=G,e=document[H(0x1cc)]('li');if(d===this['_selectedIndex'])e['classList']['add']('selected');const f=document['createElement']('span');f['className']='swatch',f['style']['background']=c[H(0x201)],e['appendChild'](f);const g=document[H(0x1cc)]('span');g[H(0x20b)]=c[H(0x1c9)]+'px\x20'+c['offsetY']+H(0x1c0)+c[H(0x1d8)]+'px';if(!c[H(0x1d9)])g[H(0x1da)]['add']('disabled-label');e[H(0x1bd)](g),e[H(0x1bc)]=()=>{const I=H;this['_selectedIndex']=d,this[I(0x1ee)](),this['_loadControls']();},this[H(0x1ff)][H(0x1bd)](e);});}['_loadControls'](){const J=s,c=this['_currentLayer']();this[J(0x20f)][J(0x1ed)]=c[J(0x1d9)],this[J(0x1fe)][J(0x20c)]=String(c[J(0x1c9)]),this['_getDomElement']('tse-x-val')[J(0x20b)]=c['offsetX']+'px',this[J(0x1c7)]['value']=String(c['offsetY']),this[J(0x1cd)](J(0x1e0))[J(0x20b)]=c[J(0x1e8)]+'px',this[J(0x203)]['value']=String(c[J(0x1d8)]),this['_getDomElement'](J(0x1e3))[J(0x20b)]=c['blur']+'px',this['_inputColor'][J(0x20c)]=c['color'],this[J(0x1de)][J(0x20c)]=String(c['opacity']),this['_opacityVal'][J(0x20b)]=c[J(0x1e1)]+'%';}[s(0x1fa)](){const K=s;return this['_layers']['filter'](c=>c['enabled'])[K(0x1fb)](layerToCss)['join'](',\x20')||K(0x1ca);}['_refresh'](){const L=s,c=this[L(0x1fa)]();this[L(0x1ea)]['style']['textShadow']=c,this[L(0x200)][L(0x20c)]=c,this[L(0x1ee)]();}[s(0x1e2)](){const M=s,c=this['_designerCanvas']?.['instanceServiceContainer']?.[M(0x1f9)]?.['selectedElements'];if(!c?.[M(0x1c5)])return;const d=this['_buildCss'](),e=c[0x0][M(0x1e6)]('set\x20text-shadow');for(const f of c){if(d===M(0x1ca))f['removeStyle'](M(0x1f0));else f['setStyle']('text-shadow',d);}e['commit']();}}customElements['define'](s(0x1cb),TextShadowEditorWindow);