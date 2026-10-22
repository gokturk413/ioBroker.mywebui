const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x7d))/0x1+parseInt(n(0x90))/0x2+-parseInt(n(0x8d))/0x3*(parseInt(n(0x84))/0x4)+parseInt(n(0x88))/0x5+-parseInt(n(0xbb))/0x6*(-parseInt(n(0x82))/0x7)+parseInt(n(0xb7))/0x8+parseInt(n(0x79))/0x9*(-parseInt(n(0xc8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f57f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x75;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0x94)];[o(0xce)];['_content'];[o(0x98)];[o(0xa1)];['_depthValue'];[o(0x7a)];[o(0xb1)];['_zoomFactorChangedHandler'];['_resizeObserver'];['_reRenderFlag']=![];[o(0x8f)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;['_rotateX']=0x0;[o(0xd2)]=0x0;['_translateX']=0x0;['_translateY']=0x0;['_scale']=0x1;['_layerDepthEntries']=[];['_dragStart'];[o(0xac)];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0xb3)](),this[p(0x94)]=this['_getDomElement'](p(0xc4)),this[p(0xce)]=this[p(0xb4)](p(0xb9)),this['_content']=this[p(0xb4)]('content'),this['_empty']=this['_getDomElement'](p(0x91)),this['_depthSlider']=this['_getDomElement']('depthSlider'),this['_depthValue']=this['_getDomElement']('depthValue'),this['_boundPointerMove']=this['_onPointerMove']['bind'](this),this[p(0x83)]=this[p(0x87)][p(0xc1)](this),this['_depthSlider'][p(0xa9)](p(0xd4),()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider'][q(0x89)]),this[q(0x9b)]['textContent']=this['_depthSpacing']+'px',this[q(0xa2)]();}),this[p(0x94)]['addEventListener'](p(0xcf),c=>this['_onPointerDown'](c)),this[p(0x94)]['addEventListener']('wheel',c=>this['_onWheel'](c),{'passive':![]}),this[p(0x94)][p(0xa9)](p(0xcc),c=>c['preventDefault']()),this[p(0x8e)]=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this[r(0x8e)][r(0x9f)](this),this['_applySceneTransform']();}[o(0x8c)](){const s=o;this[s(0x9e)]===![]&&(this[s(0x9e)]=!![],setTimeout(()=>this[s(0xcb)](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0x7a)]['designerCanvas'];this[t(0xc9)](c['rootDesignItem']);const d=c[t(0xca)];this[t(0x8f)]=Math[t(0x95)](d['width'],0x1),this[t(0x99)]=Math['max'](d[t(0xb8)],0x1);const e=this[t(0x97)]();this['_content'][t(0xad)](e['fragment']),this['_scene'][t(0xaf)]['width']=this[t(0x8f)]+'px',this['_scene']['style']['height']=this[t(0x99)]+'px',this['_content']['style']['width']=this['_maxX']+'px',this['_content'][t(0xaf)]['height']=this[t(0x99)]+'px',this['_empty'][t(0xaf)]['display']=e[t(0x9d)]?'none':t(0xd0),this['_updateLayerDepths'](),this[t(0x7c)](),this[t(0x9e)]=![];}[o(0xc9)](c){const u=o,d=c?.[u(0xba)],e=c?.[u(0xb6)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x7b)]);this['shadowRoot'][u(0xd7)]=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x7a)][v(0x75)],d=document[v(0x80)]();let e=0x0;this[v(0xc6)]=[];for(const f of c['children']()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array['from'](c[w(0xba)]['childNodes']),g=Array['from'](d['childNodes']);for(const h of c[w(0xa3)]()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']=x(0xa6),c[x(0xaf)]['willChange']='translate',this['_layerDepthEntries'][x(0xa7)]({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this[y(0x9b)][y(0xc2)]=this['_depthSpacing']+'px';if(!this[y(0xc6)]['length'])return;const c=this['_layerDepthEntries'][y(0x8b)](i=>i[y(0xd5)]),d=Math['min'](...c),e=Math[y(0x95)](...c),f=Math[y(0x95)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[y(0xc6)]){h[y(0xc5)](i[y(0xba)],i['depth']);}for(const j of this['_layerDepthEntries']){let k=j[y(0xba)]['parentElement'],l;while(k){l=h[y(0xd6)](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j['element'][y(0xaf)]['translate']='0\x200\x20'+(g(j[y(0xd5)])-m)+'px';}}[o(0x7c)](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c['width']||!c[z(0xb8)]||!this['_maxX']||!this[z(0x99)])return;const d=Math[z(0x86)](c[z(0xd8)]/this['_maxX'],c[z(0xb8)]/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[z(0x95)](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this[z(0x76)]();}['_applySceneTransform'](){const A=o;this['_scene']['style'][A(0x9c)]='preserve-3d',this[A(0xab)]['style'][A(0x9c)]='preserve-3d',this[A(0xce)]['style']['transform']='translate(-50%,\x20-50%)\x20'+A(0x81)+this[A(0xb0)]+A(0x96)+this[A(0x8a)]+'px)\x20'+'scale('+this['_scale']+')\x20'+A(0xd1)+this['_rotateX']+'deg)\x20'+'rotateY('+this[A(0xd2)]+'deg)',this['_content'][A(0xaf)]['transform']='';}[o(0xc0)](c){const B=o;if(c[B(0xa5)]===this['_depthSlider']||c[B(0xbf)]!==0x0&&c[B(0xbf)]!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c[B(0xcd)],'y':c['clientY'],'rotateX':this[B(0xae)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c['button']===0x1||c['button']===0x2||c[B(0xc3)]},this['_viewport'][B(0xa0)][B(0x93)]('dragging'),this['_viewport']['setPointerCapture'](c['pointerId']),this[B(0x94)]['addEventListener']('pointermove',this[B(0xac)]),this['_viewport'][B(0xa9)]('pointerup',this[B(0x83)]),this['_viewport']['addEventListener'](B(0xd3),this[B(0x83)]),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this[C(0x78)])return;const d=c['clientX']-this['_dragStart']['x'],e=c['clientY']-this[C(0x78)]['y'];this['_dragStart']['pan']?(this[C(0xb0)]=this['_dragStart']['translateX']+d,this['_translateY']=this[C(0x78)][C(0xb2)]+e):(this[C(0xd2)]=this[C(0x78)]['rotateY']+d*0.35,this[C(0xae)]=Math['min'](0x55,Math['max'](-0x55,this['_dragStart'][C(0x9a)]-e*0.35))),this[C(0x76)](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this['_dragStart']=null,this['_viewport']['classList']['remove'](D(0xb5)),this['_viewport']['releasePointerCapture'](c[D(0x77)]),this[D(0x94)]['removeEventListener'](D(0x7e),this[D(0xac)]),this['_viewport']['removeEventListener'](D(0x92),this['_boundPointerUp']),this[D(0x94)]['removeEventListener']('pointercancel',this['_boundPointerUp']);}[o(0xbe)](c){const E=o,d=c[E(0xa4)]<0x0?1.08:0.92;this['_scale']=Math[E(0x86)](0x6,Math['max'](0.03,this[E(0xbd)]*d)),this[E(0x76)](),c['preventDefault']();}set[o(0xaa)](c){const F=o;this['_contentChangedHandler']?.['dispose'](),this['_zoomFactorChangedHandler']?.[F(0xbc)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[F(0x7a)][F(0xc7)][F(0x85)]['on'](()=>{const G=F;this[G(0x8c)]();}),this[F(0xb1)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{const H=F;this[H(0x8c)]();}),this['_scheduleRender']()):(this[F(0xab)]['replaceChildren'](),this['_layerDepthEntries']=[],this['_empty']['style'][F(0xa8)]=F(0xd0));}}customElements[o(0x7f)]('node-projects-web-component-designer-layer-depth-view',LayerDepthView);function a(){const I=['_updateLayerDepths','children','deltaY','target','preserve-3d','push','display','addEventListener','instanceServiceContainer','_content','_boundPointerMove','replaceChildren','_rotateX','style','_translateX','_contentChangedHandler','translateY','_restoreCachedInititalValues','_getDomElement','dragging','usableContainer','2658064UYctem','height','scene','element','1098UNdWUX','dispose','_scale','_onWheel','button','_onPointerDown','bind','textContent','shiftKey','viewport','set','_layerDepthEntries','designerCanvas','130qdrVjO','_copyAdoptedStyleSheets','designerPixelSize','_reRender','contextmenu','clientX','_scene','pointerdown','flex','rotateX(','_rotateY','pointercancel','input','depth','get','adoptedStyleSheets','width','rootDesignItem','_applySceneTransform','pointerId','_dragStart','697941RcFdBJ','_instanceServiceContainer','ownerDocument','_fitScene','292231NrdtNm','pointermove','define','createDocumentFragment','translate(','32809PNeEKp','_boundPointerUp','3036468xXtnIw','onZoomFactorChanged','min','_onPointerUp','3963215fBWBPB','value','_translateY','map','_scheduleRender','3wboAXS','_resizeObserver','_maxX','1065852sWdfPZ','empty','pointerup','add','_viewport','max','px,\x20','_createLayerTree','_empty','_maxY','rotateX','_depthValue','transformStyle','count','_reRenderFlag','observe','classList','_depthSlider'];a=function(){return I;};return a();}