const t=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x228))/0x1*(-parseInt(m(0x1f6))/0x2)+-parseInt(m(0x1eb))/0x3+parseInt(m(0x1f4))/0x4*(-parseInt(m(0x214))/0x5)+-parseInt(m(0x20c))/0x6+-parseInt(m(0x1ed))/0x7*(-parseInt(m(0x208))/0x8)+-parseInt(m(0x21f))/0x9+parseInt(m(0x1f1))/0xa*(parseInt(m(0x230))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf3fd4));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':'#000000','opacity':0x32,'enabled':!![]};}function a(){const P=['405768tAtfPS','map','11101699HibTHW','filter','_loadControls','push','3370ZTrukh','padStart','slice','12FmQVSU','px\x20','2fRpKgN','primarySelection','tse-layer-list','_cssOutput','_applyBtn','tse-dup-btn','add','_refresh','_addLayer','_currentLayer','_inputColor','blur','join','_removeBtn','tse-color','set\x20text-shadow','splice','tse-x-val','8fIqrvU','offsetY','_inputOpacity','tse-up-btn','2359428NnQQUC','trim','style','value','oninput','tse-opacity-val','windowTemplate','_selectedIndex','790630GigmHI','split','toFixed','removeStyle','checked','_buildCss','textContent','windowContentStyle','selectionService','_loadFromPrimarySelection','_copyBtn','16642161YWvhFi','_inputY','_renderList','color','tse-enabled','tse-x','_designerCanvas','opacity','className','301725ozyAap','tse-preview','offsetX','_inputX','onclick','_previewText','toString','min','64097PzpUXV','openGroup','_duplicateLayer','_layers','length','node-projects-text-shadow-editor-window','_enabledCheck','match','_moveLayer','_getDomElement','tse-css-out','innerHTML','setStyle','instanceServiceContainer','px\x20rgba(','clipboard','enabled','_opacityVal','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>'];a=function(){return P;};return a();}function rgbToHex(c,d,e){const n=b;return'#'+[c,d,e]['map'](f=>f[n(0x22e)](0x10)[n(0x1f2)](0x2,'0'))[n(0x202)]('');}function hexToRgb(c){const o=b,d=parseInt(c['slice'](0x1,0x3),0x10),e=parseInt(c[o(0x1f3)](0x3,0x5),0x10),f=parseInt(c[o(0x1f3)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const p=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f[p(0x20d)]();if(g)d[p(0x1f0)](g);return d;}function b(c,d){c=c-0x1e3;const e=a();let f=e[c];return f;}function layerToCss(c){const q=b,d=(c['opacity']/0x64)[q(0x216)](0x2);return c['offsetX']+'px\x20'+c['offsetY']+q(0x1f5)+c[q(0x201)]+q(0x1e6)+hexToRgb(c[q(0x222)])+','+d+')';}function parseCssTextShadow(c){const r=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e[r(0x20d)]());if(f)d[r(0x1f0)](f);}return d['length']?d:[defaultLayer()];}function parseOneLayer(c){const s=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')['trim']();const j=i[s(0x237)](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[s(0x237)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1][s(0x234)]===0x4?'#'+k[0x1][s(0x1f3)](0x1)[s(0x215)]('')[s(0x1ec)](l=>l+l)['join'](''):k[0x1]['slice'](0x0,0x7),f=f['replace'](k[0x1],'')[s(0x20d)]());}const h=f[s(0x215)](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))[s(0x1ee)](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{[t(0x233)]=[defaultLayer()];[t(0x213)]=0x0;['_layerList'];['_removeBtn'];['_enabledCheck'];[t(0x22b)];[t(0x220)];['_inputBlur'];[t(0x200)];[t(0x20a)];[t(0x1e9)];[t(0x22d)];[t(0x1f9)];['_loadBtn'];[t(0x21e)];['_applyBtn'];get['windowTitle'](){return'Text\x20Shadow\x20Editor';}get[t(0x21b)](){return css`
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
    `;}get[t(0x212)](){const u=t;return u(0x1ea);}constructor(c){const v=t;super(c),this['_layerList']=this[v(0x239)](v(0x1f8)),this[v(0x203)]=this[v(0x239)]('tse-remove-btn'),this[v(0x236)]=this['_getDomElement'](v(0x223)),this[v(0x22b)]=this['_getDomElement'](v(0x224)),this[v(0x220)]=this[v(0x239)]('tse-y'),this['_inputBlur']=this['_getDomElement']('tse-blur'),this['_inputColor']=this[v(0x239)](v(0x204)),this['_inputOpacity']=this[v(0x239)]('tse-opacity'),this['_opacityVal']=this['_getDomElement'](v(0x211)),this['_previewText']=this[v(0x239)](v(0x229)),this['_cssOutput']=this['_getDomElement'](v(0x23a)),this['_loadBtn']=this[v(0x239)]('tse-load-btn'),this['_copyBtn']=this[v(0x239)]('tse-copy-btn'),this[v(0x1fa)]=this[v(0x239)]('tse-apply-btn'),this['_getDomElement']('tse-add-btn')[v(0x22c)]=()=>this[v(0x1fe)](),this[v(0x239)](v(0x1fb))['onclick']=()=>this[v(0x232)](),this['_getDomElement'](v(0x20b))['onclick']=()=>this[v(0x238)](-0x1),this[v(0x239)]('tse-down-btn')[v(0x22c)]=()=>this[v(0x238)](0x1),this['_removeBtn'][v(0x22c)]=()=>this['_removeLayer'](),this['_enabledCheck']['onchange']=()=>{const w=v;this['_currentLayer']()['enabled']=this[w(0x236)]['checked'],this[w(0x1fd)]();};for(const [d,e,f]of[[this[v(0x22b)],'offsetX',v(0x207)],[this['_inputY'],v(0x209),'tse-y-val'],[this['_inputBlur'],v(0x201),'tse-blur-val']]){d['oninput']=()=>{const x=v;this[x(0x1ff)]()[e]=Number(d[x(0x20f)]),this['_getDomElement'](f)[x(0x21a)]=d[x(0x20f)]+'px',this['_refresh']();};}this['_inputColor'][v(0x210)]=()=>{const y=v;this['_currentLayer']()['color']=this['_inputColor'][y(0x20f)],this[y(0x1fd)]();},this['_inputOpacity']['oninput']=()=>{const z=v;this[z(0x1ff)]()[z(0x226)]=Number(this[z(0x20a)][z(0x20f)]),this['_opacityVal'][z(0x21a)]=this[z(0x20a)][z(0x20f)]+'%',this[z(0x1fd)]();},this[v(0x21e)]['onclick']=()=>{const A=v;navigator[A(0x1e7)]?.['writeText'](this['_cssOutput']['value'])['catch'](()=>{});},this[v(0x1fa)][v(0x22c)]=()=>this['_applyToSelection'](),this['_loadBtn'][v(0x22c)]=()=>{const B=v;this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this[B(0x1fd)]();},this[v(0x21d)](),this['_renderList'](),this[v(0x1ef)](),this[v(0x1fd)]();}['_loadFromPrimarySelection'](){const C=t,c=this[C(0x225)]?.[C(0x1e5)]?.[C(0x21c)]?.[C(0x1f7)];if(!c)return;const d=c['getStyle']('text-shadow');d&&(this['_layers']=parseCssTextShadow(d),this[C(0x213)]=0x0);}['_currentLayer'](){const D=t;return this[D(0x233)][this['_selectedIndex']];}[t(0x1fe)](){const E=t;this['_layers'][E(0x1f0)](defaultLayer()),this['_selectedIndex']=this['_layers']['length']-0x1,this[E(0x221)](),this[E(0x1ef)](),this[E(0x1fd)]();}['_duplicateLayer'](){const F=t;this[F(0x233)][F(0x206)](this[F(0x213)]+0x1,0x0,{...this[F(0x1ff)]()}),this[F(0x213)]=this[F(0x213)]+0x1,this['_renderList'](),this[F(0x1ef)](),this[F(0x1fd)]();}['_removeLayer'](){const G=t;if(this[G(0x233)]['length']<=0x1)return;this[G(0x233)][G(0x206)](this['_selectedIndex'],0x1),this[G(0x213)]=Math[G(0x22f)](this[G(0x213)],this[G(0x233)]['length']-0x1),this['_renderList'](),this['_loadControls'](),this['_refresh']();}['_moveLayer'](c){const H=t,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[H(0x233)][H(0x234)])return;[this['_layers'][d],this['_layers'][e]]=[this[H(0x233)][e],this[H(0x233)][d]],this[H(0x213)]=e,this[H(0x221)](),this[H(0x1fd)]();}[t(0x221)](){const I=t;this['_layerList'][I(0x1e3)]='',this['_layers']['forEach']((c,d)=>{const J=I,e=document['createElement']('li');if(d===this[J(0x213)])e['classList'][J(0x1fc)]('selected');const f=document['createElement']('span');f[J(0x227)]='swatch',f[J(0x20e)]['background']=c[J(0x222)],e['appendChild'](f);const g=document['createElement']('span');g[J(0x21a)]=c[J(0x22a)]+'px\x20'+c['offsetY']+J(0x1f5)+c['blur']+'px';if(!c['enabled'])g['classList']['add']('disabled-label');e['appendChild'](g),e[J(0x22c)]=()=>{const K=J;this[K(0x213)]=d,this['_renderList'](),this['_loadControls']();},this['_layerList']['appendChild'](e);});}[t(0x1ef)](){const L=t,c=this['_currentLayer']();this[L(0x236)][L(0x218)]=c[L(0x1e8)],this['_inputX'][L(0x20f)]=String(c[L(0x22a)]),this[L(0x239)]('tse-x-val')['textContent']=c[L(0x22a)]+'px',this[L(0x220)][L(0x20f)]=String(c['offsetY']),this[L(0x239)]('tse-y-val')['textContent']=c['offsetY']+'px',this['_inputBlur'][L(0x20f)]=String(c['blur']),this[L(0x239)]('tse-blur-val')[L(0x21a)]=c[L(0x201)]+'px',this['_inputColor'][L(0x20f)]=c[L(0x222)],this['_inputOpacity']['value']=String(c['opacity']),this['_opacityVal'][L(0x21a)]=c['opacity']+'%';}['_buildCss'](){const M=t;return this['_layers']['filter'](c=>c[M(0x1e8)])['map'](layerToCss)[M(0x202)](',\x20')||'none';}['_refresh'](){const N=t,c=this[N(0x219)]();this[N(0x22d)]['style']['textShadow']=c,this['_cssOutput']['value']=c,this[N(0x221)]();}['_applyToSelection'](){const O=t,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['selectedElements'];if(!c?.['length'])return;const d=this['_buildCss'](),e=c[0x0][O(0x231)](O(0x205));for(const f of c){if(d==='none')f[O(0x217)]('text-shadow');else f[O(0x1e4)]('text-shadow',d);}e['commit']();}}customElements['define'](t(0x235),TextShadowEditorWindow);