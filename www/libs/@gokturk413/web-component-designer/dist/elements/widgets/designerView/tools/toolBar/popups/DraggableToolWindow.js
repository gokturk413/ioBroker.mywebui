function b(c,d){c=c-0x1a3;const e=a();let f=e[c];return f;}const i=b;function a(){const r=['_designerCanvas','338787swbJsg','_dragOffsetX','pointerup','string','_onPointerDown','6032982fsZfwy','right','close-btn','top','content','1455069tBcuPo','preventDefault','_onPointerUp','window-content','16iJEaTM','windowTitle','cloneNode','removeEventListener','innerWidth','windowTemplate','clientY','_closeBtn','close','clientX','style','_dragOffsetY','observe','max','shadowRoot','_visibilityObserver','adoptedStyleSheets','min','innerHeight','showWindow','left','windowContentStyle','pointerId','_close','3152743orwmUY','title-bar','100px','10fYVMUc','_dragging','body','_titleBar','60eCVHwq','appendChild','3oMwGTG','336276hNfLgV','remove','50YJNKhM','888168ggAnbA','676844EqmEwA','pointermove','_getDomElement','dispatchEvent','getBoundingClientRect','pointerdown'];a=function(){return r;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c8))/0x1+parseInt(h(0x1c9))/0x2*(-parseInt(h(0x1c4))/0x3)+parseInt(h(0x1c5))/0x4*(-parseInt(h(0x1be))/0x5)+parseInt(h(0x1d5))/0x6+-parseInt(h(0x1da))/0x7*(-parseInt(h(0x1a3))/0x8)+parseInt(h(0x1d0))/0x9*(parseInt(h(0x1c7))/0xa)+-parseInt(h(0x1bb))/0xb*(parseInt(h(0x1c2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x883a5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1ad)]=css`
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
  `;get['windowContentStyle'](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;['_titleBar'];['_titleText'];['_closeBtn'];['_contentArea'];['_designerCanvas'];[i(0x1b2)];constructor(c){const j=i;super(),this[j(0x1cf)]=c,this[j(0x1c1)]=this[j(0x1cb)](j(0x1bc)),this['_titleText']=this['_getDomElement']('title-text'),this[j(0x1aa)]=this['_getDomElement'](j(0x1d7)),this['_contentArea']=this['_getDomElement'](j(0x1dd)),this['_titleText']['textContent']=this[j(0x1a4)];const d=this[j(0x1a8)];if(typeof d===j(0x1d3)){const f=document['createElement']('template');f['innerHTML']=d,this['_contentArea'][j(0x1c3)](f['content']['cloneNode'](!![]));}else this['_contentArea']['appendChild'](d[j(0x1d9)][j(0x1a5)](!![]));const e=this[j(0x1b8)];e&&(this[j(0x1b1)]['adoptedStyleSheets']=[...this[j(0x1b1)][j(0x1b3)],e]),this[j(0x1aa)]['onclick']=()=>this[j(0x1ba)](),this['_titleBar']['addEventListener'](j(0x1ce),g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this['style'][k(0x1b7)]&&!this[k(0x1ad)]['top']&&(this['style'][k(0x1b7)]=k(0x1bd),this[k(0x1ad)][k(0x1d8)]='100px'),this[k(0x1cf)]&&!this[k(0x1b2)]&&(this[k(0x1b2)]=new IntersectionObserver(c=>{if(!c[c['length']-0x1]['isIntersecting'])this['_close']();}),this['_visibilityObserver'][k(0x1af)](this[k(0x1cf)]));}['disconnectedCallback'](){const l=i;this['_visibilityObserver']?.['disconnect'](),this[l(0x1b2)]=null;}['_close'](){const m=i;this[m(0x1cc)](new CustomEvent(m(0x1ab),{'bubbles':!![],'composed':!![]})),this[m(0x1c6)]();}[i(0x1d4)](c){const n=i;if(c['button']!==0x0)return;if(c['target']===this[n(0x1aa)])return;c[n(0x1db)](),this[n(0x1bf)]=!![];const d=this[n(0x1cd)]();this[n(0x1d1)]=c[n(0x1ac)]-d[n(0x1b7)],this[n(0x1ae)]=c['clientY']-d['top'],this[n(0x1c1)]['setPointerCapture'](c['pointerId']),this[n(0x1c1)]['addEventListener']('pointermove',this['_onPointerMove']),this['_titleBar']['addEventListener'](n(0x1d2),this[n(0x1dc)]);}['_onPointerMove']=c=>{const o=i;if(!this[o(0x1bf)])return;let d=c['clientX']-this['_dragOffsetX'],f=c[o(0x1a9)]-this[o(0x1ae)];d=Math['max'](0x0,Math[o(0x1b4)](d,window['innerWidth']-0x28)),f=Math[o(0x1b0)](0x0,Math['min'](f,window[o(0x1b5)]-0x1e)),this[o(0x1ad)]['left']=d+'px',this['style'][o(0x1d8)]=f+'px';};[i(0x1dc)]=c=>{const p=i;this[p(0x1bf)]=![],this[p(0x1c1)]['releasePointerCapture'](c[p(0x1b9)]),this['_titleBar'][p(0x1a6)](p(0x1ca),this['_onPointerMove']),this[p(0x1c1)]['removeEventListener'](p(0x1d2),this['_onPointerUp']);};static[i(0x1b6)](c,d){const q=i;if(d){const e=d['getBoundingClientRect']();c['style'][q(0x1b7)]=e[q(0x1d6)]+0x8+'px',c['style']['top']=e['top']+'px';}else c[q(0x1ad)]['left']=Math[q(0x1b0)](0x0,(window[q(0x1a7)]-0x104)/0x2)+'px',c['style'][q(0x1d8)]='120px';document[q(0x1c0)]['appendChild'](c);}}