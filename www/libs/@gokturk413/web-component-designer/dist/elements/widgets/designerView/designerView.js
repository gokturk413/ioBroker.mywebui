const p=b;(function(c,d){const o=b,e=c();while(!![]){try{const f=-parseInt(o(0x1c5))/0x1+-parseInt(o(0x1c1))/0x2*(parseInt(o(0x1a0))/0x3)+-parseInt(o(0x179))/0x4*(parseInt(o(0x17d))/0x5)+parseInt(o(0x1c4))/0x6*(parseInt(o(0x193))/0x7)+parseInt(o(0x1d4))/0x8*(parseInt(o(0x1bf))/0x9)+-parseInt(o(0x1ab))/0xa+parseInt(o(0x191))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9db6b));import{css,html,BaseCustomWebComponentConstructorAppend}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x179;const e=a();let f=e[c];return f;}import{DesignerCanvas}from'./designerCanvas.js';function a(){const a7=['scrollbar-input','remove','_designerCanvas','1223624PavryT','dispose','setPointerCapture','_stopZoomRepeat','decrementLarge','key','canExecuteCommand','designerOffsetWidth','round','start','editingDocument','zoomReset','button','instanceServiceContainer','detachDocument','canvasOffset','zoomFactor','setDesignItems','_onWheel','oncontextmenu','preventDefault','4916jNrKxM','lowertoolbar','executeCommand','decrementSmall','4190zqKfna','afterbegin','onblur','aria-pressed','insertAdjacentElement','initialize','_zoomInput','onkeydown','additionalStyles','provideButtons','getHtml','alignOnSnap','toString','_onScrollbar','_zoomAroundViewportCenter','_sHor','zoomInput','pointerId','height','getDesignerHTML','25857095AwgHJf','addDesignItems','7mjPGiC','node-projects-designer-view','max','_configureZoomButton','alignOnGrid','style','parseDesignerHTML','raster\x20size','ctrlKey','_toolbar','attachDocument','offsetHeight','onwheel','480UudsdP','deltaY','createElement','_zoomPointerId','addEventListener','onpointercancel','outer','getLastServiceWhere','loadHtml','offsetWidth','target','8246150LUxYqt','_zoomPointerTarget','createDesignItems','_configButtons','alignSnap','_lowertoolbar','shiftKey','push','onZoomFactorChanged','htmlParserService','_sVert','zoomToFit','canvas','detail','_zoomHoldRepeater','initializeToolbar','appendChild','_zoomStep','designerWidth','designerOffsetHeight','9RKmUOe','zoomIncrease','6266LfwwMp','serviceContainer','_getDomElement','5755944wIapHh','461130XsaPEe','onclick','onpointerup','Wheel','value','designerHeight','select','readOnly','deltaX','classList','designerCanvas','slot'];a=function(){return a7;};return a();}import{DefaultHtmlParserService}from'../../services/htmlParserService/DefaultHtmlParserService.js';import{EventNames}from'../../../enums/EventNames.js';import{DesignerToolbar}from'./tools/toolBar/DesignerToolbar.js';import{getCanvasPointAtViewportCenter,ZoomHoldRepeater}from'./ZoomHelper.js';export class DesignerView extends BaseCustomWebComponentConstructorAppend{[p(0x1b5)];['_sHor'];get['serviceContainer'](){const q=p;return this[q(0x1d3)][q(0x1c2)];}set[p(0x1c2)](c){const r=p;this[r(0x1d3)][r(0x1c2)]=c;}get['instanceServiceContainer'](){const s=p;return this[s(0x1d3)]['instanceServiceContainer'];}set['instanceServiceContainer'](c){const t=p;if(!c['editingDocument'])throw new Error('Attach\x20a\x20container\x20owned\x20by\x20an\x20EditingDocument.');this[t(0x1d3)]['attachDocument'](c[t(0x1de)]),this[t(0x1ba)]();}[p(0x1d3)];get[p(0x1cf)](){const u=p;return this[u(0x1d3)];}get['readOnly'](){const v=p;return this['_designerCanvas'][v(0x1cc)];}set['readOnly'](c){this['_designerCanvas']['readOnly']=c;}['_configButtons']=[];['_zoomInput'];['_lowertoolbar'];['_toolbar'];['_zoomHoldRepeater']=new ZoomHoldRepeater();[p(0x1a3)];['_zoomPointerTarget'];static [p(0x198)]=css`
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
    </div>`;constructor(c=![]){const w=p;super(),this['_restoreCachedInititalValues'](),this[w(0x1b5)]=this[w(0x1c3)]('s-vert'),this['_sHor']=this[w(0x1c3)]('s-hor');const d=this[w(0x1c3)](w(0x1a6));this[w(0x1d3)]=new DesignerCanvas(c),this['_designerCanvas']['id']=w(0x1b7),this[w(0x1d3)][w(0x1bb)](document[w(0x1a2)](w(0x1d0))),d['insertAdjacentElement'](w(0x17e),this[w(0x1d3)]),this[w(0x19c)]=new DesignerToolbar(),this['_toolbar']['id']='tool-bar',this[w(0x1b5)][w(0x181)]('afterend',this['_toolbar']),this['_designerCanvas'][w(0x1b3)]['on'](()=>{const x=w;this['_zoomInput']['value']=Math[x(0x1dc)](this[x(0x1d3)]['zoomFactor']*0x64)+'%';const l=this[x(0x1cf)]['canvasOffset'],m=this['designerCanvas']['designerOffsetWidth']>this['designerCanvas'][x(0x1a9)]?this['designerCanvas']['designerOffsetWidth']:this[x(0x1cf)]['offsetWidth'],n=this[x(0x1cf)][x(0x1be)]>this[x(0x1cf)]['offsetHeight']?this[x(0x1cf)]['designerOffsetHeight']:this['designerCanvas'][x(0x19e)];this[x(0x18c)]['value']=l['x']/(-0x2*m)+0.5,this['_sVert']['value']=l['y']/(-0x2*n)+0.5;}),this[w(0x183)]=this['_getDomElement'](w(0x18d)),this[w(0x183)][w(0x184)]=l=>{const y=w;if(l[y(0x1d9)]=='Enter')this['_zoomAroundViewportCenter'](parseFloat(this[y(0x183)]['value'])/0x64);},this[w(0x183)][w(0x17f)]=()=>{const z=w;this[z(0x18b)](parseFloat(this[z(0x183)][z(0x1c9)])/0x64);},this[w(0x183)]['onclick']=this['_zoomInput'][w(0x1cb)];let e=this[w(0x1c3)](w(0x1c0));this[w(0x196)](e,0x1);let f=this['_getDomElement']('zoomDecrease');this['_configureZoomButton'](f,-0x1);let g=this['_getDomElement'](w(0x1df));g[w(0x1c6)]=()=>{const A=w;this[A(0x1df)]();};let h=this[w(0x1c3)]('zoomFit');h[w(0x1c6)]=()=>{const B=w;this[B(0x1b6)]();},this['addEventListener'](EventNames[w(0x1c8)],l=>this[w(0x1e6)](l));const i=(l,m)=>{const C=w;l[C(0x1ce)]['toggle']('selected',m),l['setAttribute'](C(0x180),String(m));},j=this['_getDomElement'](w(0x1af));j[w(0x1c6)]=()=>{const D=w;this['_designerCanvas'][D(0x188)]=!this[D(0x1d3)]['alignOnSnap'],i(j,this['_designerCanvas']['alignOnSnap']);},i(j,this['_designerCanvas']['alignOnSnap']),j['oncontextmenu']=l=>{const E=w;l[E(0x1e8)]();};const k=this['_getDomElement']('alignGrid');k['onclick']=()=>{const F=w;this[F(0x1d3)][F(0x197)]=!this['_designerCanvas'][F(0x197)],i(k,this[F(0x1d3)][F(0x197)]);},i(k,this[w(0x1d3)]['alignOnGrid']),k['oncontextmenu']=l=>{const G=w;l['preventDefault']();let m=prompt(G(0x19a),this['designerCanvas']['gridSize'][G(0x189)]());if(m){let n=parseInt(m);if(n>0x0)this[G(0x1cf)]['gridSize']=n;}},this[w(0x1b0)]=this['_getDomElement'](w(0x17a)),this[w(0x1b0)][w(0x19f)]=l=>l['stopPropagation'](),this['_sVert'][w(0x1a4)](w(0x1d1),l=>this[w(0x18a)](l)),this['_sHor']['addEventListener']('scrollbar-input',l=>this['_onScrollbar'](l));}[p(0x1df)](){const H=p;this['_designerCanvas'][H(0x1e3)]={'x':0x0,'y':0x0},this[H(0x1d3)]['zoomFactor']=0x1,this['_sVert']['value']=0.5,this[H(0x18c)]['value']=0.5,this['_zoomInput']['value']=Math['round'](this[H(0x1d3)]['zoomFactor']*0x64)+'%';}[p(0x1b6)](){const I=p;this['_designerCanvas'][I(0x1b6)]();}[p(0x18b)](c){const J=p;if(!this['instanceServiceContainer'])return;if(!Number['isFinite'](c)||c<=0x0)return;const d=this[J(0x1d3)]['outerRect'],e=getCanvasPointAtViewportCenter(d['width'],d[J(0x18f)],this[J(0x1d3)]['zoomFactor'],this[J(0x1d3)]['canvasOffset']);this[J(0x1d3)]['zoomPoint'](e,c);}[p(0x196)](c,d){const M=p;c['onclick']=e=>{const K=b;if(e[K(0x1b8)]===0x0)this['_zoomStep'](d);},c['onpointerdown']=e=>{const L=b;if(!e['isPrimary']||e[L(0x1e0)]!=0x0)return;this[L(0x1d7)](),this[L(0x1a3)]=e[L(0x18e)],this[L(0x1ac)]=c;try{c[L(0x1d6)](e['pointerId']);}catch{}this['_zoomHoldRepeater'][L(0x1dd)](()=>this[L(0x1bc)](d),()=>this['_zoomStep'](d,0x4)),e[L(0x1e8)]();},c[M(0x1c7)]=e=>this['_stopZoomRepeat'](e[M(0x18e)]),c[M(0x1a5)]=e=>this['_stopZoomRepeat'](e[M(0x18e)]),c['onlostpointercapture']=e=>this[M(0x1d7)](e[M(0x18e)]),c[M(0x1e7)]=e=>e[M(0x1e8)]();}['_zoomStep'](c,d=0x1){const N=p,e=this['_designerCanvas'][N(0x1e4)];if(c>0x0){const f=(e>0.1?0.1:0.01)/d;this['_zoomAroundViewportCenter'](e+f);}else{const g=(e>0.11?0.1:0.01)/d;this[N(0x18b)](Math[N(0x195)](e-g,0.001));}}['_stopZoomRepeat'](c){const O=p;if(c!=null&&c!==this[O(0x1a3)])return;const d=this[O(0x1a3)],e=this['_zoomPointerTarget'];this[O(0x1a3)]=null,this[O(0x1ac)]=null,this[O(0x1b9)]['stop']();if(e&&d!=null)try{if(e['hasPointerCapture'](d))e['releasePointerCapture'](d);}catch{}}['_onScrollbar'](c){const P=p;if(!this[P(0x1e1)])return;if(c?.[P(0x1b8)]=='incrementLarge')c[P(0x1aa)][P(0x1c9)]+=0.25;else{if(c?.['detail']==P(0x1d8))c[P(0x1aa)][P(0x1c9)]-=0.25;else{if(c?.['detail']=='incrementSmall')c[P(0x1aa)]['value']+=0.05;else{if(c?.[P(0x1b8)]==P(0x17c))c[P(0x1aa)][P(0x1c9)]-=0.05;}}}const d=this[P(0x1cf)][P(0x1db)]>this[P(0x1cf)]['offsetWidth']?this[P(0x1cf)][P(0x1db)]:this[P(0x1cf)]['offsetWidth'],f=this['designerCanvas'][P(0x1be)]>this['designerCanvas']['offsetHeight']?this[P(0x1cf)]['designerOffsetHeight']:this[P(0x1cf)][P(0x19e)],g=d*(this['_sHor'][P(0x1c9)]-0.5)*-0x2,i=f*(this[P(0x1b5)][P(0x1c9)]-0.5)*-0x2;this['designerCanvas'][P(0x1e3)]={'x':g,'y':i};}[p(0x1e6)](c){const Q=p;if(!this['instanceServiceContainer'])return;c[Q(0x1e8)]();if(c[Q(0x19b)]){let d=this[Q(0x1d3)][Q(0x1e4)];const e=c[Q(0x1a1)]<0x0?0x1:-0x1;d*=Math['exp'](e*0.2);if(d<0.02)d=0.02;const f=this[Q(0x1cf)]['getNormalizedEventCoordinates'](c);this['designerCanvas']['zoomTowardsPoint'](f,d);}else c[Q(0x1b1)]?(this['_sHor'][Q(0x1c9)]+=c['deltaY']/0x2710,this[Q(0x18a)](null)):(this['_sVert'][Q(0x1c9)]+=c['deltaY']/0x2710,this[Q(0x18a)](null),this['_sHor'][Q(0x1c9)]+=c[Q(0x1cd)]/0x2710,this[Q(0x18a)](null));}get['designerWidth'](){const R=p;return this['_designerCanvas'][R(0x1bd)];}set[p(0x1bd)](c){const S=p;this[S(0x1d3)][S(0x1bd)]=c;}get['designerHeight'](){const T=p;return this['_designerCanvas'][T(0x1ca)];}set[p(0x1ca)](c){const U=p;this[U(0x1d3)][U(0x1ca)]=c;}set['additionalStyles'](c){const V=p;this['_designerCanvas'][V(0x185)]=c;}[p(0x1e5)](c){const W=p;this[W(0x1d3)][W(0x1e5)](c);}async['executeCommand'](c){const X=p;this[X(0x1d3)][X(0x17b)](c);}['canExecuteCommand'](c){const Y=p;return this['_designerCanvas'][Y(0x1da)](c);}get[p(0x1de)](){return this['instanceServiceContainer']?.['editingDocument'];}async['attachDocument'](c){const Z=p;await c['commitPendingChanges']();if(!this[Z(0x1e1)])this['initialize'](c['serviceContainer'],c);else this[Z(0x1d3)][Z(0x19d)](c),this[Z(0x1ba)]();}['detachDocument'](){const a0=p;this[a0(0x1d7)](),this[a0(0x19c)][a0(0x1d5)]();for(const c of this['_configButtons']){c['dispose']?.(),c['remove']();}return this['_configButtons']=[],this['_designerCanvas'][a0(0x1e2)]();}['dispose'](){const a1=p;this['detachDocument'](),this['_designerCanvas']['dispose'](),this['_toolbar'][a1(0x1d5)]();}['disconnectedCallback'](){this['_stopZoomRepeat']();}[p(0x182)](c,d){const a2=p;this['serviceContainer']=c,this[a2(0x1d3)][a2(0x182)](c,d),this['initializeToolbar']();}['initializeToolbar'](){const a3=p,c=this['serviceContainer'];this[a3(0x1e1)]['detachView']=()=>this[a3(0x1e2)]();for(const d of this[a3(0x1ae)]){d['dispose']?.(),d[a3(0x1d2)]();}this['_configButtons']=[];if(c['designViewConfigButtons'])for(let e of c['designViewConfigButtons']){for(let f of e[a3(0x186)](this,this[a3(0x1d3)])){this['_configButtons'][a3(0x1b2)](f),this['_lowertoolbar'][a3(0x1bb)](f);}}this['_toolbar']['initialize'](this['serviceContainer'],this);}[p(0x190)](){const a4=p;return this['editingDocument'][a4(0x187)]();}async[p(0x199)](c,d=![]){const a5=p;await this[a5(0x1d3)]['whenReady'](),await this[a5(0x1de)][a5(0x1a8)](c,d);}static['wrapInDesigner'](c,d){const a6=p,e=new DesignerCanvas();e['initialize'](d);const f=e[a6(0x1c2)][a6(0x1a7)](a6(0x1b4),g=>g['constructor']==DefaultHtmlParserService);return e[a6(0x192)](f[a6(0x1ad)](c,e['serviceContainer'],e['instanceServiceContainer'])),e;}}customElements['define'](p(0x194),DesignerView);