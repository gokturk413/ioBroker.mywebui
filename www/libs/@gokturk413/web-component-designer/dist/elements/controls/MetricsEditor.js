function b(c,d){c=c-0x1e1;const e=a();let f=e[c];return f;}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x208))/0x1*(-parseInt(i(0x1f3))/0x2)+parseInt(i(0x201))/0x3*(parseInt(i(0x1e6))/0x4)+parseInt(i(0x203))/0x5+parseInt(i(0x202))/0x6+-parseInt(i(0x1e9))/0x7*(parseInt(i(0x1fd))/0x8)+parseInt(i(0x1fc))/0x9*(parseInt(i(0x211))/0xa)+parseInt(i(0x210))/0xb*(-parseInt(i(0x22a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbd526));function a(){const x=['_parseAttributesToProperties','_borderDiv','blur','addEventListener','_cloneValues','_updateInput','change','dispatchEvent','position','keys','_values','input[data-area][data-side]','add','marginRight','property','24LLkJkt','margin-left','node-projects-metrics-editor','getPropertyName','paddingLeft','style','28HmbdAb','dataset','transform','231dbYpvz','borderLeftWidth','_contentDiv','border','connectedCallback','key','Escape','_inputs','border-left-width','refresh','2evtwBj','bottom','_wireEvents','paddingBottom','querySelectorAll','auto','boxSizing','border-top-width','values','81207KAmnFU','264448qeWjTy','_updateScale','classList','_commitInput','518547upjAdM','3036942ygHIBW','3106725ELcfge','_isRefreshing','_getComputedProperty','remove','Enter','1356493rMKGRZ','ready','_boxModelDiv','100%','min','_getDomElement','marginBottom','unsetValue','16106387mKjjXr','1220naqdUf','shadowRoot','box','define','_resizeObserver','observe','borderTopWidth','select','margin-top','getComputedStyle'];a=function(){return x;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0x1f4),'left':'left'},'margin':{'top':j(0x219),'right':'margin-right','bottom':'margin-bottom','left':j(0x1e1)},'border':{'top':j(0x1fa),'right':'border-right-width','bottom':'border-bottom-width','left':j(0x1f1)},'padding':{'top':'padding-top','right':'padding-right','bottom':'padding-bottom','left':'padding-left'},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':j(0x217),'border-right-width':'borderRightWidth','border-bottom-width':'borderBottomWidth','border-left-width':j(0x1ea),'margin-top':'marginTop','margin-right':j(0x228),'margin-bottom':j(0x20e),'margin-left':'marginLeft','padding-top':'paddingTop','padding-right':'paddingRight','padding-bottom':j(0x1f6),'padding-left':j(0x1e4)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[j(0x229)];[j(0x20f)]='-';['_borderDiv'];[j(0x20a)];[j(0x1eb)];['_inputs']=[];[j(0x225)]={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x21c)]=this[k(0x20d)](k(0x1ec)),this[k(0x20a)]=this[k(0x20d)]('box-model'),this['_contentDiv']=this['_getDomElement']('content'),this['_inputs']=[...this[k(0x212)][k(0x1f7)](k(0x226))];}[j(0x209)](){const l=j;this[l(0x21b)](),this[l(0x1f5)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x1ed)](){const m=j;this[m(0x215)]??=new ResizeObserver(()=>this[m(0x1fe)]()),this[m(0x215)][m(0x216)](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this[n(0x215)]?.['disconnect']();}get[j(0x1fb)](){return this['_cloneValues'](this['_values']);}set['values'](c){const o=j;this['_values']=this[o(0x21f)](c??{}),this['_updateInputs']();}[j(0x1e3)](c,d){return cssProperties[c]?.[d];}[j(0x1f2)](c){const p=j;this['_contentDiv'][p(0x1ff)]['remove'](p(0x213)),this[p(0x21c)]['classList'][p(0x206)](p(0x213));if(!c){this[p(0x1fb)]={};return;}const d=c['ownerDocument']['defaultView'][p(0x21a)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0x224)](cssProperties[f])){const h=this[p(0x1e3)](f,g);e[f][g]=this[p(0x205)](d,h,f);}}if(d[p(0x1f9)]=='content-box')this['_contentDiv'][p(0x1ff)]['add']('box');else this[p(0x21c)]['classList'][p(0x227)]('box');this[p(0x1fb)]=e,this['_updateScale']();}[j(0x1f5)](){const q=j;for(const c of this['_inputs']){c[q(0x21e)]('focus',()=>c[q(0x218)]()),c['addEventListener'](q(0x221),()=>this['_commitInput'](c)),c[q(0x21e)]('keydown',d=>{const r=q;if(d['key']===r(0x207))this[r(0x200)](c),c[r(0x21d)]();else d[r(0x1ee)]===r(0x1ef)&&(this[r(0x220)](c),c[r(0x21d)]());});}}[j(0x200)](c){const s=j;if(this['_isRefreshing'])return;const d=c['dataset']['area'],e=c[s(0x1e7)]['side'],f=this['_values'][d]?.[e]??'',g=c['value']['trim']();if(!this['_values'][d])this[s(0x225)][d]={};this['_values'][d][e]=g,this[s(0x220)](c);if(f===g)return;this[s(0x222)](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0x1e3)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const t=j;this[t(0x204)]=!![];try{for(const c of this[t(0x1f0)])this['_updateInput'](c);}finally{this[t(0x204)]=![];}}[j(0x220)](c){const u=j,d=c['dataset']['area'],e=c[u(0x1e7)]['side'];c['value']=this['_values'][d]?.[e]??this['unsetValue'];}[j(0x205)](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===v(0x223)&&g===v(0x1f8))return this['unsetValue'];return g||this[v(0x20f)];}[j(0x21f)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0x1fe)](){const w=j;if(!this[w(0x20a)])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math[w(0x20c)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv'][w(0x1e5)]['width']=d<0x1?metricsEditorNaturalWidth+'px':w(0x20b),this[w(0x20a)]['style'][w(0x1e8)]=d<0x1?'scale('+d+')':'',this[w(0x1e5)]['height']=this[w(0x20a)]['offsetHeight']*d+'px';}}customElements[j(0x214)](j(0x1e2),MetricsEditor);