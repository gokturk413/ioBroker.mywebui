const q=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1ba))/0x1*(-parseInt(o(0x19c))/0x2)+parseInt(o(0x172))/0x3+parseInt(o(0x1b3))/0x4+-parseInt(o(0x1b2))/0x5*(parseInt(o(0x1b9))/0x6)+parseInt(o(0x1bb))/0x7+parseInt(o(0x16b))/0x8*(parseInt(o(0x1be))/0x9)+-parseInt(o(0x195))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5f9c9));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';function b(c,d){c=c-0x157;const e=a();let f=e[c];return f;}import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];['_sHor'];get['serviceContainer'](){return this['_designerCanvas']['serviceContainer'];}set['serviceContainer'](c){const p=b;this[p(0x161)]['serviceContainer']=c;}get[q(0x15f)](){const r=q;return this[r(0x161)][r(0x15f)];}set[q(0x15f)](c){const s=q;if(!c[s(0x19e)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[s(0x161)][s(0x15e)](c['editingDocument']),this['initializeToolbar']();}['_designerCanvas'];get[q(0x181)](){return this['_designerCanvas'];}get[q(0x15c)](){const t=q;return this['_designerCanvas'][t(0x15c)];}set['readOnly'](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];['_zoomInput'];[q(0x186)];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();[q(0x174)];['_zoomPointerTarget'];static [q(0x19d)]=css`
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
    }`;static [q(0x16e)]=html`
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
    </div>`;constructor(c=![]){const u=q;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this['_getDomElement'](u(0x19f)),this[u(0x183)]=this[u(0x199)]('s-hor');const d=this['_getDomElement']('outer');this['_designerCanvas']=new DesignerCanvas(c),this[u(0x161)]['id']='canvas',this['_designerCanvas'][u(0x15d)](document[u(0x180)]('slot')),d[u(0x160)](u(0x165),this[u(0x161)]),this[u(0x191)]=new DesignerToolbar(),this['_toolbar']['id']=u(0x197),this[u(0x18d)][u(0x160)](u(0x1a5),this[u(0x191)]),this[u(0x161)]['onZoomFactorChanged']['on'](()=>{const v=u;this[v(0x192)]['value']=Math[v(0x19a)](this[v(0x161)]['zoomFactor']*0x64)+'%';const l=this['designerCanvas'][v(0x17f)],m=this[v(0x181)][v(0x198)]>this['designerCanvas']['offsetWidth']?this[v(0x181)]['designerOffsetWidth']:this['designerCanvas']['offsetWidth'],n=this['designerCanvas']['designerOffsetHeight']>this[v(0x181)]['offsetHeight']?this[v(0x181)]['designerOffsetHeight']:this[v(0x181)][v(0x1bd)];this[v(0x183)]['value']=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this[u(0x192)]=this['_getDomElement'](u(0x16f)),this['_zoomInput'][u(0x188)]=l=>{const w=u;if(l[w(0x166)]=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this[w(0x192)][w(0x18f)])/0x64);},this['_zoomInput']['onblur']=()=>{const x=u;this['_zoomAroundViewportCenter'](parseFloat(this[x(0x192)]['value'])/0x64);},this['_zoomInput']['onclick']=this['_zoomInput']['select'];let e=this['_getDomElement'](u(0x184));this[u(0x1ad)](e,0x1);let f=this[u(0x199)](u(0x16d));this[u(0x1ad)](f,-0x1);let g=this[u(0x199)]('zoomReset');g[u(0x1a1)]=()=>{const y=u;this[y(0x1a2)]();};let h=this[u(0x199)]('zoomFit');h['onclick']=()=>{const z=u;this[z(0x17c)]();},this[u(0x193)](EventNames['Wheel'],l=>this[u(0x182)](l));const i=(l,m)=>{const A=u;l[A(0x173)]['toggle'](A(0x17d),m),l[A(0x163)](A(0x187),String(m));},j=this[u(0x199)](u(0x171));j['onclick']=()=>{const B=u;this[B(0x161)][B(0x15b)]=!this['_designerCanvas'][B(0x15b)],i(j,this[B(0x161)][B(0x15b)]);},i(j,this[u(0x161)][u(0x15b)]),j['oncontextmenu']=l=>{const C=u;l[C(0x18a)]();};const k=this['_getDomElement'](u(0x1b8));k[u(0x1a1)]=()=>{const D=u;this['_designerCanvas'][D(0x16c)]=!this['_designerCanvas']['alignOnGrid'],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this['_designerCanvas']['alignOnGrid']),k[u(0x157)]=l=>{const E=u;l['preventDefault']();let m=prompt('raster\x20size',this['designerCanvas']['gridSize']['toString']());if(m){let n=parseInt(m);if(n>0x0)this[E(0x181)]['gridSize']=n;}},this['_lowertoolbar']=this[u(0x199)]('lowertoolbar'),this['_lowertoolbar']['onwheel']=l=>l[u(0x1a9)](),this['_sVert']['addEventListener'](u(0x1b4),l=>this['_onScrollbar'](l)),this[u(0x183)]['addEventListener'](u(0x1b4),l=>this['_onScrollbar'](l));}['zoomReset'](){const F=q;this[F(0x161)][F(0x17f)]={'x':0x0,'y':0x0},this['_designerCanvas']['zoomFactor']=0x1,this[F(0x18d)]['value']=0.5,this[F(0x183)]['value']=0.5,this[F(0x192)]['value']=Math[F(0x19a)](this['_designerCanvas'][F(0x168)]*0x64)+'%';}[q(0x17c)](){const G=q;this['_designerCanvas'][G(0x17c)]();}[q(0x1a7)](c){const H=q;if(!this['instanceServiceContainer'])return;if(!Number[H(0x177)](c)||c<=0x0)return;const d=this['_designerCanvas'][H(0x1ac)],e=getCanvasPointAtViewportCenter(d['width'],d[H(0x1b1)],this[H(0x161)]['zoomFactor'],this['_designerCanvas'][H(0x17f)]);this['_designerCanvas']['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const I=q;c[I(0x1a1)]=e=>{const J=I;if(e[J(0x164)]===0x0)this['_zoomStep'](d);},c[I(0x17a)]=e=>{const K=I;if(!e[K(0x179)]||e[K(0x176)]!=0x0)return;this['_stopZoomRepeat'](),this[K(0x174)]=e['pointerId'],this[K(0x1a0)]=c;try{c[K(0x1a8)](e['pointerId']);}catch{}this['_zoomHoldRepeater'][K(0x175)](()=>this['_zoomStep'](d),()=>this['_zoomStep'](d,0x4)),e['preventDefault']();},c['onpointerup']=e=>this['_stopZoomRepeat'](e[I(0x1b7)]),c['onpointercancel']=e=>this[I(0x18c)](e['pointerId']),c[I(0x18b)]=e=>this['_stopZoomRepeat'](e[I(0x1b7)]),c[I(0x157)]=e=>e[I(0x18a)]();}[q(0x189)](c,d=0x1){const e=this['_designerCanvas']['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}[q(0x18c)](c){const L=q;if(c!=null&&c!==this[L(0x174)])return;const d=this['_zoomPointerId'],e=this[L(0x1a0)];this[L(0x174)]=null,this[L(0x1a0)]=null,this[L(0x178)]['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e[L(0x162)](d);}catch{}}['_onScrollbar'](c){const M=q;if(!this[M(0x15f)])return;if(c?.[M(0x164)]==M(0x1a6))c['target']['value']+=0.25;else{if(c?.['detail']=='decrementLarge')c['target']['value']-=0.25;else{if(c?.[M(0x164)]==M(0x185))c['target']['value']+=0.05;else{if(c?.['detail']==M(0x1a4))c['target']['value']-=0.05;}}}const d=this[M(0x181)][M(0x198)]>this['designerCanvas'][M(0x1bc)]?this[M(0x181)][M(0x198)]:this[M(0x181)][M(0x1bc)],f=this[M(0x181)][M(0x19b)]>this['designerCanvas'][M(0x1bd)]?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas'][M(0x1bd)],g=d*(this[M(0x183)][M(0x18f)]-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this['designerCanvas'][M(0x17f)]={'x':g,'y':i};}[q(0x182)](c){const N=q;if(!this[N(0x15f)])return;c['preventDefault']();if(c['ctrlKey']){let d=this['_designerCanvas']['zoomFactor'];const e=c[N(0x1b0)]<0x0?0x1:-0x1;d*=Math[N(0x194)](e*0.2);if(d<0.02)d=0.02;const f=this[N(0x181)]['getNormalizedEventCoordinates'](c);this[N(0x181)][N(0x17e)](f,d);}else c['shiftKey']?(this['_sHor'][N(0x18f)]+=c['deltaY']/0x2710,this['_onScrollbar'](null)):(this['_sVert'][N(0x18f)]+=c['deltaY']/0x2710,this['_onScrollbar'](null),this['_sHor']['value']+=c['deltaX']/0x2710,this['_onScrollbar'](null));}get[q(0x1aa)](){const O=q;return this[O(0x161)]['designerWidth'];}set[q(0x1aa)](c){const P=q;this[P(0x161)]['designerWidth']=c;}get[q(0x159)](){const Q=q;return this[Q(0x161)][Q(0x159)];}set['designerHeight'](c){const R=q;this[R(0x161)][R(0x159)]=c;}set[q(0x17b)](c){const S=q;this[S(0x161)][S(0x17b)]=c;}[q(0x1b5)](c){const T=q;this[T(0x161)][T(0x1b5)](c);}async[q(0x169)](c){this['_designerCanvas']['executeCommand'](c);}['canExecuteCommand'](c){const U=q;return this['_designerCanvas'][U(0x15a)](c);}get[q(0x19e)](){const V=q;return this['instanceServiceContainer']?.[V(0x19e)];}async['attachDocument'](c){const W=q;await c['commitPendingChanges']();if(!this[W(0x15f)])this[W(0x1ab)](c[W(0x158)],c);else this['_designerCanvas'][W(0x15e)](c),this['initializeToolbar']();}['detachDocument'](){const X=q;this['_stopZoomRepeat'](),this[X(0x191)]['dispose']();for(const c of this[X(0x196)]){c['dispose']?.(),c['remove']();}return this['_configButtons']=[],this['_designerCanvas']['detachDocument']();}['dispose'](){const Y=q;this['detachDocument'](),this['_designerCanvas'][Y(0x16a)](),this[Y(0x191)]['dispose']();}['disconnectedCallback'](){this['_stopZoomRepeat']();}[q(0x1ab)](c,d){const Z=q;this['serviceContainer']=c,this[Z(0x161)]['initialize'](c,d),this['initializeToolbar']();}[q(0x1b6)](){const a0=q,c=this[a0(0x158)];this['instanceServiceContainer'][a0(0x1af)]=()=>this[a0(0x190)]();for(const d of this['_configButtons']){d[a0(0x16a)]?.(),d['remove']();}this['_configButtons']=[];if(c[a0(0x170)])for(let e of c['designViewConfigButtons']){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this['_configButtons'][a0(0x167)](f),this['_lowertoolbar'][a0(0x15d)](f);}}this[a0(0x191)]['initialize'](this['serviceContainer'],this);}['getDesignerHTML'](){return this['editingDocument']['getHtml']();}async['parseDesignerHTML'](c,d=![]){const a1=q;await this[a1(0x161)][a1(0x1ae)](),await this[a1(0x19e)]['loadHtml'](c,d);}static['wrapInDesigner'](c,d){const a2=q,e=new DesignerCanvas();e[a2(0x1ab)](d);const f=e['serviceContainer'][a2(0x1a3)]('htmlParserService',g=>g['constructor']==DefaultHtmlParserService);return e['addDesignItems'](f['createDesignItems'](c,e[a2(0x158)],e[a2(0x15f)])),e;}}function a(){const a3=['_toolbar','_zoomInput','addEventListener','exp','16757520lqDjDP','_configButtons','tool-bar','designerOffsetWidth','_getDomElement','round','designerOffsetHeight','2WRSQdu','style','editingDocument','s-vert','_zoomPointerTarget','onclick','zoomReset','getLastServiceWhere','decrementSmall','afterend','incrementLarge','_zoomAroundViewportCenter','setPointerCapture','stopPropagation','designerWidth','initialize','outerRect','_configureZoomButton','whenReady','detachView','deltaY','height','5fIGSJd','1407660tHQJjB','scrollbar-input','setDesignItems','initializeToolbar','pointerId','alignGrid','4334322oSXRCN','479567XvplBu','4908351EbnqhB','offsetWidth','offsetHeight','9657VdDBEc','oncontextmenu','serviceContainer','designerHeight','canExecuteCommand','alignOnSnap','readOnly','appendChild','attachDocument','instanceServiceContainer','insertAdjacentElement','_designerCanvas','releasePointerCapture','setAttribute','detail','afterbegin','key','push','zoomFactor','executeCommand','dispose','4072JHsSCs','alignOnGrid','zoomDecrease','template','zoomInput','designViewConfigButtons','alignSnap','2132796yxNUWy','classList','_zoomPointerId','start','button','isFinite','_zoomHoldRepeater','isPrimary','onpointerdown','additionalStyles','zoomToFit','selected','zoomTowardsPoint','canvasOffset','createElement','designerCanvas','_onWheel','_sHor','zoomIncrease','incrementSmall','_lowertoolbar','aria-pressed','onkeydown','_zoomStep','preventDefault','onlostpointercapture','_stopZoomRepeat','_sVert','define','value','detachDocument'];a=function(){return a3;};return a();}customElements[q(0x18e)]('node-projects-designer-view',DesignerView);