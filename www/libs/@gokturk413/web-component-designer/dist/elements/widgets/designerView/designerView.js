const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x20a))/0x1+parseInt(o(0x1f0))/0x2*(-parseInt(o(0x1c7))/0x3)+parseInt(o(0x1d9))/0x4*(-parseInt(o(0x19f))/0x5)+-parseInt(o(0x1ac))/0x6*(-parseInt(o(0x1f2))/0x7)+parseInt(o(0x1e7))/0x8*(parseInt(o(0x1b6))/0x9)+parseInt(o(0x1fb))/0xa*(-parseInt(o(0x1cc))/0xb)+parseInt(o(0x1f1))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8b59d));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';import{DesignerCanvas}from'./designerCanvas.js';function b(c,d){c=c-0x19e;const e=a();let f=e[c];return f;}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';function a(){const a8=['_onScrollbar','Enter','insertAdjacentElement','onkeydown','1620150OtpjyB','afterbegin','loadHtml','height','readOnly','width','attachDocument','incrementLarge','zoomToFit','getDesignerHTML','10125rPFWAQ','detachDocument','stop','deltaX','ctrlKey','addEventListener','appendChild','slot','canvasOffset','getLastServiceWhere','deltaY','_configButtons','_restoreCachedInititalValues','preventDefault','_zoomInput','designViewConfigButtons','designerCanvas','95661wgJjgc','_sVert','_stopZoomRepeat','target','_toolbar','154110hcxTQb','getHtml','_zoomAroundViewportCenter','_designerCanvas','initialize','value','pointerId','offsetWidth','style','onpointercancel','onclick','editingDocument','_lowertoolbar','44OMJKSA','detail','_sHor','alignOnGrid','afterend','decrementSmall','createElement','designerWidth','_configureZoomButton','additionalStyles','detachView','oncontextmenu','designerOffsetHeight','alignSnap','5080ZuhlZF','start','instanceServiceContainer','zoomReset','htmlParserService','aria-pressed','button','_zoomHoldRepeater','alignOnSnap','42zYDrqz','23394084qbynLV','14cgJiHl','onpointerdown','incrementSmall','zoomFactor','decrementLarge','setAttribute','Wheel','dispose','template','310elAayx','zoomIncrease','canExecuteCommand','remove','offsetHeight','scrollbar-input','_onWheel','serviceContainer','tool-bar','designerOffsetWidth','addDesignItems','_zoomStep','push','zoomInput','initializeToolbar','402693Xyfwxy','gridSize','_zoomPointerId','node-projects-designer-view','outerRect','512055mIjmBo','raster\x20size','commitPendingChanges','designerHeight','key','_getDomElement','whenReady','s-hor','_zoomPointerTarget'];a=function(){return a8;};return a();}import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x1db)];get[p(0x202)](){const q=p;return this['_designerCanvas'][q(0x202)];}set['serviceContainer'](c){const r=p;this['_designerCanvas'][r(0x202)]=c;}get['instanceServiceContainer'](){return this['_designerCanvas']['instanceServiceContainer'];}set[p(0x1e9)](c){const s=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[s(0x1cf)][s(0x1b2)](c[s(0x1d7)]),this[s(0x209)]();}['_designerCanvas'];get[p(0x1c6)](){const t=p;return this[t(0x1cf)];}get[p(0x1b0)](){const u=p;return this[u(0x1cf)]['readOnly'];}set[p(0x1b0)](c){const v=p;this['_designerCanvas'][v(0x1b0)]=c;}[p(0x1c1)]=[];['_zoomInput'];['_lowertoolbar'];['_toolbar'];[p(0x1ee)]=new ZoomHoldRepeater();[p(0x20c)];[p(0x1a7)];static [p(0x1d4)]=css`
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
    }`;static [p(0x1fa)]=html`
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
    </div>`;constructor(c=![]){const w=p;super(),this[w(0x1c2)](),this['_sVert']=this[w(0x1a4)]('s-vert'),this[w(0x1db)]=this['_getDomElement'](w(0x1a6));const d=this['_getDomElement']('outer');this[w(0x1cf)]=new DesignerCanvas(c),this[w(0x1cf)]['id']='canvas',this[w(0x1cf)][w(0x1bc)](document[w(0x1df)](w(0x1bd))),d[w(0x1aa)](w(0x1ad),this[w(0x1cf)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']=w(0x203),this['_sVert'][w(0x1aa)](w(0x1dd),this['_toolbar']),this['_designerCanvas']['onZoomFactorChanged']['on'](()=>{const x=w;this['_zoomInput']['value']=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';const l=this['designerCanvas'][x(0x1be)],m=this[x(0x1c6)][x(0x204)]>this[x(0x1c6)][x(0x1d3)]?this['designerCanvas']['designerOffsetWidth']:this[x(0x1c6)][x(0x1d3)],n=this['designerCanvas']['designerOffsetHeight']>this['designerCanvas']['offsetHeight']?this['designerCanvas']['designerOffsetHeight']:this[x(0x1c6)]['offsetHeight'];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this[x(0x1c8)]['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[w(0x1a4)](w(0x208)),this['_zoomInput'][w(0x1ab)]=l=>{const y=w;if(l[y(0x1a3)]==y(0x1a9))this[y(0x1ce)](parseFloat(this[y(0x1c4)][y(0x1d1)])/0x64);},this[w(0x1c4)]['onblur']=()=>{const z=w;this['_zoomAroundViewportCenter'](parseFloat(this[z(0x1c4)]['value'])/0x64);},this[w(0x1c4)][w(0x1d6)]=this['_zoomInput']['select'];let e=this['_getDomElement'](w(0x1fc));this['_configureZoomButton'](e,0x1);let f=this['_getDomElement']('zoomDecrease');this[w(0x1e1)](f,-0x1);let g=this[w(0x1a4)](w(0x1ea));g[w(0x1d6)]=()=>{this['zoomReset']();};let h=this[w(0x1a4)]('zoomFit');h[w(0x1d6)]=()=>{const A=w;this[A(0x1b4)]();},this[w(0x1bb)](EventNames[w(0x1f8)],l=>this[w(0x201)](l));const i=(l,m)=>{const B=w;l['classList']['toggle']('selected',m),l[B(0x1f7)](B(0x1ec),String(m));},j=this['_getDomElement'](w(0x1e6));j['onclick']=()=>{const C=w;this[C(0x1cf)]['alignOnSnap']=!this['_designerCanvas']['alignOnSnap'],i(j,this['_designerCanvas'][C(0x1ef)]);},i(j,this[w(0x1cf)]['alignOnSnap']),j[w(0x1e4)]=l=>{const D=w;l[D(0x1c3)]();};const k=this[w(0x1a4)]('alignGrid');k[w(0x1d6)]=()=>{const E=w;this['_designerCanvas'][E(0x1dc)]=!this['_designerCanvas']['alignOnGrid'],i(k,this[E(0x1cf)][E(0x1dc)]);},i(k,this['_designerCanvas']['alignOnGrid']),k['oncontextmenu']=l=>{const F=w;l[F(0x1c3)]();let m=prompt(F(0x1a0),this['designerCanvas'][F(0x20b)]['toString']());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas'][F(0x20b)]=n;}},this[w(0x1d8)]=this[w(0x1a4)]('lowertoolbar'),this['_lowertoolbar']['onwheel']=l=>l['stopPropagation'](),this[w(0x1c8)]['addEventListener'](w(0x200),l=>this['_onScrollbar'](l)),this[w(0x1db)]['addEventListener']('scrollbar-input',l=>this[w(0x1a8)](l));}['zoomReset'](){const G=p;this[G(0x1cf)][G(0x1be)]={'x':0x0,'y':0x0},this['_designerCanvas'][G(0x1f5)]=0x1,this['_sVert']['value']=0.5,this['_sHor'][G(0x1d1)]=0.5,this[G(0x1c4)]['value']=Math['round'](this['_designerCanvas'][G(0x1f5)]*0x64)+'%';}[p(0x1b4)](){const H=p;this[H(0x1cf)]['zoomToFit']();}['_zoomAroundViewportCenter'](c){const I=p;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[I(0x1cf)][I(0x19e)],e=getCanvasPointAtViewportCenter(d[I(0x1b1)],d[I(0x1af)],this[I(0x1cf)][I(0x1f5)],this[I(0x1cf)]['canvasOffset']);this['_designerCanvas']['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const K=p;c['onclick']=e=>{const J=b;if(e[J(0x1da)]===0x0)this[J(0x206)](d);},c[K(0x1f3)]=e=>{const L=K;if(!e['isPrimary']||e[L(0x1ed)]!=0x0)return;this['_stopZoomRepeat'](),this[L(0x20c)]=e[L(0x1d2)],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e[L(0x1d2)]);}catch{}this['_zoomHoldRepeater'][L(0x1e8)](()=>this[L(0x206)](d),()=>this[L(0x206)](d,0x4)),e['preventDefault']();},c['onpointerup']=e=>this[K(0x1c9)](e[K(0x1d2)]),c[K(0x1d5)]=e=>this[K(0x1c9)](e['pointerId']),c['onlostpointercapture']=e=>this[K(0x1c9)](e[K(0x1d2)]),c[K(0x1e4)]=e=>e[K(0x1c3)]();}[p(0x206)](c,d=0x1){const M=p,e=this[M(0x1cf)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[M(0x1ce)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}['_stopZoomRepeat'](c){const N=p;if(c!=null&&c!==this[N(0x20c)])return;const d=this[N(0x20c)],e=this['_zoomPointerTarget'];this['_zoomPointerId']=null,this['_zoomPointerTarget']=null,this[N(0x1ee)][N(0x1b8)]();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}[p(0x1a8)](c){const O=p;if(!this['instanceServiceContainer'])return;if(c?.[O(0x1da)]==O(0x1b3))c['target'][O(0x1d1)]+=0.25;else{if(c?.[O(0x1da)]==O(0x1f6))c[O(0x1ca)]['value']-=0.25;else{if(c?.['detail']==O(0x1f4))c['target']['value']+=0.05;else{if(c?.[O(0x1da)]==O(0x1de))c['target']['value']-=0.05;}}}const d=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas']['offsetWidth']?this['designerCanvas']['designerOffsetWidth']:this['designerCanvas']['offsetWidth'],f=this['designerCanvas'][O(0x1e5)]>this[O(0x1c6)][O(0x1ff)]?this['designerCanvas']['designerOffsetHeight']:this[O(0x1c6)][O(0x1ff)],g=d*(this['_sHor']['value']-0.5)*-0x2,i=f*(this[O(0x1c8)][O(0x1d1)]-0.5)*-0x2;this['designerCanvas'][O(0x1be)]={'x':g,'y':i};}[p(0x201)](c){const P=p;if(!this['instanceServiceContainer'])return;c[P(0x1c3)]();if(c[P(0x1ba)]){let d=this['_designerCanvas']['zoomFactor'];const e=c[P(0x1c0)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[P(0x1c6)]['getNormalizedEventCoordinates'](c);this[P(0x1c6)]['zoomTowardsPoint'](f,d);}else c['shiftKey']?(this[P(0x1db)]['value']+=c[P(0x1c0)]/0x2710,this[P(0x1a8)](null)):(this[P(0x1c8)]['value']+=c['deltaY']/0x2710,this['_onScrollbar'](null),this[P(0x1db)][P(0x1d1)]+=c[P(0x1b9)]/0x2710,this['_onScrollbar'](null));}get[p(0x1e0)](){const Q=p;return this[Q(0x1cf)]['designerWidth'];}set['designerWidth'](c){const R=p;this[R(0x1cf)]['designerWidth']=c;}get[p(0x1a2)](){const S=p;return this[S(0x1cf)][S(0x1a2)];}set['designerHeight'](c){const T=p;this[T(0x1cf)][T(0x1a2)]=c;}set[p(0x1e2)](c){const U=p;this[U(0x1cf)][U(0x1e2)]=c;}['setDesignItems'](c){const V=p;this[V(0x1cf)]['setDesignItems'](c);}async['executeCommand'](c){const W=p;this[W(0x1cf)]['executeCommand'](c);}[p(0x1fd)](c){const X=p;return this[X(0x1cf)][X(0x1fd)](c);}get['editingDocument'](){const Y=p;return this['instanceServiceContainer']?.[Y(0x1d7)];}async['attachDocument'](c){const Z=p;await c[Z(0x1a1)]();if(!this[Z(0x1e9)])this[Z(0x1d0)](c[Z(0x202)],c);else this[Z(0x1cf)][Z(0x1b2)](c),this[Z(0x209)]();}[p(0x1b7)](){const a0=p;this['_stopZoomRepeat'](),this['_toolbar'][a0(0x1f9)]();for(const c of this['_configButtons']){c['dispose']?.(),c['remove']();}return this['_configButtons']=[],this[a0(0x1cf)]['detachDocument']();}['dispose'](){const a1=p;this[a1(0x1b7)](),this['_designerCanvas']['dispose'](),this[a1(0x1cb)]['dispose']();}['disconnectedCallback'](){const a2=p;this[a2(0x1c9)]();}['initialize'](c,d){const a3=p;this['serviceContainer']=c,this[a3(0x1cf)][a3(0x1d0)](c,d),this['initializeToolbar']();}['initializeToolbar'](){const a4=p,c=this['serviceContainer'];this['instanceServiceContainer'][a4(0x1e3)]=()=>this['detachDocument']();for(const d of this[a4(0x1c1)]){d[a4(0x1f9)]?.(),d[a4(0x1fe)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c[a4(0x1c5)]){for(let f of e['provideButtons'](this,this[a4(0x1cf)])){this[a4(0x1c1)][a4(0x207)](f),this['_lowertoolbar'][a4(0x1bc)](f);}}this['_toolbar'][a4(0x1d0)](this[a4(0x202)],this);}[p(0x1b5)](){const a5=p;return this['editingDocument'][a5(0x1cd)]();}async['parseDesignerHTML'](c,d=![]){const a6=p;await this['_designerCanvas'][a6(0x1a5)](),await this[a6(0x1d7)][a6(0x1ae)](c,d);}static['wrapInDesigner'](c,d){const a7=p,e=new DesignerCanvas();e[a7(0x1d0)](d);const f=e['serviceContainer'][a7(0x1bf)](a7(0x1eb),g=>g['constructor']==DefaultHtmlParserService);return e[a7(0x205)](f['createDesignItems'](c,e['serviceContainer'],e[a7(0x1e9)])),e;}}customElements['define'](p(0x20d),DesignerView);