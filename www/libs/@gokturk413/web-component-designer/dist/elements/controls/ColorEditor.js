const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x1a6))/0x1+-parseInt(q(0x1f3))/0x2*(parseInt(q(0x1bf))/0x3)+-parseInt(q(0x1d7))/0x4+parseInt(q(0x189))/0x5+parseInt(q(0x1c9))/0x6*(parseInt(q(0x1e2))/0x7)+parseInt(q(0x1c5))/0x8*(-parseInt(q(0x1b4))/0x9)+parseInt(q(0x1fc))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x323ce));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb','hsl',r(0x1d0),'oklab',r(0x1f5)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x174)]=html`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x1eb)]='#000000';[r(0x1ee)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0x1b2);[r(0x1a2)]=0x0;[r(0x1a0)];[r(0x18f)];[r(0x16b)];['_alphaInput'];[r(0x1dd)];[r(0x19a)];['_channels'];['_textInput'];[r(0x171)]=null;get['value'](){const s=r;return this[s(0x1eb)];}set[r(0x1ed)](c){const t=r,d=parseColor(c);if(d){this[t(0x1ee)]=d,this[t(0x1f9)]=inferColorMode(c)??this['_mode'],this[t(0x1fd)](),this[t(0x1eb)]=this['_formatColor'](),this[t(0x192)]();return;}this['_value']=c??'',this['_render']();}get[r(0x1e3)](){return this['_mode'];}set[r(0x1e3)](c){const u=r;modes['includes'](c)&&(this[u(0x1f9)]=c,this[u(0x1eb)]=this[u(0x198)](),this[u(0x192)]());}get['readOnly'](){return this['hasAttribute']('readonly');}set['readOnly'](c){const v=r;this[v(0x1ec)](v(0x1d6),c);}get[r(0x167)](){const w=r;return this[w(0x191)]('disabled');}set[r(0x167)](c){const x=r;this[x(0x1ec)]('disabled',c);}constructor(){const y=r;super(),this['_plane']=this[y(0x182)]('plane'),this[y(0x18f)]=this['_getDomElement']('plane-handle'),this[y(0x16b)]=this[y(0x182)](y(0x1ad)),this[y(0x1cd)]=this['_getDomElement']('alpha'),this[y(0x1dd)]=this['_getDomElement']('alpha-label'),this[y(0x19a)]=this[y(0x182)](y(0x1e3)),this[y(0x1be)]=this['_getDomElement']('channels'),this[y(0x1b1)]=this[y(0x182)](y(0x177));}[r(0x1ea)](){const z=r;this['_wireEvents']();const c=this['getAttribute']('value');if(c!=null)this['value']=c;const d=this['getAttribute']('mode');modes[z(0x18b)](d)&&(this['_mode']=d,this[z(0x1eb)]=this['_formatColor']()),this['_render']();}['_wireEvents'](){const A=r;this['_plane'][A(0x1c3)]('pointerdown',c=>this['_startPlaneDrag'](c)),this[A(0x16b)][A(0x1c3)](A(0x1ae),()=>this['_applyHue'](!![])),this['_hueInput']['addEventListener'](A(0x18e),()=>this[A(0x16c)]()),this[A(0x1cd)][A(0x1c3)]('input',()=>this['_applyAlpha'](!![])),this['_alphaInput']['addEventListener']('change',()=>this[A(0x16c)]()),this[A(0x19a)]['addEventListener']('change',()=>{const B=A;this['mode']=this['_modeSelect'][B(0x1ed)],this['_commitCurrentValue']();}),this['_channels']['addEventListener']('input',()=>this[A(0x200)](!![])),this['_channels'][A(0x1c3)]('change',()=>this[A(0x16c)]()),this['_textInput']['addEventListener'](A(0x1ae),()=>this['_validateTextInput']()),this['_textInput']['addEventListener'](A(0x18e),()=>this[A(0x1a1)]()),this['_textInput']['addEventListener'](A(0x195),c=>{const C=A;c[C(0x1d2)]===C(0x18d)&&(this[C(0x1a1)](),this[C(0x1b1)][C(0x1a9)]());});}[r(0x1df)](c){const D=r;if(this['readOnly']||this[D(0x167)])return;this[D(0x171)]=c[D(0x1cc)],this['_plane']['setPointerCapture'](c[D(0x1cc)]),this[D(0x1b3)](c,!![]),this['_plane'][D(0x1c3)]('pointermove',this['_planePointerMove']),this['_plane'][D(0x1c3)](D(0x184),this[D(0x19e)]),this['_plane'][D(0x1c3)]('pointercancel',this['_finishPlaneDrag']),c['preventDefault']();}[r(0x18a)]=c=>{const E=r;if(c['pointerId']===this['_dragPointerId'])this[E(0x1b3)](c,!![]);};[r(0x19e)]=c=>{const F=r;if(c[F(0x1cc)]!==this[F(0x171)])return;this['_dragPointerId']=null,this[F(0x1a0)][F(0x1d3)](F(0x1af),this['_planePointerMove']),this['_plane']['removeEventListener'](F(0x184),this['_finishPlaneDrag']),this[F(0x1a0)]['removeEventListener'](F(0x1fa),this[F(0x19e)]),this['_commitCurrentValue']();};[r(0x1b3)](c,d){const G=r,e=this['_plane'][G(0x199)](),f=clamp((c[G(0x1e7)]-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e[G(0x1d5)])/e[G(0x17e)],0x0,0x1),h=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(h),this[G(0x196)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}['_applyHue'](c){const H=r,d=rgbToHsv(this[H(0x1ee)]),e=Number(this[H(0x16b)][H(0x1ed)])||0x0;this[H(0x1a2)]=normalizeHue(e),this[H(0x196)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[H(0x1ee)]['a']},c);}[r(0x1e9)](c){const I=r;this['_setColor']({...this[I(0x1ee)],'a':clamp(Number(this[I(0x1cd)][I(0x1ed)])/0x64,0x0,0x1)},c);}[r(0x200)](c){const J=r,d=[...this['_channels'][J(0x193)]('input')][J(0x1d9)]((f,g)=>{const K=J;return f[g['name']]=Number(g[K(0x1ed)]),f;},{});let e;if(this[J(0x1f9)]===J(0x1b2))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[J(0x1f9)]===J(0x1de))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[J(0x1f9)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===J(0x1c8))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[J(0x19b)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[J(0x196)](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const L=r,c=this[L(0x1b1)]['value'][L(0x1ff)]();this['_textInput']['classList']['toggle'](L(0x18c),c['length']>0x0&&!parseColor(c));}[r(0x1a1)](){const M=r,c=parseColor(this['_textInput'][M(0x1ed)]);this['_textInput']['classList']['toggle'](M(0x18c),!c);if(!c)return;this[M(0x1f9)]=inferColorMode(this['_textInput']['value'])??this[M(0x1f9)],this[M(0x196)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this['_value'];this['_color']=normalizeColor(c);if(f)this[N(0x1fd)]();this[N(0x1eb)]=this[N(0x198)](),this['_render'](e);if(d)this[N(0x17b)][N(0x1b0)]({'newValue':this[N(0x1eb)],'oldValue':g});else this['valueChanged']['emit']({'newValue':this[N(0x1eb)],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this['_value'];this['_value']=this['_formatColor'](),this[O(0x1e8)][O(0x1b0)]({'newValue':this[O(0x1eb)],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this[P(0x1b1)])return;const d=rgbToHsv(this['_color']);this[P(0x1fb)][P(0x188)](P(0x19c),String(Math[P(0x1b9)](this['_hue']))),this[P(0x1fb)]['setProperty']('--color',toCssRgb(this['_color'])),this[P(0x1fb)]['setProperty']('--opaque-color',P(0x1f1)+this['_color']['r']+',\x20'+this[P(0x1ee)]['g']+',\x20'+this['_color']['b']+')'),this['style'][P(0x188)]('--rgb-color',this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']),this[P(0x18f)]['style'][P(0x1cb)]=d['s']*0x64+'%',this['_planeHandle'][P(0x1fb)]['top']=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x1ed)]=String(Math[P(0x1b9)](this[P(0x1a2)])),this[P(0x1cd)][P(0x1ed)]=String(Math['round'](this[P(0x1ee)]['a']*0x64)),this[P(0x1dd)]['textContent']=Math[P(0x1b9)](this[P(0x1ee)]['a']*0x64)+'%',this['_modeSelect']['value']=this[P(0x1f9)];if(c)this[P(0x1b6)]();if(document['activeElement']!==this['_textInput'])this[P(0x1b1)][P(0x1ed)]=this[P(0x1eb)];this['_textInput'][P(0x1a4)]['remove']('invalid');}[r(0x1b6)](){const Q=r,c=getChannelValues(this[Q(0x1ee)],this['_mode']);this[Q(0x1be)]['innerHTML']=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d['label']+Q(0x16a)+d[Q(0x1aa)]+Q(0x1ac)+d['min']+Q(0x169)+d[Q(0x1ca)]+Q(0x1db)+d['step']+Q(0x186)+d[Q(0x1ed)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')['join']('');}[r(0x198)](){const R=r;return formatColor(this['_color'],this[R(0x1f9)]);}['_syncHueFromColor'](){const S=r,c=rgbToHsv(this[S(0x1ee)]);if(c['s']>epsilon&&c['v']>epsilon)this[S(0x1a2)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x1fb)]=css`
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
  `;[r(0x1eb)]=r(0x1bd);['_button'];[r(0x1bc)];['_editor'];['_ignoreNextClick']=![];[r(0x1fe)]=c=>this[r(0x1b7)](c);['_windowKeyHandler']=c=>this['_handleWindowKey'](c);get[r(0x1ed)](){const T=r;return this[T(0x1eb)];}set[r(0x1ed)](c){this['_setValue'](c,![]);}get['readOnly'](){const U=r;return this['hasAttribute'](U(0x1d6));}set[r(0x1f0)](c){this['toggleAttribute']('readonly',c);}get[r(0x167)](){const V=r;return this['hasAttribute'](V(0x167));}set['disabled'](c){const W=r;this['toggleAttribute'](W(0x167),c);if(this['_button'])this[W(0x201)]['disabled']=c;}constructor(){const X=r;super(),this['_button']=this[X(0x182)](X(0x197));}[r(0x1ea)](){const Y=r,c=this[Y(0x175)]('value');if(c!=null)this['_setValue'](c,![]);this[Y(0x201)]['disabled']=this['disabled'],this[Y(0x201)]['addEventListener']('pointerdown',d=>this[Y(0x178)](d)),this['_button'][Y(0x1c3)]('click',d=>this['_handleButtonClick'](d)),this[Y(0x201)]['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this['_renderSwatch']();}[r(0x1a5)](){const Z=r;this[Z(0x17f)]();}['_togglePopup'](){const a0=r;if(this[a0(0x1f0)]||this['disabled'])return;if(this['_popup'])this[a0(0x17f)]();else this[a0(0x19d)]();}['_handleButtonPointerDown'](c){const a1=r;if(c[a1(0x197)]!==0x0)return;this[a1(0x1c0)]=!![],this['_togglePopup'](),c[a1(0x1c2)](),c[a1(0x1f2)]();}['_handleButtonClick'](c){const a2=r;if(this[a2(0x1c0)]){this['_ignoreNextClick']=![],c[a2(0x1c2)](),c[a2(0x1f2)]();return;}this[a2(0x173)]();}[r(0x1ba)](c){const a3=r;if(c['key']!==a3(0x18d)&&c['key']!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c['stopPropagation']();}['_openPopup'](){const a4=r;this[a4(0x1bc)]=document['createElement']('div'),this[a4(0x1bc)][a4(0x1fb)][a4(0x180)]=a4(0x1ef),this['_popup'][a4(0x1fb)]['zIndex']='100000',this['_popup'][a4(0x1fb)][a4(0x19f)]='280px',this[a4(0x1ce)]=document['createElement'](a4(0x1f7)),this['_editor']['value']=this[a4(0x1eb)],this['_editor']['valuePreviewChanged']['on'](c=>{const a5=a4;this['_setValue'](c[a5(0x181)],!![]),this['dispatchEvent'](new Event(a5(0x1ae),{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a6=a4;this['_setValue'](c[a6(0x181)],!![]),this['dispatchEvent'](new Event(a6(0x18e),{'bubbles':!![],'composed':!![]}));}),this[a4(0x1bc)][a4(0x1e6)](this[a4(0x1ce)]),document['body']['appendChild'](this['_popup']),this['_positionPopup'](),window[a4(0x1c3)]('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener'](a4(0x1a3),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window['addEventListener']('keydown',this[a4(0x1d4)]),requestAnimationFrame(()=>window['addEventListener'](a4(0x183),this[a4(0x1fe)],!![]));}[r(0x16f)](){const a7=r;if(!this['_popup'])return;const c=this['getBoundingClientRect'](),d=this[a7(0x1bc)]['offsetWidth']||0x118,e=this['_popup'][a7(0x17d)]||0x168;let f=c['left'],g=c[a7(0x1dc)]+0x4;if(f+d>window['innerWidth']-0x8)f=window[a7(0x1e4)]-d-0x8;if(g+e>window[a7(0x1b8)]-0x8)g=c[a7(0x1d5)]-e-0x4;this[a7(0x1bc)][a7(0x1fb)]['left']=Math['max'](0x8,f)+'px',this['_popup']['style'][a7(0x1d5)]=Math[a7(0x1ca)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a8=r,d=c['composedPath']();if(d['includes'](this)||this[a8(0x1bc)]&&d['includes'](this[a8(0x1bc)]))return;this['_closePopup']();}['_handleWindowKey'](c){if(c['key']==='Escape')this['_closePopup']();}[r(0x17f)](){const a9=r;window[a9(0x1d3)]('pointerdown',this[a9(0x1fe)],!![]),window[a9(0x1d3)](a9(0x195),this[a9(0x1d4)]),this['_popup']?.[a9(0x1bb)](),this['_popup']=null,this['_editor']=null;}[r(0x1f6)](c,d){const aa=r;this[aa(0x1eb)]=c??'';if(d)this[aa(0x170)]('value',this['_value']);this['_renderSwatch']();}['_renderSwatch'](){const ab=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style'][ab(0x188)]('--color',toCssRgb(c));}}function parseColor(c){const ac=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h[ac(0x176)],'g':h[ac(0x1f8)],'b':h[ac(0x185)],'a':h[ac(0x1a7)]});return null;}function inferColorMode(c){const ad=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ad(0x187)]();if(e==='rgb'||e===ad(0x1da))return'rgb';if(e==='hsl'||e==='hsla')return'hsl';if(e===ad(0x1d0))return ad(0x1d0);if(e==='oklab')return ad(0x1c8);if(e===ad(0x1f5))return'oklch';return null;}function normalizeModernColorSyntax(c){const ae=r;return c[ae(0x1c7)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))[ae(0x1c7)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const af=r;if(d['includes'](',')){const h=d['split'](',')[af(0x1d1)](i=>i['trim']());if(h[af(0x1a8)]===0x4&&h[0x3][af(0x194)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[af(0x1a8)]===0x4?'a':'')+'('+h[af(0x1f4)](',')+')';}const [e,f]=d['split']('/')[af(0x1d1)](i=>i[af(0x1ff)]()),g=e[af(0x1cf)](/\s+/)['filter'](Boolean);if(f)g['push'](f[af(0x194)]('%')?String(Number(f[af(0x168)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[af(0x1f4)](',')+')';}function parseHexColor(c){const ag=r,d=/^#([0-9a-f]{3,8})$/i[ag(0x190)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ag(0x1a8)]===0x4?f(e[0x3])/0xff:0x1});if(e[ag(0x1a8)]===0x6||e[ag(0x1a8)]===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[ag(0x168)](0x2,0x4)),'b':f(e[ag(0x168)](0x4,0x6)),'a':e['length']===0x8?f(e[ag(0x168)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ah=r,d=/^(oklab|oklch)\((.*)\)$/i[ah(0x190)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')[ah(0x1d1)](j=>j[ah(0x1ff)]()),h=f[ah(0x1c7)](/,/g,'\x20')['split'](/\s+/)[ah(0x1e5)](Boolean);if(h[ah(0x1a8)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===ah(0x1c8))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ai=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ai(0x1c4)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[ai(0x1b9)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ai(0x1b9)](g['l']*0x64)+'%)':ai(0x1e0)+Math[ai(0x1b9)](g['h'])+',\x20'+Math[ai(0x1b9)](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+ai(0x17a)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[ai(0x1b9)](h['c']*0x64)+'%,\x20'+Math[ai(0x1b9)](h['m']*0x64)+'%,\x20'+Math[ai(0x1b9)](h['y']*0x64)+ai(0x17a)+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ai(0x1b5)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ai(0x1ab)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const aj=r;if(d===aj(0x1b2))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[aj(0x1b9)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===aj(0x1de)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[aj(0x1b9)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[aj(0x1b9)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[aj(0x1b9)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===aj(0x1d0)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[aj(0x1b9)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[aj(0x1b9)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[aj(0x1b9)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[aj(0x1b9)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===aj(0x1c8)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':aj(0x17c),'name':aj(0x19b),'value':Math[aj(0x1b9)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[aj(0x1b9)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ak=r;return{'r':Math[ak(0x1b9)](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number[ak(0x1d8)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const al=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[al(0x172)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const am=r,i=f*e,j=i*(0x1-Math[am(0x1c1)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function b(c,d){c=c-0x167;const e=a();let f=e[c];return f;}function rgbToHsl(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const an=r,i=(0x1-Math[an(0x1c1)](0x2*f-0x1))*e,j=i*(0x1-Math[an(0x1c1)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ao=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[ao(0x1c6)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[ao(0x1c6)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ap=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[ap(0x16e)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[ap(0x16e)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const aq=r,e=rgbToOklab(d),f=Math[aq(0x1e1)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function a(){const aw=['_togglePopup','template','getAttribute','red','text','_handleButtonPointerDown','sin','%,\x20','valuePreviewChanged','Alpha','offsetHeight','height','_closePopup','position','newValue','_getDomElement','pointerdown','pointerup','blue','\x22\x20value=\x22','toLowerCase','setProperty','123930SWRtIO','_planePointerMove','includes','invalid','Enter','change','_planeHandle','exec','hasAttribute','_render','querySelectorAll','endsWith','keydown','_setColor','button','_formatColor','getBoundingClientRect','_modeSelect','alpha','--hue','_openPopup','_finishPlaneDrag','width','_plane','_applyText','_hue','scroll','classList','disconnectedCallback','284271dsMYqX','opacity','length','blur','name','oklab(','\x22\x20min=\x22','hue','input','pointermove','emit','_textInput','rgb','_applyPlanePointer','9SIxYZs','cmyk(','_renderChannelInputs','_handleOutsidePointer','innerHeight','round','_handleButtonKeyDown','remove','_popup','#000000','_channels','509055wLvHwN','_ignoreNextClick','abs','preventDefault','addEventListener','rgba(','1243792pWqKZn','cbrt','replace','oklab','150CNSCPN','max','left','pointerId','_alphaInput','_editor','split','cmyk','map','key','removeEventListener','_windowKeyHandler','top','readonly','1323656DitByk','isFinite','reduce','rgba','\x22\x20step=\x22','bottom','_alphaLabel','hsl','_startPlaneDrag','hsla(','sqrt','75005gFivOC','mode','innerWidth','filter','appendChild','clientX','valueChanged','_applyAlpha','ready','_value','toggleAttribute','value','_color','fixed','readOnly','rgb(','stopPropagation','2nsSaCm','join','oklch','_setValue','node-projects-color-editor','green','_mode','pointercancel','style','2849150JMhCUM','_syncHueFromColor','_outsidePointerHandler','trim','_applyChannelInputs','_button','disabled','slice','\x22\x20max=\x22','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','_hueInput','_commitCurrentValue','node-projects-color-input','pow','_positionPopup','setAttribute','_dragPointerId','min'];a=function(){return aw;};return a();}function oklchToRgb(d,e,f){const ar=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[ar(0x179)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const as=r;return c<=0.0031308?12.92*c:1.055*Math[as(0x16e)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const at=r;return c['endsWith']('%')?Number(c[at(0x168)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const au=r;return Math[au(0x172)](e,Math[au(0x1ca)](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const av=r,e=Math[av(0x16e)](0xa,d);return Math['round'](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements['define'](r(0x16d),ColorInput);