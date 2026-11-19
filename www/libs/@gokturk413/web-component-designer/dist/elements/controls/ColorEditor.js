function b(c,d){c=c-0x102;const e=a();let f=e[c];return f;}const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x172))/0x1+-parseInt(q(0x122))/0x2+parseInt(q(0x195))/0x3*(parseInt(q(0x116))/0x4)+-parseInt(q(0x11b))/0x5*(parseInt(q(0x190))/0x6)+parseInt(q(0x18c))/0x7*(-parseInt(q(0x188))/0x8)+-parseInt(q(0x110))/0x9*(parseInt(q(0x136))/0xa)+-parseInt(q(0x13e))/0xb*(-parseInt(q(0x16e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb0511));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x152),r(0x15b),'cmyk','oklab',r(0x126)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x163)]=html`
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
  `;['valueChanged']=new TypedEvent();[r(0x11c)]=new TypedEvent();[r(0x15e)]=r(0x168);[r(0x114)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x10d)]=r(0x152);[r(0x184)]=0x0;['_plane'];['_planeHandle'];['_hueInput'];[r(0x160)];['_alphaLabel'];[r(0x19f)];['_channels'];[r(0x10a)];[r(0x14b)]=null;get['value'](){return this['_value'];}set[r(0x19d)](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this[s(0x10d)]=inferColorMode(c)??this[s(0x10d)],this['_syncHueFromColor'](),this['_value']=this['_formatColor'](),this['_render']();return;}this[s(0x15e)]=c??'',this['_render']();}get[r(0x199)](){const t=r;return this[t(0x10d)];}set['mode'](c){const u=r;modes[u(0x111)](c)&&(this[u(0x10d)]=c,this[u(0x15e)]=this['_formatColor'](),this[u(0x158)]());}get['readOnly'](){const v=r;return this['hasAttribute'](v(0x13b));}set[r(0x153)](c){const w=r;this[w(0x192)]('readonly',c);}get[r(0x11d)](){const x=r;return this[x(0x176)]('disabled');}set[r(0x11d)](c){this['toggleAttribute']('disabled',c);}constructor(){const y=r;super(),this['_plane']=this[y(0x125)](y(0x17a)),this['_planeHandle']=this[y(0x125)](y(0x12f)),this['_hueInput']=this['_getDomElement']('hue'),this[y(0x160)]=this['_getDomElement']('alpha'),this[y(0x16a)]=this['_getDomElement'](y(0x18b)),this[y(0x19f)]=this[y(0x125)]('mode'),this[y(0x144)]=this['_getDomElement'](y(0x146)),this[y(0x10a)]=this[y(0x125)]('text');}[r(0x106)](){const z=r;this[z(0x12b)]();const c=this['getAttribute'](z(0x19d));if(c!=null)this['value']=c;const d=this['getAttribute'](z(0x199));modes[z(0x111)](d)&&(this['_mode']=d,this[z(0x15e)]=this['_formatColor']()),this['_render']();}['_wireEvents'](){const A=r;this['_plane']['addEventListener']('pointerdown',c=>this['_startPlaneDrag'](c)),this[A(0x102)][A(0x171)](A(0x169),()=>this['_applyHue'](!![])),this[A(0x102)]['addEventListener']('change',()=>this[A(0x18a)]()),this['_alphaInput']['addEventListener'](A(0x169),()=>this['_applyAlpha'](!![])),this['_alphaInput'][A(0x171)]('change',()=>this['_commitCurrentValue']()),this['_modeSelect'][A(0x171)]('change',()=>{const B=A;this[B(0x199)]=this[B(0x19f)]['value'],this[B(0x18a)]();}),this[A(0x144)][A(0x171)](A(0x169),()=>this[A(0x12a)](!![])),this['_channels'][A(0x171)]('change',()=>this['_commitCurrentValue']()),this['_textInput']['addEventListener'](A(0x169),()=>this['_validateTextInput']()),this['_textInput'][A(0x171)](A(0x14a),()=>this['_applyText']()),this[A(0x10a)][A(0x171)]('keydown',c=>{const C=A;c[C(0x139)]==='Enter'&&(this[C(0x135)](),this[C(0x10a)][C(0x134)]());});}['_startPlaneDrag'](c){const D=r;if(this['readOnly']||this[D(0x11d)])return;this[D(0x14b)]=c[D(0x138)],this[D(0x120)][D(0x119)](c['pointerId']),this['_applyPlanePointer'](c,!![]),this[D(0x120)][D(0x171)]('pointermove',this[D(0x129)]),this[D(0x120)][D(0x171)](D(0x14e),this[D(0x186)]),this[D(0x120)]['addEventListener']('pointercancel',this['_finishPlaneDrag']),c[D(0x157)]();}[r(0x129)]=c=>{if(c['pointerId']===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const E=r;if(c[E(0x138)]!==this[E(0x14b)])return;this['_dragPointerId']=null,this[E(0x120)][E(0x13f)](E(0x19b),this[E(0x129)]),this['_plane']['removeEventListener']('pointerup',this[E(0x186)]),this[E(0x120)][E(0x13f)](E(0x197),this['_finishPlaneDrag']),this['_commitCurrentValue']();};[r(0x13d)](c,d){const F=r,e=this[F(0x120)]['getBoundingClientRect'](),f=clamp((c[F(0x166)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e[F(0x124)],0x0,0x1),h=Number(this[F(0x102)][F(0x19d)])||0x0;this['_hue']=normalizeHue(h),this[F(0x13c)]({...hsvToRgb(h,f,g),'a':this[F(0x114)]['a']},d);}[r(0x1a2)](c){const G=r,d=rgbToHsv(this[G(0x114)]),e=Number(this[G(0x102)][G(0x19d)])||0x0;this[G(0x184)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const H=r;this['_setColor']({...this[H(0x114)],'a':clamp(Number(this['_alphaInput'][H(0x19d)])/0x64,0x0,0x1)},c);}[r(0x12a)](c){const I=r,d=[...this['_channels'][I(0x191)](I(0x169))][I(0x19c)]((f,g)=>{const J=I;return f[g['name']]=Number(g[J(0x19d)]),f;},{});let e;if(this[I(0x10d)]===I(0x152))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[I(0x10d)]===I(0x15b))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===I(0x196))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[I(0x10d)]===I(0x16f))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[I(0x165)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const K=r,c=this['_textInput']['value'][K(0x154)]();this[K(0x10a)]['classList']['toggle']('invalid',c[K(0x123)]>0x0&&!parseColor(c));}['_applyText'](){const L=r,c=parseColor(this['_textInput']['value']);this['_textInput']['classList']['toggle'](L(0x17c),!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput']['value'])??this[L(0x10d)],this['_setColor'](c,![],!![],!![]);}[r(0x13c)](c,d,e=!![],f=![]){const M=r,g=this[M(0x15e)];this[M(0x114)]=normalizeColor(c);if(f)this[M(0x185)]();this['_value']=this['_formatColor'](),this[M(0x158)](e);if(d)this[M(0x11c)]['emit']({'newValue':this[M(0x15e)],'oldValue':g});else this['valueChanged']['emit']({'newValue':this[M(0x15e)],'oldValue':g});}[r(0x18a)](){const N=r,c=this['_value'];this['_value']=this['_formatColor'](),this[N(0x105)]['emit']({'newValue':this['_value'],'oldValue':c});}[r(0x158)](c=!![]){const O=r;if(!this[O(0x10a)])return;const d=rgbToHsv(this['_color']);this[O(0x128)]['setProperty'](O(0x182),String(Math['round'](this[O(0x184)]))),this['style']['setProperty'](O(0x194),toCssRgb(this['_color'])),this['style']['setProperty'](O(0x107),'rgb('+this['_color']['r']+',\x20'+this[O(0x114)]['g']+',\x20'+this['_color']['b']+')'),this['style']['setProperty'](O(0x183),this[O(0x114)]['r']+',\x20'+this[O(0x114)]['g']+',\x20'+this[O(0x114)]['b']),this['_planeHandle'][O(0x128)]['left']=d['s']*0x64+'%',this[O(0x11f)][O(0x128)][O(0x180)]=(0x1-d['v'])*0x64+'%',this[O(0x102)][O(0x19d)]=String(Math[O(0x115)](this[O(0x184)])),this[O(0x160)]['value']=String(Math[O(0x115)](this[O(0x114)]['a']*0x64)),this['_alphaLabel']['textContent']=Math['round'](this['_color']['a']*0x64)+'%',this['_modeSelect'][O(0x19d)]=this['_mode'];if(c)this[O(0x1a0)]();if(document['activeElement']!==this['_textInput'])this[O(0x10a)]['value']=this[O(0x15e)];this[O(0x10a)]['classList'][O(0x178)]('invalid');}['_renderChannelInputs'](){const P=r,c=getChannelValues(this[P(0x114)],this[P(0x10d)]);this['_channels']['innerHTML']=c[P(0x108)](d=>P(0x121)+d['label']+P(0x13a)+d[P(0x19e)]+P(0x14d)+d['min']+'\x22\x20max=\x22'+d['max']+'\x22\x20step=\x22'+d[P(0x149)]+P(0x15a)+d[P(0x19d)]+P(0x109))[P(0x12d)]('');}['_formatColor'](){return formatColor(this['_color'],this['_mode']);}['_syncHueFromColor'](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x163)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;[r(0x15e)]=r(0x168);['_button'];['_popup'];[r(0x150)];[r(0x130)]=![];[r(0x10e)]=c=>this['_handleOutsidePointer'](c);[r(0x140)]=c=>this['_handleWindowKey'](c);get['value'](){const Q=r;return this[Q(0x15e)];}set[r(0x19d)](c){this['_setValue'](c,![]);}get[r(0x153)](){const R=r;return this[R(0x176)]('readonly');}set[r(0x153)](c){const S=r;this[S(0x192)]('readonly',c);}get[r(0x11d)](){const T=r;return this['hasAttribute'](T(0x11d));}set[r(0x11d)](c){const U=r;this[U(0x192)]('disabled',c);if(this['_button'])this['_button']['disabled']=c;}constructor(){const V=r;super(),this['_button']=this[V(0x125)]('button');}['ready'](){const W=r,c=this[W(0x117)]('value');if(c!=null)this[W(0x175)](c,![]);this[W(0x11a)]['disabled']=this['disabled'],this[W(0x11a)]['addEventListener'](W(0x14c),d=>this[W(0x167)](d)),this['_button'][W(0x171)](W(0x17f),d=>this[W(0x137)](d)),this[W(0x11a)][W(0x171)](W(0x133),d=>this[W(0x159)](d)),this[W(0x141)]();}[r(0x16d)](){const X=r;this[X(0x162)]();}['_togglePopup'](){const Y=r;if(this['readOnly']||this['disabled'])return;if(this['_popup'])this[Y(0x162)]();else this[Y(0x1a3)]();}['_handleButtonPointerDown'](c){const Z=r;if(c[Z(0x173)]!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c[Z(0x157)](),c[Z(0x151)]();}['_handleButtonClick'](c){const a0=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c[a0(0x157)](),c['stopPropagation']();return;}this[a0(0x156)]();}[r(0x159)](c){const a1=r;if(c[a1(0x139)]!=='Enter'&&c['key']!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a1(0x151)]();}[r(0x1a3)](){const a2=r;this[a2(0x19a)]=document[a2(0x198)]('div'),this['_popup'][a2(0x128)]['position']=a2(0x1a1),this['_popup'][a2(0x128)]['zIndex']='100000',this['_popup']['style'][a2(0x132)]='280px',this['_editor']=document['createElement']('node-projects-color-editor'),this['_editor'][a2(0x19d)]=this['_value'],this[a2(0x150)]['valuePreviewChanged']['on'](c=>{const a3=a2;this[a3(0x175)](c['newValue'],!![]),this[a3(0x113)](new Event(a3(0x169),{'bubbles':!![],'composed':!![]}));}),this[a2(0x150)]['valueChanged']['on'](c=>{const a4=a2;this[a4(0x175)](c['newValue'],!![]),this['dispatchEvent'](new Event(a4(0x14a),{'bubbles':!![],'composed':!![]}));}),this[a2(0x19a)]['appendChild'](this['_editor']),document[a2(0x17e)]['appendChild'](this['_popup']),this['_positionPopup'](),window[a2(0x171)](a2(0x187),()=>this[a2(0x142)](),{'once':!![]}),window[a2(0x171)](a2(0x10c),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a2(0x171)]('keydown',this[a2(0x140)]),requestAnimationFrame(()=>window['addEventListener'](a2(0x14c),this['_outsidePointerHandler'],!![]));}['_positionPopup'](){const a5=r;if(!this['_popup'])return;const c=this['getBoundingClientRect'](),d=this['_popup'][a5(0x15d)]||0x118,e=this[a5(0x19a)][a5(0x17d)]||0x168;let f=c[a5(0x10f)],g=c[a5(0x189)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a5(0x193)]-0x8)g=c[a5(0x180)]-e-0x4;this[a5(0x19a)][a5(0x128)]['left']=Math['max'](0x8,f)+'px',this[a5(0x19a)]['style'][a5(0x180)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a6=r,d=c[a6(0x16b)]();if(d['includes'](this)||this[a6(0x19a)]&&d['includes'](this[a6(0x19a)]))return;this[a6(0x162)]();}['_handleWindowKey'](c){const a7=r;if(c['key']===a7(0x127))this['_closePopup']();}['_closePopup'](){const a8=r;window['removeEventListener'](a8(0x14c),this['_outsidePointerHandler'],!![]),window[a8(0x13f)](a8(0x133),this['_windowKeyHandler']),this['_popup']?.[a8(0x178)](),this['_popup']=null,this[a8(0x150)]=null;}['_setValue'](c,d){const a9=r;this[a9(0x15e)]=c??'';if(d)this['setAttribute']('value',this['_value']);this['_renderSwatch']();}[r(0x141)](){const aa=r,c=parseColor(this[aa(0x15e)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[aa(0x128)][aa(0x147)](aa(0x194),toCssRgb(c));}}function parseColor(c){const ab=r;if(!c)return null;const d=c[ab(0x154)]();if(d[ab(0x15f)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.[ab(0x10b)])return normalizeColor({'r':h['red'],'g':h[ab(0x11e)],'b':h['blue'],'a':h[ab(0x155)]});return null;}function inferColorMode(c){const ac=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ac(0x145)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e===ac(0x152)||e===ac(0x18f))return'rgb';if(e==='hsl'||e===ac(0x118))return'hsl';if(e===ac(0x196))return ac(0x196);if(e==='oklab')return'oklab';if(e===ac(0x126))return ac(0x126);return null;}function normalizeModernColorSyntax(c){return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ad=r;if(d[ad(0x111)](',')){const h=d[ad(0x112)](',')['map'](i=>i[ad(0x154)]());if(h[ad(0x123)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ad(0x12d)](',')+')';}const [e,f]=d['split']('/')['map'](i=>i[ad(0x154)]()),g=e['split'](/\s+/)[ad(0x14f)](Boolean);if(f)g['push'](f[ad(0x170)]('%')?String(Number(f[ad(0x18d)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[ad(0x12d)](',')+')';}function parseHexColor(c){const ae=r,d=/^#([0-9a-f]{3,8})$/i[ae(0x145)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ae(0x123)]===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ae(0x123)]===0x4?f(e[0x3])/0xff:0x1});if(e[ae(0x123)]===0x6||e[ae(0x123)]===0x8)return normalizeColor({'r':f(e[ae(0x18d)](0x0,0x2)),'g':f(e[ae(0x18d)](0x2,0x4)),'b':f(e[ae(0x18d)](0x4,0x6)),'a':e[ae(0x123)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const af=r,d=/^(oklab|oklch)\((.*)\)$/i[af(0x145)](c);if(!d)return null;const e=d[0x1][af(0x15f)](),[f,g]=d[0x2][af(0x112)]('/')['map'](j=>j['trim']()),h=f[af(0x104)](/,/g,'\x20')[af(0x112)](/\s+/)['filter'](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ag=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ag(0x131)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ag(0x177)+Math['round'](g['h'])+',\x20'+Math[ag(0x115)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':ag(0x15c)+Math['round'](g['h'])+',\x20'+Math[ag(0x115)](g['s']*0x64)+'%,\x20'+Math[ag(0x115)](g['l']*0x64)+'%,\x20'+e+')';}if(d===ag(0x196)){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math['round'](h['m']*0x64)+ag(0x16c)+Math[ag(0x115)](h['y']*0x64)+'%,\x20'+Math[ag(0x115)](h['k']*0x64)+'%';return c['a']>=0x1?ag(0x179)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ag(0x181)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ag(0x143)+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ag(0x143)+e)+')';}function getChannelValues(c,d){const ah=r;if(d===ah(0x152))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x115)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ah(0x115)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ah(0x115)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ah(0x115)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ah(0x115)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ah(0x115)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ah(0x115)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ah(0x115)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ah(0x165),'value':Math[ah(0x115)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[ah(0x115)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ai=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math[ai(0x115)](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const aj=r;return aj(0x17b)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ak(0x174)](e,f,i),k=Math[ak(0x103)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function a(){const au=['reduce','value','name','_modeSelect','_renderChannelInputs','fixed','_applyHue','_openPopup','_hueInput','min','replace','valueChanged','ready','--opaque-color','map','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','_textInput','valid','scroll','_mode','_outsidePointerHandler','left','9VMhHCm','includes','split','dispatchEvent','_color','round','4XKdNnp','getAttribute','hsla','setPointerCapture','_button','15vdcurK','valuePreviewChanged','disabled','green','_planeHandle','_plane','\x0a\x20\x20\x20\x20\x20\x20<label>','1267570XutcEX','length','height','_getDomElement','oklch','Escape','style','_planePointerMove','_applyChannelInputs','_wireEvents','cos','join','atan2','plane-handle','_ignoreNextClick','rgb(','width','keydown','blur','_applyText','14014060KnEZDs','_handleButtonClick','pointerId','key','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','readonly','_setColor','_applyPlanePointer','11wQeIqj','removeEventListener','_windowKeyHandler','_renderSwatch','_positionPopup','\x20/\x20','_channels','exec','channels','setProperty','isFinite','step','change','_dragPointerId','pointerdown','\x22\x20min=\x22','pointerup','filter','_editor','stopPropagation','rgb','readOnly','trim','opacity','_togglePopup','preventDefault','_render','_handleButtonKeyDown','\x22\x20value=\x22','hsl','hsla(','offsetWidth','_value','toLowerCase','_alphaInput','cbrt','_closePopup','template','pow','alpha','clientX','_handleButtonPointerDown','#000000','input','_alphaLabel','composedPath','%,\x20','disconnectedCallback','28403196oBjRpk','oklab','endsWith','addEventListener','1214765OyLUWh','button','max','_setValue','hasAttribute','hsl(','remove','cmyk(','plane','rgba(','invalid','offsetHeight','body','click','top','oklab(','--hue','--rgb-color','_hue','_syncHueFromColor','_finishPlaneDrag','resize','24VyJDlJ','bottom','_commitCurrentValue','alpha-label','1407308tGJorP','slice','define','rgba','541818UqfewR','querySelectorAll','toggleAttribute','innerHeight','--color','149181jmADcQ','cmyk','pointercancel','createElement','mode','_popup','pointermove'];a=function(){return au;};return a();}function hslToRgb(d,e,f){const i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const al=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[al(0x161)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[al(0x161)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const am=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[am(0x164)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const an=r,e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[an(0x12e)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ao=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ao(0x12c)](g),e*Math['sin'](g));}function srgbToLinear(c){const ap=r;return c<=0.04045?c/12.92:Math[ap(0x164)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){const aq=r;return c<=0.0031308?12.92*c:1.055*Math[aq(0x164)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const ar=r;return c['endsWith']('%')?Number(c[ar(0x18d)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const as=r;return Math[as(0x103)](e,Math[as(0x174)](d,Number[as(0x148)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const at=r,e=Math['pow'](0xa,d);return Math[at(0x115)](c*e)/e;}customElements[r(0x18e)]('node-projects-color-editor',ColorEditor),customElements['define']('node-projects-color-input',ColorInput);