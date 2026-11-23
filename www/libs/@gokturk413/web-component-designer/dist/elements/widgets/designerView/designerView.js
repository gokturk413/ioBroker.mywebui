function a(){const a2=['105128bENsXe','define','initialize','_lowertoolbar','disconnectedCallback','alignOnGrid','instanceServiceContainer','designerCanvas','slot','scrollbar-input','readOnly','getHtml','designerOffsetHeight','101332SCugsc','classList','_zoomInput','_designerCanvas','_zoomPointerId','71835iaKiNc','start','setPointerCapture','s-hor','_toolbar','outerRect','getLastServiceWhere','1326966BgwUcU','deltaY','pointerId','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','_sVert','deltaX','_sHor','getDesignerHTML','addEventListener','target','setAttribute','designerHeight','_restoreCachedInititalValues','_zoomStep','zoomIncrease','incrementLarge','_onWheel','168jmZYJM','ctrlKey','toString','incrementSmall','_getDomElement','canvasOffset','detail','raster\x20size','round','Enter','alignSnap','186bNEPmB','_zoomHoldRepeater','constructor','editingDocument','_stopZoomRepeat','serviceContainer','19456720XqrpRh','oncontextmenu','toggle','createDesignItems','wrapInDesigner','executeCommand','canvas','htmlParserService','push','alignOnSnap','hasPointerCapture','canExecuteCommand','onkeydown','onclick','_configButtons','_onScrollbar','designerWidth','style','offsetHeight','initializeToolbar','preventDefault','4338810wweoyg','onZoomFactorChanged','zoomDecrease','zoomReset','onwheel','designViewConfigButtons','setDesignItems','offsetWidth','stop','appendChild','whenReady','dispose','remove','_zoomAroundViewportCenter','value','detachDocument','24achUjA','zoomFactor','769384wHpFCi','onpointerdown','_zoomPointerTarget','tool-bar'];a=function(){return a2;};return a();}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1fb))/0x1+parseInt(o(0x218))/0x2+parseInt(o(0x1f9))/0x3*(-parseInt(o(0x1ff))/0x4)+-parseInt(o(0x211))/0x5*(parseInt(o(0x1ce))/0x6)+-parseInt(o(0x20c))/0x7*(parseInt(o(0x1c3))/0x8)+-parseInt(o(0x1e9))/0x9+parseInt(o(0x1d4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x612e4));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function b(c,d){c=c-0x1b9;const e=a();let f=e[c];return f;}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x21e)];get['serviceContainer'](){const q=p;return this[q(0x20f)]['serviceContainer'];}set[p(0x1d3)](c){const r=p;this[r(0x20f)][r(0x1d3)]=c;}get[p(0x205)](){const s=p;return this[s(0x20f)][s(0x205)];}set['instanceServiceContainer'](c){const t=p;if(!c[t(0x1d1)])throw new Error(t(0x21b));this['_designerCanvas']['attachDocument'](c['editingDocument']),this['initializeToolbar']();}[p(0x20f)];get['designerCanvas'](){const u=p;return this[u(0x20f)];}get[p(0x209)](){return this['_designerCanvas']['readOnly'];}set[p(0x209)](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];[p(0x20e)];[p(0x202)];['_toolbar'];[p(0x1cf)]=new ZoomHoldRepeater();[p(0x210)];[p(0x1fd)];static [p(0x1e5)]=css`
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
    </div>`;constructor(c=![]){const v=p;super(),this[v(0x1be)](),this[v(0x21c)]=this['_getDomElement']('s-vert'),this['_sHor']=this[v(0x1c7)](v(0x214));const d=this['_getDomElement']('outer');this[v(0x20f)]=new DesignerCanvas(c),this[v(0x20f)]['id']=v(0x1da),this[v(0x20f)][v(0x1f2)](document['createElement'](v(0x207))),d['insertAdjacentElement']('afterbegin',this['_designerCanvas']),this['_toolbar']=new DesignerToolbar(),this[v(0x215)]['id']=v(0x1fe),this[v(0x21c)]['insertAdjacentElement']('afterend',this[v(0x215)]),this['_designerCanvas'][v(0x1ea)]['on'](()=>{const w=v;this[w(0x20e)]['value']=Math[w(0x1cb)](this['_designerCanvas'][w(0x1fa)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this['designerCanvas']['designerOffsetWidth']>this[w(0x206)]['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this[w(0x206)]['offsetWidth'],n=this['designerCanvas'][w(0x20b)]>this['designerCanvas']['offsetHeight']?this['designerCanvas'][w(0x20b)]:this[w(0x206)][w(0x1e6)];this[w(0x21e)]['value']=l['x']/(-0x2*m)+0.5,this['_sVert'][w(0x1f7)]=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement']('zoomInput'),this['_zoomInput'][v(0x1e0)]=l=>{const x=v;if(l['key']==x(0x1cc))this[x(0x1f6)](parseFloat(this['_zoomInput'][x(0x1f7)])/0x64);},this[v(0x20e)]['onblur']=()=>{const y=v;this['_zoomAroundViewportCenter'](parseFloat(this[y(0x20e)][y(0x1f7)])/0x64);},this['_zoomInput']['onclick']=this['_zoomInput']['select'];let e=this[v(0x1c7)](v(0x1c0));this['_configureZoomButton'](e,0x1);let f=this[v(0x1c7)](v(0x1eb));this['_configureZoomButton'](f,-0x1);let g=this[v(0x1c7)]('zoomReset');g[v(0x1e1)]=()=>{const z=v;this[z(0x1ec)]();};let h=this[v(0x1c7)]('zoomFit');h[v(0x1e1)]=()=>{this['zoomToFit']();},this[v(0x1ba)](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const A=v;l[A(0x20d)][A(0x1d6)]('selected',m),l[A(0x1bc)]('aria-pressed',String(m));},j=this['_getDomElement'](v(0x1cd));j['onclick']=()=>{const B=v;this['_designerCanvas'][B(0x1dd)]=!this[B(0x20f)]['alignOnSnap'],i(j,this[B(0x20f)]['alignOnSnap']);},i(j,this['_designerCanvas']['alignOnSnap']),j['oncontextmenu']=l=>{l['preventDefault']();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{this['_designerCanvas']['alignOnGrid']=!this['_designerCanvas']['alignOnGrid'],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[v(0x20f)][v(0x204)]),k[v(0x1d5)]=l=>{const C=v;l[C(0x1e8)]();let m=prompt(C(0x1ca),this['designerCanvas']['gridSize'][C(0x1c5)]());if(m){let n=parseInt(m);if(n>0x0)this[C(0x206)]['gridSize']=n;}},this['_lowertoolbar']=this['_getDomElement']('lowertoolbar'),this[v(0x202)][v(0x1ed)]=l=>l['stopPropagation'](),this[v(0x21c)]['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l)),this[v(0x21e)]['addEventListener'](v(0x208),l=>this[v(0x1e3)](l));}[p(0x1ec)](){const D=p;this[D(0x20f)]['canvasOffset']={'x':0x0,'y':0x0},this['_designerCanvas'][D(0x1fa)]=0x1,this[D(0x21c)]['value']=0.5,this['_sHor'][D(0x1f7)]=0.5,this[D(0x20e)]['value']=Math[D(0x1cb)](this['_designerCanvas'][D(0x1fa)]*0x64)+'%';}['zoomToFit'](){const E=p;this[E(0x20f)]['zoomToFit']();}[p(0x1f6)](c){const F=p;if(!this[F(0x205)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[F(0x20f)][F(0x216)],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[F(0x20f)]['zoomFactor'],this['_designerCanvas'][F(0x1c8)]);this['_designerCanvas']['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const H=p;c['onclick']=e=>{const G=b;if(e['detail']===0x0)this[G(0x1bf)](d);},c[H(0x1fc)]=e=>{const I=H;if(!e['isPrimary']||e['button']!=0x0)return;this['_stopZoomRepeat'](),this[I(0x210)]=e[I(0x21a)],this[I(0x1fd)]=c;try{c[I(0x213)](e[I(0x21a)]);}catch{}this[I(0x1cf)][I(0x212)](()=>this[I(0x1bf)](d),()=>this['_zoomStep'](d,0x4)),e[I(0x1e8)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e[H(0x21a)]),c['onpointercancel']=e=>this['_stopZoomRepeat'](e[H(0x21a)]),c['onlostpointercapture']=e=>this[H(0x1d2)](e[H(0x21a)]),c['oncontextmenu']=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const J=p,e=this[J(0x20f)][J(0x1fa)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[J(0x1f6)](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const K=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this[K(0x210)]=null,this['_zoomPointerTarget']=null,this[K(0x1cf)][K(0x1f1)]();if(e&&d!=null)try{if(e[K(0x1de)](d))e['releasePointerCapture'](d);}catch{}}[p(0x1e3)](c){const L=p;if(!this[L(0x205)])return;if(c?.[L(0x1c9)]==L(0x1c1))c['target']['value']+=0.25;else{if(c?.[L(0x1c9)]=='decrementLarge')c[L(0x1bb)]['value']-=0.25;else{if(c?.[L(0x1c9)]==L(0x1c6))c[L(0x1bb)][L(0x1f7)]+=0.05;else{if(c?.[L(0x1c9)]=='decrementSmall')c['target']['value']-=0.05;}}}const d=this[L(0x206)]['designerOffsetWidth']>this[L(0x206)][L(0x1f0)]?this[L(0x206)]['designerOffsetWidth']:this[L(0x206)][L(0x1f0)],f=this[L(0x206)][L(0x20b)]>this['designerCanvas'][L(0x1e6)]?this[L(0x206)]['designerOffsetHeight']:this['designerCanvas'][L(0x1e6)],g=d*(this['_sHor'][L(0x1f7)]-0.5)*-0x2,i=f*(this[L(0x21c)]['value']-0.5)*-0x2;this[L(0x206)][L(0x1c8)]={'x':g,'y':i};}[p(0x1c2)](c){const M=p;if(!this['instanceServiceContainer'])return;c[M(0x1e8)]();if(c[M(0x1c4)]){let d=this['_designerCanvas'][M(0x1fa)];const e=c[M(0x219)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[M(0x206)]['getNormalizedEventCoordinates'](c);this[M(0x206)]['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this[M(0x21e)]['value']+=c[M(0x219)]/0x2710,this['_onScrollbar'](null)):(this[M(0x21c)][M(0x1f7)]+=c[M(0x219)]/0x2710,this[M(0x1e3)](null),this[M(0x21e)]['value']+=c[M(0x21d)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const N=p;return this[N(0x20f)][N(0x1e4)];}set['designerWidth'](c){const O=p;this[O(0x20f)][O(0x1e4)]=c;}get[p(0x1bd)](){const P=p;return this[P(0x20f)][P(0x1bd)];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set['additionalStyles'](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const Q=p;this['_designerCanvas'][Q(0x1ef)](c);}async['executeCommand'](c){const R=p;this[R(0x20f)][R(0x1d9)](c);}[p(0x1df)](c){const S=p;return this[S(0x20f)][S(0x1df)](c);}get['editingDocument'](){const T=p;return this[T(0x205)]?.[T(0x1d1)];}async['attachDocument'](c){const U=p;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this['initialize'](c[U(0x1d3)],c);else this['_designerCanvas']['attachDocument'](c),this[U(0x1e7)]();}[p(0x1f8)](){const V=p;this['_stopZoomRepeat'](),this[V(0x215)]['dispose']();for(const c of this[V(0x1e2)]){c['dispose']?.(),c[V(0x1f5)]();}return this['_configButtons']=[],this['_designerCanvas'][V(0x1f8)]();}[p(0x1f4)](){const W=p;this['detachDocument'](),this[W(0x20f)]['dispose'](),this['_toolbar']['dispose']();}[p(0x203)](){this['_stopZoomRepeat']();}['initialize'](c,d){const X=p;this[X(0x1d3)]=c,this[X(0x20f)]['initialize'](c,d),this[X(0x1e7)]();}['initializeToolbar'](){const Y=p,c=this['serviceContainer'];this[Y(0x205)]['detachView']=()=>this[Y(0x1f8)]();for(const d of this['_configButtons']){d['dispose']?.(),d[Y(0x1f5)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c[Y(0x1ee)]){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this['_configButtons'][Y(0x1dc)](f),this['_lowertoolbar'][Y(0x1f2)](f);}}this['_toolbar'][Y(0x201)](this['serviceContainer'],this);}[p(0x1b9)](){const Z=p;return this['editingDocument'][Z(0x20a)]();}async['parseDesignerHTML'](c,d=![]){const a0=p;await this[a0(0x20f)][a0(0x1f3)](),await this[a0(0x1d1)]['loadHtml'](c,d);}static[p(0x1d8)](c,d){const a1=p,e=new DesignerCanvas();e[a1(0x201)](d);const f=e[a1(0x1d3)][a1(0x217)](a1(0x1db),g=>g[a1(0x1d0)]==DefaultHtmlParserService);return e['addDesignItems'](f[a1(0x1d7)](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements[p(0x200)]('node-projects-designer-view',DesignerView);