const o=b;function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x207))/0x1*(-parseInt(n(0x1c3))/0x2)+-parseInt(n(0x1dd))/0x3*(parseInt(n(0x1d3))/0x4)+parseInt(n(0x20a))/0x5+parseInt(n(0x1b9))/0x6*(-parseInt(n(0x1ec))/0x7)+parseInt(n(0x1df))/0x8+parseInt(n(0x1c8))/0x9*(parseInt(n(0x1bc))/0xa)+parseInt(n(0x1de))/0xb*(-parseInt(n(0x20e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x72d9f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const H=['1249352VhcWMe','_fitScene','pan','removeEventListener','_scheduleRender','162uygxih','addEventListener','appendChild','element','_boundPointerMove','_onPointerUp','px,\x20','setPointerCapture','preserve-3d','depthSlider','clientX','24452SIxcvK','fragment','_boundPointerUp','_translateX','_scale','node','_onPointerDown','parentElement','_depthSlider','designerPixelSize','183pVFbWq','36388LsMBtJ','5101440jPYyMl','max','display','translate(','_translateY','releasePointerCapture','getBoundingClientRect','remove','from','value','rotateY','_empty','instanceServiceContainer','136010TpSJJz','_getDomElement','_createLayerTree','nodeType','_copyAdoptedStyleSheets','wheel','_depthValue','translateX','depth','_rotateX','button','_reRender','pointerId','push','viewport','_onWheel','_resizeObserver','_applySceneTransform','clientY','Element','translate','input','findIndex','get','translate(-50%,\x20-50%)\x20','template','_rotateY','1XXQcgl','childNodes','pointerup','1000660vXQSBC','designerCanvas','_viewport','preventDefault','4128fCAmTN','length','content','adoptedStyleSheets','_onPointerMove','_scene','scale(','deg)\x20','none','min','_maxX','_depthSpacing','_content','_instanceServiceContainer','transform','_restoreCachedInititalValues','_layerDepthEntries','height','pointercancel','children','_contentChangedHandler','define','_reRenderFlag','style','onContentChanged','textContent','width','replaceChildren','target','6dwRBjg','node-projects-web-component-designer-layer-depth-view','_zoomFactorChangedHandler','299010XZDpDU','_prepareCloneElement','pointerdown','translateY','_dragStart','_updateLayerDepths','rootDesignItem'];a=function(){return H;};return a();}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x1b3)]=css`
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
        }`;static [o(0x205)]=html`
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
        </div>`;[o(0x20c)];[o(0x1a1)];[o(0x1a8)];[o(0x1ea)];['_depthSlider'];['_depthValue'];[o(0x1a9)];[o(0x1b0)];[o(0x1bb)];['_resizeObserver'];[o(0x1b2)]=![];[o(0x1a6)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;[o(0x1f5)]=0x0;['_rotateY']=0x0;[o(0x1d6)]=0x0;[o(0x1e3)]=0x0;[o(0x1d7)]=0x1;[o(0x1ac)]=[];['_dragStart'];[o(0x1cc)];[o(0x1d5)];constructor(){const p=o;super(),this[p(0x1ab)](),this[p(0x20c)]=this['_getDomElement'](p(0x1fa)),this[p(0x1a1)]=this['_getDomElement']('scene'),this[p(0x1a8)]=this['_getDomElement'](p(0x210)),this[p(0x1ea)]=this['_getDomElement']('empty'),this[p(0x1db)]=this[p(0x1ed)](p(0x1d1)),this[p(0x1f2)]=this[p(0x1ed)]('depthValue'),this[p(0x1cc)]=this[p(0x1a0)]['bind'](this),this['_boundPointerUp']=this['_onPointerUp']['bind'](this),this[p(0x1db)]['addEventListener'](p(0x201),()=>{const q=p;this[q(0x1a7)]=Number(this['_depthSlider'][q(0x1e8)]),this[q(0x1f2)][q(0x1b5)]=this[q(0x1a7)]+'px',this['_updateLayerDepths']();}),this['_viewport'][p(0x1c9)](p(0x1be),c=>this[p(0x1d9)](c)),this[p(0x20c)]['addEventListener'](p(0x1f1),c=>this['_onWheel'](c),{'passive':![]}),this['_viewport'][p(0x1c9)]('contextmenu',c=>c['preventDefault']()),this[p(0x1fc)]=new ResizeObserver(()=>this[p(0x1c4)]());}['ready'](){const r=o;this['_resizeObserver']['observe'](this),this[r(0x1fd)]();}['_scheduleRender'](){const s=o;this[s(0x1b2)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0x1f7)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0x1a9)])return;const c=this[t(0x1a9)][t(0x20b)];this[t(0x1f0)](c[t(0x1c2)]);const d=c[t(0x1dc)];this[t(0x1a6)]=Math[t(0x1e0)](d[t(0x1b6)],0x1),this['_maxY']=Math['max'](d['height'],0x1);const e=this['_createLayerTree']();this['_content'][t(0x1b7)](e[t(0x1d4)]),this[t(0x1a1)]['style'][t(0x1b6)]=this['_maxX']+'px',this['_scene']['style'][t(0x1ad)]=this['_maxY']+'px',this[t(0x1a8)][t(0x1b3)][t(0x1b6)]=this[t(0x1a6)]+'px',this['_content'][t(0x1b3)][t(0x1ad)]=this['_maxY']+'px',this[t(0x1ea)]['style'][t(0x1e1)]=e['count']?t(0x1a4):'flex',this[t(0x1c1)](),this[t(0x1c4)](),this['_reRenderFlag']=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.[u(0x1cb)],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot']['adoptedStyleSheets']=f?.[u(0x19f)]?[...f['adoptedStyleSheets']]:[];}[o(0x1ee)](){const v=o,c=this['_instanceServiceContainer']['rootDesignItem'],d=document['createDocumentFragment']();let e=0x0;this[v(0x1ac)]=[];for(const f of c[v(0x1af)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d[v(0x1ca)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this[w(0x1bd)](d,e),e++;const f=Array[w(0x1e7)](c['element'][w(0x208)]),g=Array['from'](d[w(0x208)]);for(const h of c['children']()){if(h[w(0x1ef)]!==NodeType[w(0x1ff)])continue;const i=f[w(0x202)](k=>k===h[w(0x1d8)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0x1bd)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']=x(0x1d0),c['style']['willChange']=x(0x200),this[x(0x1ac)][x(0x1f9)]({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this[y(0x1f2)][y(0x1b5)]=this['_depthSpacing']+'px';if(!this['_layerDepthEntries'][y(0x20f)])return;const c=this[y(0x1ac)]['map'](i=>i['depth']),d=Math[y(0x1a5)](...c),e=Math[y(0x1e0)](...c),f=Math['max'](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h['set'](i[y(0x1cb)],i[y(0x1f4)]);}for(const j of this[y(0x1ac)]){let k=j['element']['parentElement'],l;while(k){l=h[y(0x203)](k);if(l!==undefined)break;k=k[y(0x1da)];}const m=l===undefined?0x0:g(l);j['element'][y(0x1b3)]['translate']='0\x200\x20'+(g(j['depth'])-m)+'px';}}[o(0x1c4)](){const z=o,c=this[z(0x20c)][z(0x1e5)]();if(!c['width']||!c[z(0x1ad)]||!this[z(0x1a6)]||!this['_maxY'])return;const d=Math[z(0x1a5)](c['width']/this[z(0x1a6)],c[z(0x1ad)]/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[z(0x1e0)](d,0.05),0x4),this[z(0x1d6)]=0x0,this['_translateY']=0x0,this['_applySceneTransform']();}[o(0x1fd)](){const A=o;this['_scene'][A(0x1b3)]['transformStyle']='preserve-3d',this[A(0x1a8)]['style']['transformStyle']=A(0x1d0),this['_scene']['style'][A(0x1aa)]=A(0x204)+A(0x1e2)+this['_translateX']+A(0x1ce)+this['_translateY']+'px)\x20'+A(0x1a2)+this[A(0x1d7)]+')\x20'+'rotateX('+this[A(0x1f5)]+A(0x1a3)+'rotateY('+this[A(0x206)]+'deg)',this[A(0x1a8)]['style'][A(0x1aa)]='';}[o(0x1d9)](c){const B=o;if(c[B(0x1b8)]===this[B(0x1db)]||c['button']!==0x0&&c[B(0x1f6)]!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c[B(0x1fe)],'rotateX':this['_rotateX'],'rotateY':this[B(0x206)],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c[B(0x1f6)]===0x1||c[B(0x1f6)]===0x2||c['shiftKey']},this['_viewport']['classList']['add']('dragging'),this[B(0x20c)][B(0x1cf)](c['pointerId']),this[B(0x20c)][B(0x1c9)]('pointermove',this['_boundPointerMove']),this[B(0x20c)][B(0x1c9)]('pointerup',this[B(0x1d5)]),this[B(0x20c)][B(0x1c9)](B(0x1ae),this['_boundPointerUp']),c[B(0x20d)]();}[o(0x1a0)](c){const C=o;if(!this['_dragStart'])return;const d=c[C(0x1d2)]-this['_dragStart']['x'],e=c[C(0x1fe)]-this['_dragStart']['y'];this['_dragStart'][C(0x1c5)]?(this[C(0x1d6)]=this[C(0x1c0)][C(0x1f3)]+d,this['_translateY']=this[C(0x1c0)][C(0x1bf)]+e):(this['_rotateY']=this['_dragStart'][C(0x1e9)]+d*0.35,this['_rotateX']=Math['min'](0x55,Math[C(0x1e0)](-0x55,this[C(0x1c0)]['rotateX']-e*0.35))),this[C(0x1fd)](),c[C(0x20d)]();}[o(0x1cd)](c){const D=o;this[D(0x1c0)]=null,this['_viewport']['classList'][D(0x1e6)]('dragging'),this[D(0x20c)][D(0x1e4)](c[D(0x1f8)]),this['_viewport'][D(0x1c6)]('pointermove',this[D(0x1cc)]),this[D(0x20c)]['removeEventListener'](D(0x209),this['_boundPointerUp']),this[D(0x20c)]['removeEventListener'](D(0x1ae),this[D(0x1d5)]);}[o(0x1fb)](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this['_scale']=Math['min'](0x6,Math[E(0x1e0)](0.03,this[E(0x1d7)]*d)),this[E(0x1fd)](),c[E(0x20d)]();}set[o(0x1eb)](c){const F=o;this['_contentChangedHandler']?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[F(0x1a9)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x1b0)]=this['_instanceServiceContainer'][F(0x1b4)]['on'](()=>{const G=F;this[G(0x1c7)]();}),this[F(0x1c7)]()):(this['_content']['replaceChildren'](),this[F(0x1ac)]=[],this[F(0x1ea)][F(0x1b3)][F(0x1e1)]='flex');}}customElements[o(0x1b1)](o(0x1ba),LayerDepthView);