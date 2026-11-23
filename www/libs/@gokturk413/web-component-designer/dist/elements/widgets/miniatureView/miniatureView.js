const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xd2))/0x1*(parseInt(n(0xdc))/0x2)+parseInt(n(0xb7))/0x3+-parseInt(n(0xde))/0x4+parseInt(n(0xc5))/0x5+parseInt(n(0xc3))/0x6*(parseInt(n(0xac))/0x7)+parseInt(n(0xce))/0x8*(parseInt(n(0xd5))/0x9)+-parseInt(n(0xc6))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd435e));function a(){const A=['left','_isDragging','_onMouseUp','_reSize','bind','7aYfdih','_getDomElement','_innerShadow','_outerDiv','_reDrawRect','_maxX','addEventListener','_moveCanvasToMousePosition','_minatureScaleY','_boundMouseMove','top','4748187lmYtCZ','mousedown','_onMouseDown','adoptedStyleSheets','_boundMouseUp','clientX','zoomFactor','getBoundingClientRect','_above','element','designerCanvas','scale','9583116owTRHP','onZoomFactorChanged','3544535SxyxsS','30997040dWtnvx','dispose','canvasOffset','onContentChanged','_innerDiv','define','_reRender','preventDefault','416feyyFh','height','_restoreCachedInititalValues','_viewRect','27607bMobNx','template','_minatureScaleX','47331itzubp','_reRenderFlag','width','ready','_zoomFactorChangedHandler','_contentChangedHandler','removeEventListener','2yxvCJC','_maxY','663060qwEQGU','_instanceServiceContainer','clientY','miniatureViewService','shadowRoot','mouseup','style'];a=function(){return A;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xaa;const e=a();let f=e[c];return f;}export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0xd3)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];[o(0xaf)];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];[o(0xb1)]=0x0;['_maxY']=0x0;['_resizeObserver'];['_innerShadow'];['_zoomFactorChangedHandler'];['_viewRect'];['_minatureScaleX']=0x1;[o(0xb4)]=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0xb5)];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0xd0)](),this['_outerDiv']=this[p(0xad)]('outerDiv'),this['_innerDiv']=this[p(0xad)]('innerDiv'),this['_viewRect']=this[p(0xad)]('viewRect'),this[p(0xbf)]=this[p(0xad)]('above'),this[p(0xae)]=this['_innerDiv']['attachShadow']({'mode':'open'}),this[p(0xb5)]=this['_onMouseMove'][p(0xab)](this),this[p(0xbb)]=this[p(0xe7)][p(0xab)](this),this[p(0xbf)][p(0xb2)](p(0xb8),c=>this[p(0xb9)](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0xd8)](){this['_resizeObserver']['observe'](this);}['_reSize'](){const q=o,c=this[q(0xaf)][q(0xbe)]();this[q(0xd4)]=c[q(0xd7)]/this[q(0xb1)],this['_minatureScaleY']=c[q(0xcf)]/this[q(0xdd)],this[q(0xca)][q(0xe4)][q(0xc2)]=this['_minatureScaleX']+'\x20'+this['_minatureScaleY'];}async['_reRender'](){const r=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.['designerCanvas'];this['_innerShadow']['adoptedStyleSheets']=[...c['rootDesignItem'][r(0xc0)][r(0xe2)][r(0xba)]];const d=c['designerPixelSize'];this[r(0xb1)]=d[r(0xd7)],this[r(0xdd)]=d[r(0xcf)];const e=await this['_instanceServiceContainer'][r(0xc1)]['serviceContainer'][r(0xe1)]['provideMiniatureView'](c);this[r(0xae)]['replaceChildren'](e),this[r(0xaa)](),this['_reDrawRect'](),this[r(0xd6)]=![];}}['_reDrawRect'](){const s=o,c=this[s(0xdf)]?.[s(0xc1)],d=c[s(0xc8)],e=c['zoomFactor'];this['_viewRect'][s(0xe4)]['left']=-d['x']/this[s(0xb1)]*0x64+'%',this['_viewRect'][s(0xe4)]['top']=-d['y']/this[s(0xdd)]*0x64+'%',this[s(0xd1)]['style']['width']=c['clientWidth']/e/this['_maxX']*0x64+'%',this[s(0xd1)]['style'][s(0xcf)]=c['clientHeight']/e/this[s(0xdd)]*0x64+'%';}[o(0xb9)](c){const t=o;if(!this[t(0xdf)])return;this[t(0xe6)]=!![],this['_moveCanvasToMousePosition'](c),window[t(0xb2)]('mousemove',this[t(0xb5)]),window['addEventListener'](t(0xe3),this['_boundMouseUp']),c['preventDefault']();}['_onMouseMove'](c){const u=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[u(0xcd)]();}['_onMouseUp'](c){const v=o;this[v(0xe6)]=![],window[v(0xdb)]('mousemove',this['_boundMouseMove']),window[v(0xdb)]('mouseup',this['_boundMouseUp']);}[o(0xb3)](c){const w=o,d=this['_instanceServiceContainer'][w(0xc1)],f=d[w(0xbd)],g=this[w(0xbf)]['getBoundingClientRect'](),h=c[w(0xbc)]-g[w(0xe5)],i=c[w(0xe0)]-g[w(0xb6)],j=h/g[w(0xd7)]*this[w(0xb1)],k=i/g['height']*this['_maxY'],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d[w(0xc8)]={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const x=o;this['_contentChangedHandler']?.[x(0xc7)](),this['_zoomFactorChangedHandler']?.['dispose'](),this[x(0xdf)]=c,this[x(0xdf)]?(this[x(0xd9)]=this['_instanceServiceContainer'][x(0xc1)][x(0xc4)]['on'](()=>{const y=x;this[y(0xb0)]();}),this[x(0xda)]=this[x(0xdf)][x(0xc9)]['on'](d=>{const z=x;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[z(0xcc)](),0x32));}),this[x(0xd6)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow']['innerHTML']='';}}customElements[o(0xcb)]('node-projects-web-component-designer-miniature-view',MiniatureView);