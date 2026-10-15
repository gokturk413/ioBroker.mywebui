function a(){const G=['transformStyle','releasePointerCapture','_contentChangedHandler','9423792TPFzvG','preserve-3d','_dragStart','set','removeEventListener','_onPointerUp','max','shiftKey','preventDefault','pointermove','_reRenderFlag','_scheduleRender','_zoomFactorChangedHandler','_resizeObserver','_layerDepthEntries','_maxX','_content','pointerId','pointercancel','_boundPointerMove','_scale','_depthValue','display','_translateX','_reRender','height','_applySceneTransform','children','fragment','_getDomElement','_viewport','addEventListener','childNodes','empty','_empty','element','onContentChanged','nodeType','createDocumentFragment','clientX','translate','pointerup','2017818BMyaKg','px,\x20','_boundPointerUp','viewport','_rotateX','usableContainer','ready','1052JcTdvS','from','0\x200\x20','transform','contextmenu','_updateLayerDepths','_onPointerMove','setPointerCapture','button','node','translateY','1419snLhlX','64450LxyTBT','flex','style','rotateY','dragging','depth','pan','_depthSlider','designerCanvas','dispose','_maxY','967238fMPPxx','textContent','_instanceServiceContainer','_rotateY','deg)\x20','_restoreCachedInititalValues','1iLeJPj','_translateY','remove','_depthSpacing','267547dfyXLm','classList','_scene','8187dZwVDA','_prepareCloneTree','value','deltaY','width','675525JHzayg','getBoundingClientRect','parentElement','90QMEDbr','_onPointerDown','clientY','_copyAdoptedStyleSheets','rotateX(','min','cloneNode'];a=function(){return G;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x228))/0x1*(parseInt(n(0x222))/0x2)+-parseInt(n(0x22f))/0x3*(parseInt(n(0x20b))/0x4)+parseInt(n(0x234))/0x5+-parseInt(n(0x237))/0x6*(-parseInt(n(0x22c))/0x7)+parseInt(n(0x1da))/0x8+-parseInt(n(0x204))/0x9+parseInt(n(0x217))/0xa*(-parseInt(n(0x216))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x91ac7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1d7;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0x1f8)];['_scene'];[o(0x1ea)];[o(0x1fc)];['_depthSlider'];[o(0x1ef)];[o(0x224)];[o(0x1d9)];['_zoomFactorChangedHandler'];['_resizeObserver'];[o(0x1e4)]=![];['_maxX']=0x0;['_maxY']=0x0;[o(0x22b)]=0x24;[o(0x208)]=0x0;[o(0x225)]=0x0;[o(0x1f1)]=0x0;[o(0x229)]=0x0;['_scale']=0x1;['_layerDepthEntries']=[];[o(0x1dc)];[o(0x1ed)];[o(0x206)];constructor(){const p=o;super(),this[p(0x227)](),this['_viewport']=this[p(0x1f7)](p(0x207)),this[p(0x22e)]=this[p(0x1f7)]('scene'),this['_content']=this[p(0x1f7)]('content'),this[p(0x1fc)]=this[p(0x1f7)](p(0x1fb)),this[p(0x21e)]=this[p(0x1f7)]('depthSlider'),this['_depthValue']=this['_getDomElement']('depthValue'),this['_boundPointerMove']=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this[p(0x1df)]['bind'](this),this[p(0x21e)]['addEventListener']('input',()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider'][q(0x231)]),this['_depthValue']['textContent']=this[q(0x22b)]+'px',this[q(0x210)]();}),this['_viewport']['addEventListener']('pointerdown',c=>this[p(0x238)](c)),this[p(0x1f8)]['addEventListener']('wheel',c=>this['_onWheel'](c),{'passive':![]}),this[p(0x1f8)]['addEventListener'](p(0x20f),c=>c[p(0x1e2)]()),this[p(0x1e7)]=new ResizeObserver(()=>this['_fitScene']());}[o(0x20a)](){this['_resizeObserver']['observe'](this),this['_applySceneTransform']();}['_scheduleRender'](){const r=o;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[r(0x1f2)](),0x32));}async[o(0x1f2)](){const s=o;if(!this['_instanceServiceContainer'])return;const c=this[s(0x224)][s(0x21f)];this[s(0x23a)](c['rootDesignItem']);const d=c['designerPixelSize'];this[s(0x1e9)]=Math['max'](d['width'],0x1),this['_maxY']=Math[s(0x1e0)](d[s(0x1f3)],0x1);const e=this['_createLayerTree']();this['_content']['replaceChildren'](e[s(0x1f6)]),this[s(0x22e)][s(0x219)][s(0x233)]=this['_maxX']+'px',this['_scene'][s(0x219)][s(0x1f3)]=this[s(0x221)]+'px',this[s(0x1ea)][s(0x219)]['width']=this['_maxX']+'px',this[s(0x1ea)][s(0x219)][s(0x1f3)]=this[s(0x221)]+'px',this[s(0x1fc)]['style'][s(0x1f0)]=e['count']?'none':s(0x218),this[s(0x210)](),this['_fitScene'](),this['_reRenderFlag']=![];}[o(0x23a)](c){const t=o,d=c?.[t(0x1fd)],e=c?.[t(0x209)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot']['adoptedStyleSheets']=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const u=o,c=this['_instanceServiceContainer']['rootDesignItem'],d=document[u(0x200)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[u(0x1f5)]()){if(f[u(0x1ff)]!==NodeType['Element'])continue;const g=f['element'][u(0x23d)](!![]);d['appendChild'](g),e=this[u(0x230)](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const v=o;this['_prepareCloneElement'](d,e),e++;const f=Array[v(0x20c)](c[v(0x1fd)][v(0x1fa)]),g=Array[v(0x20c)](d[v(0x1fa)]);for(const h of c['children']()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h[v(0x214)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const w=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[w(0x219)]['transformStyle']='preserve-3d',c['style']['willChange']='translate',this['_layerDepthEntries']['push']({'element':c,'depth':d}));}[o(0x210)](){const x=o;this['_depthValue'][x(0x223)]=this[x(0x22b)]+'px';if(!this[x(0x1e8)]['length'])return;const c=this[x(0x1e8)]['map'](i=>i['depth']),d=Math['min'](...c),e=Math[x(0x1e0)](...c),f=Math[x(0x1e0)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[x(0x1e8)]){h[x(0x1dd)](i[x(0x1fd)],i[x(0x21c)]);}for(const j of this[x(0x1e8)]){let k=j['element'][x(0x236)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[x(0x1fd)]['style'][x(0x202)]=x(0x20d)+(g(j['depth'])-m)+'px';}}['_fitScene'](){const y=o,c=this[y(0x1f8)][y(0x235)]();if(!c[y(0x233)]||!c['height']||!this[y(0x1e9)]||!this['_maxY'])return;const d=Math['min'](c['width']/this['_maxX'],c[y(0x1f3)]/this[y(0x221)])*0.72;this['_scale']=Math[y(0x23c)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this[y(0x1f4)]();}['_applySceneTransform'](){const z=o;this['_scene'][z(0x219)][z(0x1d7)]=z(0x1db),this[z(0x1ea)][z(0x219)][z(0x1d7)]='preserve-3d',this[z(0x22e)]['style'][z(0x20e)]='translate(-50%,\x20-50%)\x20'+'translate('+this[z(0x1f1)]+z(0x205)+this[z(0x229)]+'px)\x20'+'scale('+this[z(0x1ee)]+')\x20'+z(0x23b)+this[z(0x208)]+z(0x226)+'rotateY('+this[z(0x225)]+'deg)',this['_content'][z(0x219)][z(0x20e)]='';}[o(0x238)](c){const A=o;if(c['target']===this[A(0x21e)]||c[A(0x213)]!==0x0&&c[A(0x213)]!==0x1&&c[A(0x213)]!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c[A(0x239)],'rotateX':this['_rotateX'],'rotateY':this[A(0x225)],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c['button']===0x1||c['button']===0x2||c[A(0x1e1)]},this['_viewport'][A(0x22d)]['add'](A(0x21b)),this[A(0x1f8)][A(0x212)](c[A(0x1eb)]),this[A(0x1f8)]['addEventListener'](A(0x1e3),this['_boundPointerMove']),this['_viewport'][A(0x1f9)](A(0x203),this['_boundPointerUp']),this[A(0x1f8)][A(0x1f9)](A(0x1ec),this[A(0x206)]),c[A(0x1e2)]();}[o(0x211)](c){const B=o;if(!this['_dragStart'])return;const d=c[B(0x201)]-this[B(0x1dc)]['x'],e=c[B(0x239)]-this[B(0x1dc)]['y'];this[B(0x1dc)][B(0x21d)]?(this['_translateX']=this['_dragStart']['translateX']+d,this['_translateY']=this[B(0x1dc)][B(0x215)]+e):(this[B(0x225)]=this['_dragStart'][B(0x21a)]+d*0.35,this[B(0x208)]=Math[B(0x23c)](0x55,Math['max'](-0x55,this[B(0x1dc)]['rotateX']-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}[o(0x1df)](c){const C=o;this['_dragStart']=null,this['_viewport'][C(0x22d)][C(0x22a)](C(0x21b)),this[C(0x1f8)][C(0x1d8)](c[C(0x1eb)]),this[C(0x1f8)]['removeEventListener'](C(0x1e3),this[C(0x1ed)]),this['_viewport'][C(0x1de)](C(0x203),this['_boundPointerUp']),this[C(0x1f8)][C(0x1de)]('pointercancel',this[C(0x206)]);}['_onWheel'](c){const D=o,d=c[D(0x232)]<0x0?1.08:0.92;this[D(0x1ee)]=Math['min'](0x6,Math[D(0x1e0)](0.03,this[D(0x1ee)]*d)),this[D(0x1f4)](),c['preventDefault']();}set['instanceServiceContainer'](c){const E=o;this[E(0x1d9)]?.[E(0x220)](),this['_zoomFactorChangedHandler']?.['dispose'](),this[E(0x224)]=c,this[E(0x224)]?(this[E(0x1e6)]=this[E(0x224)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const F=E;this[F(0x1e5)]();}),this['_contentChangedHandler']=this['_instanceServiceContainer'][E(0x1fe)]['on'](()=>{this['_scheduleRender']();}),this['_scheduleRender']()):(this['_content']['replaceChildren'](),this[E(0x1e8)]=[],this[E(0x1fc)]['style'][E(0x1f0)]=E(0x218));}}customElements['define']('node-projects-web-component-designer-layer-depth-view',LayerDepthView);