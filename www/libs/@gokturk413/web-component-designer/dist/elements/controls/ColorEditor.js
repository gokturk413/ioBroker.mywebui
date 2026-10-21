const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0xf9))/0x1+parseInt(q(0x150))/0x2+-parseInt(q(0x14d))/0x3+parseInt(q(0xf1))/0x4+-parseInt(q(0xdf))/0x5*(-parseInt(q(0x115))/0x6)+-parseInt(q(0x129))/0x7+parseInt(q(0x108))/0x8*(parseInt(q(0xd9))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x635d6));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const au=['6Jjbxhl','composedPath','valueChanged','getBoundingClientRect','_closePopup','plane-handle','\x20/\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','_planeHandle','max','atan2','slice','position','toLowerCase','hsl','_color','_applyChannelInputs','_getDomElement','pointerId','_commitCurrentValue','5325131npcqZr','rgba','disabled','push','innerHTML','length','_alphaLabel','round','createElement','left','channels','join','map','_hue','_applyHue','\x0a\x20\x20\x20\x20\x20\x20<label>','width','_finishPlaneDrag','_planePointerMove','pointermove','_windowKeyHandler','hue','offsetHeight','button','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','_button','trim','_ignoreNextClick','remove','pointerup','_handleButtonKeyDown','_textInput','includes','addEventListener','zIndex','getAttribute','1490742HVDQFq','_channels','_applyAlpha','1602604DiKTEk','value','textContent','alpha','invalid','_setValue','valuePreviewChanged','cmyk','setPointerCapture','_togglePopup','hasAttribute','_formatColor','cmyk(','filter','click','_hueInput','replace','split','stopPropagation','abs','height','_applyPlanePointer','classList','_render','Enter','_alphaInput','setProperty','\x22\x20step=\x22','offsetWidth','exec','_popup','pointerdown','1355301SwwJfs','toColorObject','_value','_openPopup','--rgb-color','clientX','3893095vATsTh','define','Escape','_renderSwatch','isFinite','_syncHueFromColor','alpha-label','_wireEvents','key','_renderChannelInputs','rgba(','min','oklch','_mode','ready','toggleAttribute','change','_setColor','1504624xHKnoU','pow','bottom','name','rgb','blur','template','--hue','592610cYjJaN','input','_outsidePointerHandler','keydown','--color','oklab','_plane','%,\x20','_applyText','top','toggle','--opaque-color','_dragPointerId','mode','_editor','16WhvvLV','green','rgb(','removeEventListener','_positionPopup','style','cbrt','text','_validateTextInput','_modeSelect','node-projects-color-editor','preventDefault','readOnly'];a=function(){return au;};return a();}import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x123),'cmyk','oklab',r(0xeb)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0xf7)]=html`
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
  `;[r(0x117)]=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0xdb)]='#000000';[r(0x124)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0xf5);[r(0x136)]=0x0;[r(0xff)];['_planeHandle'];['_hueInput'];['_alphaInput'];['_alphaLabel'];[r(0x111)];['_channels'];['_textInput'];[r(0x105)]=null;get[r(0x151)](){return this['_value'];}set[r(0x151)](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[s(0xec)],this[s(0xe4)](),this['_value']=this['_formatColor'](),this['_render']();return;}this[s(0xdb)]=c??'',this['_render']();}get[r(0x106)](){const t=r;return this[t(0xec)];}set['mode'](c){const u=r;modes[u(0x149)](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this['_render']());}get['readOnly'](){const v=r;return this[v(0x15a)]('readonly');}set[r(0x114)](c){this['toggleAttribute']('readonly',c);}get['disabled'](){const w=r;return this['hasAttribute'](w(0x12b));}set[r(0x12b)](c){const x=r;this[x(0xee)]('disabled',c);}constructor(){const y=r;super(),this['_plane']=this['_getDomElement']('plane'),this['_planeHandle']=this[y(0x126)](y(0x11a)),this['_hueInput']=this['_getDomElement'](y(0x13e)),this[y(0xd2)]=this[y(0x126)](y(0x153)),this[y(0x12f)]=this['_getDomElement'](y(0xe5)),this['_modeSelect']=this[y(0x126)]('mode'),this[y(0x14e)]=this[y(0x126)](y(0x133)),this[y(0x148)]=this[y(0x126)](y(0x10f));}[r(0xed)](){const z=r;this[z(0xe6)]();const c=this['getAttribute']('value');if(c!=null)this[z(0x151)]=c;const d=this[z(0x14c)]('mode');modes['includes'](d)&&(this[z(0xec)]=d,this['_value']=this['_formatColor']()),this['_render']();}[r(0xe6)](){const A=r;this[A(0xff)]['addEventListener'](A(0xd8),c=>this['_startPlaneDrag'](c)),this[A(0x15f)][A(0x14a)]('input',()=>this[A(0x137)](!![])),this['_hueInput'][A(0x14a)]('change',()=>this[A(0x128)]()),this[A(0xd2)]['addEventListener'](A(0xfa),()=>this['_applyAlpha'](!![])),this[A(0xd2)][A(0x14a)]('change',()=>this[A(0x128)]()),this['_modeSelect']['addEventListener']('change',()=>{const B=A;this['mode']=this['_modeSelect'][B(0x151)],this['_commitCurrentValue']();}),this['_channels'][A(0x14a)](A(0xfa),()=>this[A(0x125)](!![])),this[A(0x14e)][A(0x14a)]('change',()=>this[A(0x128)]()),this[A(0x148)][A(0x14a)]('input',()=>this[A(0x110)]()),this[A(0x148)]['addEventListener'](A(0xef),()=>this[A(0x101)]()),this['_textInput']['addEventListener']('keydown',c=>{const C=A;c[C(0xe7)]==='Enter'&&(this[C(0x101)](),this['_textInput'][C(0xf6)]());});}['_startPlaneDrag'](c){const D=r;if(this[D(0x114)]||this[D(0x12b)])return;this[D(0x105)]=c[D(0x127)],this['_plane'][D(0x158)](c['pointerId']),this[D(0xce)](c,!![]),this[D(0xff)]['addEventListener'](D(0x13c),this[D(0x13b)]),this['_plane']['addEventListener'](D(0x146),this[D(0x13a)]),this[D(0xff)]['addEventListener']('pointercancel',this['_finishPlaneDrag']),c['preventDefault']();}[r(0x13b)]=c=>{const E=r;if(c[E(0x127)]===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const F=r;if(c[F(0x127)]!==this['_dragPointerId'])return;this['_dragPointerId']=null,this[F(0xff)]['removeEventListener'](F(0x13c),this[F(0x13b)]),this[F(0xff)][F(0x10b)](F(0x146),this[F(0x13a)]),this['_plane']['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this[F(0x128)]();};['_applyPlanePointer'](c,d){const G=r,e=this[G(0xff)][G(0x118)](),f=clamp((c[G(0xde)]-e[G(0x132)])/e[G(0x139)],0x0,0x1),g=clamp(0x1-(c['clientY']-e[G(0x102)])/e[G(0x164)],0x0,0x1),h=Number(this[G(0x15f)]['value'])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this[G(0x124)]['a']},d);}['_applyHue'](c){const H=r,d=rgbToHsv(this['_color']),e=Number(this[H(0x15f)]['value'])||0x0;this[H(0x136)]=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[H(0x124)]['a']},c);}[r(0x14f)](c){const I=r;this['_setColor']({...this['_color'],'a':clamp(Number(this[I(0xd2)]['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const J=r,d=[...this['_channels']['querySelectorAll'](J(0xfa))]['reduce']((f,g)=>{return f[g['name']]=Number(g['value']),f;},{});let e;if(this[J(0xec)]===J(0xf5))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===J(0x157))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[J(0xec)]===J(0xfe))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[J(0x153)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[J(0xf0)](normalizeColor(e),c,![],!![]);}['_validateTextInput'](){const K=r,c=this[K(0x148)][K(0x151)][K(0x143)]();this['_textInput']['classList'][K(0x103)](K(0x154),c[K(0x12e)]>0x0&&!parseColor(c));}['_applyText'](){const L=r,c=parseColor(this[L(0x148)][L(0x151)]);this['_textInput'][L(0xcf)][L(0x103)]('invalid',!c);if(!c)return;this[L(0xec)]=inferColorMode(this['_textInput'][L(0x151)])??this[L(0xec)],this[L(0xf0)](c,![],!![],!![]);}[r(0xf0)](c,d,e=!![],f=![]){const M=r,g=this[M(0xdb)];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this['_value']=this[M(0x15b)](),this[M(0xd0)](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this[M(0xdb)],'oldValue':g});else this[M(0x117)]['emit']({'newValue':this['_value'],'oldValue':g});}[r(0x128)](){const N=r,c=this['_value'];this[N(0xdb)]=this[N(0x15b)](),this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':c});}['_render'](c=!![]){const O=r;if(!this['_textInput'])return;const d=rgbToHsv(this[O(0x124)]);this[O(0x10d)]['setProperty'](O(0xf8),String(Math['round'](this['_hue']))),this['style'][O(0xd3)](O(0xfd),toCssRgb(this[O(0x124)])),this[O(0x10d)][O(0xd3)](O(0x104),'rgb('+this[O(0x124)]['r']+',\x20'+this[O(0x124)]['g']+',\x20'+this[O(0x124)]['b']+')'),this['style']['setProperty'](O(0xdd),this['_color']['r']+',\x20'+this['_color']['g']+',\x20'+this[O(0x124)]['b']),this[O(0x11d)][O(0x10d)]['left']=d['s']*0x64+'%',this['_planeHandle']['style'][O(0x102)]=(0x1-d['v'])*0x64+'%',this[O(0x15f)]['value']=String(Math['round'](this[O(0x136)])),this[O(0xd2)][O(0x151)]=String(Math['round'](this[O(0x124)]['a']*0x64)),this['_alphaLabel'][O(0x152)]=Math[O(0x130)](this['_color']['a']*0x64)+'%',this[O(0x111)]['value']=this[O(0xec)];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this['_textInput'])this[O(0x148)]['value']=this['_value'];this['_textInput']['classList'][O(0x145)]('invalid');}[r(0xe8)](){const P=r,c=getChannelValues(this[P(0x124)],this[P(0xec)]);this['_channels'][P(0x12d)]=c[P(0x135)](d=>P(0x138)+d['label']+P(0x11c)+d[P(0xf4)]+'\x22\x20min=\x22'+d[P(0xea)]+'\x22\x20max=\x22'+d[P(0x11e)]+P(0xd4)+d['step']+'\x22\x20value=\x22'+d['value']+P(0x141))[P(0x134)]('');}['_formatColor'](){return formatColor(this['_color'],this['_mode']);}['_syncHueFromColor'](){const Q=r,c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this[Q(0x136)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x10d)]=css`
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
  `;static [r(0xf7)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;[r(0xdb)]='#000000';[r(0x142)];[r(0xd7)];[r(0x107)];['_ignoreNextClick']=![];[r(0xfb)]=c=>this['_handleOutsidePointer'](c);[r(0x13d)]=c=>this['_handleWindowKey'](c);get[r(0x151)](){const R=r;return this[R(0xdb)];}set[r(0x151)](c){const S=r;this[S(0x155)](c,![]);}get['readOnly'](){const T=r;return this[T(0x15a)]('readonly');}set['readOnly'](c){this['toggleAttribute']('readonly',c);}get['disabled'](){return this['hasAttribute']('disabled');}set['disabled'](c){const U=r;this[U(0xee)]('disabled',c);if(this['_button'])this['_button'][U(0x12b)]=c;}constructor(){const V=r;super(),this['_button']=this[V(0x126)]('button');}[r(0xed)](){const W=r,c=this[W(0x14c)]('value');if(c!=null)this['_setValue'](c,![]);this[W(0x142)][W(0x12b)]=this['disabled'],this['_button']['addEventListener']('pointerdown',d=>this['_handleButtonPointerDown'](d)),this['_button']['addEventListener'](W(0x15e),d=>this['_handleButtonClick'](d)),this[W(0x142)]['addEventListener']('keydown',d=>this[W(0x147)](d)),this['_renderSwatch']();}['disconnectedCallback'](){this['_closePopup']();}['_togglePopup'](){const X=r;if(this[X(0x114)]||this[X(0x12b)])return;if(this[X(0xd7)])this['_closePopup']();else this[X(0xdc)]();}['_handleButtonPointerDown'](c){const Y=r;if(c[Y(0x140)]!==0x0)return;this['_ignoreNextClick']=!![],this[Y(0x159)](),c[Y(0x113)](),c[Y(0x162)]();}['_handleButtonClick'](c){const Z=r;if(this[Z(0x144)]){this['_ignoreNextClick']=![],c[Z(0x113)](),c['stopPropagation']();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){const a0=r;if(c[a0(0xe7)]!==a0(0xd1)&&c[a0(0xe7)]!=='\x20')return;this['_togglePopup'](),c[a0(0x113)](),c[a0(0x162)]();}[r(0xdc)](){const a1=r;this['_popup']=document['createElement']('div'),this[a1(0xd7)]['style'][a1(0x121)]='fixed',this[a1(0xd7)][a1(0x10d)][a1(0x14b)]='100000',this[a1(0xd7)]['style']['width']='280px',this['_editor']=document[a1(0x131)]('node-projects-color-editor'),this['_editor'][a1(0x151)]=this['_value'],this[a1(0x107)][a1(0x156)]['on'](c=>{const a2=a1;this[a2(0x155)](c['newValue'],!![]),this['dispatchEvent'](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a1(0x107)]['valueChanged']['on'](c=>{const a3=a1;this[a3(0x155)](c['newValue'],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this[a1(0xd7)]['appendChild'](this['_editor']),document['body']['appendChild'](this['_popup']),this[a1(0x10c)](),window[a1(0x14a)]('resize',()=>this[a1(0x10c)](),{'once':!![]}),window['addEventListener']('scroll',()=>this[a1(0x10c)](),{'once':!![],'capture':!![]}),window[a1(0x14a)](a1(0xfc),this[a1(0x13d)]),requestAnimationFrame(()=>window[a1(0x14a)]('pointerdown',this[a1(0xfb)],!![]));}[r(0x10c)](){const a4=r;if(!this[a4(0xd7)])return;const c=this['getBoundingClientRect'](),d=this[a4(0xd7)][a4(0xd5)]||0x118,e=this[a4(0xd7)][a4(0x13f)]||0x168;let f=c['left'],g=c[a4(0xf3)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c['top']-e-0x4;this[a4(0xd7)][a4(0x10d)][a4(0x132)]=Math[a4(0x11e)](0x8,f)+'px',this['_popup']['style'][a4(0x102)]=Math[a4(0x11e)](0x8,g)+'px';}['_handleOutsidePointer'](c){const a5=r,d=c[a5(0x116)]();if(d['includes'](this)||this['_popup']&&d['includes'](this[a5(0xd7)]))return;this[a5(0x119)]();}['_handleWindowKey'](c){const a6=r;if(c[a6(0xe7)]===a6(0xe1))this[a6(0x119)]();}['_closePopup'](){const a7=r;window['removeEventListener']('pointerdown',this[a7(0xfb)],!![]),window['removeEventListener']('keydown',this[a7(0x13d)]),this[a7(0xd7)]?.[a7(0x145)](),this[a7(0xd7)]=null,this[a7(0x107)]=null;}['_setValue'](c,d){const a8=r;this[a8(0xdb)]=c??'';if(d)this['setAttribute'](a8(0x151),this['_value']);this['_renderSwatch']();}[r(0xe2)](){const a9=r,c=parseColor(this[a9(0xdb)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[a9(0x10d)]['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const aa=r;if(!c)return null;const d=c[aa(0x143)]();if(d['toLowerCase']()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[aa(0xda)](g);if(h?.['valid'])return normalizeColor({'r':h['red'],'g':h[aa(0x109)],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ab=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ab(0x122)]();if(e==='rgb'||e===ab(0x12a))return'rgb';if(e===ab(0x123)||e==='hsla')return ab(0x123);if(e===ab(0x157))return ab(0x157);if(e==='oklab')return ab(0xfe);if(e==='oklch')return'oklch';return null;}function normalizeModernColorSyntax(c){const ac=r;return c[ac(0x160)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ac(0xf5),e))[ac(0x160)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ac(0x123),e));}function b(c,d){c=c-0xce;const e=a();let f=e[c];return f;}function normalizeFunctionBody(c,d){const ad=r;if(d['includes'](',')){const h=d['split'](',')['map'](i=>i[ad(0x143)]());if(h['length']===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ad(0x120)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ad(0x134)](',')+')';}const [e,f]=d[ad(0x161)]('/')['map'](i=>i['trim']()),g=e['split'](/\s+/)[ad(0x15d)](Boolean);if(f)g[ad(0x12c)](f['endsWith']('%')?String(Number(f[ad(0x120)](0x0,-0x1))/0x64):f);return''+c+(g[ad(0x12e)]===0x4?'a':'')+'('+g[ad(0x134)](',')+')';}function parseHexColor(c){const ae=r,d=/^#([0-9a-f]{3,8})$/i[ae(0xd6)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[ae(0x12e)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ae(0x12e)]===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[ae(0x12e)]===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[ae(0x120)](0x2,0x4)),'b':f(e[ae(0x120)](0x4,0x6)),'a':e['length']===0x8?f(e[ae(0x120)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const af=r,d=/^(oklab|oklch)\((.*)\)$/i[af(0xd6)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')['map'](j=>j['trim']()),h=f[af(0x160)](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[af(0x12e)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===af(0xfe))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ag=r,e=round(c['a'],0x3);if(d===ag(0xf5))return c['a']>=0x1?ag(0x10a)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===ag(0x123)){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math[ag(0x130)](g['h'])+',\x20'+Math[ag(0x130)](g['s']*0x64)+'%,\x20'+Math[ag(0x130)](g['l']*0x64)+'%)':'hsla('+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+ag(0x100)+e+')';}if(d===ag(0x157)){const h=rgbToCmyk(c),i=Math[ag(0x130)](h['c']*0x64)+ag(0x100)+Math['round'](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+'%,\x20'+Math[ag(0x130)](h['k']*0x64)+'%';return c['a']>=0x1?ag(0x15c)+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ag(0x11b)+e)+')';}function getChannelValues(c,d){const ah=r;if(d===ah(0xf5))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ah(0x130)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ah(0x130)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ah(0x157)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[ah(0x130)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ah(0x130)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ah(0x130)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':'alpha','value':Math[ah(0x130)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[ah(0x130)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ai=r;return{'r':Math[ai(0x130)](clamp(c['r'],0x0,0xff)),'g':Math[ai(0x130)](clamp(c['g'],0x0,0xff)),'b':Math[ai(0x130)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[ai(0xe3)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const aj=r;return aj(0xe9)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ak=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[ak(0xea)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const al=r,i=f*e,j=i*(0x1-Math[al(0x163)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const am=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[am(0x11e)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[am(0x163)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const an=r,i=(0x1-Math[an(0x163)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ao=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ao(0x10e)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ap=r,f=Math[ap(0xf2)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[ap(0xf2)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const aq=r,e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[aq(0x11f)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math['sin'](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const ar=r;return c<=0.0031308?12.92*c:1.055*Math[ar(0xf2)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const as=r;return Math[as(0xea)](e,Math['max'](d,Number[as(0xe3)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const at=r,e=Math['pow'](0xa,d);return Math[at(0x130)](c*e)/e;}customElements['define'](r(0x112),ColorEditor),customElements[r(0xe0)]('node-projects-color-input',ColorInput);