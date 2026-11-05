const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xde))/0x1+parseInt(n(0xe2))/0x2+-parseInt(n(0xb5))/0x3*(-parseInt(n(0xe9))/0x4)+-parseInt(n(0xa3))/0x5+-parseInt(n(0xb3))/0x6*(-parseInt(n(0xe0))/0x7)+parseInt(n(0xcd))/0x8*(parseInt(n(0xd5))/0x9)+-parseInt(n(0xbe))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x24d5c));function a(){const H=['designerCanvas','onZoomFactorChanged','ready','from','Element','177772cWQNCK','_copyAdoptedStyleSheets','_reRender','_getDomElement','_scene','bind','_zoomFactorChangedHandler','scale(','_onWheel','element','getBoundingClientRect','observe','transformStyle','_scheduleRender','translate(','display','_createLayerTree','depth','flex','_empty','value','_translateX','addEventListener','preserve-3d','preventDefault','clientX','pan','_resizeObserver','cloneNode','_applySceneTransform','412565wRQmpL','translate','px,\x20','_depthSlider','adoptedStyleSheets','add','deg)','_maxY','_depthSpacing','define','length','deltaY','width','_boundPointerUp','deg)\x20','button','1295322xTpHGi','pointermove','3PRHiSW','_scale','_onPointerUp','_updateLayerDepths','height','_content','_onPointerDown','pointerup','_rotateY','2043220bWyJcw','node-projects-web-component-designer-layer-depth-view','_dragStart','wheel','pointercancel','_maxX','_restoreCachedInititalValues','_layerDepthEntries','push','onContentChanged','_contentChangedHandler','dragging','min','rootDesignItem','_instanceServiceContainer','656CfZLXp','shiftKey','_viewport','rotateY','empty','style','_reRenderFlag','_translateY','1251YqqBQn','set','node','_fitScene','_rotateX','classList','usableContainer','_prepareCloneTree','_boundPointerMove','107497HrEmhY','max','7JPnTaA','get','546960GFrqRB','_depthValue'];a=function(){return H;};return a();}function b(c,d){c=c-0x89;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_viewport'];['_scene'];[o(0xba)];['_empty'];['_depthSlider'];['_depthValue'];[o(0xcc)];['_contentChangedHandler'];[o(0x8b)];['_resizeObserver'];[o(0xd3)]=![];[o(0xc3)]=0x0;[o(0xaa)]=0x0;[o(0xab)]=0x24;['_rotateX']=0x0;['_rotateY']=0x0;[o(0x9a)]=0x0;['_translateY']=0x0;['_scale']=0x1;[o(0xc5)]=[];['_dragStart'];[o(0xdd)];[o(0xb0)];constructor(){const p=o;super(),this[p(0xc4)](),this[p(0xcf)]=this[p(0xec)]('viewport'),this['_scene']=this['_getDomElement']('scene'),this[p(0xba)]=this['_getDomElement']('content'),this['_empty']=this[p(0xec)](p(0xd1)),this['_depthSlider']=this[p(0xec)]('depthSlider'),this[p(0xe3)]=this['_getDomElement']('depthValue'),this['_boundPointerMove']=this['_onPointerMove'][p(0x8a)](this),this[p(0xb0)]=this[p(0xb7)][p(0x8a)](this),this['_depthSlider']['addEventListener']('input',()=>{const q=p;this[q(0xab)]=Number(this[q(0xa6)][q(0x99)]),this[q(0xe3)]['textContent']=this[q(0xab)]+'px',this['_updateLayerDepths']();}),this['_viewport']['addEventListener']('pointerdown',c=>this[p(0xbb)](c)),this[p(0xcf)]['addEventListener'](p(0xc1),c=>this['_onWheel'](c),{'passive':![]}),this[p(0xcf)]['addEventListener']('contextmenu',c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0xd8)]());}[o(0xe6)](){const r=o;this[r(0xa0)][r(0x90)](this),this[r(0xa2)]();}[o(0x92)](){const s=o;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0xeb)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0xcc)])return;const c=this['_instanceServiceContainer']['designerCanvas'];this[t(0xea)](c['rootDesignItem']);const d=c['designerPixelSize'];this[t(0xc3)]=Math['max'](d[t(0xaf)],0x1),this['_maxY']=Math['max'](d[t(0xb9)],0x1);const e=this[t(0x95)]();this['_content']['replaceChildren'](e['fragment']),this[t(0x89)]['style'][t(0xaf)]=this['_maxX']+'px',this['_scene']['style'][t(0xb9)]=this[t(0xaa)]+'px',this['_content']['style']['width']=this[t(0xc3)]+'px',this[t(0xba)]['style'][t(0xb9)]=this['_maxY']+'px',this['_empty'][t(0xd2)][t(0x94)]=e['count']?'none':'flex',this[t(0xb8)](),this['_fitScene'](),this['_reRenderFlag']=![];}[o(0xea)](c){const u=o,d=c?.[u(0x8e)],e=c?.[u(0xdb)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot']['adoptedStyleSheets']=f?.[u(0xa7)]?[...f['adoptedStyleSheets']]:[];}[o(0x95)](){const v=o,c=this['_instanceServiceContainer'][v(0xcb)],d=document['createDocumentFragment']();let e=0x0;this[v(0xc5)]=[];for(const f of c['children']()){if(f['nodeType']!==NodeType[v(0xe8)])continue;const g=f[v(0x8e)][v(0xa1)](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}[o(0xdc)](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0xe7)](c[w(0x8e)]['childNodes']),g=Array[w(0xe7)](d['childNodes']);for(const h of c['children']()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h[w(0xd7)]),j=g[i];j instanceof Element&&(e=this[w(0xdc)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']=x(0x9c),c[x(0xd2)]['willChange']=x(0xa4),this[x(0xc5)][x(0xc6)]({'element':c,'depth':d}));}[o(0xb8)](){const y=o;this['_depthValue']['textContent']=this[y(0xab)]+'px';if(!this[y(0xc5)][y(0xad)])return;const c=this[y(0xc5)]['map'](i=>i['depth']),d=Math[y(0xca)](...c),e=Math[y(0xdf)](...c),f=Math['max'](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0xab)]*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h[y(0xd6)](i['element'],i[y(0x96)]);}for(const j of this['_layerDepthEntries']){let k=j[y(0x8e)]['parentElement'],l;while(k){l=h[y(0xe1)](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[y(0x8e)]['style'][y(0xa4)]='0\x200\x20'+(g(j['depth'])-m)+'px';}}[o(0xd8)](){const z=o,c=this['_viewport'][z(0x8f)]();if(!c['width']||!c['height']||!this['_maxX']||!this[z(0xaa)])return;const d=Math['min'](c[z(0xaf)]/this['_maxX'],c[z(0xb9)]/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[z(0xdf)](d,0.05),0x4),this[z(0x9a)]=0x0,this[z(0xd4)]=0x0,this[z(0xa2)]();}['_applySceneTransform'](){const A=o;this['_scene'][A(0xd2)][A(0x91)]=A(0x9c),this['_content'][A(0xd2)][A(0x91)]='preserve-3d',this['_scene']['style']['transform']='translate(-50%,\x20-50%)\x20'+A(0x93)+this['_translateX']+A(0xa5)+this[A(0xd4)]+'px)\x20'+A(0x8c)+this['_scale']+')\x20'+'rotateX('+this[A(0xd9)]+A(0xb1)+'rotateY('+this[A(0xbd)]+A(0xa9),this[A(0xba)][A(0xd2)]['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this[B(0xa6)]||c[B(0xb2)]!==0x0&&c[B(0xb2)]!==0x1&&c[B(0xb2)]!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c['clientY'],'rotateX':this[B(0xd9)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c['button']===0x1||c[B(0xb2)]===0x2||c[B(0xce)]},this[B(0xcf)][B(0xda)][B(0xa8)](B(0xc9)),this['_viewport']['setPointerCapture'](c['pointerId']),this['_viewport'][B(0x9b)](B(0xb4),this[B(0xdd)]),this['_viewport'][B(0x9b)]('pointerup',this[B(0xb0)]),this[B(0xcf)]['addEventListener']('pointercancel',this['_boundPointerUp']),c[B(0x9d)]();}['_onPointerMove'](c){const C=o;if(!this[C(0xc0)])return;const d=c[C(0x9e)]-this[C(0xc0)]['x'],e=c['clientY']-this['_dragStart']['y'];this[C(0xc0)][C(0x9f)]?(this['_translateX']=this[C(0xc0)]['translateX']+d,this[C(0xd4)]=this[C(0xc0)]['translateY']+e):(this[C(0xbd)]=this[C(0xc0)][C(0xd0)]+d*0.35,this['_rotateX']=Math['min'](0x55,Math['max'](-0x55,this[C(0xc0)]['rotateX']-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this['_dragStart']=null,this['_viewport']['classList']['remove']('dragging'),this[D(0xcf)]['releasePointerCapture'](c['pointerId']),this[D(0xcf)]['removeEventListener'](D(0xb4),this['_boundPointerMove']),this[D(0xcf)]['removeEventListener'](D(0xbc),this[D(0xb0)]),this['_viewport']['removeEventListener'](D(0xc2),this[D(0xb0)]);}[o(0x8d)](c){const E=o,d=c[E(0xae)]<0x0?1.08:0.92;this[E(0xb6)]=Math[E(0xca)](0x6,Math['max'](0.03,this['_scale']*d)),this['_applySceneTransform'](),c[E(0x9d)]();}set['instanceServiceContainer'](c){const F=o;this[F(0xc8)]?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this[F(0x8b)]=this['_instanceServiceContainer'][F(0xe4)][F(0xe5)]['on'](()=>{const G=F;this[G(0x92)]();}),this['_contentChangedHandler']=this[F(0xcc)][F(0xc7)]['on'](()=>{this['_scheduleRender']();}),this[F(0x92)]()):(this[F(0xba)]['replaceChildren'](),this['_layerDepthEntries']=[],this[F(0x98)][F(0xd2)][F(0x94)]=F(0x97));}}customElements[o(0xac)](o(0xbf),LayerDepthView);