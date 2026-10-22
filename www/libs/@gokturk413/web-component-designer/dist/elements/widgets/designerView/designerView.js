const q=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x200))/0x1+-parseInt(o(0x1fe))/0x2+parseInt(o(0x228))/0x3+parseInt(o(0x205))/0x4*(-parseInt(o(0x225))/0x5)+-parseInt(o(0x22f))/0x6*(parseInt(o(0x202))/0x7)+-parseInt(o(0x21b))/0x8+parseInt(o(0x239))/0x9*(parseInt(o(0x234))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x468ff));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function a(){const a2=['getHtml','_zoomInput','decrementSmall','_toolbar','constructor','_zoomPointerId','designerWidth','_onWheel','gridSize','_zoomPointerTarget','key','832456plGKSt','_sHor','367980WvZnxb','selected','14NdbKQD','onwheel','button','59636YXsOjp','_zoomAroundViewportCenter','wrapInDesigner','stopPropagation','zoomFactor','afterend','_sVert','initializeToolbar','onpointercancel','getLastServiceWhere','_onScrollbar','additionalStyles','template','scrollbar-input','zoomDecrease','exp','start','onZoomFactorChanged','editingDocument','disconnectedCallback','Enter','designViewConfigButtons','2313600rQCziO','_configureZoomButton','incrementSmall','stop','dispose','alignOnSnap','getNormalizedEventCoordinates','Wheel','decrementLarge','createElement','105RMtPeN','alignOnGrid','setDesignItems','75024kGQygN','serviceContainer','canvasOffset','whenReady','onpointerup','canExecuteCommand','_stopZoomRepeat','1379946jQyzOr','zoomTowardsPoint','htmlParserService','onlostpointercapture','zoomFit','4581780OLfXzQ','ctrlKey','define','outer','onclick','27afBagu','_configButtons','_getDomElement','onpointerdown','zoomInput','designerCanvas','attachDocument','addEventListener','deltaY','push','detail','insertAdjacentElement','s-hor','offsetHeight','oncontextmenu','onkeydown','onblur','detachView','isFinite','designerOffsetHeight','_zoomHoldRepeater','pointerId','_lowertoolbar','canvas','node-projects-designer-view','_designerCanvas','value','preventDefault','instanceServiceContainer','offsetWidth','initialize','detachDocument','loadHtml','remove','target','readOnly'];a=function(){return a2;};return a();}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get['serviceContainer'](){const p=b;return this[p(0x1e8)]['serviceContainer'];}set[q(0x229)](c){const r=q;this[r(0x1e8)][r(0x229)]=c;}get[q(0x1eb)](){const s=q;return this[s(0x1e8)][s(0x1eb)];}set[q(0x1eb)](c){const t=q;if(!c[t(0x217)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this['_designerCanvas'][t(0x23f)](c[t(0x217)]),this[t(0x20c)]();}[q(0x1e8)];get['designerCanvas'](){return this['_designerCanvas'];}get[q(0x1f2)](){const u=q;return this[u(0x1e8)][u(0x1f2)];}set[q(0x1f2)](c){const v=q;this[v(0x1e8)]['readOnly']=c;}['_configButtons']=[];['_zoomInput'];[q(0x1e5)];[q(0x1f6)];['_zoomHoldRepeater']=new ZoomHoldRepeater();['_zoomPointerId'];['_zoomPointerTarget'];static ['style']=css`
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
    }`;static [q(0x211)]=html`
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
    </div>`;constructor(c=![]){const w=q;super(),this['_restoreCachedInititalValues'](),this[w(0x20b)]=this['_getDomElement']('s-vert'),this['_sHor']=this[w(0x23b)](w(0x245));const d=this[w(0x23b)](w(0x237));this['_designerCanvas']=new DesignerCanvas(c),this[w(0x1e8)]['id']=w(0x1e6),this[w(0x1e8)]['appendChild'](document[w(0x224)]('slot')),d[w(0x244)]('afterbegin',this[w(0x1e8)]),this['_toolbar']=new DesignerToolbar(),this[w(0x1f6)]['id']='tool-bar',this['_sVert'][w(0x244)](w(0x20a),this['_toolbar']),this['_designerCanvas'][w(0x216)]['on'](()=>{const x=w;this[x(0x1f4)][x(0x1e9)]=Math['round'](this[x(0x1e8)]['zoomFactor']*0x64)+'%';const l=this[x(0x23e)]['canvasOffset'],m=this[x(0x23e)]['designerOffsetWidth']>this[x(0x23e)]['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this[x(0x23e)]['offsetWidth'],n=this['designerCanvas'][x(0x1e2)]>this[x(0x23e)]['offsetHeight']?this['designerCanvas'][x(0x1e2)]:this['designerCanvas'][x(0x246)];this[x(0x1ff)][x(0x1e9)]=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[w(0x23b)](w(0x23d)),this['_zoomInput'][w(0x1de)]=l=>{const y=w;if(l[y(0x1fd)]==y(0x219))this[y(0x206)](parseFloat(this['_zoomInput'][y(0x1e9)])/0x64);},this['_zoomInput'][w(0x1df)]=()=>{const z=w;this['_zoomAroundViewportCenter'](parseFloat(this[z(0x1f4)]['value'])/0x64);},this['_zoomInput']['onclick']=this[w(0x1f4)]['select'];let e=this['_getDomElement']('zoomIncrease');this[w(0x21c)](e,0x1);let f=this['_getDomElement'](w(0x213));this[w(0x21c)](f,-0x1);let g=this[w(0x23b)]('zoomReset');g['onclick']=()=>{this['zoomReset']();};let h=this[w(0x23b)](w(0x233));h['onclick']=()=>{this['zoomToFit']();},this[w(0x240)](EventNames[w(0x222)],l=>this[w(0x1fa)](l));const i=(l,m)=>{const A=w;l['classList']['toggle'](A(0x201),m),l['setAttribute']('aria-pressed',String(m));},j=this['_getDomElement']('alignSnap');j[w(0x238)]=()=>{const B=w;this[B(0x1e8)][B(0x220)]=!this[B(0x1e8)]['alignOnSnap'],i(j,this['_designerCanvas']['alignOnSnap']);},i(j,this[w(0x1e8)][w(0x220)]),j[w(0x247)]=l=>{const C=w;l[C(0x1ea)]();};const k=this[w(0x23b)]('alignGrid');k[w(0x238)]=()=>{const D=w;this['_designerCanvas']['alignOnGrid']=!this[D(0x1e8)][D(0x226)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[w(0x1e8)][w(0x226)]),k['oncontextmenu']=l=>{const E=w;l[E(0x1ea)]();let m=prompt('raster\x20size',this['designerCanvas'][E(0x1fb)]['toString']());if(m){let n=parseInt(m);if(n>0x0)this[E(0x23e)]['gridSize']=n;}},this['_lowertoolbar']=this[w(0x23b)]('lowertoolbar'),this['_lowertoolbar'][w(0x203)]=l=>l[w(0x208)](),this[w(0x20b)][w(0x240)]('scrollbar-input',l=>this['_onScrollbar'](l)),this[w(0x1ff)]['addEventListener'](w(0x212),l=>this['_onScrollbar'](l));}['zoomReset'](){const F=q;this[F(0x1e8)][F(0x22a)]={'x':0x0,'y':0x0},this[F(0x1e8)][F(0x209)]=0x1,this[F(0x20b)][F(0x1e9)]=0.5,this['_sHor'][F(0x1e9)]=0.5,this['_zoomInput']['value']=Math['round'](this['_designerCanvas'][F(0x209)]*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}['_zoomAroundViewportCenter'](c){const G=q;if(!this['instanceServiceContainer'])return;if(!Number[G(0x1e1)](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[G(0x1e8)][G(0x209)],this['_designerCanvas']['canvasOffset']);this[G(0x1e8)]['zoomPoint'](e,c);}[q(0x21c)](c,d){const H=q;c[H(0x238)]=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c[H(0x23c)]=e=>{const I=H;if(!e['isPrimary']||e[I(0x204)]!=0x0)return;this[I(0x22e)](),this['_zoomPointerId']=e[I(0x1e4)],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this['_zoomHoldRepeater'][I(0x215)](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c[H(0x22c)]=e=>this['_stopZoomRepeat'](e[H(0x1e4)]),c[H(0x20d)]=e=>this[H(0x22e)](e[H(0x1e4)]),c[H(0x232)]=e=>this['_stopZoomRepeat'](e['pointerId']),c['oncontextmenu']=e=>e[H(0x1ea)]();}['_zoomStep'](c,d=0x1){const J=q,e=this['_designerCanvas']['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[J(0x206)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[J(0x206)](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const K=q;if(c!=null&&c!==this[K(0x1f8)])return;const d=this['_zoomPointerId'],e=this[K(0x1fc)];this[K(0x1f8)]=null,this['_zoomPointerTarget']=null,this[K(0x1e3)][K(0x21e)]();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}['_onScrollbar'](c){const L=q;if(!this['instanceServiceContainer'])return;if(c?.['detail']=='incrementLarge')c[L(0x1f1)]['value']+=0.25;else{if(c?.[L(0x243)]==L(0x223))c['target'][L(0x1e9)]-=0.25;else{if(c?.[L(0x243)]==L(0x21d))c['target'][L(0x1e9)]+=0.05;else{if(c?.[L(0x243)]==L(0x1f5))c[L(0x1f1)]['value']-=0.05;}}}const d=this[L(0x23e)]['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this[L(0x23e)]['designerOffsetWidth']:this[L(0x23e)][L(0x1ec)],f=this['designerCanvas']['designerOffsetHeight']>this[L(0x23e)][L(0x246)]?this['designerCanvas'][L(0x1e2)]:this[L(0x23e)]['offsetHeight'],g=d*(this[L(0x1ff)]['value']-0.5)*-0x2,i=f*(this[L(0x20b)]['value']-0.5)*-0x2;this['designerCanvas'][L(0x22a)]={'x':g,'y':i};}['_onWheel'](c){const M=q;if(!this[M(0x1eb)])return;c['preventDefault']();if(c[M(0x235)]){let d=this[M(0x1e8)]['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math[M(0x214)](e*0.2);if(d<0.02)d=0.02;const f=this[M(0x23e)][M(0x221)](c);this['designerCanvas'][M(0x230)](f,d);}else c['shiftKey']?(this[M(0x1ff)]['value']+=c[M(0x241)]/0x2710,this['_onScrollbar'](null)):(this['_sVert'][M(0x1e9)]+=c[M(0x241)]/0x2710,this[M(0x20f)](null),this[M(0x1ff)]['value']+=c['deltaX']/0x2710,this[M(0x20f)](null));}get['designerWidth'](){const N=q;return this[N(0x1e8)][N(0x1f9)];}set['designerWidth'](c){const O=q;this[O(0x1e8)]['designerWidth']=c;}get['designerHeight'](){return this['_designerCanvas']['designerHeight'];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set[q(0x210)](c){const P=q;this['_designerCanvas'][P(0x210)]=c;}['setDesignItems'](c){const Q=q;this['_designerCanvas'][Q(0x227)](c);}async['executeCommand'](c){this['_designerCanvas']['executeCommand'](c);}[q(0x22d)](c){const R=q;return this[R(0x1e8)]['canExecuteCommand'](c);}get[q(0x217)](){const S=q;return this[S(0x1eb)]?.[S(0x217)];}async['attachDocument'](c){const T=q;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this[T(0x1ed)](c['serviceContainer'],c);else this['_designerCanvas']['attachDocument'](c),this[T(0x20c)]();}[q(0x1ee)](){const U=q;this[U(0x22e)](),this[U(0x1f6)]['dispose']();for(const c of this[U(0x23a)]){c[U(0x21f)]?.(),c[U(0x1f0)]();}return this[U(0x23a)]=[],this['_designerCanvas'][U(0x1ee)]();}['dispose'](){const V=q;this[V(0x1ee)](),this[V(0x1e8)]['dispose'](),this[V(0x1f6)][V(0x21f)]();}[q(0x218)](){const W=q;this[W(0x22e)]();}['initialize'](c,d){const X=q;this['serviceContainer']=c,this['_designerCanvas']['initialize'](c,d),this[X(0x20c)]();}['initializeToolbar'](){const Y=q,c=this[Y(0x229)];this[Y(0x1eb)][Y(0x1e0)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d['dispose']?.(),d[Y(0x1f0)]();}this[Y(0x23a)]=[];if(c[Y(0x21a)])for(let e of c['designViewConfigButtons']){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this[Y(0x23a)][Y(0x242)](f),this['_lowertoolbar']['appendChild'](f);}}this[Y(0x1f6)]['initialize'](this[Y(0x229)],this);}['getDesignerHTML'](){const Z=q;return this['editingDocument'][Z(0x1f3)]();}async['parseDesignerHTML'](c,d=![]){const a0=q;await this['_designerCanvas'][a0(0x22b)](),await this['editingDocument'][a0(0x1ef)](c,d);}static[q(0x207)](c,d){const a1=q,e=new DesignerCanvas();e[a1(0x1ed)](d);const f=e[a1(0x229)][a1(0x20e)](a1(0x231),g=>g[a1(0x1f7)]==DefaultHtmlParserService);return e['addDesignItems'](f['createDesignItems'](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements[q(0x236)](q(0x1e7),DesignerView);