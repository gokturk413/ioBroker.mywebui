const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x242))/0x1*(-parseInt(q(0x1e8))/0x2)+-parseInt(q(0x24e))/0x3*(-parseInt(q(0x1f4))/0x4)+-parseInt(q(0x202))/0x5*(parseInt(q(0x256))/0x6)+parseInt(q(0x250))/0x7+parseInt(q(0x239))/0x8*(parseInt(q(0x1f2))/0x9)+-parseInt(q(0x220))/0xa+-parseInt(q(0x1f0))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4addb));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x21e),r(0x240),'cmyk','oklab',r(0x226)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x204)]=css`
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
  `;static [r(0x237)]=html`
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
  `;[r(0x203)]=new TypedEvent();[r(0x201)]=new TypedEvent();[r(0x22b)]=r(0x1e6);['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';[r(0x1f9)]=0x0;['_plane'];[r(0x1e4)];[r(0x1d1)];['_alphaInput'];['_alphaLabel'];['_modeSelect'];['_channels'];['_textInput'];[r(0x221)]=null;get['value'](){return this['_value'];}set['value'](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[s(0x243)],this[s(0x20d)](),this['_value']=this[s(0x1e1)](),this[s(0x1ea)]();return;}this['_value']=c??'',this['_render']();}get['mode'](){const t=r;return this[t(0x243)];}set[r(0x1e2)](c){const u=r;modes['includes'](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this[u(0x1ea)]());}get['readOnly'](){return this['hasAttribute']('readonly');}set['readOnly'](c){const v=r;this['toggleAttribute'](v(0x244),c);}get['disabled'](){const w=r;return this[w(0x1db)](w(0x232));}set[r(0x232)](c){const x=r;this['toggleAttribute'](x(0x232),c);}constructor(){const y=r;super(),this['_plane']=this['_getDomElement'](y(0x25f)),this['_planeHandle']=this['_getDomElement']('plane-handle'),this['_hueInput']=this[y(0x23c)](y(0x25e)),this[y(0x215)]=this[y(0x23c)](y(0x1cf)),this['_alphaLabel']=this[y(0x23c)](y(0x23b)),this['_modeSelect']=this[y(0x23c)](y(0x1e2)),this['_channels']=this['_getDomElement'](y(0x1f7)),this[y(0x24a)]=this[y(0x23c)]('text');}['ready'](){const z=r;this[z(0x213)]();const c=this['getAttribute'](z(0x218));if(c!=null)this[z(0x218)]=c;const d=this['getAttribute'](z(0x1e2));modes['includes'](d)&&(this[z(0x243)]=d,this[z(0x22b)]=this['_formatColor']()),this['_render']();}[r(0x213)](){const A=r;this['_plane']['addEventListener'](A(0x217),c=>this[A(0x1d9)](c)),this['_hueInput'][A(0x1d3)](A(0x1f1),()=>this[A(0x261)](!![])),this[A(0x1d1)][A(0x1d3)](A(0x24c),()=>this['_commitCurrentValue']()),this['_alphaInput'][A(0x1d3)](A(0x1f1),()=>this[A(0x214)](!![])),this[A(0x215)][A(0x1d3)](A(0x24c),()=>this['_commitCurrentValue']()),this[A(0x223)][A(0x1d3)]('change',()=>{this['mode']=this['_modeSelect']['value'],this['_commitCurrentValue']();}),this[A(0x251)][A(0x1d3)](A(0x1f1),()=>this['_applyChannelInputs'](!![])),this['_channels']['addEventListener']('change',()=>this['_commitCurrentValue']()),this[A(0x24a)][A(0x1d3)](A(0x1f1),()=>this[A(0x216)]()),this['_textInput'][A(0x1d3)]('change',()=>this[A(0x231)]()),this['_textInput'][A(0x1d3)](A(0x20e),c=>{const B=A;c['key']===B(0x1fb)&&(this['_applyText'](),this['_textInput']['blur']());});}['_startPlaneDrag'](c){const C=r;if(this['readOnly']||this['disabled'])return;this['_dragPointerId']=c['pointerId'],this[C(0x1e3)][C(0x1fd)](c['pointerId']),this[C(0x1d2)](c,!![]),this['_plane']['addEventListener'](C(0x22e),this[C(0x25b)]),this[C(0x1e3)][C(0x1d3)]('pointerup',this[C(0x225)]),this['_plane'][C(0x1d3)]('pointercancel',this[C(0x225)]),c[C(0x22d)]();}['_planePointerMove']=c=>{const D=r;if(c[D(0x1df)]===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const E=r;if(c[E(0x1df)]!==this[E(0x221)])return;this[E(0x221)]=null,this[E(0x1e3)]['removeEventListener'](E(0x22e),this['_planePointerMove']),this['_plane']['removeEventListener']('pointerup',this[E(0x225)]),this[E(0x1e3)][E(0x208)](E(0x1ee),this[E(0x225)]),this['_commitCurrentValue']();};[r(0x1d2)](c,d){const F=r,e=this[F(0x1e3)][F(0x222)](),f=clamp((c['clientX']-e[F(0x260)])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e['height'],0x0,0x1),h=Number(this[F(0x1d1)]['value'])||0x0;this['_hue']=normalizeHue(h),this[F(0x236)]({...hsvToRgb(h,f,g),'a':this[F(0x1f8)]['a']},d);}['_applyHue'](c){const G=r,d=rgbToHsv(this[G(0x1f8)]),e=Number(this['_hueInput'][G(0x218)])||0x0;this[G(0x1f9)]=normalizeHue(e),this[G(0x236)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[G(0x1f8)]['a']},c);}[r(0x214)](c){const H=r;this['_setColor']({...this[H(0x1f8)],'a':clamp(Number(this[H(0x215)][H(0x218)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const I=r,d=[...this[I(0x251)][I(0x259)](I(0x1f1))][I(0x24b)]((f,g)=>{const J=I;return f[g[J(0x21a)]]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[I(0x243)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===I(0x1dc))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[I(0x1cf)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x216)](){const K=r,c=this['_textInput']['value'][K(0x234)]();this['_textInput'][K(0x20a)]['toggle']('invalid',c[K(0x1ce)]>0x0&&!parseColor(c));}['_applyText'](){const L=r,c=parseColor(this[L(0x24a)][L(0x218)]);this[L(0x24a)]['classList']['toggle']('invalid',!c);if(!c)return;this[L(0x243)]=inferColorMode(this['_textInput'][L(0x218)])??this[L(0x243)],this[L(0x236)](c,![],!![],!![]);}[r(0x236)](c,d,e=!![],f=![]){const M=r,g=this[M(0x22b)];this['_color']=normalizeColor(c);if(f)this[M(0x20d)]();this[M(0x22b)]=this['_formatColor'](),this['_render'](e);if(d)this[M(0x201)]['emit']({'newValue':this['_value'],'oldValue':g});else this[M(0x203)][M(0x1ff)]({'newValue':this[M(0x22b)],'oldValue':g});}[r(0x1cc)](){const N=r,c=this['_value'];this['_value']=this['_formatColor'](),this['valueChanged'][N(0x1ff)]({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const O=r;if(!this['_textInput'])return;const d=rgbToHsv(this['_color']);this[O(0x204)]['setProperty'](O(0x254),String(Math['round'](this['_hue']))),this[O(0x204)][O(0x22c)]('--color',toCssRgb(this['_color'])),this[O(0x204)][O(0x22c)](O(0x24f),O(0x248)+this['_color']['r']+',\x20'+this[O(0x1f8)]['g']+',\x20'+this['_color']['b']+')'),this['style'][O(0x22c)](O(0x21c),this[O(0x1f8)]['r']+',\x20'+this[O(0x1f8)]['g']+',\x20'+this[O(0x1f8)]['b']),this[O(0x1e4)]['style']['left']=d['s']*0x64+'%',this[O(0x1e4)]['style']['top']=(0x1-d['v'])*0x64+'%',this['_hueInput']['value']=String(Math['round'](this['_hue'])),this[O(0x215)][O(0x218)]=String(Math['round'](this[O(0x1f8)]['a']*0x64)),this[O(0x212)][O(0x235)]=Math[O(0x20b)](this[O(0x1f8)]['a']*0x64)+'%',this[O(0x223)]['value']=this[O(0x243)];if(c)this[O(0x1d4)]();if(document['activeElement']!==this['_textInput'])this[O(0x24a)]['value']=this['_value'];this['_textInput'][O(0x20a)]['remove']('invalid');}['_renderChannelInputs'](){const P=r,c=getChannelValues(this['_color'],this['_mode']);this['_channels'][P(0x23d)]=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+P(0x1ef)+d[P(0x211)]+'\x22\x20max=\x22'+d[P(0x253)]+P(0x255)+d[P(0x219)]+P(0x206)+d[P(0x218)]+P(0x209))['join']('');}[r(0x1e1)](){const Q=r;return formatColor(this[Q(0x1f8)],this['_mode']);}[r(0x20d)](){const R=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[R(0x1f9)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x204)]=css`
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
  `;static [r(0x237)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;['_value']=r(0x1e6);['_button'];['_popup'];[r(0x1ed)];['_ignoreNextClick']=![];['_outsidePointerHandler']=c=>this[r(0x23e)](c);[r(0x1f5)]=c=>this[r(0x230)](c);get[r(0x218)](){return this['_value'];}set['value'](c){this['_setValue'](c,![]);}get['readOnly'](){const S=r;return this['hasAttribute'](S(0x244));}set[r(0x247)](c){this['toggleAttribute']('readonly',c);}get[r(0x232)](){return this['hasAttribute']('disabled');}set[r(0x232)](c){const T=r;this['toggleAttribute'](T(0x232),c);if(this[T(0x1fa)])this[T(0x1fa)][T(0x232)]=c;}constructor(){super(),this['_button']=this['_getDomElement']('button');}['ready'](){const U=r,c=this['getAttribute'](U(0x218));if(c!=null)this[U(0x224)](c,![]);this['_button'][U(0x232)]=this[U(0x232)],this['_button'][U(0x1d3)](U(0x217),d=>this['_handleButtonPointerDown'](d)),this[U(0x1fa)][U(0x1d3)]('click',d=>this['_handleButtonClick'](d)),this[U(0x1fa)]['addEventListener'](U(0x20e),d=>this[U(0x1de)](d)),this[U(0x1dd)]();}['disconnectedCallback'](){const V=r;this[V(0x245)]();}['_togglePopup'](){const W=r;if(this['readOnly']||this[W(0x232)])return;if(this['_popup'])this[W(0x245)]();else this[W(0x25d)]();}['_handleButtonPointerDown'](c){const X=r;if(c['button']!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c[X(0x22d)](),c['stopPropagation']();}['_handleButtonClick'](c){const Y=r;if(this[Y(0x1eb)]){this['_ignoreNextClick']=![],c['preventDefault'](),c['stopPropagation']();return;}this['_togglePopup']();}[r(0x1de)](c){const Z=r;if(c['key']!=='Enter'&&c['key']!=='\x20')return;this[Z(0x25a)](),c['preventDefault'](),c['stopPropagation']();}[r(0x25d)](){const a0=r;this[a0(0x1fc)]=document['createElement']('div'),this[a0(0x1fc)]['style']['position']=a0(0x20c),this[a0(0x1fc)]['style'][a0(0x257)]='100000',this[a0(0x1fc)]['style']['width']='280px',this['_editor']=document['createElement'](a0(0x1d7)),this[a0(0x1ed)]['value']=this[a0(0x22b)],this[a0(0x1ed)]['valuePreviewChanged']['on'](c=>{const a1=a0;this['_setValue'](c[a1(0x207)],!![]),this['dispatchEvent'](new Event(a1(0x1f1),{'bubbles':!![],'composed':!![]}));}),this['_editor'][a0(0x203)]['on'](c=>{const a2=a0;this[a2(0x224)](c['newValue'],!![]),this[a2(0x200)](new Event(a2(0x24c),{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this['_editor']),document[a0(0x1e5)][a0(0x21f)](this[a0(0x1fc)]),this['_positionPopup'](),window[a0(0x1d3)](a0(0x1f6),()=>this[a0(0x1e0)](),{'once':!![]}),window['addEventListener'](a0(0x227),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a0(0x1d3)](a0(0x20e),this['_windowKeyHandler']),requestAnimationFrame(()=>window['addEventListener'](a0(0x217),this['_outsidePointerHandler'],!![]));}[r(0x1e0)](){const a3=r;if(!this[a3(0x1fc)])return;const c=this['getBoundingClientRect'](),d=this['_popup']['offsetWidth']||0x118,e=this[a3(0x1fc)][a3(0x1e7)]||0x168;let f=c['left'],g=c['bottom']+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window[a3(0x24d)]-0x8)g=c[a3(0x22a)]-e-0x4;this['_popup']['style'][a3(0x260)]=Math['max'](0x8,f)+'px',this[a3(0x1fc)]['style'][a3(0x22a)]=Math[a3(0x253)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a4=r,d=c['composedPath']();if(d['includes'](this)||this['_popup']&&d[a4(0x1cd)](this['_popup']))return;this['_closePopup']();}[r(0x230)](c){if(c['key']==='Escape')this['_closePopup']();}['_closePopup'](){const a5=r;window[a5(0x208)]('pointerdown',this[a5(0x262)],!![]),window['removeEventListener'](a5(0x20e),this[a5(0x1f5)]),this[a5(0x1fc)]?.['remove'](),this['_popup']=null,this[a5(0x1ed)]=null;}[r(0x224)](c,d){const a6=r;this[a6(0x22b)]=c??'';if(d)this['setAttribute'](a6(0x218),this['_value']);this['_renderSwatch']();}[r(0x1dd)](){const a7=r,c=parseColor(this[a7(0x22b)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const a8=r;if(!c)return null;const d=c[a8(0x234)]();if(d[a8(0x249)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[a8(0x1e9)](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h['green'],'b':h[a8(0x258)],'a':h[a8(0x20f)]});return null;}function inferColorMode(c){const a9=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[a9(0x249)]();if(e===a9(0x21e)||e==='rgba')return'rgb';if(e===a9(0x240)||e==='hsla')return a9(0x240);if(e===a9(0x1dc))return'cmyk';if(e===a9(0x233))return a9(0x233);if(e===a9(0x226))return a9(0x226);return null;}function normalizeModernColorSyntax(c){const aa=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))[aa(0x1d6)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(aa(0x240),e));}function normalizeFunctionBody(c,d){const ab=r;if(d[ab(0x1cd)](',')){const h=d[ab(0x22f)](',')['map'](i=>i['trim']());if(h['length']===0x4&&h[0x3][ab(0x205)]('%'))h[0x3]=String(Number(h[0x3][ab(0x1ec)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ab(0x21b)](',')+')';}const [e,f]=d[ab(0x22f)]('/')['map'](i=>i['trim']()),g=e[ab(0x22f)](/\s+/)['filter'](Boolean);if(f)g[ab(0x1f3)](f['endsWith']('%')?String(Number(f[ab(0x1ec)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ac=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e[ac(0x1ce)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ac(0x1ce)]===0x4?f(e[0x3])/0xff:0x1});if(e[ac(0x1ce)]===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[ac(0x1ce)]===0x8?f(e[ac(0x1ec)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ad=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1][ad(0x249)](),[f,g]=d[0x2]['split']('/')['map'](j=>j['trim']()),h=f['replace'](/,/g,'\x20')[ad(0x22f)](/\s+/)[ad(0x210)](Boolean);if(h[ad(0x1ce)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ae=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ae(0x241)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ae(0x246)+Math[ae(0x20b)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':ae(0x1d5)+Math['round'](g['h'])+',\x20'+Math[ae(0x20b)](g['s']*0x64)+'%,\x20'+Math[ae(0x20b)](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+ae(0x1fe)+Math['round'](h['m']*0x64)+'%,\x20'+Math[ae(0x20b)](h['y']*0x64)+ae(0x1fe)+Math[ae(0x20b)](h['k']*0x64)+'%';return c['a']>=0x1?ae(0x1d0)+i+')':ae(0x1d0)+i+',\x20'+e+')';}if(d===ae(0x233)){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ae(0x23f)+e)+')';}const f=rgbToOklch(c);return ae(0x1da)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ae(0x23f)+e)+')';}function getChannelValues(c,d){const af=r;if(d===af(0x21e))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===af(0x240)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[af(0x20b)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[af(0x20b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===af(0x1dc)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[af(0x20b)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math['round'](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[af(0x20b)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[af(0x20b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===af(0x233)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':af(0x1cf),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[af(0x20b)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ag=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math[ag(0x20b)](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ah=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[ah(0x211)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function a(){const at=['_popup','setPointerCapture','%,\x20','emit','dispatchEvent','valuePreviewChanged','20jfdhek','valueChanged','style','endsWith','\x22\x20value=\x22','newValue','removeEventListener','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','classList','round','fixed','_syncHueFromColor','keydown','opacity','filter','min','_alphaLabel','_wireEvents','_applyAlpha','_alphaInput','_validateTextInput','pointerdown','value','step','name','join','--rgb-color','cos','rgb','appendChild','190690mqJOnv','_dragPointerId','getBoundingClientRect','_modeSelect','_setValue','_finishPlaneDrag','oklch','scroll','sin','abs','top','_value','setProperty','preventDefault','pointermove','split','_handleWindowKey','_applyText','disabled','oklab','trim','textContent','_setColor','template','cbrt','312LVXYRO','sqrt','alpha-label','_getDomElement','innerHTML','_handleOutsidePointer','\x20/\x20','hsl','rgba(','1rrHCZK','_mode','readonly','_closePopup','hsl(','readOnly','rgb(','toLowerCase','_textInput','reduce','change','innerHeight','15135suXFIJ','--opaque-color','946974wcInSF','_channels','pow','max','--hue','\x22\x20step=\x22','59100MMHPEH','zIndex','blue','querySelectorAll','_togglePopup','_planePointerMove','node-projects-color-input','_openPopup','hue','plane','left','_applyHue','_outsidePointerHandler','_commitCurrentValue','includes','length','alpha','cmyk(','_hueInput','_applyPlanePointer','addEventListener','_renderChannelInputs','hsla(','replace','node-projects-color-editor','define','_startPlaneDrag','oklch(','hasAttribute','cmyk','_renderSwatch','_handleButtonKeyDown','pointerId','_positionPopup','_formatColor','mode','_plane','_planeHandle','body','#000000','offsetHeight','1075156UWbXdX','toColorObject','_render','_ignoreNextClick','slice','_editor','pointercancel','\x22\x20min=\x22','10057476IxknCH','input','129501RetPYG','push','36AfSaJd','_windowKeyHandler','resize','channels','_color','_hue','_button','Enter'];a=function(){return at;};return a();}function rgbToHsl(c){const ai=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[ai(0x211)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ai(0x229)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const aj=r,i=(0x1-Math[aj(0x229)](0x2*f-0x1))*e,j=i*(0x1-Math[aj(0x229)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const ak=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[ak(0x253)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}function rgbToOklab(c){const al=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[al(0x238)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[al(0x238)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const am=r,f=Math[am(0x252)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[am(0x252)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[am(0x252)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const an=r,e=rgbToOklab(d),f=Math[an(0x23a)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ao=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ao(0x21d)](g),e*Math[ao(0x228)](g));}function srgbToLinear(c){const ap=r;return c<=0.04045?c/12.92:Math[ap(0x252)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const aq=r;return c[aq(0x205)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ar=r;return Math['min'](e,Math[ar(0x253)](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const as=r,e=Math[as(0x252)](0xa,d);return Math[as(0x20b)](c*e)/e;}customElements[r(0x1d8)]('node-projects-color-editor',ColorEditor),customElements['define'](r(0x25c),ColorInput);