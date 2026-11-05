const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0xa9))/0x1*(parseInt(q(0x112))/0x2)+parseInt(q(0x8b))/0x3+parseInt(q(0xc2))/0x4*(-parseInt(q(0x104))/0x5)+parseInt(q(0xe6))/0x6+-parseInt(q(0x9c))/0x7+parseInt(q(0xe7))/0x8+parseInt(q(0xd3))/0x9*(-parseInt(q(0xeb))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc04c3));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x118),r(0x9d),'cmyk',r(0x115),r(0xb6)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0xcb)]=new TypedEvent();[r(0x9f)]=new TypedEvent();[r(0x96)]=r(0xcf);[r(0x99)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0x118);['_hue']=0x0;[r(0xe4)];[r(0xb2)];['_hueInput'];['_alphaInput'];[r(0x9b)];[r(0xed)];['_channels'];[r(0xd0)];[r(0x9a)]=null;get['value'](){return this['_value'];}set['value'](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[s(0xa3)],this[s(0x8c)](),this[s(0x96)]=this['_formatColor'](),this['_render']();return;}this[s(0x96)]=c??'',this['_render']();}get[r(0xe2)](){const t=r;return this[t(0xa3)];}set['mode'](c){const u=r;modes[u(0xf6)](c)&&(this[u(0xa3)]=c,this[u(0x96)]=this['_formatColor'](),this[u(0xf4)]());}get[r(0xdc)](){const v=r;return this[v(0xe0)]('readonly');}set['readOnly'](c){const w=r;this[w(0x11b)]('readonly',c);}get['disabled'](){const x=r;return this[x(0xe0)](x(0xf2));}set[r(0xf2)](c){const y=r;this[y(0x11b)]('disabled',c);}constructor(){const z=r;super(),this['_plane']=this[z(0x10f)](z(0x121)),this['_planeHandle']=this['_getDomElement']('plane-handle'),this['_hueInput']=this[z(0x10f)]('hue'),this[z(0x109)]=this[z(0x10f)]('alpha'),this['_alphaLabel']=this['_getDomElement'](z(0xc6)),this['_modeSelect']=this['_getDomElement'](z(0xe2)),this[z(0x110)]=this['_getDomElement'](z(0x114)),this[z(0xd0)]=this['_getDomElement'](z(0xb5));}[r(0x103)](){const A=r;this['_wireEvents']();const c=this['getAttribute'](A(0xc5));if(c!=null)this['value']=c;const d=this['getAttribute'](A(0xe2));modes['includes'](d)&&(this['_mode']=d,this['_value']=this['_formatColor']()),this[A(0xf4)]();}[r(0xbc)](){const B=r;this['_plane']['addEventListener'](B(0xac),c=>this['_startPlaneDrag'](c)),this['_hueInput']['addEventListener'](B(0x11d),()=>this[B(0xd6)](!![])),this['_hueInput']['addEventListener'](B(0x101),()=>this['_commitCurrentValue']()),this['_alphaInput'][B(0xe5)]('input',()=>this['_applyAlpha'](!![])),this[B(0x109)]['addEventListener']('change',()=>this['_commitCurrentValue']()),this[B(0xed)]['addEventListener'](B(0x101),()=>{this['mode']=this['_modeSelect']['value'],this['_commitCurrentValue']();}),this['_channels']['addEventListener'](B(0x11d),()=>this['_applyChannelInputs'](!![])),this[B(0x110)]['addEventListener']('change',()=>this[B(0xea)]()),this['_textInput'][B(0xe5)]('input',()=>this['_validateTextInput']()),this[B(0xd0)][B(0xe5)]('change',()=>this[B(0xfb)]()),this['_textInput'][B(0xe5)]('keydown',c=>{const C=B;c[C(0xf1)]===C(0xae)&&(this[C(0xfb)](),this['_textInput'][C(0xf9)]());});}[r(0xda)](c){const D=r;if(this[D(0xdc)]||this[D(0xf2)])return;this[D(0x9a)]=c['pointerId'],this['_plane']['setPointerCapture'](c[D(0xe1)]),this['_applyPlanePointer'](c,!![]),this[D(0xe4)][D(0xe5)]('pointermove',this[D(0xab)]),this['_plane']['addEventListener']('pointerup',this['_finishPlaneDrag']),this['_plane']['addEventListener'](D(0x93),this[D(0xe3)]),c[D(0xd8)]();}[r(0xab)]=c=>{const E=r;if(c[E(0xe1)]===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const F=r;if(c[F(0xe1)]!==this[F(0x9a)])return;this[F(0x9a)]=null,this['_plane'][F(0x10a)](F(0xd2),this[F(0xab)]),this[F(0xe4)][F(0x10a)](F(0xba),this[F(0xe3)]),this['_plane']['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this[F(0xea)]();};['_applyPlanePointer'](c,d){const G=r,e=this['_plane']['getBoundingClientRect'](),f=clamp((c['clientX']-e[G(0xaf)])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e[G(0x122)])/e['height'],0x0,0x1),h=Number(this[G(0x120)][G(0xc5)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this[G(0x99)]['a']},d);}[r(0xd6)](c){const H=r,d=rgbToHsv(this[H(0x99)]),e=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[H(0x99)]['a']},c);}['_applyAlpha'](c){const I=r;this['_setColor']({...this[I(0x99)],'a':clamp(Number(this['_alphaInput'][I(0xc5)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const J=r,d=[...this[J(0x110)]['querySelectorAll']('input')][J(0x8f)]((f,g)=>{const K=J;return f[g[K(0xa6)]]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']===J(0x9d))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[J(0xa3)]===J(0xc8))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===J(0x115))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[J(0xc1)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x119)](){const L=r,c=this[L(0xd0)]['value']['trim']();this['_textInput']['classList'][L(0xff)]('invalid',c[L(0xbd)]>0x0&&!parseColor(c));}[r(0xfb)](){const M=r,c=parseColor(this['_textInput'][M(0xc5)]);this['_textInput']['classList'][M(0xff)]('invalid',!c);if(!c)return;this[M(0xa3)]=inferColorMode(this['_textInput']['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this[N(0x96)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this[N(0x116)](),this['_render'](e);if(d)this['valuePreviewChanged'][N(0xec)]({'newValue':this['_value'],'oldValue':g});else this[N(0xcb)][N(0xec)]({'newValue':this[N(0x96)],'oldValue':g});}[r(0xea)](){const O=r,c=this[O(0x96)];this['_value']=this['_formatColor'](),this[O(0xcb)][O(0xec)]({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this[P(0x99)]);this[P(0xfd)][P(0xb0)](P(0xb7),String(Math[P(0xd9)](this[P(0xca)]))),this['style'][P(0xb0)](P(0x11e),toCssRgb(this['_color'])),this[P(0xfd)][P(0xb0)]('--opaque-color',P(0x11c)+this[P(0x99)]['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x99)]['b']+')'),this['style']['setProperty'](P(0xc9),this[P(0x99)]['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']),this['_planeHandle']['style']['left']=d['s']*0x64+'%',this[P(0xb2)][P(0xfd)][P(0x122)]=(0x1-d['v'])*0x64+'%',this[P(0x120)]['value']=String(Math[P(0xd9)](this[P(0xca)])),this['_alphaInput'][P(0xc5)]=String(Math[P(0xd9)](this[P(0x99)]['a']*0x64)),this[P(0x9b)][P(0xb8)]=Math[P(0xd9)](this['_color']['a']*0x64)+'%',this[P(0xed)][P(0xc5)]=this[P(0xa3)];if(c)this['_renderChannelInputs']();if(document[P(0xfe)]!==this['_textInput'])this[P(0xd0)]['value']=this[P(0x96)];this[P(0xd0)]['classList']['remove']('invalid');}[r(0xbf)](){const Q=r,c=getChannelValues(this[Q(0x99)],this['_mode']);this[Q(0x110)][Q(0xfa)]=c['map'](d=>Q(0x106)+d[Q(0xc0)]+Q(0x86)+d[Q(0xa6)]+Q(0xa2)+d['min']+Q(0x9e)+d[Q(0x8d)]+Q(0x95)+d[Q(0xf7)]+'\x22\x20value=\x22'+d['value']+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')['join']('');}['_formatColor'](){const R=r;return formatColor(this['_color'],this[R(0xa3)]);}['_syncHueFromColor'](){const S=r,c=rgbToHsv(this[S(0x99)]);if(c['s']>epsilon&&c['v']>epsilon)this[S(0xca)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']=r(0xcf);['_button'];[r(0x88)];['_editor'];[r(0x87)]=![];['_outsidePointerHandler']=c=>this[r(0xef)](c);[r(0x98)]=c=>this[r(0xb1)](c);get[r(0xc5)](){const T=r;return this[T(0x96)];}set[r(0xc5)](c){const U=r;this[U(0xa7)](c,![]);}get['readOnly'](){const V=r;return this['hasAttribute'](V(0xd5));}set['readOnly'](c){this['toggleAttribute']('readonly',c);}get[r(0xf2)](){const W=r;return this['hasAttribute'](W(0xf2));}set['disabled'](c){const X=r;this['toggleAttribute'](X(0xf2),c);if(this['_button'])this[X(0x10e)]['disabled']=c;}constructor(){const Y=r;super(),this[Y(0x10e)]=this['_getDomElement'](Y(0xcc));}[r(0x103)](){const Z=r,c=this['getAttribute'](Z(0xc5));if(c!=null)this['_setValue'](c,![]);this['_button']['disabled']=this[Z(0xf2)],this['_button']['addEventListener'](Z(0xac),d=>this[Z(0xaa)](d)),this['_button']['addEventListener']('click',d=>this[Z(0x8e)](d)),this['_button']['addEventListener']('keydown',d=>this[Z(0xce)](d)),this['_renderSwatch']();}['disconnectedCallback'](){const a0=r;this[a0(0xdb)]();}[r(0x94)](){const a1=r;if(this[a1(0xdc)]||this['disabled'])return;if(this['_popup'])this[a1(0xdb)]();else this['_openPopup']();}[r(0xaa)](c){const a2=r;if(c['button']!==0x0)return;this['_ignoreNextClick']=!![],this[a2(0x94)](),c[a2(0xd8)](),c['stopPropagation']();}[r(0x8e)](c){const a3=r;if(this['_ignoreNextClick']){this[a3(0x87)]=![],c[a3(0xd8)](),c['stopPropagation']();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){const a4=r;if(c['key']!=='Enter'&&c[a4(0xf1)]!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a4(0x8a)]();}[r(0x90)](){const a5=r;this[a5(0x88)]=document['createElement'](a5(0xc7)),this[a5(0x88)]['style'][a5(0xa1)]=a5(0x97),this[a5(0x88)]['style'][a5(0x92)]='100000',this[a5(0x88)]['style']['width']=a5(0xcd),this['_editor']=document[a5(0xdd)](a5(0xa0)),this['_editor'][a5(0xc5)]=this['_value'],this[a5(0x113)][a5(0x9f)]['on'](c=>{const a6=a5;this['_setValue'](c['newValue'],!![]),this[a6(0xad)](new Event(a6(0x11d),{'bubbles':!![],'composed':!![]}));}),this[a5(0x113)]['valueChanged']['on'](c=>{const a7=a5;this['_setValue'](c[a7(0xbb)],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this[a5(0x88)]['appendChild'](this[a5(0x113)]),document[a5(0xf3)][a5(0xb4)](this[a5(0x88)]),this[a5(0x105)](),window['addEventListener'](a5(0xb9),()=>this[a5(0x105)](),{'once':!![]}),window[a5(0xe5)]('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a5(0xe5)](a5(0xa5),this[a5(0x98)]),requestAnimationFrame(()=>window['addEventListener']('pointerdown',this['_outsidePointerHandler'],!![]));}[r(0x105)](){const a8=r;if(!this[a8(0x88)])return;const c=this[a8(0xbe)](),d=this['_popup']['offsetWidth']||0x118,e=this[a8(0x88)][a8(0x108)]||0x168;let f=c[a8(0xaf)],g=c[a8(0x117)]+0x4;if(f+d>window[a8(0xd7)]-0x8)f=window[a8(0xd7)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a8(0x122)]-e-0x4;this['_popup'][a8(0xfd)][a8(0xaf)]=Math[a8(0x8d)](0x8,f)+'px',this[a8(0x88)]['style'][a8(0x122)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a9=r,d=c['composedPath']();if(d[a9(0xf6)](this)||this['_popup']&&d[a9(0xf6)](this[a9(0x88)]))return;this[a9(0xdb)]();}[r(0xb1)](c){const aa=r;if(c[aa(0xf1)]===aa(0xe9))this[aa(0xdb)]();}['_closePopup'](){const ab=r;window['removeEventListener'](ab(0xac),this['_outsidePointerHandler'],!![]),window[ab(0x10a)](ab(0xa5),this[ab(0x98)]),this[ab(0x88)]?.[ab(0x10b)](),this[ab(0x88)]=null,this[ab(0x113)]=null;}['_setValue'](c,d){const ac=r;this['_value']=c??'';if(d)this['setAttribute']('value',this[ac(0x96)]);this['_renderSwatch']();}[r(0xfc)](){const c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ad=r;if(!c)return null;const d=c['trim']();if(d[ad(0xd1)]()===ad(0xb3))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h['green'],'b':h[ad(0x11a)],'a':h['opacity']});return null;}function inferColorMode(c){const ae=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ae(0xd1)]();if(e==='rgb'||e===ae(0xf8))return ae(0x118);if(e==='hsl'||e==='hsla')return ae(0x9d);if(e===ae(0xc8))return'cmyk';if(e===ae(0x115))return'oklab';if(e===ae(0xb6))return'oklch';return null;}function normalizeModernColorSyntax(c){const af=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(af(0x118),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ag=r;if(d[ag(0xf6)](',')){const h=d[ag(0xc4)](',')['map'](i=>i[ag(0x107)]());if(h['length']===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[ag(0xbd)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ag(0xc4)]('/')['map'](i=>i[ag(0x107)]()),g=e['split'](/\s+/)[ag(0xa4)](Boolean);if(f)g['push'](f['endsWith']('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[ag(0xdf)](',')+')';}function parseHexColor(c){const ah=r,d=/^#([0-9a-f]{3,8})$/i[ah(0xf5)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[ah(0xbd)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[ah(0xbd)]===0x8)return normalizeColor({'r':f(e[ah(0x111)](0x0,0x2)),'g':f(e[ah(0x111)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e['length']===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ai=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')[ai(0x91)](j=>j[ai(0x107)]()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[ai(0xbd)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const aj=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':aj(0xa8)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===aj(0x9d)){const g=rgbToHsl(c);return c['a']>=0x1?aj(0x102)+Math['round'](g['h'])+',\x20'+Math[aj(0xd9)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':'hsla('+Math[aj(0xd9)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[aj(0xd9)](g['l']*0x64)+aj(0x10d)+e+')';}if(d===aj(0xc8)){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math[aj(0xd9)](h['m']*0x64)+aj(0x10d)+Math[aj(0xd9)](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?aj(0xee)+i+')':aj(0xee)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':aj(0xc3)+e)+')';}const f=rgbToOklch(c);return aj(0x89)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':aj(0xc3)+e)+')';}function getChannelValues(c,d){const ak=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ak(0x9d)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ak(0xd9)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ak(0xd9)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ak(0xd9)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ak(0xd9)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ak(0xd9)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ak(0xd9)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ak(0xd9)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const al=r;return al(0xa8)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const am=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[am(0x8d)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[an(0x8d)](e,f,i),k=Math[an(0xf0)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function b(c,d){c=c-0x86;const e=a();let f=e[c];return f;}function hslToRgb(d,e,f){const ao=r,i=(0x1-Math[ao(0x100)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ap=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[ap(0xe8)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const aq=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[aq(0x10c)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[aq(0x10c)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ar=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ar(0xde)](g),e*Math['sin'](g));}function srgbToLinear(c){const as=r;return c<=0.04045?c/12.92:Math[as(0x10c)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const at=r;return c[at(0x11f)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function a(){const aw=['_editor','channels','oklab','_formatColor','bottom','rgb','_validateTextInput','blue','toggleAttribute','rgb(','input','--color','endsWith','_hueInput','plane','top','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','_ignoreNextClick','_popup','oklch(','stopPropagation','2105442PDQTtN','_syncHueFromColor','max','_handleButtonClick','reduce','_openPopup','map','zIndex','pointercancel','_togglePopup','\x22\x20step=\x22','_value','fixed','_windowKeyHandler','_color','_dragPointerId','_alphaLabel','720405lUYsZE','hsl','\x22\x20max=\x22','valuePreviewChanged','node-projects-color-editor','position','\x22\x20min=\x22','_mode','filter','keydown','name','_setValue','rgba(','1StPYzO','_handleButtonPointerDown','_planePointerMove','pointerdown','dispatchEvent','Enter','left','setProperty','_handleWindowKey','_planeHandle','transparent','appendChild','text','oklch','--hue','textContent','resize','pointerup','newValue','_wireEvents','length','getBoundingClientRect','_renderChannelInputs','label','alpha','86444wzLfEa','\x20/\x20','split','value','alpha-label','div','cmyk','--rgb-color','_hue','valueChanged','button','280px','_handleButtonKeyDown','#000000','_textInput','toLowerCase','pointermove','3427335cVtJkZ','isFinite','readonly','_applyHue','innerWidth','preventDefault','round','_startPlaneDrag','_closePopup','readOnly','createElement','cos','join','hasAttribute','pointerId','mode','_finishPlaneDrag','_plane','addEventListener','9370956pQZeiX','6648960gQCStj','cbrt','Escape','_commitCurrentValue','10YOOmPV','emit','_modeSelect','cmyk(','_handleOutsidePointer','min','key','disabled','body','_render','exec','includes','step','rgba','blur','innerHTML','_applyText','_renderSwatch','style','activeElement','toggle','abs','change','hsl(','ready','215uRfNId','_positionPopup','\x0a\x20\x20\x20\x20\x20\x20<label>','trim','offsetHeight','_alphaInput','removeEventListener','remove','pow','%,\x20','_button','_getDomElement','_channels','slice','1788212JoDulX'];a=function(){return aw;};return a();}function clamp(c,d,e){const au=r;return Math[au(0xf0)](e,Math['max'](d,Number[au(0xd4)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const av=r,e=Math['pow'](0xa,d);return Math[av(0xd9)](c*e)/e;}customElements['define'](r(0xa0),ColorEditor),customElements['define']('node-projects-color-input',ColorInput);