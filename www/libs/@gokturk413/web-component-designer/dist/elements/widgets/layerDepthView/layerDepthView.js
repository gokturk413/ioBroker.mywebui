const o=b;function a(){const I=['min','26ufrIHU','wheel','_boundPointerMove','transformStyle','deg)\x20','_maxY','children','button','addEventListener','_scale','depth','empty','display','designerPixelSize','94750eSHbvA','pointerdown','replaceChildren','_viewport','ready','shadowRoot','node-projects-web-component-designer-layer-depth-view','_reRenderFlag','_prepareCloneTree','clientY','_translateX','viewport','_applySceneTransform','observe','_onPointerDown','35HsEWQX','_getDomElement','110430lDGZGR','none','9utfQqa','element','529612AIxXSC','max','from','deltaY','bind','content','_empty','6682308ObjyeD','_prepareCloneElement','scene','height','value','143eUulot','_fitScene','_translateY','_depthSlider','Element','33348ZkmLyd','46488BscOqB','usableContainer','appendChild','846iWEarW','rotateY','width','1009775WOMwmc','rootDesignItem','_depthSpacing','_reRender','_depthValue','input','_updateLayerDepths','remove','nodeType','_boundPointerUp','clientX','_layerDepthEntries','_zoomFactorChangedHandler','rotateX(','_resizeObserver','pointercancel','_onPointerUp','px)\x20','childNodes','14bjjYbn','flex','_onPointerMove','_rotateX','style','pointerup','onContentChanged','rotateY(','_content','_instanceServiceContainer','pan','adoptedStyleSheets','_dragStart','_maxX','classList','translateY','_scheduleRender','_createLayerTree','translate','_copyAdoptedStyleSheets','map','deg)','translate(','parentElement','_onWheel','_scene','createDocumentFragment'];a=function(){return I;};return a();}function b(c,d){c=c-0x86;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xdd))/0x1*(parseInt(n(0x8d))/0x2)+parseInt(n(0xca))/0x3*(parseInt(n(0xcc))/0x4)+-parseInt(n(0xe4))/0x5+-parseInt(n(0xc8))/0x6*(parseInt(n(0xc6))/0x7)+parseInt(n(0xde))/0x8*(-parseInt(n(0xe1))/0x9)+-parseInt(n(0xb7))/0xa*(parseInt(n(0xd8))/0xb)+parseInt(n(0xd3))/0xc*(parseInt(n(0xa9))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4caf6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x91)]=css`
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
        </div>`;[o(0xba)];['_scene'];[o(0x95)];[o(0xd2)];['_depthSlider'];['_depthValue'];[o(0x96)];['_contentChangedHandler'];[o(0x86)];['_resizeObserver'];[o(0xbe)]=![];[o(0x9a)]=0x0;[o(0xae)]=0x0;[o(0xe6)]=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0xb2)]=0x1;['_layerDepthEntries']=[];[o(0x99)];[o(0xab)];[o(0xed)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_viewport']=this[p(0xc7)](p(0xc2)),this['_scene']=this[p(0xc7)](p(0xd5)),this['_content']=this['_getDomElement'](p(0xd1)),this['_empty']=this[p(0xc7)](p(0xb4)),this[p(0xdb)]=this['_getDomElement']('depthSlider'),this[p(0xe8)]=this['_getDomElement']('depthValue'),this[p(0xab)]=this[p(0x8f)][p(0xd0)](this),this['_boundPointerUp']=this['_onPointerUp']['bind'](this),this['_depthSlider'][p(0xb1)](p(0xe9),()=>{const q=p;this['_depthSpacing']=Number(this[q(0xdb)][q(0xd7)]),this['_depthValue']['textContent']=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this['_viewport']['addEventListener'](p(0xb8),c=>this[p(0xc5)](c)),this['_viewport'][p(0xb1)](p(0xaa),c=>this[p(0xa5)](c),{'passive':![]}),this[p(0xba)]['addEventListener']('contextmenu',c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0xd9)]());}[o(0xbb)](){const r=o;this[r(0x88)][r(0xc4)](this),this[r(0xc3)]();}[o(0x9d)](){const s=o;this[s(0xbe)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0xe7)](),0x32));}async[o(0xe7)](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0x96)]['designerCanvas'];this[t(0xa0)](c[t(0xe5)]);const d=c[t(0xb6)];this['_maxX']=Math['max'](d[t(0xe3)],0x1),this['_maxY']=Math['max'](d[t(0xd6)],0x1);const e=this['_createLayerTree']();this[t(0x95)]['replaceChildren'](e['fragment']),this[t(0xa6)][t(0x91)][t(0xe3)]=this['_maxX']+'px',this['_scene']['style']['height']=this[t(0xae)]+'px',this[t(0x95)]['style'][t(0xe3)]=this['_maxX']+'px',this[t(0x95)][t(0x91)][t(0xd6)]=this['_maxY']+'px',this[t(0xd2)][t(0x91)][t(0xb5)]=e['count']?t(0xc9):t(0x8e),this[t(0xea)](),this['_fitScene'](),this['_reRenderFlag']=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.[u(0xcb)],e=c?.[u(0xdf)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this[u(0xbc)]['adoptedStyleSheets']=f?.[u(0x98)]?[...f[u(0x98)]]:[];}[o(0x9e)](){const v=o,c=this[v(0x96)]['rootDesignItem'],d=document[v(0xa7)]();let e=0x0;this[v(0xef)]=[];for(const f of c['children']()){if(f[v(0xec)]!==NodeType[v(0xdc)])continue;const g=f['element']['cloneNode'](!![]);d[v(0xe0)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}[o(0xbf)](c,d,e){const w=o;this[w(0xd4)](d,e),e++;const f=Array[w(0xce)](c[w(0xcb)]['childNodes']),g=Array[w(0xce)](d[w(0x8c)]);for(const h of c[w(0xaf)]()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style'][x(0xac)]='preserve-3d',c['style']['willChange']=x(0x9f),this[x(0xef)]['push']({'element':c,'depth':d}));}[o(0xea)](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this['_layerDepthEntries']['length'])return;const c=this['_layerDepthEntries'][y(0xa1)](i=>i[y(0xb3)]),d=Math['min'](...c),e=Math[y(0xcd)](...c),f=Math[y(0xcd)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0xe6)]*0x2,h=new Map();for(const i of this[y(0xef)]){h['set'](i[y(0xcb)],i[y(0xb3)]);}for(const j of this['_layerDepthEntries']){let k=j[y(0xcb)]['parentElement'],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k[y(0xa4)];}const m=l===undefined?0x0:g(l);j['element']['style']['translate']='0\x200\x20'+(g(j[y(0xb3)])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c['width']||!c['height']||!this['_maxX']||!this['_maxY'])return;const d=Math['min'](c[z(0xe3)]/this['_maxX'],c['height']/this[z(0xae)])*0.72;this[z(0xb2)]=Math[z(0xa8)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this['_applySceneTransform']();}['_applySceneTransform'](){const A=o;this[A(0xa6)]['style'][A(0xac)]='preserve-3d',this['_content']['style']['transformStyle']='preserve-3d',this['_scene'][A(0x91)]['transform']='translate(-50%,\x20-50%)\x20'+A(0xa3)+this[A(0xc1)]+'px,\x20'+this[A(0xda)]+A(0x8b)+'scale('+this[A(0xb2)]+')\x20'+A(0x87)+this[A(0x90)]+A(0xad)+A(0x94)+this['_rotateY']+A(0xa2),this['_content'][A(0x91)]['transform']='';}['_onPointerDown'](c){const B=o;if(c['target']===this[B(0xdb)]||c[B(0xb0)]!==0x0&&c['button']!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c['clientY'],'rotateX':this[B(0x90)],'rotateY':this['_rotateY'],'translateX':this[B(0xc1)],'translateY':this['_translateY'],'pan':c['button']===0x1||c['button']===0x2||c['shiftKey']},this[B(0xba)]['classList']['add']('dragging'),this['_viewport']['setPointerCapture'](c['pointerId']),this[B(0xba)]['addEventListener']('pointermove',this[B(0xab)]),this['_viewport']['addEventListener'](B(0x92),this[B(0xed)]),this['_viewport'][B(0xb1)](B(0x89),this['_boundPointerUp']),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this[C(0x99)])return;const d=c[C(0xee)]-this['_dragStart']['x'],e=c[C(0xc0)]-this['_dragStart']['y'];this[C(0x99)][C(0x97)]?(this['_translateX']=this[C(0x99)]['translateX']+d,this['_translateY']=this[C(0x99)][C(0x9c)]+e):(this['_rotateY']=this['_dragStart'][C(0xe2)]+d*0.35,this[C(0x90)]=Math[C(0xa8)](0x55,Math['max'](-0x55,this[C(0x99)]['rotateX']-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}[o(0x8a)](c){const D=o;this['_dragStart']=null,this['_viewport'][D(0x9b)][D(0xeb)]('dragging'),this['_viewport']['releasePointerCapture'](c['pointerId']),this['_viewport']['removeEventListener']('pointermove',this['_boundPointerMove']),this['_viewport']['removeEventListener']('pointerup',this[D(0xed)]),this['_viewport']['removeEventListener']('pointercancel',this['_boundPointerUp']);}[o(0xa5)](c){const E=o,d=c[E(0xcf)]<0x0?1.08:0.92;this['_scale']=Math['min'](0x6,Math[E(0xcd)](0.03,this['_scale']*d)),this[E(0xc3)](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this['_contentChangedHandler']?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[F(0x96)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const G=F;this[G(0x9d)]();}),this['_contentChangedHandler']=this['_instanceServiceContainer'][F(0x93)]['on'](()=>{const H=F;this[H(0x9d)]();}),this[F(0x9d)]()):(this[F(0x95)][F(0xb9)](),this[F(0xef)]=[],this['_empty'][F(0x91)]['display']=F(0x8e));}}customElements['define'](o(0xbd),LayerDepthView);