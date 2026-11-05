const q=b;function b(c,d){c=c-0x110;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x11d))/0x1+parseInt(o(0x141))/0x2+parseInt(o(0x164))/0x3*(parseInt(o(0x125))/0x4)+parseInt(o(0x130))/0x5+parseInt(o(0x132))/0x6+parseInt(o(0x12f))/0x7*(parseInt(o(0x116))/0x8)+-parseInt(o(0x137))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbf03f));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';function a(){const a0=['preventDefault','setDesignItems','outer','initializeToolbar','zoomToFit','outerRect','8LOoYqQ','_configButtons','Wheel','_onScrollbar','canExecuteCommand','value','attachDocument','7365RLlKwJ','constructor','_sVert','height','detail','onclick','isFinite','_sHor','324kBPXDQ','target','deltaY','readOnly','_zoomPointerTarget','detachView','_configureZoomButton','push','editingDocument','offsetWidth','3880765PZmDas','5850675DvStvI','setPointerCapture','2322084gETrZN','alignOnSnap','zoomInput','designerOffsetWidth','pointerId','24908256uzgAHW','initialize','s-vert','getNormalizedEventCoordinates','designerCanvas','designerOffsetHeight','_zoomPointerId','onlostpointercapture','_onWheel','addEventListener','1221550qnnrlw','lowertoolbar','_lowertoolbar','executeCommand','_getDomElement','_designerCanvas','serviceContainer','oncontextmenu','onwheel','canvasOffset','dispose','designerHeight','alignOnGrid','additionalStyles','zoomFactor','_stopZoomRepeat','incrementSmall','key','designerWidth','instanceServiceContainer','_zoomInput','htmlParserService','_toolbar','onZoomFactorChanged','incrementLarge','_zoomStep','deltaX','max','alignGrid','_zoomHoldRepeater','raster\x20size','width','offsetHeight','decrementLarge','stopPropagation','30927DLOqbP','Enter','ctrlKey','getLastServiceWhere','select','canvas','onpointercancel','parseDesignerHTML','zoomIncrease','getDesignerHTML','detachDocument','createElement','s-hor','_zoomAroundViewportCenter','button','whenReady'];a=function(){return a0;};return a();}export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get['serviceContainer'](){const p=b;return this[p(0x146)][p(0x147)];}set[q(0x147)](c){this['_designerCanvas']['serviceContainer']=c;}get['instanceServiceContainer'](){return this['_designerCanvas']['instanceServiceContainer'];}set[q(0x154)](c){const r=q;if(!c[r(0x12d)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this['_designerCanvas']['attachDocument'](c[r(0x12d)]),this[r(0x113)]();}['_designerCanvas'];get['designerCanvas'](){const s=q;return this[s(0x146)];}get[q(0x128)](){return this['_designerCanvas']['readOnly'];}set[q(0x128)](c){const t=q;this[t(0x146)][t(0x128)]=c;}[q(0x117)]=[];[q(0x155)];['_lowertoolbar'];['_toolbar'];[q(0x15e)]=new ZoomHoldRepeater();[q(0x13d)];['_zoomPointerTarget'];static ['style']=css`
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
    </div>`;constructor(c=![]){const u=q;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this['_getDomElement'](u(0x139)),this[u(0x124)]=this['_getDomElement'](u(0x170));const d=this[u(0x145)](u(0x112));this[u(0x146)]=new DesignerCanvas(c),this['_designerCanvas']['id']=u(0x169),this['_designerCanvas']['appendChild'](document[u(0x16f)]('slot')),d['insertAdjacentElement']('afterbegin',this['_designerCanvas']),this['_toolbar']=new DesignerToolbar(),this[u(0x157)]['id']='tool-bar',this['_sVert']['insertAdjacentElement']('afterend',this[u(0x157)]),this['_designerCanvas'][u(0x158)]['on'](()=>{const v=u;this['_zoomInput']['value']=Math['round'](this['_designerCanvas'][v(0x14f)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this[v(0x13b)][v(0x135)]>this['designerCanvas']['offsetWidth']?this[v(0x13b)]['designerOffsetWidth']:this[v(0x13b)]['offsetWidth'],n=this['designerCanvas'][v(0x13c)]>this[v(0x13b)]['offsetHeight']?this['designerCanvas'][v(0x13c)]:this['designerCanvas'][v(0x161)];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement'](u(0x134)),this['_zoomInput']['onkeydown']=l=>{const w=u;if(l[w(0x152)]==w(0x165))this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this[u(0x155)]['onblur']=()=>{const x=u;this['_zoomAroundViewportCenter'](parseFloat(this[x(0x155)][x(0x11b)])/0x64);},this['_zoomInput']['onclick']=this['_zoomInput'][u(0x168)];let e=this[u(0x145)](u(0x16c));this['_configureZoomButton'](e,0x1);let f=this[u(0x145)]('zoomDecrease');this[u(0x12b)](f,-0x1);let g=this['_getDomElement']('zoomReset');g[u(0x122)]=()=>{this['zoomReset']();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{const y=u;this[y(0x114)]();},this[u(0x140)](EventNames[u(0x118)],l=>this[u(0x13f)](l));const i=(l,m)=>{l['classList']['toggle']('selected',m),l['setAttribute']('aria-pressed',String(m));},j=this[u(0x145)]('alignSnap');j['onclick']=()=>{const z=u;this[z(0x146)]['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this['_designerCanvas']['alignOnSnap']);},i(j,this['_designerCanvas'][u(0x133)]),j[u(0x148)]=l=>{l['preventDefault']();};const k=this['_getDomElement'](u(0x15d));k['onclick']=()=>{const A=u;this['_designerCanvas'][A(0x14d)]=!this['_designerCanvas'][A(0x14d)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[u(0x146)][u(0x14d)]),k['oncontextmenu']=l=>{const B=u;l[B(0x110)]();let m=prompt(B(0x15f),this[B(0x13b)]['gridSize']['toString']());if(m){let n=parseInt(m);if(n>0x0)this[B(0x13b)]['gridSize']=n;}},this['_lowertoolbar']=this[u(0x145)](u(0x142)),this[u(0x143)][u(0x149)]=l=>l[u(0x163)](),this['_sVert'][u(0x140)]('scrollbar-input',l=>this['_onScrollbar'](l)),this[u(0x124)]['addEventListener']('scrollbar-input',l=>this[u(0x119)](l));}['zoomReset'](){const C=q;this[C(0x146)]['canvasOffset']={'x':0x0,'y':0x0},this[C(0x146)][C(0x14f)]=0x1,this[C(0x11f)]['value']=0.5,this[C(0x124)]['value']=0.5,this[C(0x155)][C(0x11b)]=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}[q(0x171)](c){const D=q;if(!this[D(0x154)])return;if(!Number[D(0x123)](c)||c<=0x0)return;const d=this['_designerCanvas'][D(0x115)],e=getCanvasPointAtViewportCenter(d[D(0x160)],d[D(0x120)],this[D(0x146)]['zoomFactor'],this[D(0x146)][D(0x14a)]);this['_designerCanvas']['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const E=q;c[E(0x122)]=e=>{const F=E;if(e['detail']===0x0)this[F(0x15a)](d);},c['onpointerdown']=e=>{const G=E;if(!e['isPrimary']||e[G(0x172)]!=0x0)return;this['_stopZoomRepeat'](),this[G(0x13d)]=e[G(0x136)],this[G(0x129)]=c;try{c[G(0x131)](e[G(0x136)]);}catch{}this[G(0x15e)]['start'](()=>this[G(0x15a)](d),()=>this['_zoomStep'](d,0x4)),e[G(0x110)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e['pointerId']),c[E(0x16a)]=e=>this[E(0x150)](e['pointerId']),c[E(0x13e)]=e=>this['_stopZoomRepeat'](e['pointerId']),c[E(0x148)]=e=>e[E(0x110)]();}['_zoomStep'](c,d=0x1){const H=q,e=this[H(0x146)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[H(0x171)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math[H(0x15c)](e-g,0.001));}}[q(0x150)](c){const I=q;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[I(0x13d)],e=this[I(0x129)];this[I(0x13d)]=null,this['_zoomPointerTarget']=null,this[I(0x15e)]['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}[q(0x119)](c){const J=q;if(!this[J(0x154)])return;if(c?.['detail']==J(0x159))c['target']['value']+=0.25;else{if(c?.[J(0x121)]==J(0x162))c['target'][J(0x11b)]-=0.25;else{if(c?.['detail']==J(0x151))c[J(0x126)]['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c[J(0x126)]['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this[J(0x13b)]['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this['designerCanvas'][J(0x12e)],f=this['designerCanvas'][J(0x13c)]>this['designerCanvas'][J(0x161)]?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas']['offsetHeight'],g=d*(this[J(0x124)][J(0x11b)]-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this[J(0x13b)][J(0x14a)]={'x':g,'y':i};}['_onWheel'](c){const K=q;if(!this['instanceServiceContainer'])return;c[K(0x110)]();if(c[K(0x166)]){let d=this[K(0x146)]['zoomFactor'];const e=c[K(0x127)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas'][K(0x13a)](c);this['designerCanvas']['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this[K(0x124)]['value']+=c['deltaY']/0x2710,this['_onScrollbar'](null)):(this[K(0x11f)][K(0x11b)]+=c[K(0x127)]/0x2710,this[K(0x119)](null),this['_sHor']['value']+=c[K(0x15b)]/0x2710,this['_onScrollbar'](null));}get[q(0x153)](){const L=q;return this['_designerCanvas'][L(0x153)];}set['designerWidth'](c){const M=q;this['_designerCanvas'][M(0x153)]=c;}get['designerHeight'](){const N=q;return this['_designerCanvas'][N(0x14c)];}set[q(0x14c)](c){const O=q;this[O(0x146)][O(0x14c)]=c;}set['additionalStyles'](c){const P=q;this['_designerCanvas'][P(0x14e)]=c;}[q(0x111)](c){this['_designerCanvas']['setDesignItems'](c);}async['executeCommand'](c){const Q=q;this['_designerCanvas'][Q(0x144)](c);}['canExecuteCommand'](c){const R=q;return this['_designerCanvas'][R(0x11a)](c);}get['editingDocument'](){const S=q;return this[S(0x154)]?.[S(0x12d)];}async['attachDocument'](c){const T=q;await c['commitPendingChanges']();if(!this[T(0x154)])this[T(0x138)](c['serviceContainer'],c);else this['_designerCanvas'][T(0x11c)](c),this['initializeToolbar']();}[q(0x16e)](){const U=q;this['_stopZoomRepeat'](),this[U(0x157)]['dispose']();for(const c of this[U(0x117)]){c[U(0x14b)]?.(),c['remove']();}return this[U(0x117)]=[],this['_designerCanvas']['detachDocument']();}['dispose'](){const V=q;this['detachDocument'](),this['_designerCanvas'][V(0x14b)](),this[V(0x157)][V(0x14b)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}[q(0x138)](c,d){const W=q;this[W(0x147)]=c,this['_designerCanvas'][W(0x138)](c,d),this[W(0x113)]();}[q(0x113)](){const X=q,c=this['serviceContainer'];this['instanceServiceContainer'][X(0x12a)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d['dispose']?.(),d['remove']();}this[X(0x117)]=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e['provideButtons'](this,this[X(0x146)])){this['_configButtons'][X(0x12c)](f),this['_lowertoolbar']['appendChild'](f);}}this['_toolbar']['initialize'](this[X(0x147)],this);}[q(0x16d)](){return this['editingDocument']['getHtml']();}async[q(0x16b)](c,d=![]){const Y=q;await this[Y(0x146)][Y(0x173)](),await this[Y(0x12d)]['loadHtml'](c,d);}static['wrapInDesigner'](c,d){const Z=q,e=new DesignerCanvas();e[Z(0x138)](d);const f=e[Z(0x147)][Z(0x167)](Z(0x156),g=>g[Z(0x11e)]==DefaultHtmlParserService);return e['addDesignItems'](f['createDesignItems'](c,e[Z(0x147)],e[Z(0x154)])),e;}}customElements['define']('node-projects-designer-view',DesignerView);