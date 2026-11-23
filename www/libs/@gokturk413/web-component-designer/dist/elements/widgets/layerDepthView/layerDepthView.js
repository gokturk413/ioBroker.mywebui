function a(){const G=['fragment','button','_maxY','releasePointerCapture','_rotateX','from','_updateLayerDepths','set','max','viewport','define','49746AcLcPh','_onPointerUp','translate(-50%,\x20-50%)\x20','_getDomElement','pan','createDocumentFragment','node','9001215NKasqi','min','bind','classList','1621652Illiev','_fitScene','element','pointerdown','shadowRoot','width','onZoomFactorChanged','_contentChangedHandler','_scale','preventDefault','1701780CpKlJS','shiftKey','node-projects-web-component-designer-layer-depth-view','_dragStart','transformStyle','pointerId','_empty','clientY','target','_depthSlider','childNodes','none','add','_reRenderFlag','192SmwGTZ','remove','empty','ready','814850KcPzbs','_content','_boundPointerMove','_scene','_boundPointerUp','_prepareCloneElement','ownerDocument','_prepareCloneTree','_zoomFactorChangedHandler','scene','translate(','_scheduleRender','adoptedStyleSheets','nodeType','willChange','3ETaoSj','_maxX','_applySceneTransform','replaceChildren','contextmenu','_viewport','dispose','15589ALrZuI','_layerDepthEntries','_depthValue','style','_createLayerTree','_instanceServiceContainer','preserve-3d','pointerup','children','deg)','deltaY','content','3391576EOzceO','_onPointerDown','_onWheel','_onPointerMove','observe','parentElement','length','usableContainer','rootDesignItem','_copyAdoptedStyleSheets','addEventListener','height','removeEventListener','_translateY','Element'];a=function(){return G;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xe8))/0x1+parseInt(n(0xac))/0x2+parseInt(n(0xbb))/0x3*(-parseInt(n(0xf3))/0x4)+-parseInt(n(0x9a))/0x5+-parseInt(n(0xa8))/0x6*(-parseInt(n(0xc2))/0x7)+-parseInt(n(0xce))/0x8+parseInt(n(0xef))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f522));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0xc5)]=css`
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
        </div>`;['_viewport'];[o(0xaf)];['_content'];[o(0xa0)];[o(0xa3)];[o(0xc4)];['_instanceServiceContainer'];[o(0x97)];[o(0xb4)];['_resizeObserver'];['_reRenderFlag']=![];[o(0xbc)]=0x0;[o(0xdf)]=0x0;['_depthSpacing']=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;['_scale']=0x1;['_layerDepthEntries']=[];['_dragStart'];[o(0xae)];[o(0xb0)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xc0)]=this['_getDomElement'](p(0xe6)),this['_scene']=this[p(0xeb)](p(0xb5)),this['_content']=this[p(0xeb)](p(0xcd)),this['_empty']=this['_getDomElement'](p(0xaa)),this['_depthSlider']=this['_getDomElement']('depthSlider'),this['_depthValue']=this[p(0xeb)]('depthValue'),this[p(0xae)]=this['_onPointerMove'][p(0xf1)](this),this[p(0xb0)]=this[p(0xe9)]['bind'](this),this[p(0xa3)]['addEventListener']('input',()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider']['value']),this[q(0xc4)]['textContent']=this['_depthSpacing']+'px',this[q(0xe3)]();}),this[p(0xc0)][p(0xd8)](p(0xf6),c=>this[p(0xcf)](c)),this[p(0xc0)][p(0xd8)]('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport'][p(0xd8)](p(0xbf),c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}[o(0xab)](){const r=o;this['_resizeObserver'][r(0xd2)](this),this[r(0xbd)]();}[o(0xb7)](){const s=o;this['_reRenderFlag']===![]&&(this[s(0xa7)]=!![],setTimeout(()=>this['_reRender'](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this['_instanceServiceContainer']['designerCanvas'];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c['designerPixelSize'];this['_maxX']=Math['max'](d['width'],0x1),this[t(0xdf)]=Math['max'](d[t(0xd9)],0x1);const e=this[t(0xc6)]();this[t(0xad)]['replaceChildren'](e[t(0xdd)]),this['_scene']['style'][t(0xf8)]=this[t(0xbc)]+'px',this[t(0xaf)]['style']['height']=this['_maxY']+'px',this[t(0xad)][t(0xc5)][t(0xf8)]=this[t(0xbc)]+'px',this['_content'][t(0xc5)]['height']=this[t(0xdf)]+'px',this[t(0xa0)]['style']['display']=e['count']?t(0xa5):'flex',this['_updateLayerDepths'](),this[t(0xf4)](),this[t(0xa7)]=![];}[o(0xd7)](c){const u=o,d=c?.[u(0xf5)],e=c?.[u(0xd5)],f=d?.[u(0xf7)]??(e instanceof Document?e:d?.[u(0xb2)]);this[u(0xf7)][u(0xb8)]=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}[o(0xc6)](){const v=o,c=this[v(0xc7)][v(0xd6)],d=document[v(0xed)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c['children']()){if(f[v(0xb9)]!==NodeType['Element'])continue;const g=f[v(0xf5)]['cloneNode'](!![]);d['appendChild'](g),e=this[v(0xb3)](f,g,e);}return{'fragment':d,'count':e};}[o(0xb3)](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0xe2)](c[w(0xf5)]['childNodes']),g=Array['from'](d[w(0xa4)]);for(const h of c[w(0xca)]()){if(h['nodeType']!==NodeType[w(0xdc)])continue;const i=f['findIndex'](k=>k===h[w(0xee)]),j=g[i];j instanceof Element&&(e=this[w(0xb3)](h,j,e));}return e;}[o(0xb1)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0xc5)][x(0x9e)]='preserve-3d',c['style'][x(0xba)]='translate',this[x(0xc3)]['push']({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this['_layerDepthEntries'][y(0xd4)])return;const c=this['_layerDepthEntries']['map'](i=>i['depth']),d=Math['min'](...c),e=Math['max'](...c),f=Math[y(0xe5)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h[y(0xe4)](i['element'],i['depth']);}for(const j of this['_layerDepthEntries']){let k=j['element'][y(0xd3)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j['element'][y(0xc5)]['translate']='0\x200\x20'+(g(j['depth'])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c['width']||!c[z(0xd9)]||!this[z(0xbc)]||!this['_maxY'])return;const d=Math[z(0xf0)](c[z(0xf8)]/this['_maxX'],c[z(0xd9)]/this['_maxY'])*0.72;this[z(0x98)]=Math['min'](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this[z(0xbd)]();}[o(0xbd)](){const A=o;this[A(0xaf)]['style'][A(0x9e)]='preserve-3d',this['_content']['style'][A(0x9e)]=A(0xc8),this['_scene'][A(0xc5)]['transform']=A(0xea)+A(0xb6)+this['_translateX']+'px,\x20'+this['_translateY']+'px)\x20'+'scale('+this[A(0x98)]+')\x20'+'rotateX('+this[A(0xe1)]+'deg)\x20'+'rotateY('+this['_rotateY']+A(0xcb),this['_content'][A(0xc5)]['transform']='';}['_onPointerDown'](c){const B=o;if(c[B(0xa2)]===this['_depthSlider']||c['button']!==0x0&&c['button']!==0x1&&c[B(0xde)]!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c[B(0xa1)],'rotateX':this[B(0xe1)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this[B(0xdb)],'pan':c[B(0xde)]===0x1||c[B(0xde)]===0x2||c[B(0x9b)]},this[B(0xc0)]['classList'][B(0xa6)]('dragging'),this['_viewport']['setPointerCapture'](c[B(0x9f)]),this['_viewport']['addEventListener']('pointermove',this[B(0xae)]),this[B(0xc0)]['addEventListener'](B(0xc9),this[B(0xb0)]),this[B(0xc0)]['addEventListener']('pointercancel',this[B(0xb0)]),c[B(0x99)]();}[o(0xd1)](c){const C=o;if(!this[C(0x9d)])return;const d=c['clientX']-this[C(0x9d)]['x'],e=c['clientY']-this['_dragStart']['y'];this[C(0x9d)][C(0xec)]?(this['_translateX']=this['_dragStart']['translateX']+d,this[C(0xdb)]=this['_dragStart']['translateY']+e):(this['_rotateY']=this[C(0x9d)]['rotateY']+d*0.35,this['_rotateX']=Math[C(0xf0)](0x55,Math[C(0xe5)](-0x55,this[C(0x9d)]['rotateX']-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}[o(0xe9)](c){const D=o;this['_dragStart']=null,this[D(0xc0)][D(0xf2)][D(0xa9)]('dragging'),this['_viewport'][D(0xe0)](c['pointerId']),this['_viewport'][D(0xda)]('pointermove',this[D(0xae)]),this[D(0xc0)][D(0xda)](D(0xc9),this['_boundPointerUp']),this['_viewport'][D(0xda)]('pointercancel',this['_boundPointerUp']);}[o(0xd0)](c){const E=o,d=c[E(0xcc)]<0x0?1.08:0.92;this[E(0x98)]=Math['min'](0x6,Math[E(0xe5)](0.03,this[E(0x98)]*d)),this[E(0xbd)](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this[F(0x97)]?.['dispose'](),this[F(0xb4)]?.[F(0xc1)](),this[F(0xc7)]=c,this['_instanceServiceContainer']?(this[F(0xb4)]=this[F(0xc7)]['designerCanvas'][F(0x96)]['on'](()=>{this['_scheduleRender']();}),this[F(0x97)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this['_scheduleRender']()):(this['_content'][F(0xbe)](),this[F(0xc3)]=[],this['_empty']['style']['display']='flex');}}function b(c,d){c=c-0x96;const e=a();let f=e[c];return f;}customElements[o(0xe7)](o(0x9c),LayerDepthView);