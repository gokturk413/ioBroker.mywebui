const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x199))/0x1+parseInt(q(0x1ac))/0x2*(-parseInt(q(0x160))/0x3)+-parseInt(q(0x15a))/0x4*(-parseInt(q(0x152))/0x5)+parseInt(q(0x170))/0x6*(parseInt(q(0x1cf))/0x7)+parseInt(q(0x1aa))/0x8*(-parseInt(q(0x16f))/0x9)+-parseInt(q(0x19e))/0xa+-parseInt(q(0x1b9))/0xb*(-parseInt(q(0x1c4))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7cdd1));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x172),r(0x188),'cmyk',r(0x153),r(0x1c5)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['_value']='#000000';['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x182)]='rgb';['_hue']=0x0;['_plane'];['_planeHandle'];['_hueInput'];['_alphaInput'];[r(0x149)];['_modeSelect'];['_channels'];['_textInput'];['_dragPointerId']=null;get[r(0x16c)](){const s=r;return this[s(0x1b8)];}set[r(0x16c)](c){const t=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[t(0x182)],this['_syncHueFromColor'](),this[t(0x1b8)]=this[t(0x18b)](),this['_render']();return;}this[t(0x1b8)]=c??'',this[t(0x15e)]();}get[r(0x151)](){const u=r;return this[u(0x182)];}set['mode'](c){const v=r;modes[v(0x162)](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this[v(0x15e)]());}get['readOnly'](){return this['hasAttribute']('readonly');}set['readOnly'](c){const w=r;this[w(0x1bf)]('readonly',c);}get['disabled'](){const x=r;return this['hasAttribute'](x(0x198));}set[r(0x198)](c){const y=r;this['toggleAttribute'](y(0x198),c);}constructor(){const z=r;super(),this['_plane']=this['_getDomElement'](z(0x17a)),this['_planeHandle']=this['_getDomElement'](z(0x1bc)),this[z(0x17b)]=this[z(0x165)]('hue'),this[z(0x1a0)]=this[z(0x165)](z(0x1a2)),this['_alphaLabel']=this[z(0x165)](z(0x14f)),this['_modeSelect']=this[z(0x165)]('mode'),this['_channels']=this[z(0x165)]('channels'),this['_textInput']=this['_getDomElement'](z(0x17d));}['ready'](){const A=r;this['_wireEvents']();const c=this['getAttribute'](A(0x16c));if(c!=null)this[A(0x16c)]=c;const d=this['getAttribute']('mode');modes['includes'](d)&&(this['_mode']=d,this[A(0x1b8)]=this['_formatColor']()),this['_render']();}['_wireEvents'](){const B=r;this[B(0x186)]['addEventListener']('pointerdown',c=>this['_startPlaneDrag'](c)),this[B(0x17b)][B(0x145)]('input',()=>this[B(0x161)](!![])),this['_hueInput'][B(0x145)]('change',()=>this['_commitCurrentValue']()),this[B(0x1a0)][B(0x145)](B(0x15c),()=>this[B(0x15b)](!![])),this['_alphaInput']['addEventListener']('change',()=>this[B(0x1c7)]()),this[B(0x1c3)][B(0x145)](B(0x187),()=>{const C=B;this[C(0x151)]=this[C(0x1c3)][C(0x16c)],this['_commitCurrentValue']();}),this[B(0x1b6)]['addEventListener'](B(0x15c),()=>this['_applyChannelInputs'](!![])),this['_channels'][B(0x145)]('change',()=>this['_commitCurrentValue']()),this['_textInput'][B(0x145)](B(0x15c),()=>this['_validateTextInput']()),this['_textInput'][B(0x145)](B(0x187),()=>this['_applyText']()),this['_textInput']['addEventListener']('keydown',c=>{const D=B;c['key']===D(0x1d4)&&(this[D(0x1c6)](),this[D(0x14e)][D(0x190)]());});}['_startPlaneDrag'](c){const E=r;if(this[E(0x1c1)]||this[E(0x198)])return;this['_dragPointerId']=c[E(0x1cd)],this['_plane'][E(0x175)](c[E(0x1cd)]),this['_applyPlanePointer'](c,!![]),this['_plane']['addEventListener'](E(0x18a),this[E(0x15d)]),this[E(0x186)][E(0x145)](E(0x16a),this['_finishPlaneDrag']),this['_plane'][E(0x145)](E(0x1d0),this['_finishPlaneDrag']),c['preventDefault']();}[r(0x15d)]=c=>{if(c['pointerId']===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const F=r;if(c['pointerId']!==this[F(0x1b3)])return;this[F(0x1b3)]=null,this['_plane'][F(0x1cb)](F(0x18a),this['_planePointerMove']),this[F(0x186)][F(0x1cb)]('pointerup',this[F(0x1d2)]),this[F(0x186)]['removeEventListener'](F(0x1d0),this['_finishPlaneDrag']),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const G=r,e=this['_plane']['getBoundingClientRect'](),f=clamp((c[G(0x1a3)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e[G(0x173)],0x0,0x1),h=Number(this[G(0x17b)]['value'])||0x0;this[G(0x166)]=normalizeHue(h),this[G(0x19a)]({...hsvToRgb(h,f,g),'a':this[G(0x14b)]['a']},d);}['_applyHue'](c){const H=r,d=rgbToHsv(this[H(0x14b)]),e=Number(this[H(0x17b)]['value'])||0x0;this['_hue']=normalizeHue(e),this[H(0x19a)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[H(0x14b)]['a']},c);}['_applyAlpha'](c){const I=r;this['_setColor']({...this['_color'],'a':clamp(Number(this[I(0x1a0)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this['_channels']['querySelectorAll']('input')]['reduce']((f,g)=>{const J=b;return f[g[J(0x191)]]=Number(g['value']),f;},{});let e;if(this['_mode']===K(0x172))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[K(0x182)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[K(0x182)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[K(0x1a2)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const L=r,c=this['_textInput'][L(0x16c)]['trim']();this[L(0x14e)]['classList'][L(0x1c8)](L(0x18e),c['length']>0x0&&!parseColor(c));}['_applyText'](){const M=r,c=parseColor(this['_textInput'][M(0x16c)]);this[M(0x14e)][M(0x14d)][M(0x1c8)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput']['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this['_value'];this[N(0x14b)]=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this[N(0x18b)](),this[N(0x15e)](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this[N(0x1b8)],'oldValue':g});else this['valueChanged'][N(0x1b2)]({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this['_value'];this['_value']=this[O(0x18b)](),this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':c});}[r(0x15e)](c=!![]){const P=r;if(!this[P(0x14e)])return;const d=rgbToHsv(this['_color']);this[P(0x1b7)]['setProperty'](P(0x1c9),String(Math[P(0x1a8)](this[P(0x166)]))),this[P(0x1b7)]['setProperty']('--color',toCssRgb(this[P(0x14b)])),this['style'][P(0x197)]('--opaque-color','rgb('+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x14b)]['b']+')'),this[P(0x1b7)][P(0x197)]('--rgb-color',this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']),this['_planeHandle'][P(0x1b7)]['left']=d['s']*0x64+'%',this[P(0x163)]['style'][P(0x184)]=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x16c)]=String(Math[P(0x1a8)](this['_hue'])),this['_alphaInput']['value']=String(Math['round'](this['_color']['a']*0x64)),this['_alphaLabel']['textContent']=Math['round'](this[P(0x14b)]['a']*0x64)+'%',this['_modeSelect']['value']=this[P(0x182)];if(c)this[P(0x181)]();if(document['activeElement']!==this[P(0x14e)])this['_textInput']['value']=this[P(0x1b8)];this['_textInput']['classList'][P(0x17c)](P(0x18e));}[r(0x181)](){const Q=r,c=getChannelValues(this[Q(0x14b)],this['_mode']);this[Q(0x1b6)]['innerHTML']=c[Q(0x156)](d=>Q(0x148)+d[Q(0x18c)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d['max']+'\x22\x20step=\x22'+d[Q(0x1bd)]+'\x22\x20value=\x22'+d[Q(0x16c)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[Q(0x1a5)]('');}['_formatColor'](){const R=r;return formatColor(this[R(0x14b)],this[R(0x182)]);}['_syncHueFromColor'](){const S=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[S(0x166)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x1b7)]=css`
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
  `;static [r(0x14c)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;['_value']=r(0x16e);[r(0x1cc)];[r(0x14a)];[r(0x19c)];[r(0x1a6)]=![];['_outsidePointerHandler']=c=>this['_handleOutsidePointer'](c);[r(0x157)]=c=>this['_handleWindowKey'](c);get['value'](){return this['_value'];}set['value'](c){this['_setValue'](c,![]);}get[r(0x1c1)](){const T=r;return this['hasAttribute'](T(0x1d3));}set[r(0x1c1)](c){const U=r;this[U(0x1bf)](U(0x1d3),c);}get['disabled'](){return this['hasAttribute']('disabled');}set['disabled'](c){const V=r;this['toggleAttribute'](V(0x198),c);if(this[V(0x1cc)])this['_button'][V(0x198)]=c;}constructor(){const W=r;super(),this[W(0x1cc)]=this[W(0x165)]('button');}['ready'](){const X=r,c=this[X(0x1a7)]('value');if(c!=null)this[X(0x1c2)](c,![]);this[X(0x1cc)]['disabled']=this[X(0x198)],this[X(0x1cc)][X(0x145)]('pointerdown',d=>this[X(0x1b5)](d)),this['_button']['addEventListener'](X(0x176),d=>this[X(0x1b4)](d)),this[X(0x1cc)][X(0x145)](X(0x16b),d=>this[X(0x164)](d)),this['_renderSwatch']();}['disconnectedCallback'](){const Y=r;this[Y(0x18d)]();}['_togglePopup'](){const Z=r;if(this['readOnly']||this[Z(0x198)])return;if(this[Z(0x14a)])this['_closePopup']();else this[Z(0x194)]();}[r(0x1b5)](c){const a0=r;if(c[a0(0x1d1)]!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c['preventDefault'](),c[a0(0x195)]();}[r(0x1b4)](c){const a1=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c['preventDefault'](),c[a1(0x195)]();return;}this[a1(0x15f)]();}['_handleButtonKeyDown'](c){const a2=r;if(c['key']!==a2(0x1d4)&&c['key']!=='\x20')return;this['_togglePopup'](),c[a2(0x177)](),c['stopPropagation']();}[r(0x194)](){const a3=r;this['_popup']=document['createElement']('div'),this[a3(0x14a)][a3(0x1b7)]['position']='fixed',this['_popup'][a3(0x1b7)]['zIndex']='100000',this[a3(0x14a)][a3(0x1b7)][a3(0x1ae)]=a3(0x155),this[a3(0x19c)]=document['createElement']('node-projects-color-editor'),this['_editor']['value']=this['_value'],this[a3(0x19c)][a3(0x159)]['on'](c=>{const a4=a3;this['_setValue'](c['newValue'],!![]),this[a4(0x1c0)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a3(0x19c)][a3(0x193)]['on'](c=>{const a5=a3;this[a5(0x1c2)](c[a5(0x1ba)],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this[a3(0x14a)]['appendChild'](this[a3(0x19c)]),document['body']['appendChild'](this[a3(0x14a)]),this['_positionPopup'](),window[a3(0x145)]('resize',()=>this[a3(0x17e)](),{'once':!![]}),window['addEventListener']('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a3(0x145)]('keydown',this['_windowKeyHandler']),requestAnimationFrame(()=>window[a3(0x145)]('pointerdown',this[a3(0x185)],!![]));}[r(0x17e)](){const a6=r;if(!this['_popup'])return;const c=this[a6(0x1ab)](),d=this['_popup']['offsetWidth']||0x118,e=this['_popup']['offsetHeight']||0x168;let f=c[a6(0x178)],g=c['bottom']+0x4;if(f+d>window['innerWidth']-0x8)f=window[a6(0x169)]-d-0x8;if(g+e>window[a6(0x1a9)]-0x8)g=c['top']-e-0x4;this[a6(0x14a)]['style']['left']=Math['max'](0x8,f)+'px',this['_popup'][a6(0x1b7)]['top']=Math['max'](0x8,g)+'px';}[r(0x1b1)](c){const a7=r,d=c[a7(0x171)]();if(d[a7(0x162)](this)||this[a7(0x14a)]&&d[a7(0x162)](this['_popup']))return;this[a7(0x18d)]();}['_handleWindowKey'](c){const a8=r;if(c[a8(0x196)]===a8(0x189))this[a8(0x18d)]();}[r(0x18d)](){const a9=r;window['removeEventListener']('pointerdown',this['_outsidePointerHandler'],!![]),window['removeEventListener']('keydown',this[a9(0x157)]),this[a9(0x14a)]?.['remove'](),this[a9(0x14a)]=null,this[a9(0x19c)]=null;}['_setValue'](c,d){const aa=r;this[aa(0x1b8)]=c??'';if(d)this['setAttribute'](aa(0x16c),this[aa(0x1b8)]);this[aa(0x16d)]();}[r(0x16d)](){const ab=r,c=parseColor(this[ab(0x1b8)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ac=r;if(!c)return null;const d=c[ac(0x158)]();if(d[ac(0x19d)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ac(0x1ce)](g);if(h?.[ac(0x18f)])return normalizeColor({'r':h['red'],'g':h['green'],'b':h['blue'],'a':h[ac(0x1b0)]});return null;}function inferColorMode(c){const ad=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ad(0x19d)]();if(e===ad(0x172)||e==='rgba')return ad(0x172);if(e==='hsl'||e==='hsla')return'hsl';if(e===ad(0x183))return ad(0x183);if(e===ad(0x153))return'oklab';if(e==='oklch')return'oklch';return null;}function b(c,d){c=c-0x145;const e=a();let f=e[c];return f;}function normalizeModernColorSyntax(c){const ae=r;return c[ae(0x1bb)](/,\s*/g,',')[ae(0x1bb)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ae(0x172),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const af=r;if(d['includes'](',')){const h=d['split'](',')['map'](i=>i['trim']());if(h[af(0x168)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[af(0x168)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d['split']('/')['map'](i=>i[af(0x158)]()),g=e['split'](/\s+/)['filter'](Boolean);if(f)g[af(0x180)](f['endsWith']('%')?String(Number(f[af(0x1a4)](0x0,-0x1))/0x64):f);return''+c+(g[af(0x168)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ag=r,d=/^#([0-9a-f]{3,8})$/i[ag(0x17f)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ag(0x168)]===0x1?g+g:g,0x10);if(e[ag(0x168)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ag(0x168)]===0x4?f(e[0x3])/0xff:0x1});if(e[ag(0x168)]===0x6||e[ag(0x168)]===0x8)return normalizeColor({'r':f(e[ag(0x1a4)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[ag(0x1a4)](0x4,0x6)),'a':e[ag(0x168)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ah=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1][ah(0x19d)](),[f,g]=d[0x2]['split']('/')[ah(0x156)](j=>j[ah(0x158)]()),h=f['replace'](/,/g,'\x20')[ah(0x147)](/\s+/)['filter'](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ai=r,e=round(c['a'],0x3);if(d===ai(0x172))return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===ai(0x188)){const g=rgbToHsl(c);return c['a']>=0x1?ai(0x192)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+ai(0x1af)+Math[ai(0x1a8)](g['l']*0x64)+'%)':'hsla('+Math[ai(0x1a8)](g['h'])+',\x20'+Math[ai(0x1a8)](g['s']*0x64)+ai(0x1af)+Math[ai(0x1a8)](g['l']*0x64)+'%,\x20'+e+')';}if(d===ai(0x183)){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math['round'](h['m']*0x64)+ai(0x1af)+Math['round'](h['y']*0x64)+ai(0x1af)+Math[ai(0x1a8)](h['k']*0x64)+'%';return c['a']>=0x1?ai(0x150)+i+')':'cmyk('+i+',\x20'+e+')';}if(d===ai(0x153)){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return ai(0x19f)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const aj=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[aj(0x1a8)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[aj(0x1a8)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[aj(0x1a8)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[aj(0x1a8)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ak=r;return{'r':Math[ak(0x1a8)](clamp(c['r'],0x0,0xff)),'g':Math[ak(0x1a8)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const al=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[al(0x1be)](e,f,i),k=Math[al(0x1ca)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const am=r,i=f*e,j=i*(0x1-Math[am(0x154)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[an(0x1be)](e,f,i),k=Math[an(0x1ca)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ao=r,i=(0x1-Math[ao(0x154)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ap=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[ap(0x1ad)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ap(0x1ad)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const aq=r,f=Math[aq(0x167)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[aq(0x167)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ar=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ar(0x19b)](g),e*Math[ar(0x1a1)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function a(){const av=['toggle','--hue','min','removeEventListener','_button','pointerId','toColorObject','14HmVsDV','pointercancel','button','_finishPlaneDrag','readonly','Enter','addEventListener','node-projects-color-editor','split','\x0a\x20\x20\x20\x20\x20\x20<label>','_alphaLabel','_popup','_color','template','classList','_textInput','alpha-label','cmyk(','mode','2000BTxrdd','oklab','abs','280px','map','_windowKeyHandler','trim','valuePreviewChanged','380GlXNtU','_applyAlpha','input','_planePointerMove','_render','_togglePopup','134124CelKtD','_applyHue','includes','_planeHandle','_handleButtonKeyDown','_getDomElement','_hue','pow','length','innerWidth','pointerup','keydown','value','_renderSwatch','#000000','9KJqIxW','1955322RIYqVJ','composedPath','rgb','height','define','setPointerCapture','click','preventDefault','left','isFinite','plane','_hueInput','remove','text','_positionPopup','exec','push','_renderChannelInputs','_mode','cmyk','top','_outsidePointerHandler','_plane','change','hsl','Escape','pointermove','_formatColor','label','_closePopup','invalid','valid','blur','name','hsl(','valueChanged','_openPopup','stopPropagation','key','setProperty','disabled','505656ejKUhN','_setColor','cos','_editor','toLowerCase','4369160qlPyJg','oklch(','_alphaInput','sin','alpha','clientX','slice','join','_ignoreNextClick','getAttribute','round','innerHeight','5587976tSVXEB','getBoundingClientRect','28ZKPzoj','cbrt','width','%,\x20','opacity','_handleOutsidePointer','emit','_dragPointerId','_handleButtonClick','_handleButtonPointerDown','_channels','style','_value','2552792gaouUo','newValue','replace','plane-handle','step','max','toggleAttribute','dispatchEvent','readOnly','_setValue','_modeSelect','108xnuEbf','oklch','_applyText','_commitCurrentValue'];a=function(){return av;};return a();}function linearToSrgb(c){const as=r;return c<=0.0031308?12.92*c:1.055*Math[as(0x167)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const at=r;return Math['min'](e,Math['max'](d,Number[at(0x179)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const au=r,e=Math['pow'](0xa,d);return Math[au(0x1a8)](c*e)/e;}customElements[r(0x174)](r(0x146),ColorEditor),customElements['define']('node-projects-color-input',ColorInput);