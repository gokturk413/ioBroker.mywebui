function b(c,d){c=c-0xff;const e=a();let f=e[c];return f;}const o=b;function a(){const B=['198108ovmYRY','1460330EZbjUP','_minatureScaleX','instanceServiceContainer','canvasOffset','serviceContainer','adoptedStyleSheets','870PpwyzM','addEventListener','observe','549256BMqlmA','4565016oAMSBX','scale','_moveCanvasToMousePosition','height','attachShadow','1157214xjTGOV','provideMiniatureView','_maxX','_boundMouseUp','element','replaceChildren','_contentChangedHandler','clientWidth','_above','_minatureScaleY','_innerShadow','_instanceServiceContainer','rootDesignItem','template','above','_isDragging','_viewRect','_onMouseUp','21602nZuXOY','_resizeObserver','11pzSVGx','preventDefault','designerCanvas','open','zoomFactor','_reRender','left','_reDrawRect','removeEventListener','dispose','mouseup','_maxY','_reRenderFlag','clientHeight','mousemove','shadowRoot','328weyRGv','define','style','outerDiv','_outerDiv','2TziGdL','35KjhkxZ','innerDiv','_getDomElement','_innerDiv','309851iKZqMZ','getBoundingClientRect','onZoomFactorChanged','width'];a=function(){return B;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x110))/0x1+-parseInt(n(0x10b))/0x2*(parseInt(n(0x124))/0x3)+parseInt(n(0x11e))/0x4*(parseInt(n(0x10c))/0x5)+-parseInt(n(0x11b))/0x6*(parseInt(n(0x136))/0x7)+-parseInt(n(0x106))/0x8*(-parseInt(n(0x114))/0x9)+-parseInt(n(0x115))/0xa*(-parseInt(n(0x138))/0xb)+-parseInt(n(0x11f))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x76b66));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x108)]=css`
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
        }`;static [o(0x131)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x10f)];['_outerDiv'];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];['_maxX']=0x0;[o(0x101)]=0x0;['_resizeObserver'];['_innerShadow'];['_zoomFactorChangedHandler'];['_viewRect'];['_minatureScaleX']=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];['_isDragging']=![];['_boundMouseMove'];[o(0x127)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x10a)]=this['_getDomElement'](p(0x109)),this['_innerDiv']=this[p(0x10e)](p(0x10d)),this[p(0x134)]=this[p(0x10e)]('viewRect'),this[p(0x12c)]=this['_getDomElement'](p(0x132)),this['_innerShadow']=this[p(0x10f)][p(0x123)]({'mode':p(0x13b)}),this['_boundMouseMove']=this['_onMouseMove']['bind'](this),this[p(0x127)]=this[p(0x135)]['bind'](this),this[p(0x12c)][p(0x11c)]('mousedown',c=>this['_onMouseDown'](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}['ready'](){const q=o;this[q(0x137)][q(0x11d)](this);}['_reSize'](){const r=o,c=this['_outerDiv']['getBoundingClientRect']();this[r(0x116)]=c[r(0x113)]/this['_maxX'],this[r(0x12d)]=c['height']/this[r(0x101)],this['_innerDiv'][r(0x108)][r(0x120)]=this['_minatureScaleX']+'\x20'+this[r(0x12d)];}async[o(0x13d)](){const s=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.[s(0x13a)];this['_innerShadow'][s(0x11a)]=[...c[s(0x130)][s(0x128)][s(0x105)][s(0x11a)]];const d=c['designerPixelSize'];this['_maxX']=d['width'],this[s(0x101)]=d['height'];const e=await this['_instanceServiceContainer'][s(0x13a)][s(0x119)]['miniatureViewService'][s(0x125)](c);this[s(0x12e)][s(0x129)](e),this['_reSize'](),this['_reDrawRect'](),this['_reRenderFlag']=![];}}[o(0x13f)](){const t=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c['canvasOffset'],e=c[t(0x13c)];this['_viewRect'][t(0x108)]['left']=-d['x']/this[t(0x126)]*0x64+'%',this[t(0x134)]['style']['top']=-d['y']/this['_maxY']*0x64+'%',this[t(0x134)]['style'][t(0x113)]=c[t(0x12b)]/e/this['_maxX']*0x64+'%',this['_viewRect']['style']['height']=c['clientHeight']/e/this[t(0x101)]*0x64+'%';}['_onMouseDown'](c){const u=o;if(!this[u(0x12f)])return;this[u(0x133)]=!![],this['_moveCanvasToMousePosition'](c),window[u(0x11c)]('mousemove',this['_boundMouseMove']),window[u(0x11c)]('mouseup',this['_boundMouseUp']),c[u(0x139)]();}['_onMouseMove'](c){const v=o;if(!this['_isDragging'])return;this[v(0x121)](c),c['preventDefault']();}[o(0x135)](c){const w=o;this['_isDragging']=![],window[w(0x140)](w(0x104),this['_boundMouseMove']),window['removeEventListener'](w(0x100),this['_boundMouseUp']);}[o(0x121)](c){const x=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d[x(0x13c)],g=this['_above'][x(0x111)](),h=c['clientX']-g[x(0x13e)],i=c['clientY']-g['top'],j=h/g['width']*this['_maxX'],k=i/g[x(0x122)]*this[x(0x101)],l=d['clientWidth']/f/0x2,m=d[x(0x103)]/f/0x2;d[x(0x118)]={'x':-(j-l),'y':-(k-m)};}set[o(0x117)](c){const y=o;this['_contentChangedHandler']?.[y(0xff)](),this['_zoomFactorChangedHandler']?.['dispose'](),this[y(0x12f)]=c,this[y(0x12f)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas'][y(0x112)]['on'](()=>{const z=y;this[z(0x13f)]();}),this[y(0x12a)]=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const A=y;this[A(0x102)]===![]&&(this[A(0x102)]=!![],setTimeout(()=>this[A(0x13d)](),0x32));}),this['_reRenderFlag']===![]&&(this[y(0x102)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow']['innerHTML']='';}}customElements[o(0x107)]('node-projects-web-component-designer-miniature-view',MiniatureView);