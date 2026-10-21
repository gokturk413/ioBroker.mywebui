function a(){const B=['_getDomElement','1844712zNpngG','preventDefault','clientHeight','_isDragging','canvasOffset','_reRender','_boundMouseMove','_contentChangedHandler','top','8zSEulJ','addEventListener','attachShadow','mouseup','_resizeObserver','dispose','_innerShadow','_above','height','_reSize','_zoomFactorChangedHandler','_minatureScaleY','clientWidth','serviceContainer','above','zoomFactor','_onMouseDown','observe','_innerDiv','designerPixelSize','_outerDiv','_maxX','5209686ZBrDse','18331628xunGdB','6402305UPIEoj','_reRenderFlag','_onMouseUp','_viewRect','innerDiv','width','adoptedStyleSheets','_reDrawRect','innerHTML','_boundMouseUp','_minatureScaleX','bind','node-projects-web-component-designer-miniature-view','shadowRoot','element','_onMouseMove','4093428HeCDLF','viewRect','designerCanvas','_instanceServiceContainer','clientX','_maxY','1480938TMmksf','1974076FUgdzV','mousemove','open','mousedown','style'];a=function(){return B;};return a();}const o=b;function b(c,d){c=c-0x1a3;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1a6))/0x1+-parseInt(n(0x1ad))/0x2+-parseInt(n(0x1cc))/0x3+parseInt(n(0x1a7))/0x4+parseInt(n(0x1ce))/0x5+parseInt(n(0x1de))/0x6+-parseInt(n(0x1cd))/0x7*(-parseInt(n(0x1b6))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe44fe));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x1ab)]=css`
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
        </div>`;[o(0x1c8)];[o(0x1ca)];['_above'];[o(0x1a3)];['_contentChangedHandler'];['_maxX']=0x0;[o(0x1a5)]=0x0;[o(0x1ba)];[o(0x1bc)];['_zoomFactorChangedHandler'];[o(0x1d1)];[o(0x1d8)]=0x1;['_minatureScaleY']=0x1;[o(0x1cf)]=![];[o(0x1b0)]=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x1ca)]=this['_getDomElement']('outerDiv'),this['_innerDiv']=this['_getDomElement'](p(0x1d2)),this['_viewRect']=this[p(0x1ac)](p(0x1df)),this['_above']=this[p(0x1ac)](p(0x1c4)),this['_innerShadow']=this['_innerDiv'][p(0x1b8)]({'mode':p(0x1a9)}),this['_boundMouseMove']=this[p(0x1dd)][p(0x1d9)](this),this[p(0x1d7)]=this['_onMouseUp'][p(0x1d9)](this),this['_above']['addEventListener'](p(0x1aa),c=>this[p(0x1c6)](c)),this[p(0x1ba)]=new ResizeObserver(()=>{this['_reSize']();});}['ready'](){const q=o;this[q(0x1ba)][q(0x1c7)](this);}[o(0x1bf)](){const r=o,c=this['_outerDiv']['getBoundingClientRect']();this['_minatureScaleX']=c[r(0x1d3)]/this['_maxX'],this[r(0x1c1)]=c['height']/this[r(0x1a5)],this[r(0x1c8)][r(0x1ab)]['scale']=this['_minatureScaleX']+'\x20'+this['_minatureScaleY'];}async[o(0x1b2)](){const s=o;if(this[s(0x1a3)]){const c=this[s(0x1a3)]?.[s(0x1e0)];this['_innerShadow'][s(0x1d4)]=[...c['rootDesignItem'][s(0x1dc)][s(0x1db)][s(0x1d4)]];const d=c[s(0x1c9)];this['_maxX']=d[s(0x1d3)],this[s(0x1a5)]=d['height'];const e=await this['_instanceServiceContainer']['designerCanvas'][s(0x1c3)]['miniatureViewService']['provideMiniatureView'](c);this['_innerShadow']['replaceChildren'](e),this['_reSize'](),this[s(0x1d5)](),this[s(0x1cf)]=![];}}[o(0x1d5)](){const t=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c['canvasOffset'],e=c[t(0x1c5)];this[t(0x1d1)][t(0x1ab)]['left']=-d['x']/this[t(0x1cb)]*0x64+'%',this['_viewRect'][t(0x1ab)]['top']=-d['y']/this[t(0x1a5)]*0x64+'%',this[t(0x1d1)]['style'][t(0x1d3)]=c[t(0x1c2)]/e/this['_maxX']*0x64+'%',this[t(0x1d1)]['style']['height']=c[t(0x1af)]/e/this[t(0x1a5)]*0x64+'%';}['_onMouseDown'](c){const u=o;if(!this[u(0x1a3)])return;this[u(0x1b0)]=!![],this['_moveCanvasToMousePosition'](c),window['addEventListener']('mousemove',this[u(0x1b3)]),window[u(0x1b7)](u(0x1b9),this[u(0x1d7)]),c['preventDefault']();}[o(0x1dd)](c){const v=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[v(0x1ae)]();}[o(0x1d0)](c){const w=o;this['_isDragging']=![],window['removeEventListener'](w(0x1a8),this['_boundMouseMove']),window['removeEventListener']('mouseup',this[w(0x1d7)]);}['_moveCanvasToMousePosition'](c){const x=o,d=this[x(0x1a3)]['designerCanvas'],f=d['zoomFactor'],g=this[x(0x1bd)]['getBoundingClientRect'](),h=c[x(0x1a4)]-g['left'],i=c['clientY']-g[x(0x1b5)],j=h/g[x(0x1d3)]*this['_maxX'],k=i/g[x(0x1be)]*this[x(0x1a5)],l=d[x(0x1c2)]/f/0x2,m=d[x(0x1af)]/f/0x2;d[x(0x1b1)]={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const y=o;this[y(0x1b4)]?.['dispose'](),this[y(0x1c0)]?.[y(0x1bb)](),this[y(0x1a3)]=c,this[y(0x1a3)]?(this[y(0x1c0)]=this[y(0x1a3)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const z=y;this[z(0x1d5)]();}),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const A=y;this[A(0x1cf)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[A(0x1b2)](),0x32));}),this[y(0x1cf)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[y(0x1bc)][y(0x1d6)]='';}}customElements['define'](o(0x1da),MiniatureView);