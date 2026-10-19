function b(c,d){c=c-0x147;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x167))/0x1+-parseInt(n(0x16a))/0x2*(-parseInt(n(0x16e))/0x3)+-parseInt(n(0x148))/0x4+-parseInt(n(0x14c))/0x5+-parseInt(n(0x159))/0x6*(parseInt(n(0x170))/0x7)+-parseInt(n(0x174))/0x8*(parseInt(n(0x15c))/0x9)+parseInt(n(0x154))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96217));function a(){const z=['rootDesignItem','_outerDiv','miniatureViewService','_restoreCachedInititalValues','_minatureScaleX','dispose','_minatureScaleY','height','clientX','384920cCrXqU','_onMouseMove','instanceServiceContainer','scale','2931970UfDccZ','_moveCanvasToMousePosition','zoomFactor','_isDragging','_reSize','_onMouseDown','preventDefault','viewRect','28373900loIvME','ready','mousedown','adoptedStyleSheets','provideMiniatureView','54678hZtVov','_reRender','shadowRoot','9esWnsU','onZoomFactorChanged','_boundMouseUp','designerPixelSize','clientY','_onMouseUp','_maxY','getBoundingClientRect','addEventListener','_reDrawRect','outerDiv','785470FJyJaf','_above','_maxX','878jXstjU','clientWidth','_zoomFactorChangedHandler','_viewRect','5505ouhpNK','attachShadow','406bitXEk','_innerShadow','designerCanvas','above','8250976eDpylm','node-projects-web-component-designer-miniature-view','_resizeObserver','_instanceServiceContainer','canvasOffset','_reRenderFlag','_boundMouseMove','_getDomElement','_contentChangedHandler'];a=function(){return z;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class MiniatureView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;['_innerDiv'];[o(0x17e)];[o(0x168)];['_instanceServiceContainer'];[o(0x17c)];[o(0x169)]=0x0;['_maxY']=0x0;[o(0x176)];[o(0x171)];[o(0x16c)];[o(0x16d)];[o(0x181)]=0x1;['_minatureScaleY']=0x1;[o(0x179)]=![];['_isDragging']=![];[o(0x17a)];[o(0x15e)];constructor(){const p=o;super(),this[p(0x180)](),this[p(0x17e)]=this[p(0x17b)](p(0x166)),this['_innerDiv']=this[p(0x17b)]('innerDiv'),this[p(0x16d)]=this[p(0x17b)](p(0x153)),this['_above']=this[p(0x17b)](p(0x173)),this[p(0x171)]=this['_innerDiv'][p(0x16f)]({'mode':'open'}),this['_boundMouseMove']=this[p(0x149)]['bind'](this),this[p(0x15e)]=this[p(0x161)]['bind'](this),this[p(0x168)][p(0x164)](p(0x156),c=>this[p(0x151)](c)),this['_resizeObserver']=new ResizeObserver(()=>{this['_reSize']();});}[o(0x155)](){const q=o;this[q(0x176)]['observe'](this);}[o(0x150)](){const r=o,c=this['_outerDiv'][r(0x163)]();this['_minatureScaleX']=c['width']/this[r(0x169)],this['_minatureScaleY']=c[r(0x184)]/this[r(0x162)],this['_innerDiv']['style'][r(0x14b)]=this[r(0x181)]+'\x20'+this[r(0x183)];}async['_reRender'](){const s=o;if(this['_instanceServiceContainer']){const c=this['_instanceServiceContainer']?.['designerCanvas'];this[s(0x171)]['adoptedStyleSheets']=[...c[s(0x17d)]['element'][s(0x15b)][s(0x157)]];const d=c[s(0x15f)];this['_maxX']=d['width'],this[s(0x162)]=d['height'];const e=await this['_instanceServiceContainer']['designerCanvas']['serviceContainer'][s(0x17f)][s(0x158)](c);this[s(0x171)]['replaceChildren'](e),this[s(0x150)](),this[s(0x165)](),this[s(0x179)]=![];}}[o(0x165)](){const t=o,c=this['_instanceServiceContainer']?.[t(0x172)],d=c['canvasOffset'],e=c['zoomFactor'];this[t(0x16d)]['style']['left']=-d['x']/this['_maxX']*0x64+'%',this[t(0x16d)]['style']['top']=-d['y']/this['_maxY']*0x64+'%',this['_viewRect']['style']['width']=c['clientWidth']/e/this[t(0x169)]*0x64+'%',this['_viewRect']['style'][t(0x184)]=c['clientHeight']/e/this['_maxY']*0x64+'%';}['_onMouseDown'](c){const u=o;if(!this[u(0x177)])return;this[u(0x14f)]=!![],this[u(0x14d)](c),window[u(0x164)]('mousemove',this['_boundMouseMove']),window[u(0x164)]('mouseup',this[u(0x15e)]),c[u(0x152)]();}[o(0x149)](c){const v=o;if(!this['_isDragging'])return;this[v(0x14d)](c),c[v(0x152)]();}['_onMouseUp'](c){this['_isDragging']=![],window['removeEventListener']('mousemove',this['_boundMouseMove']),window['removeEventListener']('mouseup',this['_boundMouseUp']);}[o(0x14d)](c){const w=o,d=this[w(0x177)][w(0x172)],f=d[w(0x14e)],g=this['_above']['getBoundingClientRect'](),h=c[w(0x147)]-g['left'],i=c[w(0x160)]-g['top'],j=h/g['width']*this[w(0x169)],k=i/g['height']*this[w(0x162)],l=d[w(0x16b)]/f/0x2,m=d['clientHeight']/f/0x2;d[w(0x178)]={'x':-(j-l),'y':-(k-m)};}set[o(0x14a)](c){const x=o;this[x(0x17c)]?.[x(0x182)](),this[x(0x16c)]?.['dispose'](),this['_instanceServiceContainer']=c,this['_instanceServiceContainer']?(this[x(0x16c)]=this[x(0x177)]['designerCanvas'][x(0x15d)]['on'](()=>{this['_reDrawRect']();}),this[x(0x17c)]=this[x(0x177)]['onContentChanged']['on'](d=>{const y=x;this[y(0x179)]===![]&&(this[y(0x179)]=!![],setTimeout(()=>this[y(0x15a)](),0x32));}),this['_reRenderFlag']===![]&&(this['_reRenderFlag']=!![],setTimeout(()=>this['_reRender'](),0x32))):this['_innerShadow']['innerHTML']='';}}customElements['define'](o(0x175),MiniatureView);