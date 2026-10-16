function a(){const z=['defaultView','_boxModelDiv','blur','unsetValue','_inputs','_commitInput','min','paddingBottom','height','_isRefreshing','box-model','dataset','observe','area','values','transform','margin-bottom','5757920guuupG','borderRightWidth','borderTopWidth','getPropertyValue','_updateInput','connectedCallback','paddingTop','style','_wireEvents','shadowRoot','content-box','box','getPropertyName','17090Hosexn','203PqWjGt','543663wIZOky','136936KhrxNs','auto','Escape','classList','_borderDiv','37656nQIDhM','_cloneValues','border-bottom-width','56UiErqo','_updateInputs','52AYtKjJ','boxSizing','add','padding-right','2511880mrRffk','remove','clientWidth','trim','borderBottomWidth','_getComputedProperty','input[data-area][data-side]','_resizeObserver','_updateScale','right','borderLeftWidth','_values','_contentDiv','template','margin-top','padding-left','scale(','ready','offsetHeight','keys','content','_parseAttributesToProperties','1221168Lifypw','left','change','addEventListener','value-changed','marginLeft','disconnect'];a=function(){return z;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x15c))/0x1*(parseInt(i(0x167))/0x2)+-parseInt(i(0x164))/0x3*(-parseInt(i(0x169))/0x4)+parseInt(i(0x16d))/0x5+parseInt(i(0x183))/0x6+-parseInt(i(0x15d))/0x7*(parseInt(i(0x15f))/0x8)+parseInt(i(0x15e))/0x9+-parseInt(i(0x14f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51fce));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':j(0x176),'bottom':'bottom','left':j(0x184)},'margin':{'top':j(0x17b),'right':'margin-right','bottom':j(0x14e),'left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x166),'left':'border-left-width'},'padding':{'top':'padding-top','right':j(0x16c),'bottom':'padding-bottom','left':j(0x17c)},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':j(0x151),'border-right-width':j(0x150),'border-bottom-width':j(0x171),'border-left-width':j(0x177),'margin-top':'marginTop','margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':j(0x188),'padding-top':j(0x155),'padding-right':'paddingRight','padding-bottom':j(0x145),'padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x156)]=css`
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
  `;static [j(0x17a)]=html`
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
  `;['property'];[j(0x18d)]='-';[j(0x163)];['_boxModelDiv'];['_contentDiv'];[j(0x142)]=[];['_values']={};[j(0x147)]=![];[j(0x174)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x163)]=this['_getDomElement']('border'),this['_boxModelDiv']=this['_getDomElement'](k(0x148)),this[k(0x179)]=this['_getDomElement'](k(0x181)),this[k(0x142)]=[...this[k(0x158)]['querySelectorAll'](k(0x173))];}[j(0x17e)](){const l=j;this[l(0x182)](),this[l(0x157)](),this[l(0x168)](),requestAnimationFrame(()=>this[l(0x175)]());}[j(0x154)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this['_updateScale']()),this[m(0x174)][m(0x14a)](this),requestAnimationFrame(()=>this[m(0x175)]());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0x189)]();}get[j(0x14c)](){const o=j;return this[o(0x165)](this['_values']);}set['values'](c){const p=j;this[p(0x178)]=this['_cloneValues'](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this[q(0x179)][q(0x162)]['remove'](q(0x15a)),this[q(0x163)]['classList'][q(0x16e)]('box');if(!c){this['values']={};return;}const d=c['ownerDocument'][q(0x18a)]['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[q(0x180)](cssProperties[f])){const h=this[q(0x15b)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[q(0x16a)]==q(0x159))this['_contentDiv'][q(0x162)][q(0x16b)](q(0x15a));else this['_borderDiv'][q(0x162)][q(0x16b)](q(0x15a));this['values']=e,this['_updateScale']();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c[r(0x186)]('focus',()=>c['select']()),c['addEventListener'](r(0x185),()=>this[r(0x143)](c)),c['addEventListener']('keydown',d=>{const s=r;if(d['key']==='Enter')this[s(0x143)](c),c['blur']();else d['key']===s(0x161)&&(this['_updateInput'](c),c[s(0x18c)]());});}}[j(0x143)](c){const t=j;if(this[t(0x147)])return;const d=c[t(0x149)]['area'],e=c[t(0x149)]['side'],f=this[t(0x178)][d]?.[e]??'',g=c['value'][t(0x170)]();if(!this[t(0x178)][d])this['_values'][d]={};this[t(0x178)][d][e]=g,this[t(0x153)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0x187),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this[u(0x147)]=!![];try{for(const c of this['_inputs'])this[u(0x153)](c);}finally{this['_isRefreshing']=![];}}['_updateInput'](c){const v=j,d=c[v(0x149)][v(0x14b)],e=c[v(0x149)]['side'];c['value']=this[v(0x178)][d]?.[e]??this['unsetValue'];}[j(0x172)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0x152)](d)||c[f];if(e==='position'&&g===w(0x160))return this['unsetValue'];return g||this['unsetValue'];}[j(0x165)](c){const x=j,d={};for(const e of Object[x(0x180)](c))d[e]={...c[e]};return d;}['_updateScale'](){const y=j;if(!this[y(0x18b)])return;const c=this[y(0x16f)];if(c<=0x0)return;const d=Math[y(0x144)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv'][y(0x156)]['width']=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[y(0x18b)][y(0x156)][y(0x14d)]=d<0x1?y(0x17d)+d+')':'',this[y(0x156)][y(0x146)]=this[y(0x18b)][y(0x17f)]*d+'px';}}function b(c,d){c=c-0x142;const e=a();let f=e[c];return f;}customElements['define']('node-projects-metrics-editor',MetricsEditor);