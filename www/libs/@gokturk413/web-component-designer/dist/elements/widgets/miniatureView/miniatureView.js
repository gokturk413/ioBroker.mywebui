const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1de))/0x1*(-parseInt(n(0x204))/0x2)+-parseInt(n(0x1e6))/0x3+parseInt(n(0x20f))/0x4*(parseInt(n(0x1f2))/0x5)+parseInt(n(0x1f6))/0x6*(parseInt(n(0x218))/0x7)+-parseInt(n(0x1fc))/0x8+-parseInt(n(0x216))/0x9*(-parseInt(n(0x205))/0xa)+parseInt(n(0x208))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2c71f));function a(){const B=['observe','height','outerDiv','_boundMouseMove','2860384qUkQBx','_maxX','define','_zoomFactorChangedHandler','preventDefault','dispose','_minatureScaleY','_boundMouseUp','10HDzGGZ','70mWZObK','removeEventListener','_innerShadow','7507962xXxyoA','viewRect','top','scale','_isDragging','_resizeObserver','_getDomElement','4lRrZMH','_restoreCachedInititalValues','element','adoptedStyleSheets','rootDesignItem','designerCanvas','designerPixelSize','101583TyBTWf','_above','7Vvfich','addEventListener','_onMouseMove','above','33049UGAXAk','innerHTML','_onMouseDown','_reRender','_innerDiv','_contentChangedHandler','style','getBoundingClientRect','690867WGBOZK','attachShadow','left','_reDrawRect','instanceServiceContainer','_onMouseUp','onContentChanged','_maxY','_viewRect','_reSize','zoomFactor','_instanceServiceContainer','276765BWkmwi','_reRenderFlag','_outerDiv','clientWidth','709350XzwTGB','_minatureScaleX'];a=function(){return B;};return a();}function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;[o(0x1e2)];[o(0x1f4)];[o(0x217)];[o(0x1f1)];['_contentChangedHandler'];[o(0x1fd)]=0x0;['_maxY']=0x0;[o(0x20d)];[o(0x207)];[o(0x1ff)];['_viewRect'];['_minatureScaleX']=0x1;[o(0x202)]=0x1;['_reRenderFlag']=![];['_isDragging']=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x210)](),this[p(0x1f4)]=this['_getDomElement'](p(0x1fa)),this[p(0x1e2)]=this[p(0x20e)]('innerDiv'),this[p(0x1ee)]=this[p(0x20e)](p(0x209)),this['_above']=this['_getDomElement'](p(0x21b)),this[p(0x207)]=this['_innerDiv'][p(0x1e7)]({'mode':'open'}),this['_boundMouseMove']=this['_onMouseMove']['bind'](this),this[p(0x203)]=this[p(0x1eb)]['bind'](this),this['_above']['addEventListener']('mousedown',c=>this['_onMouseDown'](c)),this[p(0x20d)]=new ResizeObserver(()=>{this['_reSize']();});}['ready'](){const q=o;this['_resizeObserver'][q(0x1f8)](this);}[o(0x1ef)](){const r=o,c=this[r(0x1f4)]['getBoundingClientRect']();this['_minatureScaleX']=c['width']/this[r(0x1fd)],this['_minatureScaleY']=c['height']/this['_maxY'],this[r(0x1e2)]['style'][r(0x20b)]=this[r(0x1f7)]+'\x20'+this['_minatureScaleY'];}async[o(0x1e1)](){const s=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.[s(0x214)];this[s(0x207)][s(0x212)]=[...c[s(0x213)][s(0x211)]['shadowRoot']['adoptedStyleSheets']];const d=c[s(0x215)];this[s(0x1fd)]=d['width'],this[s(0x1ed)]=d[s(0x1f9)];const e=await this[s(0x1f1)]['designerCanvas']['serviceContainer']['miniatureViewService']['provideMiniatureView'](c);this[s(0x207)]['replaceChildren'](e),this[s(0x1ef)](),this[s(0x1e9)](),this[s(0x1f3)]=![];}}['_reDrawRect'](){const t=o,c=this[t(0x1f1)]?.[t(0x214)],d=c['canvasOffset'],e=c[t(0x1f0)];this[t(0x1ee)][t(0x1e4)][t(0x1e8)]=-d['x']/this['_maxX']*0x64+'%',this[t(0x1ee)][t(0x1e4)][t(0x20a)]=-d['y']/this[t(0x1ed)]*0x64+'%',this['_viewRect'][t(0x1e4)]['width']=c['clientWidth']/e/this[t(0x1fd)]*0x64+'%',this[t(0x1ee)]['style']['height']=c['clientHeight']/e/this[t(0x1ed)]*0x64+'%';}[o(0x1e0)](c){const u=o;if(!this['_instanceServiceContainer'])return;this[u(0x20c)]=!![],this['_moveCanvasToMousePosition'](c),window['addEventListener']('mousemove',this[u(0x1fb)]),window[u(0x219)]('mouseup',this['_boundMouseUp']),c['preventDefault']();}[o(0x21a)](c){const v=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[v(0x200)]();}[o(0x1eb)](c){const w=o;this[w(0x20c)]=![],window[w(0x206)]('mousemove',this[w(0x1fb)]),window['removeEventListener']('mouseup',this['_boundMouseUp']);}['_moveCanvasToMousePosition'](c){const x=o,d=this[x(0x1f1)][x(0x214)],f=d[x(0x1f0)],g=this['_above'][x(0x1e5)](),h=c['clientX']-g[x(0x1e8)],i=c['clientY']-g['top'],j=h/g['width']*this[x(0x1fd)],k=i/g['height']*this[x(0x1ed)],l=d[x(0x1f5)]/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x1ea)](c){const y=o;this[y(0x1e3)]?.[y(0x201)](),this[y(0x1ff)]?.[y(0x201)](),this[y(0x1f1)]=c,this['_instanceServiceContainer']?(this[y(0x1ff)]=this[y(0x1f1)][y(0x214)]['onZoomFactorChanged']['on'](()=>{const z=y;this[z(0x1e9)]();}),this[y(0x1e3)]=this['_instanceServiceContainer'][y(0x1ec)]['on'](d=>{const A=y;this[A(0x1f3)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[A(0x1e1)](),0x32));}),this['_reRenderFlag']===![]&&(this[y(0x1f3)]=!![],setTimeout(()=>this[y(0x1e1)](),0x32))):this[y(0x207)][y(0x1df)]='';}}customElements[o(0x1fe)]('node-projects-web-component-designer-miniature-view',MiniatureView);