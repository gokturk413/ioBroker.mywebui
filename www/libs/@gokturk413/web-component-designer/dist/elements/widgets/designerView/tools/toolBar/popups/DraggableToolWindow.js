const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x14b))/0x1+parseInt(h(0x145))/0x2*(parseInt(h(0x151))/0x3)+parseInt(h(0x126))/0x4*(-parseInt(h(0x130))/0x5)+-parseInt(h(0x152))/0x6+-parseInt(h(0x142))/0x7+-parseInt(h(0x14d))/0x8+parseInt(h(0x12f))/0x9*(parseInt(h(0x13b))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5cd4c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x126;const e=a();let f=e[c];return f;}function a(){const s=['_designerCanvas','max','_onPointerUp','_dragOffsetX','pointerup','100px','min','template','30yxmCmw','close','pointerId','target','getBoundingClientRect','disconnect','preventDefault','521388OziUFu','clientY','removeEventListener','242878zbxyyy','top','_titleText','_onPointerMove','right','left','380719KzxkgF','adoptedStyleSheets','2192064anyFEO','_contentArea','title-bar','style','15TYMWYr','3833874BFccXx','_dragging','cloneNode','innerHeight','4GyTOAz','onclick','_visibilityObserver','_closeBtn','_close','_getDomElement','120px','_titleBar','createElement','5054706CRcmtD','2718355ZWSTUN','length','appendChild'];a=function(){return s;};return a();}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x13a)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}['_dragging']=![];[i(0x136)]=0x0;['_dragOffsetY']=0x0;['_titleBar'];['_titleText'];[i(0x129)];[i(0x14e)];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x133)]=c,this[j(0x12d)]=this[j(0x12b)](j(0x14f)),this[j(0x147)]=this[j(0x12b)]('title-text'),this[j(0x129)]=this['_getDomElement']('close-btn'),this['_contentArea']=this['_getDomElement']('window-content'),this['_titleText']['textContent']=this['windowTitle'];const d=this['windowTemplate'];if(typeof d==='string'){const f=document[j(0x12e)](j(0x13a));f['innerHTML']=d,this['_contentArea']['appendChild'](f['content'][j(0x154)](!![]));}else this[j(0x14e)][j(0x132)](d['content']['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot']['adoptedStyleSheets']=[...this['shadowRoot'][j(0x14c)],e]),this[j(0x129)][j(0x127)]=()=>this['_close'](),this['_titleBar']['addEventListener']('pointerdown',g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this[k(0x150)][k(0x14a)]&&!this['style']['top']&&(this[k(0x150)][k(0x14a)]='100px',this['style'][k(0x146)]=k(0x138)),this[k(0x133)]&&!this[k(0x128)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x131)]-0x1]['isIntersecting'])this[l(0x12a)]();}),this['_visibilityObserver']['observe'](this[k(0x133)]));}['disconnectedCallback'](){const m=i;this[m(0x128)]?.[m(0x140)](),this[m(0x128)]=null;}['_close'](){const n=i;this['dispatchEvent'](new CustomEvent(n(0x13c),{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const o=i;if(c['button']!==0x0)return;if(c[o(0x13e)]===this['_closeBtn'])return;c[o(0x141)](),this[o(0x153)]=!![];const d=this['getBoundingClientRect']();this[o(0x136)]=c['clientX']-d['left'],this['_dragOffsetY']=c[o(0x143)]-d[o(0x146)],this[o(0x12d)]['setPointerCapture'](c['pointerId']),this['_titleBar']['addEventListener']('pointermove',this[o(0x148)]),this['_titleBar']['addEventListener']('pointerup',this[o(0x135)]);}['_onPointerMove']=c=>{const p=i;if(!this[p(0x153)])return;let d=c['clientX']-this[p(0x136)],f=c[p(0x143)]-this['_dragOffsetY'];d=Math[p(0x134)](0x0,Math[p(0x139)](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math['min'](f,window[p(0x155)]-0x1e)),this[p(0x150)]['left']=d+'px',this[p(0x150)][p(0x146)]=f+'px';};[i(0x135)]=c=>{const q=i;this['_dragging']=![],this[q(0x12d)]['releasePointerCapture'](c[q(0x13d)]),this[q(0x12d)][q(0x144)]('pointermove',this[q(0x148)]),this['_titleBar'][q(0x144)](q(0x137),this['_onPointerUp']);};static['showWindow'](c,d){const r=i;if(d){const e=d[r(0x13f)]();c[r(0x150)][r(0x14a)]=e[r(0x149)]+0x8+'px',c[r(0x150)]['top']=e['top']+'px';}else c[r(0x150)][r(0x14a)]=Math[r(0x134)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[r(0x150)][r(0x146)]=r(0x12c);document['body'][r(0x132)](c);}}