const u=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1fe))/0x1+-parseInt(m(0x20b))/0x2*(-parseInt(m(0x234))/0x3)+-parseInt(m(0x208))/0x4+parseInt(m(0x222))/0x5+parseInt(m(0x246))/0x6+parseInt(m(0x243))/0x7+-parseInt(m(0x240))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee672));import{css}from'@node-projects/base-custom-webcomponent';import{DraggableToolWindow}from'./DraggableToolWindow.js';function defaultLayer(){const n=b;return{'offsetX':0x2,'offsetY':0x2,'blur':0x4,'color':n(0x1ff),'opacity':0x32,'enabled':!![]};}function b(c,d){c=c-0x1e7;const e=a();let f=e[c];return f;}function rgbToHex(c,d,e){const o=b;return'#'+[c,d,e]['map'](f=>f[o(0x221)](0x10)[o(0x237)](0x2,'0'))['join']('');}function a(){const Q=['appendChild','selected','filter','3648znWlHU','px\x20','onclick','padStart','map','tse-y-val','_moveLayer','className','_buildCss','tse-enabled','match','_loadControls','2818408cncrjH','tse-opacity','tse-blur','7010626HoTpBI','_inputX','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tse-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-area\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22preview-text\x22\x20id=\x22tse-preview\x22>Sample\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layers-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22layer-list\x22\x20id=\x22tse-layer-list\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22layer-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-add-btn\x22\x20title=\x22Add\x20layer\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-dup-btn\x22\x20title=\x22Duplicate\x20layer\x22>⧉</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-up-btn\x22\x20title=\x22Move\x20up\x22>↑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-down-btn\x22\x20title=\x22Move\x20down\x22>↓</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-remove-btn\x22\x20title=\x22Remove\x20layer\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22check-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22tse-enabled\x22>\x20Enabled</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20X</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-x\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-x-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Offset\x20Y</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-y\x22\x20min=\x22-50\x22\x20max=\x2250\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-y-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Blur</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-blur\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-blur-val\x22>0px</span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22tse-color\x22\x20value=\x22#000000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22tse-opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22val-label\x22\x20id=\x22tse-opacity-val\x22>100%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20class=\x22css-out\x22\x20id=\x22tse-css-out\x22></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22load-btn\x22\x20id=\x22tse-load-btn\x22>Load</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22tse-copy-btn\x22>Copy\x20CSS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22apply-btn\x22\x20id=\x22tse-apply-btn\x22>Apply\x20to\x20selection</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','2630652UQCtAS','length','windowTemplate','_opacityVal','_inputColor','offsetY','innerHTML','forEach','push','_enabledCheck','add','_copyBtn','set\x20text-shadow','windowTitle','tse-blur-val','_getDomElement','disabled-label','_layerList','tse-dup-btn','px\x20rgba(','color','classList','tse-x','tse-y','opacity','1807029bGjuok','#000000','style','_currentLayer','_addLayer','slice','textShadow','split','_inputBlur','span','1439984PLUIRh','_applyToSelection','commit','2562qpKUuo','_cssOutput','setStyle','_layers','textContent','catch','none','min','tse-preview','_applyBtn','_renderList','tse-x-val','_selectedIndex','openGroup','_duplicateLayer','tse-remove-btn','enabled','oninput','createElement','blur','_removeBtn','_inputY','toString','2490840LhNrko','tse-color','join','value','splice','_removeLayer','_loadBtn','_refresh','getStyle','checked','text-shadow','tse-layer-list','_previewText','_loadFromPrimarySelection','_inputOpacity'];a=function(){return Q;};return a();}function hexToRgb(c){const p=b,d=parseInt(c[p(0x203)](0x1,0x3),0x10),e=parseInt(c['slice'](0x3,0x5),0x10),f=parseInt(c[p(0x203)](0x5,0x7),0x10);return d+','+e+','+f;}function splitLayers(c){const q=b,d=[];let e=0x0,f='';for(const h of c){if(h==='(')e++;else{if(h===')')e--;else{if(h===','&&e===0x0){const i=f['trim']();if(i)d['push'](i);f='';continue;}}}f+=h;}const g=f['trim']();if(g)d[q(0x1ed)](g);return d;}function layerToCss(c){const r=b,d=(c['opacity']/0x64)['toFixed'](0x2);return c['offsetX']+r(0x235)+c['offsetY']+'px\x20'+c[r(0x21e)]+r(0x1f8)+hexToRgb(c['color'])+','+d+')';}function parseCssTextShadow(c){const s=b;if(!c||c==='none')return[defaultLayer()];const d=[];for(const e of splitLayers(c)){const f=parseOneLayer(e['trim']());if(f)d['push'](f);}return d[s(0x247)]?d:[defaultLayer()];}function parseOneLayer(c){const t=b;let d='#000000',e=0x64,f=c;const g=f['match'](/(rgba?\([^)]+\)|hsla?\([^)]+\))/);if(g){const i=g[0x1];f=f['replace'](i,'')['trim']();const j=i['match'](/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);j&&(d=rgbToHex(parseInt(j[0x1]),parseInt(j[0x2]),parseInt(j[0x3])),e=j[0x4]!=null?Math['round'](parseFloat(j[0x4])*0x64):0x64);}else{const k=f[t(0x23e)](/(#[0-9a-fA-F]{3,8})/);k&&(d=k[0x1]['length']===0x4?'#'+k[0x1][t(0x203)](0x1)[t(0x205)]('')[t(0x238)](l=>l+l)[t(0x224)](''):k[0x1]['slice'](0x0,0x7),f=f['replace'](k[0x1],'')['trim']());}const h=f['split'](/\s+/)['filter'](Boolean)['map'](l=>parseFloat(l))['filter'](l=>!isNaN(l));if(h['length']<0x2)return null;return{'offsetX':h[0x0]??0x0,'offsetY':h[0x1]??0x0,'blur':h[0x2]??0x0,'color':d,'opacity':e,'enabled':!![]};}export class TextShadowEditorWindow extends DraggableToolWindow{['_layers']=[defaultLayer()];['_selectedIndex']=0x0;[u(0x1f6)];[u(0x21f)];['_enabledCheck'];[u(0x244)];[u(0x220)];['_inputBlur'];[u(0x1e9)];['_inputOpacity'];[u(0x1e8)];[u(0x22e)];[u(0x20c)];[u(0x228)];['_copyBtn'];['_applyBtn'];get[u(0x1f2)](){return'Text\x20Shadow\x20Editor';}get['windowContentStyle'](){return css`
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
    `;}get[u(0x1e7)](){const v=u;return v(0x245);}constructor(c){const w=u;super(c),this['_layerList']=this[w(0x1f4)](w(0x22d)),this[w(0x21f)]=this['_getDomElement'](w(0x21a)),this[w(0x1ee)]=this[w(0x1f4)](w(0x23d)),this[w(0x244)]=this['_getDomElement'](w(0x1fb)),this[w(0x220)]=this['_getDomElement'](w(0x1fc)),this['_inputBlur']=this[w(0x1f4)](w(0x242)),this['_inputColor']=this[w(0x1f4)](w(0x223)),this[w(0x230)]=this['_getDomElement'](w(0x241)),this[w(0x1e8)]=this[w(0x1f4)]('tse-opacity-val'),this['_previewText']=this[w(0x1f4)](w(0x213)),this['_cssOutput']=this[w(0x1f4)]('tse-css-out'),this['_loadBtn']=this[w(0x1f4)]('tse-load-btn'),this[w(0x1f0)]=this['_getDomElement']('tse-copy-btn'),this['_applyBtn']=this[w(0x1f4)]('tse-apply-btn'),this[w(0x1f4)]('tse-add-btn')['onclick']=()=>this[w(0x202)](),this[w(0x1f4)](w(0x1f7))[w(0x236)]=()=>this[w(0x219)](),this['_getDomElement']('tse-up-btn')['onclick']=()=>this[w(0x23a)](-0x1),this['_getDomElement']('tse-down-btn')[w(0x236)]=()=>this['_moveLayer'](0x1),this[w(0x21f)]['onclick']=()=>this[w(0x227)](),this['_enabledCheck']['onchange']=()=>{const x=w;this['_currentLayer']()['enabled']=this['_enabledCheck'][x(0x22b)],this['_refresh']();};for(const [d,e,f]of[[this['_inputX'],'offsetX',w(0x216)],[this[w(0x220)],w(0x1ea),'tse-y-val'],[this[w(0x206)],'blur',w(0x1f3)]]){d[w(0x21c)]=()=>{const y=w;this['_currentLayer']()[e]=Number(d['value']),this['_getDomElement'](f)[y(0x20f)]=d['value']+'px',this[y(0x229)]();};}this[w(0x1e9)]['oninput']=()=>{const z=w;this['_currentLayer']()[z(0x1f9)]=this['_inputColor'][z(0x225)],this['_refresh']();},this[w(0x230)]['oninput']=()=>{const A=w;this[A(0x201)]()[A(0x1fd)]=Number(this[A(0x230)]['value']),this['_opacityVal']['textContent']=this[A(0x230)][A(0x225)]+'%',this['_refresh']();},this['_copyBtn']['onclick']=()=>{const B=w;navigator['clipboard']?.['writeText'](this[B(0x20c)]['value'])[B(0x210)](()=>{});},this[w(0x214)]['onclick']=()=>this[w(0x209)](),this['_loadBtn']['onclick']=()=>{const C=w;this[C(0x22f)](),this[C(0x215)](),this[C(0x23f)](),this[C(0x229)]();},this['_loadFromPrimarySelection'](),this['_renderList'](),this['_loadControls'](),this['_refresh']();}[u(0x22f)](){const D=u,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['primarySelection'];if(!c)return;const d=c[D(0x22a)](D(0x22c));d&&(this[D(0x20e)]=parseCssTextShadow(d),this[D(0x217)]=0x0);}['_currentLayer'](){const E=u;return this[E(0x20e)][this[E(0x217)]];}['_addLayer'](){const F=u;this[F(0x20e)]['push'](defaultLayer()),this[F(0x217)]=this[F(0x20e)]['length']-0x1,this[F(0x215)](),this['_loadControls'](),this['_refresh']();}[u(0x219)](){const G=u;this['_layers']['splice'](this['_selectedIndex']+0x1,0x0,{...this['_currentLayer']()}),this['_selectedIndex']=this[G(0x217)]+0x1,this['_renderList'](),this[G(0x23f)](),this['_refresh']();}['_removeLayer'](){const H=u;if(this[H(0x20e)][H(0x247)]<=0x1)return;this['_layers'][H(0x226)](this[H(0x217)],0x1),this[H(0x217)]=Math[H(0x212)](this['_selectedIndex'],this['_layers']['length']-0x1),this['_renderList'](),this['_loadControls'](),this[H(0x229)]();}[u(0x23a)](c){const I=u,d=this['_selectedIndex'],e=d+c;if(e<0x0||e>=this[I(0x20e)]['length'])return;[this[I(0x20e)][d],this['_layers'][e]]=[this['_layers'][e],this['_layers'][d]],this['_selectedIndex']=e,this[I(0x215)](),this[I(0x229)]();}['_renderList'](){const J=u;this[J(0x1f6)][J(0x1eb)]='',this['_layers'][J(0x1ec)]((c,d)=>{const K=J,e=document['createElement']('li');if(d===this['_selectedIndex'])e['classList'][K(0x1ef)](K(0x232));const f=document[K(0x21d)](K(0x207));f[K(0x23b)]='swatch',f['style']['background']=c[K(0x1f9)],e['appendChild'](f);const g=document['createElement']('span');g[K(0x20f)]=c['offsetX']+'px\x20'+c[K(0x1ea)]+K(0x235)+c[K(0x21e)]+'px';if(!c[K(0x21b)])g[K(0x1fa)][K(0x1ef)](K(0x1f5));e['appendChild'](g),e['onclick']=()=>{const L=K;this[L(0x217)]=d,this['_renderList'](),this[L(0x23f)]();},this[K(0x1f6)][K(0x231)](e);});}[u(0x23f)](){const M=u,c=this[M(0x201)]();this['_enabledCheck'][M(0x22b)]=c[M(0x21b)],this['_inputX']['value']=String(c['offsetX']),this['_getDomElement']('tse-x-val')['textContent']=c['offsetX']+'px',this[M(0x220)][M(0x225)]=String(c[M(0x1ea)]),this[M(0x1f4)](M(0x239))['textContent']=c['offsetY']+'px',this[M(0x206)][M(0x225)]=String(c[M(0x21e)]),this[M(0x1f4)](M(0x1f3))['textContent']=c['blur']+'px',this[M(0x1e9)][M(0x225)]=c[M(0x1f9)],this[M(0x230)][M(0x225)]=String(c[M(0x1fd)]),this['_opacityVal']['textContent']=c[M(0x1fd)]+'%';}[u(0x23c)](){const N=u;return this[N(0x20e)][N(0x233)](c=>c[N(0x21b)])['map'](layerToCss)[N(0x224)](',\x20')||N(0x211);}['_refresh'](){const O=u,c=this[O(0x23c)]();this['_previewText'][O(0x200)][O(0x204)]=c,this['_cssOutput']['value']=c,this[O(0x215)]();}[u(0x209)](){const P=u,c=this['_designerCanvas']?.['instanceServiceContainer']?.['selectionService']?.['selectedElements'];if(!c?.[P(0x247)])return;const d=this[P(0x23c)](),e=c[0x0][P(0x218)](P(0x1f1));for(const f of c){if(d===P(0x211))f['removeStyle']('text-shadow');else f[P(0x20d)](P(0x22c),d);}e[P(0x20a)]();}}customElements['define']('node-projects-text-shadow-editor-window',TextShadowEditorWindow);