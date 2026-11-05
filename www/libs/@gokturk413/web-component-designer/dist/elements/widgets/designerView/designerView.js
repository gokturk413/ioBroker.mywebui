function b(c,d){c=c-0x16b;const e=a();let f=e[c];return f;}const p=b;function a(){const a3=['getNormalizedEventCoordinates','initializeToolbar','_zoomPointerId','detachDocument','designerWidth','_toolbar','select','instanceServiceContainer','_zoomPointerTarget','_configureZoomButton','loadHtml','preventDefault','40DXsOlY','executeCommand','designerOffsetHeight','offsetWidth','initialize','serviceContainer','_zoomStep','40oaQwtM','readOnly','attachDocument','incrementLarge','editingDocument','incrementSmall','node-projects-designer-view','931805lVpeKr','deltaX','zoomDecrease','52911dIqSNe','_sVert','decrementLarge','parseDesignerHTML','toggle','toString','1073259gJUHNy','_zoomAroundViewportCenter','_designerCanvas','alignOnSnap','designViewConfigButtons','13349UjFKST','designerCanvas','stop','_sHor','8eyhbGp','define','additionalStyles','_zoomHoldRepeater','zoomFit','_zoomInput','_onScrollbar','aria-pressed','whenReady','value','859404svexeH','onkeydown','setDesignItems','designerHeight','zoomFactor','zoomInput','_stopZoomRepeat','zoomIncrease','constructor','13233000iarXWJ','dispose','canExecuteCommand','_onWheel','onclick','_lowertoolbar','zoomToFit','afterend','pointerId','zoomTowardsPoint','detail','isFinite','offsetHeight','start','_configButtons','getDesignerHTML','setAttribute','canvasOffset','releasePointerCapture','max','addDesignItems','alignOnGrid','ctrlKey','commitPendingChanges','154798UgwTlx','_getDomElement','target','tool-bar','onblur','lowertoolbar','gridSize','onZoomFactorChanged','htmlParserService','s-vert'];a=function(){return a3;};return a();}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x184))/0x1*(parseInt(o(0x1ba))/0x2)+-parseInt(o(0x1ab))/0x3*(parseInt(o(0x1a1))/0x4)+parseInt(o(0x1a8))/0x5+-parseInt(o(0x1c4))/0x6+-parseInt(o(0x1b6))/0x7*(parseInt(o(0x19a))/0x8)+-parseInt(o(0x1b1))/0x9+parseInt(o(0x16c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6bedf));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x1b9)];get[p(0x19f)](){const q=p;return this[q(0x1b3)]['serviceContainer'];}set['serviceContainer'](c){this['_designerCanvas']['serviceContainer']=c;}get[p(0x195)](){const r=p;return this['_designerCanvas'][r(0x195)];}set[p(0x195)](c){const s=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[s(0x1b3)][s(0x1a3)](c[s(0x1a5)]),this['initializeToolbar']();}[p(0x1b3)];get['designerCanvas'](){return this['_designerCanvas'];}get[p(0x1a2)](){const t=p;return this[t(0x1b3)][t(0x1a2)];}set['readOnly'](c){const u=p;this[u(0x1b3)][u(0x1a2)]=c;}['_configButtons']=[];['_zoomInput'];[p(0x171)];['_toolbar'];[p(0x1bd)]=new ZoomHoldRepeater();[p(0x190)];['_zoomPointerTarget'];static ['style']=css`
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
    </div>`;constructor(c=![]){const v=p;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this[v(0x185)](v(0x18d)),this[v(0x1b9)]=this['_getDomElement']('s-hor');const d=this['_getDomElement']('outer');this['_designerCanvas']=new DesignerCanvas(c),this[v(0x1b3)]['id']='canvas',this[v(0x1b3)]['appendChild'](document['createElement']('slot')),d['insertAdjacentElement']('afterbegin',this[v(0x1b3)]),this[v(0x193)]=new DesignerToolbar(),this[v(0x193)]['id']=v(0x187),this['_sVert']['insertAdjacentElement'](v(0x173),this['_toolbar']),this[v(0x1b3)][v(0x18b)]['on'](()=>{const w=v;this[w(0x1bf)]['value']=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';const l=this['designerCanvas'][w(0x17d)],m=this[w(0x1b7)]['designerOffsetWidth']>this['designerCanvas'][w(0x19d)]?this[w(0x1b7)]['designerOffsetWidth']:this['designerCanvas'][w(0x19d)],n=this['designerCanvas']['designerOffsetHeight']>this[w(0x1b7)]['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this[w(0x1b7)][w(0x178)];this[w(0x1b9)][w(0x1c3)]=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement'](v(0x1c9)),this[v(0x1bf)][v(0x1c5)]=l=>{const x=v;if(l['key']=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this[x(0x1bf)]['value'])/0x64);},this[v(0x1bf)][v(0x188)]=()=>{const y=v;this['_zoomAroundViewportCenter'](parseFloat(this[y(0x1bf)]['value'])/0x64);},this['_zoomInput']['onclick']=this['_zoomInput'][v(0x194)];let e=this['_getDomElement'](v(0x1cb));this[v(0x197)](e,0x1);let f=this[v(0x185)](v(0x1aa));this['_configureZoomButton'](f,-0x1);let g=this[v(0x185)]('zoomReset');g[v(0x170)]=()=>{this['zoomReset']();};let h=this[v(0x185)](v(0x1be));h[v(0x170)]=()=>{const z=v;this[z(0x172)]();},this['addEventListener'](EventNames['Wheel'],l=>this[v(0x16f)](l));const i=(l,m)=>{const A=v;l['classList'][A(0x1af)]('selected',m),l[A(0x17c)](A(0x1c1),String(m));},j=this['_getDomElement']('alignSnap');j['onclick']=()=>{const B=v;this['_designerCanvas'][B(0x1b4)]=!this[B(0x1b3)][B(0x1b4)],i(j,this[B(0x1b3)]['alignOnSnap']);},i(j,this[v(0x1b3)]['alignOnSnap']),j['oncontextmenu']=l=>{l['preventDefault']();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{const C=v;this[C(0x1b3)][C(0x181)]=!this['_designerCanvas']['alignOnGrid'],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[v(0x1b3)]['alignOnGrid']),k['oncontextmenu']=l=>{const D=v;l[D(0x199)]();let m=prompt('raster\x20size',this[D(0x1b7)]['gridSize'][D(0x1b0)]());if(m){let n=parseInt(m);if(n>0x0)this[D(0x1b7)][D(0x18a)]=n;}},this['_lowertoolbar']=this['_getDomElement'](v(0x189)),this['_lowertoolbar']['onwheel']=l=>l['stopPropagation'](),this['_sVert']['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l)),this[v(0x1b9)]['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}['zoomReset'](){const E=p;this[E(0x1b3)][E(0x17d)]={'x':0x0,'y':0x0},this[E(0x1b3)]['zoomFactor']=0x1,this[E(0x1ac)][E(0x1c3)]=0.5,this['_sHor'][E(0x1c3)]=0.5,this['_zoomInput'][E(0x1c3)]=Math['round'](this[E(0x1b3)]['zoomFactor']*0x64)+'%';}[p(0x172)](){const F=p;this[F(0x1b3)]['zoomToFit']();}[p(0x1b2)](c){const G=p;if(!this[G(0x195)])return;if(!Number[G(0x177)](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[G(0x1b3)][G(0x1c8)],this[G(0x1b3)][G(0x17d)]);this['_designerCanvas']['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const H=p;c[H(0x170)]=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c['onpointerdown']=e=>{const I=H;if(!e['isPrimary']||e['button']!=0x0)return;this[I(0x1ca)](),this[I(0x190)]=e['pointerId'],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this[I(0x1bd)][I(0x179)](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e[I(0x199)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e['pointerId']),c['onpointercancel']=e=>this[H(0x1ca)](e[H(0x174)]),c['onlostpointercapture']=e=>this[H(0x1ca)](e['pointerId']),c['oncontextmenu']=e=>e[H(0x199)]();}[p(0x1a0)](c,d=0x1){const J=p,e=this['_designerCanvas'][J(0x1c8)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[J(0x1b2)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math[J(0x17f)](e-g,0.001));}}[p(0x1ca)](c){const K=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[K(0x190)],e=this['_zoomPointerTarget'];this['_zoomPointerId']=null,this[K(0x196)]=null,this['_zoomHoldRepeater'][K(0x1b8)]();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e[K(0x17e)](d);}catch{}}[p(0x1c0)](c){const L=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']==L(0x1a4))c['target'][L(0x1c3)]+=0.25;else{if(c?.['detail']==L(0x1ad))c[L(0x186)]['value']-=0.25;else{if(c?.[L(0x176)]==L(0x1a6))c['target'][L(0x1c3)]+=0.05;else{if(c?.[L(0x176)]=='decrementSmall')c['target']['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas'][L(0x19d)]?this[L(0x1b7)]['designerOffsetWidth']:this[L(0x1b7)][L(0x19d)],f=this['designerCanvas'][L(0x19c)]>this['designerCanvas'][L(0x178)]?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas']['offsetHeight'],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this['_sVert'][L(0x1c3)]-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const M=p;if(!this[M(0x195)])return;c[M(0x199)]();if(c[M(0x182)]){let d=this[M(0x1b3)]['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][M(0x18e)](c);this['designerCanvas'][M(0x175)](f,d);}else c['shiftKey']?(this['_sHor'][M(0x1c3)]+=c['deltaY']/0x2710,this['_onScrollbar'](null)):(this['_sVert']['value']+=c['deltaY']/0x2710,this[M(0x1c0)](null),this['_sHor']['value']+=c[M(0x1a9)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const N=p;return this['_designerCanvas'][N(0x192)];}set['designerWidth'](c){const O=p;this[O(0x1b3)]['designerWidth']=c;}get['designerHeight'](){const P=p;return this[P(0x1b3)]['designerHeight'];}set['designerHeight'](c){const Q=p;this[Q(0x1b3)][Q(0x1c7)]=c;}set['additionalStyles'](c){const R=p;this['_designerCanvas'][R(0x1bc)]=c;}[p(0x1c6)](c){this['_designerCanvas']['setDesignItems'](c);}async['executeCommand'](c){const S=p;this[S(0x1b3)][S(0x19b)](c);}[p(0x16e)](c){const T=p;return this[T(0x1b3)]['canExecuteCommand'](c);}get[p(0x1a5)](){const U=p;return this[U(0x195)]?.['editingDocument'];}async[p(0x1a3)](c){const V=p;await c[V(0x183)]();if(!this[V(0x195)])this[V(0x19e)](c[V(0x19f)],c);else this[V(0x1b3)]['attachDocument'](c),this[V(0x18f)]();}['detachDocument'](){const W=p;this[W(0x1ca)](),this[W(0x193)]['dispose']();for(const c of this[W(0x17a)]){c[W(0x16d)]?.(),c['remove']();}return this['_configButtons']=[],this[W(0x1b3)][W(0x191)]();}['dispose'](){const X=p;this['detachDocument'](),this[X(0x1b3)]['dispose'](),this['_toolbar'][X(0x16d)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const Y=p;this['serviceContainer']=c,this[Y(0x1b3)]['initialize'](c,d),this['initializeToolbar']();}['initializeToolbar'](){const Z=p,c=this[Z(0x19f)];this[Z(0x195)]['detachView']=()=>this[Z(0x191)]();for(const d of this[Z(0x17a)]){d[Z(0x16d)]?.(),d['remove']();}this[Z(0x17a)]=[];if(c['designViewConfigButtons'])for(let e of c[Z(0x1b5)]){for(let f of e['provideButtons'](this,this[Z(0x1b3)])){this[Z(0x17a)]['push'](f),this['_lowertoolbar']['appendChild'](f);}}this[Z(0x193)][Z(0x19e)](this['serviceContainer'],this);}[p(0x17b)](){const a0=p;return this[a0(0x1a5)]['getHtml']();}async[p(0x1ae)](c,d=![]){const a1=p;await this[a1(0x1b3)][a1(0x1c2)](),await this['editingDocument'][a1(0x198)](c,d);}static['wrapInDesigner'](c,d){const a2=p,e=new DesignerCanvas();e['initialize'](d);const f=e[a2(0x19f)]['getLastServiceWhere'](a2(0x18c),g=>g[a2(0x16b)]==DefaultHtmlParserService);return e[a2(0x180)](f['createDesignItems'](c,e['serviceContainer'],e[a2(0x195)])),e;}}customElements[p(0x1bb)](p(0x1a7),DesignerView);