const o=b;function b(c,d){c=c-0x1d0;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1d9))/0x1+-parseInt(n(0x204))/0x2+parseInt(n(0x1e0))/0x3*(parseInt(n(0x1ee))/0x4)+parseInt(n(0x1e7))/0x5*(parseInt(n(0x1fc))/0x6)+-parseInt(n(0x1ec))/0x7*(parseInt(n(0x1f3))/0x8)+-parseInt(n(0x1f2))/0x9+parseInt(n(0x1f1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb65bb));function a(){const A=['13372146EPSVXY','14104kbXqRd','open','rootDesignItem','_minatureScaleY','clientHeight','innerHTML','canvasOffset','_reDrawRect','_viewRect','204XxnqDh','_outerDiv','dispose','width','getBoundingClientRect','_getDomElement','mousedown','element','1826574hBScis','_maxY','viewRect','_reRenderFlag','mouseup','_innerDiv','_zoomFactorChangedHandler','_boundMouseUp','_onMouseDown','left','onContentChanged','_onMouseUp','_above','onZoomFactorChanged','node-projects-web-component-designer-miniature-view','_reSize','_instanceServiceContainer','template','_minatureScaleX','serviceContainer','_innerShadow','_onMouseMove','preventDefault','define','_maxX','811153zaDCBy','_contentChangedHandler','top','removeEventListener','attachShadow','_moveCanvasToMousePosition','height','176367AsZpmb','designerCanvas','mousemove','clientX','clientWidth','_boundMouseMove','adoptedStyleSheets','219320RvWQqU','addEventListener','designerPixelSize','_reRender','_isDragging','3787wcceUh','style','4qpuFTU','replaceChildren','_restoreCachedInititalValues','33607910ommkye'];a=function(){return A;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1d1)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];['_outerDiv'];[o(0x210)];[o(0x1d0)];[o(0x1da)];[o(0x1d8)]=0x0;[o(0x205)]=0x0;['_resizeObserver'];['_innerShadow'];['_zoomFactorChangedHandler'];[o(0x1fb)];[o(0x1d2)]=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0x1e5)];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x1f0)](),this[p(0x1fd)]=this['_getDomElement']('outerDiv'),this['_innerDiv']=this['_getDomElement']('innerDiv'),this['_viewRect']=this[p(0x201)](p(0x206)),this[p(0x210)]=this['_getDomElement']('above'),this[p(0x1d4)]=this[p(0x209)][p(0x1dd)]({'mode':p(0x1f4)}),this[p(0x1e5)]=this['_onMouseMove']['bind'](this),this[p(0x20b)]=this[p(0x20f)]['bind'](this),this['_above']['addEventListener'](p(0x202),c=>this['_onMouseDown'](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}['ready'](){this['_resizeObserver']['observe'](this);}[o(0x213)](){const q=o,c=this[q(0x1fd)][q(0x200)]();this[q(0x1d2)]=c['width']/this['_maxX'],this['_minatureScaleY']=c[q(0x1df)]/this['_maxY'],this[q(0x209)][q(0x1ed)]['scale']=this['_minatureScaleX']+'\x20'+this[q(0x1f6)];}async[o(0x1ea)](){const r=o;if(this[r(0x1d0)]){const c=this['_instanceServiceContainer']?.[r(0x1e1)];this[r(0x1d4)][r(0x1e6)]=[...c[r(0x1f5)][r(0x203)]['shadowRoot'][r(0x1e6)]];const d=c[r(0x1e9)];this[r(0x1d8)]=d[r(0x1ff)],this['_maxY']=d[r(0x1df)];const e=await this[r(0x1d0)]['designerCanvas'][r(0x1d3)]['miniatureViewService']['provideMiniatureView'](c);this['_innerShadow'][r(0x1ef)](e),this['_reSize'](),this[r(0x1fa)](),this['_reRenderFlag']=![];}}[o(0x1fa)](){const s=o,c=this['_instanceServiceContainer']?.[s(0x1e1)],d=c[s(0x1f9)],e=c['zoomFactor'];this['_viewRect'][s(0x1ed)][s(0x20d)]=-d['x']/this['_maxX']*0x64+'%',this[s(0x1fb)]['style'][s(0x1db)]=-d['y']/this['_maxY']*0x64+'%',this[s(0x1fb)]['style'][s(0x1ff)]=c[s(0x1e4)]/e/this[s(0x1d8)]*0x64+'%',this['_viewRect']['style']['height']=c['clientHeight']/e/this['_maxY']*0x64+'%';}[o(0x20c)](c){const t=o;if(!this['_instanceServiceContainer'])return;this[t(0x1eb)]=!![],this['_moveCanvasToMousePosition'](c),window[t(0x1e8)](t(0x1e2),this[t(0x1e5)]),window[t(0x1e8)](t(0x208),this[t(0x20b)]),c['preventDefault']();}[o(0x1d5)](c){const u=o;if(!this[u(0x1eb)])return;this[u(0x1de)](c),c[u(0x1d6)]();}[o(0x20f)](c){const v=o;this[v(0x1eb)]=![],window[v(0x1dc)]('mousemove',this['_boundMouseMove']),window['removeEventListener'](v(0x208),this[v(0x20b)]);}[o(0x1de)](c){const w=o,d=this[w(0x1d0)][w(0x1e1)],f=d['zoomFactor'],g=this[w(0x210)]['getBoundingClientRect'](),h=c[w(0x1e3)]-g['left'],i=c['clientY']-g['top'],j=h/g['width']*this['_maxX'],k=i/g['height']*this['_maxY'],l=d['clientWidth']/f/0x2,m=d[w(0x1f7)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const x=o;this['_contentChangedHandler']?.[x(0x1fe)](),this[x(0x20a)]?.[x(0x1fe)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this[x(0x20a)]=this[x(0x1d0)][x(0x1e1)][x(0x211)]['on'](()=>{const y=x;this[y(0x1fa)]();}),this[x(0x1da)]=this['_instanceServiceContainer'][x(0x20e)]['on'](d=>{const z=x;this['_reRenderFlag']===![]&&(this[z(0x207)]=!![],setTimeout(()=>this[z(0x1ea)](),0x32));}),this['_reRenderFlag']===![]&&(this[x(0x207)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this[x(0x1d4)][x(0x1f8)]='';}}customElements[o(0x1d7)](o(0x212),MiniatureView);