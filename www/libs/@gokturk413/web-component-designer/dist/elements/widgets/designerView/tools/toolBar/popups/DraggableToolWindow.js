const i=b;function b(c,d){c=c-0x7a;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xac))/0x1+parseInt(h(0x81))/0x2+parseInt(h(0x93))/0x3+-parseInt(h(0x9a))/0x4*(-parseInt(h(0x85))/0x5)+parseInt(h(0xab))/0x6*(-parseInt(h(0xa1))/0x7)+parseInt(h(0x90))/0x8*(parseInt(h(0xb1))/0x9)+-parseInt(h(0x88))/0xa*(-parseInt(h(0x9e))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf1e5d));function a(){const r=['style','pointermove','clientY','30YSEDag','_dragOffsetY','content','14980GsHQBW','cloneNode','pointerup','_contentArea','windowTitle','_visibilityObserver','windowTemplate','_closeBtn','112iWMsGL','appendChild','pointerdown','2657493fnDSbR','createElement','_onPointerMove','setPointerCapture','pointerId','adoptedStyleSheets','_titleText','751524LsnhQl','windowContentStyle','_dragging','innerWidth','913isoTzp','innerHeight','_designerCanvas','225526yMvFyf','max','length','_onPointerDown','window-content','onclick','close','dispatchEvent','shadowRoot','_dragOffsetX','180aRxEPr','1205858nqBBvt','top','releasePointerCapture','_getDomElement','_close','245331VXLtTP','_titleBar','observe','isIntersecting','left','getBoundingClientRect','textContent','target','_onPointerUp','1288268PHdqXI'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x82)]=css`
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
  `;get[i(0x9b)](){return null;}[i(0x9c)]=![];[i(0xaa)]=0x0;[i(0x86)]=0x0;[i(0xb2)];['_titleText'];[i(0x8f)];['_contentArea'];[i(0xa0)];[i(0x8d)];constructor(c){const j=i;super(),this[j(0xa0)]=c,this['_titleBar']=this['_getDomElement']('title-bar'),this['_titleText']=this[j(0xaf)]('title-text'),this[j(0x8f)]=this['_getDomElement']('close-btn'),this['_contentArea']=this['_getDomElement'](j(0xa5)),this[j(0x99)][j(0x7e)]=this[j(0x8c)];const d=this[j(0x8e)];if(typeof d==='string'){const f=document[j(0x94)]('template');f['innerHTML']=d,this['_contentArea'][j(0x91)](f['content']['cloneNode'](!![]));}else this[j(0x8b)]['appendChild'](d[j(0x87)][j(0x89)](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot']['adoptedStyleSheets']=[...this[j(0xa9)][j(0x98)],e]),this[j(0x8f)][j(0xa6)]=()=>this[j(0xb0)](),this['_titleBar']['addEventListener'](j(0x92),g=>this[j(0xa4)](g));}['connectedCallback'](){const k=i;!this[k(0x82)]['left']&&!this['style'][k(0xad)]&&(this['style'][k(0x7c)]='100px',this['style'][k(0xad)]='100px'),this['_designerCanvas']&&!this['_visibilityObserver']&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0xa3)]-0x1][l(0x7b)])this[l(0xb0)]();}),this[k(0x8d)][k(0x7a)](this['_designerCanvas']));}['disconnectedCallback'](){this['_visibilityObserver']?.['disconnect'](),this['_visibilityObserver']=null;}['_close'](){const m=i;this[m(0xa8)](new CustomEvent(m(0xa7),{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const n=i;if(c['button']!==0x0)return;if(c[n(0x7f)]===this[n(0x8f)])return;c['preventDefault'](),this[n(0x9c)]=!![];const d=this[n(0x7d)]();this[n(0xaa)]=c['clientX']-d[n(0x7c)],this['_dragOffsetY']=c[n(0x84)]-d['top'],this['_titleBar'][n(0x96)](c[n(0x97)]),this[n(0xb2)]['addEventListener']('pointermove',this['_onPointerMove']),this[n(0xb2)]['addEventListener'](n(0x8a),this['_onPointerUp']);}['_onPointerMove']=c=>{const o=i;if(!this[o(0x9c)])return;let d=c['clientX']-this[o(0xaa)],f=c['clientY']-this['_dragOffsetY'];d=Math[o(0xa2)](0x0,Math['min'](d,window[o(0x9d)]-0x28)),f=Math['max'](0x0,Math['min'](f,window[o(0x9f)]-0x1e)),this['style'][o(0x7c)]=d+'px',this['style']['top']=f+'px';};['_onPointerUp']=c=>{const p=i;this['_dragging']=![],this[p(0xb2)][p(0xae)](c['pointerId']),this['_titleBar']['removeEventListener'](p(0x83),this[p(0x95)]),this[p(0xb2)]['removeEventListener']('pointerup',this[p(0x80)]);};static['showWindow'](c,d){const q=i;if(d){const e=d[q(0x7d)]();c['style']['left']=e['right']+0x8+'px',c[q(0x82)]['top']=e['top']+'px';}else c['style']['left']=Math['max'](0x0,(window[q(0x9d)]-0x104)/0x2)+'px',c[q(0x82)][q(0xad)]='120px';document['body']['appendChild'](c);}}