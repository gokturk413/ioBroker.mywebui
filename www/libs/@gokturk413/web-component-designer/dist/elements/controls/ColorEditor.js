const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x115))/0x1*(parseInt(q(0x144))/0x2)+-parseInt(q(0xc7))/0x3*(-parseInt(q(0xf0))/0x4)+parseInt(q(0xe1))/0x5*(parseInt(q(0x111))/0x6)+parseInt(q(0xd2))/0x7*(parseInt(q(0x161))/0x8)+-parseInt(q(0x118))/0x9+-parseInt(q(0x10e))/0xa*(parseInt(q(0xd5))/0xb)+-parseInt(q(0xf7))/0xc*(-parseInt(q(0x13a))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x50506));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0xc8),'hsl',r(0x14a),r(0xd1),r(0x117)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['_value']='#000000';['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x15e)]='rgb';[r(0xdb)]=0x0;['_plane'];[r(0x138)];[r(0x151)];[r(0x143)];['_alphaLabel'];['_modeSelect'];['_channels'];['_textInput'];[r(0x123)]=null;get['value'](){const s=r;return this[s(0x119)];}set['value'](c){const t=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[t(0x15e)],this['_syncHueFromColor'](),this[t(0x119)]=this[t(0xf9)](),this['_render']();return;}this[t(0x119)]=c??'',this[t(0x12b)]();}get[r(0x155)](){return this['_mode'];}set['mode'](c){const u=r;modes[u(0xea)](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this['_render']());}get['readOnly'](){return this['hasAttribute']('readonly');}set['readOnly'](c){const v=r;this['toggleAttribute'](v(0x133),c);}get['disabled'](){const w=r;return this[w(0xfb)]('disabled');}set['disabled'](c){const x=r;this[x(0xe5)]('disabled',c);}constructor(){const y=r;super(),this[y(0xe7)]=this['_getDomElement']('plane'),this['_planeHandle']=this['_getDomElement'](y(0x121)),this[y(0x151)]=this[y(0x131)](y(0xe6)),this[y(0x143)]=this['_getDomElement'](y(0x12e)),this[y(0x108)]=this['_getDomElement'](y(0xc6)),this[y(0xcc)]=this['_getDomElement'](y(0x155)),this['_channels']=this[y(0x131)]('channels'),this[y(0x11e)]=this['_getDomElement'](y(0xda));}[r(0x127)](){const z=r;this[z(0x126)]();const c=this['getAttribute'](z(0x101));if(c!=null)this['value']=c;const d=this[z(0xd9)]('mode');modes[z(0xea)](d)&&(this[z(0x15e)]=d,this[z(0x119)]=this['_formatColor']()),this['_render']();}['_wireEvents'](){const A=r;this['_plane']['addEventListener']('pointerdown',c=>this[A(0xc4)](c)),this[A(0x151)][A(0x141)](A(0xd4),()=>this[A(0xd0)](!![])),this[A(0x151)][A(0x141)](A(0xdf),()=>this[A(0x152)]()),this[A(0x143)][A(0x141)](A(0xd4),()=>this[A(0xfe)](!![])),this[A(0x143)]['addEventListener']('change',()=>this['_commitCurrentValue']()),this['_modeSelect'][A(0x141)](A(0xdf),()=>{const B=A;this['mode']=this[B(0xcc)]['value'],this['_commitCurrentValue']();}),this[A(0xcf)][A(0x141)]('input',()=>this[A(0x159)](!![])),this['_channels']['addEventListener']('change',()=>this['_commitCurrentValue']()),this[A(0x11e)][A(0x141)](A(0xd4),()=>this[A(0x15a)]()),this['_textInput'][A(0x141)]('change',()=>this['_applyText']()),this[A(0x11e)]['addEventListener'](A(0x120),c=>{const C=A;c[C(0xff)]==='Enter'&&(this['_applyText'](),this['_textInput']['blur']());});}[r(0xc4)](c){const D=r;if(this[D(0x10c)]||this[D(0x15d)])return;this[D(0x123)]=c['pointerId'],this[D(0xe7)]['setPointerCapture'](c['pointerId']),this[D(0xfa)](c,!![]),this['_plane'][D(0x141)]('pointermove',this[D(0x140)]),this['_plane']['addEventListener']('pointerup',this[D(0x137)]),this['_plane'][D(0x141)](D(0xf4),this[D(0x137)]),c[D(0xd6)]();}[r(0x140)]=c=>{const E=r;if(c['pointerId']===this[E(0x123)])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const F=r;if(c[F(0xdd)]!==this['_dragPointerId'])return;this['_dragPointerId']=null,this['_plane'][F(0x134)](F(0xeb),this[F(0x140)]),this['_plane'][F(0x134)](F(0xf3),this[F(0x137)]),this['_plane'][F(0x134)]('pointercancel',this['_finishPlaneDrag']),this['_commitCurrentValue']();};[r(0xfa)](c,d){const G=r,e=this[G(0xe7)]['getBoundingClientRect'](),f=clamp((c[G(0xe8)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c[G(0x14b)]-e[G(0x129)])/e[G(0x12c)],0x0,0x1),h=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(h),this[G(0xe2)]({...hsvToRgb(h,f,g),'a':this[G(0x139)]['a']},d);}[r(0xd0)](c){const H=r,d=rgbToHsv(this['_color']),e=Number(this['_hueInput'][H(0x101)])||0x0;this[H(0xdb)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[H(0x139)]['a']},c);}[r(0xfe)](c){const I=r;this[I(0xe2)]({...this['_color'],'a':clamp(Number(this['_alphaInput'][I(0x101)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const J=r,d=[...this[J(0xcf)][J(0x150)]('input')]['reduce']((f,g)=>{const K=J;return f[g[K(0xbe)]]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[J(0x15e)]===J(0x15f))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===J(0xd1))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x15a)](){const L=r,c=this['_textInput']['value'][L(0xe4)]();this[L(0x11e)]['classList']['toggle'](L(0x112),c['length']>0x0&&!parseColor(c));}[r(0xec)](){const M=r,c=parseColor(this['_textInput']['value']);this['_textInput'][M(0x130)]['toggle']('invalid',!c);if(!c)return;this[M(0x15e)]=inferColorMode(this['_textInput']['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}[r(0xe2)](c,d,e=!![],f=![]){const N=r,g=this[N(0x119)];this[N(0x139)]=normalizeColor(c);if(f)this[N(0x100)]();this['_value']=this[N(0xf9)](),this[N(0x12b)](e);if(d)this[N(0x158)]['emit']({'newValue':this[N(0x119)],'oldValue':g});else this[N(0x132)]['emit']({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this[O(0x119)];this[O(0x119)]=this['_formatColor'](),this['valueChanged'][O(0x114)]({'newValue':this['_value'],'oldValue':c});}[r(0x12b)](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this[P(0x139)]);this[P(0x125)]['setProperty'](P(0x104),String(Math[P(0x10d)](this[P(0xdb)]))),this['style'][P(0xd7)]('--color',toCssRgb(this['_color'])),this[P(0x125)][P(0xd7)]('--opaque-color','rgb('+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x139)]['b']+')'),this['style']['setProperty']('--rgb-color',this['_color']['r']+',\x20'+this[P(0x139)]['g']+',\x20'+this['_color']['b']),this[P(0x138)][P(0x125)]['left']=d['s']*0x64+'%',this[P(0x138)][P(0x125)][P(0x129)]=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x101)]=String(Math['round'](this['_hue'])),this[P(0x143)][P(0x101)]=String(Math[P(0x10d)](this[P(0x139)]['a']*0x64)),this[P(0x108)][P(0xef)]=Math[P(0x10d)](this[P(0x139)]['a']*0x64)+'%',this[P(0xcc)]['value']=this['_mode'];if(c)this[P(0x107)]();if(document[P(0xe0)]!==this['_textInput'])this['_textInput'][P(0x101)]=this['_value'];this[P(0x11e)]['classList']['remove'](P(0x112));}['_renderChannelInputs'](){const Q=r,c=getChannelValues(this['_color'],this[Q(0x15e)]);this[Q(0xcf)][Q(0x105)]=c[Q(0x14e)](d=>Q(0x147)+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[Q(0xbe)]+'\x22\x20min=\x22'+d[Q(0xd3)]+Q(0x110)+d['max']+'\x22\x20step=\x22'+d[Q(0xed)]+Q(0x13c)+d['value']+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[Q(0x153)]('');}[r(0xf9)](){const R=r;return formatColor(this[R(0x139)],this['_mode']);}[r(0x100)](){const S=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[S(0xdb)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x125)]=css`
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
  `;static [r(0x14f)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;['_value']=r(0x106);[r(0x122)];[r(0xd8)];['_editor'];['_ignoreNextClick']=![];['_outsidePointerHandler']=c=>this[r(0xee)](c);['_windowKeyHandler']=c=>this[r(0xf2)](c);get['value'](){const T=r;return this[T(0x119)];}set['value'](c){const U=r;this[U(0x113)](c,![]);}get[r(0x10c)](){const V=r;return this['hasAttribute'](V(0x133));}set['readOnly'](c){const W=r;this['toggleAttribute'](W(0x133),c);}get[r(0x15d)](){const X=r;return this[X(0xfb)](X(0x15d));}set['disabled'](c){const Y=r;this[Y(0xe5)](Y(0x15d),c);if(this[Y(0x122)])this['_button'][Y(0x15d)]=c;}constructor(){const Z=r;super(),this['_button']=this['_getDomElement'](Z(0xcd));}['ready'](){const a0=r,c=this['getAttribute']('value');if(c!=null)this[a0(0x113)](c,![]);this[a0(0x122)]['disabled']=this[a0(0x15d)],this['_button'][a0(0x141)](a0(0x145),d=>this['_handleButtonPointerDown'](d)),this['_button']['addEventListener'](a0(0xf1),d=>this['_handleButtonClick'](d)),this[a0(0x122)][a0(0x141)]('keydown',d=>this[a0(0x11c)](d)),this['_renderSwatch']();}[r(0x10b)](){const a1=r;this[a1(0xbf)]();}['_togglePopup'](){const a2=r;if(this[a2(0x10c)]||this[a2(0x15d)])return;if(this['_popup'])this['_closePopup']();else this[a2(0xdc)]();}['_handleButtonPointerDown'](c){const a3=r;if(c['button']!==0x0)return;this[a3(0xc5)]=!![],this[a3(0x11b)](),c[a3(0xd6)](),c['stopPropagation']();}['_handleButtonClick'](c){const a4=r;if(this[a4(0xc5)]){this['_ignoreNextClick']=![],c['preventDefault'](),c[a4(0x146)]();return;}this['_togglePopup']();}[r(0x11c)](c){const a5=r;if(c['key']!=='Enter'&&c['key']!=='\x20')return;this[a5(0x11b)](),c[a5(0xd6)](),c[a5(0x146)]();}[r(0xdc)](){const a6=r;this[a6(0xd8)]=document[a6(0xc9)](a6(0x156)),this[a6(0xd8)][a6(0x125)]['position']='fixed',this['_popup'][a6(0x125)]['zIndex']=a6(0x14c),this[a6(0xd8)]['style']['width']=a6(0x160),this[a6(0x162)]=document[a6(0xc9)]('node-projects-color-editor'),this[a6(0x162)]['value']=this['_value'],this['_editor'][a6(0x158)]['on'](c=>{const a7=a6;this[a7(0x113)](c['newValue'],!![]),this['dispatchEvent'](new Event('input',{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a8=a6;this['_setValue'](c[a8(0x135)],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this[a6(0x162)]),document[a6(0x142)][a6(0x13e)](this['_popup']),this['_positionPopup'](),window[a6(0x141)]('resize',()=>this[a6(0x102)](),{'once':!![]}),window['addEventListener']('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a6(0x141)]('keydown',this['_windowKeyHandler']),requestAnimationFrame(()=>window[a6(0x141)](a6(0x145),this[a6(0xf8)],!![]));}['_positionPopup'](){const a9=r;if(!this['_popup'])return;const c=this[a9(0xc3)](),d=this[a9(0xd8)][a9(0xc0)]||0x118,e=this['_popup'][a9(0xe3)]||0x168;let f=c[a9(0x11f)],g=c[a9(0xfd)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a9(0x109)]-0x8)g=c[a9(0x129)]-e-0x4;this[a9(0xd8)]['style']['left']=Math[a9(0x128)](0x8,f)+'px',this['_popup']['style']['top']=Math[a9(0x128)](0x8,g)+'px';}[r(0xee)](c){const aa=r,d=c[aa(0x13f)]();if(d['includes'](this)||this['_popup']&&d[aa(0xea)](this[aa(0xd8)]))return;this[aa(0xbf)]();}[r(0xf2)](c){const ab=r;if(c[ab(0xff)]==='Escape')this['_closePopup']();}['_closePopup'](){const ac=r;window[ac(0x134)]('pointerdown',this['_outsidePointerHandler'],!![]),window['removeEventListener'](ac(0x120),this[ac(0xf5)]),this['_popup']?.['remove'](),this['_popup']=null,this[ac(0x162)]=null;}[r(0x113)](c,d){const ad=r;this[ad(0x119)]=c??'';if(d)this[ad(0x13d)]('value',this[ad(0x119)]);this['_renderSwatch']();}['_renderSwatch'](){const ae=r,c=parseColor(this[ae(0x119)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const af=r;if(!c)return null;const d=c[af(0xe4)]();if(d['toLowerCase']()===af(0x154))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[af(0x136)](g);if(h?.[af(0xc2)])return normalizeColor({'r':h[af(0xfc)],'g':h[af(0x12d)],'b':h[af(0x10f)],'a':h['opacity']});return null;}function inferColorMode(c){const ag=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ag(0xf6)](c??''),e=d?.[0x1]?.[ag(0x13b)]();if(e==='rgb'||e==='rgba')return ag(0xc8);if(e===ag(0x15f)||e===ag(0xc1))return'hsl';if(e===ag(0x14a))return'cmyk';if(e==='oklab')return'oklab';if(e===ag(0x117))return'oklch';return null;}function normalizeModernColorSyntax(c){const ah=r;return c[ah(0x103)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ai=r;if(d['includes'](',')){const h=d['split'](',')['map'](i=>i['trim']());if(h[ai(0x11d)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ai(0x12f)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ai(0xe9)]('/')[ai(0x14e)](i=>i['trim']()),g=e['split'](/\s+/)[ai(0x149)](Boolean);if(f)g[ai(0xce)](f[ai(0xca)]('%')?String(Number(f[ai(0x12f)](0x0,-0x1))/0x64):f);return''+c+(g[ai(0x11d)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const aj=r,d=/^#([0-9a-f]{3,8})$/i[aj(0xf6)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[aj(0x11d)]===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e[aj(0x11d)]===0x6||e[aj(0x11d)]===0x8)return normalizeColor({'r':f(e[aj(0x12f)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[aj(0x12f)](0x4,0x6)),'a':e['length']===0x8?f(e[aj(0x12f)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ak=r,d=/^(oklab|oklch)\((.*)\)$/i[ak(0xf6)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][ak(0xe9)]('/')[ak(0x14e)](j=>j[ak(0xe4)]()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const al=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?al(0x15c)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':al(0xcb)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[al(0x10d)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+al(0x12a)+Math[al(0x10d)](g['l']*0x64)+'%)':'hsla('+Math[al(0x10d)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[al(0x10d)](g['l']*0x64)+'%,\x20'+e+')';}if(d===al(0x14a)){const h=rgbToCmyk(c),i=Math[al(0x10d)](h['c']*0x64)+'%,\x20'+Math[al(0x10d)](h['m']*0x64)+al(0x12a)+Math[al(0x10d)](h['y']*0x64)+al(0x12a)+Math[al(0x10d)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d===al(0xd1)){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return al(0x148)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':al(0x124)+e)+')';}function getChannelValues(c,d){const am=r;if(d===am(0xc8))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[am(0x10d)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[am(0x10d)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[am(0x10d)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[am(0x10d)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===am(0xd1)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':am(0x12e),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[am(0x10d)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const an=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[an(0x10d)](clamp(c['g'],0x0,0xff)),'b':Math[an(0x10d)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[an(0x11a)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function a(){const aA=['valuePreviewChanged','_applyChannelInputs','_validateTextInput','pow','rgb(','disabled','_mode','hsl','280px','3386248vMazrM','_editor','name','_closePopup','offsetWidth','hsla','valid','getBoundingClientRect','_startPlaneDrag','_ignoreNextClick','alpha-label','217950AhWHvj','rgb','createElement','endsWith','rgba(','_modeSelect','button','push','_channels','_applyHue','oklab','7dmaXBQ','min','input','407fpBhUb','preventDefault','setProperty','_popup','getAttribute','text','_hue','_openPopup','pointerId','abs','change','activeElement','8195DARhat','_setColor','offsetHeight','trim','toggleAttribute','hue','_plane','clientX','split','includes','pointermove','_applyText','step','_handleOutsidePointer','textContent','12gBcDjf','click','_handleWindowKey','pointerup','pointercancel','_windowKeyHandler','exec','424908DIZwSK','_outsidePointerHandler','_formatColor','_applyPlanePointer','hasAttribute','red','bottom','_applyAlpha','key','_syncHueFromColor','value','_positionPopup','replace','--hue','innerHTML','#000000','_renderChannelInputs','_alphaLabel','innerHeight','atan2','disconnectedCallback','readOnly','round','149210bsYMpk','blue','\x22\x20max=\x22','144GGntln','invalid','_setValue','emit','150026SOxzjv','cos','oklch','4024125dmEKGo','_value','isFinite','_togglePopup','_handleButtonKeyDown','length','_textInput','left','keydown','plane-handle','_button','_dragPointerId','\x20/\x20','style','_wireEvents','ready','max','top','%,\x20','_render','height','green','alpha','slice','classList','_getDomElement','valueChanged','readonly','removeEventListener','newValue','toColorObject','_finishPlaneDrag','_planeHandle','_color','403WuQjUJ','toLowerCase','\x22\x20value=\x22','setAttribute','appendChild','composedPath','_planePointerMove','addEventListener','body','_alphaInput','6sYMrmh','pointerdown','stopPropagation','\x0a\x20\x20\x20\x20\x20\x20<label>','oklch(','filter','cmyk','clientY','100000','cbrt','map','template','querySelectorAll','_hueInput','_commitCurrentValue','join','transparent','mode','div','node-projects-color-input'];a=function(){return aA;};return a();}function rgbToHsv(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x128)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const ap=r,i=f*e,j=i*(0x1-Math[ap(0xde)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const aq=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[aq(0xd3)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[aq(0xde)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ar=r,i=(0x1-Math[ar(0xde)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const as=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[as(0x128)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const at=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[at(0x14d)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[at(0x14d)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function b(c,d){c=c-0xbe;const e=a();let f=e[c];return f;}function oklabToRgb(c,d,e){const au=r,f=Math[au(0x15b)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const av=r,e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[av(0x10a)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const aw=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[aw(0x116)](g),e*Math['sin'](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const ax=r;return c[ax(0xca)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ay=r;return Math['min'](e,Math['max'](d,Number[ay(0x11a)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const az=r,e=Math['pow'](0xa,d);return Math[az(0x10d)](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements['define'](r(0x157),ColorInput);