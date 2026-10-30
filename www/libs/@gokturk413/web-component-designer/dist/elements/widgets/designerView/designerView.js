function b(c,d){c=c-0x14a;const e=a();let f=e[c];return f;}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x15c))/0x1*(-parseInt(o(0x14b))/0x2)+-parseInt(o(0x15a))/0x3*(-parseInt(o(0x1a9))/0x4)+-parseInt(o(0x174))/0x5+-parseInt(o(0x17f))/0x6*(-parseInt(o(0x18d))/0x7)+-parseInt(o(0x197))/0x8+-parseInt(o(0x181))/0x9+parseInt(o(0x17d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbbb60));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function a(){const a3=['offsetWidth','toString','setAttribute','zoomReset','gridSize','7VCvlit','Wheel','_zoomInput','shiftKey','canExecuteCommand','aria-pressed','initialize','constructor','_designerCanvas','initializeToolbar','10355896uBlgWr','serviceContainer','outerRect','disconnectedCallback','value','onwheel','zoomFit','appendChild','exp','scrollbar-input','zoomInput','_onWheel','round','deltaY','start','_zoomPointerTarget','_zoomPointerId','insertAdjacentElement','628UVjcpI','_onScrollbar','lowertoolbar','_lowertoolbar','4jRXJBJ','getNormalizedEventCoordinates','offsetHeight','zoomToFit','pointerId','additionalStyles','_configureZoomButton','canvasOffset','alignOnGrid','attachDocument','stopPropagation','raster\x20size','define','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','setPointerCapture','18222KYKJdx','_toolbar','152819TuqmtG','remove','_stopZoomRepeat','_sVert','node-projects-designer-view','deltaX','slot','instanceServiceContainer','_zoomStep','onpointerdown','_getDomElement','wrapInDesigner','zoomPoint','readOnly','zoomTowardsPoint','s-vert','detachDocument','_zoomAroundViewportCenter','releasePointerCapture','preventDefault','whenReady','alignOnSnap','classList','oncontextmenu','5100970RNsqRE','designerOffsetHeight','_sHor','designerCanvas','decrementSmall','onclick','designerWidth','toggle','zoomFactor','14124930FXoCip','designerOffsetWidth','6909780FVFinH','parseDesignerHTML','1157022RctIut','provideButtons','detail','addDesignItems','_configButtons','designerHeight','createDesignItems'];a=function(){return a3;};return a();}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x15f)];['_sHor'];get[p(0x198)](){const q=p;return this[q(0x195)][q(0x198)];}set[p(0x198)](c){this['_designerCanvas']['serviceContainer']=c;}get[p(0x163)](){return this['_designerCanvas']['instanceServiceContainer'];}set[p(0x163)](c){const r=p;if(!c['editingDocument'])throw new Error(r(0x158));this[r(0x195)][r(0x154)](c['editingDocument']),this['initializeToolbar']();}['_designerCanvas'];get[p(0x177)](){const s=p;return this[s(0x195)];}get[p(0x169)](){const t=p;return this[t(0x195)][t(0x169)];}set[p(0x169)](c){const u=p;this[u(0x195)]['readOnly']=c;}['_configButtons']=[];[p(0x18f)];['_lowertoolbar'];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];[p(0x1a6)];static ['style']=css`
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
    </div>`;constructor(c=![]){const v=p;super(),this['_restoreCachedInititalValues'](),this[v(0x15f)]=this[v(0x166)](v(0x16b)),this[v(0x176)]=this[v(0x166)]('s-hor');const d=this[v(0x166)]('outer');this['_designerCanvas']=new DesignerCanvas(c),this[v(0x195)]['id']='canvas',this[v(0x195)][v(0x19e)](document['createElement'](v(0x162))),d[v(0x1a8)]('afterbegin',this[v(0x195)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[v(0x15f)][v(0x1a8)]('afterend',this['_toolbar']),this[v(0x195)]['onZoomFactorChanged']['on'](()=>{const w=v;this[w(0x18f)][w(0x19b)]=Math[w(0x1a3)](this[w(0x195)][w(0x17c)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this[w(0x177)][w(0x17e)]>this[w(0x177)]['offsetWidth']?this[w(0x177)][w(0x17e)]:this['designerCanvas']['offsetWidth'],n=this['designerCanvas'][w(0x175)]>this[w(0x177)]['offsetHeight']?this['designerCanvas'][w(0x175)]:this[w(0x177)]['offsetHeight'];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this[v(0x18f)]=this['_getDomElement'](v(0x1a1)),this['_zoomInput']['onkeydown']=l=>{const x=v;if(l['key']=='Enter')this[x(0x16d)](parseFloat(this['_zoomInput']['value'])/0x64);},this['_zoomInput']['onblur']=()=>{const y=v;this[y(0x16d)](parseFloat(this[y(0x18f)]['value'])/0x64);},this[v(0x18f)][v(0x179)]=this[v(0x18f)]['select'];let e=this[v(0x166)]('zoomIncrease');this[v(0x151)](e,0x1);let f=this['_getDomElement']('zoomDecrease');this[v(0x151)](f,-0x1);let g=this['_getDomElement'](v(0x18b));g['onclick']=()=>{const z=v;this[z(0x18b)]();};let h=this['_getDomElement'](v(0x19d));h[v(0x179)]=()=>{this['zoomToFit']();},this['addEventListener'](EventNames[v(0x18e)],l=>this[v(0x1a2)](l));const i=(l,m)=>{const A=v;l[A(0x172)][A(0x17b)]('selected',m),l[A(0x18a)](A(0x192),String(m));},j=this['_getDomElement']('alignSnap');j['onclick']=()=>{const B=v;this['_designerCanvas'][B(0x171)]=!this['_designerCanvas']['alignOnSnap'],i(j,this[B(0x195)]['alignOnSnap']);},i(j,this['_designerCanvas'][v(0x171)]),j[v(0x173)]=l=>{const C=v;l[C(0x16f)]();};const k=this[v(0x166)]('alignGrid');k[v(0x179)]=()=>{const D=v;this['_designerCanvas'][D(0x153)]=!this[D(0x195)][D(0x153)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[v(0x195)]['alignOnGrid']),k[v(0x173)]=l=>{const E=v;l['preventDefault']();let m=prompt(E(0x156),this[E(0x177)][E(0x18c)][E(0x189)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas']['gridSize']=n;}},this[v(0x14a)]=this['_getDomElement'](v(0x1ab)),this[v(0x14a)][v(0x19c)]=l=>l[v(0x155)](),this['_sVert']['addEventListener'](v(0x1a0),l=>this['_onScrollbar'](l)),this[v(0x176)]['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}[p(0x18b)](){const F=p;this['_designerCanvas']['canvasOffset']={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this[F(0x15f)][F(0x19b)]=0.5,this[F(0x176)][F(0x19b)]=0.5,this['_zoomInput']['value']=Math['round'](this['_designerCanvas'][F(0x17c)]*0x64)+'%';}[p(0x14e)](){const G=p;this[G(0x195)]['zoomToFit']();}[p(0x16d)](c){const H=p;if(!this[H(0x163)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this['_designerCanvas'][H(0x199)],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[H(0x195)]['zoomFactor'],this['_designerCanvas'][H(0x152)]);this['_designerCanvas'][H(0x168)](e,c);}['_configureZoomButton'](c,d){const I=p;c[I(0x179)]=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c[I(0x165)]=e=>{const J=I;if(!e['isPrimary']||e['button']!=0x0)return;this['_stopZoomRepeat'](),this[J(0x1a7)]=e['pointerId'],this[J(0x1a6)]=c;try{c[J(0x159)](e[J(0x14f)]);}catch{}this['_zoomHoldRepeater'][J(0x1a5)](()=>this['_zoomStep'](d),()=>this[J(0x164)](d,0x4)),e[J(0x16f)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e['pointerId']),c['onpointercancel']=e=>this[I(0x15e)](e['pointerId']),c['onlostpointercapture']=e=>this['_stopZoomRepeat'](e['pointerId']),c['oncontextmenu']=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const K=p,e=this[K(0x195)][K(0x17c)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}[p(0x15e)](c){const L=p;if(c!=null&&c!==this[L(0x1a7)])return;const d=this[L(0x1a7)],e=this['_zoomPointerTarget'];this[L(0x1a7)]=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater']['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e[L(0x16e)](d);}catch{}}['_onScrollbar'](c){const M=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']=='incrementLarge')c['target'][M(0x19b)]+=0.25;else{if(c?.['detail']=='decrementLarge')c['target']['value']-=0.25;else{if(c?.[M(0x183)]=='incrementSmall')c['target'][M(0x19b)]+=0.05;else{if(c?.['detail']==M(0x178))c['target']['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this[M(0x177)]['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this['designerCanvas'][M(0x188)],f=this[M(0x177)]['designerOffsetHeight']>this[M(0x177)][M(0x14d)]?this['designerCanvas'][M(0x175)]:this[M(0x177)][M(0x14d)],g=d*(this[M(0x176)][M(0x19b)]-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this[M(0x177)]['canvasOffset']={'x':g,'y':i};}[p(0x1a2)](c){const N=p;if(!this['instanceServiceContainer'])return;c[N(0x16f)]();if(c['ctrlKey']){let d=this['_designerCanvas'][N(0x17c)];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math[N(0x19f)](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][N(0x14c)](c);this['designerCanvas'][N(0x16a)](f,d);}else c[N(0x190)]?(this['_sHor'][N(0x19b)]+=c[N(0x1a4)]/0x2710,this[N(0x1aa)](null)):(this[N(0x15f)][N(0x19b)]+=c[N(0x1a4)]/0x2710,this[N(0x1aa)](null),this[N(0x176)][N(0x19b)]+=c[N(0x161)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const O=p;return this[O(0x195)][O(0x17a)];}set['designerWidth'](c){const P=p;this['_designerCanvas'][P(0x17a)]=c;}get[p(0x186)](){const Q=p;return this[Q(0x195)][Q(0x186)];}set['designerHeight'](c){const R=p;this[R(0x195)]['designerHeight']=c;}set[p(0x150)](c){const S=p;this['_designerCanvas'][S(0x150)]=c;}['setDesignItems'](c){this['_designerCanvas']['setDesignItems'](c);}async['executeCommand'](c){const T=p;this[T(0x195)]['executeCommand'](c);}['canExecuteCommand'](c){const U=p;return this['_designerCanvas'][U(0x191)](c);}get['editingDocument'](){return this['instanceServiceContainer']?.['editingDocument'];}async['attachDocument'](c){const V=p;await c['commitPendingChanges']();if(!this[V(0x163)])this[V(0x193)](c[V(0x198)],c);else this['_designerCanvas']['attachDocument'](c),this[V(0x196)]();}['detachDocument'](){const W=p;this[W(0x15e)](),this[W(0x15b)]['dispose']();for(const c of this[W(0x185)]){c['dispose']?.(),c['remove']();}return this['_configButtons']=[],this['_designerCanvas'][W(0x16c)]();}['dispose'](){const X=p;this[X(0x16c)](),this[X(0x195)]['dispose'](),this['_toolbar']['dispose']();}[p(0x19a)](){const Y=p;this[Y(0x15e)]();}[p(0x193)](c,d){const Z=p;this['serviceContainer']=c,this['_designerCanvas'][Z(0x193)](c,d),this[Z(0x196)]();}['initializeToolbar'](){const a0=p,c=this[a0(0x198)];this[a0(0x163)]['detachView']=()=>this[a0(0x16c)]();for(const d of this[a0(0x185)]){d['dispose']?.(),d[a0(0x15d)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e[a0(0x182)](this,this[a0(0x195)])){this[a0(0x185)]['push'](f),this[a0(0x14a)]['appendChild'](f);}}this[a0(0x15b)]['initialize'](this['serviceContainer'],this);}['getDesignerHTML'](){return this['editingDocument']['getHtml']();}async[p(0x180)](c,d=![]){const a1=p;await this['_designerCanvas'][a1(0x170)](),await this['editingDocument']['loadHtml'](c,d);}static[p(0x167)](c,d){const a2=p,e=new DesignerCanvas();e[a2(0x193)](d);const f=e[a2(0x198)]['getLastServiceWhere']('htmlParserService',g=>g[a2(0x194)]==DefaultHtmlParserService);return e[a2(0x184)](f[a2(0x187)](c,e['serviceContainer'],e[a2(0x163)])),e;}}customElements[p(0x157)](p(0x160),DesignerView);