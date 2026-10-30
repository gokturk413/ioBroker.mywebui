const j=b;function b(c,d){c=c-0xc5;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x106))/0x1+-parseInt(i(0xe8))/0x2*(parseInt(i(0xeb))/0x3)+parseInt(i(0xdf))/0x4*(-parseInt(i(0xe3))/0x5)+parseInt(i(0xc5))/0x6*(parseInt(i(0x109))/0x7)+parseInt(i(0xed))/0x8*(parseInt(i(0xca))/0x9)+-parseInt(i(0x102))/0xa*(parseInt(i(0x112))/0xb)+parseInt(i(0xc6))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x46596));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0xe2),'right':'right','bottom':j(0xf7),'left':j(0x100)},'margin':{'top':j(0xef),'right':j(0x10d),'bottom':'margin-bottom','left':j(0xfa)},'border':{'top':'border-top-width','right':j(0x103),'bottom':j(0xd6),'left':j(0xf4)},'padding':{'top':'padding-top','right':'padding-right','bottom':j(0xf5),'left':'padding-left'},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':j(0xdb),'border-right-width':j(0xe6),'border-bottom-width':'borderBottomWidth','border-left-width':j(0xf2),'margin-top':'marginTop','margin-right':j(0xd8),'margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':'paddingTop','padding-right':'paddingRight','padding-bottom':j(0xd5),'padding-left':j(0xcc)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0xfd)]=css`
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
  `;['property'];['unsetValue']='-';['_borderDiv'];[j(0xd9)];[j(0xf0)];['_inputs']=[];[j(0xe0)]={};[j(0xd3)]=![];['_resizeObserver'];constructor(){const k=j;super(),this[k(0x10b)](),this[k(0xda)]=this[k(0xc8)]('border'),this['_boxModelDiv']=this[k(0xc8)]('box-model'),this['_contentDiv']=this['_getDomElement'](k(0x10e)),this['_inputs']=[...this[k(0x10c)]['querySelectorAll']('input[data-area][data-side]')];}[j(0xfc)](){const l=j;this[l(0xdd)](),this['_wireEvents'](),this[l(0xe7)](),requestAnimationFrame(()=>this[l(0x10f)]());}['connectedCallback'](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this['_updateScale']()),this[m(0xe1)]['observe'](this),requestAnimationFrame(()=>this['_updateScale']());}[j(0xcb)](){const n=j;this['_resizeObserver']?.[n(0x110)]();}get['values'](){const o=j;return this['_cloneValues'](this[o(0xe0)]);}set[j(0x111)](c){const p=j;this['_values']=this[p(0xee)](c??{}),this[p(0xe7)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0xfb)](c){const q=j;this['_contentDiv']['classList']['remove']('box'),this[q(0xda)][q(0xcd)][q(0xf3)]('box');if(!c){this['values']={};return;}const d=c['ownerDocument'][q(0xea)][q(0xf1)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this[q(0xe4)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[q(0x101)]==q(0xd2))this['_contentDiv'][q(0xcd)][q(0x108)](q(0xdc));else this['_borderDiv'][q(0xcd)][q(0x108)](q(0xdc));this[q(0x111)]=e,this[q(0x10f)]();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c[r(0xf6)](r(0xcf),()=>c['select']()),c[r(0xf6)]('change',()=>this[r(0x104)](c)),c[r(0xf6)](r(0x107),d=>{const s=r;if(d['key']==='Enter')this[s(0x104)](c),c['blur']();else d[s(0xd1)]==='Escape'&&(this['_updateInput'](c),c[s(0xc7)]());});}}['_commitInput'](c){const t=j;if(this['_isRefreshing'])return;const d=c[t(0xff)][t(0xe9)],e=c[t(0xff)][t(0xde)],f=this[t(0xe0)][d]?.[e]??'',g=c['value'][t(0xe5)]();if(!this[t(0xe0)][d])this[t(0xe0)][d]={};this[t(0xe0)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0xc9),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this[u(0xd3)]=!![];try{for(const c of this[u(0xf8)])this['_updateInput'](c);}finally{this[u(0xd3)]=![];}}['_updateInput'](c){const v=j,d=c[v(0xff)][v(0xe9)],e=c[v(0xff)]['side'];c['value']=this[v(0xe0)][d]?.[e]??this[v(0xd0)];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===w(0xd4)&&g==='auto')return this['unsetValue'];return g||this['unsetValue'];}[j(0xee)](c){const x=j,d={};for(const e of Object[x(0xd7)](c))d[e]={...c[e]};return d;}['_updateScale'](){const y=j;if(!this['_boxModelDiv'])return;const c=this[y(0x105)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[y(0xd9)]['style']['width']=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv'][y(0xfd)]['transform']=d<0x1?y(0xf9)+d+')':'',this['style'][y(0xce)]=this['_boxModelDiv'][y(0x10a)]*d+'px';}}function a(){const z=['dataset','left','boxSizing','69950DLJGLJ','border-right-width','_commitInput','clientWidth','405828LsNynS','keydown','add','7hTWOMA','offsetHeight','_restoreCachedInititalValues','shadowRoot','margin-right','content','_updateScale','disconnect','values','902CvlCMH','2121438DEEoVV','5423760ufpsko','blur','_getDomElement','value-changed','313137TOXkfo','disconnectedCallback','paddingLeft','classList','height','focus','unsetValue','key','content-box','_isRefreshing','position','paddingBottom','border-bottom-width','keys','marginRight','_boxModelDiv','_borderDiv','borderTopWidth','box','_parseAttributesToProperties','side','66208ytLtAj','_values','_resizeObserver','top','5nFwXLX','getPropertyName','trim','borderRightWidth','_updateInputs','8ocZnBh','area','defaultView','32496rAQeRl','define','120hfyZtn','_cloneValues','margin-top','_contentDiv','getComputedStyle','borderLeftWidth','remove','border-left-width','padding-bottom','addEventListener','bottom','_inputs','scale(','margin-left','refresh','ready','style','node-projects-metrics-editor'];a=function(){return z;};return a();}customElements[j(0xec)](j(0xfe),MetricsEditor);