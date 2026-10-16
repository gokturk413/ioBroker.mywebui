const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x1b7))/0x1*(parseInt(q(0x1d6))/0x2)+parseInt(q(0x1d8))/0x3*(parseInt(q(0x1af))/0x4)+-parseInt(q(0x214))/0x5*(-parseInt(q(0x219))/0x6)+parseInt(q(0x1ce))/0x7*(-parseInt(q(0x21e))/0x8)+parseInt(q(0x1b0))/0x9*(-parseInt(q(0x208))/0xa)+parseInt(q(0x19c))/0xb*(-parseInt(q(0x1f4))/0xc)+parseInt(q(0x1e6))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25e7a));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';function b(c,d){c=c-0x18d;const e=a();let f=e[c];return f;}function a(){const ay=['181782MuXMMf','composedPath','\x22\x20value=\x22','Alpha','newValue','_textInput','opacity','278HJHFfr','exec','key','_startPlaneDrag','createElement','_setColor','endsWith','readonly','toggle','top','transparent','getAttribute','_closePopup','toggleAttribute','%,\x20','addEventListener','invalid','oklab(','height','button','bottom','_windowKeyHandler','_mode','7MeKhvk','change','valid','appendChild','_wireEvents','clientY','_renderSwatch','\x22\x20min=\x22','362mjqdvd','_channels','846504UCsMds','_handleButtonKeyDown','setProperty','_togglePopup','round','length','style','pointercancel','_syncHueFromColor','stopPropagation','_applyText','_editor','click','valueChanged','4103827gKLNsK','\x0a\x20\x20\x20\x20\x20\x20<label>','removeEventListener','setPointerCapture','replace','_alphaLabel','mode','_plane','_getDomElement','pow','atan2','value','dispatchEvent','_render','20520QwhFfo','pointerdown','_dragPointerId','textContent','blue','_hue','_hueInput','join','define','_formatColor','Enter','input','setAttribute','_validateTextInput','_finishPlaneDrag','rgba(','_setValue','offsetWidth','valuePreviewChanged','_modeSelect','80kkgGIg','innerHTML','_applyPlanePointer','node-projects-color-input','hasAttribute','hsla(','ready','_outsidePointerHandler','pointermove','emit','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','width','805qnUxjs','cmyk','step','trim','_handleButtonPointerDown','6180KdNkjV','_handleWindowKey','filter','_alphaInput','max','1571576qTKcOj','_value','oklch','_button','oklab','#000000','_color','push','abs','hsl','readOnly','slice','template','cos','map','div','_handleOutsidePointer','min','disabled','_popup','name','getBoundingClientRect','hsl(','--color','position','_applyChannelInputs','1287BUvxqz','alpha','_planeHandle','keydown','pointerup','cbrt','rgb(','querySelectorAll','preventDefault','--rgb-color','_handleButtonClick','_applyHue','green','_ignoreNextClick','_commitCurrentValue','rgb','_positionPopup','split','pointerId','4YZMYNM'];a=function(){return ay;};return a();}const modes=['rgb',r(0x227),'cmyk',r(0x222),r(0x220)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x18e)]=html`
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
  `;[r(0x1e5)]=new TypedEvent();[r(0x206)]=new TypedEvent();['_value']=r(0x223);['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']='rgb';['_hue']=0x0;['_plane'];[r(0x19e)];[r(0x1fa)];['_alphaInput'];[r(0x1eb)];[r(0x207)];['_channels'];[r(0x1b5)];[r(0x1f6)]=null;get[r(0x1f1)](){const s=r;return this[s(0x21f)];}set['value'](c){const t=r,d=parseColor(c);if(d){this[t(0x224)]=d,this[t(0x1cd)]=inferColorMode(c)??this['_mode'],this[t(0x1e0)](),this['_value']=this[t(0x1fd)](),this['_render']();return;}this[t(0x21f)]=c??'',this[t(0x1f3)]();}get[r(0x1ec)](){const u=r;return this[u(0x1cd)];}set[r(0x1ec)](c){const v=r;modes['includes'](c)&&(this[v(0x1cd)]=c,this['_value']=this['_formatColor'](),this['_render']());}get['readOnly'](){const w=r;return this[w(0x20c)](w(0x1be));}set[r(0x228)](c){const x=r;this[x(0x1c4)](x(0x1be),c);}get['disabled'](){const y=r;return this[y(0x20c)](y(0x194));}set[r(0x194)](c){const z=r;this[z(0x1c4)]('disabled',c);}constructor(){const A=r;super(),this['_plane']=this['_getDomElement']('plane'),this['_planeHandle']=this[A(0x1ee)]('plane-handle'),this[A(0x1fa)]=this[A(0x1ee)]('hue'),this[A(0x21c)]=this[A(0x1ee)]('alpha'),this['_alphaLabel']=this[A(0x1ee)]('alpha-label'),this['_modeSelect']=this[A(0x1ee)]('mode'),this['_channels']=this['_getDomElement']('channels'),this[A(0x1b5)]=this[A(0x1ee)]('text');}['ready'](){const B=r;this[B(0x1d2)]();const c=this['getAttribute'](B(0x1f1));if(c!=null)this['value']=c;const d=this[B(0x1c2)]('mode');modes['includes'](d)&&(this[B(0x1cd)]=d,this['_value']=this['_formatColor']()),this[B(0x1f3)]();}['_wireEvents'](){const C=r;this[C(0x1ed)][C(0x1c6)](C(0x1f5),c=>this[C(0x1ba)](c)),this['_hueInput']['addEventListener'](C(0x1ff),()=>this[C(0x1a7)](!![])),this['_hueInput'][C(0x1c6)](C(0x1cf),()=>this['_commitCurrentValue']()),this[C(0x21c)][C(0x1c6)](C(0x1ff),()=>this['_applyAlpha'](!![])),this['_alphaInput']['addEventListener']('change',()=>this[C(0x1aa)]()),this['_modeSelect']['addEventListener'](C(0x1cf),()=>{const D=C;this[D(0x1ec)]=this['_modeSelect']['value'],this[D(0x1aa)]();}),this[C(0x1d7)]['addEventListener']('input',()=>this[C(0x19b)](!![])),this[C(0x1d7)][C(0x1c6)](C(0x1cf),()=>this[C(0x1aa)]()),this[C(0x1b5)][C(0x1c6)]('input',()=>this[C(0x201)]()),this['_textInput'][C(0x1c6)]('change',()=>this[C(0x1e2)]()),this['_textInput']['addEventListener'](C(0x19f),c=>{const E=C;c[E(0x1b9)]==='Enter'&&(this[E(0x1e2)](),this['_textInput']['blur']());});}[r(0x1ba)](c){const F=r;if(this[F(0x228)]||this[F(0x194)])return;this['_dragPointerId']=c[F(0x1ae)],this[F(0x1ed)][F(0x1e9)](c['pointerId']),this[F(0x20a)](c,!![]),this['_plane'][F(0x1c6)](F(0x210),this['_planePointerMove']),this['_plane']['addEventListener']('pointerup',this['_finishPlaneDrag']),this[F(0x1ed)]['addEventListener'](F(0x1df),this[F(0x202)]),c['preventDefault']();}['_planePointerMove']=c=>{const G=r;if(c[G(0x1ae)]===this['_dragPointerId'])this['_applyPlanePointer'](c,!![]);};[r(0x202)]=c=>{const H=r;if(c[H(0x1ae)]!==this[H(0x1f6)])return;this['_dragPointerId']=null,this['_plane'][H(0x1e8)](H(0x210),this['_planePointerMove']),this[H(0x1ed)]['removeEventListener'](H(0x1a0),this['_finishPlaneDrag']),this['_plane'][H(0x1e8)]('pointercancel',this[H(0x202)]),this[H(0x1aa)]();};['_applyPlanePointer'](c,d){const I=r,e=this[I(0x1ed)]['getBoundingClientRect'](),f=clamp((c['clientX']-e['left'])/e[I(0x213)],0x0,0x1),g=clamp(0x1-(c[I(0x1d3)]-e['top'])/e[I(0x1c9)],0x0,0x1),h=Number(this[I(0x1fa)]['value'])||0x0;this[I(0x1f9)]=normalizeHue(h),this[I(0x1bc)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1a7)](c){const J=r,d=rgbToHsv(this[J(0x224)]),e=Number(this[J(0x1fa)][J(0x1f1)])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const K=r;this[K(0x1bc)]({...this['_color'],'a':clamp(Number(this[K(0x21c)][K(0x1f1)])/0x64,0x0,0x1)},c);}['_applyChannelInputs'](c){const L=r,d=[...this[L(0x1d7)][L(0x1a3)](L(0x1ff))]['reduce']((f,g)=>{const M=L;return f[g[M(0x196)]]=Number(g['value']),f;},{});let e;if(this['_mode']===L(0x1ab))e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[L(0x1cd)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[L(0x1cd)]===L(0x215))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0x201)](){const N=r,c=this['_textInput']['value']['trim']();this[N(0x1b5)]['classList']['toggle'](N(0x1c7),c[N(0x1dd)]>0x0&&!parseColor(c));}['_applyText'](){const O=r,c=parseColor(this[O(0x1b5)][O(0x1f1)]);this['_textInput']['classList'][O(0x1bf)]('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this[O(0x1b5)][O(0x1f1)])??this[O(0x1cd)],this['_setColor'](c,![],!![],!![]);}[r(0x1bc)](c,d,e=!![],f=![]){const P=r,g=this[P(0x21f)];this['_color']=normalizeColor(c);if(f)this[P(0x1e0)]();this['_value']=this[P(0x1fd)](),this[P(0x1f3)](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this['_value'],'oldValue':g});else this[P(0x1e5)][P(0x211)]({'newValue':this['_value'],'oldValue':g});}[r(0x1aa)](){const Q=r,c=this['_value'];this[Q(0x21f)]=this[Q(0x1fd)](),this['valueChanged']['emit']({'newValue':this[Q(0x21f)],'oldValue':c});}[r(0x1f3)](c=!![]){const R=r;if(!this[R(0x1b5)])return;const d=rgbToHsv(this['_color']);this[R(0x1de)][R(0x1da)]('--hue',String(Math['round'](this[R(0x1f9)]))),this['style'][R(0x1da)](R(0x199),toCssRgb(this['_color'])),this[R(0x1de)][R(0x1da)]('--opaque-color',R(0x1a2)+this[R(0x224)]['r']+',\x20'+this['_color']['g']+',\x20'+this[R(0x224)]['b']+')'),this[R(0x1de)]['setProperty'](R(0x1a5),this['_color']['r']+',\x20'+this[R(0x224)]['g']+',\x20'+this['_color']['b']),this['_planeHandle']['style']['left']=d['s']*0x64+'%',this['_planeHandle']['style'][R(0x1c0)]=(0x1-d['v'])*0x64+'%',this[R(0x1fa)][R(0x1f1)]=String(Math['round'](this[R(0x1f9)])),this['_alphaInput'][R(0x1f1)]=String(Math['round'](this['_color']['a']*0x64)),this['_alphaLabel'][R(0x1f7)]=Math[R(0x1dc)](this['_color']['a']*0x64)+'%',this['_modeSelect'][R(0x1f1)]=this[R(0x1cd)];if(c)this['_renderChannelInputs']();if(document['activeElement']!==this['_textInput'])this['_textInput']['value']=this[R(0x21f)];this['_textInput']['classList']['remove']('invalid');}['_renderChannelInputs'](){const S=r,c=getChannelValues(this[S(0x224)],this[S(0x1cd)]);this['_channels'][S(0x209)]=c['map'](d=>S(0x1e7)+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d['name']+S(0x1d5)+d['min']+'\x22\x20max=\x22'+d[S(0x21d)]+'\x22\x20step=\x22'+d[S(0x216)]+S(0x1b2)+d['value']+S(0x212))[S(0x1fb)]('');}['_formatColor'](){const T=r;return formatColor(this[T(0x224)],this[T(0x1cd)]);}['_syncHueFromColor'](){const U=r,c=rgbToHsv(this[U(0x224)]);if(c['s']>epsilon&&c['v']>epsilon)this[U(0x1f9)]=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_value']='#000000';['_button'];[r(0x195)];['_editor'];[r(0x1a9)]=![];[r(0x20f)]=c=>this[r(0x192)](c);[r(0x1cc)]=c=>this[r(0x21a)](c);get['value'](){const V=r;return this[V(0x21f)];}set['value'](c){this['_setValue'](c,![]);}get[r(0x228)](){return this['hasAttribute']('readonly');}set['readOnly'](c){const W=r;this['toggleAttribute'](W(0x1be),c);}get['disabled'](){const X=r;return this[X(0x20c)](X(0x194));}set['disabled'](c){const Y=r;this['toggleAttribute']('disabled',c);if(this['_button'])this[Y(0x221)]['disabled']=c;}constructor(){const Z=r;super(),this[Z(0x221)]=this[Z(0x1ee)](Z(0x1ca));}[r(0x20e)](){const a0=r,c=this['getAttribute']('value');if(c!=null)this[a0(0x204)](c,![]);this[a0(0x221)]['disabled']=this[a0(0x194)],this['_button'][a0(0x1c6)](a0(0x1f5),d=>this[a0(0x218)](d)),this[a0(0x221)][a0(0x1c6)](a0(0x1e4),d=>this['_handleButtonClick'](d)),this[a0(0x221)]['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this[a0(0x1d4)]();}['disconnectedCallback'](){this['_closePopup']();}['_togglePopup'](){const a1=r;if(this[a1(0x228)]||this['disabled'])return;if(this[a1(0x195)])this['_closePopup']();else this['_openPopup']();}['_handleButtonPointerDown'](c){const a2=r;if(c[a2(0x1ca)]!==0x0)return;this['_ignoreNextClick']=!![],this[a2(0x1db)](),c[a2(0x1a4)](),c['stopPropagation']();}[r(0x1a6)](c){const a3=r;if(this[a3(0x1a9)]){this[a3(0x1a9)]=![],c['preventDefault'](),c[a3(0x1e1)]();return;}this['_togglePopup']();}[r(0x1d9)](c){const a4=r;if(c['key']!==a4(0x1fe)&&c[a4(0x1b9)]!=='\x20')return;this[a4(0x1db)](),c[a4(0x1a4)](),c['stopPropagation']();}['_openPopup'](){const a5=r;this['_popup']=document['createElement'](a5(0x191)),this[a5(0x195)][a5(0x1de)][a5(0x19a)]='fixed',this[a5(0x195)][a5(0x1de)]['zIndex']='100000',this['_popup']['style']['width']='280px',this[a5(0x1e3)]=document[a5(0x1bb)]('node-projects-color-editor'),this['_editor']['value']=this['_value'],this[a5(0x1e3)]['valuePreviewChanged']['on'](c=>{const a6=a5;this['_setValue'](c[a6(0x1b4)],!![]),this['dispatchEvent'](new Event('input',{'bubbles':!![],'composed':!![]}));}),this[a5(0x1e3)][a5(0x1e5)]['on'](c=>{const a7=a5;this['_setValue'](c[a7(0x1b4)],!![]),this[a7(0x1f2)](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this[a5(0x1e3)]),document['body'][a5(0x1d1)](this[a5(0x195)]),this['_positionPopup'](),window[a5(0x1c6)]('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener']('scroll',()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window['addEventListener'](a5(0x19f),this[a5(0x1cc)]),requestAnimationFrame(()=>window[a5(0x1c6)](a5(0x1f5),this[a5(0x20f)],!![]));}[r(0x1ac)](){const a8=r;if(!this[a8(0x195)])return;const c=this[a8(0x197)](),d=this[a8(0x195)][a8(0x205)]||0x118,e=this[a8(0x195)]['offsetHeight']||0x168;let f=c['left'],g=c[a8(0x1cb)]+0x4;if(f+d>window['innerWidth']-0x8)f=window['innerWidth']-d-0x8;if(g+e>window['innerHeight']-0x8)g=c['top']-e-0x4;this['_popup']['style']['left']=Math[a8(0x21d)](0x8,f)+'px',this[a8(0x195)][a8(0x1de)]['top']=Math[a8(0x21d)](0x8,g)+'px';}[r(0x192)](c){const a9=r,d=c[a9(0x1b1)]();if(d['includes'](this)||this[a9(0x195)]&&d['includes'](this[a9(0x195)]))return;this[a9(0x1c3)]();}['_handleWindowKey'](c){const aa=r;if(c[aa(0x1b9)]==='Escape')this['_closePopup']();}[r(0x1c3)](){const ab=r;window['removeEventListener']('pointerdown',this[ab(0x20f)],!![]),window['removeEventListener']('keydown',this['_windowKeyHandler']),this[ab(0x195)]?.['remove'](),this[ab(0x195)]=null,this[ab(0x1e3)]=null;}[r(0x204)](c,d){const ac=r;this['_value']=c??'';if(d)this[ac(0x200)]('value',this['_value']);this['_renderSwatch']();}['_renderSwatch'](){const ad=r,c=parseColor(this[ad(0x21f)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style'][ad(0x1da)]('--color',toCssRgb(c));}}function parseColor(c){const ae=r;if(!c)return null;const d=c['trim']();if(d['toLowerCase']()===ae(0x1c1))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.[ae(0x1d0)])return normalizeColor({'r':h['red'],'g':h[ae(0x1a8)],'b':h[ae(0x1f8)],'a':h[ae(0x1b6)]});return null;}function inferColorMode(c){const af=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.['toLowerCase']();if(e===af(0x1ab)||e==='rgba')return'rgb';if(e===af(0x227)||e==='hsla')return'hsl';if(e==='cmyk')return'cmyk';if(e===af(0x222))return'oklab';if(e==='oklch')return'oklch';return null;}function normalizeModernColorSyntax(c){const ag=r;return c[ag(0x1ea)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('hsl',e));}function normalizeFunctionBody(c,d){const ah=r;if(d['includes'](',')){const h=d[ah(0x1ad)](',')[ah(0x190)](i=>i['trim']());if(h['length']===0x4&&h[0x3][ah(0x1bd)]('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[ah(0x1dd)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[ah(0x1ad)]('/')['map'](i=>i[ah(0x217)]()),g=e[ah(0x1ad)](/\s+/)[ah(0x21b)](Boolean);if(f)g[ah(0x225)](f[ah(0x1bd)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ai=r,d=/^#([0-9a-f]{3,8})$/i[ai(0x1b8)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e[ai(0x1dd)]===0x3||e['length']===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[ai(0x1dd)]===0x8)return normalizeColor({'r':f(e[ai(0x18d)](0x0,0x2)),'g':f(e[ai(0x18d)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e['length']===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const aj=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][aj(0x1ad)]('/')['map'](j=>j[aj(0x217)]()),h=f['replace'](/,/g,'\x20')[aj(0x1ad)](/\s+/)[aj(0x21b)](Boolean);if(h[aj(0x1dd)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===aj(0x222))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ak=r,e=round(c['a'],0x3);if(d===ak(0x1ab))return c['a']>=0x1?ak(0x1a2)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ak(0x198)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ak(0x1dc)](g['l']*0x64)+'%)':ak(0x20d)+Math[ak(0x1dc)](g['h'])+',\x20'+Math[ak(0x1dc)](g['s']*0x64)+ak(0x1c5)+Math[ak(0x1dc)](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math[ak(0x1dc)](h['c']*0x64)+'%,\x20'+Math['round'](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+'%,\x20'+Math[ak(0x1dc)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return ak(0x1c8)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const al=r;if(d===al(0x1ab))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[al(0x1dc)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[al(0x1dc)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='cmyk'){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[al(0x1dc)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[al(0x1dc)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[al(0x1dc)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':al(0x1b3),'name':al(0x19d),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[al(0x1dc)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const am=r;return{'r':Math[am(0x1dc)](clamp(c['r'],0x0,0xff)),'g':Math[am(0x1dc)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const an=r;return an(0x203)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x21d)](e,f,i),k=Math[ao(0x193)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const i=f*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const ap=r,i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math[ap(0x226)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const aq=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[aq(0x21d)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ar=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[ar(0x1a1)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const as=r,f=Math[as(0x1ef)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const at=r,e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[at(0x1f0)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const au=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[au(0x18f)](g),e*Math['sin'](g));}function srgbToLinear(c){const av=r;return c<=0.04045?c/12.92:Math[av(0x1ef)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const aw=r;return c['endsWith']('%')?Number(c[aw(0x18d)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){return Math['min'](e,Math['max'](d,Number['isFinite'](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const ax=r,e=Math[ax(0x1ef)](0xa,d);return Math['round'](c*e)/e;}customElements[r(0x1fc)]('node-projects-color-editor',ColorEditor),customElements[r(0x1fc)](r(0x20b),ColorInput);