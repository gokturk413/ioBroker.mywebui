const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x207))/0x1+parseInt(o(0x20b))/0x2*(parseInt(o(0x1af))/0x3)+-parseInt(o(0x1b9))/0x4+parseInt(o(0x1be))/0x5+-parseInt(o(0x1d5))/0x6+-parseInt(o(0x1ea))/0x7+-parseInt(o(0x1c2))/0x8*(-parseInt(o(0x202))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8c1e7));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';function a(){const a2=['push','createDesignItems','_zoomPointerId','onpointerdown','_zoomPointerTarget','designerOffsetHeight','setDesignItems','offsetHeight','canExecuteCommand','_zoomInput','designerCanvas','parseDesignerHTML','dispose','initialize','designerHeight','appendChild','6878606rnUmhF','insertAdjacentElement','max','gridSize','round','_onScrollbar','setAttribute','addEventListener','stop','_zoomHoldRepeater','oncontextmenu','deltaY','_designerCanvas','whenReady','detachDocument','Enter','onclick','zoomFactor','zoomFit','offsetWidth','Wheel','raster\x20size','detail','editingDocument','315JmiAkh','_stopZoomRepeat','ctrlKey','serviceContainer','_toolbar','217040xDjPce','attachDocument','designerWidth','lowertoolbar','10484UctGSd','510dMpjPD','designerOffsetWidth','getDesignerHTML','decrementLarge','canvasOffset','alignSnap','instanceServiceContainer','_configButtons','_sVert','preventDefault','439216dkgoVJ','initializeToolbar','constructor','_zoomAroundViewportCenter','_sHor','633620LJhCLL','button','_configureZoomButton','pointerId','439456rWEAMS','zoomReset','onpointerup','hasPointerCapture','_getDomElement','onkeydown','executeCommand','zoomInput','height','scrollbar-input','alignOnSnap','additionalStyles','toggle','_zoomStep','target','zoomToFit','zoomIncrease','value','slot','6342330ByCXvb','outer','readOnly','s-vert','toString'];a=function(){return a2;};return a();}import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';function b(c,d){c=c-0x1af;const e=a();let f=e[c];return f;}export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x1bd)];get[p(0x205)](){const q=p;return this[q(0x1f6)]['serviceContainer'];}set[p(0x205)](c){const r=p;this['_designerCanvas'][r(0x205)]=c;}get['instanceServiceContainer'](){const s=p;return this[s(0x1f6)][s(0x1b5)];}set[p(0x1b5)](c){const t=p;if(!c[t(0x201)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[t(0x1f6)][t(0x208)](c[t(0x201)]),this['initializeToolbar']();}[p(0x1f6)];get['designerCanvas'](){return this['_designerCanvas'];}get['readOnly'](){const u=p;return this[u(0x1f6)][u(0x1d7)];}set[p(0x1d7)](c){const v=p;this[v(0x1f6)][v(0x1d7)]=c;}['_configButtons']=[];[p(0x1e3)];['_lowertoolbar'];[p(0x206)];[p(0x1f3)]=new ZoomHoldRepeater();[p(0x1dc)];[p(0x1de)];static ['style']=css`
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
    </div>`;constructor(c=![]){const w=p;super(),this['_restoreCachedInititalValues'](),this[w(0x1b7)]=this[w(0x1c6)](w(0x1d8)),this[w(0x1bd)]=this[w(0x1c6)]('s-hor');const d=this[w(0x1c6)](w(0x1d6));this[w(0x1f6)]=new DesignerCanvas(c),this[w(0x1f6)]['id']='canvas',this['_designerCanvas'][w(0x1e9)](document['createElement'](w(0x1d4))),d['insertAdjacentElement']('afterbegin',this[w(0x1f6)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[w(0x1b7)][w(0x1eb)]('afterend',this[w(0x206)]),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const x=w;this[x(0x1e3)][x(0x1d3)]=Math['round'](this[x(0x1f6)]['zoomFactor']*0x64)+'%';const l=this[x(0x1e4)]['canvasOffset'],m=this[x(0x1e4)][x(0x1b0)]>this['designerCanvas'][x(0x1fd)]?this['designerCanvas']['designerOffsetWidth']:this[x(0x1e4)]['offsetWidth'],n=this['designerCanvas']['designerOffsetHeight']>this[x(0x1e4)][x(0x1e1)]?this[x(0x1e4)]['designerOffsetHeight']:this['designerCanvas']['offsetHeight'];this['_sHor'][x(0x1d3)]=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this[w(0x1e3)]=this[w(0x1c6)](w(0x1c9)),this['_zoomInput'][w(0x1c7)]=l=>{const y=w;if(l['key']==y(0x1f9))this[y(0x1bc)](parseFloat(this['_zoomInput']['value'])/0x64);},this['_zoomInput']['onblur']=()=>{const z=w;this['_zoomAroundViewportCenter'](parseFloat(this[z(0x1e3)]['value'])/0x64);},this[w(0x1e3)]['onclick']=this['_zoomInput']['select'];let e=this[w(0x1c6)](w(0x1d2));this['_configureZoomButton'](e,0x1);let f=this['_getDomElement']('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement']('zoomReset');g[w(0x1fa)]=()=>{const A=w;this[A(0x1c3)]();};let h=this['_getDomElement'](w(0x1fc));h['onclick']=()=>{const B=w;this[B(0x1d1)]();},this['addEventListener'](EventNames[w(0x1fe)],l=>this['_onWheel'](l));const i=(l,m)=>{const C=w;l['classList'][C(0x1ce)]('selected',m),l[C(0x1f0)]('aria-pressed',String(m));},j=this[w(0x1c6)](w(0x1b4));j['onclick']=()=>{const D=w;this[D(0x1f6)]['alignOnSnap']=!this['_designerCanvas'][D(0x1cc)],i(j,this['_designerCanvas'][D(0x1cc)]);},i(j,this['_designerCanvas'][w(0x1cc)]),j['oncontextmenu']=l=>{const E=w;l[E(0x1b8)]();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{this['_designerCanvas']['alignOnGrid']=!this['_designerCanvas']['alignOnGrid'],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this['_designerCanvas']['alignOnGrid']),k[w(0x1f4)]=l=>{const F=w;l['preventDefault']();let m=prompt(F(0x1ff),this[F(0x1e4)][F(0x1ed)][F(0x1d9)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][F(0x1ed)]=n;}},this['_lowertoolbar']=this[w(0x1c6)](w(0x20a)),this['_lowertoolbar']['onwheel']=l=>l['stopPropagation'](),this[w(0x1b7)]['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l)),this['_sHor'][w(0x1f1)](w(0x1cb),l=>this[w(0x1ef)](l));}['zoomReset'](){const G=p;this['_designerCanvas']['canvasOffset']={'x':0x0,'y':0x0},this[G(0x1f6)]['zoomFactor']=0x1,this[G(0x1b7)][G(0x1d3)]=0.5,this['_sHor'][G(0x1d3)]=0.5,this[G(0x1e3)][G(0x1d3)]=Math[G(0x1ee)](this[G(0x1f6)]['zoomFactor']*0x64)+'%';}['zoomToFit'](){const H=p;this[H(0x1f6)]['zoomToFit']();}['_zoomAroundViewportCenter'](c){const I=p;if(!this[I(0x1b5)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[I(0x1f6)]['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d[I(0x1ca)],this[I(0x1f6)][I(0x1fb)],this['_designerCanvas'][I(0x1b3)]);this[I(0x1f6)]['zoomPoint'](e,c);}[p(0x1c0)](c,d){const J=p;c[J(0x1fa)]=e=>{const K=J;if(e[K(0x200)]===0x0)this['_zoomStep'](d);},c[J(0x1dd)]=e=>{const L=J;if(!e['isPrimary']||e[L(0x1bf)]!=0x0)return;this[L(0x203)](),this['_zoomPointerId']=e[L(0x1c1)],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this['_zoomHoldRepeater']['start'](()=>this['_zoomStep'](d),()=>this[L(0x1cf)](d,0x4)),e['preventDefault']();},c[J(0x1c4)]=e=>this['_stopZoomRepeat'](e['pointerId']),c['onpointercancel']=e=>this['_stopZoomRepeat'](e['pointerId']),c['onlostpointercapture']=e=>this[J(0x203)](e['pointerId']),c[J(0x1f4)]=e=>e[J(0x1b8)]();}[p(0x1cf)](c,d=0x1){const M=p,e=this[M(0x1f6)][M(0x1fb)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[M(0x1bc)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[M(0x1bc)](Math[M(0x1ec)](e-g,0.001));}}[p(0x203)](c){const N=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[N(0x1dc)],e=this[N(0x1de)];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this[N(0x1f3)][N(0x1f2)]();if(e&&d!=null)try{if(e[N(0x1c5)](d))e['releasePointerCapture'](d);}catch{}}['_onScrollbar'](c){const O=p;if(!this[O(0x1b5)])return;if(c?.['detail']=='incrementLarge')c['target']['value']+=0.25;else{if(c?.['detail']==O(0x1b2))c[O(0x1d0)]['value']-=0.25;else{if(c?.[O(0x200)]=='incrementSmall')c[O(0x1d0)][O(0x1d3)]+=0.05;else{if(c?.[O(0x200)]=='decrementSmall')c[O(0x1d0)]['value']-=0.05;}}}const d=this[O(0x1e4)]['designerOffsetWidth']>this[O(0x1e4)]['offsetWidth']?this['designerCanvas'][O(0x1b0)]:this[O(0x1e4)]['offsetWidth'],f=this['designerCanvas'][O(0x1df)]>this[O(0x1e4)]['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this[O(0x1e4)][O(0x1e1)],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[O(0x1b7)]['value']-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const P=p;if(!this['instanceServiceContainer'])return;c[P(0x1b8)]();if(c[P(0x204)]){let d=this[P(0x1f6)]['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas']['getNormalizedEventCoordinates'](c);this['designerCanvas']['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this[P(0x1bd)]['value']+=c[P(0x1f5)]/0x2710,this['_onScrollbar'](null)):(this[P(0x1b7)]['value']+=c['deltaY']/0x2710,this['_onScrollbar'](null),this['_sHor']['value']+=c['deltaX']/0x2710,this[P(0x1ef)](null));}get['designerWidth'](){return this['_designerCanvas']['designerWidth'];}set[p(0x209)](c){const Q=p;this[Q(0x1f6)]['designerWidth']=c;}get[p(0x1e8)](){const R=p;return this[R(0x1f6)][R(0x1e8)];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set[p(0x1cd)](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const S=p;this['_designerCanvas'][S(0x1e0)](c);}async[p(0x1c8)](c){const T=p;this[T(0x1f6)]['executeCommand'](c);}[p(0x1e2)](c){return this['_designerCanvas']['canExecuteCommand'](c);}get[p(0x201)](){const U=p;return this['instanceServiceContainer']?.[U(0x201)];}async[p(0x208)](c){const V=p;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this[V(0x1e7)](c[V(0x205)],c);else this[V(0x1f6)]['attachDocument'](c),this[V(0x1ba)]();}['detachDocument'](){const W=p;this['_stopZoomRepeat'](),this['_toolbar']['dispose']();for(const c of this[W(0x1b6)]){c[W(0x1e6)]?.(),c['remove']();}return this[W(0x1b6)]=[],this['_designerCanvas'][W(0x1f8)]();}[p(0x1e6)](){const X=p;this['detachDocument'](),this['_designerCanvas']['dispose'](),this['_toolbar'][X(0x1e6)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const Y=p;this['serviceContainer']=c,this['_designerCanvas']['initialize'](c,d),this[Y(0x1ba)]();}['initializeToolbar'](){const Z=p,c=this[Z(0x205)];this['instanceServiceContainer']['detachView']=()=>this['detachDocument']();for(const d of this['_configButtons']){d['dispose']?.(),d['remove']();}this[Z(0x1b6)]=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e['provideButtons'](this,this[Z(0x1f6)])){this[Z(0x1b6)][Z(0x1da)](f),this['_lowertoolbar']['appendChild'](f);}}this['_toolbar']['initialize'](this[Z(0x205)],this);}[p(0x1b1)](){return this['editingDocument']['getHtml']();}async[p(0x1e5)](c,d=![]){const a0=p;await this[a0(0x1f6)][a0(0x1f7)](),await this['editingDocument']['loadHtml'](c,d);}static['wrapInDesigner'](c,d){const a1=p,e=new DesignerCanvas();e['initialize'](d);const f=e[a1(0x205)]['getLastServiceWhere']('htmlParserService',g=>g[a1(0x1bb)]==DefaultHtmlParserService);return e['addDesignItems'](f[a1(0x1db)](c,e['serviceContainer'],e[a1(0x1b5)])),e;}}customElements['define']('node-projects-designer-view',DesignerView);