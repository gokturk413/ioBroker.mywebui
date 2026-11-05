function b(c,d){c=c-0x104;const e=a();let f=e[c];return f;}function a(){const A=['_reRenderFlag','adoptedStyleSheets','bind','canvasOffset','miniatureViewService','_zoomFactorChangedHandler','innerHTML','clientHeight','_isDragging','_instanceServiceContainer','211264AjBNxv','588znhtVb','designerCanvas','_innerShadow','29121tqqfob','_resizeObserver','dispose','_minatureScaleY','_maxX','_onMouseUp','85iCNfKP','_innerDiv','innerDiv','width','_moveCanvasToMousePosition','onContentChanged','_viewRect','getBoundingClientRect','32pZCgcH','_reSize','serviceContainer','_reDrawRect','191911bpwLZV','define','5759740yPcttV','above','addEventListener','_onMouseDown','viewRect','_minatureScaleX','_onMouseMove','_boundMouseMove','outerDiv','26940foLLPy','clientWidth','clientX','rootDesignItem','_maxY','_reRender','left','removeEventListener','_boundMouseUp','842103jgHCvu','preventDefault','_getDomElement','height','open','style','mousemove','18488uDcIPk','zoomFactor','_outerDiv'];a=function(){return A;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x12c))/0x1+parseInt(n(0x128))/0x2*(-parseInt(n(0x11a))/0x3)+parseInt(n(0x116))/0x4+parseInt(n(0x120))/0x5*(-parseInt(n(0x137))/0x6)+parseInt(n(0x117))/0x7*(-parseInt(n(0x109))/0x8)+parseInt(n(0x140))/0x9+parseInt(n(0x12e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x198e8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_innerDiv'];[o(0x10b)];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];[o(0x11e)]=0x0;['_maxY']=0x0;[o(0x11b)];[o(0x119)];['_zoomFactorChangedHandler'];['_viewRect'];[o(0x133)]=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];[o(0x114)]=![];[o(0x135)];['_boundMouseUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_outerDiv']=this['_getDomElement'](p(0x136)),this[p(0x121)]=this[p(0x104)](p(0x122)),this['_viewRect']=this['_getDomElement'](p(0x132)),this['_above']=this['_getDomElement'](p(0x12f)),this['_innerShadow']=this['_innerDiv']['attachShadow']({'mode':p(0x106)}),this[p(0x135)]=this[p(0x134)][p(0x10e)](this),this[p(0x13f)]=this[p(0x11f)][p(0x10e)](this),this['_above']['addEventListener']('mousedown',c=>this[p(0x131)](c)),this[p(0x11b)]=new ResizeObserver(()=>{this['_reSize']();});}['ready'](){this['_resizeObserver']['observe'](this);}[o(0x129)](){const q=o,c=this['_outerDiv'][q(0x127)]();this[q(0x133)]=c[q(0x123)]/this[q(0x11e)],this[q(0x11d)]=c[q(0x105)]/this[q(0x13b)],this[q(0x121)]['style']['scale']=this['_minatureScaleX']+'\x20'+this[q(0x11d)];}async['_reRender'](){const r=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.[r(0x118)];this['_innerShadow']['adoptedStyleSheets']=[...c[r(0x13a)]['element']['shadowRoot'][r(0x10d)]];const d=c['designerPixelSize'];this[r(0x11e)]=d[r(0x123)],this['_maxY']=d['height'];const e=await this['_instanceServiceContainer']['designerCanvas'][r(0x12a)][r(0x110)]['provideMiniatureView'](c);this[r(0x119)]['replaceChildren'](e),this[r(0x129)](),this['_reDrawRect'](),this['_reRenderFlag']=![];}}['_reDrawRect'](){const s=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c[s(0x10f)],e=c['zoomFactor'];this['_viewRect'][s(0x107)][s(0x13d)]=-d['x']/this['_maxX']*0x64+'%',this[s(0x126)][s(0x107)]['top']=-d['y']/this['_maxY']*0x64+'%',this['_viewRect'][s(0x107)][s(0x123)]=c[s(0x138)]/e/this[s(0x11e)]*0x64+'%',this[s(0x126)][s(0x107)][s(0x105)]=c['clientHeight']/e/this['_maxY']*0x64+'%';}[o(0x131)](c){const t=o;if(!this[t(0x115)])return;this[t(0x114)]=!![],this[t(0x124)](c),window['addEventListener'](t(0x108),this['_boundMouseMove']),window[t(0x130)]('mouseup',this['_boundMouseUp']),c['preventDefault']();}[o(0x134)](c){const u=o;if(!this['_isDragging'])return;this[u(0x124)](c),c[u(0x141)]();}['_onMouseUp'](c){const v=o;this['_isDragging']=![],window['removeEventListener']('mousemove',this['_boundMouseMove']),window[v(0x13e)]('mouseup',this['_boundMouseUp']);}[o(0x124)](c){const w=o,d=this['_instanceServiceContainer'][w(0x118)],f=d[w(0x10a)],g=this['_above']['getBoundingClientRect'](),h=c[w(0x139)]-g['left'],i=c['clientY']-g['top'],j=h/g[w(0x123)]*this[w(0x11e)],k=i/g[w(0x105)]*this['_maxY'],l=d['clientWidth']/f/0x2,m=d[w(0x113)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const x=o;this['_contentChangedHandler']?.['dispose'](),this[x(0x111)]?.[x(0x11c)](),this[x(0x115)]=c,this['_instanceServiceContainer']?(this[x(0x111)]=this['_instanceServiceContainer'][x(0x118)]['onZoomFactorChanged']['on'](()=>{const y=x;this[y(0x12b)]();}),this['_contentChangedHandler']=this[x(0x115)][x(0x125)]['on'](d=>{const z=x;this['_reRenderFlag']===![]&&(this[z(0x10c)]=!![],setTimeout(()=>this[z(0x13c)](),0x32));}),this[x(0x10c)]===![]&&(this[x(0x10c)]=!![],setTimeout(()=>this[x(0x13c)](),0x32))):this['_innerShadow'][x(0x112)]='';}}customElements[o(0x12d)]('node-projects-web-component-designer-miniature-view',MiniatureView);