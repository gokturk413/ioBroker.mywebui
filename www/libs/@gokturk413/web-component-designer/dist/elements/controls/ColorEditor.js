function a(){const au=['1612620FoBjqs','pointerdown','280px','_windowKeyHandler','emit','change','oklab','--rgb-color','_hueInput','_alphaInput','555279hWQtXb','replace','_applyChannelInputs','pow','valuePreviewChanged','Enter','innerWidth','preventDefault','_ignoreNextClick','addEventListener','_button','exec','disabled','%,\x20','resize','_applyText','body','_planePointerMove','hsl(','min','classList','_commitCurrentValue','red','composedPath','isFinite','round','pointerup','valid','_applyHue','label','transparent','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','height','_applyPlanePointer','getBoundingClientRect','ready','_dragPointerId','_render','_handleButtonPointerDown','reduce','Escape','mode','_syncHueFromColor','click','join','clientY','filter','_textInput','define','_color','plane','Alpha','setProperty','hasAttribute','_setValue','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','3239383IeXtKg','position','_hue','_positionPopup','readOnly','bottom','endsWith','\x20/\x20','_renderChannelInputs','_handleButtonKeyDown','_popup','#000000','offsetHeight','valueChanged','textContent','oklch','_getDomElement','_setColor','readonly','alpha-label','_startPlaneDrag','length','toggle','3158450uxULED','1053176sytoTW','cbrt','_finishPlaneDrag','getAttribute','pointercancel','_renderSwatch','max','100000','toColorObject','stopPropagation','abs','rgb(','1836832mLSohp','hsl','includes','toggleAttribute','--color','top','rgba(','92oRTjVq','sin','_alphaLabel','slice','template','_plane','_handleButtonClick','rgb','keydown','pointerId','_modeSelect','_handleOutsidePointer','--opaque-color','toLowerCase','zIndex','innerHTML','left','removeEventListener','node-projects-color-editor','55035MlVxiD','value','map','alpha','_channels','_togglePopup','oklab(','appendChild','dispatchEvent','_mode','_editor','_wireEvents','oklch(','_applyAlpha','remove','_formatColor','input','blur','_planeHandle','_closePopup','_value','clientX','trim','invalid','_openPopup','_handleWindowKey','style','_validateTextInput','width','push','cmyk('];a=function(){return au;};return a();}const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x188))/0x1+-parseInt(q(0x1d8))/0x2+-parseInt(q(0x1fe))/0x3*(-parseInt(q(0x1eb))/0x4)+-parseInt(q(0x1d7))/0x5+parseInt(q(0x17e))/0x6+parseInt(q(0x1c0))/0x7+-parseInt(q(0x1e4))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4e567));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';const modes=[r(0x1f2),r(0x1e5),'cmyk','oklab',r(0x1cf)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x179)]=css`
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
  `;[r(0x1cd)]=new TypedEvent();[r(0x18c)]=new TypedEvent();['_value']='#000000';[r(0x1b9)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';[r(0x1c2)]=0x0;[r(0x1f0)];['_planeHandle'];[r(0x186)];['_alphaInput'];[r(0x1ed)];[r(0x1f5)];['_channels'];[r(0x1b7)];['_dragPointerId']=null;get[r(0x1ff)](){const s=r;return this[s(0x173)];}set[r(0x1ff)](c){const t=r,d=parseColor(c);if(d){this['_color']=d,this[t(0x168)]=inferColorMode(c)??this[t(0x168)],this['_syncHueFromColor'](),this[t(0x173)]=this['_formatColor'](),this[t(0x1ad)]();return;}this[t(0x173)]=c??'',this[t(0x1ad)]();}get['mode'](){const u=r;return this[u(0x168)];}set['mode'](c){const v=r;modes['includes'](c)&&(this['_mode']=c,this['_value']=this[v(0x16e)](),this[v(0x1ad)]());}get[r(0x1c4)](){const w=r;return this[w(0x1bd)](w(0x1d2));}set[r(0x1c4)](c){this['toggleAttribute']('readonly',c);}get['disabled'](){const x=r;return this['hasAttribute'](x(0x194));}set['disabled'](c){const y=r;this[y(0x1e7)]('disabled',c);}constructor(){const z=r;super(),this[z(0x1f0)]=this[z(0x1d0)](z(0x1ba)),this[z(0x171)]=this[z(0x1d0)]('plane-handle'),this[z(0x186)]=this['_getDomElement']('hue'),this['_alphaInput']=this['_getDomElement']('alpha'),this['_alphaLabel']=this[z(0x1d0)](z(0x1d3)),this[z(0x1f5)]=this['_getDomElement']('mode'),this['_channels']=this['_getDomElement']('channels'),this['_textInput']=this[z(0x1d0)]('text');}[r(0x1ab)](){const A=r;this[A(0x16a)]();const c=this['getAttribute']('value');if(c!=null)this['value']=c;const d=this[A(0x1db)]('mode');modes['includes'](d)&&(this[A(0x168)]=d,this[A(0x173)]=this['_formatColor']()),this['_render']();}['_wireEvents'](){const B=r;this[B(0x1f0)]['addEventListener'](B(0x17f),c=>this[B(0x1d4)](c)),this['_hueInput']['addEventListener'](B(0x16f),()=>this[B(0x1a4)](!![])),this[B(0x186)][B(0x191)]('change',()=>this[B(0x19d)]()),this[B(0x187)][B(0x191)](B(0x16f),()=>this[B(0x16c)](!![])),this['_alphaInput'][B(0x191)](B(0x183),()=>this[B(0x19d)]()),this['_modeSelect']['addEventListener']('change',()=>{const C=B;this[C(0x1b1)]=this[C(0x1f5)][C(0x1ff)],this[C(0x19d)]();}),this['_channels'][B(0x191)](B(0x16f),()=>this[B(0x18a)](!![])),this['_channels']['addEventListener']('change',()=>this[B(0x19d)]()),this['_textInput']['addEventListener']('input',()=>this['_validateTextInput']()),this['_textInput']['addEventListener'](B(0x183),()=>this[B(0x197)]()),this[B(0x1b7)][B(0x191)]('keydown',c=>{const D=B;c['key']==='Enter'&&(this[D(0x197)](),this['_textInput'][D(0x170)]());});}['_startPlaneDrag'](c){const E=r;if(this[E(0x1c4)]||this[E(0x194)])return;this['_dragPointerId']=c[E(0x1f4)],this['_plane']['setPointerCapture'](c['pointerId']),this[E(0x1a9)](c,!![]),this['_plane'][E(0x191)]('pointermove',this[E(0x199)]),this[E(0x1f0)]['addEventListener'](E(0x1a2),this['_finishPlaneDrag']),this[E(0x1f0)]['addEventListener'](E(0x1dc),this[E(0x1da)]),c[E(0x18f)]();}[r(0x199)]=c=>{const F=r;if(c[F(0x1f4)]===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};['_finishPlaneDrag']=c=>{const G=r;if(c['pointerId']!==this['_dragPointerId'])return;this[G(0x1ac)]=null,this['_plane'][G(0x1fc)]('pointermove',this[G(0x199)]),this[G(0x1f0)][G(0x1fc)](G(0x1a2),this[G(0x1da)]),this['_plane'][G(0x1fc)]('pointercancel',this['_finishPlaneDrag']),this[G(0x19d)]();};['_applyPlanePointer'](c,d){const H=r,e=this[H(0x1f0)]['getBoundingClientRect'](),f=clamp((c[H(0x174)]-e['left'])/e[H(0x17b)],0x0,0x1),g=clamp(0x1-(c[H(0x1b5)]-e[H(0x1e9)])/e[H(0x1a8)],0x0,0x1),h=Number(this['_hueInput'][H(0x1ff)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1a4)](c){const I=r,d=rgbToHsv(this['_color']),e=Number(this['_hueInput'][I(0x1ff)])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}[r(0x16c)](c){const J=r;this['_setColor']({...this[J(0x1b9)],'a':clamp(Number(this['_alphaInput']['value'])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const K=r,d=[...this['_channels']['querySelectorAll']('input')][K(0x1af)]((f,g)=>{return f[g['name']]=Number(g['value']),f;},{});let e;if(this[K(0x168)]==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']===K(0x1e5))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===K(0x184))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d[K(0x201)]/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[K(0x1d1)](normalizeColor(e),c,![],!![]);}[r(0x17a)](){const L=r,c=this[L(0x1b7)]['value'][L(0x175)]();this[L(0x1b7)][L(0x19c)]['toggle']('invalid',c['length']>0x0&&!parseColor(c));}['_applyText'](){const M=r,c=parseColor(this[M(0x1b7)]['value']);this['_textInput']['classList'][M(0x1d6)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this[M(0x1b7)][M(0x1ff)])??this['_mode'],this[M(0x1d1)](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this[N(0x173)];this[N(0x1b9)]=normalizeColor(c);if(f)this[N(0x1b2)]();this[N(0x173)]=this[N(0x16e)](),this[N(0x1ad)](e);if(d)this['valuePreviewChanged'][N(0x182)]({'newValue':this['_value'],'oldValue':g});else this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this['_value'];this[O(0x173)]=this['_formatColor'](),this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':c});}[r(0x1ad)](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this[P(0x1b9)]);this['style']['setProperty']('--hue',String(Math['round'](this[P(0x1c2)]))),this['style']['setProperty'](P(0x1e8),toCssRgb(this['_color'])),this['style']['setProperty'](P(0x1f7),'rgb('+this['_color']['r']+',\x20'+this[P(0x1b9)]['g']+',\x20'+this['_color']['b']+')'),this['style'][P(0x1bc)](P(0x185),this[P(0x1b9)]['r']+',\x20'+this['_color']['g']+',\x20'+this['_color']['b']),this[P(0x171)][P(0x179)][P(0x1fb)]=d['s']*0x64+'%',this[P(0x171)][P(0x179)][P(0x1e9)]=(0x1-d['v'])*0x64+'%',this[P(0x186)][P(0x1ff)]=String(Math['round'](this[P(0x1c2)])),this[P(0x187)][P(0x1ff)]=String(Math[P(0x1a1)](this[P(0x1b9)]['a']*0x64)),this['_alphaLabel'][P(0x1ce)]=Math['round'](this[P(0x1b9)]['a']*0x64)+'%',this['_modeSelect']['value']=this[P(0x168)];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this['_textInput'])this['_textInput']['value']=this['_value'];this['_textInput']['classList'][P(0x16d)](P(0x176));}[r(0x1c8)](){const Q=r,c=getChannelValues(this['_color'],this['_mode']);this[Q(0x163)][Q(0x1fa)]=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d[Q(0x1a5)]+Q(0x1a7)+d['name']+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d[Q(0x1de)]+'\x22\x20step=\x22'+d['step']+'\x22\x20value=\x22'+d[Q(0x1ff)]+Q(0x1bf))[Q(0x1b4)]('');}['_formatColor'](){const R=r;return formatColor(this[R(0x1b9)],this[R(0x168)]);}[r(0x1b2)](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x179)]=css`
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
  `;static [r(0x1ef)]=html`
    <button id="button" type="button" aria-label="Edit color"><span id="swatch"></span></button>
  `;[r(0x173)]=r(0x1cb);[r(0x192)];['_popup'];[r(0x169)];[r(0x190)]=![];['_outsidePointerHandler']=c=>this[r(0x1f6)](c);['_windowKeyHandler']=c=>this[r(0x178)](c);get[r(0x1ff)](){return this['_value'];}set[r(0x1ff)](c){const S=r;this[S(0x1be)](c,![]);}get[r(0x1c4)](){const T=r;return this['hasAttribute'](T(0x1d2));}set['readOnly'](c){const U=r;this[U(0x1e7)](U(0x1d2),c);}get['disabled'](){const V=r;return this['hasAttribute'](V(0x194));}set[r(0x194)](c){const W=r;this['toggleAttribute']('disabled',c);if(this[W(0x192)])this['_button'][W(0x194)]=c;}constructor(){const X=r;super(),this['_button']=this[X(0x1d0)]('button');}[r(0x1ab)](){const Y=r,c=this[Y(0x1db)]('value');if(c!=null)this[Y(0x1be)](c,![]);this[Y(0x192)]['disabled']=this['disabled'],this['_button']['addEventListener']('pointerdown',d=>this['_handleButtonPointerDown'](d)),this['_button']['addEventListener'](Y(0x1b3),d=>this[Y(0x1f1)](d)),this[Y(0x192)]['addEventListener'](Y(0x1f3),d=>this['_handleButtonKeyDown'](d)),this[Y(0x1dd)]();}['disconnectedCallback'](){const Z=r;this[Z(0x172)]();}['_togglePopup'](){const a0=r;if(this[a0(0x1c4)]||this[a0(0x194)])return;if(this['_popup'])this['_closePopup']();else this[a0(0x177)]();}[r(0x1ae)](c){if(c['button']!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c['preventDefault'](),c['stopPropagation']();}['_handleButtonClick'](c){const a1=r;if(this[a1(0x190)]){this[a1(0x190)]=![],c[a1(0x18f)](),c['stopPropagation']();return;}this['_togglePopup']();}[r(0x1c9)](c){const a2=r;if(c['key']!==a2(0x18d)&&c['key']!=='\x20')return;this[a2(0x164)](),c['preventDefault'](),c[a2(0x1e1)]();}[r(0x177)](){const a3=r;this[a3(0x1ca)]=document['createElement']('div'),this['_popup'][a3(0x179)][a3(0x1c1)]='fixed',this['_popup']['style'][a3(0x1f9)]=a3(0x1df),this[a3(0x1ca)]['style'][a3(0x17b)]=a3(0x180),this[a3(0x169)]=document['createElement'](a3(0x1fd)),this['_editor'][a3(0x1ff)]=this[a3(0x173)],this['_editor'][a3(0x18c)]['on'](c=>{const a4=a3;this[a4(0x1be)](c['newValue'],!![]),this[a4(0x167)](new Event(a4(0x16f),{'bubbles':!![],'composed':!![]}));}),this[a3(0x169)][a3(0x1cd)]['on'](c=>{const a5=a3;this[a5(0x1be)](c['newValue'],!![]),this['dispatchEvent'](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this[a3(0x169)]),document[a3(0x198)][a3(0x166)](this[a3(0x1ca)]),this['_positionPopup'](),window['addEventListener'](a3(0x196),()=>this[a3(0x1c3)](),{'once':!![]}),window[a3(0x191)]('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a3(0x191)](a3(0x1f3),this[a3(0x181)]),requestAnimationFrame(()=>window['addEventListener'](a3(0x17f),this['_outsidePointerHandler'],!![]));}['_positionPopup'](){const a6=r;if(!this['_popup'])return;const c=this[a6(0x1aa)](),d=this['_popup']['offsetWidth']||0x118,e=this['_popup'][a6(0x1cc)]||0x168;let f=c[a6(0x1fb)],g=c[a6(0x1c5)]+0x4;if(f+d>window[a6(0x18e)]-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c[a6(0x1e9)]-e-0x4;this['_popup']['style']['left']=Math[a6(0x1de)](0x8,f)+'px',this[a6(0x1ca)]['style']['top']=Math[a6(0x1de)](0x8,g)+'px';}[r(0x1f6)](c){const a7=r,d=c[a7(0x19f)]();if(d['includes'](this)||this[a7(0x1ca)]&&d['includes'](this['_popup']))return;this['_closePopup']();}['_handleWindowKey'](c){const a8=r;if(c['key']===a8(0x1b0))this['_closePopup']();}['_closePopup'](){const a9=r;window['removeEventListener'](a9(0x17f),this['_outsidePointerHandler'],!![]),window['removeEventListener']('keydown',this['_windowKeyHandler']),this['_popup']?.['remove'](),this['_popup']=null,this[a9(0x169)]=null;}[r(0x1be)](c,d){const aa=r;this[aa(0x173)]=c??'';if(d)this['setAttribute']('value',this[aa(0x173)]);this[aa(0x1dd)]();}[r(0x1dd)](){const c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style']['setProperty']('--color',toCssRgb(c));}}function parseColor(c){const ab=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()===ab(0x1a6))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ab(0x1e0)](g);if(h?.[ab(0x1a3)])return normalizeColor({'r':h[ab(0x19e)],'g':h['green'],'b':h['blue'],'a':h['opacity']});return null;}function inferColorMode(c){const ac=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.[ac(0x1f8)]();if(e==='rgb'||e==='rgba')return'rgb';if(e===ac(0x1e5)||e==='hsla')return'hsl';if(e==='cmyk')return'cmyk';if(e==='oklab')return ac(0x184);if(e==='oklch')return'oklch';return null;}function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}function normalizeModernColorSyntax(c){const ad=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ad(0x1f2),e))[ad(0x189)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ad(0x1e5),e));}function normalizeFunctionBody(c,d){const ae=r;if(d[ae(0x1e6)](',')){const h=d['split'](',')[ae(0x200)](i=>i['trim']());if(h[ae(0x1d5)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h[ae(0x1b4)](',')+')';}const [e,f]=d['split']('/')[ae(0x200)](i=>i['trim']()),g=e['split'](/\s+/)[ae(0x1b6)](Boolean);if(f)g[ae(0x17c)](f['endsWith']('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g[ae(0x1d5)]===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const af=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[af(0x1d5)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[af(0x1d5)]===0x4?f(e[0x3])/0xff:0x1});if(e[af(0x1d5)]===0x6||e['length']===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[af(0x1ee)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[af(0x1d5)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ag=r,d=/^(oklab|oklch)\((.*)\)$/i[ag(0x193)](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')[ag(0x200)](j=>j['trim']()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)[ag(0x1b6)](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ah=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ah(0x1e3)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ah(0x1ea)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===ah(0x1e5)){const g=rgbToHsl(c);return c['a']>=0x1?ah(0x19a)+Math[ah(0x1a1)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':'hsla('+Math['round'](g['h'])+',\x20'+Math[ah(0x1a1)](g['s']*0x64)+ah(0x195)+Math['round'](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[ah(0x1a1)](h['c']*0x64)+ah(0x195)+Math['round'](h['m']*0x64)+ah(0x195)+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?ah(0x17d)+i+')':ah(0x17d)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ah(0x165)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ah(0x1c7)+e)+')';}const f=rgbToOklch(c);return ah(0x16b)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const ai=r;if(d===ai(0x1f2))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x1a1)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ai(0x1e5)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ai(0x1a1)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ai(0x1a1)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math[ai(0x1a1)](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x1a1)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ai(0x1a1)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ai(0x1a1)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ai(0x1a1)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ai(0x184)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':ai(0x1bb),'name':'alpha','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const aj=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[aj(0x1a1)](clamp(c['g'],0x0,0xff)),'b':Math[aj(0x1a1)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[aj(0x1a0)](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const ak=r,i=f*e,j=i*(0x1-Math[ak(0x1e2)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const al=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[al(0x1de)](e,f,i),k=Math[al(0x19b)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[al(0x1e2)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const am=r,i=(0x1-Math[am(0x1e2)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const an=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[an(0x1de)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ao=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ao(0x1d9)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[ao(0x1d9)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ap=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[ap(0x1ec)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const aq=r;return c<=0.0031308?12.92*c:1.055*Math[aq(0x18b)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const ar=r;return c[ar(0x1c6)]('%')?Number(c[ar(0x1ee)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const as=r;return Math[as(0x19b)](e,Math[as(0x1de)](d,Number[as(0x1a0)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const at=r,e=Math[at(0x18b)](0xa,d);return Math[at(0x1a1)](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements[r(0x1b8)]('node-projects-color-input',ColorInput);