const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x140))/0x1+parseInt(h(0x13a))/0x2+parseInt(h(0x142))/0x3*(parseInt(h(0x13f))/0x4)+parseInt(h(0x13b))/0x5+-parseInt(h(0x119))/0x6+parseInt(h(0x112))/0x7*(-parseInt(h(0x12b))/0x8)+-parseInt(h(0x136))/0x9*(parseInt(h(0x126))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xddcf6));function a(){const r=['_designerCanvas','_visibilityObserver','_getDomElement','100px','content','textContent','appendChild','1139730hmeCUm','removeEventListener','body','_onPointerUp','pointerup','120UvRrUR','_onPointerDown','top','target','cloneNode','_dragOffsetX','clientY','min','title-bar','_contentArea','innerWidth','27CxavVf','releasePointerCapture','shadowRoot','close-btn','2777232gVRhwz','6439975McBxuD','style','_closeBtn','button','4cNOmYI','779113FvOPzV','window-content','1570218WEfAAs','clientX','disconnect','_onPointerMove','left','title-text','_titleBar','456099RrRzwg','observe','_titleText','pointermove','setPointerCapture','_dragOffsetY','_close','10507932LCuTxv','_dragging','pointerId','onclick','windowContentStyle','windowTemplate'];a=function(){return r;};return a();}function b(c,d){c=c-0x110;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;get[i(0x11d)](){return null;}['_dragging']=![];[i(0x130)]=0x0;['_dragOffsetY']=0x0;['_titleBar'];[i(0x114)];[i(0x13d)];['_contentArea'];[i(0x11f)];['_visibilityObserver'];constructor(c){const j=i;super(),this['_designerCanvas']=c,this[j(0x111)]=this[j(0x121)](j(0x133)),this[j(0x114)]=this['_getDomElement'](j(0x110)),this[j(0x13d)]=this['_getDomElement'](j(0x139)),this[j(0x134)]=this['_getDomElement'](j(0x141)),this['_titleText'][j(0x124)]=this['windowTitle'];const d=this[j(0x11e)];if(typeof d==='string'){const f=document['createElement']('template');f['innerHTML']=d,this['_contentArea'][j(0x125)](f['content'][j(0x12f)](!![]));}else this[j(0x134)][j(0x125)](d[j(0x123)][j(0x12f)](!![]));const e=this['windowContentStyle'];e&&(this[j(0x138)]['adoptedStyleSheets']=[...this[j(0x138)]['adoptedStyleSheets'],e]),this['_closeBtn'][j(0x11c)]=()=>this[j(0x118)](),this[j(0x111)]['addEventListener']('pointerdown',g=>this[j(0x12c)](g));}['connectedCallback'](){const k=i;!this['style']['left']&&!this['style']['top']&&(this[k(0x13c)][k(0x146)]=k(0x122),this['style'][k(0x12d)]=k(0x122)),this['_designerCanvas']&&!this['_visibilityObserver']&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1]['isIntersecting'])this[l(0x118)]();}),this[k(0x120)][k(0x113)](this[k(0x11f)]));}['disconnectedCallback'](){const m=i;this[m(0x120)]?.[m(0x144)](),this[m(0x120)]=null;}[i(0x118)](){this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0x12c)](c){const n=i;if(c[n(0x13e)]!==0x0)return;if(c[n(0x12e)]===this[n(0x13d)])return;c['preventDefault'](),this['_dragging']=!![];const d=this['getBoundingClientRect']();this['_dragOffsetX']=c[n(0x143)]-d[n(0x146)],this['_dragOffsetY']=c['clientY']-d['top'],this['_titleBar'][n(0x116)](c[n(0x11b)]),this['_titleBar']['addEventListener']('pointermove',this['_onPointerMove']),this['_titleBar']['addEventListener']('pointerup',this['_onPointerUp']);}[i(0x145)]=c=>{const o=i;if(!this[o(0x11a)])return;let d=c[o(0x143)]-this['_dragOffsetX'],f=c[o(0x131)]-this[o(0x117)];d=Math['max'](0x0,Math['min'](d,window[o(0x135)]-0x28)),f=Math['max'](0x0,Math[o(0x132)](f,window['innerHeight']-0x1e)),this['style'][o(0x146)]=d+'px',this['style'][o(0x12d)]=f+'px';};['_onPointerUp']=c=>{const p=i;this[p(0x11a)]=![],this[p(0x111)][p(0x137)](c['pointerId']),this['_titleBar'][p(0x127)](p(0x115),this[p(0x145)]),this[p(0x111)]['removeEventListener'](p(0x12a),this[p(0x129)]);};static['showWindow'](c,d){const q=i;if(d){const e=d['getBoundingClientRect']();c['style'][q(0x146)]=e['right']+0x8+'px',c[q(0x13c)][q(0x12d)]=e[q(0x12d)]+'px';}else c['style']['left']=Math['max'](0x0,(window[q(0x135)]-0x104)/0x2)+'px',c['style'][q(0x12d)]='120px';document[q(0x128)]['appendChild'](c);}}