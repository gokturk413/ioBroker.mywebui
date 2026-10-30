const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x124))/0x1+parseInt(q(0x163))/0x2*(-parseInt(q(0x19f))/0x3)+-parseInt(q(0x146))/0x4*(parseInt(q(0x11b))/0x5)+-parseInt(q(0x120))/0x6+-parseInt(q(0x185))/0x7*(-parseInt(q(0x148))/0x8)+parseInt(q(0x10d))/0x9*(parseInt(q(0x190))/0xa)+parseInt(q(0x177))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc1e80));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x171),'hsl',r(0x160),'oklab',r(0x182)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['_value']='#000000';[r(0x195)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x142)]=r(0x171);[r(0x165)]=0x0;['_plane'];[r(0x11e)];[r(0x199)];[r(0x147)];['_alphaLabel'];['_modeSelect'];['_channels'];['_textInput'];[r(0x11d)]=null;get['value'](){const s=r;return this[s(0x18b)];}set[r(0x145)](c){const t=r,d=parseColor(c);if(d){this[t(0x195)]=d,this['_mode']=inferColorMode(c)??this[t(0x142)],this[t(0x159)](),this[t(0x18b)]=this[t(0x181)](),this['_render']();return;}this['_value']=c??'',this['_render']();}get[r(0x11a)](){const u=r;return this[u(0x142)];}set[r(0x11a)](c){const v=r;modes['includes'](c)&&(this['_mode']=c,this['_value']=this[v(0x181)](),this[v(0x11f)]());}get[r(0x10c)](){const w=r;return this[w(0x176)]('readonly');}set[r(0x10c)](c){const x=r;this[x(0x12c)]('readonly',c);}get['disabled'](){const y=r;return this[y(0x176)](y(0x150));}set['disabled'](c){const z=r;this['toggleAttribute'](z(0x150),c);}constructor(){const A=r;super(),this['_plane']=this['_getDomElement']('plane'),this[A(0x11e)]=this[A(0x126)](A(0x10e)),this['_hueInput']=this[A(0x126)]('hue'),this['_alphaInput']=this[A(0x126)]('alpha'),this['_alphaLabel']=this[A(0x126)]('alpha-label'),this[A(0x17e)]=this['_getDomElement']('mode'),this[A(0x166)]=this[A(0x126)]('channels'),this['_textInput']=this[A(0x126)](A(0x129));}['ready'](){const B=r;this[B(0x188)]();const c=this['getAttribute']('value');if(c!=null)this[B(0x145)]=c;const d=this[B(0x14b)](B(0x11a));modes[B(0x194)](d)&&(this['_mode']=d,this[B(0x18b)]=this[B(0x181)]()),this['_render']();}[r(0x188)](){const C=r;this[C(0x13a)][C(0x173)]('pointerdown',c=>this['_startPlaneDrag'](c)),this[C(0x199)]['addEventListener']('input',()=>this['_applyHue'](!![])),this[C(0x199)]['addEventListener'](C(0x115),()=>this['_commitCurrentValue']()),this[C(0x147)][C(0x173)]('input',()=>this['_applyAlpha'](!![])),this[C(0x147)][C(0x173)]('change',()=>this['_commitCurrentValue']()),this['_modeSelect']['addEventListener'](C(0x115),()=>{const D=C;this[D(0x11a)]=this[D(0x17e)]['value'],this['_commitCurrentValue']();}),this['_channels'][C(0x173)](C(0x170),()=>this['_applyChannelInputs'](!![])),this['_channels'][C(0x173)](C(0x115),()=>this['_commitCurrentValue']()),this['_textInput'][C(0x173)]('input',()=>this['_validateTextInput']()),this['_textInput']['addEventListener'](C(0x115),()=>this['_applyText']()),this[C(0x15b)]['addEventListener']('keydown',c=>{const E=C;c[E(0x139)]===E(0x19e)&&(this['_applyText'](),this['_textInput'][E(0x12f)]());});}[r(0x162)](c){const F=r;if(this['readOnly']||this[F(0x150)])return;this['_dragPointerId']=c[F(0x157)],this[F(0x13a)][F(0x13e)](c[F(0x157)]),this[F(0x12a)](c,!![]),this['_plane'][F(0x173)]('pointermove',this[F(0x167)]),this[F(0x13a)][F(0x173)]('pointerup',this[F(0x18a)]),this[F(0x13a)][F(0x173)]('pointercancel',this['_finishPlaneDrag']),c['preventDefault']();}[r(0x167)]=c=>{if(c['pointerId']===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};[r(0x18a)]=c=>{const G=r;if(c['pointerId']!==this['_dragPointerId'])return;this[G(0x11d)]=null,this['_plane'][G(0x196)](G(0x13d),this[G(0x167)]),this['_plane']['removeEventListener']('pointerup',this[G(0x18a)]),this[G(0x13a)]['removeEventListener'](G(0x16a),this[G(0x18a)]),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const H=r,e=this[H(0x13a)][H(0x19a)](),f=clamp((c['clientX']-e[H(0x118)])/e[H(0x134)],0x0,0x1),g=clamp(0x1-(c[H(0x161)]-e['top'])/e['height'],0x0,0x1),h=Number(this['_hueInput'][H(0x145)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this[H(0x195)]['a']},d);}['_applyHue'](c){const I=r,d=rgbToHsv(this['_color']),e=Number(this['_hueInput'][I(0x145)])||0x0;this['_hue']=normalizeHue(e),this[I(0x17a)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}[r(0x144)](c){const J=r;this['_setColor']({...this[J(0x195)],'a':clamp(Number(this[J(0x147)][J(0x145)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this[K(0x166)][K(0x18d)](K(0x170))][K(0x125)]((f,g)=>{const L=K;return f[g['name']]=Number(g[L(0x145)]),f;},{});let e;if(this['_mode']===K(0x171))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[K(0x142)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===K(0x160))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[K(0x17a)](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const M=r,c=this[M(0x15b)]['value'][M(0x198)]();this['_textInput'][M(0x186)][M(0x117)]('invalid',c['length']>0x0&&!parseColor(c));}['_applyText'](){const N=r,c=parseColor(this[N(0x15b)]['value']);this[N(0x15b)][N(0x186)][N(0x117)]('invalid',!c);if(!c)return;this[N(0x142)]=inferColorMode(this[N(0x15b)][N(0x145)])??this[N(0x142)],this[N(0x17a)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const O=r,g=this['_value'];this[O(0x195)]=normalizeColor(c);if(f)this[O(0x159)]();this['_value']=this['_formatColor'](),this['_render'](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this[O(0x18b)],'oldValue':g});else this['valueChanged'][O(0x10b)]({'newValue':this[O(0x18b)],'oldValue':g});}['_commitCurrentValue'](){const P=r,c=this['_value'];this[P(0x18b)]=this['_formatColor'](),this[P(0x16f)]['emit']({'newValue':this['_value'],'oldValue':c});}[r(0x11f)](c=!![]){const Q=r;if(!this[Q(0x15b)])return;const d=rgbToHsv(this[Q(0x195)]);this[Q(0x178)][Q(0x12e)]('--hue',String(Math['round'](this['_hue']))),this['style']['setProperty'](Q(0x132),toCssRgb(this[Q(0x195)])),this[Q(0x178)]['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this[Q(0x195)]['g']+',\x20'+this['_color']['b']+')'),this['style'][Q(0x12e)]('--rgb-color',this['_color']['r']+',\x20'+this[Q(0x195)]['g']+',\x20'+this[Q(0x195)]['b']),this['_planeHandle']['style'][Q(0x118)]=d['s']*0x64+'%',this['_planeHandle']['style']['top']=(0x1-d['v'])*0x64+'%',this['_hueInput']['value']=String(Math['round'](this[Q(0x165)])),this['_alphaInput'][Q(0x145)]=String(Math['round'](this[Q(0x195)]['a']*0x64)),this[Q(0x10f)][Q(0x11c)]=Math[Q(0x16b)](this[Q(0x195)]['a']*0x64)+'%',this['_modeSelect'][Q(0x145)]=this['_mode'];if(c)this[Q(0x168)]();if(document['activeElement']!==this['_textInput'])this[Q(0x15b)][Q(0x145)]=this['_value'];this[Q(0x15b)][Q(0x186)]['remove'](Q(0x174));}['_renderChannelInputs'](){const R=r,c=getChannelValues(this[R(0x195)],this['_mode']);this['_channels']['innerHTML']=c[R(0x19c)](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+R(0x18f)+d[R(0x15c)]+R(0x197)+d[R(0x189)]+R(0x158)+d['step']+R(0x187)+d[R(0x145)]+R(0x143))[R(0x149)]('');}['_formatColor'](){const S=r;return formatColor(this[S(0x195)],this['_mode']);}[r(0x159)](){const T=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[T(0x165)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']=r(0x154);[r(0x175)];[r(0x110)];[r(0x17c)];['_ignoreNextClick']=![];[r(0x111)]=c=>this['_handleOutsidePointer'](c);[r(0x14a)]=c=>this[r(0x114)](c);get['value'](){const U=r;return this[U(0x18b)];}set['value'](c){this['_setValue'](c,![]);}get['readOnly'](){const V=r;return this['hasAttribute'](V(0x14c));}set['readOnly'](c){const W=r;this['toggleAttribute'](W(0x14c),c);}get['disabled'](){const X=r;return this[X(0x176)]('disabled');}set['disabled'](c){const Y=r;this[Y(0x12c)](Y(0x150),c);if(this['_button'])this[Y(0x175)][Y(0x150)]=c;}constructor(){const Z=r;super(),this['_button']=this['_getDomElement'](Z(0x113));}[r(0x112)](){const a0=r,c=this['getAttribute']('value');if(c!=null)this[a0(0x14e)](c,![]);this[a0(0x175)]['disabled']=this['disabled'],this['_button'][a0(0x173)]('pointerdown',d=>this[a0(0x169)](d)),this['_button'][a0(0x173)]('click',d=>this[a0(0x19d)](d)),this[a0(0x175)][a0(0x173)](a0(0x15d),d=>this[a0(0x18e)](d)),this[a0(0x140)]();}[r(0x119)](){const a1=r;this[a1(0x135)]();}['_togglePopup'](){const a2=r;if(this['readOnly']||this['disabled'])return;if(this[a2(0x110)])this['_closePopup']();else this[a2(0x131)]();}['_handleButtonPointerDown'](c){const a3=r;if(c[a3(0x113)]!==0x0)return;this[a3(0x156)]=!![],this[a3(0x15f)](),c[a3(0x12b)](),c['stopPropagation']();}[r(0x19d)](c){const a4=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c['preventDefault'](),c[a4(0x15e)]();return;}this[a4(0x15f)]();}['_handleButtonKeyDown'](c){const a5=r;if(c[a5(0x139)]!==a5(0x19e)&&c[a5(0x139)]!=='\x20')return;this[a5(0x15f)](),c[a5(0x12b)](),c['stopPropagation']();}[r(0x131)](){const a6=r;this['_popup']=document['createElement']('div'),this[a6(0x110)][a6(0x178)][a6(0x155)]='fixed',this['_popup'][a6(0x178)][a6(0x136)]=a6(0x184),this['_popup'][a6(0x178)][a6(0x134)]=a6(0x193),this[a6(0x17c)]=document['createElement']('node-projects-color-editor'),this['_editor']['value']=this[a6(0x18b)],this[a6(0x17c)]['valuePreviewChanged']['on'](c=>{const a7=a6;this[a7(0x14e)](c['newValue'],!![]),this['dispatchEvent'](new Event(a7(0x170),{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a8=a6;this['_setValue'](c['newValue'],!![]),this[a8(0x116)](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup'][a6(0x128)](this[a6(0x17c)]),document['body']['appendChild'](this[a6(0x110)]),this[a6(0x183)](),window[a6(0x173)]('resize',()=>this['_positionPopup'](),{'once':!![]}),window[a6(0x173)]('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window['addEventListener'](a6(0x15d),this['_windowKeyHandler']),requestAnimationFrame(()=>window[a6(0x173)](a6(0x12d),this[a6(0x111)],!![]));}['_positionPopup'](){const a9=r;if(!this[a9(0x110)])return;const c=this[a9(0x19a)](),d=this['_popup']['offsetWidth']||0x118,e=this['_popup']['offsetHeight']||0x168;let f=c[a9(0x118)],g=c['bottom']+0x4;if(f+d>window[a9(0x18c)]-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a9(0x19b)]-0x8)g=c[a9(0x138)]-e-0x4;this['_popup']['style'][a9(0x118)]=Math[a9(0x189)](0x8,f)+'px',this['_popup'][a9(0x178)][a9(0x138)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const aa=r,d=c[aa(0x16c)]();if(d[aa(0x194)](this)||this['_popup']&&d['includes'](this['_popup']))return;this['_closePopup']();}[r(0x114)](c){const ab=r;if(c['key']==='Escape')this[ab(0x135)]();}['_closePopup'](){const ac=r;window[ac(0x196)](ac(0x12d),this['_outsidePointerHandler'],!![]),window[ac(0x196)]('keydown',this['_windowKeyHandler']),this['_popup']?.[ac(0x16e)](),this[ac(0x110)]=null,this[ac(0x17c)]=null;}['_setValue'](c,d){const ad=r;this['_value']=c??'';if(d)this['setAttribute'](ad(0x145),this['_value']);this['_renderSwatch']();}['_renderSwatch'](){const ae=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ae(0x178)]['setProperty'](ae(0x132),toCssRgb(c));}}function parseColor(c){const af=r;if(!c)return null;const d=c[af(0x198)]();if(d['toLowerCase']()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[af(0x130)](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h[af(0x16d)],'b':h['blue'],'a':h[af(0x153)]});return null;}function inferColorMode(c){const ag=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ag(0x13c)]();if(e==='rgb'||e==='rgba')return'rgb';if(e===ag(0x141)||e==='hsla')return ag(0x141);if(e===ag(0x160))return ag(0x160);if(e==='oklab')return ag(0x133);if(e===ag(0x182))return'oklch';return null;}function normalizeModernColorSyntax(c){const ah=r;return c['replace'](/,\s*/g,',')[ah(0x17b)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ah(0x171),e))[ah(0x17b)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ah(0x141),e));}function normalizeFunctionBody(c,d){const ai=r;if(d['includes'](',')){const h=d[ai(0x17d)](',')['map'](i=>i[ai(0x198)]());if(h['length']===0x4&&h[0x3][ai(0x121)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[ai(0x13f)]===0x4?'a':'')+'('+h[ai(0x149)](',')+')';}const [e,f]=d[ai(0x17d)]('/')['map'](i=>i[ai(0x198)]()),g=e['split'](/\s+/)['filter'](Boolean);if(f)g[ai(0x14f)](f['endsWith']('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const aj=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[aj(0x13f)]===0x4?f(e[0x3])/0xff:0x1});if(e[aj(0x13f)]===0x6||e[aj(0x13f)]===0x8)return normalizeColor({'r':f(e[aj(0x179)](0x0,0x2)),'g':f(e[aj(0x179)](0x2,0x4)),'b':f(e[aj(0x179)](0x4,0x6)),'a':e['length']===0x8?f(e[aj(0x179)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ak=r,d=/^(oklab|oklch)\((.*)\)$/i[ak(0x13b)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')['map'](j=>j['trim']()),h=f[ak(0x17b)](/,/g,'\x20')[ak(0x17d)](/\s+/)['filter'](Boolean);if(h[ak(0x13f)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const al=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?al(0x151)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':al(0x192)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===al(0x141)){const g=rgbToHsl(c);return c['a']>=0x1?al(0x172)+Math[al(0x16b)](g['h'])+',\x20'+Math[al(0x16b)](g['s']*0x64)+'%,\x20'+Math[al(0x16b)](g['l']*0x64)+'%)':al(0x180)+Math[al(0x16b)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[al(0x16b)](g['l']*0x64)+'%,\x20'+e+')';}if(d===al(0x160)){const h=rgbToCmyk(c),i=Math[al(0x16b)](h['c']*0x64)+al(0x191)+Math['round'](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+al(0x191)+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d===al(0x133)){const j=rgbToOklab(c);return al(0x122)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return al(0x127)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const am=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[am(0x16b)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[am(0x16b)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[am(0x16b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[am(0x16b)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[am(0x16b)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[am(0x16b)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[am(0x16b)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[am(0x16b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===am(0x133)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':am(0x123),'name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const an=r;return{'r':Math[an(0x16b)](clamp(c['r'],0x0,0xff)),'g':Math[an(0x16b)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x189)](e,f,i),k=Math[ao(0x15c)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ap=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ap(0x17f)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const aq=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[aq(0x189)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ar=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[ar(0x14d)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[ar(0x14d)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function a(){const ay=['_closePopup','zIndex','pow','top','key','_plane','exec','toLowerCase','pointermove','setPointerCapture','length','_renderSwatch','hsl','_mode','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','_applyAlpha','value','68hJbdmF','_alphaInput','51288ImqxJu','join','_windowKeyHandler','getAttribute','readonly','cbrt','_setValue','push','disabled','rgb(','sin','opacity','#000000','position','_ignoreNextClick','pointerId','\x22\x20step=\x22','_syncHueFromColor','cos','_textInput','min','keydown','stopPropagation','_togglePopup','cmyk','clientY','_startPlaneDrag','1306012vSAjBT','define','_hue','_channels','_planePointerMove','_renderChannelInputs','_handleButtonPointerDown','pointercancel','round','composedPath','green','remove','valueChanged','input','rgb','hsl(','addEventListener','invalid','_button','hasAttribute','19952328BsNSLm','style','slice','_setColor','replace','_editor','split','_modeSelect','abs','hsla(','_formatColor','oklch','_positionPopup','100000','1176FYuYGS','classList','\x22\x20value=\x22','_wireEvents','max','_finishPlaneDrag','_value','innerWidth','querySelectorAll','_handleButtonKeyDown','\x22\x20min=\x22','546340wHqSUN','%,\x20','rgba(','280px','includes','_color','removeEventListener','\x22\x20max=\x22','trim','_hueInput','getBoundingClientRect','innerHeight','map','_handleButtonClick','Enter','3IZOOyG','emit','readOnly','54DZFDVG','plane-handle','_alphaLabel','_popup','_outsidePointerHandler','ready','button','_handleWindowKey','change','dispatchEvent','toggle','left','disconnectedCallback','mode','334710UJFNxu','textContent','_dragPointerId','_planeHandle','_render','7347654iZWuqs','endsWith','oklab(','Alpha','591169QzjpTX','reduce','_getDomElement','oklch(','appendChild','text','_applyPlanePointer','preventDefault','toggleAttribute','pointerdown','setProperty','blur','toColorObject','_openPopup','--color','oklab','width'];a=function(){return ay;};return a();}function oklabToRgb(c,d,e){const as=r,f=Math[as(0x137)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[as(0x137)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[as(0x137)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const at=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[at(0x15a)](g),e*Math[at(0x152)](g));}function srgbToLinear(c){const au=r;return c<=0.04045?c/12.92:Math[au(0x137)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){const av=r;return c<=0.0031308?12.92*c:1.055*Math[av(0x137)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function b(c,d){c=c-0x10b;const e=a();let f=e[c];return f;}function clamp(c,d,e){const aw=r;return Math[aw(0x15c)](e,Math[aw(0x189)](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const ax=r,e=Math['pow'](0xa,d);return Math[ax(0x16b)](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements[r(0x164)]('node-projects-color-input',ColorInput);