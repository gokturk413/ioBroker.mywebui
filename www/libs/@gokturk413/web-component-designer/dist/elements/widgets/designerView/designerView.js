function b(c,d){c=c-0x1c9;const e=a();let f=e[c];return f;}function a(){const a4=['decrementLarge','style','_zoomHoldRepeater','pointerId','16hcsZUa','alignOnGrid','_configButtons','push','_getDomElement','addDesignItems','zoomFactor','constructor','designViewConfigButtons','wrapInDesigner','preventDefault','whenReady','detail','addEventListener','offsetHeight','getHtml','hasPointerCapture','attachDocument','parseDesignerHTML','s-hor','_lowertoolbar','incrementSmall','zoomFit','2693576kiQuFK','designerCanvas','_designerCanvas','scrollbar-input','value','designerWidth','initializeToolbar','_zoomStep','_stopZoomRepeat','onlostpointercapture','_configureZoomButton','Enter','decrementSmall','createElement','122775Gyllti','initialize','onclick','template','1826122MrpTkY','gridSize','isPrimary','instanceServiceContainer','additionalStyles','_onScrollbar','outer','appendChild','alignOnSnap','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','alignSnap','onpointerdown','key','dispose','onblur','_zoomPointerTarget','deltaY','htmlParserService','designerOffsetWidth','_zoomPointerId','_toolbar','start','zoomToFit','canvasOffset','onwheel','designerOffsetHeight','setDesignItems','getNormalizedEventCoordinates','readOnly','offsetWidth','toString','_zoomInput','target','_sHor','detachView','oncontextmenu','_zoomAroundViewportCenter','_onWheel','s-vert','4890545hwjprw','683977hTcCSM','designerHeight','raster\x20size','serviceContainer','alignGrid','zoomDecrease','round','aria-pressed','detachDocument','canExecuteCommand','afterbegin','remove','selected','ctrlKey','9408UUBNCm','editingDocument','setPointerCapture','zoomInput','disconnectedCallback','_sVert','4504437YmgdER','zoomReset'];a=function(){return a4;};return a();}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1cf))/0x1+parseInt(o(0x212))/0x2+-parseInt(o(0x20e))/0x3+parseInt(o(0x200))/0x4+parseInt(o(0x1ce))/0x5+parseInt(o(0x1dd))/0x6+parseInt(o(0x1e3))/0x7*(-parseInt(o(0x1e9))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x87508));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x233)];get['serviceContainer'](){const q=p;return this['_designerCanvas'][q(0x1d2)];}set['serviceContainer'](c){this['_designerCanvas']['serviceContainer']=c;}get['instanceServiceContainer'](){const r=p;return this['_designerCanvas'][r(0x215)];}set[p(0x215)](c){const s=p;if(!c['editingDocument'])throw new Error(s(0x21b));this['_designerCanvas']['attachDocument'](c[s(0x1de)]),this['initializeToolbar']();}[p(0x202)];get[p(0x201)](){const t=p;return this[t(0x202)];}get[p(0x22e)](){const u=p;return this[u(0x202)][u(0x22e)];}set['readOnly'](c){const v=p;this[v(0x202)]['readOnly']=c;}[p(0x1eb)]=[];[p(0x231)];[p(0x1fd)];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();[p(0x225)];[p(0x221)];static [p(0x1e6)]=css`
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
    }`;static [p(0x211)]=html`
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
    </div>`;constructor(c=![]){const w=p;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this['_getDomElement'](w(0x1cd)),this['_sHor']=this['_getDomElement'](w(0x1fc));const d=this['_getDomElement'](w(0x218));this['_designerCanvas']=new DesignerCanvas(c),this['_designerCanvas']['id']='canvas',this[w(0x202)][w(0x219)](document[w(0x20d)]('slot')),d['insertAdjacentElement'](w(0x1d9),this[w(0x202)]),this[w(0x226)]=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[w(0x1e2)]['insertAdjacentElement']('afterend',this[w(0x226)]),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const x=w;this['_zoomInput']['value']=Math[x(0x1d5)](this['_designerCanvas'][x(0x1ef)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this['designerCanvas']['designerOffsetWidth']>this[x(0x201)][x(0x22f)]?this['designerCanvas'][x(0x224)]:this[x(0x201)][x(0x22f)],n=this[x(0x201)][x(0x22b)]>this['designerCanvas']['offsetHeight']?this[x(0x201)]['designerOffsetHeight']:this['designerCanvas'][x(0x1f7)];this[x(0x233)]['value']=l['x']/(-0x2*m)+0.5,this['_sVert'][x(0x204)]=l['y']/(-0x2*n)+0.5;}),this[w(0x231)]=this['_getDomElement'](w(0x1e0)),this[w(0x231)]['onkeydown']=l=>{const y=w;if(l[y(0x21e)]==y(0x20b))this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this[w(0x231)][w(0x220)]=()=>{const z=w;this[z(0x1cb)](parseFloat(this['_zoomInput']['value'])/0x64);},this['_zoomInput'][w(0x210)]=this['_zoomInput']['select'];let e=this['_getDomElement']('zoomIncrease');this['_configureZoomButton'](e,0x1);let f=this[w(0x1ed)](w(0x1d4));this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement']('zoomReset');g['onclick']=()=>{const A=w;this[A(0x1e4)]();};let h=this['_getDomElement'](w(0x1ff));h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const B=w;l['classList']['toggle'](B(0x1db),m),l['setAttribute'](B(0x1d6),String(m));},j=this[w(0x1ed)](w(0x21c));j[w(0x210)]=()=>{const C=w;this[C(0x202)]['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this[C(0x202)][C(0x21a)]);},i(j,this[w(0x202)][w(0x21a)]),j['oncontextmenu']=l=>{l['preventDefault']();};const k=this[w(0x1ed)](w(0x1d3));k['onclick']=()=>{const D=w;this['_designerCanvas'][D(0x1ea)]=!this['_designerCanvas']['alignOnGrid'],i(k,this['_designerCanvas'][D(0x1ea)]);},i(k,this[w(0x202)]['alignOnGrid']),k['oncontextmenu']=l=>{const E=w;l['preventDefault']();let m=prompt(E(0x1d1),this[E(0x201)][E(0x213)][E(0x230)]());if(m){let n=parseInt(m);if(n>0x0)this[E(0x201)]['gridSize']=n;}},this['_lowertoolbar']=this[w(0x1ed)]('lowertoolbar'),this['_lowertoolbar'][w(0x22a)]=l=>l['stopPropagation'](),this['_sVert'][w(0x1f6)](w(0x203),l=>this['_onScrollbar'](l)),this['_sHor']['addEventListener'](w(0x203),l=>this['_onScrollbar'](l));}['zoomReset'](){const F=p;this['_designerCanvas'][F(0x229)]={'x':0x0,'y':0x0},this[F(0x202)][F(0x1ef)]=0x1,this[F(0x1e2)][F(0x204)]=0.5,this[F(0x233)][F(0x204)]=0.5,this[F(0x231)]['value']=Math[F(0x1d5)](this['_designerCanvas']['zoomFactor']*0x64)+'%';}[p(0x228)](){const G=p;this['_designerCanvas'][G(0x228)]();}['_zoomAroundViewportCenter'](c){const H=p;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[H(0x202)][H(0x1ef)],this['_designerCanvas']['canvasOffset']);this[H(0x202)]['zoomPoint'](e,c);}[p(0x20a)](c,d){const I=p;c[I(0x210)]=e=>{const J=I;if(e['detail']===0x0)this[J(0x207)](d);},c[I(0x21d)]=e=>{const K=I;if(!e[K(0x214)]||e['button']!=0x0)return;this[K(0x208)](),this[K(0x225)]=e[K(0x1e8)],this['_zoomPointerTarget']=c;try{c[K(0x1df)](e['pointerId']);}catch{}this[K(0x1e7)][K(0x227)](()=>this[K(0x207)](d),()=>this['_zoomStep'](d,0x4)),e[K(0x1f3)]();},c['onpointerup']=e=>this[I(0x208)](e[I(0x1e8)]),c['onpointercancel']=e=>this['_stopZoomRepeat'](e[I(0x1e8)]),c[I(0x209)]=e=>this['_stopZoomRepeat'](e[I(0x1e8)]),c[I(0x1ca)]=e=>e[I(0x1f3)]();}[p(0x207)](c,d=0x1){const L=p,e=this[L(0x202)][L(0x1ef)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[L(0x1cb)](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const M=p;if(c!=null&&c!==this[M(0x225)])return;const d=this['_zoomPointerId'],e=this[M(0x221)];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater']['stop']();if(e&&d!=null)try{if(e[M(0x1f9)](d))e['releasePointerCapture'](d);}catch{}}[p(0x217)](c){const N=p;if(!this[N(0x215)])return;if(c?.[N(0x1f5)]=='incrementLarge')c['target'][N(0x204)]+=0.25;else{if(c?.['detail']==N(0x1e5))c['target'][N(0x204)]-=0.25;else{if(c?.[N(0x1f5)]==N(0x1fe))c['target'][N(0x204)]+=0.05;else{if(c?.['detail']==N(0x20c))c[N(0x232)]['value']-=0.05;}}}const d=this['designerCanvas'][N(0x224)]>this['designerCanvas']['offsetWidth']?this[N(0x201)]['designerOffsetWidth']:this['designerCanvas'][N(0x22f)],f=this[N(0x201)][N(0x22b)]>this[N(0x201)]['offsetHeight']?this[N(0x201)]['designerOffsetHeight']:this['designerCanvas']['offsetHeight'],g=d*(this['_sHor'][N(0x204)]-0.5)*-0x2,i=f*(this['_sVert'][N(0x204)]-0.5)*-0x2;this['designerCanvas'][N(0x229)]={'x':g,'y':i};}[p(0x1cc)](c){const O=p;if(!this[O(0x215)])return;c[O(0x1f3)]();if(c[O(0x1dc)]){let d=this[O(0x202)]['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[O(0x201)][O(0x22d)](c);this[O(0x201)]['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this['_sHor']['value']+=c[O(0x222)]/0x2710,this['_onScrollbar'](null)):(this['_sVert'][O(0x204)]+=c[O(0x222)]/0x2710,this['_onScrollbar'](null),this[O(0x233)]['value']+=c['deltaX']/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){return this['_designerCanvas']['designerWidth'];}set[p(0x205)](c){const P=p;this[P(0x202)][P(0x205)]=c;}get['designerHeight'](){const Q=p;return this[Q(0x202)][Q(0x1d0)];}set['designerHeight'](c){const R=p;this['_designerCanvas'][R(0x1d0)]=c;}set['additionalStyles'](c){const S=p;this[S(0x202)][S(0x216)]=c;}[p(0x22c)](c){const T=p;this[T(0x202)][T(0x22c)](c);}async['executeCommand'](c){this['_designerCanvas']['executeCommand'](c);}[p(0x1d8)](c){const U=p;return this[U(0x202)][U(0x1d8)](c);}get[p(0x1de)](){const V=p;return this[V(0x215)]?.[V(0x1de)];}async[p(0x1fa)](c){const W=p;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this[W(0x20f)](c['serviceContainer'],c);else this['_designerCanvas'][W(0x1fa)](c),this[W(0x206)]();}[p(0x1d7)](){const X=p;this[X(0x208)](),this['_toolbar']['dispose']();for(const c of this['_configButtons']){c['dispose']?.(),c['remove']();}return this['_configButtons']=[],this['_designerCanvas']['detachDocument']();}[p(0x21f)](){const Y=p;this[Y(0x1d7)](),this['_designerCanvas'][Y(0x21f)](),this['_toolbar']['dispose']();}[p(0x1e1)](){this['_stopZoomRepeat']();}[p(0x20f)](c,d){const Z=p;this['serviceContainer']=c,this[Z(0x202)][Z(0x20f)](c,d),this['initializeToolbar']();}[p(0x206)](){const a0=p,c=this[a0(0x1d2)];this['instanceServiceContainer'][a0(0x1c9)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d['dispose']?.(),d[a0(0x1da)]();}this[a0(0x1eb)]=[];if(c[a0(0x1f1)])for(let e of c[a0(0x1f1)]){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this[a0(0x1eb)][a0(0x1ec)](f),this[a0(0x1fd)][a0(0x219)](f);}}this['_toolbar'][a0(0x20f)](this['serviceContainer'],this);}['getDesignerHTML'](){const a1=p;return this['editingDocument'][a1(0x1f8)]();}async[p(0x1fb)](c,d=![]){const a2=p;await this['_designerCanvas'][a2(0x1f4)](),await this['editingDocument']['loadHtml'](c,d);}static[p(0x1f2)](c,d){const a3=p,e=new DesignerCanvas();e[a3(0x20f)](d);const f=e[a3(0x1d2)]['getLastServiceWhere'](a3(0x223),g=>g[a3(0x1f0)]==DefaultHtmlParserService);return e[a3(0x1ee)](f['createDesignItems'](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements['define']('node-projects-designer-view',DesignerView);