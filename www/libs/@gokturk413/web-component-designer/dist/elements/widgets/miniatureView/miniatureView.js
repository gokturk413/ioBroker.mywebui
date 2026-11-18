const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xc3))/0x1*(-parseInt(n(0xc1))/0x2)+-parseInt(n(0xc8))/0x3+parseInt(n(0xcf))/0x4*(-parseInt(n(0xe2))/0x5)+-parseInt(n(0xee))/0x6*(parseInt(n(0xeb))/0x7)+-parseInt(n(0xea))/0x8+-parseInt(n(0xe8))/0x9*(-parseInt(n(0xbf))/0xa)+parseInt(n(0xd4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x66ec8));function a(){const B=['_reRenderFlag','2556eBlmsl','define','_maxX','clientHeight','_instanceServiceContainer','bind','mousemove','_moveCanvasToMousePosition','_onMouseUp','height','shadowRoot','top','innerDiv','_onMouseMove','_minatureScaleX','style','observe','clientWidth','_isDragging','_boundMouseMove','146570CWCkTx','_resizeObserver','2HCFcrN','provideMiniatureView','154961DRZrNX','_minatureScaleY','scale','_maxY','_reSize','2302179ijmEQT','zoomFactor','mousedown','onZoomFactorChanged','designerPixelSize','canvasOffset','_reRender','146208qSVaTf','above','_innerDiv','_contentChangedHandler','designerCanvas','22704605xnxpEv','onContentChanged','clientX','mouseup','dispose','instanceServiceContainer','addEventListener','node-projects-web-component-designer-miniature-view','removeEventListener','innerHTML','viewRect','_above','ready','_zoomFactorChangedHandler','50FzLuUI','_innerShadow','getBoundingClientRect','adoptedStyleSheets','_boundMouseUp','replaceChildren','135sJAkSc','_onMouseDown','4323040noKWCz','560eapldC','_viewRect'];a=function(){return B;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0xd1)];['_outerDiv'];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];['_maxX']=0x0;['_maxY']=0x0;[o(0xc0)];[o(0xe3)];[o(0xe1)];[o(0xec)];['_minatureScaleX']=0x1;[o(0xc4)]=0x1;[o(0xed)]=![];[o(0x100)]=![];['_boundMouseMove'];[o(0xe6)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_outerDiv']=this['_getDomElement']('outerDiv'),this[p(0xd1)]=this['_getDomElement'](p(0xfa)),this['_viewRect']=this['_getDomElement'](p(0xde)),this['_above']=this['_getDomElement'](p(0xd0)),this[p(0xe3)]=this['_innerDiv']['attachShadow']({'mode':'open'}),this[p(0x101)]=this[p(0xfb)][p(0xf3)](this),this['_boundMouseUp']=this[p(0xf6)]['bind'](this),this[p(0xdf)][p(0xda)](p(0xca),c=>this[p(0xe9)](c)),this[p(0xc0)]=new ResizeObserver(()=>{const q=p;this[q(0xc7)]();});}[o(0xe0)](){const r=o;this[r(0xc0)][r(0xfe)](this);}[o(0xc7)](){const s=o,c=this['_outerDiv'][s(0xe4)]();this['_minatureScaleX']=c['width']/this['_maxX'],this['_minatureScaleY']=c[s(0xf7)]/this[s(0xc6)],this['_innerDiv']['style'][s(0xc5)]=this[s(0xfc)]+'\x20'+this[s(0xc4)];}async[o(0xce)](){const t=o;if(this[t(0xf2)]){const c=this[t(0xf2)]?.[t(0xd3)];this[t(0xe3)][t(0xe5)]=[...c['rootDesignItem']['element'][t(0xf8)][t(0xe5)]];const d=c[t(0xcc)];this[t(0xf0)]=d['width'],this[t(0xc6)]=d['height'];const e=await this[t(0xf2)][t(0xd3)]['serviceContainer']['miniatureViewService'][t(0xc2)](c);this['_innerShadow'][t(0xe7)](e),this['_reSize'](),this['_reDrawRect'](),this[t(0xed)]=![];}}['_reDrawRect'](){const u=o,c=this[u(0xf2)]?.['designerCanvas'],d=c[u(0xcd)],e=c['zoomFactor'];this['_viewRect']['style']['left']=-d['x']/this['_maxX']*0x64+'%',this[u(0xec)][u(0xfd)]['top']=-d['y']/this['_maxY']*0x64+'%',this[u(0xec)][u(0xfd)]['width']=c['clientWidth']/e/this['_maxX']*0x64+'%',this[u(0xec)]['style']['height']=c['clientHeight']/e/this['_maxY']*0x64+'%';}['_onMouseDown'](c){const v=o;if(!this['_instanceServiceContainer'])return;this['_isDragging']=!![],this['_moveCanvasToMousePosition'](c),window[v(0xda)](v(0xf4),this['_boundMouseMove']),window[v(0xda)](v(0xd7),this[v(0xe6)]),c['preventDefault']();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this[w(0xf5)](c),c['preventDefault']();}[o(0xf6)](c){const x=o;this[x(0x100)]=![],window['removeEventListener'](x(0xf4),this['_boundMouseMove']),window[x(0xdc)]('mouseup',this[x(0xe6)]);}[o(0xf5)](c){const y=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d[y(0xc9)],g=this[y(0xdf)]['getBoundingClientRect'](),h=c[y(0xd6)]-g['left'],i=c['clientY']-g[y(0xf9)],j=h/g['width']*this[y(0xf0)],k=i/g[y(0xf7)]*this['_maxY'],l=d[y(0xff)]/f/0x2,m=d[y(0xf1)]/f/0x2;d[y(0xcd)]={'x':-(j-l),'y':-(k-m)};}set[o(0xd9)](c){const z=o;this[z(0xd2)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[z(0xd8)](),this[z(0xf2)]=c,this[z(0xf2)]?(this[z(0xe1)]=this[z(0xf2)]['designerCanvas'][z(0xcb)]['on'](()=>{this['_reDrawRect']();}),this[z(0xd2)]=this[z(0xf2)][z(0xd5)]['on'](d=>{const A=z;this['_reRenderFlag']===![]&&(this[A(0xed)]=!![],setTimeout(()=>this['_reRender'](),0x32));}),this[z(0xed)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow'][z(0xdd)]='';}}function b(c,d){c=c-0xbf;const e=a();let f=e[c];return f;}customElements[o(0xef)](o(0xdb),MiniatureView);