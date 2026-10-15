function b(c,d){c=c-0x172;const e=a();let f=e[c];return f;}function a(){const B=['_above','_contentChangedHandler','clientWidth','_reDrawRect','_reSize','_moveCanvasToMousePosition','_instanceServiceContainer','98kPlbXc','node-projects-web-component-designer-miniature-view','_maxX','489318WIouvB','1489YJdxHp','_onMouseDown','_boundMouseMove','15607889RmeyNL','2421190jENvhG','shadowRoot','mousemove','2676330piggoO','mousedown','preventDefault','_minatureScaleY','height','provideMiniatureView','_resizeObserver','_reRenderFlag','_maxY','getBoundingClientRect','viewRect','117DLzoCE','382744EYLALq','canvasOffset','clientHeight','356WdHsLO','_boundMouseUp','_innerShadow','_outerDiv','removeEventListener','onContentChanged','addEventListener','_onMouseMove','instanceServiceContainer','style','19200PZdItS','_innerDiv','bind','14qdGoCh','element','_minatureScaleX','scale','attachShadow','_isDragging','_getDomElement','width','_reRender','_viewRect','designerCanvas','top','above'];a=function(){return B;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x185))/0x1*(parseInt(n(0x181))/0x2)+-parseInt(n(0x1a5))/0x3*(-parseInt(n(0x19b))/0x4)+parseInt(n(0x18c))/0x5+parseInt(n(0x184))/0x6*(-parseInt(n(0x1a8))/0x7)+-parseInt(n(0x198))/0x8*(-parseInt(n(0x197))/0x9)+parseInt(n(0x189))/0xa+-parseInt(n(0x188))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4ca7a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_innerDiv'];[o(0x19e)];[o(0x17a)];['_instanceServiceContainer'];[o(0x17b)];[o(0x183)]=0x0;[o(0x194)]=0x0;[o(0x192)];['_innerShadow'];['_zoomFactorChangedHandler'];['_viewRect'];[o(0x1aa)]=0x1;[o(0x18f)]=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0x187)];['_boundMouseUp'];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x19e)]=this[p(0x173)]('outerDiv'),this[p(0x1a6)]=this['_getDomElement']('innerDiv'),this[p(0x176)]=this['_getDomElement'](p(0x196)),this['_above']=this[p(0x173)](p(0x179)),this[p(0x19d)]=this['_innerDiv'][p(0x1ac)]({'mode':'open'}),this[p(0x187)]=this[p(0x1a2)][p(0x1a7)](this),this['_boundMouseUp']=this['_onMouseUp'][p(0x1a7)](this),this['_above'][p(0x1a1)](p(0x18d),c=>this[p(0x186)](c)),this['_resizeObserver']=new ResizeObserver(()=>{const q=p;this[q(0x17e)]();});}['ready'](){this['_resizeObserver']['observe'](this);}['_reSize'](){const r=o,c=this['_outerDiv'][r(0x195)]();this[r(0x1aa)]=c[r(0x174)]/this['_maxX'],this[r(0x18f)]=c[r(0x190)]/this['_maxY'],this['_innerDiv']['style'][r(0x1ab)]=this[r(0x1aa)]+'\x20'+this[r(0x18f)];}async['_reRender'](){const s=o;if(this[s(0x180)]){const c=this['_instanceServiceContainer']?.[s(0x177)];this['_innerShadow']['adoptedStyleSheets']=[...c['rootDesignItem'][s(0x1a9)][s(0x18a)]['adoptedStyleSheets']];const d=c['designerPixelSize'];this[s(0x183)]=d[s(0x174)],this['_maxY']=d[s(0x190)];const e=await this['_instanceServiceContainer'][s(0x177)]['serviceContainer']['miniatureViewService'][s(0x191)](c);this[s(0x19d)]['replaceChildren'](e),this[s(0x17e)](),this['_reDrawRect'](),this[s(0x193)]=![];}}['_reDrawRect'](){const t=o,c=this[t(0x180)]?.[t(0x177)],d=c[t(0x199)],e=c['zoomFactor'];this[t(0x176)][t(0x1a4)]['left']=-d['x']/this[t(0x183)]*0x64+'%',this['_viewRect'][t(0x1a4)][t(0x178)]=-d['y']/this[t(0x194)]*0x64+'%',this['_viewRect'][t(0x1a4)]['width']=c[t(0x17c)]/e/this[t(0x183)]*0x64+'%',this[t(0x176)]['style'][t(0x190)]=c[t(0x19a)]/e/this[t(0x194)]*0x64+'%';}[o(0x186)](c){const u=o;if(!this[u(0x180)])return;this[u(0x172)]=!![],this[u(0x17f)](c),window[u(0x1a1)](u(0x18b),this['_boundMouseMove']),window['addEventListener']('mouseup',this[u(0x19c)]),c['preventDefault']();}['_onMouseMove'](c){const v=o;if(!this['_isDragging'])return;this['_moveCanvasToMousePosition'](c),c[v(0x18e)]();}['_onMouseUp'](c){const w=o;this['_isDragging']=![],window[w(0x19f)](w(0x18b),this['_boundMouseMove']),window['removeEventListener']('mouseup',this[w(0x19c)]);}['_moveCanvasToMousePosition'](c){const x=o,d=this['_instanceServiceContainer'][x(0x177)],f=d['zoomFactor'],g=this['_above']['getBoundingClientRect'](),h=c['clientX']-g['left'],i=c['clientY']-g[x(0x178)],j=h/g[x(0x174)]*this[x(0x183)],k=i/g['height']*this[x(0x194)],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d[x(0x199)]={'x':-(j-l),'y':-(k-m)};}set[o(0x1a3)](c){const y=o;this[y(0x17b)]?.['dispose'](),this['_zoomFactorChangedHandler']?.['dispose'](),this[y(0x180)]=c,this[y(0x180)]?(this['_zoomFactorChangedHandler']=this[y(0x180)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const z=y;this[z(0x17d)]();}),this[y(0x17b)]=this['_instanceServiceContainer'][y(0x1a0)]['on'](d=>{const A=y;this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[A(0x175)](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[y(0x19d)]['innerHTML']='';}}customElements['define'](o(0x182),MiniatureView);