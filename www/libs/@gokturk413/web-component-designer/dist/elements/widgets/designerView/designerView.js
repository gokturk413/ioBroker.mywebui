const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x14b))/0x1+-parseInt(o(0x17c))/0x2+parseInt(o(0x147))/0x3+parseInt(o(0x15c))/0x4*(-parseInt(o(0x11f))/0x5)+parseInt(o(0x162))/0x6*(-parseInt(o(0x154))/0x7)+-parseInt(o(0x129))/0x8+parseInt(o(0x123))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f6ae));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function a(){const a2=['gridSize','detail','scrollbar-input','stop','hasPointerCapture','Wheel','_sHor','afterbegin','attachDocument','toString','designerHeight','setAttribute','deltaY','2295264EpWjZd','zoomFit','_zoomPointerId','afterend','designerOffsetWidth','constructor','detachDocument','editingDocument','3011005zDoHTi','additionalStyles','style','executeCommand','38617758bvvKCs','onclick','shiftKey','addEventListener','zoomReset','remove','8480896rRmhyH','_stopZoomRepeat','_getDomElement','addDesignItems','designerOffsetHeight','_configButtons','loadHtml','target','insertAdjacentElement','_sVert','canvasOffset','value','alignOnGrid','zoomFactor','_toolbar','_lowertoolbar','zoomPoint','pointerId','onpointerdown','Enter','_zoomInput','whenReady','dispose','instanceServiceContainer','readOnly','max','zoomIncrease','stopPropagation','isPrimary','designerWidth','1409850CvzheR','button','initialize','s-vert','564746VeDFGp','onblur','oncontextmenu','onpointerup','zoomInput','parseDesignerHTML','provideButtons','getNormalizedEventCoordinates','_designerCanvas','7EZeRxT','_zoomAroundViewportCenter','zoomDecrease','onwheel','designerCanvas','incrementSmall','aria-pressed','designViewConfigButtons','4FgSwvT','_zoomPointerTarget','raster\x20size','htmlParserService','_configureZoomButton','slot','4792098rHJRfv','key','preventDefault','offsetWidth','appendChild','_onScrollbar','createElement','_zoomStep','select','canExecuteCommand','start','offsetHeight','serviceContainer'];a=function(){return a2;};return a();}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';function b(c,d){c=c-0x11b;const e=a();let f=e[c];return f;}import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x132)];[p(0x175)];get[p(0x16e)](){const q=p;return this[q(0x153)][q(0x16e)];}set['serviceContainer'](c){this['_designerCanvas']['serviceContainer']=c;}get[p(0x140)](){const r=p;return this['_designerCanvas'][r(0x140)];}set[p(0x140)](c){const s=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[s(0x153)][s(0x177)](c['editingDocument']),this['initializeToolbar']();}['_designerCanvas'];get['designerCanvas'](){const t=p;return this[t(0x153)];}get[p(0x141)](){const u=p;return this[u(0x153)]['readOnly'];}set[p(0x141)](c){const v=p;this[v(0x153)]['readOnly']=c;}['_configButtons']=[];[p(0x13d)];['_lowertoolbar'];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];['_zoomPointerTarget'];static [p(0x121)]=css`
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
    }`;static ['template']=html`
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
    </div>`;constructor(c=![]){const w=p;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this['_getDomElement'](w(0x14a)),this['_sHor']=this[w(0x12b)]('s-hor');const d=this['_getDomElement']('outer');this[w(0x153)]=new DesignerCanvas(c),this[w(0x153)]['id']='canvas',this['_designerCanvas']['appendChild'](document[w(0x168)](w(0x161))),d[w(0x131)](w(0x176),this[w(0x153)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this['_sVert'][w(0x131)](w(0x17f),this[w(0x137)]),this[w(0x153)]['onZoomFactorChanged']['on'](()=>{const x=w;this[x(0x13d)]['value']=Math['round'](this[x(0x153)]['zoomFactor']*0x64)+'%';const l=this['designerCanvas'][x(0x133)],m=this['designerCanvas'][x(0x11b)]>this['designerCanvas']['offsetWidth']?this[x(0x158)][x(0x11b)]:this['designerCanvas']['offsetWidth'],n=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this[x(0x158)][x(0x12d)]:this[x(0x158)][x(0x16d)];this[x(0x175)][x(0x134)]=l['x']/(-0x2*m)+0.5,this[x(0x132)][x(0x134)]=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[w(0x12b)](w(0x14f)),this['_zoomInput']['onkeydown']=l=>{const y=w;if(l[y(0x163)]==y(0x13c))this['_zoomAroundViewportCenter'](parseFloat(this[y(0x13d)][y(0x134)])/0x64);},this['_zoomInput'][w(0x14c)]=()=>{const z=w;this[z(0x155)](parseFloat(this[z(0x13d)][z(0x134)])/0x64);},this['_zoomInput']['onclick']=this['_zoomInput'][w(0x16a)];let e=this[w(0x12b)](w(0x143));this['_configureZoomButton'](e,0x1);let f=this['_getDomElement'](w(0x156));this[w(0x160)](f,-0x1);let g=this[w(0x12b)]('zoomReset');g[w(0x124)]=()=>{const A=w;this[A(0x127)]();};let h=this['_getDomElement'](w(0x17d));h['onclick']=()=>{this['zoomToFit']();},this[w(0x126)](EventNames[w(0x174)],l=>this['_onWheel'](l));const i=(l,m)=>{const B=w;l['classList']['toggle']('selected',m),l[B(0x17a)](B(0x15a),String(m));},j=this['_getDomElement']('alignSnap');j['onclick']=()=>{this['_designerCanvas']['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this['_designerCanvas']['alignOnSnap']);},i(j,this[w(0x153)]['alignOnSnap']),j['oncontextmenu']=l=>{const C=w;l[C(0x164)]();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{const D=w;this['_designerCanvas']['alignOnGrid']=!this['_designerCanvas']['alignOnGrid'],i(k,this[D(0x153)]['alignOnGrid']);},i(k,this['_designerCanvas'][w(0x135)]),k[w(0x14d)]=l=>{const E=w;l[E(0x164)]();let m=prompt(E(0x15e),this['designerCanvas']['gridSize'][E(0x178)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][E(0x16f)]=n;}},this[w(0x138)]=this[w(0x12b)]('lowertoolbar'),this['_lowertoolbar'][w(0x157)]=l=>l[w(0x144)](),this['_sVert'][w(0x126)](w(0x171),l=>this[w(0x167)](l)),this[w(0x175)]['addEventListener'](w(0x171),l=>this['_onScrollbar'](l));}['zoomReset'](){const F=p;this[F(0x153)]['canvasOffset']={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this['_sVert'][F(0x134)]=0.5,this['_sHor']['value']=0.5,this['_zoomInput']['value']=Math['round'](this[F(0x153)][F(0x136)]*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}['_zoomAroundViewportCenter'](c){const G=p;if(!this[G(0x140)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[G(0x153)][G(0x136)],this['_designerCanvas']['canvasOffset']);this[G(0x153)][G(0x139)](e,c);}['_configureZoomButton'](c,d){const H=p;c[H(0x124)]=e=>{const I=H;if(e[I(0x170)]===0x0)this['_zoomStep'](d);},c[H(0x13b)]=e=>{const J=H;if(!e[J(0x145)]||e[J(0x148)]!=0x0)return;this['_stopZoomRepeat'](),this[J(0x17e)]=e[J(0x13a)],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e[J(0x13a)]);}catch{}this['_zoomHoldRepeater'][J(0x16c)](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c[H(0x14e)]=e=>this[H(0x12a)](e['pointerId']),c['onpointercancel']=e=>this['_stopZoomRepeat'](e['pointerId']),c['onlostpointercapture']=e=>this[H(0x12a)](e['pointerId']),c[H(0x14d)]=e=>e[H(0x164)]();}[p(0x169)](c,d=0x1){const K=p,e=this['_designerCanvas'][K(0x136)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[K(0x155)](Math[K(0x142)](e-g,0.001));}}[p(0x12a)](c){const L=p;if(c!=null&&c!==this[L(0x17e)])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this[L(0x17e)]=null,this[L(0x15d)]=null,this['_zoomHoldRepeater'][L(0x172)]();if(e&&d!=null)try{if(e[L(0x173)](d))e['releasePointerCapture'](d);}catch{}}['_onScrollbar'](c){const M=p;if(!this[M(0x140)])return;if(c?.[M(0x170)]=='incrementLarge')c[M(0x130)]['value']+=0.25;else{if(c?.[M(0x170)]=='decrementLarge')c['target'][M(0x134)]-=0.25;else{if(c?.[M(0x170)]==M(0x159))c['target'][M(0x134)]+=0.05;else{if(c?.['detail']=='decrementSmall')c[M(0x130)]['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this[M(0x158)][M(0x165)]?this[M(0x158)]['designerOffsetWidth']:this[M(0x158)][M(0x165)],f=this['designerCanvas']['designerOffsetHeight']>this[M(0x158)][M(0x16d)]?this['designerCanvas'][M(0x12d)]:this[M(0x158)]['offsetHeight'],g=d*(this[M(0x175)][M(0x134)]-0.5)*-0x2,i=f*(this['_sVert'][M(0x134)]-0.5)*-0x2;this[M(0x158)]['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const N=p;if(!this['instanceServiceContainer'])return;c[N(0x164)]();if(c['ctrlKey']){let d=this[N(0x153)][N(0x136)];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][N(0x152)](c);this[N(0x158)]['zoomTowardsPoint'](f,d);}else c[N(0x125)]?(this['_sHor'][N(0x134)]+=c[N(0x17b)]/0x2710,this[N(0x167)](null)):(this[N(0x132)][N(0x134)]+=c[N(0x17b)]/0x2710,this['_onScrollbar'](null),this['_sHor'][N(0x134)]+=c['deltaX']/0x2710,this[N(0x167)](null));}get[p(0x146)](){const O=p;return this['_designerCanvas'][O(0x146)];}set['designerWidth'](c){this['_designerCanvas']['designerWidth']=c;}get['designerHeight'](){const P=p;return this['_designerCanvas'][P(0x179)];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set['additionalStyles'](c){const Q=p;this[Q(0x153)][Q(0x120)]=c;}['setDesignItems'](c){this['_designerCanvas']['setDesignItems'](c);}async[p(0x122)](c){const R=p;this['_designerCanvas'][R(0x122)](c);}[p(0x16b)](c){const S=p;return this[S(0x153)]['canExecuteCommand'](c);}get['editingDocument'](){const T=p;return this[T(0x140)]?.[T(0x11e)];}async['attachDocument'](c){const U=p;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this['initialize'](c[U(0x16e)],c);else this[U(0x153)]['attachDocument'](c),this['initializeToolbar']();}['detachDocument'](){const V=p;this[V(0x12a)](),this[V(0x137)][V(0x13f)]();for(const c of this[V(0x12e)]){c[V(0x13f)]?.(),c[V(0x128)]();}return this[V(0x12e)]=[],this[V(0x153)]['detachDocument']();}['dispose'](){const W=p;this[W(0x11d)](),this[W(0x153)][W(0x13f)](),this['_toolbar'][W(0x13f)]();}['disconnectedCallback'](){const X=p;this[X(0x12a)]();}['initialize'](c,d){const Y=p;this['serviceContainer']=c,this[Y(0x153)]['initialize'](c,d),this['initializeToolbar']();}['initializeToolbar'](){const Z=p,c=this[Z(0x16e)];this['instanceServiceContainer']['detachView']=()=>this[Z(0x11d)]();for(const d of this[Z(0x12e)]){d['dispose']?.(),d['remove']();}this['_configButtons']=[];if(c[Z(0x15b)])for(let e of c[Z(0x15b)]){for(let f of e[Z(0x151)](this,this[Z(0x153)])){this[Z(0x12e)]['push'](f),this['_lowertoolbar'][Z(0x166)](f);}}this['_toolbar'][Z(0x149)](this['serviceContainer'],this);}['getDesignerHTML'](){return this['editingDocument']['getHtml']();}async[p(0x150)](c,d=![]){const a0=p;await this['_designerCanvas'][a0(0x13e)](),await this['editingDocument'][a0(0x12f)](c,d);}static['wrapInDesigner'](c,d){const a1=p,e=new DesignerCanvas();e[a1(0x149)](d);const f=e[a1(0x16e)]['getLastServiceWhere'](a1(0x15f),g=>g[a1(0x11c)]==DefaultHtmlParserService);return e[a1(0x12c)](f['createDesignItems'](c,e[a1(0x16e)],e['instanceServiceContainer'])),e;}}customElements['define']('node-projects-designer-view',DesignerView);