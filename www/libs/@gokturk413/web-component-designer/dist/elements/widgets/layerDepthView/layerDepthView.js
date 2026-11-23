const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x16e))/0x1*(parseInt(n(0x15a))/0x2)+parseInt(n(0x19e))/0x3+-parseInt(n(0x1af))/0x4+parseInt(n(0x195))/0x5*(-parseInt(n(0x15e))/0x6)+parseInt(n(0x18d))/0x7+-parseInt(n(0x15d))/0x8+-parseInt(n(0x191))/0x9*(-parseInt(n(0x160))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xea288));function a(){const H=['appendChild','releasePointerCapture','_scene','rotateY(','removeEventListener','max','adoptedStyleSheets','element','rotateX','_viewport','translateX','dragging','_maxX','175722koiudJ','pointerdown','_prepareCloneElement','10297488TgsswO','6okrHYU','pointerId','9140PyMknS','0\x200\x20','_depthSpacing','_depthValue','display','_zoomFactorChangedHandler','dispose','parentElement','_reRender','_resizeObserver','wheel','onZoomFactorChanged','_dragStart','translate(-50%,\x20-50%)\x20','11yYHamL','translate','_updateLayerDepths','_translateY','observe','willChange','_boundPointerMove','node','depthValue','remove','_onWheel','pointercancel','designerCanvas','findIndex','_content','_layerDepthEntries','px)\x20','_scale','min','button','shadowRoot','fragment','createDocumentFragment','_depthSlider','_onPointerDown','count','target','nodeType','transformStyle','_maxY','_onPointerUp','5296137GAoUlJ','_getDomElement','addEventListener','_instanceServiceContainer','40266enaDRB','depth','_rotateX','_translateX','5687865glAtGK','preventDefault','_scheduleRender','map','_restoreCachedInititalValues','_reRenderFlag','_fitScene','define','clientY','397212DoVlvK','deg)','classList','width','preserve-3d','height','_empty','transform','childNodes','pointermove','designerPixelSize','Element','cloneNode','ready','_applySceneTransform','pointerup','_prepareCloneTree','2511556WZXcrN','getBoundingClientRect','deg)\x20','style','deltaY','ownerDocument','flex','pan','_boundPointerUp'];a=function(){return H;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x153;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_viewport'];[o(0x1ba)];[o(0x17c)];[o(0x1a4)];['_depthSlider'];['_depthValue'];[o(0x190)];['_contentChangedHandler'];[o(0x165)];[o(0x169)];['_reRenderFlag']=![];[o(0x159)]=0x0;[o(0x18b)]=0x0;[o(0x162)]=0x24;[o(0x193)]=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0x17f)]=0x1;[o(0x17d)]=[];['_dragStart'];[o(0x174)];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x199)](),this[p(0x156)]=this[p(0x18e)]('viewport'),this['_scene']=this[p(0x18e)]('scene'),this[p(0x17c)]=this[p(0x18e)]('content'),this[p(0x1a4)]=this['_getDomElement']('empty'),this[p(0x185)]=this[p(0x18e)]('depthSlider'),this[p(0x163)]=this['_getDomElement'](p(0x176)),this[p(0x174)]=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this[p(0x18c)]['bind'](this),this[p(0x185)]['addEventListener']('input',()=>{const q=p;this[q(0x162)]=Number(this[q(0x185)]['value']),this['_depthValue']['textContent']=this['_depthSpacing']+'px',this[q(0x170)]();}),this[p(0x156)][p(0x18f)](p(0x15b),c=>this['_onPointerDown'](c)),this[p(0x156)][p(0x18f)](p(0x16a),c=>this['_onWheel'](c),{'passive':![]}),this[p(0x156)][p(0x18f)]('contextmenu',c=>c['preventDefault']()),this[p(0x169)]=new ResizeObserver(()=>this['_fitScene']());}[o(0x1ab)](){const r=o;this['_resizeObserver'][r(0x172)](this),this[r(0x1ac)]();}[o(0x197)](){const s=o;this['_reRenderFlag']===![]&&(this[s(0x19a)]=!![],setTimeout(()=>this[s(0x168)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0x190)])return;const c=this['_instanceServiceContainer']['designerCanvas'];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c[t(0x1a8)];this['_maxX']=Math[t(0x1bd)](d[t(0x1a1)],0x1),this['_maxY']=Math['max'](d['height'],0x1);const e=this['_createLayerTree']();this['_content']['replaceChildren'](e[t(0x183)]),this[t(0x1ba)]['style']['width']=this[t(0x159)]+'px',this[t(0x1ba)][t(0x1b2)]['height']=this[t(0x18b)]+'px',this['_content'][t(0x1b2)][t(0x1a1)]=this[t(0x159)]+'px',this[t(0x17c)][t(0x1b2)]['height']=this[t(0x18b)]+'px',this[t(0x1a4)]['style']['display']=e[t(0x187)]?'none':t(0x1b5),this[t(0x170)](),this[t(0x19b)](),this[t(0x19a)]=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.[u(0x154)],e=c?.['usableContainer'],f=d?.[u(0x182)]??(e instanceof Document?e:d?.[u(0x1b4)]);this[u(0x182)][u(0x153)]=f?.[u(0x153)]?[...f[u(0x153)]]:[];}['_createLayerTree'](){const v=o,c=this['_instanceServiceContainer']['rootDesignItem'],d=document[v(0x184)]();let e=0x0;this[v(0x17d)]=[];for(const f of c['children']()){if(f['nodeType']!==NodeType[v(0x1a9)])continue;const g=f['element'][v(0x1aa)](!![]);d[v(0x1b8)](g),e=this[v(0x1ae)](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this[w(0x15c)](d,e),e++;const f=Array['from'](c['element']['childNodes']),g=Array['from'](d[w(0x1a6)]);for(const h of c['children']()){if(h[w(0x189)]!==NodeType['Element'])continue;const i=f[w(0x17b)](k=>k===h[w(0x175)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0x15c)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x1b2)]['transformStyle']='preserve-3d',c[x(0x1b2)][x(0x173)]='translate',this['_layerDepthEntries']['push']({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this['_layerDepthEntries']['length'])return;const c=this[y(0x17d)][y(0x198)](i=>i[y(0x192)]),d=Math[y(0x180)](...c),e=Math[y(0x1bd)](...c),f=Math[y(0x1bd)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x162)]*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h['set'](i['element'],i['depth']);}for(const j of this[y(0x17d)]){let k=j['element'][y(0x167)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k[y(0x167)];}const m=l===undefined?0x0:g(l);j[y(0x154)][y(0x1b2)][y(0x16f)]=y(0x161)+(g(j['depth'])-m)+'px';}}[o(0x19b)](){const z=o,c=this['_viewport'][z(0x1b0)]();if(!c[z(0x1a1)]||!c[z(0x1a3)]||!this[z(0x159)]||!this[z(0x18b)])return;const d=Math[z(0x180)](c['width']/this['_maxX'],c['height']/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[z(0x1bd)](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this['_applySceneTransform']();}['_applySceneTransform'](){const A=o;this['_scene'][A(0x1b2)]['transformStyle']=A(0x1a2),this['_content'][A(0x1b2)][A(0x18a)]='preserve-3d',this[A(0x1ba)]['style']['transform']=A(0x16d)+'translate('+this[A(0x194)]+'px,\x20'+this['_translateY']+A(0x17e)+'scale('+this['_scale']+')\x20'+'rotateX('+this['_rotateX']+A(0x1b1)+A(0x1bb)+this['_rotateY']+A(0x19f),this['_content'][A(0x1b2)][A(0x1a5)]='';}[o(0x186)](c){const B=o;if(c[B(0x188)]===this[B(0x185)]||c[B(0x181)]!==0x0&&c['button']!==0x1&&c[B(0x181)]!==0x2)return;this[B(0x16c)]={'x':c['clientX'],'y':c[B(0x19d)],'rotateX':this[B(0x193)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c['button']===0x1||c[B(0x181)]===0x2||c['shiftKey']},this[B(0x156)]['classList']['add']('dragging'),this[B(0x156)]['setPointerCapture'](c['pointerId']),this[B(0x156)][B(0x18f)](B(0x1a7),this[B(0x174)]),this['_viewport'][B(0x18f)](B(0x1ad),this[B(0x1b7)]),this['_viewport'][B(0x18f)]('pointercancel',this[B(0x1b7)]),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this['_dragStart']['x'],e=c['clientY']-this['_dragStart']['y'];this[C(0x16c)][C(0x1b6)]?(this[C(0x194)]=this['_dragStart'][C(0x157)]+d,this[C(0x171)]=this[C(0x16c)]['translateY']+e):(this['_rotateY']=this[C(0x16c)]['rotateY']+d*0.35,this[C(0x193)]=Math['min'](0x55,Math[C(0x1bd)](-0x55,this[C(0x16c)][C(0x155)]-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this[D(0x16c)]=null,this['_viewport'][D(0x1a0)][D(0x177)](D(0x158)),this[D(0x156)][D(0x1b9)](c[D(0x15f)]),this[D(0x156)]['removeEventListener'](D(0x1a7),this[D(0x174)]),this['_viewport']['removeEventListener']('pointerup',this[D(0x1b7)]),this[D(0x156)][D(0x1bc)](D(0x179),this[D(0x1b7)]);}[o(0x178)](c){const E=o,d=c[E(0x1b3)]<0x0?1.08:0.92;this[E(0x17f)]=Math['min'](0x6,Math[E(0x1bd)](0.03,this['_scale']*d)),this['_applySceneTransform'](),c[E(0x196)]();}set['instanceServiceContainer'](c){const F=o;this['_contentChangedHandler']?.[F(0x166)](),this['_zoomFactorChangedHandler']?.[F(0x166)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][F(0x17a)][F(0x16b)]['on'](()=>{this['_scheduleRender']();}),this['_contentChangedHandler']=this[F(0x190)]['onContentChanged']['on'](()=>{const G=F;this[G(0x197)]();}),this['_scheduleRender']()):(this[F(0x17c)]['replaceChildren'](),this[F(0x17d)]=[],this['_empty']['style'][F(0x164)]='flex');}}customElements[o(0x19c)]('node-projects-web-component-designer-layer-depth-view',LayerDepthView);