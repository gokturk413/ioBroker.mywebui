const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x247))/0x1+-parseInt(q(0x214))/0x2*(parseInt(q(0x263))/0x3)+-parseInt(q(0x238))/0x4+parseInt(q(0x202))/0x5+-parseInt(q(0x244))/0x6*(parseInt(q(0x227))/0x7)+-parseInt(q(0x1f9))/0x8*(-parseInt(q(0x22c))/0x9)+-parseInt(q(0x1e0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe9273));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb','hsl',r(0x235),r(0x254),r(0x269)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x22f)]=new TypedEvent();[r(0x240)]=new TypedEvent();['_value']='#000000';[r(0x20b)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0x224);[r(0x1e1)]=0x0;['_plane'];['_planeHandle'];[r(0x222)];['_alphaInput'];[r(0x20c)];[r(0x226)];['_channels'];[r(0x262)];['_dragPointerId']=null;get[r(0x1ef)](){return this['_value'];}set[r(0x1ef)](c){const s=r,d=parseColor(c);if(d){this[s(0x20b)]=d,this[s(0x1df)]=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this[s(0x26a)]=this[s(0x1e7)](),this[s(0x1db)]();return;}this[s(0x26a)]=c??'',this[s(0x1db)]();}get[r(0x218)](){return this['_mode'];}set[r(0x218)](c){const t=r;modes[t(0x1fb)](c)&&(this[t(0x1df)]=c,this[t(0x26a)]=this['_formatColor'](),this['_render']());}get['readOnly'](){const u=r;return this['hasAttribute'](u(0x25b));}set['readOnly'](c){const v=r;this['toggleAttribute'](v(0x25b),c);}get['disabled'](){const w=r;return this[w(0x233)]('disabled');}set[r(0x266)](c){const x=r;this['toggleAttribute'](x(0x266),c);}constructor(){const y=r;super(),this['_plane']=this[y(0x1f5)](y(0x268)),this[y(0x241)]=this[y(0x1f5)]('plane-handle'),this[y(0x222)]=this[y(0x1f5)]('hue'),this['_alphaInput']=this['_getDomElement'](y(0x220)),this['_alphaLabel']=this[y(0x1f5)]('alpha-label'),this[y(0x226)]=this[y(0x1f5)](y(0x218)),this['_channels']=this['_getDomElement'](y(0x1d7)),this[y(0x262)]=this[y(0x1f5)]('text');}[r(0x213)](){const z=r;this['_wireEvents']();const c=this['getAttribute'](z(0x1ef));if(c!=null)this[z(0x1ef)]=c;const d=this[z(0x1dc)]('mode');modes[z(0x1fb)](d)&&(this[z(0x1df)]=d,this['_value']=this['_formatColor']()),this['_render']();}[r(0x205)](){const A=r;this[A(0x23b)][A(0x217)](A(0x23f),c=>this['_startPlaneDrag'](c)),this[A(0x222)][A(0x217)]('input',()=>this[A(0x1dd)](!![])),this[A(0x222)]['addEventListener']('change',()=>this['_commitCurrentValue']()),this[A(0x203)][A(0x217)]('input',()=>this[A(0x253)](!![])),this['_alphaInput']['addEventListener'](A(0x1f3),()=>this['_commitCurrentValue']()),this[A(0x226)][A(0x217)](A(0x1f3),()=>{const B=A;this[B(0x218)]=this['_modeSelect'][B(0x1ef)],this[B(0x249)]();}),this[A(0x1fa)]['addEventListener'](A(0x260),()=>this['_applyChannelInputs'](!![])),this[A(0x1fa)]['addEventListener'](A(0x1f3),()=>this['_commitCurrentValue']()),this['_textInput'][A(0x217)]('input',()=>this[A(0x258)]()),this[A(0x262)]['addEventListener'](A(0x1f3),()=>this[A(0x26b)]()),this['_textInput'][A(0x217)](A(0x212),c=>{const C=A;c[C(0x236)]==='Enter'&&(this[C(0x26b)](),this['_textInput'][C(0x1d1)]());});}[r(0x215)](c){const D=r;if(this['readOnly']||this['disabled'])return;this[D(0x256)]=c[D(0x22a)],this[D(0x23b)][D(0x232)](c['pointerId']),this[D(0x1f1)](c,!![]),this['_plane']['addEventListener'](D(0x225),this['_planePointerMove']),this['_plane']['addEventListener'](D(0x1f0),this['_finishPlaneDrag']),this['_plane'][D(0x217)]('pointercancel',this[D(0x22e)]),c[D(0x251)]();}['_planePointerMove']=c=>{const E=r;if(c[E(0x22a)]===this[E(0x256)])this['_applyPlanePointer'](c,!![]);};[r(0x22e)]=c=>{const F=r;if(c['pointerId']!==this[F(0x256)])return;this['_dragPointerId']=null,this[F(0x23b)]['removeEventListener']('pointermove',this[F(0x1ed)]),this[F(0x23b)][F(0x1fc)]('pointerup',this[F(0x22e)]),this['_plane'][F(0x1fc)]('pointercancel',this[F(0x22e)]),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const G=r,e=this[G(0x23b)][G(0x21f)](),f=clamp((c['clientX']-e[G(0x24a)])/e[G(0x216)],0x0,0x1),g=clamp(0x1-(c[G(0x200)]-e[G(0x25c)])/e['height'],0x0,0x1),h=Number(this[G(0x222)][G(0x1ef)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}['_applyHue'](c){const H=r,d=rgbToHsv(this['_color']),e=Number(this[H(0x222)][H(0x1ef)])||0x0;this[H(0x1e1)]=normalizeHue(e),this[H(0x1f2)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const I=r;this['_setColor']({...this[I(0x20b)],'a':clamp(Number(this[I(0x203)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const J=r,d=[...this[J(0x1fa)]['querySelectorAll'](J(0x260))]['reduce']((f,g)=>{const K=J;return f[g['name']]=Number(g[K(0x1ef)]),f;},{});let e;if(this['_mode']===J(0x224))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[J(0x1df)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[J(0x1df)]==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[J(0x220)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const L=r,c=this['_textInput'][L(0x1ef)]['trim']();this[L(0x262)][L(0x20a)]['toggle']('invalid',c['length']>0x0&&!parseColor(c));}['_applyText'](){const M=r,c=parseColor(this[M(0x262)]['value']);this[M(0x262)][M(0x20a)][M(0x248)]('invalid',!c);if(!c)return;this[M(0x1df)]=inferColorMode(this[M(0x262)][M(0x1ef)])??this[M(0x1df)],this['_setColor'](c,![],!![],!![]);}[r(0x1f2)](c,d,e=!![],f=![]){const N=r,g=this['_value'];this[N(0x20b)]=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this['_formatColor'](),this[N(0x1db)](e);if(d)this['valuePreviewChanged'][N(0x21d)]({'newValue':this['_value'],'oldValue':g});else this[N(0x22f)][N(0x21d)]({'newValue':this[N(0x26a)],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this[O(0x26a)];this['_value']=this[O(0x1e7)](),this[O(0x22f)][O(0x21d)]({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this[P(0x20b)]);this[P(0x1f4)]['setProperty'](P(0x23e),String(Math['round'](this['_hue']))),this[P(0x1f4)][P(0x245)](P(0x21b),toCssRgb(this[P(0x20b)])),this['style']['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']+')'),this['style'][P(0x245)]('--rgb-color',this['_color']['r']+',\x20'+this[P(0x20b)]['g']+',\x20'+this['_color']['b']),this['_planeHandle']['style']['left']=d['s']*0x64+'%',this['_planeHandle']['style'][P(0x25c)]=(0x1-d['v'])*0x64+'%',this['_hueInput']['value']=String(Math['round'](this['_hue'])),this[P(0x203)][P(0x1ef)]=String(Math[P(0x231)](this[P(0x20b)]['a']*0x64)),this['_alphaLabel'][P(0x221)]=Math[P(0x231)](this[P(0x20b)]['a']*0x64)+'%',this['_modeSelect'][P(0x1ef)]=this['_mode'];if(c)this[P(0x1f7)]();if(document['activeElement']!==this[P(0x262)])this[P(0x262)][P(0x1ef)]=this[P(0x26a)];this['_textInput']['classList']['remove'](P(0x1d4));}[r(0x1f7)](){const Q=r,c=getChannelValues(this['_color'],this[Q(0x1df)]);this['_channels']['innerHTML']=c[Q(0x211)](d=>Q(0x1ff)+d[Q(0x209)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[Q(0x1ee)]+Q(0x242)+d[Q(0x228)]+Q(0x229)+d['max']+Q(0x243)+d['step']+'\x22\x20value=\x22'+d['value']+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[Q(0x1eb)]('');}[r(0x1e7)](){const R=r;return formatColor(this[R(0x20b)],this['_mode']);}[r(0x21c)](){const S=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[S(0x1e1)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x26a)]=r(0x265);[r(0x1e5)];['_popup'];['_editor'];[r(0x206)]=![];['_outsidePointerHandler']=c=>this['_handleOutsidePointer'](c);[r(0x22d)]=c=>this[r(0x25f)](c);get['value'](){return this['_value'];}set['value'](c){const T=r;this[T(0x1de)](c,![]);}get[r(0x255)](){const U=r;return this['hasAttribute'](U(0x25b));}set[r(0x255)](c){const V=r;this[V(0x23c)]('readonly',c);}get['disabled'](){const W=r;return this[W(0x233)](W(0x266));}set[r(0x266)](c){const X=r;this['toggleAttribute']('disabled',c);if(this['_button'])this[X(0x1e5)]['disabled']=c;}constructor(){const Y=r;super(),this['_button']=this[Y(0x1f5)]('button');}['ready'](){const Z=r,c=this['getAttribute'](Z(0x1ef));if(c!=null)this[Z(0x1de)](c,![]);this[Z(0x1e5)]['disabled']=this[Z(0x266)],this['_button']['addEventListener']('pointerdown',d=>this[Z(0x20f)](d)),this[Z(0x1e5)]['addEventListener'](Z(0x1d0),d=>this[Z(0x1fd)](d)),this[Z(0x1e5)][Z(0x217)](Z(0x212),d=>this[Z(0x239)](d)),this[Z(0x204)]();}['disconnectedCallback'](){const a0=r;this[a0(0x24e)]();}[r(0x1da)](){const a1=r;if(this[a1(0x255)]||this[a1(0x266)])return;if(this[a1(0x230)])this['_closePopup']();else this['_openPopup']();}[r(0x20f)](c){const a2=r;if(c['button']!==0x0)return;this[a2(0x206)]=!![],this['_togglePopup'](),c[a2(0x251)](),c['stopPropagation']();}[r(0x1fd)](c){const a3=r;if(this['_ignoreNextClick']){this[a3(0x206)]=![],c['preventDefault'](),c[a3(0x1fe)]();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){const a4=r;if(c[a4(0x236)]!==a4(0x23a)&&c['key']!=='\x20')return;this['_togglePopup'](),c[a4(0x251)](),c[a4(0x1fe)]();}[r(0x1d2)](){const a5=r;this['_popup']=document[a5(0x246)](a5(0x1f8)),this[a5(0x230)]['style'][a5(0x20d)]='fixed',this['_popup']['style'][a5(0x207)]='100000',this['_popup']['style'][a5(0x216)]=a5(0x201),this['_editor']=document[a5(0x246)](a5(0x223)),this['_editor'][a5(0x1ef)]=this[a5(0x26a)],this[a5(0x24b)]['valuePreviewChanged']['on'](c=>{const a6=a5;this['_setValue'](c[a6(0x267)],!![]),this[a6(0x1ea)](new Event(a6(0x260),{'bubbles':!![],'composed':!![]}));}),this[a5(0x24b)][a5(0x22f)]['on'](c=>{const a7=a5;this[a7(0x1de)](c['newValue'],!![]),this['dispatchEvent'](new Event(a7(0x1f3),{'bubbles':!![],'composed':!![]}));}),this[a5(0x230)]['appendChild'](this[a5(0x24b)]),document[a5(0x25a)]['appendChild'](this[a5(0x230)]),this[a5(0x1ec)](),window['addEventListener'](a5(0x261),()=>this['_positionPopup'](),{'once':!![]}),window[a5(0x217)]('scroll',()=>this[a5(0x1ec)](),{'once':!![],'capture':!![]}),window['addEventListener'](a5(0x212),this[a5(0x22d)]),requestAnimationFrame(()=>window['addEventListener']('pointerdown',this[a5(0x250)],!![]));}['_positionPopup'](){const a8=r;if(!this[a8(0x230)])return;const c=this['getBoundingClientRect'](),d=this[a8(0x230)][a8(0x1d9)]||0x118,e=this[a8(0x230)][a8(0x1e9)]||0x168;let f=c['left'],g=c['bottom']+0x4;if(f+d>window['innerWidth']-0x8)f=window[a8(0x24c)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a8(0x25c)]-e-0x4;this[a8(0x230)]['style']['left']=Math[a8(0x1e4)](0x8,f)+'px',this['_popup']['style'][a8(0x25c)]=Math[a8(0x1e4)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a9=r,d=c['composedPath']();if(d[a9(0x1fb)](this)||this['_popup']&&d[a9(0x1fb)](this[a9(0x230)]))return;this[a9(0x24e)]();}['_handleWindowKey'](c){const aa=r;if(c[aa(0x236)]===aa(0x1e8))this['_closePopup']();}['_closePopup'](){const ab=r;window['removeEventListener'](ab(0x23f),this['_outsidePointerHandler'],!![]),window[ab(0x1fc)]('keydown',this['_windowKeyHandler']),this['_popup']?.['remove'](),this[ab(0x230)]=null,this['_editor']=null;}[r(0x1de)](c,d){const ac=r;this['_value']=c??'';if(d)this['setAttribute']('value',this[ac(0x26a)]);this[ac(0x204)]();}['_renderSwatch'](){const ad=r,c=parseColor(this[ad(0x26a)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ad(0x1f4)]['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ae=r;if(!c)return null;const d=c[ae(0x1d8)]();if(d[ae(0x20e)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ae(0x234)](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h['green'],'b':h[ae(0x1e6)],'a':h[ae(0x219)]});return null;}function inferColorMode(c){const af=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e===af(0x1d3))return af(0x224);if(e===af(0x21e)||e==='hsla')return af(0x21e);if(e==='cmyk')return'cmyk';if(e==='oklab')return af(0x254);if(e===af(0x269))return af(0x269);return null;}function normalizeModernColorSyntax(c){const ag=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ag(0x224),e))[ag(0x24d)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ag(0x21e),e));}function normalizeFunctionBody(c,d){const ah=r;if(d['includes'](',')){const h=d[ah(0x208)](',')[ah(0x211)](i=>i['trim']());if(h[ah(0x24f)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ah(0x1f6)](0x0,-0x1))/0x64);return''+c+(h[ah(0x24f)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ah(0x208)]('/')['map'](i=>i[ah(0x1d8)]()),g=e[ah(0x208)](/\s+/)['filter'](Boolean);if(f)g[ah(0x259)](f['endsWith']('%')?String(Number(f[ah(0x1f6)](0x0,-0x1))/0x64):f);return''+c+(g[ah(0x24f)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ai=r,d=/^#([0-9a-f]{3,8})$/i[ai(0x252)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ai(0x24f)]===0x4?f(e[0x3])/0xff:0x1});if(e[ai(0x24f)]===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[ai(0x24f)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const aj=r,d=/^(oklab|oklch)\((.*)\)$/i[aj(0x252)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][aj(0x208)]('/')[aj(0x211)](j=>j[aj(0x1d8)]()),h=f['replace'](/,/g,'\x20')[aj(0x208)](/\s+/)['filter'](Boolean);if(h[aj(0x24f)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ak=r,e=round(c['a'],0x3);if(d===ak(0x224))return c['a']>=0x1?ak(0x237)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ak(0x1d5)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':'hsla('+Math['round'](g['h'])+',\x20'+Math[ak(0x231)](g['s']*0x64)+'%,\x20'+Math[ak(0x231)](g['l']*0x64)+'%,\x20'+e+')';}if(d===ak(0x235)){const h=rgbToCmyk(c),i=Math[ak(0x231)](h['c']*0x64)+ak(0x210)+Math['round'](h['m']*0x64)+'%,\x20'+Math[ak(0x231)](h['y']*0x64)+'%,\x20'+Math[ak(0x231)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return ak(0x21a)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const al=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[al(0x231)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===al(0x21e)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[al(0x231)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[al(0x231)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[al(0x231)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[al(0x231)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[al(0x231)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[al(0x231)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===al(0x254)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':al(0x1e2),'name':al(0x220),'value':Math[al(0x231)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[al(0x231)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const am=r;return{'r':Math[am(0x231)](clamp(c['r'],0x0,0xff)),'g':Math[am(0x231)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const an=r;return an(0x1d5)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x1e4)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const ap=r,i=f*e,j=i*(0x1-Math[ap(0x264)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const aq=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[aq(0x1e4)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[aq(0x264)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ar=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[ar(0x264)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const as=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[as(0x1d6)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function b(c,d){c=c-0x1d0;const e=a();let f=e[c];return f;}function oklabToRgb(c,d,e){const at=r,f=Math[at(0x23d)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const au=r,e=rgbToOklab(d),f=Math[au(0x25e)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const av=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[av(0x25d)](g),e*Math[av(0x22b)](g));}function a(){const az=['max','_button','blue','_formatColor','Escape','offsetHeight','dispatchEvent','join','_positionPopup','_planePointerMove','name','value','pointerup','_applyPlanePointer','_setColor','change','style','_getDomElement','slice','_renderChannelInputs','div','40jJPIxD','_channels','includes','removeEventListener','_handleButtonClick','stopPropagation','\x0a\x20\x20\x20\x20\x20\x20<label>','clientY','280px','8468465kKZgYK','_alphaInput','_renderSwatch','_wireEvents','_ignoreNextClick','zIndex','split','label','classList','_color','_alphaLabel','position','toLowerCase','_handleButtonPointerDown','%,\x20','map','keydown','ready','14hsuYnL','_startPlaneDrag','width','addEventListener','mode','opacity','oklch(','--color','_syncHueFromColor','emit','hsl','getBoundingClientRect','alpha','textContent','_hueInput','node-projects-color-editor','rgb','pointermove','_modeSelect','7PXteUY','min','\x22\x20max=\x22','pointerId','sin','1643067lotoFC','_windowKeyHandler','_finishPlaneDrag','valueChanged','_popup','round','setPointerCapture','hasAttribute','toColorObject','cmyk','key','rgb(','1874480OgNYgC','_handleButtonKeyDown','Enter','_plane','toggleAttribute','pow','--hue','pointerdown','valuePreviewChanged','_planeHandle','\x22\x20min=\x22','\x22\x20step=\x22','36066HGGaQe','setProperty','createElement','108795MxmIyz','toggle','_commitCurrentValue','left','_editor','innerWidth','replace','_closePopup','length','_outsidePointerHandler','preventDefault','exec','_applyAlpha','oklab','readOnly','_dragPointerId','isFinite','_validateTextInput','push','body','readonly','top','cos','sqrt','_handleWindowKey','input','resize','_textInput','458229ANGwLw','abs','#000000','disabled','newValue','plane','oklch','_value','_applyText','click','blur','_openPopup','rgba','invalid','rgba(','cbrt','channels','trim','offsetWidth','_togglePopup','_render','getAttribute','_applyHue','_setValue','_mode','2164760ElsoTg','_hue','Alpha','define'];a=function(){return az;};return a();}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const aw=r;return c['endsWith']('%')?Number(c[aw(0x1f6)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ax=r;return Math[ax(0x228)](e,Math[ax(0x1e4)](d,Number[ax(0x257)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const ay=r,e=Math[ay(0x23d)](0xa,d);return Math['round'](c*e)/e;}customElements[r(0x1e3)](r(0x223),ColorEditor),customElements[r(0x1e3)]('node-projects-color-input',ColorInput);