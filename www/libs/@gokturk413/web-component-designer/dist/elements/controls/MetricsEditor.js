const j=b;function a(){const x=['borderBottomWidth','_cloneValues','1126066POVOua','box','borderTopWidth','708148LgEGJF','_values','select','height','ready','8565108nEPGSD','1qyEJcM','_borderDiv','value','border','values','90fycwHB','remove','querySelectorAll','getPropertyName','_getDomElement','boxSizing','padding-left','classList','19901ScIdNl','_getComputedProperty','focus','template','marginLeft','21kBukDB','marginBottom','paddingRight','scale(','refresh','margin-right','top','_updateInput','area','position','blur','offsetHeight','Enter','_resizeObserver','6049782csCsHW','border-left-width','_wireEvents','width','borderLeftWidth','bottom','_contentDiv','defaultView','_inputs','side','add','paddingTop','box-model','_commitInput','_updateScale','style','_parseAttributesToProperties','addEventListener','content','border-bottom-width','min','_boxModelDiv','4400583HoNuXP','connectedCallback','_isRefreshing','change','3616Oiauwv','27135ceCBfm','unsetValue','input[data-area][data-side]','keys','content-box','trim','dataset'];a=function(){return x;};return a();}function b(c,d){c=c-0x1da;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1f2))/0x1*(-parseInt(i(0x1e9))/0x2)+parseInt(i(0x204))/0x3*(-parseInt(i(0x1ec))/0x4)+parseInt(i(0x1e0))/0x5+-parseInt(i(0x1f1))/0x6+parseInt(i(0x1ff))/0x7*(parseInt(i(0x1df))/0x8)+-parseInt(i(0x212))/0x9+parseInt(i(0x1f7))/0xa*(parseInt(i(0x1db))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf1704));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x20a),'right':'right','bottom':j(0x217),'left':'left'},'margin':{'top':'margin-top','right':j(0x209),'bottom':'margin-bottom','left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x225),'left':j(0x213)},'padding':{'top':'padding-top','right':'padding-right','bottom':'padding-bottom','left':j(0x1fd)},'content':{'width':j(0x215),'height':'height'}},computedStyleProperties={'border-top-width':j(0x1eb),'border-right-width':'borderRightWidth','border-bottom-width':j(0x1e7),'border-left-width':j(0x216),'margin-top':'marginTop','margin-right':'marginRight','margin-bottom':j(0x205),'margin-left':j(0x203),'padding-top':j(0x21d),'padding-right':j(0x206),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x202)]=html`
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
  `;['property'];[j(0x1e1)]='-';['_borderDiv'];[j(0x1da)];[j(0x218)];['_inputs']=[];['_values']={};[j(0x1dd)]=![];[j(0x211)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x1f3)]=this['_getDomElement'](k(0x1f5)),this[k(0x1da)]=this[k(0x1fb)](k(0x21e)),this['_contentDiv']=this['_getDomElement'](k(0x224)),this[k(0x21a)]=[...this['shadowRoot'][k(0x1f9)](k(0x1e2))];}[j(0x1f0)](){const l=j;this[l(0x222)](),this[l(0x214)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x1dc)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this[m(0x220)]()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this[m(0x220)]());}['disconnectedCallback'](){this['_resizeObserver']?.['disconnect']();}get['values'](){const n=j;return this[n(0x1e8)](this['_values']);}set['values'](c){const o=j;this[o(0x1ed)]=this[o(0x1e8)](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0x208)](c){const p=j;this[p(0x218)][p(0x1fe)][p(0x1f8)]('box'),this[p(0x1f3)][p(0x1fe)]['remove'](p(0x1ea));if(!c){this[p(0x1f6)]={};return;}const d=c['ownerDocument'][p(0x219)]['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0x1e3)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[p(0x1fc)]==p(0x1e4))this[p(0x218)]['classList']['add'](p(0x1ea));else this['_borderDiv'][p(0x1fe)][p(0x21c)](p(0x1ea));this[p(0x1f6)]=e,this['_updateScale']();}[j(0x214)](){const q=j;for(const c of this[q(0x21a)]){c[q(0x223)](q(0x201),()=>c[q(0x1ee)]()),c['addEventListener'](q(0x1de),()=>this['_commitInput'](c)),c['addEventListener']('keydown',d=>{const r=q;if(d['key']===r(0x210))this['_commitInput'](c),c[r(0x20e)]();else d['key']==='Escape'&&(this['_updateInput'](c),c['blur']());});}}[j(0x21f)](c){const s=j;if(this['_isRefreshing'])return;const d=c['dataset']['area'],e=c[s(0x1e6)][s(0x21b)],f=this['_values'][d]?.[e]??'',g=c['value'][s(0x1e5)]();if(!this[s(0x1ed)][d])this[s(0x1ed)][d]={};this[s(0x1ed)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0x1fa)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const t=j;this['_isRefreshing']=!![];try{for(const c of this[t(0x21a)])this[t(0x20b)](c);}finally{this[t(0x1dd)]=![];}}['_updateInput'](c){const u=j,d=c['dataset'][u(0x20c)],e=c[u(0x1e6)][u(0x21b)];c[u(0x1f4)]=this[u(0x1ed)][d]?.[e]??this['unsetValue'];}[j(0x200)](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===v(0x20d)&&g==='auto')return this[v(0x1e1)];return g||this[v(0x1e1)];}[j(0x1e8)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const w=j;if(!this['_boxModelDiv'])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math[w(0x226)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv']['style'][w(0x215)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv']['style']['transform']=d<0x1?w(0x207)+d+')':'',this[w(0x221)][w(0x1ef)]=this[w(0x1da)][w(0x20f)]*d+'px';}}customElements['define']('node-projects-metrics-editor',MetricsEditor);