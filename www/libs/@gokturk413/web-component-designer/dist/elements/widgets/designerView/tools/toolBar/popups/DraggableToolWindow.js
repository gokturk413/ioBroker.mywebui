const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1a0))/0x1+-parseInt(h(0x1a5))/0x2+parseInt(h(0x1d1))/0x3*(-parseInt(h(0x1ad))/0x4)+-parseInt(h(0x19f))/0x5+-parseInt(h(0x1bc))/0x6*(-parseInt(h(0x1d5))/0x7)+-parseInt(h(0x1ca))/0x8*(parseInt(h(0x1c1))/0x9)+parseInt(h(0x1aa))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a82b));function b(c,d){c=c-0x19d;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1bd)]=css`
    :host {
      position: fixed;
      display: block;
      z-index: 9999;
      min-width: 200px;
      user-select: none;
      touch-action: none;
    }
    .window-frame {
      background: var(--wcd-color-surface-raised, #2c2c2c);
      border: 1px solid var(--wcd-color-border-strong, #111);
      border-radius: 4px;
      box-shadow: 0 4px 24px var(--wcd-tool-window-shadow-color, rgba(0,0,0,0.7));
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .title-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--wcd-color-surface, #1a1a1a);
      padding: 2px 5px;
      cursor: move;
      flex-shrink: 0;
      height: 18px;
      box-sizing: border-box;
    }
    .title-text {
      color: var(--wcd-color-text-muted, #ccc);
      font-size: 11px;
      font-family: sans-serif;
      font-weight: 500;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .close-btn {
      width: 14px;
      height: 14px;
      background: none;
      border: none;
      color: var(--wcd-color-text-muted, #888);
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .close-btn:hover {
      background: var(--wcd-tool-window-close-hover-background, #c0392b);
      color: var(--wcd-color-text, #fff);
    }
    .window-content {
      overflow: auto;
    }
  `;static ['template']=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get[i(0x1b5)](){return null;}['_dragging']=![];[i(0x1ac)]=0x0;[i(0x1ba)]=0x0;['_titleBar'];['_titleText'];['_closeBtn'];[i(0x1b0)];['_designerCanvas'];[i(0x1d0)];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this['_getDomElement'](j(0x1cf)),this['_titleText']=this[j(0x1c6)](j(0x1b8)),this['_closeBtn']=this[j(0x1c6)]('close-btn'),this[j(0x1b0)]=this[j(0x1c6)](j(0x1cc)),this[j(0x1d4)]['textContent']=this[j(0x1a2)];const d=this['windowTemplate'];if(typeof d===j(0x1cd)){const f=document[j(0x1a4)](j(0x1b4));f['innerHTML']=d,this['_contentArea']['appendChild'](f[j(0x1d2)][j(0x1bb)](!![]));}else this['_contentArea'][j(0x1be)](d[j(0x1d2)][j(0x1bb)](!![]));const e=this[j(0x1b5)];e&&(this['shadowRoot']['adoptedStyleSheets']=[...this[j(0x1ce)]['adoptedStyleSheets'],e]),this['_closeBtn']['onclick']=()=>this['_close'](),this[j(0x1c2)]['addEventListener']('pointerdown',g=>this[j(0x1b7)](g));}[i(0x1a9)](){const k=i;!this['style']['left']&&!this[k(0x1bd)][k(0x1bf)]&&(this[k(0x1bd)]['left']='100px',this[k(0x1bd)]['top']=k(0x1c5)),this[k(0x1ab)]&&!this['_visibilityObserver']&&(this[k(0x1d0)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0x1c3)])this[l(0x1af)]();}),this[k(0x1d0)][k(0x19e)](this[k(0x1ab)]));}['disconnectedCallback'](){const m=i;this[m(0x1d0)]?.['disconnect'](),this[m(0x1d0)]=null;}[i(0x1af)](){const n=i;this[n(0x1d6)](new CustomEvent(n(0x1b2),{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0x1b7)](c){const o=i;if(c['button']!==0x0)return;if(c[o(0x1a7)]===this['_closeBtn'])return;c['preventDefault'](),this[o(0x1a1)]=!![];const d=this[o(0x1c9)]();this['_dragOffsetX']=c['clientX']-d[o(0x1c7)],this[o(0x1ba)]=c[o(0x1a3)]-d[o(0x1bf)],this[o(0x1c2)]['setPointerCapture'](c[o(0x1c8)]),this[o(0x1c2)][o(0x1b3)](o(0x1cb),this[o(0x1a8)]),this['_titleBar']['addEventListener']('pointerup',this['_onPointerUp']);}['_onPointerMove']=c=>{const p=i;if(!this['_dragging'])return;let d=c['clientX']-this['_dragOffsetX'],f=c['clientY']-this[p(0x1ba)];d=Math[p(0x1b1)](0x0,Math['min'](d,window[p(0x1d3)]-0x28)),f=Math['max'](0x0,Math[p(0x1c4)](f,window['innerHeight']-0x1e)),this[p(0x1bd)]['left']=d+'px',this['style']['top']=f+'px';};[i(0x19d)]=c=>{const q=i;this[q(0x1a1)]=![],this[q(0x1c2)][q(0x1ae)](c[q(0x1c8)]),this[q(0x1c2)][q(0x1b9)](q(0x1cb),this['_onPointerMove']),this['_titleBar'][q(0x1b9)]('pointerup',this[q(0x19d)]);};static['showWindow'](c,d){const r=i;if(d){const e=d[r(0x1c9)]();c['style']['left']=e[r(0x1b6)]+0x8+'px',c['style'][r(0x1bf)]=e['top']+'px';}else c[r(0x1bd)]['left']=Math[r(0x1b1)](0x0,(window[r(0x1d3)]-0x104)/0x2)+'px',c[r(0x1bd)]['top']=r(0x1c0);document[r(0x1a6)][r(0x1be)](c);}}function a(){const s=['_getDomElement','left','pointerId','getBoundingClientRect','1424oHtUbq','pointermove','window-content','string','shadowRoot','title-bar','_visibilityObserver','1703631tgNLXB','content','innerWidth','_titleText','93282mhuoTW','dispatchEvent','_onPointerUp','observe','3477285yJKJZd','389763dpBNgH','_dragging','windowTitle','clientY','createElement','1433934uKWOzI','body','target','_onPointerMove','connectedCallback','30428050wdIDHG','_designerCanvas','_dragOffsetX','4NGPfXQ','releasePointerCapture','_close','_contentArea','max','close','addEventListener','template','windowContentStyle','right','_onPointerDown','title-text','removeEventListener','_dragOffsetY','cloneNode','156vwfNXi','style','appendChild','top','120px','29475bdwYNA','_titleBar','isIntersecting','min','100px'];a=function(){return s;};return a();}