const o=b;function b(c,d){c=c-0xbd;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe7))/0x1+-parseInt(n(0xc1))/0x2+-parseInt(n(0xd3))/0x3+-parseInt(n(0x115))/0x4*(parseInt(n(0xe2))/0x5)+parseInt(n(0xc9))/0x6*(-parseInt(n(0x105))/0x7)+parseInt(n(0x123))/0x8+parseInt(n(0xd0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe042e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const H=['classList','shiftKey','scale(','replaceChildren','_depthSpacing','removeEventListener','designerCanvas','min','contextmenu','depth','_zoomFactorChangedHandler','2004842HMVKcr','length','clientY','_copyAdoptedStyleSheets','add','translate','_dragStart','button','_createLayerTree','_translateY','_fitScene','_rotateX','_rotateY','value','pointermove','childNodes','1676FRciJv','textContent','depthValue','_onPointerUp','_boundPointerMove','shadowRoot','_scene','pointercancel','max','clientX','_depthValue','_layerDepthEntries','_maxY','_contentChangedHandler','1992192hKSSaL','_empty','_prepareCloneTree','_prepareCloneElement','node-projects-web-component-designer-layer-depth-view','nodeType','_resizeObserver','dispose','define','empty','ownerDocument','wheel','parentElement','rotateX','count','2582204jHxlZW','_applySceneTransform','content','0\x200\x20','_instanceServiceContainer','input','translate(','_scale','18KzJiyP','_scheduleRender','translateY','node','_onPointerMove','instanceServiceContainer','children','31588119ergkJU','preserve-3d','translate(-50%,\x20-50%)\x20','1968510WYbzjR','usableContainer','_viewport','height','addEventListener','display','scene','_depthSlider','rotateY(','from','_boundPointerUp','_reRender','Element','onZoomFactorChanged','_translateX','20795BArvxf','element','template','_onPointerDown','px,\x20','1708870WFYEqK','_maxX','getBoundingClientRect','bind','findIndex','_getDomElement','adoptedStyleSheets','preventDefault','fragment','dragging','_updateLayerDepths','style','_content','pointerup','setPointerCapture','_reRenderFlag','width','_restoreCachedInititalValues','depthSlider'];a=function(){return H;};return a();}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0xf2)]=css`
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
        }`;static [o(0xe4)]=html`
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
        </div>`;[o(0xd5)];[o(0x11b)];[o(0xf3)];['_empty'];[o(0xda)];['_depthValue'];[o(0xc5)];[o(0x122)];[o(0x104)];[o(0x129)];[o(0xf6)]=![];[o(0xe8)]=0x0;[o(0x121)]=0x0;['_depthSpacing']=0x24;[o(0x110)]=0x0;['_rotateY']=0x0;['_translateX']=0x0;[o(0x10e)]=0x0;['_scale']=0x1;[o(0x120)]=[];['_dragStart'];['_boundPointerMove'];[o(0xdd)];constructor(){const p=o;super(),this[p(0xf8)](),this[p(0xd5)]=this['_getDomElement']('viewport'),this[p(0x11b)]=this[p(0xec)](p(0xd9)),this[p(0xf3)]=this['_getDomElement'](p(0xc3)),this[p(0x124)]=this['_getDomElement'](p(0x12c)),this[p(0xda)]=this['_getDomElement'](p(0xf9)),this['_depthValue']=this[p(0xec)](p(0x117)),this['_boundPointerMove']=this[p(0xcd)][p(0xea)](this),this[p(0xdd)]=this[p(0x118)][p(0xea)](this),this['_depthSlider']['addEventListener'](p(0xc6),()=>{const q=p;this[q(0xfe)]=Number(this['_depthSlider'][q(0x112)]),this[q(0x11f)]['textContent']=this['_depthSpacing']+'px',this[q(0xf1)]();}),this['_viewport']['addEventListener']('pointerdown',c=>this[p(0xe5)](c)),this[p(0xd5)]['addEventListener'](p(0xbd),c=>this['_onWheel'](c),{'passive':![]}),this[p(0xd5)][p(0xd7)](p(0x102),c=>c[p(0xee)]()),this[p(0x129)]=new ResizeObserver(()=>this[p(0x10f)]());}['ready'](){const r=o;this['_resizeObserver']['observe'](this),this[r(0xc2)]();}['_scheduleRender'](){const s=o;this['_reRenderFlag']===![]&&(this[s(0xf6)]=!![],setTimeout(()=>this[s(0xde)](),0x32));}async['_reRender'](){const t=o;if(!this[t(0xc5)])return;const c=this['_instanceServiceContainer'][t(0x100)];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c['designerPixelSize'];this[t(0xe8)]=Math['max'](d['width'],0x1),this['_maxY']=Math[t(0x11d)](d['height'],0x1);const e=this['_createLayerTree']();this['_content'][t(0xfd)](e[t(0xef)]),this[t(0x11b)][t(0xf2)][t(0xf7)]=this['_maxX']+'px',this['_scene'][t(0xf2)][t(0xd6)]=this[t(0x121)]+'px',this['_content']['style']['width']=this[t(0xe8)]+'px',this['_content']['style']['height']=this[t(0x121)]+'px',this[t(0x124)]['style']['display']=e[t(0xc0)]?'none':'flex',this['_updateLayerDepths'](),this['_fitScene'](),this['_reRenderFlag']=![];}[o(0x108)](c){const u=o,d=c?.[u(0xe3)],e=c?.[u(0xd4)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x12d)]);this[u(0x11a)][u(0xed)]=f?.['adoptedStyleSheets']?[...f[u(0xed)]]:[];}[o(0x10d)](){const v=o,c=this['_instanceServiceContainer']['rootDesignItem'],d=document['createDocumentFragment']();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[v(0xcf)]()){if(f[v(0x128)]!==NodeType[v(0xdf)])continue;const g=f[v(0xe3)]['cloneNode'](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0xdc)](c['element'][w(0x114)]),g=Array[w(0xdc)](d['childNodes']);for(const h of c[w(0xcf)]()){if(h[w(0x128)]!==NodeType[w(0xdf)])continue;const i=f[w(0xeb)](k=>k===h[w(0xcc)]),j=g[i];j instanceof Element&&(e=this[w(0x125)](h,j,e));}return e;}[o(0x126)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0xf2)]['transformStyle']=x(0xd1),c[x(0xf2)]['willChange']=x(0x10a),this['_layerDepthEntries']['push']({'element':c,'depth':d}));}[o(0xf1)](){const y=o;this['_depthValue'][y(0x116)]=this['_depthSpacing']+'px';if(!this[y(0x120)][y(0x106)])return;const c=this['_layerDepthEntries']['map'](i=>i[y(0x103)]),d=Math['min'](...c),e=Math[y(0x11d)](...c),f=Math[y(0x11d)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0xfe)]*0x2,h=new Map();for(const i of this[y(0x120)]){h['set'](i[y(0xe3)],i[y(0x103)]);}for(const j of this[y(0x120)]){let k=j[y(0xe3)][y(0xbe)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[y(0xe3)][y(0xf2)]['translate']=y(0xc4)+(g(j[y(0x103)])-m)+'px';}}['_fitScene'](){const z=o,c=this[z(0xd5)][z(0xe9)]();if(!c['width']||!c[z(0xd6)]||!this['_maxX']||!this[z(0x121)])return;const d=Math[z(0x101)](c[z(0xf7)]/this[z(0xe8)],c[z(0xd6)]/this['_maxY'])*0.72;this[z(0xc8)]=Math['min'](Math[z(0x11d)](d,0.05),0x4),this['_translateX']=0x0,this[z(0x10e)]=0x0,this[z(0xc2)]();}[o(0xc2)](){const A=o;this[A(0x11b)][A(0xf2)]['transformStyle']='preserve-3d',this[A(0xf3)]['style']['transformStyle']='preserve-3d',this['_scene']['style']['transform']=A(0xd2)+A(0xc7)+this['_translateX']+A(0xe6)+this['_translateY']+'px)\x20'+A(0xfc)+this[A(0xc8)]+')\x20'+'rotateX('+this['_rotateX']+'deg)\x20'+A(0xdb)+this[A(0x111)]+'deg)',this[A(0xf3)][A(0xf2)]['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this['_depthSlider']||c[B(0x10c)]!==0x0&&c[B(0x10c)]!==0x1&&c['button']!==0x2)return;this[B(0x10b)]={'x':c['clientX'],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this[B(0xe1)],'translateY':this[B(0x10e)],'pan':c['button']===0x1||c[B(0x10c)]===0x2||c[B(0xfb)]},this['_viewport']['classList'][B(0x109)]('dragging'),this['_viewport'][B(0xf5)](c['pointerId']),this[B(0xd5)][B(0xd7)](B(0x113),this['_boundPointerMove']),this['_viewport']['addEventListener'](B(0xf4),this['_boundPointerUp']),this['_viewport']['addEventListener'](B(0x11c),this[B(0xdd)]),c[B(0xee)]();}[o(0xcd)](c){const C=o;if(!this['_dragStart'])return;const d=c[C(0x11e)]-this['_dragStart']['x'],e=c[C(0x107)]-this['_dragStart']['y'];this[C(0x10b)]['pan']?(this[C(0xe1)]=this['_dragStart']['translateX']+d,this['_translateY']=this[C(0x10b)][C(0xcb)]+e):(this[C(0x111)]=this['_dragStart']['rotateY']+d*0.35,this['_rotateX']=Math[C(0x101)](0x55,Math[C(0x11d)](-0x55,this[C(0x10b)][C(0xbf)]-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}[o(0x118)](c){const D=o;this['_dragStart']=null,this[D(0xd5)][D(0xfa)]['remove'](D(0xf0)),this[D(0xd5)]['releasePointerCapture'](c['pointerId']),this[D(0xd5)][D(0xff)]('pointermove',this[D(0x119)]),this[D(0xd5)][D(0xff)]('pointerup',this['_boundPointerUp']),this[D(0xd5)]['removeEventListener']('pointercancel',this['_boundPointerUp']);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0xc8)]=Math['min'](0x6,Math['max'](0.03,this['_scale']*d)),this[E(0xc2)](),c['preventDefault']();}set[o(0xce)](c){const F=o;this['_contentChangedHandler']?.[F(0x12a)](),this['_zoomFactorChangedHandler']?.['dispose'](),this[F(0xc5)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][F(0x100)][F(0xe0)]['on'](()=>{this['_scheduleRender']();}),this[F(0x122)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{const G=F;this[G(0xca)]();}),this[F(0xca)]()):(this[F(0xf3)]['replaceChildren'](),this['_layerDepthEntries']=[],this['_empty']['style'][F(0xd8)]='flex');}}customElements[o(0x12b)](o(0x127),LayerDepthView);