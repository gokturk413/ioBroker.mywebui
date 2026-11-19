function b(c,d){c=c-0x71;const e=a();let f=e[c];return f;}const o=b;function a(){const C=['instanceServiceContainer','miniatureViewService','_contentChangedHandler','clientY','_innerDiv','clientHeight','_onMouseDown','_getDomElement','_isDragging','_innerShadow','define','getBoundingClientRect','_viewRect','_minatureScaleY','mouseup','660840afuyDu','onContentChanged','open','_reSize','mousemove','width','_minatureScaleX','_moveCanvasToMousePosition','_instanceServiceContainer','_boundMouseUp','onZoomFactorChanged','template','dispose','1100708LQCBuP','_reDrawRect','_above','_resizeObserver','observe','29178nRxZdt','425325uQuYIR','node-projects-web-component-designer-miniature-view','_reRenderFlag','innerHTML','_zoomFactorChangedHandler','_reRender','9kdGDcn','height','3PyKoBJ','2406290KiRxoH','preventDefault','_outerDiv','designerPixelSize','adoptedStyleSheets','innerDiv','_maxY','attachShadow','left','_maxX','style','rootDesignItem','455DrxUXF','_onMouseMove','2403716iATrVT','38982WtZhKw','outerDiv','_onMouseUp','_boundMouseMove','designerCanvas','clientWidth','above'];a=function(){return C;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x99))/0x1*(-parseInt(n(0xa9))/0x2)+parseInt(n(0x91))/0x3+parseInt(n(0x8b))/0x4+parseInt(n(0xa6))/0x5*(parseInt(n(0x90))/0x6)+-parseInt(n(0xa8))/0x7+parseInt(n(0x7e))/0x8+parseInt(n(0x97))/0x9*(-parseInt(n(0x9a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x49250));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x89)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];['_outerDiv'];['_above'];[o(0x86)];['_contentChangedHandler'];[o(0xa3)]=0x0;['_maxY']=0x0;[o(0x8e)];['_innerShadow'];[o(0x95)];['_viewRect'];[o(0x84)]=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0xac)];[o(0x87)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x9c)]=this['_getDomElement'](p(0xaa)),this[p(0x73)]=this[p(0x76)](p(0x9f)),this[p(0x7b)]=this[p(0x76)]('viewRect'),this['_above']=this[p(0x76)](p(0xaf)),this['_innerShadow']=this[p(0x73)][p(0xa1)]({'mode':p(0x80)}),this[p(0xac)]=this[p(0xa7)]['bind'](this),this[p(0x87)]=this[p(0xab)]['bind'](this),this['_above']['addEventListener']('mousedown',c=>this[p(0x75)](c)),this['_resizeObserver']=new ResizeObserver(()=>{const q=p;this[q(0x81)]();});}['ready'](){const r=o;this[r(0x8e)][r(0x8f)](this);}[o(0x81)](){const s=o,c=this[s(0x9c)]['getBoundingClientRect']();this['_minatureScaleX']=c['width']/this[s(0xa3)],this[s(0x7c)]=c[s(0x98)]/this[s(0xa0)],this[s(0x73)]['style']['scale']=this[s(0x84)]+'\x20'+this['_minatureScaleY'];}async[o(0x96)](){const t=o;if(this[t(0x86)]){const c=this['_instanceServiceContainer']?.['designerCanvas'];this[t(0x78)][t(0x9e)]=[...c[t(0xa5)]['element']['shadowRoot'][t(0x9e)]];const d=c[t(0x9d)];this[t(0xa3)]=d['width'],this[t(0xa0)]=d['height'];const e=await this[t(0x86)][t(0xad)]['serviceContainer'][t(0xb1)]['provideMiniatureView'](c);this[t(0x78)]['replaceChildren'](e),this['_reSize'](),this['_reDrawRect'](),this[t(0x93)]=![];}}['_reDrawRect'](){const u=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c['canvasOffset'],e=c['zoomFactor'];this['_viewRect'][u(0xa4)][u(0xa2)]=-d['x']/this[u(0xa3)]*0x64+'%',this['_viewRect'][u(0xa4)]['top']=-d['y']/this[u(0xa0)]*0x64+'%',this[u(0x7b)][u(0xa4)]['width']=c['clientWidth']/e/this['_maxX']*0x64+'%',this['_viewRect'][u(0xa4)][u(0x98)]=c['clientHeight']/e/this['_maxY']*0x64+'%';}[o(0x75)](c){const v=o;if(!this['_instanceServiceContainer'])return;this[v(0x77)]=!![],this['_moveCanvasToMousePosition'](c),window['addEventListener']('mousemove',this['_boundMouseMove']),window['addEventListener'](v(0x7d),this['_boundMouseUp']),c[v(0x9b)]();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this[w(0x85)](c),c['preventDefault']();}['_onMouseUp'](c){const x=o;this[x(0x77)]=![],window['removeEventListener'](x(0x82),this['_boundMouseMove']),window['removeEventListener']('mouseup',this[x(0x87)]);}[o(0x85)](c){const y=o,d=this[y(0x86)]['designerCanvas'],f=d['zoomFactor'],g=this[y(0x8d)][y(0x7a)](),h=c['clientX']-g['left'],i=c[y(0x72)]-g['top'],j=h/g[y(0x83)]*this['_maxX'],k=i/g['height']*this[y(0xa0)],l=d[y(0xae)]/f/0x2,m=d[y(0x74)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0xb0)](c){const z=o;this['_contentChangedHandler']?.[z(0x8a)](),this[z(0x95)]?.[z(0x8a)](),this[z(0x86)]=c,this[z(0x86)]?(this[z(0x95)]=this['_instanceServiceContainer'][z(0xad)][z(0x88)]['on'](()=>{const A=z;this[A(0x8c)]();}),this[z(0x71)]=this[z(0x86)][z(0x7f)]['on'](d=>{const B=z;this['_reRenderFlag']===![]&&(this[B(0x93)]=!![],setTimeout(()=>this[B(0x96)](),0x32));}),this[z(0x93)]===![]&&(this[z(0x93)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this[z(0x78)][z(0x94)]='';}}customElements[o(0x79)](o(0x92),MiniatureView);