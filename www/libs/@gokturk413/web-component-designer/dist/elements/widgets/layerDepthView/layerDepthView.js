const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x20a))/0x1+parseInt(n(0x246))/0x2+-parseInt(n(0x244))/0x3*(-parseInt(n(0x21b))/0x4)+-parseInt(n(0x1f8))/0x5*(-parseInt(n(0x226))/0x6)+-parseInt(n(0x1f6))/0x7*(-parseInt(n(0x210))/0x8)+-parseInt(n(0x22d))/0x9*(-parseInt(n(0x20c))/0xa)+parseInt(n(0x232))/0xb*(-parseInt(n(0x1fb))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa6011));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0x1e6;const e=a();let f=e[c];return f;}export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x230)]=css`
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
        </div>`;['_viewport'];[o(0x222)];['_content'];['_empty'];[o(0x20e)];['_depthValue'];[o(0x1f2)];[o(0x1eb)];['_zoomFactorChangedHandler'];[o(0x228)];[o(0x204)]=![];['_maxX']=0x0;[o(0x212)]=0x0;[o(0x23a)]=0x24;[o(0x1ec)]=0x0;[o(0x218)]=0x0;[o(0x216)]=0x0;['_translateY']=0x0;[o(0x1fc)]=0x1;['_layerDepthEntries']=[];[o(0x215)];['_boundPointerMove'];['_boundPointerUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_viewport']=this['_getDomElement']('viewport'),this[p(0x222)]=this['_getDomElement'](p(0x1f0)),this['_content']=this['_getDomElement']('content'),this['_empty']=this['_getDomElement']('empty'),this[p(0x20e)]=this['_getDomElement']('depthSlider'),this['_depthValue']=this['_getDomElement']('depthValue'),this[p(0x21d)]=this[p(0x240)][p(0x1fd)](this),this['_boundPointerUp']=this[p(0x23d)]['bind'](this),this[p(0x20e)][p(0x22f)]('input',()=>{const q=p;this['_depthSpacing']=Number(this['_depthSlider']['value']),this['_depthValue'][q(0x22e)]=this[q(0x23a)]+'px',this['_updateLayerDepths']();}),this['_viewport'][p(0x22f)](p(0x1e9),c=>this['_onPointerDown'](c)),this[p(0x227)][p(0x22f)](p(0x208),c=>this['_onWheel'](c),{'passive':![]}),this[p(0x227)][p(0x22f)](p(0x211),c=>c['preventDefault']()),this['_resizeObserver']=new ResizeObserver(()=>this['_fitScene']());}['ready'](){const r=o;this['_resizeObserver']['observe'](this),this[r(0x1f7)]();}[o(0x1fe)](){const s=o;this[s(0x204)]===![]&&(this[s(0x204)]=!![],setTimeout(()=>this['_reRender'](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this['_instanceServiceContainer'][t(0x203)];this['_copyAdoptedStyleSheets'](c['rootDesignItem']);const d=c[t(0x202)];this['_maxX']=Math[t(0x247)](d[t(0x1ee)],0x1),this[t(0x212)]=Math[t(0x247)](d[t(0x1fa)],0x1);const e=this['_createLayerTree']();this['_content'][t(0x22c)](e['fragment']),this['_scene']['style'][t(0x1ee)]=this[t(0x217)]+'px',this[t(0x222)]['style']['height']=this[t(0x212)]+'px',this[t(0x229)]['style']['width']=this[t(0x217)]+'px',this['_content'][t(0x230)][t(0x1fa)]=this['_maxY']+'px',this[t(0x237)]['style']['display']=e['count']?'none':t(0x235),this[t(0x1ff)](),this['_fitScene'](),this['_reRenderFlag']=![];}['_copyAdoptedStyleSheets'](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.[u(0x1e8)]??(e instanceof Document?e:d?.['ownerDocument']);this['shadowRoot'][u(0x23f)]=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this['_instanceServiceContainer'][v(0x24b)],d=document['createDocumentFragment']();let e=0x0;this[v(0x201)]=[];for(const f of c['children']()){if(f['nodeType']!==NodeType['Element'])continue;const g=f[v(0x207)][v(0x24a)](!![]);d['appendChild'](g),e=this['_prepareCloneTree'](f,g,e);}return{'fragment':d,'count':e};}[o(0x20f)](c,d,e){const w=o;this[w(0x213)](d,e),e++;const f=Array[w(0x205)](c[w(0x207)]['childNodes']),g=Array['from'](d[w(0x1ea)]);for(const h of c['children']()){if(h[w(0x20d)]!==NodeType['Element'])continue;const i=f[w(0x200)](k=>k===h[w(0x249)]),j=g[i];j instanceof Element&&(e=this['_prepareCloneTree'](h,j,e));}return e;}[o(0x213)](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']='preserve-3d',c[x(0x230)][x(0x214)]='translate',this[x(0x201)][x(0x22a)]({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue'][y(0x22e)]=this[y(0x23a)]+'px';if(!this[y(0x201)]['length'])return;const c=this['_layerDepthEntries'][y(0x248)](i=>i[y(0x1ef)]),d=Math['min'](...c),e=Math[y(0x247)](...c),f=Math[y(0x247)](e-d,0x1),g=i=>((i-d)/f-0.5)*this['_depthSpacing']*0x2,h=new Map();for(const i of this['_layerDepthEntries']){h['set'](i['element'],i[y(0x1ef)]);}for(const j of this['_layerDepthEntries']){let k=j[y(0x207)]['parentElement'],l;while(k){l=h[y(0x242)](k);if(l!==undefined)break;k=k[y(0x24c)];}const m=l===undefined?0x0:g(l);j['element'][y(0x230)]['translate']=y(0x23c)+(g(j[y(0x1ef)])-m)+'px';}}['_fitScene'](){const z=o,c=this[z(0x227)]['getBoundingClientRect']();if(!c[z(0x1ee)]||!c[z(0x1fa)]||!this[z(0x217)]||!this[z(0x212)])return;const d=Math['min'](c[z(0x1ee)]/this[z(0x217)],c['height']/this[z(0x212)])*0.72;this[z(0x1fc)]=Math['min'](Math[z(0x247)](d,0.05),0x4),this['_translateX']=0x0,this[z(0x243)]=0x0,this['_applySceneTransform']();}[o(0x1f7)](){const A=o;this[A(0x222)]['style'][A(0x23e)]='preserve-3d',this['_content'][A(0x230)]['transformStyle']=A(0x220),this['_scene']['style']['transform']=A(0x21c)+'translate('+this['_translateX']+A(0x223)+this[A(0x243)]+A(0x1f4)+'scale('+this['_scale']+')\x20'+A(0x21a)+this['_rotateX']+'deg)\x20'+A(0x241)+this['_rotateY']+A(0x1ed),this['_content'][A(0x230)][A(0x245)]='';}[o(0x236)](c){const B=o;if(c[B(0x20b)]===this[B(0x20e)]||c['button']!==0x0&&c[B(0x21f)]!==0x1&&c[B(0x21f)]!==0x2)return;this[B(0x215)]={'x':c[B(0x23b)],'y':c['clientY'],'rotateX':this['_rotateX'],'rotateY':this['_rotateY'],'translateX':this[B(0x216)],'translateY':this['_translateY'],'pan':c[B(0x21f)]===0x1||c[B(0x21f)]===0x2||c['shiftKey']},this[B(0x227)]['classList'][B(0x209)]('dragging'),this['_viewport'][B(0x225)](c['pointerId']),this['_viewport']['addEventListener'](B(0x239),this['_boundPointerMove']),this[B(0x227)]['addEventListener'](B(0x231),this[B(0x1f5)]),this['_viewport']['addEventListener']('pointercancel',this['_boundPointerUp']),c['preventDefault']();}['_onPointerMove'](c){const C=o;if(!this[C(0x215)])return;const d=c['clientX']-this['_dragStart']['x'],e=c['clientY']-this[C(0x215)]['y'];this['_dragStart']['pan']?(this['_translateX']=this[C(0x215)]['translateX']+d,this['_translateY']=this['_dragStart']['translateY']+e):(this[C(0x218)]=this['_dragStart'][C(0x1f9)]+d*0.35,this['_rotateX']=Math[C(0x206)](0x55,Math[C(0x247)](-0x55,this[C(0x215)]['rotateX']-e*0.35))),this[C(0x1f7)](),c['preventDefault']();}[o(0x23d)](c){const D=o;this[D(0x215)]=null,this['_viewport'][D(0x21e)]['remove']('dragging'),this['_viewport']['releasePointerCapture'](c[D(0x221)]),this['_viewport'][D(0x1f1)](D(0x239),this['_boundPointerMove']),this[D(0x227)][D(0x1f1)]('pointerup',this['_boundPointerUp']),this[D(0x227)]['removeEventListener'](D(0x1f3),this[D(0x1f5)]);}[o(0x1e7)](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0x1fc)]=Math[E(0x206)](0x6,Math['max'](0.03,this[E(0x1fc)]*d)),this['_applySceneTransform'](),c[E(0x233)]();}set[o(0x1e6)](c){const F=o;this[F(0x1eb)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[F(0x238)](),this[F(0x1f2)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas'][F(0x219)]['on'](()=>{const G=F;this[G(0x1fe)]();}),this['_contentChangedHandler']=this[F(0x1f2)][F(0x22b)]['on'](()=>{const H=F;this[H(0x1fe)]();}),this[F(0x1fe)]()):(this['_content'][F(0x22c)](),this[F(0x201)]=[],this[F(0x237)][F(0x230)]['display']=F(0x235));}}function a(){const I=['_content','push','onContentChanged','replaceChildren','240579wCXKhQ','textContent','addEventListener','style','pointerup','1419bogJWt','preventDefault','define','flex','_onPointerDown','_empty','dispose','pointermove','_depthSpacing','clientX','0\x200\x20','_onPointerUp','transformStyle','adoptedStyleSheets','_onPointerMove','rotateY(','get','_translateY','375IKIlDP','transform','144612EATxAO','max','map','node','cloneNode','rootDesignItem','parentElement','instanceServiceContainer','_onWheel','shadowRoot','pointerdown','childNodes','_contentChangedHandler','_rotateX','deg)','width','depth','scene','removeEventListener','_instanceServiceContainer','pointercancel','px)\x20','_boundPointerUp','2962253cusofo','_applySceneTransform','20HuneOS','rotateY','height','59196ARsUzD','_scale','bind','_scheduleRender','_updateLayerDepths','findIndex','_layerDepthEntries','designerPixelSize','designerCanvas','_reRenderFlag','from','min','element','wheel','add','678758vSczQn','target','120VSfgTu','nodeType','_depthSlider','_prepareCloneTree','8hqGgBN','contextmenu','_maxY','_prepareCloneElement','willChange','_dragStart','_translateX','_maxX','_rotateY','onZoomFactorChanged','rotateX(','15116fKzFbY','translate(-50%,\x20-50%)\x20','_boundPointerMove','classList','button','preserve-3d','pointerId','_scene','px,\x20','node-projects-web-component-designer-layer-depth-view','setPointerCapture','1059654cBTMTb','_viewport','_resizeObserver'];a=function(){return I;};return a();}customElements[o(0x234)](o(0x224),LayerDepthView);