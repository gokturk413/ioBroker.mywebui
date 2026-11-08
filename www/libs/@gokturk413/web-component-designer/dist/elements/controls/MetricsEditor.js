const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x93))/0x1*(parseInt(i(0xa5))/0x2)+parseInt(i(0xbd))/0x3+parseInt(i(0xcd))/0x4+-parseInt(i(0xc1))/0x5+parseInt(i(0x8b))/0x6*(parseInt(i(0x8c))/0x7)+-parseInt(i(0xba))/0x8+parseInt(i(0xb5))/0x9*(parseInt(i(0xd2))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2043a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x84;const e=a();let f=e[c];return f;}const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x97),'right':'right','bottom':'bottom','left':j(0xce)},'margin':{'top':'margin-top','right':'margin-right','bottom':'margin-bottom','left':j(0xbf)},'border':{'top':'border-top-width','right':'border-right-width','bottom':'border-bottom-width','left':j(0xbe)},'padding':{'top':j(0xcb),'right':j(0xa7),'bottom':j(0xa1),'left':j(0x9c)},'content':{'width':j(0xd0),'height':j(0xb2)}},computedStyleProperties={'border-top-width':j(0xa4),'border-right-width':j(0x9b),'border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':j(0xc8),'margin-right':j(0x85),'margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':j(0xc3),'padding-right':j(0xc9),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[j(0xa6)];['unsetValue']='-';[j(0xb6)];[j(0xa9)];['_contentDiv'];[j(0xbc)]=[];[j(0xc5)]={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this[k(0xa0)](),this[k(0xb6)]=this[k(0xc4)](k(0xd3)),this['_boxModelDiv']=this['_getDomElement']('box-model'),this['_contentDiv']=this[k(0xc4)](k(0xa8)),this['_inputs']=[...this[k(0x8a)]['querySelectorAll'](k(0xb7))];}[j(0xad)](){const l=j;this['_parseAttributesToProperties'](),this[l(0x98)](),this[l(0x92)](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this['_updateScale']()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this[m(0xb4)]());}[j(0xc7)](){const n=j;this[n(0xca)]?.['disconnect']();}get[j(0xaa)](){const o=j;return this[o(0x9a)](this[o(0xc5)]);}set[j(0xaa)](c){const p=j;this[p(0xc5)]=this[p(0x9a)](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0x88)](c){const q=j;this[q(0x91)]['classList'][q(0xb8)](q(0xc6)),this['_borderDiv'][q(0xd5)]['remove'](q(0xc6));if(!c){this['values']={};return;}const d=c['ownerDocument'][q(0x9f)][q(0x89)](c),e={};for(const f of Object[q(0xb9)](cssProperties)){e[f]={};for(const g of Object[q(0xb9)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this[q(0xd1)](d,h,f);}}if(d[q(0xc2)]=='content-box')this[q(0x91)][q(0xd5)][q(0xa3)]('box');else this['_borderDiv'][q(0xd5)][q(0xa3)](q(0xc6));this['values']=e,this[q(0xb4)]();}['_wireEvents'](){const r=j;for(const c of this[r(0xbc)]){c[r(0x86)]('focus',()=>c[r(0xac)]()),c['addEventListener']('change',()=>this['_commitInput'](c)),c['addEventListener'](r(0x9d),d=>{const s=r;if(d['key']==='Enter')this['_commitInput'](c),c[s(0xab)]();else d[s(0x95)]==='Escape'&&(this['_updateInput'](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this[t(0x90)])return;const d=c['dataset'][t(0x87)],e=c[t(0xa2)]['side'],f=this['_values'][d]?.[e]??'',g=c[t(0xcf)][t(0x96)]();if(!this[t(0xc5)][d])this['_values'][d]={};this['_values'][d][e]=g,this[t(0x8e)](c);if(f===g)return;this[t(0xaf)](new CustomEvent(t(0x8f),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x94)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this['_isRefreshing']=!![];try{for(const c of this[u(0xbc)])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}['_updateInput'](c){const v=j,d=c[v(0xa2)][v(0x87)],e=c[v(0xa2)][v(0xb3)];c[v(0xcf)]=this['_values'][d]?.[e]??this[v(0x9e)];}[j(0xd1)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===w(0xbb)&&g===w(0x8d))return this['unsetValue'];return g||this[w(0x9e)];}['_cloneValues'](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0xcc)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[x(0xa9)][x(0xd4)]['width']=d<0x1?metricsEditorNaturalWidth+'px':x(0x84),this['_boxModelDiv']['style'][x(0xb0)]=d<0x1?x(0x99)+d+')':'',this[x(0xd4)][x(0xb2)]=this[x(0xa9)][x(0xae)]*d+'px';}}customElements[j(0xc0)](j(0xb1),MetricsEditor);function a(){const y=['marginRight','addEventListener','area','refresh','getComputedStyle','shadowRoot','176844JMYFKx','28pjRXBp','auto','_updateInput','value-changed','_isRefreshing','_contentDiv','_updateInputs','1qBojFd','getPropertyName','key','trim','top','_wireEvents','scale(','_cloneValues','borderRightWidth','padding-left','keydown','unsetValue','defaultView','_restoreCachedInititalValues','padding-bottom','dataset','add','borderTopWidth','314714atxMWo','property','padding-right','content','_boxModelDiv','values','blur','select','ready','offsetHeight','dispatchEvent','transform','node-projects-metrics-editor','height','side','_updateScale','256077LecFOB','_borderDiv','input[data-area][data-side]','remove','keys','1002808OMOEPX','position','_inputs','697488vbSlXI','border-left-width','margin-left','define','211520XHjZlu','boxSizing','paddingTop','_getDomElement','_values','box','disconnectedCallback','marginTop','paddingRight','_resizeObserver','padding-top','clientWidth','313284UxmSVi','left','value','width','_getComputedProperty','10EjATjj','border','style','classList','100%'];a=function(){return y;};return a();}