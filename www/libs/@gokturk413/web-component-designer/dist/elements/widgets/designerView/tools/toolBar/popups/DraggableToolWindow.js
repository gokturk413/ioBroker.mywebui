function b(c,d){c=c-0x1c8;const e=a();let f=e[c];return f;}function a(){const s=['disconnectedCallback','remove','top','_onPointerUp','close','style','678mJGfcZ','_designerCanvas','_close','setPointerCapture','64NXPfIJ','_titleBar','button','min','_closeBtn','_onPointerMove','close-btn','title-text','pointerdown','_dragOffsetY','isIntersecting','100px','_onPointerDown','12228630MMpUja','clientX','5531564rbRmpZ','preventDefault','max','_visibilityObserver','120px','72585SDEDWl','addEventListener','right','appendChild','_dragOffsetX','getBoundingClientRect','10532PdyRfx','windowTitle','11fjFiiz','4723560FaGwTF','43526zQmdCC','windowTemplate','dispatchEvent','clientY','length','_contentArea','innerHTML','_dragging','textContent','showWindow','left','727005XofTcQ','pointerId','pointerup','removeEventListener','444wWscdf','observe','content','body','shadowRoot','innerWidth','template','_titleText'];a=function(){return s;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1cf))/0x1+-parseInt(h(0x1ff))/0x2*(parseInt(h(0x1d3))/0x3)+parseInt(h(0x1f4))/0x4+-parseInt(h(0x202))/0x5+parseInt(h(0x1e1))/0x6*(parseInt(h(0x203))/0x7)+parseInt(h(0x1e5))/0x8*(-parseInt(h(0x1f9))/0x9)+-parseInt(h(0x1f2))/0xa*(-parseInt(h(0x201))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc18cf));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x1d9)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}[i(0x1cb)]=![];['_dragOffsetX']=0x0;[i(0x1ee)]=0x0;['_titleBar'];[i(0x1da)];['_closeBtn'];[i(0x1c9)];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this['_getDomElement']('title-bar'),this['_titleText']=this['_getDomElement'](j(0x1ec)),this['_closeBtn']=this['_getDomElement'](j(0x1eb)),this[j(0x1c9)]=this['_getDomElement']('window-content'),this['_titleText'][j(0x1cc)]=this[j(0x200)];const d=this[j(0x204)];if(typeof d==='string'){const f=document['createElement']('template');f[j(0x1ca)]=d,this[j(0x1c9)]['appendChild'](f['content']['cloneNode'](!![]));}else this['_contentArea']['appendChild'](d[j(0x1d5)]['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this[j(0x1d7)]['adoptedStyleSheets']=[...this[j(0x1d7)]['adoptedStyleSheets'],e]),this[j(0x1e9)]['onclick']=()=>this[j(0x1e3)](),this['_titleBar'][j(0x1fa)](j(0x1ed),g=>this[j(0x1f1)](g));}['connectedCallback'](){const k=i;!this[k(0x1e0)][k(0x1ce)]&&!this['style']['top']&&(this[k(0x1e0)][k(0x1ce)]='100px',this[k(0x1e0)][k(0x1dd)]=k(0x1f0)),this[k(0x1e2)]&&!this[k(0x1f7)]&&(this[k(0x1f7)]=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x1c8)]-0x1][l(0x1ef)])this['_close']();}),this[k(0x1f7)][k(0x1d4)](this['_designerCanvas']));}[i(0x1db)](){const m=i;this['_visibilityObserver']?.['disconnect'](),this[m(0x1f7)]=null;}[i(0x1e3)](){const n=i;this[n(0x205)](new CustomEvent(n(0x1df),{'bubbles':!![],'composed':!![]})),this[n(0x1dc)]();}[i(0x1f1)](c){const o=i;if(c[o(0x1e7)]!==0x0)return;if(c['target']===this[o(0x1e9)])return;c[o(0x1f5)](),this['_dragging']=!![];const d=this[o(0x1fe)]();this['_dragOffsetX']=c[o(0x1f3)]-d['left'],this['_dragOffsetY']=c[o(0x206)]-d['top'],this['_titleBar'][o(0x1e4)](c[o(0x1d0)]),this[o(0x1e6)][o(0x1fa)]('pointermove',this['_onPointerMove']),this[o(0x1e6)]['addEventListener'](o(0x1d1),this[o(0x1de)]);}[i(0x1ea)]=c=>{const p=i;if(!this['_dragging'])return;let d=c[p(0x1f3)]-this[p(0x1fd)],f=c['clientY']-this[p(0x1ee)];d=Math[p(0x1f6)](0x0,Math[p(0x1e8)](d,window['innerWidth']-0x28)),f=Math[p(0x1f6)](0x0,Math['min'](f,window['innerHeight']-0x1e)),this[p(0x1e0)][p(0x1ce)]=d+'px',this['style'][p(0x1dd)]=f+'px';};['_onPointerUp']=c=>{const q=i;this['_dragging']=![],this[q(0x1e6)]['releasePointerCapture'](c['pointerId']),this[q(0x1e6)][q(0x1d2)]('pointermove',this['_onPointerMove']),this['_titleBar']['removeEventListener']('pointerup',this[q(0x1de)]);};static[i(0x1cd)](c,d){const r=i;if(d){const e=d[r(0x1fe)]();c['style'][r(0x1ce)]=e[r(0x1fb)]+0x8+'px',c['style'][r(0x1dd)]=e[r(0x1dd)]+'px';}else c[r(0x1e0)][r(0x1ce)]=Math[r(0x1f6)](0x0,(window[r(0x1d8)]-0x104)/0x2)+'px',c['style']['top']=r(0x1f8);document[r(0x1d6)][r(0x1fc)](c);}}