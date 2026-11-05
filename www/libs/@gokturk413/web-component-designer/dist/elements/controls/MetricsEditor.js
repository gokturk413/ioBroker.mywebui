const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x220))/0x1+-parseInt(i(0x236))/0x2*(-parseInt(i(0x1f4))/0x3)+parseInt(i(0x238))/0x4*(-parseInt(i(0x20b))/0x5)+-parseInt(i(0x233))/0x6*(parseInt(i(0x207))/0x7)+-parseInt(i(0x204))/0x8*(parseInt(i(0x210))/0x9)+parseInt(i(0x226))/0xa*(-parseInt(i(0x20e))/0xb)+parseInt(i(0x1f3))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x522c4));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':j(0x214),'left':'left'},'margin':{'top':j(0x206),'right':j(0x1fd),'bottom':'margin-bottom','left':j(0x22d)},'border':{'top':j(0x1f0),'right':'border-right-width','bottom':j(0x235),'left':'border-left-width'},'padding':{'top':'padding-top','right':'padding-right','bottom':j(0x225),'left':j(0x22b)},'content':{'width':'width','height':j(0x237)}},computedStyleProperties={'border-top-width':j(0x203),'border-right-width':j(0x1f5),'border-bottom-width':j(0x202),'border-left-width':'borderLeftWidth','margin-top':j(0x223),'margin-right':j(0x23b),'margin-bottom':j(0x22a),'margin-left':'marginLeft','padding-top':'paddingTop','padding-right':j(0x1fa),'padding-bottom':j(0x232),'padding-left':'paddingLeft'};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['property'];['unsetValue']='-';['_borderDiv'];['_boxModelDiv'];[j(0x20d)];['_inputs']=[];['_values']={};[j(0x228)]=![];[j(0x230)];constructor(){const k=j;super(),this[k(0x1f1)](),this['_borderDiv']=this[k(0x201)]('border'),this['_boxModelDiv']=this[k(0x201)](k(0x1f9)),this['_contentDiv']=this['_getDomElement'](k(0x1ff)),this[k(0x208)]=[...this['shadowRoot']['querySelectorAll']('input[data-area][data-side]')];}[j(0x22c)](){const l=j;this[l(0x20c)](),this[l(0x211)](),this['_updateInputs'](),requestAnimationFrame(()=>this[l(0x21a)]());}['connectedCallback'](){const m=j;this[m(0x230)]??=new ResizeObserver(()=>this[m(0x21a)]()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this['_updateScale']());}[j(0x234)](){const n=j;this[n(0x230)]?.['disconnect']();}get['values'](){const o=j;return this['_cloneValues'](this[o(0x21d)]);}set[j(0x231)](c){const p=j;this['_values']=this[p(0x1f8)](c??{}),this['_updateInputs']();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}[j(0x200)](c){const q=j;this[q(0x20d)][q(0x205)]['remove']('box'),this['_borderDiv'][q(0x205)]['remove'](q(0x20f));if(!c){this[q(0x231)]={};return;}const d=c['ownerDocument']['defaultView'][q(0x1fc)](c),e={};for(const f of Object[q(0x212)](cssProperties)){e[f]={};for(const g of Object['keys'](cssProperties[f])){const h=this[q(0x1f2)](f,g);e[f][g]=this[q(0x21f)](d,h,f);}}if(d['boxSizing']=='content-box')this['_contentDiv'][q(0x205)]['add']('box');else this[q(0x216)]['classList']['add'](q(0x20f));this[q(0x231)]=e,this['_updateScale']();}['_wireEvents'](){const r=j;for(const c of this['_inputs']){c['addEventListener']('focus',()=>c[r(0x23a)]()),c[r(0x221)](r(0x1f6),()=>this['_commitInput'](c)),c['addEventListener']('keydown',d=>{const s=r;if(d[s(0x222)]==='Enter')this[s(0x213)](c),c['blur']();else d[s(0x222)]===s(0x21c)&&(this[s(0x219)](c),c[s(0x22f)]());});}}[j(0x213)](c){const t=j;if(this[t(0x228)])return;const d=c[t(0x209)]['area'],e=c['dataset'][t(0x224)],f=this['_values'][d]?.[e]??'',g=c[t(0x22e)]['trim']();if(!this[t(0x21d)][d])this['_values'][d]={};this['_values'][d][e]=g,this[t(0x219)](c);if(f===g)return;this['dispatchEvent'](new CustomEvent(t(0x21b),{'bubbles':!![],'composed':!![],'detail':{'property':this['getPropertyName'](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}[j(0x1fe)](){const u=j;this[u(0x228)]=!![];try{for(const c of this[u(0x208)])this['_updateInput'](c);}finally{this[u(0x228)]=![];}}[j(0x219)](c){const v=j,d=c[v(0x209)][v(0x20a)],e=c[v(0x209)][v(0x224)];c['value']=this[v(0x21d)][d]?.[e]??this['unsetValue'];}[j(0x21f)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c['getPropertyValue'](d)||c[f];if(e==='position'&&g===w(0x227))return this['unsetValue'];return g||this[w(0x218)];}['_cloneValues'](c){const d={};for(const e of Object['keys'](c))d[e]={...c[e]};return d;}['_updateScale'](){const x=j;if(!this['_boxModelDiv'])return;const c=this[x(0x1fb)];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[x(0x217)][x(0x239)][x(0x21e)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this[x(0x217)]['style'][x(0x215)]=d<0x1?x(0x1f7)+d+')':'',this['style']['height']=this['_boxModelDiv']['offsetHeight']*d+'px';}}function a(){const y=['content','refresh','_getDomElement','borderBottomWidth','borderTopWidth','8VBMCJG','classList','margin-top','28wjSrmK','_inputs','dataset','area','70CtCdhK','_parseAttributesToProperties','_contentDiv','7325285WaIaKE','box','3901977zKvQxh','_wireEvents','keys','_commitInput','bottom','transform','_borderDiv','_boxModelDiv','unsetValue','_updateInput','_updateScale','value-changed','Escape','_values','width','_getComputedProperty','183081qvPeaw','addEventListener','key','marginTop','side','padding-bottom','10weqqPL','auto','_isRefreshing','define','marginBottom','padding-left','ready','margin-left','value','blur','_resizeObserver','values','paddingBottom','176544JiVXon','disconnectedCallback','border-bottom-width','5980FLqKBk','height','151112wzcezw','style','select','marginRight','border-top-width','_restoreCachedInititalValues','getPropertyName','16587660fULecl','519KHDbXq','borderRightWidth','change','scale(','_cloneValues','box-model','paddingRight','clientWidth','getComputedStyle','margin-right','_updateInputs'];a=function(){return y;};return a();}function b(c,d){c=c-0x1f0;const e=a();let f=e[c];return f;}customElements[j(0x229)]('node-projects-metrics-editor',MetricsEditor);