const p=b;function b(c,d){c=c-0xbf;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0xe3))/0x1*(parseInt(o(0xfe))/0x2)+parseInt(o(0x111))/0x3*(parseInt(o(0x112))/0x4)+-parseInt(o(0xd1))/0x5+-parseInt(o(0xf8))/0x6+parseInt(o(0xe4))/0x7+parseInt(o(0x108))/0x8*(parseInt(o(0xf9))/0x9)+-parseInt(o(0x11b))/0xa*(parseInt(o(0xed))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x66652));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';function a(){const a2=['whenReady','remove','_onScrollbar','additionalStyles','_zoomPointerTarget','button','_zoomHoldRepeater','onblur','designerCanvas','_designerCanvas','3214188UukwKv','765JBOOZI','height','designerOffsetWidth','_zoomAroundViewportCenter','width','2wsjEyx','addDesignItems','zoomDecrease','instanceServiceContainer','aria-pressed','designerWidth','toString','alignOnSnap','onclick','_lowertoolbar','63976HMDkwk','readOnly','offsetWidth','ctrlKey','editingDocument','detachView','onZoomFactorChanged','_onWheel','onlostpointercapture','12162tRoUjz','664gzBaYC','_zoomPointerId','hasPointerCapture','afterbegin','canExecuteCommand','lowertoolbar','attachDocument','toggle','canvasOffset','281550xVmskZ','_restoreCachedInititalValues','deltaY','zoomReset','designerHeight','alignOnGrid','appendChild','key','getDesignerHTML','_zoomStep','_getDomElement','commitPendingChanges','target','_configureZoomButton','setDesignItems','_toolbar','s-vert','incrementLarge','classList','scrollbar-input','zoomToFit','designerOffsetHeight','detail','raster\x20size','stopPropagation','preventDefault','round','zoomFactor','_sVert','setPointerCapture','_zoomInput','afterend','initialize','detachDocument','style','getNormalizedEventCoordinates','_configButtons','isFinite','1807650LGhXPE','onpointerup','serviceContainer','addEventListener','provideButtons','pointerId','designViewConfigButtons','Enter','value','dispose','executeCommand','shiftKey','zoomIncrease','offsetHeight','slot','_stopZoomRepeat','outer','getHtml','29959DAqakq','154301kwJvss','initializeToolbar','_sHor','setAttribute','template','releasePointerCapture','insertAdjacentElement','createDesignItems','getLastServiceWhere','11tzYAWy'];a=function(){return a2;};return a();}import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0xe6)];get['serviceContainer'](){const q=p;return this[q(0xf7)][q(0xd3)];}set[p(0xd3)](c){const r=p;this['_designerCanvas'][r(0xd3)]=c;}get[p(0x101)](){const s=p;return this['_designerCanvas'][s(0x101)];}set['instanceServiceContainer'](c){const t=p;if(!c[t(0x10c)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[t(0xf7)]['attachDocument'](c['editingDocument']),this[t(0xe5)]();}[p(0xf7)];get['designerCanvas'](){return this['_designerCanvas'];}get[p(0x109)](){const u=p;return this['_designerCanvas'][u(0x109)];}set[p(0x109)](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];['_zoomInput'];['_lowertoolbar'];[p(0x12a)];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];['_zoomPointerTarget'];static [p(0xcd)]=css`
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
    }`;static [p(0xe8)]=html`
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
    </div>`;constructor(c=![]){const v=p;super(),this[v(0x11c)](),this[v(0xc7)]=this['_getDomElement'](v(0x12b)),this['_sHor']=this['_getDomElement']('s-hor');const d=this[v(0x125)](v(0xe1));this[v(0xf7)]=new DesignerCanvas(c),this[v(0xf7)]['id']='canvas',this[v(0xf7)]['appendChild'](document['createElement'](v(0xdf))),d[v(0xea)](v(0x115),this[v(0xf7)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[v(0xc7)][v(0xea)](v(0xca),this['_toolbar']),this['_designerCanvas'][v(0x10e)]['on'](()=>{const w=v;this[w(0xc9)][w(0xd9)]=Math[w(0xc5)](this[w(0xf7)]['zoomFactor']*0x64)+'%';const l=this[w(0xf6)][w(0x11a)],m=this[w(0xf6)]['designerOffsetWidth']>this[w(0xf6)]['offsetWidth']?this['designerCanvas'][w(0xfb)]:this[w(0xf6)][w(0x10a)],n=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this[w(0xf6)][w(0xc0)]:this['designerCanvas']['offsetHeight'];this[w(0xe6)][w(0xd9)]=l['x']/(-0x2*m)+0.5,this[w(0xc7)][w(0xd9)]=l['y']/(-0x2*n)+0.5;}),this[v(0xc9)]=this['_getDomElement']('zoomInput'),this['_zoomInput']['onkeydown']=l=>{const x=v;if(l[x(0x122)]==x(0xd8))this['_zoomAroundViewportCenter'](parseFloat(this[x(0xc9)]['value'])/0x64);},this[v(0xc9)][v(0xf5)]=()=>{const y=v;this[y(0xfc)](parseFloat(this[y(0xc9)][y(0xd9)])/0x64);},this[v(0xc9)]['onclick']=this['_zoomInput']['select'];let e=this[v(0x125)](v(0xdd));this['_configureZoomButton'](e,0x1);let f=this['_getDomElement'](v(0x100));this[v(0x128)](f,-0x1);let g=this['_getDomElement'](v(0x11e));g['onclick']=()=>{const z=v;this[z(0x11e)]();};let h=this[v(0x125)]('zoomFit');h[v(0x106)]=()=>{const A=v;this[A(0xbf)]();},this[v(0xd4)](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const B=v;l[B(0x12d)][B(0x119)]('selected',m),l[B(0xe7)](B(0x102),String(m));},j=this[v(0x125)]('alignSnap');j['onclick']=()=>{const C=v;this['_designerCanvas']['alignOnSnap']=!this[C(0xf7)][C(0x105)],i(j,this['_designerCanvas'][C(0x105)]);},i(j,this[v(0xf7)][v(0x105)]),j['oncontextmenu']=l=>{l['preventDefault']();};const k=this[v(0x125)]('alignGrid');k['onclick']=()=>{const D=v;this[D(0xf7)][D(0x120)]=!this['_designerCanvas'][D(0x120)],i(k,this[D(0xf7)]['alignOnGrid']);},i(k,this['_designerCanvas'][v(0x120)]),k['oncontextmenu']=l=>{const E=v;l['preventDefault']();let m=prompt(E(0xc2),this[E(0xf6)]['gridSize'][E(0x104)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas']['gridSize']=n;}},this['_lowertoolbar']=this['_getDomElement'](v(0x117)),this[v(0x107)]['onwheel']=l=>l[v(0xc3)](),this['_sVert'][v(0xd4)](v(0x12e),l=>this[v(0xf0)](l)),this['_sHor'][v(0xd4)](v(0x12e),l=>this[v(0xf0)](l));}['zoomReset'](){const F=p;this[F(0xf7)][F(0x11a)]={'x':0x0,'y':0x0},this[F(0xf7)][F(0xc6)]=0x1,this[F(0xc7)]['value']=0.5,this['_sHor'][F(0xd9)]=0.5,this[F(0xc9)]['value']=Math[F(0xc5)](this[F(0xf7)]['zoomFactor']*0x64)+'%';}['zoomToFit'](){const G=p;this[G(0xf7)]['zoomToFit']();}[p(0xfc)](c){const H=p;if(!this['instanceServiceContainer'])return;if(!Number[H(0xd0)](c)||c<=0x0)return;const d=this[H(0xf7)]['outerRect'],e=getCanvasPointAtViewportCenter(d[H(0xfd)],d[H(0xfa)],this[H(0xf7)][H(0xc6)],this[H(0xf7)]['canvasOffset']);this['_designerCanvas']['zoomPoint'](e,c);}[p(0x128)](c,d){const I=p;c[I(0x106)]=e=>{const J=I;if(e['detail']===0x0)this[J(0x124)](d);},c['onpointerdown']=e=>{const K=I;if(!e['isPrimary']||e[K(0xf3)]!=0x0)return;this['_stopZoomRepeat'](),this['_zoomPointerId']=e['pointerId'],this[K(0xf2)]=c;try{c[K(0xc8)](e['pointerId']);}catch{}this[K(0xf4)]['start'](()=>this['_zoomStep'](d),()=>this[K(0x124)](d,0x4)),e[K(0xc4)]();},c[I(0xd2)]=e=>this['_stopZoomRepeat'](e['pointerId']),c['onpointercancel']=e=>this['_stopZoomRepeat'](e['pointerId']),c[I(0x110)]=e=>this[I(0xe0)](e[I(0xd6)]),c['oncontextmenu']=e=>e[I(0xc4)]();}['_zoomStep'](c,d=0x1){const e=this['_designerCanvas']['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const L=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[L(0x113)],e=this[L(0xf2)];this[L(0x113)]=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater']['stop']();if(e&&d!=null)try{if(e[L(0x114)](d))e[L(0xe9)](d);}catch{}}[p(0xf0)](c){const M=p;if(!this['instanceServiceContainer'])return;if(c?.[M(0xc1)]==M(0x12c))c[M(0x127)][M(0xd9)]+=0.25;else{if(c?.['detail']=='decrementLarge')c['target']['value']-=0.25;else{if(c?.['detail']=='incrementSmall')c['target']['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c[M(0x127)]['value']-=0.05;}}}const d=this['designerCanvas'][M(0xfb)]>this['designerCanvas']['offsetWidth']?this[M(0xf6)]['designerOffsetWidth']:this[M(0xf6)]['offsetWidth'],f=this[M(0xf6)][M(0xc0)]>this[M(0xf6)][M(0xde)]?this['designerCanvas'][M(0xc0)]:this[M(0xf6)]['offsetHeight'],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[M(0xc7)][M(0xd9)]-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}[p(0x10f)](c){const N=p;if(!this[N(0x101)])return;c[N(0xc4)]();if(c[N(0x10b)]){let d=this['_designerCanvas']['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][N(0xce)](c);this[N(0xf6)]['zoomTowardsPoint'](f,d);}else c[N(0xdc)]?(this[N(0xe6)][N(0xd9)]+=c[N(0x11d)]/0x2710,this[N(0xf0)](null)):(this[N(0xc7)]['value']+=c['deltaY']/0x2710,this['_onScrollbar'](null),this[N(0xe6)]['value']+=c['deltaX']/0x2710,this[N(0xf0)](null));}get['designerWidth'](){const O=p;return this[O(0xf7)]['designerWidth'];}set['designerWidth'](c){const P=p;this[P(0xf7)][P(0x103)]=c;}get[p(0x11f)](){const Q=p;return this[Q(0xf7)]['designerHeight'];}set[p(0x11f)](c){const R=p;this[R(0xf7)][R(0x11f)]=c;}set['additionalStyles'](c){const S=p;this['_designerCanvas'][S(0xf1)]=c;}[p(0x129)](c){this['_designerCanvas']['setDesignItems'](c);}async[p(0xdb)](c){this['_designerCanvas']['executeCommand'](c);}['canExecuteCommand'](c){const T=p;return this[T(0xf7)][T(0x116)](c);}get[p(0x10c)](){return this['instanceServiceContainer']?.['editingDocument'];}async[p(0x118)](c){const U=p;await c[U(0x126)]();if(!this[U(0x101)])this[U(0xcb)](c['serviceContainer'],c);else this['_designerCanvas'][U(0x118)](c),this['initializeToolbar']();}['detachDocument'](){const V=p;this['_stopZoomRepeat'](),this['_toolbar'][V(0xda)]();for(const c of this['_configButtons']){c[V(0xda)]?.(),c['remove']();}return this[V(0xcf)]=[],this['_designerCanvas']['detachDocument']();}['dispose'](){const W=p;this['detachDocument'](),this['_designerCanvas'][W(0xda)](),this['_toolbar'][W(0xda)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}[p(0xcb)](c,d){const X=p;this[X(0xd3)]=c,this[X(0xf7)]['initialize'](c,d),this['initializeToolbar']();}['initializeToolbar'](){const Y=p,c=this['serviceContainer'];this[Y(0x101)][Y(0x10d)]=()=>this[Y(0xcc)]();for(const d of this[Y(0xcf)]){d[Y(0xda)]?.(),d[Y(0xef)]();}this[Y(0xcf)]=[];if(c['designViewConfigButtons'])for(let e of c[Y(0xd7)]){for(let f of e[Y(0xd5)](this,this['_designerCanvas'])){this[Y(0xcf)]['push'](f),this['_lowertoolbar'][Y(0x121)](f);}}this['_toolbar'][Y(0xcb)](this[Y(0xd3)],this);}[p(0x123)](){const Z=p;return this[Z(0x10c)][Z(0xe2)]();}async['parseDesignerHTML'](c,d=![]){const a0=p;await this[a0(0xf7)][a0(0xee)](),await this[a0(0x10c)]['loadHtml'](c,d);}static['wrapInDesigner'](c,d){const a1=p,e=new DesignerCanvas();e['initialize'](d);const f=e['serviceContainer'][a1(0xec)]('htmlParserService',g=>g['constructor']==DefaultHtmlParserService);return e[a1(0xff)](f[a1(0xeb)](c,e[a1(0xd3)],e['instanceServiceContainer'])),e;}}customElements['define']('node-projects-designer-view',DesignerView);