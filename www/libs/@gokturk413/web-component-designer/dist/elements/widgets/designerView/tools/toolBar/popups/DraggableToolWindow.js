const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1c5))/0x1+-parseInt(h(0x1c4))/0x2*(-parseInt(h(0x1a3))/0x3)+-parseInt(h(0x1cc))/0x4+parseInt(h(0x1a7))/0x5+parseInt(h(0x1bf))/0x6*(-parseInt(h(0x1ab))/0x7)+parseInt(h(0x1af))/0x8*(-parseInt(h(0x19f))/0x9)+-parseInt(h(0x1ba))/0xa*(-parseInt(h(0x1bb))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3684e));function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const s=['70eZlSgl','978967tNtaiA','_close','shadowRoot','releasePointerCapture','48GXPoQo','disconnect','removeEventListener','_contentArea','max','2086ojEwhH','67297NCuLtS','addEventListener','innerHeight','target','_visibilityObserver','_closeBtn','content','130628OWtOkD','windowTitle','disconnectedCallback','_dragOffsetY','left','_designerCanvas','120px','_titleText','right','min','2513151oBtPll','connectedCallback','_dragging','body','267XEAumu','pointerup','pointerId','appendChild','1323925ayLxkq','_onPointerMove','_onPointerUp','_dragOffsetX','330827mOfZOC','_getDomElement','style','title-text','8EwSKcY','_titleBar','template','dispatchEvent','adoptedStyleSheets','getBoundingClientRect','innerWidth','button','top','cloneNode','preventDefault'];a=function(){return s;};return a();}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1ad)]=css`
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
  `;static [i(0x1b1)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}[i(0x1a1)]=![];[i(0x1aa)]=0x0;[i(0x1cf)]=0x0;['_titleBar'];[i(0x1d3)];['_closeBtn'];['_contentArea'];[i(0x1d1)];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x1d1)]=c,this['_titleBar']=this['_getDomElement']('title-bar'),this['_titleText']=this['_getDomElement'](j(0x1ae)),this['_closeBtn']=this[j(0x1ac)]('close-btn'),this['_contentArea']=this[j(0x1ac)]('window-content'),this['_titleText']['textContent']=this[j(0x1cd)];const d=this['windowTemplate'];if(typeof d==='string'){const f=document['createElement']('template');f['innerHTML']=d,this[j(0x1c2)][j(0x1a6)](f[j(0x1cb)][j(0x1b8)](!![]));}else this[j(0x1c2)][j(0x1a6)](d['content'][j(0x1b8)](!![]));const e=this['windowContentStyle'];e&&(this[j(0x1bd)][j(0x1b3)]=[...this[j(0x1bd)][j(0x1b3)],e]),this[j(0x1ca)]['onclick']=()=>this['_close'](),this['_titleBar']['addEventListener']('pointerdown',g=>this['_onPointerDown'](g));}[i(0x1a0)](){const k=i;!this['style'][k(0x1d0)]&&!this[k(0x1ad)][k(0x1b7)]&&(this[k(0x1ad)]['left']='100px',this['style']['top']='100px'),this[k(0x1d1)]&&!this[k(0x1c9)]&&(this[k(0x1c9)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1]['isIntersecting'])this[l(0x1bc)]();}),this['_visibilityObserver']['observe'](this['_designerCanvas']));}[i(0x1ce)](){const m=i;this['_visibilityObserver']?.[m(0x1c0)](),this[m(0x1c9)]=null;}['_close'](){const n=i;this[n(0x1b2)](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const o=i;if(c[o(0x1b6)]!==0x0)return;if(c[o(0x1c8)]===this[o(0x1ca)])return;c[o(0x1b9)](),this['_dragging']=!![];const d=this['getBoundingClientRect']();this['_dragOffsetX']=c['clientX']-d['left'],this['_dragOffsetY']=c['clientY']-d[o(0x1b7)],this[o(0x1b0)]['setPointerCapture'](c[o(0x1a5)]),this['_titleBar'][o(0x1c6)]('pointermove',this['_onPointerMove']),this[o(0x1b0)][o(0x1c6)]('pointerup',this['_onPointerUp']);}[i(0x1a8)]=c=>{const p=i;if(!this[p(0x1a1)])return;let d=c['clientX']-this[p(0x1aa)],f=c['clientY']-this['_dragOffsetY'];d=Math[p(0x1c3)](0x0,Math['min'](d,window[p(0x1b5)]-0x28)),f=Math[p(0x1c3)](0x0,Math[p(0x1d5)](f,window[p(0x1c7)]-0x1e)),this[p(0x1ad)]['left']=d+'px',this[p(0x1ad)]['top']=f+'px';};[i(0x1a9)]=c=>{const q=i;this[q(0x1a1)]=![],this['_titleBar'][q(0x1be)](c['pointerId']),this[q(0x1b0)]['removeEventListener']('pointermove',this['_onPointerMove']),this['_titleBar'][q(0x1c1)](q(0x1a4),this['_onPointerUp']);};static['showWindow'](c,d){const r=i;if(d){const e=d[r(0x1b4)]();c['style']['left']=e[r(0x1d4)]+0x8+'px',c['style']['top']=e[r(0x1b7)]+'px';}else c[r(0x1ad)][r(0x1d0)]=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[r(0x1ad)]['top']=r(0x1d2);document[r(0x1a2)]['appendChild'](c);}}