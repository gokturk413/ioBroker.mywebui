const o=b;function a(){const G=['element','remove','shadowRoot','_rotateY','bind','translate','pointercancel','replaceChildren','0\x200\x20','get','_rotateX','_viewport','depthValue','transformStyle','_createLayerTree','set','dragging','_maxY','getBoundingClientRect','_instanceServiceContainer','ready','_scene','map','cloneNode','_prepareCloneTree','button','designerCanvas','max','_scale','textContent','createDocumentFragment','_contentChangedHandler','_restoreCachedInititalValues','width','findIndex','nodeType','template','none','_onPointerDown','_depthSlider','from','content','transform','style','6JZsraF','2573545GJsORJ','570VTShhZ','1006548qLatBd','155830JPgDYr','px,\x20','addEventListener','pointerdown','54JpsdFj','define','_scheduleRender','add','height','input','_onPointerMove','preserve-3d','5101bRZCTs','onContentChanged','_onPointerUp','_content','8alIrLD','_fitScene','_dragStart','_translateX','_depthValue','_onWheel','_copyAdoptedStyleSheets','translateY','_boundPointerMove','_boundPointerUp','239355gNjrAs','translateX','pointerId','_applySceneTransform','1626530dOnvYx','preventDefault','_reRender','scale(','depth','rotateY(','_empty','clientX','_resizeObserver','_layerDepthEntries','dispose','_translateY','empty','pointerup','rotateY','observe','parentElement','_updateLayerDepths','children','node-projects-web-component-designer-layer-depth-view','_maxX','1446886nTgzcX','depthSlider','rootDesignItem','_getDomElement','40MQZxkV','childNodes','min','66nObNYk','appendChild','adoptedStyleSheets'];a=function(){return G;};return a();}function b(c,d){c=c-0x13a;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x140))/0x1*(-parseInt(n(0x19f))/0x2)+-parseInt(n(0x14e))/0x3*(parseInt(n(0x144))/0x4)+parseInt(n(0x1a1))/0x5*(parseInt(n(0x19d))/0x6)+parseInt(n(0x167))/0x7*(-parseInt(n(0x16b))/0x8)+-parseInt(n(0x1a5))/0x9*(-parseInt(n(0x152))/0xa)+parseInt(n(0x16e))/0xb*(-parseInt(n(0x1a0))/0xc)+parseInt(n(0x19e))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeafc4));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x195)]=html`
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
        </div>`;[o(0x17c)];['_scene'];['_content'];[o(0x158)];[o(0x198)];[o(0x148)];['_instanceServiceContainer'];['_contentChangedHandler'];['_zoomFactorChangedHandler'];[o(0x15a)];['_reRenderFlag']=![];[o(0x166)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;[o(0x17b)]=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0x18d)]=0x1;['_layerDepthEntries']=[];['_dragStart'];['_boundPointerMove'];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x191)](),this['_viewport']=this['_getDomElement']('viewport'),this['_scene']=this['_getDomElement']('scene'),this[p(0x143)]=this[p(0x16a)](p(0x19a)),this['_empty']=this[p(0x16a)](p(0x15e)),this['_depthSlider']=this[p(0x16a)](p(0x168)),this['_depthValue']=this['_getDomElement'](p(0x17d)),this[p(0x14c)]=this[p(0x13e)][p(0x175)](this),this[p(0x14d)]=this[p(0x142)]['bind'](this),this['_depthSlider']['addEventListener'](p(0x13d),()=>{const q=p;this['_depthSpacing']=Number(this[q(0x198)]['value']),this['_depthValue'][q(0x18e)]=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this['_viewport']['addEventListener'](p(0x1a4),c=>this[p(0x197)](c)),this['_viewport'][p(0x1a3)]('wheel',c=>this['_onWheel'](c),{'passive':![]}),this['_viewport'][p(0x1a3)]('contextmenu',c=>c[p(0x153)]()),this[p(0x15a)]=new ResizeObserver(()=>this[p(0x145)]());}[o(0x185)](){const r=o;this['_resizeObserver'][r(0x161)](this),this['_applySceneTransform']();}['_scheduleRender'](){const s=o;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[s(0x154)](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0x184)]['designerCanvas'];this[t(0x14a)](c[t(0x169)]);const d=c['designerPixelSize'];this['_maxX']=Math['max'](d['width'],0x1),this[t(0x182)]=Math[t(0x18c)](d['height'],0x1);const e=this[t(0x17f)]();this['_content']['replaceChildren'](e['fragment']),this['_scene']['style']['width']=this['_maxX']+'px',this['_scene'][t(0x19c)]['height']=this[t(0x182)]+'px',this[t(0x143)][t(0x19c)][t(0x192)]=this['_maxX']+'px',this[t(0x143)]['style'][t(0x13c)]=this[t(0x182)]+'px',this['_empty']['style']['display']=e['count']?t(0x196):'flex',this['_updateLayerDepths'](),this[t(0x145)](),this['_reRenderFlag']=![];}[o(0x14a)](c){const u=o,d=c?.[u(0x171)],e=c?.['usableContainer'],f=d?.[u(0x173)]??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot']['adoptedStyleSheets']=f?.['adoptedStyleSheets']?[...f[u(0x170)]]:[];}['_createLayerTree'](){const v=o,c=this['_instanceServiceContainer'][v(0x169)],d=document[v(0x18f)]();let e=0x0;this[v(0x15b)]=[];for(const f of c['children']()){if(f[v(0x194)]!==NodeType['Element'])continue;const g=f['element'][v(0x188)](!![]);d[v(0x16f)](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}[o(0x189)](c,d,e){const w=o;this['_prepareCloneElement'](d,e),e++;const f=Array[w(0x199)](c['element'][w(0x16c)]),g=Array['from'](d[w(0x16c)]);for(const h of c[w(0x164)]()){if(h['nodeType']!==NodeType['Element'])continue;const i=f[w(0x193)](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this[w(0x189)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[x(0x19c)][x(0x17e)]='preserve-3d',c['style']['willChange']='translate',this['_layerDepthEntries']['push']({'element':c,'depth':d}));}[o(0x163)](){const y=o;this['_depthValue'][y(0x18e)]=this['_depthSpacing']+'px';if(!this[y(0x15b)]['length'])return;const c=this[y(0x15b)][y(0x187)](i=>i[y(0x156)]),d=Math['min'](...c),e=Math['max'](...c),f=Math[y(0x18c)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this[y(0x15b)]){h[y(0x180)](i[y(0x171)],i[y(0x156)]);}for(const j of this[y(0x15b)]){let k=j['element']['parentElement'],l;while(k){l=h[y(0x17a)](k);if(l!==undefined)break;k=k[y(0x162)];}const m=l===undefined?0x0:g(l);j['element']['style'][y(0x176)]=y(0x179)+(g(j[y(0x156)])-m)+'px';}}['_fitScene'](){const z=o,c=this['_viewport'][z(0x183)]();if(!c[z(0x192)]||!c[z(0x13c)]||!this[z(0x166)]||!this['_maxY'])return;const d=Math['min'](c[z(0x192)]/this['_maxX'],c[z(0x13c)]/this[z(0x182)])*0.72;this[z(0x18d)]=Math[z(0x16d)](Math[z(0x18c)](d,0.05),0x4),this[z(0x147)]=0x0,this[z(0x15d)]=0x0,this['_applySceneTransform']();}['_applySceneTransform'](){const A=o;this['_scene'][A(0x19c)]['transformStyle']=A(0x13f),this[A(0x143)]['style']['transformStyle']='preserve-3d',this[A(0x186)][A(0x19c)][A(0x19b)]='translate(-50%,\x20-50%)\x20'+'translate('+this['_translateX']+A(0x1a2)+this[A(0x15d)]+'px)\x20'+A(0x155)+this['_scale']+')\x20'+'rotateX('+this['_rotateX']+'deg)\x20'+A(0x157)+this[A(0x174)]+'deg)',this['_content'][A(0x19c)][A(0x19b)]='';}[o(0x197)](c){const B=o;if(c['target']===this['_depthSlider']||c[B(0x18a)]!==0x0&&c[B(0x18a)]!==0x1&&c['button']!==0x2)return;this['_dragStart']={'x':c[B(0x159)],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this[B(0x147)],'translateY':this[B(0x15d)],'pan':c[B(0x18a)]===0x1||c[B(0x18a)]===0x2||c['shiftKey']},this[B(0x17c)]['classList'][B(0x13b)]('dragging'),this['_viewport']['setPointerCapture'](c['pointerId']),this['_viewport']['addEventListener']('pointermove',this['_boundPointerMove']),this['_viewport']['addEventListener'](B(0x15f),this['_boundPointerUp']),this['_viewport']['addEventListener'](B(0x177),this[B(0x14d)]),c['preventDefault']();}[o(0x13e)](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this[C(0x146)]['x'],e=c['clientY']-this['_dragStart']['y'];this['_dragStart']['pan']?(this[C(0x147)]=this['_dragStart'][C(0x14f)]+d,this['_translateY']=this['_dragStart'][C(0x14b)]+e):(this[C(0x174)]=this[C(0x146)][C(0x160)]+d*0.35,this['_rotateX']=Math[C(0x16d)](0x55,Math['max'](-0x55,this['_dragStart']['rotateX']-e*0.35))),this[C(0x151)](),c['preventDefault']();}['_onPointerUp'](c){const D=o;this[D(0x146)]=null,this[D(0x17c)]['classList'][D(0x172)](D(0x181)),this[D(0x17c)]['releasePointerCapture'](c[D(0x150)]),this[D(0x17c)]['removeEventListener']('pointermove',this['_boundPointerMove']),this['_viewport']['removeEventListener']('pointerup',this['_boundPointerUp']),this[D(0x17c)]['removeEventListener']('pointercancel',this[D(0x14d)]);}[o(0x149)](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this['_scale']=Math['min'](0x6,Math['max'](0.03,this[E(0x18d)]*d)),this[E(0x151)](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this['_contentChangedHandler']?.[F(0x15c)](),this['_zoomFactorChangedHandler']?.[F(0x15c)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[F(0x184)][F(0x18b)]['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x190)]=this[F(0x184)][F(0x141)]['on'](()=>{this['_scheduleRender']();}),this[F(0x13a)]()):(this['_content'][F(0x178)](),this['_layerDepthEntries']=[],this['_empty'][F(0x19c)]['display']='flex');}}customElements[o(0x1a6)](o(0x165),LayerDepthView);