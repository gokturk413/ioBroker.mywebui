const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x1c0))/0x1*(-parseInt(q(0x1a9))/0x2)+parseInt(q(0x1d8))/0x3*(parseInt(q(0x161))/0x4)+-parseInt(q(0x1d7))/0x5*(parseInt(q(0x1bc))/0x6)+-parseInt(q(0x170))/0x7*(-parseInt(q(0x1a4))/0x8)+parseInt(q(0x1b7))/0x9+parseInt(q(0x1e0))/0xa+-parseInt(q(0x174))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1ecb4));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x1e9),'cmyk','oklab','oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x1ec)]=css`
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
  `;static [r(0x1d6)]=html`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();['_value']='#000000';[r(0x15f)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';[r(0x16e)]=0x0;[r(0x1c7)];[r(0x1ed)];[r(0x1f7)];['_alphaInput'];[r(0x1c5)];['_modeSelect'];[r(0x18d)];['_textInput'];['_dragPointerId']=null;get[r(0x1c6)](){return this['_value'];}set['value'](c){const s=r,d=parseColor(c);if(d){this[s(0x15f)]=d,this['_mode']=inferColorMode(c)??this[s(0x1f1)],this['_syncHueFromColor'](),this['_value']=this['_formatColor'](),this['_render']();return;}this['_value']=c??'',this['_render']();}get[r(0x172)](){return this['_mode'];}set[r(0x172)](c){const t=r;modes['includes'](c)&&(this['_mode']=c,this[t(0x1bb)]=this['_formatColor'](),this['_render']());}get[r(0x181)](){return this['hasAttribute']('readonly');}set['readOnly'](c){const u=r;this['toggleAttribute'](u(0x177),c);}get['disabled'](){const v=r;return this['hasAttribute'](v(0x183));}set['disabled'](c){const w=r;this['toggleAttribute'](w(0x183),c);}constructor(){const x=r;super(),this['_plane']=this[x(0x19e)]('plane'),this[x(0x1ed)]=this['_getDomElement'](x(0x1d4)),this[x(0x1f7)]=this['_getDomElement'](x(0x156)),this['_alphaInput']=this['_getDomElement'](x(0x15d)),this['_alphaLabel']=this['_getDomElement'](x(0x1f5)),this[x(0x1e8)]=this[x(0x19e)]('mode'),this['_channels']=this['_getDomElement']('channels'),this['_textInput']=this[x(0x19e)](x(0x190));}[r(0x1cd)](){const y=r;this['_wireEvents']();const c=this['getAttribute']('value');if(c!=null)this[y(0x1c6)]=c;const d=this[y(0x191)]('mode');modes[y(0x18a)](d)&&(this['_mode']=d,this[y(0x1bb)]=this[y(0x19a)]()),this[y(0x192)]();}[r(0x15b)](){const z=r;this[z(0x1c7)]['addEventListener'](z(0x1de),c=>this[z(0x164)](c)),this['_hueInput']['addEventListener']('input',()=>this[z(0x1a1)](!![])),this[z(0x1f7)]['addEventListener'](z(0x162),()=>this[z(0x1a7)]()),this['_alphaInput'][z(0x1b9)](z(0x1ea),()=>this['_applyAlpha'](!![])),this[z(0x1f8)][z(0x1b9)]('change',()=>this['_commitCurrentValue']()),this[z(0x1e8)][z(0x1b9)]('change',()=>{const A=z;this['mode']=this['_modeSelect']['value'],this[A(0x1a7)]();}),this['_channels']['addEventListener']('input',()=>this['_applyChannelInputs'](!![])),this['_channels']['addEventListener'](z(0x162),()=>this['_commitCurrentValue']()),this[z(0x1f6)][z(0x1b9)](z(0x1ea),()=>this['_validateTextInput']()),this['_textInput'][z(0x1b9)](z(0x162),()=>this['_applyText']()),this[z(0x1f6)]['addEventListener']('keydown',c=>{const B=z;c[B(0x163)]===B(0x189)&&(this['_applyText'](),this['_textInput']['blur']());});}['_startPlaneDrag'](c){const C=r;if(this[C(0x181)]||this[C(0x183)])return;this[C(0x1a2)]=c['pointerId'],this['_plane'][C(0x195)](c[C(0x1db)]),this[C(0x1dd)](c,!![]),this[C(0x1c7)][C(0x1b9)](C(0x188),this[C(0x1d0)]),this[C(0x1c7)][C(0x1b9)](C(0x15e),this[C(0x1ae)]),this['_plane']['addEventListener'](C(0x1d2),this[C(0x1ae)]),c[C(0x197)]();}[r(0x1d0)]=c=>{const D=r;if(c['pointerId']===this[D(0x1a2)])this[D(0x1dd)](c,!![]);};[r(0x1ae)]=c=>{const E=r;if(c['pointerId']!==this['_dragPointerId'])return;this['_dragPointerId']=null,this[E(0x1c7)][E(0x1bf)](E(0x188),this['_planePointerMove']),this[E(0x1c7)][E(0x1bf)]('pointerup',this['_finishPlaneDrag']),this['_plane']['removeEventListener']('pointercancel',this[E(0x1ae)]),this[E(0x1a7)]();};[r(0x1dd)](c,d){const F=r,e=this['_plane']['getBoundingClientRect'](),f=clamp((c['clientX']-e[F(0x1ad)])/e[F(0x1d1)],0x0,0x1),g=clamp(0x1-(c[F(0x1ac)]-e[F(0x1f3)])/e['height'],0x0,0x1),h=Number(this['_hueInput']['value'])||0x0;this[F(0x16e)]=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1a1)](c){const G=r,d=rgbToHsv(this[G(0x15f)]),e=Number(this[G(0x1f7)]['value'])||0x0;this['_hue']=normalizeHue(e),this[G(0x19b)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}[r(0x15c)](c){const H=r;this[H(0x19b)]({...this[H(0x15f)],'a':clamp(Number(this['_alphaInput']['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const I=r,d=[...this[I(0x18d)]['querySelectorAll'](I(0x1ea))][I(0x18c)]((f,g)=>{const J=I;return f[g[J(0x1c1)]]=Number(g[J(0x1c6)]),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[I(0x1f1)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[I(0x1f1)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[I(0x1f1)]===I(0x1b5))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const K=r,c=this[K(0x1f6)]['value']['trim']();this[K(0x1f6)][K(0x16d)][K(0x1c9)](K(0x1ab),c[K(0x1d9)]>0x0&&!parseColor(c));}[r(0x1a8)](){const L=r,c=parseColor(this[L(0x1f6)]['value']);this['_textInput'][L(0x16d)]['toggle'](L(0x1ab),!c);if(!c)return;this['_mode']=inferColorMode(this['_textInput']['value'])??this[L(0x1f1)],this[L(0x19b)](c,![],!![],!![]);}[r(0x19b)](c,d,e=!![],f=![]){const M=r,g=this[M(0x1bb)];this['_color']=normalizeColor(c);if(f)this[M(0x1b6)]();this['_value']=this['_formatColor'](),this[M(0x192)](e);if(d)this[M(0x1ee)][M(0x1e5)]({'newValue':this[M(0x1bb)],'oldValue':g});else this['valueChanged'][M(0x1e5)]({'newValue':this[M(0x1bb)],'oldValue':g});}['_commitCurrentValue'](){const N=r,c=this[N(0x1bb)];this[N(0x1bb)]=this[N(0x19a)](),this['valueChanged'][N(0x1e5)]({'newValue':this[N(0x1bb)],'oldValue':c});}['_render'](c=!![]){const O=r;if(!this[O(0x1f6)])return;const d=rgbToHsv(this['_color']);this['style']['setProperty']('--hue',String(Math[O(0x16a)](this[O(0x16e)]))),this['style']['setProperty'](O(0x168),toCssRgb(this[O(0x15f)])),this['style']['setProperty']('--opaque-color',O(0x1be)+this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[O(0x15f)]['b']+')'),this[O(0x1ec)]['setProperty']('--rgb-color',this[O(0x15f)]['r']+',\x20'+this['_color']['g']+',\x20'+this[O(0x15f)]['b']),this[O(0x1ed)]['style'][O(0x1ad)]=d['s']*0x64+'%',this['_planeHandle'][O(0x1ec)]['top']=(0x1-d['v'])*0x64+'%',this['_hueInput'][O(0x1c6)]=String(Math[O(0x16a)](this['_hue'])),this['_alphaInput'][O(0x1c6)]=String(Math[O(0x16a)](this[O(0x15f)]['a']*0x64)),this[O(0x1c5)][O(0x1ca)]=Math[O(0x16a)](this[O(0x15f)]['a']*0x64)+'%',this['_modeSelect'][O(0x1c6)]=this[O(0x1f1)];if(c)this[O(0x18b)]();if(document['activeElement']!==this['_textInput'])this[O(0x1f6)]['value']=this['_value'];this[O(0x1f6)]['classList']['remove'](O(0x1ab));}['_renderChannelInputs'](){const P=r,c=getChannelValues(this['_color'],this[P(0x1f1)]);this[P(0x18d)]['innerHTML']=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d[P(0x196)]+P(0x173)+d[P(0x1c1)]+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d[P(0x1ba)]+'\x22\x20step=\x22'+d[P(0x1d5)]+P(0x199)+d['value']+P(0x160))[P(0x15a)]('');}['_formatColor'](){const Q=r;return formatColor(this[Q(0x15f)],this['_mode']);}[r(0x1b6)](){const R=r,c=rgbToHsv(this[R(0x15f)]);if(c['s']>epsilon&&c['v']>epsilon)this[R(0x16e)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[r(0x1bb)]=r(0x18e);['_button'];[r(0x1e6)];[r(0x17b)];['_ignoreNextClick']=![];['_outsidePointerHandler']=c=>this[r(0x165)](c);['_windowKeyHandler']=c=>this[r(0x19d)](c);get['value'](){const S=r;return this[S(0x1bb)];}set[r(0x1c6)](c){const T=r;this[T(0x167)](c,![]);}get['readOnly'](){const U=r;return this['hasAttribute'](U(0x177));}set[r(0x181)](c){const V=r;this[V(0x17d)](V(0x177),c);}get['disabled'](){const W=r;return this[W(0x186)]('disabled');}set['disabled'](c){const X=r;this[X(0x17d)]('disabled',c);if(this['_button'])this['_button'][X(0x183)]=c;}constructor(){const Y=r;super(),this[Y(0x1a3)]=this[Y(0x19e)](Y(0x178));}['ready'](){const Z=r,c=this[Z(0x191)](Z(0x1c6));if(c!=null)this[Z(0x167)](c,![]);this['_button'][Z(0x183)]=this['disabled'],this['_button']['addEventListener'](Z(0x1de),d=>this['_handleButtonPointerDown'](d)),this[Z(0x1a3)][Z(0x1b9)]('click',d=>this['_handleButtonClick'](d)),this[Z(0x1a3)][Z(0x1b9)]('keydown',d=>this[Z(0x159)](d)),this[Z(0x176)]();}[r(0x193)](){const a0=r;this[a0(0x179)]();}['_togglePopup'](){const a1=r;if(this['readOnly']||this['disabled'])return;if(this['_popup'])this[a1(0x179)]();else this[a1(0x198)]();}['_handleButtonPointerDown'](c){const a2=r;if(c['button']!==0x0)return;this[a2(0x171)]=!![],this[a2(0x1ef)](),c[a2(0x197)](),c['stopPropagation']();}['_handleButtonClick'](c){const a3=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c[a3(0x197)](),c['stopPropagation']();return;}this[a3(0x1ef)]();}[r(0x159)](c){const a4=r;if(c['key']!=='Enter'&&c['key']!=='\x20')return;this[a4(0x1ef)](),c[a4(0x197)](),c[a4(0x1aa)]();}['_openPopup'](){const a5=r;this[a5(0x1e6)]=document['createElement'](a5(0x1e3)),this['_popup']['style']['position']=a5(0x1d3),this[a5(0x1e6)][a5(0x1ec)][a5(0x17a)]=a5(0x1f2),this['_popup']['style'][a5(0x1d1)]=a5(0x1b1),this['_editor']=document[a5(0x1e7)]('node-projects-color-editor'),this['_editor'][a5(0x1c6)]=this['_value'],this['_editor']['valuePreviewChanged']['on'](c=>{const a6=a5;this[a6(0x167)](c[a6(0x16b)],!![]),this[a6(0x1ce)](new Event(a6(0x1ea),{'bubbles':!![],'composed':!![]}));}),this[a5(0x17b)]['valueChanged']['on'](c=>{const a7=a5;this['_setValue'](c['newValue'],!![]),this[a7(0x1ce)](new Event(a7(0x162),{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this['_editor']),document[a5(0x1a0)]['appendChild'](this['_popup']),this[a5(0x158)](),window[a5(0x1b9)](a5(0x185),()=>this[a5(0x158)](),{'once':!![]}),window[a5(0x1b9)](a5(0x1e2),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a5(0x1b9)](a5(0x1b0),this[a5(0x1c8)]),requestAnimationFrame(()=>window['addEventListener'](a5(0x1de),this[a5(0x194)],!![]));}[r(0x158)](){const a8=r;if(!this[a8(0x1e6)])return;const c=this[a8(0x180)](),d=this[a8(0x1e6)]['offsetWidth']||0x118,e=this[a8(0x1e6)][a8(0x1f4)]||0x168;let f=c[a8(0x1ad)],g=c['bottom']+0x4;if(f+d>window[a8(0x1c3)]-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c['top']-e-0x4;this[a8(0x1e6)][a8(0x1ec)][a8(0x1ad)]=Math[a8(0x1ba)](0x8,f)+'px',this['_popup']['style'][a8(0x1f3)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a9=r,d=c['composedPath']();if(d['includes'](this)||this[a9(0x1e6)]&&d[a9(0x18a)](this[a9(0x1e6)]))return;this['_closePopup']();}[r(0x19d)](c){const aa=r;if(c[aa(0x163)]==='Escape')this['_closePopup']();}['_closePopup'](){const ab=r;window[ab(0x1bf)]('pointerdown',this[ab(0x194)],!![]),window['removeEventListener'](ab(0x1b0),this['_windowKeyHandler']),this['_popup']?.['remove'](),this['_popup']=null,this[ab(0x17b)]=null;}['_setValue'](c,d){this['_value']=c??'';if(d)this['setAttribute']('value',this['_value']);this['_renderSwatch']();}['_renderSwatch'](){const ac=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty'](ac(0x168),toCssRgb(c));}}function parseColor(c){const ad=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()===ad(0x1b3))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ad(0x1dc)](g);if(h?.[ad(0x182)])return normalizeColor({'r':h[ad(0x1eb)],'g':h['green'],'b':h[ad(0x17c)],'a':h[ad(0x1e4)]});return null;}function inferColorMode(c){const ae=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ae(0x16c)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e===ae(0x1b4)||e==='rgba')return'rgb';if(e===ae(0x1e9)||e==='hsla')return'hsl';if(e===ae(0x1e1))return ae(0x1e1);if(e==='oklab')return ae(0x1b5);if(e==='oklch')return'oklch';return null;}function normalizeModernColorSyntax(c){const af=r;return c['replace'](/,\s*/g,',')[af(0x175)](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(af(0x1b4),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ag=r;if(d[ag(0x18a)](',')){const h=d['split'](',')['map'](i=>i[ag(0x1b8)]());if(h['length']===0x4&&h[0x3][ag(0x169)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ag(0x15a)](',')+')';}const [e,f]=d[ag(0x1c4)]('/')[ag(0x187)](i=>i['trim']()),g=e[ag(0x1c4)](/\s+/)['filter'](Boolean);if(f)g[ag(0x1a5)](f[ag(0x169)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[ag(0x15a)](',')+')';}function parseHexColor(c){const ah=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e[ah(0x1d9)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ah(0x1d9)]===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[ah(0x1d9)]===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[ah(0x1af)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[ah(0x1d9)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ai=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')['map'](j=>j['trim']()),h=f[ai(0x175)](/,/g,'\x20')[ai(0x1c4)](/\s+/)[ai(0x1da)](Boolean);if(h[ai(0x1d9)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===ai(0x1b5))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const aj=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':aj(0x1cc)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===aj(0x1e9)){const g=rgbToHsl(c);return c['a']>=0x1?aj(0x1df)+Math[aj(0x16a)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[aj(0x16a)](g['l']*0x64)+'%)':'hsla('+Math['round'](g['h'])+',\x20'+Math[aj(0x16a)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+aj(0x19f)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[aj(0x16a)](h['c']*0x64)+'%,\x20'+Math[aj(0x16a)](h['m']*0x64)+aj(0x19f)+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?aj(0x1bd)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return aj(0x1f9)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':aj(0x1f0)+e)+')';}const f=rgbToOklch(c);return aj(0x18f)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ak=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ak(0x1e9)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ak(0x16a)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ak(0x1e1)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ak(0x16a)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ak(0x16a)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':ak(0x1cf),'name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[ak(0x16a)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function b(c,d){c=c-0x156;const e=a();let f=e[c];return f;}function normalizeColor(c){const al=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number[al(0x1cb)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const am=r;return am(0x1cc)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[an(0x1ba)](e,f,i),k=Math[an(0x157)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[an(0x166)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ao=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[ao(0x166)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ap=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ap(0x1b2)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const aq=r,f=Math[aq(0x17f)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[aq(0x17f)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[aq(0x17f)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ar=r,e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[ar(0x184)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const as=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[as(0x1c2)](g),e*Math[as(0x1a6)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function a(){const av=['label','preventDefault','_openPopup','\x22\x20value=\x22','_formatColor','_setColor','node-projects-color-editor','_handleWindowKey','_getDomElement','%,\x20','body','_applyHue','_dragPointerId','_button','3272nZjAkV','push','sin','_commitCurrentValue','_applyText','62bDfDJB','stopPropagation','invalid','clientY','left','_finishPlaneDrag','slice','keydown','280px','cbrt','transparent','rgb','oklab','_syncHueFromColor','2195730QaLntz','trim','addEventListener','max','_value','6SVujXF','cmyk(','rgb(','removeEventListener','3373NtLNVZ','name','cos','innerWidth','split','_alphaLabel','value','_plane','_windowKeyHandler','toggle','textContent','isFinite','rgba(','ready','dispatchEvent','Alpha','_planePointerMove','width','pointercancel','fixed','plane-handle','step','template','214995ZvzNyH','2373wDWyFd','length','filter','pointerId','toColorObject','_applyPlanePointer','pointerdown','hsl(','2143730tOoWCM','cmyk','scroll','div','opacity','emit','_popup','createElement','_modeSelect','hsl','input','red','style','_planeHandle','valuePreviewChanged','_togglePopup','\x20/\x20','_mode','100000','top','offsetHeight','alpha-label','_textInput','_hueInput','_alphaInput','oklab(','hue','min','_positionPopup','_handleButtonKeyDown','join','_wireEvents','_applyAlpha','alpha','pointerup','_color','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','364aLuLzz','change','key','_startPlaneDrag','_handleOutsidePointer','abs','_setValue','--color','endsWith','round','newValue','exec','classList','_hue','node-projects-color-input','2261vCftnE','_ignoreNextClick','mode','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','4276107kJHAGg','replace','_renderSwatch','readonly','button','_closePopup','zIndex','_editor','blue','toggleAttribute','define','pow','getBoundingClientRect','readOnly','valid','disabled','atan2','resize','hasAttribute','map','pointermove','Enter','includes','_renderChannelInputs','reduce','_channels','#000000','oklch(','text','getAttribute','_render','disconnectedCallback','_outsidePointerHandler','setPointerCapture'];a=function(){return av;};return a();}function parseNumberOrPercent(c,d){const at=r;return c[at(0x169)]('%')?Number(c[at(0x1af)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const au=r;return Math[au(0x157)](e,Math['max'](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const e=Math['pow'](0xa,d);return Math['round'](c*e)/e;}customElements[r(0x17e)](r(0x19c),ColorEditor),customElements[r(0x17e)](r(0x16f),ColorInput);