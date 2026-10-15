function a(){const a0=['95volZEI','whenReady','insertAdjacentElement','_zoomPointerTarget','decrementLarge','7Gvfrlu','zoomDecrease','_sVert','addEventListener','additionalStyles','_toolbar','gridSize','isPrimary','_stopZoomRepeat','outer','releasePointerCapture','oncontextmenu','1376394HgFRos','preventDefault','_designerCanvas','zoomToFit','selected','_zoomStep','_restoreCachedInititalValues','readOnly','_lowertoolbar','onlostpointercapture','onwheel','classList','_sHor','zoomReset','select','deltaY','serviceContainer','75704yJFnoL','dispose','972384LkSDIL','_zoomInput','createDesignItems','_onWheel','109sVIXzq','getHtml','onkeydown','getDesignerHTML','parseDesignerHTML','zoomPoint','slot','stop','_zoomPointerId','_zoomHoldRepeater','designViewConfigButtons','detachDocument','deltaX','afterend','alignOnSnap','_zoomAroundViewportCenter','initializeToolbar','16148077bCKbNp','instanceServiceContainer','s-hor','detail','zoomFactor','185908RUPCtL','hasPointerCapture','designerCanvas','canvas','getLastServiceWhere','onpointerdown','toString','ctrlKey','setAttribute','isFinite','designerOffsetHeight','_getDomElement','pointerId','constructor','1648760IUEnCP','detachView','423yjQQmT','shiftKey','initialize','attachDocument','canExecuteCommand','onblur','editingDocument','remove','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','alignOnGrid','value','alignGrid','addDesignItems','offsetWidth','loadHtml','style','scrollbar-input','disconnectedCallback','designerHeight','setDesignItems','_configButtons','16558vSpUAt','htmlParserService','designerWidth','_onScrollbar','provideButtons','onclick','appendChild','target','toggle'];a=function(){return a0;};return a();}function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x12e))/0x1*(parseInt(o(0xfd))/0x2)+parseInt(o(0x12a))/0x3+parseInt(o(0xd8))/0x4*(-parseInt(o(0x106))/0x5)+parseInt(o(0x117))/0x6*(parseInt(o(0x10b))/0x7)+-parseInt(o(0x128))/0x8*(-parseInt(o(0xe8))/0x9)+-parseInt(o(0xe6))/0xa+parseInt(o(0xd3))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7df69));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x10d)];[p(0x123)];get[p(0x127)](){const q=p;return this[q(0x119)]['serviceContainer'];}set[p(0x127)](c){const r=p;this['_designerCanvas'][r(0x127)]=c;}get[p(0xd4)](){return this['_designerCanvas']['instanceServiceContainer'];}set[p(0xd4)](c){const s=p;if(!c['editingDocument'])throw new Error(s(0xf0));this['_designerCanvas']['attachDocument'](c[s(0xee)]),this[s(0xd2)]();}['_designerCanvas'];get['designerCanvas'](){return this['_designerCanvas'];}get[p(0x11e)](){const t=p;return this['_designerCanvas'][t(0x11e)];}set[p(0x11e)](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];[p(0x12b)];['_lowertoolbar'];[p(0x110)];[p(0xcb)]=new ZoomHoldRepeater();['_zoomPointerId'];[p(0x109)];static [p(0xf7)]=css`
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
    </div>`;constructor(c=![]){const u=p;super(),this[u(0x11d)](),this['_sVert']=this['_getDomElement']('s-vert'),this[u(0x123)]=this[u(0xe3)](u(0xd5));const d=this[u(0xe3)](u(0x114));this[u(0x119)]=new DesignerCanvas(c),this[u(0x119)]['id']=u(0xdb),this[u(0x119)]['appendChild'](document['createElement'](u(0x134))),d[u(0x108)]('afterbegin',this[u(0x119)]),this[u(0x110)]=new DesignerToolbar(),this[u(0x110)]['id']='tool-bar',this['_sVert']['insertAdjacentElement'](u(0xcf),this['_toolbar']),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const v=u;this['_zoomInput']['value']=Math['round'](this[v(0x119)][v(0xd7)]*0x64)+'%';const l=this[v(0xda)]['canvasOffset'],m=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas'][v(0xf5)]?this[v(0xda)]['designerOffsetWidth']:this[v(0xda)]['offsetWidth'],n=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas'][v(0xe2)]:this['designerCanvas']['offsetHeight'];this[v(0x123)][v(0xf2)]=l['x']/(-0x2*m)+0.5,this[v(0x10d)]['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement']('zoomInput'),this[u(0x12b)][u(0x130)]=l=>{const w=u;if(l['key']=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput'][w(0xf2)])/0x64);},this['_zoomInput'][u(0xed)]=()=>{const x=u;this['_zoomAroundViewportCenter'](parseFloat(this[x(0x12b)]['value'])/0x64);},this[u(0x12b)]['onclick']=this[u(0x12b)][u(0x125)];let e=this['_getDomElement']('zoomIncrease');this['_configureZoomButton'](e,0x1);let f=this['_getDomElement'](u(0x10c));this['_configureZoomButton'](f,-0x1);let g=this[u(0xe3)](u(0x124));g[u(0x102)]=()=>{this['zoomReset']();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{const y=u;this[y(0x11a)]();},this[u(0x10e)](EventNames['Wheel'],l=>this[u(0x12d)](l));const i=(l,m)=>{const z=u;l[z(0x122)][z(0x105)](z(0x11b),m),l[z(0xe0)]('aria-pressed',String(m));},j=this['_getDomElement']('alignSnap');j['onclick']=()=>{this['_designerCanvas']['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this['_designerCanvas']['alignOnSnap']);},i(j,this[u(0x119)][u(0xd0)]),j['oncontextmenu']=l=>{const A=u;l[A(0x118)]();};const k=this[u(0xe3)](u(0xf3));k[u(0x102)]=()=>{const B=u;this[B(0x119)]['alignOnGrid']=!this['_designerCanvas'][B(0xf1)],i(k,this[B(0x119)]['alignOnGrid']);},i(k,this['_designerCanvas'][u(0xf1)]),k['oncontextmenu']=l=>{const C=u;l[C(0x118)]();let m=prompt('raster\x20size',this['designerCanvas'][C(0x111)][C(0xde)]());if(m){let n=parseInt(m);if(n>0x0)this[C(0xda)][C(0x111)]=n;}},this[u(0x11f)]=this[u(0xe3)]('lowertoolbar'),this[u(0x11f)][u(0x121)]=l=>l['stopPropagation'](),this['_sVert']['addEventListener']('scrollbar-input',l=>this[u(0x100)](l)),this['_sHor'][u(0x10e)](u(0xf8),l=>this['_onScrollbar'](l));}[p(0x124)](){const D=p;this['_designerCanvas']['canvasOffset']={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this[D(0x10d)]['value']=0.5,this['_sHor']['value']=0.5,this[D(0x12b)]['value']=Math['round'](this['_designerCanvas'][D(0xd7)]*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}[p(0xd1)](c){const E=p;if(!this[E(0xd4)])return;if(!Number[E(0xe1)](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this['_designerCanvas'][E(0xd7)],this['_designerCanvas']['canvasOffset']);this['_designerCanvas'][E(0x133)](e,c);}['_configureZoomButton'](c,d){const F=p;c[F(0x102)]=e=>{const G=F;if(e[G(0xd6)]===0x0)this['_zoomStep'](d);},c[F(0xdd)]=e=>{const H=F;if(!e[H(0x112)]||e['button']!=0x0)return;this[H(0x113)](),this['_zoomPointerId']=e['pointerId'],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e[H(0xe4)]);}catch{}this['_zoomHoldRepeater']['start'](()=>this['_zoomStep'](d),()=>this[H(0x11c)](d,0x4)),e[H(0x118)]();},c['onpointerup']=e=>this[F(0x113)](e[F(0xe4)]),c['onpointercancel']=e=>this['_stopZoomRepeat'](e[F(0xe4)]),c[F(0x120)]=e=>this[F(0x113)](e['pointerId']),c[F(0x116)]=e=>e[F(0x118)]();}['_zoomStep'](c,d=0x1){const I=p,e=this[I(0x119)][I(0xd7)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}[p(0x113)](c){const J=p;if(c!=null&&c!==this[J(0x136)])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this[J(0x136)]=null,this[J(0x109)]=null,this['_zoomHoldRepeater'][J(0x135)]();if(e&&d!=null)try{if(e[J(0xd9)](d))e[J(0x115)](d);}catch{}}[p(0x100)](c){const K=p;if(!this[K(0xd4)])return;if(c?.[K(0xd6)]=='incrementLarge')c[K(0x104)][K(0xf2)]+=0.25;else{if(c?.[K(0xd6)]==K(0x10a))c['target'][K(0xf2)]-=0.25;else{if(c?.['detail']=='incrementSmall')c['target']['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c[K(0x104)]['value']-=0.05;}}}const d=this[K(0xda)]['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this[K(0xda)]['designerOffsetWidth']:this[K(0xda)]['offsetWidth'],f=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas'][K(0xe2)]:this['designerCanvas']['offsetHeight'],g=d*(this[K(0x123)]['value']-0.5)*-0x2,i=f*(this[K(0x10d)][K(0xf2)]-0.5)*-0x2;this['designerCanvas']['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const L=p;if(!this[L(0xd4)])return;c['preventDefault']();if(c[L(0xdf)]){let d=this['_designerCanvas']['zoomFactor'];const e=c[L(0x126)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[L(0xda)]['getNormalizedEventCoordinates'](c);this[L(0xda)]['zoomTowardsPoint'](f,d);}else c[L(0xe9)]?(this['_sHor']['value']+=c['deltaY']/0x2710,this[L(0x100)](null)):(this[L(0x10d)]['value']+=c['deltaY']/0x2710,this[L(0x100)](null),this['_sHor'][L(0xf2)]+=c[L(0xce)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const M=p;return this[M(0x119)]['designerWidth'];}set[p(0xff)](c){this['_designerCanvas']['designerWidth']=c;}get['designerHeight'](){const N=p;return this['_designerCanvas'][N(0xfa)];}set[p(0xfa)](c){const O=p;this['_designerCanvas'][O(0xfa)]=c;}set['additionalStyles'](c){const P=p;this['_designerCanvas'][P(0x10f)]=c;}['setDesignItems'](c){const Q=p;this['_designerCanvas'][Q(0xfb)](c);}async['executeCommand'](c){this['_designerCanvas']['executeCommand'](c);}[p(0xec)](c){return this['_designerCanvas']['canExecuteCommand'](c);}get['editingDocument'](){return this['instanceServiceContainer']?.['editingDocument'];}async[p(0xeb)](c){const R=p;await c['commitPendingChanges']();if(!this[R(0xd4)])this['initialize'](c['serviceContainer'],c);else this['_designerCanvas'][R(0xeb)](c),this[R(0xd2)]();}['detachDocument'](){const S=p;this['_stopZoomRepeat'](),this[S(0x110)]['dispose']();for(const c of this[S(0xfc)]){c[S(0x129)]?.(),c[S(0xef)]();}return this['_configButtons']=[],this[S(0x119)][S(0xcd)]();}[p(0x129)](){const T=p;this[T(0xcd)](),this['_designerCanvas'][T(0x129)](),this['_toolbar'][T(0x129)]();}[p(0xf9)](){const U=p;this[U(0x113)]();}[p(0xea)](c,d){const V=p;this['serviceContainer']=c,this[V(0x119)]['initialize'](c,d),this['initializeToolbar']();}[p(0xd2)](){const W=p,c=this['serviceContainer'];this[W(0xd4)][W(0xe7)]=()=>this[W(0xcd)]();for(const d of this['_configButtons']){d['dispose']?.(),d['remove']();}this['_configButtons']=[];if(c[W(0xcc)])for(let e of c['designViewConfigButtons']){for(let f of e[W(0x101)](this,this[W(0x119)])){this[W(0xfc)]['push'](f),this[W(0x11f)][W(0x103)](f);}}this[W(0x110)][W(0xea)](this[W(0x127)],this);}[p(0x131)](){const X=p;return this[X(0xee)][X(0x12f)]();}async[p(0x132)](c,d=![]){const Y=p;await this['_designerCanvas'][Y(0x107)](),await this[Y(0xee)][Y(0xf6)](c,d);}static['wrapInDesigner'](c,d){const Z=p,e=new DesignerCanvas();e[Z(0xea)](d);const f=e[Z(0x127)][Z(0xdc)](Z(0xfe),g=>g[Z(0xe5)]==DefaultHtmlParserService);return e[Z(0xf4)](f[Z(0x12c)](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements['define']('node-projects-designer-view',DesignerView);