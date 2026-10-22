const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x1c6))/0x1+-parseInt(q(0x1a7))/0x2+parseInt(q(0x1f0))/0x3*(-parseInt(q(0x1e4))/0x4)+-parseInt(q(0x1b0))/0x5*(-parseInt(q(0x1a2))/0x6)+-parseInt(q(0x1d3))/0x7+parseInt(q(0x19e))/0x8+-parseInt(q(0x1a5))/0x9*(-parseInt(q(0x1e1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x49229));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x18f),r(0x1bc),r(0x216),'oklab','oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
      display: block;
      box-sizing: border-box;
      width: 280px;
      color: var(--wcd-property-grid-text-color, var(--property-grid-text-color, var(--wcd-color-text, #e8edf2)));
      font: 12px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    #editor {
      display: grid;
      gap: 10px;
      box-sizing: border-box;
      padding: 12px;
      border: 1px solid rgba(255, 255, 255, .14);
      border-radius: 8px;
      background: var(--wcd-color-editor-background, var(--color-editor-background, var(--wcd-color-surface, #20252b)));
      box-shadow: 0 14px 38px rgba(0, 0, 0, .36);
    }

    #plane {
      position: relative;
      height: 150px;
      border-radius: 6px;
      overflow: hidden;
      cursor: crosshair;
      background:
        linear-gradient(to top, #000, transparent),
        linear-gradient(to right, #fff, transparent),
        hsl(var(--hue, 0) 100% 50%);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .12);
      touch-action: none;
    }

    #plane-handle {
      position: absolute;
      width: 12px;
      height: 12px;
      box-sizing: border-box;
      border: 2px solid white;
      border-radius: 50%;
      transform: translate(-6px, -6px);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .85), 0 1px 4px rgba(0, 0, 0, .55);
      pointer-events: none;
    }

    .slider-row {
      display: grid;
      grid-template-columns: 18px minmax(0, 1fr) 42px;
      gap: 8px;
      align-items: center;
    }

    .slider-row span {
      color: var(--wcd-color-text-muted, rgba(232, 237, 242, .68));
      font-size: 11px;
      text-transform: uppercase;
    }

    input[type="range"] {
      --slider-background: #79b8ff;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 16px;
      margin: 0;
      background: transparent;
      outline: none;
    }

    #hue {
      --slider-background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    }

    #alpha {
      --slider-background:
        linear-gradient(to right, rgba(var(--rgb-color, 0, 0, 0), 0), var(--opaque-color, #000)),
        linear-gradient(45deg, rgba(255, 255, 255, .24) 25%, transparent 25% 75%, rgba(255, 255, 255, .24) 75%),
        linear-gradient(45deg, rgba(255, 255, 255, .24) 25%, transparent 25% 75%, rgba(255, 255, 255, .24) 75%),
        #2a3037;
      --slider-background-position: 0 0, 0 0, 5px 5px, 0 0;
      --slider-background-size: auto, 10px 10px, 10px 10px, auto;
    }

    input[type="range"]::-webkit-slider-runnable-track {
      height: 7px;
      border-radius: 999px;
      background: var(--slider-background);
      background-position: var(--slider-background-position, 0 0);
      background-size: var(--slider-background-size, auto);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .22);
    }

    input[type="range"]::-moz-range-track {
      height: 7px;
      border-radius: 999px;
      background: var(--slider-background);
      background-position: var(--slider-background-position, 0 0);
      background-size: var(--slider-background-size, auto);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .22);
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 14px;
      height: 14px;
      margin-top: -3.5px;
      border: 2px solid white;
      border-radius: 50%;
      background: hsl(var(--hue, 0) 100% 50%);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .75), 0 1px 3px rgba(0, 0, 0, .45);
    }

    input[type="range"]::-moz-range-thumb {
      width: 10px;
      height: 10px;
      border: 2px solid white;
      border-radius: 50%;
      background: hsl(var(--hue, 0) 100% 50%);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .75), 0 1px 3px rgba(0, 0, 0, .45);
    }

    #alpha::-webkit-slider-thumb {
      background: var(--color, #000);
    }

    #alpha::-moz-range-thumb {
      background: var(--color, #000);
    }

    .swatch {
      width: 42px;
      height: 22px;
      border-radius: 5px;
      background:
        linear-gradient(var(--color, #000), var(--color, #000)),
        linear-gradient(45deg, rgba(255, 255, 255, .22) 25%, transparent 25% 75%, rgba(255, 255, 255, .22) 75%),
        linear-gradient(45deg, rgba(255, 255, 255, .22) 25%, transparent 25% 75%, rgba(255, 255, 255, .22) 75%);
      background-position: 0 0, 0 0, 5px 5px;
      background-size: auto, 10px 10px, 10px 10px;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .16);
    }

    #mode {
      height: 26px;
      min-width: 0;
      border: 1px solid rgba(255, 255, 255, .14);
      border-radius: 5px;
      background: var(--wcd-color-surface, #161a1f);
      color: inherit;
      font: inherit;
      outline: none;
    }

    #channels {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 6px;
    }

    label {
      display: grid;
      gap: 3px;
      min-width: 0;
      color: var(--wcd-color-text-muted, rgba(232, 237, 242, .68));
      font-size: 10px;
      text-transform: uppercase;
    }

    input[type="number"],
    #text {
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      height: 26px;
      border: 1px solid rgba(255, 255, 255, .14);
      border-radius: 5px;
      background: var(--wcd-color-surface, #161a1f);
      color: inherit;
      font: inherit;
      outline: none;
    }

    input[type="number"] {
      padding: 0 4px;
    }

    #text {
      padding: 0 8px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      text-transform: none;
    }

    #text.invalid {
      border-color: var(--wcd-color-error, #e66b6b);
      box-shadow: 0 0 0 1px var(--wcd-color-error-glow, rgba(230, 107, 107, .35));
    }

    input:focus,
    select:focus {
      border-color: var(--wcd-color-focus, #79b8ff);
      box-shadow: 0 0 0 1px rgba(121, 184, 255, .28);
    }

    :host([readonly]) input,
    :host([readonly]) select,
    :host([readonly]) #plane,
    :host([disabled]) input,
    :host([disabled]) select,
    :host([disabled]) #plane {
      opacity: .65;
      pointer-events: none;
    }
  `;static ['template']=html`
    <div id="editor">
      <div id="plane"><div id="plane-handle"></div></div>
      <div class="slider-row">
        <span>Hue</span>
        <input id="hue" type="range" min="0" max="360" step="1">
        <div id="preview" class="swatch"></div>
      </div>
      <div class="slider-row">
        <span>Alpha</span>
        <input id="alpha" type="range" min="0" max="100" step="1">
        <span id="alpha-label"></span>
      </div>
      <select id="mode" aria-label="Color mode">
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
        <option value="cmyk">CMYK</option>
        <option value="oklab">OKLab</option>
        <option value="oklch">OKLCH</option>
      </select>
      <div id="channels"></div>
      <input id="text" type="text" spellcheck="false" aria-label="Color text">
    </div>
  `;[r(0x1da)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['_value']='#000000';['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x1ca)]=r(0x18f);[r(0x199)]=0x0;[r(0x20b)];['_planeHandle'];[r(0x196)];[r(0x1d2)];['_alphaLabel'];[r(0x1f3)];['_channels'];['_textInput'];[r(0x1c5)]=null;get['value'](){const s=r;return this[s(0x1ee)];}set[r(0x1fb)](c){const t=r,d=parseColor(c);if(d){this['_color']=d,this[t(0x1ca)]=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this['_value']=this['_formatColor'](),this[t(0x20e)]();return;}this['_value']=c??'',this[t(0x20e)]();}get[r(0x1c8)](){return this['_mode'];}set[r(0x1c8)](c){const u=r;modes['includes'](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this[u(0x20e)]());}get[r(0x1ef)](){const v=r;return this[v(0x1a8)](v(0x1c0));}set['readOnly'](c){this['toggleAttribute']('readonly',c);}get[r(0x197)](){const w=r;return this[w(0x1a8)](w(0x197));}set['disabled'](c){const x=r;this[x(0x1b6)]('disabled',c);}constructor(){const y=r;super(),this['_plane']=this[y(0x218)]('plane'),this[y(0x212)]=this['_getDomElement'](y(0x195)),this[y(0x196)]=this[y(0x218)](y(0x1b3)),this['_alphaInput']=this['_getDomElement'](y(0x1f2)),this[y(0x1e2)]=this['_getDomElement']('alpha-label'),this[y(0x1f3)]=this[y(0x218)]('mode'),this[y(0x1ea)]=this['_getDomElement']('channels'),this[y(0x1f6)]=this['_getDomElement'](y(0x1a6));}['ready'](){const z=r;this['_wireEvents']();const c=this['getAttribute'](z(0x1fb));if(c!=null)this['value']=c;const d=this['getAttribute']('mode');modes['includes'](d)&&(this['_mode']=d,this['_value']=this['_formatColor']()),this['_render']();}['_wireEvents'](){const A=r;this['_plane'][A(0x1fa)]('pointerdown',c=>this[A(0x215)](c)),this[A(0x196)][A(0x1fa)]('input',()=>this[A(0x209)](!![])),this['_hueInput'][A(0x1fa)]('change',()=>this['_commitCurrentValue']()),this[A(0x1d2)]['addEventListener']('input',()=>this[A(0x190)](!![])),this['_alphaInput'][A(0x1fa)](A(0x200),()=>this['_commitCurrentValue']()),this['_modeSelect'][A(0x1fa)]('change',()=>{this['mode']=this['_modeSelect']['value'],this['_commitCurrentValue']();}),this[A(0x1ea)][A(0x1fa)](A(0x1c9),()=>this['_applyChannelInputs'](!![])),this[A(0x1ea)][A(0x1fa)]('change',()=>this['_commitCurrentValue']()),this['_textInput']['addEventListener']('input',()=>this[A(0x1d0)]()),this[A(0x1f6)]['addEventListener']('change',()=>this['_applyText']()),this['_textInput'][A(0x1fa)]('keydown',c=>{const B=A;c[B(0x203)]===B(0x18e)&&(this['_applyText'](),this[B(0x1f6)][B(0x1bf)]());});}['_startPlaneDrag'](c){const C=r;if(this[C(0x1ef)]||this[C(0x197)])return;this['_dragPointerId']=c['pointerId'],this[C(0x20b)]['setPointerCapture'](c['pointerId']),this[C(0x1fd)](c,!![]),this[C(0x20b)]['addEventListener'](C(0x1d5),this['_planePointerMove']),this[C(0x20b)]['addEventListener'](C(0x18a),this[C(0x201)]),this[C(0x20b)]['addEventListener'](C(0x1ba),this['_finishPlaneDrag']),c[C(0x207)]();}[r(0x18b)]=c=>{const D=r;if(c['pointerId']===this[D(0x1c5)])this['_applyPlanePointer'](c,!![]);};[r(0x201)]=c=>{const E=r;if(c[E(0x20a)]!==this['_dragPointerId'])return;this['_dragPointerId']=null,this[E(0x20b)]['removeEventListener'](E(0x1d5),this['_planePointerMove']),this[E(0x20b)][E(0x204)](E(0x18a),this['_finishPlaneDrag']),this[E(0x20b)]['removeEventListener'](E(0x1ba),this['_finishPlaneDrag']),this['_commitCurrentValue']();};[r(0x1fd)](c,d){const F=r,e=this['_plane'][F(0x210)](),f=clamp((c['clientX']-e[F(0x1d1)])/e['width'],0x0,0x1),g=clamp(0x1-(c[F(0x1e3)]-e['top'])/e[F(0x1aa)],0x0,0x1),h=Number(this['_hueInput'][F(0x1fb)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this[F(0x213)]['a']},d);}['_applyHue'](c){const G=r,d=rgbToHsv(this[G(0x213)]),e=Number(this['_hueInput'][G(0x1fb)])||0x0;this[G(0x199)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}[r(0x190)](c){const H=r;this['_setColor']({...this[H(0x213)],'a':clamp(Number(this[H(0x1d2)][H(0x1fb)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const I=r,d=[...this['_channels'][I(0x1df)]('input')][I(0x219)]((f,g)=>{const J=I;return f[g[J(0x191)]]=Number(g[J(0x1fb)]),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']===I(0x1bc))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[I(0x1ca)]===I(0x216))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[I(0x1ca)]===I(0x1f1))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[I(0x1f2)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x1d0)](){const K=r,c=this['_textInput']['value']['trim']();this[K(0x1f6)][K(0x1e6)][K(0x1a0)]('invalid',c['length']>0x0&&!parseColor(c));}['_applyText'](){const L=r,c=parseColor(this[L(0x1f6)][L(0x1fb)]);this['_textInput'][L(0x1e6)]['toggle']('invalid',!c);if(!c)return;this[L(0x1ca)]=inferColorMode(this[L(0x1f6)]['value'])??this[L(0x1ca)],this[L(0x1cc)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const M=r,g=this['_value'];this[M(0x213)]=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this['_formatColor'](),this[M(0x20e)](e);if(d)this[M(0x1ae)]['emit']({'newValue':this[M(0x1ee)],'oldValue':g});else this[M(0x1da)][M(0x21d)]({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const N=r,c=this['_value'];this['_value']=this['_formatColor'](),this['valueChanged'][N(0x21d)]({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const O=r;if(!this['_textInput'])return;const d=rgbToHsv(this[O(0x213)]);this[O(0x202)]['setProperty']('--hue',String(Math['round'](this['_hue']))),this[O(0x202)]['setProperty'](O(0x1ff),toCssRgb(this['_color'])),this[O(0x202)]['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[O(0x213)]['b']+')'),this[O(0x202)]['setProperty'](O(0x205),this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[O(0x213)]['b']),this[O(0x212)]['style']['left']=d['s']*0x64+'%',this[O(0x212)][O(0x202)][O(0x1ab)]=(0x1-d['v'])*0x64+'%',this['_hueInput']['value']=String(Math['round'](this[O(0x199)])),this['_alphaInput']['value']=String(Math[O(0x18d)](this[O(0x213)]['a']*0x64)),this[O(0x1e2)][O(0x1ec)]=Math['round'](this[O(0x213)]['a']*0x64)+'%',this['_modeSelect'][O(0x1fb)]=this[O(0x1ca)];if(c)this[O(0x1b4)]();if(document[O(0x19b)]!==this[O(0x1f6)])this['_textInput']['value']=this['_value'];this[O(0x1f6)][O(0x1e6)][O(0x1d4)](O(0x1f8));}['_renderChannelInputs'](){const P=r,c=getChannelValues(this[P(0x213)],this[P(0x1ca)]);this['_channels']['innerHTML']=c[P(0x1c7)](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d[P(0x1a1)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[P(0x191)]+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d['max']+'\x22\x20step=\x22'+d[P(0x1fe)]+'\x22\x20value=\x22'+d[P(0x1fb)]+P(0x206))['join']('');}['_formatColor'](){const Q=r;return formatColor(this[Q(0x213)],this[Q(0x1ca)]);}[r(0x21c)](){const R=r,c=rgbToHsv(this[R(0x213)]);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 2px;
    }

    button {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 3px;
      border: 1px solid var(--wcd-input-border-color, var(--input-border-color, var(--wcd-color-border, #596c7a)));
      border-radius: 4px;
      background: var(--wcd-input-background-color, var(--input-background-color, var(--wcd-color-surface, #1d2228)));
      cursor: pointer;
      outline: none;
    }

    button:focus {
      border-color: var(--wcd-color-focus, #79b8ff);
      box-shadow: 0 0 0 1px rgba(121, 184, 255, .28);
    }

    #swatch {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      background:
        linear-gradient(var(--color, #000), var(--color, #000)),
        linear-gradient(45deg, rgba(255, 255, 255, .25) 25%, transparent 25% 75%, rgba(255, 255, 255, .25) 75%),
        linear-gradient(45deg, rgba(255, 255, 255, .25) 25%, transparent 25% 75%, rgba(255, 255, 255, .25) 75%);
      background-position: 0 0, 0 0, 5px 5px;
      background-size: auto, 10px 10px, 10px 10px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .28);
    }

    :host([readonly]) button,
    :host([disabled]) button {
      cursor: default;
      opacity: .65;
    }
  `;static ['template']=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;['_value']=r(0x18c);[r(0x1cb)];[r(0x1d7)];['_editor'];['_ignoreNextClick']=![];[r(0x1dd)]=c=>this['_handleOutsidePointer'](c);['_windowKeyHandler']=c=>this['_handleWindowKey'](c);get[r(0x1fb)](){const S=r;return this[S(0x1ee)];}set['value'](c){this['_setValue'](c,![]);}get[r(0x1ef)](){return this['hasAttribute']('readonly');}set['readOnly'](c){const T=r;this['toggleAttribute'](T(0x1c0),c);}get['disabled'](){const U=r;return this[U(0x1a8)]('disabled');}set[r(0x197)](c){const V=r;this[V(0x1b6)]('disabled',c);if(this[V(0x1cb)])this['_button'][V(0x197)]=c;}constructor(){const W=r;super(),this['_button']=this['_getDomElement'](W(0x1e9));}['ready'](){const X=r,c=this[X(0x1fc)]('value');if(c!=null)this[X(0x194)](c,![]);this['_button']['disabled']=this['disabled'],this[X(0x1cb)][X(0x1fa)](X(0x1f4),d=>this['_handleButtonPointerDown'](d)),this[X(0x1cb)][X(0x1fa)]('click',d=>this[X(0x1e8)](d)),this[X(0x1cb)]['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this[X(0x1c1)]();}[r(0x1af)](){this['_closePopup']();}[r(0x1b1)](){const Y=r;if(this[Y(0x1ef)]||this['disabled'])return;if(this['_popup'])this['_closePopup']();else this[Y(0x1b5)]();}[r(0x192)](c){const Z=r;if(c[Z(0x1e9)]!==0x0)return;this[Z(0x1a4)]=!![],this[Z(0x1b1)](),c['preventDefault'](),c[Z(0x189)]();}[r(0x1e8)](c){const a0=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c[a0(0x207)](),c['stopPropagation']();return;}this[a0(0x1b1)]();}['_handleButtonKeyDown'](c){const a1=r;if(c[a1(0x203)]!=='Enter'&&c['key']!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a1(0x189)]();}['_openPopup'](){const a2=r;this['_popup']=document['createElement'](a2(0x193)),this['_popup'][a2(0x202)]['position']='fixed',this['_popup']['style']['zIndex']=a2(0x211),this[a2(0x1d7)][a2(0x202)][a2(0x1e0)]='280px',this[a2(0x1c4)]=document[a2(0x1eb)](a2(0x1dc)),this[a2(0x1c4)]['value']=this['_value'],this[a2(0x1c4)]['valuePreviewChanged']['on'](c=>{const a3=a2;this[a3(0x194)](c[a3(0x19f)],!![]),this[a3(0x1be)](new Event(a3(0x1c9),{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a4=a2;this[a4(0x194)](c[a4(0x19f)],!![]),this[a4(0x1be)](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this['_editor']),document['body']['appendChild'](this[a2(0x1d7)]),this[a2(0x1f7)](),window[a2(0x1fa)]('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener']('scroll',()=>this[a2(0x1f7)](),{'once':!![],'capture':!![]}),window[a2(0x1fa)]('keydown',this['_windowKeyHandler']),requestAnimationFrame(()=>window[a2(0x1fa)](a2(0x1f4),this[a2(0x1dd)],!![]));}[r(0x1f7)](){const a5=r;if(!this[a5(0x1d7)])return;const c=this[a5(0x210)](),d=this[a5(0x1d7)]['offsetWidth']||0x118,e=this['_popup']['offsetHeight']||0x168;let f=c[a5(0x1d1)],g=c[a5(0x1ce)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a5(0x208)]-0x8)g=c[a5(0x1ab)]-e-0x4;this['_popup']['style'][a5(0x1d1)]=Math[a5(0x1bb)](0x8,f)+'px',this[a5(0x1d7)]['style'][a5(0x1ab)]=Math[a5(0x1bb)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a6=r,d=c[a6(0x1de)]();if(d[a6(0x1d8)](this)||this[a6(0x1d7)]&&d['includes'](this['_popup']))return;this[a6(0x1cd)]();}['_handleWindowKey'](c){const a7=r;if(c[a7(0x203)]==='Escape')this[a7(0x1cd)]();}['_closePopup'](){const a8=r;window['removeEventListener'](a8(0x1f4),this['_outsidePointerHandler'],!![]),window['removeEventListener']('keydown',this['_windowKeyHandler']),this['_popup']?.['remove'](),this['_popup']=null,this['_editor']=null;}[r(0x194)](c,d){const a9=r;this['_value']=c??'';if(d)this['setAttribute'](a9(0x1fb),this['_value']);this['_renderSwatch']();}[r(0x1c1)](){const aa=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[aa(0x202)][aa(0x217)](aa(0x1ff),toCssRgb(c));}}function parseColor(c){const ab=r;if(!c)return null;const d=c['trim']();if(d[ab(0x19a)]()===ab(0x1a3))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ab(0x1b9)](g);if(h?.[ab(0x1c2)])return normalizeColor({'r':h['red'],'g':h[ab(0x19d)],'b':h[ab(0x1d9)],'a':h['opacity']});return null;}function inferColorMode(c){const ac=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ac(0x198)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e==='rgba')return ac(0x18f);if(e===ac(0x1bc)||e===ac(0x1a9))return ac(0x1bc);if(e==='cmyk')return'cmyk';if(e===ac(0x1f1))return'oklab';if(e===ac(0x1db))return ac(0x1db);return null;}function normalizeModernColorSyntax(c){const ad=r;return c['replace'](/,\s*/g,',')[ad(0x1bd)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ad(0x18f),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ad(0x1bc),e));}function normalizeFunctionBody(c,d){const ae=r;if(d[ae(0x1d8)](',')){const h=d[ae(0x19c)](',')['map'](i=>i[ae(0x214)]());if(h[ae(0x1f9)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ae(0x1ac)](0x0,-0x1))/0x64);return''+c+(h[ae(0x1f9)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d['split']('/')['map'](i=>i['trim']()),g=e[ae(0x19c)](/\s+/)[ae(0x20d)](Boolean);if(f)g['push'](f[ae(0x1b7)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const af=r,d=/^#([0-9a-f]{3,8})$/i[af(0x198)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[af(0x1f9)]===0x3||e[af(0x1f9)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[af(0x1f9)]===0x8)return normalizeColor({'r':f(e[af(0x1ac)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e['length']===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function a(){const aw=['invalid','length','addEventListener','value','getAttribute','_applyPlanePointer','step','--color','change','_finishPlaneDrag','style','key','removeEventListener','--rgb-color','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','preventDefault','innerHeight','_applyHue','pointerId','_plane','Alpha','filter','_render','cbrt','getBoundingClientRect','100000','_planeHandle','_color','trim','_startPlaneDrag','cmyk','setProperty','_getDomElement','reduce','pow','atan2','_syncHueFromColor','emit','stopPropagation','pointerup','_planePointerMove','#000000','round','Enter','rgb','_applyAlpha','name','_handleButtonPointerDown','div','_setValue','plane-handle','_hueInput','disabled','exec','_hue','toLowerCase','activeElement','split','green','2564080wEsGrP','newValue','toggle','label','123798EaVhxs','transparent','_ignoreNextClick','7173yIwTTX','text','327820TvxxER','hasAttribute','hsla','height','top','slice','oklab(','valuePreviewChanged','disconnectedCallback','15PRRxqO','_togglePopup','hsl(','hue','_renderChannelInputs','_openPopup','toggleAttribute','endsWith','abs','toColorObject','pointercancel','max','hsl','replace','dispatchEvent','blur','readonly','_renderSwatch','valid','%,\x20','_editor','_dragPointerId','447771eaSsXp','map','mode','input','_mode','_button','_setColor','_closePopup','bottom','min','_validateTextInput','left','_alphaInput','167363wLXDeB','remove','pointermove','\x20/\x20','_popup','includes','blue','valueChanged','oklch','node-projects-color-editor','_outsidePointerHandler','composedPath','querySelectorAll','width','13080yihAIC','_alphaLabel','clientY','279848AILdxC','cmyk(','classList','rgb(','_handleButtonClick','button','_channels','createElement','textContent','node-projects-color-input','_value','readOnly','21IxVFed','oklab','alpha','_modeSelect','pointerdown','sqrt','_textInput','_positionPopup'];a=function(){return aw;};return a();}function parseOklabColor(c){const ag=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][ag(0x19c)]('/')[ag(0x1c7)](j=>j[ag(0x214)]()),h=f[ag(0x1bd)](/,/g,'\x20')['split'](/\s+/)[ag(0x20d)](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===ag(0x1f1))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ah=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ah(0x1e7)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ah(0x1b2)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':'hsla('+Math[ah(0x18d)](g['h'])+',\x20'+Math[ah(0x18d)](g['s']*0x64)+'%,\x20'+Math[ah(0x18d)](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+ah(0x1c3)+Math[ah(0x18d)](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+ah(0x1c3)+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ah(0x1e5)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ah(0x1ad)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ah(0x1d6)+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ah(0x1d6)+e)+')';}function getChannelValues(c,d){const ai=r;if(d===ai(0x18f))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ai(0x1bc)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ai(0x18d)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ai(0x18d)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ai(0x18d)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ai(0x18d)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ai(0x18d)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x18d)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ai(0x1f1)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':ai(0x20c),'name':'alpha','value':Math[ai(0x18d)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const aj=r;return{'r':Math[aj(0x18d)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function b(c,d){c=c-0x189;const e=a();let f=e[c];return f;}function rgbToHsv(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ak(0x1bb)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const al=r,i=f*e,j=i*(0x1-Math[al(0x1b8)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const am=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[am(0x1b8)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const an=r,i=(0x1-Math[an(0x1b8)](0x2*f-0x1))*e,j=i*(0x1-Math[an(0x1b8)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const ao=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[ao(0x1bb)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ap=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ap(0x20f)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[ap(0x20f)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const aq=r,f=Math[aq(0x21a)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[aq(0x21a)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[aq(0x21a)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ar=r,e=rgbToOklab(d),f=Math[ar(0x1f5)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[ar(0x21b)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math['sin'](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const as=r;return c<=0.0031308?12.92*c:1.055*Math[as(0x21a)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const at=r;return c[at(0x1b7)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const au=r;return Math[au(0x1cf)](e,Math['max'](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const av=r,e=Math[av(0x21a)](0xa,d);return Math[av(0x18d)](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements['define'](r(0x1ed),ColorInput);