const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1b2))/0x1*(parseInt(n(0x1a3))/0x2)+-parseInt(n(0x1da))/0x3*(-parseInt(n(0x1b0))/0x4)+-parseInt(n(0x1b9))/0x5*(parseInt(n(0x1c1))/0x6)+-parseInt(n(0x1d5))/0x7*(parseInt(n(0x1c0))/0x8)+-parseInt(n(0x1e0))/0x9+-parseInt(n(0x1dd))/0xa+parseInt(n(0x1c7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x91af3));function b(c,d){c=c-0x1a3;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x1c6)]=css`
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
        }`;static [o(0x1ae)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x1d0)];['_outerDiv'];[o(0x1a8)];['_instanceServiceContainer'];['_contentChangedHandler'];['_maxX']=0x0;['_maxY']=0x0;[o(0x1c4)];[o(0x1bf)];[o(0x1db)];['_viewRect'];['_minatureScaleX']=0x1;[o(0x1ba)]=0x1;['_reRenderFlag']=![];[o(0x1c8)]=![];['_boundMouseMove'];[o(0x1c2)];constructor(){const p=o;super(),this[p(0x1de)](),this['_outerDiv']=this[p(0x1b1)]('outerDiv'),this['_innerDiv']=this[p(0x1b1)](p(0x1c9)),this['_viewRect']=this[p(0x1b1)](p(0x1a4)),this[p(0x1a8)]=this['_getDomElement'](p(0x1ac)),this[p(0x1bf)]=this[p(0x1d0)]['attachShadow']({'mode':p(0x1bd)}),this['_boundMouseMove']=this['_onMouseMove'][p(0x1d8)](this),this['_boundMouseUp']=this[p(0x1d7)]['bind'](this),this[p(0x1a8)]['addEventListener']('mousedown',c=>this[p(0x1d4)](c)),this['_resizeObserver']=new ResizeObserver(()=>{const q=p;this[q(0x1ab)]();});}[o(0x1cf)](){const r=o;this[r(0x1c4)][r(0x1c5)](this);}[o(0x1ab)](){const s=o,c=this[s(0x1b5)]['getBoundingClientRect']();this[s(0x1b8)]=c[s(0x1b3)]/this['_maxX'],this['_minatureScaleY']=c['height']/this[s(0x1d2)],this['_innerDiv']['style'][s(0x1d1)]=this['_minatureScaleX']+'\x20'+this[s(0x1ba)];}async['_reRender'](){const t=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.[t(0x1d9)];this[t(0x1bf)]['adoptedStyleSheets']=[...c[t(0x1bb)][t(0x1b7)]['shadowRoot']['adoptedStyleSheets']];const d=c['designerPixelSize'];this['_maxX']=d[t(0x1b3)],this[t(0x1d2)]=d[t(0x1a5)];const e=await this[t(0x1a6)][t(0x1d9)][t(0x1bc)]['miniatureViewService']['provideMiniatureView'](c);this['_innerShadow'][t(0x1aa)](e),this[t(0x1ab)](),this['_reDrawRect'](),this[t(0x1e2)]=![];}}[o(0x1af)](){const u=o,c=this[u(0x1a6)]?.[u(0x1d9)],d=c['canvasOffset'],e=c['zoomFactor'];this[u(0x1a9)][u(0x1c6)]['left']=-d['x']/this[u(0x1d6)]*0x64+'%',this[u(0x1a9)][u(0x1c6)]['top']=-d['y']/this[u(0x1d2)]*0x64+'%',this['_viewRect']['style']['width']=c[u(0x1dc)]/e/this[u(0x1d6)]*0x64+'%',this['_viewRect']['style'][u(0x1a5)]=c[u(0x1be)]/e/this[u(0x1d2)]*0x64+'%';}[o(0x1d4)](c){const v=o;if(!this['_instanceServiceContainer'])return;this[v(0x1c8)]=!![],this[v(0x1d3)](c),window['addEventListener']('mousemove',this[v(0x1b4)]),window[v(0x1ad)]('mouseup',this[v(0x1c2)]),c[v(0x1cc)]();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[w(0x1cc)]();}['_onMouseUp'](c){const x=o;this[x(0x1c8)]=![],window[x(0x1a7)]('mousemove',this[x(0x1b4)]),window['removeEventListener']('mouseup',this['_boundMouseUp']);}[o(0x1d3)](c){const y=o,d=this[y(0x1a6)][y(0x1d9)],f=d[y(0x1b6)],g=this[y(0x1a8)]['getBoundingClientRect'](),h=c[y(0x1df)]-g['left'],i=c[y(0x1c3)]-g['top'],j=h/g[y(0x1b3)]*this[y(0x1d6)],k=i/g['height']*this['_maxY'],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x1cb)](c){const z=o;this[z(0x1e1)]?.[z(0x1cd)](),this['_zoomFactorChangedHandler']?.[z(0x1cd)](),this[z(0x1a6)]=c,this[z(0x1a6)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer'][z(0x1d9)]['onZoomFactorChanged']['on'](()=>{this['_reDrawRect']();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const A=z;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[A(0x1ce)](),0x32));}),this[z(0x1e2)]===![]&&(this[z(0x1e2)]=!![],setTimeout(()=>this[z(0x1ce)](),0x32))):this['_innerShadow'][z(0x1ca)]='';}}function a(){const B=['_outerDiv','zoomFactor','element','_minatureScaleX','1563050sAPqUY','_minatureScaleY','rootDesignItem','serviceContainer','open','clientHeight','_innerShadow','8cFmfGj','12oyFKvY','_boundMouseUp','clientY','_resizeObserver','observe','style','43710579IuHsUO','_isDragging','innerDiv','innerHTML','instanceServiceContainer','preventDefault','dispose','_reRender','ready','_innerDiv','scale','_maxY','_moveCanvasToMousePosition','_onMouseDown','6093458zRElaI','_maxX','_onMouseUp','bind','designerCanvas','122985LoaEBx','_zoomFactorChangedHandler','clientWidth','9338090erjwkz','_restoreCachedInititalValues','clientX','4092291TcEtGf','_contentChangedHandler','_reRenderFlag','1887378KvpPzT','viewRect','height','_instanceServiceContainer','removeEventListener','_above','_viewRect','replaceChildren','_reSize','above','addEventListener','template','_reDrawRect','44ttDwZo','_getDomElement','1wEiCng','width','_boundMouseMove'];a=function(){return B;};return a();}customElements['define']('node-projects-web-component-designer-miniature-view',MiniatureView);