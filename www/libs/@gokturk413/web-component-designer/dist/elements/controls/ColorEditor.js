const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x16c))/0x1*(-parseInt(q(0x17c))/0x2)+-parseInt(q(0x13b))/0x3+parseInt(q(0x1a5))/0x4+-parseInt(q(0x13e))/0x5+parseInt(q(0x14f))/0x6*(parseInt(q(0x135))/0x7)+-parseInt(q(0x191))/0x8+parseInt(q(0x156))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x60939));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb','hsl',r(0x161),r(0x144),r(0x192)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x138)]=css`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x14c)]='#000000';['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x13f)]='rgb';[r(0x142)]=0x0;['_plane'];['_planeHandle'];[r(0x198)];[r(0x152)];[r(0x125)];[r(0x19a)];[r(0x181)];['_textInput'];['_dragPointerId']=null;get[r(0x159)](){const s=r;return this[s(0x14c)];}set['value'](c){const t=r,d=parseColor(c);if(d){this['_color']=d,this[t(0x13f)]=inferColorMode(c)??this[t(0x13f)],this[t(0x1a1)](),this[t(0x14c)]=this['_formatColor'](),this[t(0x193)]();return;}this[t(0x14c)]=c??'',this[t(0x193)]();}get['mode'](){const u=r;return this[u(0x13f)];}set['mode'](c){const v=r;modes['includes'](c)&&(this[v(0x13f)]=c,this['_value']=this['_formatColor'](),this['_render']());}get['readOnly'](){const w=r;return this['hasAttribute'](w(0x1a4));}set['readOnly'](c){const x=r;this['toggleAttribute'](x(0x1a4),c);}get[r(0x157)](){return this['hasAttribute']('disabled');}set[r(0x157)](c){const y=r;this[y(0x177)]('disabled',c);}constructor(){const z=r;super(),this[z(0x15f)]=this[z(0x129)]('plane'),this[z(0x189)]=this['_getDomElement']('plane-handle'),this['_hueInput']=this['_getDomElement'](z(0x1ab)),this['_alphaInput']=this[z(0x129)](z(0x18e)),this['_alphaLabel']=this[z(0x129)](z(0x164)),this[z(0x19a)]=this['_getDomElement'](z(0x182)),this[z(0x181)]=this[z(0x129)](z(0x194)),this['_textInput']=this['_getDomElement'](z(0x145));}['ready'](){const A=r;this[A(0x12b)]();const c=this['getAttribute'](A(0x159));if(c!=null)this[A(0x159)]=c;const d=this[A(0x149)](A(0x182));modes['includes'](d)&&(this['_mode']=d,this['_value']=this['_formatColor']()),this[A(0x193)]();}[r(0x12b)](){const B=r;this['_plane']['addEventListener'](B(0x1a9),c=>this['_startPlaneDrag'](c)),this['_hueInput'][B(0x16f)]('input',()=>this['_applyHue'](!![])),this['_hueInput']['addEventListener'](B(0x134),()=>this[B(0x19c)]()),this['_alphaInput'][B(0x16f)](B(0x120),()=>this['_applyAlpha'](!![])),this[B(0x152)][B(0x16f)]('change',()=>this['_commitCurrentValue']()),this['_modeSelect'][B(0x16f)](B(0x134),()=>{const C=B;this[C(0x182)]=this[C(0x19a)]['value'],this['_commitCurrentValue']();}),this['_channels'][B(0x16f)](B(0x120),()=>this['_applyChannelInputs'](!![])),this['_channels'][B(0x16f)]('change',()=>this['_commitCurrentValue']()),this[B(0x1ac)]['addEventListener']('input',()=>this['_validateTextInput']()),this['_textInput'][B(0x16f)]('change',()=>this['_applyText']()),this[B(0x1ac)]['addEventListener'](B(0x17d),c=>{const D=B;c['key']==='Enter'&&(this['_applyText'](),this['_textInput'][D(0x11f)]());});}[r(0x14b)](c){const E=r;if(this['readOnly']||this['disabled'])return;this['_dragPointerId']=c[E(0x140)],this[E(0x15f)][E(0x150)](c[E(0x140)]),this['_applyPlanePointer'](c,!![]),this[E(0x15f)]['addEventListener'](E(0x14e),this['_planePointerMove']),this['_plane'][E(0x16f)]('pointerup',this['_finishPlaneDrag']),this['_plane'][E(0x16f)]('pointercancel',this[E(0x155)]),c['preventDefault']();}['_planePointerMove']=c=>{const F=r;if(c['pointerId']===this[F(0x15b)])this['_applyPlanePointer'](c,!![]);};[r(0x155)]=c=>{const G=r;if(c[G(0x140)]!==this['_dragPointerId'])return;this[G(0x15b)]=null,this['_plane'][G(0x121)]('pointermove',this['_planePointerMove']),this['_plane']['removeEventListener'](G(0x195),this['_finishPlaneDrag']),this['_plane']['removeEventListener'](G(0x184),this[G(0x155)]),this['_commitCurrentValue']();};[r(0x174)](c,d){const H=r,e=this[H(0x15f)]['getBoundingClientRect'](),f=clamp((c[H(0x178)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e['height'],0x0,0x1),h=Number(this['_hueInput'][H(0x159)])||0x0;this[H(0x142)]=normalizeHue(h),this[H(0x17b)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x132)](c){const I=r,d=rgbToHsv(this[I(0x131)]),e=Number(this[I(0x198)]['value'])||0x0;this[I(0x142)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[I(0x131)]['a']},c);}['_applyAlpha'](c){const J=r;this[J(0x17b)]({...this['_color'],'a':clamp(Number(this[J(0x152)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this['_channels'][K(0x127)](K(0x120))]['reduce']((f,g)=>{return f[g['name']]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']===K(0x141))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[K(0x13f)]===K(0x161))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[K(0x13f)]==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[K(0x17b)](normalizeColor(e),c,![],!![]);}[r(0x162)](){const L=r,c=this[L(0x1ac)][L(0x159)]['trim']();this[L(0x1ac)][L(0x147)]['toggle'](L(0x154),c['length']>0x0&&!parseColor(c));}[r(0x176)](){const M=r,c=parseColor(this[M(0x1ac)]['value']);this['_textInput']['classList'][M(0x123)](M(0x154),!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput']['value'])??this['_mode'],this[M(0x17b)](c,![],!![],!![]);}[r(0x17b)](c,d,e=!![],f=![]){const N=r,g=this['_value'];this[N(0x131)]=normalizeColor(c);if(f)this['_syncHueFromColor']();this[N(0x14c)]=this['_formatColor'](),this['_render'](e);if(d)this['valuePreviewChanged'][N(0x16d)]({'newValue':this['_value'],'oldValue':g});else this['valueChanged']['emit']({'newValue':this[N(0x14c)],'oldValue':g});}[r(0x19c)](){const O=r,c=this[O(0x14c)];this[O(0x14c)]=this['_formatColor'](),this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this['_color']);this[P(0x138)]['setProperty'](P(0x11e),String(Math['round'](this[P(0x142)]))),this['style'][P(0x126)]('--color',toCssRgb(this['_color'])),this[P(0x138)]['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']+')'),this['style']['setProperty']('--rgb-color',this[P(0x131)]['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x131)]['b']),this['_planeHandle'][P(0x138)]['left']=d['s']*0x64+'%',this['_planeHandle']['style'][P(0x139)]=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x159)]=String(Math[P(0x17a)](this[P(0x142)])),this[P(0x152)]['value']=String(Math[P(0x17a)](this['_color']['a']*0x64)),this[P(0x125)]['textContent']=Math[P(0x17a)](this['_color']['a']*0x64)+'%',this['_modeSelect']['value']=this['_mode'];if(c)this[P(0x19b)]();if(document['activeElement']!==this[P(0x1ac)])this[P(0x1ac)][P(0x159)]=this[P(0x14c)];this['_textInput']['classList']['remove'](P(0x154));}[r(0x19b)](){const Q=r,c=getChannelValues(this['_color'],this[Q(0x13f)]);this[Q(0x181)][Q(0x143)]=c[Q(0x13a)](d=>Q(0x14d)+d[Q(0x133)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[Q(0x15d)]+Q(0x190)+d['min']+Q(0x16b)+d[Q(0x16a)]+'\x22\x20step=\x22'+d['step']+Q(0x171)+d['value']+Q(0x128))['join']('');}[r(0x1a7)](){return formatColor(this['_color'],this['_mode']);}[r(0x1a1)](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']=r(0x17e);['_button'];['_popup'];[r(0x183)];['_ignoreNextClick']=![];[r(0x172)]=c=>this[r(0x186)](c);['_windowKeyHandler']=c=>this['_handleWindowKey'](c);get[r(0x159)](){const R=r;return this[R(0x14c)];}set['value'](c){const S=r;this[S(0x18b)](c,![]);}get['readOnly'](){const T=r;return this[T(0x19e)]('readonly');}set[r(0x18a)](c){const U=r;this[U(0x177)]('readonly',c);}get['disabled'](){const V=r;return this[V(0x19e)](V(0x157));}set['disabled'](c){const W=r;this[W(0x177)]('disabled',c);if(this['_button'])this[W(0x167)]['disabled']=c;}constructor(){const X=r;super(),this['_button']=this[X(0x129)](X(0x18c));}[r(0x19d)](){const Y=r,c=this['getAttribute'](Y(0x159));if(c!=null)this['_setValue'](c,![]);this[Y(0x167)][Y(0x157)]=this[Y(0x157)],this[Y(0x167)][Y(0x16f)]('pointerdown',d=>this[Y(0x14a)](d)),this[Y(0x167)]['addEventListener'](Y(0x1af),d=>this[Y(0x1a0)](d)),this[Y(0x167)]['addEventListener'](Y(0x17d),d=>this[Y(0x175)](d)),this[Y(0x1aa)]();}[r(0x19f)](){const Z=r;this[Z(0x185)]();}[r(0x148)](){const a0=r;if(this['readOnly']||this['disabled'])return;if(this[a0(0x165)])this['_closePopup']();else this['_openPopup']();}[r(0x14a)](c){const a1=r;if(c[a1(0x18c)]!==0x0)return;this[a1(0x18f)]=!![],this['_togglePopup'](),c['preventDefault'](),c['stopPropagation']();}[r(0x1a0)](c){const a2=r;if(this[a2(0x18f)]){this['_ignoreNextClick']=![],c[a2(0x15c)](),c['stopPropagation']();return;}this[a2(0x148)]();}[r(0x175)](c){const a3=r;if(c[a3(0x196)]!=='Enter'&&c[a3(0x196)]!=='\x20')return;this[a3(0x148)](),c['preventDefault'](),c['stopPropagation']();}['_openPopup'](){const a4=r;this[a4(0x165)]=document[a4(0x1a2)]('div'),this[a4(0x165)]['style'][a4(0x15e)]=a4(0x199),this['_popup'][a4(0x138)]['zIndex']=a4(0x11d),this[a4(0x165)]['style']['width']='280px',this[a4(0x183)]=document['createElement'](a4(0x17f)),this[a4(0x183)][a4(0x159)]=this[a4(0x14c)],this['_editor'][a4(0x169)]['on'](c=>{const a5=a4;this[a5(0x18b)](c[a5(0x197)],!![]),this[a5(0x1ae)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a4(0x183)]['valueChanged']['on'](c=>{const a6=a4;this['_setValue'](c[a6(0x197)],!![]),this['dispatchEvent'](new Event(a6(0x134),{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this[a4(0x183)]),document['body']['appendChild'](this[a4(0x165)]),this['_positionPopup'](),window['addEventListener']('resize',()=>this['_positionPopup'](),{'once':!![]}),window[a4(0x16f)]('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window['addEventListener']('keydown',this[a4(0x13d)]),requestAnimationFrame(()=>window[a4(0x16f)](a4(0x1a9),this['_outsidePointerHandler'],!![]));}['_positionPopup'](){const a7=r;if(!this[a7(0x165)])return;const c=this[a7(0x15a)](),d=this['_popup']['offsetWidth']||0x118,e=this[a7(0x165)][a7(0x1a6)]||0x168;let f=c[a7(0x11c)],g=c[a7(0x158)]+0x4;if(f+d>window[a7(0x12f)]-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a7(0x139)]-e-0x4;this[a7(0x165)][a7(0x138)]['left']=Math[a7(0x16a)](0x8,f)+'px',this[a7(0x165)]['style']['top']=Math[a7(0x16a)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a8=r,d=c[a8(0x153)]();if(d[a8(0x18d)](this)||this[a8(0x165)]&&d[a8(0x18d)](this['_popup']))return;this[a8(0x185)]();}[r(0x188)](c){const a9=r;if(c['key']===a9(0x1a8))this[a9(0x185)]();}[r(0x185)](){const aa=r;window[aa(0x121)]('pointerdown',this[aa(0x172)],!![]),window[aa(0x121)](aa(0x17d),this['_windowKeyHandler']),this[aa(0x165)]?.[aa(0x13c)](),this[aa(0x165)]=null,this['_editor']=null;}['_setValue'](c,d){const ab=r;this['_value']=c??'';if(d)this['setAttribute'](ab(0x159),this[ab(0x14c)]);this['_renderSwatch']();}[r(0x1aa)](){const ac=r,c=parseColor(this[ac(0x14c)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ac(0x138)]['setProperty'](ac(0x130),toCssRgb(c));}}function parseColor(c){const ad=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()===ad(0x151))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h[ad(0x146)],'g':h['green'],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ae=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ae(0x124)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e==='rgba')return'rgb';if(e==='hsl'||e==='hsla')return ae(0x141);if(e===ae(0x161))return'cmyk';if(e===ae(0x144))return'oklab';if(e==='oklch')return ae(0x192);return null;}function normalizeModernColorSyntax(c){const af=r;return c[af(0x163)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(af(0x1ad),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ag=r;if(d[ag(0x18d)](',')){const h=d['split'](',')[ag(0x13a)](i=>i['trim']());if(h[ag(0x1a3)]===0x4&&h[0x3][ag(0x170)]('%'))h[0x3]=String(Number(h[0x3][ag(0x12d)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ag(0x122)](',')+')';}const [e,f]=d['split']('/')[ag(0x13a)](i=>i[ag(0x187)]()),g=e['split'](/\s+/)['filter'](Boolean);if(f)g['push'](f[ag(0x170)]('%')?String(Number(f[ag(0x12d)](0x0,-0x1))/0x64):f);return''+c+(g[ag(0x1a3)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ah=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e[ah(0x1a3)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[ah(0x12d)](0x4,0x6)),'a':e['length']===0x8?f(e[ah(0x12d)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ai=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')[ai(0x13a)](j=>j[ai(0x187)]()),h=f[ai(0x163)](/,/g,'\x20')[ai(0x168)](/\s+/)[ai(0x173)](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const aj=r,e=round(c['a'],0x3);if(d===aj(0x1ad))return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':aj(0x179)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[aj(0x17a)](g['h'])+',\x20'+Math[aj(0x17a)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':'hsla('+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[aj(0x17a)](g['l']*0x64)+aj(0x12e)+e+')';}if(d===aj(0x161)){const h=rgbToCmyk(c),i=Math[aj(0x17a)](h['c']*0x64)+'%,\x20'+Math[aj(0x17a)](h['m']*0x64)+aj(0x12e)+Math['round'](h['y']*0x64)+aj(0x12e)+Math[aj(0x17a)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':aj(0x12a)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return aj(0x166)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ak=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ak(0x141)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ak(0x17a)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ak(0x17a)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ak(0x161)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ak(0x17a)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ak(0x17a)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ak(0x17a)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const al=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[al(0x17a)](clamp(c['g'],0x0,0xff)),'b':Math[al(0x17a)](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const am=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[am(0x16a)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const an=r,i=f*e,j=i*(0x1-Math[an(0x137)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ao(0x137)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const ap=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[ap(0x16a)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function b(c,d){c=c-0x11c;const e=a();let f=e[c];return f;}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const aq=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[aq(0x180)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[aq(0x180)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[aq(0x180)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ar=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[ar(0x16e)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math['sin'](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const as=r;return c<=0.0031308?12.92*c:1.055*Math[as(0x16e)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function a(){const av=['--color','_color','_applyHue','label','change','49YcvcVA','define','abs','style','top','map','854526IOsImk','remove','_windowKeyHandler','1602075ycBHJO','_mode','pointerId','hsl','_hue','innerHTML','oklab','text','red','classList','_togglePopup','getAttribute','_handleButtonPointerDown','_startPlaneDrag','_value','\x0a\x20\x20\x20\x20\x20\x20<label>','pointermove','379572FqnkSp','setPointerCapture','transparent','_alphaInput','composedPath','invalid','_finishPlaneDrag','3411936wNOADH','disabled','bottom','value','getBoundingClientRect','_dragPointerId','preventDefault','name','position','_plane','isFinite','cmyk','_validateTextInput','replace','alpha-label','_popup','oklch(','_button','split','valuePreviewChanged','max','\x22\x20max=\x22','3993leDgBD','emit','pow','addEventListener','endsWith','\x22\x20value=\x22','_outsidePointerHandler','filter','_applyPlanePointer','_handleButtonKeyDown','_applyText','toggleAttribute','clientX','rgba(','round','_setColor','26MQsCsk','keydown','#000000','node-projects-color-editor','cbrt','_channels','mode','_editor','pointercancel','_closePopup','_handleOutsidePointer','trim','_handleWindowKey','_planeHandle','readOnly','_setValue','button','includes','alpha','_ignoreNextClick','\x22\x20min=\x22','1002072wncTOs','oklch','_render','channels','pointerup','key','newValue','_hueInput','fixed','_modeSelect','_renderChannelInputs','_commitCurrentValue','ready','hasAttribute','disconnectedCallback','_handleButtonClick','_syncHueFromColor','createElement','length','readonly','1424256coAauJ','offsetHeight','_formatColor','Escape','pointerdown','_renderSwatch','hue','_textInput','rgb','dispatchEvent','click','left','100000','--hue','blur','input','removeEventListener','join','toggle','exec','_alphaLabel','setProperty','querySelectorAll','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','_getDomElement','cmyk(','_wireEvents','node-projects-color-input','slice','%,\x20','innerWidth'];a=function(){return av;};return a();}function clamp(c,d,e){const at=r;return Math['min'](e,Math['max'](d,Number[at(0x160)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const au=r,e=Math[au(0x16e)](0xa,d);return Math['round'](c*e)/e;}customElements[r(0x136)](r(0x17f),ColorEditor),customElements['define'](r(0x12c),ColorInput);