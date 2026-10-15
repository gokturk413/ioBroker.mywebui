function a(){const B=['serviceContainer','width','node-projects-web-component-designer-miniature-view','clientY','_reSize','dispose','32ZhgSBh','1128834MJAczh','adoptedStyleSheets','instanceServiceContainer','designerCanvas','_maxX','307348PQuZIR','provideMiniatureView','preventDefault','_above','template','above','_innerDiv','1941546ibhCjL','_isDragging','_onMouseUp','12943320bmnvQf','_onMouseDown','_boundMouseUp','open','mousemove','left','_reRenderFlag','_maxY','_instanceServiceContainer','height','designerPixelSize','scale','_getDomElement','_viewRect','shadowRoot','bind','observe','onZoomFactorChanged','33750CTxmVD','134778LtABbw','define','style','addEventListener','clientX','removeEventListener','5NxxBLs','91JEYBkl','mouseup','clientWidth','_outerDiv','top','element','_reDrawRect','6926Rboyew','_onMouseMove','_boundMouseMove','clientHeight','canvasOffset','_moveCanvasToMousePosition','innerDiv','_minatureScaleY','_innerShadow','_contentChangedHandler'];a=function(){return B;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x116))/0x1*(-parseInt(n(0x11d))/0x2)+-parseInt(n(0xf9))/0x3+parseInt(n(0x133))/0x4*(-parseInt(n(0x115))/0x5)+-parseInt(n(0x10e))/0x6+parseInt(n(0x10f))/0x7*(-parseInt(n(0x12d))/0x8)+-parseInt(n(0x12e))/0x9+parseInt(n(0xfc))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa5603));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x111)]=css`
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
          border: 1px solid black;
          pointer-events: none;
        }`;static [o(0x137)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];[o(0x119)];[o(0x136)];[o(0x104)];['_contentChangedHandler'];['_maxX']=0x0;[o(0x103)]=0x0;['_resizeObserver'];['_innerShadow'];['_zoomFactorChangedHandler'];['_viewRect'];['_minatureScaleX']=0x1;[o(0x124)]=0x1;[o(0x102)]=![];[o(0xfa)]=![];[o(0x11f)];[o(0xfe)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x119)]=this['_getDomElement']('outerDiv'),this['_innerDiv']=this['_getDomElement'](p(0x123)),this['_viewRect']=this[p(0x108)]('viewRect'),this[p(0x136)]=this['_getDomElement'](p(0x138)),this['_innerShadow']=this[p(0x139)]['attachShadow']({'mode':p(0xff)}),this['_boundMouseMove']=this[p(0x11e)][p(0x10b)](this),this[p(0xfe)]=this['_onMouseUp'][p(0x10b)](this),this[p(0x136)]['addEventListener']('mousedown',c=>this['_onMouseDown'](c)),this['_resizeObserver']=new ResizeObserver(()=>{const q=p;this[q(0x12b)]();});}['ready'](){const r=o;this['_resizeObserver'][r(0x10c)](this);}['_reSize'](){const s=o,c=this[s(0x119)]['getBoundingClientRect']();this['_minatureScaleX']=c['width']/this['_maxX'],this['_minatureScaleY']=c['height']/this['_maxY'],this[s(0x139)][s(0x111)][s(0x107)]=this['_minatureScaleX']+'\x20'+this[s(0x124)];}async['_reRender'](){const t=o;if(this[t(0x104)]){const c=this['_instanceServiceContainer']?.[t(0x131)];this['_innerShadow'][t(0x12f)]=[...c['rootDesignItem'][t(0x11b)][t(0x10a)]['adoptedStyleSheets']];const d=c[t(0x106)];this[t(0x132)]=d['width'],this[t(0x103)]=d[t(0x105)];const e=await this[t(0x104)]['designerCanvas'][t(0x127)]['miniatureViewService'][t(0x134)](c);this['_innerShadow']['replaceChildren'](e),this['_reSize'](),this[t(0x11c)](),this['_reRenderFlag']=![];}}['_reDrawRect'](){const u=o,c=this['_instanceServiceContainer']?.[u(0x131)],d=c[u(0x121)],e=c['zoomFactor'];this[u(0x109)][u(0x111)]['left']=-d['x']/this['_maxX']*0x64+'%',this[u(0x109)]['style']['top']=-d['y']/this['_maxY']*0x64+'%',this['_viewRect']['style'][u(0x128)]=c[u(0x118)]/e/this[u(0x132)]*0x64+'%',this[u(0x109)]['style'][u(0x105)]=c[u(0x120)]/e/this[u(0x103)]*0x64+'%';}[o(0xfd)](c){const v=o;if(!this['_instanceServiceContainer'])return;this['_isDragging']=!![],this[v(0x122)](c),window[v(0x112)]('mousemove',this[v(0x11f)]),window[v(0x112)]('mouseup',this['_boundMouseUp']),c['preventDefault']();}[o(0x11e)](c){const w=o;if(!this['_isDragging'])return;this[w(0x122)](c),c[w(0x135)]();}[o(0xfb)](c){const x=o;this[x(0xfa)]=![],window[x(0x114)](x(0x100),this[x(0x11f)]),window[x(0x114)](x(0x117),this['_boundMouseUp']);}[o(0x122)](c){const y=o,d=this['_instanceServiceContainer'][y(0x131)],f=d['zoomFactor'],g=this['_above']['getBoundingClientRect'](),h=c[y(0x113)]-g[y(0x101)],i=c[y(0x12a)]-g[y(0x11a)],j=h/g['width']*this[y(0x132)],k=i/g[y(0x105)]*this['_maxY'],l=d[y(0x118)]/f/0x2,m=d['clientHeight']/f/0x2;d[y(0x121)]={'x':-(j-l),'y':-(k-m)};}set[o(0x130)](c){const z=o;this[z(0x126)]?.['dispose'](),this['_zoomFactorChangedHandler']?.[z(0x12c)](),this[z(0x104)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas'][z(0x10d)]['on'](()=>{this['_reDrawRect']();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const A=z;this['_reRenderFlag']===![]&&(this[A(0x102)]=!![],setTimeout(()=>this['_reRender'](),0x32));}),this[z(0x102)]===![]&&(this[z(0x102)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this[z(0x125)]['innerHTML']='';}}function b(c,d){c=c-0xf9;const e=a();let f=e[c];return f;}customElements[o(0x110)](o(0x129),MiniatureView);