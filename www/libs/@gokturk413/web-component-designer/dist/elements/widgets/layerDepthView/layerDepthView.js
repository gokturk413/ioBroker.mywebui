function b(c,d){c=c-0x176;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x19e))/0x1+-parseInt(n(0x1d7))/0x2*(-parseInt(n(0x1a9))/0x3)+-parseInt(n(0x18f))/0x4*(-parseInt(n(0x1c3))/0x5)+-parseInt(n(0x1a5))/0x6+-parseInt(n(0x1cd))/0x7+-parseInt(n(0x1ce))/0x8+parseInt(n(0x1b4))/0x9*(-parseInt(n(0x1c2))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8b5a8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const I=['690987BpLrLg','textContent','pointercancel','_rotateY','_depthSlider','classList','_boundPointerMove','794574baSCSA','_dragStart','_boundPointerUp','dragging','226857JRXafo','style','_layerDepthEntries','_translateY','translate','bind','setPointerCapture','_viewport','transform','button','_instanceServiceContainer','2502leEPWw','nodeType','_updateLayerDepths','_resizeObserver','shiftKey','_empty','count','clientY','deg)','px)\x20','parentElement','wheel','_rotateX','scale(','42430NaHCtW','103995vfgXEK','max','appendChild','transformStyle','replaceChildren','depth','_zoomFactorChangedHandler','height','translateX','_prepareCloneElement','2230347CvFqwo','3767920BniWHC','_restoreCachedInititalValues','min','deg)\x20','_contentChangedHandler','_fitScene','_getDomElement','element','observe','26vbpvfV','preserve-3d','_scheduleRender','scene','_copyAdoptedStyleSheets','dispose','input','childNodes','pointerId','_scene','_depthSpacing','pointerdown','releasePointerCapture','_maxY','translate(-50%,\x20-50%)\x20','createDocumentFragment','width','preventDefault','usableContainer','cloneNode','flex','_applySceneTransform','addEventListener','_maxX','_onWheel','shadowRoot','192IreBHm','_scale','_reRender','none','_translateX','pointermove','onZoomFactorChanged','_content','depthValue','_onPointerDown','ownerDocument','clientX','Element','rotateX','target'];a=function(){return I;};return a();}import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0x1b0)];['_scene'];['_content'];['_empty'];[o(0x1a2)];['_depthValue'];['_instanceServiceContainer'];[o(0x1d2)];['_zoomFactorChangedHandler'];['_resizeObserver'];['_reRenderFlag']=![];[o(0x18c)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;['_rotateX']=0x0;['_rotateY']=0x0;[o(0x193)]=0x0;[o(0x1ac)]=0x0;['_scale']=0x1;['_layerDepthEntries']=[];['_dragStart'];['_boundPointerMove'];[o(0x1a7)];constructor(){const p=o;super(),this[p(0x1cf)](),this[p(0x1b0)]=this[p(0x1d4)]('viewport'),this['_scene']=this['_getDomElement'](p(0x178)),this['_content']=this[p(0x1d4)]('content'),this['_empty']=this['_getDomElement']('empty'),this['_depthSlider']=this['_getDomElement']('depthSlider'),this['_depthValue']=this['_getDomElement'](p(0x197)),this['_boundPointerMove']=this['_onPointerMove'][p(0x1ae)](this),this['_boundPointerUp']=this['_onPointerUp'][p(0x1ae)](this),this['_depthSlider'][p(0x18b)](p(0x17b),()=>{const q=p;this[q(0x17f)]=Number(this[q(0x1a2)]['value']),this['_depthValue'][q(0x19f)]=this[q(0x17f)]+'px',this[q(0x1b6)]();}),this[p(0x1b0)][p(0x18b)](p(0x180),c=>this['_onPointerDown'](c)),this[p(0x1b0)]['addEventListener'](p(0x1bf),c=>this[p(0x18d)](c),{'passive':![]}),this[p(0x1b0)][p(0x18b)]('contextmenu',c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this[r(0x1b7)][r(0x1d6)](this),this['_applySceneTransform']();}[o(0x177)](){const s=o;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0x191)](),0x32));}async[o(0x191)](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this['_instanceServiceContainer']['designerCanvas'];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c['designerPixelSize'];this['_maxX']=Math['max'](d[t(0x185)],0x1),this['_maxY']=Math['max'](d[t(0x1ca)],0x1);const e=this['_createLayerTree']();this[t(0x196)]['replaceChildren'](e['fragment']),this['_scene'][t(0x1aa)][t(0x185)]=this[t(0x18c)]+'px',this['_scene']['style']['height']=this['_maxY']+'px',this[t(0x196)]['style']['width']=this[t(0x18c)]+'px',this['_content'][t(0x1aa)][t(0x1ca)]=this[t(0x182)]+'px',this['_empty'][t(0x1aa)]['display']=e[t(0x1ba)]?t(0x192):'flex',this[t(0x1b6)](),this[t(0x1d3)](),this['_reRenderFlag']=![];}[o(0x179)](c){const u=o,d=c?.['element'],e=c?.[u(0x187)],f=d?.[u(0x18e)]??(e instanceof Document?e:d?.[u(0x199)]);this[u(0x18e)]['adoptedStyleSheets']=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x1b3)]['rootDesignItem'],d=document[v(0x184)]();let e=0x0;this['_layerDepthEntries']=[];for(const f of c['children']()){if(f[v(0x1b5)]!==NodeType['Element'])continue;const g=f['element'][v(0x188)](!![]);d[v(0x1c5)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const w=o;this[w(0x1cc)](d,e),e++;const f=Array['from'](c['element'][w(0x17c)]),g=Array['from'](d[w(0x17c)]);for(const h of c['children']()){if(h['nodeType']!==NodeType[w(0x19b)])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style'][x(0x1c6)]=x(0x176),c['style']['willChange']=x(0x1ad),this['_layerDepthEntries']['push']({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue'][y(0x19f)]=this['_depthSpacing']+'px';if(!this['_layerDepthEntries']['length'])return;const c=this[y(0x1ab)]['map'](i=>i['depth']),d=Math['min'](...c),e=Math[y(0x1c4)](...c),f=Math[y(0x1c4)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x17f)]*0x2,h=new Map();for(const i of this[y(0x1ab)]){h['set'](i['element'],i[y(0x1c8)]);}for(const j of this['_layerDepthEntries']){let k=j[y(0x1d5)][y(0x1be)],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j['element'][y(0x1aa)][y(0x1ad)]='0\x200\x20'+(g(j[y(0x1c8)])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport']['getBoundingClientRect']();if(!c[z(0x185)]||!c[z(0x1ca)]||!this[z(0x18c)]||!this[z(0x182)])return;const d=Math['min'](c[z(0x185)]/this['_maxX'],c[z(0x1ca)]/this['_maxY'])*0.72;this['_scale']=Math[z(0x1d0)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this[z(0x1ac)]=0x0,this[z(0x18a)]();}['_applySceneTransform'](){const A=o;this[A(0x17e)]['style']['transformStyle']=A(0x176),this['_content'][A(0x1aa)][A(0x1c6)]=A(0x176),this[A(0x17e)]['style'][A(0x1b1)]=A(0x183)+'translate('+this['_translateX']+'px,\x20'+this[A(0x1ac)]+A(0x1bd)+A(0x1c1)+this['_scale']+')\x20'+'rotateX('+this[A(0x1c0)]+A(0x1d1)+'rotateY('+this[A(0x1a1)]+A(0x1bc),this[A(0x196)][A(0x1aa)][A(0x1b1)]='';}[o(0x198)](c){const B=o;if(c[B(0x19d)]===this['_depthSlider']||c[B(0x1b2)]!==0x0&&c[B(0x1b2)]!==0x1&&c[B(0x1b2)]!==0x2)return;this['_dragStart']={'x':c['clientX'],'y':c[B(0x1bb)],'rotateX':this[B(0x1c0)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c[B(0x1b2)]===0x1||c['button']===0x2||c[B(0x1b8)]},this[B(0x1b0)][B(0x1a3)]['add'](B(0x1a8)),this['_viewport'][B(0x1af)](c[B(0x17d)]),this[B(0x1b0)][B(0x18b)](B(0x194),this[B(0x1a4)]),this['_viewport']['addEventListener']('pointerup',this['_boundPointerUp']),this[B(0x1b0)][B(0x18b)]('pointercancel',this['_boundPointerUp']),c[B(0x186)]();}['_onPointerMove'](c){const C=o;if(!this[C(0x1a6)])return;const d=c[C(0x19a)]-this['_dragStart']['x'],e=c['clientY']-this['_dragStart']['y'];this['_dragStart']['pan']?(this[C(0x193)]=this['_dragStart'][C(0x1cb)]+d,this[C(0x1ac)]=this[C(0x1a6)]['translateY']+e):(this['_rotateY']=this[C(0x1a6)]['rotateY']+d*0.35,this['_rotateX']=Math['min'](0x55,Math[C(0x1c4)](-0x55,this[C(0x1a6)][C(0x19c)]-e*0.35))),this[C(0x18a)](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this['_dragStart']=null,this['_viewport'][D(0x1a3)]['remove'](D(0x1a8)),this[D(0x1b0)][D(0x181)](c[D(0x17d)]),this['_viewport']['removeEventListener']('pointermove',this[D(0x1a4)]),this['_viewport']['removeEventListener']('pointerup',this[D(0x1a7)]),this['_viewport']['removeEventListener'](D(0x1a0),this[D(0x1a7)]);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0x190)]=Math['min'](0x6,Math[E(0x1c4)](0.03,this['_scale']*d)),this[E(0x18a)](),c[E(0x186)]();}set['instanceServiceContainer'](c){const F=o;this[F(0x1d2)]?.[F(0x17a)](),this[F(0x1c9)]?.['dispose'](),this[F(0x1b3)]=c,this['_instanceServiceContainer']?(this[F(0x1c9)]=this[F(0x1b3)]['designerCanvas'][F(0x195)]['on'](()=>{const G=F;this[G(0x177)]();}),this[F(0x1d2)]=this[F(0x1b3)]['onContentChanged']['on'](()=>{const H=F;this[H(0x177)]();}),this[F(0x177)]()):(this[F(0x196)][F(0x1c7)](),this['_layerDepthEntries']=[],this[F(0x1b9)][F(0x1aa)]['display']=F(0x189));}}customElements['define']('node-projects-web-component-designer-layer-depth-view',LayerDepthView);