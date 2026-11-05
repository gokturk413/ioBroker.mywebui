const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1b5))/0x1+parseInt(i(0x1ad))/0x2+-parseInt(i(0x1d2))/0x3+-parseInt(i(0x1d4))/0x4+-parseInt(i(0x1e8))/0x5+-parseInt(i(0x1bc))/0x6*(-parseInt(i(0x1b2))/0x7)+parseInt(i(0x1b9))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x727e7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':'bottom','left':'left'},'margin':{'top':j(0x1e5),'right':'margin-right','bottom':'margin-bottom','left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x1f0),'left':j(0x1c7)},'padding':{'top':j(0x1bd),'right':j(0x1dd),'bottom':'padding-bottom','left':'padding-left'},'content':{'width':'width','height':j(0x1df)}},computedStyleProperties={'border-top-width':j(0x1c9),'border-right-width':j(0x1c8),'border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':j(0x1ef),'margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':'paddingTop','padding-right':j(0x1aa),'padding-bottom':'paddingBottom','padding-left':j(0x1cc)};function a(){const y=['1669958tuejjn','dataset','area','select','_resizeObserver','822843HIUSWm','_updateInputs','addEventListener','817664xOcMMU','template','ownerDocument','keydown','13408504AKPHbb','_parseAttributesToProperties','_getDomElement','12LbsyiW','padding-top','_cloneValues','position','auto','values','property','getPropertyName','classList','border','getPropertyValue','border-left-width','borderRightWidth','borderTopWidth','trim','Escape','paddingLeft','_inputs','box-model','_commitInput','offsetHeight','focus','441042FyhKCL','refresh','2287444admIFs','unsetValue','scale(','_isRefreshing','keys','remove','value','_borderDiv','side','padding-right','_updateScale','height','_boxModelDiv','_wireEvents','defaultView','input[data-area][data-side]','value-changed','margin-top','100%','_updateInput','3703170jPmLYv','ready','width','node-projects-metrics-editor','disconnectedCallback','change','_values','marginRight','border-bottom-width','paddingRight','box','connectedCallback'];a=function(){return y;};return a();}function b(c,d){c=c-0x1aa;const e=a();let f=e[c];return f;}export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x1b6)]=html`
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
  `;[j(0x1c2)];[j(0x1d5)]='-';[j(0x1db)];[j(0x1e0)];['_contentDiv'];[j(0x1cd)]=[];['_values']={};[j(0x1d7)]=![];[j(0x1b1)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this[k(0x1bb)](k(0x1c5)),this['_boxModelDiv']=this[k(0x1bb)](k(0x1ce)),this['_contentDiv']=this[k(0x1bb)]('content'),this['_inputs']=[...this['shadowRoot']['querySelectorAll'](k(0x1e3))];}[j(0x1e9)](){const l=j;this[l(0x1ba)](),this[l(0x1e1)](),this[l(0x1b3)](),requestAnimationFrame(()=>this[l(0x1de)]());}[j(0x1ac)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this[m(0x1de)]()),this[m(0x1b1)]['observe'](this),requestAnimationFrame(()=>this[m(0x1de)]());}[j(0x1ec)](){const n=j;this[n(0x1b1)]?.['disconnect']();}get['values'](){const o=j;return this[o(0x1be)](this['_values']);}set[j(0x1c1)](c){const p=j;this[p(0x1ee)]=this['_cloneValues'](c??{}),this[p(0x1b3)]();}[j(0x1c3)](c,d){return cssProperties[c]?.[d];}[j(0x1d3)](c){const q=j;this['_contentDiv'][q(0x1c4)][q(0x1d9)]('box'),this[q(0x1db)][q(0x1c4)]['remove'](q(0x1ab));if(!c){this[q(0x1c1)]={};return;}const d=c[q(0x1b7)][q(0x1e2)]['getComputedStyle'](c),e={};for(const f of Object[q(0x1d8)](cssProperties)){e[f]={};for(const g of Object[q(0x1d8)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']=='content-box')this['_contentDiv'][q(0x1c4)]['add'](q(0x1ab));else this[q(0x1db)]['classList']['add']('box');this[q(0x1c1)]=e,this[q(0x1de)]();}[j(0x1e1)](){const r=j;for(const c of this['_inputs']){c[r(0x1b4)](r(0x1d1),()=>c[r(0x1b0)]()),c[r(0x1b4)](r(0x1ed),()=>this[r(0x1cf)](c)),c['addEventListener'](r(0x1b8),d=>{const s=r;if(d['key']==='Enter')this[s(0x1cf)](c),c['blur']();else d['key']===s(0x1cb)&&(this[s(0x1e7)](c),c['blur']());});}}[j(0x1cf)](c){const t=j;if(this[t(0x1d7)])return;const d=c['dataset']['area'],e=c[t(0x1ae)][t(0x1dc)],f=this['_values'][d]?.[e]??'',g=c[t(0x1da)][t(0x1ca)]();if(!this['_values'][d])this[t(0x1ee)][d]={};this[t(0x1ee)][d][e]=g,this[t(0x1e7)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0x1e4),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x1c3)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x1b3)](){const u=j;this[u(0x1d7)]=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this[u(0x1d7)]=![];}}['_updateInput'](c){const v=j,d=c[v(0x1ae)][v(0x1af)],e=c[v(0x1ae)]['side'];c[v(0x1da)]=this['_values'][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0x1c6)](d)||c[f];if(e===w(0x1bf)&&g===w(0x1c0))return this['unsetValue'];return g||this['unsetValue'];}['_cloneValues'](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0x1de)](){const x=j;if(!this[x(0x1e0)])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv']['style'][x(0x1ea)]=d<0x1?metricsEditorNaturalWidth+'px':x(0x1e6),this[x(0x1e0)]['style']['transform']=d<0x1?x(0x1d6)+d+')':'',this['style']['height']=this['_boxModelDiv'][x(0x1d0)]*d+'px';}}customElements['define'](j(0x1eb),MetricsEditor);