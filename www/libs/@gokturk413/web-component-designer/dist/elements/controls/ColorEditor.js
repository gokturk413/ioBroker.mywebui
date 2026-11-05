const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0xa3))/0x1+parseInt(q(0xe9))/0x2*(-parseInt(q(0x95))/0x3)+parseInt(q(0xe3))/0x4+-parseInt(q(0xad))/0x5*(parseInt(q(0x98))/0x6)+-parseInt(q(0xca))/0x7*(parseInt(q(0xe0))/0x8)+-parseInt(q(0x91))/0x9*(parseInt(q(0x9e))/0xa)+parseInt(q(0xed))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f179));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=['rgb','hsl','cmyk','oklab',r(0xc8)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0xb7)]=html`
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
  `;[r(0x7e)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x101)]='#000000';['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0xbe);[r(0x100)]=0x0;[r(0x84)];[r(0xfa)];[r(0xb4)];['_alphaInput'];['_alphaLabel'];[r(0x81)];['_channels'];[r(0xf5)];[r(0xdb)]=null;get['value'](){const s=r;return this[s(0x101)];}set['value'](c){const t=r,d=parseColor(c);if(d){this[t(0x79)]=d,this[t(0xbb)]=inferColorMode(c)??this[t(0xbb)],this[t(0x7a)](),this['_value']=this['_formatColor'](),this['_render']();return;}this['_value']=c??'',this['_render']();}get[r(0xfb)](){const u=r;return this[u(0xbb)];}set['mode'](c){const v=r;modes[v(0x74)](c)&&(this['_mode']=c,this[v(0x101)]=this['_formatColor'](),this['_render']());}get['readOnly'](){const w=r;return this['hasAttribute'](w(0xce));}set[r(0xa1)](c){const x=r;this['toggleAttribute'](x(0xce),c);}get['disabled'](){const y=r;return this[y(0xd9)]('disabled');}set['disabled'](c){const z=r;this[z(0xaf)]('disabled',c);}constructor(){const A=r;super(),this[A(0x84)]=this[A(0xc0)]('plane'),this['_planeHandle']=this[A(0xc0)]('plane-handle'),this['_hueInput']=this[A(0xc0)]('hue'),this[A(0x7f)]=this['_getDomElement'](A(0xaa)),this[A(0x8b)]=this[A(0xc0)]('alpha-label'),this['_modeSelect']=this[A(0xc0)](A(0xfb)),this['_channels']=this[A(0xc0)](A(0x8d)),this[A(0xf5)]=this['_getDomElement'](A(0xd3));}['ready'](){const B=r;this[B(0xe8)]();const c=this[B(0xde)](B(0xf6));if(c!=null)this['value']=c;const d=this['getAttribute']('mode');modes['includes'](d)&&(this['_mode']=d,this['_value']=this[B(0xb6)]()),this[B(0xea)]();}['_wireEvents'](){const C=r;this['_plane'][C(0xd7)](C(0x94),c=>this[C(0x77)](c)),this['_hueInput'][C(0xd7)](C(0xf8),()=>this[C(0xfd)](!![])),this[C(0xb4)]['addEventListener']('change',()=>this['_commitCurrentValue']()),this[C(0x7f)]['addEventListener']('input',()=>this['_applyAlpha'](!![])),this[C(0x7f)][C(0xd7)]('change',()=>this[C(0xdc)]()),this['_modeSelect']['addEventListener']('change',()=>{const D=C;this['mode']=this['_modeSelect'][D(0xf6)],this[D(0xdc)]();}),this[C(0xe5)][C(0xd7)]('input',()=>this[C(0xd8)](!![])),this['_channels']['addEventListener'](C(0x80),()=>this['_commitCurrentValue']()),this['_textInput'][C(0xd7)]('input',()=>this[C(0x97)]()),this[C(0xf5)]['addEventListener'](C(0x80),()=>this['_applyText']()),this[C(0xf5)][C(0xd7)]('keydown',c=>{const E=C;c[E(0x105)]==='Enter'&&(this[E(0xa4)](),this['_textInput']['blur']());});}['_startPlaneDrag'](c){const F=r;if(this[F(0xa1)]||this['disabled'])return;this[F(0xdb)]=c['pointerId'],this['_plane'][F(0xc5)](c[F(0xef)]),this['_applyPlanePointer'](c,!![]),this[F(0x84)][F(0xd7)]('pointermove',this[F(0xa9)]),this['_plane']['addEventListener']('pointerup',this[F(0xd4)]),this['_plane']['addEventListener']('pointercancel',this['_finishPlaneDrag']),c['preventDefault']();}[r(0xa9)]=c=>{const G=r;if(c[G(0xef)]===this[G(0xdb)])this[G(0x9c)](c,!![]);};['_finishPlaneDrag']=c=>{const H=r;if(c[H(0xef)]!==this['_dragPointerId'])return;this[H(0xdb)]=null,this[H(0x84)][H(0xc2)](H(0xb0),this['_planePointerMove']),this['_plane'][H(0xc2)]('pointerup',this[H(0xd4)]),this[H(0x84)][H(0xc2)]('pointercancel',this[H(0xd4)]),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const I=r,e=this['_plane'][I(0x9d)](),f=clamp((c['clientX']-e['left'])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e['height'],0x0,0x1),h=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(h),this[I(0xff)]({...hsvToRgb(h,f,g),'a':this[I(0x79)]['a']},d);}[r(0xfd)](c){const J=r,d=rgbToHsv(this[J(0x79)]),e=Number(this['_hueInput'][J(0xf6)])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[J(0x79)]['a']},c);}['_applyAlpha'](c){const K=r;this['_setColor']({...this['_color'],'a':clamp(Number(this[K(0x7f)]['value'])/0x64,0x0,0x1)},c);}[r(0xd8)](c){const L=r,d=[...this[L(0xe5)]['querySelectorAll'](L(0xf8))]['reduce']((f,g)=>{const M=L;return f[g[M(0x8e)]]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[L(0xbb)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[L(0xbb)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===L(0x76))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const N=r,c=this[N(0xf5)]['value'][N(0xb3)]();this['_textInput'][N(0xf0)]['toggle'](N(0xa2),c[N(0xcb)]>0x0&&!parseColor(c));}['_applyText'](){const O=r,c=parseColor(this['_textInput'][O(0xf6)]);this['_textInput'][O(0xf0)][O(0x8a)]('invalid',!c);if(!c)return;this[O(0xbb)]=inferColorMode(this[O(0xf5)][O(0xf6)])??this[O(0xbb)],this['_setColor'](c,![],!![],!![]);}[r(0xff)](c,d,e=!![],f=![]){const P=r,g=this[P(0x101)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this[P(0xb6)](),this[P(0xea)](e);if(d)this[P(0xbc)][P(0xb1)]({'newValue':this['_value'],'oldValue':g});else this['valueChanged']['emit']({'newValue':this[P(0x101)],'oldValue':g});}[r(0xdc)](){const Q=r,c=this[Q(0x101)];this[Q(0x101)]=this[Q(0xb6)](),this[Q(0x7e)]['emit']({'newValue':this[Q(0x101)],'oldValue':c});}['_render'](c=!![]){const R=r;if(!this[R(0xf5)])return;const d=rgbToHsv(this['_color']);this[R(0x86)][R(0xee)]('--hue',String(Math['round'](this['_hue']))),this['style'][R(0xee)]('--color',toCssRgb(this[R(0x79)])),this['style'][R(0xee)]('--opaque-color','rgb('+this['_color']['r']+',\x20'+this[R(0x79)]['g']+',\x20'+this['_color']['b']+')'),this['style']['setProperty']('--rgb-color',this['_color']['r']+',\x20'+this[R(0x79)]['g']+',\x20'+this['_color']['b']),this[R(0xfa)]['style'][R(0xf3)]=d['s']*0x64+'%',this['_planeHandle']['style'][R(0x7b)]=(0x1-d['v'])*0x64+'%',this[R(0xb4)][R(0xf6)]=String(Math['round'](this['_hue'])),this[R(0x7f)]['value']=String(Math[R(0x9a)](this['_color']['a']*0x64)),this[R(0x8b)][R(0x104)]=Math[R(0x9a)](this['_color']['a']*0x64)+'%',this[R(0x81)][R(0xf6)]=this['_mode'];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this['_textInput'])this['_textInput'][R(0xf6)]=this['_value'];this['_textInput']['classList'][R(0xb2)]('invalid');}[r(0xe4)](){const S=r,c=getChannelValues(this['_color'],this['_mode']);this['_channels'][S(0x88)]=c[S(0xd6)](d=>S(0xd5)+d['label']+S(0xfc)+d['name']+S(0x82)+d['min']+'\x22\x20max=\x22'+d[S(0x103)]+'\x22\x20step=\x22'+d[S(0x9f)]+S(0xa5)+d[S(0xf6)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')['join']('');}['_formatColor'](){const T=r;return formatColor(this[T(0x79)],this['_mode']);}['_syncHueFromColor'](){const U=r,c=rgbToHsv(this[U(0x79)]);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}function a(){const av=['includes','atan2','oklab','_startPlaneDrag','innerWidth','_color','_syncHueFromColor','top','_setValue','exec','valueChanged','_alphaInput','change','_modeSelect','\x22\x20min=\x22','hsla(','_plane','rgba(','style','_editor','innerHTML','%,\x20','toggle','_alphaLabel','keydown','channels','name','hsl','hsla','153dafPAc','disconnectedCallback','_closePopup','pointerdown','6243feLXFh','_outsidePointerHandler','_validateTextInput','201006stQlFN','appendChild','round','newValue','_applyPlanePointer','getBoundingClientRect','150770WmOAwi','step','endsWith','readOnly','invalid','288626VmuYOC','_applyText','\x22\x20value=\x22','split','rgba','filter','_planePointerMove','alpha','offsetWidth','disabled','15TjPQJT','width','toggleAttribute','pointermove','emit','remove','trim','_hueInput','scroll','_formatColor','template','sqrt','_windowKeyHandler','oklab(','_mode','valuePreviewChanged','_openPopup','rgb','define','_getDomElement','cmyk','removeEventListener','_handleOutsidePointer','_button','setPointerCapture','offsetHeight','\x20/\x20','oklch','ready','286664GgFYEL','length','node-projects-color-input','isFinite','readonly','_ignoreNextClick','setAttribute','_handleWindowKey','_positionPopup','text','_finishPlaneDrag','\x0a\x20\x20\x20\x20\x20\x20<label>','map','addEventListener','_applyChannelInputs','hasAttribute','stopPropagation','_dragPointerId','_commitCurrentValue','_popup','getAttribute','preventDefault','16rpcUhC','abs','toLowerCase','437076CyWfDq','_renderChannelInputs','_channels','replace','button','_wireEvents','40kSMyXI','_render','slice','_handleButtonPointerDown','10099298gBOkCM','setProperty','pointerId','classList','_handleButtonKeyDown','pow','left','_renderSwatch','_textInput','value','hsl(','input','sin','_planeHandle','mode','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','_applyHue','_handleButtonClick','_setColor','_hue','_value','push','max','textContent','key','_togglePopup','oklch(','createElement'];a=function(){return av;};return a();}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x86)]=css`
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
  `;[r(0x101)]='#000000';['_button'];[r(0xdd)];['_editor'];[r(0xcf)]=![];['_outsidePointerHandler']=c=>this[r(0xc3)](c);[r(0xb9)]=c=>this[r(0xd1)](c);get['value'](){const V=r;return this[V(0x101)];}set[r(0xf6)](c){this['_setValue'](c,![]);}get['readOnly'](){const W=r;return this['hasAttribute'](W(0xce));}set['readOnly'](c){const X=r;this['toggleAttribute'](X(0xce),c);}get['disabled'](){const Y=r;return this['hasAttribute'](Y(0xac));}set['disabled'](c){const Z=r;this['toggleAttribute'](Z(0xac),c);if(this[Z(0xc4)])this[Z(0xc4)][Z(0xac)]=c;}constructor(){const a0=r;super(),this[a0(0xc4)]=this[a0(0xc0)]('button');}[r(0xc9)](){const a1=r,c=this['getAttribute']('value');if(c!=null)this[a1(0x7c)](c,![]);this['_button'][a1(0xac)]=this['disabled'],this['_button'][a1(0xd7)]('pointerdown',d=>this['_handleButtonPointerDown'](d)),this['_button']['addEventListener']('click',d=>this[a1(0xfe)](d)),this['_button']['addEventListener']('keydown',d=>this[a1(0xf1)](d)),this['_renderSwatch']();}[r(0x92)](){this['_closePopup']();}['_togglePopup'](){const a2=r;if(this['readOnly']||this[a2(0xac)])return;if(this[a2(0xdd)])this[a2(0x93)]();else this['_openPopup']();}[r(0xec)](c){const a3=r;if(c[a3(0xe7)]!==0x0)return;this[a3(0xcf)]=!![],this[a3(0x106)](),c['preventDefault'](),c[a3(0xda)]();}['_handleButtonClick'](c){const a4=r;if(this['_ignoreNextClick']){this[a4(0xcf)]=![],c['preventDefault'](),c['stopPropagation']();return;}this[a4(0x106)]();}[r(0xf1)](c){const a5=r;if(c[a5(0x105)]!=='Enter'&&c[a5(0x105)]!=='\x20')return;this[a5(0x106)](),c[a5(0xdf)](),c['stopPropagation']();}[r(0xbd)](){const a6=r;this['_popup']=document[a6(0x108)]('div'),this['_popup'][a6(0x86)]['position']='fixed',this['_popup']['style']['zIndex']='100000',this['_popup'][a6(0x86)][a6(0xae)]='280px',this['_editor']=document['createElement']('node-projects-color-editor'),this[a6(0x87)][a6(0xf6)]=this['_value'],this[a6(0x87)][a6(0xbc)]['on'](c=>{const a7=a6;this[a7(0x7c)](c[a7(0x9b)],!![]),this['dispatchEvent'](new Event('input',{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{this['_setValue'](c['newValue'],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup'][a6(0x99)](this['_editor']),document['body']['appendChild'](this[a6(0xdd)]),this[a6(0xd2)](),window[a6(0xd7)]('resize',()=>this[a6(0xd2)](),{'once':!![]}),window['addEventListener'](a6(0xb5),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a6(0xd7)](a6(0x8c),this['_windowKeyHandler']),requestAnimationFrame(()=>window[a6(0xd7)]('pointerdown',this[a6(0x96)],!![]));}[r(0xd2)](){const a8=r;if(!this['_popup'])return;const c=this[a8(0x9d)](),d=this[a8(0xdd)][a8(0xab)]||0x118,e=this[a8(0xdd)][a8(0xc6)]||0x168;let f=c[a8(0xf3)],g=c['bottom']+0x4;if(f+d>window[a8(0x78)]-0x8)f=window[a8(0x78)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a8(0x7b)]-e-0x4;this['_popup'][a8(0x86)][a8(0xf3)]=Math[a8(0x103)](0x8,f)+'px',this['_popup']['style']['top']=Math[a8(0x103)](0x8,g)+'px';}[r(0xc3)](c){const a9=r,d=c['composedPath']();if(d['includes'](this)||this[a9(0xdd)]&&d['includes'](this[a9(0xdd)]))return;this['_closePopup']();}[r(0xd1)](c){const aa=r;if(c['key']==='Escape')this[aa(0x93)]();}['_closePopup'](){const ab=r;window['removeEventListener'](ab(0x94),this['_outsidePointerHandler'],!![]),window[ab(0xc2)]('keydown',this[ab(0xb9)]),this[ab(0xdd)]?.['remove'](),this['_popup']=null,this[ab(0x87)]=null;}['_setValue'](c,d){const ac=r;this['_value']=c??'';if(d)this[ac(0xd0)]('value',this['_value']);this[ac(0xf4)]();}['_renderSwatch'](){const ad=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ad(0x86)]['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ae=r;if(!c)return null;const d=c['trim']();if(d[ae(0xe2)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h['green'],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const af=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[af(0x7d)](c??''),e=d?.[0x1]?.[af(0xe2)]();if(e===af(0xbe)||e===af(0xa7))return af(0xbe);if(e==='hsl'||e===af(0x90))return af(0x8f);if(e==='cmyk')return af(0xc1);if(e==='oklab')return af(0x76);if(e==='oklch')return af(0xc8);return null;}function normalizeModernColorSyntax(c){const ag=r;return c[ag(0xe6)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ag(0xbe),e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ah=r;if(d['includes'](',')){const h=d[ah(0xa6)](',')[ah(0xd6)](i=>i[ah(0xb3)]());if(h[ah(0xcb)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ah(0xeb)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ah(0xa6)]('/')[ah(0xd6)](i=>i[ah(0xb3)]()),g=e['split'](/\s+/)[ah(0xa8)](Boolean);if(f)g[ah(0x102)](f[ah(0xa0)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g[ah(0xcb)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ai=r,d=/^#([0-9a-f]{3,8})$/i[ai(0x7d)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e[ai(0xcb)]===0x6||e['length']===0x8)return normalizeColor({'r':f(e[ai(0xeb)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e['length']===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const aj=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1][aj(0xe2)](),[f,g]=d[0x2][aj(0xa6)]('/')[aj(0xd6)](j=>j[aj(0xb3)]()),h=f[aj(0xe6)](/,/g,'\x20')[aj(0xa6)](/\s+/)['filter'](Boolean);if(h[aj(0xcb)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ak=r,e=round(c['a'],0x3);if(d===ak(0xbe))return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ak(0x85)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ak(0xf7)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+ak(0x89)+Math[ak(0x9a)](g['l']*0x64)+'%)':ak(0x83)+Math[ak(0x9a)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+ak(0x89)+Math['round'](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math['round'](h['m']*0x64)+'%,\x20'+Math[ak(0x9a)](h['y']*0x64)+'%,\x20'+Math[ak(0x9a)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ak(0xba)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ak(0xc7)+e)+')';}const f=rgbToOklch(c);return ak(0x107)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ak(0xc7)+e)+')';}function getChannelValues(c,d){const al=r;if(d===al(0xbe))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[al(0x9a)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===al(0x8f)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[al(0x9a)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[al(0x9a)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[al(0x9a)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[al(0x9a)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[al(0x9a)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[al(0x9a)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':'alpha','value':Math[al(0x9a)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[al(0x9a)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const am=r;return{'r':Math[am(0x9a)](clamp(c['r'],0x0,0xff)),'g':Math[am(0x9a)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number[am(0xcd)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const an=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[an(0xe1)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ao=r,i=(0x1-Math[ao(0xe1)](0x2*f-0x1))*e,j=i*(0x1-Math[ao(0xe1)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ap=r,f=Math[ap(0xf2)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[ap(0xf2)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const aq=r,e=rgbToOklab(d),f=Math[aq(0xb8)](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[aq(0x75)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ar=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[ar(0xf9)](g));}function srgbToLinear(c){const as=r;return c<=0.04045?c/12.92:Math[as(0xf2)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const at=r;return Math['min'](e,Math[at(0x103)](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function b(c,d){c=c-0x74;const e=a();let f=e[c];return f;}function round(c,d){const au=r,e=Math[au(0xf2)](0xa,d);return Math[au(0x9a)](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements[r(0xbf)](r(0xcc),ColorInput);