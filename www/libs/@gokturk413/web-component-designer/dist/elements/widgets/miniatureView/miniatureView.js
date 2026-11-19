function a(){const A=['_reRenderFlag','_boundMouseUp','mousedown','addEventListener','designerPixelSize','2108oJbyNC','_zoomFactorChangedHandler','7699622WrrMWg','_minatureScaleY','onZoomFactorChanged','onContentChanged','width','2823oOWGCo','_viewRect','zoomFactor','clientHeight','attachShadow','_reSize','_moveCanvasToMousePosition','_innerDiv','mousemove','_reDrawRect','open','_maxY','dispose','shadowRoot','2510230tRNeXr','33562AjvFoq','_above','_maxX','canvasOffset','designerCanvas','_innerShadow','_resizeObserver','define','_minatureScaleX','removeEventListener','height','_getDomElement','42961831roJWiV','_onMouseDown','7720QwHXRu','2007zwRgev','style','mouseup','provideMiniatureView','_outerDiv','_contentChangedHandler','12naJrXc','_isDragging','adoptedStyleSheets','miniatureViewService','_instanceServiceContainer','instanceServiceContainer','_boundMouseMove','115zyEEpF','201414mWCEZI','top','outerDiv','clientWidth','52yUiFYG','observe'];a=function(){return A;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1dc))/0x1*(parseInt(n(0x1fd))/0x2)+parseInt(n(0x1cd))/0x3*(-parseInt(n(0x204))/0x4)+-parseInt(n(0x1f8))/0x5*(parseInt(n(0x1f9))/0x6)+-parseInt(n(0x1c8))/0x7+-parseInt(n(0x1ea))/0x8*(parseInt(n(0x1eb))/0x9)+parseInt(n(0x1db))/0xa+parseInt(n(0x1e8))/0xb*(parseInt(n(0x1f1))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xab1e1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0x1d4)];[o(0x1ef)];['_above'];['_instanceServiceContainer'];[o(0x1f0)];[o(0x1de)]=0x0;[o(0x1d8)]=0x0;[o(0x1e2)];[o(0x1e1)];[o(0x205)];[o(0x1ce)];[o(0x1e4)]=0x1;[o(0x1c9)]=0x1;[o(0x1ff)]=![];[o(0x1f2)]=![];[o(0x1f7)];[o(0x200)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x1ef)]=this['_getDomElement'](p(0x1fb)),this['_innerDiv']=this[p(0x1e7)]('innerDiv'),this['_viewRect']=this[p(0x1e7)]('viewRect'),this[p(0x1dd)]=this['_getDomElement']('above'),this[p(0x1e1)]=this[p(0x1d4)][p(0x1d1)]({'mode':p(0x1d7)}),this['_boundMouseMove']=this['_onMouseMove']['bind'](this),this[p(0x200)]=this['_onMouseUp']['bind'](this),this['_above'][p(0x202)](p(0x201),c=>this[p(0x1e9)](c)),this[p(0x1e2)]=new ResizeObserver(()=>{const q=p;this[q(0x1d2)]();});}['ready'](){const r=o;this['_resizeObserver'][r(0x1fe)](this);}[o(0x1d2)](){const s=o,c=this[s(0x1ef)]['getBoundingClientRect']();this['_minatureScaleX']=c['width']/this[s(0x1de)],this['_minatureScaleY']=c['height']/this[s(0x1d8)],this['_innerDiv'][s(0x1ec)]['scale']=this['_minatureScaleX']+'\x20'+this['_minatureScaleY'];}async['_reRender'](){const t=o;if(this['_instanceServiceContainer']){const c=this[t(0x1f5)]?.['designerCanvas'];this[t(0x1e1)][t(0x1f3)]=[...c['rootDesignItem']['element'][t(0x1da)][t(0x1f3)]];const d=c[t(0x203)];this[t(0x1de)]=d[t(0x1cc)],this['_maxY']=d[t(0x1e6)];const e=await this['_instanceServiceContainer']['designerCanvas']['serviceContainer'][t(0x1f4)][t(0x1ee)](c);this['_innerShadow']['replaceChildren'](e),this[t(0x1d2)](),this[t(0x1d6)](),this[t(0x1ff)]=![];}}['_reDrawRect'](){const u=o,c=this[u(0x1f5)]?.[u(0x1e0)],d=c[u(0x1df)],e=c['zoomFactor'];this['_viewRect']['style']['left']=-d['x']/this['_maxX']*0x64+'%',this['_viewRect'][u(0x1ec)][u(0x1fa)]=-d['y']/this['_maxY']*0x64+'%',this['_viewRect']['style'][u(0x1cc)]=c[u(0x1fc)]/e/this[u(0x1de)]*0x64+'%',this['_viewRect']['style']['height']=c[u(0x1d0)]/e/this[u(0x1d8)]*0x64+'%';}[o(0x1e9)](c){const v=o;if(!this[v(0x1f5)])return;this['_isDragging']=!![],this[v(0x1d3)](c),window['addEventListener']('mousemove',this[v(0x1f7)]),window['addEventListener']('mouseup',this[v(0x200)]),c['preventDefault']();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this[w(0x1d3)](c),c['preventDefault']();}['_onMouseUp'](c){const x=o;this[x(0x1f2)]=![],window['removeEventListener'](x(0x1d5),this[x(0x1f7)]),window[x(0x1e5)](x(0x1ed),this[x(0x200)]);}[o(0x1d3)](c){const y=o,d=this[y(0x1f5)][y(0x1e0)],f=d[y(0x1cf)],g=this[y(0x1dd)]['getBoundingClientRect'](),h=c['clientX']-g['left'],i=c['clientY']-g['top'],j=h/g[y(0x1cc)]*this['_maxX'],k=i/g['height']*this['_maxY'],l=d['clientWidth']/f/0x2,m=d[y(0x1d0)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x1f6)](c){const z=o;this['_contentChangedHandler']?.[z(0x1d9)](),this['_zoomFactorChangedHandler']?.[z(0x1d9)](),this['_instanceServiceContainer']=c,this[z(0x1f5)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][z(0x1e0)][z(0x1ca)]['on'](()=>{this['_reDrawRect']();}),this[z(0x1f0)]=this['_instanceServiceContainer'][z(0x1cb)]['on'](d=>{this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}),this[z(0x1ff)]===![]&&(this[z(0x1ff)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this[z(0x1e1)]['innerHTML']='';}}function b(c,d){c=c-0x1c8;const e=a();let f=e[c];return f;}customElements[o(0x1e3)]('node-projects-web-component-designer-miniature-view',MiniatureView);