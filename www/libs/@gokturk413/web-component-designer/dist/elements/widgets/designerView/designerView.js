const p=b;function b(c,d){c=c-0x142;const e=a();let f=e[c];return f;}(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x19a))/0x1+parseInt(o(0x185))/0x2+parseInt(o(0x155))/0x3*(parseInt(o(0x178))/0x4)+-parseInt(o(0x163))/0x5*(-parseInt(o(0x18a))/0x6)+-parseInt(o(0x159))/0x7+parseInt(o(0x19b))/0x8*(-parseInt(o(0x167))/0x9)+-parseInt(o(0x15c))/0xa*(-parseInt(o(0x168))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3afbf));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';function a(){const a4=['canExecuteCommand','1429057esgYgZ','canvasOffset','initialize','18010kRewpf','_zoomPointerTarget','exp','zoomTowardsPoint','onlostpointercapture','appendChild','designerOffsetHeight','5YUVTTU','detachView','_zoomPointerId','_getDomElement','17775ynvreJ','4389bpPqVb','incrementSmall','_lowertoolbar','_onWheel','remove','onpointerdown','_zoomAroundViewportCenter','additionalStyles','_zoomHoldRepeater','zoomDecrease','select','alignOnSnap','serviceContainer','afterbegin','instanceServiceContainer','width','2956ZLyLKA','Wheel','onZoomFactorChanged','zoomFactor','style','outer','key','_onScrollbar','zoomReset','_zoomStep','designerOffsetWidth','outerRect','pointerId','186262BSHaeC','aria-pressed','zoomIncrease','ctrlKey','_sHor','1748724SzzEbP','toString','initializeToolbar','preventDefault','onpointerup','node-projects-designer-view','offsetHeight','alignOnGrid','deltaY','target','wrapInDesigner','addDesignItems','designerCanvas','dispose','_stopZoomRepeat','detail','325314UiKuRS','1480kXcjFI','executeCommand','_designerCanvas','s-vert','selected','zoomToFit','_zoomInput','designerWidth','addEventListener','designerHeight','onpointercancel','getNormalizedEventCoordinates','oncontextmenu','canvas','htmlParserService','_configButtons','_configureZoomButton','readOnly','_sVert','onclick','editingDocument','offsetWidth','insertAdjacentElement','value','135Wmytcj','detachDocument','classList'];a=function(){return a4;};return a();}import{DesignerCanvas}from'./designerCanvas.js';import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{['_sVert'];[p(0x189)];get['serviceContainer'](){const q=p;return this[q(0x19d)]['serviceContainer'];}set['serviceContainer'](c){const r=p;this[r(0x19d)][r(0x174)]=c;}get[p(0x176)](){const s=p;return this[s(0x19d)]['instanceServiceContainer'];}set['instanceServiceContainer'](c){const t=p;if(!c[t(0x151)])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[t(0x19d)]['attachDocument'](c['editingDocument']),this[t(0x18c)]();}['_designerCanvas'];get[p(0x196)](){return this['_designerCanvas'];}get['readOnly'](){const u=p;return this[u(0x19d)][u(0x14e)];}set[p(0x14e)](c){const v=p;this['_designerCanvas'][v(0x14e)]=c;}[p(0x14c)]=[];['_zoomInput'];['_lowertoolbar'];['_toolbar'];[p(0x170)]=new ZoomHoldRepeater();['_zoomPointerId'];[p(0x15d)];static [p(0x17c)]=css`
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
    </div>`;constructor(c=![]){const w=p;super(),this['_restoreCachedInititalValues'](),this['_sVert']=this['_getDomElement'](w(0x19e)),this['_sHor']=this[w(0x166)]('s-hor');const d=this[w(0x166)](w(0x17d));this[w(0x19d)]=new DesignerCanvas(c),this['_designerCanvas']['id']=w(0x14a),this['_designerCanvas'][w(0x161)](document['createElement']('slot')),d[w(0x153)](w(0x175),this[w(0x19d)]),this['_toolbar']=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this['_sVert'][w(0x153)]('afterend',this['_toolbar']),this['_designerCanvas'][w(0x17a)]['on'](()=>{const x=w;this[x(0x143)]['value']=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';const l=this[x(0x196)]['canvasOffset'],m=this['designerCanvas'][x(0x182)]>this['designerCanvas'][x(0x152)]?this[x(0x196)][x(0x182)]:this['designerCanvas']['offsetWidth'],n=this[x(0x196)][x(0x162)]>this['designerCanvas']['offsetHeight']?this[x(0x196)]['designerOffsetHeight']:this[x(0x196)][x(0x190)];this['_sHor']['value']=l['x']/(-0x2*m)+0.5,this[x(0x14f)]['value']=l['y']/(-0x2*n)+0.5;}),this['_zoomInput']=this[w(0x166)]('zoomInput'),this[w(0x143)]['onkeydown']=l=>{const y=w;if(l[y(0x17e)]=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this[y(0x143)][y(0x154)])/0x64);},this['_zoomInput']['onblur']=()=>{const z=w;this[z(0x16e)](parseFloat(this['_zoomInput'][z(0x154)])/0x64);},this['_zoomInput']['onclick']=this[w(0x143)][w(0x172)];let e=this['_getDomElement'](w(0x187));this[w(0x14d)](e,0x1);let f=this['_getDomElement'](w(0x171));this[w(0x14d)](f,-0x1);let g=this['_getDomElement'](w(0x180));g[w(0x150)]=()=>{this['zoomReset']();};let h=this[w(0x166)]('zoomFit');h['onclick']=()=>{this['zoomToFit']();},this['addEventListener'](EventNames[w(0x179)],l=>this[w(0x16b)](l));const i=(l,m)=>{const A=w;l[A(0x157)]['toggle'](A(0x19f),m),l['setAttribute'](A(0x186),String(m));},j=this['_getDomElement']('alignSnap');j[w(0x150)]=()=>{const B=w;this[B(0x19d)][B(0x173)]=!this[B(0x19d)][B(0x173)],i(j,this['_designerCanvas'][B(0x173)]);},i(j,this['_designerCanvas'][w(0x173)]),j[w(0x149)]=l=>{const C=w;l[C(0x18d)]();};const k=this['_getDomElement']('alignGrid');k[w(0x150)]=()=>{const D=w;this['_designerCanvas'][D(0x191)]=!this[D(0x19d)][D(0x191)],i(k,this['_designerCanvas']['alignOnGrid']);},i(k,this[w(0x19d)]['alignOnGrid']),k['oncontextmenu']=l=>{const E=w;l[E(0x18d)]();let m=prompt('raster\x20size',this['designerCanvas']['gridSize'][E(0x18b)]());if(m){let n=parseInt(m);if(n>0x0)this['designerCanvas']['gridSize']=n;}},this[w(0x16a)]=this[w(0x166)]('lowertoolbar'),this[w(0x16a)]['onwheel']=l=>l['stopPropagation'](),this['_sVert'][w(0x145)]('scrollbar-input',l=>this[w(0x17f)](l)),this['_sHor']['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}['zoomReset'](){const F=p;this['_designerCanvas']['canvasOffset']={'x':0x0,'y':0x0},this[F(0x19d)]['zoomFactor']=0x1,this[F(0x14f)][F(0x154)]=0.5,this['_sHor'][F(0x154)]=0.5,this[F(0x143)]['value']=Math['round'](this['_designerCanvas']['zoomFactor']*0x64)+'%';}['zoomToFit'](){const G=p;this[G(0x19d)][G(0x142)]();}[p(0x16e)](c){const H=p;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[H(0x19d)][H(0x183)],e=getCanvasPointAtViewportCenter(d[H(0x177)],d['height'],this['_designerCanvas'][H(0x17b)],this['_designerCanvas'][H(0x15a)]);this['_designerCanvas']['zoomPoint'](e,c);}['_configureZoomButton'](c,d){const J=p;c['onclick']=e=>{const I=b;if(e[I(0x199)]===0x0)this['_zoomStep'](d);},c[J(0x16d)]=e=>{const K=J;if(!e['isPrimary']||e['button']!=0x0)return;this['_stopZoomRepeat'](),this['_zoomPointerId']=e['pointerId'],this['_zoomPointerTarget']=c;try{c['setPointerCapture'](e['pointerId']);}catch{}this['_zoomHoldRepeater']['start'](()=>this['_zoomStep'](d),()=>this[K(0x181)](d,0x4)),e['preventDefault']();},c[J(0x18e)]=e=>this[J(0x198)](e['pointerId']),c[J(0x147)]=e=>this[J(0x198)](e[J(0x184)]),c[J(0x160)]=e=>this['_stopZoomRepeat'](e[J(0x184)]),c['oncontextmenu']=e=>e[J(0x18d)]();}['_zoomStep'](c,d=0x1){const L=p,e=this[L(0x19d)]['zoomFactor'];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this[L(0x16e)](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this['_zoomAroundViewportCenter'](Math['max'](e-g,0.001));}}[p(0x198)](c){const M=p;if(c!=null&&c!==this['_zoomPointerId'])return;const d=this[M(0x165)],e=this[M(0x15d)];this[M(0x165)]=null,this['_zoomPointerTarget']=null,this['_zoomHoldRepeater']['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}[p(0x17f)](c){const N=p;if(!this['instanceServiceContainer'])return;if(c?.['detail']=='incrementLarge')c[N(0x193)][N(0x154)]+=0.25;else{if(c?.['detail']=='decrementLarge')c['target']['value']-=0.25;else{if(c?.[N(0x199)]==N(0x169))c[N(0x193)][N(0x154)]+=0.05;else{if(c?.['detail']=='decrementSmall')c[N(0x193)][N(0x154)]-=0.05;}}}const d=this[N(0x196)]['designerOffsetWidth']>this[N(0x196)]['offsetWidth']?this['designerCanvas'][N(0x182)]:this[N(0x196)]['offsetWidth'],f=this['designerCanvas'][N(0x162)]>this[N(0x196)][N(0x190)]?this['designerCanvas']['designerOffsetHeight']:this['designerCanvas']['offsetHeight'],g=d*(this[N(0x189)]['value']-0.5)*-0x2,i=f*(this['_sVert']['value']-0.5)*-0x2;this[N(0x196)]['canvasOffset']={'x':g,'y':i};}['_onWheel'](c){const O=p;if(!this[O(0x176)])return;c['preventDefault']();if(c[O(0x188)]){let d=this[O(0x19d)]['zoomFactor'];const e=c['deltaY']<0x0?0x1:-0x1;d*=Math[O(0x15e)](e*0.2);if(d<0.02)d=0.02;const f=this[O(0x196)][O(0x148)](c);this[O(0x196)][O(0x15f)](f,d);}else c['shiftKey']?(this[O(0x189)][O(0x154)]+=c['deltaY']/0x2710,this[O(0x17f)](null)):(this['_sVert'][O(0x154)]+=c[O(0x192)]/0x2710,this[O(0x17f)](null),this['_sHor'][O(0x154)]+=c['deltaX']/0x2710,this[O(0x17f)](null));}get['designerWidth'](){const P=p;return this[P(0x19d)]['designerWidth'];}set[p(0x144)](c){const Q=p;this[Q(0x19d)][Q(0x144)]=c;}get['designerHeight'](){const R=p;return this['_designerCanvas'][R(0x146)];}set[p(0x146)](c){const S=p;this[S(0x19d)]['designerHeight']=c;}set[p(0x16f)](c){this['_designerCanvas']['additionalStyles']=c;}['setDesignItems'](c){this['_designerCanvas']['setDesignItems'](c);}async[p(0x19c)](c){const T=p;this[T(0x19d)][T(0x19c)](c);}[p(0x158)](c){const U=p;return this[U(0x19d)]['canExecuteCommand'](c);}get['editingDocument'](){const V=p;return this[V(0x176)]?.['editingDocument'];}async['attachDocument'](c){const W=p;await c['commitPendingChanges']();if(!this[W(0x176)])this['initialize'](c[W(0x174)],c);else this[W(0x19d)]['attachDocument'](c),this[W(0x18c)]();}['detachDocument'](){const X=p;this[X(0x198)](),this['_toolbar'][X(0x197)]();for(const c of this[X(0x14c)]){c['dispose']?.(),c[X(0x16c)]();}return this['_configButtons']=[],this[X(0x19d)][X(0x156)]();}['dispose'](){const Y=p;this[Y(0x156)](),this[Y(0x19d)]['dispose'](),this['_toolbar']['dispose']();}['disconnectedCallback'](){this['_stopZoomRepeat']();}['initialize'](c,d){const Z=p;this[Z(0x174)]=c,this[Z(0x19d)][Z(0x15b)](c,d),this[Z(0x18c)]();}['initializeToolbar'](){const a0=p,c=this['serviceContainer'];this[a0(0x176)][a0(0x164)]=()=>this['detachDocument']();for(const d of this['_configButtons']){d[a0(0x197)]?.(),d[a0(0x16c)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e['provideButtons'](this,this['_designerCanvas'])){this[a0(0x14c)]['push'](f),this[a0(0x16a)][a0(0x161)](f);}}this['_toolbar']['initialize'](this[a0(0x174)],this);}['getDesignerHTML'](){const a1=p;return this[a1(0x151)]['getHtml']();}async['parseDesignerHTML'](c,d=![]){const a2=p;await this[a2(0x19d)]['whenReady'](),await this['editingDocument']['loadHtml'](c,d);}static[p(0x194)](c,d){const a3=p,e=new DesignerCanvas();e[a3(0x15b)](d);const f=e['serviceContainer']['getLastServiceWhere'](a3(0x14b),g=>g['constructor']==DefaultHtmlParserService);return e[a3(0x195)](f['createDesignItems'](c,e['serviceContainer'],e[a3(0x176)])),e;}}customElements['define'](p(0x18f),DesignerView);