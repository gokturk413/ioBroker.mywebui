const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=parseInt(q(0x23a))/0x1*(parseInt(q(0x1a3))/0x2)+parseInt(q(0x22c))/0x3*(-parseInt(q(0x1f5))/0x4)+-parseInt(q(0x1df))/0x5*(parseInt(q(0x207))/0x6)+-parseInt(q(0x20c))/0x7*(-parseInt(q(0x1e7))/0x8)+-parseInt(q(0x211))/0x9+parseInt(q(0x1d2))/0xa+parseInt(q(0x1bb))/0xb*(parseInt(q(0x1e9))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x24c47));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const ax=['round','offsetHeight','scroll','88437Ejewmg','setAttribute','innerHeight','--rgb-color','cbrt','toggle','_applyPlanePointer','_outsidePointerHandler','trim','cos','rgb(','_applyChannelInputs','_textInput','createElement','13098JCptzN','_modeSelect','valueChanged','hue','textContent','2WtKbKm','click','_planePointerMove','\x22\x20value=\x22','_setValue','classList','_getDomElement','valuePreviewChanged','cmyk','hsl(','red','_finishPlaneDrag','_alphaLabel','mode','left','sin','_setColor','toggleAttribute','newValue','toLowerCase','alpha-label','ready','remove','cmyk(','443146mTUkmy','appendChild','\x22\x20step=\x22','_validateTextInput','style','pointerId','--hue','_hueInput','_editor','oklab(','invalid','_formatColor','_hue','_plane','_applyHue','oklab','fixed','\x22>\x0a\x20\x20\x20\x20\x20\x20</label>','_positionPopup','setProperty','hasAttribute','disabled','top','115090ZCziRX','_planeHandle','getBoundingClientRect','readonly','stopPropagation','alpha','_channels','template','name','hsl','rgb','_button','exec','30945VyFXSD','getAttribute','max','abs','isFinite','_handleButtonPointerDown','_renderChannelInputs','Enter','731968FLqlaD','innerHTML','132jDoVdP','pointermove','_togglePopup','_mode','toColorObject','oklch','_wireEvents','_windowKeyHandler','includes','_render','_popup','Alpha','4NVKaaR','280px','width','_renderSwatch','addEventListener','dispatchEvent','rgba','min','plane-handle','_commitCurrentValue','hsla(','_alphaInput','activeElement','endsWith','oklch(','#000000','join','_color','96YovUHf','filter','_closePopup','_dragPointerId','keydown','7lVzzBm','pow','button','length','_handleOutsidePointer','2521323OVhjbM','key','rgba(','map','define','_value','replace','split','Escape','innerWidth','slice','_openPopup','node-projects-color-editor','readOnly','offsetWidth','pointercancel','input','blue','removeEventListener','value','div','--color','change','preventDefault'];a=function(){return ax;};return a();}import{w3color}from'../helper/w3color.js';const modes=['rgb',r(0x1db),r(0x1ab),r(0x1ca),r(0x1ee)],epsilon=0.000001;export class ColorEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [r(0x1d9)]=html`
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
  `;['valueChanged']=new TypedEvent();['valuePreviewChanged']=new TypedEvent();[r(0x216)]=r(0x204);[r(0x206)]={'r':0x0,'g':0x0,'b':0x0,'a':0x1};['_mode']=r(0x1dc);['_hue']=0x0;['_plane'];[r(0x1d3)];['_hueInput'];[r(0x200)];['_alphaLabel'];[r(0x23b)];[r(0x1d8)];['_textInput'];[r(0x20a)]=null;get[r(0x224)](){return this['_value'];}set[r(0x224)](c){const s=r,d=parseColor(c);if(d){this[s(0x206)]=d,this[s(0x1ec)]=inferColorMode(c)??this['_mode'],this['_syncHueFromColor'](),this['_value']=this[s(0x1c6)](),this['_render']();return;}this[s(0x216)]=c??'',this['_render']();}get[r(0x1b0)](){const t=r;return this[t(0x1ec)];}set['mode'](c){const u=r;modes['includes'](c)&&(this[u(0x1ec)]=c,this[u(0x216)]=this[u(0x1c6)](),this[u(0x1f2)]());}get[r(0x21e)](){const v=r;return this[v(0x1cf)](v(0x1d5));}set['readOnly'](c){const w=r;this['toggleAttribute'](w(0x1d5),c);}get['disabled'](){const x=r;return this[x(0x1cf)]('disabled');}set[r(0x1d0)](c){this['toggleAttribute']('disabled',c);}constructor(){const y=r;super(),this['_plane']=this[y(0x1a9)]('plane'),this['_planeHandle']=this['_getDomElement'](y(0x1fd)),this[y(0x1c2)]=this['_getDomElement'](y(0x1a1)),this['_alphaInput']=this[y(0x1a9)]('alpha'),this['_alphaLabel']=this[y(0x1a9)](y(0x1b7)),this[y(0x23b)]=this[y(0x1a9)]('mode'),this[y(0x1d8)]=this['_getDomElement']('channels'),this['_textInput']=this['_getDomElement']('text');}['ready'](){const z=r;this[z(0x1ef)]();const c=this['getAttribute'](z(0x224));if(c!=null)this['value']=c;const d=this[z(0x1e0)](z(0x1b0));modes['includes'](d)&&(this[z(0x1ec)]=d,this[z(0x216)]=this['_formatColor']()),this[z(0x1f2)]();}['_wireEvents'](){const A=r;this['_plane']['addEventListener']('pointerdown',c=>this['_startPlaneDrag'](c)),this['_hueInput'][A(0x1f9)]('input',()=>this[A(0x1c9)](!![])),this['_hueInput'][A(0x1f9)]('change',()=>this['_commitCurrentValue']()),this['_alphaInput'][A(0x1f9)](A(0x221),()=>this['_applyAlpha'](!![])),this['_alphaInput'][A(0x1f9)](A(0x227),()=>this['_commitCurrentValue']()),this[A(0x23b)]['addEventListener']('change',()=>{const B=A;this['mode']=this['_modeSelect']['value'],this[B(0x1fe)]();}),this[A(0x1d8)]['addEventListener'](A(0x221),()=>this['_applyChannelInputs'](!![])),this[A(0x1d8)][A(0x1f9)]('change',()=>this['_commitCurrentValue']()),this['_textInput'][A(0x1f9)]('input',()=>this[A(0x1be)]()),this['_textInput']['addEventListener']('change',()=>this['_applyText']()),this[A(0x238)]['addEventListener']('keydown',c=>{const C=A;c['key']===C(0x1e6)&&(this['_applyText'](),this[C(0x238)]['blur']());});}['_startPlaneDrag'](c){const D=r;if(this['readOnly']||this[D(0x1d0)])return;this['_dragPointerId']=c[D(0x1c0)],this[D(0x1c8)]['setPointerCapture'](c['pointerId']),this[D(0x232)](c,!![]),this[D(0x1c8)]['addEventListener'](D(0x1ea),this[D(0x1a5)]),this[D(0x1c8)][D(0x1f9)]('pointerup',this[D(0x1ae)]),this['_plane']['addEventListener'](D(0x220),this['_finishPlaneDrag']),c['preventDefault']();}[r(0x1a5)]=c=>{const E=r;if(c[E(0x1c0)]===this[E(0x20a)])this['_applyPlanePointer'](c,!![]);};[r(0x1ae)]=c=>{const F=r;if(c['pointerId']!==this[F(0x20a)])return;this['_dragPointerId']=null,this[F(0x1c8)][F(0x223)]('pointermove',this[F(0x1a5)]),this[F(0x1c8)][F(0x223)]('pointerup',this['_finishPlaneDrag']),this[F(0x1c8)]['removeEventListener']('pointercancel',this[F(0x1ae)]),this['_commitCurrentValue']();};[r(0x232)](c,d){const G=r,e=this[G(0x1c8)][G(0x1d4)](),f=clamp((c['clientX']-e['left'])/e[G(0x1f7)],0x0,0x1),g=clamp(0x1-(c['clientY']-e[G(0x1d1)])/e['height'],0x0,0x1),h=Number(this[G(0x1c2)]['value'])||0x0;this[G(0x1c7)]=normalizeHue(h),this[G(0x1b3)]({...hsvToRgb(h,f,g),'a':this['_color']['a']},d);}[r(0x1c9)](c){const H=r,d=rgbToHsv(this[H(0x206)]),e=Number(this[H(0x1c2)]['value'])||0x0;this['_hue']=normalizeHue(e),this['_setColor']({...hsvToRgb(e,d['s']||0x1,d['v']||0x1),'a':this[H(0x206)]['a']},c);}['_applyAlpha'](c){const I=r;this['_setColor']({...this[I(0x206)],'a':clamp(Number(this[I(0x200)][I(0x224)])/0x64,0x0,0x1)},c);}[r(0x237)](c){const J=r,d=[...this[J(0x1d8)]['querySelectorAll']('input')]['reduce']((f,g)=>{const K=J;return f[g[K(0x1da)]]=Number(g['value']),f;},{});let e;if(this['_mode']==='rgb')e={'r':d['r'],'g':d['g'],'b':d['b'],'a':d['a']/0x64};else{if(this['_mode']==='hsl')e={...hslToRgb(d['h'],d['s']/0x64,d['l']/0x64),'a':d['a']/0x64};else{if(this[J(0x1ec)]==='cmyk')e={...cmykToRgb(d['c']/0x64,d['m']/0x64,d['y']/0x64,d['k']/0x64),'a':d['a']/0x64};else{if(this['_mode']===J(0x1ca))e={...oklabToRgb(d['l']/0x64,d['a1'],d['b1']),'a':d['alpha']/0x64};else e={...oklchToRgb(d['l']/0x64,d['c'],d['h']),'a':d['a']/0x64};}}}this[J(0x1b3)](normalizeColor(e),c,![],!![]);}[r(0x1be)](){const L=r,c=this[L(0x238)][L(0x224)]['trim']();this['_textInput']['classList'][L(0x231)]('invalid',c['length']>0x0&&!parseColor(c));}['_applyText'](){const M=r,c=parseColor(this[M(0x238)][M(0x224)]);this['_textInput']['classList']['toggle']('invalid',!c);if(!c)return;this['_mode']=inferColorMode(this[M(0x238)]['value'])??this['_mode'],this['_setColor'](c,![],!![],!![]);}['_setColor'](c,d,e=!![],f=![]){const N=r,g=this[N(0x216)];this[N(0x206)]=normalizeColor(c);if(f)this['_syncHueFromColor']();this[N(0x216)]=this['_formatColor'](),this['_render'](e);if(d)this['valuePreviewChanged']['emit']({'newValue':this['_value'],'oldValue':g});else this['valueChanged']['emit']({'newValue':this['_value'],'oldValue':g});}[r(0x1fe)](){const O=r,c=this['_value'];this['_value']=this['_formatColor'](),this['valueChanged']['emit']({'newValue':this[O(0x216)],'oldValue':c});}['_render'](c=!![]){const P=r;if(!this[P(0x238)])return;const d=rgbToHsv(this[P(0x206)]);this[P(0x1bf)]['setProperty'](P(0x1c1),String(Math['round'](this['_hue']))),this[P(0x1bf)][P(0x1ce)](P(0x226),toCssRgb(this['_color'])),this['style'][P(0x1ce)]('--opaque-color','rgb('+this['_color']['r']+',\x20'+this[P(0x206)]['g']+',\x20'+this['_color']['b']+')'),this['style'][P(0x1ce)](P(0x22f),this['_color']['r']+',\x20'+this[P(0x206)]['g']+',\x20'+this['_color']['b']),this['_planeHandle'][P(0x1bf)]['left']=d['s']*0x64+'%',this['_planeHandle'][P(0x1bf)][P(0x1d1)]=(0x1-d['v'])*0x64+'%',this['_hueInput'][P(0x224)]=String(Math['round'](this[P(0x1c7)])),this[P(0x200)][P(0x224)]=String(Math[P(0x229)](this['_color']['a']*0x64)),this[P(0x1af)][P(0x1a2)]=Math['round'](this['_color']['a']*0x64)+'%',this['_modeSelect'][P(0x224)]=this['_mode'];if(c)this[P(0x1e5)]();if(document[P(0x201)]!==this[P(0x238)])this['_textInput']['value']=this['_value'];this[P(0x238)][P(0x1a8)][P(0x1b9)](P(0x1c5));}[r(0x1e5)](){const Q=r,c=getChannelValues(this[Q(0x206)],this[Q(0x1ec)]);this['_channels'][Q(0x1e8)]=c['map'](d=>'\x0a\x20\x20\x20\x20\x20\x20<label>'+d['label']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20name=\x22'+d[Q(0x1da)]+'\x22\x20min=\x22'+d['min']+'\x22\x20max=\x22'+d['max']+Q(0x1bd)+d['step']+Q(0x1a6)+d['value']+Q(0x1cc))[Q(0x205)]('');}['_formatColor'](){const R=r;return formatColor(this[R(0x206)],this['_mode']);}['_syncHueFromColor'](){const S=r,c=rgbToHsv(this[S(0x206)]);if(c['s']>epsilon&&c['v']>epsilon)this['_hue']=normalizeHue(c['h']);}}export class ColorInput extends BaseCustomWebComponentConstructorAppend{static [r(0x1bf)]=css`
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
  `;[r(0x216)]='#000000';['_button'];['_popup'];[r(0x1c3)];['_ignoreNextClick']=![];['_outsidePointerHandler']=c=>this[r(0x210)](c);[r(0x1f0)]=c=>this['_handleWindowKey'](c);get[r(0x224)](){return this['_value'];}set[r(0x224)](c){this['_setValue'](c,![]);}get['readOnly'](){const T=r;return this[T(0x1cf)]('readonly');}set[r(0x21e)](c){const U=r;this[U(0x1b4)](U(0x1d5),c);}get['disabled'](){return this['hasAttribute']('disabled');}set[r(0x1d0)](c){const V=r;this[V(0x1b4)]('disabled',c);if(this['_button'])this[V(0x1dd)][V(0x1d0)]=c;}constructor(){const W=r;super(),this[W(0x1dd)]=this[W(0x1a9)]('button');}[r(0x1b8)](){const X=r,c=this['getAttribute']('value');if(c!=null)this['_setValue'](c,![]);this['_button']['disabled']=this['disabled'],this['_button'][X(0x1f9)]('pointerdown',d=>this['_handleButtonPointerDown'](d)),this['_button'][X(0x1f9)](X(0x1a4),d=>this['_handleButtonClick'](d)),this[X(0x1dd)]['addEventListener']('keydown',d=>this['_handleButtonKeyDown'](d)),this[X(0x1f8)]();}['disconnectedCallback'](){const Y=r;this[Y(0x209)]();}['_togglePopup'](){const Z=r;if(this['readOnly']||this['disabled'])return;if(this['_popup'])this['_closePopup']();else this[Z(0x21c)]();}[r(0x1e4)](c){const a0=r;if(c[a0(0x20e)]!==0x0)return;this['_ignoreNextClick']=!![],this[a0(0x1eb)](),c[a0(0x228)](),c[a0(0x1d6)]();}['_handleButtonClick'](c){const a1=r;if(this['_ignoreNextClick']){this['_ignoreNextClick']=![],c[a1(0x228)](),c[a1(0x1d6)]();return;}this['_togglePopup']();}['_handleButtonKeyDown'](c){const a2=r;if(c[a2(0x212)]!==a2(0x1e6)&&c['key']!=='\x20')return;this['_togglePopup'](),c['preventDefault'](),c[a2(0x1d6)]();}[r(0x21c)](){const a3=r;this[a3(0x1f3)]=document[a3(0x239)](a3(0x225)),this['_popup']['style']['position']=a3(0x1cb),this[a3(0x1f3)][a3(0x1bf)]['zIndex']='100000',this[a3(0x1f3)][a3(0x1bf)][a3(0x1f7)]=a3(0x1f6),this[a3(0x1c3)]=document[a3(0x239)]('node-projects-color-editor'),this[a3(0x1c3)]['value']=this[a3(0x216)],this[a3(0x1c3)][a3(0x1aa)]['on'](c=>{const a4=a3;this['_setValue'](c[a4(0x1b5)],!![]),this[a4(0x1fa)](new Event('input',{'bubbles':!![],'composed':!![]}));}),this['_editor'][a3(0x23c)]['on'](c=>{const a5=a3;this['_setValue'](c[a5(0x1b5)],!![]),this[a5(0x1fa)](new Event(a5(0x227),{'bubbles':!![],'composed':!![]}));}),this[a3(0x1f3)]['appendChild'](this[a3(0x1c3)]),document['body'][a3(0x1bc)](this[a3(0x1f3)]),this[a3(0x1cd)](),window[a3(0x1f9)]('resize',()=>this['_positionPopup'](),{'once':!![]}),window['addEventListener'](a3(0x22b),()=>this[a3(0x1cd)](),{'once':!![],'capture':!![]}),window[a3(0x1f9)](a3(0x20b),this[a3(0x1f0)]),requestAnimationFrame(()=>window['addEventListener']('pointerdown',this[a3(0x233)],!![]));}['_positionPopup'](){const a6=r;if(!this['_popup'])return;const c=this[a6(0x1d4)](),d=this[a6(0x1f3)][a6(0x21f)]||0x118,e=this[a6(0x1f3)][a6(0x22a)]||0x168;let f=c['left'],g=c['bottom']+0x4;if(f+d>window[a6(0x21a)]-0x8)f=window[a6(0x21a)]-d-0x8;if(g+e>window[a6(0x22e)]-0x8)g=c[a6(0x1d1)]-e-0x4;this['_popup']['style'][a6(0x1b1)]=Math['max'](0x8,f)+'px',this['_popup']['style'][a6(0x1d1)]=Math['max'](0x8,g)+'px';}[r(0x210)](c){const a7=r,d=c['composedPath']();if(d[a7(0x1f1)](this)||this[a7(0x1f3)]&&d['includes'](this[a7(0x1f3)]))return;this[a7(0x209)]();}['_handleWindowKey'](c){const a8=r;if(c['key']===a8(0x219))this['_closePopup']();}['_closePopup'](){const a9=r;window[a9(0x223)]('pointerdown',this['_outsidePointerHandler'],!![]),window['removeEventListener'](a9(0x20b),this[a9(0x1f0)]),this[a9(0x1f3)]?.[a9(0x1b9)](),this['_popup']=null,this[a9(0x1c3)]=null;}[r(0x1a7)](c,d){const aa=r;this[aa(0x216)]=c??'';if(d)this[aa(0x22d)](aa(0x224),this[aa(0x216)]);this[aa(0x1f8)]();}[r(0x1f8)](){const ab=r,c=parseColor(this['_value'])??{'r':0x0,'g':0x0,'b':0x0,'a':0x1};this[ab(0x1bf)]['setProperty'](ab(0x226),toCssRgb(c));}}function parseColor(c){const ac=r;if(!c)return null;const d=c[ac(0x234)]();if(d[ac(0x1b6)]()==='transparent')return{'r':0x0,'g':0x0,'b':0x0,'a':0x0};const e=parseHexColor(d);if(e)return e;const f=parseOklabColor(d);if(f)return f;const g=normalizeModernColorSyntax(d),h=w3color[ac(0x1ed)](g);if(h?.['valid'])return normalizeColor({'r':h[ac(0x1ad)],'g':h['green'],'b':h[ac(0x222)],'a':h['opacity']});return null;}function inferColorMode(c){const ad=r,d=/^\s*(rgba?|hsla?|cmyk|oklab|oklch)\s*\(/i[ad(0x1de)](c??''),e=d?.[0x1]?.[ad(0x1b6)]();if(e==='rgb'||e===ad(0x1fb))return ad(0x1dc);if(e==='hsl'||e==='hsla')return ad(0x1db);if(e==='cmyk')return ad(0x1ab);if(e==='oklab')return'oklab';if(e==='oklch')return ad(0x1ee);return null;}function normalizeModernColorSyntax(c){const ae=r;return c['replace'](/,\s*/g,',')['replace'](/rgba?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ae(0x1dc),e))[ae(0x217)](/hsla?\(([^)]*)\)/i,(d,e)=>normalizeFunctionBody(ae(0x1db),e));}function normalizeFunctionBody(c,d){const af=r;if(d['includes'](',')){const h=d[af(0x218)](',')['map'](i=>i['trim']());if(h[af(0x20f)]===0x4&&h[0x3]['endsWith']('%'))h[0x3]=String(Number(h[0x3][af(0x21b)](0x0,-0x1))/0x64);return''+c+(h['length']===0x4?'a':'')+'('+h['join'](',')+')';}const [e,f]=d[af(0x218)]('/')[af(0x214)](i=>i['trim']()),g=e['split'](/\s+/)[af(0x208)](Boolean);if(f)g['push'](f[af(0x202)]('%')?String(Number(f[af(0x21b)](0x0,-0x1))/0x64):f);return''+c+(g['length']===0x4?'a':'')+'('+g[af(0x205)](',')+')';}function parseHexColor(c){const ag=r,d=/^#([0-9a-f]{3,8})$/i[ag(0x1de)](c);if(!d)return null;const e=d[0x1],f=g=>parseInt(g['length']===0x1?g+g:g,0x10);if(e['length']===0x3||e[ag(0x20f)]===0x4)return normalizeColor({'r':f(e[0x0]),'g':f(e[0x1]),'b':f(e[0x2]),'a':e[ag(0x20f)]===0x4?f(e[0x3])/0xff:0x1});if(e[ag(0x20f)]===0x6||e['length']===0x8)return normalizeColor({'r':f(e[ag(0x21b)](0x0,0x2)),'g':f(e['slice'](0x2,0x4)),'b':f(e['slice'](0x4,0x6)),'a':e['length']===0x8?f(e['slice'](0x6,0x8))/0xff:0x1});return null;}function parseOklabColor(c){const ah=r,d=/^(oklab|oklch)\((.*)\)$/i['exec'](c);if(!d)return null;const e=d[0x1]['toLowerCase'](),[f,g]=d[0x2][ah(0x218)]('/')['map'](j=>j[ah(0x234)]()),h=f['replace'](/,/g,'\x20')['split'](/\s+/)['filter'](Boolean);if(h['length']!==0x3)return null;const i=g?parseNumberOrPercent(g,0x1):0x1;if(e==='oklab')return normalizeColor({...oklabToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});return normalizeColor({...oklchToRgb(parseNumberOrPercent(h[0x0],0x1),Number(h[0x1]),Number(h[0x2])),'a':i});}function formatColor(c,d){const ai=r,e=round(c['a'],0x3);if(d==='rgb')return c['a']>=0x1?ai(0x236)+c['r']+',\x20'+c['g']+',\x20'+c['b']+')':ai(0x213)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+e+')';if(d==='hsl'){const g=rgbToHsl(c);return c['a']>=0x1?ai(0x1ac)+Math['round'](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math['round'](g['l']*0x64)+'%)':ai(0x1ff)+Math[ai(0x229)](g['h'])+',\x20'+Math['round'](g['s']*0x64)+'%,\x20'+Math[ai(0x229)](g['l']*0x64)+'%,\x20'+e+')';}if(d==='cmyk'){const h=rgbToCmyk(c),i=Math['round'](h['c']*0x64)+'%,\x20'+Math['round'](h['m']*0x64)+'%,\x20'+Math['round'](h['y']*0x64)+'%,\x20'+Math['round'](h['k']*0x64)+'%';return c['a']>=0x1?'cmyk('+i+')':ai(0x1ba)+i+',\x20'+e+')';}if(d===ai(0x1ca)){const j=rgbToOklab(c);return ai(0x1c4)+round(j['l']*0x64,0x2)+'%\x20'+round(j['a'],0x4)+'\x20'+round(j['b'],0x4)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}const f=rgbToOklch(c);return ai(0x203)+round(f['l']*0x64,0x2)+'%\x20'+round(f['c'],0x4)+'\x20'+round(f['h'],0x2)+(c['a']>=0x1?'':'\x20/\x20'+e)+')';}function getChannelValues(c,d){const aj=r;if(d===aj(0x1dc))return[{'label':'R','name':'r','value':c['r'],'min':0x0,'max':0xff,'step':0x1},{'label':'G','name':'g','value':c['g'],'min':0x0,'max':0xff,'step':0x1},{'label':'B','name':'b','value':c['b'],'min':0x0,'max':0xff,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];if(d===aj(0x1db)){const f=rgbToHsl(c);return[{'label':'H','name':'h','value':Math['round'](f['h']),'min':0x0,'max':0x168,'step':0x1},{'label':'S','name':'s','value':Math['round'](f['s']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'L','name':'l','value':Math['round'](f['l']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math[aj(0x229)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d===aj(0x1ab)){const g=rgbToCmyk(c);return[{'label':'C','name':'c','value':Math[aj(0x229)](g['c']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'M','name':'m','value':Math['round'](g['m']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'Y','name':'y','value':Math[aj(0x229)](g['y']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'K','name':'k','value':Math['round'](g['k']*0x64),'min':0x0,'max':0x64,'step':0x1},{'label':'A','name':'a','value':Math['round'](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}if(d==='oklab'){const h=rgbToOklab(c);return[{'label':'L','name':'l','value':round(h['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'A','name':'a1','value':round(h['a'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':'B','name':'b1','value':round(h['b'],0x4),'min':-0x1,'max':0x1,'step':0.001},{'label':aj(0x1f4),'name':aj(0x1d7),'value':Math[aj(0x229)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}const e=rgbToOklch(c);return[{'label':'L','name':'l','value':round(e['l']*0x64,0x2),'min':0x0,'max':0x64,'step':0.1},{'label':'C','name':'c','value':round(e['c'],0x4),'min':0x0,'max':0x1,'step':0.001},{'label':'H','name':'h','value':round(e['h'],0x2),'min':0x0,'max':0x168,'step':0.1},{'label':'A','name':'a','value':Math[aj(0x229)](c['a']*0x64),'min':0x0,'max':0x64,'step':0x1}];}function normalizeColor(c){const ak=r;return{'r':Math[ak(0x229)](clamp(c['r'],0x0,0xff)),'g':Math[ak(0x229)](clamp(c['g'],0x0,0xff)),'b':Math[ak(0x229)](clamp(c['b'],0x0,0xff)),'a':clamp(Number['isFinite'](c['a'])?c['a']:0x1,0x0,0x1)};}function toCssRgb(c){const al=r;return al(0x213)+c['r']+',\x20'+c['g']+',\x20'+c['b']+',\x20'+round(c['a'],0x3)+')';}function rgbToHsv(c){const am=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[am(0x1e1)](e,f,i),k=Math['min'](e,f,i),l=j-k;let m=0x0;if(l!==0x0){if(j===e)m=(f-i)/l%0x6;else{if(j===f)m=(i-e)/l+0x2;else m=(e-f)/l+0x4;}m*=0x3c;}return{'h':(m+0x168)%0x168,'s':j===0x0?0x0:l/j,'v':j};}function hsvToRgb(d,e,f){const an=r,i=f*e,j=i*(0x1-Math[an(0x1e2)](d/0x3c%0x2-0x1)),k=f-i;let l=0x0,n=0x0,o=0x0;if(d<0x3c)[l,n,o]=[i,j,0x0];else{if(d<0x78)[l,n,o]=[j,i,0x0];else{if(d<0xb4)[l,n,o]=[0x0,i,j];else{if(d<0xf0)[l,n,o]=[0x0,j,i];else{if(d<0x12c)[l,n,o]=[j,0x0,i];else[l,n,o]=[i,0x0,j];}}}}return{'r':(l+k)*0xff,'g':(n+k)*0xff,'b':(o+k)*0xff};}function rgbToHsl(c){const ao=r,e=c['r']/0xff,f=c['g']/0xff,i=c['b']/0xff,j=Math[ao(0x1e1)](e,f,i),k=Math['min'](e,f,i),m=(j+k)/0x2,n=j-k;let o=0x0,p=0x0;if(n!==0x0){p=n/(0x1-Math[ao(0x1e2)](0x2*m-0x1));if(j===e)o=(f-i)/n%0x6;else{if(j===f)o=(i-e)/n+0x2;else o=(e-f)/n+0x4;}o*=0x3c;}return{'h':(o+0x168)%0x168,'s':p,'l':m};}function hslToRgb(d,e,f){const i=(0x1-Math['abs'](0x2*f-0x1))*e,j=i*(0x1-Math['abs'](d/0x3c%0x2-0x1)),k=f-i/0x2;let n=0x0,o=0x0,p=0x0;if(d<0x3c)[n,o,p]=[i,j,0x0];else{if(d<0x78)[n,o,p]=[j,i,0x0];else{if(d<0xb4)[n,o,p]=[0x0,i,j];else{if(d<0xf0)[n,o,p]=[0x0,j,i];else{if(d<0x12c)[n,o,p]=[j,0x0,i];else[n,o,p]=[i,0x0,j];}}}}return{'r':(n+k)*0xff,'g':(o+k)*0xff,'b':(p+k)*0xff};}function rgbToCmyk(c){const ap=r,d=c['r']/0xff,e=c['g']/0xff,f=c['b']/0xff,h=0x1-Math[ap(0x1e1)](d,e,f);if(h>=0x1-epsilon)return{'c':0x0,'m':0x0,'y':0x0,'k':0x1};return{'c':(0x1-d-h)/(0x1-h),'m':(0x1-e-h)/(0x1-h),'y':(0x1-f-h)/(0x1-h),'k':h};}function cmykToRgb(d,e,f,g){return{'r':0xff*(0x1-d)*(0x1-g),'g':0xff*(0x1-e)*(0x1-g),'b':0xff*(0x1-f)*(0x1-g)};}function rgbToOklab(c){const aq=r,d=srgbToLinear(c['r']/0xff),e=srgbToLinear(c['g']/0xff),f=srgbToLinear(c['b']/0xff),h=Math[aq(0x230)](0.4122214708*d+0.5363325363*e+0.0514459929*f),i=Math[aq(0x230)](0.2119034982*d+0.6806995451*e+0.1073969566*f),j=Math['cbrt'](0.0883024619*d+0.2817188376*e+0.6299787005*f);return{'l':0.2104542553*h+0.793617785*i-0.0040720468*j,'a':1.9779984951*h-2.428592205*i+0.4505937099*j,'b':0.0259040371*h+0.7827717662*i-0.808675766*j};}function oklabToRgb(c,d,e){const ar=r,f=Math['pow'](c+0.3963377774*d+0.2158037573*e,0x3),g=Math[ar(0x20d)](c-0.1055613458*d-0.0638541728*e,0x3),h=Math['pow'](c-0.0894841775*d-1.291485548*e,0x3);return{'r':0xff*linearToSrgb(4.0767416621*f-3.3077115913*g+0.2309699292*h),'g':0xff*linearToSrgb(-1.2684380046*f+2.6097574011*g-0.3413193965*h),'b':0xff*linearToSrgb(-0.0041960863*f-0.7034186147*g+1.707614701*h)};}function rgbToOklch(d){const e=rgbToOklab(d),f=Math['sqrt'](e['a']*e['a']+e['b']*e['b']),g=f<epsilon?0x0:(Math['atan2'](e['b'],e['a'])*0xb4/Math['PI']+0x168)%0x168;return{'l':e['l'],'c':f,'h':g};}function oklchToRgb(d,e,f){const as=r,g=f*Math['PI']/0xb4;return oklabToRgb(d,e*Math[as(0x235)](g),e*Math[as(0x1b2)](g));}function srgbToLinear(c){return c<=0.04045?c/12.92:Math['pow']((c+0.055)/1.055,2.4);}function linearToSrgb(c){const at=r;return c<=0.0031308?12.92*c:1.055*Math[at(0x20d)](c,0x1/2.4)-0.055;}function parseNumberOrPercent(c,d){const au=r;return c[au(0x202)]('%')?Number(c['slice'](0x0,-0x1))/0x64*d:Number(c);}function b(c,d){c=c-0x1a1;const e=a();let f=e[c];return f;}function clamp(c,d,e){const av=r;return Math[av(0x1fc)](e,Math['max'](d,Number[av(0x1e3)](c)?c:d));}function normalizeHue(c){return clamp(c,0x0,0x168);}function round(c,d){const aw=r,e=Math['pow'](0xa,d);return Math[aw(0x229)](c*e)/e;}customElements[r(0x215)](r(0x21d),ColorEditor),customElements['define']('node-projects-color-input',ColorInput);