function b(c,d){c=c-0x1f4;const e=a();let f=e[c];return f;}const o=b;function a(){const C=['addEventListener','dispose','template','_reSize','84162HXtIpu','_maxX','instanceServiceContainer','_moveCanvasToMousePosition','_contentChangedHandler','mousemove','clientX','236oeryTc','attachShadow','_boundMouseMove','_innerDiv','_reRender','observe','_minatureScaleY','height','outerDiv','removeEventListener','clientWidth','268512VnTXmZ','_resizeObserver','_above','_onMouseUp','canvasOffset','define','_restoreCachedInititalValues','2338980uzRDao','_viewRect','rootDesignItem','5316102wQNVJd','innerHTML','serviceContainer','_onMouseMove','_outerDiv','preventDefault','_instanceServiceContainer','adoptedStyleSheets','563129gYmBzd','1plIXwY','ready','18717550nfRjdP','designerCanvas','_reDrawRect','_innerShadow','shadowRoot','16OfxbeL','_maxY','24498zioeBQ','style','width','clientHeight','getBoundingClientRect','979ybwhSo','_getDomElement','_reRenderFlag','top','_zoomFactorChangedHandler','designerPixelSize','_boundMouseUp','2045zngPcw','miniatureViewService'];a=function(){return C;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x22f))/0x1*(parseInt(n(0x223))/0x2)+-parseInt(n(0x20a))/0x3*(parseInt(n(0x211))/0x4)+-parseInt(n(0x204))/0x5*(parseInt(n(0x1f8))/0x6)+-parseInt(n(0x22e))/0x7*(parseInt(n(0x1f6))/0x8)+-parseInt(n(0x226))/0x9+parseInt(n(0x231))/0xa+parseInt(n(0x1fd))/0xb*(parseInt(n(0x21c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe9664));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x1f9)]=css`
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
        }`;static [o(0x208)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x214)];[o(0x22a)];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];['_maxX']=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x1f4)];[o(0x201)];['_viewRect'];['_minatureScaleX']=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0x213)];[o(0x203)];constructor(){const p=o;super(),this[p(0x222)](),this[p(0x22a)]=this[p(0x1fe)](p(0x219)),this['_innerDiv']=this[p(0x1fe)]('innerDiv'),this[p(0x224)]=this['_getDomElement']('viewRect'),this['_above']=this[p(0x1fe)]('above'),this[p(0x1f4)]=this[p(0x214)][p(0x212)]({'mode':'open'}),this[p(0x213)]=this[p(0x229)]['bind'](this),this['_boundMouseUp']=this[p(0x21f)]['bind'](this),this['_above'][p(0x206)]('mousedown',c=>this['_onMouseDown'](c)),this[p(0x21d)]=new ResizeObserver(()=>{const q=p;this[q(0x209)]();});}[o(0x230)](){const r=o;this[r(0x21d)][r(0x216)](this);}['_reSize'](){const s=o,c=this['_outerDiv'][s(0x1fc)]();this['_minatureScaleX']=c['width']/this['_maxX'],this['_minatureScaleY']=c[s(0x218)]/this['_maxY'],this[s(0x214)][s(0x1f9)]['scale']=this['_minatureScaleX']+'\x20'+this[s(0x217)];}async['_reRender'](){const t=o;if(this[t(0x22c)]){const c=this[t(0x22c)]?.['designerCanvas'];this[t(0x1f4)]['adoptedStyleSheets']=[...c[t(0x225)]['element'][t(0x1f5)][t(0x22d)]];const d=c[t(0x202)];this[t(0x20b)]=d['width'],this['_maxY']=d['height'];const e=await this[t(0x22c)][t(0x232)][t(0x228)][t(0x205)]['provideMiniatureView'](c);this['_innerShadow']['replaceChildren'](e),this['_reSize'](),this[t(0x233)](),this['_reRenderFlag']=![];}}[o(0x233)](){const u=o,c=this[u(0x22c)]?.['designerCanvas'],d=c[u(0x220)],e=c['zoomFactor'];this['_viewRect'][u(0x1f9)]['left']=-d['x']/this[u(0x20b)]*0x64+'%',this['_viewRect'][u(0x1f9)]['top']=-d['y']/this['_maxY']*0x64+'%',this['_viewRect'][u(0x1f9)]['width']=c[u(0x21b)]/e/this[u(0x20b)]*0x64+'%',this[u(0x224)]['style']['height']=c[u(0x1fb)]/e/this[u(0x1f7)]*0x64+'%';}['_onMouseDown'](c){const v=o;if(!this['_instanceServiceContainer'])return;this['_isDragging']=!![],this[v(0x20d)](c),window[v(0x206)](v(0x20f),this[v(0x213)]),window[v(0x206)]('mouseup',this['_boundMouseUp']),c['preventDefault']();}['_onMouseMove'](c){const w=o;if(!this['_isDragging'])return;this[w(0x20d)](c),c[w(0x22b)]();}[o(0x21f)](c){const x=o;this['_isDragging']=![],window[x(0x21a)]('mousemove',this[x(0x213)]),window[x(0x21a)]('mouseup',this[x(0x203)]);}[o(0x20d)](c){const y=o,d=this[y(0x22c)]['designerCanvas'],f=d['zoomFactor'],g=this[y(0x21e)][y(0x1fc)](),h=c[y(0x210)]-g['left'],i=c['clientY']-g[y(0x200)],j=h/g[y(0x1fa)]*this[y(0x20b)],k=i/g['height']*this[y(0x1f7)],l=d[y(0x21b)]/f/0x2,m=d[y(0x1fb)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x20c)](c){const z=o;this['_contentChangedHandler']?.[z(0x207)](),this[z(0x201)]?.[z(0x207)](),this['_instanceServiceContainer']=c,this[z(0x22c)]?(this[z(0x201)]=this['_instanceServiceContainer']['designerCanvas']['onZoomFactorChanged']['on'](()=>{const A=z;this[A(0x233)]();}),this[z(0x20e)]=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const B=z;this['_reRenderFlag']===![]&&(this[B(0x1ff)]=!![],setTimeout(()=>this[B(0x215)](),0x32));}),this[z(0x1ff)]===![]&&(this[z(0x1ff)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow'][z(0x227)]='';}}customElements[o(0x221)]('node-projects-web-component-designer-miniature-view',MiniatureView);