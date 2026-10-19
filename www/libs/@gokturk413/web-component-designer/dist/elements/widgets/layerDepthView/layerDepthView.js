const o=b;function a(){const H=['1936800PLgLNR','_scheduleRender','classList','setPointerCapture','appendChild','min','rootDesignItem','clientY','_depthSpacing','bind','replaceChildren','scene','pointerId','max','dragging','_zoomFactorChangedHandler','1728384jdjbrE','_copyAdoptedStyleSheets','get','preserve-3d','_translateY','style','_prepareCloneTree','pointermove','remove','target','1396vHNNEk','_contentChangedHandler','rotateX(','element','createDocumentFragment','_onWheel','button','4639248OZMbcZ','_depthSlider','_getDomElement','define','pointerup','4oVhoQJ','_layerDepthEntries','translate','translate(','designerCanvas','ownerDocument','_maxY','_scale','designerPixelSize','none','releasePointerCapture','wheel','_scene','_onPointerUp','_applySceneTransform','push','_translateX','pan','_viewport','width','preventDefault','_instanceServiceContainer','_resizeObserver','_onPointerMove','clientX','addEventListener','_reRender','set','deg)','_boundPointerMove','4170396asrMGY','willChange','removeEventListener','rotateY','shiftKey','childNodes','_reRenderFlag','_maxX','_dragStart','14543541wQBfko','3865sjtqaB','contextmenu','empty','children','display','_createLayerTree','_depthValue','_empty','height','_onPointerDown','rotateY(','pointercancel','_prepareCloneElement','map','depth','_restoreCachedInititalValues','findIndex','getBoundingClientRect','count','_fitScene','372223lWMnZj','content','_updateLayerDepths','translate(-50%,\x20-50%)\x20','_rotateX','px)\x20','_content','observe'];a=function(){return H;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1ec))/0x1*(-parseInt(n(0x21a))/0x2)+parseInt(n(0x1f4))/0x3+-parseInt(n(0x20e))/0x4*(-parseInt(n(0x242))/0x5)+parseInt(n(0x238))/0x6+parseInt(n(0x204))/0x7+-parseInt(n(0x215))/0x8+-parseInt(n(0x241))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x631ba));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../item/NodeType.js';export class LayerDepthView extends BaseCustomWebComponentConstructorAppend{static [o(0x209)]=css`
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
        </div>`;[o(0x22c)];[o(0x226)];[o(0x1f2)];[o(0x249)];[o(0x216)];[o(0x248)];['_instanceServiceContainer'];['_contentChangedHandler'];[o(0x203)];[o(0x230)];[o(0x23e)]=![];[o(0x23f)]=0x0;['_maxY']=0x0;['_depthSpacing']=0x24;[o(0x1f0)]=0x0;['_rotateY']=0x0;['_translateX']=0x0;['_translateY']=0x0;[o(0x221)]=0x1;['_layerDepthEntries']=[];[o(0x240)];['_boundPointerMove'];['_boundPointerUp'];constructor(){const p=o;super(),this[p(0x251)](),this[p(0x22c)]=this['_getDomElement']('viewport'),this['_scene']=this['_getDomElement'](p(0x1ff)),this['_content']=this[p(0x217)](p(0x1ed)),this[p(0x249)]=this['_getDomElement'](p(0x244)),this[p(0x216)]=this[p(0x217)]('depthSlider'),this[p(0x248)]=this['_getDomElement']('depthValue'),this[p(0x237)]=this[p(0x231)]['bind'](this),this['_boundPointerUp']=this[p(0x227)][p(0x1fd)](this),this[p(0x216)][p(0x233)]('input',()=>{const q=p;this[q(0x1fc)]=Number(this['_depthSlider']['value']),this[q(0x248)]['textContent']=this['_depthSpacing']+'px',this['_updateLayerDepths']();}),this[p(0x22c)][p(0x233)]('pointerdown',c=>this[p(0x24b)](c)),this[p(0x22c)][p(0x233)](p(0x225),c=>this[p(0x213)](c),{'passive':![]}),this['_viewport']['addEventListener'](p(0x243),c=>c['preventDefault']()),this[p(0x230)]=new ResizeObserver(()=>this[p(0x255)]());}['ready'](){const r=o;this[r(0x230)][r(0x1f3)](this),this['_applySceneTransform']();}[o(0x1f5)](){const s=o;this['_reRenderFlag']===![]&&(this[s(0x23e)]=!![],setTimeout(()=>this[s(0x234)](),0x32));}async['_reRender'](){const t=o;if(!this['_instanceServiceContainer'])return;const c=this[t(0x22f)][t(0x21e)];this[t(0x205)](c['rootDesignItem']);const d=c[t(0x222)];this[t(0x23f)]=Math[t(0x201)](d['width'],0x1),this['_maxY']=Math['max'](d[t(0x24a)],0x1);const e=this[t(0x247)]();this[t(0x1f2)]['replaceChildren'](e['fragment']),this['_scene']['style'][t(0x22d)]=this[t(0x23f)]+'px',this[t(0x226)]['style'][t(0x24a)]=this['_maxY']+'px',this[t(0x1f2)][t(0x209)]['width']=this['_maxX']+'px',this['_content'][t(0x209)]['height']=this[t(0x220)]+'px',this['_empty']['style']['display']=e[t(0x254)]?t(0x223):'flex',this[t(0x1ee)](),this[t(0x255)](),this[t(0x23e)]=![];}[o(0x205)](c){const u=o,d=c?.['element'],e=c?.['usableContainer'],f=d?.['shadowRoot']??(e instanceof Document?e:d?.[u(0x21f)]);this['shadowRoot']['adoptedStyleSheets']=f?.['adoptedStyleSheets']?[...f['adoptedStyleSheets']]:[];}['_createLayerTree'](){const v=o,c=this[v(0x22f)][v(0x1fa)],d=document[v(0x212)]();let e=0x0;this[v(0x21b)]=[];for(const f of c[v(0x245)]()){if(f['nodeType']!==NodeType['Element'])continue;const g=f['element']['cloneNode'](!![]);d[v(0x1f8)](g),e=this[v(0x20a)](f,g,e);}return{'fragment':d,'count':e};}[o(0x20a)](c,d,e){const w=o;this[w(0x24e)](d,e),e++;const f=Array['from'](c[w(0x211)][w(0x23d)]),g=Array['from'](d[w(0x23d)]);for(const h of c['children']()){if(h['nodeType']!==NodeType['Element'])continue;const i=f[w(0x252)](k=>k===h['node']),j=g[i];j instanceof Element&&(e=this[w(0x20a)](h,j,e));}return e;}['_prepareCloneElement'](c,d){const x=o;(c instanceof HTMLElement||c instanceof SVGElement)&&(c['style']['transformStyle']=x(0x207),c[x(0x209)][x(0x239)]=x(0x21c),this['_layerDepthEntries'][x(0x229)]({'element':c,'depth':d}));}['_updateLayerDepths'](){const y=o;this['_depthValue']['textContent']=this['_depthSpacing']+'px';if(!this['_layerDepthEntries']['length'])return;const c=this[y(0x21b)][y(0x24f)](i=>i['depth']),d=Math[y(0x1f9)](...c),e=Math[y(0x201)](...c),f=Math[y(0x201)](e-d,0x1),g=i=>((i-d)/f-0.5)*this[y(0x1fc)]*0x2,h=new Map();for(const i of this[y(0x21b)]){h[y(0x235)](i[y(0x211)],i[y(0x250)]);}for(const j of this[y(0x21b)]){let k=j['element']['parentElement'],l;while(k){l=h[y(0x206)](k);if(l!==undefined)break;k=k['parentElement'];}const m=l===undefined?0x0:g(l);j['element'][y(0x209)][y(0x21c)]='0\x200\x20'+(g(j['depth'])-m)+'px';}}[o(0x255)](){const z=o,c=this['_viewport'][z(0x253)]();if(!c['width']||!c[z(0x24a)]||!this[z(0x23f)]||!this[z(0x220)])return;const d=Math['min'](c['width']/this['_maxX'],c[z(0x24a)]/this[z(0x220)])*0.72;this['_scale']=Math['min'](Math['max'](d,0.05),0x4),this[z(0x22a)]=0x0,this['_translateY']=0x0,this[z(0x228)]();}[o(0x228)](){const A=o;this[A(0x226)][A(0x209)]['transformStyle']='preserve-3d',this['_content'][A(0x209)]['transformStyle']='preserve-3d',this['_scene'][A(0x209)]['transform']=A(0x1ef)+A(0x21d)+this[A(0x22a)]+'px,\x20'+this['_translateY']+A(0x1f1)+'scale('+this[A(0x221)]+')\x20'+A(0x210)+this[A(0x1f0)]+'deg)\x20'+A(0x24c)+this['_rotateY']+A(0x236),this[A(0x1f2)]['style']['transform']='';}[o(0x24b)](c){const B=o;if(c[B(0x20d)]===this['_depthSlider']||c['button']!==0x0&&c['button']!==0x1&&c[B(0x214)]!==0x2)return;this['_dragStart']={'x':c[B(0x232)],'y':c['clientY'],'rotateX':this[B(0x1f0)],'rotateY':this['_rotateY'],'translateX':this['_translateX'],'translateY':this['_translateY'],'pan':c['button']===0x1||c['button']===0x2||c[B(0x23c)]},this['_viewport'][B(0x1f6)]['add'](B(0x202)),this['_viewport'][B(0x1f7)](c[B(0x200)]),this[B(0x22c)][B(0x233)]('pointermove',this['_boundPointerMove']),this[B(0x22c)]['addEventListener']('pointerup',this['_boundPointerUp']),this['_viewport'][B(0x233)](B(0x24d),this['_boundPointerUp']),c[B(0x22e)]();}[o(0x231)](c){const C=o;if(!this['_dragStart'])return;const d=c['clientX']-this['_dragStart']['x'],e=c[C(0x1fb)]-this[C(0x240)]['y'];this[C(0x240)][C(0x22b)]?(this['_translateX']=this[C(0x240)]['translateX']+d,this[C(0x208)]=this['_dragStart']['translateY']+e):(this['_rotateY']=this[C(0x240)][C(0x23b)]+d*0.35,this[C(0x1f0)]=Math['min'](0x55,Math[C(0x201)](-0x55,this[C(0x240)]['rotateX']-e*0.35))),this[C(0x228)](),c['preventDefault']();}[o(0x227)](c){const D=o;this[D(0x240)]=null,this['_viewport'][D(0x1f6)][D(0x20c)](D(0x202)),this['_viewport'][D(0x224)](c['pointerId']),this['_viewport']['removeEventListener'](D(0x20b),this[D(0x237)]),this['_viewport'][D(0x23a)](D(0x219),this['_boundPointerUp']),this['_viewport']['removeEventListener'](D(0x24d),this['_boundPointerUp']);}['_onWheel'](c){const E=o,d=c['deltaY']<0x0?1.08:0.92;this[E(0x221)]=Math[E(0x1f9)](0x6,Math[E(0x201)](0.03,this['_scale']*d)),this['_applySceneTransform'](),c['preventDefault']();}set['instanceServiceContainer'](c){const F=o;this[F(0x20f)]?.['dispose'](),this[F(0x203)]?.['dispose'](),this[F(0x22f)]=c,this['_instanceServiceContainer']?(this[F(0x203)]=this[F(0x22f)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{this['_scheduleRender']();}),this[F(0x20f)]=this[F(0x22f)]['onContentChanged']['on'](()=>{const G=F;this[G(0x1f5)]();}),this[F(0x1f5)]()):(this[F(0x1f2)][F(0x1fe)](),this['_layerDepthEntries']=[],this[F(0x249)][F(0x209)][F(0x246)]='flex');}}function b(c,d){c=c-0x1ec;const e=a();let f=e[c];return f;}customElements[o(0x218)]('node-projects-web-component-designer-layer-depth-view',LayerDepthView);