const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x112))/0x1+parseInt(n(0x146))/0x2*(parseInt(n(0x139))/0x3)+parseInt(n(0x135))/0x4*(-parseInt(n(0x140))/0x5)+-parseInt(n(0x13c))/0x6+-parseInt(n(0x114))/0x7*(-parseInt(n(0x141))/0x8)+-parseInt(n(0x14a))/0x9*(parseInt(n(0x12e))/0xa)+-parseInt(n(0x136))/0xb*(-parseInt(n(0x124))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2a349));function b(c,d){c=c-0x10e;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x12b)]=css`
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
        }`;static [o(0x11e)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0x12f)];['_outerDiv'];['_above'];[o(0x11d)];['_contentChangedHandler'];[o(0x122)]=0x0;[o(0x12d)]=0x0;['_resizeObserver'];[o(0x13d)];['_zoomFactorChangedHandler'];['_viewRect'];['_minatureScaleX']=0x1;[o(0x143)]=0x1;[o(0x131)]=![];['_isDragging']=![];[o(0x144)];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x14c)](),this['_outerDiv']=this['_getDomElement']('outerDiv'),this[p(0x12f)]=this[p(0x123)](p(0x120)),this[p(0x13e)]=this['_getDomElement'](p(0x129)),this[p(0x111)]=this['_getDomElement']('above'),this[p(0x13d)]=this[p(0x12f)][p(0x134)]({'mode':'open'}),this[p(0x144)]=this['_onMouseMove'][p(0x11f)](this),this['_boundMouseUp']=this[p(0x148)]['bind'](this),this['_above'][p(0x12a)]('mousedown',c=>this['_onMouseDown'](c)),this[p(0x13f)]=new ResizeObserver(()=>{const q=p;this[q(0x147)]();});}['ready'](){this['_resizeObserver']['observe'](this);}['_reSize'](){const r=o,c=this[r(0x10f)]['getBoundingClientRect']();this[r(0x13b)]=c[r(0x118)]/this[r(0x122)],this['_minatureScaleY']=c['height']/this['_maxY'],this['_innerDiv']['style']['scale']=this['_minatureScaleX']+'\x20'+this['_minatureScaleY'];}async[o(0x14b)](){const s=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.[s(0x142)];this[s(0x13d)]['adoptedStyleSheets']=[...c['rootDesignItem']['element']['shadowRoot']['adoptedStyleSheets']];const d=c[s(0x127)];this[s(0x122)]=d['width'],this['_maxY']=d[s(0x11b)];const e=await this['_instanceServiceContainer']['designerCanvas']['serviceContainer']['miniatureViewService']['provideMiniatureView'](c);this['_innerShadow']['replaceChildren'](e),this['_reSize'](),this['_reDrawRect'](),this[s(0x131)]=![];}}[o(0x12c)](){const t=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c[t(0x121)],e=c['zoomFactor'];this[t(0x13e)][t(0x12b)]['left']=-d['x']/this['_maxX']*0x64+'%',this[t(0x13e)][t(0x12b)][t(0x11a)]=-d['y']/this['_maxY']*0x64+'%',this['_viewRect'][t(0x12b)]['width']=c['clientWidth']/e/this['_maxX']*0x64+'%',this['_viewRect'][t(0x12b)][t(0x11b)]=c['clientHeight']/e/this['_maxY']*0x64+'%';}[o(0x11c)](c){const u=o;if(!this[u(0x11d)])return;this['_isDragging']=!![],this[u(0x126)](c),window[u(0x12a)](u(0x145),this['_boundMouseMove']),window[u(0x12a)](u(0x116),this[u(0x133)]),c[u(0x113)]();}[o(0x115)](c){const v=o;if(!this[v(0x128)])return;this['_moveCanvasToMousePosition'](c),c['preventDefault']();}[o(0x148)](c){const w=o;this['_isDragging']=![],window['removeEventListener'](w(0x145),this[w(0x144)]),window[w(0x10e)](w(0x116),this['_boundMouseUp']);}[o(0x126)](c){const x=o,d=this['_instanceServiceContainer'][x(0x142)],f=d['zoomFactor'],g=this[x(0x111)][x(0x110)](),h=c['clientX']-g[x(0x138)],i=c[x(0x130)]-g['top'],j=h/g[x(0x118)]*this['_maxX'],k=i/g['height']*this[x(0x12d)],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const y=o;this[y(0x132)]?.[y(0x119)](),this[y(0x125)]?.['dispose'](),this[y(0x11d)]=c,this['_instanceServiceContainer']?(this[y(0x125)]=this[y(0x11d)][y(0x142)][y(0x137)]['on'](()=>{this['_reDrawRect']();}),this[y(0x132)]=this[y(0x11d)][y(0x13a)]['on'](d=>{const z=y;this['_reRenderFlag']===![]&&(this[z(0x131)]=!![],setTimeout(()=>this[z(0x14b)](),0x32));}),this[y(0x131)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[y(0x14b)](),0x32))):this[y(0x13d)][y(0x117)]='';}}function a(){const A=['_minatureScaleY','_boundMouseMove','mousemove','2oaVOBh','_reSize','_onMouseUp','define','140382ODygsz','_reRender','_restoreCachedInititalValues','removeEventListener','_outerDiv','getBoundingClientRect','_above','141450ZoFrjG','preventDefault','7tPTnfQ','_onMouseMove','mouseup','innerHTML','width','dispose','top','height','_onMouseDown','_instanceServiceContainer','template','bind','innerDiv','canvasOffset','_maxX','_getDomElement','1666716LpqbhE','_zoomFactorChangedHandler','_moveCanvasToMousePosition','designerPixelSize','_isDragging','viewRect','addEventListener','style','_reDrawRect','_maxY','120nEfVfh','_innerDiv','clientY','_reRenderFlag','_contentChangedHandler','_boundMouseUp','attachShadow','34844vkFdeH','11MwMzxm','onZoomFactorChanged','left','565671stBout','onContentChanged','_minatureScaleX','897432rHIHCs','_innerShadow','_viewRect','_resizeObserver','10DOYrLv','465144nbtWLo','designerCanvas'];a=function(){return A;};return a();}customElements[o(0x149)]('node-projects-web-component-designer-miniature-view',MiniatureView);