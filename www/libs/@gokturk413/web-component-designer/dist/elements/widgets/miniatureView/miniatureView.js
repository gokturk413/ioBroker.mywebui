const o=b;function a(){const C=['2151359ddmuiy','_innerShadow','bind','getBoundingClientRect','dispose','_reDrawRect','miniatureViewService','_reRenderFlag','_isDragging','_onMouseUp','3901810qPJLvn','_outerDiv','element','_minatureScaleY','rootDesignItem','canvasOffset','designerPixelSize','_moveCanvasToMousePosition','2013pUgXNm','2120676WmNegR','_innerDiv','_maxY','12XVxufG','_viewRect','3978BkHANT','addEventListener','style','1355tMIYIA','serviceContainer','27998pxTGou','_above','_onMouseMove','_resizeObserver','1IppeFX','_zoomFactorChangedHandler','mouseup','_reSize','top','adoptedStyleSheets','observe','template','_minatureScaleX','_instanceServiceContainer','_contentChangedHandler','viewRect','_boundMouseMove','_boundMouseUp','_maxX','width','_restoreCachedInititalValues','onZoomFactorChanged','mousemove','provideMiniatureView','_reRender','_onMouseDown','clientWidth','outerDiv','define','1816uQUREI','scale','89004HKQyQp','3064bSQBbo','node-projects-web-component-designer-miniature-view','clientY','height','designerCanvas','clientHeight'];a=function(){return C;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x20d))/0x1*(-parseInt(n(0x209))/0x2)+-parseInt(n(0x1ff))/0x3+parseInt(n(0x1e3))/0x4*(parseInt(n(0x207))/0x5)+-parseInt(n(0x202))/0x6*(parseInt(n(0x1ec))/0x7)+-parseInt(n(0x1e6))/0x8*(parseInt(n(0x204))/0x9)+parseInt(n(0x1f6))/0xa+parseInt(n(0x1fe))/0xb*(parseInt(n(0x1e5))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5946b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x206)]=css`
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
        </div>`;[o(0x200)];['_outerDiv'];['_above'];['_instanceServiceContainer'];[o(0x1d4)];[o(0x1d8)]=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x1ed)];['_zoomFactorChangedHandler'];[o(0x203)];[o(0x1d2)]=0x1;[o(0x1f9)]=0x1;[o(0x1f3)]=![];[o(0x1f4)]=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x1da)](),this[p(0x1f7)]=this['_getDomElement'](p(0x1e1)),this[p(0x200)]=this['_getDomElement']('innerDiv'),this[p(0x203)]=this['_getDomElement'](p(0x1d5)),this[p(0x20a)]=this['_getDomElement']('above'),this['_innerShadow']=this[p(0x200)]['attachShadow']({'mode':'open'}),this['_boundMouseMove']=this[p(0x20b)]['bind'](this),this[p(0x1d7)]=this[p(0x1f5)][p(0x1ee)](this),this[p(0x20a)][p(0x205)]('mousedown',c=>this['_onMouseDown'](c)),this[p(0x20c)]=new ResizeObserver(()=>{const q=p;this[q(0x1cd)]();});}['ready'](){const r=o;this['_resizeObserver'][r(0x1d0)](this);}[o(0x1cd)](){const s=o,c=this[s(0x1f7)][s(0x1ef)]();this['_minatureScaleX']=c[s(0x1d9)]/this['_maxX'],this[s(0x1f9)]=c[s(0x1e9)]/this[s(0x201)],this['_innerDiv'][s(0x206)][s(0x1e4)]=this[s(0x1d2)]+'\x20'+this[s(0x1f9)];}async[o(0x1de)](){const t=o;if(this['_instanceServiceContainer']){const c=this[t(0x1d3)]?.['designerCanvas'];this['_innerShadow']['adoptedStyleSheets']=[...c[t(0x1fa)][t(0x1f8)]['shadowRoot'][t(0x1cf)]];const d=c[t(0x1fc)];this['_maxX']=d['width'],this['_maxY']=d['height'];const e=await this[t(0x1d3)]['designerCanvas'][t(0x208)][t(0x1f2)][t(0x1dd)](c);this[t(0x1ed)]['replaceChildren'](e),this['_reSize'](),this['_reDrawRect'](),this[t(0x1f3)]=![];}}[o(0x1f1)](){const u=o,c=this[u(0x1d3)]?.['designerCanvas'],d=c['canvasOffset'],e=c['zoomFactor'];this['_viewRect']['style']['left']=-d['x']/this['_maxX']*0x64+'%',this['_viewRect']['style'][u(0x1ce)]=-d['y']/this['_maxY']*0x64+'%',this[u(0x203)][u(0x206)][u(0x1d9)]=c[u(0x1e0)]/e/this[u(0x1d8)]*0x64+'%',this['_viewRect']['style']['height']=c[u(0x1eb)]/e/this['_maxY']*0x64+'%';}[o(0x1df)](c){const v=o;if(!this['_instanceServiceContainer'])return;this['_isDragging']=!![],this[v(0x1fd)](c),window[v(0x205)](v(0x1dc),this['_boundMouseMove']),window[v(0x205)](v(0x1cc),this['_boundMouseUp']),c['preventDefault']();}['_onMouseMove'](c){const w=o;if(!this[w(0x1f4)])return;this[w(0x1fd)](c),c['preventDefault']();}['_onMouseUp'](c){const x=o;this[x(0x1f4)]=![],window['removeEventListener'](x(0x1dc),this[x(0x1d6)]),window['removeEventListener']('mouseup',this['_boundMouseUp']);}[o(0x1fd)](c){const y=o,d=this[y(0x1d3)]['designerCanvas'],f=d['zoomFactor'],g=this['_above'][y(0x1ef)](),h=c['clientX']-g['left'],i=c[y(0x1e8)]-g['top'],j=h/g[y(0x1d9)]*this['_maxX'],k=i/g['height']*this[y(0x201)],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d[y(0x1fb)]={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const z=o;this['_contentChangedHandler']?.[z(0x1f0)](),this[z(0x20e)]?.[z(0x1f0)](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this[z(0x20e)]=this[z(0x1d3)][z(0x1ea)][z(0x1db)]['on'](()=>{const A=z;this[A(0x1f1)]();}),this[z(0x1d4)]=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const B=z;this[B(0x1f3)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow']['innerHTML']='';}}customElements[o(0x1e2)](o(0x1e7),MiniatureView);