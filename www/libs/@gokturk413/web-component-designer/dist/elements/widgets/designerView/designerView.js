const p=b;function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x116))/0x1+parseInt(o(0x118))/0x2*(parseInt(o(0x107))/0x3)+parseInt(o(0x12b))/0x4+parseInt(o(0x108))/0x5+-parseInt(o(0x104))/0x6*(parseInt(o(0x117))/0x7)+-parseInt(o(0x12e))/0x8+parseInt(o(0x129))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb2be3));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';function a(){const a4=['onclick','offsetHeight','6813XfoVnO','4374830YVfotH','canExecuteCommand','outer','zoomFit','key','readOnly','isPrimary','designerWidth','constructor','remove','zoomFactor','zoomIncrease','whenReady','max','1406789TfZUCz','196126VrxOKL','188MzjyLP','zoomToFit','button','createDesignItems','_zoomPointerTarget','_sHor','appendChild','_configButtons','alignOnGrid','commitPendingChanges','canvasOffset','_onScrollbar','wrapInDesigner','designerOffsetHeight','_zoomHoldRepeater','_zoomAroundViewportCenter','alignGrid','2667870GPtxIf','editingDocument','611340sYmONB','designerCanvas','dispose','10750440hhoRzc','_onWheel','lowertoolbar','classList','loadHtml','_configureZoomButton','setAttribute','pointerId','onpointercancel','slot','_stopZoomRepeat','executeCommand','_lowertoolbar','_zoomStep','designViewConfigButtons','isFinite','initialize','gridSize','template','_designerCanvas','deltaX','initializeToolbar','Enter','_getDomElement','onblur','value','offsetWidth','instanceServiceContainer','selected','detachDocument','alignOnSnap','attachDocument','_zoomPointerId','ctrlKey','afterbegin','deltaY','zoomReset','stop','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','_restoreCachedInititalValues','alignSnap','s-hor','oncontextmenu','detachView','_zoomInput','style','detail','serviceContainer','onkeydown','width','round','_toolbar','preventDefault','insertAdjacentElement','_sVert','htmlParserService','aria-pressed','zoomTowardsPoint','186yDguLE'];a=function(){return a4;};return a();}export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x100)];['_sHor'];get['serviceContainer'](){const q=p;return this[q(0x141)][q(0xf9)];}set['serviceContainer'](c){this['_designerCanvas']['serviceContainer']=c;}get[p(0x149)](){const r=p;return this[r(0x141)][r(0x149)];}set[p(0x149)](c){const s=p;if(!c['editingDocument'])throw new Error(s(0xf0));this['_designerCanvas'][s(0x14d)](c[s(0x12a)]),this['initializeToolbar']();}[p(0x141)];get[p(0x12c)](){const t=p;return this[t(0x141)];}get['readOnly'](){const u=p;return this[u(0x141)][u(0x10d)];}set[p(0x10d)](c){const v=p;this[v(0x141)]['readOnly']=c;}[p(0x11f)]=[];[p(0xf6)];['_lowertoolbar'];[p(0xfd)];[p(0x126)]=new ZoomHoldRepeater();[p(0x14e)];['_zoomPointerTarget'];static [p(0xf7)]=css`
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
    }`;static [p(0x140)]=html`
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
    </div>`;constructor(c=![]){const w=p;super(),this[w(0xf1)](),this['_sVert']=this[w(0x145)]('s-vert'),this['_sHor']=this['_getDomElement'](w(0xf3));const d=this['_getDomElement'](w(0x10a));this[w(0x141)]=new DesignerCanvas(c),this['_designerCanvas']['id']='canvas',this['_designerCanvas'][w(0x11e)](document['createElement'](w(0x137))),d[w(0xff)](w(0x150),this[w(0x141)]),this[w(0xfd)]=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this['_sVert']['insertAdjacentElement']('afterend',this['_toolbar']),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const x=w;this[x(0xf6)][x(0x147)]=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this['designerCanvas']['designerOffsetWidth']>this[x(0x12c)][x(0x148)]?this['designerCanvas']['designerOffsetWidth']:this[x(0x12c)]['offsetWidth'],n=this['designerCanvas'][x(0x125)]>this['designerCanvas']['offsetHeight']?this[x(0x12c)]['designerOffsetHeight']:this[x(0x12c)][x(0x106)];this[x(0x11d)][x(0x147)]=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[w(0x145)]('zoomInput'),this[w(0xf6)][w(0xfa)]=l=>{const y=w;if(l[y(0x10c)]==y(0x144))this['_zoomAroundViewportCenter'](parseFloat(this[y(0xf6)][y(0x147)])/0x64);},this['_zoomInput'][w(0x146)]=()=>{const z=w;this[z(0x127)](parseFloat(this['_zoomInput'][z(0x147)])/0x64);},this['_zoomInput'][w(0x105)]=this['_zoomInput']['select'];let e=this[w(0x145)](w(0x113));this[w(0x133)](e,0x1);let f=this[w(0x145)]('zoomDecrease');this[w(0x133)](f,-0x1);let g=this['_getDomElement'](w(0x152));g['onclick']=()=>{this['zoomReset']();};let h=this['_getDomElement'](w(0x10b));h[w(0x105)]=()=>{const A=w;this[A(0x119)]();},this['addEventListener'](EventNames['Wheel'],l=>this[w(0x12f)](l));const i=(l,m)=>{const B=w;l[B(0x131)]['toggle'](B(0x14a),m),l[B(0x134)](B(0x102),String(m));},j=this[w(0x145)](w(0xf2));j['onclick']=()=>{const C=w;this[C(0x141)]['alignOnSnap']=!this[C(0x141)][C(0x14c)],i(j,this['_designerCanvas'][C(0x14c)]);},i(j,this['_designerCanvas']['alignOnSnap']),j['oncontextmenu']=l=>{const D=w;l[D(0xfe)]();};const k=this['_getDomElement'](w(0x128));k[w(0x105)]=()=>{const E=w;this[E(0x141)]['alignOnGrid']=!this['_designerCanvas'][E(0x120)],i(k,this['_designerCanvas'][E(0x120)]);},i(k,this['_designerCanvas'][w(0x120)]),k[w(0xf4)]=l=>{const F=w;l[F(0xfe)]();let m=prompt('raster\x20size',this['designerCanvas'][F(0x13f)]['toString']());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][F(0x13f)]=n;}},this[w(0x13a)]=this['_getDomElement'](w(0x130)),this[w(0x13a)]['onwheel']=l=>l['stopPropagation'](),this[w(0x100)]['addEventListener']('scrollbar-input',l=>this[w(0x123)](l)),this[w(0x11d)]['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}[p(0x152)](){const G=p;this['_designerCanvas'][G(0x122)]={'x':0x0,'y':0x0},this['_designerCanvas'][G(0x112)]=0x1,this['_sVert']['value']=0.5,this[G(0x11d)]['value']=0.5,this['_zoomInput'][G(0x147)]=Math[G(0xfc)](this['_designerCanvas'][G(0x112)]*0x64)+'%';}['zoomToFit'](){const H=p;this[H(0x141)][H(0x119)]();}[p(0x127)](c){const I=p;if(!this[I(0x149)])return;if(!Number[I(0x13d)](c)||c<=0x0)return;const d=this[I(0x141)]['outerRect'],e=getCanvasPointAtViewportCenter(d[I(0xfb)],d['height'],this[I(0x141)]['zoomFactor'],this['_designerCanvas']['canvasOffset']);this[I(0x141)]['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const K=p;c['onclick']=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c['onpointerdown']=e=>{const J=b;if(!e[J(0x10e)]||e[J(0x11a)]!=0x0)return;this[J(0x138)](),this['_zoomPointerId']=e['pointerId'],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e[J(0x135)]);}catch{}this['_zoomHoldRepeater']['start'](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e[J(0xfe)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e[K(0x135)]),c[K(0x136)]=e=>this[K(0x138)](e[K(0x135)]),c['onlostpointercapture']=e=>this['_stopZoomRepeat'](e[K(0x135)]),c['oncontextmenu']=e=>e[K(0xfe)]();}[p(0x13b)](c,d=0x1){const L=p,e=this[L(0x141)][L(0x112)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math[L(0x115)](e-g,0.001));}}[p(0x138)](c){const M=p;if(c!=null&&c!==this[M(0x14e)])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this[M(0x14e)]=null,this[M(0x11c)]=null,this[M(0x126)][M(0xef)]();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}['_onScrollbar'](c){const N=p;if(!this['instanceServiceContainer'])return;if(c?.[N(0xf8)]=='incrementLarge')c['target'][N(0x147)]+=0.25;else{if(c?.[N(0xf8)]=='decrementLarge')c['target'][N(0x147)]-=0.25;else{if(c?.['detail']=='incrementSmall')c['target']['value']+=0.05;else{if(c?.[N(0xf8)]=='decrementSmall')c['target'][N(0x147)]-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this[N(0x12c)][N(0x148)]?this['designerCanvas']['designerOffsetWidth']:this[N(0x12c)]['offsetWidth'],f=this[N(0x12c)][N(0x125)]>this['designerCanvas'][N(0x106)]?this[N(0x12c)][N(0x125)]:this[N(0x12c)][N(0x106)],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[N(0x100)]['value']-0.5)*-0x2;this['designerCanvas'][N(0x122)]={'x':g,'y':i};}['_onWheel'](c){const O=p;if(!this['instanceServiceContainer'])return;c[O(0xfe)]();if(c[O(0x14f)]){let d=this['_designerCanvas']['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[O(0x12c)]['getNormalizedEventCoordinates'](c);this[O(0x12c)][O(0x103)](f,d);}else c['shiftKey']?(this[O(0x11d)][O(0x147)]+=c['deltaY']/0x2710,this[O(0x123)](null)):(this[O(0x100)]['value']+=c[O(0x151)]/0x2710,this[O(0x123)](null),this['_sHor'][O(0x147)]+=c[O(0x142)]/0x2710,this[O(0x123)](null));}get[p(0x10f)](){const P=p;return this[P(0x141)][P(0x10f)];}set[p(0x10f)](c){const Q=p;this[Q(0x141)]['designerWidth']=c;}get['designerHeight'](){const R=p;return this[R(0x141)]['designerHeight'];}set['designerHeight'](c){const S=p;this[S(0x141)]['designerHeight']=c;}set['additionalStyles'](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const T=p;this[T(0x141)]['setDesignItems'](c);}async[p(0x139)](c){const U=p;this[U(0x141)]['executeCommand'](c);}[p(0x109)](c){return this['_designerCanvas']['canExecuteCommand'](c);}get['editingDocument'](){const V=p;return this['instanceServiceContainer']?.[V(0x12a)];}async[p(0x14d)](c){const W=p;await c[W(0x121)]();if(!this[W(0x149)])this['initialize'](c[W(0xf9)],c);else this['_designerCanvas'][W(0x14d)](c),this['initializeToolbar']();}[p(0x14b)](){const X=p;this['_stopZoomRepeat'](),this[X(0xfd)]['dispose']();for(const c of this[X(0x11f)]){c['dispose']?.(),c[X(0x111)]();}return this[X(0x11f)]=[],this[X(0x141)]['detachDocument']();}['dispose'](){const Y=p;this['detachDocument'](),this['_designerCanvas']['dispose'](),this[Y(0xfd)]['dispose']();}['disconnectedCallback'](){const Z=p;this[Z(0x138)]();}['initialize'](c,d){const a0=p;this['serviceContainer']=c,this[a0(0x141)][a0(0x13e)](c,d),this[a0(0x143)]();}[p(0x143)](){const a1=p,c=this['serviceContainer'];this[a1(0x149)][a1(0xf5)]=()=>this['detachDocument']();for(const d of this[a1(0x11f)]){d[a1(0x12d)]?.(),d['remove']();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c[a1(0x13c)]){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this['_configButtons']['push'](f),this[a1(0x13a)]['appendChild'](f);}}this['_toolbar']['initialize'](this['serviceContainer'],this);}['getDesignerHTML'](){return this['editingDocument']['getHtml']();}async['parseDesignerHTML'](c,d=![]){const a2=p;await this['_designerCanvas'][a2(0x114)](),await this[a2(0x12a)][a2(0x132)](c,d);}static[p(0x124)](c,d){const a3=p,e=new DesignerCanvas();e['initialize'](d);const f=e['serviceContainer']['getLastServiceWhere'](a3(0x101),g=>g[a3(0x110)]==DefaultHtmlParserService);return e['addDesignItems'](f[a3(0x11b)](c,e['serviceContainer'],e[a3(0x149)])),e;}}customElements['define']('node-projects-designer-view',DesignerView);