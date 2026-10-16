function a(){const B=['height','canvasOffset','left','_reRender','addEventListener','_boundMouseMove','_maxX','_getDomElement','899045NdIfAz','_resizeObserver','_innerShadow','element','above','_minatureScaleY','781676gHFwPU','ready','_instanceServiceContainer','style','_moveCanvasToMousePosition','removeEventListener','_isDragging','define','scale','2979135svXzZn','_reDrawRect','383585XrOhKx','_viewRect','_innerDiv','clientX','_onMouseDown','mousedown','miniatureViewService','designerCanvas','_reRenderFlag','observe','_onMouseUp','viewRect','_boundMouseUp','mouseup','getBoundingClientRect','_restoreCachedInititalValues','rootDesignItem','clientHeight','_minatureScaleX','width','5400738xsdtsT','_contentChangedHandler','_maxY','designerPixelSize','preventDefault','2403742xRwCTZ','4EIBCxu','_above','_reSize','_zoomFactorChangedHandler','6108856MODtIK','template','node-projects-web-component-designer-miniature-view','_outerDiv','open','innerDiv','clientY','zoomFactor'];a=function(){return B;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1f9))/0x1+-parseInt(n(0x21d))/0x2+parseInt(n(0x202))/0x3*(parseInt(n(0x21e))/0x4)+-parseInt(n(0x204))/0x5+parseInt(n(0x218))/0x6+parseInt(n(0x1f3))/0x7+parseInt(n(0x222))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb0fd2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1e5;const e=a();let f=e[c];return f;}export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x223)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x206)];[o(0x1e6)];['_above'];[o(0x1fb)];[o(0x219)];['_maxX']=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x1f5)];[o(0x221)];[o(0x205)];[o(0x216)]=0x1;['_minatureScaleY']=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0x1f0)];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x213)](),this['_outerDiv']=this[p(0x1f2)]('outerDiv'),this['_innerDiv']=this['_getDomElement'](p(0x1e8)),this[p(0x205)]=this['_getDomElement'](p(0x20f)),this[p(0x21f)]=this['_getDomElement'](p(0x1f7)),this[p(0x1f5)]=this[p(0x206)]['attachShadow']({'mode':p(0x1e7)}),this['_boundMouseMove']=this['_onMouseMove']['bind'](this),this['_boundMouseUp']=this[p(0x20e)]['bind'](this),this[p(0x21f)][p(0x1ef)](p(0x209),c=>this[p(0x208)](c)),this[p(0x1f4)]=new ResizeObserver(()=>{this['_reSize']();});}[o(0x1fa)](){const q=o;this[q(0x1f4)][q(0x20d)](this);}[o(0x220)](){const r=o,c=this['_outerDiv'][r(0x212)]();this[r(0x216)]=c[r(0x217)]/this[r(0x1f1)],this[r(0x1f8)]=c[r(0x1eb)]/this[r(0x21a)],this[r(0x206)][r(0x1fc)][r(0x201)]=this['_minatureScaleX']+'\x20'+this[r(0x1f8)];}async[o(0x1ee)](){const s=o;if(this[s(0x1fb)]){const c=this[s(0x1fb)]?.['designerCanvas'];this['_innerShadow']['adoptedStyleSheets']=[...c[s(0x214)][s(0x1f6)]['shadowRoot']['adoptedStyleSheets']];const d=c[s(0x21b)];this['_maxX']=d[s(0x217)],this['_maxY']=d['height'];const e=await this['_instanceServiceContainer']['designerCanvas']['serviceContainer'][s(0x20a)]['provideMiniatureView'](c);this[s(0x1f5)]['replaceChildren'](e),this['_reSize'](),this[s(0x203)](),this['_reRenderFlag']=![];}}[o(0x203)](){const t=o,c=this[t(0x1fb)]?.['designerCanvas'],d=c[t(0x1ec)],e=c['zoomFactor'];this[t(0x205)]['style']['left']=-d['x']/this['_maxX']*0x64+'%',this[t(0x205)][t(0x1fc)]['top']=-d['y']/this['_maxY']*0x64+'%',this[t(0x205)]['style'][t(0x217)]=c['clientWidth']/e/this['_maxX']*0x64+'%',this['_viewRect']['style'][t(0x1eb)]=c['clientHeight']/e/this[t(0x21a)]*0x64+'%';}[o(0x208)](c){const u=o;if(!this['_instanceServiceContainer'])return;this['_isDragging']=!![],this[u(0x1fd)](c),window['addEventListener']('mousemove',this[u(0x1f0)]),window['addEventListener']('mouseup',this[u(0x210)]),c[u(0x21c)]();}['_onMouseMove'](c){const v=o;if(!this['_isDragging'])return;this[v(0x1fd)](c),c['preventDefault']();}['_onMouseUp'](c){const w=o;this[w(0x1ff)]=![],window['removeEventListener']('mousemove',this['_boundMouseMove']),window[w(0x1fe)](w(0x211),this['_boundMouseUp']);}[o(0x1fd)](c){const x=o,d=this[x(0x1fb)][x(0x20b)],f=d[x(0x1ea)],g=this['_above'][x(0x212)](),h=c[x(0x207)]-g[x(0x1ed)],i=c[x(0x1e9)]-g['top'],j=h/g[x(0x217)]*this['_maxX'],k=i/g['height']*this['_maxY'],l=d['clientWidth']/f/0x2,m=d[x(0x215)]/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const y=o;this['_contentChangedHandler']?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this[y(0x1fb)]=c,this[y(0x1fb)]?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas']['onZoomFactorChanged']['on'](()=>{const z=y;this[z(0x203)]();}),this['_contentChangedHandler']=this[y(0x1fb)]['onContentChanged']['on'](d=>{const A=y;this[A(0x20c)]===![]&&(this[A(0x20c)]=!![],setTimeout(()=>this['_reRender'](),0x32));}),this[y(0x20c)]===![]&&(this[y(0x20c)]=!![],setTimeout(()=>this['_reRender'](),0x32))):this[y(0x1f5)]['innerHTML']='';}}customElements[o(0x200)](o(0x1e5),MiniatureView);