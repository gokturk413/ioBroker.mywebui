const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x210))/0x1+-parseInt(n(0x1d6))/0x2*(parseInt(n(0x1ef))/0x3)+-parseInt(n(0x213))/0x4*(parseInt(n(0x1ed))/0x5)+-parseInt(n(0x228))/0x6+parseInt(n(0x223))/0x7*(-parseInt(n(0x21b))/0x8)+parseInt(n(0x1d5))/0x9+parseInt(n(0x20c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe7748));function a(){const G=['appendChild','_depthSpacing','bind','37024130VchZnu','_applySceneTransform','input','depth','1304101bjUQtq','translate(-50%,\x20-50%)\x20','_content','4bBRylX','_depthSlider','element','_instanceServiceContainer','Element','translate','get','translate(','15192IIjqUS','pointerup','pointercancel','pointerdown','removeEventListener','_scale','onZoomFactorChanged','viewport','3143VIKAUf','_translateY','width','_layerDepthEntries','_maxY','10245180eUOZHT','setPointerCapture','_reRender','_boundPointerUp','style','_reRenderFlag','scene','parentElement','_restoreCachedInititalValues','textContent','addEventListener','flex','ready','preserve-3d','_getDomElement','willChange','contextmenu','_viewport','node-projects-web-component-designer-layer-depth-view','content','push','_boundPointerMove','_onPointerUp','16062066otuVuu','76562xNgzRI','height','none','preventDefault','_contentChangedHandler','_rotateY','_zoomFactorChangedHandler','add','_dragStart','depthValue','_onWheel','deltaY','releasePointerCapture','replaceChildren','min','_onPointerDown','_createLayerTree','_fitScene','scale(','dispose','_onPointerMove','rootDesignItem','_updateLayerDepths','3182420LlFVvf','_copyAdoptedStyleSheets','3IdPdqx','_depthValue','createDocumentFragment','max','value','_maxX','_scene','children','pointermove','cloneNode','nodeType','childNodes','deg)\x20','_scheduleRender','button','rotateX','adoptedStyleSheets','count','template','_rotateX','instanceServiceContainer','_translateX','clientY','_resizeObserver','display','designerCanvas'];a=function(){return G;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0x1cb;const e=a();let f=e[c];return f;}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x22c)]=css`
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
        }`;static [o(0x201)]=html`
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
        </div>`;[o(0x1cf)];[o(0x1f5)];['_content'];['_empty'];['_depthSlider'];[o(0x1f0)];['_instanceServiceContainer'];['_contentChangedHandler'];['_zoomFactorChangedHandler'];['_resizeObserver'];[o(0x22d)]=![];[o(0x1f4)]=0x0;[o(0x227)]=0x0;[o(0x20a)]=0x24;[o(0x202)]=0x0;[o(0x1db)]=0x0;[o(0x204)]=0x0;[o(0x224)]=0x0;[o(0x220)]=0x1;['_layerDepthEntries']=[];[o(0x1de)];[o(0x1d3)];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x230)](),this[p(0x1cf)]=this[p(0x1cc)](p(0x222)),this['_scene']=this[p(0x1cc)](p(0x22e)),this[p(0x212)]=this['_getDomElement'](p(0x1d1)),this['_empty']=this['_getDomElement']('empty'),this['_depthSlider']=this[p(0x1cc)]('depthSlider'),this[p(0x1f0)]=this[p(0x1cc)](p(0x1df)),this['_boundPointerMove']=this['_onPointerMove'][p(0x20b)](this),this['_boundPointerUp']=this[p(0x1d4)]['bind'](this),this[p(0x214)][p(0x232)](p(0x20e),()=>{const q=p;this['_depthSpacing']=Number(this[q(0x214)][q(0x1f3)]),this[q(0x1f0)]['textContent']=this[q(0x20a)]+'px',this[q(0x1ec)]();}),this['_viewport']['addEventListener'](p(0x21e),c=>this[p(0x1e5)](c)),this['_viewport']['addEventListener']('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport']['addEventListener'](p(0x1ce),c=>c[p(0x1d9)]()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0x1e7)]());}[o(0x234)](){const r=o;this[r(0x206)]['observe'](this),this[r(0x20d)]();}[o(0x1fc)](){const s=o;this[s(0x22d)]===![]&&(this[s(0x22d)]=!![],setTimeout(()=>this[s(0x22a)](),0x32));}async[o(0x22a)](){const t=o;if(!this[t(0x216)])return;const c=this['_instanceServiceContainer'][t(0x208)];this[t(0x1ee)](c['rootDesignItem']);const d=c['designerPixelSize'];this[t(0x1f4)]=Math['max'](d[t(0x225)],0x1),this[t(0x227)]=Math['max'](d[t(0x1d7)],0x1);const e=this[t(0x1e6)]();this[t(0x212)]['replaceChildren'](e['fragment']),this[t(0x1f5)][t(0x22c)][t(0x225)]=this[t(0x1f4)]+'px',this[t(0x1f5)]['style']['height']=this[t(0x227)]+'px',this[t(0x212)][t(0x22c)]['width']=this[t(0x1f4)]+'px',this['_content'][t(0x22c)][t(0x1d7)]=this[t(0x227)]+'px',this['_empty']['style'][t(0x207)]=e[t(0x200)]?t(0x1d8):'flex',this['_updateLayerDepths'](),this['_fitScene'](),this[t(0x22d)]=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.[u(0x215)],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot'][u(0x1ff)]=f?.['adoptedStyleSheets']?[...f[u(0x1ff)]]:[];}['_createLayerTree'](){const v=o,c=this['_instanceServiceContainer'][v(0x1eb)],d=document[v(0x1f1)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[v(0x1f6)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element'][v(0x1f8)](!![]);d[v(0x209)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array['from'](c['element'][w(0x1fa)]),g=Array['from'](d['childNodes']);for(const h of c['children']()){if(h[w(0x1f9)]!==NodeType[w(0x217)])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x22c)]['transformStyle']=x(0x1cb),c[x(0x22c)][x(0x1cd)]='translate',this['_layerDepthEntries'][x(0x1d2)]({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue'][y(0x231)]=this['_depthSpacing']+'px';if(!this['_layerDepthEntries']['length'])return;const c=this['_layerDepthEntries']['map'](i=>i[y(0x20f)]),d=Math[y(0x1e4)](...c),e=Math['max'](...c),f=Math[y(0x1f2)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x20a)]*0x2,h=new Map();for(const i of this[y(0x226)]){h['set'](i['element'],i['depth']);}for(const j of this[y(0x226)]){let k=j[y(0x215)][y(0x22f)],l;while(k){l=h[y(0x219)](k);if(l!==undefined)break;k=k[y(0x22f)];}const m=l===undefined?0x0:g(l);j[y(0x215)]['style'][y(0x218)]='0\x200\x20'+(g(j[y(0x20f)])-m)+'px';}}['_fitScene'](){const z=o,c=this[z(0x1cf)]['getBoundingClientRect']();if(!c[z(0x225)]||!c['height']||!this[z(0x1f4)]||!this['_maxY'])return;const d=Math['min'](c['width']/this[z(0x1f4)],c['height']/this['_maxY'])*0.72;this['_scale']=Math[z(0x1e4)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this[z(0x20d)]();}['_applySceneTransform'](){const A=o;this[A(0x1f5)]['style']['transformStyle']=A(0x1cb),this[A(0x212)][A(0x22c)]['transformStyle']='preserve-3d',this[A(0x1f5)][A(0x22c)]['transform']=A(0x211)+A(0x21a)+this[A(0x204)]+'px,\x20'+this['_translateY']+'px)\x20'+A(0x1e8)+this['_scale']+')\x20'+'rotateX('+this[A(0x202)]+A(0x1fb)+'rotateY('+this[A(0x1db)]+'deg)',this[A(0x212)][A(0x22c)]['transform']='';}[o(0x1e5)](c){const B=o;if(c['target']===this['_depthSlider']||c[B(0x1fd)]!==0x0&&c['button']!==0x1&&c[B(0x1fd)]!==0x2)return;this[B(0x1de)]={'x':c['clientX'],'y':c[B(0x205)],'rotateX':this[B(0x202)],'rotateY':this[B(0x1db)],'translateX':this['_translateX'],'translateY':this[B(0x224)],'pan':c['button']===0x1||c[B(0x1fd)]===0x2||c['shiftKey']},this[B(0x1cf)]['classList'][B(0x1dd)]('dragging'),this['_viewport'][B(0x229)](c['pointerId']),this['_viewport'][B(0x232)](B(0x1f7),this['_boundPointerMove']),this[B(0x1cf)][B(0x232)]('pointerup',this[B(0x22b)]),this['_viewport'][B(0x232)]('pointercancel',this[B(0x22b)]),c['preventDefault']();}[o(0x1ea)](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this['_dragStart']['x'],e=c[C(0x205)]-this[C(0x1de)]['y'];this[C(0x1de)]['pan']?(this['_translateX']=this['_dragStart']['translateX']+d,this['_translateY']=this['_dragStart']['translateY']+e):(this['_rotateY']=this['_dragStart']['rotateY']+d*0.35,this['_rotateX']=Math['min'](0x55,Math[C(0x1f2)](-0x55,this[C(0x1de)][C(0x1fe)]-e*0.35))),this[C(0x20d)](),c[C(0x1d9)]();}['_onPointerUp'](c){const D=o;this[D(0x1de)]=null,this[D(0x1cf)]['classList']['remove']('dragging'),this[D(0x1cf)][D(0x1e2)](c['pointerId']),this['_viewport']['removeEventListener']('pointermove',this['_boundPointerMove']),this[D(0x1cf)][D(0x21f)](D(0x21c),this[D(0x22b)]),this[D(0x1cf)]['removeEventListener'](D(0x21d),this[D(0x22b)]);}[o(0x1e0)](c){const E=o,d=c[E(0x1e1)]<0x0?1.08:0.92;this[E(0x220)]=Math['min'](0x6,Math['max'](0.03,this['_scale']*d)),this[E(0x20d)](),c['preventDefault']();}set[o(0x203)](c){const F=o;this[F(0x1da)]?.[F(0x1e9)](),this[F(0x1dc)]?.['dispose'](),this['_instanceServiceContainer']=c,this[F(0x216)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas'][F(0x221)]['on'](()=>{this['_scheduleRender']();}),this[F(0x1da)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this['_scheduleRender']()):(this['_content'][F(0x1e3)](),this['_layerDepthEntries']=[],this['_empty'][F(0x22c)][F(0x207)]=F(0x233));}}customElements['define'](o(0x1d0),LayerDepthView);