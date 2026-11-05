const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1c9))/0x1+parseInt(n(0x1cd))/0x2*(-parseInt(n(0x1df))/0x3)+parseInt(n(0x1dd))/0x4+-parseInt(n(0x1f2))/0x5*(-parseInt(n(0x1ba))/0x6)+parseInt(n(0x1b2))/0x7+-parseInt(n(0x1c1))/0x8+parseInt(n(0x1c4))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd91d9));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1e1)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];['_outerDiv'];['_above'];[o(0x1e8)];[o(0x1b9)];[o(0x1f0)]=0x0;['_maxY']=0x0;[o(0x1d3)];['_innerShadow'];[o(0x1b6)];['_viewRect'];[o(0x1b4)]=0x1;[o(0x1e4)]=0x1;[o(0x1ec)]=![];['_isDragging']=![];['_boundMouseMove'];[o(0x1b5)];constructor(){const p=o;super(),this[p(0x1f5)](),this['_outerDiv']=this[p(0x1de)](p(0x1b8)),this['_innerDiv']=this[p(0x1de)](p(0x1e5)),this[p(0x1e6)]=this[p(0x1de)](p(0x1e7)),this['_above']=this[p(0x1de)]('above'),this[p(0x1bf)]=this['_innerDiv'][p(0x1d5)]({'mode':'open'}),this[p(0x1d7)]=this['_onMouseMove']['bind'](this),this['_boundMouseUp']=this['_onMouseUp']['bind'](this),this[p(0x1d2)][p(0x1e2)]('mousedown',c=>this[p(0x1ca)](c)),this[p(0x1d3)]=new ResizeObserver(()=>{const q=p;this[q(0x1f1)]();});}[o(0x1d1)](){const r=o;this[r(0x1d3)][r(0x1c0)](this);}[o(0x1f1)](){const s=o,c=this[s(0x1b3)][s(0x1bb)]();this['_minatureScaleX']=c[s(0x1c8)]/this[s(0x1f0)],this[s(0x1e4)]=c['height']/this[s(0x1ce)],this[s(0x1c3)][s(0x1e3)][s(0x1ee)]=this['_minatureScaleX']+'\x20'+this[s(0x1e4)];}async['_reRender'](){const t=o;if(this[t(0x1e8)]){const c=this['_instanceServiceContainer']?.['designerCanvas'];this['_innerShadow'][t(0x1ef)]=[...c[t(0x1d9)][t(0x1b7)]['shadowRoot']['adoptedStyleSheets']];const d=c[t(0x1c7)];this[t(0x1f0)]=d[t(0x1c8)],this['_maxY']=d['height'];const e=await this[t(0x1e8)][t(0x1f4)][t(0x1be)]['miniatureViewService'][t(0x1ea)](c);this['_innerShadow']['replaceChildren'](e),this[t(0x1f1)](),this[t(0x1bd)](),this['_reRenderFlag']=![];}}[o(0x1bd)](){const u=o,c=this[u(0x1e8)]?.['designerCanvas'],d=c[u(0x1d0)],e=c['zoomFactor'];this[u(0x1e6)][u(0x1e3)][u(0x1c2)]=-d['x']/this[u(0x1f0)]*0x64+'%',this[u(0x1e6)]['style']['top']=-d['y']/this[u(0x1ce)]*0x64+'%',this['_viewRect'][u(0x1e3)][u(0x1c8)]=c['clientWidth']/e/this[u(0x1f0)]*0x64+'%',this[u(0x1e6)][u(0x1e3)]['height']=c[u(0x1d6)]/e/this['_maxY']*0x64+'%';}['_onMouseDown'](c){const v=o;if(!this[v(0x1e8)])return;this[v(0x1d8)]=!![],this[v(0x1c5)](c),window[v(0x1e2)]('mousemove',this[v(0x1d7)]),window[v(0x1e2)](v(0x1eb),this['_boundMouseUp']),c[v(0x1db)]();}[o(0x1e9)](c){const w=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[w(0x1db)]();}['_onMouseUp'](c){const x=o;this[x(0x1d8)]=![],window[x(0x1c6)](x(0x1da),this['_boundMouseMove']),window['removeEventListener'](x(0x1eb),this[x(0x1b5)]);}['_moveCanvasToMousePosition'](c){const y=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d['zoomFactor'],g=this[y(0x1d2)]['getBoundingClientRect'](),h=c[y(0x1d4)]-g[y(0x1c2)],i=c['clientY']-g[y(0x1cf)],j=h/g[y(0x1c8)]*this[y(0x1f0)],k=i/g[y(0x1bc)]*this[y(0x1ce)],l=d['clientWidth']/f/0x2,m=d[y(0x1d6)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x1cb)](c){const z=o;this[z(0x1b9)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[z(0x1dc)](),this['_instanceServiceContainer']=c,this[z(0x1e8)]?(this['_zoomFactorChangedHandler']=this[z(0x1e8)][z(0x1f4)]['onZoomFactorChanged']['on'](()=>{this['_reDrawRect']();}),this[z(0x1b9)]=this['_instanceServiceContainer'][z(0x1ed)]['on'](d=>{const A=z;this[A(0x1ec)]===![]&&(this[A(0x1ec)]=!![],setTimeout(()=>this[A(0x1e0)](),0x32));}),this[z(0x1ec)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[z(0x1bf)]['innerHTML']='';}}function b(c,d){c=c-0x1b2;const e=a();let f=e[c];return f;}function a(){const B=['6785eJfuBN','node-projects-web-component-designer-miniature-view','designerCanvas','_restoreCachedInititalValues','1511216muXPAH','_outerDiv','_minatureScaleX','_boundMouseUp','_zoomFactorChangedHandler','element','outerDiv','_contentChangedHandler','2262GEIvjA','getBoundingClientRect','height','_reDrawRect','serviceContainer','_innerShadow','observe','9057328dtEeTX','left','_innerDiv','24487812UgytoQ','_moveCanvasToMousePosition','removeEventListener','designerPixelSize','width','1482598sWTcKw','_onMouseDown','instanceServiceContainer','define','14GqwHIJ','_maxY','top','canvasOffset','ready','_above','_resizeObserver','clientX','attachShadow','clientHeight','_boundMouseMove','_isDragging','rootDesignItem','mousemove','preventDefault','dispose','6018084JuwOWP','_getDomElement','620913COuhbQ','_reRender','template','addEventListener','style','_minatureScaleY','innerDiv','_viewRect','viewRect','_instanceServiceContainer','_onMouseMove','provideMiniatureView','mouseup','_reRenderFlag','onContentChanged','scale','adoptedStyleSheets','_maxX','_reSize'];a=function(){return B;};return a();}customElements[o(0x1cc)](o(0x1f3),MiniatureView);