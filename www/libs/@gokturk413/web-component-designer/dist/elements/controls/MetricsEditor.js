function a(){const w=['1684QmHXSY','_values','72ExqFrL','marginTop','offsetHeight','17107200MfZXUA','357190CPLJtJ','borderBottomWidth','keys','value-changed','_inputs','value','scale(','_updateScale','_commitInput','top','_getComputedProperty','content-box','box','225XkqEoE','padding-bottom','values','node-projects-metrics-editor','blur','addEventListener','border-bottom-width','_boxModelDiv','_updateInputs','margin-right','left','_updateInput','add','paddingTop','unsetValue','border','15183KcugPw','keydown','1780140Aijcyj','border-top-width','key','disconnectedCallback','_isRefreshing','_parseAttributesToProperties','classList','_borderDiv','clientWidth','shadowRoot','_getDomElement','margin-left','_resizeObserver','border-left-width','width','paddingLeft','marginLeft','padding-right','connectedCallback','getPropertyName','margin-top','box-model','26179OxJdnM','1880MGmEca','change','height','template','988134VgfPLJ','define','5583YdxMGQ','dispatchEvent','remove','side','style','dataset','_contentDiv','trim','paddingBottom','right'];a=function(){return w;};return a();}const j=b;function b(c,d){c=c-0x14a;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x191))/0x1*(parseInt(i(0x158))/0x2)+parseInt(i(0x14c))/0x3*(parseInt(i(0x156))/0x4)+-parseInt(i(0x17b))/0x5+parseInt(i(0x14a))/0x6+-parseInt(i(0x179))/0x7*(-parseInt(i(0x192))/0x8)+-parseInt(i(0x169))/0x9*(parseInt(i(0x15c))/0xa)+parseInt(i(0x15b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8986));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x165),'right':j(0x155),'bottom':'bottom','left':j(0x173)},'margin':{'top':j(0x18f),'right':j(0x172),'bottom':'margin-bottom','left':j(0x186)},'border':{'top':j(0x17c),'right':'border-right-width','bottom':j(0x16f),'left':j(0x188)},'padding':{'top':'padding-top','right':j(0x18c),'bottom':j(0x16a),'left':'padding-left'},'content':{'width':'width','height':'height'}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':'borderRightWidth','border-bottom-width':j(0x15d),'border-left-width':'borderLeftWidth','margin-top':j(0x159),'margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':j(0x18b),'padding-top':j(0x176),'padding-right':'paddingRight','padding-bottom':j(0x154),'padding-left':j(0x18a)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x150)]=css`
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
  `;static [j(0x195)]=html`
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
  `;['property'];[j(0x177)]='-';['_borderDiv'];['_boxModelDiv'];[j(0x152)];[j(0x160)]=[];['_values']={};[j(0x17f)]=![];[j(0x187)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this[k(0x185)](k(0x178)),this['_boxModelDiv']=this['_getDomElement'](k(0x190)),this['_contentDiv']=this['_getDomElement']('content'),this[k(0x160)]=[...this[k(0x184)]['querySelectorAll']('input[data-area][data-side]')];}['ready'](){const l=j;this[l(0x180)](),this['_wireEvents'](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x18d)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this['_updateScale']()),this[m(0x187)]['observe'](this),requestAnimationFrame(()=>this[m(0x163)]());}[j(0x17e)](){const n=j;this[n(0x187)]?.['disconnect']();}get['values'](){return this['_cloneValues'](this['_values']);}set[j(0x16b)](c){const o=j;this[o(0x157)]=this['_cloneValues'](c??{}),this[o(0x171)]();}[j(0x18e)](c,d){return cssProperties[c]?.[d];}['refresh'](c){const p=j;this[p(0x152)][p(0x181)][p(0x14e)](p(0x168)),this[p(0x182)][p(0x181)][p(0x14e)]('box');if(!c){this[p(0x16b)]={};return;}const d=c['ownerDocument']['defaultView']['getComputedStyle'](c),e={};for(const f of Object[p(0x15e)](cssProperties)){e[f]={};for(const g of Object[p(0x15e)](cssProperties[f])){const h=this[p(0x18e)](f,g);e[f][g]=this[p(0x166)](d,h,f);}}if(d['boxSizing']==p(0x167))this[p(0x152)]['classList'][p(0x175)](p(0x168));else this['_borderDiv'][p(0x181)][p(0x175)]('box');this['values']=e,this['_updateScale']();}['_wireEvents'](){const q=j;for(const c of this[q(0x160)]){c[q(0x16e)]('focus',()=>c['select']()),c[q(0x16e)](q(0x193),()=>this[q(0x164)](c)),c[q(0x16e)](q(0x17a),d=>{const r=q;if(d[r(0x17d)]==='Enter')this[r(0x164)](c),c[r(0x16d)]();else d[r(0x17d)]==='Escape'&&(this['_updateInput'](c),c['blur']());});}}[j(0x164)](c){const s=j;if(this['_isRefreshing'])return;const d=c[s(0x151)]['area'],e=c[s(0x151)][s(0x14f)],f=this['_values'][d]?.[e]??'',g=c[s(0x161)][s(0x153)]();if(!this[s(0x157)][d])this[s(0x157)][d]={};this['_values'][d][e]=g,this[s(0x174)](c);if(f===g)return;this[s(0x14d)](new CustomEvent(s(0x15f),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x171)](){const t=j;this[t(0x17f)]=!![];try{for(const c of this['_inputs'])this['_updateInput'](c);}finally{this[t(0x17f)]=![];}}['_updateInput'](c){const u=j,d=c[u(0x151)]['area'],e=c['dataset'][u(0x14f)];c[u(0x161)]=this[u(0x157)][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g==='auto')return this['unsetValue'];return g||this['unsetValue'];}['_cloneValues'](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const v=j;if(!this['_boxModelDiv'])return;const c=this[v(0x183)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this['_boxModelDiv'][v(0x150)][v(0x189)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[v(0x170)]['style']['transform']=d<0x1?v(0x162)+d+')':'',this['style'][v(0x194)]=this[v(0x170)][v(0x15a)]*d+'px';}}customElements[j(0x14b)](j(0x16c),MetricsEditor);