const j=b;function b(c,d){c=c-0xa6;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xcb))/0x1*(parseInt(i(0xc9))/0x2)+parseInt(i(0xb8))/0x3+parseInt(i(0xe0))/0x4+-parseInt(i(0xce))/0x5+parseInt(i(0xcd))/0x6*(-parseInt(i(0xaa))/0x7)+parseInt(i(0xe7))/0x8*(parseInt(i(0xb5))/0x9)+parseInt(i(0xc0))/0xa*(parseInt(i(0xd1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8d5ae));function a(){const y=['area','border-bottom-width','getPropertyValue','paddingTop','keys','boxSizing','_wireEvents','2pwoFAG','_commitInput','697738sIhOsw','values','53328rVyYqp','4833455VIcTuP','height','style','429PkyJaX','100%','dispatchEvent','clientWidth','_boxModelDiv','paddingLeft','_isRefreshing','_getComputedProperty','marginBottom','border','remove','box','bottom','addEventListener','borderLeftWidth','267236MMNEMf','_updateInputs','ownerDocument','_inputs','value','marginTop','position','3197968wqyecL','change','focus','marginRight','_getDomElement','key','add','_contentDiv','unsetValue','_updateScale','classList','margin-bottom','select','paddingBottom','_restoreCachedInititalValues','keydown','_cloneValues','dataset','_values','847nGIhYd','border-top-width','_updateInput','side','connectedCallback','left','offsetHeight','content','paddingRight','border-left-width','borderRightWidth','18ZtckLD','ready','Escape','3243744digamO','margin-left','auto','borderBottomWidth','getPropertyName','_resizeObserver','padding-top','node-projects-metrics-editor','351620RDgclv','template'];a=function(){return y;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0xdd),'left':j(0xaf)},'margin':{'top':'margin-top','right':'margin-right','bottom':j(0xf2),'left':j(0xb9)},'border':{'top':j(0xab),'right':'border-right-width','bottom':j(0xc3),'left':j(0xb3)},'padding':{'top':j(0xbe),'right':'padding-right','bottom':'padding-bottom','left':'padding-left'},'content':{'width':'width','height':j(0xcf)}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0xb4),'border-bottom-width':j(0xbb),'border-left-width':j(0xdf),'margin-top':j(0xe5),'margin-right':j(0xea),'margin-bottom':j(0xd9),'margin-left':'marginLeft','padding-top':j(0xc5),'padding-right':j(0xb2),'padding-bottom':j(0xf4),'padding-left':j(0xd6)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0xd0)]=css`
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
  `;static [j(0xc1)]=html`
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
  `;['property'];[j(0xef)]='-';['_borderDiv'];['_boxModelDiv'];['_contentDiv'];['_inputs']=[];['_values']={};[j(0xd7)]=![];[j(0xbd)];constructor(){const k=j;super(),this[k(0xf5)](),this['_borderDiv']=this['_getDomElement'](k(0xda)),this['_boxModelDiv']=this[k(0xeb)]('box-model'),this[k(0xee)]=this[k(0xeb)](k(0xb1)),this['_inputs']=[...this['shadowRoot']['querySelectorAll']('input[data-area][data-side]')];}[j(0xb6)](){const l=j;this['_parseAttributesToProperties'](),this[l(0xc8)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}[j(0xae)](){const m=j;this[m(0xbd)]??=new ResizeObserver(()=>this[m(0xf0)]()),this[m(0xbd)]['observe'](this),requestAnimationFrame(()=>this[m(0xf0)]());}['disconnectedCallback'](){const n=j;this[n(0xbd)]?.['disconnect']();}get['values'](){const o=j;return this[o(0xa7)](this[o(0xa9)]);}set[j(0xcc)](c){const p=j;this['_values']=this['_cloneValues'](c??{}),this[p(0xe1)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this['_contentDiv'][q(0xf1)][q(0xdb)]('box'),this['_borderDiv']['classList'][q(0xdb)](q(0xdc));if(!c){this[q(0xcc)]={};return;}const d=c[q(0xe2)]['defaultView']['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[q(0xc6)](cssProperties[f])){const h=this[q(0xbc)](f,g);e[f][g]=this[q(0xd8)](d,h,f);}}if(d[q(0xc7)]=='content-box')this[q(0xee)][q(0xf1)][q(0xed)](q(0xdc));else this['_borderDiv'][q(0xf1)][q(0xed)]('box');this['values']=e,this[q(0xf0)]();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c['addEventListener'](r(0xe9),()=>c[r(0xf3)]()),c[r(0xde)](r(0xe8),()=>this[r(0xca)](c)),c[r(0xde)](r(0xa6),d=>{const s=r;if(d[s(0xec)]==='Enter')this[s(0xca)](c),c['blur']();else d['key']===s(0xb7)&&(this[s(0xac)](c),c['blur']());});}}[j(0xca)](c){const t=j;if(this['_isRefreshing'])return;const d=c['dataset'][t(0xc2)],e=c[t(0xa8)]['side'],f=this['_values'][d]?.[e]??'',g=c[t(0xe4)]['trim']();if(!this[t(0xa9)][d])this[t(0xa9)][d]={};this[t(0xa9)][d][e]=g,this['_updateInput'](c);if(f===g)return;this[t(0xd3)](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this['_isRefreshing']=!![];try{for(const c of this[u(0xe3)])this[u(0xac)](c);}finally{this[u(0xd7)]=![];}}['_updateInput'](c){const v=j,d=c['dataset'][v(0xc2)],e=c[v(0xa8)][v(0xad)];c[v(0xe4)]=this['_values'][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0xc4)](d)||c[f];if(e===w(0xe6)&&g===w(0xba))return this['unsetValue'];return g||this['unsetValue'];}[j(0xa7)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0xf0)](){const x=j;if(!this[x(0xd5)])return;const c=this[x(0xd4)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[x(0xd5)][x(0xd0)]['width']=d<0x1?metricsEditorNaturalWidth+'px':x(0xd2),this['_boxModelDiv']['style']['transform']=d<0x1?'scale('+d+')':'',this[x(0xd0)]['height']=this['_boxModelDiv'][x(0xb0)]*d+'px';}}customElements['define'](j(0xbf),MetricsEditor);