const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0xdb))/0x1*(-parseInt(q(0xf2))/0x2)+-parseInt(q(0xd4))/0x3+-parseInt(q(0xec))/0x4*(parseInt(q(0x103))/0x5)+parseInt(q(0x132))/0x6*(-parseInt(q(0x124))/0x7)+parseInt(q(0x137))/0x8*(-parseInt(q(0x107))/0x9)+-parseInt(q(0x140))/0xa*(-parseInt(q(0x134))/0xb)+parseInt(q(0x139))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe28a9));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';import{w3color}from'../helper/w3color.js';function a(){const as=['round','_planePointerMove','_hueInput','key','%,\x20','_validateTextInput','100000','cos','1306326ooWsAd','transparent','innerWidth','disconnectedCallback','position','_setValue','map','5jlPbeM','addEventListener','_value','name','_handleWindowKey','_windowKeyHandler','stopPropagation','max','rgb','offsetHeight','value','rgba(','_plane','oklch','_renderSwatch','280px','top','2386292FQDlOQ','invalid','disabled','activeElement','replace','_hue','611260TNoTWZ','slice','blue','_editor','_channels','input','join','\x22\x20min=\x22','_commitCurrentValue','_formatColor','_dragPointerId','valuePreviewChanged','ready','_handleButtonKeyDown','_ignoreNextClick','--color','_planeHandle','15uXxYbL','_closePopup','define','click','11743101fHqkYC','pow','_outsidePointerHandler','scroll','_color','left','_positionPopup','_wireEvents','opacity','_popup','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','reduce','hsla(','channels','style','mode','rgb(','emit','_mode','abs','oklab','isFinite','Enter','width','_alphaLabel','_modeSelect','_applyAlpha','readOnly','preventDefault','1183mjQgsd','\x20/\x20','alpha','dispatchEvent','pointerdown','_handleButtonPointerDown','filter','change','cmyk(','hsl','resize','getAttribute','sin','_setColor','60972wCOGMi','_render','308SALMfh','toggleAttribute','_alphaInput','8BnEQks','_syncHueFromColor','49653924Lkzpne','innerHTML','pointermove','div','Escape','text','atan2','181880ozghWr','_textInput','--rgb-color','_applyHue','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22','appendChild','#000000','pointerup','node-projects-color-editor','_openPopup','cmyk','_applyPlanePointer','split','_applyChannelInputs','removeEventListener','body','includes','--hue','valueChanged','node-projects-color-input','pointerId','_getDomElement','length','_button','setProperty','_renderChannelInputs','createElement','_togglePopup','valid','trim','bottom','readonly','getBoundingClientRect','toggle'];a=function(){return as;};return a();}const modes=['rgb','hsl','cmyk','oklab','oklch'],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static [r(0x115)]=css`
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
  `;[r(0xbc)]=new TypedEvent();[r(0xfd)]=new TypedEvent();['_value']='#000000';['_color']={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0xe3);['_hue']=0x0;['_plane'];['_planeHandle'];[r(0xce)];['_alphaInput'];[r(0x11f)];['_modeSelect'];['_channels'];['_textInput'];[r(0xfc)]=null;get['value'](){return this['_value'];}set[r(0xe5)](c){const s=r,d=parseColor(c);if(d){this['_color']=d,this[s(0x119)]=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this[s(0xdd)]=this[s(0xfb)](),this[s(0x133)]();return;}this['_value']=c??'',this[s(0x133)]();}get[r(0x116)](){return this['_mode'];}set['mode'](c){const t=r;modes[t(0xba)](c)&&(this['_mode']=c,this['_value']=this[t(0xfb)](),this['_render']());}get[r(0x122)](){const u=r;return this['hasAttribute'](u(0xc9));}set['readOnly'](c){const v=r;this['toggleAttribute'](v(0xc9),c);}get['disabled'](){const w=r;return this['hasAttribute'](w(0xee));}set['disabled'](c){const x=r;this['toggleAttribute'](x(0xee),c);}constructor(){const y=r;super(),this['_plane']=this['_getDomElement']('plane'),this[y(0x102)]=this[y(0xbf)]('plane-handle'),this[y(0xce)]=this[y(0xbf)]('hue'),this['_alphaInput']=this[y(0xbf)]('alpha'),this['_alphaLabel']=this[y(0xbf)]('alpha-label'),this['_modeSelect']=this[y(0xbf)](y(0x116)),this['_channels']=this['_getDomElement'](y(0x114)),this['_textInput']=this[y(0xbf)](y(0x13e));}[r(0xfe)](){const z=r;this[z(0x10e)]();const c=this[z(0x12f)](z(0xe5));if(c!=null)this['value']=c;const d=this[z(0x12f)](z(0x116));modes[z(0xba)](d)&&(this[z(0x119)]=d,this[z(0xdd)]=this[z(0xfb)]()),this['_render']();}[r(0x10e)](){const A=r;this[A(0xe7)][A(0xdc)]('pointerdown',c=>this['_startPlaneDrag'](c)),this[A(0xce)][A(0xdc)](A(0xf7),()=>this[A(0x143)](!![])),this['_hueInput']['addEventListener']('change',()=>this[A(0xfa)]()),this[A(0x136)][A(0xdc)]('input',()=>this[A(0x121)](!![])),this[A(0x136)]['addEventListener'](A(0x12b),()=>this[A(0xfa)]()),this['_modeSelect'][A(0xdc)](A(0x12b),()=>{const B=A;this['mode']=this[B(0x120)]['value'],this[B(0xfa)]();}),this['_channels'][A(0xdc)](A(0xf7),()=>this['_applyChannelInputs'](!![])),this[A(0xf6)]['addEventListener'](A(0x12b),()=>this['_commitCurrentValue']()),this[A(0x141)]['addEventListener']('input',()=>this['_validateTextInput']()),this[A(0x141)][A(0xdc)]('change',()=>this['_applyText']()),this[A(0x141)]['addEventListener']('keydown',c=>{const C=A;c['key']===C(0x11d)&&(this['_applyText'](),this['_textInput']['blur']());});}['_startPlaneDrag'](c){const D=r;if(this['readOnly']||this[D(0xee)])return;this[D(0xfc)]=c['pointerId'],this[D(0xe7)]['setPointerCapture'](c[D(0xbe)]),this['_applyPlanePointer'](c,!![]),this[D(0xe7)][D(0xdc)](D(0x13b),this[D(0xcd)]),this[D(0xe7)][D(0xdc)](D(0x147),this['_finishPlaneDrag']),this[D(0xe7)]['addEventListener']('pointercancel',this['_finishPlaneDrag']),c[D(0x123)]();}[r(0xcd)]=c=>{const E=r;if(c[E(0xbe)]===this['_dragPointerId'])this[E(0xb5)](c,!![]);};['_finishPlaneDrag']=c=>{const F=r;if(c['pointerId']!==this['_dragPointerId'])return;this[F(0xfc)]=null,this[F(0xe7)][F(0xb8)](F(0x13b),this[F(0xcd)]),this[F(0xe7)][F(0xb8)](F(0x147),this['_finishPlaneDrag']),this['_plane']['removeEventListener']('pointercancel',this['_finishPlaneDrag']),this['_commitCurrentValue']();};['_applyPlanePointer'](c,d){const G=r,e=this['_plane'][G(0xca)](),f=clamp((c['clientX']-e[G(0x10c)])/e['width'],0x0,0x1),g=clamp(0x1-(c['clientY']-e[G(0xeb)])/e['height'],0x0,0x1),h=Number(this['_hueInput'][G(0xe5)])||0x0;this[G(0xf1)]=normalizeHue(h),this[G(0x131)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x143)](c){const H=r,d=rgbToHsv(this[H(0x10b)]),e=Number(this['_hueInput']['value'])||0x0;this['_hue']=normalizeHue(e),this[H(0x131)]({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this['_color']['a']},c);}['_applyAlpha'](c){const I=r;this[I(0x131)]({...this[I(0x10b)],'a':clamp(Number(this['_alphaInput'][I(0xe5)])/0x64,0x0,0x1)},c);}[r(0xb7)](c){const J=r,d=[...this[J(0xf6)]['querySelectorAll'](J(0xf7))][J(0x112)]((f,g)=>{const K=J;return f[g[K(0xde)]]=Number(g['value']),f;},{});let e;if(this[J(0x119)]==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']===J(0x12d))e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[J(0x119)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this[J(0x119)]==='oklab')e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this['_setColor'](normalizeColor(e),c,![],!![]);}[r(0xd1)](){const L=r,c=this[L(0x141)][L(0xe5)][L(0xc7)]();this[L(0x141)]['classList'][L(0xcb)](L(0xed),c[L(0xc0)]>0x0&&!parseColor(c));}['_applyText'](){const M=r,c=parseColor(this['_textInput']['value']);this[M(0x141)]['classList'][M(0xcb)](M(0xed),!c);if(!c)return;this['_mode']=inferColorMode(this[M(0x141)][M(0xe5)])??this[M(0x119)],this['_setColor'](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this['_value'];this['_color']=normalizeColor(c);if(f)this['_syncHueFromColor']();this[N(0xdd)]=this[N(0xfb)](),this[N(0x133)](e);if(d)this[N(0xfd)][N(0x118)]({'newValue':this['_value'],'oldValue':g});else this[N(0xbc)][N(0x118)]({'newValue':this[N(0xdd)],'oldValue':g});}['_commitCurrentValue'](){const O=r,c=this['_value'];this['_value']=this['_formatColor'](),this[O(0xbc)][O(0x118)]({'newValue':this[O(0xdd)],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this['_textInput'])return;const d=rgbToHsv(this['_color']);this[P(0x115)]['setProperty'](P(0xbb),String(Math[P(0xcc)](this['_hue']))),this['style']['setProperty'](P(0x101),toCssRgb(this[P(0x10b)])),this['style']['setProperty']('--opaque-color',P(0x117)+this['_color']['r']+',\x20'+this[P(0x10b)]['g']+',\x20'+this['_color']['b']+')'),this[P(0x115)]['setProperty'](P(0x142),this['_color']['r']+',\x20'+this[P(0x10b)]['g']+',\x20'+this[P(0x10b)]['b']),this[P(0x102)]['style']['left']=d['s']*0x64+'%',this[P(0x102)]['style'][P(0xeb)]=(0x1-d['v'])*0x64+'%',this[P(0xce)][P(0xe5)]=String(Math['round'](this[P(0xf1)])),this['_alphaInput']['value']=String(Math[P(0xcc)](this['_color']['a']*0x64)),this[P(0x11f)]['textContent']=Math['round'](this[P(0x10b)]['a']*0x64)+'%',this[P(0x120)][P(0xe5)]=this['_mode'];if(c)this[P(0xc3)]();if(document[P(0xef)]!==this[P(0x141)])this['_textInput']['value']=this[P(0xdd)];this['_textInput']['classList']['remove']('invalid');}[r(0xc3)](){const Q=r,c=getChannelValues(this[Q(0x10b)],this['_mode']);this['_channels'][Q(0x13a)]=c[Q(0xda)](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d['label']+Q(0x144)+d['name']+Q(0xf9)+d['min']+'\x22\x20max=\x22'+d[Q(0xe2)]+'\x22\x20step=\x22'+d['step']+'\x22\x20value=\x22'+d[Q(0xe5)]+Q(0x111))['join']('');}[r(0xfb)](){return formatColor(this['_color'],this['_mode']);}[r(0x138)](){const c=rgbToHsv(this['_color']);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x115)]=css`
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
  `;[r(0xdd)]=r(0x146);[r(0xc1)];['_popup'];[r(0xf5)];[r(0x100)]=![];[r(0x109)]=c=>this['_handleOutsidePointer'](c);['_windowKeyHandler']=c=>this[r(0xdf)](c);get['value'](){return this['_value'];}set['value'](c){const R=r;this[R(0xd9)](c,![]);}get['readOnly'](){const S=r;return this['hasAttribute'](S(0xc9));}set['readOnly'](c){const T=r;this[T(0x135)]('readonly',c);}get['disabled'](){return this['hasAttribute']('disabled');}set[r(0xee)](c){const U=r;this['toggleAttribute'](U(0xee),c);if(this[U(0xc1)])this['_button']['disabled']=c;}constructor(){super(),this['_button']=this['_getDomElement']('button');}['ready'](){const V=r,c=this['getAttribute']('value');if(c!=null)this[V(0xd9)](c,![]);this['_button']['disabled']=this['disabled'],this['_button']['addEventListener'](V(0x128),d=>this[V(0x129)](d)),this['_button'][V(0xdc)](V(0x106),d=>this['_handleButtonClick'](d)),this[V(0xc1)][V(0xdc)]('keydown',d=>this[V(0xff)](d)),this[V(0xe9)]();}[r(0xd7)](){const W=r;this[W(0x104)]();}[r(0xc5)](){const X=r;if(this['readOnly']||this['disabled'])return;if(this['_popup'])this[X(0x104)]();else this[X(0xb3)]();}[r(0x129)](c){const Y=r;if(c['button']!==0x0)return;this[Y(0x100)]=!![],this['_togglePopup'](),c['preventDefault'](),c['stopPropagation']();}['_handleButtonClick'](c){const Z=r;if(this[Z(0x100)]){this[Z(0x100)]=![],c['preventDefault'](),c[Z(0xe1)]();return;}this[Z(0xc5)]();}['_handleButtonKeyDown'](c){const a0=r;if(c[a0(0xcf)]!==a0(0x11d)&&c[a0(0xcf)]!=='\x20')return;this[a0(0xc5)](),c[a0(0x123)](),c[a0(0xe1)]();}[r(0xb3)](){const a1=r;this[a1(0x110)]=document['createElement'](a1(0x13c)),this['_popup'][a1(0x115)][a1(0xd8)]='fixed',this[a1(0x110)][a1(0x115)]['zIndex']=a1(0xd2),this['_popup'][a1(0x115)][a1(0x11e)]=a1(0xea),this['_editor']=document[a1(0xc4)](a1(0x148)),this['_editor'][a1(0xe5)]=this[a1(0xdd)],this[a1(0xf5)]['valuePreviewChanged']['on'](c=>{const a2=a1;this[a2(0xd9)](c['newValue'],!![]),this[a2(0x127)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this['_editor'][a1(0xbc)]['on'](c=>{const a3=a1;this['_setValue'](c['newValue'],!![]),this[a3(0x127)](new Event(a3(0x12b),{'bubbles':!![],'composed':!![]}));}),this['_popup'][a1(0x145)](this['_editor']),document[a1(0xb9)]['appendChild'](this['_popup']),this[a1(0x10d)](),window['addEventListener'](a1(0x12e),()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener'](a1(0x10a),()=>this['_positionPopup'](),{'once':!![],'capture':!![]}),window[a1(0xdc)]('keydown',this[a1(0xe0)]),requestAnimationFrame(()=>window['addEventListener']('pointerdown',this[a1(0x109)],!![]));}['_positionPopup'](){const a4=r;if(!this['_popup'])return;const c=this[a4(0xca)](),d=this['_popup']['offsetWidth']||0x118,e=this['_popup'][a4(0xe4)]||0x168;let f=c['left'],g=c[a4(0xc8)]+0x4;if(f+d>window[a4(0xd6)]-0x8)f=window[a4(0xd6)]-d-0x8;if(g+e>window['innerHeight']-0x8)g=c['top']-e-0x4;this[a4(0x110)][a4(0x115)][a4(0x10c)]=Math[a4(0xe2)](0x8,f)+'px',this[a4(0x110)]['style'][a4(0xeb)]=Math['max'](0x8,g)+'px';}['_handleOutsidePointer'](c){const a5=r,d=c['composedPath']();if(d['includes'](this)||this['_popup']&&d[a5(0xba)](this['_popup']))return;this['_closePopup']();}[r(0xdf)](c){const a6=r;if(c['key']===a6(0x13d))this['_closePopup']();}['_closePopup'](){const a7=r;window[a7(0xb8)](a7(0x128),this[a7(0x109)],!![]),window[a7(0xb8)]('keydown',this['_windowKeyHandler']),this['_popup']?.['remove'](),this[a7(0x110)]=null,this['_editor']=null;}['_setValue'](c,d){this['_value']=c??'';if(d)this['setAttribute']('value',this['_value']);this['_renderSwatch']();}[r(0xe9)](){const a8=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this['style'][a8(0xc2)]('--color',toCssRgb(c));}}function parseColor(c){const a9=r;if(!c)return null;const d=c[a9(0xc7)]();if(d['toLowerCase']()===a9(0xd5))return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color['toColorObject'](g);if(h?.[a9(0xc6)])return normalizeColor({'r':h['red'],'g':h['green'],'b':h[a9(0xf4)],'a':h[a9(0x10f)]});return null;}function inferColorMode(c){const aa=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i['exec'](c??''),e=d?.[0x1]?.['toLowerCase']();if(e===aa(0xe3)||e==='rgba')return'rgb';if(e==='hsl'||e==='hsla')return aa(0x12d);if(e==='cmyk')return aa(0xb4);if(e===aa(0x11b))return aa(0x11b);if(e==='oklch')return aa(0xe8);return null;}function normalizeModernColorSyntax(c){const ab=r;return c[ab(0xf0)](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody('rgb',e))['replace'](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ab(0x12d),e));}function normalizeFunctionBody(c,d){const ac=r;if(d['includes'](',')){const h=d['split'](',')[ac(0xda)](i=>i[ac(0xc7)]());if(h['length']===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][ac(0xf3)](0x0,-0x1))/0x64);return''+c+(h[ac(0xc0)]===0x4?'a':'')+'('+h[ac(0xf8)](',')+')';}const [e,f]=d[ac(0xb6)]('/')['map'](i=>i[ac(0xc7)]()),g=e[ac(0xb6)](/\s+/)['filter'](Boolean);if(f)g['push'](f['endsWith']('%')?String(Number(f[ac(0xf3)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g['join'](',')+')';}function parseHexColor(c){const ad=r,d=/^#([0-9a-f]{3,8})$/i['exec'](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g[ad(0xc0)]===0x1?g+g:g,0x10);if(e[ad(0xc0)]===0x3||e[ad(0xc0)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e['length']===0x4?f(e[0x3])/0xff:0x1});if(e[ad(0xc0)]===0x6||e[ad(0xc0)]===0x8)return normalizeColor({'r':f(e['slice'](0x0,0x2)),'g':f(e[ad(0xf3)](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e[ad(0xc0)]===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ae=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2]['split']('/')['map'](j=>j['trim']()),h=f['replace'](/,/g,'\x20')[ae(0xb6)](/\s+/)[ae(0x12a)](Boolean);if(h[ae(0xc0)]!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e===ae(0x11b))return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const af=r,e=round(c['a'],0x3);if(d===af(0xe3))return c['a']>=0x1?'rgb('+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':af(0xe6)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d===af(0x12d)){const g=rgbToHsl(c);return c['a']>=0x1?'hsl('+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[af(0xcc)](g['l']*0x64)+'%)':af(0x113)+Math[af(0xcc)](g['h'])+',\x20'+Math[af(0xcc)](g['s']*0x64)+af(0xd0)+Math['round'](g['l']*0x64)+af(0xd0)+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+af(0xd0)+Math[af(0xcc)](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+af(0xd0)+Math[af(0xcc)](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':af(0x12c)+i+',\x20'+e+')';}if(d==='oklab'){const j=rgbToOklab(c);return'oklab('+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return'oklch('+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':af(0x125)+e)+')';}function getChannelValues(c,d){const ag=r;if(d===ag(0xe3))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math[ag(0xcc)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d==='hsl'){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math[ag(0xcc)](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===ag(0xb4)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math['round'](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math[ag(0xcc)](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[ag(0xcc)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math[ag(0xcc)](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'Alpha','name':ag(0x126),'value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ah=r;return{'r':Math['round'](clamp(c['r'],0x0,0xff)),'g':Math[ah(0xcc)](clamp(c['g'],0x0,0xff)),'b':Math['round'](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const ai=r;return ai(0xe6)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const aj=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[aj(0xe2)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function b(c,d){c=c-0xb3;const e=a();let f=e[c];return f;}function hsvToRgb(d,e,f){const ak=r,i=f*e,j=i*(0x1-Math[ak(0x11a)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const al=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math['max'](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[al(0x11a)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const am=r,i=(0x1-Math[am(0x11a)](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math['max'](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math['cbrt'](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math['cbrt'](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const an=r,f=Math[an(0x108)](c+0.3963377774*d+0.2158037573*e,0x3),g=Math['pow'](c-0.1055613458*d-0.0638541728*e,0x3),h=Math[an(0x108)](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const ao=r,e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math[ao(0x13f)](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const ap=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[ap(0xd3)](g),e*Math[ap(0x130)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){return c<=0.0031308?12.92*c:1.055*Math['pow'](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){return c['endsWith']('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function clamp(c,d,e){const aq=r;return Math['min'](e,Math['max'](d,Number[aq(0x11c)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const ar=r,e=Math[ar(0x108)](0xa,d);return Math[ar(0xcc)](c*e)/e;}customElements[r(0x105)]('node-projects-color-editor',ColorEditor),customElements[r(0x105)](r(0xbd),ColorInput);