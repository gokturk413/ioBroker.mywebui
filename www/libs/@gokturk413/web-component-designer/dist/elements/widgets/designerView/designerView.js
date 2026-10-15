const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1e9))/0x1*(parseInt(o(0x1c5))/0x2)+-parseInt(o(0x1d7))/0x3+-parseInt(o(0x206))/0x4*(-parseInt(o(0x1ca))/0x5)+parseInt(o(0x1c6))/0x6*(-parseInt(o(0x20f))/0x7)+-parseInt(o(0x1f4))/0x8+-parseInt(o(0x209))/0x9*(-parseInt(o(0x20b))/0xa)+parseInt(o(0x1fa))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6e199));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function b(c,d){c=c-0x1b7;const e=a();let f=e[c];return f;}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x21e)];[p(0x1f8)];get['serviceContainer'](){const q=p;return this[q(0x21f)]['serviceContainer'];}set[p(0x1c9)](c){const r=p;this[r(0x21f)]['serviceContainer']=c;}get[p(0x1be)](){const s=p;return this[s(0x21f)]['instanceServiceContainer'];}set[p(0x1be)](c){const t=p;if(!c['editingDocument'])throw new Error(t(0x20e));this['_designerCanvas']['attachDocument'](c['editingDocument']),this[t(0x1eb)]();}['_designerCanvas'];get[p(0x1e7)](){return this['_designerCanvas'];}get[p(0x1fb)](){return this['_designerCanvas']['readOnly'];}set['readOnly'](c){const u=p;this[u(0x21f)][u(0x1fb)]=c;}[p(0x200)]=[];[p(0x1bd)];['_lowertoolbar'];[p(0x1d3)];[p(0x215)]=new ZoomHoldRepeater();['_zoomPointerId'];['_zoomPointerTarget'];static ['style']=css`
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
    }`;static [p(0x1d6)]=html`
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
    </div>`;constructor(c=![]){const v=p;super(),this[v(0x1ce)](),this[v(0x21e)]=this[v(0x21b)]('s-vert'),this[v(0x1f8)]=this[v(0x21b)](v(0x1f3));const d=this['_getDomElement'](v(0x1d5));this[v(0x21f)]=new DesignerCanvas(c),this['_designerCanvas']['id']='canvas',this['_designerCanvas'][v(0x1bf)](document['createElement'](v(0x1e6))),d[v(0x20a)]('afterbegin',this[v(0x21f)]),this['_toolbar']=new DesignerToolbar(),this[v(0x1d3)]['id']=v(0x1c3),this[v(0x21e)]['insertAdjacentElement']('afterend',this[v(0x1d3)]),this['_designerCanvas'][v(0x1e5)]['on'](()=>{const w=v;this[w(0x1bd)][w(0x1fe)]=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';const l=this[w(0x1e7)][w(0x1d0)],m=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this[w(0x1e7)][w(0x213)]:this[w(0x1e7)]['offsetWidth'],n=this['designerCanvas'][w(0x220)]>this['designerCanvas'][w(0x1cc)]?this['designerCanvas'][w(0x220)]:this[w(0x1e7)][w(0x1cc)];this['_sHor'][w(0x1fe)]=l['x']/(-0x2*m)+0.5,this[w(0x21e)]['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[v(0x21b)]('zoomInput'),this[v(0x1bd)][v(0x21d)]=l=>{const x=v;if(l[x(0x1f9)]=='Enter')this[x(0x1d4)](parseFloat(this['_zoomInput'][x(0x1fe)])/0x64);},this[v(0x1bd)]['onblur']=()=>{this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this['_zoomInput']['onclick']=this[v(0x1bd)]['select'];let e=this[v(0x21b)]('zoomIncrease');this[v(0x1ed)](e,0x1);let f=this[v(0x21b)]('zoomDecrease');this[v(0x1ed)](f,-0x1);let g=this['_getDomElement'](v(0x1d2));g['onclick']=()=>{const y=v;this[y(0x1d2)]();};let h=this['_getDomElement'](v(0x21a));h['onclick']=()=>{this['zoomToFit']();},this[v(0x214)](EventNames[v(0x1c4)],l=>this['_onWheel'](l));const i=(l,m)=>{const z=v;l['classList'][z(0x1cd)]('selected',m),l[z(0x1e2)](z(0x1f5),String(m));},j=this['_getDomElement'](v(0x1c8));j[v(0x201)]=()=>{const A=v;this['_designerCanvas']['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this[A(0x21f)]['alignOnSnap']);},i(j,this['_designerCanvas'][v(0x1e3)]),j[v(0x1b8)]=l=>{const B=v;l[B(0x1db)]();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{const C=v;this['_designerCanvas'][C(0x1b9)]=!this[C(0x21f)][C(0x1b9)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[v(0x21f)][v(0x1b9)]),k[v(0x1b8)]=l=>{const D=v;l['preventDefault']();let m=prompt('raster\x20size',this[D(0x1e7)]['gridSize']['toString']());if(m){let n=parseInt(m);if(n>0x0)this[D(0x1e7)][D(0x20d)]=n;}},this[v(0x1e4)]=this[v(0x21b)](v(0x1df)),this[v(0x1e4)]['onwheel']=l=>l[v(0x1e1)](),this['_sVert']['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l)),this['_sHor']['addEventListener']('scrollbar-input',l=>this[v(0x1cf)](l));}[p(0x1d2)](){const E=p;this[E(0x21f)]['canvasOffset']={'x':0x0,'y':0x0},this[E(0x21f)]['zoomFactor']=0x1,this[E(0x21e)]['value']=0.5,this[E(0x1f8)][E(0x1fe)]=0.5,this['_zoomInput']['value']=Math[E(0x21c)](this[E(0x21f)]['zoomFactor']*0x64)+'%';}['zoomToFit'](){const F=p;this[F(0x21f)]['zoomToFit']();}['_zoomAroundViewportCenter'](c){const G=p;if(!this[G(0x1be)])return;if(!Number[G(0x1ba)](c)||c<=0x0)return;const d=this[G(0x21f)]['outerRect'],e=getCanvasPointAtViewportCenter(d[G(0x1e8)],d[G(0x205)],this['_designerCanvas'][G(0x1f1)],this['_designerCanvas']['canvasOffset']);this[G(0x21f)][G(0x1cb)](e,c);}[p(0x1ed)](c,d){const J=p;c['onclick']=e=>{const H=b;if(e[H(0x1f2)]===0x0)this[H(0x1bb)](d);},c['onpointerdown']=e=>{const I=b;if(!e['isPrimary']||e['button']!=0x0)return;this['_stopZoomRepeat'](),this[I(0x1d1)]=e[I(0x1c2)],this[I(0x1fc)]=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this[I(0x215)]['start'](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c[J(0x1d9)]=e=>this[J(0x212)](e[J(0x1c2)]),c['onpointercancel']=e=>this[J(0x212)](e[J(0x1c2)]),c[J(0x218)]=e=>this['_stopZoomRepeat'](e[J(0x1c2)]),c['oncontextmenu']=e=>e['preventDefault']();}[p(0x1bb)](c,d=0x1){const K=p,e=this[K(0x21f)][K(0x1f1)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[K(0x1d4)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[K(0x1d4)](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const L=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this['_zoomPointerId']=null,this[L(0x1fc)]=null,this[L(0x215)]['stop']();if(e&&d!=null)try{if(e[L(0x1ef)](d))e[L(0x208)](d);}catch{}}[p(0x1cf)](c){const M=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']==M(0x1e0))c['target']['value']+=0.25;else{if(c?.['detail']==M(0x20c))c['target']['value']-=0.25;else{if(c?.[M(0x1f2)]==M(0x1dc))c[M(0x219)][M(0x1fe)]+=0.05;else{if(c?.['detail']=='decrementSmall')c[M(0x219)][M(0x1fe)]-=0.05;}}}const d=this['designerCanvas'][M(0x213)]>this['designerCanvas'][M(0x204)]?this[M(0x1e7)]['designerOffsetWidth']:this[M(0x1e7)][M(0x204)],f=this['designerCanvas'][M(0x220)]>this[M(0x1e7)]['offsetHeight']?this['designerCanvas'][M(0x220)]:this['designerCanvas']['offsetHeight'],g=d*(this['_sHor'][M(0x1fe)]-0.5)*-0x2,i=f*(this[M(0x21e)][M(0x1fe)]-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const N=p;if(!this['instanceServiceContainer'])return;c['preventDefault']();if(c[N(0x1c1)]){let d=this['_designerCanvas']['zoomFactor'];const e=c[N(0x210)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas']['getNormalizedEventCoordinates'](c);this[N(0x1e7)]['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this['_sHor'][N(0x1fe)]+=c['deltaY']/0x2710,this[N(0x1cf)](null)):(this['_sVert'][N(0x1fe)]+=c['deltaY']/0x2710,this['_onScrollbar'](null),this[N(0x1f8)]['value']+=c[N(0x1f0)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const O=p;return this[O(0x21f)]['designerWidth'];}set[p(0x1ff)](c){this['_designerCanvas']['designerWidth']=c;}get[p(0x1b7)](){const P=p;return this[P(0x21f)][P(0x1b7)];}set[p(0x1b7)](c){const Q=p;this['_designerCanvas'][Q(0x1b7)]=c;}set[p(0x1ec)](c){const R=p;this[R(0x21f)][R(0x1ec)]=c;}['setDesignItems'](c){this['_designerCanvas']['setDesignItems'](c);}async['executeCommand'](c){const S=p;this[S(0x21f)]['executeCommand'](c);}[p(0x217)](c){const T=p;return this[T(0x21f)]['canExecuteCommand'](c);}get[p(0x1dd)](){return this['instanceServiceContainer']?.['editingDocument'];}async[p(0x1bc)](c){const U=p;await c['commitPendingChanges']();if(!this[U(0x1be)])this[U(0x1c7)](c['serviceContainer'],c);else this[U(0x21f)][U(0x1bc)](c),this['initializeToolbar']();}[p(0x1fd)](){const V=p;this['_stopZoomRepeat'](),this['_toolbar']['dispose']();for(const c of this[V(0x200)]){c[V(0x1da)]?.(),c['remove']();}return this[V(0x200)]=[],this[V(0x21f)][V(0x1fd)]();}[p(0x1da)](){const W=p;this['detachDocument'](),this['_designerCanvas'][W(0x1da)](),this['_toolbar'][W(0x1da)]();}[p(0x1c0)](){this['_stopZoomRepeat']();}['initialize'](c,d){const X=p;this[X(0x1c9)]=c,this['_designerCanvas']['initialize'](c,d),this['initializeToolbar']();}[p(0x1eb)](){const Y=p,c=this['serviceContainer'];this['instanceServiceContainer'][Y(0x1ea)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d['dispose']?.(),d['remove']();}this['_configButtons']=[];if(c[Y(0x1f7)])for(let e of c[Y(0x1f7)]){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this['_configButtons']['push'](f),this['_lowertoolbar']['appendChild'](f);}}this['_toolbar']['initialize'](this[Y(0x1c9)],this);}[p(0x1d8)](){const Z=p;return this[Z(0x1dd)][Z(0x207)]();}async['parseDesignerHTML'](c,d=![]){await this['_designerCanvas']['whenReady'](),await this['editingDocument']['loadHtml'](c,d);}static[p(0x203)](c,d){const a0=p,e=new DesignerCanvas();e['initialize'](d);const f=e[a0(0x1c9)][a0(0x1ee)](a0(0x202),g=>g[a0(0x1de)]==DefaultHtmlParserService);return e[a0(0x211)](f[a0(0x216)](c,e[a0(0x1c9)],e['instanceServiceContainer'])),e;}}function a(){const a1=['editingDocument','constructor','lowertoolbar','incrementLarge','stopPropagation','setAttribute','alignOnSnap','_lowertoolbar','onZoomFactorChanged','slot','designerCanvas','width','1TPSbYI','detachView','initializeToolbar','additionalStyles','_configureZoomButton','getLastServiceWhere','hasPointerCapture','deltaX','zoomFactor','detail','s-hor','1693296yvVTzp','aria-pressed','define','designViewConfigButtons','_sHor','key','16270056wnLoaV','readOnly','_zoomPointerTarget','detachDocument','value','designerWidth','_configButtons','onclick','htmlParserService','wrapInDesigner','offsetWidth','height','8488SNzVSS','getHtml','releasePointerCapture','54PQbWpa','insertAdjacentElement','689870RbSnkG','decrementLarge','gridSize','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','3099131eyoMlo','deltaY','addDesignItems','_stopZoomRepeat','designerOffsetWidth','addEventListener','_zoomHoldRepeater','createDesignItems','canExecuteCommand','onlostpointercapture','target','zoomFit','_getDomElement','round','onkeydown','_sVert','_designerCanvas','designerOffsetHeight','designerHeight','oncontextmenu','alignOnGrid','isFinite','_zoomStep','attachDocument','_zoomInput','instanceServiceContainer','appendChild','disconnectedCallback','ctrlKey','pointerId','tool-bar','Wheel','1544922BBkiRJ','6aFTEEz','initialize','alignSnap','serviceContainer','245yIYgLN','zoomPoint','offsetHeight','toggle','_restoreCachedInititalValues','_onScrollbar','canvasOffset','_zoomPointerId','zoomReset','_toolbar','_zoomAroundViewportCenter','outer','template','357513Ipkadi','getDesignerHTML','onpointerup','dispose','preventDefault','incrementSmall'];a=function(){return a1;};return a();}customElements[p(0x1f6)]('node-projects-designer-view',DesignerView);