const q=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0xd6))/0x1*(-parseInt(o(0xb8))/0x2)+parseInt(o(0xb9))/0x3*(-parseInt(o(0xfb))/0x4)+-parseInt(o(0x11f))/0x5*(-parseInt(o(0x10f))/0x6)+parseInt(o(0xc3))/0x7*(-parseInt(o(0xe8))/0x8)+parseInt(o(0xe1))/0x9+-parseInt(o(0x117))/0xa*(parseInt(o(0x108))/0xb)+parseInt(o(0xff))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x79553));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function a(){const a2=['onpointercancel','_zoomAroundViewportCenter','getHtml','_onWheel','_zoomPointerId','canvasOffset','23199mPYkwA','editingDocument','_stopZoomRepeat','outer','designerHeight','setDesignItems','remove','612678NgSkSO','_configureZoomButton','button','zoomDecrease','classList','detachView','zoomTowardsPoint','dispose','2250XjfpCv','value','addEventListener','offsetHeight','createElement','designerOffsetHeight','readOnly','decrementLarge','45kksGeo','canvas','executeCommand','initialize','onpointerdown','setPointerCapture','onclick','s-hor','designerOffsetWidth','107234AldOOg','6IjVcxD','designerWidth','designerCanvas','isPrimary','slot','lowertoolbar','_lowertoolbar','scrollbar-input','alignOnSnap','_zoomHoldRepeater','14MQwFJu','incrementLarge','designViewConfigButtons','_sHor','ctrlKey','_getDomElement','zoomToFit','onblur','createDesignItems','attachDocument','provideButtons','detachDocument','deltaX','height','additionalStyles','canExecuteCommand','style','insertAdjacentElement','zoomReset','17WKYQix','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','zoomInput','_designerCanvas','Enter','zoomFactor','getNormalizedEventCoordinates','_zoomStep','onkeydown','initializeToolbar','_configButtons','4216716GIhXoF','_onScrollbar','isFinite','alignGrid','pointerId','serviceContainer','onpointerup','2799056vkGwCc','alignSnap','loadHtml','releasePointerCapture','instanceServiceContainer','s-vert','preventDefault','node-projects-designer-view','offsetWidth','_zoomPointerTarget','afterbegin','target','detail','_sVert','hasPointerCapture','width','alignOnGrid','raster\x20size','stopPropagation','766708QLirVt','_zoomInput','_restoreCachedInititalValues','deltaY','18942840IcAmbC','_toolbar','oncontextmenu'];a=function(){return a2;};return a();}function b(c,d){c=c-0xb6;const e=a();let f=e[c];return f;}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get['serviceContainer'](){const p=b;return this[p(0xd9)][p(0xe6)];}set[q(0xe6)](c){this['_designerCanvas']['serviceContainer']=c;}get[q(0xec)](){const r=q;return this[r(0xd9)]['instanceServiceContainer'];}set['instanceServiceContainer'](c){const s=q;if(!c['editingDocument'])throw new Error(s(0xd7));this['_designerCanvas'][s(0xcc)](c['editingDocument']),this[s(0xdf)]();}[q(0xd9)];get[q(0xbb)](){return this['_designerCanvas'];}get[q(0x11d)](){const t=q;return this['_designerCanvas'][t(0x11d)];}set['readOnly'](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];['_zoomInput'];[q(0xbf)];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();[q(0x106)];[q(0xf1)];static [q(0xd3)]=css`
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
    </div>`;constructor(c=![]){const u=q;super(),this[u(0xfd)](),this['_sVert']=this[u(0xc8)](u(0xed)),this[u(0xc6)]=this['_getDomElement'](u(0xb6));const d=this[u(0xc8)](u(0x10b));this[u(0xd9)]=new DesignerCanvas(c),this['_designerCanvas']['id']=u(0x120),this['_designerCanvas']['appendChild'](document[u(0x11b)](u(0xbd))),d[u(0xd4)](u(0xf2),this[u(0xd9)]),this[u(0x100)]=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this['_sVert'][u(0xd4)]('afterend',this['_toolbar']),this[u(0xd9)]['onZoomFactorChanged']['on'](()=>{const v=u;this['_zoomInput'][v(0x118)]=Math['round'](this['_designerCanvas'][v(0xdb)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this[v(0xbb)][v(0xb7)]>this['designerCanvas'][v(0xf0)]?this['designerCanvas'][v(0xb7)]:this['designerCanvas'][v(0xf0)],n=this['designerCanvas'][v(0x11c)]>this[v(0xbb)][v(0x11a)]?this['designerCanvas'][v(0x11c)]:this[v(0xbb)][v(0x11a)];this[v(0xc6)]['value']=l['x']/(-0x2*m)+0.5,this[v(0xf5)]['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement'](u(0xd8)),this['_zoomInput'][u(0xde)]=l=>{const w=u;if(l['key']==w(0xda))this[w(0x103)](parseFloat(this['_zoomInput'][w(0x118)])/0x64);},this['_zoomInput'][u(0xca)]=()=>{const x=u;this[x(0x103)](parseFloat(this[x(0xfc)]['value'])/0x64);},this['_zoomInput'][u(0x125)]=this['_zoomInput']['select'];let e=this['_getDomElement']('zoomIncrease');this[u(0x110)](e,0x1);let f=this['_getDomElement'](u(0x112));this[u(0x110)](f,-0x1);let g=this['_getDomElement'](u(0xd5));g['onclick']=()=>{const y=u;this[y(0xd5)]();};let h=this[u(0xc8)]('zoomFit');h[u(0x125)]=()=>{const z=u;this[z(0xc9)]();},this[u(0x119)](EventNames['Wheel'],l=>this[u(0x105)](l));const i=(l,m)=>{const A=u;l[A(0x113)]['toggle']('selected',m),l['setAttribute']('aria-pressed',String(m));},j=this[u(0xc8)](u(0xe9));j['onclick']=()=>{const B=u;this[B(0xd9)][B(0xc1)]=!this[B(0xd9)]['alignOnSnap'],i(j,this[B(0xd9)]['alignOnSnap']);},i(j,this['_designerCanvas']['alignOnSnap']),j['oncontextmenu']=l=>{l['preventDefault']();};const k=this['_getDomElement'](u(0xe4));k['onclick']=()=>{const C=u;this[C(0xd9)]['alignOnGrid']=!this[C(0xd9)][C(0xf8)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this['_designerCanvas'][u(0xf8)]),k['oncontextmenu']=l=>{const D=u;l['preventDefault']();let m=prompt(D(0xf9),this['designerCanvas']['gridSize']['toString']());if(m){let n=parseInt(m);if(n>0x0)this[D(0xbb)]['gridSize']=n;}},this['_lowertoolbar']=this['_getDomElement'](u(0xbe)),this['_lowertoolbar']['onwheel']=l=>l[u(0xfa)](),this[u(0xf5)]['addEventListener'](u(0xc0),l=>this['_onScrollbar'](l)),this['_sHor']['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}[q(0xd5)](){const E=q;this[E(0xd9)]['canvasOffset']={'x':0x0,'y':0x0},this[E(0xd9)]['zoomFactor']=0x1,this[E(0xf5)][E(0x118)]=0.5,this['_sHor'][E(0x118)]=0.5,this[E(0xfc)][E(0x118)]=Math['round'](this[E(0xd9)][E(0xdb)]*0x64)+'%';}['zoomToFit'](){const F=q;this[F(0xd9)][F(0xc9)]();}['_zoomAroundViewportCenter'](c){const G=q;if(!this[G(0xec)])return;if(!Number[G(0xe3)](c)||c<=0x0)return;const d=this[G(0xd9)]['outerRect'],e=getCanvasPointAtViewportCenter(d[G(0xf7)],d[G(0xd0)],this['_designerCanvas'][G(0xdb)],this['_designerCanvas'][G(0x107)]);this[G(0xd9)]['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const H=q;c[H(0x125)]=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c[H(0x123)]=e=>{const I=H;if(!e[I(0xbc)]||e[I(0x111)]!=0x0)return;this[I(0x10a)](),this[I(0x106)]=e[I(0xe5)],this[I(0xf1)]=c;try{c[I(0x124)](e['pointerId']);}catch{}this[I(0xc2)]['start'](()=>this[I(0xdd)](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c[H(0xe7)]=e=>this['_stopZoomRepeat'](e['pointerId']),c[H(0x102)]=e=>this[H(0x10a)](e['pointerId']),c['onlostpointercapture']=e=>this[H(0x10a)](e[H(0xe5)]),c[H(0x101)]=e=>e[H(0xee)]();}['_zoomStep'](c,d=0x1){const J=q,e=this[J(0xd9)][J(0xdb)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[J(0x103)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[J(0x103)](Math['max'](e-g,0.001));}}[q(0x10a)](c){const K=q;if(c!=null&&c!==this[K(0x106)])return;const d=this['_zoomPointerId'],e=this['_zoomPointerTarget'];this['_zoomPointerId']=null,this[K(0xf1)]=null,this[K(0xc2)]['stop']();if(e&&d!=null)try{if(e[K(0xf6)](d))e[K(0xeb)](d);}catch{}}[q(0xe2)](c){const L=q;if(!this['instanceServiceContainer'])return;if(c?.[L(0xf4)]==L(0xc4))c[L(0xf3)]['value']+=0.25;else{if(c?.['detail']==L(0x11e))c['target'][L(0x118)]-=0.25;else{if(c?.['detail']=='incrementSmall')c['target']['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c['target']['value']-=0.05;}}}const d=this['designerCanvas'][L(0xb7)]>this[L(0xbb)]['offsetWidth']?this[L(0xbb)]['designerOffsetWidth']:this[L(0xbb)]['offsetWidth'],f=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas']['offsetHeight'],g=d*(this['_sHor'][L(0x118)]-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this[L(0xbb)]['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const M=q;if(!this['instanceServiceContainer'])return;c['preventDefault']();if(c[M(0xc7)]){let d=this[M(0xd9)][M(0xdb)];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[M(0xbb)][M(0xdc)](c);this[M(0xbb)][M(0x115)](f,d);}else c['shiftKey']?(this['_sHor']['value']+=c[M(0xfe)]/0x2710,this['_onScrollbar'](null)):(this[M(0xf5)][M(0x118)]+=c['deltaY']/0x2710,this[M(0xe2)](null),this['_sHor']['value']+=c[M(0xcf)]/0x2710,this['_onScrollbar'](null));}get[q(0xba)](){const N=q;return this['_designerCanvas'][N(0xba)];}set['designerWidth'](c){this['_designerCanvas']['designerWidth']=c;}get[q(0x10c)](){const O=q;return this[O(0xd9)]['designerHeight'];}set[q(0x10c)](c){const P=q;this[P(0xd9)]['designerHeight']=c;}set[q(0xd1)](c){this['_designerCanvas']['additionalStyles']=c;}[q(0x10d)](c){const Q=q;this[Q(0xd9)][Q(0x10d)](c);}async[q(0x121)](c){const R=q;this[R(0xd9)][R(0x121)](c);}['canExecuteCommand'](c){const S=q;return this[S(0xd9)][S(0xd2)](c);}get['editingDocument'](){const T=q;return this['instanceServiceContainer']?.[T(0x109)];}async[q(0xcc)](c){const U=q;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this[U(0x122)](c[U(0xe6)],c);else this[U(0xd9)][U(0xcc)](c),this['initializeToolbar']();}[q(0xce)](){const V=q;this[V(0x10a)](),this[V(0x100)]['dispose']();for(const c of this['_configButtons']){c['dispose']?.(),c['remove']();}return this[V(0xe0)]=[],this['_designerCanvas'][V(0xce)]();}['dispose'](){const W=q;this[W(0xce)](),this['_designerCanvas']['dispose'](),this[W(0x100)][W(0x116)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}[q(0x122)](c,d){const X=q;this[X(0xe6)]=c,this[X(0xd9)][X(0x122)](c,d),this['initializeToolbar']();}['initializeToolbar'](){const Y=q,c=this[Y(0xe6)];this['instanceServiceContainer'][Y(0x114)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d['dispose']?.(),d[Y(0x10e)]();}this[Y(0xe0)]=[];if(c['designViewConfigButtons'])for(let e of c[Y(0xc5)]){for(let f of e[Y(0xcd)](this,this[Y(0xd9)])){this['_configButtons']['push'](f),this[Y(0xbf)]['appendChild'](f);}}this[Y(0x100)]['initialize'](this[Y(0xe6)],this);}['getDesignerHTML'](){const Z=q;return this[Z(0x109)][Z(0x104)]();}async['parseDesignerHTML'](c,d=![]){const a0=q;await this['_designerCanvas']['whenReady'](),await this[a0(0x109)][a0(0xea)](c,d);}static['wrapInDesigner'](c,d){const a1=q,e=new DesignerCanvas();e[a1(0x122)](d);const f=e['serviceContainer']['getLastServiceWhere']('htmlParserService',g=>g['constructor']==DefaultHtmlParserService);return e['addDesignItems'](f[a1(0xcb)](c,e[a1(0xe6)],e[a1(0xec)])),e;}}customElements['define'](q(0xef),DesignerView);