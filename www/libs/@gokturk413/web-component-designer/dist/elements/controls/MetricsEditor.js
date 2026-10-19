const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x154))/0x1+parseInt(i(0x128))/0x2+parseInt(i(0x13a))/0x3*(-parseInt(i(0x15e))/0x4)+parseInt(i(0x152))/0x5+-parseInt(i(0x164))/0x6+parseInt(i(0x148))/0x7*(-parseInt(i(0x133))/0x8)+parseInt(i(0x141))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9882e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x132),'right':j(0x144),'bottom':j(0x165),'left':j(0x147)},'margin':{'top':'margin-top','right':j(0x161),'bottom':j(0x120),'left':j(0x14d)},'border':{'top':'border-top-width','right':'border-right-width','bottom':'border-bottom-width','left':'border-left-width'},'padding':{'top':'padding-top','right':j(0x160),'bottom':'padding-bottom','left':j(0x15a)},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':'borderRightWidth','border-bottom-width':j(0x14b),'border-left-width':'borderLeftWidth','margin-top':j(0x157),'margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':j(0x13f),'padding-right':'paddingRight','padding-bottom':'paddingBottom','padding-left':'paddingLeft'};function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}function a(){const y=['keys','content','add','change','4271275abfsvx','box','288412tSWucI','_borderDiv','clientWidth','marginTop','dispatchEvent','_values','padding-left','focus','scale(','_contentDiv','3004ZwiJER','getPropertyValue','padding-right','margin-right','define','_cloneValues','7437402qdUJqL','bottom','side','_inputs','box-model','keydown','input[data-area][data-side]','style','margin-bottom','_getDomElement','key','unsetValue','100%','_updateInputs','area','blur','804856unCESP','_boxModelDiv','_isRefreshing','_parseAttributesToProperties','boxSizing','_wireEvents','_resizeObserver','querySelectorAll','Escape','ready','top','118216gWcJbE','_updateInput','_getComputedProperty','value','getPropertyName','observe','dataset','2991VJfUmK','values','ownerDocument','width','shadowRoot','paddingTop','trim','21851190UCZyfF','node-projects-metrics-editor','classList','right','remove','_commitInput','left','371vxBMjJ','min','_updateScale','borderBottomWidth','addEventListener','margin-left'];a=function(){return y;};return a();}export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x11f)]=css`
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
  `;['property'];[j(0x123)]='-';[j(0x155)];[j(0x129)];['_contentDiv'];[j(0x167)]=[];['_values']={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this['_getDomElement']('border'),this[k(0x129)]=this['_getDomElement'](k(0x168)),this[k(0x15d)]=this[k(0x121)](k(0x14f)),this[k(0x167)]=[...this[k(0x13e)][k(0x12f)](k(0x11e))];}[j(0x131)](){const l=j;this[l(0x12b)](),this[l(0x12d)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this[m(0x12e)]??=new ResizeObserver(()=>this['_updateScale']()),this['_resizeObserver'][m(0x138)](this),requestAnimationFrame(()=>this[m(0x14a)]());}['disconnectedCallback'](){this['_resizeObserver']?.['disconnect']();}get[j(0x13b)](){const n=j;return this[n(0x163)](this['_values']);}set['values'](c){const o=j;this[o(0x159)]=this['_cloneValues'](c??{}),this[o(0x125)]();}[j(0x137)](c,d){return cssProperties[c]?.[d];}['refresh'](c){const p=j;this['_contentDiv'][p(0x143)]['remove'](p(0x153)),this[p(0x155)][p(0x143)][p(0x145)]('box');if(!c){this['values']={};return;}const d=c[p(0x13c)]['defaultView']['getComputedStyle'](c),e={};for(const f of Object[p(0x14e)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this[p(0x135)](d,h,f);}}if(d[p(0x12c)]=='content-box')this['_contentDiv'][p(0x143)]['add']('box');else this['_borderDiv'][p(0x143)][p(0x150)]('box');this['values']=e,this[p(0x14a)]();}[j(0x12d)](){const q=j;for(const c of this[q(0x167)]){c['addEventListener'](q(0x15b),()=>c['select']()),c[q(0x14c)](q(0x151),()=>this['_commitInput'](c)),c[q(0x14c)](q(0x11d),d=>{const r=q;if(d[r(0x122)]==='Enter')this[r(0x146)](c),c[r(0x127)]();else d[r(0x122)]===r(0x130)&&(this[r(0x134)](c),c[r(0x127)]());});}}[j(0x146)](c){const s=j;if(this[s(0x12a)])return;const d=c[s(0x139)]['area'],e=c[s(0x139)]['side'],f=this[s(0x159)][d]?.[e]??'',g=c[s(0x136)][s(0x140)]();if(!this['_values'][d])this[s(0x159)][d]={};this[s(0x159)][d][e]=g,this['_updateInput'](c);if(f===g)return;this[s(0x158)](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x125)](){const t=j;this[t(0x12a)]=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}['_updateInput'](c){const u=j,d=c[u(0x139)][u(0x126)],e=c[u(0x139)][u(0x166)];c[u(0x136)]=this['_values'][d]?.[e]??this[u(0x123)];}[j(0x135)](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c[v(0x15f)](d)||c[f];if(e==='position'&&g==='auto')return this[v(0x123)];return g||this[v(0x123)];}['_cloneValues'](c){const w=j,d={};for(const e of Object[w(0x14e)](c))d[e]={...c[e]};return d;}[j(0x14a)](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0x156)];if(c<=0x0)return;const d=Math[x(0x149)](0x1,c/metricsEditorNaturalWidth);this[x(0x129)][x(0x11f)][x(0x13d)]=d<0x1?metricsEditorNaturalWidth+'px':x(0x124),this['_boxModelDiv'][x(0x11f)]['transform']=d<0x1?x(0x15c)+d+')':'',this['style']['height']=this['_boxModelDiv']['offsetHeight']*d+'px';}}customElements[j(0x162)](j(0x142),MetricsEditor);