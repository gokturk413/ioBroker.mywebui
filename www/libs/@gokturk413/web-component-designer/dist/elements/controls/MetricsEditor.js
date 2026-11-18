const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x14a))/0x1+parseInt(i(0x11e))/0x2+parseInt(i(0x126))/0x3+-parseInt(i(0x138))/0x4*(-parseInt(i(0x12c))/0x5)+-parseInt(i(0x124))/0x6+-parseInt(i(0x143))/0x7+parseInt(i(0x154))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe2b91));function b(c,d){c=c-0x118;const e=a();let f=e[c];return f;}function a(){const z=['keys','padding-top','box','183356ALAKQH','_updateInputs','right','unsetValue','getPropertyName','borderRightWidth','6612090lhUtDq','position','235209fiWnot','_contentDiv','remove','offsetHeight','_commitInput','querySelectorAll','5gDXhFj','_wireEvents','_isRefreshing','trim','padding-bottom','paddingRight','_restoreCachedInititalValues','side','bottom','_borderDiv','margin-bottom','_resizeObserver','4759896mVWHyk','_boxModelDiv','_cloneValues','add','shadowRoot','dataset','_parseAttributesToProperties','_values','disconnect','box-model','border-top-width','11939725EZaEra','value-changed','keydown','_updateInput','property','margin-left','template','1250487ncOhOA','_updateScale','refresh','marginLeft','transform','width','marginRight','input[data-area][data-side]','Enter','addEventListener','29014232buxcAT','define','height','classList','paddingTop','value','select','style','getComputedStyle','blur','min','values'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':j(0x120),'bottom':j(0x134),'left':'left'},'margin':{'top':'margin-top','right':'margin-right','bottom':j(0x136),'left':j(0x148)},'border':{'top':j(0x142),'right':'border-right-width','bottom':'border-bottom-width','left':'border-left-width'},'padding':{'top':j(0x11c),'right':'padding-right','bottom':j(0x130),'left':'padding-left'},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0x123),'border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':j(0x150),'margin-bottom':'marginBottom','margin-left':j(0x14d),'padding-top':j(0x158),'padding-right':j(0x131),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x149)]=html`
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
  `;[j(0x147)];[j(0x121)]='-';[j(0x135)];[j(0x139)];[j(0x127)];['_inputs']=[];['_values']={};['_isRefreshing']=![];[j(0x137)];constructor(){const k=j;super(),this[k(0x132)](),this[k(0x135)]=this['_getDomElement']('border'),this['_boxModelDiv']=this['_getDomElement'](k(0x141)),this['_contentDiv']=this['_getDomElement']('content'),this['_inputs']=[...this[k(0x13c)][k(0x12b)](k(0x151))];}['ready'](){const l=j;this[l(0x13e)](),this[l(0x12d)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this[m(0x137)]??=new ResizeObserver(()=>this['_updateScale']()),this[m(0x137)]['observe'](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0x140)]();}get['values'](){const o=j;return this['_cloneValues'](this[o(0x13f)]);}set['values'](c){const p=j;this['_values']=this['_cloneValues'](c??{}),this[p(0x11f)]();}[j(0x122)](c,d){return cssProperties[c]?.[d];}[j(0x14c)](c){const q=j;this[q(0x127)]['classList'][q(0x128)]('box'),this['_borderDiv']['classList']['remove']('box');if(!c){this['values']={};return;}const d=c['ownerDocument']['defaultView'][q(0x15c)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[q(0x11b)](cssProperties[f])){const h=this[q(0x122)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']=='content-box')this['_contentDiv'][q(0x157)][q(0x13b)]('box');else this['_borderDiv'][q(0x157)]['add'](q(0x11d));this[q(0x11a)]=e,this[q(0x14b)]();}[j(0x12d)](){const r=j;for(const c of this['_inputs']){c['addEventListener']('focus',()=>c[r(0x15a)]()),c[r(0x153)]('change',()=>this[r(0x12a)](c)),c['addEventListener'](r(0x145),d=>{const s=r;if(d['key']===s(0x152))this['_commitInput'](c),c['blur']();else d['key']==='Escape'&&(this[s(0x146)](c),c[s(0x118)]());});}}['_commitInput'](c){const t=j;if(this['_isRefreshing'])return;const d=c[t(0x13d)]['area'],e=c[t(0x13d)][t(0x133)],f=this['_values'][d]?.[e]??'',g=c[t(0x159)][t(0x12f)]();if(!this[t(0x13f)][d])this['_values'][d]={};this[t(0x13f)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0x144),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x122)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x11f)](){const u=j;this[u(0x12e)]=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}['_updateInput'](c){const v=j,d=c['dataset']['area'],e=c[v(0x13d)]['side'];c[v(0x159)]=this[v(0x13f)][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===w(0x125)&&g==='auto')return this[w(0x121)];return g||this[w(0x121)];}[j(0x13a)](c){const x=j,d={};for(const e of Object[x(0x11b)](c))d[e]={...c[e]};return d;}['_updateScale'](){const y=j;if(!this['_boxModelDiv'])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math[y(0x119)](0x1,c/metricsEditorNaturalWidth);this[y(0x139)][y(0x15b)][y(0x14f)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv']['style'][y(0x14e)]=d<0x1?'scale('+d+')':'',this['style'][y(0x156)]=this['_boxModelDiv'][y(0x129)]*d+'px';}}customElements[j(0x155)]('node-projects-metrics-editor',MetricsEditor);