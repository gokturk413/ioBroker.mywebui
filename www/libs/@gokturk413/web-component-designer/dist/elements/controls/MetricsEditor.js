const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xf3))/0x1+parseInt(i(0xa6))/0x2*(parseInt(i(0xe2))/0x3)+parseInt(i(0xd4))/0x4*(parseInt(i(0xe3))/0x5)+-parseInt(i(0xd8))/0x6+parseInt(i(0xf4))/0x7+-parseInt(i(0xaf))/0x8+parseInt(i(0xbc))/0x9*(parseInt(i(0xf5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbe48b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0xdd),'left':j(0xb0)},'margin':{'top':j(0xf0),'right':j(0xb5),'bottom':j(0xc3),'left':j(0xa9)},'border':{'top':j(0xe1),'right':'border-right-width','bottom':j(0xed),'left':j(0xd0)},'padding':{'top':'padding-top','right':'padding-right','bottom':j(0xe5),'left':'padding-left'},'content':{'width':j(0xa5),'height':j(0xc6)}},computedStyleProperties={'border-top-width':j(0xc5),'border-right-width':j(0xb1),'border-bottom-width':j(0xc2),'border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':'paddingTop','padding-right':j(0xda),'padding-bottom':j(0xe9),'padding-left':j(0xec)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0xb7)]=css`
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
  `;static [j(0xbf)]=html`
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
  `;[j(0xdb)];['unsetValue']='-';['_borderDiv'];['_boxModelDiv'];[j(0xe0)];['_inputs']=[];[j(0xcc)]={};[j(0xbe)]=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0xd7)]=this[k(0xdf)](k(0xb9)),this['_boxModelDiv']=this[k(0xdf)](k(0xba)),this['_contentDiv']=this['_getDomElement'](k(0xcb)),this['_inputs']=[...this[k(0xd6)][k(0xb8)](k(0xb2))];}['ready'](){const l=j;this['_parseAttributesToProperties'](),this['_wireEvents'](),this[l(0xcd)](),requestAnimationFrame(()=>this['_updateScale']());}[j(0xe6)](){const m=j;this[m(0xa8)]??=new ResizeObserver(()=>this[m(0xad)]()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0xc4)]();}get['values'](){const o=j;return this[o(0xd3)](this[o(0xcc)]);}set[j(0xb3)](c){const p=j;this[p(0xcc)]=this['_cloneValues'](c??{}),this[p(0xcd)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0xe8)](c){const q=j;this[q(0xe0)][q(0xa3)][q(0xde)](q(0xbd)),this['_borderDiv']['classList']['remove']('box');if(!c){this['values']={};return;}const d=c[q(0xee)][q(0xb4)]['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this[q(0xc9)](f,g);e[f][g]=this[q(0xc1)](d,h,f);}}if(d['boxSizing']==q(0xbb))this[q(0xe0)]['classList'][q(0xcf)]('box');else this['_borderDiv']['classList'][q(0xcf)]('box');this[q(0xb3)]=e,this['_updateScale']();}['_wireEvents'](){const r=j;for(const c of this[r(0xd1)]){c[r(0xca)]('focus',()=>c['select']()),c['addEventListener']('change',()=>this[r(0xf6)](c)),c[r(0xca)](r(0xf2),d=>{const s=r;if(d[s(0xae)]===s(0xa7))this[s(0xf6)](c),c['blur']();else d['key']===s(0xef)&&(this['_updateInput'](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this['_isRefreshing'])return;const d=c['dataset'][t(0xb6)],e=c['dataset'][t(0xd2)],f=this[t(0xcc)][d]?.[e]??'',g=c['value'][t(0xea)]();if(!this['_values'][d])this[t(0xcc)][d]={};this[t(0xcc)][d][e]=g,this['_updateInput'](c);if(f===g)return;this[t(0xdc)](new CustomEvent(t(0xc7),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0xc9)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this[u(0xbe)]=!![];try{for(const c of this[u(0xd1)])this[u(0xab)](c);}finally{this[u(0xbe)]=![];}}[j(0xab)](c){const v=j,d=c['dataset']['area'],e=c[v(0xc8)][v(0xd2)];c[v(0xd5)]=this[v(0xcc)][d]?.[e]??this['unsetValue'];}[j(0xc1)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===w(0xe7)&&g===w(0xa4))return this[w(0xeb)];return g||this[w(0xeb)];}[j(0xd3)](c){const x=j,d={};for(const e of Object[x(0xf1)](c))d[e]={...c[e]};return d;}['_updateScale'](){const y=j;if(!this[y(0xe4)])return;const c=this[y(0xd9)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[y(0xe4)][y(0xb7)]['width']=d<0x1?metricsEditorNaturalWidth+'px':y(0xce),this[y(0xe4)]['style'][y(0xc0)]=d<0x1?y(0xac)+d+')':'',this['style'][y(0xc6)]=this['_boxModelDiv']['offsetHeight']*d+'px';}}function b(c,d){c=c-0xa3;const e=a();let f=e[c];return f;}customElements[j(0xaa)]('node-projects-metrics-editor',MetricsEditor);function a(){const z=['style','querySelectorAll','border','box-model','content-box','207bGYyYZ','box','_isRefreshing','template','transform','_getComputedProperty','borderBottomWidth','margin-bottom','disconnect','borderTopWidth','height','value-changed','dataset','getPropertyName','addEventListener','content','_values','_updateInputs','100%','add','border-left-width','_inputs','side','_cloneValues','246028aDznSz','value','shadowRoot','_borderDiv','8315976HksiUG','clientWidth','paddingRight','property','dispatchEvent','bottom','remove','_getDomElement','_contentDiv','border-top-width','2100207VZHxCj','100DdoNeb','_boxModelDiv','padding-bottom','connectedCallback','position','refresh','paddingBottom','trim','unsetValue','paddingLeft','border-bottom-width','ownerDocument','Escape','margin-top','keys','keydown','893805ELQvIN','8730393enlZyc','8980piRpmp','_commitInput','classList','auto','width','2nCipMT','Enter','_resizeObserver','margin-left','define','_updateInput','scale(','_updateScale','key','1110864GWAskB','left','borderRightWidth','input[data-area][data-side]','values','defaultView','margin-right','area'];a=function(){return z;};return a();}