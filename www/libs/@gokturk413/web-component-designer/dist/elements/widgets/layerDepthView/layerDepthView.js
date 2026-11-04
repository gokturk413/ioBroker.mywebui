const o=b;function a(){const G=['318bOFgEc','dispose','display','pointerup','_restoreCachedInititalValues','_reRender','ready','_maxY','observe','_contentChangedHandler','translateX','removeEventListener','clientX','rotateY','_viewport','content','55idCWOD','define','_updateLayerDepths','nodeType','translate','_prepareCloneTree','transformStyle','createDocumentFragment','depth','bind','translate(','_maxX','_rotateY','_depthSlider','_depthSpacing','onZoomFactorChanged','0\x200\x20','_boundPointerUp','_applySceneTransform','style','_onWheel','_instanceServiceContainer','replaceChildren','scene','willChange','node-projects-web-component-designer-layer-depth-view','_onPointerMove','px)\x20','clientY','wheel','_layerDepthEntries','_depthValue','childNodes','viewport','_resizeObserver','981315PDAvVo','addEventListener','rotateX','_getDomElement','pointermove','5027832zohrGV','_translateX','map','rotateY(','max','_fitScene','deg)','button','_copyAdoptedStyleSheets','dragging','from','height','adoptedStyleSheets','_content','transform','appendChild','flex','count','_dragStart','_createLayerTree','75kXWSQb','preventDefault','_onPointerUp','34022UDuiAg','4629944nDtjIr','18YOHXcA','translateY','length','shiftKey','_boundPointerMove','_translateY','_scene','element','103838aVZKLB','classList','_reRenderFlag','443860HIvYJe','ownerDocument','remove','pointerdown','_prepareCloneElement','shadowRoot','preserve-3d','_empty','px,\x20','8480440cMlTod','rootDesignItem','min','pointercancel','_scale','pan'];a=function(){return G;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x21d))/0x1+-parseInt(n(0x1ce))/0x2*(-parseInt(n(0x1cb))/0x3)+-parseInt(n(0x1db))/0x4*(parseInt(n(0x1fa))/0x5)+-parseInt(n(0x1ea))/0x6*(-parseInt(n(0x1d8))/0x7)+parseInt(n(0x1b7))/0x8+-parseInt(n(0x1d0))/0x9*(-parseInt(n(0x1e4))/0xa)+-parseInt(n(0x1cf))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdef3a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1b6;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x20d)]=css`
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
        </div>`;['_viewport'];[o(0x1d6)];['_content'];[o(0x1e2)];['_depthSlider'];[o(0x219)];[o(0x20f)];[o(0x1f3)];['_zoomFactorChangedHandler'];[o(0x21c)];[o(0x1da)]=![];['_maxX']=0x0;['_maxY']=0x0;[o(0x208)]=0x24;['_rotateX']=0x0;[o(0x206)]=0x0;[o(0x1b8)]=0x0;[o(0x1d5)]=0x0;['_scale']=0x1;['_layerDepthEntries']=[];['_dragStart'];[o(0x1d4)];[o(0x20b)];constructor(){const p=o;super(),this[p(0x1ee)](),this[p(0x1f8)]=this['_getDomElement'](p(0x21b)),this['_scene']=this[p(0x220)](p(0x211)),this[p(0x1c4)]=this[p(0x220)](p(0x1f9)),this[p(0x1e2)]=this[p(0x220)]('empty'),this['_depthSlider']=this['_getDomElement']('depthSlider'),this[p(0x219)]=this['_getDomElement']('depthValue'),this['_boundPointerMove']=this[p(0x214)][p(0x203)](this),this[p(0x20b)]=this[p(0x1cd)][p(0x203)](this),this[p(0x207)][p(0x21e)]('input',()=>{const q=p;this[q(0x208)]=Number(this[q(0x207)]['value']),this['_depthValue']['textContent']=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this[p(0x1f8)][p(0x21e)](p(0x1de),c=>this['_onPointerDown'](c)),this['_viewport']['addEventListener'](p(0x217),c=>this['_onWheel'](c),{'passive':![]}),this[p(0x1f8)]['addEventListener']('contextmenu',c=>c['preventDefault']()),this[p(0x21c)]=new ResizeObserver(()=>this[p(0x1bc)]());}[o(0x1f0)](){const r=o;this[r(0x21c)][r(0x1f2)](this),this['_applySceneTransform']();}['_scheduleRender'](){const s=o;this[s(0x1da)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0x1ef)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0x20f)])return;const c=this['_instanceServiceContainer']['designerCanvas'];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c['designerPixelSize'];this[t(0x205)]=Math[t(0x1bb)](d['width'],0x1),this[t(0x1f1)]=Math['max'](d[t(0x1c2)],0x1);const e=this['_createLayerTree']();this['_content']['replaceChildren'](e['fragment']),this[t(0x1d6)][t(0x20d)]['width']=this[t(0x205)]+'px',this['_scene'][t(0x20d)]['height']=this['_maxY']+'px',this['_content'][t(0x20d)]['width']=this[t(0x205)]+'px',this['_content'][t(0x20d)][t(0x1c2)]=this['_maxY']+'px',this['_empty'][t(0x20d)][t(0x1ec)]=e[t(0x1c8)]?'none':t(0x1c7),this[t(0x1fc)](),this['_fitScene'](),this['_reRenderFlag']=![];}[o(0x1bf)](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x1dc)]);this[u(0x1e0)]['adoptedStyleSheets']=f?.[u(0x1c3)]?[...f['adoptedStyleSheets']]:[];}[o(0x1ca)](){const v=o,c=this['_instanceServiceContainer'][v(0x1e5)],d=document[v(0x201)]();let e=0x0;this[v(0x218)]=[];for(const f of c['children']()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d[v(0x1c6)](g),e=this[v(0x1ff)](f,g,e);}return{'fragment':d,'count':e};}[o(0x1ff)](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array['from'](c['element'][w(0x21a)]),g=Array[w(0x1c1)](d['childNodes']);for(const h of c['children']()){if(h[w(0x1fd)]!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0x1df)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x20d)][x(0x200)]=x(0x1e1),c['style'][x(0x212)]=x(0x1fe),this['_layerDepthEntries']['push']({'element':c,'depth':d}));}[o(0x1fc)](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this[y(0x218)][y(0x1d2)])return;const c=this['_layerDepthEntries'][y(0x1b9)](i=>i[y(0x202)]),d=Math[y(0x1e6)](...c),e=Math[y(0x1bb)](...c),f=Math[y(0x1bb)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x208)]*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h['set'](i['element'],i[y(0x202)]);}for(const j of this['_layerDepthEntries']){let k=j['element']['parentElement'],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[y(0x1d7)][y(0x20d)][y(0x1fe)]=y(0x20a)+(g(j[y(0x202)])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c['width']||!c[z(0x1c2)]||!this[z(0x205)]||!this[z(0x1f1)])return;const d=Math['min'](c['width']/this[z(0x205)],c[z(0x1c2)]/this[z(0x1f1)])*0.72;this['_scale']=Math['min'](Math['max'](d,0.05),0x4),this[z(0x1b8)]=0x0,this[z(0x1d5)]=0x0,this['_applySceneTransform']();}[o(0x20c)](){const A=o;this[A(0x1d6)][A(0x20d)]['transformStyle']='preserve-3d',this['_content']['style'][A(0x200)]='preserve-3d',this['_scene']['style'][A(0x1c5)]='translate(-50%,\x20-50%)\x20'+A(0x204)+this['_translateX']+A(0x1e3)+this[A(0x1d5)]+A(0x215)+'scale('+this['_scale']+')\x20'+'rotateX('+this['_rotateX']+'deg)\x20'+A(0x1ba)+this['_rotateY']+A(0x1bd),this[A(0x1c4)]['style'][A(0x1c5)]='';}['_onPointerDown'](c){const B=o;if(c['target']===this['_depthSlider']||c['button']!==0x0&&c[B(0x1be)]!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c[B(0x1be)]===0x1||c['button']===0x2||c[B(0x1d3)]},this['_viewport']['classList']['add'](B(0x1c0)),this['_viewport']['setPointerCapture'](c['pointerId']),this['_viewport'][B(0x21e)](B(0x1b6),this[B(0x1d4)]),this[B(0x1f8)]['addEventListener']('pointerup',this[B(0x20b)]),this['_viewport'][B(0x21e)](B(0x1e7),this['_boundPointerUp']),c[B(0x1cc)]();}['_onPointerMove'](c){const C=o;if(!this[C(0x1c9)])return;const d=c[C(0x1f6)]-this[C(0x1c9)]['x'],e=c[C(0x216)]-this[C(0x1c9)]['y'];this[C(0x1c9)][C(0x1e9)]?(this['_translateX']=this[C(0x1c9)][C(0x1f4)]+d,this['_translateY']=this[C(0x1c9)][C(0x1d1)]+e):(this['_rotateY']=this['_dragStart'][C(0x1f7)]+d*0.35,this['_rotateX']=Math['min'](0x55,Math['max'](-0x55,this[C(0x1c9)][C(0x21f)]-e*0.35))),this[C(0x20c)](),c[C(0x1cc)]();}[o(0x1cd)](c){const D=o;this[D(0x1c9)]=null,this['_viewport'][D(0x1d9)][D(0x1dd)]('dragging'),this[D(0x1f8)]['releasePointerCapture'](c['pointerId']),this['_viewport'][D(0x1f5)]('pointermove',this[D(0x1d4)]),this['_viewport']['removeEventListener'](D(0x1ed),this['_boundPointerUp']),this[D(0x1f8)]['removeEventListener']('pointercancel',this[D(0x20b)]);}[o(0x20e)](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0x1e8)]=Math[E(0x1e6)](0x6,Math['max'](0.03,this['_scale']*d)),this[E(0x20c)](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this[F(0x1f3)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[F(0x1eb)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas'][F(0x209)]['on'](()=>{this['_scheduleRender']();}),this['_contentChangedHandler']=this[F(0x20f)]['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this['_scheduleRender']()):(this['_content'][F(0x210)](),this[F(0x218)]=[],this['_empty']['style'][F(0x1ec)]='flex');}}customElements[o(0x1fb)](o(0x213),LayerDepthView);