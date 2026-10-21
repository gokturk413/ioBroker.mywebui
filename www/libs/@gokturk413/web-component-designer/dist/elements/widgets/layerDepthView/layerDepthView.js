const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x105))/0x1+parseInt(n(0x139))/0x2*(-parseInt(n(0x13f))/0x3)+parseInt(n(0x10e))/0x4+parseInt(n(0x116))/0x5+-parseInt(n(0x113))/0x6*(parseInt(n(0x118))/0x7)+parseInt(n(0xec))/0x8+-parseInt(n(0x121))/0x9*(parseInt(n(0xf5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa9f5e));function a(){const G=['releasePointerCapture','willChange','width','_createLayerTree','instanceServiceContainer','findIndex','_depthValue','depthValue','_getDomElement','_rotateY','transformStyle','height','onContentChanged','38032hFAoSP','pointermove','_prepareCloneTree','set','value','addEventListener','24jZUcNY','_updateLayerDepths','parentElement','translate','_applySceneTransform','rootDesignItem','clientY','_scene','ready','translateX','cloneNode','_layerDepthEntries','template','display','_boundPointerMove','_copyAdoptedStyleSheets','pan','_translateY','from','preventDefault','removeEventListener','translateY','define','get','9050640OWxFTT','children','_maxY','clientX','rotateY','_viewport','_prepareCloneElement','classList','min','10SJVFwX','pointerup','max','setPointerCapture','_depthSpacing','bind','_scheduleRender','_zoomFactorChangedHandler','_rotateX','depth','_dragStart','content','_content','_instanceServiceContainer','_translateX','pointercancel','638956YAOoAE','button','_fitScene','deg)\x20','appendChild','deltaY','designerCanvas','_scale','node','752048mIPGYt','_contentChangedHandler','_onPointerDown','_onWheel','adoptedStyleSheets','121518ZmBPoB','0\x200\x20','preserve-3d','1253440lOOBRU','_onPointerMove','217FfGqfE','node-projects-web-component-designer-layer-depth-view','_resizeObserver','_maxX','childNodes','Element','_depthSlider','style','dispose','6595713ViByvF','push','transform','rotateY(','dragging','fragment','_reRenderFlag','onZoomFactorChanged','remove','_boundPointerUp','element'];a=function(){return G;};return a();}function b(c,d){c=c-0xe6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x11f)]=css`
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
        }`;static [o(0x14b)]=html`
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
        </div>`;[o(0xf1)];['_scene'];['_content'];['_empty'];['_depthSlider'];[o(0x132)];['_instanceServiceContainer'];['_contentChangedHandler'];['_zoomFactorChangedHandler'];[o(0x11a)];['_reRenderFlag']=![];[o(0x11b)]=0x0;[o(0xee)]=0x0;['_depthSpacing']=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;[o(0x150)]=0x0;['_scale']=0x1;['_layerDepthEntries']=[];[o(0xff)];[o(0x14d)];[o(0x12a)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xf1)]=this['_getDomElement']('viewport'),this[p(0x146)]=this[p(0x134)]('scene'),this['_content']=this[p(0x134)](p(0x100)),this['_empty']=this['_getDomElement']('empty'),this['_depthSlider']=this[p(0x134)]('depthSlider'),this['_depthValue']=this['_getDomElement'](p(0x133)),this['_boundPointerMove']=this[p(0x117)][p(0xfa)](this),this[p(0x12a)]=this['_onPointerUp']['bind'](this),this[p(0x11e)]['addEventListener']('input',()=>{const q=p;this[q(0xf9)]=Number(this['_depthSlider'][q(0x13d)]),this[q(0x132)]['textContent']=this[q(0xf9)]+'px',this[q(0x140)]();}),this[p(0xf1)][p(0x13e)]('pointerdown',c=>this[p(0x110)](c)),this['_viewport']['addEventListener']('wheel',c=>this[p(0x111)](c),{'passive':![]}),this[p(0xf1)][p(0x13e)]('contextmenu',c=>c[p(0xe7)]()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0x107)]());}[o(0x147)](){const r=o;this[r(0x11a)]['observe'](this),this[r(0x143)]();}[o(0xfb)](){const s=o;this[s(0x127)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this['_instanceServiceContainer'][t(0x10b)];this[t(0x14e)](c[t(0x144)]);const d=c['designerPixelSize'];this['_maxX']=Math[t(0xf7)](d['width'],0x1),this[t(0xee)]=Math['max'](d['height'],0x1);const e=this[t(0x12f)]();this[t(0x101)]['replaceChildren'](e[t(0x126)]),this['_scene'][t(0x11f)][t(0x12e)]=this['_maxX']+'px',this['_scene'][t(0x11f)]['height']=this[t(0xee)]+'px',this[t(0x101)][t(0x11f)][t(0x12e)]=this[t(0x11b)]+'px',this['_content'][t(0x11f)][t(0x137)]=this[t(0xee)]+'px',this['_empty'][t(0x11f)][t(0x14c)]=e['count']?'none':'flex',this['_updateLayerDepths'](),this[t(0x107)](),this['_reRenderFlag']=![];}[o(0x14e)](c){const u=o,d=c?.[u(0x12b)],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot']['adoptedStyleSheets']=f?.[u(0x112)]?[...f[u(0x112)]]:[];}['_createLayerTree'](){const v=o,c=this[v(0x102)]['rootDesignItem'],d=document['createDocumentFragment']();let e=0x0;this['_layerDepthEntries']=[];for(const f of c['children']()){if(f['nodeType']!==NodeType[v(0x11d)])continue;const g=f['element'][v(0x149)](!![]);d[v(0x109)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}[o(0x13b)](c,d,e){const w=o;this[w(0xf2)](d,e),e++;const f=Array['from'](c[w(0x12b)][w(0x11c)]),g=Array[w(0xe6)](d[w(0x11c)]);for(const h of c[w(0xed)]()){if(h['nodeType']!==NodeType[w(0x11d)])continue;const i=f[w(0x131)](k=>k===h[w(0x10d)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x11f)][x(0x136)]='preserve-3d',c[x(0x11f)][x(0x12d)]='translate',this['_layerDepthEntries'][x(0x122)]({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this[y(0x14a)]['length'])return;const c=this['_layerDepthEntries']['map'](i=>i[y(0xfe)]),d=Math[y(0xf4)](...c),e=Math['max'](...c),f=Math[y(0xf7)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[y(0x14a)]){h[y(0x13c)](i[y(0x12b)],i[y(0xfe)]);}for(const j of this['_layerDepthEntries']){let k=j[y(0x12b)][y(0x141)],l;while(k){l=h[y(0xeb)](k);if(l!==undefined)break;k=k[y(0x141)];}const m=l===undefined?0x0:g(l);j['element'][y(0x11f)][y(0x142)]=y(0x114)+(g(j[y(0xfe)])-m)+'px';}}[o(0x107)](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c[z(0x12e)]||!c['height']||!this[z(0x11b)]||!this[z(0xee)])return;const d=Math['min'](c[z(0x12e)]/this[z(0x11b)],c[z(0x137)]/this['_maxY'])*0.72;this['_scale']=Math['min'](Math['max'](d,0.05),0x4),this[z(0x103)]=0x0,this[z(0x150)]=0x0,this[z(0x143)]();}['_applySceneTransform'](){const A=o;this[A(0x146)][A(0x11f)][A(0x136)]='preserve-3d',this[A(0x101)][A(0x11f)][A(0x136)]=A(0x115),this[A(0x146)]['style'][A(0x123)]='translate(-50%,\x20-50%)\x20'+'translate('+this[A(0x103)]+'px,\x20'+this['_translateY']+'px)\x20'+'scale('+this[A(0x10c)]+')\x20'+'rotateX('+this['_rotateX']+A(0x108)+A(0x124)+this[A(0x135)]+'deg)',this[A(0x101)]['style'][A(0x123)]='';}['_onPointerDown'](c){const B=o;if(c['target']===this['_depthSlider']||c[B(0x106)]!==0x0&&c[B(0x106)]!==0x1&&c['button']!==0x2)return;this[B(0xff)]={'x':c[B(0xef)],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this[B(0x150)],'pan':c[B(0x106)]===0x1||c['button']===0x2||c['shiftKey']},this[B(0xf1)][B(0xf3)]['add']('dragging'),this[B(0xf1)][B(0xf8)](c['pointerId']),this['_viewport'][B(0x13e)](B(0x13a),this[B(0x14d)]),this['_viewport'][B(0x13e)](B(0xf6),this['_boundPointerUp']),this[B(0xf1)][B(0x13e)]('pointercancel',this[B(0x12a)]),c['preventDefault']();}[o(0x117)](c){const C=o;if(!this[C(0xff)])return;const d=c['clientX']-this[C(0xff)]['x'],e=c[C(0x145)]-this['_dragStart']['y'];this[C(0xff)][C(0x14f)]?(this['_translateX']=this['_dragStart'][C(0x148)]+d,this[C(0x150)]=this['_dragStart'][C(0xe9)]+e):(this[C(0x135)]=this[C(0xff)][C(0xf0)]+d*0.35,this[C(0xfd)]=Math['min'](0x55,Math['max'](-0x55,this[C(0xff)]['rotateX']-e*0.35))),this['_applySceneTransform'](),c[C(0xe7)]();}['_onPointerUp'](c){const D=o;this[D(0xff)]=null,this['_viewport']['classList'][D(0x129)](D(0x125)),this['_viewport'][D(0x12c)](c['pointerId']),this[D(0xf1)]['removeEventListener'](D(0x13a),this['_boundPointerMove']),this[D(0xf1)][D(0xe8)]('pointerup',this[D(0x12a)]),this['_viewport'][D(0xe8)](D(0x104),this[D(0x12a)]);}[o(0x111)](c){const E=o,d=c[E(0x10a)]<0x0?1.08:0.92;this['_scale']=Math['min'](0x6,Math['max'](0.03,this[E(0x10c)]*d)),this[E(0x143)](),c[E(0xe7)]();}set[o(0x130)](c){const F=o;this[F(0x10f)]?.['dispose'](),this[F(0xfc)]?.[F(0x120)](),this[F(0x102)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][F(0x10b)][F(0x128)]['on'](()=>{this['_scheduleRender']();}),this[F(0x10f)]=this['_instanceServiceContainer'][F(0x138)]['on'](()=>{this['_scheduleRender']();}),this[F(0xfb)]()):(this['_content']['replaceChildren'](),this['_layerDepthEntries']=[],this['_empty'][F(0x11f)]['display']='flex');}}customElements[o(0xea)](o(0x119),LayerDepthView);