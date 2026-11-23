const i=b;function a(){const s=['left','template','observe','close','connectedCallback','window-content','preventDefault','title-text','pointermove','showWindow','top','innerHTML','_designerCanvas','length','windowTitle','_dragOffsetX','max','_dragging','4867758OyiIgl','_titleText','setPointerCapture','_titleBar','pointerup','releasePointerCapture','min','windowTemplate','_visibilityObserver','1438556vxWrcQ','850406olljJa','_getDomElement','textContent','_dragOffsetY','2509592dsLuYm','disconnect','body','10YVfuaX','1912948TVJSlA','style','shadowRoot','target','1500870BFAjkF','clientY','4602059sUWkGQ','_contentArea','disconnectedCallback','_closeBtn','title-bar','_onPointerUp','addEventListener','dispatchEvent','adoptedStyleSheets'];a=function(){return s;};return a();}function b(c,d){c=c-0xc9;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xcb))/0x1+parseInt(h(0xca))/0x2+parseInt(h(0xd7))/0x3+parseInt(h(0xd3))/0x4*(-parseInt(h(0xd2))/0x5)+parseInt(h(0xf4))/0x6+parseInt(h(0xd9))/0x7+-parseInt(h(0xcf))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8a9a7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0xe3)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}[i(0xf3)]=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;['_titleBar'];['_titleText'];[i(0xdc)];[i(0xda)];[i(0xee)];['_visibilityObserver'];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this['_getDomElement'](j(0xdd)),this[j(0xf5)]=this['_getDomElement'](j(0xe9)),this[j(0xdc)]=this[j(0xcc)]('close-btn'),this['_contentArea']=this['_getDomElement'](j(0xe7)),this['_titleText'][j(0xcd)]=this[j(0xf0)];const d=this[j(0xfb)];if(typeof d==='string'){const f=document['createElement']('template');f[j(0xed)]=d,this['_contentArea']['appendChild'](f['content']['cloneNode'](!![]));}else this[j(0xda)]['appendChild'](d['content']['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this[j(0xd5)][j(0xe1)]=[...this['shadowRoot'][j(0xe1)],e]),this['_closeBtn']['onclick']=()=>this['_close'](),this['_titleBar']['addEventListener']('pointerdown',g=>this['_onPointerDown'](g));}[i(0xe6)](){const k=i;!this['style'][k(0xe2)]&&!this['style'][k(0xec)]&&(this[k(0xd4)][k(0xe2)]='100px',this['style'][k(0xec)]='100px'),this['_designerCanvas']&&!this[k(0xc9)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0xef)]-0x1]['isIntersecting'])this['_close']();}),this['_visibilityObserver'][k(0xe4)](this[k(0xee)]));}[i(0xdb)](){const m=i;this[m(0xc9)]?.[m(0xd0)](),this[m(0xc9)]=null;}['_close'](){const n=i;this[n(0xe0)](new CustomEvent(n(0xe5),{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const o=i;if(c['button']!==0x0)return;if(c[o(0xd6)]===this['_closeBtn'])return;c[o(0xe8)](),this[o(0xf3)]=!![];const d=this['getBoundingClientRect']();this[o(0xf1)]=c['clientX']-d[o(0xe2)],this['_dragOffsetY']=c[o(0xd8)]-d['top'],this['_titleBar'][o(0xf6)](c['pointerId']),this['_titleBar'][o(0xdf)]('pointermove',this['_onPointerMove']),this['_titleBar'][o(0xdf)](o(0xf8),this[o(0xde)]);}['_onPointerMove']=c=>{const p=i;if(!this[p(0xf3)])return;let d=c['clientX']-this[p(0xf1)],f=c['clientY']-this[p(0xce)];d=Math['max'](0x0,Math['min'](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math[p(0xfa)](f,window['innerHeight']-0x1e)),this['style']['left']=d+'px',this[p(0xd4)]['top']=f+'px';};['_onPointerUp']=c=>{const q=i;this['_dragging']=![],this['_titleBar'][q(0xf9)](c['pointerId']),this['_titleBar']['removeEventListener'](q(0xea),this['_onPointerMove']),this[q(0xf7)]['removeEventListener']('pointerup',this[q(0xde)]);};static[i(0xeb)](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c['style'][r(0xe2)]=e['right']+0x8+'px',c['style']['top']=e['top']+'px';}else c['style']['left']=Math[r(0xf2)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c['style'][r(0xec)]='120px';document[r(0xd1)]['appendChild'](c);}}