const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xb3))/0x1+-parseInt(i(0xed))/0x2*(parseInt(i(0xe2))/0x3)+parseInt(i(0xcd))/0x4*(parseInt(i(0xb1))/0x5)+parseInt(i(0xe3))/0x6*(parseInt(i(0xa8))/0x7)+parseInt(i(0xe6))/0x8+parseInt(i(0xe9))/0x9+parseInt(i(0xec))/0xa*(-parseInt(i(0xd9))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb36e5));function b(c,d){c=c-0xa7;const e=a();let f=e[c];return f;}function a(){const z=['top','add','marginLeft','_contentDiv','69vvnSUp','4188grZWDr','disconnect','content','3602240yeadSN','disconnectedCallback','input[data-area][data-side]','8127396wWXcwE','offsetHeight','borderLeftWidth','9236330ybumeb','59504xWVVyK','height','clientWidth','_cloneValues','borderRightWidth','classList','transform','_updateInput','connectedCallback','bottom','5964yosAyQ','marginBottom','box','template','_wireEvents','_boxModelDiv','Enter','_parseAttributesToProperties','remove','375675ktHiSQ','padding-right','319723pUjUCL','unsetValue','addEventListener','position','_updateInputs','borderBottomWidth','padding-left','select','_values','keys','scale(','_updateScale','property','border-bottom-width','paddingRight','_commitInput','100%','left','getPropertyValue','width','_getDomElement','style','_isRefreshing','margin-right','area','side','4oNuURH','values','dataset','_resizeObserver','keydown','border-left-width','auto','_getComputedProperty','_restoreCachedInititalValues','paddingBottom','margin-top','value','11bquaJZ','content-box','marginRight','value-changed','defaultView'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0xde),'right':'right','bottom':j(0xa7),'left':j(0xc4)},'margin':{'top':j(0xd7),'right':j(0xca),'bottom':'margin-bottom','left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0xc0),'left':j(0xd2)},'padding':{'top':'padding-top','right':j(0xb2),'bottom':'padding-bottom','left':j(0xb9)},'content':{'width':j(0xc6),'height':j(0xee)}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0xf1),'border-bottom-width':j(0xb8),'border-left-width':j(0xeb),'margin-top':'marginTop','margin-right':j(0xdb),'margin-bottom':j(0xa9),'margin-left':j(0xe0),'padding-top':'paddingTop','padding-right':j(0xc1),'padding-bottom':j(0xd6),'padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0xc8)]=css`
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
  `;static [j(0xab)]=html`
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
  `;[j(0xbf)];['unsetValue']='-';['_borderDiv'];['_boxModelDiv'];[j(0xe1)];['_inputs']=[];['_values']={};['_isRefreshing']=![];[j(0xd0)];constructor(){const k=j;super(),this[k(0xd5)](),this['_borderDiv']=this['_getDomElement']('border'),this[k(0xad)]=this[k(0xc7)]('box-model'),this[k(0xe1)]=this[k(0xc7)](k(0xe5)),this['_inputs']=[...this['shadowRoot']['querySelectorAll'](k(0xe8))];}['ready'](){const l=j;this[l(0xaf)](),this[l(0xac)](),this['_updateInputs'](),requestAnimationFrame(()=>this[l(0xbe)]());}[j(0xf5)](){const m=j;this[m(0xd0)]??=new ResizeObserver(()=>this['_updateScale']()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this[m(0xbe)]());}[j(0xe7)](){const n=j;this['_resizeObserver']?.[n(0xe4)]();}get['values'](){const o=j;return this['_cloneValues'](this[o(0xbb)]);}set[j(0xce)](c){const p=j;this[p(0xbb)]=this[p(0xf0)](c??{}),this[p(0xb7)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this['_contentDiv'][q(0xf2)][q(0xb0)]('box'),this['_borderDiv'][q(0xf2)][q(0xb0)](q(0xaa));if(!c){this[q(0xce)]={};return;}const d=c['ownerDocument'][q(0xdd)]['getComputedStyle'](c),e={};for(const f of Object[q(0xbc)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']==q(0xda))this[q(0xe1)][q(0xf2)][q(0xdf)]('box');else this['_borderDiv'][q(0xf2)][q(0xdf)](q(0xaa));this[q(0xce)]=e,this['_updateScale']();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c['addEventListener']('focus',()=>c[r(0xba)]()),c[r(0xb5)]('change',()=>this['_commitInput'](c)),c['addEventListener'](r(0xd1),d=>{const s=r;if(d['key']===s(0xae))this['_commitInput'](c),c['blur']();else d['key']==='Escape'&&(this[s(0xf4)](c),c['blur']());});}}[j(0xc2)](c){const t=j;if(this['_isRefreshing'])return;const d=c[t(0xcf)][t(0xcb)],e=c[t(0xcf)]['side'],f=this[t(0xbb)][d]?.[e]??'',g=c[t(0xd8)]['trim']();if(!this[t(0xbb)][d])this['_values'][d]={};this[t(0xbb)][d][e]=g,this[t(0xf4)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0xdc),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this[u(0xc9)]=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this[u(0xc9)]=![];}}['_updateInput'](c){const v=j,d=c['dataset']['area'],e=c[v(0xcf)][v(0xcc)];c['value']=this[v(0xbb)][d]?.[e]??this['unsetValue'];}[j(0xd4)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0xc5)](d)||c[f];if(e===w(0xb6)&&g===w(0xd3))return this[w(0xb4)];return g||this[w(0xb4)];}['_cloneValues'](c){const x=j,d={};for(const e of Object[x(0xbc)](c))d[e]={...c[e]};return d;}[j(0xbe)](){const y=j;if(!this[y(0xad)])return;const c=this[y(0xef)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv'][y(0xc8)][y(0xc6)]=d<0x1?metricsEditorNaturalWidth+'px':y(0xc3),this['_boxModelDiv'][y(0xc8)][y(0xf3)]=d<0x1?y(0xbd)+d+')':'',this[y(0xc8)][y(0xee)]=this[y(0xad)][y(0xea)]*d+'px';}}customElements['define']('node-projects-metrics-editor',MetricsEditor);