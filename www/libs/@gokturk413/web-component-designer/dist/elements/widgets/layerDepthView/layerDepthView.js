const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x179))/0x1*(parseInt(n(0x1df))/0x2)+parseInt(n(0x1cd))/0x3+-parseInt(n(0x1af))/0x4*(parseInt(n(0x1c4))/0x5)+-parseInt(n(0x1c5))/0x6+-parseInt(n(0x188))/0x7*(parseInt(n(0x191))/0x8)+parseInt(n(0x174))/0x9*(parseInt(n(0x1a6))/0xa)+-parseInt(n(0x1cc))/0xb*(-parseInt(n(0x17b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xab2bc));function b(c,d){c=c-0x173;const e=a();let f=e[c];return f;}function a(){const G=['none','preserve-3d','flex','rotateX(','shiftKey','replaceChildren','textContent','_boundPointerMove','fragment','min','105865pFiXfB','3720546EhRzSh','contextmenu','shadowRoot','node-projects-web-component-designer-layer-depth-view','display','_applySceneTransform','transformStyle','5704171WyeBjl','3280239HjTWzH','bind','style','observe','viewport','pointerup','template','button','appendChild','childNodes','_instanceServiceContainer','px)\x20','addEventListener','pointerdown','_rotateY','classList','_depthValue','Element','2LBzkoQ','rotateX','scale(','_content','_maxX','24813lEVhiw','dragging','_translateY','_fitScene','pan','750532iYigXb','content','60grisTi','_contentChangedHandler','adoptedStyleSheets','empty','transform','ready','dispose','getBoundingClientRect','_viewport','willChange','_zoomFactorChangedHandler','nodeType','_copyAdoptedStyleSheets','2857085cDDvkJ','element','_updateLayerDepths','parentElement','setPointerCapture','_maxY','deg)\x20','remove','_scale','24qbKXhf','_dragStart','_layerDepthEntries','_depthSlider','translate(','cloneNode','instanceServiceContainer','removeEventListener','_rotateX','_createLayerTree','_reRenderFlag','_resizeObserver','_scene','height','_boundPointerUp','0\x200\x20','from','_empty','ownerDocument','length','_restoreCachedInititalValues','3270uoziNd','depth','max','onContentChanged','width','preventDefault','rootDesignItem','releasePointerCapture','clientY','244cSVTSg','translate(-50%,\x20-50%)\x20','_prepareCloneTree','value','_onPointerMove','_translateX','pointercancel','_depthSpacing','_reRender','pointermove','_getDomElement'];a=function(){return G;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1d3)]=html`
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
        </div>`;['_viewport'];['_scene'];[o(0x1e2)];['_empty'];['_depthSlider'];['_depthValue'];[o(0x1d7)];[o(0x17c)];['_zoomFactorChangedHandler'];[o(0x19c)];[o(0x19b)]=![];['_maxX']=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;['_rotateX']=0x0;['_rotateY']=0x0;[o(0x1b4)]=0x0;[o(0x176)]=0x0;[o(0x190)]=0x1;[o(0x193)]=[];['_dragStart'];['_boundPointerMove'];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x1a5)](),this['_viewport']=this[p(0x1b9)](p(0x1d1)),this[p(0x19d)]=this['_getDomElement']('scene'),this[p(0x1e2)]=this[p(0x1b9)](p(0x17a)),this[p(0x1a2)]=this['_getDomElement'](p(0x17e)),this['_depthSlider']=this[p(0x1b9)]('depthSlider'),this[p(0x1dd)]=this['_getDomElement']('depthValue'),this[p(0x1c1)]=this[p(0x1b3)][p(0x1ce)](this),this[p(0x19f)]=this['_onPointerUp'][p(0x1ce)](this),this[p(0x194)][p(0x1d9)]('input',()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider'][q(0x1b2)]),this['_depthValue']['textContent']=this[q(0x1b6)]+'px',this[q(0x18a)]();}),this[p(0x183)][p(0x1d9)](p(0x1da),c=>this['_onPointerDown'](c)),this[p(0x183)][p(0x1d9)]('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport']['addEventListener'](p(0x1c6),c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0x177)]());}[o(0x180)](){const r=o;this[r(0x19c)][r(0x1d0)](this),this['_applySceneTransform']();}['_scheduleRender'](){const s=o;this[s(0x19b)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}async[o(0x1b7)](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this['_instanceServiceContainer']['designerCanvas'];this[t(0x187)](c['rootDesignItem']);const d=c['designerPixelSize'];this[t(0x173)]=Math['max'](d[t(0x1aa)],0x1),this[t(0x18d)]=Math[t(0x1a8)](d['height'],0x1);const e=this['_createLayerTree']();this[t(0x1e2)][t(0x1bf)](e[t(0x1c2)]),this[t(0x19d)][t(0x1cf)]['width']=this[t(0x173)]+'px',this['_scene'][t(0x1cf)][t(0x19e)]=this['_maxY']+'px',this[t(0x1e2)]['style'][t(0x1aa)]=this[t(0x173)]+'px',this['_content']['style']['height']=this['_maxY']+'px',this[t(0x1a2)]['style']['display']=e['count']?t(0x1ba):'flex',this['_updateLayerDepths'](),this[t(0x177)](),this[t(0x19b)]=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.[u(0x1c7)]??(e instanceof Document?e:d?.[u(0x1a3)]);this[u(0x1c7)][u(0x17d)]=f?.[u(0x17d)]?[...f[u(0x17d)]]:[];}[o(0x19a)](){const v=o,c=this['_instanceServiceContainer'][v(0x1ac)],d=document['createDocumentFragment']();let e=0x0;this['_layerDepthEntries']=[];for(const f of c['children']()){if(f['nodeType']!==NodeType[v(0x1de)])continue;const g=f[v(0x189)][v(0x196)](!![]);d[v(0x1d5)](g),e=this[v(0x1b1)](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array['from'](c['element']['childNodes']),g=Array[w(0x1a1)](d[w(0x1d6)]);for(const h of c['children']()){if(h[w(0x186)]!==NodeType[w(0x1de)])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x1cf)]['transformStyle']='preserve-3d',c['style'][x(0x184)]='translate',this[x(0x193)]['push']({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this[y(0x1dd)][y(0x1c0)]=this[y(0x1b6)]+'px';if(!this['_layerDepthEntries'][y(0x1a4)])return;const c=this[y(0x193)]['map'](i=>i[y(0x1a7)]),d=Math['min'](...c),e=Math[y(0x1a8)](...c),f=Math[y(0x1a8)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[y(0x193)]){h['set'](i[y(0x189)],i[y(0x1a7)]);}for(const j of this['_layerDepthEntries']){let k=j['element'][y(0x18b)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[y(0x189)][y(0x1cf)]['translate']=y(0x1a0)+(g(j['depth'])-m)+'px';}}['_fitScene'](){const z=o,c=this[z(0x183)][z(0x182)]();if(!c['width']||!c[z(0x19e)]||!this[z(0x173)]||!this[z(0x18d)])return;const d=Math['min'](c['width']/this[z(0x173)],c['height']/this[z(0x18d)])*0.72;this[z(0x190)]=Math['min'](Math['max'](d,0.05),0x4),this[z(0x1b4)]=0x0,this['_translateY']=0x0,this[z(0x1ca)]();}[o(0x1ca)](){const A=o;this[A(0x19d)]['style']['transformStyle']=A(0x1bb),this[A(0x1e2)]['style'][A(0x1cb)]=A(0x1bb),this['_scene'][A(0x1cf)][A(0x17f)]=A(0x1b0)+A(0x195)+this['_translateX']+'px,\x20'+this[A(0x176)]+A(0x1d8)+A(0x1e1)+this[A(0x190)]+')\x20'+A(0x1bd)+this[A(0x199)]+A(0x18e)+'rotateY('+this['_rotateY']+'deg)',this['_content'][A(0x1cf)]['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this[B(0x194)]||c[B(0x1d4)]!==0x0&&c[B(0x1d4)]!==0x1&&c[B(0x1d4)]!==0x2)return;this[B(0x192)]={'x':c['clientX'],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this[B(0x176)],'pan':c['button']===0x1||c['button']===0x2||c[B(0x1be)]},this[B(0x183)]['classList']['add'](B(0x175)),this[B(0x183)][B(0x18c)](c['pointerId']),this[B(0x183)]['addEventListener']('pointermove',this['_boundPointerMove']),this[B(0x183)][B(0x1d9)](B(0x1d2),this['_boundPointerUp']),this['_viewport'][B(0x1d9)](B(0x1b5),this['_boundPointerUp']),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this[C(0x192)])return;const d=c['clientX']-this['_dragStart']['x'],e=c[C(0x1ae)]-this['_dragStart']['y'];this['_dragStart'][C(0x178)]?(this[C(0x1b4)]=this[C(0x192)]['translateX']+d,this[C(0x176)]=this[C(0x192)]['translateY']+e):(this[C(0x1db)]=this[C(0x192)]['rotateY']+d*0.35,this['_rotateX']=Math[C(0x1c3)](0x55,Math['max'](-0x55,this['_dragStart'][C(0x1e0)]-e*0.35))),this[C(0x1ca)](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this['_dragStart']=null,this['_viewport'][D(0x1dc)][D(0x18f)]('dragging'),this['_viewport'][D(0x1ad)](c['pointerId']),this['_viewport']['removeEventListener'](D(0x1b8),this[D(0x1c1)]),this[D(0x183)]['removeEventListener']('pointerup',this[D(0x19f)]),this['_viewport'][D(0x198)]('pointercancel',this['_boundPointerUp']);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this['_scale']=Math['min'](0x6,Math['max'](0.03,this['_scale']*d)),this[E(0x1ca)](),c[E(0x1ab)]();}set[o(0x197)](c){const F=o;this[F(0x17c)]?.[F(0x181)](),this['_zoomFactorChangedHandler']?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this[F(0x185)]=this[F(0x1d7)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this['_contentChangedHandler']=this['_instanceServiceContainer'][F(0x1a9)]['on'](()=>{this['_scheduleRender']();}),this['_scheduleRender']()):(this['_content'][F(0x1bf)](),this[F(0x193)]=[],this[F(0x1a2)][F(0x1cf)][F(0x1c9)]=F(0x1bc));}}customElements['define'](o(0x1c8),LayerDepthView);