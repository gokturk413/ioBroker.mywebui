function b(c,d){c=c-0xb4;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xef))/0x1+-parseInt(n(0xe0))/0x2+-parseInt(n(0x109))/0x3+-parseInt(n(0x10e))/0x4*(parseInt(n(0xf8))/0x5)+parseInt(n(0xb4))/0x6+parseInt(n(0xdf))/0x7*(parseInt(n(0x11a))/0x8)+parseInt(n(0x11e))/0x9*(parseInt(n(0xb9))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcec94));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';function a(){const G=['preserve-3d','_translateX','fragment','addEventListener','max','4437513xgdJZB','_rotateY','_maxX','scene','flex','2745544CaJHTt','preventDefault','rootDesignItem','_rotateX','_getDomElement','pointerup','clientY','element','children','_prepareCloneTree','_createLayerTree','_scale','6324272RhNQZQ','shadowRoot','_zoomFactorChangedHandler','style','3600yINGZD','translateY','from','212448FNBvHM','node','_restoreCachedInititalValues','transformStyle','contextmenu','45690vahuex','_boundPointerMove','node-projects-web-component-designer-layer-depth-view','translate','content','childNodes','value','wheel','_content','_translateY','_depthSpacing','translateX','scale(','_empty','rotateX','parentElement','_depthSlider','appendChild','adoptedStyleSheets','bind','_layerDepthEntries','onZoomFactorChanged','count','textContent','replaceChildren','nodeType','input','deltaY','rotateY(','_depthValue','height','designerCanvas','_scene','_reRender','_reRenderFlag','min','display','define','14ApwhUj','221340BqISdb','Element','_dragStart','push','ownerDocument','_updateLayerDepths','classList','_onPointerMove','ready','_boundPointerUp','transform','_onWheel','button','willChange','_applySceneTransform','320853uoapRP','findIndex','clientX','pointerId','_instanceServiceContainer','setPointerCapture','createDocumentFragment','removeEventListener','rotateX(','5ymSjAd','instanceServiceContainer','depthSlider','_viewport','_scheduleRender','dragging','releasePointerCapture','_maxY','_contentChangedHandler','viewport','px,\x20','_copyAdoptedStyleSheets'];a=function(){return G;};return a();}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_viewport'];['_scene'];[o(0xc1)];['_empty'];[o(0xc9)];[o(0xd6)];['_instanceServiceContainer'];[o(0x100)];[o(0x11c)];['_resizeObserver'];[o(0xdb)]=![];['_maxX']=0x0;[o(0xff)]=0x0;[o(0xc3)]=0x24;[o(0x111)]=0x0;['_rotateY']=0x0;[o(0x105)]=0x0;[o(0xc2)]=0x0;[o(0x119)]=0x1;['_layerDepthEntries']=[];['_dragStart'];[o(0xba)];[o(0xe9)];constructor(){const p=o;super(),this[p(0xb6)](),this['_viewport']=this['_getDomElement'](p(0x101)),this[p(0xd9)]=this['_getDomElement'](p(0x10c)),this['_content']=this['_getDomElement'](p(0xbd)),this[p(0xc6)]=this[p(0x112)]('empty'),this[p(0xc9)]=this[p(0x112)](p(0xfa)),this['_depthValue']=this[p(0x112)]('depthValue'),this['_boundPointerMove']=this['_onPointerMove']['bind'](this),this['_boundPointerUp']=this['_onPointerUp'][p(0xcc)](this),this[p(0xc9)]['addEventListener'](p(0xd3),()=>{const q=p;this[q(0xc3)]=Number(this['_depthSlider'][q(0xbf)]),this['_depthValue']['textContent']=this['_depthSpacing']+'px',this[q(0xe5)]();}),this[p(0xfb)]['addEventListener']('pointerdown',c=>this['_onPointerDown'](c)),this[p(0xfb)]['addEventListener'](p(0xc0),c=>this[p(0xeb)](c),{'passive':![]}),this[p(0xfb)][p(0x107)](p(0xb8),c=>c[p(0x10f)]()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}[o(0xe8)](){const r=o;this['_resizeObserver']['observe'](this),this[r(0xee)]();}[o(0xfc)](){this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}async[o(0xda)](){const s=o;if(!this[s(0xf3)])return;const c=this[s(0xf3)]['designerCanvas'];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c['designerPixelSize'];this[s(0x10b)]=Math['max'](d['width'],0x1),this[s(0xff)]=Math['max'](d[s(0xd7)],0x1);const e=this[s(0x118)]();this[s(0xc1)][s(0xd1)](e[s(0x106)]),this[s(0xd9)][s(0x11d)]['width']=this[s(0x10b)]+'px',this['_scene']['style']['height']=this[s(0xff)]+'px',this['_content'][s(0x11d)]['width']=this['_maxX']+'px',this['_content'][s(0x11d)][s(0xd7)]=this[s(0xff)]+'px',this['_empty']['style']['display']=e[s(0xcf)]?'none':s(0x10d),this['_updateLayerDepths'](),this['_fitScene'](),this[s(0xdb)]=![];}[o(0x103)](c){const t=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.[t(0x11b)]??(e instanceof Document?e:d?.[t(0xe4)]);this[t(0x11b)][t(0xcb)]=f?.[t(0xcb)]?[...f['adoptedStyleSheets']]:[];}[o(0x118)](){const u=o,c=this['_instanceServiceContainer'][u(0x110)],d=document[u(0xf5)]();let e=0x0;this[u(0xcd)]=[];for(const f of c[u(0x116)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d[u(0xca)](g),e=this[u(0x117)](f,g,e);}return{'fragment':d,'count':e};}[o(0x117)](c,d,e){const v=o;this['_prepareCloneElement'](d,e),e++;const f=Array[v(0x120)](c['element'][v(0xbe)]),g=Array['from'](d[v(0xbe)]);for(const h of c['children']()){if(h[v(0xd2)]!==NodeType[v(0xe1)])continue;const i=f[v(0xf0)](k=>k===h[v(0xb5)]),j=g[i];j instanceof Element&&(e=this[v(0x117)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const w=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']='preserve-3d',c['style'][w(0xed)]='translate',this['_layerDepthEntries'][w(0xe3)]({'element':c,'depth':d}));}[o(0xe5)](){const x=o;this[x(0xd6)][x(0xd0)]=this[x(0xc3)]+'px';if(!this['_layerDepthEntries']['length'])return;const c=this[x(0xcd)]['map'](i=>i['depth']),d=Math[x(0xdc)](...c),e=Math['max'](...c),f=Math[x(0x108)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[x(0xc3)]*0x2,h=new Map();for(const i of this[x(0xcd)]){h['set'](i[x(0x115)],i['depth']);}for(const j of this['_layerDepthEntries']){let k=j[x(0x115)]['parentElement'],l;while(k){l=h['get'](k);if(l!==undefined)break;k=k[x(0xc8)];}const m=l===undefined?0x0:g(l);j['element']['style'][x(0xbc)]='0\x200\x20'+(g(j['depth'])-m)+'px';}}['_fitScene'](){const y=o,c=this['_viewport']['getBoundingClientRect']();if(!c['width']||!c['height']||!this[y(0x10b)]||!this['_maxY'])return;const d=Math['min'](c['width']/this['_maxX'],c['height']/this[y(0xff)])*0.72;this['_scale']=Math[y(0xdc)](Math['max'](d,0.05),0x4),this['_translateX']=0x0,this['_translateY']=0x0,this['_applySceneTransform']();}['_applySceneTransform'](){const z=o;this['_scene']['style'][z(0xb7)]=z(0x104),this['_content']['style']['transformStyle']=z(0x104),this[z(0xd9)]['style']['transform']='translate(-50%,\x20-50%)\x20'+'translate('+this['_translateX']+z(0x102)+this['_translateY']+'px)\x20'+z(0xc5)+this[z(0x119)]+')\x20'+z(0xf7)+this[z(0x111)]+'deg)\x20'+z(0xd5)+this['_rotateY']+'deg)',this[z(0xc1)][z(0x11d)][z(0xea)]='';}['_onPointerDown'](c){const A=o;if(c['target']===this[A(0xc9)]||c[A(0xec)]!==0x0&&c['button']!==0x1&&c['button']!==0x2)return;this[A(0xe2)]={'x':c['clientX'],'y':c[A(0x114)],'rotateX':this['_rotateX'],'rotateY':this[A(0x10a)],'translateX':this[A(0x105)],'translateY':this[A(0xc2)],'pan':c['button']===0x1||c['button']===0x2||c['shiftKey']},this['_viewport']['classList']['add'](A(0xfd)),this[A(0xfb)][A(0xf4)](c[A(0xf2)]),this[A(0xfb)][A(0x107)]('pointermove',this['_boundPointerMove']),this[A(0xfb)][A(0x107)](A(0x113),this[A(0xe9)]),this['_viewport'][A(0x107)]('pointercancel',this['_boundPointerUp']),c[A(0x10f)]();}[o(0xe7)](c){const B=o;if(!this['_dragStart'])return;const d=c[B(0xf1)]-this[B(0xe2)]['x'],e=c['clientY']-this['_dragStart']['y'];this[B(0xe2)]['pan']?(this[B(0x105)]=this[B(0xe2)][B(0xc4)]+d,this['_translateY']=this[B(0xe2)][B(0x11f)]+e):(this['_rotateY']=this['_dragStart']['rotateY']+d*0.35,this['_rotateX']=Math[B(0xdc)](0x55,Math[B(0x108)](-0x55,this['_dragStart'][B(0xc7)]-e*0.35))),this[B(0xee)](),c['preventDefault']();}['_onPointerUp'](c){const C=o;this['_dragStart']=null,this[C(0xfb)][C(0xe6)]['remove'](C(0xfd)),this['_viewport'][C(0xfe)](c['pointerId']),this[C(0xfb)]['removeEventListener']('pointermove',this['_boundPointerMove']),this['_viewport'][C(0xf6)](C(0x113),this['_boundPointerUp']),this[C(0xfb)][C(0xf6)]('pointercancel',this[C(0xe9)]);}[o(0xeb)](c){const D=o,d=c[D(0xd4)]<0x0?1.08:0.92;this['_scale']=Math[D(0xdc)](0x6,Math['max'](0.03,this['_scale']*d)),this[D(0xee)](),c[D(0x10f)]();}set[o(0xf9)](c){const E=o;this[E(0x100)]?.['dispose'](),this[E(0x11c)]?.['dispose'](),this[E(0xf3)]=c,this['_instanceServiceContainer']?(this[E(0x11c)]=this['_instanceServiceContainer'][E(0xd8)][E(0xce)]['on'](()=>{this['_scheduleRender']();}),this['_contentChangedHandler']=this[E(0xf3)]['onContentChanged']['on'](()=>{const F=E;this[F(0xfc)]();}),this[E(0xfc)]()):(this[E(0xc1)]['replaceChildren'](),this[E(0xcd)]=[],this[E(0xc6)][E(0x11d)][E(0xdd)]='flex');}}customElements[o(0xde)](o(0xbb),LayerDepthView);