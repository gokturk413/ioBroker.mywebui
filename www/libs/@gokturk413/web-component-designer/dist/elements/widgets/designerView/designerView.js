const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x1f4))/0x1*(-parseInt(o(0x243))/0x2)+-parseInt(o(0x239))/0x3*(-parseInt(o(0x20a))/0x4)+-parseInt(o(0x23a))/0x5+-parseInt(o(0x228))/0x6+-parseInt(o(0x211))/0x7+parseInt(o(0x230))/0x8+parseInt(o(0x201))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x27e43));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';function a(){const a3=['_sHor','hasPointerCapture','onpointerdown','round','commitPendingChanges','attachDocument','loadHtml','designerOffsetHeight','style','canExecuteCommand','whenReady','tool-bar','createElement','alignOnSnap','Wheel','editingDocument','Enter','toString','_zoomHoldRepeater','658794PaFrxa','releasePointerCapture','height','decrementLarge','initialize','onlostpointercapture','outerRect','dispose','1352744QSfpCF','oncontextmenu','target','canvas','setAttribute','scrollbar-input','zoomToFit','zoomFactor','stop','628338CIDako','321640CVzGek','deltaY','alignSnap','pointerId','_zoomAroundViewportCenter','_lowertoolbar','raster\x20size','addDesignItems','_zoomInput','218lvWzyI','value','_onWheel','designerOffsetWidth','serviceContainer','key','preventDefault','button','detail','appendChild','onpointerup','_configureZoomButton','_configButtons','afterend','detachDocument','constructor','onkeydown','zoomTowardsPoint','designerHeight','instanceServiceContainer','remove','onblur','_zoomPointerId','stopPropagation','_zoomStep','_designerCanvas','_toolbar','max','addEventListener','htmlParserService','push','2182kxEtul','designViewConfigButtons','_onScrollbar','parseDesignerHTML','start','canvasOffset','onpointercancel','_stopZoomRepeat','onwheel','setDesignItems','designerWidth','readOnly','onclick','4015863uDIgGK','zoomDecrease','selected','zoomReset','offsetHeight','getDesignerHTML','isFinite','additionalStyles','insertAdjacentElement','4vGXBDc','alignOnGrid','_sVert','initializeToolbar','_getDomElement','slot','designerCanvas','1745702kexDRw','provideButtons','offsetWidth','select'];a=function(){return a3;};return a();}import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';function b(c,d){c=c-0x1f0;const e=a();let f=e[c];return f;}export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x20c)];['_sHor'];get['serviceContainer'](){const q=p;return this[q(0x25c)]['serviceContainer'];}set['serviceContainer'](c){const r=p;this['_designerCanvas'][r(0x247)]=c;}get[p(0x256)](){const s=p;return this[s(0x25c)][s(0x256)];}set[p(0x256)](c){const t=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this['_designerCanvas'][t(0x21a)](c['editingDocument']),this[t(0x20d)]();}[p(0x25c)];get[p(0x210)](){const u=p;return this[u(0x25c)];}get[p(0x1ff)](){const v=p;return this['_designerCanvas'][v(0x1ff)];}set['readOnly'](c){const w=p;this[w(0x25c)]['readOnly']=c;}['_configButtons']=[];[p(0x242)];['_lowertoolbar'];[p(0x25d)];[p(0x227)]=new ZoomHoldRepeater();[p(0x259)];['_zoomPointerTarget'];static [p(0x21d)]=css`
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
    </div>`;constructor(c=![]){const x=p;super(),this['_restoreCachedInititalValues'](),this[x(0x20c)]=this['_getDomElement']('s-vert'),this[x(0x215)]=this[x(0x20e)]('s-hor');const d=this['_getDomElement']('outer');this[x(0x25c)]=new DesignerCanvas(c),this[x(0x25c)]['id']=x(0x233),this['_designerCanvas'][x(0x24c)](document[x(0x221)](x(0x20f))),d[x(0x209)]('afterbegin',this['_designerCanvas']),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']=x(0x220),this['_sVert'][x(0x209)](x(0x250),this['_toolbar']),this[x(0x25c)]['onZoomFactorChanged']['on'](()=>{const y=x;this['_zoomInput'][y(0x244)]=Math[y(0x218)](this['_designerCanvas'][y(0x237)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this[y(0x210)]['designerOffsetWidth']>this['designerCanvas'][y(0x213)]?this['designerCanvas'][y(0x246)]:this[y(0x210)][y(0x213)],n=this[y(0x210)][y(0x21c)]>this['designerCanvas'][y(0x205)]?this['designerCanvas'][y(0x21c)]:this[y(0x210)]['offsetHeight'];this['_sHor'][y(0x244)]=l['x']/(-0x2*m)+0.5,this[y(0x20c)][y(0x244)]=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[x(0x20e)]('zoomInput'),this[x(0x242)][x(0x253)]=l=>{const z=x;if(l[z(0x248)]==z(0x225))this[z(0x23e)](parseFloat(this[z(0x242)]['value'])/0x64);},this['_zoomInput'][x(0x258)]=()=>{this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this['_zoomInput'][x(0x200)]=this['_zoomInput'][x(0x214)];let e=this['_getDomElement']('zoomIncrease');this['_configureZoomButton'](e,0x1);let f=this['_getDomElement'](x(0x202));this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement']('zoomReset');g['onclick']=()=>{this['zoomReset']();};let h=this[x(0x20e)]('zoomFit');h['onclick']=()=>{const A=x;this[A(0x236)]();},this['addEventListener'](EventNames[x(0x223)],l=>this[x(0x245)](l));const i=(l,m)=>{const B=x;l['classList']['toggle'](B(0x203),m),l[B(0x234)]('aria-pressed',String(m));},j=this['_getDomElement'](x(0x23c));j['onclick']=()=>{const C=x;this['_designerCanvas'][C(0x222)]=!this['_designerCanvas']['alignOnSnap'],i(j,this[C(0x25c)][C(0x222)]);},i(j,this[x(0x25c)][x(0x222)]),j[x(0x231)]=l=>{const D=x;l[D(0x249)]();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{const E=x;this['_designerCanvas'][E(0x20b)]=!this[E(0x25c)][E(0x20b)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this['_designerCanvas'][x(0x20b)]),k['oncontextmenu']=l=>{const F=x;l['preventDefault']();let m=prompt(F(0x240),this[F(0x210)]['gridSize'][F(0x226)]());if(m){let n=parseInt(m);if(n>0x0)this[F(0x210)]['gridSize']=n;}},this[x(0x23f)]=this['_getDomElement']('lowertoolbar'),this[x(0x23f)][x(0x1fc)]=l=>l[x(0x25a)](),this[x(0x20c)][x(0x1f1)](x(0x235),l=>this[x(0x1f6)](l)),this[x(0x215)]['addEventListener']('scrollbar-input',l=>this[x(0x1f6)](l));}[p(0x204)](){const G=p;this[G(0x25c)]['canvasOffset']={'x':0x0,'y':0x0},this[G(0x25c)][G(0x237)]=0x1,this['_sVert'][G(0x244)]=0.5,this['_sHor']['value']=0.5,this[G(0x242)][G(0x244)]=Math['round'](this['_designerCanvas'][G(0x237)]*0x64)+'%';}[p(0x236)](){const H=p;this[H(0x25c)][H(0x236)]();}['_zoomAroundViewportCenter'](c){const I=p;if(!this[I(0x256)])return;if(!Number[I(0x207)](c)||c<=0x0)return;const d=this[I(0x25c)][I(0x22e)],e=getCanvasPointAtViewportCenter(d['width'],d[I(0x22a)],this[I(0x25c)][I(0x237)],this[I(0x25c)]['canvasOffset']);this[I(0x25c)]['zoomPoint'](e,c);}[p(0x24e)](c,d){const K=p;c['onclick']=e=>{const J=b;if(e[J(0x24b)]===0x0)this[J(0x25b)](d);},c[K(0x217)]=e=>{const L=K;if(!e['isPrimary']||e[L(0x24a)]!=0x0)return;this['_stopZoomRepeat'](),this['_zoomPointerId']=e['pointerId'],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this[L(0x227)][L(0x1f8)](()=>this[L(0x25b)](d),()=>this['_zoomStep'](d,0x4)),e[L(0x249)]();},c[K(0x24d)]=e=>this[K(0x1fb)](e[K(0x23d)]),c[K(0x1fa)]=e=>this[K(0x1fb)](e['pointerId']),c[K(0x22d)]=e=>this['_stopZoomRepeat'](e[K(0x23d)]),c['oncontextmenu']=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const M=p,e=this['_designerCanvas']['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[M(0x23e)](Math[M(0x1f0)](e-g,0.001));}}[p(0x1fb)](c){const N=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[N(0x259)],e=this['_zoomPointerTarget'];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this[N(0x227)][N(0x238)]();if(e&&d!=null)try{if(e[N(0x216)](d))e[N(0x229)](d);}catch{}}[p(0x1f6)](c){const O=p;if(!this[O(0x256)])return;if(c?.[O(0x24b)]=='incrementLarge')c['target'][O(0x244)]+=0.25;else{if(c?.['detail']==O(0x22b))c[O(0x232)]['value']-=0.25;else{if(c?.['detail']=='incrementSmall')c['target'][O(0x244)]+=0.05;else{if(c?.['detail']=='decrementSmall')c['target']['value']-=0.05;}}}const d=this[O(0x210)]['designerOffsetWidth']>this[O(0x210)][O(0x213)]?this[O(0x210)][O(0x246)]:this['designerCanvas']['offsetWidth'],f=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas'][O(0x205)]?this['designerCanvas'][O(0x21c)]:this['designerCanvas'][O(0x205)],g=d*(this['_sHor'][O(0x244)]-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this['designerCanvas'][O(0x1f9)]={'x':g,'y':i};}[p(0x245)](c){const P=p;if(!this['instanceServiceContainer'])return;c[P(0x249)]();if(c['ctrlKey']){let d=this['_designerCanvas']['zoomFactor'];const e=c[P(0x23b)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas']['getNormalizedEventCoordinates'](c);this['designerCanvas'][P(0x254)](f,d);}else c['shiftKey']?(this['_sHor'][P(0x244)]+=c[P(0x23b)]/0x2710,this['_onScrollbar'](null)):(this['_sVert']['value']+=c[P(0x23b)]/0x2710,this['_onScrollbar'](null),this['_sHor']['value']+=c['deltaX']/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const Q=p;return this['_designerCanvas'][Q(0x1fe)];}set[p(0x1fe)](c){const R=p;this[R(0x25c)]['designerWidth']=c;}get['designerHeight'](){return this['_designerCanvas']['designerHeight'];}set[p(0x255)](c){const S=p;this['_designerCanvas'][S(0x255)]=c;}set[p(0x208)](c){const T=p;this[T(0x25c)][T(0x208)]=c;}[p(0x1fd)](c){const U=p;this[U(0x25c)]['setDesignItems'](c);}async['executeCommand'](c){this['_designerCanvas']['executeCommand'](c);}[p(0x21e)](c){return this['_designerCanvas']['canExecuteCommand'](c);}get[p(0x224)](){return this['instanceServiceContainer']?.['editingDocument'];}async[p(0x21a)](c){const V=p;await c[V(0x219)]();if(!this[V(0x256)])this[V(0x22c)](c[V(0x247)],c);else this['_designerCanvas'][V(0x21a)](c),this[V(0x20d)]();}['detachDocument'](){const W=p;this[W(0x1fb)](),this['_toolbar'][W(0x22f)]();for(const c of this[W(0x24f)]){c[W(0x22f)]?.(),c[W(0x257)]();}return this[W(0x24f)]=[],this['_designerCanvas'][W(0x251)]();}[p(0x22f)](){const X=p;this['detachDocument'](),this['_designerCanvas']['dispose'](),this[X(0x25d)]['dispose']();}['disconnectedCallback'](){const Y=p;this[Y(0x1fb)]();}['initialize'](c,d){const Z=p;this['serviceContainer']=c,this[Z(0x25c)][Z(0x22c)](c,d),this[Z(0x20d)]();}[p(0x20d)](){const a0=p,c=this['serviceContainer'];this['instanceServiceContainer']['detachView']=()=>this['detachDocument']();for(const d of this[a0(0x24f)]){d[a0(0x22f)]?.(),d['remove']();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c[a0(0x1f5)]){for(let f of e[a0(0x212)](this,this[a0(0x25c)])){this['_configButtons'][a0(0x1f3)](f),this['_lowertoolbar']['appendChild'](f);}}this['_toolbar'][a0(0x22c)](this['serviceContainer'],this);}[p(0x206)](){return this['editingDocument']['getHtml']();}async[p(0x1f7)](c,d=![]){const a1=p;await this['_designerCanvas'][a1(0x21f)](),await this[a1(0x224)][a1(0x21b)](c,d);}static['wrapInDesigner'](c,d){const a2=p,e=new DesignerCanvas();e[a2(0x22c)](d);const f=e['serviceContainer']['getLastServiceWhere'](a2(0x1f2),g=>g[a2(0x252)]==DefaultHtmlParserService);return e[a2(0x241)](f['createDesignItems'](c,e[a2(0x247)],e[a2(0x256)])),e;}}customElements['define']('node-projects-designer-view',DesignerView);