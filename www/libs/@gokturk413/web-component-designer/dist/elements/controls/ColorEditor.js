const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x231))/0x1+-parseInt(q(0x284))/0x2+parseInt(q(0x26b))/0x3+-parseInt(q(0x204))/0x4*(-parseInt(q(0x24c))/0x5)+parseInt(q(0x23c))/0x6+parseInt(q(0x270))/0x7*(-parseInt(q(0x205))/0x8)+-parseInt(q(0x22c))/0x9*(parseInt(q(0x21a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4c0a4));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb','hsl',r(0x26e),r(0x26d),'oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x23f)]=html`
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
  `;[r(0x250)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x266)]=r(0x219);['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0x24a);['_hue']=0x0;[r(0x208)];[r(0x239)];[r(0x27d)];['_alphaInput'];['_alphaLabel'];[r(0x236)];[r(0x274)];['_textInput'];[r(0x251)]=null;get['value'](){return this['_value'];}set[r(0x225)](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[s(0x269)],this[s(0x279)](),this['_value']=this[s(0x283)](),this['_render']();return;}this['_value']=c??'',this[s(0x27a)]();}get[r(0x25f)](){return this['_mode'];}set['mode'](c){const t=r;modes['includes'](c)&&(this[t(0x269)]=c,this['_value']=this['_formatColor'](),this[t(0x27a)]());}get['readOnly'](){const u=r;return this['hasAttribute'](u(0x258));}set['readOnly'](c){const v=r;this[v(0x21b)](v(0x258),c);}get['disabled'](){const w=r;return this[w(0x263)]('disabled');}set[r(0x26c)](c){this['toggleAttribute']('disabled',c);}constructor(){const x=r;super(),this[x(0x208)]=this['_getDomElement'](x(0x222)),this['_planeHandle']=this['_getDomElement'](x(0x272)),this['_hueInput']=this[x(0x243)]('hue'),this[x(0x276)]=this['_getDomElement'](x(0x259)),this['_alphaLabel']=this[x(0x243)](x(0x234)),this[x(0x236)]=this[x(0x243)](x(0x25f)),this['_channels']=this[x(0x243)]('channels'),this['_textInput']=this[x(0x243)]('text');}['ready'](){const y=r;this['_wireEvents']();const c=this['getAttribute']('value');if(c!=null)this['value']=c;const d=this[y(0x232)]('mode');modes[y(0x267)](d)&&(this['_mode']=d,this['_value']=this['_formatColor']()),this['_render']();}['_wireEvents'](){const z=r;this[z(0x208)]['addEventListener']('pointerdown',c=>this['_startPlaneDrag'](c)),this['_hueInput']['addEventListener']('input',()=>this[z(0x1f8)](!![])),this['_hueInput'][z(0x27b)]('change',()=>this[z(0x216)]()),this['_alphaInput']['addEventListener'](z(0x240),()=>this['_applyAlpha'](!![])),this['_alphaInput']['addEventListener'](z(0x230),()=>this[z(0x216)]()),this[z(0x236)][z(0x27b)]('change',()=>{const A=z;this[A(0x25f)]=this['_modeSelect'][A(0x225)],this['_commitCurrentValue']();}),this['_channels'][z(0x27b)]('input',()=>this[z(0x1fb)](!![])),this['_channels'][z(0x27b)]('change',()=>this[z(0x216)]()),this['_textInput']['addEventListener'](z(0x240),()=>this['_validateTextInput']()),this['_textInput'][z(0x27b)]('change',()=>this['_applyText']()),this[z(0x200)][z(0x27b)]('keydown',c=>{const B=z;c[B(0x21d)]===B(0x20e)&&(this['_applyText'](),this[B(0x200)][B(0x212)]());});}['_startPlaneDrag'](c){const C=r;if(this[C(0x22f)]||this[C(0x26c)])return;this['_dragPointerId']=c['pointerId'],this[C(0x208)][C(0x202)](c[C(0x209)]),this[C(0x228)](c,!![]),this['_plane']['addEventListener'](C(0x256),this[C(0x25c)]),this['_plane'][C(0x27b)](C(0x227),this['_finishPlaneDrag']),this['_plane']['addEventListener']('pointercancel',this[C(0x220)]),c['preventDefault']();}[r(0x25c)]=c=>{const D=r;if(c[D(0x209)]===this['_dragPointerId'])this[D(0x228)](c,!![]);};[r(0x220)]=c=>{const E=r;if(c[E(0x209)]!==this['_dragPointerId'])return;this[E(0x251)]=null,this[E(0x208)]['removeEventListener']('pointermove',this[E(0x25c)]),this[E(0x208)]['removeEventListener'](E(0x227),this[E(0x220)]),this[E(0x208)]['removeEventListener'](E(0x229),this[E(0x220)]),this['_commitCurrentValue']();};[r(0x228)](c,d){const F=r,e=this['_plane'][F(0x206)](),f=clamp((c[F(0x253)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c[F(0x1fd)]-e[F(0x22b)])/e['height'],0x0,0x1),h=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(h),this[F(0x26a)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1f8)](c){const G=r,d=rgbToHsv(this[G(0x275)]),e=Number(this['_hueInput'][G(0x225)])||0x0;this['_hue']=normalizeHue(e),this[G(0x26a)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const H=r;this['_setColor']({...this['_color'],'a':clamp(Number(this[H(0x276)][H(0x225)])/0x64,0x0,0x1)},c);}[r(0x1fb)](c){const I=r,d=[...this[I(0x274)]['querySelectorAll']('input')]['reduce']((f,g)=>{const J=I;return f[g[J(0x23d)]]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[I(0x269)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[I(0x269)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[I(0x269)]==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[I(0x26a)](normalizeColor(e),c,![],!![]);}[r(0x20d)](){const K=r,c=this[K(0x200)][K(0x225)]['trim']();this[K(0x200)]['classList'][K(0x237)]('invalid',c['length']>0x0&&!parseColor(c));}['_applyText'](){const L=r,c=parseColor(this['_textInput'][L(0x225)]);this[L(0x200)][L(0x221)][L(0x237)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this[L(0x200)][L(0x225)])??this[L(0x269)],this[L(0x26a)](c,![],!![],!![]);}[r(0x26a)](c,d,e=!![],f=![]){const M=r,g=this[M(0x266)];this[M(0x275)]=normalizeColor(c);if(f)this[M(0x279)]();this['_value']=this['_formatColor'](),this[M(0x27a)](e);if(d)this[M(0x1fc)][M(0x233)]({'newValue':this['_value'],'oldValue':g});else this['valueChanged'][M(0x233)]({'newValue':this[M(0x266)],'oldValue':g});}['_commitCurrentValue'](){const N=r,c=this[N(0x266)];this['_value']=this['_formatColor'](),this['valueChanged'][N(0x233)]({'newValue':this['_value'],'oldValue':c});}[r(0x27a)](c=!![]){const O=r;if(!this['_textInput'])return;const d=rgbToHsv(this['_color']);this['style'][O(0x217)](O(0x1f5),String(Math[O(0x226)](this['_hue']))),this['style']['setProperty']('--color',toCssRgb(this[O(0x275)])),this[O(0x27c)][O(0x217)](O(0x262),'rgb('+this[O(0x275)]['r']+',\x20'+this[O(0x275)]['g']+',\x20'+this[O(0x275)]['b']+')'),this['style'][O(0x217)](O(0x242),this[O(0x275)]['r']+',\x20'+this[O(0x275)]['g']+',\x20'+this[O(0x275)]['b']),this['_planeHandle']['style']['left']=d['s']*0x64+'%',this['_planeHandle'][O(0x27c)]['top']=(0x1-d['v'])*0x64+'%',this[O(0x27d)]['value']=String(Math['round'](this[O(0x261)])),this['_alphaInput']['value']=String(Math['round'](this[O(0x275)]['a']*0x64)),this['_alphaLabel']['textContent']=Math['round'](this[O(0x275)]['a']*0x64)+'%',this[O(0x236)][O(0x225)]=this[O(0x269)];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this[O(0x200)])this[O(0x200)]['value']=this[O(0x266)];this['_textInput']['classList']['remove'](O(0x211));}[r(0x215)](){const P=r,c=getChannelValues(this[P(0x275)],this['_mode']);this[P(0x274)][P(0x218)]=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[P(0x23d)]+P(0x244)+d[P(0x255)]+'\x22\x20max=\x22'+d['max']+'\x22\x20step=\x22'+d['step']+'\x22\x20value=\x22'+d['value']+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')['join']('');}['_formatColor'](){const Q=r;return formatColor(this[Q(0x275)],this[Q(0x269)]);}['_syncHueFromColor'](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x266)]='#000000';['_button'];[r(0x22e)];['_editor'];[r(0x260)]=![];[r(0x20f)]=c=>this['_handleOutsidePointer'](c);[r(0x207)]=c=>this['_handleWindowKey'](c);get[r(0x225)](){return this['_value'];}set['value'](c){const R=r;this[R(0x1f9)](c,![]);}get[r(0x22f)](){const S=r;return this[S(0x263)](S(0x258));}set['readOnly'](c){const T=r;this[T(0x21b)]('readonly',c);}get['disabled'](){return this['hasAttribute']('disabled');}set['disabled'](c){const U=r;this['toggleAttribute'](U(0x26c),c);if(this[U(0x281)])this['_button'][U(0x26c)]=c;}constructor(){const V=r;super(),this['_button']=this[V(0x243)](V(0x223));}[r(0x280)](){const W=r,c=this['getAttribute']('value');if(c!=null)this['_setValue'](c,![]);this[W(0x281)][W(0x26c)]=this['disabled'],this[W(0x281)]['addEventListener']('pointerdown',d=>this[W(0x201)](d)),this[W(0x281)]['addEventListener']('click',d=>this[W(0x22a)](d)),this[W(0x281)][W(0x27b)]('keydown',d=>this['_handleButtonKeyDown'](d)),this['_renderSwatch']();}[r(0x21e)](){this['_closePopup']();}[r(0x282)](){const X=r;if(this['readOnly']||this['disabled'])return;if(this[X(0x22e)])this[X(0x210)]();else this[X(0x273)]();}['_handleButtonPointerDown'](c){const Y=r;if(c[Y(0x223)]!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c[Y(0x245)](),c['stopPropagation']();}[r(0x22a)](c){const Z=r;if(this[Z(0x260)]){this['_ignoreNextClick']=![],c[Z(0x245)](),c[Z(0x27e)]();return;}this[Z(0x282)]();}['_handleButtonKeyDown'](c){const a0=r;if(c['key']!==a0(0x20e)&&c[a0(0x21d)]!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a0(0x27e)]();}[r(0x273)](){const a1=r;this[a1(0x22e)]=document['createElement']('div'),this[a1(0x22e)][a1(0x27c)]['position']='fixed',this['_popup'][a1(0x27c)]['zIndex']=a1(0x238),this['_popup']['style']['width']=a1(0x1fe),this[a1(0x278)]=document['createElement'](a1(0x23a)),this[a1(0x278)][a1(0x225)]=this['_value'],this[a1(0x278)][a1(0x1fc)]['on'](c=>{const a2=a1;this['_setValue'](c[a2(0x20c)],!![]),this[a2(0x214)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a1(0x278)][a1(0x250)]['on'](c=>{const a3=a1;this['_setValue'](c[a3(0x20c)],!![]),this[a3(0x214)](new Event(a3(0x230),{'bubbles':!![],'composed':!![]}));}),this[a1(0x22e)][a1(0x24b)](this['_editor']),document[a1(0x252)]['appendChild'](this['_popup']),this['_positionPopup'](),window['addEventListener']('resize',()=>this['_positionPopup'](),{'once':!![]}),window[a1(0x27b)]('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a1(0x27b)]('keydown',this['_windowKeyHandler']),requestAnimationFrame(()=>window[a1(0x27b)]('pointerdown',this[a1(0x20f)],!![]));}['_positionPopup'](){const a4=r;if(!this[a4(0x22e)])return;const c=this['getBoundingClientRect'](),d=this[a4(0x22e)]['offsetWidth']||0x118,e=this[a4(0x22e)][a4(0x248)]||0x168;let f=c['left'],g=c[a4(0x246)]+0x4;if(f+d>window[a4(0x1f7)]-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a4(0x22b)]-e-0x4;this['_popup']['style']['left']=Math['max'](0x8,f)+'px',this[a4(0x22e)]['style'][a4(0x22b)]=Math[a4(0x22d)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a5=r,d=c['composedPath']();if(d[a5(0x267)](this)||this['_popup']&&d[a5(0x267)](this[a5(0x22e)]))return;this['_closePopup']();}['_handleWindowKey'](c){const a6=r;if(c[a6(0x21d)]==='Escape')this['_closePopup']();}['_closePopup'](){const a7=r;window[a7(0x21f)]('pointerdown',this['_outsidePointerHandler'],!![]),window[a7(0x21f)](a7(0x20a),this[a7(0x207)]),this[a7(0x22e)]?.[a7(0x203)](),this[a7(0x22e)]=null,this['_editor']=null;}[r(0x1f9)](c,d){const a8=r;this[a8(0x266)]=c??'';if(d)this[a8(0x24e)](a8(0x225),this['_value']);this['_renderSwatch']();}[r(0x23b)](){const a9=r,c=parseColor(this[a9(0x266)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[a9(0x27c)]['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const aa=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()===aa(0x213))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h[aa(0x25e)],'g':h[aa(0x25a)],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ab=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ab(0x235)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e===ab(0x24f))return ab(0x24a);if(e===ab(0x224)||e==='hsla')return'hsl';if(e===ab(0x26e))return ab(0x26e);if(e===ab(0x26d))return'oklab';if(e==='oklch')return ab(0x264);return null;}function normalizeModernColorSyntax(c){const ac=r;return c['replace'](/,\s*/g,',')[ac(0x1ff)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ac(0x24a),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ad=r;if(d[ad(0x267)](',')){const h=d[ad(0x26f)](',')['map'](i=>i[ad(0x23e)]());if(h['length']===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[ad(0x271)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d['split']('/')[ad(0x265)](i=>i[ad(0x23e)]()),g=e[ad(0x26f)](/\s+/)[ad(0x249)](Boolean);if(f)g[ad(0x24d)](f[ad(0x1f6)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ae=r,d=/^#([0-9a-f]{3,8})$/i[ae(0x235)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e[ae(0x271)]===0x6||e[ae(0x271)]===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[ae(0x254)](0x2,0x4)),'b':f(e[ae(0x254)](0x4,0x6)),'a':e[ae(0x271)]===0x8?f(e[ae(0x254)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const af=r,d=/^(oklab|oklch)\((.*)\)$/i[af(0x235)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][af(0x26f)]('/')['map'](j=>j[af(0x23e)]()),h=f['replace'](/,/g,'\x20')[af(0x26f)](/\s+/)['filter'](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ag=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ag(0x226)](g['l']*0x64)+'%)':ag(0x25b)+Math['round'](g['h'])+',\x20'+Math[ag(0x226)](g['s']*0x64)+ag(0x1f4)+Math['round'](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+ag(0x1f4)+Math[ag(0x226)](h['m']*0x64)+ag(0x1f4)+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ag(0x257)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ag(0x25d)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ag(0x241)+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ah=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x226)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ah(0x224)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ah(0x226)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ah(0x226)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ah(0x26e)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ah(0x226)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ah(0x226)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x226)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ah(0x26d)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ah(0x259),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ai=r;return{'r':Math[ai(0x226)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const aj=r,i=f*e,j=i*(0x1-Math[aj(0x1fa)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ak(0x22d)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ak(0x1fa)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const al=r,i=(0x1-Math[al(0x1fa)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const am=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[am(0x22d)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const an=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[an(0x20b)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function b(c,d){c=c-0x1f4;const e=a();let f=e[c];return f;}function oklabToRgb(c,d,e){const ao=r,f=Math[ao(0x27f)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[ao(0x27f)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ap=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ap(0x268)](g),e*Math['sin'](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const aq=r;return c<=0.0031308?12.92*c:1.055*Math[aq(0x27f)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ar=r;return Math[ar(0x255)](e,Math['max'](d,Number[ar(0x247)](c)?c:d));}function a(){const as=['cmyk','split','7XqSMlr','length','plane-handle','_openPopup','_channels','_color','_alphaInput','node-projects-color-input','_editor','_syncHueFromColor','_render','addEventListener','style','_hueInput','stopPropagation','pow','ready','_button','_togglePopup','_formatColor','53860ffHoyb','%,\x20','--hue','endsWith','innerWidth','_applyHue','_setValue','abs','_applyChannelInputs','valuePreviewChanged','clientY','280px','replace','_textInput','_handleButtonPointerDown','setPointerCapture','remove','8NyJECP','3076984gppAcj','getBoundingClientRect','_windowKeyHandler','_plane','pointerId','keydown','cbrt','newValue','_validateTextInput','Enter','_outsidePointerHandler','_closePopup','invalid','blur','transparent','dispatchEvent','_renderChannelInputs','_commitCurrentValue','setProperty','innerHTML','#000000','3731350HOaJtZ','toggleAttribute','define','key','disconnectedCallback','removeEventListener','_finishPlaneDrag','classList','plane','button','hsl','value','round','pointerup','_applyPlanePointer','pointercancel','_handleButtonClick','top','9flzSZl','max','_popup','readOnly','change','394534WPSOaF','getAttribute','emit','alpha-label','exec','_modeSelect','toggle','100000','_planeHandle','node-projects-color-editor','_renderSwatch','147612CQfZXZ','name','trim','template','input','\x20/\x20','--rgb-color','_getDomElement','\x22\x20min=\x22','preventDefault','bottom','isFinite','offsetHeight','filter','rgb','appendChild','419695HGfypz','push','setAttribute','rgba','valueChanged','_dragPointerId','body','clientX','slice','min','pointermove','cmyk(','readonly','alpha','green','hsla(','_planePointerMove','oklab(','red','mode','_ignoreNextClick','_hue','--opaque-color','hasAttribute','oklch','map','_value','includes','cos','_mode','_setColor','1527402DItWnx','disabled','oklab'];a=function(){return as;};return a();}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const e=Math['pow'](0xa,d);return Math['round'](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements[r(0x21c)](r(0x277),ColorInput);