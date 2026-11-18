function a(){const y=['addEventListener','disconnect','value-changed','querySelectorAll','value','_contentDiv','16gACNgz','marginRight','45528864mynSIq','auto','paddingLeft','273xvKyDL','left','dataset','marginTop','3468168RGmhxI','define','min','6xjhpbk','_updateInput','box','_parseAttributesToProperties','margin-right','values','162zUzlMg','57352CGScYO','unsetValue','119174YBGnaf','550pQjwiR','style','padding-right','clientWidth','100%','select','border-right-width','offsetHeight','_getDomElement','keys','content-box','paddingBottom','_wireEvents','_values','_updateScale','_resizeObserver','_updateInputs','trim','413472wdRMvd','_restoreCachedInititalValues','getPropertyName','key','paddingRight','shadowRoot','property','padding-top','node-projects-metrics-editor','_commitInput','classList','_isRefreshing','defaultView','remove','blur','keydown','_borderDiv','borderTopWidth','border-left-width','focus','borderLeftWidth','input[data-area][data-side]','_boxModelDiv','disconnectedCallback','253535CTYBXh','_inputs','height','borderBottomWidth','5175254MylYbC','borderRightWidth','padding-left','_cloneValues'];a=function(){return y;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xf3))/0x1*(-parseInt(i(0x125))/0x2)+-parseInt(i(0x11e))/0x3*(-parseInt(i(0x12c))/0x4)+-parseInt(i(0x10b))/0x5*(-parseInt(i(0x12b))/0x6)+-parseInt(i(0x10f))/0x7+parseInt(i(0x119))/0x8*(parseInt(i(0x122))/0x9)+parseInt(i(0x12f))/0xa*(parseInt(i(0x12e))/0xb)+-parseInt(i(0x11b))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb67b3));function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':'bottom','left':j(0x11f)},'margin':{'top':'margin-top','right':j(0x129),'bottom':'margin-bottom','left':'margin-left'},'border':{'top':'border-top-width','right':j(0x135),'bottom':'border-bottom-width','left':j(0x105)},'padding':{'top':j(0xfa),'right':j(0x131),'bottom':'padding-bottom','left':j(0x111)},'content':{'width':'width','height':j(0x10d)}},computedStyleProperties={'border-top-width':j(0x104),'border-right-width':j(0x110),'border-bottom-width':j(0x10e),'border-left-width':j(0x107),'margin-top':j(0x121),'margin-right':j(0x11a),'margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':'paddingTop','padding-right':j(0xf7),'padding-bottom':j(0xec),'padding-left':j(0x11d)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x130)]=css`
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
  `;[j(0xf9)];['unsetValue']='-';[j(0x103)];[j(0x109)];['_contentDiv'];[j(0x10c)]=[];['_values']={};['_isRefreshing']=![];[j(0xf0)];constructor(){const k=j;super(),this[k(0xf4)](),this['_borderDiv']=this[k(0xe9)]('border'),this[k(0x109)]=this['_getDomElement']('box-model'),this[k(0x118)]=this['_getDomElement']('content'),this['_inputs']=[...this[k(0xf8)][k(0x116)](k(0x108))];}['ready'](){const l=j;this[l(0x128)](),this['_wireEvents'](),this[l(0xf1)](),requestAnimationFrame(()=>this[l(0xef)]());}['connectedCallback'](){const m=j;this[m(0xf0)]??=new ResizeObserver(()=>this[m(0xef)]()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this['_updateScale']());}[j(0x10a)](){const n=j;this['_resizeObserver']?.[n(0x114)]();}get[j(0x12a)](){const o=j;return this['_cloneValues'](this[o(0xee)]);}set['values'](c){this['_values']=this['_cloneValues'](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const p=j;this[p(0x118)][p(0xfd)]['remove'](p(0x127)),this['_borderDiv'][p(0xfd)][p(0x100)](p(0x127));if(!c){this[p(0x12a)]={};return;}const d=c['ownerDocument'][p(0xff)]['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0xea)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']==p(0xeb))this[p(0x118)]['classList']['add']('box');else this['_borderDiv'][p(0xfd)]['add']('box');this[p(0x12a)]=e,this[p(0xef)]();}[j(0xed)](){const q=j;for(const c of this[q(0x10c)]){c['addEventListener'](q(0x106),()=>c[q(0x134)]()),c[q(0x113)]('change',()=>this['_commitInput'](c)),c['addEventListener'](q(0x102),d=>{const r=q;if(d['key']==='Enter')this['_commitInput'](c),c['blur']();else d[r(0xf6)]==='Escape'&&(this['_updateInput'](c),c[r(0x101)]());});}}[j(0xfc)](c){const s=j;if(this[s(0xfe)])return;const d=c['dataset']['area'],e=c['dataset']['side'],f=this['_values'][d]?.[e]??'',g=c[s(0x117)][s(0xf2)]();if(!this[s(0xee)][d])this[s(0xee)][d]={};this[s(0xee)][d][e]=g,this[s(0x126)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(s(0x115),{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0xf5)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const t=j;this['_isRefreshing']=!![];try{for(const c of this[t(0x10c)])this[t(0x126)](c);}finally{this[t(0xfe)]=![];}}['_updateInput'](c){const u=j,d=c[u(0x120)]['area'],e=c['dataset']['side'];c[u(0x117)]=this['_values'][d]?.[e]??this[u(0x12d)];}['_getComputedProperty'](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g===v(0x11c))return this['unsetValue'];return g||this[v(0x12d)];}[j(0x112)](c){const w=j,d={};for(const e of Object[w(0xea)](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0x132)];if(c<=0x0)return;const d=Math[x(0x124)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv'][x(0x130)]['width']=d<0x1?metricsEditorNaturalWidth+'px':x(0x133),this['_boxModelDiv']['style']['transform']=d<0x1?'scale('+d+')':'',this[x(0x130)][x(0x10d)]=this['_boxModelDiv'][x(0x136)]*d+'px';}}customElements[j(0x123)](j(0xfb),MetricsEditor);