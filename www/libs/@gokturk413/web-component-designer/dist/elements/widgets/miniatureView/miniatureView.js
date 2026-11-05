const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x9a))/0x1+parseInt(n(0x9f))/0x2+parseInt(n(0x8f))/0x3+-parseInt(n(0xb4))/0x4+-parseInt(n(0xb1))/0x5+parseInt(n(0x86))/0x6+-parseInt(n(0x88))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5f664));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x8a)]=html`
        <div id="outerDiv">
          <div id="innerDiv"></div> 
        </div>
        <div id="above">
          <div id="viewRect"></div>
        </div>`;[o(0xb0)];[o(0xa2)];[o(0xa6)];['_instanceServiceContainer'];['_contentChangedHandler'];['_maxX']=0x0;[o(0x9d)]=0x0;[o(0xa8)];['_innerShadow'];[o(0xb7)];['_viewRect'];['_minatureScaleX']=0x1;[o(0x99)]=0x1;['_reRenderFlag']=![];['_isDragging']=![];[o(0xb8)];[o(0xba)];constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_outerDiv']=this[p(0x90)](p(0xa7)),this[p(0xb0)]=this[p(0x90)](p(0xaa)),this[p(0xa1)]=this['_getDomElement'](p(0x93)),this[p(0xa6)]=this[p(0x90)](p(0xb6)),this['_innerShadow']=this[p(0xb0)]['attachShadow']({'mode':p(0xbb)}),this[p(0xb8)]=this[p(0x8e)]['bind'](this),this[p(0xba)]=this['_onMouseUp']['bind'](this),this['_above']['addEventListener']('mousedown',c=>this[p(0x9c)](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0x92)](){const q=o;this[q(0xa8)][q(0xa0)](this);}['_reSize'](){const r=o,c=this['_outerDiv']['getBoundingClientRect']();this['_minatureScaleX']=c[r(0xab)]/this[r(0x94)],this[r(0x99)]=c[r(0xbd)]/this[r(0x9d)],this['_innerDiv']['style'][r(0x8b)]=this[r(0x91)]+'\x20'+this[r(0x99)];}async['_reRender'](){const s=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.[s(0xb5)];this[s(0xae)][s(0x8d)]=[...c['rootDesignItem']['element']['shadowRoot']['adoptedStyleSheets']];const d=c['designerPixelSize'];this['_maxX']=d[s(0xab)],this['_maxY']=d[s(0xbd)];const e=await this['_instanceServiceContainer']['designerCanvas']['serviceContainer']['miniatureViewService'][s(0x87)](c);this[s(0xae)][s(0x96)](e),this[s(0x98)](),this[s(0xbe)](),this[s(0x89)]=![];}}['_reDrawRect'](){const t=o,c=this['_instanceServiceContainer']?.[t(0xb5)],d=c['canvasOffset'],e=c['zoomFactor'];this[t(0xa1)]['style']['left']=-d['x']/this['_maxX']*0x64+'%',this[t(0xa1)][t(0xac)]['top']=-d['y']/this[t(0x9d)]*0x64+'%',this[t(0xa1)]['style'][t(0xab)]=c[t(0xb9)]/e/this[t(0x94)]*0x64+'%',this[t(0xa1)]['style'][t(0xbd)]=c['clientHeight']/e/this['_maxY']*0x64+'%';}[o(0x9c)](c){const u=o;if(!this[u(0xb3)])return;this['_isDragging']=!![],this[u(0xbc)](c),window[u(0xb2)]('mousemove',this['_boundMouseMove']),window[u(0xb2)]('mouseup',this['_boundMouseUp']),c['preventDefault']();}[o(0x8e)](c){const v=o;if(!this[v(0x97)])return;this['_moveCanvasToMousePosition'](c),c[v(0x9e)]();}['_onMouseUp'](c){const w=o;this[w(0x97)]=![],window[w(0x8c)](w(0xa3),this['_boundMouseMove']),window['removeEventListener'](w(0x95),this['_boundMouseUp']);}[o(0xbc)](c){const x=o,d=this['_instanceServiceContainer']['designerCanvas'],f=d['zoomFactor'],g=this[x(0xa6)]['getBoundingClientRect'](),h=c[x(0xa4)]-g['left'],i=c[x(0x85)]-g['top'],j=h/g[x(0xab)]*this['_maxX'],k=i/g['height']*this['_maxY'],l=d['clientWidth']/f/0x2,m=d['clientHeight']/f/0x2;d['canvasOffset']={'x':-(j-l),'y':-(k-m)};}set['instanceServiceContainer'](c){const y=o;this[y(0x9b)]?.['dispose'](),this[y(0xb7)]?.[y(0xa5)](),this[y(0xb3)]=c,this['_instanceServiceContainer']?(this[y(0xb7)]=this['_instanceServiceContainer']['designerCanvas']['onZoomFactorChanged']['on'](()=>{const z=y;this[z(0xbe)]();}),this[y(0x9b)]=this['_instanceServiceContainer'][y(0xa9)]['on'](d=>{const A=y;this['_reRenderFlag']===![]&&(this[A(0x89)]=!![],setTimeout(()=>this['_reRender'](),0x32));}),this[y(0x89)]===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this[y(0xae)][y(0xaf)]='';}}customElements[o(0xad)]('node-projects-web-component-designer-miniature-view',MiniatureView);function b(c,d){c=c-0x85;const e=a();let f=e[c];return f;}function a(){const B=['1512594aADFHt','provideMiniatureView','4319182SgRVWK','_reRenderFlag','template','scale','removeEventListener','adoptedStyleSheets','_onMouseMove','489831BFmSJJ','_getDomElement','_minatureScaleX','ready','viewRect','_maxX','mouseup','replaceChildren','_isDragging','_reSize','_minatureScaleY','464387nLyMxb','_contentChangedHandler','_onMouseDown','_maxY','preventDefault','1525476OFvcca','observe','_viewRect','_outerDiv','mousemove','clientX','dispose','_above','outerDiv','_resizeObserver','onContentChanged','innerDiv','width','style','define','_innerShadow','innerHTML','_innerDiv','1043660SpzHqz','addEventListener','_instanceServiceContainer','1703948CTIinz','designerCanvas','above','_zoomFactorChangedHandler','_boundMouseMove','clientWidth','_boundMouseUp','open','_moveCanvasToMousePosition','height','_reDrawRect','clientY'];a=function(){return B;};return a();}