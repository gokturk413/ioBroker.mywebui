function a(){const x=['defaultView','marginLeft','trim','style','Escape','Enter','_getComputedProperty','getPropertyName','4358517yeQGPC','6924xemcUf','100%','values','clientWidth','transform','box-model','328690aFRnHP','left','right','paddingLeft','value','94952zuoIhs','63KluKfB','12176NkjXLr','border','key','11uLXvrz','min','2193484kNWEnq','_updateInputs','_contentDiv','unsetValue','top','width','_updateScale','box','paddingRight','boxSizing','_inputs','31608bibQqZ','ready','dataset','_borderDiv','_boxModelDiv','blur','content','_parseAttributesToProperties','change','_isRefreshing','206514fycyeE','10gRVheF','value-changed','margin-bottom','height','input[data-area][data-side]','margin-right','_wireEvents','_resizeObserver','area','disconnect','classList','remove','_cloneValues','observe','padding-bottom','borderLeftWidth','376gGldBI','_updateInput','_commitInput','getComputedStyle','borderTopWidth','keys','_getDomElement','auto','add','connectedCallback','side','_values','bottom','node-projects-metrics-editor'];a=function(){return x;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x17d))/0x1*(parseInt(i(0x17a))/0x2)+-parseInt(i(0x16c))/0x3+-parseInt(i(0x17f))/0x4*(parseInt(i(0x195))/0x5)+-parseInt(i(0x18a))/0x6+parseInt(i(0x194))/0x7*(-parseInt(i(0x156))/0x8)+-parseInt(i(0x179))/0x9*(parseInt(i(0x173))/0xa)+parseInt(i(0x178))/0xb*(parseInt(i(0x16d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd5e4a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x183),'right':j(0x175),'bottom':j(0x162),'left':j(0x174)},'margin':{'top':'margin-top','right':j(0x19a),'bottom':j(0x197),'left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':'border-bottom-width','left':'border-left-width'},'padding':{'top':'padding-top','right':'padding-right','bottom':j(0x154),'left':'padding-left'},'content':{'width':j(0x184),'height':j(0x198)}},computedStyleProperties={'border-top-width':j(0x15a),'border-right-width':'borderRightWidth','border-bottom-width':'borderBottomWidth','border-left-width':j(0x155),'margin-top':'marginTop','margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':j(0x165),'padding-top':'paddingTop','padding-right':j(0x187),'padding-bottom':'paddingBottom','padding-left':j(0x176)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['property'];[j(0x182)]='-';['_borderDiv'];['_boxModelDiv'];[j(0x181)];['_inputs']=[];['_values']={};[j(0x193)]=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this['_getDomElement'](k(0x17b)),this['_boxModelDiv']=this[k(0x15c)](k(0x172)),this['_contentDiv']=this[k(0x15c)](k(0x190)),this[k(0x189)]=[...this['shadowRoot']['querySelectorAll'](k(0x199))];}[j(0x18b)](){const l=j;this[l(0x191)](),this[l(0x19b)](),this[l(0x180)](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x15f)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this[m(0x185)]()),this[m(0x14d)][m(0x153)](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0x14f)]();}get[j(0x16f)](){const o=j;return this[o(0x152)](this['_values']);}set[j(0x16f)](c){this['_values']=this['_cloneValues'](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const p=j;this['_contentDiv'][p(0x150)][p(0x151)](p(0x186)),this[p(0x18d)][p(0x150)]['remove'](p(0x186));if(!c){this['values']={};return;}const d=c['ownerDocument'][p(0x164)][p(0x159)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0x15b)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this[p(0x16a)](d,h,f);}}if(d[p(0x188)]=='content-box')this[p(0x181)]['classList']['add']('box');else this['_borderDiv']['classList'][p(0x15e)]('box');this['values']=e,this[p(0x185)]();}['_wireEvents'](){const q=j;for(const c of this[q(0x189)]){c['addEventListener']('focus',()=>c['select']()),c['addEventListener'](q(0x192),()=>this['_commitInput'](c)),c['addEventListener']('keydown',d=>{const r=q;if(d['key']===r(0x169))this['_commitInput'](c),c['blur']();else d[r(0x17c)]===r(0x168)&&(this[r(0x157)](c),c[r(0x18f)]());});}}[j(0x158)](c){const s=j;if(this[s(0x193)])return;const d=c['dataset']['area'],e=c['dataset']['side'],f=this[s(0x161)][d]?.[e]??'',g=c[s(0x177)][s(0x166)]();if(!this['_values'][d])this['_values'][d]={};this[s(0x161)][d][e]=g,this[s(0x157)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(s(0x196),{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0x16b)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x180)](){const t=j;this['_isRefreshing']=!![];try{for(const c of this['_inputs'])this[t(0x157)](c);}finally{this[t(0x193)]=![];}}[j(0x157)](c){const u=j,d=c[u(0x18c)][u(0x14e)],e=c['dataset'][u(0x160)];c['value']=this['_values'][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g===v(0x15d))return this[v(0x182)];return g||this[v(0x182)];}[j(0x152)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0x185)](){const w=j;if(!this[w(0x18e)])return;const c=this[w(0x170)];if(c<=0x0)return;const d=Math[w(0x17e)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv']['style']['width']=d<0x1?metricsEditorNaturalWidth+'px':w(0x16e),this['_boxModelDiv'][w(0x167)][w(0x171)]=d<0x1?'scale('+d+')':'',this[w(0x167)]['height']=this['_boxModelDiv']['offsetHeight']*d+'px';}}function b(c,d){c=c-0x14d;const e=a();let f=e[c];return f;}customElements['define'](j(0x163),MetricsEditor);