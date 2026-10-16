const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x193))/0x1+-parseInt(o(0x183))/0x2+-parseInt(o(0x1c1))/0x3*(parseInt(o(0x169))/0x4)+-parseInt(o(0x18d))/0x5*(-parseInt(o(0x1be))/0x6)+-parseInt(o(0x188))/0x7*(parseInt(o(0x19e))/0x8)+-parseInt(o(0x190))/0x9+-parseInt(o(0x1c5))/0xa*(-parseInt(o(0x166))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb69d1));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function b(c,d){c=c-0x165;const e=a();let f=e[c];return f;}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x1bc)];['_sHor'];get['serviceContainer'](){const q=p;return this[q(0x175)]['serviceContainer'];}set['serviceContainer'](c){const r=p;this['_designerCanvas'][r(0x1c4)]=c;}get['instanceServiceContainer'](){return this['_designerCanvas']['instanceServiceContainer'];}set[p(0x1aa)](c){const s=p;if(!c[s(0x1ba)])throw new Error(s(0x179));this[s(0x175)]['attachDocument'](c['editingDocument']),this[s(0x1a3)]();}[p(0x175)];get[p(0x19d)](){return this['_designerCanvas'];}get[p(0x1a1)](){const t=p;return this['_designerCanvas'][t(0x1a1)];}set['readOnly'](c){const u=p;this[u(0x175)]['readOnly']=c;}[p(0x1c3)]=[];[p(0x1a7)];['_lowertoolbar'];['_toolbar'];[p(0x1a6)]=new ZoomHoldRepeater();[p(0x18a)];['_zoomPointerTarget'];static [p(0x19c)]=css`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      position: relative;
      transform: translateZ(0);
      overflow: hidden;
    }
    * {
      touch-action: none;
    }
    #lowertoolbar {
      height: var(--wcd-designer-view-statusbar-height, 28px);
      box-sizing: border-box;
      background: var(--wcd-designer-view-statusbar-background, #787f82);
      color: var(--wcd-designer-view-statusbar-color, #354348);
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      overflow-x: auto;
      scrollbar-width: none;
      padding: 2px 6px;
      bottom: 0;
      position: absolute;
      width: 100%;
    }
    #zoomInput {
      flex: 0 0 52px;
      box-sizing: border-box;
      width: 52px;
      height: 24px;
      padding: 0 4px;
      border: 1px solid transparent;
      border-radius: 4px;
      background: transparent;
      color: inherit;
      font-family: inherit;
      font-size: 11px;
      text-align: center;
    }
    .toolbar-control {
      box-sizing: border-box;
      font: inherit;
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
      padding: 4px;
      border: 0;
      border-radius: 4px;
      background: transparent;
      color: inherit;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .toolbar-control-input {
      flex-basis: 52px;
      width: 52px;
      padding: 0;
    }
    .toolbar-control-input input {
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      height: 24px;
      padding: 0 4px;
      border: 1px solid var(--wcd-color-border, #596c7a);
      border-radius: 4px;
      font: inherit;
      color: inherit;
      background: var(--wcd-input-background-color, white);
    }
    .toolbar-control svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.6;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
    }
    #zoomInput:focus-visible, .toolbar-control:focus-visible, .toolbar-control-input input:focus-visible {
      outline: 2px solid var(--wcd-color-focus, #47977c);
      outline-offset: -2px;
    }
    .toolbar-separator {
      height: 14px;
      margin: 0 2px;
      border-left: 1px solid var(--wcd-color-border, #596c7a);
    }
    .selected {
      background-color: var(--wcd-designer-view-tool-selected-background, deepskyblue);
    }
    .toolbar-control:hover {
      background-color: var(--wcd-designer-view-tool-hover-background, rgba(164,206,249,.6));
    }
    #outer {
      user-select: none;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    #canvas {
      left: 28px;
      width: calc(100% - 28px - 16px);
      height: calc(100% - var(--wcd-designer-view-statusbar-height, 28px) - 16px);
    }

    #tool-bar {
      width: 28px;
      height: calc(100% - var(--wcd-designer-view-statusbar-height, 28px) - 16px);
      position: absolute;
      background-color: var(--wcd-designer-view-toolbar-background, var(--wcd-designer-view-statusbar-background, #787f82));
      color: var(--wcd-designer-view-statusbar-color, #354348);
    }
  
    .bottom-scroll {
      width: calc(100% - 16px);
      position: absolute;
      bottom: var(--wcd-designer-view-statusbar-height, 28px);
      height: 16px;
      box-sizing: border-box;
      z-index: 1;
    }
    .right-scroll {
      height: calc(100% - var(--wcd-designer-view-statusbar-height, 28px) - 16px);
      position: absolute;
      right: 0;
      top: 0;
      width: 16px;
      box-sizing: border-box;
      z-index: 1;
    }
    .bottom-right {
      width: 16px;
      height: 16px;
      bottom: var(--wcd-designer-view-statusbar-height, 28px);
      right: 0;
      position: absolute;
      background: var(--wcd-designer-view-corner-background, #f0f0f0);
    }`;static [p(0x18f)]=html`
    <div id="outer">
      <node-projects-plain-scrollbar id="s-hor" value="0.5" class="bottom-scroll"></node-projects-plain-scrollbar>
      <node-projects-plain-scrollbar id="s-vert" value="0.5" orientation="vertical" class="right-scroll">
      </node-projects-plain-scrollbar>
      <div class="bottom-right"></div>
      <div id="lowertoolbar" role="group" aria-label="Canvas controls">
        <input id="zoomInput" type="text" value="100%" aria-label="Zoom percentage">
        <button type="button" title="Zoom out" aria-label="Zoom out" id="zoomDecrease" class="toolbar-control">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>
        </button>
        <button type="button" title="Zoom in" aria-label="Zoom in" id="zoomIncrease" class="toolbar-control">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>
        </button>
        <button type="button" title="Reset zoom to 100%" aria-label="Reset zoom to 100%" id="zoomReset" class="toolbar-control">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9l2-2v10M15 9l2-2v10"/><path d="M11 10h.01M11 14h.01" stroke-width="2.5"/></svg>
        </button>
        <button type="button" title="Zoom to fit" aria-label="Zoom to fit" id="zoomFit" class="toolbar-control">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>
        </button>
        <span class="toolbar-separator" aria-hidden="true"></span>
        <button type="button" title="Snap to grid (right-click to set grid size)" aria-label="Snap to grid" aria-pressed="false" id="alignGrid" class="toolbar-control">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18m6-18v18M3 9h18M3 15h18"/></svg>
        </button>
        <button type="button" title="Snap to elements" aria-label="Snap to elements" aria-pressed="false" id="alignSnap" class="toolbar-control">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4v9a3 3 0 0 0 6 0V4h4v9a7 7 0 0 1-14 0V4Z"/><path d="M5 8h4m6 0h4"/></svg>
        </button>
      </div>
    </div>`;constructor(c=![]){const v=p;super(),this['_restoreCachedInititalValues'](),this[v(0x1bc)]=this[v(0x16c)]('s-vert'),this[v(0x1ca)]=this['_getDomElement'](v(0x1b9));const d=this[v(0x16c)](v(0x17d));this['_designerCanvas']=new DesignerCanvas(c),this[v(0x175)]['id']='canvas',this['_designerCanvas'][v(0x191)](document[v(0x1ae)](v(0x1ad))),d['insertAdjacentElement']('afterbegin',this['_designerCanvas']),this[v(0x18b)]=new DesignerToolbar(),this[v(0x18b)]['id']=v(0x18c),this['_sVert']['insertAdjacentElement']('afterend',this[v(0x18b)]),this['_designerCanvas'][v(0x198)]['on'](()=>{const w=v;this['_zoomInput']['value']=Math['round'](this[w(0x175)]['zoomFactor']*0x64)+'%';const l=this[w(0x19d)]['canvasOffset'],m=this[w(0x19d)][w(0x1bb)]>this[w(0x19d)][w(0x165)]?this['designerCanvas']['designerOffsetWidth']:this['designerCanvas'][w(0x165)],n=this['designerCanvas'][w(0x1ac)]>this['designerCanvas']['offsetHeight']?this[w(0x19d)]['designerOffsetHeight']:this[w(0x19d)][w(0x184)];this[w(0x1ca)][w(0x182)]=l['x']/(-0x2*m)+0.5,this['_sVert'][w(0x182)]=l['y']/(-0x2*n)+0.5;}),this[v(0x1a7)]=this['_getDomElement']('zoomInput'),this['_zoomInput']['onkeydown']=l=>{const x=v;if(l['key']==x(0x192))this[x(0x1c6)](parseFloat(this[x(0x1a7)][x(0x182)])/0x64);},this[v(0x1a7)]['onblur']=()=>{const y=v;this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput'][y(0x182)])/0x64);},this[v(0x1a7)][v(0x176)]=this['_zoomInput'][v(0x197)];let e=this['_getDomElement']('zoomIncrease');this[v(0x1a2)](e,0x1);let f=this['_getDomElement'](v(0x17f));this[v(0x1a2)](f,-0x1);let g=this[v(0x16c)](v(0x17e));g['onclick']=()=>{const z=v;this[z(0x17e)]();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{const A=v;this[A(0x1c2)]();},this['addEventListener'](EventNames[v(0x1a5)],l=>this['_onWheel'](l));const i=(l,m)=>{const B=v;l[B(0x1c0)]['toggle'](B(0x1a0),m),l[B(0x194)]('aria-pressed',String(m));},j=this[v(0x16c)](v(0x1b2));j['onclick']=()=>{const C=v;this[C(0x175)][C(0x1b7)]=!this['_designerCanvas'][C(0x1b7)],i(j,this['_designerCanvas']['alignOnSnap']);},i(j,this[v(0x175)]['alignOnSnap']),j['oncontextmenu']=l=>{const D=v;l[D(0x19f)]();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{const E=v;this['_designerCanvas'][E(0x172)]=!this['_designerCanvas'][E(0x172)],i(k,this['_designerCanvas'][E(0x172)]);},i(k,this[v(0x175)][v(0x172)]),k['oncontextmenu']=l=>{const F=v;l[F(0x19f)]();let m=prompt(F(0x1b5),this['designerCanvas'][F(0x1cb)]['toString']());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas']['gridSize']=n;}},this[v(0x180)]=this['_getDomElement'](v(0x170)),this['_lowertoolbar'][v(0x1b0)]=l=>l['stopPropagation'](),this[v(0x1bc)][v(0x1a8)]('scrollbar-input',l=>this['_onScrollbar'](l)),this['_sHor'][v(0x1a8)]('scrollbar-input',l=>this['_onScrollbar'](l));}['zoomReset'](){const G=p;this['_designerCanvas'][G(0x195)]={'x':0x0,'y':0x0},this[G(0x175)]['zoomFactor']=0x1,this['_sVert'][G(0x182)]=0.5,this[G(0x1ca)][G(0x182)]=0.5,this['_zoomInput']['value']=Math[G(0x1b4)](this['_designerCanvas']['zoomFactor']*0x64)+'%';}[p(0x1c2)](){const H=p;this[H(0x175)]['zoomToFit']();}[p(0x1c6)](c){const I=p;if(!this['instanceServiceContainer'])return;if(!Number[I(0x16a)](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this['_designerCanvas']['zoomFactor'],this[I(0x175)][I(0x195)]);this['_designerCanvas']['zoomPoint'](e,c);}[p(0x1a2)](c,d){const J=p;c['onclick']=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c[J(0x19b)]=e=>{const K=J;if(!e['isPrimary']||e['button']!=0x0)return;this[K(0x1c7)](),this['_zoomPointerId']=e[K(0x17b)],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this[K(0x1a6)][K(0x178)](()=>this['_zoomStep'](d),()=>this[K(0x199)](d,0x4)),e[K(0x19f)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e[J(0x17b)]),c[J(0x196)]=e=>this['_stopZoomRepeat'](e[J(0x17b)]),c[J(0x1cc)]=e=>this[J(0x1c7)](e[J(0x17b)]),c['oncontextmenu']=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const L=p,e=this['_designerCanvas'][L(0x16e)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[L(0x1c6)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[L(0x1c6)](Math[L(0x1b6)](e-g,0.001));}}[p(0x1c7)](c){const M=p;if(c!=null&&c!==this[M(0x18a)])return;const d=this[M(0x18a)],e=this[M(0x189)];this[M(0x18a)]=null,this[M(0x189)]=null,this[M(0x1a6)][M(0x17c)]();if(e&&d!=null)try{if(e[M(0x19a)](d))e[M(0x1b1)](d);}catch{}}[p(0x185)](c){const N=p;if(!this[N(0x1aa)])return;if(c?.['detail']=='incrementLarge')c['target'][N(0x182)]+=0.25;else{if(c?.[N(0x1bd)]==N(0x1b8))c[N(0x171)][N(0x182)]-=0.25;else{if(c?.[N(0x1bd)]==N(0x1cd))c[N(0x171)][N(0x182)]+=0.05;else{if(c?.[N(0x1bd)]=='decrementSmall')c['target']['value']-=0.05;}}}const d=this[N(0x19d)]['designerOffsetWidth']>this[N(0x19d)][N(0x165)]?this[N(0x19d)]['designerOffsetWidth']:this['designerCanvas']['offsetWidth'],f=this[N(0x19d)][N(0x1ac)]>this['designerCanvas']['offsetHeight']?this[N(0x19d)]['designerOffsetHeight']:this[N(0x19d)]['offsetHeight'],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[N(0x1bc)]['value']-0.5)*-0x2;this['designerCanvas'][N(0x195)]={'x':g,'y':i};}[p(0x167)](c){const O=p;if(!this[O(0x1aa)])return;c[O(0x19f)]();if(c[O(0x173)]){let d=this[O(0x175)][O(0x16e)];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math[O(0x17a)](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas']['getNormalizedEventCoordinates'](c);this[O(0x19d)]['zoomTowardsPoint'](f,d);}else c[O(0x16d)]?(this[O(0x1ca)][O(0x182)]+=c['deltaY']/0x2710,this[O(0x185)](null)):(this['_sVert']['value']+=c[O(0x181)]/0x2710,this[O(0x185)](null),this[O(0x1ca)]['value']+=c['deltaX']/0x2710,this['_onScrollbar'](null));}get[p(0x174)](){return this['_designerCanvas']['designerWidth'];}set['designerWidth'](c){const P=p;this[P(0x175)]['designerWidth']=c;}get['designerHeight'](){const Q=p;return this[Q(0x175)][Q(0x1a9)];}set[p(0x1a9)](c){const R=p;this[R(0x175)]['designerHeight']=c;}set['additionalStyles'](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const S=p;this[S(0x175)][S(0x18e)](c);}async[p(0x177)](c){const T=p;this['_designerCanvas'][T(0x177)](c);}['canExecuteCommand'](c){const U=p;return this[U(0x175)][U(0x1a4)](c);}get[p(0x1ba)](){const V=p;return this[V(0x1aa)]?.['editingDocument'];}async[p(0x1bf)](c){const W=p;await c['commitPendingChanges']();if(!this[W(0x1aa)])this[W(0x187)](c['serviceContainer'],c);else this[W(0x175)][W(0x1bf)](c),this['initializeToolbar']();}[p(0x1af)](){const X=p;this[X(0x1c7)](),this['_toolbar']['dispose']();for(const c of this['_configButtons']){c[X(0x1c9)]?.(),c['remove']();}return this['_configButtons']=[],this['_designerCanvas']['detachDocument']();}[p(0x1c9)](){const Y=p;this[Y(0x1af)](),this[Y(0x175)]['dispose'](),this['_toolbar'][Y(0x1c9)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const Z=p;this[Z(0x1c4)]=c,this['_designerCanvas'][Z(0x187)](c,d),this[Z(0x1a3)]();}[p(0x1a3)](){const a0=p,c=this[a0(0x1c4)];this[a0(0x1aa)][a0(0x186)]=()=>this[a0(0x1af)]();for(const d of this[a0(0x1c3)]){d['dispose']?.(),d['remove']();}this[a0(0x1c3)]=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e['provideButtons'](this,this[a0(0x175)])){this['_configButtons']['push'](f),this[a0(0x180)]['appendChild'](f);}}this[a0(0x18b)]['initialize'](this[a0(0x1c4)],this);}[p(0x1c8)](){const a1=p;return this[a1(0x1ba)][a1(0x168)]();}async[p(0x1ab)](c,d=![]){const a2=p;await this[a2(0x175)][a2(0x1b3)](),await this[a2(0x1ba)]['loadHtml'](c,d);}static['wrapInDesigner'](c,d){const a3=p,e=new DesignerCanvas();e['initialize'](d);const f=e[a3(0x1c4)]['getLastServiceWhere'](a3(0x16b),g=>g['constructor']==DefaultHtmlParserService);return e['addDesignItems'](f['createDesignItems'](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}function a(){const a4=['offsetHeight','_onScrollbar','detachView','initialize','230713tCYIym','_zoomPointerTarget','_zoomPointerId','_toolbar','tool-bar','2546665ffGaKa','setDesignItems','template','96732HkoCAn','appendChild','Enter','1090013FBwwVJ','setAttribute','canvasOffset','onpointercancel','select','onZoomFactorChanged','_zoomStep','hasPointerCapture','onpointerdown','style','designerCanvas','344ONLsZJ','preventDefault','selected','readOnly','_configureZoomButton','initializeToolbar','canExecuteCommand','Wheel','_zoomHoldRepeater','_zoomInput','addEventListener','designerHeight','instanceServiceContainer','parseDesignerHTML','designerOffsetHeight','slot','createElement','detachDocument','onwheel','releasePointerCapture','alignSnap','whenReady','round','raster\x20size','max','alignOnSnap','decrementLarge','s-hor','editingDocument','designerOffsetWidth','_sVert','detail','6BuPgFF','attachDocument','classList','2146101ZaLSKD','zoomToFit','_configButtons','serviceContainer','622010rNnCii','_zoomAroundViewportCenter','_stopZoomRepeat','getDesignerHTML','dispose','_sHor','gridSize','onlostpointercapture','incrementSmall','offsetWidth','660JwpDrD','_onWheel','getHtml','4WFmLtR','isFinite','htmlParserService','_getDomElement','shiftKey','zoomFactor','define','lowertoolbar','target','alignOnGrid','ctrlKey','designerWidth','_designerCanvas','onclick','executeCommand','start','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','exp','pointerId','stop','outer','zoomReset','zoomDecrease','_lowertoolbar','deltaY','value','520086AMCtgm'];a=function(){return a4;};return a();}customElements[p(0x16f)]('node-projects-designer-view',DesignerView);