const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x1e3))/0x1+parseInt(q(0x176))/0x2+-parseInt(q(0x1e4))/0x3*(parseInt(q(0x1bb))/0x4)+-parseInt(q(0x1a7))/0x5+-parseInt(q(0x179))/0x6+-parseInt(q(0x162))/0x7+parseInt(q(0x1e6))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd4fde));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x18c),'cmyk','oklab',r(0x1c2)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x160)]=css`
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
  `;static [r(0x1cc)]=html`
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
  `;[r(0x1c4)]=new TypedEvent();[r(0x16a)]=new TypedEvent();['_value']=r(0x190);[r(0x197)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';['_hue']=0x0;[r(0x1a1)];[r(0x193)];[r(0x17e)];['_alphaInput'];['_alphaLabel'];[r(0x1a9)];[r(0x1e5)];['_textInput'];[r(0x1e0)]=null;get[r(0x191)](){return this['_value'];}set[r(0x191)](c){const s=r,d=parseColor(c);if(d){this[s(0x197)]=d,this[s(0x1b2)]=inferColorMode(c)??this['_mode'],this[s(0x1b5)](),this['_value']=this[s(0x1ba)](),this['_render']();return;}this[s(0x19e)]=c??'',this[s(0x172)]();}get['mode'](){const t=r;return this[t(0x1b2)];}set['mode'](c){const u=r;modes[u(0x1a5)](c)&&(this[u(0x1b2)]=c,this[u(0x19e)]=this['_formatColor'](),this['_render']());}get['readOnly'](){const v=r;return this[v(0x167)]('readonly');}set['readOnly'](c){const w=r;this[w(0x184)]('readonly',c);}get['disabled'](){const x=r;return this[x(0x167)](x(0x1af));}set['disabled'](c){const y=r;this[y(0x184)]('disabled',c);}constructor(){const z=r;super(),this[z(0x1a1)]=this['_getDomElement'](z(0x19c)),this[z(0x193)]=this[z(0x1b4)]('plane-handle'),this[z(0x17e)]=this[z(0x1b4)]('hue'),this['_alphaInput']=this[z(0x1b4)](z(0x198)),this[z(0x1b7)]=this['_getDomElement'](z(0x1d5)),this['_modeSelect']=this[z(0x1b4)]('mode'),this[z(0x1e5)]=this['_getDomElement'](z(0x1ae)),this[z(0x196)]=this['_getDomElement']('text');}[r(0x161)](){const A=r;this[A(0x1b6)]();const c=this[A(0x1aa)]('value');if(c!=null)this['value']=c;const d=this[A(0x1aa)]('mode');modes['includes'](d)&&(this[A(0x1b2)]=d,this[A(0x19e)]=this['_formatColor']()),this[A(0x172)]();}['_wireEvents'](){const B=r;this['_plane'][B(0x1b3)](B(0x1cb),c=>this[B(0x18e)](c)),this[B(0x17e)][B(0x1b3)]('input',()=>this['_applyHue'](!![])),this['_hueInput'][B(0x1b3)](B(0x1bd),()=>this['_commitCurrentValue']()),this['_alphaInput']['addEventListener'](B(0x1c7),()=>this[B(0x1a6)](!![])),this['_alphaInput']['addEventListener']('change',()=>this[B(0x1ca)]()),this[B(0x1a9)]['addEventListener']('change',()=>{const C=B;this[C(0x1e1)]=this['_modeSelect'][C(0x191)],this['_commitCurrentValue']();}),this['_channels'][B(0x1b3)]('input',()=>this['_applyChannelInputs'](!![])),this['_channels'][B(0x1b3)]('change',()=>this['_commitCurrentValue']()),this['_textInput'][B(0x1b3)](B(0x1c7),()=>this[B(0x1b0)]()),this['_textInput']['addEventListener']('change',()=>this[B(0x1d9)]()),this['_textInput'][B(0x1b3)](B(0x194),c=>{const D=B;c['key']==='Enter'&&(this[D(0x1d9)](),this[D(0x196)][D(0x1c8)]());});}[r(0x18e)](c){const E=r;if(this['readOnly']||this['disabled'])return;this['_dragPointerId']=c['pointerId'],this[E(0x1a1)][E(0x1d4)](c['pointerId']),this['_applyPlanePointer'](c,!![]),this['_plane']['addEventListener']('pointermove',this['_planePointerMove']),this['_plane'][E(0x1b3)]('pointerup',this['_finishPlaneDrag']),this['_plane']['addEventListener'](E(0x1dc),this[E(0x165)]),c['preventDefault']();}[r(0x15a)]=c=>{const F=r;if(c[F(0x152)]===this['_dragPointerId'])this[F(0x1db)](c,!![]);};[r(0x165)]=c=>{const G=r;if(c['pointerId']!==this['_dragPointerId'])return;this['_dragPointerId']=null,this['_plane'][G(0x158)]('pointermove',this['_planePointerMove']),this['_plane']['removeEventListener']('pointerup',this[G(0x165)]),this[G(0x1a1)]['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this['_commitCurrentValue']();};[r(0x1db)](c,d){const H=r,e=this['_plane'][H(0x1cf)](),f=clamp((c[H(0x195)]-e['left'])/e[H(0x153)],0x0,0x1),g=clamp(0x1-(c['clientY']-e[H(0x1da)])/e['height'],0x0,0x1),h=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this[H(0x197)]['a']},d);}[r(0x163)](c){const I=r,d=rgbToHsv(this['_color']),e=Number(this['_hueInput'][I(0x191)])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[I(0x197)]['a']},c);}[r(0x1a6)](c){const J=r;this[J(0x1a2)]({...this['_color'],'a':clamp(Number(this[J(0x16b)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this[K(0x1e5)][K(0x18d)]('input')]['reduce']((f,g)=>{const L=K;return f[g[L(0x15b)]]=Number(g[L(0x191)]),f;},{});let e;if(this['_mode']===K(0x1de))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===K(0x15d))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const M=r,c=this[M(0x196)]['value']['trim']();this[M(0x196)][M(0x1d0)]['toggle']('invalid',c[M(0x168)]>0x0&&!parseColor(c));}[r(0x1d9)](){const N=r,c=parseColor(this['_textInput'][N(0x191)]);this['_textInput']['classList'][N(0x155)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput']['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const O=r,g=this[O(0x19e)];this[O(0x197)]=normalizeColor(c);if(f)this[O(0x1b5)]();this['_value']=this[O(0x1ba)](),this[O(0x172)](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this['_value'],'oldValue':g});else this[O(0x1c4)][O(0x187)]({'newValue':this['_value'],'oldValue':g});}[r(0x1ca)](){const P=r,c=this[P(0x19e)];this[P(0x19e)]=this['_formatColor'](),this[P(0x1c4)]['emit']({'newValue':this['_value'],'oldValue':c});}[r(0x172)](c=!![]){const Q=r;if(!this[Q(0x196)])return;const d=rgbToHsv(this['_color']);this['style']['setProperty']('--hue',String(Math['round'](this['_hue']))),this[Q(0x160)]['setProperty'](Q(0x17b),toCssRgb(this[Q(0x197)])),this['style'][Q(0x1d7)](Q(0x173),Q(0x1e7)+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']+')'),this[Q(0x160)][Q(0x1d7)]('--rgb-color',this[Q(0x197)]['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']),this[Q(0x193)]['style']['left']=d['s']*0x64+'%',this['_planeHandle']['style'][Q(0x1da)]=(0x1-d['v'])*0x64+'%',this['_hueInput']['value']=String(Math['round'](this['_hue'])),this[Q(0x16b)]['value']=String(Math['round'](this[Q(0x197)]['a']*0x64)),this[Q(0x1b7)]['textContent']=Math[Q(0x1c5)](this[Q(0x197)]['a']*0x64)+'%',this[Q(0x1a9)][Q(0x191)]=this['_mode'];if(c)this['_renderChannelInputs']();if(document[Q(0x1ce)]!==this['_textInput'])this['_textInput'][Q(0x191)]=this[Q(0x19e)];this['_textInput']['classList']['remove'](Q(0x1be));}[r(0x1ac)](){const R=r,c=getChannelValues(this[R(0x197)],this['_mode']);this['_channels'][R(0x1bf)]=c['map'](d=>R(0x169)+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[R(0x15b)]+R(0x18b)+d[R(0x1c0)]+R(0x15c)+d[R(0x164)]+R(0x1e8)+d['step']+'\x22\x20value=\x22'+d[R(0x191)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[R(0x16c)]('');}[r(0x1ba)](){const S=r;return formatColor(this[S(0x197)],this['_mode']);}[r(0x1b5)](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x19e)]=r(0x190);[r(0x1c6)];['_popup'];['_editor'];[r(0x1ab)]=![];[r(0x1b8)]=c=>this['_handleOutsidePointer'](c);[r(0x1a8)]=c=>this[r(0x19b)](c);get[r(0x191)](){return this['_value'];}set[r(0x191)](c){const T=r;this[T(0x175)](c,![]);}get[r(0x1bc)](){return this['hasAttribute']('readonly');}set[r(0x1bc)](c){const U=r;this[U(0x184)](U(0x17a),c);}get[r(0x1af)](){const V=r;return this['hasAttribute'](V(0x1af));}set['disabled'](c){const W=r;this['toggleAttribute']('disabled',c);if(this['_button'])this['_button'][W(0x1af)]=c;}constructor(){const X=r;super(),this[X(0x1c6)]=this[X(0x1b4)]('button');}[r(0x161)](){const Y=r,c=this['getAttribute']('value');if(c!=null)this['_setValue'](c,![]);this[Y(0x1c6)][Y(0x1af)]=this[Y(0x1af)],this['_button'][Y(0x1b3)]('pointerdown',d=>this['_handleButtonPointerDown'](d)),this[Y(0x1c6)]['addEventListener'](Y(0x16f),d=>this['_handleButtonClick'](d)),this['_button']['addEventListener'](Y(0x194),d=>this['_handleButtonKeyDown'](d)),this['_renderSwatch']();}['disconnectedCallback'](){const Z=r;this[Z(0x1c9)]();}[r(0x19d)](){const a0=r;if(this[a0(0x1bc)]||this[a0(0x1af)])return;if(this['_popup'])this['_closePopup']();else this['_openPopup']();}[r(0x1a0)](c){const a1=r;if(c[a1(0x1d1)]!==0x0)return;this['_ignoreNextClick']=!![],this[a1(0x19d)](),c['preventDefault'](),c['stopPropagation']();}['_handleButtonClick'](c){const a2=r;if(this['_ignoreNextClick']){this[a2(0x1ab)]=![],c[a2(0x1e9)](),c['stopPropagation']();return;}this[a2(0x19d)]();}['_handleButtonKeyDown'](c){const a3=r;if(c['key']!==a3(0x182)&&c[a3(0x18f)]!=='\x20')return;this[a3(0x19d)](),c[a3(0x1e9)](),c['stopPropagation']();}['_openPopup'](){const a4=r;this[a4(0x180)]=document['createElement'](a4(0x17c)),this[a4(0x180)]['style'][a4(0x181)]='fixed',this[a4(0x180)]['style']['zIndex']='100000',this[a4(0x180)][a4(0x160)][a4(0x153)]='280px',this[a4(0x199)]=document[a4(0x154)](a4(0x1d2)),this['_editor']['value']=this[a4(0x19e)],this['_editor']['valuePreviewChanged']['on'](c=>{const a5=a4;this['_setValue'](c[a5(0x19f)],!![]),this['dispatchEvent'](new Event(a5(0x1c7),{'bubbles':!![],'composed':!![]}));}),this[a4(0x199)][a4(0x1c4)]['on'](c=>{const a6=a4;this['_setValue'](c['newValue'],!![]),this[a6(0x1d8)](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup'][a4(0x189)](this['_editor']),document['body'][a4(0x189)](this['_popup']),this['_positionPopup'](),window['addEventListener'](a4(0x18a),()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener'](a4(0x159),()=>this[a4(0x188)](),{'once':!![],'capture':!![]}),window['addEventListener']('keydown',this[a4(0x1a8)]),requestAnimationFrame(()=>window[a4(0x1b3)]('pointerdown',this[a4(0x1b8)],!![]));}['_positionPopup'](){const a7=r;if(!this['_popup'])return;const c=this['getBoundingClientRect'](),d=this['_popup'][a7(0x1a4)]||0x118,e=this['_popup'][a7(0x174)]||0x168;let f=c['left'],g=c['bottom']+0x4;if(f+d>window['innerWidth']-0x8)f=window[a7(0x15f)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a7(0x1da)]-e-0x4;this['_popup'][a7(0x160)][a7(0x15e)]=Math['max'](0x8,f)+'px',this[a7(0x180)][a7(0x160)][a7(0x1da)]=Math[a7(0x164)](0x8,g)+'px';}[r(0x185)](c){const a8=r,d=c[a8(0x170)]();if(d[a8(0x1a5)](this)||this['_popup']&&d['includes'](this['_popup']))return;this['_closePopup']();}[r(0x19b)](c){const a9=r;if(c[a9(0x18f)]===a9(0x1a3))this['_closePopup']();}[r(0x1c9)](){const aa=r;window[aa(0x158)](aa(0x1cb),this[aa(0x1b8)],!![]),window['removeEventListener']('keydown',this[aa(0x1a8)]),this['_popup']?.['remove'](),this[aa(0x180)]=null,this['_editor']=null;}['_setValue'](c,d){const ab=r;this['_value']=c??'';if(d)this[ab(0x1b1)]('value',this[ab(0x19e)]);this['_renderSwatch']();}[r(0x17f)](){const ac=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ac(0x160)]['setProperty'](ac(0x17b),toCssRgb(c));}}function parseColor(c){const ad=r;if(!c)return null;const d=c['trim']();if(d[ad(0x157)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ad(0x1ad)](g);if(h?.[ad(0x192)])return normalizeColor({'r':h['red'],'g':h['green'],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ae=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e===ae(0x1ea))return'rgb';if(e==='hsl'||e===ae(0x183))return'hsl';if(e==='cmyk')return'cmyk';if(e===ae(0x15d))return ae(0x15d);if(e==='oklch')return'oklch';return null;}function normalizeModernColorSyntax(c){const af=r;return c[af(0x16e)](/,\s*/g,',')[af(0x16e)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(af(0x1de),e))[af(0x16e)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(af(0x18c),e));}function normalizeFunctionBody(c,d){const ag=r;if(d[ag(0x1a5)](',')){const h=d['split'](',')[ag(0x1df)](i=>i[ag(0x1c3)]());if(h[ag(0x168)]===0x4&&h[0x3][ag(0x166)]('%'))h[0x3]=String(Number(h[0x3][ag(0x1d3)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ag(0x171)]('/')['map'](i=>i[ag(0x1c3)]()),g=e['split'](/\s+/)[ag(0x178)](Boolean);if(f)g[ag(0x1dd)](f[ag(0x166)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ah=r,d=/^#([0-9a-f]{3,8})$/i[ah(0x1b9)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ah(0x168)]===0x1?g+g:g,0x10);if(e[ah(0x168)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e['length']===0x8)return normalizeColor({'r':f(e[ah(0x1d3)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[ah(0x1d3)](0x4,0x6)),'a':e[ah(0x168)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ai=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1][ai(0x157)](),[f,g]=d[0x2]['split']('/')['map'](j=>j[ai(0x1c3)]()),h=f[ai(0x16e)](/,/g,'\x20')['split'](/\s+/)[ai(0x178)](Boolean);if(h[ai(0x168)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const aj=r,e=round(c['a'],0x3);if(d===aj(0x1de))return c['a']>=0x1?aj(0x1e7)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':aj(0x19a)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===aj(0x18c)){const g=rgbToHsl(c);return c['a']>=0x1?aj(0x1cd)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+aj(0x1e2)+Math['round'](g['l']*0x64)+'%)':'hsla('+Math['round'](g['h'])+',\x20'+Math[aj(0x1c5)](g['s']*0x64)+aj(0x1e2)+Math[aj(0x1c5)](g['l']*0x64)+aj(0x1e2)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[aj(0x1c5)](h['c']*0x64)+aj(0x1e2)+Math['round'](h['m']*0x64)+'%,\x20'+Math[aj(0x1c5)](h['y']*0x64)+'%,\x20'+Math[aj(0x1c5)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return aj(0x156)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function a(){const ax=['sqrt','emit','_positionPopup','appendChild','resize','\x22\x20min=\x22','hsl','querySelectorAll','_startPlaneDrag','key','#000000','value','valid','_planeHandle','keydown','clientX','_textInput','_color','alpha','_editor','rgba(','_handleWindowKey','plane','_togglePopup','_value','newValue','_handleButtonPointerDown','_plane','_setColor','Escape','offsetWidth','includes','_applyAlpha','5160670jScfgf','_windowKeyHandler','_modeSelect','getAttribute','_ignoreNextClick','_renderChannelInputs','toColorObject','channels','disabled','_validateTextInput','setAttribute','_mode','addEventListener','_getDomElement','_syncHueFromColor','_wireEvents','_alphaLabel','_outsidePointerHandler','exec','_formatColor','5197100OgQGrc','readOnly','change','invalid','innerHTML','min','sin','oklch','trim','valueChanged','round','_button','input','blur','_closePopup','_commitCurrentValue','pointerdown','template','hsl(','activeElement','getBoundingClientRect','classList','button','node-projects-color-editor','slice','setPointerCapture','alpha-label','define','setProperty','dispatchEvent','_applyText','top','_applyPlanePointer','pointercancel','push','rgb','map','_dragPointerId','mode','%,\x20','358690gSDxKm','3UTdqLH','_channels','33660288twCOQl','rgb(','\x22\x20step=\x22','preventDefault','rgba','isFinite','pointerId','width','createElement','toggle','oklab(','toLowerCase','removeEventListener','scroll','_planePointerMove','name','\x22\x20max=\x22','oklab','left','innerWidth','style','ready','10130099QsnkFE','_applyHue','max','_finishPlaneDrag','endsWith','hasAttribute','length','\x0a\x20\x20\x20\x20\x20\x20<label>','valuePreviewChanged','_alphaInput','join','pow','replace','click','composedPath','split','_render','--opaque-color','offsetHeight','_setValue','276658zxDJVr','abs','filter','321450XOwbjz','readonly','--color','div','cmyk','_hueInput','_renderSwatch','_popup','position','Enter','hsla','toggleAttribute','_handleOutsidePointer'];a=function(){return ax;};return a();}function getChannelValues(c,d){const ak=r;if(d===ak(0x1de))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ak(0x1c5)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ak(0x18c)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ak(0x1c5)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ak(0x1c5)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ak(0x1c5)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ak(0x17d)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ak(0x1c5)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ak(0x1c5)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ak(0x15d)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ak(0x198),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const al=r;return{'r':Math[al(0x1c5)](clamp(c['r'],0x0,0xff)),'g':Math[al(0x1c5)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const am=r;return am(0x19a)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[an(0x164)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const ao=r,i=f*e,j=i*(0x1-Math[ao(0x177)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ap=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[ap(0x1c0)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ap(0x177)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const aq=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[aq(0x177)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const ar=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[ar(0x164)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const as=r,e=rgbToOklab(d),f=Math[as(0x186)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const at=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[at(0x1c1)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const au=r;return c<=0.0031308?12.92*c:1.055*Math[au(0x16d)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const av=r;return Math[av(0x1c0)](e,Math['max'](d,Number[av(0x151)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const aw=r,e=Math['pow'](0xa,d);return Math[aw(0x1c5)](c*e)/e;}function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}customElements[r(0x1d6)](r(0x1d2),ColorEditor),customElements['define']('node-projects-color-input',ColorInput);