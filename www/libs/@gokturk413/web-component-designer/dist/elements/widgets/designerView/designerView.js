const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0xd4))/0x1+-parseInt(o(0xd9))/0x2*(parseInt(o(0x118))/0x3)+-parseInt(o(0xf1))/0x4+parseInt(o(0xfd))/0x5+-parseInt(o(0x109))/0x6*(parseInt(o(0x112))/0x7)+parseInt(o(0xb7))/0x8*(parseInt(o(0xd2))/0x9)+parseInt(o(0xf4))/0xa*(parseInt(o(0xb3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbfa25));function a(){const a2=['23859htTUcV','preventDefault','940207qEEfWP','getDesignerHTML','parseDesignerHTML','designerHeight','decrementLarge','2878eZSgVy','exp','tool-bar','zoomInput','alignOnGrid','canvas','loadHtml','_zoomPointerTarget','start','_zoomHoldRepeater','instanceServiceContainer','wrapInDesigner','afterbegin','alignGrid','addDesignItems','incrementSmall','additionalStyles','createElement','stop','_sVert','dispose','deltaX','zoomReset','_onScrollbar','5751268qBSSip','afterend','_onWheel','3022420Jxbpvm','designerOffsetHeight','aria-pressed','_getDomElement','toString','outerRect','target','attachDocument','define','465340XlKGqY','toggle','_zoomPointerId','_stopZoomRepeat','designerWidth','addEventListener','whenReady','gridSize','shiftKey','deltaY','_configButtons','_zoomStep','18nRojOp','_lowertoolbar','detachView','_zoomInput','key','pointerId','setDesignItems','onlostpointercapture','zoomIncrease','1863813chPIyO','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','_sHor','onwheel','offsetHeight','initializeToolbar','1089JKpbHj','slot','_toolbar','appendChild','provideButtons','detachDocument','createDesignItems','remove','initialize','_designerCanvas','onkeydown','44KlOcZI','getHtml','_zoomAroundViewportCenter','editingDocument','3928zDnUYu','oncontextmenu','detail','zoomFactor','setPointerCapture','executeCommand','value','commitPendingChanges','htmlParserService','designerCanvas','serviceContainer','hasPointerCapture','template','round','onpointerdown','getNormalizedEventCoordinates','height','s-vert','designerOffsetWidth','offsetWidth','selected','button','alignOnSnap','onblur','designViewConfigButtons','Enter','style'];a=function(){return a2;};return a();}import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function b(c,d){c=c-0xb0;const e=a();let f=e[c];return f;}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get[p(0xc1)](){return this['_designerCanvas']['serviceContainer'];}set[p(0xc1)](c){const q=p;this[q(0xb1)]['serviceContainer']=c;}get[p(0xe3)](){const r=p;return this[r(0xb1)][r(0xe3)];}set['instanceServiceContainer'](c){const s=p;if(!c['editingDocument'])throw new Error(s(0x113));this[s(0xb1)]['attachDocument'](c['editingDocument']),this[s(0x117)]();}['_designerCanvas'];get['designerCanvas'](){const t=p;return this[t(0xb1)];}get['readOnly'](){return this['_designerCanvas']['readOnly'];}set['readOnly'](c){const u=p;this[u(0xb1)]['readOnly']=c;}[p(0x107)]=[];['_zoomInput'];[p(0x10a)];[p(0x11a)];['_zoomHoldRepeater']=new ZoomHoldRepeater();[p(0xff)];['_zoomPointerTarget'];static [p(0xd1)]=css`
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
    }`;static [p(0xc3)]=html`
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
    </div>`;constructor(c=![]){const v=p;super(),this['_restoreCachedInititalValues'](),this[v(0xec)]=this['_getDomElement'](v(0xc8)),this[v(0x114)]=this[v(0xf7)]('s-hor');const d=this[v(0xf7)]('outer');this['_designerCanvas']=new DesignerCanvas(c),this['_designerCanvas']['id']=v(0xde),this['_designerCanvas'][v(0x11b)](document[v(0xea)](v(0x119))),d['insertAdjacentElement'](v(0xe5),this[v(0xb1)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']=v(0xdb),this['_sVert']['insertAdjacentElement'](v(0xf2),this['_toolbar']),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const w=v;this[w(0x10c)][w(0xbd)]=Math[w(0xc4)](this['_designerCanvas'][w(0xba)]*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this[w(0xc0)]['designerOffsetWidth']>this['designerCanvas'][w(0xca)]?this['designerCanvas']['designerOffsetWidth']:this['designerCanvas'][w(0xca)],n=this[w(0xc0)][w(0xf5)]>this['designerCanvas'][w(0x116)]?this['designerCanvas'][w(0xf5)]:this['designerCanvas']['offsetHeight'];this[w(0x114)]['value']=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this['_getDomElement'](v(0xdc)),this[v(0x10c)][v(0xb2)]=l=>{const x=v;if(l[x(0x10d)]==x(0xd0))this[x(0xb5)](parseFloat(this[x(0x10c)]['value'])/0x64);},this[v(0x10c)][v(0xce)]=()=>{this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this[v(0x10c)]['onclick']=this[v(0x10c)]['select'];let e=this[v(0xf7)](v(0x111));this['_configureZoomButton'](e,0x1);let f=this[v(0xf7)]('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this[v(0xf7)](v(0xef));g['onclick']=()=>{this['zoomReset']();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const y=v;l['classList'][y(0xfe)](y(0xcb),m),l['setAttribute'](y(0xf6),String(m));},j=this['_getDomElement']('alignSnap');j['onclick']=()=>{const z=v;this[z(0xb1)]['alignOnSnap']=!this[z(0xb1)]['alignOnSnap'],i(j,this[z(0xb1)][z(0xcd)]);},i(j,this['_designerCanvas'][v(0xcd)]),j[v(0xb8)]=l=>{const A=v;l[A(0xd3)]();};const k=this[v(0xf7)](v(0xe6));k['onclick']=()=>{const B=v;this[B(0xb1)]['alignOnGrid']=!this['_designerCanvas']['alignOnGrid'],i(k,this['_designerCanvas'][B(0xdd)]);},i(k,this['_designerCanvas']['alignOnGrid']),k['oncontextmenu']=l=>{const C=v;l[C(0xd3)]();let m=prompt('raster\x20size',this[C(0xc0)]['gridSize'][C(0xf8)]());if(m){let n=parseInt(m);if(n>0x0)this[C(0xc0)][C(0x104)]=n;}},this['_lowertoolbar']=this[v(0xf7)]('lowertoolbar'),this['_lowertoolbar'][v(0x115)]=l=>l['stopPropagation'](),this[v(0xec)][v(0x102)]('scrollbar-input',l=>this['_onScrollbar'](l)),this[v(0x114)][v(0x102)]('scrollbar-input',l=>this[v(0xf0)](l));}[p(0xef)](){const D=p;this['_designerCanvas']['canvasOffset']={'x':0x0,'y':0x0},this[D(0xb1)][D(0xba)]=0x1,this['_sVert']['value']=0.5,this[D(0x114)][D(0xbd)]=0.5,this[D(0x10c)]['value']=Math[D(0xc4)](this[D(0xb1)][D(0xba)]*0x64)+'%';}['zoomToFit'](){const E=p;this[E(0xb1)]['zoomToFit']();}['_zoomAroundViewportCenter'](c){const F=p;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this['_designerCanvas'][F(0xf9)],e=getCanvasPointAtViewportCenter(d['width'],d[F(0xc7)],this['_designerCanvas'][F(0xba)],this['_designerCanvas']['canvasOffset']);this[F(0xb1)]['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const G=p;c['onclick']=e=>{if(e['detail']===0x0)this['_zoomStep'](d);},c[G(0xc5)]=e=>{const H=G;if(!e['isPrimary']||e[H(0xcc)]!=0x0)return;this[H(0x100)](),this['_zoomPointerId']=e[H(0x10e)],this[H(0xe0)]=c;try{c[H(0xbb)](e['pointerId']);}catch{}this[H(0xe2)][H(0xe1)](()=>this[H(0x108)](d),()=>this['_zoomStep'](d,0x4)),e[H(0xd3)]();},c['onpointerup']=e=>this['_stopZoomRepeat'](e[G(0x10e)]),c['onpointercancel']=e=>this[G(0x100)](e['pointerId']),c[G(0x110)]=e=>this['_stopZoomRepeat'](e[G(0x10e)]),c['oncontextmenu']=e=>e['preventDefault']();}['_zoomStep'](c,d=0x1){const I=p,e=this[I(0xb1)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[I(0xb5)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}[p(0x100)](c){const J=p;if(c!=null&&c!==this[J(0xff)])return;const d=this['_zoomPointerId'],e=this[J(0xe0)];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this[J(0xe2)][J(0xeb)]();if(e&&d!=null)try{if(e[J(0xc2)](d))e['releasePointerCapture'](d);}catch{}}[p(0xf0)](c){const K=p;if(!this[K(0xe3)])return;if(c?.[K(0xb9)]=='incrementLarge')c['target']['value']+=0.25;else{if(c?.[K(0xb9)]==K(0xd8))c['target'][K(0xbd)]-=0.25;else{if(c?.[K(0xb9)]==K(0xe8))c[K(0xfa)][K(0xbd)]+=0.05;else{if(c?.['detail']=='decrementSmall')c[K(0xfa)]['value']-=0.05;}}}const d=this['designerCanvas'][K(0xc9)]>this['designerCanvas']['offsetWidth']?this[K(0xc0)]['designerOffsetWidth']:this['designerCanvas']['offsetWidth'],f=this[K(0xc0)][K(0xf5)]>this['designerCanvas'][K(0x116)]?this['designerCanvas']['designerOffsetHeight']:this[K(0xc0)][K(0x116)],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[K(0xec)]['value']-0.5)*-0x2;this[K(0xc0)]['canvasOffset']={'x':g,'y':i};}[p(0xf3)](c){const L=p;if(!this['instanceServiceContainer'])return;c[L(0xd3)]();if(c['ctrlKey']){let d=this['_designerCanvas']['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math[L(0xda)](e*0.2);if(d<0.02)d=0.02;const f=this[L(0xc0)][L(0xc6)](c);this[L(0xc0)]['zoomTowardsPoint'](f,d);}else c[L(0x105)]?(this[L(0x114)]['value']+=c['deltaY']/0x2710,this[L(0xf0)](null)):(this['_sVert']['value']+=c[L(0x106)]/0x2710,this[L(0xf0)](null),this[L(0x114)][L(0xbd)]+=c[L(0xee)]/0x2710,this[L(0xf0)](null));}get[p(0x101)](){const M=p;return this['_designerCanvas'][M(0x101)];}set[p(0x101)](c){this['_designerCanvas']['designerWidth']=c;}get['designerHeight'](){const N=p;return this['_designerCanvas'][N(0xd7)];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set['additionalStyles'](c){const O=p;this['_designerCanvas'][O(0xe9)]=c;}[p(0x10f)](c){const P=p;this['_designerCanvas'][P(0x10f)](c);}async[p(0xbc)](c){const Q=p;this[Q(0xb1)]['executeCommand'](c);}['canExecuteCommand'](c){const R=p;return this[R(0xb1)]['canExecuteCommand'](c);}get['editingDocument'](){const S=p;return this['instanceServiceContainer']?.[S(0xb6)];}async[p(0xfb)](c){const T=p;await c[T(0xbe)]();if(!this['instanceServiceContainer'])this[T(0xb0)](c[T(0xc1)],c);else this['_designerCanvas']['attachDocument'](c),this['initializeToolbar']();}[p(0x11d)](){const U=p;this[U(0x100)](),this['_toolbar'][U(0xed)]();for(const c of this[U(0x107)]){c[U(0xed)]?.(),c[U(0x11f)]();}return this[U(0x107)]=[],this[U(0xb1)]['detachDocument']();}['dispose'](){const V=p;this['detachDocument'](),this[V(0xb1)]['dispose'](),this[V(0x11a)]['dispose']();}['disconnectedCallback'](){const W=p;this[W(0x100)]();}['initialize'](c,d){const X=p;this[X(0xc1)]=c,this[X(0xb1)][X(0xb0)](c,d),this[X(0x117)]();}['initializeToolbar'](){const Y=p,c=this['serviceContainer'];this[Y(0xe3)][Y(0x10b)]=()=>this[Y(0x11d)]();for(const d of this[Y(0x107)]){d['dispose']?.(),d['remove']();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c[Y(0xcf)]){for(let f of e[Y(0x11c)](this,this['_designerCanvas'])){this[Y(0x107)]['push'](f),this[Y(0x10a)]['appendChild'](f);}}this[Y(0x11a)][Y(0xb0)](this['serviceContainer'],this);}[p(0xd5)](){const Z=p;return this['editingDocument'][Z(0xb4)]();}async[p(0xd6)](c,d=![]){const a0=p;await this['_designerCanvas'][a0(0x103)](),await this['editingDocument'][a0(0xdf)](c,d);}static[p(0xe4)](c,d){const a1=p,e=new DesignerCanvas();e['initialize'](d);const f=e['serviceContainer']['getLastServiceWhere'](a1(0xbf),g=>g['constructor']==DefaultHtmlParserService);return e[a1(0xe7)](f[a1(0x11e)](c,e[a1(0xc1)],e[a1(0xe3)])),e;}}customElements[p(0xfc)]('node-projects-designer-view',DesignerView);