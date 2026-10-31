const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x1a2))/0x1+-parseInt(q(0x209))/0x2+parseInt(q(0x197))/0x3+-parseInt(q(0x19a))/0x4+-parseInt(q(0x1f2))/0x5*(-parseInt(q(0x1a4))/0x6)+-parseInt(q(0x1e9))/0x7*(-parseInt(q(0x19c))/0x8)+-parseInt(q(0x20b))/0x9*(-parseInt(q(0x1aa))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa0363));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x188),'cmyk',r(0x1ae),r(0x1f8)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x200)]=new TypedEvent();[r(0x1ee)]=new TypedEvent();[r(0x18d)]=r(0x18e);[r(0x204)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';['_hue']=0x0;[r(0x1f5)];[r(0x1b7)];[r(0x1b5)];['_alphaInput'];['_alphaLabel'];[r(0x21d)];[r(0x19e)];['_textInput'];['_dragPointerId']=null;get['value'](){const s=r;return this[s(0x18d)];}set[r(0x1bd)](c){const t=r,d=parseColor(c);if(d){this[t(0x204)]=d,this[t(0x20d)]=inferColorMode(c)??this[t(0x20d)],this[t(0x1c9)](),this[t(0x18d)]=this['_formatColor'](),this[t(0x1cc)]();return;}this['_value']=c??'',this[t(0x1cc)]();}get['mode'](){const u=r;return this[u(0x20d)];}set['mode'](c){const v=r;modes[v(0x21a)](c)&&(this[v(0x20d)]=c,this[v(0x18d)]=this['_formatColor'](),this[v(0x1cc)]());}get['readOnly'](){const w=r;return this['hasAttribute'](w(0x198));}set[r(0x1cd)](c){this['toggleAttribute']('readonly',c);}get['disabled'](){const x=r;return this[x(0x220)]('disabled');}set[r(0x1e5)](c){const y=r;this[y(0x1b8)](y(0x1e5),c);}constructor(){const z=r;super(),this[z(0x1f5)]=this[z(0x1de)](z(0x1fd)),this[z(0x1b7)]=this[z(0x1de)](z(0x207)),this['_hueInput']=this[z(0x1de)]('hue'),this[z(0x1a6)]=this['_getDomElement']('alpha'),this['_alphaLabel']=this['_getDomElement'](z(0x1e6)),this['_modeSelect']=this['_getDomElement']('mode'),this[z(0x19e)]=this[z(0x1de)]('channels'),this['_textInput']=this['_getDomElement'](z(0x18a));}[r(0x206)](){const A=r;this['_wireEvents']();const c=this[A(0x1a5)](A(0x1bd));if(c!=null)this[A(0x1bd)]=c;const d=this[A(0x1a5)](A(0x1b9));modes[A(0x21a)](d)&&(this['_mode']=d,this[A(0x18d)]=this['_formatColor']()),this[A(0x1cc)]();}[r(0x1ce)](){const B=r;this[B(0x1f5)][B(0x189)]('pointerdown',c=>this['_startPlaneDrag'](c)),this[B(0x1b5)]['addEventListener']('input',()=>this['_applyHue'](!![])),this[B(0x1b5)][B(0x189)](B(0x1be),()=>this[B(0x1c1)]()),this['_alphaInput'][B(0x189)]('input',()=>this['_applyAlpha'](!![])),this[B(0x1a6)][B(0x189)]('change',()=>this[B(0x1c1)]()),this['_modeSelect']['addEventListener']('change',()=>{const C=B;this[C(0x1b9)]=this[C(0x21d)]['value'],this['_commitCurrentValue']();}),this['_channels'][B(0x189)](B(0x1d0),()=>this[B(0x1e7)](!![])),this[B(0x19e)][B(0x189)](B(0x1be),()=>this[B(0x1c1)]()),this['_textInput'][B(0x189)]('input',()=>this[B(0x1f1)]()),this[B(0x1ff)]['addEventListener']('change',()=>this[B(0x1b3)]()),this[B(0x1ff)][B(0x189)](B(0x1e3),c=>{const D=B;c[D(0x1d8)]==='Enter'&&(this['_applyText'](),this['_textInput'][D(0x187)]());});}[r(0x216)](c){const E=r;if(this[E(0x1cd)]||this['disabled'])return;this[E(0x221)]=c['pointerId'],this[E(0x1f5)][E(0x1df)](c['pointerId']),this['_applyPlanePointer'](c,!![]),this['_plane']['addEventListener']('pointermove',this['_planePointerMove']),this[E(0x1f5)][E(0x189)](E(0x1c7),this[E(0x212)]),this['_plane']['addEventListener'](E(0x1a8),this['_finishPlaneDrag']),c[E(0x1a7)]();}['_planePointerMove']=c=>{const F=r;if(c['pointerId']===this[F(0x221)])this[F(0x1ad)](c,!![]);};[r(0x212)]=c=>{const G=r;if(c['pointerId']!==this['_dragPointerId'])return;this['_dragPointerId']=null,this[G(0x1f5)]['removeEventListener'](G(0x20c),this['_planePointerMove']),this[G(0x1f5)][G(0x1c0)](G(0x1c7),this['_finishPlaneDrag']),this[G(0x1f5)]['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const H=r,e=this['_plane'][H(0x1a9)](),f=clamp((c['clientX']-e[H(0x20f)])/e['width'],0x0,0x1),g=clamp(0x1-(c[H(0x21c)]-e['top'])/e[H(0x1fa)],0x0,0x1),h=Number(this['_hueInput'][H(0x1bd)])||0x0;this[H(0x210)]=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1c2)](c){const I=r,d=rgbToHsv(this['_color']),e=Number(this[I(0x1b5)][I(0x1bd)])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const J=r;this[J(0x1eb)]({...this['_color'],'a':clamp(Number(this[J(0x1a6)][J(0x1bd)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this['_channels']['querySelectorAll'](K(0x1d0))]['reduce']((f,g)=>{return f[g['name']]=Number(g['value']),f;},{});let e;if(this[K(0x20d)]===K(0x1e2))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[K(0x20d)]===K(0x188))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[K(0x20d)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===K(0x1ae))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[K(0x1e4)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x1f1)](){const L=r,c=this['_textInput'][L(0x1bd)]['trim']();this[L(0x1ff)]['classList'][L(0x1c8)]('invalid',c[L(0x1a0)]>0x0&&!parseColor(c));}[r(0x1b3)](){const M=r,c=parseColor(this['_textInput']['value']);this[M(0x1ff)]['classList']['toggle'](M(0x18b),!c);if(!c)return;this[M(0x20d)]=inferColorMode(this[M(0x1ff)]['value'])??this[M(0x20d)],this[M(0x1eb)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this['_value'];this['_color']=normalizeColor(c);if(f)this[N(0x1c9)]();this['_value']=this[N(0x1e0)](),this['_render'](e);if(d)this['valuePreviewChanged'][N(0x1c5)]({'newValue':this[N(0x18d)],'oldValue':g});else this['valueChanged'][N(0x1c5)]({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this['_value'];this['_value']=this[O(0x1e0)](),this[O(0x200)][O(0x1c5)]({'newValue':this[O(0x18d)],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this['_color']);this[P(0x1bc)][P(0x1e8)](P(0x202),String(Math['round'](this['_hue']))),this[P(0x1bc)][P(0x1e8)](P(0x1f6),toCssRgb(this[P(0x204)])),this['style']['setProperty']('--opaque-color',P(0x1d1)+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x204)]['b']+')'),this[P(0x1bc)][P(0x1e8)](P(0x1f9),this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x204)]['b']),this[P(0x1b7)]['style'][P(0x20f)]=d['s']*0x64+'%',this[P(0x1b7)]['style'][P(0x1f0)]=(0x1-d['v'])*0x64+'%',this[P(0x1b5)]['value']=String(Math[P(0x1ec)](this['_hue'])),this[P(0x1a6)][P(0x1bd)]=String(Math['round'](this['_color']['a']*0x64)),this[P(0x191)]['textContent']=Math['round'](this['_color']['a']*0x64)+'%',this['_modeSelect'][P(0x1bd)]=this['_mode'];if(c)this[P(0x1dc)]();if(document[P(0x1b4)]!==this['_textInput'])this[P(0x1ff)][P(0x1bd)]=this[P(0x18d)];this['_textInput']['classList'][P(0x1d2)]('invalid');}['_renderChannelInputs'](){const Q=r,c=getChannelValues(this['_color'],this['_mode']);this['_channels']['innerHTML']=c['map'](d=>Q(0x1ab)+d['label']+Q(0x1ef)+d['name']+'\x22\x20min=\x22'+d[Q(0x18f)]+'\x22\x20max=\x22'+d[Q(0x219)]+Q(0x194)+d['step']+Q(0x193)+d[Q(0x1bd)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[Q(0x1dd)]('');}['_formatColor'](){const R=r;return formatColor(this['_color'],this[R(0x20d)]);}[r(0x1c9)](){const S=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[S(0x210)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x1b2)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;[r(0x18d)]='#000000';[r(0x1c6)];[r(0x190)];['_editor'];['_ignoreNextClick']=![];['_outsidePointerHandler']=c=>this['_handleOutsidePointer'](c);['_windowKeyHandler']=c=>this[r(0x20a)](c);get[r(0x1bd)](){const T=r;return this[T(0x18d)];}set[r(0x1bd)](c){this['_setValue'](c,![]);}get[r(0x1cd)](){const U=r;return this[U(0x220)](U(0x198));}set['readOnly'](c){this['toggleAttribute']('readonly',c);}get[r(0x1e5)](){const V=r;return this[V(0x220)]('disabled');}set['disabled'](c){const W=r;this['toggleAttribute']('disabled',c);if(this[W(0x1c6)])this['_button'][W(0x1e5)]=c;}constructor(){const X=r;super(),this[X(0x1c6)]=this[X(0x1de)]('button');}[r(0x206)](){const Y=r,c=this['getAttribute']('value');if(c!=null)this['_setValue'](c,![]);this[Y(0x1c6)][Y(0x1e5)]=this[Y(0x1e5)],this[Y(0x1c6)]['addEventListener'](Y(0x1d3),d=>this[Y(0x215)](d)),this[Y(0x1c6)]['addEventListener'](Y(0x19b),d=>this[Y(0x186)](d)),this[Y(0x1c6)][Y(0x189)](Y(0x1e3),d=>this['_handleButtonKeyDown'](d)),this[Y(0x217)]();}[r(0x21e)](){this['_closePopup']();}['_togglePopup'](){const Z=r;if(this['readOnly']||this['disabled'])return;if(this[Z(0x190)])this[Z(0x1a3)]();else this[Z(0x1ed)]();}['_handleButtonPointerDown'](c){const a0=r;if(c['button']!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c['preventDefault'](),c[a0(0x1cf)]();}[r(0x186)](c){const a1=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c[a1(0x1a7)](),c['stopPropagation']();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){const a2=r;if(c['key']!=='Enter'&&c[a2(0x1d8)]!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a2(0x1cf)]();}['_openPopup'](){const a3=r;this[a3(0x190)]=document[a3(0x1b0)](a3(0x1fe)),this[a3(0x190)][a3(0x1bc)]['position']='fixed',this['_popup'][a3(0x1bc)][a3(0x203)]='100000',this[a3(0x190)][a3(0x1bc)]['width']='280px',this[a3(0x213)]=document[a3(0x1b0)](a3(0x21b)),this[a3(0x213)]['value']=this['_value'],this['_editor'][a3(0x1ee)]['on'](c=>{const a4=a3;this['_setValue'](c['newValue'],!![]),this[a4(0x208)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a3(0x213)][a3(0x200)]['on'](c=>{const a5=a3;this['_setValue'](c['newValue'],!![]),this[a5(0x208)](new Event(a5(0x1be),{'bubbles':!![],'composed':!![]}));}),this[a3(0x190)]['appendChild'](this[a3(0x213)]),document[a3(0x211)][a3(0x1b1)](this['_popup']),this['_positionPopup'](),window['addEventListener']('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener'](a3(0x192),()=>this[a3(0x1ea)](),{'once':!![],'capture':!![]}),window['addEventListener'](a3(0x1e3),this[a3(0x1bb)]),requestAnimationFrame(()=>window[a3(0x189)](a3(0x1d3),this[a3(0x205)],!![]));}[r(0x1ea)](){const a6=r;if(!this['_popup'])return;const c=this['getBoundingClientRect'](),d=this['_popup'][a6(0x1ca)]||0x118,e=this[a6(0x190)]['offsetHeight']||0x168;let f=c['left'],g=c['bottom']+0x4;if(f+d>window['innerWidth']-0x8)f=window[a6(0x195)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c['top']-e-0x4;this['_popup'][a6(0x1bc)]['left']=Math['max'](0x8,f)+'px',this['_popup']['style'][a6(0x1f0)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a7=r,d=c['composedPath']();if(d['includes'](this)||this['_popup']&&d['includes'](this[a7(0x190)]))return;this['_closePopup']();}['_handleWindowKey'](c){const a8=r;if(c[a8(0x1d8)]===a8(0x19f))this[a8(0x1a3)]();}['_closePopup'](){const a9=r;window['removeEventListener'](a9(0x1d3),this['_outsidePointerHandler'],!![]),window['removeEventListener'](a9(0x1e3),this[a9(0x1bb)]),this[a9(0x190)]?.['remove'](),this[a9(0x190)]=null,this[a9(0x213)]=null;}[r(0x1f4)](c,d){const aa=r;this[aa(0x18d)]=c??'';if(d)this[aa(0x1a1)]('value',this[aa(0x18d)]);this[aa(0x217)]();}[r(0x217)](){const ab=r,c=parseColor(this[ab(0x18d)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ab(0x1bc)]['setProperty'](ab(0x1f6),toCssRgb(c));}}function b(c,d){c=c-0x186;const e=a();let f=e[c];return f;}function parseColor(c){const ac=r;if(!c)return null;const d=c['trim']();if(d[ac(0x1d5)]()===ac(0x1db))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ac(0x1c4)](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h[ac(0x196)],'b':h[ac(0x1d7)],'a':h[ac(0x19d)]});return null;}function inferColorMode(c){const ad=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ad(0x1d5)]();if(e==='rgb'||e===ad(0x18c))return ad(0x1e2);if(e===ad(0x188)||e==='hsla')return ad(0x188);if(e==='cmyk')return'cmyk';if(e==='oklab')return'oklab';if(e===ad(0x1f8))return'oklch';return null;}function normalizeModernColorSyntax(c){const ae=r;return c[ae(0x1af)](/,\s*/g,',')[ae(0x1af)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ae(0x1e2),e))[ae(0x1af)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const af=r;if(d['includes'](',')){const h=d['split'](',')['map'](i=>i['trim']());if(h[af(0x1a0)]===0x4&&h[0x3][af(0x1bf)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[af(0x1a0)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[af(0x1d4)]('/')[af(0x1ba)](i=>i['trim']()),g=e['split'](/\s+/)['filter'](Boolean);if(f)g['push'](f['endsWith']('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ag=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[ag(0x1a0)]===0x3||e[ag(0x1a0)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ag(0x1a0)]===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e['length']===0x8)return normalizeColor({'r':f(e[ag(0x21f)](0x0,0x2)),'g':f(e[ag(0x21f)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e['length']===0x8?f(e[ag(0x21f)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ah=r,d=/^(oklab|oklch)\((.*)\)$/i[ah(0x218)](c);if(!d)return null;const e=d[0x1][ah(0x1d5)](),[f,g]=d[0x2]['split']('/')[ah(0x1ba)](j=>j[ah(0x214)]()),h=f[ah(0x1af)](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[ah(0x1a0)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ai=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ai(0x1d1)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ai(0x1da)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===ai(0x188)){const g=rgbToHsl(c);return c['a']>=0x1?ai(0x1f7)+Math[ai(0x1ec)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ai(0x1ec)](g['l']*0x64)+'%)':ai(0x1d9)+Math['round'](g['h'])+',\x20'+Math[ai(0x1ec)](g['s']*0x64)+ai(0x1fb)+Math[ai(0x1ec)](g['l']*0x64)+'%,\x20'+e+')';}if(d===ai(0x1fc)){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+ai(0x1fb)+Math['round'](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ai(0x1d6)+i+')':ai(0x1d6)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ai(0x1e1)+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ai(0x1e1)+e)+')';}function getChannelValues(c,d){const aj=r;if(d===aj(0x1e2))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[aj(0x1ec)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===aj(0x188)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[aj(0x1ec)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[aj(0x1ec)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[aj(0x1ec)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===aj(0x1fc)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[aj(0x1ec)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[aj(0x1ec)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[aj(0x1ec)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===aj(0x1ae)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':aj(0x1b6),'name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ak=r;return{'r':Math[ak(0x1ec)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math[ak(0x1ec)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[ak(0x20e)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const al=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[al(0x18f)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const am=r,i=f*e,j=i*(0x1-Math[am(0x1ac)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function a(){const aw=['min','_popup','_alphaLabel','scroll','\x22\x20value=\x22','\x22\x20step=\x22','innerWidth','green','2405121haAOdl','readonly','cos','3377284IWHjXP','click','3456216gtqpbk','opacity','_channels','Escape','length','setAttribute','755375KrXeQD','_closePopup','161286LNWVHr','getAttribute','_alphaInput','preventDefault','pointercancel','getBoundingClientRect','20lMOGIf','\x0a\x20\x20\x20\x20\x20\x20<label>','abs','_applyPlanePointer','oklab','replace','createElement','appendChild','template','_applyText','activeElement','_hueInput','Alpha','_planeHandle','toggleAttribute','mode','map','_windowKeyHandler','style','value','change','endsWith','removeEventListener','_commitCurrentValue','_applyHue','sqrt','toColorObject','emit','_button','pointerup','toggle','_syncHueFromColor','offsetWidth','node-projects-color-input','_render','readOnly','_wireEvents','stopPropagation','input','rgb(','remove','pointerdown','split','toLowerCase','cmyk(','blue','key','hsla(','rgba(','transparent','_renderChannelInputs','join','_getDomElement','setPointerCapture','_formatColor','\x20/\x20','rgb','keydown','alpha','disabled','alpha-label','_applyChannelInputs','setProperty','21YMPXVJ','_positionPopup','_setColor','round','_openPopup','valuePreviewChanged','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','top','_validateTextInput','65tqROaF','define','_setValue','_plane','--color','hsl(','oklch','--rgb-color','height','%,\x20','cmyk','plane','div','_textInput','valueChanged','pow','--hue','zIndex','_color','_outsidePointerHandler','ready','plane-handle','dispatchEvent','2004168OsTpRr','_handleWindowKey','3648447nHCQWD','pointermove','_mode','isFinite','left','_hue','body','_finishPlaneDrag','_editor','trim','_handleButtonPointerDown','_startPlaneDrag','_renderSwatch','exec','max','includes','node-projects-color-editor','clientY','_modeSelect','disconnectedCallback','slice','hasAttribute','_dragPointerId','_handleButtonClick','blur','hsl','addEventListener','text','invalid','rgba','_value','#000000'];a=function(){return aw;};return a();}function rgbToHsl(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[an(0x219)](e,f,i),k=Math[an(0x18f)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ao=r,i=(0x1-Math[ao(0x1ac)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ap=r,f=Math[ap(0x201)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[ap(0x201)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const aq=r,e=rgbToOklab(d),f=Math[aq(0x1c3)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ar=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ar(0x199)](g),e*Math['sin'](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const as=r;return c<=0.0031308?12.92*c:1.055*Math[as(0x201)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const at=r;return c['endsWith']('%')?Number(c[at(0x21f)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const au=r;return Math[au(0x18f)](e,Math['max'](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const av=r,e=Math['pow'](0xa,d);return Math[av(0x1ec)](c*e)/e;}customElements[r(0x1f3)]('node-projects-color-editor',ColorEditor),customElements[r(0x1f3)](r(0x1cb),ColorInput);