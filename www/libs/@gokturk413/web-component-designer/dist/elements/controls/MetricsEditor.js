const j=b;function a(){const y=['input[data-area][data-side]','keys','values','getPropertyValue','transform','marginTop','width','top','_values','side','value-changed','key','min','bottom','border-top-width','570dzBnDx','select','padding-left','26862ZLXosm','_resizeObserver','blur','paddingRight','_borderDiv','_wireEvents','remove','box','padding-right','_boxModelDiv','border-right-width','1014ubbLzC','margin-top','auto','border-left-width','_commitInput','shadowRoot','580491LvyKtt','focus','getComputedStyle','defaultView','3871LGwceQ','left','trim','6032DFoGhd','getPropertyName','_parseAttributesToProperties','_inputs','_getDomElement','unsetValue','29292ZnegXt','keydown','property','10417ponErm','margin-bottom','136VtlyXn','_isRefreshing','marginRight','border-bottom-width','observe','node-projects-metrics-editor','template','dataset','borderTopWidth','_cloneValues','270ZjiLvF','_updateInput','margin-left','650414sKNTGG','9903040gbVIkA','clientWidth','area','disconnect'];a=function(){return y;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1f3))/0x1+parseInt(i(0x1f0))/0x2*(parseInt(i(0x20a))/0x3)+parseInt(i(0x222))/0x4*(-parseInt(i(0x207))/0x5)+parseInt(i(0x215))/0x6*(parseInt(i(0x21f))/0x7)+-parseInt(i(0x22d))/0x8*(parseInt(i(0x21b))/0x9)+-parseInt(i(0x1f4))/0xa+parseInt(i(0x22b))/0xb*(parseInt(i(0x228))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xac0f9));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x1ff),'right':'right','bottom':j(0x205),'left':j(0x220)},'margin':{'top':j(0x216),'right':'margin-right','bottom':j(0x22c),'left':j(0x1f2)},'border':{'top':j(0x206),'right':j(0x214),'bottom':j(0x230),'left':j(0x218)},'padding':{'top':'padding-top','right':j(0x212),'bottom':'padding-bottom','left':j(0x209)},'content':{'width':j(0x1fe),'height':'height'}},computedStyleProperties={'border-top-width':j(0x1ee),'border-right-width':'borderRightWidth','border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':j(0x1fd),'margin-right':j(0x22f),'margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':'paddingTop','padding-right':j(0x20d),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};function b(c,d){c=c-0x1ed;const e=a();let f=e[c];return f;}export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x233)]=html`
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
  `;[j(0x22a)];['unsetValue']='-';['_borderDiv'];[j(0x213)];['_contentDiv'];[j(0x225)]=[];['_values']={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x20e)]=this['_getDomElement']('border'),this[k(0x213)]=this['_getDomElement']('box-model'),this['_contentDiv']=this[k(0x226)]('content'),this['_inputs']=[...this[k(0x21a)]['querySelectorAll'](k(0x1f8))];}['ready'](){const l=j;this[l(0x224)](),this[l(0x20f)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this[m(0x20b)]??=new ResizeObserver(()=>this['_updateScale']()),this[m(0x20b)][m(0x231)](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0x1f7)]();}get['values'](){const o=j;return this[o(0x1ef)](this[o(0x200)]);}set[j(0x1fa)](c){const p=j;this[p(0x200)]=this['_cloneValues'](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this['_contentDiv']['classList'][q(0x210)]('box'),this['_borderDiv']['classList'][q(0x210)](q(0x211));if(!c){this[q(0x1fa)]={};return;}const d=c['ownerDocument'][q(0x21e)][q(0x21d)](c),e={};for(const f of Object[q(0x1f9)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this[q(0x223)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']=='content-box')this['_contentDiv']['classList']['add'](q(0x211));else this['_borderDiv']['classList']['add']('box');this[q(0x1fa)]=e,this['_updateScale']();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c['addEventListener'](r(0x21c),()=>c[r(0x208)]()),c['addEventListener']('change',()=>this['_commitInput'](c)),c['addEventListener'](r(0x229),d=>{const s=r;if(d['key']==='Enter')this[s(0x219)](c),c[s(0x20c)]();else d[s(0x203)]==='Escape'&&(this['_updateInput'](c),c['blur']());});}}[j(0x219)](c){const t=j;if(this[t(0x22e)])return;const d=c['dataset']['area'],e=c[t(0x1ed)]['side'],f=this['_values'][d]?.[e]??'',g=c['value'][t(0x221)]();if(!this[t(0x200)][d])this['_values'][d]={};this[t(0x200)][d][e]=g,this[t(0x1f1)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0x202),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this['_isRefreshing']=!![];try{for(const c of this[u(0x225)])this[u(0x1f1)](c);}finally{this[u(0x22e)]=![];}}['_updateInput'](c){const v=j,d=c['dataset'][v(0x1f6)],e=c[v(0x1ed)][v(0x201)];c['value']=this[v(0x200)][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0x1fb)](d)||c[f];if(e==='position'&&g===w(0x217))return this['unsetValue'];return g||this[w(0x227)];}[j(0x1ef)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this[x(0x213)])return;const c=this[x(0x1f5)];if(c<=0x0)return;const d=Math[x(0x204)](0x1,c/metricsEditorNaturalWidth);this[x(0x213)]['style'][x(0x1fe)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv']['style'][x(0x1fc)]=d<0x1?'scale('+d+')':'',this['style']['height']=this['_boxModelDiv']['offsetHeight']*d+'px';}}customElements['define'](j(0x232),MetricsEditor);