function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}const i=b;function a(){const s=['_closeBtn','remove','removeEventListener','2smzMHW','body','2434019lFOGcO','clientX','button','adoptedStyleSheets','appendChild','right','title-text','_onPointerDown','left','_dragOffsetY','isIntersecting','close','126138egogMk','addEventListener','3742602eoPMml','pointermove','innerWidth','_visibilityObserver','_dragOffsetX','preventDefault','createElement','pointerdown','connectedCallback','_getDomElement','windowTemplate','disconnect','releasePointerCapture','showWindow','95wIAWGN','top','innerHeight','949384sQkUeo','8XkmlqE','style','_titleBar','3253732LaFJyJ','_designerCanvas','_titleText','windowTitle','_onPointerUp','getBoundingClientRect','120px','target','cloneNode','_dragging','clientY','807480CDxEuh','close-btn','_onPointerMove','disconnectedCallback','_contentArea','shadowRoot','window-content','content','pointerup','24313870WrjioF','onclick','template'];a=function(){return s;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xfd))/0x1*(parseInt(h(0x11e))/0x2)+-parseInt(h(0x10d))/0x3+-parseInt(h(0x122))/0x4+parseInt(h(0x11b))/0x5*(-parseInt(h(0x10b))/0x6)+-parseInt(h(0xff))/0x7+-parseInt(h(0x11f))/0x8*(-parseInt(h(0xee))/0x9)+parseInt(h(0xf7))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1b62));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0xf9)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;['_titleBar'];[i(0x124)];[i(0xfa)];[i(0xf2)];[i(0x123)];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x123)]=c,this[j(0x121)]=this[j(0x116)]('title-bar'),this['_titleText']=this[j(0x116)](j(0x105)),this[j(0xfa)]=this[j(0x116)](j(0xef)),this['_contentArea']=this['_getDomElement'](j(0xf4)),this['_titleText']['textContent']=this[j(0x125)];const d=this[j(0x117)];if(typeof d==='string'){const f=document[j(0x113)](j(0xf9));f['innerHTML']=d,this['_contentArea'][j(0x103)](f[j(0xf5)][j(0xeb)](!![]));}else this[j(0xf2)][j(0x103)](d[j(0xf5)]['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this[j(0xf3)][j(0x102)]=[...this['shadowRoot']['adoptedStyleSheets'],e]),this['_closeBtn'][j(0xf8)]=()=>this['_close'](),this[j(0x121)]['addEventListener'](j(0x114),g=>this[j(0x106)](g));}[i(0x115)](){const k=i;!this[k(0x120)][k(0x107)]&&!this['style']['top']&&(this['style'][k(0x107)]='100px',this['style'][k(0x11c)]='100px'),this[k(0x123)]&&!this['_visibilityObserver']&&(this[k(0x110)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0x109)])this['_close']();}),this['_visibilityObserver']['observe'](this[k(0x123)]));}[i(0xf1)](){const m=i;this[m(0x110)]?.[m(0x118)](),this[m(0x110)]=null;}['_close'](){const n=i;this['dispatchEvent'](new CustomEvent(n(0x10a),{'bubbles':!![],'composed':!![]})),this[n(0xfb)]();}[i(0x106)](c){const o=i;if(c[o(0x101)]!==0x0)return;if(c[o(0xea)]===this['_closeBtn'])return;c[o(0x112)](),this['_dragging']=!![];const d=this[o(0x127)]();this[o(0x111)]=c[o(0x100)]-d['left'],this[o(0x108)]=c[o(0xed)]-d[o(0x11c)],this[o(0x121)]['setPointerCapture'](c['pointerId']),this['_titleBar'][o(0x10c)](o(0x10e),this['_onPointerMove']),this[o(0x121)][o(0x10c)](o(0xf6),this['_onPointerUp']);}[i(0xf0)]=c=>{const p=i;if(!this['_dragging'])return;let d=c['clientX']-this[p(0x111)],f=c[p(0xed)]-this[p(0x108)];d=Math['max'](0x0,Math['min'](d,window[p(0x10f)]-0x28)),f=Math['max'](0x0,Math['min'](f,window[p(0x11d)]-0x1e)),this[p(0x120)]['left']=d+'px',this['style'][p(0x11c)]=f+'px';};['_onPointerUp']=c=>{const q=i;this[q(0xec)]=![],this['_titleBar'][q(0x119)](c['pointerId']),this['_titleBar'][q(0xfc)](q(0x10e),this[q(0xf0)]),this['_titleBar']['removeEventListener'](q(0xf6),this[q(0x126)]);};static[i(0x11a)](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c[r(0x120)]['left']=e[r(0x104)]+0x8+'px',c[r(0x120)]['top']=e[r(0x11c)]+'px';}else c['style'][r(0x107)]=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[r(0x120)]['top']=r(0xe9);document[r(0xfe)]['appendChild'](c);}}