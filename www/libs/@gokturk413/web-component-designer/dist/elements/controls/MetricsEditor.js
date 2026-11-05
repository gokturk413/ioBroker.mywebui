const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x113))/0x1*(-parseInt(i(0xf8))/0x2)+parseInt(i(0x122))/0x3+-parseInt(i(0x108))/0x4*(parseInt(i(0x138))/0x5)+-parseInt(i(0x12a))/0x6+-parseInt(i(0x12d))/0x7*(parseInt(i(0x103))/0x8)+parseInt(i(0x130))/0x9+parseInt(i(0x109))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbadf1));function b(c,d){c=c-0xeb;const e=a();let f=e[c];return f;}function a(){const x=['defaultView','content-box','933JtEWGD','connectedCallback','paddingRight','template','select','addEventListener','marginLeft','observe','getPropertyName','key','unsetValue','style','scale(','define','_cloneValues','4387326lhranh','border-bottom-width','top','dispatchEvent','width','margin-left','borderRightWidth','margin-top','5107524JUhqEm','_wireEvents','_borderDiv','1022903AcoHKZ','_resizeObserver','area','3227112XppoRz','_restoreCachedInititalValues','side','borderTopWidth','padding-bottom','_isRefreshing','_updateScale','_boxModelDiv','10VCfuvX','_parseAttributesToProperties','_updateInput','_contentDiv','_updateInputs','marginBottom','100%','box-model','_getComputedProperty','shadowRoot','add','_commitInput','disconnectedCallback','remove','_values','value','2576DQFJTU','Enter','right','marginRight','_getDomElement','keys','position','box','boxSizing','clientWidth','offsetHeight','64sAlPhZ','classList','ready','keydown','border-left-width','1403708qDSmul','28682590GYpGBc','values','border','height','paddingBottom','input[data-area][data-side]','dataset','_inputs'];a=function(){return x;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':j(0x124),'right':j(0xfa),'bottom':'bottom','left':'left'},'margin':{'top':j(0x129),'right':'margin-right','bottom':'margin-bottom','left':j(0x127)},'border':{'top':'border-top-width','right':'border-right-width','bottom':j(0x123),'left':j(0x107)},'padding':{'top':'padding-top','right':'padding-right','bottom':j(0x134),'left':'padding-left'},'content':{'width':j(0x126),'height':'height'}},computedStyleProperties={'border-top-width':j(0x133),'border-right-width':j(0x128),'border-bottom-width':'borderBottomWidth','border-left-width':'borderLeftWidth','margin-top':'marginTop','margin-right':j(0xfb),'margin-bottom':j(0xed),'margin-left':j(0x119),'padding-top':'paddingTop','padding-right':j(0x115),'padding-bottom':j(0x10d),'padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [j(0x116)]=html`
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
  `;['property'];[j(0x11d)]='-';['_borderDiv'];[j(0x137)];[j(0xeb)];['_inputs']=[];[j(0xf6)]={};[j(0x135)]=![];['_resizeObserver'];constructor(){const k=j;super(),this[k(0x131)](),this[k(0x12c)]=this['_getDomElement'](k(0x10b)),this['_boxModelDiv']=this[k(0xfc)](k(0xef)),this[k(0xeb)]=this[k(0xfc)]('content'),this[k(0x110)]=[...this[k(0xf1)]['querySelectorAll'](k(0x10e))];}[j(0x105)](){const l=j;this[l(0x139)](),this['_wireEvents'](),this[l(0xec)](),requestAnimationFrame(()=>this[l(0x136)]());}[j(0x114)](){const m=j;this['_resizeObserver']??=new ResizeObserver(()=>this['_updateScale']()),this[m(0x12e)][m(0x11a)](this),requestAnimationFrame(()=>this[m(0x136)]());}[j(0xf4)](){this['_resizeObserver']?.['disconnect']();}get['values'](){return this['_cloneValues'](this['_values']);}set['values'](c){const n=j;this['_values']=this[n(0x121)](c??{}),this[n(0xec)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const o=j;this['_contentDiv'][o(0x104)][o(0xf5)](o(0xff)),this[o(0x12c)]['classList']['remove'](o(0xff));if(!c){this['values']={};return;}const d=c['ownerDocument'][o(0x111)]['getComputedStyle'](c),e={};for(const f of Object[o(0xfd)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this[o(0x11b)](f,g);e[f][g]=this[o(0xf0)](d,h,f);}}if(d[o(0x100)]==o(0x112))this['_contentDiv'][o(0x104)][o(0xf2)](o(0xff));else this[o(0x12c)]['classList']['add'](o(0xff));this[o(0x10a)]=e,this[o(0x136)]();}[j(0x12b)](){const p=j;for(const c of this[p(0x110)]){c[p(0x118)]('focus',()=>c[p(0x117)]()),c[p(0x118)]('change',()=>this['_commitInput'](c)),c[p(0x118)](p(0x106),d=>{const q=p;if(d[q(0x11c)]===q(0xf9))this['_commitInput'](c),c['blur']();else d[q(0x11c)]==='Escape'&&(this['_updateInput'](c),c['blur']());});}}[j(0xf3)](c){const r=j;if(this['_isRefreshing'])return;const d=c['dataset']['area'],e=c[r(0x10f)]['side'],f=this['_values'][d]?.[e]??'',g=c[r(0xf7)]['trim']();if(!this['_values'][d])this['_values'][d]={};this[r(0xf6)][d][e]=g,this[r(0x13a)](c);if(f===g)return;this[r(0x125)](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const s=j;this['_isRefreshing']=!![];try{for(const c of this[s(0x110)])this[s(0x13a)](c);}finally{this[s(0x135)]=![];}}[j(0x13a)](c){const t=j,d=c[t(0x10f)][t(0x12f)],e=c[t(0x10f)][t(0x132)];c['value']=this['_values'][d]?.[e]??this[t(0x11d)];}['_getComputedProperty'](c,d,e){const u=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e===u(0xfe)&&g==='auto')return this[u(0x11d)];return g||this[u(0x11d)];}[j(0x121)](c){const v=j,d={};for(const e of Object[v(0xfd)](c))d[e]={...c[e]};return d;}['_updateScale'](){const w=j;if(!this[w(0x137)])return;const c=this[w(0x101)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[w(0x137)][w(0x11e)][w(0x126)]=d<0x1?metricsEditorNaturalWidth+'px':w(0xee),this['_boxModelDiv'][w(0x11e)]['transform']=d<0x1?w(0x11f)+d+')':'',this['style'][w(0x10c)]=this[w(0x137)][w(0x102)]*d+'px';}}customElements[j(0x120)]('node-projects-metrics-editor',MetricsEditor);