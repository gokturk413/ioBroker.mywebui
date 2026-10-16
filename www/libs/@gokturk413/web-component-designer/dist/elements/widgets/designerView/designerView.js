const q=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=parseInt(o(0x9a))/0x1+parseInt(o(0xb0))/0x2*(-parseInt(o(0xc6))/0x3)+-parseInt(o(0x90))/0x4+parseInt(o(0xce))/0x5+parseInt(o(0x85))/0x6*(-parseInt(o(0xd1))/0x7)+parseInt(o(0xa6))/0x8*(parseInt(o(0x99))/0x9)+parseInt(o(0xb8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40456));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function a(){const a4=['toString','createElement','15ZgdCTJ','designerWidth','_onScrollbar','provideButtons','afterbegin','executeCommand','_configureZoomButton','readOnly','2426185GLfLgS','offsetWidth','designerCanvas','448EyJdtW','alignOnSnap','wrapInDesigner','_zoomPointerTarget','s-hor','releasePointerCapture','_getDomElement','designerOffsetHeight','addDesignItems','_zoomPointerId','getLastServiceWhere','raster\x20size','style','designerHeight','designViewConfigButtons','37614mxXFLA','remove','onblur','whenReady','alignSnap','Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.','onclick','zoomReset','_designerCanvas','tool-bar','_zoomStep','1716872tSEXlw','height','gridSize','zoomToFit','start','canExecuteCommand','editingDocument','preventDefault','onkeydown','244710cRMzQR','140237DRiLfy','hasPointerCapture','serviceContainer','loadHtml','_lowertoolbar','select','setPointerCapture','attachDocument','dispose','_toolbar','target','addEventListener','136xleGla','initialize','_sVert','value','deltaY','_stopZoomRepeat','instanceServiceContainer','_zoomInput','canvasOffset','_sHor','115342PaIEZb','_zoomHoldRepeater','setAttribute','detachDocument','pointerId','oncontextmenu','designerOffsetWidth','_zoomAroundViewportCenter','2943390WsVMBC','_onWheel','incrementLarge','template','detail','outerRect','_configButtons','zoomIncrease','classList','initializeToolbar','scrollbar-input','stop'];a=function(){return a4;};return a();}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function b(c,d){c=c-0x7a;const e=a();let f=e[c];return f;}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get['serviceContainer'](){const p=b;return this['_designerCanvas'][p(0x9c)];}set[q(0x9c)](c){const r=q;this['_designerCanvas'][r(0x9c)]=c;}get['instanceServiceContainer'](){const s=q;return this[s(0x8d)]['instanceServiceContainer'];}set['instanceServiceContainer'](c){const t=q;if(!c['editingDocument'])throw new Error(t(0x8a));this['_designerCanvas'][t(0xa1)](c[t(0x96)]),this['initializeToolbar']();}[q(0x8d)];get['designerCanvas'](){const u=q;return this[u(0x8d)];}get[q(0xcd)](){const v=q;return this[v(0x8d)]['readOnly'];}set[q(0xcd)](c){const w=q;this[w(0x8d)]['readOnly']=c;}['_configButtons']=[];['_zoomInput'];['_lowertoolbar'];[q(0xa3)];[q(0xb1)]=new ZoomHoldRepeater();['_zoomPointerId'];[q(0xd4)];static [q(0x82)]=css`
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
    }`;static [q(0xbb)]=html`
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
    </div>`;constructor(c=![]){const x=q;super(),this['_restoreCachedInititalValues'](),this[x(0xa8)]=this['_getDomElement']('s-vert'),this[x(0xaf)]=this[x(0x7c)](x(0x7a));const d=this[x(0x7c)]('outer');this[x(0x8d)]=new DesignerCanvas(c),this['_designerCanvas']['id']='canvas',this[x(0x8d)]['appendChild'](document[x(0xc5)]('slot')),d['insertAdjacentElement'](x(0xca),this[x(0x8d)]),this[x(0xa3)]=new DesignerToolbar(),this[x(0xa3)]['id']=x(0x8e),this['_sVert']['insertAdjacentElement']('afterend',this[x(0xa3)]),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const y=x;this[y(0xad)]['value']=Math['round'](this[y(0x8d)]['zoomFactor']*0x64)+'%';const l=this['designerCanvas'][y(0xae)],m=this['designerCanvas'][y(0xb6)]>this[y(0xd0)][y(0xcf)]?this[y(0xd0)]['designerOffsetWidth']:this[y(0xd0)][y(0xcf)],n=this[y(0xd0)][y(0x7d)]>this['designerCanvas']['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas']['offsetHeight'];this[y(0xaf)][y(0xa9)]=l['x']/(-0x2*m)+0.5,this['_sVert'][y(0xa9)]=l['y']/(-0x2*n)+0.5;}),this[x(0xad)]=this[x(0x7c)]('zoomInput'),this['_zoomInput'][x(0x98)]=l=>{const z=x;if(l['key']=='Enter')this[z(0xb7)](parseFloat(this[z(0xad)]['value'])/0x64);},this[x(0xad)][x(0x87)]=()=>{const A=x;this[A(0xb7)](parseFloat(this['_zoomInput'][A(0xa9)])/0x64);},this['_zoomInput'][x(0x8b)]=this['_zoomInput'][x(0x9f)];let e=this['_getDomElement'](x(0xbf));this['_configureZoomButton'](e,0x1);let f=this['_getDomElement']('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this[x(0x7c)](x(0x8c));g[x(0x8b)]=()=>{const B=x;this[B(0x8c)]();};let h=this['_getDomElement']('zoomFit');h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const C=x;l[C(0xc0)]['toggle']('selected',m),l[C(0xb2)]('aria-pressed',String(m));},j=this[x(0x7c)](x(0x89));j['onclick']=()=>{const D=x;this[D(0x8d)]['alignOnSnap']=!this[D(0x8d)]['alignOnSnap'],i(j,this['_designerCanvas'][D(0xd2)]);},i(j,this['_designerCanvas'][x(0xd2)]),j[x(0xb5)]=l=>{l['preventDefault']();};const k=this[x(0x7c)]('alignGrid');k[x(0x8b)]=()=>{const E=x;this['_designerCanvas']['alignOnGrid']=!this['_designerCanvas']['alignOnGrid'],i(k,this[E(0x8d)]['alignOnGrid']);},i(k,this[x(0x8d)]['alignOnGrid']),k[x(0xb5)]=l=>{const F=x;l[F(0x97)]();let m=prompt(F(0x81),this[F(0xd0)]['gridSize'][F(0xc4)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][F(0x92)]=n;}},this[x(0x9e)]=this[x(0x7c)]('lowertoolbar'),this[x(0x9e)]['onwheel']=l=>l['stopPropagation'](),this[x(0xa8)][x(0xa5)](x(0xc2),l=>this['_onScrollbar'](l)),this['_sHor'][x(0xa5)](x(0xc2),l=>this['_onScrollbar'](l));}[q(0x8c)](){const G=q;this[G(0x8d)]['canvasOffset']={'x':0x0,'y':0x0},this[G(0x8d)]['zoomFactor']=0x1,this['_sVert']['value']=0.5,this[G(0xaf)][G(0xa9)]=0.5,this[G(0xad)]['value']=Math['round'](this[G(0x8d)]['zoomFactor']*0x64)+'%';}[q(0x93)](){const H=q;this[H(0x8d)]['zoomToFit']();}['_zoomAroundViewportCenter'](c){const I=q;if(!this[I(0xac)])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[I(0x8d)][I(0xbd)],e=getCanvasPointAtViewportCenter(d['width'],d[I(0x91)],this['_designerCanvas']['zoomFactor'],this['_designerCanvas'][I(0xae)]);this[I(0x8d)]['zoomPoint'](e,c);}[q(0xcc)](c,d){const L=q;c['onclick']=e=>{const J=b;if(e[J(0xbc)]===0x0)this[J(0x8f)](d);},c['onpointerdown']=e=>{const K=b;if(!e['isPrimary']||e['button']!=0x0)return;this[K(0xab)](),this['_zoomPointerId']=e['pointerId'],this['_zoomPointerTarget']=c;try{c[K(0xa0)](e['pointerId']);}catch{}this['_zoomHoldRepeater'][K(0x94)](()=>this['_zoomStep'](d),()=>this[K(0x8f)](d,0x4)),e[K(0x97)]();},c['onpointerup']=e=>this[L(0xab)](e[L(0xb4)]),c['onpointercancel']=e=>this[L(0xab)](e['pointerId']),c['onlostpointercapture']=e=>this['_stopZoomRepeat'](e[L(0xb4)]),c[L(0xb5)]=e=>e['preventDefault']();}[q(0x8f)](c,d=0x1){const M=q,e=this['_designerCanvas']['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[M(0xb7)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[M(0xb7)](Math['max'](e-g,0.001));}}[q(0xab)](c){const N=q;if(c!=null&&c!==this[N(0x7f)])return;const d=this[N(0x7f)],e=this[N(0xd4)];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater'][N(0xc3)]();if(e&&d!=null)try{if(e[N(0x9b)](d))e[N(0x7b)](d);}catch{}}['_onScrollbar'](c){const O=q;if(!this[O(0xac)])return;if(c?.[O(0xbc)]==O(0xba))c['target'][O(0xa9)]+=0.25;else{if(c?.[O(0xbc)]=='decrementLarge')c['target']['value']-=0.25;else{if(c?.['detail']=='incrementSmall')c[O(0xa4)][O(0xa9)]+=0.05;else{if(c?.[O(0xbc)]=='decrementSmall')c[O(0xa4)]['value']-=0.05;}}}const d=this[O(0xd0)][O(0xb6)]>this['designerCanvas']['offsetWidth']?this['designerCanvas'][O(0xb6)]:this['designerCanvas'][O(0xcf)],f=this[O(0xd0)][O(0x7d)]>this[O(0xd0)]['offsetHeight']?this[O(0xd0)][O(0x7d)]:this[O(0xd0)]['offsetHeight'],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this['designerCanvas'][O(0xae)]={'x':g,'y':i};}[q(0xb9)](c){const P=q;if(!this[P(0xac)])return;c[P(0x97)]();if(c['ctrlKey']){let d=this['_designerCanvas']['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas']['getNormalizedEventCoordinates'](c);this[P(0xd0)]['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this['_sHor'][P(0xa9)]+=c['deltaY']/0x2710,this[P(0xc8)](null)):(this[P(0xa8)][P(0xa9)]+=c[P(0xaa)]/0x2710,this[P(0xc8)](null),this['_sHor']['value']+=c['deltaX']/0x2710,this['_onScrollbar'](null));}get[q(0xc7)](){const Q=q;return this[Q(0x8d)]['designerWidth'];}set[q(0xc7)](c){this['_designerCanvas']['designerWidth']=c;}get[q(0x83)](){const R=q;return this[R(0x8d)]['designerHeight'];}set[q(0x83)](c){const S=q;this['_designerCanvas'][S(0x83)]=c;}set['additionalStyles'](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){this['_designerCanvas']['setDesignItems'](c);}async[q(0xcb)](c){const T=q;this['_designerCanvas'][T(0xcb)](c);}[q(0x95)](c){const U=q;return this[U(0x8d)]['canExecuteCommand'](c);}get['editingDocument'](){const V=q;return this[V(0xac)]?.[V(0x96)];}async['attachDocument'](c){const W=q;await c['commitPendingChanges']();if(!this['instanceServiceContainer'])this[W(0xa7)](c[W(0x9c)],c);else this[W(0x8d)]['attachDocument'](c),this['initializeToolbar']();}[q(0xb3)](){const X=q;this[X(0xab)](),this['_toolbar']['dispose']();for(const c of this[X(0xbe)]){c['dispose']?.(),c[X(0x86)]();}return this['_configButtons']=[],this[X(0x8d)]['detachDocument']();}[q(0xa2)](){const Y=q;this[Y(0xb3)](),this['_designerCanvas']['dispose'](),this[Y(0xa3)]['dispose']();}['disconnectedCallback'](){const Z=q;this[Z(0xab)]();}['initialize'](c,d){const a0=q;this['serviceContainer']=c,this['_designerCanvas']['initialize'](c,d),this[a0(0xc1)]();}[q(0xc1)](){const a1=q,c=this[a1(0x9c)];this['instanceServiceContainer']['detachView']=()=>this[a1(0xb3)]();for(const d of this[a1(0xbe)]){d[a1(0xa2)]?.(),d[a1(0x86)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c[a1(0x84)]){for(let f of e[a1(0xc9)](this,this['_designerCanvas'])){this[a1(0xbe)]['push'](f),this[a1(0x9e)]['appendChild'](f);}}this['_toolbar'][a1(0xa7)](this[a1(0x9c)],this);}['getDesignerHTML'](){return this['editingDocument']['getHtml']();}async['parseDesignerHTML'](c,d=![]){const a2=q;await this['_designerCanvas'][a2(0x88)](),await this[a2(0x96)][a2(0x9d)](c,d);}static[q(0xd3)](c,d){const a3=q,e=new DesignerCanvas();e[a3(0xa7)](d);const f=e[a3(0x9c)][a3(0x80)]('htmlParserService',g=>g['constructor']==DefaultHtmlParserService);return e[a3(0x7e)](f['createDesignItems'](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements['define']('node-projects-designer-view',DesignerView);