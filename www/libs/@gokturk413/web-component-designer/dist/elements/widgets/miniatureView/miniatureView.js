const o=b;function b(c,d){c=c-0x1e8;const e=a();let f=e[c];return f;}function a(){const z=['clientX','_instanceServiceContainer','_minatureScaleX','_minatureScaleY','948522QanhKa','169329baLBCS','zoomFactor','_maxX','addEventListener','innerDiv','_resizeObserver','30210JjXKIV','_innerDiv','1328952xgVJHA','_reSize','left','open','_boundMouseMove','mousedown','51871qeMRkj','_reDrawRect','preventDefault','_innerShadow','onZoomFactorChanged','_isDragging','_reRenderFlag','2owyerS','height','_onMouseUp','_onMouseDown','_outerDiv','_maxY','ready','width','290tRbJCg','_reRender','serviceContainer','_above','621czVLfO','_boundMouseUp','_onMouseMove','_zoomFactorChangedHandler','style','_getDomElement','dispose','scale','124782zOEMph','_contentChangedHandler','removeEventListener','8572nWFTMH','outerDiv','mouseup','_moveCanvasToMousePosition','above','shadowRoot','top'];a=function(){return z;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x21e))/0x1+-parseInt(n(0x1ed))/0x2*(parseInt(n(0x210))/0x3)+parseInt(n(0x204))/0x4*(-parseInt(n(0x1f5))/0x5)+-parseInt(n(0x20f))/0x6+parseInt(n(0x201))/0x7+parseInt(n(0x218))/0x8+-parseInt(n(0x1f9))/0x9*(-parseInt(n(0x216))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x19be1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x1fd)]=css`
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
        </div>`;[o(0x217)];['_outerDiv'];[o(0x1f8)];[o(0x20c)];[o(0x202)];['_maxX']=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x1e9)];[o(0x1fc)];['_viewRect'];[o(0x20d)]=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];['_isDragging']=![];['_boundMouseMove'];[o(0x1fa)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x1f1)]=this['_getDomElement'](p(0x205)),this['_innerDiv']=this['_getDomElement'](p(0x214)),this['_viewRect']=this[p(0x1fe)]('viewRect'),this[p(0x1f8)]=this[p(0x1fe)](p(0x208)),this['_innerShadow']=this[p(0x217)]['attachShadow']({'mode':p(0x21b)}),this['_boundMouseMove']=this[p(0x1fb)]['bind'](this),this['_boundMouseUp']=this[p(0x1ef)]['bind'](this),this['_above'][p(0x213)](p(0x21d),c=>this['_onMouseDown'](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0x1f3)](){const q=o;this[q(0x215)]['observe'](this);}[o(0x219)](){const r=o,c=this['_outerDiv']['getBoundingClientRect']();this['_minatureScaleX']=c[r(0x1f4)]/this['_maxX'],this[r(0x20e)]=c['height']/this[r(0x1f2)],this['_innerDiv'][r(0x1fd)][r(0x200)]=this['_minatureScaleX']+'\x20'+this['_minatureScaleY'];}async[o(0x1f6)](){const s=o;if(this[s(0x20c)]){const c=this[s(0x20c)]?.['designerCanvas'];this[s(0x1e9)]['adoptedStyleSheets']=[...c['rootDesignItem']['element'][s(0x209)]['adoptedStyleSheets']];const d=c['designerPixelSize'];this[s(0x212)]=d['width'],this[s(0x1f2)]=d[s(0x1ee)];const e=await this['_instanceServiceContainer']['designerCanvas'][s(0x1f7)]['miniatureViewService']['provideMiniatureView'](c);this['_innerShadow']['replaceChildren'](e),this[s(0x219)](),this[s(0x21f)](),this[s(0x1ec)]=![];}}['_reDrawRect'](){const t=o,c=this[t(0x20c)]?.['designerCanvas'],d=c['canvasOffset'],e=c[t(0x211)];this['_viewRect'][t(0x1fd)][t(0x21a)]=-d['x']/this['_maxX']*0x64+'%',this['_viewRect'][t(0x1fd)][t(0x20a)]=-d['y']/this[t(0x1f2)]*0x64+'%',this['_viewRect'][t(0x1fd)][t(0x1f4)]=c['clientWidth']/e/this[t(0x212)]*0x64+'%',this['_viewRect']['style']['height']=c['clientHeight']/e/this['_maxY']*0x64+'%';}[o(0x1f0)](c){const u=o;if(!this[u(0x20c)])return;this['_isDragging']=!![],this['_moveCanvasToMousePosition'](c),window[u(0x213)]('mousemove',this['_boundMouseMove']),window['addEventListener']('mouseup',this[u(0x1fa)]),c[u(0x1e8)]();}[o(0x1fb)](c){const v=o;if(!this[v(0x1eb)])return;this[v(0x207)](c),c['preventDefault']();}[o(0x1ef)](c){const w=o;this['_isDragging']=![],window[w(0x203)]('mousemove',this[w(0x21c)]),window['removeEventListener'](w(0x206),this['_boundMouseUp']);}['_moveCanvasToMousePosition'](c){const x=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d[x(0x211)],g=this[x(0x1f8)]['getBoundingClientRect'](),h=c[x(0x20b)]-g[x(0x21a)],i=c['clientY']-g['top'],j=h/g['width']*this[x(0x212)],k=i/g['height']*this[x(0x1f2)],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const y=o;this['_contentChangedHandler']?.[y(0x1ff)](),this['_zoomFactorChangedHandler']?.['dispose'](),this['_instanceServiceContainer']=c,this[y(0x20c)]?(this['_zoomFactorChangedHandler']=this[y(0x20c)]['designerCanvas'][y(0x1ea)]['on'](()=>{this['_reDrawRect']();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[y(0x1e9)]['innerHTML']='';}}customElements['define']('node-projects-web-component-designer-miniature-view',MiniatureView);