const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf5))/0x1*(parseInt(h(0xe8))/0x2)+-parseInt(h(0xee))/0x3+parseInt(h(0xdf))/0x4+-parseInt(h(0xcc))/0x5*(parseInt(h(0xe2))/0x6)+-parseInt(h(0xcf))/0x7*(-parseInt(h(0xf1))/0x8)+-parseInt(h(0xf0))/0x9+-parseInt(h(0xe0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x218cc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const s=['body','100px','_close','pointerId','target','clientY','120px','disconnectedCallback','pointerup','dispatchEvent','template','_visibilityObserver','left','content','clientX','_titleBar','innerHeight','close','_onPointerMove','253435KnmpxP','disconnect','style','7YiVghf','window-content','close-btn','_dragOffsetX','_onPointerUp','_dragging','string','removeEventListener','adoptedStyleSheets','_titleText','top','title-bar','onclick','max','appendChild','_dragOffsetY','819384UQMHhP','683150oCEuVI','_contentArea','6tCGIQa','_closeBtn','observe','pointermove','addEventListener','showWindow','2oabBIm','_onPointerDown','shadowRoot','innerHTML','_designerCanvas','preventDefault','230877dOoPsi','_getDomElement','2439576WEESIb','2015056eECAXX','textContent','title-text','button','147717uJbQsT'];a=function(){return s;};return a();}function b(c,d){c=c-0xc7;const e=a();let f=e[c];return f;}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0xce)]=css`
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
  `;static [i(0x100)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}[i(0xd4)]=![];[i(0xd2)]=0x0;['_dragOffsetY']=0x0;['_titleBar'];[i(0xd8)];['_closeBtn'];[i(0xe1)];[i(0xec)];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0xec)]=c,this[j(0xc8)]=this[j(0xef)](j(0xda)),this[j(0xd8)]=this[j(0xef)](j(0xf3)),this['_closeBtn']=this[j(0xef)](j(0xd1)),this[j(0xe1)]=this['_getDomElement'](j(0xd0)),this['_titleText'][j(0xf2)]=this['windowTitle'];const d=this['windowTemplate'];if(typeof d===j(0xd5)){const f=document['createElement']('template');f[j(0xeb)]=d,this['_contentArea'][j(0xdd)](f['content']['cloneNode'](!![]));}else this[j(0xe1)]['appendChild'](d[j(0x103)]['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this[j(0xea)][j(0xd7)]=[...this[j(0xea)][j(0xd7)],e]),this[j(0xe3)][j(0xdb)]=()=>this[j(0xf8)](),this[j(0xc8)][j(0xe6)]('pointerdown',g=>this[j(0xe9)](g));}['connectedCallback'](){const k=i;!this['style']['left']&&!this['style'][k(0xd9)]&&(this[k(0xce)][k(0x102)]=k(0xf7),this[k(0xce)][k(0xd9)]='100px'),this['_designerCanvas']&&!this[k(0x101)]&&(this[k(0x101)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1]['isIntersecting'])this[l(0xf8)]();}),this['_visibilityObserver'][k(0xe4)](this['_designerCanvas']));}[i(0xfd)](){const m=i;this['_visibilityObserver']?.[m(0xcd)](),this['_visibilityObserver']=null;}['_close'](){const n=i;this[n(0xff)](new CustomEvent(n(0xca),{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0xe9)](c){const o=i;if(c[o(0xf4)]!==0x0)return;if(c[o(0xfa)]===this[o(0xe3)])return;c[o(0xed)](),this[o(0xd4)]=!![];const d=this['getBoundingClientRect']();this['_dragOffsetX']=c['clientX']-d['left'],this[o(0xde)]=c[o(0xfb)]-d['top'],this[o(0xc8)]['setPointerCapture'](c[o(0xf9)]),this[o(0xc8)][o(0xe6)]('pointermove',this[o(0xcb)]),this[o(0xc8)]['addEventListener']('pointerup',this[o(0xd3)]);}[i(0xcb)]=c=>{const p=i;if(!this['_dragging'])return;let d=c[p(0xc7)]-this['_dragOffsetX'],f=c[p(0xfb)]-this['_dragOffsetY'];d=Math['max'](0x0,Math['min'](d,window['innerWidth']-0x28)),f=Math[p(0xdc)](0x0,Math['min'](f,window[p(0xc9)]-0x1e)),this['style']['left']=d+'px',this[p(0xce)][p(0xd9)]=f+'px';};[i(0xd3)]=c=>{const q=i;this['_dragging']=![],this[q(0xc8)]['releasePointerCapture'](c['pointerId']),this['_titleBar'][q(0xd6)](q(0xe5),this['_onPointerMove']),this[q(0xc8)][q(0xd6)](q(0xfe),this[q(0xd3)]);};static[i(0xe7)](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c['style'][r(0x102)]=e['right']+0x8+'px',c['style']['top']=e[r(0xd9)]+'px';}else c['style']['left']=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c['style'][r(0xd9)]=r(0xfc);document[r(0xf6)]['appendChild'](c);}}