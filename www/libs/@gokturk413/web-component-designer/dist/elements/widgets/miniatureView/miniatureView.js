function b(c,d){c=c-0xe7;const e=a();let f=e[c];return f;}function a(){const B=['35WofGLE','5794092DVqDwv','_reSize','_innerShadow','removeEventListener','9392390wLEIbb','_onMouseMove','_innerDiv','dispose','276BTjjnp','style','designerPixelSize','width','_onMouseUp','_instanceServiceContainer','35690SfqYaD','_boundMouseUp','element','miniatureViewService','addEventListener','_boundMouseMove','_reRenderFlag','_reRender','_outerDiv','_getDomElement','_moveCanvasToMousePosition','_isDragging','_contentChangedHandler','designerCanvas','getBoundingClientRect','5288328amXsXC','onZoomFactorChanged','27754NAdBks','mousedown','open','observe','mouseup','_reDrawRect','bind','28YMzJZe','onContentChanged','_maxY','left','node-projects-web-component-designer-miniature-view','top','775218kfSAJA','clientWidth','_viewRect','_onMouseDown','scale','_minatureScaleX','695887TehImu','height','22YJzLlp','preventDefault','_maxX','_resizeObserver','canvasOffset'];a=function(){return B;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x10a))/0x1+-parseInt(n(0xf7))/0x2*(-parseInt(n(0x11a))/0x3)+parseInt(n(0xfe))/0x4*(parseInt(n(0x120))/0x5)+parseInt(n(0x104))/0x6*(parseInt(n(0x111))/0x7)+parseInt(n(0xf5))/0x8+-parseInt(n(0x112))/0x9+-parseInt(n(0x116))/0xa*(parseInt(n(0x10c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc519f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0x118)];[o(0xee)];['_above'];[o(0x11f)];[o(0xf2)];[o(0x10e)]=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x114)];['_zoomFactorChangedHandler'];['_viewRect'];[o(0x109)]=0x1;['_minatureScaleY']=0x1;[o(0xec)]=![];['_isDragging']=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xee)]=this['_getDomElement']('outerDiv'),this[p(0x118)]=this[p(0xef)]('innerDiv'),this[p(0x106)]=this[p(0xef)]('viewRect'),this['_above']=this['_getDomElement']('above'),this[p(0x114)]=this[p(0x118)]['attachShadow']({'mode':p(0xf9)}),this['_boundMouseMove']=this[p(0x117)][p(0xfd)](this),this[p(0xe7)]=this[p(0x11e)]['bind'](this),this['_above'][p(0xea)](p(0xf8),c=>this['_onMouseDown'](c)),this['_resizeObserver']=new ResizeObserver(()=>{const q=p;this[q(0x113)]();});}['ready'](){const r=o;this[r(0x10f)][r(0xfa)](this);}[o(0x113)](){const s=o,c=this[s(0xee)][s(0xf4)]();this['_minatureScaleX']=c['width']/this[s(0x10e)],this['_minatureScaleY']=c[s(0x10b)]/this['_maxY'],this['_innerDiv'][s(0x11b)][s(0x108)]=this[s(0x109)]+'\x20'+this['_minatureScaleY'];}async[o(0xed)](){const t=o;if(this['_instanceServiceContainer']){const c=this[t(0x11f)]?.['designerCanvas'];this['_innerShadow']['adoptedStyleSheets']=[...c['rootDesignItem'][t(0xe8)]['shadowRoot']['adoptedStyleSheets']];const d=c[t(0x11c)];this['_maxX']=d['width'],this['_maxY']=d['height'];const e=await this['_instanceServiceContainer'][t(0xf3)]['serviceContainer'][t(0xe9)]['provideMiniatureView'](c);this[t(0x114)]['replaceChildren'](e),this[t(0x113)](),this['_reDrawRect'](),this['_reRenderFlag']=![];}}['_reDrawRect'](){const u=o,c=this['_instanceServiceContainer']?.[u(0xf3)],d=c['canvasOffset'],e=c['zoomFactor'];this[u(0x106)][u(0x11b)][u(0x101)]=-d['x']/this['_maxX']*0x64+'%',this['_viewRect'][u(0x11b)][u(0x103)]=-d['y']/this['_maxY']*0x64+'%',this['_viewRect'][u(0x11b)][u(0x11d)]=c[u(0x105)]/e/this['_maxX']*0x64+'%',this['_viewRect']['style']['height']=c['clientHeight']/e/this[u(0x100)]*0x64+'%';}[o(0x107)](c){const v=o;if(!this[v(0x11f)])return;this['_isDragging']=!![],this[v(0xf0)](c),window[v(0xea)]('mousemove',this['_boundMouseMove']),window[v(0xea)](v(0xfb),this[v(0xe7)]),c[v(0x10d)]();}['_onMouseMove'](c){const w=o;if(!this[w(0xf1)])return;this['_moveCanvasToMousePosition'](c),c[w(0x10d)]();}['_onMouseUp'](c){const x=o;this['_isDragging']=![],window[x(0x115)]('mousemove',this[x(0xeb)]),window[x(0x115)]('mouseup',this[x(0xe7)]);}[o(0xf0)](c){const y=o,d=this[y(0x11f)][y(0xf3)],f=d['zoomFactor'],g=this['_above'][y(0xf4)](),h=c['clientX']-g[y(0x101)],i=c['clientY']-g[y(0x103)],j=h/g['width']*this['_maxX'],k=i/g['height']*this[y(0x100)],l=d[y(0x105)]/f/0x2,m=d['clientHeight']/f/0x2;d[y(0x110)]={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const z=o;this[z(0xf2)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[z(0x119)](),this['_instanceServiceContainer']=c,this[z(0x11f)]?(this['_zoomFactorChangedHandler']=this[z(0x11f)]['designerCanvas'][z(0xf6)]['on'](()=>{const A=z;this[A(0xfc)]();}),this[z(0xf2)]=this[z(0x11f)][z(0xff)]['on'](d=>{this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow']['innerHTML']='';}}customElements['define'](o(0x102),MiniatureView);