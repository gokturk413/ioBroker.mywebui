const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xc1))/0x1+parseInt(n(0xe9))/0x2+parseInt(n(0xf4))/0x3+-parseInt(n(0xeb))/0x4+parseInt(n(0xc3))/0x5+-parseInt(n(0xc5))/0x6+-parseInt(n(0xd9))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeb738));function b(c,d){c=c-0xbe;const e=a();let f=e[c];return f;}function a(){const A=['onZoomFactorChanged','dispose','preventDefault','_onMouseMove','top','provideMiniatureView','observe','define','304603ENPGCP','_above','4944485BoTLoB','open','1817058KWeCuY','_innerDiv','left','adoptedStyleSheets','_boundMouseUp','_instanceServiceContainer','_reDrawRect','getBoundingClientRect','_innerShadow','attachShadow','clientWidth','miniatureViewService','_reRenderFlag','designerPixelSize','rootDesignItem','mouseup','_contentChangedHandler','_isDragging','template','_onMouseDown','8719501QbLXFE','_reSize','_minatureScaleX','_moveCanvasToMousePosition','_maxY','clientY','width','clientHeight','_viewRect','_getDomElement','_reRender','style','mousemove','_maxX','_boundMouseMove','_outerDiv','132878gAbIFz','_zoomFactorChangedHandler','1586852ORQqNh','removeEventListener','ready','_onMouseUp','above','height','canvasOffset','addEventListener','designerCanvas','4649004MdodOA'];a=function(){return A;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0xe4)]=css`
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
        }`;static [o(0xd7)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;['_innerDiv'];['_outerDiv'];[o(0xc2)];[o(0xca)];['_contentChangedHandler'];[o(0xe6)]=0x0;[o(0xdd)]=0x0;['_resizeObserver'];[o(0xcd)];[o(0xea)];[o(0xe1)];['_minatureScaleX']=0x1;['_minatureScaleY']=0x1;[o(0xd1)]=![];['_isDragging']=![];[o(0xe7)];['_boundMouseUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xe8)]=this['_getDomElement']('outerDiv'),this[p(0xc6)]=this[p(0xe2)]('innerDiv'),this[p(0xe1)]=this[p(0xe2)]('viewRect'),this[p(0xc2)]=this[p(0xe2)](p(0xef)),this['_innerShadow']=this['_innerDiv'][p(0xce)]({'mode':p(0xc4)}),this['_boundMouseMove']=this[p(0xf8)]['bind'](this),this[p(0xc9)]=this[p(0xee)]['bind'](this),this[p(0xc2)]['addEventListener']('mousedown',c=>this['_onMouseDown'](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0xed)](){const q=o;this['_resizeObserver'][q(0xbf)](this);}[o(0xda)](){const r=o,c=this['_outerDiv'][r(0xcc)]();this[r(0xdb)]=c['width']/this[r(0xe6)],this['_minatureScaleY']=c['height']/this['_maxY'],this['_innerDiv']['style']['scale']=this[r(0xdb)]+'\x20'+this['_minatureScaleY'];}async[o(0xe3)](){const s=o;if(this[s(0xca)]){const c=this['_instanceServiceContainer']?.['designerCanvas'];this['_innerShadow'][s(0xc8)]=[...c[s(0xd3)]['element']['shadowRoot']['adoptedStyleSheets']];const d=c[s(0xd2)];this[s(0xe6)]=d[s(0xdf)],this['_maxY']=d[s(0xf0)];const e=await this['_instanceServiceContainer'][s(0xf3)]['serviceContainer'][s(0xd0)][s(0xbe)](c);this[s(0xcd)]['replaceChildren'](e),this['_reSize'](),this['_reDrawRect'](),this['_reRenderFlag']=![];}}['_reDrawRect'](){const t=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c[t(0xf1)],e=c['zoomFactor'];this[t(0xe1)][t(0xe4)][t(0xc7)]=-d['x']/this[t(0xe6)]*0x64+'%',this[t(0xe1)]['style']['top']=-d['y']/this['_maxY']*0x64+'%',this['_viewRect'][t(0xe4)][t(0xdf)]=c['clientWidth']/e/this[t(0xe6)]*0x64+'%',this['_viewRect'][t(0xe4)]['height']=c[t(0xe0)]/e/this[t(0xdd)]*0x64+'%';}[o(0xd8)](c){const u=o;if(!this['_instanceServiceContainer'])return;this['_isDragging']=!![],this[u(0xdc)](c),window[u(0xf2)]('mousemove',this['_boundMouseMove']),window['addEventListener'](u(0xd4),this['_boundMouseUp']),c[u(0xf7)]();}['_onMouseMove'](c){if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c['preventDefault']();}['_onMouseUp'](c){const v=o;this[v(0xd6)]=![],window[v(0xec)](v(0xe5),this['_boundMouseMove']),window['removeEventListener'](v(0xd4),this['_boundMouseUp']);}['_moveCanvasToMousePosition'](c){const w=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d['zoomFactor'],g=this[w(0xc2)]['getBoundingClientRect'](),h=c['clientX']-g['left'],i=c[w(0xde)]-g[w(0xf9)],j=h/g['width']*this['_maxX'],k=i/g['height']*this[w(0xdd)],l=d[w(0xcf)]/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const x=o;this['_contentChangedHandler']?.[x(0xf6)](),this['_zoomFactorChangedHandler']?.['dispose'](),this[x(0xca)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this[x(0xca)][x(0xf3)][x(0xf5)]['on'](()=>{const y=x;this[y(0xcb)]();}),this[x(0xd5)]=this[x(0xca)]['onContentChanged']['on'](d=>{const z=x;this[z(0xd1)]===![]&&(this[z(0xd1)]=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this[x(0xd1)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this[x(0xcd)]['innerHTML']='';}}customElements[o(0xc0)]('node-projects-web-component-designer-miniature-view',MiniatureView);