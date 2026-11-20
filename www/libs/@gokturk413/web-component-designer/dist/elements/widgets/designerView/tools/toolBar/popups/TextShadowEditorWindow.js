const s=b;function a(){const M=['windowTemplate','tse-layer-list','11504UwmbLh','length','tse-enabled','padStart','216jcewIY','value','tse-copy-btn','_inputOpacity','2862604WTYQYz','tse-y-val','147301ZGCsGy','45tAqdwm','_previewText','_layers','_duplicateLayer','_loadBtn','selected','tse-up-btn','onclick','node-projects-text-shadow-editor-window','256260eaFPzi','372755GWXhUA','split','join','_moveLayer','1136632wSUnYy','_addLayer','_inputColor','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','tse-color','tse-opacity','checked','map','_enabledCheck','px\x20','_removeBtn','242MiJeZS','appendChild','getStyle','enabled','tse-css-out','_refresh','_currentLayer','removeStyle','_loadControls','_selectedIndex','tse-apply-btn','tse-blur-val','trim','replace','text-shadow','3TodeTT','_cssOutput','toFixed','_opacityVal','push','1913556NbEYIG','_designerCanvas','color','tse-add-btn','className','slice','10syunul','toString','style','_renderList','createElement','classList','tse-blur','_layerList','blur','opacity','none','_inputBlur','_inputX','_loadFromPrimarySelection','_applyBtn','px\x20rgba(','tse-x-val','offsetX','windowTitle','_inputY','_getDomElement','textContent','swatch','clipboard','offsetY','_buildCss','#000000','_copyBtn'];a=function(){return M;};return a();}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xb9))/0x1*(-parseInt(m(0xd7))/0x2)+-parseInt(m(0xae))/0x3*(-parseInt(m(0xdf))/0x4)+parseInt(m(0xec))/0x5+parseInt(m(0xdb))/0x6*(-parseInt(m(0xe1))/0x7)+-parseInt(m(0xf0))/0x8*(-parseInt(m(0xe2))/0x9)+parseInt(m(0xeb))/0xa*(-parseInt(m(0x9f))/0xb)+parseInt(m(0xb3))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x60be4));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0xd3),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e]['map'](f=>f[o(0xba)](0x10)[o(0xda)](0x2,'0'))[o(0xee)]('');}function hexToRgb(c){const d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f[p(0xab)]();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c[q(0xc2)]/0x64)[q(0xb0)](0x2);return c['offsetX']+'px\x20'+c['offsetY']+q(0xf9)+c['blur']+q(0xc8)+hexToRgb(c[q(0xb5)])+','+d+')';}function parseCssTextShadow(c){if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d['push'](f);}return d['length']?d:[defaultLayer()];}function b(c,d){c=c-0x9e;const e=a();let f=e[c];return f;}function parseOneLayer(c){const r=b;let d=r(0xd3),e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f[r(0xac)](i,'')['trim']();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f['match'](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1][r(0xb8)](0x1)[r(0xed)]('')['map'](l=>l+l)['join'](''):k[0x1][r(0xb8)](0x0,0x7),f=f['replace'](k[0x1],'')[r(0xab)]());}const h=f['split'](/\s+/)['filter'](Boolean)[r(0xf7)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[s(0xc0)];[s(0x9e)];['_enabledCheck'];[s(0xc5)];[s(0xcc)];['_inputBlur'];['_inputColor'];[s(0xde)];['_opacityVal'];['_previewText'];['_cssOutput'];['_loadBtn'];[s(0xd4)];[s(0xc7)];get[s(0xcb)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[s(0xd5)](){const t=s;return t(0xf3);}constructor(c){const u=s;super(c),this['_layerList']=this[u(0xcd)](u(0xd6)),this[u(0x9e)]=this['_getDomElement']('tse-remove-btn'),this[u(0xf8)]=this[u(0xcd)](u(0xd9)),this['_inputX']=this[u(0xcd)]('tse-x'),this[u(0xcc)]=this['_getDomElement']('tse-y'),this[u(0xc4)]=this[u(0xcd)](u(0xbf)),this['_inputColor']=this['_getDomElement'](u(0xf4)),this['_inputOpacity']=this[u(0xcd)](u(0xf5)),this[u(0xb1)]=this[u(0xcd)]('tse-opacity-val'),this['_previewText']=this['_getDomElement']('tse-preview'),this[u(0xaf)]=this['_getDomElement'](u(0xa3)),this[u(0xe6)]=this['_getDomElement']('tse-load-btn'),this['_copyBtn']=this['_getDomElement'](u(0xdd)),this[u(0xc7)]=this[u(0xcd)](u(0xa9)),this[u(0xcd)](u(0xb6))[u(0xe9)]=()=>this[u(0xf1)](),this[u(0xcd)]('tse-dup-btn')['onclick']=()=>this['_duplicateLayer'](),this[u(0xcd)](u(0xe8))[u(0xe9)]=()=>this[u(0xef)](-0x1),this['_getDomElement']('tse-down-btn')['onclick']=()=>this['_moveLayer'](0x1),this['_removeBtn']['onclick']=()=>this['_removeLayer'](),this[u(0xf8)]['onchange']=()=>{const v=u;this[v(0xa5)]()['enabled']=this[v(0xf8)][v(0xf6)],this['_refresh']();};for(const [d,e,f]of[[this[u(0xc5)],u(0xca),u(0xc9)],[this['_inputY'],'offsetY',u(0xe0)],[this['_inputBlur'],u(0xc1),'tse-blur-val']]){d['oninput']=()=>{const w=u;this['_currentLayer']()[e]=Number(d[w(0xdc)]),this['_getDomElement'](f)[w(0xce)]=d[w(0xdc)]+'px',this[w(0xa4)]();};}this['_inputColor']['oninput']=()=>{const x=u;this[x(0xa5)]()[x(0xb5)]=this['_inputColor'][x(0xdc)],this['_refresh']();},this['_inputOpacity']['oninput']=()=>{const y=u;this['_currentLayer']()['opacity']=Number(this[y(0xde)][y(0xdc)]),this[y(0xb1)][y(0xce)]=this[y(0xde)][y(0xdc)]+'%',this[y(0xa4)]();},this[u(0xd4)][u(0xe9)]=()=>{const z=u;navigator[z(0xd0)]?.['writeText'](this['_cssOutput'][z(0xdc)])['catch'](()=>{});},this['_applyBtn']['onclick']=()=>this['_applyToSelection'](),this['_loadBtn']['onclick']=()=>{const A=u;this[A(0xc6)](),this['_renderList'](),this[A(0xa7)](),this[A(0xa4)]();},this[u(0xc6)](),this[u(0xbc)](),this[u(0xa7)](),this['_refresh']();}['_loadFromPrimarySelection'](){const B=s,c=this[B(0xb4)]?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[B(0xa1)](B(0xad));d&&(this[B(0xe4)]=parseCssTextShadow(d),this['_selectedIndex']=0x0);}['_currentLayer'](){return this['_layers'][this['_selectedIndex']];}['_addLayer'](){const C=s;this['_layers'][C(0xb2)](defaultLayer()),this[C(0xa8)]=this['_layers'][C(0xd8)]-0x1,this[C(0xbc)](),this['_loadControls'](),this['_refresh']();}[s(0xe5)](){const D=s;this['_layers']['splice'](this['_selectedIndex']+0x1,0x0,{...this[D(0xa5)]()}),this[D(0xa8)]=this['_selectedIndex']+0x1,this[D(0xbc)](),this[D(0xa7)](),this[D(0xa4)]();}['_removeLayer'](){const E=s;if(this[E(0xe4)]['length']<=0x1)return;this['_layers']['splice'](this[E(0xa8)],0x1),this[E(0xa8)]=Math['min'](this[E(0xa8)],this[E(0xe4)]['length']-0x1),this['_renderList'](),this['_loadControls'](),this[E(0xa4)]();}['_moveLayer'](c){const F=s,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this['_layers'][F(0xd8)])return;[this[F(0xe4)][d],this['_layers'][e]]=[this['_layers'][e],this[F(0xe4)][d]],this['_selectedIndex']=e,this['_renderList'](),this['_refresh']();}[s(0xbc)](){this['_layerList']['innerHTML']='',this['_layers']['forEach']((c,d)=>{const G=b,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList']['add'](G(0xe7));const f=document[G(0xbd)]('span');f[G(0xb7)]=G(0xcf),f['style']['background']=c[G(0xb5)],e['appendChild'](f);const g=document[G(0xbd)]('span');g[G(0xce)]=c['offsetX']+'px\x20'+c['offsetY']+G(0xf9)+c['blur']+'px';if(!c['enabled'])g[G(0xbe)]['add']('disabled-label');e[G(0xa0)](g),e[G(0xe9)]=()=>{const H=G;this['_selectedIndex']=d,this[H(0xbc)](),this[H(0xa7)]();},this[G(0xc0)]['appendChild'](e);});}[s(0xa7)](){const I=s,c=this['_currentLayer']();this['_enabledCheck'][I(0xf6)]=c[I(0xa2)],this[I(0xc5)]['value']=String(c['offsetX']),this['_getDomElement']('tse-x-val')['textContent']=c['offsetX']+'px',this[I(0xcc)]['value']=String(c['offsetY']),this[I(0xcd)]('tse-y-val')[I(0xce)]=c[I(0xd1)]+'px',this['_inputBlur'][I(0xdc)]=String(c[I(0xc1)]),this[I(0xcd)](I(0xaa))[I(0xce)]=c['blur']+'px',this[I(0xf2)]['value']=c['color'],this['_inputOpacity'][I(0xdc)]=String(c['opacity']),this[I(0xb1)][I(0xce)]=c['opacity']+'%';}['_buildCss'](){const J=s;return this['_layers']['filter'](c=>c['enabled'])['map'](layerToCss)[J(0xee)](',\x20')||J(0xc3);}[s(0xa4)](){const K=s,c=this[K(0xd2)]();this[K(0xe3)][K(0xbb)]['textShadow']=c,this['_cssOutput']['value']=c,this[K(0xbc)]();}['_applyToSelection'](){const L=s,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['selectedElements'];if(!c?.['length'])return;const d=this[L(0xd2)](),e=c[0x0]['openGroup']('set\x20text-shadow');for(const f of c){if(d===L(0xc3))f[L(0xa6)]('text-shadow');else f['setStyle']('text-shadow',d);}e['commit']();}}customElements['define'](s(0xea),TextShadowEditorWindow);