const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1b9))/0x1*(parseInt(n(0x1d5))/0x2)+parseInt(n(0x1b7))/0x3+-parseInt(n(0x1c3))/0x4+-parseInt(n(0x1d3))/0x5*(-parseInt(n(0x1d0))/0x6)+-parseInt(n(0x1ec))/0x7*(parseInt(n(0x1ce))/0x8)+-parseInt(n(0x1e0))/0x9+parseInt(n(0x1cd))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6cf41));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const A=['width','getBoundingClientRect','onContentChanged','clientHeight','1647396koGNTM','_reRenderFlag','376148IstEiK','dispose','_above','_moveCanvasToMousePosition','_instanceServiceContainer','above','_getDomElement','_zoomFactorChangedHandler','_boundMouseMove','adoptedStyleSheets','1338144pRdqRp','template','_onMouseMove','style','mousemove','mousedown','_minatureScaleY','_reRender','_maxX','addEventListener','11360030hxzKho','7736KPKiMq','onZoomFactorChanged','6YFOZVs','_outerDiv','height','1473705kcfUxh','_viewRect','2NlupcK','_isDragging','_boundMouseUp','_innerShadow','top','innerHTML','designerCanvas','node-projects-web-component-designer-miniature-view','_minatureScaleX','_innerDiv','innerDiv','1566558eEfTCG','_reDrawRect','_reSize','open','zoomFactor','miniatureViewService','_resizeObserver','viewRect','_maxY','clientWidth','left','_onMouseUp','4697JtpVdN','removeEventListener','canvasOffset','_contentChangedHandler'];a=function(){return A;};return a();}function b(c,d){c=c-0x1b1;const e=a();let f=e[c];return f;}export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
          overflow:hidden;
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
        }
        #outerDiv {
          width: 100%;
          height: 100%;
        }
        #innerDiv {
          transform-origin: top left;
          height: 100%;
          width: 100%;
          image-rendering: pixelated;
        }
        #above {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: auto;
          background: transparent;
          cursor: pointer;
        }
        #viewRect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid var(--wcd-miniature-view-border-color, black);
          pointer-events: none;
        }`;static [o(0x1c4)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];[o(0x1d1)];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];['_maxX']=0x0;[o(0x1e8)]=0x0;['_resizeObserver'];[o(0x1d8)];[o(0x1c0)];['_viewRect'];['_minatureScaleX']=0x1;['_minatureScaleY']=0x1;[o(0x1b8)]=![];[o(0x1d6)]=![];['_boundMouseMove'];[o(0x1d7)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x1d1)]=this['_getDomElement']('outerDiv'),this[p(0x1de)]=this['_getDomElement'](p(0x1df)),this['_viewRect']=this[p(0x1bf)](p(0x1e7)),this[p(0x1bb)]=this['_getDomElement'](p(0x1be)),this[p(0x1d8)]=this[p(0x1de)]['attachShadow']({'mode':p(0x1e3)}),this['_boundMouseMove']=this[p(0x1c5)]['bind'](this),this[p(0x1d7)]=this[p(0x1eb)]['bind'](this),this[p(0x1bb)][p(0x1cc)](p(0x1c8),c=>this['_onMouseDown'](c)),this[p(0x1e6)]=new ResizeObserver(()=>{const q=p;this[q(0x1e2)]();});}['ready'](){this['_resizeObserver']['observe'](this);}[o(0x1e2)](){const r=o,c=this[r(0x1d1)]['getBoundingClientRect']();this[r(0x1dd)]=c['width']/this[r(0x1cb)],this[r(0x1c9)]=c['height']/this[r(0x1e8)],this[r(0x1de)][r(0x1c6)]['scale']=this[r(0x1dd)]+'\x20'+this[r(0x1c9)];}async['_reRender'](){const s=o;if(this['_instanceServiceContainer']){const c=this[s(0x1bd)]?.['designerCanvas'];this['_innerShadow'][s(0x1c2)]=[...c['rootDesignItem']['element']['shadowRoot'][s(0x1c2)]];const d=c['designerPixelSize'];this['_maxX']=d[s(0x1b3)],this[s(0x1e8)]=d['height'];const e=await this['_instanceServiceContainer']['designerCanvas']['serviceContainer'][s(0x1e5)]['provideMiniatureView'](c);this[s(0x1d8)]['replaceChildren'](e),this['_reSize'](),this[s(0x1e1)](),this['_reRenderFlag']=![];}}['_reDrawRect'](){const t=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c[t(0x1b1)],e=c[t(0x1e4)];this['_viewRect']['style'][t(0x1ea)]=-d['x']/this['_maxX']*0x64+'%',this[t(0x1d4)][t(0x1c6)]['top']=-d['y']/this['_maxY']*0x64+'%',this[t(0x1d4)]['style'][t(0x1b3)]=c['clientWidth']/e/this['_maxX']*0x64+'%',this[t(0x1d4)]['style'][t(0x1d2)]=c['clientHeight']/e/this[t(0x1e8)]*0x64+'%';}['_onMouseDown'](c){const u=o;if(!this[u(0x1bd)])return;this['_isDragging']=!![],this['_moveCanvasToMousePosition'](c),window[u(0x1cc)](u(0x1c7),this[u(0x1c1)]),window['addEventListener']('mouseup',this['_boundMouseUp']),c['preventDefault']();}['_onMouseMove'](c){const v=o;if(!this[v(0x1d6)])return;this['_moveCanvasToMousePosition'](c),c['preventDefault']();}['_onMouseUp'](c){const w=o;this[w(0x1d6)]=![],window[w(0x1ed)](w(0x1c7),this['_boundMouseMove']),window['removeEventListener']('mouseup',this[w(0x1d7)]);}[o(0x1bc)](c){const x=o,d=this[x(0x1bd)]['designerCanvas'],f=d[x(0x1e4)],g=this[x(0x1bb)][x(0x1b4)](),h=c['clientX']-g[x(0x1ea)],i=c['clientY']-g[x(0x1d9)],j=h/g['width']*this[x(0x1cb)],k=i/g['height']*this[x(0x1e8)],l=d[x(0x1e9)]/f/0x2,m=d[x(0x1b6)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const y=o;this[y(0x1b2)]?.[y(0x1ba)](),this[y(0x1c0)]?.[y(0x1ba)](),this[y(0x1bd)]=c,this[y(0x1bd)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][y(0x1db)][y(0x1cf)]['on'](()=>{this['_reDrawRect']();}),this['_contentChangedHandler']=this['_instanceServiceContainer'][y(0x1b5)]['on'](d=>{const z=y;this[z(0x1b8)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this[y(0x1b8)]=!![],setTimeout(()=>this[y(0x1ca)](),0x32))):this[y(0x1d8)][y(0x1da)]='';}}customElements['define'](o(0x1dc),MiniatureView);