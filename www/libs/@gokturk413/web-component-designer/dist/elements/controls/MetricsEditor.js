const j=b;function b(c,d){c=c-0x165;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1a7))/0x1*(parseInt(i(0x180))/0x2)+-parseInt(i(0x178))/0x3+parseInt(i(0x172))/0x4*(-parseInt(i(0x174))/0x5)+parseInt(i(0x19e))/0x6*(-parseInt(i(0x1a3))/0x7)+parseInt(i(0x184))/0x8+-parseInt(i(0x1a2))/0x9+parseInt(i(0x19f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2a79f));function a(){const z=['_isRefreshing','disconnectedCallback','blur','_borderDiv','_updateInput','change','add','_values','_updateScale','left','paddingTop','clientWidth','borderTopWidth','keys','12084CzhtWi','7279290BTuNRi','marginBottom','input[data-area][data-side]','91773OFfSRd','336eyQXGL','height','classList','padding-top','137927ZNuKSg','side','box','Enter','margin-right','_inputs','_resizeObserver','dataset','_getComputedProperty','shadowRoot','paddingRight','auto','margin-left','_parseAttributesToProperties','select','_boxModelDiv','marginTop','border','property','_contentDiv','3236QYIaXY','Escape','620onptAM','_getDomElement','transform','observe','671256oYBwcu','right','unsetValue','style','_commitInput','min','values','padding-bottom','2HhfMkV','boxSizing','content','addEventListener','119344AqlCKX','key','margin-top','marginLeft','disconnect','box-model','width','bottom','_updateInputs','100%','template','define'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':j(0x179),'bottom':j(0x18b),'left':j(0x199)},'margin':{'top':j(0x186),'right':j(0x1ab),'bottom':'margin-bottom','left':j(0x16a)},'border':{'top':'border-top-width','right':'border-right-width','bottom':'border-bottom-width','left':'border-left-width'},'padding':{'top':j(0x1a6),'right':'padding-right','bottom':j(0x17f),'left':'padding-left'},'content':{'width':j(0x18a),'height':j(0x1a4)}},computedStyleProperties={'border-top-width':j(0x19c),'border-right-width':'borderRightWidth','border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':j(0x16e),'margin-right':'marginRight','margin-bottom':j(0x1a0),'margin-left':j(0x187),'padding-top':j(0x19a),'padding-right':j(0x168),'padding-bottom':'paddingBottom','padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x18e)]=html`
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
  `;[j(0x170)];[j(0x17a)]='-';['_borderDiv'];['_boxModelDiv'];['_contentDiv'];[j(0x1ac)]=[];[j(0x197)]={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this[k(0x175)](k(0x16f)),this['_boxModelDiv']=this[k(0x175)](k(0x189)),this[k(0x171)]=this[k(0x175)](k(0x182)),this['_inputs']=[...this[k(0x167)]['querySelectorAll'](k(0x1a1))];}['ready'](){const l=j;this[l(0x16b)](),this['_wireEvents'](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this[m(0x1ad)]??=new ResizeObserver(()=>this[m(0x198)]()),this[m(0x1ad)][m(0x177)](this),requestAnimationFrame(()=>this['_updateScale']());}[j(0x191)](){const n=j;this['_resizeObserver']?.[n(0x188)]();}get[j(0x17e)](){const o=j;return this['_cloneValues'](this[o(0x197)]);}set[j(0x17e)](c){const p=j;this[p(0x197)]=this['_cloneValues'](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this[q(0x171)][q(0x1a5)]['remove']('box'),this['_borderDiv']['classList']['remove'](q(0x1a9));if(!c){this[q(0x17e)]={};return;}const d=c['ownerDocument']['defaultView']['getComputedStyle'](c),e={};for(const f of Object[q(0x19d)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this[q(0x166)](d,h,f);}}if(d[q(0x181)]=='content-box')this[q(0x171)][q(0x1a5)]['add'](q(0x1a9));else this[q(0x193)]['classList'][q(0x196)](q(0x1a9));this['values']=e,this['_updateScale']();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c[r(0x183)]('focus',()=>c[r(0x16c)]()),c[r(0x183)](r(0x195),()=>this[r(0x17c)](c)),c[r(0x183)]('keydown',d=>{const s=r;if(d[s(0x185)]===s(0x1aa))this['_commitInput'](c),c['blur']();else d[s(0x185)]===s(0x173)&&(this[s(0x194)](c),c[s(0x192)]());});}}[j(0x17c)](c){const t=j;if(this[t(0x190)])return;const d=c['dataset']['area'],e=c['dataset'][t(0x1a8)],f=this[t(0x197)][d]?.[e]??'',g=c['value']['trim']();if(!this['_values'][d])this['_values'][d]={};this['_values'][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x18c)](){const u=j;this[u(0x190)]=!![];try{for(const c of this[u(0x1ac)])this['_updateInput'](c);}finally{this['_isRefreshing']=![];}}[j(0x194)](c){const v=j,d=c['dataset']['area'],e=c[v(0x165)]['side'];c['value']=this['_values'][d]?.[e]??this['unsetValue'];}[j(0x166)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g===w(0x169))return this['unsetValue'];return g||this['unsetValue'];}['_cloneValues'](c){const x=j,d={};for(const e of Object[x(0x19d)](c))d[e]={...c[e]};return d;}['_updateScale'](){const y=j;if(!this[y(0x16d)])return;const c=this[y(0x19b)];if(c<=0x0)return;const d=Math[y(0x17d)](0x1,c/metricsEditorNaturalWidth);this[y(0x16d)][y(0x17b)]['width']=d<0x1?metricsEditorNaturalWidth+'px':y(0x18d),this['_boxModelDiv'][y(0x17b)][y(0x176)]=d<0x1?'scale('+d+')':'',this[y(0x17b)][y(0x1a4)]=this['_boxModelDiv']['offsetHeight']*d+'px';}}customElements[j(0x18f)]('node-projects-metrics-editor',MetricsEditor);