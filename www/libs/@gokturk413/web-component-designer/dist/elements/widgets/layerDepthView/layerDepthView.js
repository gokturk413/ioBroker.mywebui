function b(c,d){c=c-0xbe;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x113))/0x1*(-parseInt(n(0xe5))/0x2)+-parseInt(n(0x11b))/0x3*(parseInt(n(0xf6))/0x4)+-parseInt(n(0x10c))/0x5+parseInt(n(0x104))/0x6+-parseInt(n(0x11e))/0x7+-parseInt(n(0xde))/0x8+parseInt(n(0xf7))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd8909));function a(){const I=['element','display','createDocumentFragment','instanceServiceContainer','translate','_updateLayerDepths','_createLayerTree','textContent','_depthValue','deg)','height','_viewport','_onPointerUp','scale(','translateY','preventDefault','_scene','depthSlider','_onWheel','ready','style','clientX','addEventListener','button','childNodes','929648bFcjcL','replaceChildren','target','_depthSlider','_contentChangedHandler','max','px,\x20','11638QDYOlm','_reRenderFlag','removeEventListener','clientY','map','children','_scale','pointerup','designerCanvas','node','adoptedStyleSheets','shiftKey','empty','width','_instanceServiceContainer','_depthSpacing','_onPointerDown','4buRCwM','6451677KMCPNw','_restoreCachedInititalValues','_empty','pointerId','_rotateY','fragment','from','node-projects-web-component-designer-layer-depth-view','transformStyle','dragging','_zoomFactorChangedHandler','_getDomElement','translateX','9740676fPhxCU','_fitScene','_copyAdoptedStyleSheets','min','_prepareCloneTree','classList','_scheduleRender','rootDesignItem','8556635gAlGjn','_boundPointerUp','input','_applySceneTransform','_resizeObserver','_dragStart','rotateY','84yUPOuU','_layerDepthEntries','_translateX','findIndex','pointermove','define','parentElement','depth','310533XfLfYN','observe','_translateY','77014FIYnAM','_onPointerMove','0\x200\x20','pan','deltaY','rotateX','shadowRoot','_reRender','setPointerCapture','pointercancel','nodeType','_prepareCloneElement','_maxY','_content','_maxX','_boundPointerMove','transform','wheel','_rotateX'];a=function(){return I;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0xd0)];[o(0xd5)];[o(0xbf)];['_empty'];[o(0xe1)];[o(0xcd)];[o(0xf3)];['_contentChangedHandler'];['_zoomFactorChangedHandler'];[o(0x110)];[o(0xe6)]=![];[o(0xc0)]=0x0;['_maxY']=0x0;[o(0xf4)]=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;['_scale']=0x1;[o(0x114)]=[];[o(0x111)];['_boundPointerMove'];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0xf8)](),this[p(0xd0)]=this['_getDomElement']('viewport'),this[p(0xd5)]=this['_getDomElement']('scene'),this[p(0xbf)]=this[p(0x102)]('content'),this[p(0xf9)]=this[p(0x102)](p(0xf1)),this['_depthSlider']=this[p(0x102)](p(0xd6)),this[p(0xcd)]=this['_getDomElement']('depthValue'),this[p(0xc1)]=this[p(0x11f)]['bind'](this),this[p(0x10d)]=this[p(0xd1)]['bind'](this),this[p(0xe1)][p(0xdb)](p(0x10e),()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider']['value']),this[q(0xcd)][q(0xcc)]=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this['_viewport'][p(0xdb)]('pointerdown',c=>this['_onPointerDown'](c)),this[p(0xd0)]['addEventListener'](p(0xc3),c=>this[p(0xd7)](c),{'passive':![]}),this['_viewport']['addEventListener']('contextmenu',c=>c[p(0xd4)]()),this[p(0x110)]=new ResizeObserver(()=>this['_fitScene']());}[o(0xd8)](){const r=o;this[r(0x110)][r(0x11c)](this),this['_applySceneTransform']();}['_scheduleRender'](){const s=o;this[s(0xe6)]===![]&&(this[s(0xe6)]=!![],setTimeout(()=>this[s(0x125)](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0xf3)][t(0xed)];this['_copyAdoptedStyleSheets'](c[t(0x10b)]);const d=c['designerPixelSize'];this[t(0xc0)]=Math[t(0xe3)](d['width'],0x1),this['_maxY']=Math['max'](d[t(0xcf)],0x1);const e=this['_createLayerTree']();this[t(0xbf)][t(0xdf)](e[t(0xfc)]),this[t(0xd5)][t(0xd9)][t(0xf2)]=this['_maxX']+'px',this[t(0xd5)]['style'][t(0xcf)]=this[t(0xbe)]+'px',this[t(0xbf)][t(0xd9)]['width']=this[t(0xc0)]+'px',this['_content']['style']['height']=this[t(0xbe)]+'px',this['_empty']['style']['display']=e['count']?'none':'flex',this[t(0xca)](),this[t(0x105)](),this['_reRenderFlag']=![];}[o(0x106)](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.[u(0x124)]??(e instanceof Document?e:d?.['ownerDocument']);this[u(0x124)][u(0xef)]=f?.['adoptedStyleSheets']?[...f[u(0xef)]]:[];}[o(0xcb)](){const v=o,c=this['_instanceServiceContainer'][v(0x10b)],d=document[v(0xc7)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[v(0xea)]()){if(f[v(0x128)]!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}[o(0x108)](c,d,e){const w=o;this[w(0x129)](d,e),e++;const f=Array['from'](c['element'][w(0xdd)]),g=Array[w(0xfd)](d[w(0xdd)]);for(const h of c['children']()){if(h[w(0x128)]!==NodeType['Element'])continue;const i=f[w(0x116)](k=>k===h[w(0xee)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0x129)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0xd9)][x(0xff)]='preserve-3d',c[x(0xd9)]['willChange']='translate',this[x(0x114)]['push']({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this[y(0xcd)][y(0xcc)]=this[y(0xf4)]+'px';if(!this['_layerDepthEntries']['length'])return;const c=this['_layerDepthEntries'][y(0xe9)](i=>i['depth']),d=Math['min'](...c),e=Math[y(0xe3)](...c),f=Math['max'](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h['set'](i['element'],i['depth']);}for(const j of this[y(0x114)]){let k=j['element'][y(0x119)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k[y(0x119)];}const m=l===undefined?0x0:g(l);j[y(0xc5)]['style'][y(0xc9)]=y(0x120)+(g(j[y(0x11a)])-m)+'px';}}[o(0x105)](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c[z(0xf2)]||!c[z(0xcf)]||!this['_maxX']||!this['_maxY'])return;const d=Math['min'](c['width']/this[z(0xc0)],c['height']/this['_maxY'])*0.72;this['_scale']=Math[z(0x107)](Math[z(0xe3)](d,0.05),0x4),this[z(0x115)]=0x0,this['_translateY']=0x0,this[z(0x10f)]();}['_applySceneTransform'](){const A=o;this[A(0xd5)][A(0xd9)][A(0xff)]='preserve-3d',this['_content'][A(0xd9)][A(0xff)]='preserve-3d',this['_scene']['style'][A(0xc2)]='translate(-50%,\x20-50%)\x20'+'translate('+this['_translateX']+A(0xe4)+this[A(0x11d)]+'px)\x20'+A(0xd2)+this['_scale']+')\x20'+'rotateX('+this['_rotateX']+'deg)\x20'+'rotateY('+this['_rotateY']+A(0xce),this['_content']['style']['transform']='';}[o(0xf5)](c){const B=o;if(c[B(0xe0)]===this[B(0xe1)]||c['button']!==0x0&&c[B(0xdc)]!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c[B(0xda)],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this[B(0xfb)],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c[B(0xdc)]===0x1||c[B(0xdc)]===0x2||c[B(0xf0)]},this[B(0xd0)][B(0x109)]['add'](B(0x100)),this[B(0xd0)][B(0x126)](c['pointerId']),this['_viewport'][B(0xdb)](B(0x117),this['_boundPointerMove']),this['_viewport'][B(0xdb)]('pointerup',this['_boundPointerUp']),this[B(0xd0)][B(0xdb)](B(0x127),this['_boundPointerUp']),c[B(0xd4)]();}['_onPointerMove'](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this['_dragStart']['x'],e=c[C(0xe8)]-this['_dragStart']['y'];this[C(0x111)][C(0x121)]?(this[C(0x115)]=this[C(0x111)][C(0x103)]+d,this['_translateY']=this['_dragStart'][C(0xd3)]+e):(this['_rotateY']=this[C(0x111)][C(0x112)]+d*0.35,this[C(0xc4)]=Math['min'](0x55,Math['max'](-0x55,this[C(0x111)][C(0x123)]-e*0.35))),this['_applySceneTransform'](),c[C(0xd4)]();}[o(0xd1)](c){const D=o;this[D(0x111)]=null,this['_viewport']['classList']['remove']('dragging'),this[D(0xd0)]['releasePointerCapture'](c[D(0xfa)]),this[D(0xd0)][D(0xe7)](D(0x117),this['_boundPointerMove']),this['_viewport']['removeEventListener'](D(0xec),this[D(0x10d)]),this[D(0xd0)][D(0xe7)]('pointercancel',this['_boundPointerUp']);}[o(0xd7)](c){const E=o,d=c[E(0x122)]<0x0?1.08:0.92;this[E(0xeb)]=Math['min'](0x6,Math['max'](0.03,this[E(0xeb)]*d)),this[E(0x10f)](),c['preventDefault']();}set[o(0xc8)](c){const F=o;this[F(0xe2)]?.['dispose'](),this[F(0x101)]?.['dispose'](),this[F(0xf3)]=c,this[F(0xf3)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][F(0xed)]['onZoomFactorChanged']['on'](()=>{const G=F;this[G(0x10a)]();}),this[F(0xe2)]=this[F(0xf3)]['onContentChanged']['on'](()=>{const H=F;this[H(0x10a)]();}),this['_scheduleRender']()):(this[F(0xbf)]['replaceChildren'](),this['_layerDepthEntries']=[],this[F(0xf9)]['style'][F(0xc6)]='flex');}}customElements[o(0x118)](o(0xfe),LayerDepthView);