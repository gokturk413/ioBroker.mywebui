const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x1dc))/0x1*(-parseInt(q(0x1be))/0x2)+parseInt(q(0x1d4))/0x3+parseInt(q(0x1cd))/0x4+-parseInt(q(0x186))/0x5*(parseInt(q(0x19c))/0x6)+parseInt(q(0x198))/0x7*(parseInt(q(0x1e9))/0x8)+-parseInt(q(0x1fc))/0x9+-parseInt(q(0x1e2))/0xa*(parseInt(q(0x1a1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe2ffc));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x1e6),'cmyk','oklab','oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x194)]=css`
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
  `;[r(0x17c)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x1b0)]='#000000';[r(0x1c3)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';['_hue']=0x0;['_plane'];[r(0x201)];[r(0x1f6)];[r(0x1d6)];[r(0x1d9)];['_modeSelect'];['_channels'];['_textInput'];['_dragPointerId']=null;get[r(0x1b5)](){const s=r;return this[s(0x1b0)];}set[r(0x1b5)](c){const t=r,d=parseColor(c);if(d){this[t(0x1c3)]=d,this[t(0x1af)]=inferColorMode(c)??this[t(0x1af)],this[t(0x1e8)](),this[t(0x1b0)]=this['_formatColor'](),this['_render']();return;}this[t(0x1b0)]=c??'',this['_render']();}get[r(0x1c6)](){return this['_mode'];}set['mode'](c){const u=r;modes[u(0x1d0)](c)&&(this[u(0x1af)]=c,this['_value']=this[u(0x200)](),this[u(0x1a7)]());}get['readOnly'](){const v=r;return this[v(0x1f7)]('readonly');}set['readOnly'](c){const w=r;this[w(0x1cb)](w(0x1f1),c);}get[r(0x1b8)](){const x=r;return this['hasAttribute'](x(0x1b8));}set[r(0x1b8)](c){this['toggleAttribute']('disabled',c);}constructor(){const y=r;super(),this[y(0x185)]=this[y(0x1aa)]('plane'),this['_planeHandle']=this['_getDomElement']('plane-handle'),this['_hueInput']=this['_getDomElement'](y(0x190)),this[y(0x1d6)]=this[y(0x1aa)]('alpha'),this[y(0x1d9)]=this['_getDomElement']('alpha-label'),this[y(0x1b2)]=this['_getDomElement'](y(0x1c6)),this[y(0x1ec)]=this[y(0x1aa)](y(0x19a)),this['_textInput']=this[y(0x1aa)]('text');}['ready'](){const z=r;this[z(0x1fe)]();const c=this[z(0x1c1)](z(0x1b5));if(c!=null)this['value']=c;const d=this['getAttribute']('mode');modes['includes'](d)&&(this[z(0x1af)]=d,this['_value']=this[z(0x200)]()),this[z(0x1a7)]();}['_wireEvents'](){const A=r;this[A(0x185)][A(0x1fb)](A(0x182),c=>this['_startPlaneDrag'](c)),this[A(0x1f6)][A(0x1fb)](A(0x214),()=>this[A(0x1f0)](!![])),this['_hueInput'][A(0x1fb)]('change',()=>this[A(0x18a)]()),this[A(0x1d6)]['addEventListener'](A(0x214),()=>this['_applyAlpha'](!![])),this[A(0x1d6)]['addEventListener']('change',()=>this[A(0x18a)]()),this['_modeSelect']['addEventListener']('change',()=>{const B=A;this[B(0x1c6)]=this[B(0x1b2)][B(0x1b5)],this['_commitCurrentValue']();}),this['_channels']['addEventListener']('input',()=>this['_applyChannelInputs'](!![])),this[A(0x1ec)][A(0x1fb)]('change',()=>this[A(0x18a)]()),this[A(0x1c5)][A(0x1fb)]('input',()=>this[A(0x1ab)]()),this[A(0x1c5)]['addEventListener']('change',()=>this[A(0x209)]()),this['_textInput'][A(0x1fb)]('keydown',c=>{const C=A;c[C(0x1ed)]==='Enter'&&(this[C(0x209)](),this[C(0x1c5)][C(0x192)]());});}[r(0x181)](c){const D=r;if(this[D(0x18d)]||this['disabled'])return;this[D(0x20c)]=c['pointerId'],this[D(0x185)]['setPointerCapture'](c['pointerId']),this['_applyPlanePointer'](c,!![]),this['_plane'][D(0x1fb)]('pointermove',this[D(0x1bd)]),this[D(0x185)][D(0x1fb)](D(0x1bc),this[D(0x1ae)]),this[D(0x185)][D(0x1fb)](D(0x1bb),this[D(0x1ae)]),c['preventDefault']();}['_planePointerMove']=c=>{const E=r;if(c[E(0x207)]===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};[r(0x1ae)]=c=>{const F=r;if(c[F(0x207)]!==this[F(0x20c)])return;this[F(0x20c)]=null,this[F(0x185)][F(0x1e4)]('pointermove',this['_planePointerMove']),this[F(0x185)]['removeEventListener']('pointerup',this[F(0x1ae)]),this['_plane'][F(0x1e4)](F(0x1bb),this['_finishPlaneDrag']),this[F(0x18a)]();};['_applyPlanePointer'](c,d){const G=r,e=this[G(0x185)]['getBoundingClientRect'](),f=clamp((c['clientX']-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c[G(0x1cf)]-e[G(0x1a9)])/e[G(0x1de)],0x0,0x1),h=Number(this[G(0x1f6)][G(0x1b5)])||0x0;this[G(0x1d3)]=normalizeHue(h),this[G(0x20d)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}['_applyHue'](c){const H=r,d=rgbToHsv(this['_color']),e=Number(this[H(0x1f6)]['value'])||0x0;this['_hue']=normalizeHue(e),this[H(0x20d)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}[r(0x1df)](c){const I=r;this[I(0x20d)]({...this['_color'],'a':clamp(Number(this[I(0x1d6)]['value'])/0x64,0x0,0x1)},c);}[r(0x1ad)](c){const J=r,d=[...this['_channels'][J(0x17f)](J(0x214))]['reduce']((f,g)=>{const K=J;return f[g['name']]=Number(g[K(0x1b5)]),f;},{});let e;if(this['_mode']===J(0x1ff))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']===J(0x1e6))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===J(0x187))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[J(0x20d)](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const L=r,c=this['_textInput']['value']['trim']();this[L(0x1c5)]['classList']['toggle']('invalid',c[L(0x189)]>0x0&&!parseColor(c));}['_applyText'](){const M=r,c=parseColor(this[M(0x1c5)][M(0x1b5)]);this[M(0x1c5)]['classList']['toggle']('invalid',!c);if(!c)return;this[M(0x1af)]=inferColorMode(this['_textInput']['value'])??this['_mode'],this[M(0x20d)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this['_value'];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this['_formatColor'](),this['_render'](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this[N(0x1b0)],'oldValue':g});else this[N(0x17c)]['emit']({'newValue':this[N(0x1b0)],'oldValue':g});}[r(0x18a)](){const O=r,c=this[O(0x1b0)];this[O(0x1b0)]=this[O(0x200)](),this[O(0x17c)][O(0x1f8)]({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this[P(0x1c5)])return;const d=rgbToHsv(this[P(0x1c3)]);this['style'][P(0x1e0)](P(0x211),String(Math['round'](this[P(0x1d3)]))),this[P(0x194)]['setProperty'](P(0x196),toCssRgb(this[P(0x1c3)])),this[P(0x194)][P(0x1e0)]('--opaque-color','rgb('+this[P(0x1c3)]['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x1c3)]['b']+')'),this[P(0x194)]['setProperty']('--rgb-color',this[P(0x1c3)]['r']+',\x20'+this['_color']['g']+',\x20'+this[P(0x1c3)]['b']),this['_planeHandle'][P(0x194)]['left']=d['s']*0x64+'%',this[P(0x201)][P(0x194)]['top']=(0x1-d['v'])*0x64+'%',this[P(0x1f6)]['value']=String(Math['round'](this['_hue'])),this[P(0x1d6)]['value']=String(Math['round'](this['_color']['a']*0x64)),this['_alphaLabel'][P(0x204)]=Math[P(0x203)](this['_color']['a']*0x64)+'%',this['_modeSelect'][P(0x1b5)]=this['_mode'];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this['_textInput'])this['_textInput']['value']=this[P(0x1b0)];this['_textInput'][P(0x1ca)][P(0x193)]('invalid');}[r(0x1ba)](){const Q=r,c=getChannelValues(this['_color'],this[Q(0x1af)]);this['_channels'][Q(0x1e5)]=c[Q(0x1db)](d=>Q(0x1e1)+d['label']+Q(0x1ef)+d[Q(0x1d5)]+Q(0x1c9)+d['min']+'\x22\x20max=\x22'+d[Q(0x1a5)]+Q(0x20e)+d[Q(0x1f5)]+Q(0x19f)+d['value']+Q(0x1fd))[Q(0x1d2)]('');}['_formatColor'](){const R=r;return formatColor(this['_color'],this[R(0x1af)]);}[r(0x1e8)](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='#000000';['_button'];['_popup'];[r(0x18c)];[r(0x1a2)]=![];[r(0x188)]=c=>this['_handleOutsidePointer'](c);[r(0x1c0)]=c=>this[r(0x1ea)](c);get[r(0x1b5)](){const S=r;return this[S(0x1b0)];}set[r(0x1b5)](c){const T=r;this[T(0x206)](c,![]);}get['readOnly'](){const U=r;return this['hasAttribute'](U(0x1f1));}set[r(0x18d)](c){const V=r;this[V(0x1cb)](V(0x1f1),c);}get[r(0x1b8)](){const W=r;return this[W(0x1f7)](W(0x1b8));}set[r(0x1b8)](c){const X=r;this['toggleAttribute']('disabled',c);if(this[X(0x1dd)])this['_button'][X(0x1b8)]=c;}constructor(){const Y=r;super(),this['_button']=this['_getDomElement'](Y(0x20b));}['ready'](){const Z=r,c=this[Z(0x1c1)](Z(0x1b5));if(c!=null)this[Z(0x206)](c,![]);this[Z(0x1dd)]['disabled']=this['disabled'],this['_button'][Z(0x1fb)]('pointerdown',d=>this[Z(0x18e)](d)),this[Z(0x1dd)]['addEventListener']('click',d=>this[Z(0x1b9)](d)),this[Z(0x1dd)][Z(0x1fb)]('keydown',d=>this['_handleButtonKeyDown'](d)),this[Z(0x1eb)]();}[r(0x184)](){const a0=r;this[a0(0x1f3)]();}['_togglePopup'](){const a1=r;if(this['readOnly']||this['disabled'])return;if(this['_popup'])this[a1(0x1f3)]();else this['_openPopup']();}[r(0x18e)](c){const a2=r;if(c[a2(0x20b)]!==0x0)return;this['_ignoreNextClick']=!![],this[a2(0x17d)](),c['preventDefault'](),c[a2(0x1b4)]();}['_handleButtonClick'](c){const a3=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c['preventDefault'](),c[a3(0x1b4)]();return;}this[a3(0x17d)]();}[r(0x1f4)](c){const a4=r;if(c[a4(0x1ed)]!=='Enter'&&c['key']!=='\x20')return;this['_togglePopup'](),c[a4(0x20f)](),c[a4(0x1b4)]();}[r(0x205)](){const a5=r;this[a5(0x199)]=document['createElement'](a5(0x1c2)),this['_popup'][a5(0x194)]['position']=a5(0x202),this['_popup'][a5(0x194)][a5(0x1b7)]=a5(0x1b1),this['_popup']['style'][a5(0x1d7)]='280px',this['_editor']=document[a5(0x1c8)]('node-projects-color-editor'),this['_editor']['value']=this['_value'],this['_editor'][a5(0x215)]['on'](c=>{const a6=a5;this['_setValue'](c[a6(0x1c7)],!![]),this['dispatchEvent'](new Event(a6(0x214),{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a7=a5;this[a7(0x206)](c['newValue'],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this['_editor']),document[a5(0x191)]['appendChild'](this['_popup']),this['_positionPopup'](),window['addEventListener']('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener']('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a5(0x1fb)]('keydown',this[a5(0x1c0)]),requestAnimationFrame(()=>window['addEventListener'](a5(0x182),this[a5(0x188)],!![]));}[r(0x213)](){const a8=r;if(!this[a8(0x199)])return;const c=this['getBoundingClientRect'](),d=this[a8(0x199)]['offsetWidth']||0x118,e=this[a8(0x199)][a8(0x208)]||0x168;let f=c[a8(0x180)],g=c[a8(0x1a3)]+0x4;if(f+d>window[a8(0x1cc)]-0x8)f=window[a8(0x1cc)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a8(0x1a9)]-e-0x4;this[a8(0x199)]['style']['left']=Math['max'](0x8,f)+'px',this[a8(0x199)]['style'][a8(0x1a9)]=Math['max'](0x8,g)+'px';}[r(0x1da)](c){const a9=r,d=c[a9(0x1e7)]();if(d[a9(0x1d0)](this)||this['_popup']&&d[a9(0x1d0)](this['_popup']))return;this[a9(0x1f3)]();}['_handleWindowKey'](c){const aa=r;if(c['key']===aa(0x1f9))this[aa(0x1f3)]();}['_closePopup'](){const ab=r;window['removeEventListener'](ab(0x182),this['_outsidePointerHandler'],!![]),window[ab(0x1e4)]('keydown',this['_windowKeyHandler']),this[ab(0x199)]?.[ab(0x193)](),this[ab(0x199)]=null,this[ab(0x18c)]=null;}[r(0x206)](c,d){const ac=r;this[ac(0x1b0)]=c??'';if(d)this[ac(0x1a4)]('value',this['_value']);this[ac(0x1eb)]();}[r(0x1eb)](){const ad=r,c=parseColor(this[ad(0x1b0)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ad(0x194)][ad(0x1e0)]('--color',toCssRgb(c));}}function parseColor(c){const ae=r;if(!c)return null;const d=c[ae(0x212)]();if(d['toLowerCase']()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h[ae(0x216)],'g':h['green'],'b':h['blue'],'a':h[ae(0x210)]});return null;}function inferColorMode(c){const af=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[af(0x1bf)]();if(e==='rgb'||e===af(0x1ac))return af(0x1ff);if(e===af(0x1e6)||e===af(0x19b))return af(0x1e6);if(e===af(0x187))return af(0x187);if(e==='oklab')return'oklab';if(e==='oklch')return af(0x18b);return null;}function b(c,d){c=c-0x17b;const e=a();let f=e[c];return f;}function normalizeModernColorSyntax(c){const ag=r;return c[ag(0x1fa)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ag(0x1ff),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ah=r;if(d[ah(0x1d0)](',')){const h=d[ah(0x195)](',')['map'](i=>i[ah(0x212)]());if(h['length']===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ah(0x195)]('/')[ah(0x1db)](i=>i['trim']()),g=e['split'](/\s+/)['filter'](Boolean);if(f)g[ah(0x1b6)](f['endsWith']('%')?String(Number(f[ah(0x1a6)](0x0,-0x1))/0x64):f);return''+c+(g[ah(0x189)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ai=r,d=/^#([0-9a-f]{3,8})$/i[ai(0x1f2)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[ai(0x189)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ai(0x189)]===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[ai(0x1a6)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[ai(0x189)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const aj=r,d=/^(oklab|oklch)\((.*)\)$/i[aj(0x1f2)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][aj(0x195)]('/')['map'](j=>j['trim']()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[aj(0x189)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ak=r,e=round(c['a'],0x3);if(d===ak(0x1ff))return c['a']>=0x1?ak(0x1d8)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ak(0x1b3)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===ak(0x1e6)){const g=rgbToHsl(c);return c['a']>=0x1?ak(0x1ee)+Math[ak(0x203)](g['h'])+',\x20'+Math[ak(0x203)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':'hsla('+Math[ak(0x203)](g['h'])+',\x20'+Math[ak(0x203)](g['s']*0x64)+ak(0x1e3)+Math[ak(0x203)](g['l']*0x64)+'%,\x20'+e+')';}if(d===ak(0x187)){const h=rgbToCmyk(c),i=Math[ak(0x203)](h['c']*0x64)+ak(0x1e3)+Math['round'](h['m']*0x64)+ak(0x1e3)+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':ak(0x20a)+i+',\x20'+e+')';}if(d===ak(0x19e)){const j=rgbToOklab(c);return ak(0x18f)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const al=r;if(d===al(0x1ff))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===al(0x1e6)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[al(0x203)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===al(0x187)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[al(0x203)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[al(0x203)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[al(0x203)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[al(0x203)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===al(0x19e)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':al(0x1ce),'name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[al(0x203)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const am=r;return{'r':Math[am(0x203)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math[am(0x203)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[am(0x17b)](c['a'])?c['a']:0x1,0x0,0x1)};}function a(){const ay=['readOnly','_handleButtonPointerDown','oklab(','hue','body','blur','remove','style','split','--color','sin','9805474ZRBEpi','_popup','channels','hsla','2998350SLjyYl','define','oklab','\x22\x20value=\x22','pow','2332ILSfFl','_ignoreNextClick','bottom','setAttribute','max','slice','_render','sqrt','top','_getDomElement','_validateTextInput','rgba','_applyChannelInputs','_finishPlaneDrag','_mode','_value','100000','_modeSelect','rgba(','stopPropagation','value','push','zIndex','disabled','_handleButtonClick','_renderChannelInputs','pointercancel','pointerup','_planePointerMove','6vtWQRf','toLowerCase','_windowKeyHandler','getAttribute','div','_color','node-projects-color-editor','_textInput','mode','newValue','createElement','\x22\x20min=\x22','classList','toggleAttribute','innerWidth','4004040FFONDh','Alpha','clientY','includes','cbrt','join','_hue','2796435LAyqTv','name','_alphaInput','width','rgb(','_alphaLabel','_handleOutsidePointer','map','208209bqDAYV','_button','height','_applyAlpha','setProperty','\x0a\x20\x20\x20\x20\x20\x20<label>','44410LLnEmn','%,\x20','removeEventListener','innerHTML','hsl','composedPath','_syncHueFromColor','8vErTWm','_handleWindowKey','_renderSwatch','_channels','key','hsl(','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','_applyHue','readonly','exec','_closePopup','_handleButtonKeyDown','step','_hueInput','hasAttribute','emit','Escape','replace','addEventListener','5292981pFWbpQ','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','_wireEvents','rgb','_formatColor','_planeHandle','fixed','round','textContent','_openPopup','_setValue','pointerId','offsetHeight','_applyText','cmyk(','button','_dragPointerId','_setColor','\x22\x20step=\x22','preventDefault','opacity','--hue','trim','_positionPopup','input','valuePreviewChanged','red','isFinite','valueChanged','_togglePopup','abs','querySelectorAll','left','_startPlaneDrag','pointerdown','atan2','disconnectedCallback','_plane','15RIGAWf','cmyk','_outsidePointerHandler','length','_commitCurrentValue','oklch','_editor'];a=function(){return ay;};return a();}function toCssRgb(c){const an=r;return an(0x1b3)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x1a5)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ap=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ap(0x1a5)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ap(0x17e)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const aq=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[aq(0x1a5)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ar=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ar(0x1d1)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const as=r,e=rgbToOklab(d),f=Math[as(0x1a8)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[as(0x183)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const at=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[at(0x197)](g));}function srgbToLinear(c){const au=r;return c<=0.04045?c/12.92:Math[au(0x1a0)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){const av=r;return c<=0.0031308?12.92*c:1.055*Math[av(0x1a0)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const aw=r;return Math['min'](e,Math[aw(0x1a5)](d,Number[aw(0x17b)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const ax=r,e=Math[ax(0x1a0)](0xa,d);return Math[ax(0x203)](c*e)/e;}customElements[r(0x19d)](r(0x1c4),ColorEditor),customElements['define']('node-projects-color-input',ColorInput);