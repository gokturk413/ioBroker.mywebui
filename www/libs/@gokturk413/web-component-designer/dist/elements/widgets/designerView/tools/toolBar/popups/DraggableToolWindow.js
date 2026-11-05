function b(c,d){c=c-0x1b8;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f0))/0x1*(-parseInt(h(0x1c1))/0x2)+parseInt(h(0x1bd))/0x3+parseInt(h(0x1e2))/0x4+parseInt(h(0x1f2))/0x5*(-parseInt(h(0x1db))/0x6)+parseInt(h(0x1b9))/0x7+-parseInt(h(0x1d3))/0x8*(parseInt(h(0x1c3))/0x9)+-parseInt(h(0x1f1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b0d7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1be)]=css`
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
  `;get['windowContentStyle'](){return null;}[i(0x1c8)]=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;['_titleBar'];['_titleText'];[i(0x1cd)];['_contentArea'];[i(0x1c4)];[i(0x1b8)];constructor(c){const j=i;super(),this[j(0x1c4)]=c,this[j(0x1d8)]=this[j(0x1cc)](j(0x1bc)),this['_titleText']=this['_getDomElement'](j(0x1ec)),this['_closeBtn']=this['_getDomElement'](j(0x1ee)),this['_contentArea']=this[j(0x1cc)](j(0x1ce)),this[j(0x1cf)]['textContent']=this['windowTitle'];const d=this['windowTemplate'];if(typeof d===j(0x1f3)){const f=document[j(0x1e7)]('template');f[j(0x1dd)]=d,this['_contentArea']['appendChild'](f[j(0x1bf)]['cloneNode'](!![]));}else this['_contentArea']['appendChild'](d[j(0x1bf)]['cloneNode'](!![]));const e=this[j(0x1d7)];e&&(this['shadowRoot'][j(0x1d6)]=[...this[j(0x1ba)][j(0x1d6)],e]),this[j(0x1cd)][j(0x1ca)]=()=>this[j(0x1e0)](),this['_titleBar']['addEventListener'](j(0x1df),g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this[k(0x1be)]['left']&&!this[k(0x1be)][k(0x1c0)]&&(this['style']['left']='100px',this[k(0x1be)]['top']='100px'),this[k(0x1c4)]&&!this[k(0x1b8)]&&(this[k(0x1b8)]=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x1bb)]-0x1][l(0x1e8)])this['_close']();}),this['_visibilityObserver'][k(0x1eb)](this[k(0x1c4)]));}[i(0x1e4)](){const m=i;this[m(0x1b8)]?.['disconnect'](),this['_visibilityObserver']=null;}['_close'](){const n=i;this[n(0x1d5)](new CustomEvent(n(0x1e6),{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const o=i;if(c['button']!==0x0)return;if(c[o(0x1ef)]===this['_closeBtn'])return;c['preventDefault'](),this['_dragging']=!![];const d=this[o(0x1de)]();this[o(0x1ea)]=c['clientX']-d['left'],this['_dragOffsetY']=c[o(0x1c6)]-d['top'],this[o(0x1d8)]['setPointerCapture'](c['pointerId']),this['_titleBar']['addEventListener'](o(0x1d1),this['_onPointerMove']),this[o(0x1d8)][o(0x1c7)](o(0x1e9),this[o(0x1c2)]);}['_onPointerMove']=c=>{const p=i;if(!this[p(0x1c8)])return;let d=c['clientX']-this['_dragOffsetX'],f=c[p(0x1c6)]-this[p(0x1d4)];d=Math['max'](0x0,Math[p(0x1da)](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math['min'](f,window[p(0x1d0)]-0x1e)),this['style']['left']=d+'px',this[p(0x1be)][p(0x1c0)]=f+'px';};[i(0x1c2)]=c=>{const q=i;this['_dragging']=![],this[q(0x1d8)]['releasePointerCapture'](c[q(0x1d9)]),this[q(0x1d8)]['removeEventListener']('pointermove',this['_onPointerMove']),this['_titleBar'][q(0x1c5)]('pointerup',this['_onPointerUp']);};static[i(0x1d2)](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c[r(0x1be)][r(0x1ed)]=e[r(0x1e1)]+0x8+'px',c[r(0x1be)]['top']=e['top']+'px';}else c['style']['left']=Math[r(0x1e3)](0x0,(window[r(0x1e5)]-0x104)/0x2)+'px',c['style']['top']=r(0x1c9);document[r(0x1cb)][r(0x1dc)](c);}}function a(){const s=['pointermove','showWindow','8kUTvcI','_dragOffsetY','dispatchEvent','adoptedStyleSheets','windowContentStyle','_titleBar','pointerId','min','30vYMYga','appendChild','innerHTML','getBoundingClientRect','pointerdown','_close','right','2734340dihuOV','max','disconnectedCallback','innerWidth','close','createElement','isIntersecting','pointerup','_dragOffsetX','observe','title-text','left','close-btn','target','67iMlPRG','1977950raJpkr','733205pOeNNb','string','_visibilityObserver','4033855RTMekP','shadowRoot','length','title-bar','1581237YZuHXH','style','content','top','5154nWuMKg','_onPointerUp','5900733LefcQI','_designerCanvas','removeEventListener','clientY','addEventListener','_dragging','120px','onclick','body','_getDomElement','_closeBtn','window-content','_titleText','innerHeight'];a=function(){return s;};return a();}