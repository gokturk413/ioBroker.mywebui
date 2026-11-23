const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x133))/0x1*(-parseInt(i(0x137))/0x2)+-parseInt(i(0x14f))/0x3*(-parseInt(i(0x170))/0x4)+-parseInt(i(0x173))/0x5*(parseInt(i(0x140))/0x6)+parseInt(i(0x16e))/0x7+-parseInt(i(0x172))/0x8+-parseInt(i(0x12d))/0x9+parseInt(i(0x155))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6cb2e));function b(c,d){c=c-0x12a;const e=a();let f=e[c];return f;}function a(){const y=['_values','input[data-area][data-side]','ready','unsetValue','Escape','trim','_contentDiv','paddingRight','addEventListener','borderBottomWidth','blur','define','36kjhuvx','connectedCallback','remove','values','margin-bottom','content-box','16167870YoSHiq','padding-top','_updateInput','marginLeft','side','_wireEvents','_resizeObserver','node-projects-metrics-editor','top','keys','getComputedStyle','_boxModelDiv','offsetHeight','_updateInputs','focus','clientWidth','_borderDiv','getPropertyName','height','padding-bottom','width','marginTop','border','refresh','value-changed','1008231rbKfwl','querySelectorAll','193036KkDvLw','value','3010728LrfUKg','10djSoTF','_inputs','keydown','box','6110433qBlctu','_commitInput','_updateScale','borderTopWidth','box-model','_getDomElement','1112VEIXiO','classList','disconnectedCallback','dataset','706TFivDy','margin-right','_getComputedProperty','_cloneValues','ownerDocument','_isRefreshing','area','bottom','borderLeftWidth','1340652iClBOa','content','border-left-width'];a=function(){return y;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x15d),'right':'right','bottom':j(0x13e),'left':'left'},'margin':{'top':'margin-top','right':j(0x138),'bottom':j(0x153),'left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':'border-bottom-width','left':j(0x142)},'padding':{'top':j(0x156),'right':'padding-right','bottom':j(0x168),'left':'padding-left'},'content':{'width':j(0x169),'height':'height'}},computedStyleProperties={'border-top-width':j(0x130),'border-right-width':'borderRightWidth','border-bottom-width':j(0x14c),'border-left-width':j(0x13f),'margin-top':j(0x16a),'margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':j(0x158),'padding-top':'paddingTop','padding-right':j(0x14a),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static ['template']=html`
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
  `;['property'];['unsetValue']='-';[j(0x165)];[j(0x160)];['_contentDiv'];[j(0x12a)]=[];[j(0x143)]={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this['_getDomElement'](k(0x16b)),this[k(0x160)]=this[k(0x132)](k(0x131)),this['_contentDiv']=this['_getDomElement'](k(0x141)),this['_inputs']=[...this['shadowRoot'][k(0x16f)](k(0x144))];}[j(0x145)](){const l=j;this['_parseAttributesToProperties'](),this['_wireEvents'](),this[l(0x162)](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x150)](){const m=j;this[m(0x15b)]??=new ResizeObserver(()=>this['_updateScale']()),this[m(0x15b)]['observe'](this),requestAnimationFrame(()=>this[m(0x12f)]());}[j(0x135)](){const n=j;this[n(0x15b)]?.['disconnect']();}get['values'](){return this['_cloneValues'](this['_values']);}set[j(0x152)](c){const o=j;this['_values']=this[o(0x13a)](c??{}),this[o(0x162)]();}[j(0x166)](c,d){return cssProperties[c]?.[d];}[j(0x16c)](c){const p=j;this[p(0x149)]['classList']['remove'](p(0x12c)),this['_borderDiv'][p(0x134)][p(0x151)](p(0x12c));if(!c){this[p(0x152)]={};return;}const d=c[p(0x13b)]['defaultView'][p(0x15f)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0x15e)](cssProperties[f])){const h=this[p(0x166)](f,g);e[f][g]=this[p(0x139)](d,h,f);}}if(d['boxSizing']==p(0x154))this[p(0x149)][p(0x134)]['add'](p(0x12c));else this['_borderDiv'][p(0x134)]['add']('box');this[p(0x152)]=e,this['_updateScale']();}[j(0x15a)](){const q=j;for(const c of this[q(0x12a)]){c[q(0x14b)](q(0x163),()=>c['select']()),c['addEventListener']('change',()=>this['_commitInput'](c)),c['addEventListener'](q(0x12b),d=>{const r=q;if(d['key']==='Enter')this['_commitInput'](c),c[r(0x14d)]();else d['key']===r(0x147)&&(this['_updateInput'](c),c[r(0x14d)]());});}}[j(0x12e)](c){const s=j;if(this['_isRefreshing'])return;const d=c[s(0x136)]['area'],e=c['dataset']['side'],f=this['_values'][d]?.[e]??'',g=c[s(0x171)][s(0x148)]();if(!this[s(0x143)][d])this['_values'][d]={};this['_values'][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(s(0x16d),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const t=j;this[t(0x13c)]=!![];try{for(const c of this[t(0x12a)])this[t(0x157)](c);}finally{this['_isRefreshing']=![];}}[j(0x157)](c){const u=j,d=c[u(0x136)][u(0x13d)],e=c['dataset'][u(0x159)];c['value']=this['_values'][d]?.[e]??this[u(0x146)];}[j(0x139)](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g==='auto')return this['unsetValue'];return g||this[v(0x146)];}[j(0x13a)](c){const w=j,d={};for(const e of Object[w(0x15e)](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0x164)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv']['style'][x(0x169)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[x(0x160)]['style']['transform']=d<0x1?'scale('+d+')':'',this['style'][x(0x167)]=this['_boxModelDiv'][x(0x161)]*d+'px';}}customElements[j(0x14e)](j(0x15c),MetricsEditor);