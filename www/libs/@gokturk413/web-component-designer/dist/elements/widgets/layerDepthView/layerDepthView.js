const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x104))/0x1+parseInt(n(0x131))/0x2+parseInt(n(0xf8))/0x3+parseInt(n(0xf0))/0x4*(-parseInt(n(0x144))/0x5)+-parseInt(n(0xf2))/0x6+parseInt(n(0x142))/0x7*(-parseInt(n(0x141))/0x8)+-parseInt(n(0x10f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x370a2));function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x139)]=css`
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
        }`;static [o(0x109)]=html`
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
        </div>`;['_viewport'];['_scene'];[o(0x120)];['_empty'];[o(0xfc)];[o(0xff)];['_instanceServiceContainer'];[o(0x132)];['_zoomFactorChangedHandler'];[o(0x11f)];[o(0x10c)]=![];[o(0x146)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;[o(0x117)]=0x0;[o(0x13c)]=0x0;['_translateX']=0x0;[o(0x10a)]=0x0;[o(0xec)]=0x1;['_layerDepthEntries']=[];['_dragStart'];[o(0x14e)];['_boundPointerUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_viewport']=this[p(0xe9)]('viewport'),this[p(0x10b)]=this['_getDomElement']('scene'),this[p(0x120)]=this[p(0xe9)](p(0x128)),this['_empty']=this[p(0xe9)](p(0xf7)),this['_depthSlider']=this[p(0xe9)](p(0x150)),this[p(0xff)]=this[p(0xe9)](p(0x122)),this[p(0x14e)]=this[p(0x125)]['bind'](this),this['_boundPointerUp']=this[p(0x10e)][p(0x14b)](this),this[p(0xfc)][p(0x13a)](p(0x114),()=>{const q=p;this['_depthSpacing']=Number(this[q(0xfc)][q(0x12d)]),this[q(0xff)][q(0x129)]=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this['_viewport'][p(0x13a)](p(0xf1),c=>this[p(0x138)](c)),this['_viewport'][p(0x13a)]('wheel',c=>this[p(0x12c)](c),{'passive':![]}),this[p(0x13e)][p(0x13a)]('contextmenu',c=>c[p(0x130)]()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this['_resizeObserver'][r(0x106)](this),this[r(0xfd)]();}[o(0x13f)](){const s=o;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0x103)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0x14c)])return;const c=this[t(0x14c)][t(0xfa)];this[t(0x133)](c[t(0x140)]);const d=c['designerPixelSize'];this['_maxX']=Math['max'](d['width'],0x1),this['_maxY']=Math['max'](d['height'],0x1);const e=this[t(0x137)]();this[t(0x120)]['replaceChildren'](e['fragment']),this['_scene'][t(0x139)]['width']=this['_maxX']+'px',this['_scene'][t(0x139)]['height']=this[t(0xef)]+'px',this[t(0x120)][t(0x139)]['width']=this[t(0x146)]+'px',this['_content']['style'][t(0x127)]=this['_maxY']+'px',this[t(0x149)]['style'][t(0xf4)]=e['count']?'none':t(0x12a),this['_updateLayerDepths'](),this[t(0x134)](),this['_reRenderFlag']=![];}[o(0x133)](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x111)]);this[u(0x11c)][u(0x124)]=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x14c)]['rootDesignItem'],d=document[v(0xed)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[v(0x14f)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element'][v(0x119)](!![]);d[v(0x135)](g),e=this[v(0x11a)](f,g,e);}return{'fragment':d,'count':e};}[o(0x11a)](c,d,e){const w=o;this[w(0x147)](d,e),e++;const f=Array[w(0x11b)](c[w(0x112)][w(0x12e)]),g=Array['from'](d['childNodes']);for(const h of c[w(0x14f)]()){if(h['nodeType']!==NodeType['Element'])continue;const i=f[w(0xf3)](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0x147)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x139)][x(0x113)]=x(0x121),c[x(0x139)][x(0x12f)]=x(0x14d),this[x(0x101)]['push']({'element':c,'depth':d}));}[o(0x115)](){const y=o;this[y(0xff)]['textContent']=this['_depthSpacing']+'px';if(!this[y(0x101)][y(0xfe)])return;const c=this['_layerDepthEntries'][y(0x136)](i=>i['depth']),d=Math[y(0x105)](...c),e=Math[y(0x145)](...c),f=Math[y(0x145)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[y(0x101)]){h[y(0x118)](i['element'],i['depth']);}for(const j of this[y(0x101)]){let k=j['element']['parentElement'],l;while(k){l=h[y(0x14a)](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j['element']['style']['translate']='0\x200\x20'+(g(j['depth'])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport'][z(0xf5)]();if(!c[z(0x102)]||!c['height']||!this[z(0x146)]||!this[z(0xef)])return;const d=Math[z(0x105)](c[z(0x102)]/this[z(0x146)],c['height']/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[z(0x145)](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this['_applySceneTransform']();}[o(0xfd)](){const A=o;this['_scene']['style'][A(0x113)]='preserve-3d',this[A(0x120)][A(0x139)][A(0x113)]=A(0x121),this[A(0x10b)][A(0x139)]['transform']='translate(-50%,\x20-50%)\x20'+A(0x143)+this[A(0x100)]+'px,\x20'+this['_translateY']+'px)\x20'+A(0x12b)+this['_scale']+')\x20'+'rotateX('+this[A(0x117)]+'deg)\x20'+A(0x13d)+this[A(0x13c)]+'deg)',this['_content'][A(0x139)]['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this[B(0xfc)]||c['button']!==0x0&&c[B(0x10d)]!==0x1&&c['button']!==0x2)return;this[B(0x108)]={'x':c['clientX'],'y':c[B(0x107)],'rotateX':this[B(0x117)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this[B(0x10a)],'pan':c['button']===0x1||c[B(0x10d)]===0x2||c['shiftKey']},this[B(0x13e)][B(0xf9)]['add'](B(0x11e)),this['_viewport']['setPointerCapture'](c['pointerId']),this[B(0x13e)][B(0x13a)](B(0xf6),this['_boundPointerMove']),this[B(0x13e)][B(0x13a)](B(0xfb),this[B(0x13b)]),this['_viewport'][B(0x13a)]('pointercancel',this[B(0x13b)]),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this['_dragStart']['x'],e=c['clientY']-this[C(0x108)]['y'];this['_dragStart']['pan']?(this['_translateX']=this[C(0x108)]['translateX']+d,this[C(0x10a)]=this[C(0x108)][C(0x116)]+e):(this[C(0x13c)]=this['_dragStart'][C(0xeb)]+d*0.35,this[C(0x117)]=Math[C(0x105)](0x55,Math['max'](-0x55,this['_dragStart'][C(0x123)]-e*0.35))),this[C(0xfd)](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this['_dragStart']=null,this[D(0x13e)]['classList']['remove'](D(0x11e)),this[D(0x13e)][D(0x110)](c['pointerId']),this['_viewport']['removeEventListener']('pointermove',this[D(0x14e)]),this[D(0x13e)][D(0xee)](D(0xfb),this['_boundPointerUp']),this['_viewport']['removeEventListener'](D(0x151),this[D(0x13b)]);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0xec)]=Math[E(0x105)](0x6,Math['max'](0.03,this[E(0xec)]*d)),this[E(0xfd)](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this['_contentChangedHandler']?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas']['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this['_contentChangedHandler']=this['_instanceServiceContainer'][F(0xea)]['on'](()=>{this['_scheduleRender']();}),this[F(0x13f)]()):(this['_content'][F(0x11d)](),this[F(0x101)]=[],this['_empty'][F(0x139)]['display']=F(0x12a));}}function a(){const G=['onContentChanged','rotateY','_scale','createDocumentFragment','removeEventListener','_maxY','4kDYAqE','pointerdown','1102878WlTUEg','findIndex','display','getBoundingClientRect','pointermove','empty','1148400VAjAKK','classList','designerCanvas','pointerup','_depthSlider','_applySceneTransform','length','_depthValue','_translateX','_layerDepthEntries','width','_reRender','395989FyrWmk','min','observe','clientY','_dragStart','template','_translateY','_scene','_reRenderFlag','button','_onPointerUp','567567uUDoiD','releasePointerCapture','ownerDocument','element','transformStyle','input','_updateLayerDepths','translateY','_rotateX','set','cloneNode','_prepareCloneTree','from','shadowRoot','replaceChildren','dragging','_resizeObserver','_content','preserve-3d','depthValue','rotateX','adoptedStyleSheets','_onPointerMove','node-projects-web-component-designer-layer-depth-view','height','content','textContent','flex','scale(','_onWheel','value','childNodes','willChange','preventDefault','447930ptxZgz','_contentChangedHandler','_copyAdoptedStyleSheets','_fitScene','appendChild','map','_createLayerTree','_onPointerDown','style','addEventListener','_boundPointerUp','_rotateY','rotateY(','_viewport','_scheduleRender','rootDesignItem','8VcYwIM','593369ibcrGi','translate(','2228345fSWWnn','max','_maxX','_prepareCloneElement','define','_empty','get','bind','_instanceServiceContainer','translate','_boundPointerMove','children','depthSlider','pointercancel','_getDomElement'];a=function(){return G;};return a();}customElements[o(0x148)](o(0x126),LayerDepthView);