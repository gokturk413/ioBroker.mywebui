const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x23e))/0x1*(-parseInt(q(0x23f))/0x2)+parseInt(q(0x1f6))/0x3+parseInt(q(0x226))/0x4+-parseInt(q(0x24b))/0x5+-parseInt(q(0x221))/0x6+-parseInt(q(0x1ff))/0x7*(parseInt(q(0x1f3))/0x8)+parseInt(q(0x26f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3bab6));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x261),r(0x242),'cmyk',r(0x21a),r(0x23a)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x212)]=css`
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
  `;[r(0x270)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x280)]=r(0x20f);['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x230)]='rgb';[r(0x272)]=0x0;['_plane'];[r(0x229)];['_hueInput'];[r(0x1f0)];[r(0x1f9)];['_modeSelect'];[r(0x232)];['_textInput'];['_dragPointerId']=null;get[r(0x255)](){const s=r;return this[s(0x280)];}set['value'](c){const t=r,d=parseColor(c);if(d){this[t(0x20b)]=d,this[t(0x230)]=inferColorMode(c)??this[t(0x230)],this['_syncHueFromColor'](),this['_value']=this[t(0x207)](),this[t(0x276)]();return;}this['_value']=c??'',this['_render']();}get[r(0x268)](){return this['_mode'];}set[r(0x268)](c){const u=r;modes[u(0x1f2)](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this[u(0x276)]());}get[r(0x256)](){const v=r;return this[v(0x215)](v(0x24f));}set['readOnly'](c){const w=r;this[w(0x210)]('readonly',c);}get['disabled'](){const x=r;return this['hasAttribute'](x(0x23c));}set['disabled'](c){const y=r;this[y(0x210)](y(0x23c),c);}constructor(){const z=r;super(),this['_plane']=this['_getDomElement']('plane'),this['_planeHandle']=this['_getDomElement'](z(0x200)),this[z(0x243)]=this[z(0x257)](z(0x1f4)),this['_alphaInput']=this['_getDomElement']('alpha'),this[z(0x1f9)]=this['_getDomElement'](z(0x259)),this['_modeSelect']=this[z(0x257)](z(0x268)),this[z(0x232)]=this[z(0x257)]('channels'),this[z(0x222)]=this['_getDomElement']('text');}['ready'](){const A=r;this['_wireEvents']();const c=this[A(0x27d)]('value');if(c!=null)this[A(0x255)]=c;const d=this[A(0x27d)]('mode');modes['includes'](d)&&(this[A(0x230)]=d,this['_value']=this['_formatColor']()),this['_render']();}['_wireEvents'](){const B=r;this[B(0x22f)]['addEventListener']('pointerdown',c=>this[B(0x250)](c)),this[B(0x243)][B(0x246)](B(0x209),()=>this[B(0x22e)](!![])),this[B(0x243)]['addEventListener']('change',()=>this[B(0x20a)]()),this[B(0x1f0)]['addEventListener']('input',()=>this['_applyAlpha'](!![])),this['_alphaInput'][B(0x246)](B(0x25a),()=>this['_commitCurrentValue']()),this['_modeSelect'][B(0x246)]('change',()=>{const C=B;this[C(0x268)]=this[C(0x1fd)]['value'],this['_commitCurrentValue']();}),this['_channels'][B(0x246)](B(0x209),()=>this[B(0x251)](!![])),this[B(0x232)]['addEventListener'](B(0x25a),()=>this['_commitCurrentValue']()),this['_textInput'][B(0x246)]('input',()=>this[B(0x203)]()),this[B(0x222)][B(0x246)](B(0x25a),()=>this['_applyText']()),this['_textInput'][B(0x246)](B(0x220),c=>{const D=B;c['key']==='Enter'&&(this['_applyText'](),this['_textInput'][D(0x245)]());});}['_startPlaneDrag'](c){const E=r;if(this[E(0x256)]||this['disabled'])return;this['_dragPointerId']=c[E(0x213)],this[E(0x22f)]['setPointerCapture'](c['pointerId']),this['_applyPlanePointer'](c,!![]),this['_plane'][E(0x246)]('pointermove',this[E(0x235)]),this['_plane']['addEventListener']('pointerup',this[E(0x201)]),this[E(0x22f)][E(0x246)](E(0x22c),this['_finishPlaneDrag']),c['preventDefault']();}[r(0x235)]=c=>{const F=r;if(c['pointerId']===this['_dragPointerId'])this[F(0x258)](c,!![]);};[r(0x201)]=c=>{const G=r;if(c[G(0x213)]!==this['_dragPointerId'])return;this[G(0x26b)]=null,this[G(0x22f)][G(0x233)]('pointermove',this['_planePointerMove']),this[G(0x22f)]['removeEventListener']('pointerup',this['_finishPlaneDrag']),this[G(0x22f)]['removeEventListener']('pointercancel',this[G(0x201)]),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const H=r,e=this[H(0x22f)][H(0x25f)](),f=clamp((c[H(0x218)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e[H(0x22a)])/e[H(0x1f1)],0x0,0x1),h=Number(this[H(0x243)][H(0x255)])||0x0;this['_hue']=normalizeHue(h),this[H(0x217)]({...hsvToRgb(h,f,g),'a':this[H(0x20b)]['a']},d);}['_applyHue'](c){const I=r,d=rgbToHsv(this[I(0x20b)]),e=Number(this[I(0x243)]['value'])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[I(0x20b)]['a']},c);}['_applyAlpha'](c){const J=r;this[J(0x217)]({...this[J(0x20b)],'a':clamp(Number(this[J(0x1f0)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const L=r,d=[...this['_channels']['querySelectorAll']('input')]['reduce']((f,g)=>{const K=b;return f[g['name']]=Number(g[K(0x255)]),f;},{});let e;if(this[L(0x230)]==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[L(0x230)]===L(0x242))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[L(0x230)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[L(0x230)]===L(0x21a))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[L(0x20c)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[L(0x217)](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const M=r,c=this['_textInput'][M(0x255)][M(0x266)]();this['_textInput']['classList'][M(0x24e)]('invalid',c[M(0x278)]>0x0&&!parseColor(c));}[r(0x26d)](){const N=r,c=parseColor(this[N(0x222)]['value']);this['_textInput']['classList']['toggle'](N(0x231),!c);if(!c)return;this['_mode']=inferColorMode(this[N(0x222)]['value'])??this['_mode'],this[N(0x217)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const O=r,g=this['_value'];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this[O(0x280)]=this['_formatColor'](),this[O(0x276)](e);if(d)this['valuePreviewChanged'][O(0x21d)]({'newValue':this['_value'],'oldValue':g});else this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const P=r,c=this['_value'];this[P(0x280)]=this[P(0x207)](),this[P(0x270)][P(0x21d)]({'newValue':this['_value'],'oldValue':c});}[r(0x276)](c=!![]){const Q=r;if(!this['_textInput'])return;const d=rgbToHsv(this[Q(0x20b)]);this[Q(0x212)]['setProperty']('--hue',String(Math['round'](this[Q(0x272)]))),this['style']['setProperty'](Q(0x20d),toCssRgb(this[Q(0x20b)])),this[Q(0x212)]['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this[Q(0x20b)]['g']+',\x20'+this['_color']['b']+')'),this['style']['setProperty']('--rgb-color',this['_color']['r']+',\x20'+this[Q(0x20b)]['g']+',\x20'+this['_color']['b']),this['_planeHandle']['style']['left']=d['s']*0x64+'%',this['_planeHandle'][Q(0x212)][Q(0x22a)]=(0x1-d['v'])*0x64+'%',this[Q(0x243)]['value']=String(Math['round'](this[Q(0x272)])),this['_alphaInput']['value']=String(Math[Q(0x262)](this['_color']['a']*0x64)),this['_alphaLabel'][Q(0x224)]=Math['round'](this[Q(0x20b)]['a']*0x64)+'%',this[Q(0x1fd)][Q(0x255)]=this['_mode'];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this[Q(0x222)])this[Q(0x222)]['value']=this['_value'];this['_textInput']['classList'][Q(0x241)](Q(0x231));}[r(0x25e)](){const R=r,c=getChannelValues(this['_color'],this[R(0x230)]);this[R(0x232)][R(0x27a)]=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d[R(0x263)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+'\x22\x20min=\x22'+d['min']+R(0x1f5)+d['max']+'\x22\x20step=\x22'+d[R(0x277)]+'\x22\x20value=\x22'+d['value']+R(0x26e))[R(0x204)]('');}[r(0x207)](){const S=r;return formatColor(this[S(0x20b)],this['_mode']);}['_syncHueFromColor'](){const T=r,c=rgbToHsv(this[T(0x20b)]);if(c['s']>epsilon&&c['v']>epsilon)this[T(0x272)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x212)]=css`
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
  `;[r(0x280)]=r(0x20f);[r(0x22d)];['_popup'];[r(0x25d)];[r(0x248)]=![];['_outsidePointerHandler']=c=>this[r(0x228)](c);[r(0x269)]=c=>this[r(0x238)](c);get['value'](){const U=r;return this[U(0x280)];}set[r(0x255)](c){this['_setValue'](c,![]);}get[r(0x256)](){const V=r;return this[V(0x215)](V(0x24f));}set[r(0x256)](c){const W=r;this[W(0x210)]('readonly',c);}get['disabled'](){const X=r;return this['hasAttribute'](X(0x23c));}set[r(0x23c)](c){const Y=r;this['toggleAttribute'](Y(0x23c),c);if(this['_button'])this[Y(0x22d)][Y(0x23c)]=c;}constructor(){const Z=r;super(),this[Z(0x22d)]=this['_getDomElement']('button');}[r(0x279)](){const a0=r,c=this['getAttribute']('value');if(c!=null)this[a0(0x1fe)](c,![]);this['_button'][a0(0x23c)]=this[a0(0x23c)],this['_button'][a0(0x246)]('pointerdown',d=>this['_handleButtonPointerDown'](d)),this[a0(0x22d)]['addEventListener']('click',d=>this['_handleButtonClick'](d)),this['_button'][a0(0x246)]('keydown',d=>this['_handleButtonKeyDown'](d)),this[a0(0x21b)]();}[r(0x225)](){const a1=r;this[a1(0x24d)]();}[r(0x27c)](){const a2=r;if(this['readOnly']||this[a2(0x23c)])return;if(this['_popup'])this['_closePopup']();else this[a2(0x252)]();}['_handleButtonPointerDown'](c){const a3=r;if(c[a3(0x219)]!==0x0)return;this[a3(0x248)]=!![],this[a3(0x27c)](),c['preventDefault'](),c[a3(0x274)]();}['_handleButtonClick'](c){const a4=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c['preventDefault'](),c[a4(0x274)]();return;}this[a4(0x27c)]();}[r(0x1fc)](c){const a5=r;if(c['key']!==a5(0x21e)&&c[a5(0x267)]!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a5(0x274)]();}['_openPopup'](){const a6=r;this[a6(0x206)]=document[a6(0x260)]('div'),this['_popup']['style']['position']='fixed',this['_popup']['style']['zIndex']='100000',this['_popup'][a6(0x212)]['width']=a6(0x237),this[a6(0x25d)]=document['createElement'](a6(0x211)),this['_editor']['value']=this['_value'],this[a6(0x25d)]['valuePreviewChanged']['on'](c=>{const a7=a6;this[a7(0x1fe)](c[a7(0x1fa)],!![]),this['dispatchEvent'](new Event(a7(0x209),{'bubbles':!![],'composed':!![]}));}),this[a6(0x25d)]['valueChanged']['on'](c=>{const a8=a6;this['_setValue'](c[a8(0x1fa)],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this[a6(0x206)]['appendChild'](this[a6(0x25d)]),document[a6(0x20e)][a6(0x264)](this[a6(0x206)]),this['_positionPopup'](),window[a6(0x246)](a6(0x25b),()=>this[a6(0x21f)](),{'once':!![]}),window[a6(0x246)]('scroll',()=>this[a6(0x21f)](),{'once':!![],'capture':!![]}),window[a6(0x246)](a6(0x220),this[a6(0x269)]),requestAnimationFrame(()=>window[a6(0x246)](a6(0x223),this['_outsidePointerHandler'],!![]));}['_positionPopup'](){const a9=r;if(!this[a9(0x206)])return;const c=this[a9(0x25f)](),d=this['_popup'][a9(0x1f8)]||0x118,e=this['_popup'][a9(0x1fb)]||0x168;let f=c['left'],g=c[a9(0x253)]+0x4;if(f+d>window[a9(0x25c)]-0x8)f=window[a9(0x25c)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a9(0x22a)]-e-0x4;this['_popup'][a9(0x212)]['left']=Math[a9(0x271)](0x8,f)+'px',this[a9(0x206)]['style']['top']=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const aa=r,d=c['composedPath']();if(d[aa(0x1f2)](this)||this['_popup']&&d[aa(0x1f2)](this[aa(0x206)]))return;this[aa(0x24d)]();}[r(0x238)](c){const ab=r;if(c[ab(0x267)]===ab(0x265))this['_closePopup']();}['_closePopup'](){const ac=r;window['removeEventListener'](ac(0x223),this[ac(0x227)],!![]),window[ac(0x233)](ac(0x220),this['_windowKeyHandler']),this['_popup']?.[ac(0x241)](),this['_popup']=null,this['_editor']=null;}['_setValue'](c,d){const ad=r;this['_value']=c??'';if(d)this['setAttribute']('value',this['_value']);this[ad(0x21b)]();}['_renderSwatch'](){const ae=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ae(0x212)][ae(0x247)]('--color',toCssRgb(c));}}function parseColor(c){const af=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[af(0x22b)](g);if(h?.[af(0x21c)])return normalizeColor({'r':h['red'],'g':h[af(0x24c)],'b':h[af(0x24a)],'a':h['opacity']});return null;}function inferColorMode(c){const ag=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ag(0x240)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e==='rgba')return ag(0x261);if(e==='hsl'||e===ag(0x202))return'hsl';if(e===ag(0x216))return ag(0x216);if(e===ag(0x21a))return'oklab';if(e===ag(0x23a))return ag(0x23a);return null;}function normalizeModernColorSyntax(c){const ah=r;return c[ah(0x208)](/,\s*/g,',')[ah(0x208)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ah(0x261),e))[ah(0x208)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ah(0x242),e));}function normalizeFunctionBody(c,d){const ai=r;if(d[ai(0x1f2)](',')){const h=d['split'](',')[ai(0x244)](i=>i['trim']());if(h[ai(0x278)]===0x4&&h[0x3][ai(0x205)]('%'))h[0x3]=String(Number(h[0x3][ai(0x26a)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ai(0x204)](',')+')';}const [e,f]=d['split']('/')['map'](i=>i[ai(0x266)]()),g=e[ai(0x275)](/\s+/)[ai(0x27e)](Boolean);if(f)g[ai(0x23d)](f[ai(0x205)]('%')?String(Number(f[ai(0x26a)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function a(){const az=['stopPropagation','split','_render','step','length','ready','innerHTML','%,\x20','_togglePopup','getAttribute','filter','rgba(','_value','_alphaInput','height','includes','136fHIkJh','hue','\x22\x20max=\x22','1109325zcxFUv','sqrt','offsetWidth','_alphaLabel','newValue','offsetHeight','_handleButtonKeyDown','_modeSelect','_setValue','112273jRgsFS','plane-handle','_finishPlaneDrag','hsla','_validateTextInput','join','endsWith','_popup','_formatColor','replace','input','_commitCurrentValue','_color','alpha','--color','body','#000000','toggleAttribute','node-projects-color-editor','style','pointerId','toLowerCase','hasAttribute','cmyk','_setColor','clientX','button','oklab','_renderSwatch','valid','emit','Enter','_positionPopup','keydown','1969260qCxTRq','_textInput','pointerdown','textContent','disconnectedCallback','1216688KwRFmC','_outsidePointerHandler','_handleOutsidePointer','_planeHandle','top','toColorObject','pointercancel','_button','_applyHue','_plane','_mode','invalid','_channels','removeEventListener','abs','_planePointerMove','min','280px','_handleWindowKey','node-projects-color-input','oklch','pow','disabled','push','8063KMPAAf','82nybFdO','exec','remove','hsl','_hueInput','map','blur','addEventListener','setProperty','_ignoreNextClick','cmyk(','blue','267410UCcCfc','green','_closePopup','toggle','readonly','_startPlaneDrag','_applyChannelInputs','_openPopup','bottom','define','value','readOnly','_getDomElement','_applyPlanePointer','alpha-label','change','resize','innerWidth','_editor','_renderChannelInputs','getBoundingClientRect','createElement','rgb','round','label','appendChild','Escape','trim','key','mode','_windowKeyHandler','slice','_dragPointerId','cos','_applyText','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','4998573dLHwMf','valueChanged','max','_hue','sin'];a=function(){return az;};return a();}function parseHexColor(c){const aj=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[aj(0x278)]===0x1?g+g:g,0x10);if(e[aj(0x278)]===0x3||e[aj(0x278)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[aj(0x278)]===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[aj(0x278)]===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[aj(0x26a)](0x4,0x6)),'a':e[aj(0x278)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ak=r,d=/^(oklab|oklch)\((.*)\)$/i[ak(0x240)](c);if(!d)return null;const e=d[0x1][ak(0x214)](),[f,g]=d[0x2][ak(0x275)]('/')['map'](j=>j['trim']()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[ak(0x278)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const al=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':al(0x27f)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math['round'](g['h'])+',\x20'+Math[al(0x262)](g['s']*0x64)+al(0x27b)+Math[al(0x262)](g['l']*0x64)+'%)':'hsla('+Math[al(0x262)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+al(0x27b)+Math[al(0x262)](g['l']*0x64)+al(0x27b)+e+')';}if(d===al(0x216)){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math[al(0x262)](h['m']*0x64)+'%,\x20'+Math[al(0x262)](h['y']*0x64)+'%,\x20'+Math[al(0x262)](h['k']*0x64)+'%';return c['a']>=0x1?al(0x249)+i+')':al(0x249)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const am=r;if(d===am(0x261))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[am(0x262)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[am(0x262)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[am(0x262)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===am(0x21a)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':am(0x20c),'value':Math[am(0x262)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const an=r;return{'r':Math[an(0x262)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x271)](e,f,i),k=Math[ao(0x236)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ap=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ap(0x271)](e,f,i),k=Math[ap(0x236)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const aq=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[aq(0x234)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ar=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[ar(0x23b)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const as=r,e=rgbToOklab(d),f=Math[as(0x1f7)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const at=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[at(0x26c)](g),e*Math[at(0x273)](g));}function srgbToLinear(c){const au=r;return c<=0.04045?c/12.92:Math[au(0x23b)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){const av=r;return c<=0.0031308?12.92*c:1.055*Math[av(0x23b)](c,0x1/2.4)-0.055;}function b(c,d){c=c-0x1f0;const e=a();let f=e[c];return f;}function parseNumberOrPercent(c,d){const aw=r;return c[aw(0x205)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ax=r;return Math['min'](e,Math[ax(0x271)](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const ay=r,e=Math['pow'](0xa,d);return Math[ay(0x262)](c*e)/e;}customElements['define'](r(0x211),ColorEditor),customElements[r(0x254)](r(0x239),ColorInput);