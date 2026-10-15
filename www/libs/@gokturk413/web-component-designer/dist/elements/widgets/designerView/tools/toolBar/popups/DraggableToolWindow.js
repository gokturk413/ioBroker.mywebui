const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb2))/0x1+parseInt(h(0xac))/0x2*(-parseInt(h(0xbe))/0x3)+-parseInt(h(0xa7))/0x4+-parseInt(h(0xc8))/0x5+-parseInt(h(0xc7))/0x6*(-parseInt(h(0xc4))/0x7)+-parseInt(h(0xd4))/0x8*(-parseInt(h(0xaf))/0x9)+-parseInt(h(0xbf))/0xa*(-parseInt(h(0xca))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbf6eb));function a(){const r=['_dragOffsetX','innerWidth','_onPointerUp','adoptedStyleSheets','disconnectedCallback','observe','innerHTML','_dragging','pointerup','4080sJHLJJ','1001330evZLgK','title-text','clientY','createElement','_visibilityObserver','1183ZHmvuF','_dragOffsetY','pointermove','7176wXmVEU','1517300WNmQsh','cloneNode','11BLCsVX','_closeBtn','_close','_titleBar','content','releasePointerCapture','appendChild','isIntersecting','left','pointerdown','197608fWhNLx','min','getBoundingClientRect','body','addEventListener','_onPointerMove','1293048lEcLKb','target','setPointerCapture','100px','max','1606oDgKfJ','pointerId','shadowRoot','342NMtBjO','top','connectedCallback','1262014srTiHm','windowTemplate','style'];a=function(){return r;};return a();}function b(c,d){c=c-0xa7;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;get['windowContentStyle'](){return null;}[i(0xbc)]=![];[i(0xb5)]=0x0;['_dragOffsetY']=0x0;[i(0xcd)];['_titleText'];[i(0xcb)];['_contentArea'];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this['_getDomElement']('title-bar'),this['_titleText']=this['_getDomElement'](j(0xc0)),this['_closeBtn']=this['_getDomElement']('close-btn'),this['_contentArea']=this['_getDomElement']('window-content'),this['_titleText']['textContent']=this['windowTitle'];const d=this[j(0xb3)];if(typeof d==='string'){const f=document[j(0xc2)]('template');f[j(0xbb)]=d,this['_contentArea']['appendChild'](f[j(0xce)]['cloneNode'](!![]));}else this['_contentArea'][j(0xd0)](d['content'][j(0xc9)](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot'][j(0xb8)]=[...this[j(0xae)]['adoptedStyleSheets'],e]),this['_closeBtn']['onclick']=()=>this['_close'](),this['_titleBar'][j(0xd8)](j(0xd3),g=>this['_onPointerDown'](g));}[i(0xb1)](){const k=i;!this[k(0xb4)]['left']&&!this[k(0xb4)][k(0xb0)]&&(this[k(0xb4)]['left']=k(0xaa),this[k(0xb4)][k(0xb0)]='100px'),this['_designerCanvas']&&!this[k(0xc3)]&&(this[k(0xc3)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0xd1)])this['_close']();}),this[k(0xc3)][k(0xba)](this['_designerCanvas']));}[i(0xb9)](){const m=i;this[m(0xc3)]?.['disconnect'](),this[m(0xc3)]=null;}[i(0xcc)](){this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const n=i;if(c['button']!==0x0)return;if(c[n(0xa8)]===this[n(0xcb)])return;c['preventDefault'](),this['_dragging']=!![];const d=this[n(0xd6)]();this[n(0xb5)]=c['clientX']-d['left'],this[n(0xc5)]=c[n(0xc1)]-d['top'],this[n(0xcd)][n(0xa9)](c['pointerId']),this[n(0xcd)]['addEventListener'](n(0xc6),this['_onPointerMove']),this['_titleBar'][n(0xd8)](n(0xbd),this['_onPointerUp']);}['_onPointerMove']=c=>{const o=i;if(!this[o(0xbc)])return;let d=c['clientX']-this[o(0xb5)],f=c['clientY']-this[o(0xc5)];d=Math[o(0xab)](0x0,Math[o(0xd5)](d,window[o(0xb6)]-0x28)),f=Math[o(0xab)](0x0,Math['min'](f,window['innerHeight']-0x1e)),this[o(0xb4)][o(0xd2)]=d+'px',this[o(0xb4)][o(0xb0)]=f+'px';};['_onPointerUp']=c=>{const p=i;this[p(0xbc)]=![],this['_titleBar'][p(0xcf)](c[p(0xad)]),this[p(0xcd)]['removeEventListener']('pointermove',this[p(0xd9)]),this['_titleBar']['removeEventListener'](p(0xbd),this[p(0xb7)]);};static['showWindow'](c,d){const q=i;if(d){const e=d['getBoundingClientRect']();c['style'][q(0xd2)]=e['right']+0x8+'px',c[q(0xb4)][q(0xb0)]=e['top']+'px';}else c[q(0xb4)][q(0xd2)]=Math[q(0xab)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[q(0xb4)][q(0xb0)]='120px';document[q(0xd7)]['appendChild'](c);}}