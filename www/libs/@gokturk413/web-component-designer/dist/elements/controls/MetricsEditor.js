function a(){const x=['side','clientWidth','Enter','value-changed','_commitInput','remove','content-box','unsetValue','borderBottomWidth','dataset','keydown','classList','_boxModelDiv','height','key','margin-top','_updateScale','borderLeftWidth','template','_contentDiv','add','boxSizing','_resizeObserver','left','6218270dOPKFM','padding-right','observe','marginRight','offsetHeight','border-bottom-width','disconnect','querySelectorAll','ownerDocument','getPropertyName','253841FVmLOd','area','style','_values','refresh','5pFTNNj','309095tmTlxI','auto','padding-top','paddingLeft','box-model','values','trim','keys','box','_cloneValues','bottom','value','scale(','1363983paREuR','width','position','112raGBiV','define','margin-bottom','974392fFWYuG','1625373XMAKrq','marginBottom','defaultView','141378voyIpz','shadowRoot','paddingRight','_parseAttributesToProperties','2WEEmGu','addEventListener','paddingBottom','Escape','_updateInput','select','node-projects-metrics-editor','_isRefreshing','_inputs'];a=function(){return x;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1d5))/0x1*(-parseInt(i(0x1f0))/0x2)+-parseInt(i(0x1e2))/0x3+-parseInt(i(0x1e8))/0x4+parseInt(i(0x1d4))/0x5*(-parseInt(i(0x1ec))/0x6)+-parseInt(i(0x1cf))/0x7*(-parseInt(i(0x1e5))/0x8)+parseInt(i(0x1e9))/0x9+parseInt(i(0x1c5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x44295));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0x1df),'left':j(0x1c4)},'margin':{'top':j(0x1bc),'right':'margin-right','bottom':j(0x1e7),'left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x1ca),'left':'border-left-width'},'padding':{'top':j(0x1d7),'right':j(0x1c6),'bottom':'padding-bottom','left':'padding-left'},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':'borderRightWidth','border-bottom-width':j(0x1b5),'border-left-width':j(0x1be),'margin-top':'marginTop','margin-right':j(0x1c8),'margin-bottom':j(0x1ea),'margin-left':'marginLeft','padding-top':'paddingTop','padding-right':j(0x1ee),'padding-bottom':j(0x1f2),'padding-left':j(0x1d8)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x1bf)]=html`
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
  `;['property'];[j(0x1b4)]='-';['_borderDiv'];[j(0x1b9)];[j(0x1c0)];[j(0x1f8)]=[];[j(0x1d2)]={};[j(0x1f7)]=![];[j(0x1c3)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this['_getDomElement']('border'),this[k(0x1b9)]=this['_getDomElement'](k(0x1d9)),this[k(0x1c0)]=this['_getDomElement']('content'),this['_inputs']=[...this[k(0x1ed)][k(0x1cc)]('input[data-area][data-side]')];}['ready'](){const l=j;this[l(0x1ef)](),this['_wireEvents'](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this[m(0x1c3)]??=new ResizeObserver(()=>this[m(0x1bd)]()),this['_resizeObserver'][m(0x1c7)](this),requestAnimationFrame(()=>this[m(0x1bd)]());}['disconnectedCallback'](){const n=j;this[n(0x1c3)]?.[n(0x1cb)]();}get[j(0x1da)](){const o=j;return this[o(0x1de)](this[o(0x1d2)]);}set[j(0x1da)](c){this['_values']=this['_cloneValues'](c??{}),this['_updateInputs']();}[j(0x1ce)](c,d){return cssProperties[c]?.[d];}[j(0x1d3)](c){const p=j;this[p(0x1c0)]['classList'][p(0x1b2)]('box'),this['_borderDiv']['classList'][p(0x1b2)]('box');if(!c){this['values']={};return;}const d=c[p(0x1cd)][p(0x1eb)]['getComputedStyle'](c),e={};for(const f of Object[p(0x1dc)](cssProperties)){e[f]={};for(const g of Object[p(0x1dc)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[p(0x1c2)]==p(0x1b3))this[p(0x1c0)][p(0x1b8)]['add']('box');else this['_borderDiv'][p(0x1b8)][p(0x1c1)](p(0x1dd));this[p(0x1da)]=e,this['_updateScale']();}['_wireEvents'](){const q=j;for(const c of this['_inputs']){c['addEventListener']('focus',()=>c[q(0x1f5)]()),c[q(0x1f1)]('change',()=>this[q(0x1b1)](c)),c[q(0x1f1)](q(0x1b7),d=>{const r=q;if(d[r(0x1bb)]===r(0x1af))this['_commitInput'](c),c['blur']();else d['key']===r(0x1f3)&&(this[r(0x1f4)](c),c['blur']());});}}[j(0x1b1)](c){const s=j;if(this[s(0x1f7)])return;const d=c['dataset'][s(0x1d0)],e=c[s(0x1b6)][s(0x1ad)],f=this['_values'][d]?.[e]??'',g=c['value'][s(0x1db)]();if(!this['_values'][d])this['_values'][d]={};this[s(0x1d2)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(s(0x1b0),{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0x1ce)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const t=j;this['_isRefreshing']=!![];try{for(const c of this['_inputs'])this[t(0x1f4)](c);}finally{this[t(0x1f7)]=![];}}[j(0x1f4)](c){const u=j,d=c[u(0x1b6)]['area'],e=c['dataset']['side'];c[u(0x1e0)]=this['_values'][d]?.[e]??this[u(0x1b4)];}['_getComputedProperty'](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===v(0x1e4)&&g===v(0x1d6))return this[v(0x1b4)];return g||this[v(0x1b4)];}['_cloneValues'](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0x1bd)](){const w=j;if(!this[w(0x1b9)])return;const c=this[w(0x1ae)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[w(0x1b9)]['style'][w(0x1e3)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv'][w(0x1d1)]['transform']=d<0x1?w(0x1e1)+d+')':'',this[w(0x1d1)][w(0x1ba)]=this[w(0x1b9)][w(0x1c9)]*d+'px';}}function b(c,d){c=c-0x1ad;const e=a();let f=e[c];return f;}customElements[j(0x1e6)](j(0x1f6),MetricsEditor);