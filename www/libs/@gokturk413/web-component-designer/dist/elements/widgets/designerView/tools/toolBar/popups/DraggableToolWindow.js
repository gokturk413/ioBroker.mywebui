const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xc5))/0x1+-parseInt(h(0xc8))/0x2*(parseInt(h(0xd3))/0x3)+-parseInt(h(0xf7))/0x4*(-parseInt(h(0xe3))/0x5)+parseInt(h(0xf0))/0x6+parseInt(h(0xe4))/0x7+-parseInt(h(0xd0))/0x8*(parseInt(h(0xf4))/0x9)+-parseInt(h(0xd5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7be97));function a(){const s=['clientX','disconnectedCallback','112180ArAiNn','_close','_onPointerUp','1524gUZzlu','_designerCanvas','adoptedStyleSheets','template','appendChild','setPointerCapture','_onPointerMove','cloneNode','8enHzFw','100px','pointerup','1302lraTrg','clientY','2912100BojPgJ','max','_onPointerDown','removeEventListener','disconnect','_titleText','getBoundingClientRect','shadowRoot','windowContentStyle','style','innerWidth','min','_contentArea','_visibilityObserver','1192655DyQyBL','4911116AYMWve','_titleBar','pointermove','right','_dragOffsetY','button','createElement','title-text','showWindow','_dragOffsetX','innerHeight','windowTitle','3987762gFdkIP','120px','addEventListener','_getDomElement','7561503pMkjyR','length','observe','12IpFsQK','pointerId','innerHTML','left','preventDefault','_dragging','remove','top'];a=function(){return s;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xc1;const e=a();let f=e[c];return f;}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;get['windowContentStyle'](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;[i(0xe8)]=0x0;[i(0xe5)];['_titleText'];['_closeBtn'];[i(0xe1)];['_designerCanvas'];[i(0xe2)];constructor(c){const j=i;super(),this[j(0xc9)]=c,this['_titleBar']=this['_getDomElement']('title-bar'),this['_titleText']=this['_getDomElement'](j(0xeb)),this['_closeBtn']=this[j(0xf3)]('close-btn'),this[j(0xe1)]=this[j(0xf3)]('window-content'),this[j(0xda)]['textContent']=this[j(0xef)];const d=this['windowTemplate'];if(typeof d==='string'){const f=document[j(0xea)](j(0xcb));f[j(0xf9)]=d,this['_contentArea'][j(0xcc)](f['content'][j(0xcf)](!![]));}else this[j(0xe1)][j(0xcc)](d['content']['cloneNode'](!![]));const e=this[j(0xdd)];e&&(this[j(0xdc)]['adoptedStyleSheets']=[...this['shadowRoot'][j(0xca)],e]),this['_closeBtn']['onclick']=()=>this['_close'](),this[j(0xe5)]['addEventListener']('pointerdown',g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this['style'][k(0xfa)]&&!this[k(0xde)]['top']&&(this[k(0xde)][k(0xfa)]='100px',this['style'][k(0xc2)]=k(0xd1)),this['_designerCanvas']&&!this['_visibilityObserver']&&(this[k(0xe2)]=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0xf5)]-0x1]['isIntersecting'])this[l(0xc6)]();}),this['_visibilityObserver'][k(0xf6)](this[k(0xc9)]));}[i(0xc4)](){const m=i;this[m(0xe2)]?.[m(0xd9)](),this[m(0xe2)]=null;}['_close'](){const n=i;this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this[n(0xc1)]();}[i(0xd7)](c){const o=i;if(c[o(0xe9)]!==0x0)return;if(c['target']===this['_closeBtn'])return;c[o(0xfb)](),this[o(0xfc)]=!![];const d=this[o(0xdb)]();this['_dragOffsetX']=c[o(0xc3)]-d['left'],this['_dragOffsetY']=c[o(0xd4)]-d[o(0xc2)],this['_titleBar'][o(0xcd)](c[o(0xf8)]),this[o(0xe5)][o(0xf2)](o(0xe6),this[o(0xce)]),this['_titleBar']['addEventListener']('pointerup',this[o(0xc7)]);}['_onPointerMove']=c=>{const p=i;if(!this[p(0xfc)])return;let d=c[p(0xc3)]-this[p(0xed)],f=c[p(0xd4)]-this[p(0xe8)];d=Math['max'](0x0,Math[p(0xe0)](d,window[p(0xdf)]-0x28)),f=Math[p(0xd6)](0x0,Math[p(0xe0)](f,window[p(0xee)]-0x1e)),this[p(0xde)]['left']=d+'px',this['style']['top']=f+'px';};[i(0xc7)]=c=>{const q=i;this['_dragging']=![],this[q(0xe5)]['releasePointerCapture'](c['pointerId']),this['_titleBar']['removeEventListener'](q(0xe6),this['_onPointerMove']),this[q(0xe5)][q(0xd8)](q(0xd2),this[q(0xc7)]);};static[i(0xec)](c,d){const r=i;if(d){const e=d[r(0xdb)]();c['style'][r(0xfa)]=e[r(0xe7)]+0x8+'px',c[r(0xde)]['top']=e['top']+'px';}else c[r(0xde)][r(0xfa)]=Math[r(0xd6)](0x0,(window[r(0xdf)]-0x104)/0x2)+'px',c[r(0xde)][r(0xc2)]=r(0xf1);document['body']['appendChild'](c);}}