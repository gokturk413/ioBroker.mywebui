const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xc0))/0x1*(parseInt(h(0xab))/0x2)+parseInt(h(0xc8))/0x3*(-parseInt(h(0xb4))/0x4)+parseInt(h(0xdc))/0x5*(parseInt(h(0xdb))/0x6)+parseInt(h(0xad))/0x7+parseInt(h(0xc4))/0x8*(parseInt(h(0xbd))/0x9)+parseInt(h(0xd4))/0xa+parseInt(h(0xc9))/0xb*(-parseInt(h(0xc1))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbb025));function b(c,d){c=c-0xa9;const e=a();let f=e[c];return f;}function a(){const r=['_contentArea','96696gQYVfT','_visibilityObserver','_closeBtn','11nrhdCd','133572yzcrKE','showWindow','120px','56SXmzFg','100px','textContent','_dragOffsetY','1249989nxogdC','2387aaFJkh','connectedCallback','top','title-text','content','_designerCanvas','cloneNode','title-bar','shadowRoot','left','min','4755860GnBCHL','_close','style','pointermove','getBoundingClientRect','_onPointerDown','_dragging','18FRvgAS','1846945zrmPET','isIntersecting','max','264692JmsQIP','windowContentStyle','6299825YTYtRg','_onPointerMove','innerWidth','onclick','clientX','pointerdown','_titleText','8csPUlh','_titleBar','_dragOffsetX','addEventListener','innerHTML','disconnectedCallback','_getDomElement','pointerup'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0xd6)]=css`
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
  `;get[i(0xac)](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;[i(0xc7)]=0x0;['_titleBar'];['_titleText'];[i(0xbf)];['_contentArea'];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0xce)]=c,this['_titleBar']=this['_getDomElement'](j(0xd0)),this['_titleText']=this[j(0xba)](j(0xcc)),this['_closeBtn']=this['_getDomElement']('close-btn'),this['_contentArea']=this[j(0xba)]('window-content'),this[j(0xb3)][j(0xc6)]=this['windowTitle'];const d=this['windowTemplate'];if(typeof d==='string'){const f=document['createElement']('template');f[j(0xb8)]=d,this[j(0xbc)]['appendChild'](f[j(0xcd)][j(0xcf)](!![]));}else this['_contentArea']['appendChild'](d[j(0xcd)]['cloneNode'](!![]));const e=this[j(0xac)];e&&(this[j(0xd1)]['adoptedStyleSheets']=[...this[j(0xd1)]['adoptedStyleSheets'],e]),this[j(0xbf)][j(0xb0)]=()=>this[j(0xd5)](),this['_titleBar'][j(0xb7)](j(0xb2),g=>this['_onPointerDown'](g));}[i(0xca)](){const k=i;!this[k(0xd6)]['left']&&!this['style']['top']&&(this[k(0xd6)][k(0xd2)]=k(0xc5),this['style']['top']=k(0xc5)),this[k(0xce)]&&!this[k(0xbe)]&&(this[k(0xbe)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0xa9)])this[l(0xd5)]();}),this['_visibilityObserver']['observe'](this['_designerCanvas']));}[i(0xb9)](){const m=i;this['_visibilityObserver']?.['disconnect'](),this[m(0xbe)]=null;}['_close'](){this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0xd9)](c){const n=i;if(c['button']!==0x0)return;if(c['target']===this['_closeBtn'])return;c['preventDefault'](),this['_dragging']=!![];const d=this[n(0xd8)]();this['_dragOffsetX']=c[n(0xb1)]-d['left'],this['_dragOffsetY']=c['clientY']-d['top'],this[n(0xb5)]['setPointerCapture'](c['pointerId']),this['_titleBar'][n(0xb7)]('pointermove',this[n(0xae)]),this['_titleBar'][n(0xb7)](n(0xbb),this['_onPointerUp']);}['_onPointerMove']=c=>{const o=i;if(!this[o(0xda)])return;let d=c['clientX']-this[o(0xb6)],f=c['clientY']-this[o(0xc7)];d=Math['max'](0x0,Math[o(0xd3)](d,window[o(0xaf)]-0x28)),f=Math['max'](0x0,Math[o(0xd3)](f,window['innerHeight']-0x1e)),this[o(0xd6)]['left']=d+'px',this['style']['top']=f+'px';};['_onPointerUp']=c=>{const p=i;this['_dragging']=![],this[p(0xb5)]['releasePointerCapture'](c['pointerId']),this[p(0xb5)]['removeEventListener'](p(0xd7),this[p(0xae)]),this[p(0xb5)]['removeEventListener']('pointerup',this['_onPointerUp']);};static[i(0xc2)](c,d){const q=i;if(d){const e=d['getBoundingClientRect']();c['style'][q(0xd2)]=e['right']+0x8+'px',c['style'][q(0xcb)]=e['top']+'px';}else c['style'][q(0xd2)]=Math[q(0xaa)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c['style'][q(0xcb)]=q(0xc3);document['body']['appendChild'](c);}}