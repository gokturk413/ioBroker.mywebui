const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x139))/0x1+-parseInt(q(0x19d))/0x2+-parseInt(q(0x1bd))/0x3*(parseInt(q(0x1c5))/0x4)+parseInt(q(0x14d))/0x5*(parseInt(q(0x148))/0x6)+parseInt(q(0x199))/0x7+parseInt(q(0x141))/0x8*(parseInt(q(0x135))/0x9)+-parseInt(q(0x1b1))/0xa*(-parseInt(q(0x1b5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x63ffd));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x1a8),r(0x1af),r(0x15c),'oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x1a7)]=css`
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
  `;static [r(0x145)]=html`
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
  `;[r(0x1ab)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x19e)]='#000000';[r(0x182)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0x15b);[r(0x138)]=0x0;['_plane'];['_planeHandle'];[r(0x195)];[r(0x1c9)];['_alphaLabel'];[r(0x190)];['_channels'];['_textInput'];[r(0x134)]=null;get[r(0x1a3)](){const s=r;return this[s(0x19e)];}set[r(0x1a3)](c){const t=r,d=parseColor(c);if(d){this[t(0x182)]=d,this[t(0x13d)]=inferColorMode(c)??this['_mode'],this[t(0x1bf)](),this[t(0x19e)]=this[t(0x16f)](),this[t(0x180)]();return;}this['_value']=c??'',this['_render']();}get[r(0x192)](){const u=r;return this[u(0x13d)];}set[r(0x192)](c){const v=r;modes['includes'](c)&&(this[v(0x13d)]=c,this[v(0x19e)]=this[v(0x16f)](),this['_render']());}get['readOnly'](){const w=r;return this[w(0x133)](w(0x13a));}set[r(0x18c)](c){const x=r;this['toggleAttribute'](x(0x13a),c);}get[r(0x1c8)](){const y=r;return this[y(0x133)]('disabled');}set['disabled'](c){this['toggleAttribute']('disabled',c);}constructor(){const z=r;super(),this['_plane']=this[z(0x1b7)]('plane'),this['_planeHandle']=this['_getDomElement']('plane-handle'),this[z(0x195)]=this['_getDomElement']('hue'),this[z(0x1c9)]=this[z(0x1b7)](z(0x140)),this[z(0x1ae)]=this[z(0x1b7)]('alpha-label'),this[z(0x190)]=this['_getDomElement'](z(0x192)),this[z(0x17c)]=this['_getDomElement']('channels'),this[z(0x174)]=this['_getDomElement'](z(0x1c0));}[r(0x1b2)](){const A=r;this['_wireEvents']();const c=this[A(0x1b6)]('value');if(c!=null)this['value']=c;const d=this['getAttribute'](A(0x192));modes['includes'](d)&&(this['_mode']=d,this['_value']=this['_formatColor']()),this['_render']();}[r(0x1c2)](){const B=r;this['_plane']['addEventListener']('pointerdown',c=>this[B(0x146)](c)),this[B(0x195)][B(0x196)](B(0x178),()=>this[B(0x1a5)](!![])),this['_hueInput'][B(0x196)](B(0x136),()=>this[B(0x18b)]()),this['_alphaInput']['addEventListener']('input',()=>this[B(0x154)](!![])),this[B(0x1c9)]['addEventListener'](B(0x136),()=>this[B(0x18b)]()),this[B(0x190)][B(0x196)](B(0x136),()=>{const C=B;this[C(0x192)]=this['_modeSelect']['value'],this['_commitCurrentValue']();}),this[B(0x17c)][B(0x196)]('input',()=>this[B(0x1b9)](!![])),this[B(0x17c)][B(0x196)](B(0x136),()=>this['_commitCurrentValue']()),this[B(0x174)][B(0x196)]('input',()=>this[B(0x16c)]()),this[B(0x174)][B(0x196)](B(0x136),()=>this['_applyText']()),this['_textInput'][B(0x196)]('keydown',c=>{const D=B;c[D(0x172)]==='Enter'&&(this[D(0x19b)](),this[D(0x174)]['blur']());});}[r(0x146)](c){const E=r;if(this[E(0x18c)]||this[E(0x1c8)])return;this['_dragPointerId']=c['pointerId'],this[E(0x166)][E(0x14b)](c[E(0x19f)]),this['_applyPlanePointer'](c,!![]),this[E(0x166)]['addEventListener']('pointermove',this[E(0x144)]),this['_plane'][E(0x196)](E(0x14a),this['_finishPlaneDrag']),this['_plane'][E(0x196)]('pointercancel',this['_finishPlaneDrag']),c[E(0x1b0)]();}[r(0x144)]=c=>{const F=r;if(c[F(0x19f)]===this['_dragPointerId'])this[F(0x1c3)](c,!![]);};[r(0x1a0)]=c=>{const G=r;if(c[G(0x19f)]!==this[G(0x134)])return;this[G(0x134)]=null,this['_plane']['removeEventListener']('pointermove',this[G(0x144)]),this['_plane'][G(0x152)](G(0x14a),this['_finishPlaneDrag']),this['_plane'][G(0x152)](G(0x1bb),this[G(0x1a0)]),this[G(0x18b)]();};['_applyPlanePointer'](c,d){const H=r,e=this['_plane'][H(0x1a6)](),f=clamp((c['clientX']-e['left'])/e[H(0x132)],0x0,0x1),g=clamp(0x1-(c[H(0x18a)]-e['top'])/e['height'],0x0,0x1),h=Number(this[H(0x195)][H(0x1a3)])||0x0;this[H(0x138)]=normalizeHue(h),this[H(0x188)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1a5)](c){const I=r,d=rgbToHsv(this[I(0x182)]),e=Number(this[I(0x195)][I(0x1a3)])||0x0;this[I(0x138)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}[r(0x154)](c){const J=r;this[J(0x188)]({...this['_color'],'a':clamp(Number(this['_alphaInput'][J(0x1a3)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this['_channels']['querySelectorAll']('input')][K(0x194)]((f,g)=>{const L=K;return f[g['name']]=Number(g[L(0x1a3)]),f;},{});let e;if(this['_mode']===K(0x15b))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[K(0x13d)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===K(0x1af))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[K(0x13d)]===K(0x15c))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x16c)](){const M=r,c=this[M(0x174)]['value'][M(0x191)]();this['_textInput'][M(0x137)]['toggle']('invalid',c[M(0x143)]>0x0&&!parseColor(c));}[r(0x19b)](){const N=r,c=parseColor(this[N(0x174)][N(0x1a3)]);this[N(0x174)][N(0x137)][N(0x15e)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this[N(0x174)][N(0x1a3)])??this[N(0x13d)],this['_setColor'](c,![],!![],!![]);}[r(0x188)](c,d,e=!![],f=![]){const O=r,g=this[O(0x19e)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this['_formatColor'](),this[O(0x180)](e);if(d)this[O(0x161)]['emit']({'newValue':this['_value'],'oldValue':g});else this[O(0x1ab)][O(0x150)]({'newValue':this['_value'],'oldValue':g});}[r(0x18b)](){const P=r,c=this['_value'];this[P(0x19e)]=this[P(0x16f)](),this['valueChanged']['emit']({'newValue':this[P(0x19e)],'oldValue':c});}[r(0x180)](c=!![]){const Q=r;if(!this['_textInput'])return;const d=rgbToHsv(this[Q(0x182)]);this['style']['setProperty'](Q(0x15f),String(Math[Q(0x18d)](this[Q(0x138)]))),this['style']['setProperty']('--color',toCssRgb(this[Q(0x182)])),this[Q(0x1a7)][Q(0x12f)](Q(0x168),Q(0x193)+this['_color']['r']+',\x20'+this[Q(0x182)]['g']+',\x20'+this['_color']['b']+')'),this['style']['setProperty'](Q(0x19c),this[Q(0x182)]['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']),this['_planeHandle']['style'][Q(0x185)]=d['s']*0x64+'%',this[Q(0x189)]['style']['top']=(0x1-d['v'])*0x64+'%',this['_hueInput'][Q(0x1a3)]=String(Math['round'](this['_hue'])),this['_alphaInput'][Q(0x1a3)]=String(Math[Q(0x18d)](this['_color']['a']*0x64)),this['_alphaLabel'][Q(0x17e)]=Math[Q(0x18d)](this['_color']['a']*0x64)+'%',this[Q(0x190)]['value']=this['_mode'];if(c)this['_renderChannelInputs']();if(document[Q(0x130)]!==this[Q(0x174)])this['_textInput']['value']=this['_value'];this[Q(0x174)]['classList'][Q(0x142)](Q(0x1aa));}[r(0x1c1)](){const R=r,c=getChannelValues(this['_color'],this['_mode']);this[R(0x17c)]['innerHTML']=c[R(0x176)](d=>R(0x1a2)+d[R(0x162)]+R(0x183)+d['name']+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d['max']+'\x22\x20step=\x22'+d[R(0x179)]+R(0x17a)+d['value']+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')['join']('');}[r(0x16f)](){const S=r;return formatColor(this['_color'],this[S(0x13d)]);}[r(0x1bf)](){const T=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[T(0x138)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x145)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;[r(0x19e)]='#000000';[r(0x1ad)];['_popup'];['_editor'];[r(0x158)]=![];[r(0x13b)]=c=>this[r(0x15a)](c);['_windowKeyHandler']=c=>this['_handleWindowKey'](c);get[r(0x1a3)](){return this['_value'];}set[r(0x1a3)](c){this['_setValue'](c,![]);}get['readOnly'](){return this['hasAttribute']('readonly');}set['readOnly'](c){const U=r;this[U(0x19a)](U(0x13a),c);}get[r(0x1c8)](){const V=r;return this['hasAttribute'](V(0x1c8));}set[r(0x1c8)](c){const W=r;this[W(0x19a)](W(0x1c8),c);if(this[W(0x1ad)])this[W(0x1ad)][W(0x1c8)]=c;}constructor(){const X=r;super(),this['_button']=this['_getDomElement'](X(0x16b));}[r(0x1b2)](){const Y=r,c=this['getAttribute']('value');if(c!=null)this['_setValue'](c,![]);this['_button'][Y(0x1c8)]=this['disabled'],this[Y(0x1ad)][Y(0x196)](Y(0x187),d=>this[Y(0x1be)](d)),this[Y(0x1ad)]['addEventListener'](Y(0x1c6),d=>this[Y(0x167)](d)),this[Y(0x1ad)]['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this[Y(0x169)]();}[r(0x1a1)](){const Z=r;this[Z(0x184)]();}['_togglePopup'](){const a0=r;if(this['readOnly']||this[a0(0x1c8)])return;if(this['_popup'])this['_closePopup']();else this[a0(0x16e)]();}[r(0x1be)](c){const a1=r;if(c[a1(0x16b)]!==0x0)return;this[a1(0x158)]=!![],this[a1(0x17d)](),c[a1(0x1b0)](),c[a1(0x175)]();}[r(0x167)](c){const a2=r;if(this['_ignoreNextClick']){this[a2(0x158)]=![],c[a2(0x1b0)](),c[a2(0x175)]();return;}this['_togglePopup']();}[r(0x16d)](c){const a3=r;if(c[a3(0x172)]!=='Enter'&&c['key']!=='\x20')return;this['_togglePopup'](),c[a3(0x1b0)](),c[a3(0x175)]();}[r(0x16e)](){const a4=r;this[a4(0x1a9)]=document[a4(0x177)]('div'),this['_popup']['style'][a4(0x198)]='fixed',this[a4(0x1a9)]['style']['zIndex']=a4(0x197),this['_popup']['style']['width']=a4(0x14c),this['_editor']=document[a4(0x177)](a4(0x1b3)),this[a4(0x1b8)][a4(0x1a3)]=this[a4(0x19e)],this['_editor'][a4(0x161)]['on'](c=>{const a5=a4;this['_setValue'](c['newValue'],!![]),this[a5(0x156)](new Event(a5(0x178),{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a6=a4;this[a6(0x17f)](c['newValue'],!![]),this['dispatchEvent'](new Event(a6(0x136),{'bubbles':!![],'composed':!![]}));}),this[a4(0x1a9)][a4(0x151)](this[a4(0x1b8)]),document['body']['appendChild'](this[a4(0x1a9)]),this[a4(0x163)](),window['addEventListener']('resize',()=>this['_positionPopup'](),{'once':!![]}),window[a4(0x196)](a4(0x13c),()=>this[a4(0x163)](),{'once':!![],'capture':!![]}),window['addEventListener'](a4(0x160),this['_windowKeyHandler']),requestAnimationFrame(()=>window[a4(0x196)](a4(0x187),this[a4(0x13b)],!![]));}['_positionPopup'](){const a7=r;if(!this['_popup'])return;const c=this['getBoundingClientRect'](),d=this[a7(0x1a9)][a7(0x171)]||0x118,e=this['_popup'][a7(0x164)]||0x168;let f=c[a7(0x185)],g=c['bottom']+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c['top']-e-0x4;this['_popup'][a7(0x1a7)]['left']=Math['max'](0x8,f)+'px',this['_popup']['style']['top']=Math[a7(0x131)](0x8,g)+'px';}[r(0x15a)](c){const a8=r,d=c['composedPath']();if(d[a8(0x149)](this)||this['_popup']&&d[a8(0x149)](this['_popup']))return;this['_closePopup']();}['_handleWindowKey'](c){const a9=r;if(c['key']===a9(0x159))this['_closePopup']();}['_closePopup'](){const aa=r;window[aa(0x152)](aa(0x187),this['_outsidePointerHandler'],!![]),window[aa(0x152)](aa(0x160),this['_windowKeyHandler']),this[aa(0x1a9)]?.[aa(0x142)](),this[aa(0x1a9)]=null,this[aa(0x1b8)]=null;}[r(0x17f)](c,d){const ab=r;this['_value']=c??'';if(d)this['setAttribute']('value',this[ab(0x19e)]);this[ab(0x169)]();}[r(0x169)](){const ac=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ac(0x1a7)]['setProperty'](ac(0x1bc),toCssRgb(c));}}function parseColor(c){const ad=r;if(!c)return null;const d=c[ad(0x191)]();if(d[ad(0x13e)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ad(0x181)](g);if(h?.['valid'])return normalizeColor({'r':h[ad(0x157)],'g':h['green'],'b':h['blue'],'a':h[ad(0x13f)]});return null;}function inferColorMode(c){const ae=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e==='rgba')return'rgb';if(e==='hsl'||e==='hsla')return'hsl';if(e==='cmyk')return'cmyk';if(e===ae(0x15c))return'oklab';if(e===ae(0x18f))return ae(0x18f);return null;}function normalizeModernColorSyntax(c){const af=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))[af(0x1c7)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(af(0x1a8),e));}function b(c,d){c=c-0x12e;const e=a();let f=e[c];return f;}function normalizeFunctionBody(c,d){const ag=r;if(d['includes'](',')){const h=d['split'](',')[ag(0x176)](i=>i['trim']());if(h['length']===0x4&&h[0x3][ag(0x153)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[ag(0x143)]===0x4?'a':'')+'('+h[ag(0x16a)](',')+')';}const [e,f]=d[ag(0x14e)]('/')[ag(0x176)](i=>i['trim']()),g=e['split'](/\s+/)['filter'](Boolean);if(f)g['push'](f['endsWith']('%')?String(Number(f[ag(0x17b)](0x0,-0x1))/0x64):f);return''+c+(g[ag(0x143)]===0x4?'a':'')+'('+g[ag(0x16a)](',')+')';}function parseHexColor(c){const ah=r,d=/^#([0-9a-f]{3,8})$/i[ah(0x1ac)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ah(0x143)]===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[ah(0x143)]===0x8)return normalizeColor({'r':f(e[ah(0x17b)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[ah(0x17b)](0x4,0x6)),'a':e[ah(0x143)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ai=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][ai(0x14e)]('/')['map'](j=>j['trim']()),h=f[ai(0x1c7)](/,/g,'\x20')[ai(0x14e)](/\s+/)[ai(0x1c4)](Boolean);if(h[ai(0x143)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===ai(0x15c))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const aj=r,e=round(c['a'],0x3);if(d===aj(0x15b))return c['a']>=0x1?aj(0x193)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[aj(0x18d)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+aj(0x15d)+Math['round'](g['l']*0x64)+'%)':aj(0x173)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+aj(0x15d)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+aj(0x15d)+Math['round'](h['m']*0x64)+aj(0x15d)+Math[aj(0x18d)](h['y']*0x64)+aj(0x15d)+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?aj(0x1ba)+i+')':aj(0x1ba)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return aj(0x170)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ak=r;if(d===ak(0x15b))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ak(0x18d)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ak(0x18d)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ak(0x1af)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ak(0x18d)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ak(0x18d)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ak(0x15c)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ak(0x140),'value':Math[ak(0x18d)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function a(){const aA=['_mode','toLowerCase','opacity','alpha','264zrnAzv','remove','length','_planePointerMove','template','_startPlaneDrag','cbrt','6ZTjCTz','includes','pointerup','setPointerCapture','280px','1174310cchdzz','split','sin','emit','appendChild','removeEventListener','endsWith','_applyAlpha','sqrt','dispatchEvent','red','_ignoreNextClick','Escape','_handleOutsidePointer','rgb','oklab','%,\x20','toggle','--hue','keydown','valuePreviewChanged','label','_positionPopup','offsetHeight','min','_plane','_handleButtonClick','--opaque-color','_renderSwatch','join','button','_validateTextInput','_handleButtonKeyDown','_openPopup','_formatColor','oklch(','offsetWidth','key','hsla(','_textInput','stopPropagation','map','createElement','input','step','\x22\x20value=\x22','slice','_channels','_togglePopup','textContent','_setValue','_render','toColorObject','_color','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','_closePopup','left','define','pointerdown','_setColor','_planeHandle','clientY','_commitCurrentValue','readOnly','round','pow','oklch','_modeSelect','trim','mode','rgb(','reduce','_hueInput','addEventListener','100000','position','834589dzZqyn','toggleAttribute','_applyText','--rgb-color','1466638MKeZzC','_value','pointerId','_finishPlaneDrag','disconnectedCallback','\x0a\x20\x20\x20\x20\x20\x20<label>','value','rgba(','_applyHue','getBoundingClientRect','style','hsl','_popup','invalid','valueChanged','exec','_button','_alphaLabel','cmyk','preventDefault','235620OCDYpY','ready','node-projects-color-editor','isFinite','330sGNnMG','getAttribute','_getDomElement','_editor','_applyChannelInputs','cmyk(','pointercancel','--color','2778dFbzhu','_handleButtonPointerDown','_syncHueFromColor','text','_renderChannelInputs','_wireEvents','_applyPlanePointer','filter','2012loWKVZ','click','replace','disabled','_alphaInput','abs','setProperty','activeElement','max','width','hasAttribute','_dragPointerId','157698ULISaV','change','classList','_hue','30481ukWOqd','readonly','_outsidePointerHandler','scroll'];a=function(){return aA;};return a();}function normalizeColor(c){const al=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[al(0x18d)](clamp(c['g'],0x0,0xff)),'b':Math[al(0x18d)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[al(0x1b4)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const am=r;return am(0x1a4)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[an(0x165)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const ao=r,i=f*e,j=i*(0x1-Math[ao(0x12e)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ap=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ap(0x131)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ap(0x12e)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const aq=r,i=(0x1-Math[aq(0x12e)](0x2*f-0x1))*e,j=i*(0x1-Math[aq(0x12e)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const ar=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[ar(0x131)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const as=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[as(0x147)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[as(0x147)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const at=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[at(0x18e)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const au=r,e=rgbToOklab(d),f=Math[au(0x155)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const av=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[av(0x14f)](g));}function srgbToLinear(c){const aw=r;return c<=0.04045?c/12.92:Math[aw(0x18e)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){const ax=r;return c<=0.0031308?12.92*c:1.055*Math[ax(0x18e)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const ay=r;return c[ay(0x153)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){return Math['min'](e,Math['max'](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const az=r,e=Math['pow'](0xa,d);return Math[az(0x18d)](c*e)/e;}customElements[r(0x186)](r(0x1b3),ColorEditor),customElements[r(0x186)]('node-projects-color-input',ColorInput);