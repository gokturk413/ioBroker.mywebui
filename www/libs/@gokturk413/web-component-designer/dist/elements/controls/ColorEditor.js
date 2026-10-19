const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x131))/0x1+parseInt(q(0x187))/0x2+parseInt(q(0x176))/0x3*(parseInt(q(0x14e))/0x4)+parseInt(q(0x109))/0x5*(parseInt(q(0x13e))/0x6)+parseInt(q(0x137))/0x7+-parseInt(q(0x174))/0x8+parseInt(q(0x169))/0x9*(-parseInt(q(0x18c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x73767));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x139),'cmyk','oklab','oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x133)]=html`
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
  `;[r(0x175)]=new TypedEvent();[r(0x13a)]=new TypedEvent();[r(0x149)]=r(0x124);[r(0x181)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';['_hue']=0x0;['_plane'];[r(0x160)];[r(0x16e)];[r(0x154)];['_alphaLabel'];[r(0x106)];['_channels'];[r(0x156)];[r(0x12c)]=null;get['value'](){return this['_value'];}set['value'](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this[s(0x149)]=this['_formatColor'](),this[s(0x16d)]();return;}this[s(0x149)]=c??'',this['_render']();}get[r(0x127)](){const t=r;return this[t(0x107)];}set[r(0x127)](c){const u=r;modes[u(0x11d)](c)&&(this[u(0x107)]=c,this['_value']=this[u(0x115)](),this['_render']());}get[r(0x15a)](){const v=r;return this[v(0x13c)](v(0x10e));}set[r(0x15a)](c){const w=r;this['toggleAttribute'](w(0x10e),c);}get['disabled'](){const x=r;return this[x(0x13c)]('disabled');}set['disabled'](c){const y=r;this[y(0x13f)](y(0x171),c);}constructor(){const z=r;super(),this[z(0x136)]=this[z(0x102)]('plane'),this[z(0x160)]=this[z(0x102)]('plane-handle'),this[z(0x16e)]=this[z(0x102)](z(0x168)),this['_alphaInput']=this[z(0x102)](z(0x134)),this['_alphaLabel']=this['_getDomElement']('alpha-label'),this['_modeSelect']=this[z(0x102)]('mode'),this[z(0x104)]=this[z(0x102)]('channels'),this[z(0x156)]=this[z(0x102)]('text');}['ready'](){const A=r;this['_wireEvents']();const c=this['getAttribute'](A(0x153));if(c!=null)this[A(0x153)]=c;const d=this['getAttribute'](A(0x127));modes[A(0x11d)](d)&&(this['_mode']=d,this[A(0x149)]=this[A(0x115)]()),this['_render']();}['_wireEvents'](){const B=r;this['_plane']['addEventListener']('pointerdown',c=>this['_startPlaneDrag'](c)),this[B(0x16e)]['addEventListener'](B(0x151),()=>this['_applyHue'](!![])),this[B(0x16e)]['addEventListener']('change',()=>this[B(0x161)]()),this['_alphaInput'][B(0x162)]('input',()=>this['_applyAlpha'](!![])),this['_alphaInput'][B(0x162)]('change',()=>this[B(0x161)]()),this[B(0x106)]['addEventListener'](B(0x143),()=>{const C=B;this['mode']=this['_modeSelect'][C(0x153)],this[C(0x161)]();}),this[B(0x104)][B(0x162)](B(0x151),()=>this[B(0x141)](!![])),this['_channels']['addEventListener']('change',()=>this['_commitCurrentValue']()),this['_textInput']['addEventListener'](B(0x151),()=>this[B(0x125)]()),this['_textInput'][B(0x162)](B(0x143),()=>this['_applyText']()),this['_textInput']['addEventListener']('keydown',c=>{const D=B;c['key']===D(0x140)&&(this[D(0x13d)](),this['_textInput'][D(0x155)]());});}[r(0x110)](c){const E=r;if(this[E(0x15a)]||this[E(0x171)])return;this[E(0x12c)]=c['pointerId'],this['_plane'][E(0x12e)](c['pointerId']),this['_applyPlanePointer'](c,!![]),this['_plane'][E(0x162)](E(0x170),this['_planePointerMove']),this[E(0x136)][E(0x162)]('pointerup',this[E(0x157)]),this['_plane'][E(0x162)](E(0x14d),this['_finishPlaneDrag']),c['preventDefault']();}['_planePointerMove']=c=>{const F=r;if(c['pointerId']===this[F(0x12c)])this[F(0x173)](c,!![]);};[r(0x157)]=c=>{const G=r;if(c['pointerId']!==this[G(0x12c)])return;this[G(0x12c)]=null,this['_plane'][G(0x185)]('pointermove',this[G(0x167)]),this['_plane']['removeEventListener'](G(0x166),this['_finishPlaneDrag']),this[G(0x136)]['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this[G(0x161)]();};['_applyPlanePointer'](c,d){const H=r,e=this['_plane'][H(0x16a)](),f=clamp((c[H(0x12f)]-e[H(0x18e)])/e[H(0x14f)],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e[H(0x189)],0x0,0x1),h=Number(this[H(0x16e)]['value'])||0x0;this[H(0x159)]=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this[H(0x181)]['a']},d);}[r(0x17d)](c){const I=r,d=rgbToHsv(this['_color']),e=Number(this['_hueInput']['value'])||0x0;this[I(0x159)]=normalizeHue(e),this[I(0x142)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const J=r;this['_setColor']({...this[J(0x181)],'a':clamp(Number(this['_alphaInput'][J(0x153)])/0x64,0x0,0x1)},c);}[r(0x141)](c){const K=r,d=[...this[K(0x104)]['querySelectorAll'](K(0x151))]['reduce']((f,g)=>{return f[g['name']]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[K(0x107)]===K(0x139))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[K(0x107)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[K(0x134)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const L=r,c=this['_textInput'][L(0x153)]['trim']();this[L(0x156)]['classList'][L(0x122)](L(0x119),c['length']>0x0&&!parseColor(c));}[r(0x13d)](){const M=r,c=parseColor(this['_textInput']['value']);this['_textInput'][M(0x180)]['toggle']('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this[M(0x156)]['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}[r(0x142)](c,d,e=!![],f=![]){const N=r,g=this[N(0x149)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this['_formatColor'](),this['_render'](e);if(d)this[N(0x13a)]['emit']({'newValue':this['_value'],'oldValue':g});else this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this[O(0x149)];this['_value']=this[O(0x115)](),this['valueChanged'][O(0x16c)]({'newValue':this['_value'],'oldValue':c});}[r(0x16d)](c=!![]){const P=r;if(!this[P(0x156)])return;const d=rgbToHsv(this[P(0x181)]);this['style'][P(0x145)](P(0x138),String(Math['round'](this[P(0x159)]))),this[P(0x15e)][P(0x145)](P(0x11f),toCssRgb(this[P(0x181)])),this['style']['setProperty']('--opaque-color','rgb('+this['_color']['r']+',\x20'+this[P(0x181)]['g']+',\x20'+this[P(0x181)]['b']+')'),this['style']['setProperty']('--rgb-color',this[P(0x181)]['r']+',\x20'+this[P(0x181)]['g']+',\x20'+this['_color']['b']),this['_planeHandle']['style'][P(0x18e)]=d['s']*0x64+'%',this[P(0x160)]['style']['top']=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x153)]=String(Math['round'](this['_hue'])),this[P(0x154)]['value']=String(Math['round'](this[P(0x181)]['a']*0x64)),this[P(0x147)]['textContent']=Math[P(0x13b)](this['_color']['a']*0x64)+'%',this['_modeSelect']['value']=this[P(0x107)];if(c)this[P(0x129)]();if(document[P(0x164)]!==this['_textInput'])this[P(0x156)][P(0x153)]=this['_value'];this[P(0x156)][P(0x180)]['remove'](P(0x119));}['_renderChannelInputs'](){const Q=r,c=getChannelValues(this['_color'],this['_mode']);this[Q(0x104)]['innerHTML']=c['map'](d=>Q(0x118)+d[Q(0x183)]+Q(0x116)+d['name']+'\x22\x20min=\x22'+d[Q(0x11a)]+'\x22\x20max=\x22'+d['max']+Q(0x15c)+d[Q(0x10b)]+'\x22\x20value=\x22'+d[Q(0x153)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[Q(0x148)]('');}[r(0x115)](){const R=r;return formatColor(this[R(0x181)],this['_mode']);}['_syncHueFromColor'](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x15e)]=css`
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
  `;static [r(0x133)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;['_value']=r(0x124);['_button'];[r(0x114)];[r(0x135)];[r(0x11c)]=![];['_outsidePointerHandler']=c=>this['_handleOutsidePointer'](c);[r(0x152)]=c=>this['_handleWindowKey'](c);get['value'](){return this['_value'];}set['value'](c){const S=r;this[S(0x17e)](c,![]);}get[r(0x15a)](){const T=r;return this[T(0x13c)](T(0x10e));}set[r(0x15a)](c){const U=r;this['toggleAttribute'](U(0x10e),c);}get['disabled'](){const V=r;return this[V(0x13c)]('disabled');}set['disabled'](c){const W=r;this[W(0x13f)](W(0x171),c);if(this['_button'])this[W(0x14c)]['disabled']=c;}constructor(){const X=r;super(),this[X(0x14c)]=this[X(0x102)]('button');}['ready'](){const Y=r,c=this[Y(0x178)]('value');if(c!=null)this[Y(0x17e)](c,![]);this['_button']['disabled']=this[Y(0x171)],this[Y(0x14c)]['addEventListener']('pointerdown',d=>this['_handleButtonPointerDown'](d)),this['_button'][Y(0x162)]('click',d=>this[Y(0x113)](d)),this['_button'][Y(0x162)](Y(0x108),d=>this['_handleButtonKeyDown'](d)),this['_renderSwatch']();}[r(0x10d)](){const Z=r;this[Z(0x111)]();}[r(0x112)](){const a0=r;if(this[a0(0x15a)]||this[a0(0x171)])return;if(this[a0(0x114)])this['_closePopup']();else this[a0(0x18f)]();}[r(0x182)](c){const a1=r;if(c['button']!==0x0)return;this['_ignoreNextClick']=!![],this[a1(0x112)](),c['preventDefault'](),c['stopPropagation']();}['_handleButtonClick'](c){const a2=r;if(this[a2(0x11c)]){this['_ignoreNextClick']=![],c[a2(0x16f)](),c['stopPropagation']();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){if(c['key']!=='Enter'&&c['key']!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c['stopPropagation']();}['_openPopup'](){const a3=r;this['_popup']=document[a3(0x15b)]('div'),this[a3(0x114)]['style']['position']='fixed',this['_popup'][a3(0x15e)]['zIndex']='100000',this[a3(0x114)][a3(0x15e)]['width']='280px',this[a3(0x135)]=document[a3(0x15b)](a3(0x146)),this['_editor'][a3(0x153)]=this['_value'],this['_editor'][a3(0x13a)]['on'](c=>{const a4=a3;this['_setValue'](c['newValue'],!![]),this['dispatchEvent'](new Event(a4(0x151),{'bubbles':!![],'composed':!![]}));}),this[a3(0x135)][a3(0x175)]['on'](c=>{const a5=a3;this['_setValue'](c[a5(0x130)],!![]),this[a5(0x11b)](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this['_editor']),document['body']['appendChild'](this[a3(0x114)]),this['_positionPopup'](),window[a3(0x162)]('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener'](a3(0x188),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window['addEventListener'](a3(0x108),this[a3(0x152)]),requestAnimationFrame(()=>window[a3(0x162)]('pointerdown',this[a3(0x14b)],!![]));}['_positionPopup'](){const a6=r;if(!this[a6(0x114)])return;const c=this[a6(0x16a)](),d=this[a6(0x114)]['offsetWidth']||0x118,e=this[a6(0x114)]['offsetHeight']||0x168;let f=c['left'],g=c[a6(0x177)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a6(0x163)]-0x8)g=c['top']-e-0x4;this['_popup'][a6(0x15e)][a6(0x18e)]=Math['max'](0x8,f)+'px',this[a6(0x114)][a6(0x15e)][a6(0x15f)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a7=r,d=c['composedPath']();if(d[a7(0x11d)](this)||this['_popup']&&d[a7(0x11d)](this[a7(0x114)]))return;this['_closePopup']();}['_handleWindowKey'](c){const a8=r;if(c[a8(0x172)]===a8(0x18b))this[a8(0x111)]();}['_closePopup'](){const a9=r;window['removeEventListener']('pointerdown',this[a9(0x14b)],!![]),window[a9(0x185)](a9(0x108),this['_windowKeyHandler']),this['_popup']?.[a9(0x120)](),this[a9(0x114)]=null,this['_editor']=null;}[r(0x17e)](c,d){const aa=r;this[aa(0x149)]=c??'';if(d)this[aa(0x11e)]('value',this[aa(0x149)]);this['_renderSwatch']();}['_renderSwatch'](){const c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ab=r;if(!c)return null;const d=c['trim']();if(d[ab(0x179)]()===ab(0x186))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ab(0x10c)](g);if(h?.[ab(0x128)])return normalizeColor({'r':h['red'],'g':h['green'],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ac=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ac(0x179)]();if(e==='rgb'||e===ac(0x184))return'rgb';if(e===ac(0x139)||e==='hsla')return'hsl';if(e==='cmyk')return'cmyk';if(e==='oklab')return ac(0x105);if(e===ac(0x158))return'oklch';return null;}function normalizeModernColorSyntax(c){const ad=r;return c[ad(0x150)](/,\s*/g,',')[ad(0x150)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ae=r;if(d[ae(0x11d)](',')){const h=d[ae(0x17b)](',')['map'](i=>i[ae(0x132)]());if(h['length']===0x4&&h[0x3][ae(0x103)]('%'))h[0x3]=String(Number(h[0x3][ae(0x17f)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ae(0x148)](',')+')';}const [e,f]=d['split']('/')['map'](i=>i[ae(0x132)]()),g=e[ae(0x17b)](/\s+/)['filter'](Boolean);if(f)g[ae(0x17a)](f['endsWith']('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const af=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[af(0x17c)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[af(0x17c)]===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[af(0x17c)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ag=r,d=/^(oklab|oklch)\((.*)\)$/i[ag(0x10f)](c);if(!d)return null;const e=d[0x1][ag(0x179)](),[f,g]=d[0x2][ag(0x17b)]('/')[ag(0x117)](j=>j[ag(0x132)]()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)[ag(0x15d)](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ah=r,e=round(c['a'],0x3);if(d===ah(0x165))return c['a']>=0x1?ah(0x16b)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===ah(0x139)){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[ah(0x13b)](g['h'])+',\x20'+Math[ah(0x13b)](g['s']*0x64)+ah(0x18d)+Math[ah(0x13b)](g['l']*0x64)+'%)':ah(0x12d)+Math[ah(0x13b)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ah(0x13b)](g['l']*0x64)+ah(0x18d)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[ah(0x13b)](h['c']*0x64)+ah(0x18d)+Math[ah(0x13b)](h['m']*0x64)+'%,\x20'+Math[ah(0x13b)](h['y']*0x64)+ah(0x18d)+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ah(0x190)+i+')':ah(0x190)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ah(0x123)+e)+')';}const f=rgbToOklch(c);return ah(0x18a)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ah(0x123)+e)+')';}function getChannelValues(c,d){const ai=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ai(0x13b)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x13b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ai(0x13b)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ai(0x134),'value':Math[ai(0x13b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const aj=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[aj(0x13b)](clamp(c['g'],0x0,0xff)),'b':Math[aj(0x13b)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[aj(0x12b)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[ak(0x11a)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const al=r,i=f*e,j=i*(0x1-Math[al(0x10a)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const am=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[am(0x14a)](e,f,i),k=Math[am(0x11a)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[am(0x10a)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const an=r,f=Math[an(0x144)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ao=r,e=rgbToOklab(d),f=Math[ao(0x121)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ap=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ap(0x126)](g),e*Math[ap(0x12a)](g));}function b(c,d){c=c-0x102;const e=a();let f=e[c];return f;}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const aq=r;return c[aq(0x103)]('%')?Number(c[aq(0x17f)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ar=r;return Math['min'](e,Math[ar(0x14a)](d,Number[ar(0x12b)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const as=r,e=Math[as(0x144)](0xa,d);return Math['round'](c*e)/e;}function a(){const at=['_setValue','slice','classList','_color','_handleButtonPointerDown','label','rgba','removeEventListener','transparent','1172898kPvGjg','scroll','height','oklch(','Escape','2899870UUlwiq','%,\x20','left','_openPopup','cmyk(','_getDomElement','endsWith','_channels','oklab','_modeSelect','_mode','keydown','5PHHqPs','abs','step','toColorObject','disconnectedCallback','readonly','exec','_startPlaneDrag','_closePopup','_togglePopup','_handleButtonClick','_popup','_formatColor','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','map','\x0a\x20\x20\x20\x20\x20\x20<label>','invalid','min','dispatchEvent','_ignoreNextClick','includes','setAttribute','--color','remove','sqrt','toggle','\x20/\x20','#000000','_validateTextInput','cos','mode','valid','_renderChannelInputs','sin','isFinite','_dragPointerId','hsla(','setPointerCapture','clientX','newValue','841473dfpRux','trim','template','alpha','_editor','_plane','5416873LgMoDp','--hue','hsl','valuePreviewChanged','round','hasAttribute','_applyText','572922kMLzut','toggleAttribute','Enter','_applyChannelInputs','_setColor','change','pow','setProperty','node-projects-color-editor','_alphaLabel','join','_value','max','_outsidePointerHandler','_button','pointercancel','368UdRoYC','width','replace','input','_windowKeyHandler','value','_alphaInput','blur','_textInput','_finishPlaneDrag','oklch','_hue','readOnly','createElement','\x22\x20step=\x22','filter','style','top','_planeHandle','_commitCurrentValue','addEventListener','innerHeight','activeElement','rgb','pointerup','_planePointerMove','hue','18ZeTMdm','getBoundingClientRect','rgb(','emit','_render','_hueInput','preventDefault','pointermove','disabled','key','_applyPlanePointer','1013128zTGgIF','valueChanged','18432OgkqRo','bottom','getAttribute','toLowerCase','push','split','length','_applyHue'];a=function(){return at;};return a();}customElements['define']('node-projects-color-editor',ColorEditor),customElements['define']('node-projects-color-input',ColorInput);