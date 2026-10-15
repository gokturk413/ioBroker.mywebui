function a(){const x=['disconnect','_inputs','template','_wireEvents','scale(','_getDomElement','_boxModelDiv','bottom','50MKWiYt','borderLeftWidth','border-bottom-width','keys','38508uyGUrX','margin-bottom','refresh','getPropertyName','clientWidth','padding-bottom','min','1212663JfbXqg','100%','3556216xvrhbw','addEventListener','border-right-width','_isRefreshing','paddingLeft','borderRightWidth','connectedCallback','remove','_borderDiv','blur','_updateScale','_restoreCachedInititalValues','ownerDocument','margin-top','_contentDiv','defaultView','1567704OwBSPg','key','getComputedStyle','node-projects-metrics-editor','2vYrkNg','box','querySelectorAll','unsetValue','padding-top','_updateInputs','372063aoVAnJ','805wbFOLF','1210041dWYcpr','_updateInput','dataset','Escape','_values','add','offsetHeight','width','padding-right','value-changed','border-left-width','values','classList','_cloneValues','border','shadowRoot','_resizeObserver','boxSizing','focus','_commitInput','area','_getComputedProperty','value','property','820315XcbHOo','style','box-model'];a=function(){return x;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x11b))/0x1+-parseInt(i(0x115))/0x2*(-parseInt(i(0x14b))/0x3)+parseInt(i(0x111))/0x4+-parseInt(i(0x135))/0x5+-parseInt(i(0x144))/0x6*(-parseInt(i(0x11c))/0x7)+-parseInt(i(0x14d))/0x8+parseInt(i(0x11d))/0x9*(-parseInt(i(0x140))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98b25));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0x13f),'left':'left'},'margin':{'top':j(0x15a),'right':'margin-right','bottom':j(0x145),'left':'margin-left'},'border':{'top':'border-top-width','right':j(0x14f),'bottom':j(0x142),'left':j(0x127)},'padding':{'top':j(0x119),'right':j(0x125),'bottom':j(0x149),'left':'padding-left'},'content':{'width':j(0x124),'height':'height'}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':j(0x152),'border-bottom-width':'borderBottomWidth','border-left-width':j(0x141),'margin-top':'marginTop','margin-right':'marginRight','margin-bottom':'marginBottom','margin-left':'marginLeft','padding-top':'paddingTop','padding-right':'paddingRight','padding-bottom':'paddingBottom','padding-left':j(0x151)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static [j(0x136)]=css`
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
  `;static [j(0x13a)]=html`
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
  `;[j(0x134)];['unsetValue']='-';['_borderDiv'];['_boxModelDiv'];[j(0x10f)];['_inputs']=[];['_values']={};['_isRefreshing']=![];['_resizeObserver'];constructor(){const k=j;super(),this[k(0x158)](),this[k(0x155)]=this[k(0x13d)](k(0x12b)),this['_boxModelDiv']=this[k(0x13d)](k(0x137)),this['_contentDiv']=this[k(0x13d)]('content'),this['_inputs']=[...this[k(0x12c)][k(0x117)]('input[data-area][data-side]')];}['ready'](){const l=j;this['_parseAttributesToProperties'](),this[l(0x13b)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}[j(0x153)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this[m(0x157)]()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this[m(0x157)]());}['disconnectedCallback'](){const n=j;this[n(0x12d)]?.[n(0x138)]();}get['values'](){const o=j;return this[o(0x12a)](this['_values']);}set[j(0x128)](c){const p=j;this['_values']=this[p(0x12a)](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0x146)](c){const q=j;this[q(0x10f)]['classList'][q(0x154)]('box'),this[q(0x155)][q(0x129)][q(0x154)](q(0x116));if(!c){this[q(0x128)]={};return;}const d=c[q(0x159)][q(0x110)][q(0x113)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[q(0x143)](cssProperties[f])){const h=this['getPropertyName'](f,g);e[f][g]=this[q(0x132)](d,h,f);}}if(d[q(0x12e)]=='content-box')this['_contentDiv'][q(0x129)]['add']('box');else this[q(0x155)][q(0x129)][q(0x122)](q(0x116));this[q(0x128)]=e,this['_updateScale']();}[j(0x13b)](){const r=j;for(const c of this[r(0x139)]){c[r(0x14e)](r(0x12f),()=>c['select']()),c[r(0x14e)]('change',()=>this[r(0x130)](c)),c[r(0x14e)]('keydown',d=>{const s=r;if(d['key']==='Enter')this[s(0x130)](c),c['blur']();else d[s(0x112)]===s(0x120)&&(this[s(0x11e)](c),c[s(0x156)]());});}}['_commitInput'](c){const t=j;if(this['_isRefreshing'])return;const d=c['dataset']['area'],e=c[t(0x11f)]['side'],f=this['_values'][d]?.[e]??'',g=c[t(0x133)]['trim']();if(!this['_values'][d])this['_values'][d]={};this[t(0x121)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0x126),{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x147)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x11a)](){const u=j;this['_isRefreshing']=!![];try{for(const c of this['_inputs'])this[u(0x11e)](c);}finally{this[u(0x150)]=![];}}['_updateInput'](c){const v=j,d=c[v(0x11f)][v(0x131)],e=c[v(0x11f)]['side'];c['value']=this['_values'][d]?.[e]??this[v(0x118)];}[j(0x132)](c,d,e){const f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g==='auto')return this['unsetValue'];return g||this['unsetValue'];}[j(0x12a)](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}[j(0x157)](){const w=j;if(!this['_boxModelDiv'])return;const c=this[w(0x148)];if(c<=0x0)return;const d=Math[w(0x14a)](0x1,c/metricsEditorNaturalWidth);this[w(0x13e)][w(0x136)][w(0x124)]=d<0x1?metricsEditorNaturalWidth+'px':w(0x14c),this['_boxModelDiv']['style']['transform']=d<0x1?w(0x13c)+d+')':'',this['style']['height']=this[w(0x13e)][w(0x123)]*d+'px';}}function b(c,d){c=c-0x10f;const e=a();let f=e[c];return f;}customElements['define'](j(0x114),MetricsEditor);