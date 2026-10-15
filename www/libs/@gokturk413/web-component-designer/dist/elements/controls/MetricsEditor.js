function a(){const y=['_updateScale','_borderDiv','area','marginRight','side','borderRightWidth','_values','addEventListener','_contentDiv','height','_updateInputs','_inputs','define','position','width','box-model','classList','21807675kUoadn','_isRefreshing','7471828nDkbhe','508302nZODfB','getPropertyName','border-top-width','border-left-width','style','min','change','_getComputedProperty','disconnectedCallback','_getDomElement','_boxModelDiv','keydown','margin-bottom','_restoreCachedInititalValues','values','paddingLeft','30sCiFHN','dataset','add','borderBottomWidth','input[data-area][data-side]','unsetValue','ready','getComputedStyle','_updateInput','1563429AqBFwM','6QLslbt','observe','402632NrwshJ','blur','_wireEvents','ownerDocument','focus','keys','clientWidth','getPropertyValue','node-projects-metrics-editor','margin-right','offsetHeight','4020128aFEzHS','value-changed','marginBottom','_cloneValues','1573290iFTgjC','padding-top','box','value','auto','_parseAttributesToProperties','right','transform','_resizeObserver'];a=function(){return y;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xc7))/0x1+-parseInt(i(0xf2))/0x2+-parseInt(i(0xe0))/0x3+-parseInt(i(0xe3))/0x4*(parseInt(i(0xd7))/0x5)+parseInt(i(0xe1))/0x6*(parseInt(i(0xc6))/0x7)+-parseInt(i(0xee))/0x8+parseInt(i(0xc4))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8aa75));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':j(0xf8),'bottom':'bottom','left':'left'},'margin':{'top':'margin-top','right':j(0xec),'bottom':j(0xd3),'left':'margin-left'},'border':{'top':j(0xc9),'right':'border-right-width','bottom':'border-bottom-width','left':j(0xca)},'padding':{'top':j(0xf3),'right':'padding-right','bottom':'padding-bottom','left':'padding-left'},'content':{'width':'width','height':j(0xbc)}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0x100),'border-bottom-width':j(0xda),'border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':j(0xfe),'margin-bottom':j(0xf0),'margin-left':'marginLeft','padding-top':'paddingTop','padding-right':'paddingRight','padding-bottom':'paddingBottom','padding-left':j(0xd6)};function b(c,d){c=c-0xbc;const e=a();let f=e[c];return f;}export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0xcb)]=css`
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
  `;['property'];['unsetValue']='-';['_borderDiv'];['_boxModelDiv'];[j(0x103)];[j(0xbe)]=[];[j(0x101)]={};[j(0xc5)]=![];['_resizeObserver'];constructor(){const k=j;super(),this[k(0xd4)](),this['_borderDiv']=this[k(0xd0)]('border'),this[k(0xd1)]=this[k(0xd0)](k(0xc2)),this['_contentDiv']=this[k(0xd0)]('content'),this[k(0xbe)]=[...this['shadowRoot']['querySelectorAll'](k(0xdb))];}[j(0xdd)](){const l=j;this[l(0xf7)](),this['_wireEvents'](),this['_updateInputs'](),requestAnimationFrame(()=>this[l(0xfb)]());}['connectedCallback'](){const m=j;this[m(0xfa)]??=new ResizeObserver(()=>this[m(0xfb)]()),this[m(0xfa)][m(0xe2)](this),requestAnimationFrame(()=>this['_updateScale']());}[j(0xcf)](){const n=j;this[n(0xfa)]?.['disconnect']();}get[j(0xd5)](){const o=j;return this[o(0xf1)](this[o(0x101)]);}set['values'](c){const p=j;this['_values']=this[p(0xf1)](c??{}),this['_updateInputs']();}[j(0xc8)](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this['_contentDiv']['classList']['remove'](q(0xf4)),this[q(0xfc)][q(0xc3)]['remove']('box');if(!c){this[q(0xd5)]={};return;}const d=c[q(0xe6)]['defaultView'][q(0xde)](c),e={};for(const f of Object[q(0xe8)](cssProperties)){e[f]={};for(const g of Object[q(0xe8)](cssProperties[f])){const h=this[q(0xc8)](f,g);e[f][g]=this[q(0xce)](d,h,f);}}if(d['boxSizing']=='content-box')this['_contentDiv']['classList'][q(0xd9)]('box');else this['_borderDiv']['classList'][q(0xd9)](q(0xf4));this[q(0xd5)]=e,this['_updateScale']();}[j(0xe5)](){const r=j;for(const c of this['_inputs']){c['addEventListener'](r(0xe7),()=>c['select']()),c[r(0x102)](r(0xcd),()=>this['_commitInput'](c)),c[r(0x102)](r(0xd2),d=>{const s=r;if(d['key']==='Enter')this['_commitInput'](c),c[s(0xe4)]();else d['key']==='Escape'&&(this[s(0xdf)](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this[t(0xc5)])return;const d=c[t(0xd8)]['area'],e=c['dataset'][t(0xff)],f=this[t(0x101)][d]?.[e]??'',g=c[t(0xf5)]['trim']();if(!this['_values'][d])this['_values'][d]={};this['_values'][d][e]=g,this[t(0xdf)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0xef),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0xc8)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0xbd)](){const u=j;this[u(0xc5)]=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}[j(0xdf)](c){const v=j,d=c[v(0xd8)][v(0xfd)],e=c[v(0xd8)]['side'];c['value']=this[v(0x101)][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0xea)](d)||c[f];if(e===w(0xc0)&&g===w(0xf6))return this['unsetValue'];return g||this[w(0xdc)];}['_cloneValues'](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this[x(0xd1)])return;const c=this[x(0xe9)];if(c<=0x0)return;const d=Math[x(0xcc)](0x1,c/metricsEditorNaturalWidth);this[x(0xd1)]['style'][x(0xc1)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[x(0xd1)]['style'][x(0xf9)]=d<0x1?'scale('+d+')':'',this['style'][x(0xbc)]=this['_boxModelDiv'][x(0xed)]*d+'px';}}customElements[j(0xbf)](j(0xeb),MetricsEditor);