function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}const q=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x149))/0x1*(parseInt(o(0x178))/0x2)+-parseInt(o(0x139))/0x3*(parseInt(o(0x159))/0x4)+parseInt(o(0x17a))/0x5*(-parseInt(o(0x15c))/0x6)+parseInt(o(0x180))/0x7*(parseInt(o(0x147))/0x8)+parseInt(o(0x165))/0x9*(parseInt(o(0x160))/0xa)+-parseInt(o(0x16c))/0xb*(parseInt(o(0x126))/0xc)+parseInt(o(0x146))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd0b1d));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function a(){const a0=['dispose','242xBYcBv','_toolbar','designerHeight','_zoomStep','_configureZoomButton','value','editingDocument','_sVert','alignOnGrid','instanceServiceContainer','additionalStyles','scrollbar-input','493244aBukzJ','offsetHeight','170845oNqGmJ','remove','createDesignItems','gridSize','toString','pointerId','7rxIwuG','_stopZoomRepeat','exp','htmlParserService','zoomFit','designerOffsetWidth','_zoomPointerId','getLastServiceWhere','style','_lowertoolbar','button','outerRect','alignOnSnap','zoomToFit','onclick','3612eJBAaE','createElement','max','_onWheel','setPointerCapture','define','_configButtons','tool-bar','releasePointerCapture','attachDocument','wrapInDesigner','canExecuteCommand','target','toggle','height','_onScrollbar','classList','deltaY','serviceContainer','2742EwHWIV','onkeydown','detachDocument','onlostpointercapture','readOnly','shiftKey','initializeToolbar','designerOffsetHeight','_zoomAroundViewportCenter','_getDomElement','oncontextmenu','push','_sHor','21710052FPYSOk','9716152nLcVug','zoomFactor','1yQHDXi','whenReady','addEventListener','onwheel','canvasOffset','isPrimary','decrementLarge','Wheel','slot','provideButtons','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','appendChild','initialize','lowertoolbar','onpointercancel','canvas','4068KMMRWN','addDesignItems','designerCanvas','180UdOeVU','zoomReset','onZoomFactorChanged','_zoomHoldRepeater','890710wTMEQT','hasPointerCapture','preventDefault','setDesignItems','offsetWidth','18pgXJOM','designerWidth','detail','_designerCanvas','afterbegin','_zoomInput'];a=function(){return a0;};return a();}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get['serviceContainer'](){const p=b;return this[p(0x168)][p(0x138)];}set['serviceContainer'](c){this['_designerCanvas']['serviceContainer']=c;}get[q(0x175)](){return this['_designerCanvas']['instanceServiceContainer'];}set['instanceServiceContainer'](c){const r=q;if(!c[r(0x172)])throw new Error(r(0x153));this['_designerCanvas']['attachDocument'](c['editingDocument']),this[r(0x13f)]();}[q(0x168)];get[q(0x15b)](){return this['_designerCanvas'];}get[q(0x13d)](){const s=q;return this[s(0x168)]['readOnly'];}set[q(0x13d)](c){const t=q;this['_designerCanvas'][t(0x13d)]=c;}[q(0x12c)]=[];['_zoomInput'];['_lowertoolbar'];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];['_zoomPointerTarget'];static [q(0x11f)]=css`
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
    </div>`;constructor(c=![]){const u=q;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this[u(0x142)]('s-vert'),this['_sHor']=this[u(0x142)]('s-hor');const d=this[u(0x142)]('outer');this[u(0x168)]=new DesignerCanvas(c),this[u(0x168)]['id']=u(0x158),this[u(0x168)]['appendChild'](document[u(0x127)](u(0x151))),d['insertAdjacentElement'](u(0x169),this['_designerCanvas']),this['_toolbar']=new DesignerToolbar(),this[u(0x16d)]['id']=u(0x12d),this['_sVert']['insertAdjacentElement']('afterend',this['_toolbar']),this[u(0x168)][u(0x15e)]['on'](()=>{const v=u;this[v(0x16a)][v(0x171)]=Math['round'](this[v(0x168)]['zoomFactor']*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this[v(0x15b)]['designerOffsetWidth']>this[v(0x15b)]['offsetWidth']?this['designerCanvas'][v(0x185)]:this['designerCanvas'][v(0x164)],n=this['designerCanvas'][v(0x140)]>this['designerCanvas']['offsetHeight']?this[v(0x15b)]['designerOffsetHeight']:this['designerCanvas']['offsetHeight'];this['_sHor'][v(0x171)]=l['x']/(-0x2*m)+0.5,this['_sVert'][v(0x171)]=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[u(0x142)]('zoomInput'),this['_zoomInput'][u(0x13a)]=l=>{const w=u;if(l['key']=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this[w(0x16a)]['value'])/0x64);},this[u(0x16a)]['onblur']=()=>{const x=u;this['_zoomAroundViewportCenter'](parseFloat(this[x(0x16a)][x(0x171)])/0x64);},this[u(0x16a)][u(0x125)]=this[u(0x16a)]['select'];let e=this['_getDomElement']('zoomIncrease');this[u(0x170)](e,0x1);let f=this[u(0x142)]('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement'](u(0x15d));g[u(0x125)]=()=>{const y=u;this[y(0x15d)]();};let h=this[u(0x142)](u(0x184));h['onclick']=()=>{const z=u;this[z(0x124)]();},this['addEventListener'](EventNames[u(0x150)],l=>this[u(0x129)](l));const i=(l,m)=>{const A=u;l[A(0x136)][A(0x133)]('selected',m),l['setAttribute']('aria-pressed',String(m));},j=this['_getDomElement']('alignSnap');j[u(0x125)]=()=>{const B=u;this['_designerCanvas'][B(0x123)]=!this['_designerCanvas']['alignOnSnap'],i(j,this['_designerCanvas'][B(0x123)]);},i(j,this[u(0x168)]['alignOnSnap']),j[u(0x143)]=l=>{l['preventDefault']();};const k=this[u(0x142)]('alignGrid');k['onclick']=()=>{const C=u;this[C(0x168)][C(0x174)]=!this['_designerCanvas'][C(0x174)],i(k,this['_designerCanvas'][C(0x174)]);},i(k,this['_designerCanvas'][u(0x174)]),k['oncontextmenu']=l=>{const D=u;l[D(0x162)]();let m=prompt('raster\x20size',this[D(0x15b)]['gridSize'][D(0x17e)]());if(m){let n=parseInt(m);if(n>0x0)this[D(0x15b)][D(0x17d)]=n;}},this[u(0x120)]=this['_getDomElement'](u(0x156)),this['_lowertoolbar'][u(0x14c)]=l=>l['stopPropagation'](),this['_sVert']['addEventListener'](u(0x177),l=>this['_onScrollbar'](l)),this['_sHor'][u(0x14b)]('scrollbar-input',l=>this[u(0x135)](l));}[q(0x15d)](){const E=q;this['_designerCanvas'][E(0x14d)]={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this['_sVert']['value']=0.5,this['_sHor'][E(0x171)]=0.5,this[E(0x16a)][E(0x171)]=Math['round'](this[E(0x168)]['zoomFactor']*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}['_zoomAroundViewportCenter'](c){const F=q;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[F(0x168)][F(0x122)],e=getCanvasPointAtViewportCenter(d['width'],d[F(0x134)],this['_designerCanvas'][F(0x148)],this['_designerCanvas']['canvasOffset']);this['_designerCanvas']['zoomPoint'](e,c);}[q(0x170)](c,d){const I=q;c['onclick']=e=>{const G=b;if(e[G(0x167)]===0x0)this[G(0x16f)](d);},c['onpointerdown']=e=>{const H=b;if(!e[H(0x14e)]||e[H(0x121)]!=0x0)return;this[H(0x181)](),this[H(0x11d)]=e['pointerId'],this['_zoomPointerTarget']=c;try{c[H(0x12a)](e['pointerId']);}catch{}this[H(0x15f)]['start'](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e[H(0x162)]();},c['onpointerup']=e=>this[I(0x181)](e[I(0x17f)]),c[I(0x157)]=e=>this[I(0x181)](e['pointerId']),c[I(0x13c)]=e=>this['_stopZoomRepeat'](e[I(0x17f)]),c[I(0x143)]=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const J=q,e=this[J(0x168)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[J(0x141)](Math[J(0x128)](e-g,0.001));}}[q(0x181)](c){const K=q;if(c!=null&&c!==this[K(0x11d)])return;const d=this[K(0x11d)],e=this['_zoomPointerTarget'];this[K(0x11d)]=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater']['stop']();if(e&&d!=null)try{if(e[K(0x161)](d))e[K(0x12e)](d);}catch{}}[q(0x135)](c){const L=q;if(!this[L(0x175)])return;if(c?.['detail']=='incrementLarge')c['target'][L(0x171)]+=0.25;else{if(c?.[L(0x167)]==L(0x14f))c[L(0x132)]['value']-=0.25;else{if(c?.['detail']=='incrementSmall')c[L(0x132)]['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c['target']['value']-=0.05;}}}const d=this[L(0x15b)]['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this[L(0x15b)][L(0x164)],f=this['designerCanvas'][L(0x140)]>this[L(0x15b)][L(0x179)]?this[L(0x15b)]['designerOffsetHeight']:this[L(0x15b)]['offsetHeight'],g=d*(this[L(0x145)]['value']-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}[q(0x129)](c){const M=q;if(!this[M(0x175)])return;c['preventDefault']();if(c['ctrlKey']){let d=this['_designerCanvas']['zoomFactor'];const e=c[M(0x137)]<0x0?0x1:-0x1;d*=Math[M(0x182)](e*0.2);if(d<0.02)d=0.02;const f=this[M(0x15b)]['getNormalizedEventCoordinates'](c);this['designerCanvas']['zoomTowardsPoint'](f,d);}else c[M(0x13e)]?(this[M(0x145)][M(0x171)]+=c[M(0x137)]/0x2710,this[M(0x135)](null)):(this[M(0x173)]['value']+=c['deltaY']/0x2710,this[M(0x135)](null),this[M(0x145)][M(0x171)]+=c['deltaX']/0x2710,this[M(0x135)](null));}get['designerWidth'](){const N=q;return this[N(0x168)][N(0x166)];}set['designerWidth'](c){const O=q;this[O(0x168)][O(0x166)]=c;}get[q(0x16e)](){return this['_designerCanvas']['designerHeight'];}set[q(0x16e)](c){const P=q;this[P(0x168)]['designerHeight']=c;}set[q(0x176)](c){this['_designerCanvas']['additionalStyles']=c;}[q(0x163)](c){const Q=q;this[Q(0x168)][Q(0x163)](c);}async['executeCommand'](c){this['_designerCanvas']['executeCommand'](c);}['canExecuteCommand'](c){const R=q;return this[R(0x168)][R(0x131)](c);}get[q(0x172)](){return this['instanceServiceContainer']?.['editingDocument'];}async[q(0x12f)](c){const S=q;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this['initialize'](c['serviceContainer'],c);else this['_designerCanvas'][S(0x12f)](c),this[S(0x13f)]();}['detachDocument'](){const T=q;this['_stopZoomRepeat'](),this['_toolbar'][T(0x16b)]();for(const c of this[T(0x12c)]){c[T(0x16b)]?.(),c[T(0x17b)]();}return this['_configButtons']=[],this['_designerCanvas'][T(0x13b)]();}['dispose'](){const U=q;this['detachDocument'](),this['_designerCanvas'][U(0x16b)](),this[U(0x16d)][U(0x16b)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const V=q;this[V(0x138)]=c,this['_designerCanvas'][V(0x155)](c,d),this['initializeToolbar']();}[q(0x13f)](){const W=q,c=this['serviceContainer'];this['instanceServiceContainer']['detachView']=()=>this[W(0x13b)]();for(const d of this[W(0x12c)]){d['dispose']?.(),d[W(0x17b)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e[W(0x152)](this,this[W(0x168)])){this['_configButtons'][W(0x144)](f),this[W(0x120)][W(0x154)](f);}}this[W(0x16d)][W(0x155)](this['serviceContainer'],this);}['getDesignerHTML'](){const X=q;return this[X(0x172)]['getHtml']();}async['parseDesignerHTML'](c,d=![]){const Y=q;await this['_designerCanvas'][Y(0x14a)](),await this[Y(0x172)]['loadHtml'](c,d);}static[q(0x130)](c,d){const Z=q,e=new DesignerCanvas();e['initialize'](d);const f=e['serviceContainer'][Z(0x11e)](Z(0x183),g=>g['constructor']==DefaultHtmlParserService);return e[Z(0x15a)](f[Z(0x17c)](c,e[Z(0x138)],e[Z(0x175)])),e;}}customElements[q(0x12b)]('node-projects-designer-view',DesignerView);