const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x195))/0x1*(-parseInt(n(0x1c5))/0x2)+parseInt(n(0x198))/0x3+parseInt(n(0x1e4))/0x4+parseInt(n(0x1ca))/0x5*(-parseInt(n(0x182))/0x6)+parseInt(n(0x19b))/0x7+-parseInt(n(0x1bd))/0x8+parseInt(n(0x1c6))/0x9*(parseInt(n(0x1a6))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7e5a2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x17c;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';function a(){const F=['_rotateX','1655EXcAyw','_scene','children','depth','style','_prepareCloneElement','button','_content','_createLayerTree','pointermove','childNodes','translate','0\x200\x20','translateY','scene','add','_empty','_scale','_depthValue','remove','_contentChangedHandler','_prepareCloneTree','transform','_layerDepthEntries','shadowRoot','_instanceServiceContainer','2189540qMGnLm','_depthSlider','content','contextmenu','px)\x20','from','bind','preventDefault','_updateLayerDepths','17454naOTjL','designerPixelSize','width','_onPointerMove','_reRenderFlag','shiftKey','scale(','pointerdown','_scheduleRender','_depthSpacing','_translateX','_viewport','_maxY','display','dragging','max','rotateX(','rootDesignItem','removeEventListener','10025hDgWtY','depthValue','_zoomFactorChangedHandler','634590QXxbmF','addEventListener','translate(','1601516ZUPJEE','_dragStart','_boundPointerUp','observe','pointercancel','length','element','_boundPointerMove','clientX','designerCanvas','_onWheel','5529270aDtZfZ','height','fragment','push','ownerDocument','preserve-3d','adoptedStyleSheets','classList','rotateY','deg)','_copyAdoptedStyleSheets','Element','_getDomElement','clientY','pointerup','dispose','findIndex','pointerId','nodeType','_maxX','textContent','count','_applySceneTransform','6496704VYXRPM','map','_rotateY','rotateY(','min','node-projects-web-component-designer-layer-depth-view','_translateY','get','150aEOMoi','9iYKYzr','_fitScene','willChange'];a=function(){return F;};return a();}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_viewport'];['_scene'];['_content'];[o(0x1da)];['_depthSlider'];[o(0x1dc)];['_instanceServiceContainer'];[o(0x1de)];['_zoomFactorChangedHandler'];['_resizeObserver'];[o(0x186)]=![];[o(0x1b9)]=0x0;['_maxY']=0x0;[o(0x18b)]=0x24;[o(0x1c9)]=0x0;[o(0x1bf)]=0x0;['_translateX']=0x0;[o(0x1c3)]=0x0;[o(0x1db)]=0x1;['_layerDepthEntries']=[];[o(0x19c)];[o(0x1a2)];[o(0x19d)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x18d)]=this[p(0x1b2)]('viewport'),this[p(0x1cb)]=this[p(0x1b2)](p(0x1d8)),this['_content']=this['_getDomElement'](p(0x1e6)),this[p(0x1da)]=this[p(0x1b2)]('empty'),this[p(0x1e5)]=this[p(0x1b2)]('depthSlider'),this['_depthValue']=this[p(0x1b2)](p(0x196)),this[p(0x1a2)]=this[p(0x185)][p(0x17f)](this),this['_boundPointerUp']=this['_onPointerUp'][p(0x17f)](this),this[p(0x1e5)][p(0x199)]('input',()=>{const q=p;this['_depthSpacing']=Number(this[q(0x1e5)]['value']),this['_depthValue']['textContent']=this[q(0x18b)]+'px',this['_updateLayerDepths']();}),this['_viewport'][p(0x199)](p(0x189),c=>this['_onPointerDown'](c)),this['_viewport'][p(0x199)]('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport'][p(0x199)](p(0x17c),c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this['_resizeObserver'][r(0x19e)](this),this['_applySceneTransform']();}['_scheduleRender'](){this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}async['_reRender'](){const s=o;if(!this[s(0x1e3)])return;const c=this[s(0x1e3)][s(0x1a4)];this['_copyAdoptedStyleSheets'](c[s(0x193)]);const d=c[s(0x183)];this['_maxX']=Math[s(0x191)](d[s(0x184)],0x1),this['_maxY']=Math['max'](d['height'],0x1);const e=this[s(0x1d2)]();this[s(0x1d1)]['replaceChildren'](e[s(0x1a8)]),this[s(0x1cb)][s(0x1ce)]['width']=this['_maxX']+'px',this[s(0x1cb)]['style'][s(0x1a7)]=this[s(0x18e)]+'px',this['_content']['style'][s(0x184)]=this[s(0x1b9)]+'px',this[s(0x1d1)]['style']['height']=this[s(0x18e)]+'px',this[s(0x1da)]['style'][s(0x18f)]=e[s(0x1bb)]?'none':'flex',this['_updateLayerDepths'](),this[s(0x1c7)](),this['_reRenderFlag']=![];}[o(0x1b0)](c){const t=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.[t(0x1e2)]??(e instanceof Document?e:d?.[t(0x1aa)]);this[t(0x1e2)][t(0x1ac)]=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}[o(0x1d2)](){const u=o,c=this['_instanceServiceContainer']['rootDesignItem'],d=document['createDocumentFragment']();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[u(0x1cc)]()){if(f[u(0x1b8)]!==NodeType[u(0x1b1)])continue;const g=f['element']['cloneNode'](!![]);d['appendChild'](g),e=this[u(0x1df)](f,g,e);}return{'fragment':d,'count':e};}[o(0x1df)](c,d,e){const v=o;this[v(0x1cf)](d,e),e++;const f=Array[v(0x17e)](c['element'][v(0x1d4)]),g=Array['from'](d['childNodes']);for(const h of c[v(0x1cc)]()){if(h[v(0x1b8)]!==NodeType['Element'])continue;const i=f[v(0x1b6)](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this[v(0x1df)](h,j,e));}return e;}[o(0x1cf)](c,d){const w=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']='preserve-3d',c['style'][w(0x1c8)]='translate',this['_layerDepthEntries'][w(0x1a9)]({'element':c,'depth':d}));}[o(0x181)](){const x=o;this[x(0x1dc)][x(0x1ba)]=this['_depthSpacing']+'px';if(!this['_layerDepthEntries'][x(0x1a0)])return;const c=this['_layerDepthEntries'][x(0x1be)](i=>i['depth']),d=Math['min'](...c),e=Math[x(0x191)](...c),f=Math[x(0x191)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[x(0x1e1)]){h['set'](i['element'],i['depth']);}for(const j of this[x(0x1e1)]){let k=j[x(0x1a1)]['parentElement'],l;while(k){l=h[x(0x1c4)](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j['element']['style'][x(0x1d5)]=x(0x1d6)+(g(j[x(0x1cd)])-m)+'px';}}['_fitScene'](){const y=o,c=this[y(0x18d)]['getBoundingClientRect']();if(!c[y(0x184)]||!c[y(0x1a7)]||!this[y(0x1b9)]||!this[y(0x18e)])return;const d=Math['min'](c['width']/this['_maxX'],c[y(0x1a7)]/this[y(0x18e)])*0.72;this['_scale']=Math['min'](Math['max'](d,0.05),0x4),this[y(0x18c)]=0x0,this['_translateY']=0x0,this[y(0x1bc)]();}[o(0x1bc)](){const z=o;this['_scene']['style']['transformStyle']=z(0x1ab),this[z(0x1d1)]['style']['transformStyle']=z(0x1ab),this[z(0x1cb)][z(0x1ce)][z(0x1e0)]='translate(-50%,\x20-50%)\x20'+z(0x19a)+this['_translateX']+'px,\x20'+this['_translateY']+z(0x17d)+z(0x188)+this[z(0x1db)]+')\x20'+z(0x192)+this['_rotateX']+'deg)\x20'+z(0x1c0)+this[z(0x1bf)]+z(0x1af),this[z(0x1d1)][z(0x1ce)][z(0x1e0)]='';}['_onPointerDown'](c){const A=o;if(c['target']===this[A(0x1e5)]||c['button']!==0x0&&c[A(0x1d0)]!==0x1&&c[A(0x1d0)]!==0x2)return;this[A(0x19c)]={'x':c[A(0x1a3)],'y':c[A(0x1b3)],'rotateX':this[A(0x1c9)],'rotateY':this[A(0x1bf)],'translateX':this['_translateX'],'translateY':this[A(0x1c3)],'pan':c[A(0x1d0)]===0x1||c['button']===0x2||c[A(0x187)]},this[A(0x18d)][A(0x1ad)][A(0x1d9)](A(0x190)),this['_viewport']['setPointerCapture'](c[A(0x1b7)]),this['_viewport'][A(0x199)](A(0x1d3),this[A(0x1a2)]),this[A(0x18d)]['addEventListener'](A(0x1b4),this[A(0x19d)]),this[A(0x18d)]['addEventListener']('pointercancel',this['_boundPointerUp']),c[A(0x180)]();}['_onPointerMove'](c){const B=o;if(!this[B(0x19c)])return;const d=c[B(0x1a3)]-this['_dragStart']['x'],e=c['clientY']-this[B(0x19c)]['y'];this[B(0x19c)]['pan']?(this['_translateX']=this['_dragStart']['translateX']+d,this[B(0x1c3)]=this['_dragStart'][B(0x1d7)]+e):(this[B(0x1bf)]=this['_dragStart'][B(0x1ae)]+d*0.35,this[B(0x1c9)]=Math['min'](0x55,Math['max'](-0x55,this['_dragStart']['rotateX']-e*0.35))),this[B(0x1bc)](),c[B(0x180)]();}['_onPointerUp'](c){const C=o;this['_dragStart']=null,this[C(0x18d)]['classList'][C(0x1dd)]('dragging'),this[C(0x18d)]['releasePointerCapture'](c[C(0x1b7)]),this[C(0x18d)]['removeEventListener']('pointermove',this['_boundPointerMove']),this[C(0x18d)]['removeEventListener']('pointerup',this[C(0x19d)]),this[C(0x18d)][C(0x194)](C(0x19f),this['_boundPointerUp']);}[o(0x1a5)](c){const D=o,d=c['deltaY']<0x0?1.08:0.92;this['_scale']=Math[D(0x1c1)](0x6,Math['max'](0.03,this[D(0x1db)]*d)),this[D(0x1bc)](),c[D(0x180)]();}set['instanceServiceContainer'](c){const E=o;this['_contentChangedHandler']?.[E(0x1b5)](),this[E(0x197)]?.['dispose'](),this[E(0x1e3)]=c,this['_instanceServiceContainer']?(this[E(0x197)]=this[E(0x1e3)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this[E(0x1de)]=this[E(0x1e3)]['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this[E(0x18a)]()):(this[E(0x1d1)]['replaceChildren'](),this['_layerDepthEntries']=[],this[E(0x1da)]['style'][E(0x18f)]='flex');}}customElements['define'](o(0x1c2),LayerDepthView);