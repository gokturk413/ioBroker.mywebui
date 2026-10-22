const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe7))/0x1+-parseInt(n(0xf6))/0x2*(parseInt(n(0xf9))/0x3)+-parseInt(n(0xd5))/0x4+parseInt(n(0xf0))/0x5+parseInt(n(0xe4))/0x6+-parseInt(n(0xf3))/0x7*(-parseInt(n(0xe1))/0x8)+parseInt(n(0xcd))/0x9*(parseInt(n(0xce))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd4e9c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xbc;const e=a();let f=e[c];return f;}function a(){const C=['preventDefault','ready','designerPixelSize','onContentChanged','top','_above','6785152voaqEq','template','miniatureViewService','_reRenderFlag','_instanceServiceContainer','_getDomElement','serviceContainer','_boundMouseMove','provideMiniatureView','_onMouseDown','_contentChangedHandler','open','16NNbOxX','_innerShadow','clientWidth','8227392SBTHMX','_maxY','style','226500xPPNvI','_outerDiv','viewRect','width','adoptedStyleSheets','_reSize','mouseup','innerHTML','height','499230spvibs','outerDiv','designerCanvas','2667378RhhblE','_isDragging','removeEventListener','268uhpxaC','define','scale','36447wAUVRv','_viewRect','clientY','zoomFactor','dispose','_moveCanvasToMousePosition','_minatureScaleY','_reRender','_boundMouseUp','_minatureScaleX','left','_reDrawRect','_maxX','getBoundingClientRect','onZoomFactorChanged','clientHeight','_resizeObserver','instanceServiceContainer','11007iRHuTL','14200bElyLj'];a=function(){return C;};return a();}export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0xe6)]=css`
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
        }`;static [o(0xd6)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];[o(0xe8)];['_above'];['_instanceServiceContainer'];[o(0xdf)];['_maxX']=0x0;['_maxY']=0x0;['_resizeObserver'];['_innerShadow'];['_zoomFactorChangedHandler'];['_viewRect'];[o(0xc4)]=0x1;['_minatureScaleY']=0x1;[o(0xd8)]=![];['_isDragging']=![];['_boundMouseMove'];[o(0xc3)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xe8)]=this[p(0xda)](p(0xf1)),this['_innerDiv']=this['_getDomElement']('innerDiv'),this[p(0xbc)]=this['_getDomElement'](p(0xe9)),this[p(0xd4)]=this['_getDomElement']('above'),this['_innerShadow']=this['_innerDiv']['attachShadow']({'mode':p(0xe0)}),this['_boundMouseMove']=this['_onMouseMove']['bind'](this),this[p(0xc3)]=this['_onMouseUp']['bind'](this),this['_above']['addEventListener']('mousedown',c=>this['_onMouseDown'](c)),this[p(0xcb)]=new ResizeObserver(()=>{const q=p;this[q(0xec)]();});}[o(0xd0)](){const r=o;this[r(0xcb)]['observe'](this);}[o(0xec)](){const s=o,c=this['_outerDiv'][s(0xc8)]();this['_minatureScaleX']=c['width']/this['_maxX'],this['_minatureScaleY']=c[s(0xef)]/this['_maxY'],this['_innerDiv'][s(0xe6)][s(0xf8)]=this[s(0xc4)]+'\x20'+this[s(0xc1)];}async[o(0xc2)](){const t=o;if(this[t(0xd9)]){const c=this[t(0xd9)]?.[t(0xf2)];this[t(0xe2)][t(0xeb)]=[...c['rootDesignItem']['element']['shadowRoot']['adoptedStyleSheets']];const d=c[t(0xd1)];this['_maxX']=d[t(0xea)],this['_maxY']=d['height'];const e=await this[t(0xd9)][t(0xf2)][t(0xdb)][t(0xd7)][t(0xdd)](c);this[t(0xe2)]['replaceChildren'](e),this['_reSize'](),this[t(0xc6)](),this['_reRenderFlag']=![];}}[o(0xc6)](){const u=o,c=this[u(0xd9)]?.[u(0xf2)],d=c['canvasOffset'],e=c[u(0xbe)];this[u(0xbc)][u(0xe6)]['left']=-d['x']/this['_maxX']*0x64+'%',this[u(0xbc)][u(0xe6)][u(0xd3)]=-d['y']/this['_maxY']*0x64+'%',this['_viewRect']['style']['width']=c[u(0xe3)]/e/this[u(0xc7)]*0x64+'%',this['_viewRect'][u(0xe6)]['height']=c[u(0xca)]/e/this[u(0xe5)]*0x64+'%';}[o(0xde)](c){const v=o;if(!this[v(0xd9)])return;this[v(0xf4)]=!![],this['_moveCanvasToMousePosition'](c),window['addEventListener']('mousemove',this[v(0xdc)]),window['addEventListener'](v(0xed),this['_boundMouseUp']),c[v(0xcf)]();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[w(0xcf)]();}['_onMouseUp'](c){const x=o;this['_isDragging']=![],window[x(0xf5)]('mousemove',this[x(0xdc)]),window['removeEventListener'](x(0xed),this[x(0xc3)]);}[o(0xc0)](c){const y=o,d=this['_instanceServiceContainer'][y(0xf2)],f=d[y(0xbe)],g=this[y(0xd4)][y(0xc8)](),h=c['clientX']-g[y(0xc5)],i=c[y(0xbd)]-g[y(0xd3)],j=h/g['width']*this[y(0xc7)],k=i/g['height']*this[y(0xe5)],l=d['clientWidth']/f/0x2,m=d[y(0xca)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0xcc)](c){const z=o;this[z(0xdf)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[z(0xbf)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[z(0xd9)]['designerCanvas'][z(0xc9)]['on'](()=>{const A=z;this[A(0xc6)]();}),this[z(0xdf)]=this[z(0xd9)][z(0xd2)]['on'](d=>{const B=z;this[B(0xd8)]===![]&&(this[B(0xd8)]=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[z(0xe2)][z(0xee)]='';}}customElements[o(0xf7)]('node-projects-web-component-designer-miniature-view',MiniatureView);