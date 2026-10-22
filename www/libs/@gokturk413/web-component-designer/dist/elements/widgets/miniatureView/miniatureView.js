const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x89))/0x1*(-parseInt(n(0x8b))/0x2)+-parseInt(n(0xa5))/0x3+parseInt(n(0x86))/0x4+-parseInt(n(0xa4))/0x5+parseInt(n(0x9e))/0x6+-parseInt(n(0xa8))/0x7*(-parseInt(n(0x87))/0x8)+-parseInt(n(0x98))/0x9*(parseInt(n(0xb1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8b495));function b(c,d){c=c-0x7b;const e=a();let f=e[c];return f;}function a(){const C=['left','_reSize','_reRender','scale','mousedown','_contentChangedHandler','_isDragging','2143372vatbFF','48nMZTMv','onZoomFactorChanged','274460AphUra','_boundMouseUp','2eGfhyB','_reRenderFlag','_onMouseUp','height','mousemove','above','_restoreCachedInititalValues','clientHeight','serviceContainer','_resizeObserver','top','innerHTML','width','9QLkBRK','_above','_innerShadow','removeEventListener','mouseup','_reDrawRect','6803508KrcNAV','miniatureViewService','_getDomElement','_outerDiv','clientY','viewRect','1023470uxJFMD','826248EqBTbN','_instanceServiceContainer','_innerDiv','164773OhUIkC','_maxX','_boundMouseMove','_zoomFactorChangedHandler','outerDiv','ready','_viewRect','adoptedStyleSheets','_maxY','10348280BqDJYW','template','attachShadow','style','_minatureScaleY','addEventListener','replaceChildren','preventDefault','bind','designerCanvas'];a=function(){return C;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0xb2)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];[o(0xa1)];[o(0x99)];[o(0xa6)];['_contentChangedHandler'];['_maxX']=0x0;[o(0xb0)]=0x0;[o(0x94)];[o(0x9a)];[o(0xab)];[o(0xae)];['_minatureScaleX']=0x1;['_minatureScaleY']=0x1;[o(0x8c)]=![];[o(0x85)]=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x91)](),this[p(0xa1)]=this[p(0xa0)](p(0xac)),this['_innerDiv']=this['_getDomElement']('innerDiv'),this['_viewRect']=this['_getDomElement'](p(0xa3)),this[p(0x99)]=this['_getDomElement'](p(0x90)),this['_innerShadow']=this[p(0xa7)][p(0xb3)]({'mode':'open'}),this[p(0xaa)]=this['_onMouseMove'][p(0x7d)](this),this['_boundMouseUp']=this[p(0x8d)][p(0x7d)](this),this[p(0x99)]['addEventListener'](p(0x83),c=>this['_onMouseDown'](c)),this[p(0x94)]=new ResizeObserver(()=>{const q=p;this[q(0x80)]();});}[o(0xad)](){const r=o;this[r(0x94)]['observe'](this);}[o(0x80)](){const s=o,c=this[s(0xa1)]['getBoundingClientRect']();this['_minatureScaleX']=c['width']/this[s(0xa9)],this[s(0xb5)]=c[s(0x8e)]/this['_maxY'],this[s(0xa7)][s(0xb4)][s(0x82)]=this['_minatureScaleX']+'\x20'+this[s(0xb5)];}async['_reRender'](){const t=o;if(this[t(0xa6)]){const c=this['_instanceServiceContainer']?.['designerCanvas'];this[t(0x9a)][t(0xaf)]=[...c['rootDesignItem']['element']['shadowRoot']['adoptedStyleSheets']];const d=c['designerPixelSize'];this['_maxX']=d['width'],this[t(0xb0)]=d[t(0x8e)];const e=await this['_instanceServiceContainer']['designerCanvas'][t(0x93)][t(0x9f)]['provideMiniatureView'](c);this['_innerShadow'][t(0x7b)](e),this['_reSize'](),this['_reDrawRect'](),this[t(0x8c)]=![];}}[o(0x9d)](){const u=o,c=this['_instanceServiceContainer']?.[u(0x7e)],d=c['canvasOffset'],e=c['zoomFactor'];this['_viewRect']['style']['left']=-d['x']/this['_maxX']*0x64+'%',this[u(0xae)][u(0xb4)]['top']=-d['y']/this['_maxY']*0x64+'%',this[u(0xae)]['style'][u(0x97)]=c['clientWidth']/e/this['_maxX']*0x64+'%',this['_viewRect'][u(0xb4)][u(0x8e)]=c[u(0x92)]/e/this[u(0xb0)]*0x64+'%';}['_onMouseDown'](c){const v=o;if(!this[v(0xa6)])return;this['_isDragging']=!![],this['_moveCanvasToMousePosition'](c),window['addEventListener']('mousemove',this[v(0xaa)]),window[v(0xb6)](v(0x9c),this[v(0x8a)]),c[v(0x7c)]();}['_onMouseMove'](c){const w=o;if(!this[w(0x85)])return;this['_moveCanvasToMousePosition'](c),c[w(0x7c)]();}[o(0x8d)](c){const x=o;this[x(0x85)]=![],window[x(0x9b)](x(0x8f),this['_boundMouseMove']),window['removeEventListener'](x(0x9c),this['_boundMouseUp']);}['_moveCanvasToMousePosition'](c){const y=o,d=this[y(0xa6)]['designerCanvas'],f=d['zoomFactor'],g=this[y(0x99)]['getBoundingClientRect'](),h=c['clientX']-g[y(0x7f)],i=c[y(0xa2)]-g[y(0x95)],j=h/g['width']*this['_maxX'],k=i/g[y(0x8e)]*this[y(0xb0)],l=d['clientWidth']/f/0x2,m=d[y(0x92)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const z=o;this[z(0x84)]?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this[z(0xa6)]=c,this['_instanceServiceContainer']?(this[z(0xab)]=this['_instanceServiceContainer'][z(0x7e)][z(0x88)]['on'](()=>{const A=z;this[A(0x9d)]();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const B=z;this[B(0x8c)]===![]&&(this[B(0x8c)]=!![],setTimeout(()=>this[B(0x81)](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow'][z(0x96)]='';}}customElements['define']('node-projects-web-component-designer-miniature-view',MiniatureView);