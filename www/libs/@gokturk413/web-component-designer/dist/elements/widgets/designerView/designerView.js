const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x109))/0x1*(-parseInt(o(0xf3))/0x2)+parseInt(o(0x127))/0x3+parseInt(o(0x143))/0x4*(-parseInt(o(0x134))/0x5)+parseInt(o(0x133))/0x6*(-parseInt(o(0x12b))/0x7)+parseInt(o(0x107))/0x8+-parseInt(o(0x136))/0x9+-parseInt(o(0x144))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99a39));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function a(){const a2=['canvasOffset','selected','preventDefault','_zoomPointerId','zoomInput','detachView','_getDomElement','button','toggle','scrollbar-input','createDesignItems','addEventListener','_sVert','Wheel','Enter','_designerCanvas','createElement','9325592dCEJIB','releasePointerCapture','19534cZxioF','constructor','onclick','oncontextmenu','alignGrid','onpointercancel','editingDocument','define','isFinite','instanceServiceContainer','_configureZoomButton','lowertoolbar','offsetWidth','afterbegin','_zoomInput','max','initializeToolbar','zoomReset','readOnly','aria-pressed','_zoomStep','getDesignerHTML','_onScrollbar','slot','alignOnSnap','push','initialize','template','setDesignItems','_zoomAroundViewportCenter','2746005lfzkUG','s-hor','zoomPoint','designerOffsetHeight','7070xbDXXC','_sHor','loadHtml','start','deltaY','tool-bar','_zoomHoldRepeater','additionalStyles','2202mZRsKe','452765TwmRTG','serviceContainer','10543410QoyVZY','value','_stopZoomRepeat','incrementLarge','designerCanvas','_onWheel','target','alignOnGrid','_zoomPointerTarget','dispose','designerHeight','provideButtons','whenReady','12rBXWpn','4974060hDCsCy','zoomFactor','detachDocument','gridSize','select','_lowertoolbar','onblur','toString','designerWidth','setAttribute','designerOffsetWidth','appendChild','insertAdjacentElement','remove','canvas','zoomTowardsPoint','offsetHeight','setPointerCapture','_toolbar','classList','outer','ctrlKey','deltaX','onpointerdown','88yRdOfi','detail','canExecuteCommand'];a=function(){return a2;};return a();}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get[p(0x135)](){return this['_designerCanvas']['serviceContainer'];}set[p(0x135)](c){const q=p;this[q(0x105)][q(0x135)]=c;}get[p(0x112)](){const r=p;return this[r(0x105)]['instanceServiceContainer'];}set[p(0x112)](c){const s=p;if(!c[s(0x10f)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[s(0x105)]['attachDocument'](c[s(0x10f)]),this['initializeToolbar']();}['_designerCanvas'];get[p(0x13a)](){const t=p;return this[t(0x105)];}get[p(0x11b)](){const u=p;return this['_designerCanvas'][u(0x11b)];}set['readOnly'](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];['_zoomInput'];[p(0xe0)];['_toolbar'];[p(0x131)]=new ZoomHoldRepeater();[p(0xf9)];['_zoomPointerTarget'];static ['style']=css`
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
    }`;static [p(0x124)]=html`
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
    </div>`;constructor(c=![]){const v=p;super(),this['_restoreCachedInititalValues'](),this[v(0x102)]=this['_getDomElement']('s-vert'),this['_sHor']=this['_getDomElement'](v(0x128));const d=this[v(0xfc)](v(0xef));this[v(0x105)]=new DesignerCanvas(c),this['_designerCanvas']['id']=v(0xe9),this['_designerCanvas'][v(0xe6)](document[v(0x106)](v(0x120))),d['insertAdjacentElement'](v(0x116),this['_designerCanvas']),this[v(0xed)]=new DesignerToolbar(),this['_toolbar']['id']=v(0x130),this[v(0x102)][v(0xe7)]('afterend',this[v(0xed)]),this[v(0x105)]['onZoomFactorChanged']['on'](()=>{const w=v;this[w(0x117)][w(0x137)]=Math['round'](this[w(0x105)]['zoomFactor']*0x64)+'%';const l=this['designerCanvas'][w(0xf6)],m=this[w(0x13a)][w(0xe5)]>this[w(0x13a)][w(0x115)]?this[w(0x13a)]['designerOffsetWidth']:this[w(0x13a)][w(0x115)],n=this['designerCanvas'][w(0x12a)]>this['designerCanvas'][w(0xeb)]?this[w(0x13a)][w(0x12a)]:this[w(0x13a)]['offsetHeight'];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this['_sVert'][w(0x137)]=l['y']/(-0x2*n)+0.5;}),this[v(0x117)]=this[v(0xfc)](v(0xfa)),this['_zoomInput']['onkeydown']=l=>{const x=v;if(l['key']==x(0x104))this['_zoomAroundViewportCenter'](parseFloat(this['_zoomInput']['value'])/0x64);},this[v(0x117)][v(0xe1)]=()=>{const y=v;this[y(0x126)](parseFloat(this['_zoomInput'][y(0x137)])/0x64);},this['_zoomInput'][v(0x10b)]=this['_zoomInput'][v(0xdf)];let e=this[v(0xfc)]('zoomIncrease');this[v(0x113)](e,0x1);let f=this[v(0xfc)]('zoomDecrease');this[v(0x113)](f,-0x1);let g=this['_getDomElement'](v(0x11a));g['onclick']=()=>{this['zoomReset']();};let h=this[v(0xfc)]('zoomFit');h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames[v(0x103)],l=>this['_onWheel'](l));const i=(l,m)=>{const z=v;l[z(0xee)][z(0xfe)](z(0xf7),m),l[z(0xe4)](z(0x11c),String(m));},j=this[v(0xfc)]('alignSnap');j[v(0x10b)]=()=>{const A=v;this[A(0x105)][A(0x121)]=!this[A(0x105)]['alignOnSnap'],i(j,this[A(0x105)]['alignOnSnap']);},i(j,this[v(0x105)][v(0x121)]),j[v(0x10c)]=l=>{const B=v;l[B(0xf8)]();};const k=this[v(0xfc)](v(0x10d));k['onclick']=()=>{const C=v;this[C(0x105)][C(0x13d)]=!this['_designerCanvas'][C(0x13d)],i(k,this['_designerCanvas'][C(0x13d)]);},i(k,this['_designerCanvas'][v(0x13d)]),k['oncontextmenu']=l=>{const D=v;l[D(0xf8)]();let m=prompt('raster\x20size',this[D(0x13a)][D(0x147)][D(0xe2)]());if(m){let n=parseInt(m);if(n>0x0)this[D(0x13a)]['gridSize']=n;}},this[v(0xe0)]=this['_getDomElement'](v(0x114)),this[v(0xe0)]['onwheel']=l=>l['stopPropagation'](),this[v(0x102)][v(0x101)](v(0xff),l=>this[v(0x11f)](l)),this[v(0x12c)]['addEventListener'](v(0xff),l=>this['_onScrollbar'](l));}[p(0x11a)](){const E=p;this['_designerCanvas'][E(0xf6)]={'x':0x0,'y':0x0},this[E(0x105)][E(0x145)]=0x1,this[E(0x102)]['value']=0.5,this['_sHor']['value']=0.5,this['_zoomInput']['value']=Math['round'](this[E(0x105)][E(0x145)]*0x64)+'%';}['zoomToFit'](){this['_designerCanvas']['zoomToFit']();}[p(0x126)](c){const F=p;if(!this[F(0x112)])return;if(!Number[F(0x111)](c)||c<=0x0)return;const d=this['_designerCanvas']['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d['height'],this[F(0x105)]['zoomFactor'],this['_designerCanvas']['canvasOffset']);this['_designerCanvas'][F(0x129)](e,c);}['_configureZoomButton'](c,d){const H=p;c['onclick']=e=>{const G=b;if(e['detail']===0x0)this[G(0x11d)](d);},c[H(0xf2)]=e=>{const I=H;if(!e['isPrimary']||e[I(0xfd)]!=0x0)return;this['_stopZoomRepeat'](),this[I(0xf9)]=e['pointerId'],this[I(0x13e)]=c;try{c[I(0xec)](e['pointerId']);}catch{}this['_zoomHoldRepeater'][I(0x12e)](()=>this[I(0x11d)](d),()=>this[I(0x11d)](d,0x4)),e['preventDefault']();},c['onpointerup']=e=>this[H(0x138)](e['pointerId']),c[H(0x10e)]=e=>this['_stopZoomRepeat'](e['pointerId']),c['onlostpointercapture']=e=>this['_stopZoomRepeat'](e['pointerId']),c[H(0x10c)]=e=>e[H(0xf8)]();}['_zoomStep'](c,d=0x1){const J=p,e=this[J(0x105)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[J(0x126)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[J(0x126)](Math[J(0x118)](e-g,0.001));}}['_stopZoomRepeat'](c){const K=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[K(0xf9)],e=this[K(0x13e)];this['_zoomPointerId']=null,this[K(0x13e)]=null,this[K(0x131)]['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e[K(0x108)](d);}catch{}}['_onScrollbar'](c){const L=p;if(!this[L(0x112)])return;if(c?.['detail']==L(0x139))c['target']['value']+=0.25;else{if(c?.['detail']=='decrementLarge')c['target'][L(0x137)]-=0.25;else{if(c?.[L(0xf4)]=='incrementSmall')c[L(0x13c)]['value']+=0.05;else{if(c?.['detail']=='decrementSmall')c['target'][L(0x137)]-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this[L(0x13a)][L(0xe5)]:this[L(0x13a)][L(0x115)],f=this[L(0x13a)]['designerOffsetHeight']>this[L(0x13a)][L(0xeb)]?this[L(0x13a)][L(0x12a)]:this['designerCanvas'][L(0xeb)],g=d*(this['_sHor'][L(0x137)]-0.5)*-0x2,i=f*(this['_sVert'][L(0x137)]-0.5)*-0x2;this['designerCanvas'][L(0xf6)]={'x':g,'y':i};}[p(0x13b)](c){const M=p;if(!this['instanceServiceContainer'])return;c[M(0xf8)]();if(c[M(0xf0)]){let d=this['_designerCanvas'][M(0x145)];const e=c[M(0x12f)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this['designerCanvas']['getNormalizedEventCoordinates'](c);this['designerCanvas'][M(0xea)](f,d);}else c['shiftKey']?(this[M(0x12c)]['value']+=c[M(0x12f)]/0x2710,this['_onScrollbar'](null)):(this[M(0x102)][M(0x137)]+=c['deltaY']/0x2710,this['_onScrollbar'](null),this['_sHor'][M(0x137)]+=c[M(0xf1)]/0x2710,this['_onScrollbar'](null));}get['designerWidth'](){const N=p;return this[N(0x105)][N(0xe3)];}set[p(0xe3)](c){const O=p;this['_designerCanvas'][O(0xe3)]=c;}get['designerHeight'](){return this['_designerCanvas']['designerHeight'];}set['designerHeight'](c){const P=p;this['_designerCanvas'][P(0x140)]=c;}set[p(0x132)](c){const Q=p;this[Q(0x105)]['additionalStyles']=c;}[p(0x125)](c){const R=p;this[R(0x105)]['setDesignItems'](c);}async['executeCommand'](c){const S=p;this[S(0x105)]['executeCommand'](c);}[p(0xf5)](c){const T=p;return this[T(0x105)]['canExecuteCommand'](c);}get['editingDocument'](){const U=p;return this['instanceServiceContainer']?.[U(0x10f)];}async['attachDocument'](c){const V=p;await c['commitPendingChanges']();if(!this[V(0x112)])this['initialize'](c[V(0x135)],c);else this['_designerCanvas']['attachDocument'](c),this['initializeToolbar']();}[p(0x146)](){const W=p;this[W(0x138)](),this[W(0xed)][W(0x13f)]();for(const c of this['_configButtons']){c['dispose']?.(),c[W(0xe8)]();}return this['_configButtons']=[],this['_designerCanvas'][W(0x146)]();}['dispose'](){const X=p;this['detachDocument'](),this[X(0x105)]['dispose'](),this[X(0xed)]['dispose']();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const Y=p;this['serviceContainer']=c,this['_designerCanvas'][Y(0x123)](c,d),this['initializeToolbar']();}[p(0x119)](){const Z=p,c=this['serviceContainer'];this['instanceServiceContainer'][Z(0xfb)]=()=>this[Z(0x146)]();for(const d of this['_configButtons']){d['dispose']?.(),d['remove']();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e[Z(0x141)](this,this[Z(0x105)])){this['_configButtons'][Z(0x122)](f),this['_lowertoolbar']['appendChild'](f);}}this[Z(0xed)]['initialize'](this['serviceContainer'],this);}[p(0x11e)](){return this['editingDocument']['getHtml']();}async['parseDesignerHTML'](c,d=![]){const a0=p;await this[a0(0x105)][a0(0x142)](),await this[a0(0x10f)][a0(0x12d)](c,d);}static['wrapInDesigner'](c,d){const a1=p,e=new DesignerCanvas();e[a1(0x123)](d);const f=e['serviceContainer']['getLastServiceWhere']('htmlParserService',g=>g[a1(0x10a)]==DefaultHtmlParserService);return e['addDesignItems'](f[a1(0x100)](c,e[a1(0x135)],e['instanceServiceContainer'])),e;}}function b(c,d){c=c-0xdf;const e=a();let f=e[c];return f;}customElements[p(0x110)]('node-projects-designer-view',DesignerView);