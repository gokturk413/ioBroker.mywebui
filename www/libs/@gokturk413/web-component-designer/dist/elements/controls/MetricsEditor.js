const j=b;function a(){const x=['area','_contentDiv','_values','shadowRoot','borderRightWidth','2VJywLT','position','padding-right','getPropertyValue','top','_isRefreshing','paddingTop','_boxModelDiv','border','_wireEvents','_updateInput','Enter','define','connectedCallback','template','getPropertyName','743715qvEDFj','100%','key','content','width','classList','bottom','_inputs','margin-left','margin-top','border-left-width','observe','padding-left','querySelectorAll','marginRight','dataset','add','style','min','2879275xNYAgI','dispatchEvent','select','borderBottomWidth','21304824oSSWWT','_updateScale','value','_restoreCachedInititalValues','paddingRight','left','value-changed','input[data-area][data-side]','keys','change','_resizeObserver','addEventListener','7620998HujnXZ','5975718RGOiss','height','marginBottom','_commitInput','margin-bottom','_cloneValues','marginTop','disconnect','Escape','_updateInputs','1441266nxoTFq','getComputedStyle','paddingLeft','_borderDiv','3851836BNaKbu','unsetValue','side','values','box'];a=function(){return x;};return a();}function b(c,d){c=c-0xf2;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x138))/0x1+-parseInt(i(0x128))/0x2*(-parseInt(i(0x11a))/0x3)+parseInt(i(0x11e))/0x4+parseInt(i(0xff))/0x5+parseInt(i(0x110))/0x6+parseInt(i(0x10f))/0x7+-parseInt(i(0x103))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaa2fd));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x12c),'right':'right','bottom':j(0xf2),'left':j(0x108)},'margin':{'top':j(0xf5),'right':'margin-right','bottom':j(0x114),'left':j(0xf4)},'border':{'top':'border-top-width','right':'border-right-width','bottom':'border-bottom-width','left':j(0xf6)},'padding':{'top':'padding-top','right':j(0x12a),'bottom':'padding-bottom','left':j(0xf8)},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0x127),'border-bottom-width':j(0x102),'border-left-width':'borderLeftWidth','margin-top':j(0x116),'margin-right':j(0xfa),'margin-bottom':j(0x112),'margin-left':'marginLeft','padding-top':j(0x12e),'padding-right':j(0x107),'padding-bottom':'paddingBottom','padding-left':j(0x11c)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
      display: block;
      box-sizing: border-box;
      min-width: 0;
      color: var(--wcd-property-grid-text-color, var(--property-grid-text-color, var(--wcd-color-text, white)));
      font: 11px monospace;
      overflow: hidden;
    }

    #box-model {
      display: grid;
      grid-template-columns: 46px minmax(120px, 1fr) 46px;
      grid-template-rows: 22px minmax(29px, auto) minmax(58px, auto) minmax(29px, auto) 22px;
      grid-template-areas:
        ". position-top ."
        "position-left margin position-right"
        "position-left margin position-right"
        "position-left margin position-right"
        ". position-bottom .";
      align-items: center;
      justify-items: center;
      width: 100%;
      min-width: ${metricsEditorNaturalWidth}px;
      box-sizing: border-box;
      padding: 4px;
      transform-origin: top left;
    }

    .ring {
      display: grid;
      grid-template-columns: 42px minmax(56px, 1fr) 42px;
      grid-template-rows: 20px minmax(34px, auto) 20px;
      grid-template-areas:
        ". top ."
        "left inner right"
        ". bottom .";
      align-items: center;
      justify-items: center;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      height: 100%;
      min-height: 116px;
      border: 1px dashed rgba(0, 0, 0, .55);
    }

    #margin {
      grid-area: margin;
      background: var(--wcd-metrics-editor-margin-background, #f6c89f);
    }

    #border {
      grid-area: inner;
      background: var(--wcd-metrics-editor-border-background, #f7dd9c);
      border-style: solid;
      min-height: 76px;
    }

    #padding {
      grid-area: inner;
      background: var(--wcd-metrics-editor-padding-background, #c8d08f);
      min-height: 38px;
    }

    #content {
      grid-area: inner;
      display: grid;
      grid-template-columns: minmax(26px, 1fr) auto minmax(26px, 1fr);
      gap: 4px;
      align-items: center;
      justify-items: center;
      width: 100%;
      height: 100%;
      min-height: 24px;
      box-sizing: border-box;
      background: var(--wcd-metrics-editor-content-background, #8fb9c3);
      border: 1px solid rgba(0, 0, 0, .65);
    }

    #position-label,
    #content-label {
      display: none;
    }

    #content.box,
    #border.box {
      outline: 2px solid rgba(0, 0, 0, .85);
      outline-offset: -2px;
    }

    .label {
      position: absolute;
      top: 2px;
      left: 4px;
      max-width: calc(100% - 8px);
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: none;
      color: rgba(0, 0, 0, .72);
      font-size: 10px;
      line-height: 12px;
    }

    input {
      width: 38px;
      max-width: 100%;
      min-width: 0;
      height: 17px;
      box-sizing: border-box;
      padding: 0 2px;
      border: 0;
      border-radius: 0;
      background: transparent;
      color: rgba(0, 0, 0, .85);
      font: inherit;
      line-height: 17px;
      text-align: center;
      outline: none;
    }

    input:hover,
    input:focus {
      background: var(--wcd-metrics-editor-label-background, rgba(255, 255, 255, .72));
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .35);
    }

    input:disabled {
      opacity: .65;
    }

    [data-side="top"] {
      grid-area: top;
    }

    [data-side="right"] {
      grid-area: right;
    }

    [data-side="bottom"] {
      grid-area: bottom;
    }

    [data-side="left"] {
      grid-area: left;
    }

    [data-area="position"][data-side="top"] {
      grid-area: position-top;
    }

    [data-area="position"][data-side="right"] {
      grid-area: position-right;
    }

    [data-area="position"][data-side="bottom"] {
      grid-area: position-bottom;
    }

    [data-area="position"][data-side="left"] {
      grid-area: position-left;
    }
  `;static [j(0x136)]=html`
    <div id="box-model">
      <span id="position-label" class="label" title="position">position</span>
      <input data-area="position" data-side="top" title="top" spellcheck="false">
      <input data-area="position" data-side="right" title="right" spellcheck="false">
      <input data-area="position" data-side="bottom" title="bottom" spellcheck="false">
      <input data-area="position" data-side="left" title="left" spellcheck="false">

      <div id="margin" class="ring">
        <span class="label" title="margin">margin</span>
        <input data-area="margin" data-side="top" title="margin-top" spellcheck="false">
        <input data-area="margin" data-side="right" title="margin-right" spellcheck="false">
        <input data-area="margin" data-side="bottom" title="margin-bottom" spellcheck="false">
        <input data-area="margin" data-side="left" title="margin-left" spellcheck="false">

        <div id="border" class="ring">
          <span class="label" title="border">border</span>
          <input data-area="border" data-side="top" title="border-top-width" spellcheck="false">
          <input data-area="border" data-side="right" title="border-right-width" spellcheck="false">
          <input data-area="border" data-side="bottom" title="border-bottom-width" spellcheck="false">
          <input data-area="border" data-side="left" title="border-left-width" spellcheck="false">

          <div id="padding" class="ring">
            <span class="label" title="padding">padding</span>
            <input data-area="padding" data-side="top" title="padding-top" spellcheck="false">
            <input data-area="padding" data-side="right" title="padding-right" spellcheck="false">
            <input data-area="padding" data-side="bottom" title="padding-bottom" spellcheck="false">
            <input data-area="padding" data-side="left" title="padding-left" spellcheck="false">

            <div id="content">
              <span id="content-label" class="label" title="content">content</span>
              <input data-area="content" data-side="width" title="width" spellcheck="false">
              <span id="content-separator">x</span>
              <input data-area="content" data-side="height" title="height" spellcheck="false">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;['property'];['unsetValue']='-';[j(0x11d)];['_boxModelDiv'];[j(0x124)];[j(0xf3)]=[];['_values']={};[j(0x12d)]=![];[j(0x10d)];constructor(){const k=j;super(),this[k(0x106)](),this['_borderDiv']=this['_getDomElement'](k(0x130)),this['_boxModelDiv']=this['_getDomElement']('box-model'),this[k(0x124)]=this['_getDomElement'](k(0x13b)),this['_inputs']=[...this[k(0x126)][k(0xf9)](k(0x10a))];}['ready'](){const l=j;this['_parseAttributesToProperties'](),this[l(0x131)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x135)](){const m=j;this[m(0x10d)]??=new ResizeObserver(()=>this['_updateScale']()),this['_resizeObserver'][m(0xf7)](this),requestAnimationFrame(()=>this[m(0x104)]());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0x117)]();}get['values'](){return this['_cloneValues'](this['_values']);}set['values'](c){const o=j;this[o(0x125)]=this[o(0x115)](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const p=j;this['_contentDiv']['classList']['remove']('box'),this['_borderDiv']['classList']['remove'](p(0x122));if(!c){this[p(0x121)]={};return;}const d=c['ownerDocument']['defaultView'][p(0x11b)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0x10b)](cssProperties[f])){const h=this[p(0x137)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']=='content-box')this[p(0x124)]['classList']['add']('box');else this[p(0x11d)][p(0x13d)][p(0xfc)]('box');this[p(0x121)]=e,this[p(0x104)]();}[j(0x131)](){const q=j;for(const c of this['_inputs']){c['addEventListener']('focus',()=>c[q(0x101)]()),c[q(0x10e)](q(0x10c),()=>this['_commitInput'](c)),c[q(0x10e)]('keydown',d=>{const r=q;if(d[r(0x13a)]===r(0x133))this[r(0x113)](c),c['blur']();else d[r(0x13a)]===r(0x118)&&(this['_updateInput'](c),c['blur']());});}}[j(0x113)](c){const s=j;if(this[s(0x12d)])return;const d=c['dataset']['area'],e=c['dataset'][s(0x120)],f=this[s(0x125)][d]?.[e]??'',g=c[s(0x105)]['trim']();if(!this[s(0x125)][d])this[s(0x125)][d]={};this[s(0x125)][d][e]=g,this[s(0x132)](c);if(f===g)return;this[s(0x100)](new CustomEvent(s(0x109),{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0x137)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x119)](){this['_isRefreshing']=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}[j(0x132)](c){const t=j,d=c['dataset'][t(0x123)],e=c[t(0xfb)][t(0x120)];c[t(0x105)]=this['_values'][d]?.[e]??this[t(0x11f)];}['_getComputedProperty'](c,d,e){const u=j,f=computedStyleProperties[d]??d,g=c[u(0x12b)](d)||c[f];if(e===u(0x129)&&g==='auto')return this['unsetValue'];return g||this['unsetValue'];}['_cloneValues'](c){const v=j,d={};for(const e of Object[v(0x10b)](c))d[e]={...c[e]};return d;}['_updateScale'](){const w=j;if(!this[w(0x12f)])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math[w(0xfe)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv']['style'][w(0x13c)]=d<0x1?metricsEditorNaturalWidth+'px':w(0x139),this[w(0x12f)]['style']['transform']=d<0x1?'scale('+d+')':'',this[w(0xfd)][w(0x111)]=this[w(0x12f)]['offsetHeight']*d+'px';}}customElements[j(0x134)]('node-projects-metrics-editor',MetricsEditor);