const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x21c))/0x1+-parseInt(h(0x213))/0x2*(parseInt(h(0x1fd))/0x3)+parseInt(h(0x20d))/0x4+-parseInt(h(0x1f8))/0x5*(parseInt(h(0x21f))/0x6)+-parseInt(h(0x1fb))/0x7+parseInt(h(0x21d))/0x8+parseInt(h(0x226))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd9c7a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1f3;const e=a();let f=e[c];return f;}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x20f)]=css`
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
  `;static [i(0x211)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get[i(0x222)](){return null;}[i(0x224)]=![];[i(0x21a)]=0x0;['_dragOffsetY']=0x0;[i(0x1fa)];[i(0x221)];['_closeBtn'];[i(0x1ff)];[i(0x1f9)];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x1f9)]=c,this[j(0x1fa)]=this['_getDomElement']('title-bar'),this[j(0x221)]=this[j(0x201)]('title-text'),this[j(0x21e)]=this[j(0x201)]('close-btn'),this[j(0x1ff)]=this['_getDomElement']('window-content'),this['_titleText'][j(0x202)]=this['windowTitle'];const d=this[j(0x225)];if(typeof d===j(0x21b)){const f=document['createElement']('template');f['innerHTML']=d,this['_contentArea'][j(0x220)](f['content']['cloneNode'](!![]));}else this[j(0x1ff)]['appendChild'](d[j(0x216)][j(0x1f7)](!![]));const e=this[j(0x222)];e&&(this['shadowRoot']['adoptedStyleSheets']=[...this[j(0x227)]['adoptedStyleSheets'],e]),this['_closeBtn']['onclick']=()=>this[j(0x206)](),this[j(0x1fa)][j(0x20e)]('pointerdown',g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this[k(0x20f)][k(0x20a)]&&!this['style']['top']&&(this[k(0x20f)][k(0x20a)]='100px',this['style']['top']=k(0x219)),this['_designerCanvas']&&!this[k(0x1fc)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1]['isIntersecting'])this[l(0x206)]();}),this[k(0x1fc)][k(0x203)](this[k(0x1f9)]));}['disconnectedCallback'](){const m=i;this['_visibilityObserver']?.[m(0x204)](),this['_visibilityObserver']=null;}[i(0x206)](){const n=i;this[n(0x1f5)](new CustomEvent(n(0x210),{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0x205)](c){const o=i;if(c['button']!==0x0)return;if(c[o(0x209)]===this[o(0x21e)])return;c['preventDefault'](),this[o(0x224)]=!![];const d=this[o(0x214)]();this['_dragOffsetX']=c[o(0x1f3)]-d['left'],this[o(0x217)]=c[o(0x207)]-d['top'],this['_titleBar']['setPointerCapture'](c[o(0x215)]),this['_titleBar'][o(0x20e)](o(0x20b),this['_onPointerMove']),this['_titleBar']['addEventListener']('pointerup',this['_onPointerUp']);}[i(0x223)]=c=>{const p=i;if(!this['_dragging'])return;let d=c['clientX']-this['_dragOffsetX'],f=c[p(0x207)]-this[p(0x217)];d=Math['max'](0x0,Math[p(0x208)](d,window[p(0x212)]-0x28)),f=Math[p(0x20c)](0x0,Math[p(0x208)](f,window['innerHeight']-0x1e)),this[p(0x20f)][p(0x20a)]=d+'px',this['style']['top']=f+'px';};['_onPointerUp']=c=>{const q=i;this['_dragging']=![],this[q(0x1fa)][q(0x200)](c[q(0x215)]),this[q(0x1fa)]['removeEventListener']('pointermove',this['_onPointerMove']),this['_titleBar']['removeEventListener']('pointerup',this[q(0x218)]);};static[i(0x1f4)](c,d){const r=i;if(d){const e=d[r(0x214)]();c[r(0x20f)]['left']=e['right']+0x8+'px',c[r(0x20f)][r(0x1fe)]=e['top']+'px';}else c['style']['left']=Math['max'](0x0,(window[r(0x212)]-0x104)/0x2)+'px',c['style']['top']=r(0x1f6);document['body'][r(0x220)](c);}}function a(){const s=['4695252AoHsDf','addEventListener','style','close','template','innerWidth','2bXcZkw','getBoundingClientRect','pointerId','content','_dragOffsetY','_onPointerUp','100px','_dragOffsetX','string','867794XpWfIh','6682016KHXhsN','_closeBtn','5296344GjpNPD','appendChild','_titleText','windowContentStyle','_onPointerMove','_dragging','windowTemplate','32899356tEVQqq','shadowRoot','clientX','showWindow','dispatchEvent','120px','cloneNode','10qrfkUl','_designerCanvas','_titleBar','11320848pVpSWv','_visibilityObserver','1566051QggNAt','top','_contentArea','releasePointerCapture','_getDomElement','textContent','observe','disconnect','_onPointerDown','_close','clientY','min','target','left','pointermove','max'];a=function(){return s;};return a();}