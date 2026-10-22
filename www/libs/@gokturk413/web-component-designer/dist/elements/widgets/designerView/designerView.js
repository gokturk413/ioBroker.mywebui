const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x12c))/0x1+parseInt(o(0xe1))/0x2+-parseInt(o(0xcd))/0x3*(parseInt(o(0x128))/0x4)+parseInt(o(0x106))/0x5+-parseInt(o(0xd7))/0x6+parseInt(o(0x11b))/0x7*(-parseInt(o(0x110))/0x8)+parseInt(o(0xc7))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2ab05));function b(c,d){c=c-0xc4;const e=a();let f=e[c];return f;}import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0xd9)];get[p(0xc8)](){const q=p;return this[q(0x120)]['serviceContainer'];}set['serviceContainer'](c){const r=p;this['_designerCanvas'][r(0xc8)]=c;}get['instanceServiceContainer'](){const s=p;return this['_designerCanvas'][s(0xe5)];}set[p(0xe5)](c){const t=p;if(!c[t(0xdb)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[t(0x120)]['attachDocument'](c[t(0xdb)]),this[t(0x121)]();}['_designerCanvas'];get[p(0xd6)](){return this['_designerCanvas'];}get['readOnly'](){const u=p;return this['_designerCanvas'][u(0xe9)];}set[p(0xe9)](c){const v=p;this[v(0x120)]['readOnly']=c;}[p(0x115)]=[];[p(0xfb)];['_lowertoolbar'];[p(0x11c)];['_zoomHoldRepeater']=new ZoomHoldRepeater();[p(0x11e)];[p(0xe3)];static ['style']=css`
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
    </div>`;constructor(c=![]){const w=p;super(),this[w(0xed)](),this['_sVert']=this[w(0xf6)]('s-vert'),this[w(0xd9)]=this[w(0xf6)](w(0xd2));const d=this['_getDomElement'](w(0xc5));this['_designerCanvas']=new DesignerCanvas(c),this[w(0x120)]['id']=w(0x124),this['_designerCanvas']['appendChild'](document[w(0xe0)]('slot')),d[w(0x100)](w(0xd8),this['_designerCanvas']),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[w(0xd4)][w(0x100)]('afterend',this['_toolbar']),this[w(0x120)]['onZoomFactorChanged']['on'](()=>{const x=w;this['_zoomInput']['value']=Math[x(0x127)](this[x(0x120)]['zoomFactor']*0x64)+'%';const l=this['designerCanvas']['canvasOffset'],m=this['designerCanvas'][x(0xf7)]>this['designerCanvas'][x(0x108)]?this[x(0xd6)][x(0xf7)]:this[x(0xd6)]['offsetWidth'],n=this[x(0xd6)]['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this[x(0xd6)]['designerOffsetHeight']:this['designerCanvas'][x(0x101)];this['_sHor'][x(0xf3)]=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this[w(0xfb)]=this['_getDomElement'](w(0xfd)),this[w(0xfb)][w(0xd1)]=l=>{const y=w;if(l[y(0xf4)]=='Enter')this[y(0xc9)](parseFloat(this['_zoomInput'][y(0xf3)])/0x64);},this[w(0xfb)][w(0x11f)]=()=>{const z=w;this[z(0xc9)](parseFloat(this[z(0xfb)]['value'])/0x64);},this['_zoomInput']['onclick']=this[w(0xfb)][w(0x113)];let e=this['_getDomElement']('zoomIncrease');this[w(0x123)](e,0x1);let f=this['_getDomElement']('zoomDecrease');this[w(0x123)](f,-0x1);let g=this[w(0xf6)](w(0x102));g[w(0x104)]=()=>{this['zoomReset']();};let h=this[w(0xf6)]('zoomFit');h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames['Wheel'],l=>this['_onWheel'](l));const i=(l,m)=>{const A=w;l['classList']['toggle']('selected',m),l[A(0xce)](A(0xf2),String(m));},j=this['_getDomElement']('alignSnap');j[w(0x104)]=()=>{const B=w;this['_designerCanvas'][B(0xd5)]=!this['_designerCanvas'][B(0xd5)],i(j,this[B(0x120)]['alignOnSnap']);},i(j,this[w(0x120)]['alignOnSnap']),j['oncontextmenu']=l=>{const C=w;l[C(0x126)]();};const k=this['_getDomElement']('alignGrid');k[w(0x104)]=()=>{const D=w;this['_designerCanvas'][D(0xc6)]=!this['_designerCanvas']['alignOnGrid'],i(k,this[D(0x120)]['alignOnGrid']);},i(k,this[w(0x120)][w(0xc6)]),k[w(0xec)]=l=>{const E=w;l['preventDefault']();let m=prompt(E(0xcf),this['designerCanvas'][E(0xf8)][E(0xda)]());if(m){let n=parseInt(m);if(n>0x0)this[E(0xd6)]['gridSize']=n;}},this[w(0x10e)]=this[w(0xf6)]('lowertoolbar'),this[w(0x10e)][w(0x10b)]=l=>l[w(0xdf)](),this[w(0xd4)]['addEventListener']('scrollbar-input',l=>this[w(0x129)](l)),this[w(0xd9)][w(0xea)](w(0x109),l=>this[w(0x129)](l));}[p(0x102)](){const F=p;this['_designerCanvas'][F(0xd3)]={'x':0x0,'y':0x0},this[F(0x120)][F(0x12b)]=0x1,this[F(0xd4)]['value']=0.5,this[F(0xd9)]['value']=0.5,this['_zoomInput'][F(0xf3)]=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';}[p(0xee)](){const G=p;this['_designerCanvas'][G(0xee)]();}['_zoomAroundViewportCenter'](c){const H=p;if(!this['instanceServiceContainer'])return;if(!Number[H(0x12a)](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d[H(0x105)],d['height'],this['_designerCanvas'][H(0x12b)],this[H(0x120)]['canvasOffset']);this[H(0x120)][H(0xdc)](e,c);}[p(0x123)](c,d){const J=p;c['onclick']=e=>{const I=b;if(e['detail']===0x0)this[I(0xe8)](d);},c[J(0x119)]=e=>{const K=J;if(!e['isPrimary']||e[K(0xca)]!=0x0)return;this[K(0xc4)](),this[K(0x11e)]=e['pointerId'],this[K(0xe3)]=c;try{c['setPointerCapture'](e[K(0xe4)]);}catch{}this['_zoomHoldRepeater'][K(0xfc)](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c[J(0xe7)]=e=>this['_stopZoomRepeat'](e[J(0xe4)]),c['onpointercancel']=e=>this['_stopZoomRepeat'](e['pointerId']),c[J(0x10d)]=e=>this[J(0xc4)](e[J(0xe4)]),c['oncontextmenu']=e=>e['preventDefault']();}[p(0xe8)](c,d=0x1){const L=p,e=this[L(0x120)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[L(0xc9)](Math[L(0x10c)](e-g,0.001));}}[p(0xc4)](c){const M=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[M(0x11e)],e=this[M(0xe3)];this[M(0x11e)]=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater'][M(0xcc)]();if(e&&d!=null)try{if(e[M(0x10f)](d))e[M(0xff)](d);}catch{}}['_onScrollbar'](c){const N=p;if(!this[N(0xe5)])return;if(c?.['detail']=='incrementLarge')c[N(0xeb)]['value']+=0.25;else{if(c?.['detail']=='decrementLarge')c['target']['value']-=0.25;else{if(c?.[N(0x11d)]==N(0x12d))c['target'][N(0xf3)]+=0.05;else{if(c?.['detail']=='decrementSmall')c['target']['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this[N(0xd6)]['offsetWidth']?this[N(0xd6)]['designerOffsetWidth']:this[N(0xd6)]['offsetWidth'],f=this['designerCanvas'][N(0xd0)]>this['designerCanvas'][N(0x101)]?this[N(0xd6)][N(0xd0)]:this['designerCanvas']['offsetHeight'],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[N(0xd4)]['value']-0.5)*-0x2;this['designerCanvas'][N(0xd3)]={'x':g,'y':i};}[p(0xde)](c){const O=p;if(!this[O(0xe5)])return;c[O(0x126)]();if(c['ctrlKey']){let d=this[O(0x120)][O(0x12b)];const e=c[O(0x10a)]<0x0?0x1:-0x1;d*=Math[O(0x118)](e*0.2);if(d<0.02)d=0.02;const f=this[O(0xd6)][O(0xfa)](c);this['designerCanvas']['zoomTowardsPoint'](f,d);}else c[O(0xdd)]?(this[O(0xd9)][O(0xf3)]+=c['deltaY']/0x2710,this['_onScrollbar'](null)):(this[O(0xd4)]['value']+=c['deltaY']/0x2710,this[O(0x129)](null),this['_sHor']['value']+=c[O(0x125)]/0x2710,this[O(0x129)](null));}get[p(0xcb)](){const P=p;return this['_designerCanvas'][P(0xcb)];}set['designerWidth'](c){this['_designerCanvas']['designerWidth']=c;}get['designerHeight'](){return this['_designerCanvas']['designerHeight'];}set['designerHeight'](c){this['_designerCanvas']['designerHeight']=c;}set[p(0xf1)](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){const Q=p;this[Q(0x120)][Q(0xfe)](c);}async['executeCommand'](c){const R=p;this[R(0x120)]['executeCommand'](c);}['canExecuteCommand'](c){const S=p;return this[S(0x120)][S(0x114)](c);}get[p(0xdb)](){const T=p;return this[T(0xe5)]?.['editingDocument'];}async['attachDocument'](c){const U=p;await c['commitPendingChanges']();if(!this[U(0xe5)])this[U(0x122)](c['serviceContainer'],c);else this['_designerCanvas'][U(0x107)](c),this[U(0x121)]();}['detachDocument'](){const V=p;this['_stopZoomRepeat'](),this[V(0x11c)][V(0x116)]();for(const c of this[V(0x115)]){c['dispose']?.(),c['remove']();}return this['_configButtons']=[],this[V(0x120)]['detachDocument']();}[p(0x116)](){const W=p;this['detachDocument'](),this[W(0x120)]['dispose'](),this['_toolbar'][W(0x116)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const X=p;this['serviceContainer']=c,this['_designerCanvas'][X(0x122)](c,d),this['initializeToolbar']();}[p(0x121)](){const Y=p,c=this['serviceContainer'];this['instanceServiceContainer']['detachView']=()=>this['detachDocument']();for(const d of this['_configButtons']){d[Y(0x116)]?.(),d[Y(0x112)]();}this[Y(0x115)]=[];if(c[Y(0xf9)])for(let e of c[Y(0xf9)]){for(let f of e[Y(0xf0)](this,this[Y(0x120)])){this['_configButtons']['push'](f),this['_lowertoolbar']['appendChild'](f);}}this['_toolbar'][Y(0x122)](this[Y(0xc8)],this);}['getDesignerHTML'](){const Z=p;return this[Z(0xdb)][Z(0xe6)]();}async[p(0x111)](c,d=![]){const a0=p;await this[a0(0x120)]['whenReady'](),await this[a0(0xdb)]['loadHtml'](c,d);}static[p(0x117)](c,d){const a1=p,e=new DesignerCanvas();e['initialize'](d);const f=e[a1(0xc8)][a1(0xef)]('htmlParserService',g=>g['constructor']==DefaultHtmlParserService);return e[a1(0xf5)](f[a1(0x11a)](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements[p(0xe2)](p(0x103),DesignerView);function a(){const a2=['dispose','wrapInDesigner','exp','onpointerdown','createDesignItems','3045BGZSKj','_toolbar','detail','_zoomPointerId','onblur','_designerCanvas','initializeToolbar','initialize','_configureZoomButton','canvas','deltaX','preventDefault','round','68KNEKps','_onScrollbar','isFinite','zoomFactor','159883QzeOWD','incrementSmall','_stopZoomRepeat','outer','alignOnGrid','955197raffxP','serviceContainer','_zoomAroundViewportCenter','button','designerWidth','stop','24306UvQbFT','setAttribute','raster\x20size','designerOffsetHeight','onkeydown','s-hor','canvasOffset','_sVert','alignOnSnap','designerCanvas','1097418pQfZsB','afterbegin','_sHor','toString','editingDocument','zoomPoint','shiftKey','_onWheel','stopPropagation','createElement','581428wikNQy','define','_zoomPointerTarget','pointerId','instanceServiceContainer','getHtml','onpointerup','_zoomStep','readOnly','addEventListener','target','oncontextmenu','_restoreCachedInititalValues','zoomToFit','getLastServiceWhere','provideButtons','additionalStyles','aria-pressed','value','key','addDesignItems','_getDomElement','designerOffsetWidth','gridSize','designViewConfigButtons','getNormalizedEventCoordinates','_zoomInput','start','zoomInput','setDesignItems','releasePointerCapture','insertAdjacentElement','offsetHeight','zoomReset','node-projects-designer-view','onclick','width','1427480TwTioo','attachDocument','offsetWidth','scrollbar-input','deltaY','onwheel','max','onlostpointercapture','_lowertoolbar','hasPointerCapture','496ptQeEL','parseDesignerHTML','remove','select','canExecuteCommand','_configButtons'];a=function(){return a2;};return a();}