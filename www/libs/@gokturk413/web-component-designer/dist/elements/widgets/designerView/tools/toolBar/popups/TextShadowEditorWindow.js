const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x190))/0x1+parseInt(m(0x1a8))/0x2+-parseInt(m(0x179))/0x3+-parseInt(m(0x171))/0x4+-parseInt(m(0x164))/0x5+-parseInt(m(0x186))/0x6+parseInt(m(0x17c))/0x7*(parseInt(m(0x16d))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4ab53));function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x1af),'opacity':0x32,'enabled':!![]};}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e]['map'](f=>f['toString'](0x10)[o(0x1a4)](0x2,'0'))['join']('');}function hexToRgb(c){const d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c['slice'](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d[p(0x188)](i);f='';continue;}}}f+=h;}const g=f[p(0x174)]();if(g)d['push'](g);return d;}function layerToCss(c){const q=b,d=(c[q(0x178)]/0x64)[q(0x1a1)](0x2);return c[q(0x162)]+q(0x16e)+c['offsetY']+q(0x16e)+c[q(0x163)]+'px\x20rgba('+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0x174)]());if(f)d[r(0x188)](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')[s(0x174)]();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x17f)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x172)]===0x4?'#'+k[0x1][s(0x177)](0x1)['split']('')['map'](l=>l+l)['join'](''):k[0x1]['slice'](0x0,0x7),f=f['replace'](k[0x1],'')[s(0x174)]());}const h=f[s(0x165)](/\s+/)[s(0x17d)](Boolean)[s(0x184)](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h[s(0x172)]<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}function a(){const P=['match','_layerList','windowTemplate','commit','none','map','_designerCanvas','3462402BhIyht','tse-y-val','push','instanceServiceContainer','_currentLayer','offsetY','_enabledCheck','_moveLayer','textContent','value','294342kYCBHQ','selected','_applyBtn','createElement','_addLayer','min','set\x20text-shadow','tse-dup-btn','_inputY','onclick','tse-preview','_loadFromPrimarySelection','_getDomElement','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','tse-load-btn','join','tse-enabled','toFixed','span','writeText','padStart','_renderList','_refresh','selectionService','197330IgBVDC','text-shadow','className','enabled','_removeBtn','_opacityVal','color','#000000','_loadControls','tse-x','tse-blur','_layers','_inputColor','_removeLayer','background','_inputOpacity','appendChild','offsetX','blur','2218890YowQnX','split','_inputX','oninput','tse-blur-val','_inputBlur','openGroup','tse-opacity','_selectedIndex','5512caBayc','px\x20','tse-x-val','_copyBtn','196096mvutps','length','_loadBtn','trim','_duplicateLayer','tse-color','slice','opacity','1121328ZHEcMt','tse-add-btn','classList','13783aTQMeI','filter','getStyle'];a=function(){return P;};return a();}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];[t(0x16c)]=0x0;[t(0x180)];[t(0x1ac)];['_enabledCheck'];['_inputX'];[t(0x198)];['_inputBlur'];['_inputColor'];[t(0x160)];[t(0x1ad)];['_previewText'];['_cssOutput'];[t(0x173)];['_copyBtn'];[t(0x192)];get['windowTitle'](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[t(0x181)](){const u=t;return u(0x19d);}constructor(c){const v=t;super(c),this[v(0x180)]=this[v(0x19c)]('tse-layer-list'),this[v(0x1ac)]=this['_getDomElement']('tse-remove-btn'),this[v(0x18c)]=this['_getDomElement'](v(0x1a0)),this[v(0x166)]=this['_getDomElement'](v(0x1b1)),this['_inputY']=this[v(0x19c)]('tse-y'),this['_inputBlur']=this['_getDomElement'](v(0x1b2)),this[v(0x1b4)]=this[v(0x19c)](v(0x176)),this[v(0x160)]=this[v(0x19c)](v(0x16b)),this[v(0x1ad)]=this[v(0x19c)]('tse-opacity-val'),this['_previewText']=this['_getDomElement'](v(0x19a)),this['_cssOutput']=this[v(0x19c)]('tse-css-out'),this['_loadBtn']=this[v(0x19c)](v(0x19e)),this[v(0x170)]=this['_getDomElement']('tse-copy-btn'),this['_applyBtn']=this[v(0x19c)]('tse-apply-btn'),this['_getDomElement'](v(0x17a))[v(0x199)]=()=>this[v(0x194)](),this[v(0x19c)](v(0x197))['onclick']=()=>this[v(0x175)](),this['_getDomElement']('tse-up-btn')['onclick']=()=>this[v(0x18d)](-0x1),this['_getDomElement']('tse-down-btn')[v(0x199)]=()=>this['_moveLayer'](0x1),this[v(0x1ac)][v(0x199)]=()=>this[v(0x1b5)](),this[v(0x18c)]['onchange']=()=>{const w=v;this[w(0x18a)]()['enabled']=this['_enabledCheck']['checked'],this[w(0x1a6)]();};for(const [d,e,f]of[[this[v(0x166)],v(0x162),'tse-x-val'],[this[v(0x198)],v(0x18b),v(0x187)],[this['_inputBlur'],'blur',v(0x168)]]){d[v(0x167)]=()=>{const x=v;this['_currentLayer']()[e]=Number(d[x(0x18f)]),this[x(0x19c)](f)[x(0x18e)]=d[x(0x18f)]+'px',this['_refresh']();};}this[v(0x1b4)]['oninput']=()=>{const y=v;this[y(0x18a)]()['color']=this['_inputColor']['value'],this[y(0x1a6)]();},this[v(0x160)]['oninput']=()=>{const z=v;this['_currentLayer']()[z(0x178)]=Number(this[z(0x160)]['value']),this['_opacityVal'][z(0x18e)]=this['_inputOpacity']['value']+'%',this[z(0x1a6)]();},this[v(0x170)]['onclick']=()=>{const A=v;navigator['clipboard']?.[A(0x1a3)](this['_cssOutput'][A(0x18f)])['catch'](()=>{});},this['_applyBtn'][v(0x199)]=()=>this['_applyToSelection'](),this[v(0x173)]['onclick']=()=>{const B=v;this[B(0x19b)](),this['_renderList'](),this[B(0x1b0)](),this['_refresh']();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[t(0x19b)](){const C=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.[C(0x1a7)]?.['primarySelection'];if(!c)return;const d=c[C(0x17e)]('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this['_selectedIndex']=0x0);}[t(0x18a)](){const D=t;return this[D(0x1b3)][this[D(0x16c)]];}['_addLayer'](){const E=t;this['_layers'][E(0x188)](defaultLayer()),this['_selectedIndex']=this[E(0x1b3)]['length']-0x1,this[E(0x1a5)](),this[E(0x1b0)](),this[E(0x1a6)]();}['_duplicateLayer'](){const F=t;this['_layers']['splice'](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this[F(0x16c)]=this[F(0x16c)]+0x1,this[F(0x1a5)](),this[F(0x1b0)](),this['_refresh']();}[t(0x1b5)](){const G=t;if(this[G(0x1b3)][G(0x172)]<=0x1)return;this[G(0x1b3)]['splice'](this[G(0x16c)],0x1),this[G(0x16c)]=Math[G(0x195)](this['_selectedIndex'],this[G(0x1b3)][G(0x172)]-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const H=t,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[H(0x1b3)][H(0x172)])return;[this[H(0x1b3)][d],this[H(0x1b3)][e]]=[this[H(0x1b3)][e],this['_layers'][d]],this[H(0x16c)]=e,this['_renderList'](),this[H(0x1a6)]();}[t(0x1a5)](){const I=t;this[I(0x180)]['innerHTML']='',this['_layers']['forEach']((c,d)=>{const J=I,e=document[J(0x193)]('li');if(d===this['_selectedIndex'])e[J(0x17b)]['add'](J(0x191));const f=document[J(0x193)](J(0x1a2));f[J(0x1aa)]='swatch',f['style'][J(0x1b6)]=c[J(0x1ae)],e['appendChild'](f);const g=document[J(0x193)](J(0x1a2));g['textContent']=c[J(0x162)]+J(0x16e)+c[J(0x18b)]+'px\x20'+c['blur']+'px';if(!c[J(0x1ab)])g[J(0x17b)]['add']('disabled-label');e[J(0x161)](g),e[J(0x199)]=()=>{const K=J;this['_selectedIndex']=d,this['_renderList'](),this[K(0x1b0)]();},this[J(0x180)][J(0x161)](e);});}['_loadControls'](){const L=t,c=this[L(0x18a)]();this[L(0x18c)]['checked']=c[L(0x1ab)],this['_inputX'][L(0x18f)]=String(c[L(0x162)]),this[L(0x19c)](L(0x16f))[L(0x18e)]=c[L(0x162)]+'px',this[L(0x198)]['value']=String(c['offsetY']),this[L(0x19c)]('tse-y-val')['textContent']=c[L(0x18b)]+'px',this[L(0x169)]['value']=String(c['blur']),this['_getDomElement']('tse-blur-val')['textContent']=c['blur']+'px',this['_inputColor']['value']=c[L(0x1ae)],this['_inputOpacity']['value']=String(c['opacity']),this[L(0x1ad)]['textContent']=c['opacity']+'%';}['_buildCss'](){const M=t;return this['_layers'][M(0x17d)](c=>c['enabled'])[M(0x184)](layerToCss)[M(0x19f)](',\x20')||M(0x183);}['_refresh'](){const N=t,c=this['_buildCss']();this['_previewText']['style']['textShadow']=c,this['_cssOutput']['value']=c,this[N(0x1a5)]();}['_applyToSelection'](){const O=t,c=this[O(0x185)]?.[O(0x189)]?.['selectionService']?.['selectedElements'];if(!c?.[O(0x172)])return;const d=this['_buildCss'](),e=c[0x0][O(0x16a)](O(0x196));for(const f of c){if(d==='none')f['removeStyle'](O(0x1a9));else f['setStyle'](O(0x1a9),d);}e[O(0x182)]();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);