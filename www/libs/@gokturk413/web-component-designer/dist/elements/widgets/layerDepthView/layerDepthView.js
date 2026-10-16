const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x11e))/0x1+parseInt(n(0x13c))/0x2*(-parseInt(n(0x104))/0x3)+parseInt(n(0x118))/0x4+-parseInt(n(0x101))/0x5+parseInt(n(0x123))/0x6*(-parseInt(n(0x109))/0x7)+parseInt(n(0x11b))/0x8*(-parseInt(n(0x10d))/0x9)+-parseInt(n(0xe8))/0xa*(-parseInt(n(0xea))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdca84));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0xd6;const e=a();let f=e[c];return f;}function a(){const H=['_instanceServiceContainer','preserve-3d','childNodes','textContent','Element','parentElement','_reRenderFlag','depth','button','replaceChildren','38vKLutp','rotateY','width','transformStyle','transform','template','pointerdown','_boundPointerUp','_layerDepthEntries','height','wheel','pointermove','translate','style','appendChild','_restoreCachedInititalValues','_maxY','_copyAdoptedStyleSheets','clientY','nodeType','_applySceneTransform','64439170KEIUdO','min','11qpVGiL','_depthSlider','pointerId','_dragStart','designerCanvas','_scale','display','rootDesignItem','onZoomFactorChanged','adoptedStyleSheets','_rotateY','_depthSpacing','_onPointerDown','_translateY','_prepareCloneElement','ready','usableContainer','fragment','classList','setPointerCapture','dispose','contextmenu','_content','4203850WmiXDb','pointercancel','removeEventListener','172497DCgGCh','_prepareCloneTree','_translateX','_zoomFactorChangedHandler','rotateX','959cTCbCm','_getDomElement','_reRender','_scene','1535427OKwBxh','content','_depthValue','children','_fitScene','dragging','designerPixelSize','pointerup','bind','set','shadowRoot','1282668BkZwLz','max','addEventListener','72AJhbbW','_contentChangedHandler','_empty','774672KDUxIj','none','rotateY(','_viewport','add','70836YqOCps','cloneNode','length','getBoundingClientRect','_boundPointerMove','viewport','releasePointerCapture','preventDefault','node','deg)\x20','_scheduleRender','element','from','_rotateX','_maxX'];a=function(){return H;};return a();}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0xd8)]=html`
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
        </div>`;['_viewport'];['_scene'];['_content'];['_empty'];['_depthSlider'];['_depthValue'];['_instanceServiceContainer'];[o(0x11c)];[o(0x107)];['_resizeObserver'];[o(0x138)]=![];['_maxX']=0x0;['_maxY']=0x0;[o(0xf5)]=0x24;['_rotateX']=0x0;[o(0xf4)]=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0xef)]=0x1;[o(0xdb)]=[];[o(0xed)];[o(0x127)];[o(0xda)];constructor(){const p=o;super(),this[p(0xe2)](),this['_viewport']=this[p(0x10a)](p(0x128)),this['_scene']=this[p(0x10a)]('scene'),this[p(0x100)]=this['_getDomElement'](p(0x10e)),this['_empty']=this[p(0x10a)]('empty'),this['_depthSlider']=this[p(0x10a)]('depthSlider'),this[p(0x10f)]=this[p(0x10a)]('depthValue'),this['_boundPointerMove']=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this['_onPointerUp'][p(0x115)](this),this['_depthSlider']['addEventListener']('input',()=>{const q=p;this['_depthSpacing']=Number(this[q(0xeb)]['value']),this['_depthValue'][q(0x135)]=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this['_viewport']['addEventListener'](p(0xd9),c=>this[p(0xf6)](c)),this['_viewport'][p(0x11a)](p(0xdd),c=>this['_onWheel'](c),{'passive':![]}),this['_viewport'][p(0x11a)](p(0xff),c=>c[p(0x12a)]()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}[o(0xf9)](){const r=o;this['_resizeObserver']['observe'](this),this[r(0xe7)]();}['_scheduleRender'](){const s=o;this[s(0x138)]===![]&&(this[s(0x138)]=!![],setTimeout(()=>this['_reRender'](),0x32));}async[o(0x10b)](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0x132)][t(0xee)];this['_copyAdoptedStyleSheets'](c[t(0xf1)]);const d=c[t(0x113)];this['_maxX']=Math[t(0x119)](d[t(0x13e)],0x1),this[t(0xe3)]=Math[t(0x119)](d[t(0xdc)],0x1);const e=this['_createLayerTree']();this['_content'][t(0x13b)](e[t(0xfb)]),this['_scene'][t(0xe0)][t(0x13e)]=this[t(0x131)]+'px',this[t(0x10c)][t(0xe0)][t(0xdc)]=this[t(0xe3)]+'px',this[t(0x100)][t(0xe0)]['width']=this['_maxX']+'px',this['_content']['style'][t(0xdc)]=this['_maxY']+'px',this[t(0x11d)]['style'][t(0xf0)]=e['count']?t(0x11f):'flex',this['_updateLayerDepths'](),this['_fitScene'](),this[t(0x138)]=![];}[o(0xe4)](c){const u=o,d=c?.[u(0x12e)],e=c?.[u(0xfa)],f=d?.[u(0x117)]??(e instanceof Document?e:d?.['ownerDocument']);this[u(0x117)][u(0xf3)]=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x132)]['rootDesignItem'],d=document['createDocumentFragment']();let e=0x0;this[v(0xdb)]=[];for(const f of c[v(0x110)]()){if(f[v(0xe6)]!==NodeType[v(0x136)])continue;const g=f[v(0x12e)][v(0x124)](!![]);d[v(0xe1)](g),e=this[v(0x105)](f,g,e);}return{'fragment':d,'count':e};}[o(0x105)](c,d,e){const w=o;this[w(0xf8)](d,e),e++;const f=Array[w(0x12f)](c[w(0x12e)][w(0x134)]),g=Array[w(0x12f)](d['childNodes']);for(const h of c['children']()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h[w(0x12b)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0xf8)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']='preserve-3d',c['style']['willChange']=x(0xdf),this[x(0xdb)]['push']({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue'][y(0x135)]=this['_depthSpacing']+'px';if(!this['_layerDepthEntries'][y(0x125)])return;const c=this['_layerDepthEntries']['map'](i=>i[y(0x139)]),d=Math[y(0xe9)](...c),e=Math['max'](...c),f=Math[y(0x119)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h[y(0x116)](i[y(0x12e)],i['depth']);}for(const j of this['_layerDepthEntries']){let k=j['element'][y(0x137)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[y(0x12e)]['style']['translate']='0\x200\x20'+(g(j['depth'])-m)+'px';}}[o(0x111)](){const z=o,c=this[z(0x121)][z(0x126)]();if(!c[z(0x13e)]||!c['height']||!this[z(0x131)]||!this['_maxY'])return;const d=Math[z(0xe9)](c['width']/this['_maxX'],c[z(0xdc)]/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[z(0x119)](d,0.05),0x4),this['_translateX']=0x0,this[z(0xf7)]=0x0,this[z(0xe7)]();}['_applySceneTransform'](){const A=o;this[A(0x10c)][A(0xe0)][A(0xd6)]=A(0x133),this['_content'][A(0xe0)]['transformStyle']='preserve-3d',this['_scene'][A(0xe0)][A(0xd7)]='translate(-50%,\x20-50%)\x20'+'translate('+this[A(0x106)]+'px,\x20'+this[A(0xf7)]+'px)\x20'+'scale('+this['_scale']+')\x20'+'rotateX('+this['_rotateX']+A(0x12c)+A(0x120)+this[A(0xf4)]+'deg)',this['_content']['style'][A(0xd7)]='';}[o(0xf6)](c){const B=o;if(c['target']===this['_depthSlider']||c['button']!==0x0&&c[B(0x13a)]!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c['clientY'],'rotateX':this[B(0x130)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c[B(0x13a)]===0x1||c[B(0x13a)]===0x2||c['shiftKey']},this['_viewport'][B(0xfc)][B(0x122)](B(0x112)),this['_viewport'][B(0xfd)](c[B(0xec)]),this[B(0x121)][B(0x11a)](B(0xde),this[B(0x127)]),this['_viewport'][B(0x11a)](B(0x114),this['_boundPointerUp']),this['_viewport']['addEventListener'](B(0x102),this['_boundPointerUp']),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this['_dragStart']['x'],e=c[C(0xe5)]-this[C(0xed)]['y'];this[C(0xed)]['pan']?(this['_translateX']=this['_dragStart']['translateX']+d,this[C(0xf7)]=this[C(0xed)]['translateY']+e):(this['_rotateY']=this[C(0xed)][C(0x13d)]+d*0.35,this['_rotateX']=Math[C(0xe9)](0x55,Math[C(0x119)](-0x55,this[C(0xed)][C(0x108)]-e*0.35))),this[C(0xe7)](),c[C(0x12a)]();}['_onPointerUp'](c){const D=o;this['_dragStart']=null,this[D(0x121)][D(0xfc)]['remove'](D(0x112)),this[D(0x121)][D(0x129)](c[D(0xec)]),this[D(0x121)][D(0x103)](D(0xde),this['_boundPointerMove']),this['_viewport'][D(0x103)]('pointerup',this[D(0xda)]),this['_viewport'][D(0x103)](D(0x102),this['_boundPointerUp']);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0xef)]=Math[E(0xe9)](0x6,Math[E(0x119)](0.03,this['_scale']*d)),this['_applySceneTransform'](),c[E(0x12a)]();}set['instanceServiceContainer'](c){const F=o;this['_contentChangedHandler']?.['dispose'](),this[F(0x107)]?.[F(0xfe)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this[F(0x107)]=this[F(0x132)][F(0xee)][F(0xf2)]['on'](()=>{this['_scheduleRender']();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{const G=F;this[G(0x12d)]();}),this[F(0x12d)]()):(this['_content'][F(0x13b)](),this['_layerDepthEntries']=[],this['_empty'][F(0xe0)]['display']='flex');}}customElements['define']('node-projects-web-component-designer-layer-depth-view',LayerDepthView);