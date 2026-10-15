const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x163))/0x1*(parseInt(n(0x141))/0x2)+parseInt(n(0x154))/0x3*(-parseInt(n(0x152))/0x4)+-parseInt(n(0x169))/0x5*(parseInt(n(0x15b))/0x6)+-parseInt(n(0x137))/0x7+parseInt(n(0x14a))/0x8*(-parseInt(n(0x130))/0x9)+parseInt(n(0x16e))/0xa*(parseInt(n(0x149))/0xb)+-parseInt(n(0x15d))/0xc*(-parseInt(n(0x16a))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6ce84));function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x131)]=css`
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
        </div>`;['_innerDiv'];['_outerDiv'];['_above'];[o(0x146)];[o(0x13f)];[o(0x136)]=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x148)];['_zoomFactorChangedHandler'];['_viewRect'];['_minatureScaleX']=0x1;[o(0x15f)]=0x1;['_reRenderFlag']=![];['_isDragging']=![];['_boundMouseMove'];[o(0x15a)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x165)]=this['_getDomElement'](p(0x14f)),this[p(0x13b)]=this[p(0x134)](p(0x161)),this[p(0x164)]=this['_getDomElement']('viewRect'),this['_above']=this[p(0x134)]('above'),this[p(0x148)]=this['_innerDiv']['attachShadow']({'mode':p(0x158)}),this['_boundMouseMove']=this[p(0x160)]['bind'](this),this[p(0x15a)]=this['_onMouseUp'][p(0x13a)](this),this['_above']['addEventListener'](p(0x144),c=>this[p(0x135)](c)),this['_resizeObserver']=new ResizeObserver(()=>{const q=p;this[q(0x16b)]();});}[o(0x143)](){const r=o;this[r(0x14d)]['observe'](this);}['_reSize'](){const s=o,c=this['_outerDiv'][s(0x133)]();this['_minatureScaleX']=c[s(0x156)]/this[s(0x136)],this[s(0x15f)]=c[s(0x14b)]/this['_maxY'],this['_innerDiv'][s(0x131)][s(0x140)]=this['_minatureScaleX']+'\x20'+this[s(0x15f)];}async[o(0x14e)](){const t=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.['designerCanvas'];this[t(0x148)][t(0x162)]=[...c['rootDesignItem']['element'][t(0x155)][t(0x162)]];const d=c['designerPixelSize'];this['_maxX']=d[t(0x156)],this[t(0x145)]=d['height'];const e=await this[t(0x146)][t(0x14c)][t(0x168)]['miniatureViewService'][t(0x15e)](c);this['_innerShadow']['replaceChildren'](e),this[t(0x16b)](),this['_reDrawRect'](),this[t(0x15c)]=![];}}['_reDrawRect'](){const u=o,c=this['_instanceServiceContainer']?.[u(0x14c)],d=c['canvasOffset'],e=c[u(0x167)];this['_viewRect']['style']['left']=-d['x']/this[u(0x136)]*0x64+'%',this['_viewRect']['style'][u(0x16c)]=-d['y']/this['_maxY']*0x64+'%',this['_viewRect']['style'][u(0x156)]=c[u(0x16d)]/e/this['_maxX']*0x64+'%',this[u(0x164)][u(0x131)]['height']=c[u(0x166)]/e/this[u(0x145)]*0x64+'%';}[o(0x135)](c){const v=o;if(!this[v(0x146)])return;this['_isDragging']=!![],this['_moveCanvasToMousePosition'](c),window[v(0x138)](v(0x159),this[v(0x13c)]),window[v(0x138)]('mouseup',this[v(0x15a)]),c[v(0x151)]();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this[w(0x153)](c),c[w(0x151)]();}[o(0x147)](c){const x=o;this[x(0x132)]=![],window['removeEventListener'](x(0x159),this[x(0x13c)]),window['removeEventListener'](x(0x142),this[x(0x15a)]);}[o(0x153)](c){const y=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d[y(0x167)],g=this[y(0x150)]['getBoundingClientRect'](),h=c['clientX']-g['left'],i=c['clientY']-g['top'],j=h/g[y(0x156)]*this[y(0x136)],k=i/g[y(0x14b)]*this[y(0x145)],l=d['clientWidth']/f/0x2,m=d[y(0x166)]/f/0x2;d[y(0x13d)]={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const z=o;this['_contentChangedHandler']?.[z(0x13e)](),this['_zoomFactorChangedHandler']?.[z(0x13e)](),this[z(0x146)]=c,this[z(0x146)]?(this['_zoomFactorChangedHandler']=this[z(0x146)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const A=z;this[A(0x139)]();}),this['_contentChangedHandler']=this[z(0x146)]['onContentChanged']['on'](d=>{const B=z;this[B(0x15c)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[B(0x14e)](),0x32));}),this['_reRenderFlag']===![]&&(this[z(0x15c)]=!![],setTimeout(()=>this[z(0x14e)](),0x32))):this[z(0x148)]['innerHTML']='';}}customElements[o(0x157)]('node-projects-web-component-designer-miniature-view',MiniatureView);function a(){const C=['6NyuRKJ','_viewRect','_outerDiv','clientHeight','zoomFactor','serviceContainer','25GWFCBN','26zFYqjW','_reSize','top','clientWidth','1240QslUDS','36UIxSKW','style','_isDragging','getBoundingClientRect','_getDomElement','_onMouseDown','_maxX','5616702kTfVks','addEventListener','_reDrawRect','bind','_innerDiv','_boundMouseMove','canvasOffset','dispose','_contentChangedHandler','scale','90536zEdaif','mouseup','ready','mousedown','_maxY','_instanceServiceContainer','_onMouseUp','_innerShadow','77066LNnvvY','176976ElCRbh','height','designerCanvas','_resizeObserver','_reRender','outerDiv','_above','preventDefault','84856FSYkXj','_moveCanvasToMousePosition','111VZkoJo','shadowRoot','width','define','open','mousemove','_boundMouseUp','713076SsaeZF','_reRenderFlag','9454524KLggHG','provideMiniatureView','_minatureScaleY','_onMouseMove','innerDiv','adoptedStyleSheets'];a=function(){return C;};return a();}