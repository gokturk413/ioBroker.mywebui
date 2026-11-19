const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1b3))/0x1*(parseInt(i(0x1a8))/0x2)+-parseInt(i(0x1cd))/0x3*(parseInt(i(0x1a3))/0x4)+parseInt(i(0x1b4))/0x5*(parseInt(i(0x1b7))/0x6)+-parseInt(i(0x1c0))/0x7+-parseInt(i(0x1ab))/0x8+-parseInt(i(0x1ba))/0x9*(parseInt(i(0x1c4))/0xa)+parseInt(i(0x1cc))/0xb*(parseInt(i(0x1af))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x34c0d));function a(){const y=['remove','_wireEvents','60DsDMcK','borderTopWidth','_commitInput','content','unsetValue','clientWidth','getPropertyName','_updateInput','11431574rorrqL','39pTUlhe','add','_borderDiv','_updateInputs','padding-right','top','ownerDocument','value-changed','area','dispatchEvent','box-model','values','scale(','borderRightWidth','_resizeObserver','auto','style','min','_isRefreshing','_inputs','Escape','_contentDiv','marginBottom','margin-top','keydown','disconnect','offsetHeight','classList','paddingBottom','111988gmKGUn','right','_restoreCachedInititalValues','template','observe','22nxMViQ','addEventListener','key','3138160RbxsYv','border-bottom-width','dataset','_parseAttributesToProperties','12WUBEyf','_values','paddingLeft','padding-top','15854OXrXPQ','1457770rLZPCe','_updateScale','side','6UKhxcg','_getDomElement','marginLeft','184077xERLri','box','property','width','_boxModelDiv','_cloneValues','2871092YqExFh','paddingRight'];a=function(){return y;};return a();}function b(c,d){c=c-0x19d;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x1d2),'right':j(0x1a4),'bottom':'bottom','left':'left'},'margin':{'top':j(0x19d),'right':'margin-right','bottom':'margin-bottom','left':'margin-left'},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x1ac),'left':'border-left-width'},'padding':{'top':j(0x1b2),'right':j(0x1d1),'bottom':'padding-bottom','left':'padding-left'},'content':{'width':j(0x1bd),'height':'height'}},computedStyleProperties={'border-top-width':j(0x1c5),'border-right-width':j(0x1da),'border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':'marginRight','margin-bottom':j(0x1e3),'margin-left':j(0x1b9),'padding-top':'paddingTop','padding-right':j(0x1c1),'padding-bottom':j(0x1a2),'padding-left':j(0x1b1)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x1a6)]=html`
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
  `;[j(0x1bc)];['unsetValue']='-';[j(0x1cf)];['_boxModelDiv'];['_contentDiv'];['_inputs']=[];['_values']={};[j(0x1df)]=![];['_resizeObserver'];constructor(){const k=j;super(),this[k(0x1a5)](),this[k(0x1cf)]=this[k(0x1b8)]('border'),this[k(0x1be)]=this[k(0x1b8)](k(0x1d7)),this[k(0x1e2)]=this[k(0x1b8)](k(0x1c7)),this['_inputs']=[...this['shadowRoot']['querySelectorAll']('input[data-area][data-side]')];}['ready'](){const l=j;this[l(0x1ae)](),this['_wireEvents'](),this[l(0x1d0)](),requestAnimationFrame(()=>this[l(0x1b5)]());}['connectedCallback'](){const m=j;this[m(0x1db)]??=new ResizeObserver(()=>this[m(0x1b5)]()),this[m(0x1db)][m(0x1a7)](this),requestAnimationFrame(()=>this['_updateScale']());}['disconnectedCallback'](){const n=j;this['_resizeObserver']?.[n(0x19f)]();}get[j(0x1d8)](){const o=j;return this[o(0x1bf)](this['_values']);}set[j(0x1d8)](c){const p=j;this['_values']=this[p(0x1bf)](c??{}),this[p(0x1d0)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this['_contentDiv']['classList'][q(0x1c2)](q(0x1bb)),this['_borderDiv'][q(0x1a1)][q(0x1c2)](q(0x1bb));if(!c){this[q(0x1d8)]={};return;}const d=c[q(0x1d3)]['defaultView']['getComputedStyle'](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this['_getComputedProperty'](d,h,f);}}if(d['boxSizing']=='content-box')this['_contentDiv']['classList']['add'](q(0x1bb));else this[q(0x1cf)]['classList'][q(0x1ce)](q(0x1bb));this[q(0x1d8)]=e,this[q(0x1b5)]();}[j(0x1c3)](){const r=j;for(const c of this['_inputs']){c[r(0x1a9)]('focus',()=>c['select']()),c['addEventListener']('change',()=>this['_commitInput'](c)),c[r(0x1a9)](r(0x19e),d=>{const s=r;if(d[s(0x1aa)]==='Enter')this[s(0x1c6)](c),c['blur']();else d[s(0x1aa)]===s(0x1e1)&&(this['_updateInput'](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this['_isRefreshing'])return;const d=c[t(0x1ad)][t(0x1d5)],e=c['dataset'][t(0x1b6)],f=this[t(0x1b0)][d]?.[e]??'',g=c['value']['trim']();if(!this[t(0x1b0)][d])this['_values'][d]={};this[t(0x1b0)][d][e]=g,this[t(0x1cb)](c);if(f===g)return;this[t(0x1d6)](new CustomEvent(t(0x1d4),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x1ca)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x1d0)](){const u=j;this[u(0x1df)]=!![];try{for(const c of this[u(0x1e0)])this[u(0x1cb)](c);}finally{this['_isRefreshing']=![];}}['_updateInput'](c){const v=j,d=c[v(0x1ad)][v(0x1d5)],e=c[v(0x1ad)][v(0x1b6)];c['value']=this['_values'][d]?.[e]??this['unsetValue'];}['_getComputedProperty'](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g===w(0x1dc))return this[w(0x1c8)];return g||this[w(0x1c8)];}[j(0x1bf)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0x1c9)];if(c<=0x0)return;const d=Math[x(0x1de)](0x1,c/metricsEditorNaturalWidth);this[x(0x1be)]['style']['width']=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[x(0x1be)][x(0x1dd)]['transform']=d<0x1?x(0x1d9)+d+')':'',this['style']['height']=this['_boxModelDiv'][x(0x1a0)]*d+'px';}}customElements['define']('node-projects-metrics-editor',MetricsEditor);