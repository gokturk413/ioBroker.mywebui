function a(){const y=['margin-top','padding-left','_commitInput','value','content-box','7bAIQPQ','_parseAttributesToProperties','borderTopWidth','unsetValue','759884USqbSP','borderBottomWidth','border-top-width','right','disconnect','scale(','trim','dispatchEvent','shadowRoot','2305512rabGsg','_updateInputs','height','borderRightWidth','_cloneValues','7754MCzWba','content','marginLeft','722495CeZzKr','box-model','120TGquBC','change','box','boxSizing','_values','3380816KYXfKQ','3130Vttqnk','addEventListener','padding-bottom','margin-bottom','left','classList','_isRefreshing','style','top','position','borderLeftWidth','keys','12RjOUsx','_wireEvents','dataset','Enter','values','connectedCallback','marginRight','area','disconnectedCallback','paddingBottom','getPropertyName','_boxModelDiv','_updateInput','side','_borderDiv','_inputs','_updateScale','18afJUHq','_resizeObserver','_contentDiv','marginTop','margin-left','remove','22149fiVHUa','_getDomElement','keydown','paddingTop','querySelectorAll','width','2270213bvzeHy','margin-right','ownerDocument'];a=function(){return y;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1b7))/0x1*(-parseInt(i(0x1dd))/0x2)+parseInt(i(0x1d8))/0x3+parseInt(i(0x1cf))/0x4+-parseInt(i(0x1e0))/0x5*(-parseInt(i(0x1f4))/0x6)+parseInt(i(0x1cb))/0x7*(parseInt(i(0x1e7))/0x8)+parseInt(i(0x1bd))/0x9*(parseInt(i(0x1e8))/0xa)+-parseInt(i(0x1c3))/0xb*(parseInt(i(0x1e2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6cf74));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x1f0),'right':j(0x1d2),'bottom':'bottom','left':j(0x1ec)},'margin':{'top':j(0x1c6),'right':j(0x1c4),'bottom':j(0x1eb),'left':j(0x1bb)},'border':{'top':j(0x1d1),'right':'border-right-width','bottom':'border-bottom-width','left':'border-left-width'},'padding':{'top':'padding-top','right':'padding-right','bottom':j(0x1ea),'left':j(0x1c7)},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':j(0x1cd),'border-right-width':j(0x1db),'border-bottom-width':j(0x1d0),'border-left-width':j(0x1f2),'margin-top':j(0x1ba),'margin-right':j(0x1ac),'margin-bottom':'marginBottom','margin-left':j(0x1df),'padding-top':j(0x1c0),'padding-right':'paddingRight','padding-bottom':j(0x1af),'padding-left':'paddingLeft'};function b(c,d){c=c-0x1a8;const e=a();let f=e[c];return f;}export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x1ef)]=css`
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
  `;['property'];[j(0x1ce)]='-';[j(0x1b4)];[j(0x1b1)];[j(0x1b9)];[j(0x1b5)]=[];['_values']={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x1b4)]=this[k(0x1be)]('border'),this[k(0x1b1)]=this['_getDomElement'](k(0x1e1)),this['_contentDiv']=this['_getDomElement'](k(0x1de)),this[k(0x1b5)]=[...this[k(0x1d7)][k(0x1c1)]('input[data-area][data-side]')];}['ready'](){const l=j;this[l(0x1cc)](),this['_wireEvents'](),this[l(0x1d9)](),requestAnimationFrame(()=>this[l(0x1b6)]());}[j(0x1ab)](){const m=j;this[m(0x1b8)]??=new ResizeObserver(()=>this[m(0x1b6)]()),this[m(0x1b8)]['observe'](this),requestAnimationFrame(()=>this[m(0x1b6)]());}[j(0x1ae)](){const n=j;this[n(0x1b8)]?.[n(0x1d3)]();}get['values'](){const o=j;return this[o(0x1dc)](this[o(0x1e6)]);}set[j(0x1aa)](c){const p=j;this[p(0x1e6)]=this['_cloneValues'](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this['_contentDiv'][q(0x1ed)][q(0x1bc)](q(0x1e4)),this['_borderDiv']['classList']['remove']('box');if(!c){this['values']={};return;}const d=c[q(0x1c5)]['defaultView']['getComputedStyle'](c),e={};for(const f of Object[q(0x1f3)](cssProperties)){e[f]={};for(const g of Object[q(0x1f3)](cssProperties[f])){const h=this[q(0x1b0)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[q(0x1e5)]==q(0x1ca))this['_contentDiv'][q(0x1ed)]['add']('box');else this[q(0x1b4)]['classList']['add']('box');this['values']=e,this['_updateScale']();}[j(0x1f5)](){const r=j;for(const c of this[r(0x1b5)]){c['addEventListener']('focus',()=>c['select']()),c[r(0x1e9)](r(0x1e3),()=>this[r(0x1c8)](c)),c['addEventListener'](r(0x1bf),d=>{const s=r;if(d['key']===s(0x1a9))this[s(0x1c8)](c),c['blur']();else d['key']==='Escape'&&(this[s(0x1b2)](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this['_isRefreshing'])return;const d=c[t(0x1a8)][t(0x1ad)],e=c[t(0x1a8)][t(0x1b3)],f=this[t(0x1e6)][d]?.[e]??'',g=c['value'][t(0x1d5)]();if(!this['_values'][d])this[t(0x1e6)][d]={};this[t(0x1e6)][d][e]=g,this[t(0x1b2)](c);if(f===g)return;this[t(0x1d6)](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this['_isRefreshing']=!![];try{for(const c of this['_inputs'])this[u(0x1b2)](c);}finally{this[u(0x1ee)]=![];}}['_updateInput'](c){const v=j,d=c[v(0x1a8)]['area'],e=c[v(0x1a8)][v(0x1b3)];c[v(0x1c9)]=this['_values'][d]?.[e]??this[v(0x1ce)];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===w(0x1f1)&&g==='auto')return this[w(0x1ce)];return g||this['unsetValue'];}[j(0x1dc)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[x(0x1b1)]['style'][x(0x1c2)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv'][x(0x1ef)]['transform']=d<0x1?x(0x1d4)+d+')':'',this[x(0x1ef)][x(0x1da)]=this[x(0x1b1)]['offsetHeight']*d+'px';}}customElements['define']('node-projects-metrics-editor',MetricsEditor);