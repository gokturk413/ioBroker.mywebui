const s=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x18b))/0x1*(-parseInt(m(0x187))/0x2)+parseInt(m(0x174))/0x3+-parseInt(m(0x161))/0x4+-parseInt(m(0x182))/0x5*(-parseInt(m(0x14d))/0x6)+parseInt(m(0x184))/0x7+-parseInt(m(0x160))/0x8*(parseInt(m(0x13c))/0x9)+-parseInt(m(0x170))/0xa*(parseInt(m(0x163))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f7f7));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x13b),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){return'#'+[c,d,e]['map'](f=>f['toString'](0x10)['padStart'](0x2,'0'))['join']('');}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[o(0x16e)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f[p(0x178)]();if(g)d['push'](g);return d;}function a(){const O=['classList','onclick','offsetY','tse-layer-list','_layers','textShadow','tse-y','selected','setStyle','tse-color','windowTitle','_currentLayer','95576fuRLpI','695188gcZLOE','_enabledCheck','44wmkUVy','tse-opacity-val','getStyle','join','_removeBtn','_selectedIndex','_inputX','tse-blur-val','push','set\x20text-shadow','_cssOutput','slice','_inputColor','204340ANwuPr','_loadBtn','_buildCss','min','323985qBOuCq','openGroup','disabled-label','blur','trim','_moveLayer','color','style','tse-copy-btn','_addLayer','tse-y-val','replace','_designerCanvas','_refresh','76965ZPpEqp','offsetX','84203ABhSKd','tse-preview','_inputY','4WQIOrS','textContent','_opacityVal','map','255810fdihzv','_removeLayer','_loadControls','_inputOpacity','tse-x-val','oninput','catch','primarySelection','toFixed','swatch','tse-up-btn','value','#000000','99eQTMSX','_loadFromPrimarySelection','opacity','selectionService','round','_renderList','split','define','length','filter','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','enabled','_layerList','_previewText','span','px\x20','className','6BWgJsv','instanceServiceContainer','node-projects-text-shadow-editor-window','_copyBtn','_duplicateLayer','checked','_getDomElement'];a=function(){return O;};return a();}function b(c,d){c=c-0x133;const e=a();let f=e[c];return f;}function layerToCss(c){const q=b,d=(c[q(0x13e)]/0x64)[q(0x137)](0x2);return c[q(0x183)]+'px\x20'+c[q(0x156)]+'px\x20'+c['blur']+'px\x20rgba('+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const r=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[r(0x178)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[r(0x140)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][r(0x144)]===0x4?'#'+k[0x1]['slice'](0x1)[r(0x142)]('')[r(0x18a)](l=>l+l)['join'](''):k[0x1][r(0x16e)](0x0,0x7),f=f[r(0x17f)](k[0x1],'')[r(0x178)]());}const h=f['split'](/\s+/)[r(0x145)](Boolean)[r(0x18a)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[r(0x144)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;['_layerList'];[s(0x167)];['_enabledCheck'];['_inputX'];['_inputY'];['_inputBlur'];['_inputColor'];['_inputOpacity'];['_opacityVal'];['_previewText'];['_cssOutput'];[s(0x171)];[s(0x150)];['_applyBtn'];get[s(0x15e)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const t=s;return t(0x146);}constructor(c){const u=s;super(c),this['_layerList']=this[u(0x153)](u(0x157)),this[u(0x167)]=this[u(0x153)]('tse-remove-btn'),this['_enabledCheck']=this[u(0x153)]('tse-enabled'),this[u(0x169)]=this['_getDomElement']('tse-x'),this['_inputY']=this[u(0x153)](u(0x15a)),this['_inputBlur']=this[u(0x153)]('tse-blur'),this[u(0x16f)]=this[u(0x153)](u(0x15d)),this[u(0x18e)]=this[u(0x153)]('tse-opacity'),this['_opacityVal']=this['_getDomElement'](u(0x164)),this[u(0x149)]=this[u(0x153)](u(0x185)),this[u(0x16d)]=this[u(0x153)]('tse-css-out'),this['_loadBtn']=this[u(0x153)]('tse-load-btn'),this[u(0x150)]=this['_getDomElement'](u(0x17c)),this['_applyBtn']=this['_getDomElement']('tse-apply-btn'),this[u(0x153)]('tse-add-btn')[u(0x155)]=()=>this[u(0x17d)](),this['_getDomElement']('tse-dup-btn')[u(0x155)]=()=>this[u(0x151)](),this['_getDomElement'](u(0x139))['onclick']=()=>this[u(0x179)](-0x1),this['_getDomElement']('tse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this['_removeBtn'][u(0x155)]=()=>this[u(0x18c)](),this[u(0x162)]['onchange']=()=>{const v=u;this[v(0x15f)]()['enabled']=this[v(0x162)][v(0x152)],this['_refresh']();};for(const [d,e,f]of[[this[u(0x169)],'offsetX','tse-x-val'],[this['_inputY'],u(0x156),u(0x17e)],[this['_inputBlur'],'blur',u(0x16a)]]){d[u(0x134)]=()=>{const w=u;this['_currentLayer']()[e]=Number(d['value']),this[w(0x153)](f)['textContent']=d[w(0x13a)]+'px',this[w(0x181)]();};}this['_inputColor'][u(0x134)]=()=>{const x=u;this['_currentLayer']()[x(0x17a)]=this[x(0x16f)][x(0x13a)],this[x(0x181)]();},this[u(0x18e)]['oninput']=()=>{const y=u;this[y(0x15f)]()[y(0x13e)]=Number(this[y(0x18e)]['value']),this['_opacityVal']['textContent']=this['_inputOpacity'][y(0x13a)]+'%',this[y(0x181)]();},this[u(0x150)]['onclick']=()=>{const z=u;navigator['clipboard']?.['writeText'](this['_cssOutput']['value'])[z(0x135)](()=>{});},this['_applyBtn'][u(0x155)]=()=>this['_applyToSelection'](),this['_loadBtn'][u(0x155)]=()=>{const A=u;this[A(0x13d)](),this[A(0x141)](),this['_loadControls'](),this['_refresh']();},this[u(0x13d)](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[s(0x13d)](){const B=s,c=this['_designerCanvas']?.['instanceServiceContainer']?.[B(0x13f)]?.[B(0x136)];if(!c)return;const d=c[B(0x165)]('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this['_selectedIndex']=0x0);}[s(0x15f)](){const C=s;return this[C(0x158)][this['_selectedIndex']];}['_addLayer'](){const D=s;this['_layers'][D(0x16b)](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this['_renderList'](),this[D(0x18d)](),this[D(0x181)]();}[s(0x151)](){const E=s;this[E(0x158)]['splice'](this[E(0x168)]+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this['_selectedIndex']+0x1,this['_renderList'](),this[E(0x18d)](),this[E(0x181)]();}['_removeLayer'](){const F=s;if(this[F(0x158)]['length']<=0x1)return;this[F(0x158)]['splice'](this['_selectedIndex'],0x1),this[F(0x168)]=Math[F(0x173)](this['_selectedIndex'],this[F(0x158)][F(0x144)]-0x1),this[F(0x141)](),this[F(0x18d)](),this['_refresh']();}['_moveLayer'](c){const G=s,d=this[G(0x168)],e=d+c;if(e<0x0||e>=this['_layers']['length'])return;[this['_layers'][d],this['_layers'][e]]=[this['_layers'][e],this[G(0x158)][d]],this[G(0x168)]=e,this[G(0x141)](),this[G(0x181)]();}['_renderList'](){const H=s;this[H(0x148)]['innerHTML']='',this[H(0x158)]['forEach']((c,d)=>{const I=H,e=document['createElement']('li');if(d===this[I(0x168)])e['classList']['add'](I(0x15b));const f=document['createElement'](I(0x14a));f[I(0x14c)]=I(0x138),f[I(0x17b)]['background']=c[I(0x17a)],e['appendChild'](f);const g=document['createElement']('span');g[I(0x188)]=c['offsetX']+'px\x20'+c['offsetY']+I(0x14b)+c[I(0x177)]+'px';if(!c[I(0x147)])g[I(0x154)]['add'](I(0x176));e['appendChild'](g),e['onclick']=()=>{const J=I;this[J(0x168)]=d,this['_renderList'](),this[J(0x18d)]();},this[I(0x148)]['appendChild'](e);});}['_loadControls'](){const K=s,c=this['_currentLayer']();this[K(0x162)]['checked']=c[K(0x147)],this[K(0x169)][K(0x13a)]=String(c['offsetX']),this[K(0x153)](K(0x133))['textContent']=c['offsetX']+'px',this[K(0x186)]['value']=String(c['offsetY']),this[K(0x153)](K(0x17e))[K(0x188)]=c['offsetY']+'px',this['_inputBlur'][K(0x13a)]=String(c[K(0x177)]),this[K(0x153)](K(0x16a))['textContent']=c['blur']+'px',this[K(0x16f)]['value']=c[K(0x17a)],this['_inputOpacity']['value']=String(c[K(0x13e)]),this[K(0x189)]['textContent']=c[K(0x13e)]+'%';}['_buildCss'](){const L=s;return this[L(0x158)][L(0x145)](c=>c[L(0x147)])[L(0x18a)](layerToCss)[L(0x166)](',\x20')||'none';}['_refresh'](){const M=s,c=this[M(0x172)]();this[M(0x149)]['style'][M(0x159)]=c,this['_cssOutput']['value']=c,this[M(0x141)]();}['_applyToSelection'](){const N=s,c=this[N(0x180)]?.[N(0x14e)]?.[N(0x13f)]?.['selectedElements'];if(!c?.['length'])return;const d=this[N(0x172)](),e=c[0x0][N(0x175)](N(0x16c));for(const f of c){if(d==='none')f['removeStyle']('text-shadow');else f[N(0x15c)]('text-shadow',d);}e['commit']();}}customElements[s(0x143)](s(0x14f),TextShadowEditorWindow);