const j=b;function a(){const z=['getPropertyValue','_boxModelDiv','ownerDocument','_updateInputs','offsetHeight','marginTop','remove','_contentDiv','borderLeftWidth','border-right-width','trim','25620IMeTId','640940cNglxc','input[data-area][data-side]','_updateScale','742304khXhJq','_borderDiv','_wireEvents','box-model','border-left-width','blur','style','_commitInput','5701052tKDjKp','width','select','values','margin-left','padding-left','unsetValue','marginRight','margin-top','key','add','getPropertyName','area','side','padding-top','defaultView','_values','_resizeObserver','621543bhkWOx','querySelectorAll','height','keys','addEventListener','keydown','908520MMInvC','_inputs','box','_updateInput','_getComputedProperty','getComputedStyle','3uVLgxG','paddingRight','_cloneValues','content-box','classList','left','_isRefreshing','paddingLeft','_parseAttributesToProperties','define','2071240XIAwxz','marginLeft','content','marginBottom','dataset'];a=function(){return z;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1e2))/0x1+parseInt(i(0x209))/0x2+parseInt(i(0x1ee))/0x3*(parseInt(i(0x20c))/0x4)+-parseInt(i(0x208))/0x5+-parseInt(i(0x1e8))/0x6+-parseInt(i(0x214))/0x7+parseInt(i(0x1f8))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6571a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}const metricsEditorNaturalWidth=0x1b4,cssProperties={'position':{'top':'top','right':'right','bottom':'bottom','left':j(0x1f3)},'margin':{'top':j(0x21c),'right':'margin-right','bottom':'margin-bottom','left':j(0x218)},'border':{'top':'border-top-width','right':j(0x206),'bottom':'border-bottom-width','left':j(0x210)},'padding':{'top':j(0x1de),'right':'padding-right','bottom':'padding-bottom','left':j(0x219)},'content':{'width':'width','height':j(0x1e4)}},computedStyleProperties={'border-top-width':'borderTopWidth','border-right-width':'borderRightWidth','border-bottom-width':'borderBottomWidth','border-left-width':j(0x205),'margin-top':j(0x202),'margin-right':j(0x21b),'margin-bottom':j(0x1fb),'margin-left':j(0x1f9),'padding-top':'paddingTop','padding-right':j(0x1ef),'padding-bottom':'paddingBottom','padding-left':j(0x1f5)};export class MetricsEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['property'];['unsetValue']='-';['_borderDiv'];['_boxModelDiv'];['_contentDiv'];[j(0x1e9)]=[];['_values']={};[j(0x1f4)]=![];['_resizeObserver'];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_borderDiv']=this['_getDomElement']('border'),this['_boxModelDiv']=this['_getDomElement'](k(0x20f)),this[k(0x204)]=this['_getDomElement'](k(0x1fa)),this['_inputs']=[...this['shadowRoot'][k(0x1e3)](k(0x20a))];}['ready'](){const l=j;this[l(0x1f6)](),this[l(0x20e)](),this['_updateInputs'](),requestAnimationFrame(()=>this['_updateScale']());}['connectedCallback'](){const m=j;this[m(0x1e1)]??=new ResizeObserver(()=>this[m(0x20b)]()),this['_resizeObserver']['observe'](this),requestAnimationFrame(()=>this[m(0x20b)]());}['disconnectedCallback'](){const n=j;this[n(0x1e1)]?.['disconnect']();}get['values'](){const o=j;return this[o(0x1f0)](this['_values']);}set[j(0x217)](c){const p=j;this['_values']=this['_cloneValues'](c??{}),this[p(0x200)]();}['getPropertyName'](c,d){return cssProperties[c]?.[d];}['refresh'](c){const q=j;this[q(0x204)][q(0x1f2)][q(0x203)](q(0x1ea)),this['_borderDiv'][q(0x1f2)]['remove'](q(0x1ea));if(!c){this[q(0x217)]={};return;}const d=c[q(0x1ff)][q(0x1df)][q(0x1ed)](c),e={};for(const f of Object['keys'](cssProperties)){e[f]={};for(const g of Object[q(0x1e5)](cssProperties[f])){const h=this[q(0x21f)](f,g);e[f][g]=this[q(0x1ec)](d,h,f);}}if(d['boxSizing']==q(0x1f1))this['_contentDiv']['classList'][q(0x21e)](q(0x1ea));else this[q(0x20d)][q(0x1f2)][q(0x21e)](q(0x1ea));this['values']=e,this['_updateScale']();}[j(0x20e)](){const r=j;for(const c of this['_inputs']){c['addEventListener']('focus',()=>c[r(0x216)]()),c['addEventListener']('change',()=>this[r(0x213)](c)),c[r(0x1e6)](r(0x1e7),d=>{const s=r;if(d[s(0x21d)]==='Enter')this[s(0x213)](c),c[s(0x211)]();else d['key']==='Escape'&&(this[s(0x1eb)](c),c['blur']());});}}['_commitInput'](c){const t=j;if(this[t(0x1f4)])return;const d=c[t(0x1fc)]['area'],e=c[t(0x1fc)][t(0x221)],f=this[t(0x1e0)][d]?.[e]??'',g=c['value'][t(0x207)]();if(!this[t(0x1e0)][d])this[t(0x1e0)][d]={};this[t(0x1e0)][d][e]=g,this['_updateInput'](c);if(f===g)return;this['dispatchEvent'](new CustomEvent('value-changed',{'bubbles':!![],'composed':!![],'detail':{'property':this[t(0x21f)](d,e),'area':d,'side':e,'newValue':g,'oldValue':f}}));}['_updateInputs'](){const u=j;this[u(0x1f4)]=!![];try{for(const c of this['_inputs'])this[u(0x1eb)](c);}finally{this[u(0x1f4)]=![];}}[j(0x1eb)](c){const v=j,d=c['dataset'][v(0x220)],e=c['dataset']['side'];c['value']=this[v(0x1e0)][d]?.[e]??this['unsetValue'];}[j(0x1ec)](c,d,e){const w=j,f=computedStyleProperties[d]??d,g=c[w(0x1fd)](d)||c[f];if(e==='position'&&g==='auto')return this[w(0x21a)];return g||this['unsetValue'];}[j(0x1f0)](c){const x=j,d={};for(const e of Object[x(0x1e5)](c))d[e]={...c[e]};return d;}[j(0x20b)](){const y=j;if(!this[y(0x1fe)])return;const c=this['clientWidth'];if(c<=0x0)return;const d=Math['min'](0x1,c/metricsEditorNaturalWidth);this[y(0x1fe)]['style'][y(0x215)]=d<0x1?metricsEditorNaturalWidth+'px':'100%',this['_boxModelDiv'][y(0x212)]['transform']=d<0x1?'scale('+d+')':'',this[y(0x212)][y(0x1e4)]=this[y(0x1fe)][y(0x201)]*d+'px';}}customElements[j(0x1f7)]('node-projects-metrics-editor',MetricsEditor);