const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1a2))/0x1+parseInt(n(0x14a))/0x2+-parseInt(n(0x189))/0x3+-parseInt(n(0x153))/0x4*(parseInt(n(0x15c))/0x5)+-parseInt(n(0x164))/0x6+-parseInt(n(0x182))/0x7*(parseInt(n(0x18d))/0x8)+parseInt(n(0x18b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1bb4));function a(){const G=['createDocumentFragment','viewport','translateX','_resizeObserver','shadowRoot','ownerDocument','_scale','clientX','_rotateY','_copyAdoptedStyleSheets','dispose','parentElement','pointerId','push','style','_fitScene','_viewport','rotateY','get','_empty','contextmenu','nodeType','2807XvvUQw','_updateLayerDepths','pointerdown','_contentChangedHandler','adoptedStyleSheets','designerCanvas','node','693942FYNxIO','childNodes','8576892wKzDpz','preserve-3d','9688SSkKup','designerPixelSize','findIndex','Element','content','_maxY','button','addEventListener','_onPointerMove','_reRender','deltaY','textContent','appendChild','none','bind','_content','_boundPointerUp','clientY','pointerup','instanceServiceContainer','display','239930uacHhD','transformStyle','_depthSpacing','px)\x20','observe','_depthSlider','_depthValue','_translateX','deg)','empty','max','_instanceServiceContainer','min','pointermove','_createLayerTree','_getDomElement','_boundPointerMove','transform','pointercancel','2580364aWumdR','input','_dragStart','removeEventListener','depth','height','width','element','preventDefault','20WRjoUH','px,\x20','_zoomFactorChangedHandler','cloneNode','_maxX','_applySceneTransform','_scheduleRender','_layerDepthEntries','map','517820lIsXZl','scene','scale(','_translateY','_reRenderFlag','count','_scene','flex','636258itudDB','_rotateX','fragment','add','depthValue','_onPointerUp','rotateY(','replaceChildren'];a=function(){return G;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
          overflow: hidden;
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          isolation: isolate;
          background: var(--wcd-layer-depth-view-background, #f3f4f6);
          color: var(--wcd-layer-depth-view-text-color, #111827);
          user-select: none;
          -webkit-user-select: none;
        }
        #viewport {
          position: absolute;
          inset: 0;
          overflow: hidden;
          cursor: grab;
          z-index: 0;
          perspective: 9000px;
        }
        #viewport.dragging {
          cursor: grabbing;
        }
        #scene {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 0;
          transform-style: preserve-3d;
          transform-origin: center center;
        }
        #content {
          position: absolute;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
          transform-origin: top left;
          pointer-events: none;
        }
        #content, #content * {
          transform-style: preserve-3d;
        }
        #empty {
          position: absolute;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          color: var(--wcd-layer-depth-view-muted-color, #4b5563);
          font: 13px sans-serif;
          pointer-events: none;
        }
        #controls {
          position: absolute;
          left: 8px;
          right: 8px;
          top: 8px;
          z-index: 2147483647;
          display: grid;
          grid-template-columns: auto minmax(100px, 1fr) auto;
          align-items: center;
          gap: 8px;
          box-sizing: border-box;
          padding: 7px 9px;
          background: var(--wcd-layer-depth-view-card-background, rgba(255, 255, 255, 0.92));
          border: 1px solid var(--wcd-layer-depth-view-card-border-color, rgba(17, 24, 39, 0.14));
          font: 12px sans-serif;
          pointer-events: auto;
          z-index: 1;
          position: relative;
        }
        #depthSlider {
          width: 100%;
          min-width: 0;
        }
        #depthValue {
          min-width: 42px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }`;static ['template']=html`
        <div id="controls">
          <span>Depth</span>
          <input id="depthSlider" type="range" min="0" max="120" step="1" value="36">
          <span id="depthValue">36px</span>
        </div>
        <div id="viewport">
          <div id="scene">
            <div id="content"></div>
          </div>
          <div id="empty">No layers</div>
        </div>`;[o(0x17c)];[o(0x162)];['_content'];['_empty'];[o(0x1a7)];['_depthValue'];[o(0x142)];[o(0x185)];['_zoomFactorChangedHandler'];[o(0x16f)];[o(0x160)]=![];['_maxX']=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;[o(0x165)]=0x0;['_rotateY']=0x0;['_translateX']=0x0;[o(0x15f)]=0x0;[o(0x172)]=0x1;[o(0x15a)]=[];[o(0x14c)];['_boundPointerMove'];[o(0x19d)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x17c)]=this[p(0x146)](p(0x16d)),this['_scene']=this['_getDomElement'](p(0x15d)),this['_content']=this['_getDomElement'](p(0x191)),this['_empty']=this['_getDomElement'](p(0x140)),this['_depthSlider']=this['_getDomElement']('depthSlider'),this['_depthValue']=this['_getDomElement'](p(0x168)),this['_boundPointerMove']=this[p(0x195)][p(0x19b)](this),this['_boundPointerUp']=this['_onPointerUp']['bind'](this),this['_depthSlider'][p(0x194)](p(0x14b),()=>{const q=p;this[q(0x1a4)]=Number(this[q(0x1a7)]['value']),this[q(0x1a8)][q(0x198)]=this[q(0x1a4)]+'px',this['_updateLayerDepths']();}),this[p(0x17c)][p(0x194)](p(0x184),c=>this['_onPointerDown'](c)),this[p(0x17c)]['addEventListener']('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport'][p(0x194)](p(0x180),c=>c[p(0x152)]()),this[p(0x16f)]=new ResizeObserver(()=>this[p(0x17b)]());}['ready'](){const r=o;this[r(0x16f)][r(0x1a6)](this),this['_applySceneTransform']();}['_scheduleRender'](){const s=o;this[s(0x160)]===![]&&(this[s(0x160)]=!![],setTimeout(()=>this[s(0x196)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0x142)])return;const c=this['_instanceServiceContainer'][t(0x187)];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c[t(0x18e)];this[t(0x157)]=Math[t(0x141)](d['width'],0x1),this['_maxY']=Math[t(0x141)](d['height'],0x1);const e=this[t(0x145)]();this[t(0x19c)][t(0x16b)](e[t(0x166)]),this[t(0x162)]['style']['width']=this['_maxX']+'px',this['_scene'][t(0x17a)][t(0x14f)]=this[t(0x192)]+'px',this[t(0x19c)]['style'][t(0x150)]=this[t(0x157)]+'px',this['_content']['style']['height']=this[t(0x192)]+'px',this[t(0x17f)][t(0x17a)]['display']=e[t(0x161)]?t(0x19a):t(0x163),this['_updateLayerDepths'](),this[t(0x17b)](),this[t(0x160)]=![];}[o(0x175)](c){const u=o,d=c?.[u(0x151)],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x171)]);this[u(0x170)]['adoptedStyleSheets']=f?.['adoptedStyleSheets']?[...f[u(0x186)]]:[];}[o(0x145)](){const v=o,c=this[v(0x142)]['rootDesignItem'],d=document[v(0x16c)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c['children']()){if(f[v(0x181)]!==NodeType[v(0x190)])continue;const g=f['element'][v(0x156)](!![]);d[v(0x199)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array['from'](c['element']['childNodes']),g=Array['from'](d[w(0x18a)]);for(const h of c['children']()){if(h[w(0x181)]!==NodeType['Element'])continue;const i=f[w(0x18f)](k=>k===h[w(0x188)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']='preserve-3d',c['style']['willChange']='translate',this[x(0x15a)][x(0x179)]({'element':c,'depth':d}));}[o(0x183)](){const y=o;this[y(0x1a8)]['textContent']=this[y(0x1a4)]+'px';if(!this['_layerDepthEntries']['length'])return;const c=this['_layerDepthEntries'][y(0x15b)](i=>i['depth']),d=Math['min'](...c),e=Math[y(0x141)](...c),f=Math[y(0x141)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x1a4)]*0x2,h=new Map();for(const i of this[y(0x15a)]){h['set'](i['element'],i['depth']);}for(const j of this[y(0x15a)]){let k=j[y(0x151)]['parentElement'],l;while(k){l=h[y(0x17e)](k);if(l!==undefined)break;k=k[y(0x177)];}const m=l===undefined?0x0:g(l);j[y(0x151)][y(0x17a)]['translate']='0\x200\x20'+(g(j[y(0x14e)])-m)+'px';}}[o(0x17b)](){const z=o,c=this[z(0x17c)]['getBoundingClientRect']();if(!c['width']||!c['height']||!this['_maxX']||!this['_maxY'])return;const d=Math[z(0x143)](c['width']/this['_maxX'],c[z(0x14f)]/this['_maxY'])*0.72;this[z(0x172)]=Math[z(0x143)](Math[z(0x141)](d,0.05),0x4),this[z(0x13e)]=0x0,this[z(0x15f)]=0x0,this['_applySceneTransform']();}[o(0x158)](){const A=o;this['_scene']['style'][A(0x1a3)]=A(0x18c),this['_content'][A(0x17a)][A(0x1a3)]='preserve-3d',this[A(0x162)][A(0x17a)][A(0x148)]='translate(-50%,\x20-50%)\x20'+'translate('+this['_translateX']+A(0x154)+this[A(0x15f)]+A(0x1a5)+A(0x15e)+this['_scale']+')\x20'+'rotateX('+this[A(0x165)]+'deg)\x20'+A(0x16a)+this['_rotateY']+A(0x13f),this['_content']['style']['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this['_depthSlider']||c['button']!==0x0&&c[B(0x193)]!==0x1&&c['button']!==0x2)return;this[B(0x14c)]={'x':c[B(0x173)],'y':c['clientY'],'rotateX':this[B(0x165)],'rotateY':this[B(0x174)],'translateX':this['_translateX'],'translateY':this[B(0x15f)],'pan':c[B(0x193)]===0x1||c[B(0x193)]===0x2||c['shiftKey']},this['_viewport']['classList'][B(0x167)]('dragging'),this['_viewport']['setPointerCapture'](c['pointerId']),this['_viewport']['addEventListener'](B(0x144),this[B(0x147)]),this[B(0x17c)][B(0x194)](B(0x19f),this[B(0x19d)]),this[B(0x17c)]['addEventListener'](B(0x149),this['_boundPointerUp']),c[B(0x152)]();}['_onPointerMove'](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this[C(0x14c)]['x'],e=c[C(0x19e)]-this['_dragStart']['y'];this[C(0x14c)]['pan']?(this[C(0x13e)]=this[C(0x14c)][C(0x16e)]+d,this[C(0x15f)]=this['_dragStart']['translateY']+e):(this[C(0x174)]=this['_dragStart'][C(0x17d)]+d*0.35,this[C(0x165)]=Math['min'](0x55,Math[C(0x141)](-0x55,this['_dragStart']['rotateX']-e*0.35))),this[C(0x158)](),c['preventDefault']();}[o(0x169)](c){const D=o;this['_dragStart']=null,this[D(0x17c)]['classList']['remove']('dragging'),this[D(0x17c)]['releasePointerCapture'](c[D(0x178)]),this[D(0x17c)][D(0x14d)](D(0x144),this['_boundPointerMove']),this['_viewport'][D(0x14d)](D(0x19f),this['_boundPointerUp']),this[D(0x17c)]['removeEventListener'](D(0x149),this[D(0x19d)]);}['_onWheel'](c){const E=o,d=c[E(0x197)]<0x0?1.08:0.92;this['_scale']=Math[E(0x143)](0x6,Math['max'](0.03,this[E(0x172)]*d)),this[E(0x158)](),c[E(0x152)]();}set[o(0x1a0)](c){const F=o;this['_contentChangedHandler']?.[F(0x176)](),this['_zoomFactorChangedHandler']?.[F(0x176)](),this['_instanceServiceContainer']=c,this[F(0x142)]?(this[F(0x155)]=this[F(0x142)][F(0x187)]['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x185)]=this[F(0x142)]['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x159)]()):(this['_content']['replaceChildren'](),this[F(0x15a)]=[],this['_empty']['style'][F(0x1a1)]='flex');}}function b(c,d){c=c-0x13e;const e=a();let f=e[c];return f;}customElements['define']('node-projects-web-component-designer-layer-depth-view',LayerDepthView);