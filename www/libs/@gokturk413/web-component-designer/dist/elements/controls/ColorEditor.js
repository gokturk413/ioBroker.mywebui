const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x21e))/0x1*(-parseInt(q(0x1c3))/0x2)+parseInt(q(0x203))/0x3+parseInt(q(0x1d5))/0x4*(-parseInt(q(0x222))/0x5)+-parseInt(q(0x23b))/0x6+parseInt(q(0x219))/0x7+-parseInt(q(0x202))/0x8+parseInt(q(0x233))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98e7c));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x1e5),'hsl','cmyk',r(0x1e1),r(0x200)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x220)]=html`
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
  `;[r(0x208)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x253)]=r(0x21c);['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x210)]='rgb';[r(0x1ce)]=0x0;['_plane'];[r(0x214)];['_hueInput'];[r(0x1e8)];['_alphaLabel'];[r(0x20f)];['_channels'];[r(0x1fd)];[r(0x252)]=null;get[r(0x226)](){return this['_value'];}set[r(0x226)](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this[s(0x253)]=this[s(0x236)](),this['_render']();return;}this[s(0x253)]=c??'',this['_render']();}get['mode'](){return this['_mode'];}set['mode'](c){const t=r;modes['includes'](c)&&(this[t(0x210)]=c,this['_value']=this['_formatColor'](),this[t(0x1fa)]());}get['readOnly'](){const u=r;return this[u(0x1c1)](u(0x231));}set['readOnly'](c){const v=r;this[v(0x250)]('readonly',c);}get[r(0x223)](){const w=r;return this[w(0x1c1)]('disabled');}set['disabled'](c){this['toggleAttribute']('disabled',c);}constructor(){const x=r;super(),this[x(0x1dc)]=this[x(0x227)](x(0x1d6)),this[x(0x214)]=this[x(0x227)](x(0x23e)),this['_hueInput']=this[x(0x227)](x(0x225)),this[x(0x1e8)]=this['_getDomElement']('alpha'),this[x(0x1cd)]=this['_getDomElement'](x(0x1ff)),this['_modeSelect']=this[x(0x227)](x(0x1c9)),this[x(0x22a)]=this[x(0x227)](x(0x1dd)),this[x(0x1fd)]=this[x(0x227)](x(0x238));}[r(0x1d0)](){const y=r;this[y(0x1ed)]();const c=this['getAttribute'](y(0x226));if(c!=null)this['value']=c;const d=this['getAttribute'](y(0x1c9));modes['includes'](d)&&(this['_mode']=d,this['_value']=this[y(0x236)]()),this[y(0x1fa)]();}[r(0x1ed)](){const z=r;this[z(0x1dc)]['addEventListener'](z(0x1d9),c=>this['_startPlaneDrag'](c)),this[z(0x1ee)][z(0x24f)]('input',()=>this['_applyHue'](!![])),this['_hueInput'][z(0x24f)]('change',()=>this['_commitCurrentValue']()),this[z(0x1e8)][z(0x24f)]('input',()=>this[z(0x206)](!![])),this['_alphaInput'][z(0x24f)](z(0x24b),()=>this['_commitCurrentValue']()),this[z(0x20f)][z(0x24f)]('change',()=>{const A=z;this[A(0x1c9)]=this['_modeSelect'][A(0x226)],this['_commitCurrentValue']();}),this['_channels']['addEventListener']('input',()=>this['_applyChannelInputs'](!![])),this['_channels']['addEventListener'](z(0x24b),()=>this[z(0x1c8)]()),this['_textInput'][z(0x24f)](z(0x1e6),()=>this[z(0x1d1)]()),this['_textInput']['addEventListener']('change',()=>this['_applyText']()),this[z(0x1fd)]['addEventListener'](z(0x1f4),c=>{const B=z;c[B(0x1db)]==='Enter'&&(this['_applyText'](),this[B(0x1fd)]['blur']());});}['_startPlaneDrag'](c){const C=r;if(this[C(0x1ca)]||this['disabled'])return;this[C(0x252)]=c[C(0x21f)],this['_plane'][C(0x230)](c['pointerId']),this[C(0x1f9)](c,!![]),this[C(0x1dc)]['addEventListener']('pointermove',this['_planePointerMove']),this[C(0x1dc)][C(0x24f)]('pointerup',this[C(0x1ef)]),this[C(0x1dc)]['addEventListener'](C(0x1d8),this['_finishPlaneDrag']),c[C(0x224)]();}['_planePointerMove']=c=>{const D=r;if(c['pointerId']===this[D(0x252)])this[D(0x1f9)](c,!![]);};[r(0x1ef)]=c=>{const E=r;if(c[E(0x21f)]!==this['_dragPointerId'])return;this['_dragPointerId']=null,this[E(0x1dc)][E(0x20d)]('pointermove',this[E(0x1c4)]),this['_plane']['removeEventListener']('pointerup',this['_finishPlaneDrag']),this[E(0x1dc)]['removeEventListener']('pointercancel',this[E(0x1ef)]),this['_commitCurrentValue']();};[r(0x1f9)](c,d){const F=r,e=this[F(0x1dc)][F(0x213)](),f=clamp((c['clientX']-e['left'])/e[F(0x204)],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e['height'],0x0,0x1),h=Number(this[F(0x1ee)][F(0x226)])||0x0;this['_hue']=normalizeHue(h),this[F(0x1c0)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x207)](c){const G=r,d=rgbToHsv(this['_color']),e=Number(this[G(0x1ee)][G(0x226)])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const H=r;this[H(0x1c0)]({...this['_color'],'a':clamp(Number(this[H(0x1e8)]['value'])/0x64,0x0,0x1)},c);}[r(0x22e)](c){const I=r,d=[...this[I(0x22a)]['querySelectorAll'](I(0x1e6))][I(0x23f)]((f,g)=>{const J=I;return f[g[J(0x240)]]=Number(g['value']),f;},{});let e;if(this[I(0x210)]==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[I(0x210)]==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x1d1)](){const K=r,c=this['_textInput'][K(0x226)][K(0x216)]();this[K(0x1fd)][K(0x1e9)]['toggle'](K(0x246),c[K(0x248)]>0x0&&!parseColor(c));}['_applyText'](){const L=r,c=parseColor(this['_textInput'][L(0x226)]);this[L(0x1fd)]['classList']['toggle']('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput']['value'])??this['_mode'],this[L(0x1c0)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const M=r,g=this[M(0x253)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this[M(0x236)](),this[M(0x1fa)](e);if(d)this[M(0x211)][M(0x24e)]({'newValue':this[M(0x253)],'oldValue':g});else this['valueChanged'][M(0x24e)]({'newValue':this['_value'],'oldValue':g});}[r(0x1c8)](){const N=r,c=this[N(0x253)];this[N(0x253)]=this['_formatColor'](),this[N(0x208)]['emit']({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const O=r;if(!this[O(0x1fd)])return;const d=rgbToHsv(this['_color']);this[O(0x1fb)]['setProperty'](O(0x242),String(Math['round'](this[O(0x1ce)]))),this[O(0x1fb)][O(0x1f5)](O(0x201),toCssRgb(this['_color'])),this['style']['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this[O(0x22d)]['g']+',\x20'+this[O(0x22d)]['b']+')'),this[O(0x1fb)]['setProperty']('--rgb-color',this[O(0x22d)]['r']+',\x20'+this[O(0x22d)]['g']+',\x20'+this[O(0x22d)]['b']),this['_planeHandle'][O(0x1fb)][O(0x1be)]=d['s']*0x64+'%',this[O(0x214)]['style']['top']=(0x1-d['v'])*0x64+'%',this['_hueInput'][O(0x226)]=String(Math['round'](this['_hue'])),this[O(0x1e8)]['value']=String(Math[O(0x1eb)](this['_color']['a']*0x64)),this['_alphaLabel']['textContent']=Math[O(0x1eb)](this[O(0x22d)]['a']*0x64)+'%',this[O(0x20f)][O(0x226)]=this['_mode'];if(c)this['_renderChannelInputs']();if(document[O(0x247)]!==this[O(0x1fd)])this['_textInput'][O(0x226)]=this['_value'];this['_textInput']['classList']['remove'](O(0x246));}['_renderChannelInputs'](){const P=r,c=getChannelValues(this[P(0x22d)],this['_mode']);this['_channels']['innerHTML']=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d[P(0x21d)]+P(0x1f2)+d['name']+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d[P(0x21a)]+'\x22\x20step=\x22'+d[P(0x1cf)]+'\x22\x20value=\x22'+d[P(0x226)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[P(0x1f8)]('');}['_formatColor'](){const Q=r;return formatColor(this[Q(0x22d)],this[Q(0x210)]);}[r(0x1cc)](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x253)]='#000000';['_button'];['_popup'];[r(0x255)];[r(0x20c)]=![];[r(0x1fe)]=c=>this[r(0x23d)](c);[r(0x232)]=c=>this[r(0x234)](c);get[r(0x226)](){return this['_value'];}set[r(0x226)](c){const R=r;this[R(0x22c)](c,![]);}get[r(0x1ca)](){const S=r;return this[S(0x1c1)]('readonly');}set[r(0x1ca)](c){const T=r;this['toggleAttribute'](T(0x231),c);}get[r(0x223)](){return this['hasAttribute']('disabled');}set[r(0x223)](c){const U=r;this[U(0x250)](U(0x223),c);if(this[U(0x1de)])this[U(0x1de)]['disabled']=c;}constructor(){const V=r;super(),this[V(0x1de)]=this['_getDomElement'](V(0x1fc));}[r(0x1d0)](){const W=r,c=this[W(0x205)]('value');if(c!=null)this[W(0x22c)](c,![]);this['_button']['disabled']=this[W(0x223)],this[W(0x1de)]['addEventListener']('pointerdown',d=>this[W(0x212)](d)),this[W(0x1de)]['addEventListener'](W(0x1da),d=>this[W(0x215)](d)),this['_button']['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this['_renderSwatch']();}['disconnectedCallback'](){this['_closePopup']();}[r(0x22b)](){const X=r;if(this['readOnly']||this['disabled'])return;if(this[X(0x24d)])this['_closePopup']();else this[X(0x237)]();}[r(0x212)](c){const Y=r;if(c['button']!==0x0)return;this[Y(0x20c)]=!![],this['_togglePopup'](),c['preventDefault'](),c['stopPropagation']();}[r(0x215)](c){const Z=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c['preventDefault'](),c[Z(0x1bf)]();return;}this[Z(0x22b)]();}['_handleButtonKeyDown'](c){const a0=r;if(c[a0(0x1db)]!=='Enter'&&c['key']!=='\x20')return;this[a0(0x22b)](),c['preventDefault'](),c[a0(0x1bf)]();}[r(0x237)](){const a1=r;this[a1(0x24d)]=document['createElement'](a1(0x1f6)),this['_popup']['style'][a1(0x1c6)]=a1(0x228),this[a1(0x24d)][a1(0x1fb)]['zIndex']='100000',this[a1(0x24d)][a1(0x1fb)][a1(0x204)]=a1(0x1ec),this[a1(0x255)]=document[a1(0x221)]('node-projects-color-editor'),this[a1(0x255)]['value']=this['_value'],this['_editor']['valuePreviewChanged']['on'](c=>{const a2=a1;this[a2(0x22c)](c['newValue'],!![]),this[a2(0x229)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a3=a1;this[a3(0x22c)](c['newValue'],!![]),this[a3(0x229)](new Event(a3(0x24b),{'bubbles':!![],'composed':!![]}));}),this[a1(0x24d)]['appendChild'](this['_editor']),document[a1(0x244)]['appendChild'](this[a1(0x24d)]),this[a1(0x1bd)](),window[a1(0x24f)](a1(0x22f),()=>this['_positionPopup'](),{'once':!![]}),window[a1(0x24f)](a1(0x1c7),()=>this[a1(0x1bd)](),{'once':!![],'capture':!![]}),window['addEventListener']('keydown',this[a1(0x232)]),requestAnimationFrame(()=>window['addEventListener'](a1(0x1d9),this['_outsidePointerHandler'],!![]));}[r(0x1bd)](){const a4=r;if(!this[a4(0x24d)])return;const c=this[a4(0x213)](),d=this[a4(0x24d)][a4(0x1c5)]||0x118,e=this['_popup']['offsetHeight']||0x168;let f=c[a4(0x1be)],g=c['bottom']+0x4;if(f+d>window[a4(0x1f0)]-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a4(0x23a)]-e-0x4;this['_popup'][a4(0x1fb)]['left']=Math[a4(0x21a)](0x8,f)+'px',this['_popup'][a4(0x1fb)][a4(0x23a)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a5=r,d=c[a5(0x1f3)]();if(d[a5(0x256)](this)||this[a5(0x24d)]&&d['includes'](this['_popup']))return;this['_closePopup']();}['_handleWindowKey'](c){const a6=r;if(c[a6(0x1db)]===a6(0x1d4))this[a6(0x239)]();}['_closePopup'](){const a7=r;window[a7(0x20d)](a7(0x1d9),this['_outsidePointerHandler'],!![]),window['removeEventListener']('keydown',this['_windowKeyHandler']),this['_popup']?.[a7(0x251)](),this[a7(0x24d)]=null,this[a7(0x255)]=null;}[r(0x22c)](c,d){const a8=r;this['_value']=c??'';if(d)this['setAttribute']('value',this[a8(0x253)]);this[a8(0x241)]();}[r(0x241)](){const a9=r,c=parseColor(this[a9(0x253)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[a9(0x1fb)]['setProperty'](a9(0x201),toCssRgb(c));}}function parseColor(c){const aa=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()===aa(0x1df))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h['green'],'b':h['blue'],'a':h[aa(0x24a)]});return null;}function inferColorMode(c){const ab=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ab(0x20a)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e==='rgba')return'rgb';if(e===ab(0x1cb)||e===ab(0x235))return'hsl';if(e===ab(0x243))return'cmyk';if(e==='oklab')return ab(0x1e1);if(e===ab(0x200))return'oklch';return null;}function normalizeModernColorSyntax(c){const ac=r;return c[ac(0x1d3)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ac(0x1e5),e))[ac(0x1d3)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ac(0x1cb),e));}function normalizeFunctionBody(c,d){const ad=r;if(d['includes'](',')){const h=d[ad(0x249)](',')[ad(0x209)](i=>i[ad(0x216)]());if(h[ad(0x248)]===0x4&&h[0x3][ad(0x1e2)]('%'))h[0x3]=String(Number(h[0x3][ad(0x218)](0x0,-0x1))/0x64);return''+c+(h[ad(0x248)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ad(0x249)]('/')[ad(0x209)](i=>i['trim']()),g=e['split'](/\s+/)[ad(0x254)](Boolean);if(f)g['push'](f[ad(0x1e2)]('%')?String(Number(f[ad(0x218)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ae=r,d=/^#([0-9a-f]{3,8})$/i[ae(0x20a)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[ae(0x248)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const af=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1][af(0x20e)](),[f,g]=d[0x2]['split']('/')[af(0x209)](j=>j[af(0x216)]()),h=f[af(0x1d3)](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[af(0x248)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ag=r,e=round(c['a'],0x3);if(d===ag(0x1e5))return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ag(0x1e0)+Math[ag(0x1eb)](g['h'])+',\x20'+Math[ag(0x1eb)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':ag(0x20b)+Math['round'](g['h'])+',\x20'+Math[ag(0x1eb)](g['s']*0x64)+ag(0x21b)+Math[ag(0x1eb)](g['l']*0x64)+'%,\x20'+e+')';}if(d===ag(0x243)){const h=rgbToCmyk(c),i=Math[ag(0x1eb)](h['c']*0x64)+ag(0x21b)+Math[ag(0x1eb)](h['m']*0x64)+ag(0x21b)+Math['round'](h['y']*0x64)+ag(0x21b)+Math[ag(0x1eb)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':ag(0x1c2)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ag(0x23c)+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ah=r;if(d===ah(0x1e5))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x1eb)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ah(0x1cb)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ah(0x1eb)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ah(0x1eb)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ah(0x1eb)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ah(0x1eb)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ah(0x1eb)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ah(0x257),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[ah(0x1eb)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ai=r;return{'r':Math[ai(0x1eb)](clamp(c['r'],0x0,0xff)),'g':Math[ai(0x1eb)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number[ai(0x1f7)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function a(){const at=['_value','filter','_editor','includes','alpha','_positionPopup','left','stopPropagation','_setColor','hasAttribute','cmyk(','2804JOMUuw','_planePointerMove','offsetWidth','position','scroll','_commitCurrentValue','mode','readOnly','hsl','_syncHueFromColor','_alphaLabel','_hue','step','ready','_validateTextInput','cbrt','replace','Escape','8RYEkFw','plane','cos','pointercancel','pointerdown','click','key','_plane','channels','_button','transparent','hsl(','oklab','endsWith','node-projects-color-editor','min','rgb','input','abs','_alphaInput','classList','define','round','280px','_wireEvents','_hueInput','_finishPlaneDrag','innerWidth','sin','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','composedPath','keydown','setProperty','div','isFinite','join','_applyPlanePointer','_render','style','button','_textInput','_outsidePointerHandler','alpha-label','oklch','--color','3268712AhNDrp','2971599bZpOnH','width','getAttribute','_applyAlpha','_applyHue','valueChanged','map','exec','hsla(','_ignoreNextClick','removeEventListener','toLowerCase','_modeSelect','_mode','valuePreviewChanged','_handleButtonPointerDown','getBoundingClientRect','_planeHandle','_handleButtonClick','trim','sqrt','slice','2529030IbzIDY','max','%,\x20','#000000','label','282pbqeku','pointerId','template','createElement','3073875liUleJ','disabled','preventDefault','hue','value','_getDomElement','fixed','dispatchEvent','_channels','_togglePopup','_setValue','_color','_applyChannelInputs','resize','setPointerCapture','readonly','_windowKeyHandler','12719709xrYimt','_handleWindowKey','hsla','_formatColor','_openPopup','text','_closePopup','top','5376294VzwGIL','\x20/\x20','_handleOutsidePointer','plane-handle','reduce','name','_renderSwatch','--hue','cmyk','body','node-projects-color-input','invalid','activeElement','length','split','opacity','change','pow','_popup','emit','addEventListener','toggleAttribute','remove','_dragPointerId'];a=function(){return at;};return a();}function rgbToHsv(c){const aj=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[aj(0x21a)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ak(0x21a)](e,f,i),k=Math[ak(0x1e4)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const al=r,i=(0x1-Math[al(0x1e7)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const am=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[am(0x21a)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const an=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[an(0x1d2)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ao=r,e=rgbToOklab(d),f=Math[ao(0x217)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ap=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ap(0x1d7)](g),e*Math[ap(0x1f1)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function b(c,d){c=c-0x1bd;const e=a();let f=e[c];return f;}function linearToSrgb(c){const aq=r;return c<=0.0031308?12.92*c:1.055*Math[aq(0x24c)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ar=r;return Math[ar(0x1e4)](e,Math[ar(0x21a)](d,Number[ar(0x1f7)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const as=r,e=Math['pow'](0xa,d);return Math[as(0x1eb)](c*e)/e;}customElements[r(0x1ea)](r(0x1e3),ColorEditor),customElements['define'](r(0x245),ColorInput);