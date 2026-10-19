const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x168))/0x1+parseInt(m(0x148))/0x2*(parseInt(m(0x125))/0x3)+parseInt(m(0x146))/0x4+parseInt(m(0x12f))/0x5+parseInt(m(0x13f))/0x6+parseInt(m(0x129))/0x7+-parseInt(m(0x163))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x59e7a));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e][n(0x116)](f=>f['toString'](0x10)[n(0x14a)](0x2,'0'))[n(0x145)]('');}function b(c,d){c=c-0x110;const e=a();let f=e[c];return f;}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[o(0x111)](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d[p(0x16a)](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c['opacity']/0x64)['toFixed'](0x2);return c['offsetX']+'px\x20'+c['offsetY']+q(0x119)+c['blur']+'px\x20rgba('+hexToRgb(c[q(0x159)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c===r(0x167))return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d[r(0x16a)](f);}return d[r(0x12b)]?d:[defaultLayer()];}function a(){const P=['forEach','11828568zuiZog','match','splice','createElement','none','125919EKbPHP','checked','push','style','_renderList','slice','_applyBtn','textShadow','getStyle','offsetY','map','oninput','tse-blur-val','px\x20','openGroup','_refresh','removeStyle','text-shadow','instanceServiceContainer','tse-css-out','round','_loadControls','onclick','_layers','enabled','168228tCxVBV','filter','tse-opacity','tse-y-val','2035600XnKrAl','tse-load-btn','length','opacity','tse-apply-btn','_inputOpacity','3088225SKWgVq','_layerList','add','_currentLayer','selectionService','value','blur','_opacityVal','_selectedIndex','replace','offsetX','_copyBtn','Text\x20Shadow\x20Editor','_loadFromPrimarySelection','appendChild','_inputX','1024302ujNbgM','_applyToSelection','_loadBtn','_getDomElement','split','_removeBtn','join','1555576ZCjRut','textContent','18oCQaHg','tse-x-val','padStart','tse-down-btn','innerHTML','background','commit','tse-preview','_designerCanvas','_buildCss','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','trim','_inputBlur','_inputY','tse-dup-btn','_moveLayer','define','color','_enabledCheck','_cssOutput','_inputColor','_duplicateLayer','onchange','#000000','_removeLayer','_previewText'];a=function(){return P;};return a();}function parseOneLayer(c){const s=b;let d=s(0x15f),e=0x64,f=c;const g=f[s(0x164)](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[s(0x138)](i,'')['trim']();const j=i[s(0x164)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math[s(0x120)](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x164)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1]['slice'](0x1)[s(0x143)]('')[s(0x116)](l=>l+l)[s(0x145)](''):k[0x1][s(0x111)](0x0,0x7),f=f['replace'](k[0x1],'')[s(0x153)]());}const h=f['split'](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[s(0x12b)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[t(0x137)]=0x0;[t(0x130)];['_removeBtn'];['_enabledCheck'];[t(0x13e)];['_inputY'];['_inputBlur'];[t(0x15c)];['_inputOpacity'];['_opacityVal'];['_previewText'];['_cssOutput'];['_loadBtn'];['_copyBtn'];['_applyBtn'];get['windowTitle'](){const u=t;return u(0x13b);}get['windowContentStyle'](){return css`
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
    `;}get['windowTemplate'](){const v=t;return v(0x152);}constructor(c){const w=t;super(c),this['_layerList']=this[w(0x142)]('tse-layer-list'),this[w(0x144)]=this[w(0x142)]('tse-remove-btn'),this['_enabledCheck']=this[w(0x142)]('tse-enabled'),this['_inputX']=this['_getDomElement']('tse-x'),this['_inputY']=this[w(0x142)]('tse-y'),this[w(0x154)]=this[w(0x142)]('tse-blur'),this['_inputColor']=this['_getDomElement']('tse-color'),this['_inputOpacity']=this[w(0x142)](w(0x127)),this['_opacityVal']=this['_getDomElement']('tse-opacity-val'),this[w(0x161)]=this[w(0x142)](w(0x14f)),this[w(0x15b)]=this[w(0x142)](w(0x11f)),this[w(0x141)]=this[w(0x142)](w(0x12a)),this[w(0x13a)]=this[w(0x142)]('tse-copy-btn'),this[w(0x112)]=this['_getDomElement'](w(0x12d)),this[w(0x142)]('tse-add-btn')[w(0x122)]=()=>this['_addLayer'](),this[w(0x142)](w(0x156))['onclick']=()=>this['_duplicateLayer'](),this['_getDomElement']('tse-up-btn')[w(0x122)]=()=>this[w(0x157)](-0x1),this['_getDomElement'](w(0x14b))[w(0x122)]=()=>this[w(0x157)](0x1),this[w(0x144)][w(0x122)]=()=>this['_removeLayer'](),this['_enabledCheck'][w(0x15e)]=()=>{const x=w;this[x(0x132)]()['enabled']=this[x(0x15a)][x(0x169)],this['_refresh']();};for(const [d,e,f]of[[this[w(0x13e)],w(0x139),'tse-x-val'],[this[w(0x155)],'offsetY',w(0x128)],[this[w(0x154)],w(0x135),'tse-blur-val']]){d[w(0x117)]=()=>{const y=w;this['_currentLayer']()[e]=Number(d[y(0x134)]),this['_getDomElement'](f)['textContent']=d['value']+'px',this[y(0x11b)]();};}this['_inputColor'][w(0x117)]=()=>{const z=w;this['_currentLayer']()[z(0x159)]=this[z(0x15c)]['value'],this[z(0x11b)]();},this['_inputOpacity']['oninput']=()=>{const A=w;this['_currentLayer']()[A(0x12c)]=Number(this['_inputOpacity'][A(0x134)]),this['_opacityVal']['textContent']=this['_inputOpacity'][A(0x134)]+'%',this[A(0x11b)]();},this[w(0x13a)][w(0x122)]=()=>{navigator['clipboard']?.['writeText'](this['_cssOutput']['value'])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this[w(0x140)](),this[w(0x141)]['onclick']=()=>{const B=w;this['_loadFromPrimarySelection'](),this[B(0x110)](),this['_loadControls'](),this[B(0x11b)]();},this[w(0x13c)](),this[w(0x110)](),this['_loadControls'](),this['_refresh']();}[t(0x13c)](){const C=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[C(0x114)](C(0x11d));d&&(this[C(0x123)]=parseCssTextShadow(d),this[C(0x137)]=0x0);}[t(0x132)](){const D=t;return this['_layers'][this[D(0x137)]];}['_addLayer'](){const E=t;this[E(0x123)]['push'](defaultLayer()),this['_selectedIndex']=this['_layers'][E(0x12b)]-0x1,this['_renderList'](),this['_loadControls'](),this[E(0x11b)]();}[t(0x15d)](){const F=t;this[F(0x123)]['splice'](this['_selectedIndex']+0x1,0x0,{...this[F(0x132)]()}),this[F(0x137)]=this[F(0x137)]+0x1,this['_renderList'](),this[F(0x121)](),this['_refresh']();}[t(0x160)](){const G=t;if(this[G(0x123)][G(0x12b)]<=0x1)return;this['_layers'][G(0x165)](this[G(0x137)],0x1),this[G(0x137)]=Math['min'](this['_selectedIndex'],this[G(0x123)][G(0x12b)]-0x1),this[G(0x110)](),this['_loadControls'](),this[G(0x11b)]();}['_moveLayer'](c){const H=t,d=this[H(0x137)],e=d+c;if(e<0x0||e>=this['_layers'][H(0x12b)])return;[this[H(0x123)][d],this[H(0x123)][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this[H(0x110)](),this['_refresh']();}['_renderList'](){const I=t;this['_layerList'][I(0x14c)]='',this[I(0x123)][I(0x162)]((c,d)=>{const J=I,e=document[J(0x166)]('li');if(d===this[J(0x137)])e['classList'][J(0x131)]('selected');const f=document[J(0x166)]('span');f['className']='swatch',f[J(0x16b)][J(0x14d)]=c[J(0x159)],e['appendChild'](f);const g=document[J(0x166)]('span');g[J(0x147)]=c['offsetX']+J(0x119)+c['offsetY']+'px\x20'+c['blur']+'px';if(!c[J(0x124)])g['classList']['add']('disabled-label');e[J(0x13d)](g),e[J(0x122)]=()=>{const K=J;this[K(0x137)]=d,this[K(0x110)](),this['_loadControls']();},this['_layerList'][J(0x13d)](e);});}['_loadControls'](){const L=t,c=this['_currentLayer']();this[L(0x15a)]['checked']=c['enabled'],this[L(0x13e)][L(0x134)]=String(c['offsetX']),this['_getDomElement'](L(0x149))['textContent']=c['offsetX']+'px',this[L(0x155)][L(0x134)]=String(c['offsetY']),this['_getDomElement'](L(0x128))[L(0x147)]=c[L(0x115)]+'px',this[L(0x154)]['value']=String(c['blur']),this['_getDomElement'](L(0x118))[L(0x147)]=c[L(0x135)]+'px',this[L(0x15c)]['value']=c[L(0x159)],this[L(0x12e)]['value']=String(c[L(0x12c)]),this[L(0x136)][L(0x147)]=c[L(0x12c)]+'%';}[t(0x151)](){const M=t;return this['_layers'][M(0x126)](c=>c['enabled'])['map'](layerToCss)['join'](',\x20')||M(0x167);}[t(0x11b)](){const N=t,c=this[N(0x151)]();this['_previewText']['style'][N(0x113)]=c,this[N(0x15b)]['value']=c,this[N(0x110)]();}['_applyToSelection'](){const O=t,c=this[O(0x150)]?.[O(0x11e)]?.[O(0x133)]?.['selectedElements'];if(!c?.[O(0x12b)])return;const d=this['_buildCss'](),e=c[0x0][O(0x11a)]('set\x20text-shadow');for(const f of c){if(d===O(0x167))f[O(0x11c)](O(0x11d));else f['setStyle']('text-shadow',d);}e[O(0x14e)]();}}customElements[t(0x158)]('node-projects-text-shadow-editor-window',TextShadowEditorWindow);