const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x19e))/0x1+-parseInt(n(0x1a7))/0x2*(parseInt(n(0x1cb))/0x3)+parseInt(n(0x1b0))/0x4+parseInt(n(0x1be))/0x5+parseInt(n(0x1a4))/0x6+-parseInt(n(0x1f5))/0x7*(-parseInt(n(0x1f0))/0x8)+-parseInt(n(0x1d4))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd7a16));function a(){const H=['_updateLayerDepths','childNodes','dispose','classList','depth','pointerup','get','10086912DFxihe','Element','_getDomElement','parentElement','deg)','style','appendChild','_maxX','_boundPointerUp','none','_contentChangedHandler','pointerdown','instanceServiceContainer','_viewport','pan','depthValue','_copyAdoptedStyleSheets','_maxY','getBoundingClientRect','observe','_empty','textContent','node','_scheduleRender','preventDefault','preserve-3d','_rotateY','min','672fxoSUk','rotateY','from','push','_translateY','12908VTuoPK','releasePointerCapture','fragment','target','removeEventListener','_depthSpacing','flex','map','addEventListener','_dragStart','scale(','pointerId','1400337HNpNRY','pointermove','rotateX','width','deg)\x20','set','8890842fTzGHk','clientX','_onWheel','478uqZcEr','_prepareCloneTree','element','_onPointerUp','_translateX','_resizeObserver','content','shiftKey','dragging','3597556UQvixU','nodeType','pointercancel','translateY','_applySceneTransform','height','designerCanvas','_onPointerDown','_content','_reRenderFlag','_scene','input','max','_scale','4357905LlYsdC','deltaY','0\x200\x20','replaceChildren','_depthValue','_createLayerTree','_layerDepthEntries','transformStyle','transform','_depthSlider','_boundPointerMove','shadowRoot','_instanceServiceContainer','42fvLGPU','button'];a=function(){return H;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0x19c;const e=a();let f=e[c];return f;}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x1d9)]=css`
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
        </div>`;['_viewport'];['_scene'];['_content'];[o(0x1e8)];[o(0x1c7)];['_depthValue'];['_instanceServiceContainer'];[o(0x1de)];['_zoomFactorChangedHandler'];['_resizeObserver'];[o(0x1b9)]=![];['_maxX']=0x0;[o(0x1e5)]=0x0;[o(0x1fa)]=0x24;['_rotateX']=0x0;['_rotateY']=0x0;[o(0x1ab)]=0x0;[o(0x1f4)]=0x0;[o(0x1bd)]=0x1;[o(0x1c4)]=[];[o(0x1fe)];[o(0x1c8)];['_boundPointerUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_viewport']=this[p(0x1d6)]('viewport'),this[p(0x1ba)]=this['_getDomElement']('scene'),this[p(0x1b8)]=this[p(0x1d6)](p(0x1ad)),this[p(0x1e8)]=this['_getDomElement']('empty'),this[p(0x1c7)]=this['_getDomElement']('depthSlider'),this[p(0x1c2)]=this[p(0x1d6)](p(0x1e3)),this[p(0x1c8)]=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this['_onPointerUp']['bind'](this),this[p(0x1c7)][p(0x1fd)](p(0x1bb),()=>{const q=p;this['_depthSpacing']=Number(this[q(0x1c7)]['value']),this['_depthValue']['textContent']=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this[p(0x1e1)][p(0x1fd)](p(0x1df),c=>this[p(0x1b7)](c)),this[p(0x1e1)]['addEventListener']('wheel',c=>this[p(0x1a6)](c),{'passive':![]}),this['_viewport'][p(0x1fd)]('contextmenu',c=>c[p(0x1ec)]()),this[p(0x1ac)]=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this[r(0x1ac)][r(0x1e7)](this),this[r(0x1b4)]();}[o(0x1eb)](){const s=o;this[s(0x1b9)]===![]&&(this[s(0x1b9)]=!![],setTimeout(()=>this['_reRender'](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this['_instanceServiceContainer']['designerCanvas'];this[t(0x1e4)](c['rootDesignItem']);const d=c['designerPixelSize'];this[t(0x1db)]=Math['max'](d[t(0x1a1)],0x1),this[t(0x1e5)]=Math[t(0x1bc)](d['height'],0x1);const e=this[t(0x1c3)]();this['_content'][t(0x1c1)](e[t(0x1f7)]),this[t(0x1ba)]['style']['width']=this['_maxX']+'px',this[t(0x1ba)][t(0x1d9)]['height']=this[t(0x1e5)]+'px',this['_content']['style']['width']=this[t(0x1db)]+'px',this[t(0x1b8)]['style']['height']=this['_maxY']+'px',this['_empty'][t(0x1d9)]['display']=e['count']?t(0x1dd):t(0x1fb),this['_updateLayerDepths'](),this['_fitScene'](),this['_reRenderFlag']=![];}[o(0x1e4)](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this[u(0x1c9)]['adoptedStyleSheets']=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x1ca)]['rootDesignItem'],d=document['createDocumentFragment']();let e=0x0;this[v(0x1c4)]=[];for(const f of c['children']()){if(f[v(0x1b1)]!==NodeType[v(0x1d5)])continue;const g=f[v(0x1a9)]['cloneNode'](!![]);d[v(0x1da)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0x1f2)](c[w(0x1a9)][w(0x1ce)]),g=Array['from'](d['childNodes']);for(const h of c['children']()){if(h['nodeType']!==NodeType[w(0x1d5)])continue;const i=f['findIndex'](k=>k===h[w(0x1ea)]),j=g[i];j instanceof Element&&(e=this[w(0x1a8)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x1d9)]['transformStyle']=x(0x1ed),c[x(0x1d9)]['willChange']='translate',this['_layerDepthEntries'][x(0x1f3)]({'element':c,'depth':d}));}[o(0x1cd)](){const y=o;this['_depthValue'][y(0x1e9)]=this['_depthSpacing']+'px';if(!this[y(0x1c4)]['length'])return;const c=this['_layerDepthEntries'][y(0x1fc)](i=>i['depth']),d=Math['min'](...c),e=Math['max'](...c),f=Math[y(0x1bc)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x1fa)]*0x2,h=new Map();for(const i of this[y(0x1c4)]){h[y(0x1a3)](i[y(0x1a9)],i[y(0x1d1)]);}for(const j of this['_layerDepthEntries']){let k=j['element']['parentElement'],l;while(k){l=h[y(0x1d3)](k);if(l!==undefined)break;k=k[y(0x1d7)];}const m=l===undefined?0x0:g(l);j['element'][y(0x1d9)]['translate']=y(0x1c0)+(g(j['depth'])-m)+'px';}}['_fitScene'](){const z=o,c=this[z(0x1e1)][z(0x1e6)]();if(!c['width']||!c[z(0x1b5)]||!this[z(0x1db)]||!this['_maxY'])return;const d=Math[z(0x1ef)](c['width']/this[z(0x1db)],c['height']/this[z(0x1e5)])*0.72;this['_scale']=Math[z(0x1ef)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this[z(0x1b4)]();}['_applySceneTransform'](){const A=o;this['_scene']['style']['transformStyle']='preserve-3d',this['_content'][A(0x1d9)][A(0x1c5)]=A(0x1ed),this[A(0x1ba)]['style']['transform']='translate(-50%,\x20-50%)\x20'+'translate('+this[A(0x1ab)]+'px,\x20'+this[A(0x1f4)]+'px)\x20'+A(0x19c)+this['_scale']+')\x20'+'rotateX('+this['_rotateX']+A(0x1a2)+'rotateY('+this['_rotateY']+A(0x1d8),this['_content']['style'][A(0x1c6)]='';}[o(0x1b7)](c){const B=o;if(c[B(0x1f8)]===this['_depthSlider']||c['button']!==0x0&&c[B(0x1cc)]!==0x1&&c[B(0x1cc)]!==0x2)return;this[B(0x1fe)]={'x':c[B(0x1a5)],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this[B(0x1ee)],'translateX':this[B(0x1ab)],'translateY':this['_translateY'],'pan':c[B(0x1cc)]===0x1||c[B(0x1cc)]===0x2||c[B(0x1ae)]},this['_viewport']['classList']['add']('dragging'),this['_viewport']['setPointerCapture'](c[B(0x19d)]),this[B(0x1e1)][B(0x1fd)]('pointermove',this[B(0x1c8)]),this['_viewport']['addEventListener'](B(0x1d2),this['_boundPointerUp']),this['_viewport']['addEventListener'](B(0x1b2),this['_boundPointerUp']),c[B(0x1ec)]();}['_onPointerMove'](c){const C=o;if(!this[C(0x1fe)])return;const d=c['clientX']-this['_dragStart']['x'],e=c['clientY']-this[C(0x1fe)]['y'];this['_dragStart'][C(0x1e2)]?(this[C(0x1ab)]=this['_dragStart']['translateX']+d,this['_translateY']=this['_dragStart'][C(0x1b3)]+e):(this[C(0x1ee)]=this[C(0x1fe)][C(0x1f1)]+d*0.35,this['_rotateX']=Math['min'](0x55,Math['max'](-0x55,this['_dragStart'][C(0x1a0)]-e*0.35))),this[C(0x1b4)](),c['preventDefault']();}[o(0x1aa)](c){const D=o;this['_dragStart']=null,this['_viewport'][D(0x1d0)]['remove'](D(0x1af)),this['_viewport'][D(0x1f6)](c['pointerId']),this['_viewport'][D(0x1f9)](D(0x19f),this[D(0x1c8)]),this[D(0x1e1)]['removeEventListener']('pointerup',this[D(0x1dc)]),this['_viewport'][D(0x1f9)]('pointercancel',this[D(0x1dc)]);}[o(0x1a6)](c){const E=o,d=c[E(0x1bf)]<0x0?1.08:0.92;this[E(0x1bd)]=Math['min'](0x6,Math[E(0x1bc)](0.03,this['_scale']*d)),this[E(0x1b4)](),c['preventDefault']();}set[o(0x1e0)](c){const F=o;this[F(0x1de)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[F(0x1cf)](),this['_instanceServiceContainer']=c,this[F(0x1ca)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][F(0x1b6)]['onZoomFactorChanged']['on'](()=>{const G=F;this[G(0x1eb)]();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x1eb)]()):(this['_content'][F(0x1c1)](),this[F(0x1c4)]=[],this[F(0x1e8)][F(0x1d9)]['display']=F(0x1fb));}}customElements['define']('node-projects-web-component-designer-layer-depth-view',LayerDepthView);