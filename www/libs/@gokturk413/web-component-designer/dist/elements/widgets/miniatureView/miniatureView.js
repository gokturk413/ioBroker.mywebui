const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x156))/0x1*(parseInt(n(0x147))/0x2)+parseInt(n(0x166))/0x3+parseInt(n(0x14f))/0x4+parseInt(n(0x12e))/0x5+parseInt(n(0x148))/0x6+parseInt(n(0x133))/0x7+-parseInt(n(0x140))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x307f6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x12c;const e=a();let f=e[c];return f;}function a(){const B=['addEventListener','_outerDiv','_onMouseMove','_instanceServiceContainer','adoptedStyleSheets','style','_onMouseDown','_innerShadow','1944816VxKPNr','onContentChanged','_reRenderFlag','open','ready','_reDrawRect','_moveCanvasToMousePosition','2nvvYsF','431496foicCr','canvasOffset','node-projects-web-component-designer-miniature-view','miniatureViewService','scale','_minatureScaleY','_isDragging','690960XhpDUX','width','_reSize','outerDiv','preventDefault','_contentChangedHandler','innerHTML','186713JAAiNU','mouseup','_getDomElement','_above','_maxY','_reRender','designerPixelSize','dispose','_viewRect','designerCanvas','left','_onMouseUp','_innerDiv','top','_minatureScaleX','_boundMouseUp','301152WZBGoJ','provideMiniatureView','_boundMouseMove','instanceServiceContainer','_restoreCachedInititalValues','height','113120yGIdcD','mousemove','_maxX','removeEventListener','observe','1825579xQJvSG','getBoundingClientRect','zoomFactor','bind','_zoomFactorChangedHandler'];a=function(){return B;};return a();}export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static [o(0x13d)]=css`
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
        </div>`;['_innerDiv'];[o(0x139)];['_above'];[o(0x13b)];[o(0x154)];[o(0x130)]=0x0;['_maxY']=0x0;['_resizeObserver'];[o(0x13f)];[o(0x137)];[o(0x15e)];[o(0x164)]=0x1;['_minatureScaleY']=0x1;[o(0x142)]=![];[o(0x14e)]=![];['_boundMouseMove'];['_boundMouseUp'];constructor(){const p=o;super(),this[p(0x12c)](),this['_outerDiv']=this['_getDomElement'](p(0x152)),this[p(0x162)]=this[p(0x158)]('innerDiv'),this['_viewRect']=this[p(0x158)]('viewRect'),this[p(0x159)]=this['_getDomElement']('above'),this['_innerShadow']=this[p(0x162)]['attachShadow']({'mode':p(0x143)}),this['_boundMouseMove']=this[p(0x13a)][p(0x136)](this),this[p(0x165)]=this[p(0x161)]['bind'](this),this[p(0x159)]['addEventListener']('mousedown',c=>this[p(0x13e)](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0x144)](){const q=o;this['_resizeObserver'][q(0x132)](this);}[o(0x151)](){const r=o,c=this['_outerDiv'][r(0x134)]();this['_minatureScaleX']=c[r(0x150)]/this[r(0x130)],this[r(0x14d)]=c[r(0x12d)]/this[r(0x15a)],this['_innerDiv']['style'][r(0x14c)]=this['_minatureScaleX']+'\x20'+this[r(0x14d)];}async[o(0x15b)](){const s=o;if(this['_instanceServiceContainer']){const c=this[s(0x13b)]?.['designerCanvas'];this[s(0x13f)][s(0x13c)]=[...c['rootDesignItem']['element']['shadowRoot']['adoptedStyleSheets']];const d=c[s(0x15c)];this[s(0x130)]=d[s(0x150)],this['_maxY']=d[s(0x12d)];const e=await this['_instanceServiceContainer'][s(0x15f)]['serviceContainer'][s(0x14b)][s(0x167)](c);this[s(0x13f)]['replaceChildren'](e),this['_reSize'](),this['_reDrawRect'](),this[s(0x142)]=![];}}[o(0x145)](){const t=o,c=this['_instanceServiceContainer']?.['designerCanvas'],d=c[t(0x149)],e=c['zoomFactor'];this[t(0x15e)][t(0x13d)][t(0x160)]=-d['x']/this['_maxX']*0x64+'%',this['_viewRect'][t(0x13d)][t(0x163)]=-d['y']/this[t(0x15a)]*0x64+'%',this[t(0x15e)]['style'][t(0x150)]=c['clientWidth']/e/this['_maxX']*0x64+'%',this['_viewRect']['style'][t(0x12d)]=c['clientHeight']/e/this[t(0x15a)]*0x64+'%';}[o(0x13e)](c){const u=o;if(!this[u(0x13b)])return;this[u(0x14e)]=!![],this['_moveCanvasToMousePosition'](c),window[u(0x138)](u(0x12f),this[u(0x168)]),window['addEventListener'](u(0x157),this['_boundMouseUp']),c[u(0x153)]();}['_onMouseMove'](c){const v=o;if(!this['_isDragging'])return;this[v(0x146)](c),c['preventDefault']();}[o(0x161)](c){const w=o;this['_isDragging']=![],window[w(0x131)]('mousemove',this['_boundMouseMove']),window['removeEventListener'](w(0x157),this[w(0x165)]);}['_moveCanvasToMousePosition'](c){const x=o,d=this[x(0x13b)][x(0x15f)],f=d[x(0x135)],g=this['_above'][x(0x134)](),h=c['clientX']-g[x(0x160)],i=c['clientY']-g['top'],j=h/g[x(0x150)]*this[x(0x130)],k=i/g[x(0x12d)]*this['_maxY'],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d[x(0x149)]={'x':-(j-l),'y':-(k-m)};}set[o(0x169)](c){const y=o;this['_contentChangedHandler']?.['dispose'](),this['_zoomFactorChangedHandler']?.[y(0x15d)](),this[y(0x13b)]=c,this['_instanceServiceContainer']?(this[y(0x137)]=this[y(0x13b)]['designerCanvas']['onZoomFactorChanged']['on'](()=>{const z=y;this[z(0x145)]();}),this[y(0x154)]=this['_instanceServiceContainer'][y(0x141)]['on'](d=>{const A=y;this[A(0x142)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[A(0x15b)](),0x32));}),this[y(0x142)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this[y(0x15b)](),0x32))):this[y(0x13f)][y(0x155)]='';}}customElements['define'](o(0x14a),MiniatureView);