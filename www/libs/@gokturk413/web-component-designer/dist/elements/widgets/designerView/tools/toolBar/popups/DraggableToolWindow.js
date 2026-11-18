function a(){const s=['_dragOffsetX','button','2265276yHpHHf','style','3460626PzivSP','5620ldmBNc','_visibilityObserver','windowTitle','_onPointerUp','8yCHRgO','remove','_designerCanvas','disconnectedCallback','_titleText','_close','_getDomElement','pointerId','preventDefault','innerHeight','string','704sWtuaD','releasePointerCapture','3605JlKDyJ','75910CDSUkB','_closeBtn','_dragging','content','left','120px','pointerdown','windowContentStyle','24ygprnW','window-content','removeEventListener','_onPointerDown','addEventListener','disconnect','_titleBar','_dragOffsetY','2488245XRxriB','pointermove','length','clientY','createElement','474edGYQy','dispatchEvent','connectedCallback','_contentArea','38cUAvIY','_onPointerMove','innerHTML','template','observe','shadowRoot','innerWidth','70556bVQVLU','cloneNode','max','100px','close'];a=function(){return s;};return a();}const i=b;function b(c,d){c=c-0x9b;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xb8))/0x1*(parseInt(h(0xc9))/0x2)+-parseInt(h(0xa7))/0x3*(parseInt(h(0xbf))/0x4)+-parseInt(h(0xaf))/0x5+parseInt(h(0xb4))/0x6*(-parseInt(h(0x9e))/0x7)+-parseInt(h(0xcd))/0x8*(-parseInt(h(0xc8))/0x9)+-parseInt(h(0x9f))/0xa*(-parseInt(h(0x9c))/0xb)+parseInt(h(0xc6))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x429f5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0xbb)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get[i(0xa6)](){return null;}[i(0xa1)]=![];[i(0xc4)]=0x0;['_dragOffsetY']=0x0;[i(0xad)];['_titleText'];[i(0xa0)];[i(0xb7)];[i(0xcf)];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0xcf)]=c,this['_titleBar']=this['_getDomElement']('title-bar'),this[j(0xd1)]=this[j(0xd3)]('title-text'),this[j(0xa0)]=this['_getDomElement']('close-btn'),this['_contentArea']=this['_getDomElement'](j(0xa8)),this['_titleText']['textContent']=this[j(0xcb)];const d=this['windowTemplate'];if(typeof d===j(0x9b)){const f=document[j(0xb3)]('template');f[j(0xba)]=d,this['_contentArea']['appendChild'](f[j(0xa2)]['cloneNode'](!![]));}else this['_contentArea']['appendChild'](d['content'][j(0xc0)](!![]));const e=this[j(0xa6)];e&&(this[j(0xbd)]['adoptedStyleSheets']=[...this['shadowRoot']['adoptedStyleSheets'],e]),this['_closeBtn']['onclick']=()=>this[j(0xd2)](),this['_titleBar']['addEventListener'](j(0xa5),g=>this[j(0xaa)](g));}[i(0xb6)](){const k=i;!this['style'][k(0xa3)]&&!this[k(0xc7)]['top']&&(this[k(0xc7)][k(0xa3)]=k(0xc2),this[k(0xc7)]['top']='100px'),this[k(0xcf)]&&!this['_visibilityObserver']&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0xb1)]-0x1]['isIntersecting'])this[l(0xd2)]();}),this[k(0xca)][k(0xbc)](this['_designerCanvas']));}[i(0xd0)](){const m=i;this['_visibilityObserver']?.[m(0xac)](),this[m(0xca)]=null;}['_close'](){const n=i;this[n(0xb5)](new CustomEvent(n(0xc3),{'bubbles':!![],'composed':!![]})),this[n(0xce)]();}[i(0xaa)](c){const o=i;if(c[o(0xc5)]!==0x0)return;if(c['target']===this[o(0xa0)])return;c[o(0xd5)](),this['_dragging']=!![];const d=this['getBoundingClientRect']();this['_dragOffsetX']=c['clientX']-d['left'],this[o(0xae)]=c[o(0xb2)]-d['top'],this['_titleBar']['setPointerCapture'](c[o(0xd4)]),this[o(0xad)][o(0xab)](o(0xb0),this[o(0xb9)]),this[o(0xad)][o(0xab)]('pointerup',this['_onPointerUp']);}[i(0xb9)]=c=>{const p=i;if(!this[p(0xa1)])return;let d=c['clientX']-this[p(0xc4)],f=c[p(0xb2)]-this['_dragOffsetY'];d=Math['max'](0x0,Math['min'](d,window[p(0xbe)]-0x28)),f=Math[p(0xc1)](0x0,Math['min'](f,window[p(0xd6)]-0x1e)),this[p(0xc7)]['left']=d+'px',this['style']['top']=f+'px';};[i(0xcc)]=c=>{const q=i;this[q(0xa1)]=![],this['_titleBar'][q(0x9d)](c['pointerId']),this[q(0xad)][q(0xa9)]('pointermove',this['_onPointerMove']),this[q(0xad)]['removeEventListener']('pointerup',this[q(0xcc)]);};static['showWindow'](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c[r(0xc7)][r(0xa3)]=e['right']+0x8+'px',c['style']['top']=e['top']+'px';}else c['style'][r(0xa3)]=Math[r(0xc1)](0x0,(window[r(0xbe)]-0x104)/0x2)+'px',c['style']['top']=r(0xa4);document['body']['appendChild'](c);}}