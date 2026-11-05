function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x17a))/0x1*(parseInt(i(0x181))/0x2)+parseInt(i(0x141))/0x3*(parseInt(i(0x15b))/0x4)+parseInt(i(0x13a))/0x5*(-parseInt(i(0x14b))/0x6)+-parseInt(i(0x177))/0x7*(-parseInt(i(0x182))/0x8)+-parseInt(i(0x165))/0x9*(parseInt(i(0x15d))/0xa)+-parseInt(i(0x161))/0xb+parseInt(i(0x146))/0xc*(parseInt(i(0x147))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x83a58));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0x16e),'left':j(0x17f)},'margin':{'top':j(0x184),'right':'margin-right','bottom':'margin-bottom','left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x13f),'left':j(0x153)},'padding':{'top':'padding-top','right':j(0x160),'bottom':'padding-bottom','left':j(0x178)},'content':{'width':j(0x175),'height':j(0x17d)}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0x145),'border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':j(0x158),'margin-right':j(0x16a),'margin-bottom':'marginBottom','margin-left':j(0x16c),'padding-top':j(0x164),'padding-right':j(0x151),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x180)]=html`
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
  `;['property'];[j(0x16f)]='-';[j(0x15a)];[j(0x154)];[j(0x15e)];[j(0x14d)]=[];['_values']={};['_isRefreshing']=![];[j(0x157)];constructor(){const k=j;super(),this[k(0x163)](),this['_borderDiv']=this['_getDomElement']('border'),this[k(0x154)]=this['_getDomElement'](k(0x16d)),this[k(0x15e)]=this[k(0x149)](k(0x171)),this[k(0x14d)]=[...this['shadowRoot'][k(0x172)]('input[data-area][data-side]')];}[j(0x13c)](){const l=j;this['_parseAttributesToProperties'](),this[l(0x17e)](),this[l(0x159)](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this[m(0x144)]()),this['_resizeObserver'][m(0x169)](this),requestAnimationFrame(()=>this['_updateScale']());}[j(0x14f)](){const n=j;this[n(0x157)]?.[n(0x148)]();}get['values'](){return this['_cloneValues'](this['_values']);}set['values'](c){const o=j;this['_values']=this['_cloneValues'](c??{}),this[o(0x159)]();}[j(0x155)](c,d){return cssProperties[c]?.[d];}['refresh'](c){const p=j;this[p(0x15e)][p(0x140)]['remove']('box'),this[p(0x15a)]['classList'][p(0x183)]('box');if(!c){this['values']={};return;}const d=c[p(0x139)]['defaultView']['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[p(0x176)](cssProperties[f])){const h=this[p(0x155)](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d[p(0x17c)]=='content-box')this['_contentDiv'][p(0x140)][p(0x166)](p(0x15f));else this['_borderDiv']['classList']['add']('box');this[p(0x16b)]=e,this['_updateScale']();}['_wireEvents'](){const q=j;for(const c of this['_inputs']){c['addEventListener'](q(0x173),()=>c['select']()),c['addEventListener']('change',()=>this[q(0x168)](c)),c['addEventListener'](q(0x174),d=>{const r=q;if(d['key']==='Enter')this['_commitInput'](c),c['blur']();else d['key']===r(0x17b)&&(this[r(0x152)](c),c[r(0x142)]());});}}['_commitInput'](c){const s=j;if(this['_isRefreshing'])return;const d=c['dataset'][s(0x14e)],e=c['dataset']['side'],f=this[s(0x13e)][d]?.[e]??'',g=c['value']['trim']();if(!this['_values'][d])this[s(0x13e)][d]={};this[s(0x13e)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(s(0x167),{'bubbles':!![],'composed':!![],'detail':{'property':this[s(0x155)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const t=j;this[t(0x15c)]=!![];try{for(const c of this['_inputs'])this[t(0x152)](c);}finally{this[t(0x15c)]=![];}}[j(0x152)](c){const u=j,d=c['dataset'][u(0x14e)],e=c[u(0x13b)]['side'];c['value']=this[u(0x13e)][d]?.[e]??this['unsetValue'];}[j(0x156)](c,d,e){const v=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g===v(0x162))return this['unsetValue'];return g||this[v(0x16f)];}[j(0x170)](c){const w=j,d={};for(const e of Object[w(0x176)](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0x143)];if(c<=0x0)return;const d=Math[x(0x150)](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv'][x(0x13d)]['width']=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[x(0x154)][x(0x13d)][x(0x179)]=d<0x1?'scale('+d+')':'',this['style'][x(0x17d)]=this[x(0x154)][x(0x14a)]*d+'px';}}customElements[j(0x14c)]('node-projects-metrics-editor',MetricsEditor);function a(){const y=['50916TwvzsH','blur','clientWidth','_updateScale','borderRightWidth','180ctgjsX','1974791kUKQuI','disconnect','_getDomElement','offsetHeight','1339614fITjRc','define','_inputs','area','disconnectedCallback','min','paddingRight','_updateInput','border-left-width','_boxModelDiv','getPropertyName','_getComputedProperty','_resizeObserver','marginTop','_updateInputs','_borderDiv','40OBJqqY','_isRefreshing','160UiaqhC','_contentDiv','box','padding-right','9808777HHpgch','auto','_restoreCachedInititalValues','paddingTop','144333mGqUzL','add','value-changed','_commitInput','observe','marginRight','values','marginLeft','box-model','bottom','unsetValue','_cloneValues','content','querySelectorAll','focus','keydown','width','keys','1046549YbnSAG','padding-left','transform','3jPNOyz','Escape','boxSizing','height','_wireEvents','left','template','557698TLVNeJ','16tqaXKA','remove','margin-top','ownerDocument','5dYPFYE','dataset','ready','style','_values','border-bottom-width','classList'];a=function(){return y;};return a();}