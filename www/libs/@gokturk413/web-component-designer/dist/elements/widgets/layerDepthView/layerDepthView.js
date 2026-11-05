const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1cf))/0x1*(parseInt(n(0x22d))/0x2)+parseInt(n(0x1fb))/0x3*(parseInt(n(0x20a))/0x4)+parseInt(n(0x1f6))/0x5*(parseInt(n(0x1ce))/0x6)+-parseInt(n(0x210))/0x7+parseInt(n(0x1ee))/0x8+-parseInt(n(0x214))/0x9+-parseInt(n(0x227))/0xa*(-parseInt(n(0x22f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x240c7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}function a(){const H=['content','_copyAdoptedStyleSheets','pointerdown','_onPointerMove','_onWheel','translateX','_depthValue','6ehekdd','34HpUmDv','_resizeObserver','px,\x20','input','nodeType','node-projects-web-component-designer-layer-depth-view','Element','adoptedStyleSheets','rotateX','_rotateY','_restoreCachedInititalValues','ready','_boundPointerUp','childNodes','replaceChildren','shadowRoot','textContent','_onPointerUp','dragging','onZoomFactorChanged','parentElement','_translateY','height','none','max','element','_getDomElement','translate','_depthSlider','children','button','1265688sRjEax','_layerDepthEntries','display','dispose','_maxY','_boundPointerMove','_scene','_scheduleRender','455915nrCLYV','width','from','viewport','designerCanvas','27CkOnap','_viewport','_content','rotateY(','_reRender','classList','_dragStart','findIndex','template','_updateLayerDepths','rootDesignItem','px)\x20','_empty','define','_contentChangedHandler','71644EYQeSB','empty','length','_scale','pointercancel','_rotateX','1905897HYnyTY','count','fragment','_reRenderFlag','552960MteyyU','cloneNode','get','translate(','_depthSpacing','style','_prepareCloneTree','contextmenu','_instanceServiceContainer','min','_translateX','push','usableContainer','remove','ownerDocument','preventDefault','_applySceneTransform','scene','transformStyle','247390WgtPkE','depth','_createLayerTree','removeEventListener','clientY','addEventListener','8934xPkzYY','pointerup','99ZWmKLE','map','flex','_onPointerDown','add','rotateX(','target'];a=function(){return H;};return a();}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x219)]=css`
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
        }`;static [o(0x203)]=html`
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
        </div>`;[o(0x1fc)];['_scene'];[o(0x1fd)];[o(0x207)];[o(0x1eb)];['_depthValue'];[o(0x21c)];[o(0x209)];['_zoomFactorChangedHandler'];['_resizeObserver'];[o(0x213)]=![];['_maxX']=0x0;['_maxY']=0x0;[o(0x218)]=0x24;['_rotateX']=0x0;[o(0x1d8)]=0x0;[o(0x21e)]=0x0;[o(0x1e4)]=0x0;['_scale']=0x1;['_layerDepthEntries']=[];[o(0x201)];[o(0x1f3)];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x1d9)](),this['_viewport']=this[p(0x1e9)](p(0x1f9)),this[p(0x1f4)]=this[p(0x1e9)](p(0x225)),this[p(0x1fd)]=this[p(0x1e9)](p(0x236)),this[p(0x207)]=this[p(0x1e9)](p(0x20b)),this[p(0x1eb)]=this[p(0x1e9)]('depthSlider'),this[p(0x1cd)]=this[p(0x1e9)]('depthValue'),this[p(0x1f3)]=this[p(0x239)]['bind'](this),this[p(0x1db)]=this[p(0x1e0)]['bind'](this),this['_depthSlider']['addEventListener'](p(0x1d2),()=>{const q=p;this[q(0x218)]=Number(this['_depthSlider']['value']),this['_depthValue'][q(0x1df)]=this['_depthSpacing']+'px',this[q(0x204)]();}),this[p(0x1fc)]['addEventListener'](p(0x238),c=>this['_onPointerDown'](c)),this[p(0x1fc)][p(0x22c)]('wheel',c=>this[p(0x23a)](c),{'passive':![]}),this[p(0x1fc)]['addEventListener'](p(0x21b),c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}[o(0x1da)](){const r=o;this[r(0x1d0)]['observe'](this),this[r(0x224)]();}['_scheduleRender'](){const s=o;this['_reRenderFlag']===![]&&(this[s(0x213)]=!![],setTimeout(()=>this[s(0x1ff)](),0x32));}async[o(0x1ff)](){const t=o;if(!this[t(0x21c)])return;const c=this[t(0x21c)][t(0x1fa)];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c['designerPixelSize'];this['_maxX']=Math[t(0x1e7)](d[t(0x1f7)],0x1),this[t(0x1f2)]=Math[t(0x1e7)](d[t(0x1e5)],0x1);const e=this[t(0x229)]();this[t(0x1fd)][t(0x1dd)](e[t(0x212)]),this['_scene']['style']['width']=this['_maxX']+'px',this[t(0x1f4)][t(0x219)]['height']=this[t(0x1f2)]+'px',this['_content'][t(0x219)][t(0x1f7)]=this['_maxX']+'px',this['_content']['style']['height']=this['_maxY']+'px',this[t(0x207)][t(0x219)]['display']=e[t(0x211)]?t(0x1e6):t(0x231),this[t(0x204)](),this['_fitScene'](),this[t(0x213)]=![];}[o(0x237)](c){const u=o,d=c?.['element'],e=c?.[u(0x220)],f=d?.[u(0x1de)]??(e instanceof Document?e:d?.[u(0x222)]);this[u(0x1de)][u(0x1d6)]=f?.[u(0x1d6)]?[...f['adoptedStyleSheets']]:[];}[o(0x229)](){const v=o,c=this[v(0x21c)][v(0x205)],d=document['createDocumentFragment']();let e=0x0;this[v(0x1ef)]=[];for(const f of c[v(0x1ec)]()){if(f['nodeType']!==NodeType[v(0x1d5)])continue;const g=f[v(0x1e8)][v(0x215)](!![]);d['appendChild'](g),e=this[v(0x21a)](f,g,e);}return{'fragment':d,'count':e};}[o(0x21a)](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0x1f8)](c[w(0x1e8)]['childNodes']),g=Array['from'](d[w(0x1dc)]);for(const h of c[w(0x1ec)]()){if(h[w(0x1d3)]!==NodeType[w(0x1d5)])continue;const i=f[w(0x202)](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this[w(0x21a)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style'][x(0x226)]='preserve-3d',c[x(0x219)]['willChange']=x(0x1ea),this[x(0x1ef)][x(0x21f)]({'element':c,'depth':d}));}[o(0x204)](){const y=o;this[y(0x1cd)][y(0x1df)]=this[y(0x218)]+'px';if(!this[y(0x1ef)][y(0x20c)])return;const c=this['_layerDepthEntries'][y(0x230)](i=>i[y(0x228)]),d=Math['min'](...c),e=Math[y(0x1e7)](...c),f=Math['max'](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h['set'](i[y(0x1e8)],i[y(0x228)]);}for(const j of this[y(0x1ef)]){let k=j['element'][y(0x1e3)],l;while(k){l=h[y(0x216)](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j[y(0x1e8)]['style'][y(0x1ea)]='0\x200\x20'+(g(j['depth'])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c['width']||!c[z(0x1e5)]||!this['_maxX']||!this['_maxY'])return;const d=Math['min'](c['width']/this['_maxX'],c['height']/this[z(0x1f2)])*0.72;this[z(0x20d)]=Math[z(0x21d)](Math['max'](d,0.05),0x4),this[z(0x21e)]=0x0,this[z(0x1e4)]=0x0,this['_applySceneTransform']();}[o(0x224)](){const A=o;this[A(0x1f4)][A(0x219)][A(0x226)]='preserve-3d',this['_content']['style'][A(0x226)]='preserve-3d',this['_scene']['style']['transform']='translate(-50%,\x20-50%)\x20'+A(0x217)+this['_translateX']+A(0x1d1)+this['_translateY']+A(0x206)+'scale('+this['_scale']+')\x20'+A(0x234)+this[A(0x20f)]+'deg)\x20'+A(0x1fe)+this[A(0x1d8)]+'deg)',this[A(0x1fd)]['style']['transform']='';}[o(0x232)](c){const B=o;if(c[B(0x235)]===this['_depthSlider']||c['button']!==0x0&&c[B(0x1ed)]!==0x1&&c[B(0x1ed)]!==0x2)return;this[B(0x201)]={'x':c['clientX'],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this[B(0x21e)],'translateY':this[B(0x1e4)],'pan':c[B(0x1ed)]===0x1||c['button']===0x2||c['shiftKey']},this[B(0x1fc)][B(0x200)][B(0x233)]('dragging'),this['_viewport']['setPointerCapture'](c['pointerId']),this[B(0x1fc)]['addEventListener']('pointermove',this['_boundPointerMove']),this[B(0x1fc)][B(0x22c)](B(0x22e),this[B(0x1db)]),this[B(0x1fc)][B(0x22c)]('pointercancel',this['_boundPointerUp']),c[B(0x223)]();}['_onPointerMove'](c){const C=o;if(!this[C(0x201)])return;const d=c['clientX']-this['_dragStart']['x'],e=c[C(0x22b)]-this[C(0x201)]['y'];this['_dragStart']['pan']?(this['_translateX']=this['_dragStart'][C(0x1cc)]+d,this['_translateY']=this['_dragStart']['translateY']+e):(this['_rotateY']=this[C(0x201)]['rotateY']+d*0.35,this['_rotateX']=Math[C(0x21d)](0x55,Math[C(0x1e7)](-0x55,this['_dragStart'][C(0x1d7)]-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this[D(0x201)]=null,this[D(0x1fc)][D(0x200)][D(0x221)](D(0x1e1)),this['_viewport']['releasePointerCapture'](c['pointerId']),this[D(0x1fc)][D(0x22a)]('pointermove',this[D(0x1f3)]),this['_viewport'][D(0x22a)]('pointerup',this[D(0x1db)]),this[D(0x1fc)][D(0x22a)](D(0x20e),this['_boundPointerUp']);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0x20d)]=Math[E(0x21d)](0x6,Math['max'](0.03,this[E(0x20d)]*d)),this[E(0x224)](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this[F(0x209)]?.[F(0x1f1)](),this['_zoomFactorChangedHandler']?.[F(0x1f1)](),this[F(0x21c)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[F(0x21c)]['designerCanvas'][F(0x1e2)]['on'](()=>{this['_scheduleRender']();}),this[F(0x209)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{const G=F;this[G(0x1f5)]();}),this[F(0x1f5)]()):(this[F(0x1fd)]['replaceChildren'](),this['_layerDepthEntries']=[],this[F(0x207)][F(0x219)][F(0x1f0)]='flex');}}customElements[o(0x208)](o(0x1d4),LayerDepthView);