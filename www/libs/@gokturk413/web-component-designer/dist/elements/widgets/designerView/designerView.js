const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0xcb))/0x1+-parseInt(o(0xe6))/0x2*(parseInt(o(0xa4))/0x3)+-parseInt(o(0xbd))/0x4*(-parseInt(o(0xb7))/0x5)+-parseInt(o(0x101))/0x6+-parseInt(o(0x107))/0x7*(-parseInt(o(0xa9))/0x8)+-parseInt(o(0x108))/0x9+parseInt(o(0x100))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2a7c0));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get[p(0xfa)](){const q=p;return this[q(0xe5)][q(0xfa)];}set['serviceContainer'](c){this['_designerCanvas']['serviceContainer']=c;}get[p(0xf7)](){return this['_designerCanvas']['instanceServiceContainer'];}set[p(0xf7)](c){const r=p;if(!c['editingDocument'])throw new Error(r(0xac));this[r(0xe5)]['attachDocument'](c[r(0xdf)]),this['initializeToolbar']();}[p(0xe5)];get['designerCanvas'](){return this['_designerCanvas'];}get['readOnly'](){const s=p;return this[s(0xe5)][s(0xa3)];}set['readOnly'](c){this['_designerCanvas']['readOnly']=c;}[p(0xef)]=[];[p(0xaa)];['_lowertoolbar'];[p(0xc0)];[p(0xa1)]=new ZoomHoldRepeater();['_zoomPointerId'];[p(0xad)];static [p(0xd0)]=css`
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
    }`;static [p(0xf4)]=html`
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
    </div>`;constructor(c=![]){const t=p;super(),this[t(0xf1)](),this[t(0xb9)]=this['_getDomElement'](t(0xe4)),this['_sHor']=this['_getDomElement'](t(0xa0));const d=this['_getDomElement']('outer');this[t(0xe5)]=new DesignerCanvas(c),this['_designerCanvas']['id']=t(0xe7),this['_designerCanvas'][t(0x109)](document[t(0xdc)](t(0xf8))),d['insertAdjacentElement']('afterbegin',this['_designerCanvas']),this[t(0xc0)]=new DesignerToolbar(),this[t(0xc0)]['id']=t(0xc3),this['_sVert']['insertAdjacentElement']('afterend',this['_toolbar']),this[t(0xe5)][t(0x102)]['on'](()=>{const u=t;this[u(0xaa)]['value']=Math['round'](this[u(0xe5)][u(0x99)]*0x64)+'%';const l=this[u(0xcd)]['canvasOffset'],m=this[u(0xcd)][u(0xf0)]>this[u(0xcd)][u(0xc2)]?this['designerCanvas'][u(0xf0)]:this[u(0xcd)]['offsetWidth'],n=this[u(0xcd)]['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this[u(0xcd)]['designerOffsetHeight']:this['designerCanvas']['offsetHeight'];this['_sHor'][u(0xe2)]=l['x']/(-0x2*m)+0.5,this['_sVert'][u(0xe2)]=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement'](t(0xb1)),this[t(0xaa)]['onkeydown']=l=>{const v=t;if(l['key']=='Enter')this[v(0xd2)](parseFloat(this['_zoomInput'][v(0xe2)])/0x64);},this['_zoomInput'][t(0x96)]=()=>{const w=t;this['_zoomAroundViewportCenter'](parseFloat(this[w(0xaa)][w(0xe2)])/0x64);},this[t(0xaa)]['onclick']=this[t(0xaa)][t(0xde)];let e=this['_getDomElement']('zoomIncrease');this[t(0x9b)](e,0x1);let f=this['_getDomElement'](t(0x104));this['_configureZoomButton'](f,-0x1);let g=this[t(0xbe)]('zoomReset');g[t(0xd7)]=()=>{this['zoomReset']();};let h=this['_getDomElement'](t(0xb5));h[t(0xd7)]=()=>{this['zoomToFit']();},this[t(0xf3)](EventNames['Wheel'],l=>this[t(0xfe)](l));const i=(l,m)=>{const x=t;l[x(0xc9)][x(0xdd)](x(0xa2),m),l['setAttribute']('aria-pressed',String(m));},j=this[t(0xbe)](t(0xcc));j[t(0xd7)]=()=>{const y=t;this['_designerCanvas'][y(0x98)]=!this[y(0xe5)]['alignOnSnap'],i(j,this[y(0xe5)][y(0x98)]);},i(j,this['_designerCanvas']['alignOnSnap']),j['oncontextmenu']=l=>{l['preventDefault']();};const k=this[t(0xbe)]('alignGrid');k['onclick']=()=>{const z=t;this[z(0xe5)]['alignOnGrid']=!this['_designerCanvas'][z(0x9c)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[t(0xe5)]['alignOnGrid']),k[t(0xda)]=l=>{const A=t;l[A(0xbb)]();let m=prompt(A(0xfb),this['designerCanvas'][A(0xca)]['toString']());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][A(0xca)]=n;}},this['_lowertoolbar']=this[t(0xbe)](t(0xbc)),this['_lowertoolbar'][t(0xb4)]=l=>l[t(0x97)](),this['_sVert'][t(0xf3)](t(0x9d),l=>this['_onScrollbar'](l)),this[t(0xf2)]['addEventListener'](t(0x9d),l=>this['_onScrollbar'](l));}['zoomReset'](){const B=p;this['_designerCanvas'][B(0xd6)]={'x':0x0,'y':0x0},this[B(0xe5)][B(0x99)]=0x1,this[B(0xb9)]['value']=0.5,this['_sHor'][B(0xe2)]=0.5,this['_zoomInput'][B(0xe2)]=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';}[p(0xe9)](){const C=p;this[C(0xe5)][C(0xe9)]();}[p(0xd2)](c){const D=p;if(!this[D(0xf7)])return;if(!Number[D(0xe0)](c)||c<=0x0)return;const d=this[D(0xe5)]['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this['_designerCanvas']['zoomFactor'],this[D(0xe5)][D(0xd6)]);this['_designerCanvas'][D(0xc6)](e,c);}['_configureZoomButton'](c,d){const E=p;c[E(0xd7)]=e=>{const F=E;if(e[F(0xc7)]===0x0)this['_zoomStep'](d);},c[E(0xd3)]=e=>{const G=E;if(!e[G(0xee)]||e[G(0x9e)]!=0x0)return;this[G(0xb8)](),this[G(0xcf)]=e['pointerId'],this[G(0xad)]=c;try{c[G(0xba)](e['pointerId']);}catch{}this['_zoomHoldRepeater'][G(0xb6)](()=>this['_zoomStep'](d),()=>this[G(0xce)](d,0x4)),e['preventDefault']();},c[E(0xa6)]=e=>this['_stopZoomRepeat'](e['pointerId']),c[E(0xf5)]=e=>this[E(0xb8)](e['pointerId']),c['onlostpointercapture']=e=>this['_stopZoomRepeat'](e[E(0xe3)]),c[E(0xda)]=e=>e[E(0xbb)]();}[p(0xce)](c,d=0x1){const H=p,e=this[H(0xe5)][H(0x99)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[H(0xd2)](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const I=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[I(0xcf)],e=this[I(0xad)];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this[I(0xa1)]['stop']();if(e&&d!=null)try{if(e[I(0xf9)](d))e[I(0x10a)](d);}catch{}}[p(0xfc)](c){const J=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']=='incrementLarge')c['target']['value']+=0.25;else{if(c?.[J(0xc7)]=='decrementLarge')c['target'][J(0xe2)]-=0.25;else{if(c?.['detail']==J(0xe8))c[J(0xd8)]['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c[J(0xd8)]['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this['designerCanvas'][J(0xf0)]:this['designerCanvas'][J(0xc2)],f=this[J(0xcd)][J(0xae)]>this[J(0xcd)][J(0xe1)]?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas'][J(0xe1)],g=d*(this[J(0xf2)][J(0xe2)]-0.5)*-0x2,i=f*(this[J(0xb9)]['value']-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const K=p;if(!this[K(0xf7)])return;c[K(0xbb)]();if(c[K(0xd4)]){let d=this[K(0xe5)]['zoomFactor'];const e=c[K(0xec)]<0x0?0x1:-0x1;d*=Math[K(0xd9)](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][K(0x9f)](c);this[K(0xcd)][K(0xd5)](f,d);}else c[K(0xdb)]?(this[K(0xf2)]['value']+=c['deltaY']/0x2710,this[K(0xfc)](null)):(this[K(0xb9)][K(0xe2)]+=c[K(0xec)]/0x2710,this[K(0xfc)](null),this[K(0xf2)]['value']+=c['deltaX']/0x2710,this[K(0xfc)](null));}get[p(0xaf)](){return this['_designerCanvas']['designerWidth'];}set[p(0xaf)](c){this['_designerCanvas']['designerWidth']=c;}get[p(0x106)](){return this['_designerCanvas']['designerHeight'];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set['additionalStyles'](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const L=p;this[L(0xe5)][L(0xa5)](c);}async[p(0xc8)](c){const M=p;this['_designerCanvas'][M(0xc8)](c);}['canExecuteCommand'](c){const N=p;return this[N(0xe5)][N(0xfd)](c);}get['editingDocument'](){const O=p;return this[O(0xf7)]?.['editingDocument'];}async[p(0xd1)](c){const P=p;await c[P(0xb2)]();if(!this[P(0xf7)])this['initialize'](c['serviceContainer'],c);else this[P(0xe5)]['attachDocument'](c),this['initializeToolbar']();}['detachDocument'](){const Q=p;this['_stopZoomRepeat'](),this['_toolbar'][Q(0xf6)]();for(const c of this['_configButtons']){c[Q(0xf6)]?.(),c[Q(0x103)]();}return this['_configButtons']=[],this[Q(0xe5)]['detachDocument']();}['dispose'](){const R=p;this['detachDocument'](),this[R(0xe5)]['dispose'](),this['_toolbar'][R(0xf6)]();}[p(0x9a)](){const S=p;this[S(0xb8)]();}['initialize'](c,d){const T=p;this['serviceContainer']=c,this[T(0xe5)]['initialize'](c,d),this['initializeToolbar']();}[p(0xc1)](){const U=p,c=this[U(0xfa)];this['instanceServiceContainer']['detachView']=()=>this[U(0xbf)]();for(const d of this['_configButtons']){d['dispose']?.(),d[U(0x103)]();}this['_configButtons']=[];if(c[U(0xc4)])for(let e of c['designViewConfigButtons']){for(let f of e[U(0xea)](this,this['_designerCanvas'])){this[U(0xef)][U(0xab)](f),this['_lowertoolbar']['appendChild'](f);}}this[U(0xc0)][U(0xa8)](this['serviceContainer'],this);}['getDesignerHTML'](){const V=p;return this[V(0xdf)][V(0xb0)]();}async[p(0xff)](c,d=![]){const W=p;await this[W(0xe5)]['whenReady'](),await this['editingDocument'][W(0xed)](c,d);}static[p(0xc5)](c,d){const X=p,e=new DesignerCanvas();e[X(0xa8)](d);const f=e['serviceContainer'][X(0xeb)]('htmlParserService',g=>g[X(0xa7)]==DefaultHtmlParserService);return e[X(0x105)](f[X(0xb3)](c,e[X(0xfa)],e[X(0xf7)])),e;}}function b(c,d){c=c-0x96;const e=a();let f=e[c];return f;}function a(){const Y=['_zoomPointerId','style','attachDocument','_zoomAroundViewportCenter','onpointerdown','ctrlKey','zoomTowardsPoint','canvasOffset','onclick','target','exp','oncontextmenu','shiftKey','createElement','toggle','select','editingDocument','isFinite','offsetHeight','value','pointerId','s-vert','_designerCanvas','2DAIDOU','canvas','incrementSmall','zoomToFit','provideButtons','getLastServiceWhere','deltaY','loadHtml','isPrimary','_configButtons','designerOffsetWidth','_restoreCachedInititalValues','_sHor','addEventListener','template','onpointercancel','dispose','instanceServiceContainer','slot','hasPointerCapture','serviceContainer','raster\x20size','_onScrollbar','canExecuteCommand','_onWheel','parseDesignerHTML','1872700samZTm','375102ViNCUj','onZoomFactorChanged','remove','zoomDecrease','addDesignItems','designerHeight','1536626mTkVgq','2749149gcaifV','appendChild','releasePointerCapture','onblur','stopPropagation','alignOnSnap','zoomFactor','disconnectedCallback','_configureZoomButton','alignOnGrid','scrollbar-input','button','getNormalizedEventCoordinates','s-hor','_zoomHoldRepeater','selected','readOnly','807315qHokVA','setDesignItems','onpointerup','constructor','initialize','8wfChYt','_zoomInput','push','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','_zoomPointerTarget','designerOffsetHeight','designerWidth','getHtml','zoomInput','commitPendingChanges','createDesignItems','onwheel','zoomFit','start','6005VfAPKK','_stopZoomRepeat','_sVert','setPointerCapture','preventDefault','lowertoolbar','764jiWSfW','_getDomElement','detachDocument','_toolbar','initializeToolbar','offsetWidth','tool-bar','designViewConfigButtons','wrapInDesigner','zoomPoint','detail','executeCommand','classList','gridSize','174920eieChA','alignSnap','designerCanvas','_zoomStep'];a=function(){return Y;};return a();}customElements['define']('node-projects-designer-view',DesignerView);