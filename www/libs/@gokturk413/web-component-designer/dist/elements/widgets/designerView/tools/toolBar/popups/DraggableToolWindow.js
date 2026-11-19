function a(){const s=['1554935zcLaYu','_dragOffsetX','_titleBar','_designerCanvas','observe','18020794juktAh','_visibilityObserver','template','9037BYKjFL','_onPointerMove','1578YDLVOw','addEventListener','18zsofaI','_contentArea','_dragging','left','100px','title-bar','pointerdown','13854yWCDEu','style','_onPointerDown','_closeBtn','245144ftRvAK','cloneNode','getBoundingClientRect','textContent','_titleText','isIntersecting','appendChild','_onPointerUp','window-content','4fevfJV','pointerup','disconnectedCallback','2BfEZuv','_dragOffsetY','disconnect','windowTemplate','clientX','pointermove','_getDomElement','3816030UOKzbU','windowContentStyle','preventDefault','top','1325508AmrNfL','clientY','120px','removeEventListener','pointerId','onclick','min','dispatchEvent','target','content'];a=function(){return s;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x17a))/0x1+parseInt(h(0x18a))/0x2*(-parseInt(h(0x15d))/0x3)+parseInt(h(0x187))/0x4*(-parseInt(h(0x167))/0x5)+parseInt(h(0x171))/0x6*(-parseInt(h(0x16f))/0x7)+-parseInt(h(0x17e))/0x8*(-parseInt(h(0x173))/0x9)+-parseInt(h(0x159))/0xa+parseInt(h(0x16c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a74b));function b(c,d){c=c-0x159;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x17b)]=css`
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
  `;get[i(0x15a)](){return null;}['_dragging']=![];[i(0x168)]=0x0;[i(0x18b)]=0x0;[i(0x169)];['_titleText'];['_closeBtn'];['_contentArea'];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x16a)]=c,this['_titleBar']=this[j(0x190)](j(0x178)),this['_titleText']=this['_getDomElement']('title-text'),this[j(0x17d)]=this[j(0x190)]('close-btn'),this['_contentArea']=this[j(0x190)](j(0x186)),this[j(0x182)][j(0x181)]=this['windowTitle'];const d=this[j(0x18d)];if(typeof d==='string'){const f=document['createElement'](j(0x16e));f['innerHTML']=d,this['_contentArea'][j(0x184)](f['content']['cloneNode'](!![]));}else this[j(0x174)][j(0x184)](d[j(0x166)][j(0x17f)](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot']['adoptedStyleSheets']=[...this['shadowRoot']['adoptedStyleSheets'],e]),this[j(0x17d)][j(0x162)]=()=>this['_close'](),this['_titleBar'][j(0x172)](j(0x179),g=>this[j(0x17c)](g));}['connectedCallback'](){const k=i;!this['style']['left']&&!this[k(0x17b)]['top']&&(this[k(0x17b)][k(0x176)]=k(0x177),this['style']['top']=k(0x177)),this[k(0x16a)]&&!this[k(0x16d)]&&(this[k(0x16d)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0x183)])this['_close']();}),this['_visibilityObserver'][k(0x16b)](this['_designerCanvas']));}[i(0x189)](){const m=i;this['_visibilityObserver']?.[m(0x18c)](),this['_visibilityObserver']=null;}['_close'](){const n=i;this[n(0x164)](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0x17c)](c){const o=i;if(c['button']!==0x0)return;if(c[o(0x165)]===this['_closeBtn'])return;c[o(0x15b)](),this['_dragging']=!![];const d=this[o(0x180)]();this[o(0x168)]=c['clientX']-d['left'],this['_dragOffsetY']=c[o(0x15e)]-d[o(0x15c)],this[o(0x169)]['setPointerCapture'](c[o(0x161)]),this[o(0x169)]['addEventListener']('pointermove',this['_onPointerMove']),this[o(0x169)]['addEventListener']('pointerup',this['_onPointerUp']);}[i(0x170)]=c=>{const p=i;if(!this[p(0x175)])return;let d=c[p(0x18e)]-this['_dragOffsetX'],f=c['clientY']-this[p(0x18b)];d=Math['max'](0x0,Math[p(0x163)](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math['min'](f,window['innerHeight']-0x1e)),this[p(0x17b)][p(0x176)]=d+'px',this[p(0x17b)]['top']=f+'px';};[i(0x185)]=c=>{const q=i;this[q(0x175)]=![],this['_titleBar']['releasePointerCapture'](c['pointerId']),this['_titleBar']['removeEventListener'](q(0x18f),this[q(0x170)]),this['_titleBar'][q(0x160)](q(0x188),this['_onPointerUp']);};static['showWindow'](c,d){const r=i;if(d){const e=d[r(0x180)]();c[r(0x17b)]['left']=e['right']+0x8+'px',c['style']['top']=e[r(0x15c)]+'px';}else c['style'][r(0x176)]=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[r(0x17b)]['top']=r(0x15f);document['body'][r(0x184)](c);}}