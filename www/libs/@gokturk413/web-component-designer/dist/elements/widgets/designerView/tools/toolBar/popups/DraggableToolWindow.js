const i=b;function b(c,d){c=c-0x17e;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a2))/0x1*(parseInt(h(0x1a6))/0x2)+parseInt(h(0x181))/0x3+-parseInt(h(0x1ae))/0x4*(-parseInt(h(0x1aa))/0x5)+-parseInt(h(0x19d))/0x6+parseInt(h(0x19b))/0x7+parseInt(h(0x180))/0x8*(parseInt(h(0x1b6))/0x9)+-parseInt(h(0x17e))/0xa*(parseInt(h(0x183))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5391a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1a1)]=css`
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
  `;get[i(0x1b4)](){return null;}[i(0x1a3)]=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;[i(0x1a4)];['_titleText'];['_closeBtn'];[i(0x192)];['_designerCanvas'];[i(0x194)];constructor(c){const j=i;super(),this['_designerCanvas']=c,this[j(0x1a4)]=this['_getDomElement'](j(0x193)),this['_titleText']=this['_getDomElement'](j(0x18b)),this['_closeBtn']=this[j(0x199)]('close-btn'),this['_contentArea']=this['_getDomElement']('window-content'),this['_titleText']['textContent']=this[j(0x1b2)];const d=this['windowTemplate'];if(typeof d===j(0x18a)){const f=document[j(0x1ac)]('template');f[j(0x196)]=d,this[j(0x192)]['appendChild'](f[j(0x19e)]['cloneNode'](!![]));}else this[j(0x192)]['appendChild'](d['content']['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot'][j(0x19a)]=[...this[j(0x1b0)]['adoptedStyleSheets'],e]),this[j(0x18c)][j(0x1a7)]=()=>this['_close'](),this[j(0x1a4)]['addEventListener'](j(0x1af),g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this[k(0x1a1)]['left']&&!this['style'][k(0x18e)]&&(this[k(0x1a1)][k(0x19f)]=k(0x184),this['style'][k(0x18e)]=k(0x184)),this[k(0x1a5)]&&!this[k(0x194)]&&(this[k(0x194)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1]['isIntersecting'])this[l(0x195)]();}),this['_visibilityObserver'][k(0x1b7)](this['_designerCanvas']));}[i(0x1ad)](){const m=i;this[m(0x194)]?.['disconnect'](),this['_visibilityObserver']=null;}[i(0x195)](){const n=i;this[n(0x1b5)](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this[n(0x19c)]();}[i(0x197)](c){const o=i;if(c[o(0x190)]!==0x0)return;if(c[o(0x1a0)]===this['_closeBtn'])return;c['preventDefault'](),this['_dragging']=!![];const d=this[o(0x1a9)]();this['_dragOffsetX']=c[o(0x18d)]-d['left'],this[o(0x1ab)]=c[o(0x186)]-d['top'],this[o(0x1a4)]['setPointerCapture'](c[o(0x188)]),this[o(0x1a4)][o(0x18f)](o(0x182),this[o(0x1b3)]),this[o(0x1a4)]['addEventListener'](o(0x1a8),this['_onPointerUp']);}['_onPointerMove']=c=>{const p=i;if(!this[p(0x1a3)])return;let d=c[p(0x18d)]-this[p(0x189)],f=c['clientY']-this['_dragOffsetY'];d=Math[p(0x17f)](0x0,Math[p(0x191)](d,window[p(0x185)]-0x28)),f=Math['max'](0x0,Math[p(0x191)](f,window[p(0x198)]-0x1e)),this['style']['left']=d+'px',this['style']['top']=f+'px';};['_onPointerUp']=c=>{const q=i;this[q(0x1a3)]=![],this[q(0x1a4)]['releasePointerCapture'](c[q(0x188)]),this[q(0x1a4)]['removeEventListener']('pointermove',this[q(0x1b3)]),this[q(0x1a4)]['removeEventListener']('pointerup',this[q(0x187)]);};static['showWindow'](c,d){const r=i;if(d){const e=d[r(0x1a9)]();c[r(0x1a1)][r(0x19f)]=e['right']+0x8+'px',c[r(0x1a1)]['top']=e[r(0x18e)]+'px';}else c['style']['left']=Math[r(0x17f)](0x0,(window[r(0x185)]-0x104)/0x2)+'px',c['style'][r(0x18e)]='120px';document['body'][r(0x1b1)](c);}}function a(){const s=['pointerdown','shadowRoot','appendChild','windowTitle','_onPointerMove','windowContentStyle','dispatchEvent','387ukYgcQ','observe','4390TMqIxm','max','34792jUTxOi','851049LLTIWe','pointermove','26059AdQcLi','100px','innerWidth','clientY','_onPointerUp','pointerId','_dragOffsetX','string','title-text','_closeBtn','clientX','top','addEventListener','button','min','_contentArea','title-bar','_visibilityObserver','_close','innerHTML','_onPointerDown','innerHeight','_getDomElement','adoptedStyleSheets','1084076DelQsL','remove','562314uRbMTk','content','left','target','style','12185fWyzGA','_dragging','_titleBar','_designerCanvas','70aSYusW','onclick','pointerup','getBoundingClientRect','15ZBuWEJ','_dragOffsetY','createElement','disconnectedCallback','565300vGHLdr'];a=function(){return s;};return a();}