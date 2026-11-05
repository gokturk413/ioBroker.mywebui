const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1b3))/0x1*(parseInt(n(0x19f))/0x2)+parseInt(n(0x15f))/0x3+-parseInt(n(0x16e))/0x4+-parseInt(n(0x188))/0x5+parseInt(n(0x180))/0x6+parseInt(n(0x176))/0x7+parseInt(n(0x19a))/0x8*(-parseInt(n(0x174))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe96a0));function b(c,d){c=c-0x15f;const e=a();let f=e[c];return f;}function a(){const H=['width','node-projects-web-component-designer-layer-depth-view','willChange','dispose','_createLayerTree','_onPointerUp','_getDomElement','7671510nJIGBc','cloneNode','releasePointerCapture','_empty','preventDefault','_translateX','template','_maxY','7129045BymzTt','rotateY(','getBoundingClientRect','designerCanvas','_layerDepthEntries','display','textContent','_scale','dragging','_prepareCloneTree','shadowRoot','_depthSlider','height','deltaY','ownerDocument','from','translate','removeEventListener','4943008zhTOqB','get','_scheduleRender','element','pan','19290gFtKpa','clientX','_rotateX','min','deg)\x20','childNodes','_scene','pointerup','depth','pointerdown','_reRender','_translateY','_maxX','rootDesignItem','adoptedStyleSheets','_prepareCloneElement','parentElement','style','_boundPointerUp','_applySceneTransform','55fdPSMK','button','rotateY','children','_contentChangedHandler','_onWheel','addEventListener','createDocumentFragment','viewport','map','_instanceServiceContainer','_fitScene','_zoomFactorChangedHandler','_depthValue','replaceChildren','3420690gDswqA','_viewport','px)\x20','_dragStart','scene','preserve-3d','_content','depthSlider','max','length','scale(','_updateLayerDepths','_restoreCachedInititalValues','node','_reRenderFlag','5516584WzFueW','clientY','content','remove','_resizeObserver','flex','9DXUbMc','_depthSpacing','10007235UixjGB','set','pointercancel'];a=function(){return H;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x1b0)]=css`
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
        }`;static [o(0x186)]=html`
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
        </div>`;['_viewport'];[o(0x1a5)];[o(0x165)];[o(0x183)];[o(0x193)];['_depthValue'];['_instanceServiceContainer'];[o(0x1b7)];['_zoomFactorChangedHandler'];[o(0x172)];[o(0x16d)]=![];['_maxX']=0x0;['_maxY']=0x0;[o(0x175)]=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;[o(0x1aa)]=0x0;[o(0x18f)]=0x1;['_layerDepthEntries']=[];['_dragStart'];['_boundPointerMove'];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x16b)](),this[p(0x160)]=this[p(0x17f)](p(0x1bb)),this[p(0x1a5)]=this[p(0x17f)](p(0x163)),this['_content']=this[p(0x17f)](p(0x170)),this['_empty']=this[p(0x17f)]('empty'),this['_depthSlider']=this['_getDomElement'](p(0x166)),this['_depthValue']=this[p(0x17f)]('depthValue'),this['_boundPointerMove']=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this[p(0x17e)]['bind'](this),this['_depthSlider'][p(0x1b9)]('input',()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider']['value']),this[q(0x1c0)][q(0x18e)]=this['_depthSpacing']+'px',this[q(0x16a)]();}),this['_viewport']['addEventListener'](p(0x1a8),c=>this['_onPointerDown'](c)),this[p(0x160)][p(0x1b9)]('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport']['addEventListener']('contextmenu',c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0x1be)]());}['ready'](){const r=o;this[r(0x172)]['observe'](this),this[r(0x1b2)]();}['_scheduleRender'](){const s=o;this[s(0x16d)]===![]&&(this[s(0x16d)]=!![],setTimeout(()=>this[s(0x1a9)](),0x32));}async[o(0x1a9)](){const t=o;if(!this[t(0x1bd)])return;const c=this['_instanceServiceContainer']['designerCanvas'];this['_copyAdoptedStyleSheets'](c[t(0x1ac)]);const d=c['designerPixelSize'];this['_maxX']=Math['max'](d['width'],0x1),this['_maxY']=Math[t(0x167)](d[t(0x194)],0x1);const e=this[t(0x17d)]();this[t(0x165)]['replaceChildren'](e['fragment']),this[t(0x1a5)][t(0x1b0)][t(0x179)]=this[t(0x1ab)]+'px',this[t(0x1a5)][t(0x1b0)][t(0x194)]=this[t(0x187)]+'px',this['_content']['style']['width']=this[t(0x1ab)]+'px',this['_content']['style']['height']=this[t(0x187)]+'px',this['_empty'][t(0x1b0)]['display']=e['count']?'none':t(0x173),this['_updateLayerDepths'](),this[t(0x1be)](),this[t(0x16d)]=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.[u(0x192)]??(e instanceof Document?e:d?.[u(0x196)]);this[u(0x192)]['adoptedStyleSheets']=f?.[u(0x1ad)]?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x1bd)][v(0x1ac)],d=document[v(0x1ba)]();let e=0x0;this[v(0x18c)]=[];for(const f of c[v(0x1b6)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element'][v(0x181)](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this[w(0x1ae)](d,e),e++;const f=Array[w(0x197)](c[w(0x19d)][w(0x1a4)]),g=Array[w(0x197)](d['childNodes']);for(const h of c['children']()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h[w(0x16c)]),j=g[i];j instanceof Element&&(e=this[w(0x191)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x1b0)]['transformStyle']='preserve-3d',c[x(0x1b0)][x(0x17b)]=x(0x198),this['_layerDepthEntries']['push']({'element':c,'depth':d}));}[o(0x16a)](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this[y(0x18c)][y(0x168)])return;const c=this[y(0x18c)][y(0x1bc)](i=>i[y(0x1a7)]),d=Math[y(0x1a2)](...c),e=Math['max'](...c),f=Math['max'](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[y(0x18c)]){h[y(0x177)](i[y(0x19d)],i[y(0x1a7)]);}for(const j of this[y(0x18c)]){let k=j['element']['parentElement'],l;while(k){l=h[y(0x19b)](k);if(l!==undefined)break;k=k[y(0x1af)];}const m=l===undefined?0x0:g(l);j[y(0x19d)][y(0x1b0)][y(0x198)]='0\x200\x20'+(g(j[y(0x1a7)])-m)+'px';}}[o(0x1be)](){const z=o,c=this['_viewport'][z(0x18a)]();if(!c['width']||!c['height']||!this[z(0x1ab)]||!this['_maxY'])return;const d=Math[z(0x1a2)](c[z(0x179)]/this['_maxX'],c[z(0x194)]/this['_maxY'])*0.72;this['_scale']=Math['min'](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this[z(0x1aa)]=0x0,this['_applySceneTransform']();}[o(0x1b2)](){const A=o;this['_scene']['style']['transformStyle']=A(0x164),this[A(0x165)]['style']['transformStyle']='preserve-3d',this['_scene'][A(0x1b0)]['transform']='translate(-50%,\x20-50%)\x20'+'translate('+this['_translateX']+'px,\x20'+this['_translateY']+A(0x161)+A(0x169)+this['_scale']+')\x20'+'rotateX('+this[A(0x1a1)]+A(0x1a3)+A(0x189)+this['_rotateY']+'deg)',this['_content'][A(0x1b0)]['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this[B(0x193)]||c['button']!==0x0&&c['button']!==0x1&&c['button']!==0x2)return;this[B(0x162)]={'x':c[B(0x1a0)],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this[B(0x185)],'translateY':this[B(0x1aa)],'pan':c[B(0x1b4)]===0x1||c[B(0x1b4)]===0x2||c['shiftKey']},this[B(0x160)]['classList']['add']('dragging'),this[B(0x160)]['setPointerCapture'](c['pointerId']),this[B(0x160)][B(0x1b9)]('pointermove',this['_boundPointerMove']),this['_viewport'][B(0x1b9)](B(0x1a6),this[B(0x1b1)]),this['_viewport']['addEventListener']('pointercancel',this[B(0x1b1)]),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this[C(0x162)])return;const d=c[C(0x1a0)]-this[C(0x162)]['x'],e=c[C(0x16f)]-this[C(0x162)]['y'];this[C(0x162)][C(0x19e)]?(this['_translateX']=this[C(0x162)]['translateX']+d,this[C(0x1aa)]=this[C(0x162)]['translateY']+e):(this['_rotateY']=this[C(0x162)][C(0x1b5)]+d*0.35,this['_rotateX']=Math[C(0x1a2)](0x55,Math[C(0x167)](-0x55,this['_dragStart']['rotateX']-e*0.35))),this['_applySceneTransform'](),c[C(0x184)]();}['_onPointerUp'](c){const D=o;this[D(0x162)]=null,this['_viewport']['classList'][D(0x171)](D(0x190)),this['_viewport'][D(0x182)](c['pointerId']),this['_viewport'][D(0x199)]('pointermove',this['_boundPointerMove']),this[D(0x160)][D(0x199)](D(0x1a6),this['_boundPointerUp']),this[D(0x160)][D(0x199)](D(0x178),this[D(0x1b1)]);}[o(0x1b8)](c){const E=o,d=c[E(0x195)]<0x0?1.08:0.92;this[E(0x18f)]=Math[E(0x1a2)](0x6,Math[E(0x167)](0.03,this[E(0x18f)]*d)),this['_applySceneTransform'](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this['_contentChangedHandler']?.[F(0x17c)](),this[F(0x1bf)]?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[F(0x1bd)][F(0x18b)]['onZoomFactorChanged']['on'](()=>{const G=F;this[G(0x19c)]();}),this[F(0x1b7)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x19c)]()):(this[F(0x165)][F(0x1c1)](),this[F(0x18c)]=[],this[F(0x183)]['style'][F(0x18d)]='flex');}}customElements['define'](o(0x17a),LayerDepthView);