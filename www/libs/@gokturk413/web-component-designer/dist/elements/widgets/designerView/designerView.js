const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x19c))/0x1*(parseInt(o(0x194))/0x2)+-parseInt(o(0x1d8))/0x3+parseInt(o(0x1cb))/0x4+parseInt(o(0x1a0))/0x5+-parseInt(o(0x1d9))/0x6*(parseInt(o(0x1b6))/0x7)+-parseInt(o(0x1ac))/0x8*(-parseInt(o(0x1b0))/0x9)+-parseInt(o(0x182))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x72152));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';function a(){const a2=['onpointerup','raster\x20size','serviceContainer','_sHor','designerWidth','ctrlKey','getHtml','_sVert','outer','oncontextmenu','_zoomHoldRepeater','246610TeofjK','zoomTowardsPoint','pointerId','target','parseDesignerHTML','button','tool-bar','key','max','createDesignItems','s-hor','_zoomPointerTarget','_getDomElement','zoomFactor','designViewConfigButtons','value','appendChild','onpointerdown','222316vVpMMl','canvas','designerOffsetWidth','insertAdjacentElement','initialize','_configButtons','incrementLarge','additionalStyles','1vnmuvd','htmlParserService','afterend','aria-pressed','4108180nuKbPs','_designerCanvas','zoomToFit','readOnly','instanceServiceContainer','designerHeight','width','_zoomStep','whenReady','Wheel','round','onlostpointercapture','56kPTHrJ','editingDocument','_toolbar','_zoomPointerId','751608lRajvL','remove','initializeToolbar','wrapInDesigner','alignSnap','onclick','216090SfmOSv','getLastServiceWhere','canExecuteCommand','_configureZoomButton','shiftKey','template','offsetHeight','select','attachDocument','selected','executeCommand','outerRect','detail','alignOnGrid','addEventListener','designerCanvas','toggle','zoomReset','_zoomInput','toString','addDesignItems','834408iSDfso','dispose','push','designerOffsetHeight','preventDefault','node-projects-designer-view','detachView','detachDocument','incrementSmall','canvasOffset','_stopZoomRepeat','isPrimary','alignGrid','719913wOcKPI','150NJqoDx','afterbegin','slot','deltaY','_zoomAroundViewportCenter','alignOnSnap','_onScrollbar','gridSize','disconnectedCallback'];a=function(){return a2;};return a();}function b(c,d){c=c-0x175;const e=a();let f=e[c];return f;}import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x17a)];get['serviceContainer'](){const q=p;return this[q(0x1a1)]['serviceContainer'];}set['serviceContainer'](c){const r=p;this[r(0x1a1)]['serviceContainer']=c;}get['instanceServiceContainer'](){const s=p;return this['_designerCanvas'][s(0x1a4)];}set[p(0x1a4)](c){const t=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this['_designerCanvas']['attachDocument'](c['editingDocument']),this[t(0x1b2)]();}[p(0x1a1)];get[p(0x1c5)](){return this['_designerCanvas'];}get[p(0x1a3)](){const u=p;return this['_designerCanvas'][u(0x1a3)];}set[p(0x1a3)](c){const v=p;this[v(0x1a1)]['readOnly']=c;}['_configButtons']=[];[p(0x1c8)];['_lowertoolbar'];[p(0x1ae)];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];[p(0x18d)];static ['style']=css`
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
    }`;static [p(0x1bb)]=html`
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
    </div>`;constructor(c=![]){const w=p;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this[w(0x18e)]('s-vert'),this[w(0x17a)]=this[w(0x18e)](w(0x18c));const d=this['_getDomElement'](w(0x17f));this[w(0x1a1)]=new DesignerCanvas(c),this[w(0x1a1)]['id']=w(0x195),this[w(0x1a1)]['appendChild'](document['createElement'](w(0x1db))),d[w(0x197)](w(0x1da),this[w(0x1a1)]),this[w(0x1ae)]=new DesignerToolbar(),this['_toolbar']['id']=w(0x188),this[w(0x17e)][w(0x197)](w(0x19e),this['_toolbar']),this[w(0x1a1)]['onZoomFactorChanged']['on'](()=>{const x=w;this[x(0x1c8)][x(0x191)]=Math['round'](this['_designerCanvas'][x(0x18f)]*0x64)+'%';const l=this[x(0x1c5)]['canvasOffset'],m=this[x(0x1c5)][x(0x196)]>this['designerCanvas']['offsetWidth']?this[x(0x1c5)][x(0x196)]:this[x(0x1c5)]['offsetWidth'],n=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas'][x(0x1bc)]?this['designerCanvas'][x(0x1ce)]:this['designerCanvas'][x(0x1bc)];this[x(0x17a)]['value']=l['x']/(-0x2*m)+0.5,this[x(0x17e)][x(0x191)]=l['y']/(-0x2*n)+0.5;}),this[w(0x1c8)]=this[w(0x18e)]('zoomInput'),this['_zoomInput']['onkeydown']=l=>{const y=w;if(l[y(0x189)]=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this[y(0x1c8)]['value'])/0x64);},this[w(0x1c8)]['onblur']=()=>{const z=w;this[z(0x1dd)](parseFloat(this['_zoomInput'][z(0x191)])/0x64);},this[w(0x1c8)][w(0x1b5)]=this['_zoomInput'][w(0x1bd)];let e=this[w(0x18e)]('zoomIncrease');this[w(0x1b9)](e,0x1);let f=this['_getDomElement']('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement'](w(0x1c7));g['onclick']=()=>{this['zoomReset']();};let h=this['_getDomElement']('zoomFit');h[w(0x1b5)]=()=>{const A=w;this[A(0x1a2)]();},this[w(0x1c4)](EventNames[w(0x1a9)],l=>this['_onWheel'](l));const i=(l,m)=>{const B=w;l['classList'][B(0x1c6)](B(0x1bf),m),l['setAttribute'](B(0x19f),String(m));},j=this['_getDomElement'](w(0x1b4));j['onclick']=()=>{const C=w;this[C(0x1a1)][C(0x1de)]=!this['_designerCanvas']['alignOnSnap'],i(j,this['_designerCanvas'][C(0x1de)]);},i(j,this['_designerCanvas'][w(0x1de)]),j[w(0x180)]=l=>{l['preventDefault']();};const k=this[w(0x18e)](w(0x1d7));k[w(0x1b5)]=()=>{const D=w;this[D(0x1a1)]['alignOnGrid']=!this['_designerCanvas'][D(0x1c3)],i(k,this['_designerCanvas'][D(0x1c3)]);},i(k,this[w(0x1a1)]['alignOnGrid']),k[w(0x180)]=l=>{const E=w;l[E(0x1cf)]();let m=prompt(E(0x178),this['designerCanvas'][E(0x175)][E(0x1c9)]());if(m){let n=parseInt(m);if(n>0x0)this[E(0x1c5)][E(0x175)]=n;}},this['_lowertoolbar']=this['_getDomElement']('lowertoolbar'),this['_lowertoolbar']['onwheel']=l=>l['stopPropagation'](),this['_sVert']['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l)),this[w(0x17a)]['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}['zoomReset'](){const F=p;this['_designerCanvas']['canvasOffset']={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this['_sVert'][F(0x191)]=0.5,this[F(0x17a)]['value']=0.5,this[F(0x1c8)][F(0x191)]=Math[F(0x1aa)](this['_designerCanvas'][F(0x18f)]*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}['_zoomAroundViewportCenter'](c){const G=p;if(!this[G(0x1a4)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this['_designerCanvas'][G(0x1c1)],e=getCanvasPointAtViewportCenter(d[G(0x1a6)],d['height'],this['_designerCanvas']['zoomFactor'],this[G(0x1a1)]['canvasOffset']);this['_designerCanvas']['zoomPoint'](e,c);}[p(0x1b9)](c,d){const H=p;c['onclick']=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c[H(0x193)]=e=>{const I=H;if(!e[I(0x1d6)]||e[I(0x187)]!=0x0)return;this[I(0x1d5)](),this[I(0x1af)]=e[I(0x184)],this[I(0x18d)]=c;try{c['setPointerCapture'](e[I(0x184)]);}catch{}this[I(0x181)]['start'](()=>this[I(0x1a7)](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c[H(0x177)]=e=>this[H(0x1d5)](e['pointerId']),c['onpointercancel']=e=>this[H(0x1d5)](e[H(0x184)]),c[H(0x1ab)]=e=>this['_stopZoomRepeat'](e[H(0x184)]),c['oncontextmenu']=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const J=p,e=this[J(0x1a1)][J(0x18f)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[J(0x1dd)](Math[J(0x18a)](e-g,0.001));}}['_stopZoomRepeat'](c){const K=p;if(c!=null&&c!==this[K(0x1af)])return;const d=this['_zoomPointerId'],e=this[K(0x18d)];this['_zoomPointerId']=null,this[K(0x18d)]=null,this[K(0x181)]['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}[p(0x1df)](c){const L=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']==L(0x19a))c[L(0x185)]['value']+=0.25;else{if(c?.[L(0x1c2)]=='decrementLarge')c['target']['value']-=0.25;else{if(c?.[L(0x1c2)]==L(0x1d3))c['target'][L(0x191)]+=0.05;else{if(c?.['detail']=='decrementSmall')c['target'][L(0x191)]-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this[L(0x1c5)]['offsetWidth'],f=this[L(0x1c5)]['designerOffsetHeight']>this[L(0x1c5)][L(0x1bc)]?this['designerCanvas'][L(0x1ce)]:this['designerCanvas'][L(0x1bc)],g=d*(this[L(0x17a)]['value']-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this['designerCanvas'][L(0x1d4)]={'x':g,'y':i};}['_onWheel'](c){const M=p;if(!this[M(0x1a4)])return;c['preventDefault']();if(c[M(0x17c)]){let d=this[M(0x1a1)][M(0x18f)];const e=c[M(0x1dc)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[M(0x1c5)]['getNormalizedEventCoordinates'](c);this['designerCanvas'][M(0x183)](f,d);}else c[M(0x1ba)]?(this[M(0x17a)][M(0x191)]+=c[M(0x1dc)]/0x2710,this['_onScrollbar'](null)):(this[M(0x17e)][M(0x191)]+=c[M(0x1dc)]/0x2710,this['_onScrollbar'](null),this['_sHor']['value']+=c['deltaX']/0x2710,this['_onScrollbar'](null));}get[p(0x17b)](){const N=p;return this['_designerCanvas'][N(0x17b)];}set[p(0x17b)](c){const O=p;this[O(0x1a1)][O(0x17b)]=c;}get[p(0x1a5)](){const P=p;return this[P(0x1a1)]['designerHeight'];}set[p(0x1a5)](c){this['_designerCanvas']['designerHeight']=c;}set[p(0x19b)](c){const Q=p;this['_designerCanvas'][Q(0x19b)]=c;}['setDesignItems'](c){this['_designerCanvas']['setDesignItems'](c);}async[p(0x1c0)](c){const R=p;this['_designerCanvas'][R(0x1c0)](c);}[p(0x1b8)](c){const S=p;return this[S(0x1a1)]['canExecuteCommand'](c);}get['editingDocument'](){const T=p;return this[T(0x1a4)]?.[T(0x1ad)];}async[p(0x1be)](c){const U=p;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this['initialize'](c[U(0x179)],c);else this['_designerCanvas'][U(0x1be)](c),this[U(0x1b2)]();}[p(0x1d2)](){const V=p;this[V(0x1d5)](),this[V(0x1ae)][V(0x1cc)]();for(const c of this[V(0x199)]){c[V(0x1cc)]?.(),c[V(0x1b1)]();}return this['_configButtons']=[],this[V(0x1a1)]['detachDocument']();}[p(0x1cc)](){const W=p;this[W(0x1d2)](),this[W(0x1a1)][W(0x1cc)](),this[W(0x1ae)]['dispose']();}[p(0x176)](){this['_stopZoomRepeat']();}[p(0x198)](c,d){const X=p;this[X(0x179)]=c,this[X(0x1a1)]['initialize'](c,d),this[X(0x1b2)]();}['initializeToolbar'](){const Y=p,c=this['serviceContainer'];this[Y(0x1a4)][Y(0x1d1)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d[Y(0x1cc)]?.(),d[Y(0x1b1)]();}this[Y(0x199)]=[];if(c['designViewConfigButtons'])for(let e of c[Y(0x190)]){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this[Y(0x199)][Y(0x1cd)](f),this['_lowertoolbar'][Y(0x192)](f);}}this[Y(0x1ae)]['initialize'](this[Y(0x179)],this);}['getDesignerHTML'](){const Z=p;return this[Z(0x1ad)][Z(0x17d)]();}async[p(0x186)](c,d=![]){const a0=p;await this['_designerCanvas'][a0(0x1a8)](),await this['editingDocument']['loadHtml'](c,d);}static[p(0x1b3)](c,d){const a1=p,e=new DesignerCanvas();e['initialize'](d);const f=e['serviceContainer'][a1(0x1b7)](a1(0x19d),g=>g['constructor']==DefaultHtmlParserService);return e[a1(0x1ca)](f[a1(0x18b)](c,e['serviceContainer'],e[a1(0x1a4)])),e;}}customElements['define'](p(0x1d0),DesignerView);