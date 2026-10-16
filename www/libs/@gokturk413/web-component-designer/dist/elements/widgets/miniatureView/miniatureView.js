const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1f2))/0x1*(-parseInt(n(0x208))/0x2)+-parseInt(n(0x220))/0x3*(parseInt(n(0x214))/0x4)+-parseInt(n(0x219))/0x5*(parseInt(n(0x1e6))/0x6)+parseInt(n(0x1e7))/0x7+-parseInt(n(0x202))/0x8*(-parseInt(n(0x20c))/0x9)+parseInt(n(0x20a))/0xa*(-parseInt(n(0x217))/0xb)+parseInt(n(0x1fd))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7855b));function b(c,d){c=c-0x1e2;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x20d)]=css`
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
        }`;static [o(0x1e2)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x1ec)];[o(0x201)];['_above'];['_instanceServiceContainer'];['_contentChangedHandler'];[o(0x20b)]=0x0;['_maxY']=0x0;[o(0x204)];[o(0x21d)];[o(0x1ea)];[o(0x200)];[o(0x207)]=0x1;[o(0x203)]=0x1;[o(0x213)]=![];[o(0x210)]=![];[o(0x212)];[o(0x1f9)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_outerDiv']=this['_getDomElement']('outerDiv'),this['_innerDiv']=this[p(0x1ff)](p(0x21c)),this[p(0x200)]=this['_getDomElement'](p(0x1ee)),this['_above']=this[p(0x1ff)](p(0x209)),this['_innerShadow']=this['_innerDiv']['attachShadow']({'mode':'open'}),this[p(0x212)]=this['_onMouseMove']['bind'](this),this[p(0x1f9)]=this[p(0x1f3)][p(0x211)](this),this[p(0x1e3)][p(0x206)]('mousedown',c=>this[p(0x1e5)](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0x1ef)](){const q=o;this[q(0x204)][q(0x1f6)](this);}[o(0x1f1)](){const r=o,c=this[r(0x201)][r(0x20f)]();this[r(0x207)]=c[r(0x1e4)]/this[r(0x20b)],this['_minatureScaleY']=c['height']/this[r(0x1fb)],this['_innerDiv'][r(0x20d)]['scale']=this[r(0x207)]+'\x20'+this[r(0x203)];}async['_reRender'](){const s=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.['designerCanvas'];this[s(0x21d)]['adoptedStyleSheets']=[...c[s(0x1eb)][s(0x1fe)]['shadowRoot']['adoptedStyleSheets']];const d=c['designerPixelSize'];this['_maxX']=d[s(0x1e4)],this[s(0x1fb)]=d[s(0x1f8)];const e=await this['_instanceServiceContainer'][s(0x1f4)]['serviceContainer'][s(0x1f0)]['provideMiniatureView'](c);this[s(0x21d)]['replaceChildren'](e),this[s(0x1f1)](),this['_reDrawRect'](),this['_reRenderFlag']=![];}}[o(0x218)](){const t=o,c=this[t(0x1fa)]?.[t(0x1f4)],d=c['canvasOffset'],e=c['zoomFactor'];this['_viewRect'][t(0x20d)][t(0x21a)]=-d['x']/this[t(0x20b)]*0x64+'%',this['_viewRect'][t(0x20d)]['top']=-d['y']/this['_maxY']*0x64+'%',this[t(0x200)]['style']['width']=c['clientWidth']/e/this[t(0x20b)]*0x64+'%',this[t(0x200)]['style']['height']=c['clientHeight']/e/this['_maxY']*0x64+'%';}['_onMouseDown'](c){const u=o;if(!this['_instanceServiceContainer'])return;this[u(0x210)]=!![],this[u(0x21b)](c),window[u(0x206)](u(0x20e),this['_boundMouseMove']),window[u(0x206)]('mouseup',this[u(0x1f9)]),c['preventDefault']();}['_onMouseMove'](c){const v=o;if(!this['_isDragging'])return;this[v(0x21b)](c),c[v(0x205)]();}['_onMouseUp'](c){const w=o;this['_isDragging']=![],window[w(0x1f7)]('mousemove',this[w(0x212)]),window['removeEventListener']('mouseup',this[w(0x1f9)]);}['_moveCanvasToMousePosition'](c){const x=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d['zoomFactor'],g=this[x(0x1e3)][x(0x20f)](),h=c['clientX']-g[x(0x21a)],i=c[x(0x1e8)]-g[x(0x216)],j=h/g['width']*this['_maxX'],k=i/g[x(0x1f8)]*this[x(0x1fb)],l=d[x(0x21e)]/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set[o(0x1fc)](c){const y=o;this['_contentChangedHandler']?.[y(0x1e9)](),this[y(0x1ea)]?.[y(0x1e9)](),this[y(0x1fa)]=c,this['_instanceServiceContainer']?(this['_zoomFactorChangedHandler']=this['_instanceServiceContainer']['designerCanvas'][y(0x21f)]['on'](()=>{this['_reDrawRect']();}),this[y(0x215)]=this[y(0x1fa)]['onContentChanged']['on'](d=>{const z=y;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[z(0x1f5)](),0x32));}),this[y(0x213)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[y(0x1f5)](),0x32))):this[y(0x21d)]['innerHTML']='';}}function a(){const A=['top','33jDmlMz','_reDrawRect','1053890ykaoAE','left','_moveCanvasToMousePosition','innerDiv','_innerShadow','clientWidth','onZoomFactorChanged','9327hXVzIy','template','_above','width','_onMouseDown','6YTomEj','40292BKwiWJ','clientY','dispose','_zoomFactorChangedHandler','rootDesignItem','_innerDiv','node-projects-web-component-designer-miniature-view','viewRect','ready','miniatureViewService','_reSize','1ErEYlb','_onMouseUp','designerCanvas','_reRender','observe','removeEventListener','height','_boundMouseUp','_instanceServiceContainer','_maxY','instanceServiceContainer','18083892BLvIRK','element','_getDomElement','_viewRect','_outerDiv','152UUSKhE','_minatureScaleY','_resizeObserver','preventDefault','addEventListener','_minatureScaleX','1363196xBPdSZ','above','3033890uyZSEA','_maxX','414rtELFQ','style','mousemove','getBoundingClientRect','_isDragging','bind','_boundMouseMove','_reRenderFlag','748tbNSrn','_contentChangedHandler'];a=function(){return A;};return a();}customElements['define'](o(0x1ed),MiniatureView);