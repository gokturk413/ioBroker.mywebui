const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x104))/0x1*(parseInt(n(0x102))/0x2)+-parseInt(n(0xd3))/0x3*(-parseInt(n(0xe6))/0x4)+parseInt(n(0xd7))/0x5*(-parseInt(n(0xe4))/0x6)+-parseInt(n(0xcf))/0x7+parseInt(n(0xb4))/0x8+-parseInt(n(0xda))/0x9+-parseInt(n(0xbf))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x44116));function a(){const G=['_maxX','_rotateY','3205944YwxkCv','scale(','shiftKey','from','_updateLayerDepths','pointerId','flex','_onPointerDown','_instanceServiceContainer','_depthSpacing','4878WuXVPr','contextmenu','32aRpFWC','width','_depthSlider','deg)\x20','parentElement','_boundPointerUp','_scene','_prepareCloneElement','dispose','textContent','max','_prepareCloneTree','_scheduleRender','template','translateY','_onWheel','rotateY','rotateX','translate','pointerup','height','translate(','removeEventListener','createDocumentFragment','transform','depth','button','observe','2580dSQYPK','_rotateX','214AQBalr','_resizeObserver','_layerDepthEntries','releasePointerCapture','preserve-3d','ready','0\x200\x20','preventDefault','_contentChangedHandler','rootDesignItem','clientY','_copyAdoptedStyleSheets','_getDomElement','style','depthSlider','instanceServiceContainer','children','_zoomFactorChangedHandler','adoptedStyleSheets','transformStyle','designerCanvas','2688688yziVuf','_depthValue','set','value','addEventListener','_boundPointerMove','_translateY','depthValue','min','_empty','display','1890790budcAM','remove','_fitScene','map','_viewport','_dragStart','_maxY','_reRenderFlag','onContentChanged','_content','childNodes','push','node-projects-web-component-designer-layer-depth-view','deltaY','_onPointerUp','pointercancel','1763216eJPdcN','_applySceneTransform','element','rotateX(','179124DDjiRe','_scale','rotateY(','length','85ypmLUB'];a=function(){return G;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0xad;const e=a();let f=e[c];return f;}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0xf3)]=html`
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
        </div>`;[o(0xc3)];['_scene'];['_content'];[o(0xbd)];['_depthSlider'];['_depthValue'];['_instanceServiceContainer'];['_contentChangedHandler'];['_zoomFactorChangedHandler'];[o(0x105)];['_reRenderFlag']=![];['_maxX']=0x0;[o(0xc5)]=0x0;['_depthSpacing']=0x24;['_rotateX']=0x0;['_rotateY']=0x0;['_translateX']=0x0;[o(0xba)]=0x0;['_scale']=0x1;[o(0x106)]=[];['_dragStart'];[o(0xb9)];['_boundPointerUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xc3)]=this['_getDomElement']('viewport'),this['_scene']=this['_getDomElement']('scene'),this[p(0xc8)]=this['_getDomElement']('content'),this['_empty']=this['_getDomElement']('empty'),this[p(0xe8)]=this['_getDomElement'](p(0xad)),this[p(0xb5)]=this[p(0x110)](p(0xbb)),this[p(0xb9)]=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this['_onPointerUp']['bind'](this),this['_depthSlider'][p(0xb8)]('input',()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider'][q(0xb7)]),this['_depthValue'][q(0xef)]=this[q(0xe3)]+'px',this[q(0xde)]();}),this['_viewport'][p(0xb8)]('pointerdown',c=>this[p(0xe1)](c)),this[p(0xc3)]['addEventListener']('wheel',c=>this[p(0xf5)](c),{'passive':![]}),this[p(0xc3)][p(0xb8)](p(0xe5),c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this[p(0xc1)]());}[o(0x109)](){const r=o;this[r(0x105)][r(0x101)](this),this[r(0xd0)]();}[o(0xf2)](){this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}async['_reRender'](){const s=o;if(!this[s(0xe2)])return;const c=this['_instanceServiceContainer'][s(0xb3)];this[s(0x10f)](c[s(0x10d)]);const d=c['designerPixelSize'];this[s(0xd8)]=Math[s(0xf0)](d['width'],0x1),this[s(0xc5)]=Math[s(0xf0)](d[s(0xfa)],0x1);const e=this['_createLayerTree']();this['_content']['replaceChildren'](e['fragment']),this[s(0xec)]['style']['width']=this[s(0xd8)]+'px',this[s(0xec)]['style']['height']=this[s(0xc5)]+'px',this[s(0xc8)]['style'][s(0xe7)]=this[s(0xd8)]+'px',this['_content']['style'][s(0xfa)]=this[s(0xc5)]+'px',this['_empty']['style'][s(0xbe)]=e['count']?'none':s(0xe0),this[s(0xde)](),this[s(0xc1)](),this[s(0xc6)]=![];}['_copyAdoptedStyleSheets'](c){const t=o,d=c?.[t(0xd1)],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot'][t(0xb1)]=f?.['adoptedStyleSheets']?[...f[t(0xb1)]]:[];}['_createLayerTree'](){const u=o,c=this['_instanceServiceContainer'][u(0x10d)],d=document[u(0xfd)]();let e=0x0;this[u(0x106)]=[];for(const f of c[u(0xaf)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d['appendChild'](g),e=this[u(0xf1)](f,g,e);}return{'fragment':d,'count':e};}[o(0xf1)](c,d,e){const v=o;this[v(0xed)](d,e),e++;const f=Array[v(0xdd)](c[v(0xd1)]['childNodes']),g=Array[v(0xdd)](d[v(0xc9)]);for(const h of c['children']()){if(h['nodeType']!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this[v(0xf1)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const w=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c[w(0x111)]['transformStyle']=w(0x108),c[w(0x111)]['willChange']=w(0xf8),this['_layerDepthEntries'][w(0xca)]({'element':c,'depth':d}));}[o(0xde)](){const x=o;this['_depthValue'][x(0xef)]=this['_depthSpacing']+'px';if(!this[x(0x106)][x(0xd6)])return;const c=this[x(0x106)][x(0xc2)](i=>i[x(0xff)]),d=Math[x(0xbc)](...c),e=Math[x(0xf0)](...c),f=Math[x(0xf0)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[x(0xe3)]*0x2,h=new Map();for(const i of this[x(0x106)]){h[x(0xb6)](i[x(0xd1)],i[x(0xff)]);}for(const j of this['_layerDepthEntries']){let k=j[x(0xd1)]['parentElement'],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k[x(0xea)];}const m=l===undefined?0x0:g(l);j['element']['style'][x(0xf8)]=x(0x10a)+(g(j['depth'])-m)+'px';}}[o(0xc1)](){const y=o,c=this[y(0xc3)]['getBoundingClientRect']();if(!c[y(0xe7)]||!c['height']||!this['_maxX']||!this[y(0xc5)])return;const d=Math[y(0xbc)](c[y(0xe7)]/this[y(0xd8)],c[y(0xfa)]/this['_maxY'])*0.72;this['_scale']=Math[y(0xbc)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this[y(0xd0)]();}['_applySceneTransform'](){const z=o;this[z(0xec)][z(0x111)][z(0xb2)]=z(0x108),this[z(0xc8)]['style'][z(0xb2)]=z(0x108),this['_scene']['style'][z(0xfe)]='translate(-50%,\x20-50%)\x20'+z(0xfb)+this['_translateX']+'px,\x20'+this['_translateY']+'px)\x20'+z(0xdb)+this[z(0xd4)]+')\x20'+z(0xd2)+this[z(0x103)]+z(0xe9)+z(0xd5)+this[z(0xd9)]+'deg)',this[z(0xc8)][z(0x111)]['transform']='';}['_onPointerDown'](c){const A=o;if(c['target']===this[A(0xe8)]||c['button']!==0x0&&c[A(0x100)]!==0x1&&c[A(0x100)]!==0x2)return;this[A(0xc4)]={'x':c['clientX'],'y':c[A(0x10e)],'rotateX':this[A(0x103)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c[A(0x100)]===0x1||c[A(0x100)]===0x2||c[A(0xdc)]},this[A(0xc3)]['classList']['add']('dragging'),this['_viewport']['setPointerCapture'](c[A(0xdf)]),this[A(0xc3)]['addEventListener']('pointermove',this['_boundPointerMove']),this['_viewport']['addEventListener'](A(0xf9),this['_boundPointerUp']),this[A(0xc3)]['addEventListener'](A(0xce),this['_boundPointerUp']),c[A(0x10b)]();}['_onPointerMove'](c){const B=o;if(!this['_dragStart'])return;const d=c['clientX']-this[B(0xc4)]['x'],e=c['clientY']-this[B(0xc4)]['y'];this[B(0xc4)]['pan']?(this['_translateX']=this['_dragStart']['translateX']+d,this[B(0xba)]=this['_dragStart'][B(0xf4)]+e):(this['_rotateY']=this[B(0xc4)][B(0xf6)]+d*0.35,this[B(0x103)]=Math[B(0xbc)](0x55,Math['max'](-0x55,this['_dragStart'][B(0xf7)]-e*0.35))),this['_applySceneTransform'](),c['preventDefault']();}[o(0xcd)](c){const C=o;this['_dragStart']=null,this['_viewport']['classList'][C(0xc0)]('dragging'),this[C(0xc3)][C(0x107)](c['pointerId']),this[C(0xc3)][C(0xfc)]('pointermove',this[C(0xb9)]),this['_viewport']['removeEventListener'](C(0xf9),this[C(0xeb)]),this[C(0xc3)][C(0xfc)]('pointercancel',this['_boundPointerUp']);}['_onWheel'](c){const D=o,d=c[D(0xcc)]<0x0?1.08:0.92;this['_scale']=Math['min'](0x6,Math[D(0xf0)](0.03,this[D(0xd4)]*d)),this['_applySceneTransform'](),c[D(0x10b)]();}set[o(0xae)](c){const E=o;this[E(0x10c)]?.[E(0xee)](),this['_zoomFactorChangedHandler']?.[E(0xee)](),this['_instanceServiceContainer']=c,this[E(0xe2)]?(this[E(0xb0)]=this['_instanceServiceContainer'][E(0xb3)]['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this[E(0x10c)]=this[E(0xe2)][E(0xc7)]['on'](()=>{const F=E;this[F(0xf2)]();}),this[E(0xf2)]()):(this[E(0xc8)]['replaceChildren'](),this[E(0x106)]=[],this['_empty'][E(0x111)]['display']=E(0xe0));}}customElements['define'](o(0xcb),LayerDepthView);