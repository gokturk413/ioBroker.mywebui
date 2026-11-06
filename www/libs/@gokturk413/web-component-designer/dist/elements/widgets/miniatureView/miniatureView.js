function b(c,d){c=c-0x195;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1ba))/0x1+-parseInt(n(0x1ae))/0x2+parseInt(n(0x1ab))/0x3*(-parseInt(n(0x1c0))/0x4)+-parseInt(n(0x1a5))/0x5*(-parseInt(n(0x1cf))/0x6)+parseInt(n(0x1c9))/0x7+-parseInt(n(0x1a2))/0x8+parseInt(n(0x1cd))/0x9*(parseInt(n(0x1ac))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd65aa));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static ['template']=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x1be)];[o(0x1c6)];['_above'];[o(0x1bd)];['_contentChangedHandler'];[o(0x1ce)]=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x19e)];[o(0x1a1)];['_viewRect'];[o(0x1aa)]=0x1;['_minatureScaleY']=0x1;[o(0x1bc)]=![];[o(0x1b2)]=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x1b8)](),this[p(0x1c6)]=this[p(0x196)](p(0x1b0)),this[p(0x1be)]=this[p(0x196)]('innerDiv'),this[p(0x1bf)]=this['_getDomElement'](p(0x1b5)),this['_above']=this['_getDomElement'](p(0x1ca)),this['_innerShadow']=this[p(0x1be)]['attachShadow']({'mode':p(0x1cc)}),this[p(0x1c1)]=this[p(0x1af)]['bind'](this),this['_boundMouseUp']=this[p(0x1a9)]['bind'](this),this[p(0x1b9)][p(0x1cb)](p(0x1a7),c=>this[p(0x19b)](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}['ready'](){this['_resizeObserver']['observe'](this);}['_reSize'](){const q=o,c=this[q(0x1c6)]['getBoundingClientRect']();this[q(0x1aa)]=c['width']/this[q(0x1ce)],this[q(0x1c4)]=c['height']/this[q(0x19a)],this[q(0x1be)]['style']['scale']=this[q(0x1aa)]+'\x20'+this['_minatureScaleY'];}async['_reRender'](){const r=o;if(this['_instanceServiceContainer']){const c=this[r(0x1bd)]?.['designerCanvas'];this[r(0x19e)][r(0x1bb)]=[...c[r(0x1ad)]['element']['shadowRoot'][r(0x1bb)]];const d=c[r(0x1a3)];this['_maxX']=d['width'],this[r(0x19a)]=d[r(0x19c)];const e=await this[r(0x1bd)]['designerCanvas']['serviceContainer']['miniatureViewService']['provideMiniatureView'](c);this['_innerShadow'][r(0x195)](e),this['_reSize'](),this['_reDrawRect'](),this['_reRenderFlag']=![];}}['_reDrawRect'](){const s=o,c=this['_instanceServiceContainer']?.[s(0x1c3)],d=c['canvasOffset'],e=c['zoomFactor'];this[s(0x1bf)]['style']['left']=-d['x']/this['_maxX']*0x64+'%',this['_viewRect']['style'][s(0x198)]=-d['y']/this['_maxY']*0x64+'%',this[s(0x1bf)]['style']['width']=c['clientWidth']/e/this['_maxX']*0x64+'%',this[s(0x1bf)][s(0x19d)][s(0x19c)]=c[s(0x1a4)]/e/this[s(0x19a)]*0x64+'%';}['_onMouseDown'](c){const t=o;if(!this[t(0x1bd)])return;this['_isDragging']=!![],this[t(0x1b4)](c),window[t(0x1cb)](t(0x1a6),this[t(0x1c1)]),window['addEventListener']('mouseup',this[t(0x1c7)]),c['preventDefault']();}['_onMouseMove'](c){const u=o;if(!this[u(0x1b2)])return;this[u(0x1b4)](c),c['preventDefault']();}['_onMouseUp'](c){const v=o;this[v(0x1b2)]=![],window[v(0x1a8)](v(0x1a6),this['_boundMouseMove']),window[v(0x1a8)](v(0x199),this[v(0x1c7)]);}['_moveCanvasToMousePosition'](c){const w=o,d=this[w(0x1bd)][w(0x1c3)],f=d[w(0x1b3)],g=this['_above'][w(0x19f)](),h=c['clientX']-g['left'],i=c[w(0x1c8)]-g['top'],j=h/g['width']*this[w(0x1ce)],k=i/g[w(0x19c)]*this[w(0x19a)],l=d[w(0x1a0)]/f/0x2,m=d[w(0x1a4)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x1c5)](c){const x=o;this[x(0x1b1)]?.[x(0x1c2)](),this['_zoomFactorChangedHandler']?.[x(0x1c2)](),this['_instanceServiceContainer']=c,this[x(0x1bd)]?(this['_zoomFactorChangedHandler']=this[x(0x1bd)][x(0x1c3)][x(0x197)]['on'](()=>{this['_reDrawRect']();}),this['_contentChangedHandler']=this['_instanceServiceContainer'][x(0x1b6)]['on'](d=>{this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[x(0x19e)]['innerHTML']='';}}customElements[o(0x1b7)]('node-projects-web-component-designer-miniature-view',MiniatureView);function a(){const y=['_innerDiv','_viewRect','576372SlMPRs','_boundMouseMove','dispose','designerCanvas','_minatureScaleY','instanceServiceContainer','_outerDiv','_boundMouseUp','clientY','1867446XKZaWu','above','addEventListener','open','9cMHclE','_maxX','242142KmDxMf','replaceChildren','_getDomElement','onZoomFactorChanged','top','mouseup','_maxY','_onMouseDown','height','style','_innerShadow','getBoundingClientRect','clientWidth','_zoomFactorChangedHandler','10315920fFJhXX','designerPixelSize','clientHeight','130Uwwobr','mousemove','mousedown','removeEventListener','_onMouseUp','_minatureScaleX','24nBfJxh','50981390zTViIx','rootDesignItem','2839660PiLllJ','_onMouseMove','outerDiv','_contentChangedHandler','_isDragging','zoomFactor','_moveCanvasToMousePosition','viewRect','onContentChanged','define','_restoreCachedInititalValues','_above','1674141INZmOh','adoptedStyleSheets','_reRenderFlag','_instanceServiceContainer'];a=function(){return y;};return a();}