const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x222))/0x1+-parseInt(n(0x1e6))/0x2*(-parseInt(n(0x227))/0x3)+parseInt(n(0x1fc))/0x4+parseInt(n(0x1e2))/0x5+parseInt(n(0x224))/0x6*(-parseInt(n(0x1eb))/0x7)+parseInt(n(0x214))/0x8*(-parseInt(n(0x1ef))/0x9)+parseInt(n(0x24f))/0xa*(-parseInt(n(0x24a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x76198));function b(c,d){c=c-0x1e2;const e=a();let f=e[c];return f;}function a(){const I=['preventDefault','min','removeEventListener','classList','element','dispose','_depthValue','_viewport','_depthSlider','usableContainer','getBoundingClientRect','addEventListener','1824400BHzCrH','contextmenu','deltaY','display','_scene','_rotateY','_scale','setPointerCapture','viewport','_layerDepthEntries','nodeType','_onWheel','rotateY(','parentElement','willChange','pointermove','rotateX','_getDomElement','_resizeObserver','remove','_maxY','_reRenderFlag','_applySceneTransform','translateX','1648nmfaaD','children','_translateY','_content','_dragStart','max','_scheduleRender','findIndex','height','clientX','node','pointerId','cloneNode','_instanceServiceContainer','459980XEdisg','adoptedStyleSheets','1230HAAHtI','transformStyle','rotateX(','3pBtENy','translate(-50%,\x20-50%)\x20','shiftKey','depth','fragment','instanceServiceContainer','rootDesignItem','translate','bind','translateY','from','0\x200\x20','_boundPointerUp','pointerup','rotateY','empty','width','length','_depthSpacing','designerCanvas','_fitScene','translate(','input','_createLayerTree','_contentChangedHandler','_maxX','_boundPointerMove','_rotateX','ownerDocument','style','flex','none','wheel','define','preserve-3d','473zGcYLk','button','template','_restoreCachedInititalValues','_updateLayerDepths','110490yLqdGN','_reRender','dragging','pointercancel','get','clientY','_zoomFactorChangedHandler','4388700AXzQqa','px)\x20','_translateX','pan','1007332EPKfmD','target','textContent','_prepareCloneTree','map','16919uYLCKV','createDocumentFragment','childNodes','_onPointerUp','36837CdzKfT'];a=function(){return I;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x244)]=css`
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
        }`;static [o(0x24c)]=html`
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
        </div>`;['_viewport'];['_scene'];['_content'];['_empty'];[o(0x1f8)];[o(0x1f6)];['_instanceServiceContainer'];[o(0x23f)];[o(0x255)];[o(0x20e)];[o(0x211)]=![];['_maxX']=0x0;['_maxY']=0x0;[o(0x239)]=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0x202)]=0x1;['_layerDepthEntries']=[];[o(0x218)];[o(0x241)];[o(0x233)];constructor(){const p=o;super(),this[p(0x24d)](),this[p(0x1f7)]=this[p(0x20d)](p(0x204)),this[p(0x200)]=this[p(0x20d)]('scene'),this['_content']=this['_getDomElement']('content'),this['_empty']=this['_getDomElement'](p(0x236)),this['_depthSlider']=this['_getDomElement']('depthSlider'),this['_depthValue']=this['_getDomElement']('depthValue'),this[p(0x241)]=this['_onPointerMove']['bind'](this),this[p(0x233)]=this['_onPointerUp'][p(0x22f)](this),this['_depthSlider'][p(0x1fb)](p(0x23d),()=>{const q=p;this['_depthSpacing']=Number(this[q(0x1f8)]['value']),this[q(0x1f6)]['textContent']=this['_depthSpacing']+'px',this[q(0x24e)]();}),this['_viewport'][p(0x1fb)]('pointerdown',c=>this['_onPointerDown'](c)),this[p(0x1f7)]['addEventListener'](p(0x247),c=>this['_onWheel'](c),{'passive':![]}),this[p(0x1f7)]['addEventListener'](p(0x1fd),c=>c[p(0x1f0)]()),this[p(0x20e)]=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this[r(0x20e)]['observe'](this),this[r(0x212)]();}[o(0x21a)](){const s=o;this[s(0x211)]===![]&&(this[s(0x211)]=!![],setTimeout(()=>this[s(0x250)](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0x221)]['designerCanvas'];this['_copyAdoptedStyleSheets'](c[t(0x22d)]);const d=c['designerPixelSize'];this['_maxX']=Math['max'](d['width'],0x1),this['_maxY']=Math[t(0x219)](d[t(0x21c)],0x1);const e=this['_createLayerTree']();this[t(0x217)]['replaceChildren'](e[t(0x22b)]),this[t(0x200)]['style'][t(0x237)]=this[t(0x240)]+'px',this[t(0x200)][t(0x244)]['height']=this['_maxY']+'px',this['_content'][t(0x244)]['width']=this['_maxX']+'px',this['_content'][t(0x244)]['height']=this['_maxY']+'px',this['_empty']['style'][t(0x1ff)]=e['count']?t(0x246):t(0x245),this['_updateLayerDepths'](),this[t(0x23b)](),this['_reRenderFlag']=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.[u(0x1f4)],e=c?.[u(0x1f9)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x243)]);this['shadowRoot'][u(0x223)]=f?.['adoptedStyleSheets']?[...f[u(0x223)]]:[];}[o(0x23e)](){const v=o,c=this[v(0x221)][v(0x22d)],d=document[v(0x1ec)]();let e=0x0;this[v(0x205)]=[];for(const f of c['children']()){if(f[v(0x206)]!==NodeType['Element'])continue;const g=f[v(0x1f4)][v(0x220)](!![]);d['appendChild'](g),e=this[v(0x1e9)](f,g,e);}return{'fragment':d,'count':e};}[o(0x1e9)](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0x231)](c[w(0x1f4)]['childNodes']),g=Array[w(0x231)](d[w(0x1ed)]);for(const h of c[w(0x215)]()){if(h['nodeType']!==NodeType['Element'])continue;const i=f[w(0x21b)](k=>k===h[w(0x21e)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x244)][x(0x225)]=x(0x249),c['style'][x(0x20a)]='translate',this[x(0x205)]['push']({'element':c,'depth':d}));}[o(0x24e)](){const y=o;this[y(0x1f6)][y(0x1e8)]=this[y(0x239)]+'px';if(!this[y(0x205)][y(0x238)])return;const c=this['_layerDepthEntries'][y(0x1ea)](i=>i[y(0x22a)]),d=Math['min'](...c),e=Math['max'](...c),f=Math[y(0x219)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x239)]*0x2,h=new Map();for(const i of this[y(0x205)]){h['set'](i['element'],i['depth']);}for(const j of this['_layerDepthEntries']){let k=j['element']['parentElement'],l;while(k){l=h[y(0x253)](k);if(l!==undefined)break;k=k[y(0x209)];}const m=l===undefined?0x0:g(l);j['element']['style'][y(0x22e)]=y(0x232)+(g(j['depth'])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport'][z(0x1fa)]();if(!c['width']||!c[z(0x21c)]||!this[z(0x240)]||!this['_maxY'])return;const d=Math[z(0x1f1)](c[z(0x237)]/this[z(0x240)],c[z(0x21c)]/this[z(0x210)])*0.72;this['_scale']=Math['min'](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this[z(0x216)]=0x0,this[z(0x212)]();}[o(0x212)](){const A=o;this['_scene']['style']['transformStyle']='preserve-3d',this['_content'][A(0x244)]['transformStyle']=A(0x249),this[A(0x200)][A(0x244)]['transform']=A(0x228)+A(0x23c)+this['_translateX']+'px,\x20'+this['_translateY']+A(0x1e3)+'scale('+this['_scale']+')\x20'+A(0x226)+this[A(0x242)]+'deg)\x20'+A(0x208)+this[A(0x201)]+'deg)',this['_content']['style']['transform']='';}['_onPointerDown'](c){const B=o;if(c[B(0x1e7)]===this['_depthSlider']||c['button']!==0x0&&c['button']!==0x1&&c[B(0x24b)]!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c[B(0x254)],'rotateX':this[B(0x242)],'rotateY':this[B(0x201)],'translateX':this['_translateX'],'translateY':this[B(0x216)],'pan':c[B(0x24b)]===0x1||c['button']===0x2||c[B(0x229)]},this['_viewport'][B(0x1f3)]['add'](B(0x251)),this[B(0x1f7)][B(0x203)](c[B(0x21f)]),this[B(0x1f7)]['addEventListener'](B(0x20b),this[B(0x241)]),this[B(0x1f7)][B(0x1fb)](B(0x234),this[B(0x233)]),this[B(0x1f7)][B(0x1fb)](B(0x252),this['_boundPointerUp']),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this['_dragStart'])return;const d=c[C(0x21d)]-this['_dragStart']['x'],e=c['clientY']-this['_dragStart']['y'];this['_dragStart'][C(0x1e5)]?(this[C(0x1e4)]=this['_dragStart'][C(0x213)]+d,this[C(0x216)]=this['_dragStart'][C(0x230)]+e):(this['_rotateY']=this['_dragStart'][C(0x235)]+d*0.35,this[C(0x242)]=Math[C(0x1f1)](0x55,Math['max'](-0x55,this[C(0x218)][C(0x20c)]-e*0.35))),this['_applySceneTransform'](),c[C(0x1f0)]();}[o(0x1ee)](c){const D=o;this[D(0x218)]=null,this[D(0x1f7)]['classList'][D(0x20f)](D(0x251)),this[D(0x1f7)]['releasePointerCapture'](c[D(0x21f)]),this[D(0x1f7)]['removeEventListener']('pointermove',this['_boundPointerMove']),this['_viewport'][D(0x1f2)]('pointerup',this[D(0x233)]),this[D(0x1f7)][D(0x1f2)](D(0x252),this[D(0x233)]);}[o(0x207)](c){const E=o,d=c[E(0x1fe)]<0x0?1.08:0.92;this[E(0x202)]=Math['min'](0x6,Math[E(0x219)](0.03,this['_scale']*d)),this[E(0x212)](),c[E(0x1f0)]();}set[o(0x22c)](c){const F=o;this[F(0x23f)]?.[F(0x1f5)](),this[F(0x255)]?.['dispose'](),this['_instanceServiceContainer']=c,this[F(0x221)]?(this[F(0x255)]=this[F(0x221)][F(0x23a)]['onZoomFactorChanged']['on'](()=>{const G=F;this[G(0x21a)]();}),this['_contentChangedHandler']=this[F(0x221)]['onContentChanged']['on'](()=>{const H=F;this[H(0x21a)]();}),this['_scheduleRender']()):(this[F(0x217)]['replaceChildren'](),this['_layerDepthEntries']=[],this['_empty']['style'][F(0x1ff)]=F(0x245));}}customElements[o(0x248)]('node-projects-web-component-designer-layer-depth-view',LayerDepthView);