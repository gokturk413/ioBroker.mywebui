const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x18b))/0x1+parseInt(q(0x180))/0x2*(parseInt(q(0x158))/0x3)+parseInt(q(0x14b))/0x4*(parseInt(q(0x137))/0x5)+-parseInt(q(0x13d))/0x6*(-parseInt(q(0x17a))/0x7)+parseInt(q(0x174))/0x8*(parseInt(q(0x173))/0x9)+-parseInt(q(0x13c))/0xa*(-parseInt(q(0x1bd))/0xb)+-parseInt(q(0x1b6))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2f3be));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x138),r(0x1bb),'cmyk','oklab',r(0x19d)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x1ae)]=css`
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
  `;['valueChanged']=new TypedEvent();[r(0x190)]=new TypedEvent();[r(0x159)]='#000000';[r(0x1b7)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x1a8)]=r(0x138);[r(0x13f)]=0x0;[r(0x1ca)];[r(0x14d)];['_hueInput'];['_alphaInput'];[r(0x16b)];['_modeSelect'];['_channels'];[r(0x139)];[r(0x15e)]=null;get[r(0x144)](){return this['_value'];}set['value'](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this[s(0x1a8)]=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this['_value']=this['_formatColor'](),this['_render']();return;}this[s(0x159)]=c??'',this[s(0x17f)]();}get['mode'](){const t=r;return this[t(0x1a8)];}set['mode'](c){const u=r;modes[u(0x194)](c)&&(this[u(0x1a8)]=c,this['_value']=this['_formatColor'](),this['_render']());}get[r(0x157)](){const v=r;return this['hasAttribute'](v(0x13e));}set[r(0x157)](c){const w=r;this['toggleAttribute'](w(0x13e),c);}get[r(0x1c7)](){const x=r;return this[x(0x1b2)](x(0x1c7));}set[r(0x1c7)](c){const y=r;this[y(0x17b)]('disabled',c);}constructor(){const z=r;super(),this[z(0x1ca)]=this[z(0x13b)](z(0x181)),this['_planeHandle']=this[z(0x13b)]('plane-handle'),this[z(0x1b3)]=this[z(0x13b)](z(0x153)),this['_alphaInput']=this['_getDomElement']('alpha'),this['_alphaLabel']=this[z(0x13b)]('alpha-label'),this['_modeSelect']=this['_getDomElement']('mode'),this['_channels']=this['_getDomElement'](z(0x16e)),this['_textInput']=this['_getDomElement'](z(0x136));}[r(0x135)](){const A=r;this[A(0x16d)]();const c=this[A(0x1b4)](A(0x144));if(c!=null)this['value']=c;const d=this['getAttribute'](A(0x182));modes['includes'](d)&&(this[A(0x1a8)]=d,this['_value']=this[A(0x195)]()),this[A(0x17f)]();}[r(0x16d)](){const B=r;this['_plane'][B(0x176)](B(0x1bf),c=>this[B(0x146)](c)),this['_hueInput']['addEventListener'](B(0x17d),()=>this[B(0x199)](!![])),this[B(0x1b3)]['addEventListener'](B(0x197),()=>this['_commitCurrentValue']()),this['_alphaInput']['addEventListener']('input',()=>this[B(0x142)](!![])),this[B(0x15c)]['addEventListener'](B(0x197),()=>this[B(0x1a4)]()),this[B(0x1c2)][B(0x176)](B(0x197),()=>{const C=B;this['mode']=this[C(0x1c2)]['value'],this[C(0x1a4)]();}),this[B(0x19c)][B(0x176)]('input',()=>this[B(0x1c4)](!![])),this[B(0x19c)][B(0x176)](B(0x197),()=>this[B(0x1a4)]()),this[B(0x139)]['addEventListener'](B(0x17d),()=>this[B(0x1a3)]()),this['_textInput']['addEventListener']('change',()=>this[B(0x17e)]()),this['_textInput'][B(0x176)](B(0x1b5),c=>{const D=B;c['key']===D(0x171)&&(this['_applyText'](),this['_textInput'][D(0x14a)]());});}['_startPlaneDrag'](c){const E=r;if(this[E(0x157)]||this['disabled'])return;this['_dragPointerId']=c[E(0x15f)],this[E(0x1ca)][E(0x15d)](c[E(0x15f)]),this[E(0x1cc)](c,!![]),this['_plane']['addEventListener']('pointermove',this['_planePointerMove']),this[E(0x1ca)]['addEventListener']('pointerup',this[E(0x1a0)]),this[E(0x1ca)][E(0x176)]('pointercancel',this['_finishPlaneDrag']),c['preventDefault']();}['_planePointerMove']=c=>{const F=r;if(c['pointerId']===this['_dragPointerId'])this[F(0x1cc)](c,!![]);};['_finishPlaneDrag']=c=>{const G=r;if(c['pointerId']!==this['_dragPointerId'])return;this['_dragPointerId']=null,this[G(0x1ca)][G(0x16f)](G(0x19b),this['_planePointerMove']),this['_plane'][G(0x16f)]('pointerup',this[G(0x1a0)]),this[G(0x1ca)]['removeEventListener'](G(0x14f),this[G(0x1a0)]),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const H=r,e=this[H(0x1ca)]['getBoundingClientRect'](),f=clamp((c[H(0x189)]-e['left'])/e[H(0x18d)],0x0,0x1),g=clamp(0x1-(c['clientY']-e[H(0x15b)])/e[H(0x167)],0x0,0x1),h=Number(this[H(0x1b3)][H(0x144)])||0x0;this[H(0x13f)]=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x199)](c){const I=r,d=rgbToHsv(this['_color']),e=Number(this[I(0x1b3)]['value'])||0x0;this['_hue']=normalizeHue(e),this[I(0x156)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[I(0x1b7)]['a']},c);}['_applyAlpha'](c){const J=r;this[J(0x156)]({...this['_color'],'a':clamp(Number(this[J(0x15c)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this['_channels'][K(0x150)](K(0x17d))]['reduce']((f,g)=>{return f[g['name']]=Number(g['value']),f;},{});let e;if(this[K(0x1a8)]===K(0x138))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const L=r,c=this[L(0x139)][L(0x144)]['trim']();this[L(0x139)]['classList']['toggle']('invalid',c['length']>0x0&&!parseColor(c));}[r(0x17e)](){const M=r,c=parseColor(this[M(0x139)][M(0x144)]);this[M(0x139)]['classList'][M(0x149)]('invalid',!c);if(!c)return;this[M(0x1a8)]=inferColorMode(this[M(0x139)][M(0x144)])??this[M(0x1a8)],this[M(0x156)](c,![],!![],!![]);}[r(0x156)](c,d,e=!![],f=![]){const N=r,g=this[N(0x159)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this['_formatColor'](),this[N(0x17f)](e);if(d)this[N(0x190)]['emit']({'newValue':this['_value'],'oldValue':g});else this[N(0x1a9)][N(0x1a6)]({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this['_value'];this[O(0x159)]=this['_formatColor'](),this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':c});}[r(0x17f)](c=!![]){const P=r;if(!this[P(0x139)])return;const d=rgbToHsv(this[P(0x1b7)]);this['style']['setProperty'](P(0x1c8),String(Math[P(0x18f)](this['_hue']))),this['style']['setProperty'](P(0x16a),toCssRgb(this[P(0x1b7)])),this['style'][P(0x1ba)](P(0x1aa),'rgb('+this[P(0x1b7)]['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x1b7)]['b']+')'),this[P(0x1ae)]['setProperty']('--rgb-color',this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x1b7)]['b']),this['_planeHandle'][P(0x1ae)][P(0x152)]=d['s']*0x64+'%',this['_planeHandle']['style']['top']=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x144)]=String(Math[P(0x18f)](this['_hue'])),this[P(0x15c)][P(0x144)]=String(Math[P(0x18f)](this['_color']['a']*0x64)),this['_alphaLabel']['textContent']=Math['round'](this[P(0x1b7)]['a']*0x64)+'%',this['_modeSelect']['value']=this[P(0x1a8)];if(c)this[P(0x155)]();if(document['activeElement']!==this[P(0x139)])this['_textInput']['value']=this[P(0x159)];this[P(0x139)]['classList'][P(0x175)](P(0x166));}['_renderChannelInputs'](){const Q=r,c=getChannelValues(this['_color'],this['_mode']);this['_channels'][Q(0x1c5)]=c['map'](d=>Q(0x1ac)+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+'\x22\x20min=\x22'+d['min']+Q(0x18a)+d[Q(0x172)]+'\x22\x20step=\x22'+d['step']+'\x22\x20value=\x22'+d['value']+Q(0x19a))[Q(0x1c3)]('');}['_formatColor'](){const R=r;return formatColor(this[R(0x1b7)],this['_mode']);}[r(0x1be)](){const S=r,c=rgbToHsv(this[S(0x1b7)]);if(c['s']>epsilon&&c['v']>epsilon)this[S(0x13f)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x1ae)]=css`
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
  `;[r(0x159)]=r(0x1cb);[r(0x164)];['_popup'];['_editor'];['_ignoreNextClick']=![];[r(0x168)]=c=>this['_handleOutsidePointer'](c);[r(0x1bc)]=c=>this[r(0x1b8)](c);get[r(0x144)](){const T=r;return this[T(0x159)];}set['value'](c){const U=r;this[U(0x19f)](c,![]);}get['readOnly'](){return this['hasAttribute']('readonly');}set['readOnly'](c){const V=r;this[V(0x17b)]('readonly',c);}get[r(0x1c7)](){const W=r;return this['hasAttribute'](W(0x1c7));}set['disabled'](c){const X=r;this[X(0x17b)](X(0x1c7),c);if(this[X(0x164)])this[X(0x164)][X(0x1c7)]=c;}constructor(){super(),this['_button']=this['_getDomElement']('button');}['ready'](){const Y=r,c=this[Y(0x1b4)]('value');if(c!=null)this['_setValue'](c,![]);this['_button'][Y(0x1c7)]=this[Y(0x1c7)],this[Y(0x164)]['addEventListener']('pointerdown',d=>this['_handleButtonPointerDown'](d)),this['_button']['addEventListener'](Y(0x16c),d=>this[Y(0x198)](d)),this['_button']['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this['_renderSwatch']();}['disconnectedCallback'](){this['_closePopup']();}[r(0x191)](){const Z=r;if(this[Z(0x157)]||this[Z(0x1c7)])return;if(this['_popup'])this['_closePopup']();else this['_openPopup']();}['_handleButtonPointerDown'](c){const a0=r;if(c[a0(0x1c1)]!==0x0)return;this[a0(0x196)]=!![],this[a0(0x191)](),c[a0(0x1c6)](),c['stopPropagation']();}[r(0x198)](c){const a1=r;if(this['_ignoreNextClick']){this[a1(0x196)]=![],c[a1(0x1c6)](),c[a1(0x151)]();return;}this[a1(0x191)]();}['_handleButtonKeyDown'](c){const a2=r;if(c['key']!==a2(0x171)&&c[a2(0x193)]!=='\x20')return;this['_togglePopup'](),c[a2(0x1c6)](),c[a2(0x151)]();}['_openPopup'](){const a3=r;this['_popup']=document['createElement']('div'),this[a3(0x179)][a3(0x1ae)]['position']=a3(0x1b0),this['_popup'][a3(0x1ae)]['zIndex']='100000',this['_popup']['style']['width']=a3(0x162),this[a3(0x169)]=document['createElement'](a3(0x154)),this['_editor'][a3(0x144)]=this[a3(0x159)],this[a3(0x169)][a3(0x190)]['on'](c=>{const a4=a3;this[a4(0x19f)](c[a4(0x1af)],!![]),this['dispatchEvent'](new Event('input',{'bubbles':!![],'composed':!![]}));}),this['_editor'][a3(0x1a9)]['on'](c=>{const a5=a3;this[a5(0x19f)](c[a5(0x1af)],!![]),this['dispatchEvent'](new Event(a5(0x197),{'bubbles':!![],'composed':!![]}));}),this[a3(0x179)][a3(0x18e)](this[a3(0x169)]),document['body']['appendChild'](this[a3(0x179)]),this[a3(0x1b1)](),window[a3(0x176)](a3(0x186),()=>this[a3(0x1b1)](),{'once':!![]}),window[a3(0x176)]('scroll',()=>this[a3(0x1b1)](),{'once':!![],'capture':!![]}),window['addEventListener']('keydown',this['_windowKeyHandler']),requestAnimationFrame(()=>window['addEventListener'](a3(0x1bf),this[a3(0x168)],!![]));}['_positionPopup'](){const a6=r;if(!this[a6(0x179)])return;const c=this['getBoundingClientRect'](),d=this[a6(0x179)][a6(0x1ad)]||0x118,e=this[a6(0x179)]['offsetHeight']||0x168;let f=c['left'],g=c[a6(0x188)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a6(0x178)]-0x8)g=c['top']-e-0x4;this['_popup']['style'][a6(0x152)]=Math[a6(0x172)](0x8,f)+'px',this['_popup'][a6(0x1ae)]['top']=Math['max'](0x8,g)+'px';}[r(0x170)](c){const a7=r,d=c['composedPath']();if(d[a7(0x194)](this)||this['_popup']&&d[a7(0x194)](this['_popup']))return;this[a7(0x1c9)]();}['_handleWindowKey'](c){const a8=r;if(c[a8(0x193)]==='Escape')this[a8(0x1c9)]();}[r(0x1c9)](){const a9=r;window['removeEventListener'](a9(0x1bf),this['_outsidePointerHandler'],!![]),window[a9(0x16f)]('keydown',this[a9(0x1bc)]),this[a9(0x179)]?.[a9(0x175)](),this['_popup']=null,this[a9(0x169)]=null;}[r(0x19f)](c,d){this['_value']=c??'';if(d)this['setAttribute']('value',this['_value']);this['_renderSwatch']();}['_renderSwatch'](){const c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const aa=r;if(!c)return null;const d=c[aa(0x1a7)]();if(d['toLowerCase']()===aa(0x14e))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[aa(0x148)](g);if(h?.['valid'])return normalizeColor({'r':h[aa(0x160)],'g':h[aa(0x187)],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ab=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ab(0x183)]();if(e==='rgb'||e===ab(0x184))return'rgb';if(e==='hsl'||e===ab(0x1c0))return'hsl';if(e==='cmyk')return ab(0x145);if(e==='oklab')return ab(0x177);if(e===ab(0x19d))return ab(0x19d);return null;}function normalizeModernColorSyntax(c){const ac=r;return c[ac(0x1a2)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ac(0x138),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ad=r;if(d[ad(0x194)](',')){const h=d[ad(0x19e)](',')[ad(0x14c)](i=>i['trim']());if(h[ad(0x165)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ad(0x13a)](0x0,-0x1))/0x64);return''+c+(h[ad(0x165)]===0x4?'a':'')+'('+h[ad(0x1c3)](',')+')';}const [e,f]=d[ad(0x19e)]('/')['map'](i=>i['trim']()),g=e[ad(0x19e)](/\s+/)['filter'](Boolean);if(f)g['push'](f['endsWith']('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[ad(0x1c3)](',')+')';}function parseHexColor(c){const ae=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ae(0x165)]===0x1?g+g:g,0x10);if(e[ae(0x165)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e[ae(0x165)]===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[ae(0x13a)](0x4,0x6)),'a':e['length']===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const af=r,d=/^(oklab|oklch)\((.*)\)$/i[af(0x147)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')['map'](j=>j[af(0x1a7)]()),h=f['replace'](/,/g,'\x20')[af(0x19e)](/\s+/)['filter'](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===af(0x177))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ag=r,e=round(c['a'],0x3);if(d===ag(0x138))return c['a']>=0x1?ag(0x163)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math['round'](g['h'])+',\x20'+Math[ag(0x18f)](g['s']*0x64)+'%,\x20'+Math[ag(0x18f)](g['l']*0x64)+'%)':'hsla('+Math[ag(0x18f)](g['h'])+',\x20'+Math[ag(0x18f)](g['s']*0x64)+ag(0x1a5)+Math['round'](g['l']*0x64)+ag(0x1a5)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[ag(0x18f)](h['c']*0x64)+'%,\x20'+Math['round'](h['m']*0x64)+ag(0x1a5)+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ag(0x1a1)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ag(0x143)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return ag(0x1cd)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ag(0x161)+e)+')';}function getChannelValues(c,d){const ah=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x18f)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ah(0x1bb)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ah(0x18f)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ah(0x18f)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x18f)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ah(0x18f)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ah(0x18f)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ah(0x18f)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x18f)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':'alpha','value':Math[ah(0x18f)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ai=r;return{'r':Math[ai(0x18f)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math[ai(0x18f)](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const aj=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[aj(0x172)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ak(0x172)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const al=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[al(0x15a)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const am=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[am(0x17c)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[am(0x17c)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const an=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[an(0x1ab)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[an(0x1ab)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ao=r,e=rgbToOklab(d),f=Math[ao(0x18c)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[ao(0x1b9)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ap=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[ap(0x192)](g));}function b(c,d){c=c-0x135;const e=a();let f=e[c];return f;}function srgbToLinear(c){const aq=r;return c<=0.04045?c/12.92:Math[aq(0x1ab)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const ar=r;return c[ar(0x185)]('%')?Number(c[ar(0x13a)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const as=r;return Math['min'](e,Math[as(0x172)](d,Number[as(0x140)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const at=r,e=Math[at(0x1ab)](0xa,d);return Math['round'](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements['define'](r(0x141),ColorInput);function a(){const au=['emit','trim','_mode','valueChanged','--opaque-color','pow','\x0a\x20\x20\x20\x20\x20\x20<label>','offsetWidth','style','newValue','fixed','_positionPopup','hasAttribute','_hueInput','getAttribute','keydown','9216564KcKImx','_color','_handleWindowKey','atan2','setProperty','hsl','_windowKeyHandler','55NqWOgj','_syncHueFromColor','pointerdown','hsla','button','_modeSelect','join','_applyChannelInputs','innerHTML','preventDefault','disabled','--hue','_closePopup','_plane','#000000','_applyPlanePointer','oklch(','ready','text','5gLKxPI','rgb','_textInput','slice','_getDomElement','57130EbvjAV','1762818buCJIX','readonly','_hue','isFinite','node-projects-color-input','_applyAlpha','oklab(','value','cmyk','_startPlaneDrag','exec','toColorObject','toggle','blur','177908YqhwKF','map','_planeHandle','transparent','pointercancel','querySelectorAll','stopPropagation','left','hue','node-projects-color-editor','_renderChannelInputs','_setColor','readOnly','987xJMdpE','_value','abs','top','_alphaInput','setPointerCapture','_dragPointerId','pointerId','red','\x20/\x20','280px','rgb(','_button','length','invalid','height','_outsidePointerHandler','_editor','--color','_alphaLabel','click','_wireEvents','channels','removeEventListener','_handleOutsidePointer','Enter','max','131337FajSXS','104NCIvrl','remove','addEventListener','oklab','innerHeight','_popup','7TWDgzp','toggleAttribute','cbrt','input','_applyText','_render','626hqniCP','plane','mode','toLowerCase','rgba','endsWith','resize','green','bottom','clientX','\x22\x20max=\x22','301986mdyHoB','sqrt','width','appendChild','round','valuePreviewChanged','_togglePopup','sin','key','includes','_formatColor','_ignoreNextClick','change','_handleButtonClick','_applyHue','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','pointermove','_channels','oklch','split','_setValue','_finishPlaneDrag','cmyk(','replace','_validateTextInput','_commitCurrentValue','%,\x20'];a=function(){return au;};return a();}