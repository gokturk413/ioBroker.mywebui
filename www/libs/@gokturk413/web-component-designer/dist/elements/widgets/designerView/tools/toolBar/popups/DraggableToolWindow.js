function b(c,d){c=c-0x18c;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1b8))/0x1*(-parseInt(h(0x1a8))/0x2)+parseInt(h(0x1a7))/0x3*(-parseInt(h(0x196))/0x4)+-parseInt(h(0x1be))/0x5*(parseInt(h(0x1a5))/0x6)+-parseInt(h(0x1c0))/0x7+parseInt(h(0x1c1))/0x8*(parseInt(h(0x1c7))/0x9)+parseInt(h(0x18e))/0xa*(-parseInt(h(0x1c9))/0xb)+parseInt(h(0x1b5))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2b998));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1a0)]=css`
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
  `;static [i(0x1a6)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}[i(0x18d)]=![];['_dragOffsetX']=0x0;[i(0x1ba)]=0x0;[i(0x190)];[i(0x197)];['_closeBtn'];['_contentArea'];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x19e)]=c,this['_titleBar']=this['_getDomElement'](j(0x192)),this['_titleText']=this['_getDomElement']('title-text'),this[j(0x191)]=this[j(0x1b6)]('close-btn'),this['_contentArea']=this['_getDomElement']('window-content'),this['_titleText']['textContent']=this[j(0x18c)];const d=this['windowTemplate'];if(typeof d===j(0x1b0)){const f=document['createElement']('template');f['innerHTML']=d,this[j(0x193)]['appendChild'](f['content'][j(0x1c8)](!![]));}else this[j(0x193)][j(0x1ab)](d[j(0x1ad)][j(0x1c8)](!![]));const e=this[j(0x194)];e&&(this['shadowRoot'][j(0x1c6)]=[...this[j(0x19d)][j(0x1c6)],e]),this['_closeBtn'][j(0x1c3)]=()=>this['_close'](),this['_titleBar']['addEventListener'](j(0x1c5),g=>this[j(0x1b4)](g));}[i(0x195)](){const k=i;!this['style']['left']&&!this['style']['top']&&(this['style'][k(0x19b)]='100px',this['style'][k(0x1ae)]=k(0x19c)),this[k(0x19e)]&&!this['_visibilityObserver']&&(this[k(0x1a9)]=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x1bb)]-0x1][l(0x1b7)])this['_close']();}),this['_visibilityObserver'][k(0x1c2)](this[k(0x19e)]));}['disconnectedCallback'](){const m=i;this[m(0x1a9)]?.['disconnect'](),this[m(0x1a9)]=null;}['_close'](){const n=i;this[n(0x1a4)](new CustomEvent(n(0x1b1),{'bubbles':!![],'composed':!![]})),this[n(0x1b9)]();}['_onPointerDown'](c){const o=i;if(c[o(0x1bd)]!==0x0)return;if(c[o(0x1bc)]===this[o(0x191)])return;c['preventDefault'](),this[o(0x18d)]=!![];const d=this['getBoundingClientRect']();this['_dragOffsetX']=c[o(0x1a3)]-d[o(0x19b)],this[o(0x1ba)]=c[o(0x1a1)]-d['top'],this[o(0x190)][o(0x1ac)](c['pointerId']),this[o(0x190)]['addEventListener'](o(0x1af),this['_onPointerMove']),this['_titleBar']['addEventListener'](o(0x1aa),this[o(0x19a)]);}[i(0x1b3)]=c=>{const p=i;if(!this[p(0x18d)])return;let d=c[p(0x1a3)]-this[p(0x1c4)],f=c['clientY']-this[p(0x1ba)];d=Math['max'](0x0,Math[p(0x1a2)](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math[p(0x1a2)](f,window['innerHeight']-0x1e)),this[p(0x1a0)]['left']=d+'px',this['style']['top']=f+'px';};['_onPointerUp']=c=>{const q=i;this['_dragging']=![],this[q(0x190)][q(0x198)](c[q(0x19f)]),this['_titleBar'][q(0x18f)](q(0x1af),this[q(0x1b3)]),this['_titleBar']['removeEventListener'](q(0x1aa),this[q(0x19a)]);};static[i(0x199)](c,d){const r=i;if(d){const e=d[r(0x1b2)]();c['style']['left']=e['right']+0x8+'px',c['style']['top']=e['top']+'px';}else c['style'][r(0x19b)]=Math[r(0x1bf)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c['style'][r(0x1ae)]='120px';document['body']['appendChild'](c);}}function a(){const s=['_dragging','30640GOrAYm','removeEventListener','_titleBar','_closeBtn','title-bar','_contentArea','windowContentStyle','connectedCallback','665452SIbRaf','_titleText','releasePointerCapture','showWindow','_onPointerUp','left','100px','shadowRoot','_designerCanvas','pointerId','style','clientY','min','clientX','dispatchEvent','132EqBbgQ','template','3NPHsvq','100132kufsJs','_visibilityObserver','pointerup','appendChild','setPointerCapture','content','top','pointermove','string','close','getBoundingClientRect','_onPointerMove','_onPointerDown','9124752QgZSCf','_getDomElement','isIntersecting','1Qgazik','remove','_dragOffsetY','length','target','button','1045CqNDRc','max','2163812KNxThb','120dIrhdI','observe','onclick','_dragOffsetX','pointerdown','adoptedStyleSheets','35181BhwBDk','cloneNode','396SAfcnd','windowTitle'];a=function(){return s;};return a();}