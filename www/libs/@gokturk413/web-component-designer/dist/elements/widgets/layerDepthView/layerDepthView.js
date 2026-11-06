const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x13d))/0x1+parseInt(n(0x11f))/0x2+-parseInt(n(0x116))/0x3*(parseInt(n(0x129))/0x4)+parseInt(n(0x109))/0x5*(-parseInt(n(0x138))/0x6)+-parseInt(n(0x153))/0x7+parseInt(n(0x147))/0x8+-parseInt(n(0x135))/0x9*(parseInt(n(0xfa))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80295));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0xf7)];['_scene'];[o(0x11b)];[o(0x158)];[o(0x13b)];[o(0x113)];[o(0xf9)];[o(0x128)];[o(0x12f)];['_resizeObserver'];['_reRenderFlag']=![];[o(0x107)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;[o(0x10c)]=0x0;[o(0xfb)]=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0x133)]=0x1;[o(0x120)]=[];['_dragStart'];[o(0x148)];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x11d)](),this['_viewport']=this['_getDomElement'](p(0x141)),this[p(0x115)]=this[p(0x111)]('scene'),this['_content']=this[p(0x111)]('content'),this[p(0x158)]=this[p(0x111)]('empty'),this[p(0x13b)]=this['_getDomElement']('depthSlider'),this[p(0x113)]=this[p(0x111)]('depthValue'),this[p(0x148)]=this[p(0x146)]['bind'](this),this[p(0x114)]=this['_onPointerUp']['bind'](this),this[p(0x13b)][p(0x144)]('input',()=>{const q=p;this['_depthSpacing']=Number(this[q(0x13b)][q(0xfe)]),this['_depthValue'][q(0x121)]=this['_depthSpacing']+'px',this[q(0x12c)]();}),this[p(0xf7)]['addEventListener']('pointerdown',c=>this['_onPointerDown'](c)),this['_viewport']['addEventListener']('wheel',c=>this[p(0x126)](c),{'passive':![]}),this[p(0xf7)]['addEventListener'](p(0x155),c=>c[p(0x118)]()),this[p(0x139)]=new ResizeObserver(()=>this[p(0x137)]());}['ready'](){this['_resizeObserver']['observe'](this),this['_applySceneTransform']();}[o(0x145)](){const r=o;this[r(0x11e)]===![]&&(this[r(0x11e)]=!![],setTimeout(()=>this['_reRender'](),0x32));}async[o(0xf8)](){const s=o;if(!this['_instanceServiceContainer'])return;const c=this[s(0xf9)][s(0x13e)];this['_copyAdoptedStyleSheets'](c[s(0x102)]);const d=c[s(0x10f)];this[s(0x107)]=Math[s(0x103)](d[s(0x14e)],0x1),this[s(0x112)]=Math[s(0x103)](d[s(0x13a)],0x1);const e=this[s(0x14f)]();this[s(0x11b)]['replaceChildren'](e[s(0xff)]),this['_scene']['style'][s(0x14e)]=this[s(0x107)]+'px',this[s(0x115)]['style']['height']=this[s(0x112)]+'px',this['_content']['style'][s(0x14e)]=this['_maxX']+'px',this[s(0x11b)]['style']['height']=this[s(0x112)]+'px',this[s(0x158)][s(0x132)]['display']=e['count']?s(0xf6):s(0x127),this['_updateLayerDepths'](),this['_fitScene'](),this[s(0x11e)]=![];}['_copyAdoptedStyleSheets'](c){const t=o,d=c?.[t(0x10d)],e=c?.[t(0x101)],f=d?.['shadowRoot']??(e instanceof Document?e:d?.['ownerDocument']);this[t(0x142)][t(0x12e)]=f?.[t(0x12e)]?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const u=o,c=this['_instanceServiceContainer'][u(0x102)],d=document['createDocumentFragment']();let e=0x0;this['_layerDepthEntries']=[];for(const f of c[u(0x14a)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}['_prepareCloneTree'](c,d,e){const v=o;this[v(0x14b)](d,e),e++;const f=Array['from'](c['element'][v(0x122)]),g=Array[v(0x119)](d[v(0x122)]);for(const h of c['children']()){if(h[v(0x125)]!==NodeType['Element'])continue;const i=f['findIndex'](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this[v(0x131)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const w=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']=w(0x13c),c[w(0x132)]['willChange']='translate',this['_layerDepthEntries'][w(0x140)]({'element':c,'depth':d}));}[o(0x12c)](){const x=o;this['_depthValue'][x(0x121)]=this[x(0x106)]+'px';if(!this[x(0x120)]['length'])return;const c=this['_layerDepthEntries'][x(0x104)](i=>i['depth']),d=Math['min'](...c),e=Math[x(0x103)](...c),f=Math[x(0x103)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[x(0x106)]*0x2,h=new Map();for(const i of this[x(0x120)]){h['set'](i[x(0x10d)],i['depth']);}for(const j of this[x(0x120)]){let k=j[x(0x10d)]['parentElement'],l;while(k){l=h[x(0x157)](k);if(l!==undefined)break;k=k[x(0x108)];}const m=l===undefined?0x0:g(l);j[x(0x10d)]['style'][x(0x12a)]='0\x200\x20'+(g(j[x(0x149)])-m)+'px';}}['_fitScene'](){const y=o,c=this[y(0xf7)]['getBoundingClientRect']();if(!c['width']||!c[y(0x13a)]||!this[y(0x107)]||!this[y(0x112)])return;const d=Math['min'](c['width']/this['_maxX'],c['height']/this['_maxY'])*0.72;this['_scale']=Math['min'](Math[y(0x103)](d,0.05),0x4),this[y(0x154)]=0x0,this['_translateY']=0x0,this['_applySceneTransform']();}['_applySceneTransform'](){const z=o;this[z(0x115)][z(0x132)]['transformStyle']='preserve-3d',this[z(0x11b)][z(0x132)]['transformStyle']=z(0x13c),this[z(0x115)][z(0x132)]['transform']='translate(-50%,\x20-50%)\x20'+z(0xfc)+this['_translateX']+'px,\x20'+this[z(0x156)]+z(0x110)+z(0x13f)+this['_scale']+')\x20'+z(0x117)+this['_rotateX']+z(0x11c)+'rotateY('+this['_rotateY']+z(0x100),this[z(0x11b)][z(0x132)]['transform']='';}[o(0x12b)](c){const A=o;if(c['target']===this['_depthSlider']||c[A(0xfd)]!==0x0&&c['button']!==0x1&&c[A(0xfd)]!==0x2)return;this['_dragStart']={'x':c[A(0x14c)],'y':c['clientY'],'rotateX':this[A(0x10c)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this[A(0x156)],'pan':c[A(0xfd)]===0x1||c[A(0xfd)]===0x2||c['shiftKey']},this[A(0xf7)][A(0x10b)][A(0x143)]('dragging'),this['_viewport']['setPointerCapture'](c[A(0x134)]),this['_viewport'][A(0x144)](A(0x151),this['_boundPointerMove']),this[A(0xf7)]['addEventListener'](A(0x152),this[A(0x114)]),this['_viewport']['addEventListener']('pointercancel',this['_boundPointerUp']),c[A(0x118)]();}['_onPointerMove'](c){const B=o;if(!this[B(0x130)])return;const d=c['clientX']-this[B(0x130)]['x'],e=c[B(0x10e)]-this['_dragStart']['y'];this[B(0x130)]['pan']?(this[B(0x154)]=this[B(0x130)]['translateX']+d,this['_translateY']=this[B(0x130)]['translateY']+e):(this[B(0xfb)]=this[B(0x130)]['rotateY']+d*0.35,this[B(0x10c)]=Math['min'](0x55,Math[B(0x103)](-0x55,this['_dragStart'][B(0x12d)]-e*0.35))),this['_applySceneTransform'](),c[B(0x118)]();}[o(0x11a)](c){const C=o;this['_dragStart']=null,this[C(0xf7)]['classList']['remove']('dragging'),this[C(0xf7)]['releasePointerCapture'](c[C(0x134)]),this[C(0xf7)]['removeEventListener']('pointermove',this['_boundPointerMove']),this['_viewport'][C(0x14d)](C(0x152),this['_boundPointerUp']),this['_viewport']['removeEventListener']('pointercancel',this['_boundPointerUp']);}[o(0x126)](c){const D=o,d=c[D(0x123)]<0x0?1.08:0.92;this[D(0x133)]=Math['min'](0x6,Math[D(0x103)](0.03,this['_scale']*d)),this[D(0x10a)](),c[D(0x118)]();}set[o(0x150)](c){const E=o;this[E(0x128)]?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this[E(0xf9)]=c,this[E(0xf9)]?(this[E(0x12f)]=this[E(0xf9)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const F=E;this[F(0x145)]();}),this[E(0x128)]=this['_instanceServiceContainer']['onContentChanged']['on'](()=>{this['_scheduleRender']();}),this['_scheduleRender']()):(this['_content'][E(0x105)](),this['_layerDepthEntries']=[],this[E(0x158)][E(0x132)][E(0x124)]=E(0x127));}}function b(c,d){c=c-0xf6;const e=a();let f=e[c];return f;}function a(){const G=['value','fragment','deg)','usableContainer','rootDesignItem','max','map','replaceChildren','_depthSpacing','_maxX','parentElement','5EczuIN','_applySceneTransform','classList','_rotateX','element','clientY','designerPixelSize','px)\x20','_getDomElement','_maxY','_depthValue','_boundPointerUp','_scene','486uIKKRn','rotateX(','preventDefault','from','_onPointerUp','_content','deg)\x20','_restoreCachedInititalValues','_reRenderFlag','460684PqDTUt','_layerDepthEntries','textContent','childNodes','deltaY','display','nodeType','_onWheel','flex','_contentChangedHandler','420cePUdl','translate','_onPointerDown','_updateLayerDepths','rotateX','adoptedStyleSheets','_zoomFactorChangedHandler','_dragStart','_prepareCloneTree','style','_scale','pointerId','4359951oOUCXE','define','_fitScene','1310676KlefaU','_resizeObserver','height','_depthSlider','preserve-3d','742406kgiQHX','designerCanvas','scale(','push','viewport','shadowRoot','add','addEventListener','_scheduleRender','_onPointerMove','6280552AwjUil','_boundPointerMove','depth','children','_prepareCloneElement','clientX','removeEventListener','width','_createLayerTree','instanceServiceContainer','pointermove','pointerup','3590811uVXSbY','_translateX','contextmenu','_translateY','get','_empty','none','_viewport','_reRender','_instanceServiceContainer','10GhpYcz','_rotateY','translate(','button'];a=function(){return G;};return a();}customElements[o(0x136)]('node-projects-web-component-designer-layer-depth-view',LayerDepthView);