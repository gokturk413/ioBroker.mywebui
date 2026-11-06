const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x164))/0x1+parseInt(q(0x1d1))/0x2*(-parseInt(q(0x1f9))/0x3)+parseInt(q(0x190))/0x4+parseInt(q(0x175))/0x5+parseInt(q(0x1a3))/0x6+parseInt(q(0x1b6))/0x7*(-parseInt(q(0x178))/0x8)+-parseInt(q(0x1fe))/0x9*(parseInt(q(0x1bd))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5eb00));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const ar=['alpha','slice','_togglePopup','red','_alphaLabel','_textInput','setProperty','scroll','min','_ignoreNextClick','value','addEventListener','_button','emit','mode','_hue','_handleButtonClick','pow','_applyHue','\x20/\x20','step','_setValue','_formatColor','2945964bXtypE','blur','green','oklch','_color','click','--rgb-color','getBoundingClientRect','_editor','opacity','width','\x0a\x20\x20\x20\x20\x20\x20<label>','280px','readOnly','_startPlaneDrag','setPointerCapture','resize','remove','plane','2316048ZLuinA','map','newValue','pointermove','hsla(','#000000','pointerId','input','offsetHeight','_positionPopup','_handleButtonKeyDown','preventDefault','classList','node-projects-color-input','100000','bottom','disabled','length','alpha-label','35jwBKwd','rgb','--color','plane-handle','pointercancel','split','pointerup','10GZXEQY','_value','_planeHandle','\x22\x20max=\x22','_renderSwatch','push','sin','_applyText','getAttribute','_handleOutsidePointer','valuePreviewChanged','_windowKeyHandler','fixed','abs','_render','_dragPointerId','_applyPlanePointer','_plane','_popup','invalid','401162tgsfoW','_alphaInput','round','exec','%,\x20','Escape','_getDomElement','_channels','top','toLowerCase','button','_closePopup','hue','Alpha','change','isFinite','_commitCurrentValue','height','hsl','innerHeight','_modeSelect','name','_hueInput','max','_applyChannelInputs','_outsidePointerHandler','style','_finishPlaneDrag','replace','_handleButtonPointerDown','cmyk','querySelectorAll','reduce','disconnectedCallback','_wireEvents','join','hsl(','_planePointerMove','toggle','readonly','3uZQOxV','cbrt','oklab','innerWidth','pointerdown','7455411uQOXZF','_mode','_syncHueFromColor','left','includes','endsWith','keydown','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','292860BqDNtK','position','filter','rgb(','\x22\x20value=\x22','toggleAttribute','hsla','_renderChannelInputs','text','removeEventListener','Enter','stopPropagation','valueChanged','hasAttribute','_setColor','key','trim','3579105RXszHo','_validateTextInput','dispatchEvent','1143008ydouGg'];a=function(){return ar;};return a();}import{w3color}from'../helper/w3color.js';const modes=[r(0x1b7),r(0x1e3),r(0x1ef),'oklab',r(0x193)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['valueChanged']=new TypedEvent();[r(0x1c7)]=new TypedEvent();[r(0x1be)]=r(0x1a8);[r(0x194)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};[r(0x1ff)]=r(0x1b7);[r(0x188)]=0x0;['_plane'];[r(0x1bf)];['_hueInput'];[r(0x1d2)];[r(0x17d)];[r(0x1e5)];[r(0x1d8)];[r(0x17e)];['_dragPointerId']=null;get['value'](){return this['_value'];}set['value'](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this['_mode']=inferColorMode(c)??this[s(0x1ff)],this[s(0x200)](),this[s(0x1be)]=this[s(0x18f)](),this[s(0x1cb)]();return;}this['_value']=c??'',this[s(0x1cb)]();}get['mode'](){return this['_mode'];}set[r(0x187)](c){const t=r;modes['includes'](c)&&(this['_mode']=c,this['_value']=this['_formatColor'](),this[t(0x1cb)]());}get[r(0x19d)](){return this['hasAttribute']('readonly');}set['readOnly'](c){const u=r;this['toggleAttribute'](u(0x1f8),c);}get['disabled'](){const v=r;return this[v(0x171)](v(0x1b3));}set[r(0x1b3)](c){const w=r;this[w(0x169)](w(0x1b3),c);}constructor(){const x=r;super(),this['_plane']=this['_getDomElement'](x(0x1a2)),this[x(0x1bf)]=this[x(0x1d7)](x(0x1b9)),this['_hueInput']=this['_getDomElement'](x(0x1dd)),this['_alphaInput']=this['_getDomElement']('alpha'),this['_alphaLabel']=this['_getDomElement'](x(0x1b5)),this['_modeSelect']=this[x(0x1d7)]('mode'),this[x(0x1d8)]=this[x(0x1d7)]('channels'),this['_textInput']=this['_getDomElement'](x(0x16c));}['ready'](){const y=r;this[y(0x1f3)]();const c=this[y(0x1c5)]('value');if(c!=null)this['value']=c;const d=this['getAttribute']('mode');modes['includes'](d)&&(this['_mode']=d,this['_value']=this['_formatColor']()),this['_render']();}[r(0x1f3)](){const z=r;this['_plane'][z(0x184)](z(0x1fd),c=>this['_startPlaneDrag'](c)),this['_hueInput']['addEventListener'](z(0x1aa),()=>this[z(0x18b)](!![])),this[z(0x1e7)][z(0x184)](z(0x1df),()=>this[z(0x1e1)]()),this[z(0x1d2)][z(0x184)](z(0x1aa),()=>this['_applyAlpha'](!![])),this[z(0x1d2)][z(0x184)](z(0x1df),()=>this['_commitCurrentValue']()),this[z(0x1e5)][z(0x184)](z(0x1df),()=>{const A=z;this[A(0x187)]=this[A(0x1e5)]['value'],this['_commitCurrentValue']();}),this[z(0x1d8)]['addEventListener'](z(0x1aa),()=>this['_applyChannelInputs'](!![])),this['_channels'][z(0x184)](z(0x1df),()=>this[z(0x1e1)]()),this['_textInput']['addEventListener']('input',()=>this[z(0x176)]()),this[z(0x17e)]['addEventListener']('change',()=>this['_applyText']()),this[z(0x17e)]['addEventListener'](z(0x204),c=>{const B=z;c[B(0x173)]==='Enter'&&(this['_applyText'](),this['_textInput'][B(0x191)]());});}[r(0x19e)](c){const C=r;if(this['readOnly']||this[C(0x1b3)])return;this['_dragPointerId']=c['pointerId'],this['_plane'][C(0x19f)](c[C(0x1a9)]),this[C(0x1cd)](c,!![]),this['_plane']['addEventListener']('pointermove',this['_planePointerMove']),this[C(0x1ce)][C(0x184)](C(0x1bc),this['_finishPlaneDrag']),this['_plane'][C(0x184)](C(0x1ba),this[C(0x1ec)]),c['preventDefault']();}[r(0x1f6)]=c=>{const D=r;if(c['pointerId']===this['_dragPointerId'])this[D(0x1cd)](c,!![]);};['_finishPlaneDrag']=c=>{const E=r;if(c['pointerId']!==this[E(0x1cc)])return;this['_dragPointerId']=null,this['_plane']['removeEventListener'](E(0x1a6),this['_planePointerMove']),this[E(0x1ce)][E(0x16d)](E(0x1bc),this['_finishPlaneDrag']),this[E(0x1ce)]['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this['_commitCurrentValue']();};[r(0x1cd)](c,d){const F=r,e=this[F(0x1ce)][F(0x197)](),f=clamp((c['clientX']-e[F(0x201)])/e[F(0x19a)],0x0,0x1),g=clamp(0x1-(c['clientY']-e['top'])/e[F(0x1e2)],0x0,0x1),h=Number(this[F(0x1e7)][F(0x183)])||0x0;this['_hue']=normalizeHue(h),this['_setColor']({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x18b)](c){const G=r,d=rgbToHsv(this['_color']),e=Number(this[G(0x1e7)][G(0x183)])||0x0;this['_hue']=normalizeHue(e),this[G(0x172)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[G(0x194)]['a']},c);}['_applyAlpha'](c){const H=r;this['_setColor']({...this[H(0x194)],'a':clamp(Number(this[H(0x1d2)][H(0x183)])/0x64,0x0,0x1)},c);}[r(0x1e9)](c){const I=r,d=[...this['_channels'][I(0x1f0)](I(0x1aa))][I(0x1f1)]((f,g)=>{const J=I;return f[g[J(0x1e6)]]=Number(g[J(0x183)]),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this[I(0x1ff)]==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this['_mode']===I(0x1ef))e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===I(0x1fb))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[I(0x172)](normalizeColor(e),c,![],!![]);}[r(0x176)](){const K=r,c=this[K(0x17e)]['value'][K(0x174)]();this[K(0x17e)][K(0x1af)]['toggle'](K(0x1d0),c['length']>0x0&&!parseColor(c));}[r(0x1c4)](){const L=r,c=parseColor(this[L(0x17e)]['value']);this[L(0x17e)]['classList'][L(0x1f7)](L(0x1d0),!c);if(!c)return;this[L(0x1ff)]=inferColorMode(this[L(0x17e)]['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}[r(0x172)](c,d,e=!![],f=![]){const M=r,g=this[M(0x1be)];this[M(0x194)]=normalizeColor(c);if(f)this[M(0x200)]();this[M(0x1be)]=this[M(0x18f)](),this[M(0x1cb)](e);if(d)this[M(0x1c7)][M(0x186)]({'newValue':this[M(0x1be)],'oldValue':g});else this['valueChanged'][M(0x186)]({'newValue':this[M(0x1be)],'oldValue':g});}['_commitCurrentValue'](){const N=r,c=this[N(0x1be)];this['_value']=this['_formatColor'](),this[N(0x170)]['emit']({'newValue':this[N(0x1be)],'oldValue':c});}[r(0x1cb)](c=!![]){const O=r;if(!this[O(0x17e)])return;const d=rgbToHsv(this[O(0x194)]);this['style']['setProperty']('--hue',String(Math[O(0x1d3)](this[O(0x188)]))),this['style']['setProperty'](O(0x1b8),toCssRgb(this[O(0x194)])),this[O(0x1eb)][O(0x17f)]('--opaque-color',O(0x167)+this['_color']['r']+',\x20'+this[O(0x194)]['g']+',\x20'+this['_color']['b']+')'),this['style']['setProperty'](O(0x196),this[O(0x194)]['r']+',\x20'+this['_color']['g']+',\x20'+this[O(0x194)]['b']),this['_planeHandle']['style']['left']=d['s']*0x64+'%',this[O(0x1bf)][O(0x1eb)][O(0x1d9)]=(0x1-d['v'])*0x64+'%',this['_hueInput'][O(0x183)]=String(Math['round'](this[O(0x188)])),this['_alphaInput']['value']=String(Math['round'](this[O(0x194)]['a']*0x64)),this['_alphaLabel']['textContent']=Math['round'](this['_color']['a']*0x64)+'%',this['_modeSelect']['value']=this[O(0x1ff)];if(c)this[O(0x16b)]();if(document['activeElement']!==this[O(0x17e)])this['_textInput']['value']=this['_value'];this[O(0x17e)]['classList'][O(0x1a1)](O(0x1d0));}['_renderChannelInputs'](){const P=r,c=getChannelValues(this['_color'],this['_mode']);this[P(0x1d8)]['innerHTML']=c['map'](d=>P(0x19b)+d['label']+P(0x163)+d[P(0x1e6)]+'\x22\x20min=\x22'+d['min']+P(0x1c0)+d[P(0x1e8)]+'\x22\x20step=\x22'+d[P(0x18d)]+P(0x168)+d[P(0x183)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20</label>')[P(0x1f4)]('');}[r(0x18f)](){const Q=r;return formatColor(this['_color'],this[Q(0x1ff)]);}[r(0x200)](){const R=r,c=rgbToHsv(this[R(0x194)]);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x1eb)]=css`
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
  `;[r(0x1be)]=r(0x1a8);['_button'];['_popup'];['_editor'];['_ignoreNextClick']=![];[r(0x1ea)]=c=>this['_handleOutsidePointer'](c);[r(0x1c8)]=c=>this['_handleWindowKey'](c);get['value'](){return this['_value'];}set[r(0x183)](c){this['_setValue'](c,![]);}get[r(0x19d)](){return this['hasAttribute']('readonly');}set['readOnly'](c){this['toggleAttribute']('readonly',c);}get['disabled'](){const S=r;return this[S(0x171)](S(0x1b3));}set[r(0x1b3)](c){const T=r;this['toggleAttribute'](T(0x1b3),c);if(this['_button'])this[T(0x185)]['disabled']=c;}constructor(){const U=r;super(),this[U(0x185)]=this['_getDomElement']('button');}['ready'](){const V=r,c=this['getAttribute'](V(0x183));if(c!=null)this[V(0x18e)](c,![]);this['_button'][V(0x1b3)]=this[V(0x1b3)],this['_button']['addEventListener']('pointerdown',d=>this['_handleButtonPointerDown'](d)),this[V(0x185)][V(0x184)](V(0x195),d=>this[V(0x189)](d)),this[V(0x185)][V(0x184)]('keydown',d=>this[V(0x1ad)](d)),this[V(0x1c1)]();}[r(0x1f2)](){this['_closePopup']();}[r(0x17b)](){if(this['readOnly']||this['disabled'])return;if(this['_popup'])this['_closePopup']();else this['_openPopup']();}[r(0x1ee)](c){const W=r;if(c[W(0x1db)]!==0x0)return;this['_ignoreNextClick']=!![],this['_togglePopup'](),c[W(0x1ae)](),c['stopPropagation']();}['_handleButtonClick'](c){const X=r;if(this[X(0x182)]){this['_ignoreNextClick']=![],c[X(0x1ae)](),c[X(0x16f)]();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){const Y=r;if(c[Y(0x173)]!==Y(0x16e)&&c['key']!=='\x20')return;this[Y(0x17b)](),c[Y(0x1ae)](),c['stopPropagation']();}['_openPopup'](){const Z=r;this[Z(0x1cf)]=document['createElement']('div'),this['_popup'][Z(0x1eb)][Z(0x165)]=Z(0x1c9),this[Z(0x1cf)][Z(0x1eb)]['zIndex']=Z(0x1b1),this['_popup'][Z(0x1eb)]['width']=Z(0x19c),this['_editor']=document['createElement']('node-projects-color-editor'),this[Z(0x198)]['value']=this['_value'],this['_editor']['valuePreviewChanged']['on'](c=>{const a0=Z;this['_setValue'](c['newValue'],!![]),this[a0(0x177)](new Event(a0(0x1aa),{'bubbles':!![],'composed':!![]}));}),this['_editor']['valueChanged']['on'](c=>{const a1=Z;this[a1(0x18e)](c[a1(0x1a5)],!![]),this[a1(0x177)](new Event('change',{'bubbles':!![],'composed':!![]}));}),this['_popup']['appendChild'](this[Z(0x198)]),document['body']['appendChild'](this[Z(0x1cf)]),this['_positionPopup'](),window['addEventListener'](Z(0x1a0),()=>this[Z(0x1ac)](),{'once':!![]}),window[Z(0x184)](Z(0x180),()=>this[Z(0x1ac)](),{'once':!![],'capture':!![]}),window['addEventListener']('keydown',this[Z(0x1c8)]),requestAnimationFrame(()=>window[Z(0x184)]('pointerdown',this[Z(0x1ea)],!![]));}[r(0x1ac)](){const a2=r;if(!this['_popup'])return;const c=this[a2(0x197)](),d=this[a2(0x1cf)]['offsetWidth']||0x118,e=this[a2(0x1cf)][a2(0x1ab)]||0x168;let f=c['left'],g=c[a2(0x1b2)]+0x4;if(f+d>window[a2(0x1fc)]-0x8)f=window[a2(0x1fc)]-d-0x8;if(g+e>window[a2(0x1e4)]-0x8)g=c[a2(0x1d9)]-e-0x4;this[a2(0x1cf)][a2(0x1eb)][a2(0x201)]=Math[a2(0x1e8)](0x8,f)+'px',this['_popup'][a2(0x1eb)]['top']=Math['max'](0x8,g)+'px';}[r(0x1c6)](c){const a3=r,d=c['composedPath']();if(d[a3(0x202)](this)||this[a3(0x1cf)]&&d[a3(0x202)](this[a3(0x1cf)]))return;this[a3(0x1dc)]();}['_handleWindowKey'](c){const a4=r;if(c['key']===a4(0x1d6))this[a4(0x1dc)]();}['_closePopup'](){const a5=r;window['removeEventListener']('pointerdown',this['_outsidePointerHandler'],!![]),window[a5(0x16d)]('keydown',this['_windowKeyHandler']),this['_popup']?.[a5(0x1a1)](),this['_popup']=null,this['_editor']=null;}[r(0x18e)](c,d){this['_value']=c??'';if(d)this['setAttribute']('value',this['_value']);this['_renderSwatch']();}['_renderSwatch'](){const a6=r,c=parseColor(this[a6(0x1be)])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[a6(0x1eb)]['setProperty'](a6(0x1b8),toCssRgb(c));}}function parseColor(c){const a7=r;if(!c)return null;const d=c['trim']();if(d[a7(0x1da)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.['valid'])return normalizeColor({'r':h[a7(0x17c)],'g':h[a7(0x192)],'b':h['blue'],'a':h[a7(0x199)]});return null;}function inferColorMode(c){const a8=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[a8(0x1d4)](c??''),e=d?.[0x1]?.['toLowerCase']();if(e==='rgb'||e==='rgba')return'rgb';if(e===a8(0x1e3)||e===a8(0x16a))return'hsl';if(e===a8(0x1ef))return a8(0x1ef);if(e==='oklab')return a8(0x1fb);if(e==='oklch')return'oklch';return null;}function normalizeModernColorSyntax(c){const a9=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(a9(0x1b7),e))[a9(0x1ed)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(a9(0x1e3),e));}function normalizeFunctionBody(c,d){const aa=r;if(d[aa(0x202)](',')){const h=d['split'](',')[aa(0x1a4)](i=>i[aa(0x174)]());if(h['length']===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3]['slice'](0x0,-0x1))/0x64);return''+c+(h[aa(0x1b4)]===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[aa(0x1bb)]('/')[aa(0x1a4)](i=>i[aa(0x174)]()),g=e['split'](/\s+/)[aa(0x166)](Boolean);if(f)g[aa(0x1c2)](f[aa(0x203)]('%')?String(Number(f['slice'](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[aa(0x1f4)](',')+')';}function parseHexColor(c){const ab=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ab(0x1b4)]===0x1?g+g:g,0x10);if(e[ab(0x1b4)]===0x3||e[ab(0x1b4)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e['length']===0x6||e[ab(0x1b4)]===0x8)return normalizeColor({'r':f(e[ab(0x17a)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e[ab(0x17a)](0x4,0x6)),'a':e[ab(0x1b4)]===0x8?f(e[ab(0x17a)](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ac=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1][ac(0x1da)](),[f,g]=d[0x2]['split']('/')[ac(0x1a4)](j=>j['trim']()),h=f[ac(0x1ed)](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h[ac(0x1b4)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ad=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ad(0x167)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ad(0x1f5)+Math['round'](g['h'])+',\x20'+Math[ad(0x1d3)](g['s']*0x64)+ad(0x1d5)+Math[ad(0x1d3)](g['l']*0x64)+'%)':ad(0x1a7)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+ad(0x1d5)+Math[ad(0x1d3)](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math[ad(0x1d3)](h['m']*0x64)+ad(0x1d5)+Math[ad(0x1d3)](h['y']*0x64)+ad(0x1d5)+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':'cmyk('+i+',\x20'+e+')';}if(d===ad(0x1fb)){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':ad(0x18c)+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':ad(0x18c)+e)+')';}function getChannelValues(c,d){const ae=r;if(d==='rgb')return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===ae(0x1e3)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ae(0x1d3)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math[ae(0x1d3)](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[ae(0x1d3)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ae(0x1ef)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ae(0x1d3)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ae(0x1d3)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ae(0x1fb)){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':ae(0x1de),'name':ae(0x179),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const af=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math['round'](clamp(c['g'],0x0,0xff)),'b':Math[af(0x1d3)](clamp(c['b'],0x0,0xff)),'a':clamp(Number[af(0x1e0)](c['a'])?c['a']:0x1,0x0,0x1)};}function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}function toCssRgb(c){return'rgba('+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const ag=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ag(0x1e8)](e,f,i),k=Math[ag(0x181)](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const ah=r,i=f*e,j=i*(0x1-Math[ah(0x1ca)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ai=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math[ai(0x181)](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math['abs'](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const aj=r,i=(0x1-Math[aj(0x1ca)](0x2*f-0x1))*e,j=i*(0x1-Math[aj(0x1ca)](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const ak=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[ak(0x1fa)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math[ak(0x1fa)](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const al=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[al(0x18a)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const am=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math['cos'](g),e*Math[am(0x1c3)](g));}function srgbToLinear(c){const an=r;return c<=0.04045?c/12.92:Math[an(0x18a)]((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const ao=r;return c[ao(0x203)]('%')?Number(c[ao(0x17a)](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const ap=r;return Math[ap(0x181)](e,Math[ap(0x1e8)](d,Number[ap(0x1e0)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const aq=r,e=Math[aq(0x18a)](0xa,d);return Math[aq(0x1d3)](c*e)/e;}customElements['define']('node-projects-color-editor',ColorEditor),customElements['define'](r(0x1b0),ColorInput);