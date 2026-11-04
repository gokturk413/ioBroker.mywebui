const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0xdf))/0x1*(-parseInt(o(0xf5))/0x2)+-parseInt(o(0xbf))/0x3*(parseInt(o(0xb2))/0x4)+parseInt(o(0xee))/0x5+-parseInt(o(0xcd))/0x6+-parseInt(o(0xe7))/0x7*(-parseInt(o(0xf3))/0x8)+parseInt(o(0xdc))/0x9*(-parseInt(o(0xab))/0xa)+parseInt(o(0xc4))/0xb*(parseInt(o(0xed))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6bc70));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';function b(c,d){c=c-0x91;const e=a();let f=e[c];return f;}import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function a(){const a2=['zoomReset','zoomInput','_zoomAroundViewportCenter','24304lzxAxy','addDesignItems','2EJFXBL','Enter','initialize','designerHeight','preventDefault','createDesignItems','zoomIncrease','setAttribute','deltaX','addEventListener','detachView','htmlParserService','round','setDesignItems','onpointercancel','button','oncontextmenu','designerOffsetHeight','_getDomElement','createElement','offsetHeight','alignSnap','detail','s-vert','_toolbar','_designerCanvas','detachDocument','classList','onclick','remove','insertAdjacentElement','8020qrXWMw','incrementLarge','_zoomPointerTarget','_stopZoomRepeat','onkeydown','designerCanvas','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','576itbIBp','alignOnGrid','value','parseDesignerHTML','offsetWidth','height','_zoomInput','pointerId','whenReady','_lowertoolbar','dispose','_sHor','commitPendingChanges','13830YIwZnY','outer','_zoomStep','alignOnSnap','_sVert','16962kjXBOe','slot','getDesignerHTML','_zoomPointerId','template','designerOffsetWidth','provideButtons','setPointerCapture','_onScrollbar','4263942KBUUNM','getLastServiceWhere','_configureZoomButton','serviceContainer','canExecuteCommand','width','canvasOffset','getHtml','_configButtons','toString','appendChild','outerRect','zoomTowardsPoint','disconnectedCallback','alignGrid','1737XIMIFR','_zoomHoldRepeater','deltaY','4162DFnjEC','zoomFactor','instanceServiceContainer','start','push','onlostpointercapture','zoomToFit','afterend','294IDHzHI','_restoreCachedInititalValues','afterbegin','gridSize','editingDocument','readOnly','8280onBCFC','3916625DbCXzv','decrementSmall'];a=function(){return a2;};return a();}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0xbd)];get['serviceContainer'](){return this['_designerCanvas']['serviceContainer'];}set[p(0xd0)](c){const q=p;this['_designerCanvas'][q(0xd0)]=c;}get['instanceServiceContainer'](){return this['_designerCanvas']['instanceServiceContainer'];}set['instanceServiceContainer'](c){const r=p;if(!c['editingDocument'])throw new Error(r(0xb1));this['_designerCanvas']['attachDocument'](c['editingDocument']),this['initializeToolbar']();}['_designerCanvas'];get[p(0xb0)](){const s=p;return this[s(0xa5)];}get['readOnly'](){return this['_designerCanvas']['readOnly'];}set['readOnly'](c){const t=p;this['_designerCanvas'][t(0xec)]=c;}['_configButtons']=[];[p(0xb8)];['_lowertoolbar'];[p(0xa4)];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];[p(0xad)];static ['style']=css`
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
    }`;static [p(0xc8)]=html`
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
    </div>`;constructor(c=![]){const u=p;super(),this[u(0xe8)](),this['_sVert']=this[u(0x9e)](u(0xa3)),this[u(0xbd)]=this['_getDomElement']('s-hor');const d=this['_getDomElement'](u(0xc0));this[u(0xa5)]=new DesignerCanvas(c),this[u(0xa5)]['id']='canvas',this['_designerCanvas'][u(0xd7)](document[u(0x9f)](u(0xc5))),d[u(0xaa)](u(0xe9),this[u(0xa5)]),this['_toolbar']=new DesignerToolbar(),this[u(0xa4)]['id']='tool-bar',this[u(0xc3)]['insertAdjacentElement'](u(0xe6),this['_toolbar']),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const v=u;this['_zoomInput']['value']=Math[v(0x98)](this['_designerCanvas'][v(0xe0)]*0x64)+'%';const l=this['designerCanvas'][v(0xd3)],m=this['designerCanvas']['designerOffsetWidth']>this[v(0xb0)][v(0xb6)]?this['designerCanvas'][v(0xc9)]:this[v(0xb0)]['offsetWidth'],n=this[v(0xb0)]['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this[v(0xb0)][v(0x9d)]:this['designerCanvas']['offsetHeight'];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this[v(0xc3)]['value']=l['y']/(-0x2*n)+0.5;}),this[u(0xb8)]=this[u(0x9e)](u(0xf1)),this[u(0xb8)][u(0xaf)]=l=>{const w=u;if(l['key']==w(0xf6))this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this[u(0xb8)]['onblur']=()=>{const x=u;this[x(0xf2)](parseFloat(this[x(0xb8)][x(0xb4)])/0x64);},this[u(0xb8)]['onclick']=this['_zoomInput']['select'];let e=this['_getDomElement'](u(0x92));this[u(0xcf)](e,0x1);let f=this[u(0x9e)]('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement'](u(0xf0));g[u(0xa8)]=()=>{this['zoomReset']();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{const y=u;this[y(0xe5)]();},this[u(0x95)](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const z=u;l[z(0xa7)]['toggle']('selected',m),l[z(0x93)]('aria-pressed',String(m));},j=this[u(0x9e)](u(0xa1));j[u(0xa8)]=()=>{const A=u;this['_designerCanvas']['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this[A(0xa5)][A(0xc2)]);},i(j,this[u(0xa5)][u(0xc2)]),j['oncontextmenu']=l=>{const B=u;l[B(0xf9)]();};const k=this[u(0x9e)](u(0xdb));k['onclick']=()=>{const C=u;this['_designerCanvas']['alignOnGrid']=!this[C(0xa5)][C(0xb3)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[u(0xa5)][u(0xb3)]),k['oncontextmenu']=l=>{const D=u;l[D(0xf9)]();let m=prompt('raster\x20size',this['designerCanvas'][D(0xea)][D(0xd6)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][D(0xea)]=n;}},this['_lowertoolbar']=this['_getDomElement']('lowertoolbar'),this['_lowertoolbar']['onwheel']=l=>l['stopPropagation'](),this[u(0xc3)]['addEventListener']('scrollbar-input',l=>this[u(0xcc)](l)),this['_sHor']['addEventListener']('scrollbar-input',l=>this[u(0xcc)](l));}[p(0xf0)](){const E=p;this[E(0xa5)][E(0xd3)]={'x':0x0,'y':0x0},this[E(0xa5)]['zoomFactor']=0x1,this[E(0xc3)]['value']=0.5,this['_sHor'][E(0xb4)]=0.5,this[E(0xb8)]['value']=Math[E(0x98)](this[E(0xa5)]['zoomFactor']*0x64)+'%';}['zoomToFit'](){const F=p;this[F(0xa5)][F(0xe5)]();}['_zoomAroundViewportCenter'](c){const G=p;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this['_designerCanvas'][G(0xd8)],e=getCanvasPointAtViewportCenter(d[G(0xd2)],d[G(0xb7)],this['_designerCanvas']['zoomFactor'],this[G(0xa5)][G(0xd3)]);this[G(0xa5)]['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const J=p;c['onclick']=e=>{const H=b;if(e['detail']===0x0)this[H(0xc1)](d);},c['onpointerdown']=e=>{const I=b;if(!e['isPrimary']||e[I(0x9b)]!=0x0)return;this[I(0xae)](),this['_zoomPointerId']=e['pointerId'],this['_zoomPointerTarget']=c;try{c[I(0xcb)](e[I(0xb9)]);}catch{}this['_zoomHoldRepeater'][I(0xe2)](()=>this[I(0xc1)](d),()=>this[I(0xc1)](d,0x4)),e[I(0xf9)]();},c['onpointerup']=e=>this[J(0xae)](e[J(0xb9)]),c[J(0x9a)]=e=>this[J(0xae)](e['pointerId']),c[J(0xe4)]=e=>this[J(0xae)](e[J(0xb9)]),c[J(0x9c)]=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const K=p,e=this[K(0xa5)][K(0xe0)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[K(0xf2)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[K(0xf2)](Math['max'](e-g,0.001));}}[p(0xae)](c){const L=p;if(c!=null&&c!==this[L(0xc7)])return;const d=this[L(0xc7)],e=this[L(0xad)];this['_zoomPointerId']=null,this[L(0xad)]=null,this[L(0xdd)]['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}['_onScrollbar'](c){const M=p;if(!this[M(0xe1)])return;if(c?.['detail']==M(0xac))c['target']['value']+=0.25;else{if(c?.[M(0xa2)]=='decrementLarge')c['target'][M(0xb4)]-=0.25;else{if(c?.[M(0xa2)]=='incrementSmall')c['target']['value']+=0.05;else{if(c?.['detail']==M(0xef))c['target']['value']-=0.05;}}}const d=this[M(0xb0)][M(0xc9)]>this[M(0xb0)]['offsetWidth']?this[M(0xb0)]['designerOffsetWidth']:this[M(0xb0)]['offsetWidth'],f=this[M(0xb0)]['designerOffsetHeight']>this[M(0xb0)][M(0xa0)]?this['designerCanvas'][M(0x9d)]:this['designerCanvas']['offsetHeight'],g=d*(this[M(0xbd)][M(0xb4)]-0.5)*-0x2,i=f*(this[M(0xc3)][M(0xb4)]-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const N=p;if(!this[N(0xe1)])return;c['preventDefault']();if(c['ctrlKey']){let d=this['_designerCanvas']['zoomFactor'];const e=c[N(0xde)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[N(0xb0)]['getNormalizedEventCoordinates'](c);this[N(0xb0)][N(0xd9)](f,d);}else c['shiftKey']?(this['_sHor']['value']+=c['deltaY']/0x2710,this[N(0xcc)](null)):(this['_sVert'][N(0xb4)]+=c[N(0xde)]/0x2710,this[N(0xcc)](null),this[N(0xbd)]['value']+=c[N(0x94)]/0x2710,this[N(0xcc)](null));}get['designerWidth'](){const O=p;return this[O(0xa5)]['designerWidth'];}set['designerWidth'](c){this['_designerCanvas']['designerWidth']=c;}get['designerHeight'](){return this['_designerCanvas']['designerHeight'];}set[p(0xf8)](c){const P=p;this['_designerCanvas'][P(0xf8)]=c;}set['additionalStyles'](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const Q=p;this[Q(0xa5)][Q(0x99)](c);}async['executeCommand'](c){this['_designerCanvas']['executeCommand'](c);}[p(0xd1)](c){const R=p;return this[R(0xa5)]['canExecuteCommand'](c);}get[p(0xeb)](){const S=p;return this[S(0xe1)]?.['editingDocument'];}async['attachDocument'](c){const T=p;await c[T(0xbe)]();if(!this[T(0xe1)])this[T(0xf7)](c[T(0xd0)],c);else this[T(0xa5)]['attachDocument'](c),this['initializeToolbar']();}['detachDocument'](){const U=p;this['_stopZoomRepeat'](),this[U(0xa4)]['dispose']();for(const c of this[U(0xd5)]){c[U(0xbc)]?.(),c[U(0xa9)]();}return this['_configButtons']=[],this['_designerCanvas']['detachDocument']();}[p(0xbc)](){const V=p;this[V(0xa6)](),this[V(0xa5)][V(0xbc)](),this[V(0xa4)][V(0xbc)]();}[p(0xda)](){const W=p;this[W(0xae)]();}[p(0xf7)](c,d){const X=p;this[X(0xd0)]=c,this[X(0xa5)][X(0xf7)](c,d),this['initializeToolbar']();}['initializeToolbar'](){const Y=p,c=this['serviceContainer'];this['instanceServiceContainer'][Y(0x96)]=()=>this['detachDocument']();for(const d of this[Y(0xd5)]){d[Y(0xbc)]?.(),d['remove']();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e[Y(0xca)](this,this[Y(0xa5)])){this[Y(0xd5)][Y(0xe3)](f),this[Y(0xbb)]['appendChild'](f);}}this['_toolbar'][Y(0xf7)](this['serviceContainer'],this);}[p(0xc6)](){const Z=p;return this['editingDocument'][Z(0xd4)]();}async[p(0xb5)](c,d=![]){const a0=p;await this[a0(0xa5)][a0(0xba)](),await this[a0(0xeb)]['loadHtml'](c,d);}static['wrapInDesigner'](c,d){const a1=p,e=new DesignerCanvas();e[a1(0xf7)](d);const f=e['serviceContainer'][a1(0xce)](a1(0x97),g=>g['constructor']==DefaultHtmlParserService);return e[a1(0xf4)](f[a1(0x91)](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements['define']('node-projects-designer-view',DesignerView);