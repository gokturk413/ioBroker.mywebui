const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x20d))/0x1*(-parseInt(q(0x1ef))/0x2)+parseInt(q(0x19d))/0x3*(parseInt(q(0x1d9))/0x4)+-parseInt(q(0x201))/0x5+-parseInt(q(0x1df))/0x6+-parseInt(q(0x1d2))/0x7+parseInt(q(0x1b7))/0x8*(parseInt(q(0x1f3))/0x9)+-parseInt(q(0x213))/0xa*(-parseInt(q(0x1f6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3280c));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb','hsl','cmyk',r(0x1da),'oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x1c4)]=new TypedEvent();[r(0x1a8)]=new TypedEvent();[r(0x1e3)]='#000000';[r(0x205)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x222)]=r(0x1a0);['_hue']=0x0;['_plane'];['_planeHandle'];['_hueInput'];[r(0x208)];[r(0x1be)];['_modeSelect'];['_channels'];['_textInput'];[r(0x1c5)]=null;get['value'](){const s=r;return this[s(0x1e3)];}set['value'](c){const t=r,d=parseColor(c);if(d){this[t(0x205)]=d,this[t(0x222)]=inferColorMode(c)??this['_mode'],this[t(0x1ff)](),this[t(0x1e3)]=this[t(0x200)](),this[t(0x1d4)]();return;}this[t(0x1e3)]=c??'',this['_render']();}get['mode'](){return this['_mode'];}set[r(0x1ce)](c){const u=r;modes['includes'](c)&&(this[u(0x222)]=c,this[u(0x1e3)]=this[u(0x200)](),this[u(0x1d4)]());}get['readOnly'](){const v=r;return this['hasAttribute'](v(0x1dc));}set['readOnly'](c){const w=r;this[w(0x1eb)]('readonly',c);}get[r(0x1d0)](){const x=r;return this[x(0x20c)]('disabled');}set['disabled'](c){const y=r;this['toggleAttribute'](y(0x1d0),c);}constructor(){const z=r;super(),this[z(0x204)]=this[z(0x1a3)](z(0x1e6)),this[z(0x1b5)]=this['_getDomElement'](z(0x234)),this[z(0x1ac)]=this['_getDomElement']('hue'),this[z(0x208)]=this[z(0x1a3)]('alpha'),this['_alphaLabel']=this['_getDomElement'](z(0x221)),this[z(0x218)]=this[z(0x1a3)]('mode'),this[z(0x1ab)]=this['_getDomElement']('channels'),this[z(0x1d5)]=this[z(0x1a3)]('text');}['ready'](){const A=r;this['_wireEvents']();const c=this[A(0x1c3)]('value');if(c!=null)this[A(0x203)]=c;const d=this['getAttribute'](A(0x1ce));modes[A(0x1dd)](d)&&(this['_mode']=d,this[A(0x1e3)]=this['_formatColor']()),this['_render']();}[r(0x1ae)](){const B=r;this['_plane']['addEventListener'](B(0x1c6),c=>this['_startPlaneDrag'](c)),this['_hueInput']['addEventListener'](B(0x20f),()=>this['_applyHue'](!![])),this['_hueInput'][B(0x212)]('change',()=>this[B(0x224)]()),this['_alphaInput']['addEventListener'](B(0x20f),()=>this[B(0x1a4)](!![])),this['_alphaInput']['addEventListener']('change',()=>this[B(0x224)]()),this[B(0x218)]['addEventListener'](B(0x22b),()=>{const C=B;this['mode']=this['_modeSelect'][C(0x203)],this['_commitCurrentValue']();}),this[B(0x1ab)]['addEventListener']('input',()=>this[B(0x1fa)](!![])),this[B(0x1ab)]['addEventListener']('change',()=>this['_commitCurrentValue']()),this['_textInput']['addEventListener'](B(0x20f),()=>this['_validateTextInput']()),this[B(0x1d5)]['addEventListener'](B(0x22b),()=>this[B(0x1ee)]()),this['_textInput']['addEventListener'](B(0x1cd),c=>{const D=B;c[D(0x20a)]===D(0x22c)&&(this['_applyText'](),this['_textInput']['blur']());});}[r(0x1bc)](c){const E=r;if(this[E(0x1a5)]||this['disabled'])return;this['_dragPointerId']=c[E(0x1f1)],this['_plane']['setPointerCapture'](c[E(0x1f1)]),this['_applyPlanePointer'](c,!![]),this['_plane']['addEventListener']('pointermove',this[E(0x21b)]),this[E(0x204)]['addEventListener'](E(0x1b1),this['_finishPlaneDrag']),this[E(0x204)][E(0x212)]('pointercancel',this[E(0x216)]),c['preventDefault']();}['_planePointerMove']=c=>{const F=r;if(c[F(0x1f1)]===this['_dragPointerId'])this[F(0x1e9)](c,!![]);};[r(0x216)]=c=>{const G=r;if(c['pointerId']!==this['_dragPointerId'])return;this['_dragPointerId']=null,this['_plane']['removeEventListener'](G(0x22a),this['_planePointerMove']),this['_plane']['removeEventListener'](G(0x1b1),this['_finishPlaneDrag']),this['_plane'][G(0x1e0)]('pointercancel',this[G(0x216)]),this['_commitCurrentValue']();};[r(0x1e9)](c,d){const H=r,e=this['_plane']['getBoundingClientRect'](),f=clamp((c[H(0x1cf)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e[H(0x1f8)],0x0,0x1),h=Number(this[H(0x1ac)][H(0x203)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}['_applyHue'](c){const I=r,d=rgbToHsv(this[I(0x205)]),e=Number(this[I(0x1ac)][I(0x203)])||0x0;this[I(0x1c2)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[I(0x205)]['a']},c);}['_applyAlpha'](c){const J=r;this[J(0x1c8)]({...this[J(0x205)],'a':clamp(Number(this['_alphaInput']['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this[K(0x1ab)][K(0x225)](K(0x20f))]['reduce']((f,g)=>{const L=K;return f[g[L(0x1e1)]]=Number(g[L(0x203)]),f;},{});let e;if(this[K(0x222)]===K(0x1a0))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[K(0x222)]===K(0x1c7))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===K(0x215))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x22f)](){const M=r,c=this['_textInput']['value'][M(0x1fb)]();this['_textInput'][M(0x1bd)][M(0x21f)](M(0x19f),c['length']>0x0&&!parseColor(c));}['_applyText'](){const N=r,c=parseColor(this['_textInput']['value']);this[N(0x1d5)][N(0x1bd)][N(0x21f)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput'][N(0x203)])??this[N(0x222)],this['_setColor'](c,![],!![],!![]);}[r(0x1c8)](c,d,e=!![],f=![]){const O=r,g=this[O(0x1e3)];this[O(0x205)]=normalizeColor(c);if(f)this[O(0x1ff)]();this['_value']=this['_formatColor'](),this['_render'](e);if(d)this[O(0x1a8)][O(0x1ad)]({'newValue':this['_value'],'oldValue':g});else this[O(0x1c4)][O(0x1ad)]({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const P=r,c=this['_value'];this['_value']=this['_formatColor'](),this['valueChanged'][P(0x1ad)]({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const Q=r;if(!this['_textInput'])return;const d=rgbToHsv(this['_color']);this[Q(0x1a2)]['setProperty']('--hue',String(Math['round'](this[Q(0x1c2)]))),this[Q(0x1a2)][Q(0x1ec)](Q(0x1b3),toCssRgb(this[Q(0x205)])),this[Q(0x1a2)]['setProperty'](Q(0x1aa),'rgb('+this[Q(0x205)]['r']+',\x20'+this[Q(0x205)]['g']+',\x20'+this['_color']['b']+')'),this[Q(0x1a2)][Q(0x1ec)]('--rgb-color',this[Q(0x205)]['r']+',\x20'+this[Q(0x205)]['g']+',\x20'+this[Q(0x205)]['b']),this['_planeHandle'][Q(0x1a2)]['left']=d['s']*0x64+'%',this[Q(0x1b5)][Q(0x1a2)]['top']=(0x1-d['v'])*0x64+'%',this['_hueInput']['value']=String(Math['round'](this[Q(0x1c2)])),this[Q(0x208)][Q(0x203)]=String(Math[Q(0x228)](this['_color']['a']*0x64)),this[Q(0x1be)]['textContent']=Math['round'](this['_color']['a']*0x64)+'%',this['_modeSelect'][Q(0x203)]=this[Q(0x222)];if(c)this['_renderChannelInputs']();if(document[Q(0x1de)]!==this[Q(0x1d5)])this['_textInput']['value']=this['_value'];this[Q(0x1d5)]['classList'][Q(0x229)]('invalid');}['_renderChannelInputs'](){const R=r,c=getChannelValues(this[R(0x205)],this['_mode']);this[R(0x1ab)][R(0x19e)]=c['map'](d=>R(0x1ea)+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+R(0x1c1)+d['min']+'\x22\x20max=\x22'+d['max']+'\x22\x20step=\x22'+d[R(0x1b6)]+'\x22\x20value=\x22'+d['value']+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')['join']('');}['_formatColor'](){return formatColor(this['_color'],this['_mode']);}['_syncHueFromColor'](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x1a2)]=css`
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
  `;['_value']='#000000';['_button'];[r(0x1e5)];['_editor'];[r(0x1ca)]=![];[r(0x1d3)]=c=>this[r(0x199)](c);[r(0x1db)]=c=>this['_handleWindowKey'](c);get['value'](){const S=r;return this[S(0x1e3)];}set[r(0x203)](c){const T=r;this[T(0x1ed)](c,![]);}get['readOnly'](){const U=r;return this[U(0x20c)](U(0x1dc));}set[r(0x1a5)](c){const V=r;this['toggleAttribute'](V(0x1dc),c);}get[r(0x1d0)](){const W=r;return this[W(0x20c)](W(0x1d0));}set[r(0x1d0)](c){const X=r;this['toggleAttribute'](X(0x1d0),c);if(this[X(0x232)])this[X(0x232)][X(0x1d0)]=c;}constructor(){super(),this['_button']=this['_getDomElement']('button');}['ready'](){const Y=r,c=this[Y(0x1c3)](Y(0x203));if(c!=null)this['_setValue'](c,![]);this['_button']['disabled']=this[Y(0x1d0)],this['_button']['addEventListener']('pointerdown',d=>this[Y(0x1f4)](d)),this[Y(0x232)][Y(0x212)](Y(0x220),d=>this[Y(0x231)](d)),this['_button'][Y(0x212)](Y(0x1cd),d=>this['_handleButtonKeyDown'](d)),this[Y(0x19c)]();}['disconnectedCallback'](){const Z=r;this[Z(0x1f2)]();}[r(0x1d6)](){const a0=r;if(this['readOnly']||this[a0(0x1d0)])return;if(this[a0(0x1e5)])this[a0(0x1f2)]();else this[a0(0x211)]();}[r(0x1f4)](c){const a1=r;if(c['button']!==0x0)return;this[a1(0x1ca)]=!![],this[a1(0x1d6)](),c['preventDefault'](),c[a1(0x219)]();}[r(0x231)](c){const a2=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c['preventDefault'](),c[a2(0x219)]();return;}this['_togglePopup']();}[r(0x214)](c){const a3=r;if(c['key']!==a3(0x22c)&&c['key']!=='\x20')return;this[a3(0x1d6)](),c['preventDefault'](),c['stopPropagation']();}[r(0x211)](){const a4=r;this['_popup']=document[a4(0x1d8)]('div'),this['_popup']['style']['position']='fixed',this['_popup']['style']['zIndex']=a4(0x227),this['_popup'][a4(0x1a2)][a4(0x20b)]=a4(0x1fd),this['_editor']=document['createElement']('node-projects-color-editor'),this['_editor']['value']=this[a4(0x1e3)],this[a4(0x22d)][a4(0x1a8)]['on'](c=>{const a5=a4;this[a5(0x1ed)](c['newValue'],!![]),this['dispatchEvent'](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a4(0x22d)]['valueChanged']['on'](c=>{const a6=a4;this['_setValue'](c['newValue'],!![]),this[a6(0x1a1)](new Event(a6(0x22b),{'bubbles':!![],'composed':!![]}));}),this['_popup'][a4(0x1b8)](this[a4(0x22d)]),document[a4(0x1b2)]['appendChild'](this[a4(0x1e5)]),this['_positionPopup'](),window['addEventListener'](a4(0x206),()=>this['_positionPopup'](),{'once':!![]}),window[a4(0x212)](a4(0x1fe),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a4(0x212)]('keydown',this['_windowKeyHandler']),requestAnimationFrame(()=>window['addEventListener'](a4(0x1c6),this[a4(0x1d3)],!![]));}[r(0x1a6)](){const a7=r;if(!this[a7(0x1e5)])return;const c=this['getBoundingClientRect'](),d=this[a7(0x1e5)][a7(0x1a9)]||0x118,e=this['_popup']['offsetHeight']||0x168;let f=c['left'],g=c[a7(0x1c0)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a7(0x1bf)]-0x8)g=c[a7(0x1b9)]-e-0x4;this[a7(0x1e5)][a7(0x1a2)][a7(0x21c)]=Math[a7(0x1b0)](0x8,f)+'px',this['_popup']['style']['top']=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a8=r,d=c[a8(0x1b4)]();if(d['includes'](this)||this['_popup']&&d['includes'](this[a8(0x1e5)]))return;this[a8(0x1f2)]();}[r(0x1cb)](c){if(c['key']==='Escape')this['_closePopup']();}[r(0x1f2)](){const a9=r;window[a9(0x1e0)](a9(0x1c6),this[a9(0x1d3)],!![]),window[a9(0x1e0)](a9(0x1cd),this['_windowKeyHandler']),this[a9(0x1e5)]?.['remove'](),this[a9(0x1e5)]=null,this['_editor']=null;}[r(0x1ed)](c,d){const aa=r;this[aa(0x1e3)]=c??'';if(d)this[aa(0x1bb)](aa(0x203),this[aa(0x1e3)]);this[aa(0x19c)]();}['_renderSwatch'](){const c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ab=r;if(!c)return null;const d=c[ab(0x1fb)]();if(d[ab(0x1c9)]()===ab(0x1f0))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.[ab(0x21a)])return normalizeColor({'r':h['red'],'g':h[ab(0x19a)],'b':h[ab(0x235)],'a':h[ab(0x1e7)]});return null;}function inferColorMode(c){const ac=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ac(0x1c9)]();if(e==='rgb'||e==='rgba')return'rgb';if(e==='hsl'||e==='hsla')return'hsl';if(e==='cmyk')return'cmyk';if(e===ac(0x1da))return ac(0x1da);if(e==='oklch')return'oklch';return null;}function normalizeModernColorSyntax(c){const ad=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))[ad(0x202)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ae=r;if(d[ae(0x1dd)](',')){const h=d[ae(0x233)](',')[ae(0x1e4)](i=>i['trim']());if(h['length']===0x4&&h[0x3][ae(0x22e)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[ae(0x19b)]===0x4?'a':'')+'('+h[ae(0x1f9)](',')+')';}const [e,f]=d[ae(0x233)]('/')[ae(0x1e4)](i=>i[ae(0x1fb)]()),g=e[ae(0x233)](/\s+/)['filter'](Boolean);if(f)g[ae(0x223)](f['endsWith']('%')?String(Number(f[ae(0x1ba)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[ae(0x1f9)](',')+')';}function parseHexColor(c){const af=r,d=/^#([0-9a-f]{3,8})$/i[af(0x1e2)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[af(0x19b)]===0x1?g+g:g,0x10);if(e[af(0x19b)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e[af(0x19b)]===0x6||e[af(0x19b)]===0x8)return normalizeColor({'r':f(e[af(0x1ba)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[af(0x1ba)](0x4,0x6)),'a':e['length']===0x8?f(e[af(0x1ba)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ag=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')[ag(0x1e4)](j=>j[ag(0x1fb)]()),h=f['replace'](/,/g,'\x20')[ag(0x233)](/\s+/)[ag(0x1d1)](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ah=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ah(0x1fc)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[ah(0x228)](g['h'])+',\x20'+Math[ah(0x228)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':ah(0x1af)+Math[ah(0x228)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ah(0x228)](g['l']*0x64)+ah(0x226)+e+')';}if(d===ah(0x215)){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math[ah(0x228)](h['m']*0x64)+'%,\x20'+Math[ah(0x228)](h['y']*0x64)+ah(0x226)+Math[ah(0x228)](h['k']*0x64)+'%';return c['a']>=0x1?ah(0x21d)+i+')':ah(0x21d)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ah(0x198)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ah(0x1a7)+e)+')';}const f=rgbToOklch(c);return ah(0x210)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ai=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x228)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ai(0x1c7)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ai(0x228)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ai(0x228)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x228)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ai(0x1f5),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const aj=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[aj(0x228)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ak(0x1b0)](e,f,i),k=Math[ak(0x1cc)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const al=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[al(0x230)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function a(){const au=['_setColor','toLowerCase','_ignoreNextClick','_handleWindowKey','min','keydown','mode','clientX','disabled','filter','2577869ltMVaO','_outsidePointerHandler','_render','_textInput','_togglePopup','cbrt','createElement','834508YchIZz','oklab','_windowKeyHandler','readonly','includes','activeElement','990258kEQmae','removeEventListener','name','exec','_value','map','_popup','plane','opacity','cos','_applyPlanePointer','\x0a\x20\x20\x20\x20\x20\x20<label>','toggleAttribute','setProperty','_setValue','_applyText','358304cuGUNm','transparent','pointerId','_closePopup','726021hRTZOs','_handleButtonPointerDown','alpha','9570187Rpwyzm','isFinite','height','join','_applyChannelInputs','trim','rgb(','280px','scroll','_syncHueFromColor','_formatColor','1917575AegDjz','replace','value','_plane','_color','resize','sin','_alphaInput','sqrt','key','width','hasAttribute','2XcYxbt','define','input','oklch(','_openPopup','addEventListener','10PGxmmO','_handleButtonKeyDown','cmyk','_finishPlaneDrag','pow','_modeSelect','stopPropagation','valid','_planePointerMove','left','cmyk(','atan2','toggle','click','alpha-label','_mode','push','_commitCurrentValue','querySelectorAll','%,\x20','100000','round','remove','pointermove','change','Enter','_editor','endsWith','_validateTextInput','abs','_handleButtonClick','_button','split','plane-handle','blue','oklab(','_handleOutsidePointer','green','length','_renderSwatch','3KQIDeI','innerHTML','invalid','rgb','dispatchEvent','style','_getDomElement','_applyAlpha','readOnly','_positionPopup','\x20/\x20','valuePreviewChanged','offsetWidth','--opaque-color','_channels','_hueInput','emit','_wireEvents','hsla(','max','pointerup','body','--color','composedPath','_planeHandle','step','40NWVwCr','appendChild','top','slice','setAttribute','_startPlaneDrag','classList','_alphaLabel','innerHeight','bottom','\x22\x20min=\x22','_hue','getAttribute','valueChanged','_dragPointerId','pointerdown','hsl'];a=function(){return au;};return a();}function rgbToCmyk(c){const am=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[am(0x1b0)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const an=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[an(0x1d7)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[an(0x1d7)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[an(0x1d7)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function b(c,d){c=c-0x198;const e=a();let f=e[c];return f;}function oklabToRgb(c,d,e){const ao=r,f=Math[ao(0x217)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[ao(0x217)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ap=r,e=rgbToOklab(d),f=Math[ap(0x209)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[ap(0x21e)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const aq=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[aq(0x1e8)](g),e*Math[aq(0x207)](g));}function srgbToLinear(c){const ar=r;return c<=0.04045?c/12.92:Math[ar(0x217)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const as=r;return c[as(0x22e)]('%')?Number(c[as(0x1ba)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const at=r;return Math[at(0x1cc)](e,Math['max'](d,Number[at(0x1f7)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const e=Math['pow'](0xa,d);return Math['round'](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements[r(0x20e)]('node-projects-color-input',ColorInput);