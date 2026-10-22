const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1ce))/0x1+-parseInt(i(0x19a))/0x2*(parseInt(i(0x193))/0x3)+-parseInt(i(0x1d4))/0x4*(parseInt(i(0x1dc))/0x5)+parseInt(i(0x19f))/0x6+parseInt(i(0x1cd))/0x7+-parseInt(i(0x1cf))/0x8+parseInt(i(0x195))/0x9*(parseInt(i(0x1b2))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9e68f));function b(c,d){c=c-0x18c;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x1d3),'right':j(0x1a7),'bottom':j(0x1da),'left':j(0x1be)},'margin':{'top':'margin-top','right':'margin-right','bottom':j(0x1c8),'left':'margin-left'},'border':{'top':'border-top-width','right':j(0x1b6),'bottom':j(0x1c6),'left':j(0x1c3)},'padding':{'top':j(0x1d1),'right':j(0x1af),'bottom':j(0x1bf),'left':j(0x190)},'content':{'width':j(0x19c),'height':j(0x18e)}},computedStyleProperties={'border-top-width':j(0x19b),'border-right-width':j(0x1c1),'border-bottom-width':'borderBottomWidth','border-left-width':j(0x1b0),'margin-top':j(0x1dd),'margin-right':'marginRight','margin-bottom':j(0x1a5),'margin-left':j(0x1d0),'padding-top':'paddingTop','padding-right':j(0x1bc),'padding-bottom':'paddingBottom','padding-left':j(0x1b7)};function a(){const y=['keys','border-left-width','_updateInputs','addEventListener','border-bottom-width','focus','margin-bottom','key','getPropertyName','template','_cloneValues','4905894ZkJGif','709209zMKSlN','2473064eiKEol','marginLeft','padding-top','area','top','8636HzHPSk','ownerDocument','content-box','style','dispatchEvent','dataset','bottom','box','2180Qgtshk','marginTop','transform','value','height','refresh','padding-left','_getDomElement','define','2955nFhiFZ','_contentDiv','45eBLgtz','trim','disconnect','_commitInput','border','1374APpKZU','borderTopWidth','width','remove','_parseAttributesToProperties','5890458ZNZFEo','values','_isRefreshing','side','_resizeObserver','_inputs','marginBottom','ready','right','_boxModelDiv','observe','unsetValue','_borderDiv','classList','_updateScale','content','padding-right','borderLeftWidth','add','368410XIRGjW','shadowRoot','_getComputedProperty','property','border-right-width','paddingLeft','boxSizing','input[data-area][data-side]','_values','value-changed','paddingRight','100%','left','padding-bottom','scale(','borderRightWidth'];a=function(){return y;};return a();}export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x1d7)]=css`
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
  `;static [j(0x1cb)]=html`
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
  `;[j(0x1b5)];[j(0x1aa)]='-';[j(0x1ab)];[j(0x1a8)];['_contentDiv'];['_inputs']=[];['_values']={};[j(0x1a1)]=![];[j(0x1a3)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x1ab)]=this['_getDomElement'](k(0x199)),this['_boxModelDiv']=this['_getDomElement']('box-model'),this[k(0x194)]=this[k(0x191)](k(0x1ae)),this['_inputs']=[...this[k(0x1b3)]['querySelectorAll'](k(0x1b9))];}[j(0x1a6)](){const l=j;this[l(0x19e)](),this['_wireEvents'](),this[l(0x1c4)](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this[m(0x1ad)]()),this['_resizeObserver'][m(0x1a9)](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this[n(0x1a3)]?.[n(0x197)]();}get[j(0x1a0)](){const o=j;return this[o(0x1cc)](this[o(0x1ba)]);}set['values'](c){const p=j;this['_values']=this[p(0x1cc)](c??{}),this[p(0x1c4)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0x18f)](c){const q=j;this[q(0x194)]['classList']['remove']('box'),this['_borderDiv'][q(0x1ac)][q(0x19d)](q(0x1db));if(!c){this[q(0x1a0)]={};return;}const d=c[q(0x1d5)]['defaultView']['getComputedStyle'](c),e={};for(const f of Object[q(0x1c2)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[q(0x1b8)]==q(0x1d6))this['_contentDiv'][q(0x1ac)][q(0x1b1)]('box');else this['_borderDiv'][q(0x1ac)]['add'](q(0x1db));this['values']=e,this[q(0x1ad)]();}['_wireEvents'](){const r=j;for(const c of this[r(0x1a4)]){c['addEventListener'](r(0x1c7),()=>c['select']()),c[r(0x1c5)]('change',()=>this[r(0x198)](c)),c[r(0x1c5)]('keydown',d=>{const s=r;if(d[s(0x1c9)]==='Enter')this[s(0x198)](c),c['blur']();else d[s(0x1c9)]==='Escape'&&(this['_updateInput'](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this[t(0x1a1)])return;const d=c['dataset'][t(0x1d2)],e=c[t(0x1d9)][t(0x1a2)],f=this['_values'][d]?.[e]??'',g=c[t(0x18d)][t(0x196)]();if(!this[t(0x1ba)][d])this[t(0x1ba)][d]={};this['_values'][d][e]=g,this['_updateInput'](c);if(f===g)return;this[t(0x1d8)](new CustomEvent(t(0x1bb),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x1ca)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this['_isRefreshing']=!![];try{for(const c of this[u(0x1a4)])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}['_updateInput'](c){const v=j,d=c['dataset'][v(0x1d2)],e=c['dataset']['side'];c['value']=this[v(0x1ba)][d]?.[e]??this[v(0x1aa)];}[j(0x1b4)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g==='auto')return this['unsetValue'];return g||this[w(0x1aa)];}[j(0x1cc)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0x1ad)](){const x=j;if(!this[x(0x1a8)])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[x(0x1a8)][x(0x1d7)]['width']=d<0x1?metricsEditorNaturalWidth+'px':x(0x1bd),this[x(0x1a8)][x(0x1d7)][x(0x18c)]=d<0x1?x(0x1c0)+d+')':'',this[x(0x1d7)]['height']=this['_boxModelDiv']['offsetHeight']*d+'px';}}customElements[j(0x192)]('node-projects-metrics-editor',MetricsEditor);