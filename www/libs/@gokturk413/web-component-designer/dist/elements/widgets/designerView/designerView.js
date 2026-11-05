const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x176))/0x1+-parseInt(o(0x187))/0x2+-parseInt(o(0x19f))/0x3*(parseInt(o(0x1b2))/0x4)+-parseInt(o(0x19d))/0x5*(parseInt(o(0x1ae))/0x6)+-parseInt(o(0x188))/0x7*(-parseInt(o(0x1af))/0x8)+parseInt(o(0x1b8))/0x9+-parseInt(o(0x1dd))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9a45f));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function b(c,d){c=c-0x174;const e=a();let f=e[c];return f;}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';function a(){const a9=['zoomReset','additionalStyles','setPointerCapture','incrementSmall','insertAdjacentElement','appendChild','_restoreCachedInititalValues','designerCanvas','s-hor','_zoomPointerId','designerOffsetHeight','_getDomElement','_zoomStep','scrollbar-input','gridSize','start','htmlParserService','_designerCanvas','getNormalizedEventCoordinates','5XOqefL','onclick','3RfkaAJ','_configButtons','select','value','aria-pressed','dispose','_onWheel','_sHor','setDesignItems','onpointerdown','serviceContainer','preventDefault','_sVert','hasPointerCapture','s-vert','1355052TyQasc','8HRNuCX','detachDocument','tool-bar','1088876eYnSlR','readOnly','zoomIncrease','canvas','_zoomAroundViewportCenter','pointerId','10759644cjMbsf','loadHtml','initialize','target','editingDocument','parseDesignerHTML','zoomToFit','stopPropagation','oncontextmenu','isPrimary','zoomInput','offsetWidth','node-projects-designer-view','whenReady','width','alignOnSnap','detachView','initializeToolbar','detail','outerRect','toString','executeCommand','provideButtons','designerHeight','commitPendingChanges','onblur','designerWidth','addEventListener','_zoomInput','deltaX','instanceServiceContainer','_onScrollbar','ctrlKey','zoomFactor','deltaY','_zoomHoldRepeater','outer','6447890bBWecz','canExecuteCommand','selected','894725XhNIel','incrementLarge','attachDocument','round','_lowertoolbar','key','push','designerOffsetWidth','shiftKey','_stopZoomRepeat','raster\x20size','height','alignOnGrid','wrapInDesigner','zoomFit','exp','_toolbar','823398rsJqLR','673477jLYweo','template'];a=function(){return a9;};return a();}export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get[p(0x1a9)](){const q=p;return this[q(0x19b)]['serviceContainer'];}set[p(0x1a9)](c){const r=p;this[r(0x19b)][r(0x1a9)]=c;}get['instanceServiceContainer'](){const s=p;return this[s(0x19b)]['instanceServiceContainer'];}set[p(0x1d6)](c){const t=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[t(0x19b)]['attachDocument'](c['editingDocument']),this[t(0x1c9)]();}[p(0x19b)];get[p(0x191)](){const u=p;return this[u(0x19b)];}get[p(0x1b3)](){const v=p;return this['_designerCanvas'][v(0x1b3)];}set[p(0x1b3)](c){const w=p;this['_designerCanvas'][w(0x1b3)]=c;}[p(0x1a0)]=[];['_zoomInput'];['_lowertoolbar'];[p(0x186)];[p(0x1db)]=new ZoomHoldRepeater();['_zoomPointerId'];['_zoomPointerTarget'];static ['style']=css`
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
    }`;static [p(0x189)]=html`
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
    </div>`;constructor(c=![]){const x=p;super(),this[x(0x190)](),this[x(0x1ab)]=this[x(0x195)](x(0x1ad)),this[x(0x1a6)]=this['_getDomElement'](x(0x192));const d=this[x(0x195)](x(0x1dc));this[x(0x19b)]=new DesignerCanvas(c),this[x(0x19b)]['id']=x(0x1b5),this['_designerCanvas'][x(0x18f)](document['createElement']('slot')),d['insertAdjacentElement']('afterbegin',this['_designerCanvas']),this['_toolbar']=new DesignerToolbar(),this[x(0x186)]['id']=x(0x1b1),this[x(0x1ab)][x(0x18e)]('afterend',this[x(0x186)]),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const y=x;this[y(0x1d4)][y(0x1a2)]=Math[y(0x179)](this['_designerCanvas'][y(0x1d9)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this['designerCanvas'][y(0x17d)]>this['designerCanvas'][y(0x1c3)]?this[y(0x191)]['designerOffsetWidth']:this[y(0x191)][y(0x1c3)],n=this[y(0x191)][y(0x194)]>this[y(0x191)]['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas']['offsetHeight'];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this['_sVert'][y(0x1a2)]=l['y']/(-0x2*n)+0.5;}),this[x(0x1d4)]=this['_getDomElement'](x(0x1c2)),this[x(0x1d4)]['onkeydown']=l=>{const z=x;if(l[z(0x17b)]=='Enter')this[z(0x1b6)](parseFloat(this[z(0x1d4)]['value'])/0x64);},this[x(0x1d4)][x(0x1d1)]=()=>{const A=x;this['_zoomAroundViewportCenter'](parseFloat(this[A(0x1d4)][A(0x1a2)])/0x64);},this['_zoomInput']['onclick']=this['_zoomInput'][x(0x1a1)];let e=this['_getDomElement'](x(0x1b4));this['_configureZoomButton'](e,0x1);let f=this['_getDomElement']('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this[x(0x195)](x(0x18a));g['onclick']=()=>{const B=x;this[B(0x18a)]();};let h=this['_getDomElement'](x(0x184));h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames['Wheel'],l=>this[x(0x1a5)](l));const i=(l,m)=>{const C=x;l['classList']['toggle'](C(0x175),m),l['setAttribute'](C(0x1a3),String(m));},j=this['_getDomElement']('alignSnap');j[x(0x19e)]=()=>{const D=x;this[D(0x19b)]['alignOnSnap']=!this['_designerCanvas'][D(0x1c7)],i(j,this[D(0x19b)][D(0x1c7)]);},i(j,this[x(0x19b)]['alignOnSnap']),j[x(0x1c0)]=l=>{const E=x;l[E(0x1aa)]();};const k=this[x(0x195)]('alignGrid');k['onclick']=()=>{const F=x;this['_designerCanvas']['alignOnGrid']=!this[F(0x19b)]['alignOnGrid'],i(k,this[F(0x19b)][F(0x182)]);},i(k,this['_designerCanvas']['alignOnGrid']),k['oncontextmenu']=l=>{const G=x;l['preventDefault']();let m=prompt(G(0x180),this[G(0x191)]['gridSize'][G(0x1cc)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][G(0x198)]=n;}},this[x(0x17a)]=this['_getDomElement']('lowertoolbar'),this['_lowertoolbar']['onwheel']=l=>l[x(0x1bf)](),this['_sVert'][x(0x1d3)](x(0x197),l=>this[x(0x1d7)](l)),this[x(0x1a6)][x(0x1d3)]('scrollbar-input',l=>this['_onScrollbar'](l));}[p(0x18a)](){const H=p;this[H(0x19b)]['canvasOffset']={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this['_sVert']['value']=0.5,this['_sHor'][H(0x1a2)]=0.5,this[H(0x1d4)]['value']=Math['round'](this['_designerCanvas'][H(0x1d9)]*0x64)+'%';}['zoomToFit'](){const I=p;this[I(0x19b)][I(0x1be)]();}[p(0x1b6)](c){const J=p;if(!this[J(0x1d6)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[J(0x19b)][J(0x1cb)],e=getCanvasPointAtViewportCenter(d[J(0x1c6)],d[J(0x181)],this['_designerCanvas'][J(0x1d9)],this['_designerCanvas']['canvasOffset']);this[J(0x19b)]['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const K=p;c[K(0x19e)]=e=>{const L=K;if(e[L(0x1ca)]===0x0)this[L(0x196)](d);},c[K(0x1a8)]=e=>{const M=K;if(!e[M(0x1c1)]||e['button']!=0x0)return;this['_stopZoomRepeat'](),this[M(0x193)]=e[M(0x1b7)],this['_zoomPointerTarget']=c;try{c[M(0x18c)](e['pointerId']);}catch{}this['_zoomHoldRepeater'][M(0x199)](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e[M(0x1aa)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e['pointerId']),c['onpointercancel']=e=>this[K(0x17f)](e[K(0x1b7)]),c['onlostpointercapture']=e=>this[K(0x17f)](e[K(0x1b7)]),c['oncontextmenu']=e=>e[K(0x1aa)]();}[p(0x196)](c,d=0x1){const N=p,e=this[N(0x19b)][N(0x1d9)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[N(0x1b6)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[N(0x1b6)](Math['max'](e-g,0.001));}}[p(0x17f)](c){const O=p;if(c!=null&&c!==this[O(0x193)])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater']['stop']();if(e&&d!=null)try{if(e[O(0x1ac)](d))e['releasePointerCapture'](d);}catch{}}[p(0x1d7)](c){const P=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']==P(0x177))c[P(0x1bb)]['value']+=0.25;else{if(c?.[P(0x1ca)]=='decrementLarge')c[P(0x1bb)]['value']-=0.25;else{if(c?.['detail']==P(0x18d))c['target'][P(0x1a2)]+=0.05;else{if(c?.[P(0x1ca)]=='decrementSmall')c[P(0x1bb)][P(0x1a2)]-=0.05;}}}const d=this[P(0x191)]['designerOffsetWidth']>this['designerCanvas'][P(0x1c3)]?this['designerCanvas']['designerOffsetWidth']:this[P(0x191)][P(0x1c3)],f=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas'][P(0x194)]:this['designerCanvas']['offsetHeight'],g=d*(this['_sHor'][P(0x1a2)]-0.5)*-0x2,i=f*(this['_sVert'][P(0x1a2)]-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}[p(0x1a5)](c){const Q=p;if(!this[Q(0x1d6)])return;c[Q(0x1aa)]();if(c[Q(0x1d8)]){let d=this[Q(0x19b)][Q(0x1d9)];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math[Q(0x185)](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][Q(0x19c)](c);this['designerCanvas']['zoomTowardsPoint'](f,d);}else c[Q(0x17e)]?(this['_sHor'][Q(0x1a2)]+=c['deltaY']/0x2710,this['_onScrollbar'](null)):(this['_sVert']['value']+=c[Q(0x1da)]/0x2710,this[Q(0x1d7)](null),this['_sHor']['value']+=c[Q(0x1d5)]/0x2710,this[Q(0x1d7)](null));}get[p(0x1d2)](){const R=p;return this['_designerCanvas'][R(0x1d2)];}set[p(0x1d2)](c){const S=p;this[S(0x19b)][S(0x1d2)]=c;}get[p(0x1cf)](){const T=p;return this['_designerCanvas'][T(0x1cf)];}set['designerHeight'](c){const U=p;this[U(0x19b)][U(0x1cf)]=c;}set[p(0x18b)](c){const V=p;this[V(0x19b)]['additionalStyles']=c;}[p(0x1a7)](c){const W=p;this[W(0x19b)][W(0x1a7)](c);}async['executeCommand'](c){const X=p;this[X(0x19b)][X(0x1cd)](c);}[p(0x174)](c){const Y=p;return this[Y(0x19b)][Y(0x174)](c);}get['editingDocument'](){const Z=p;return this[Z(0x1d6)]?.['editingDocument'];}async['attachDocument'](c){const a0=p;await c[a0(0x1d0)]();if(!this['instanceServiceContainer'])this['initialize'](c[a0(0x1a9)],c);else this['_designerCanvas'][a0(0x178)](c),this[a0(0x1c9)]();}[p(0x1b0)](){const a1=p;this['_stopZoomRepeat'](),this['_toolbar']['dispose']();for(const c of this[a1(0x1a0)]){c[a1(0x1a4)]?.(),c['remove']();}return this['_configButtons']=[],this[a1(0x19b)]['detachDocument']();}['dispose'](){const a2=p;this[a2(0x1b0)](),this['_designerCanvas'][a2(0x1a4)](),this['_toolbar']['dispose']();}['disconnectedCallback'](){const a3=p;this[a3(0x17f)]();}['initialize'](c,d){const a4=p;this['serviceContainer']=c,this[a4(0x19b)]['initialize'](c,d),this['initializeToolbar']();}['initializeToolbar'](){const a5=p,c=this[a5(0x1a9)];this['instanceServiceContainer'][a5(0x1c8)]=()=>this['detachDocument']();for(const d of this[a5(0x1a0)]){d['dispose']?.(),d['remove']();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e[a5(0x1ce)](this,this[a5(0x19b)])){this[a5(0x1a0)][a5(0x17c)](f),this['_lowertoolbar']['appendChild'](f);}}this[a5(0x186)]['initialize'](this['serviceContainer'],this);}['getDesignerHTML'](){const a6=p;return this[a6(0x1bc)]['getHtml']();}async[p(0x1bd)](c,d=![]){const a7=p;await this['_designerCanvas'][a7(0x1c5)](),await this[a7(0x1bc)][a7(0x1b9)](c,d);}static[p(0x183)](c,d){const a8=p,e=new DesignerCanvas();e[a8(0x1ba)](d);const f=e['serviceContainer']['getLastServiceWhere'](a8(0x19a),g=>g['constructor']==DefaultHtmlParserService);return e['addDesignItems'](f['createDesignItems'](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements['define'](p(0x1c4),DesignerView);