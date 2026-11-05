function a(){const r=['2723833XQKbmE','_onPointerDown','100px','_dragOffsetX','1580906sNzbXD','innerWidth','disconnect','pointerId','target','releasePointerCapture','_close','64855FHZCLS','_closeBtn','windowTemplate','removeEventListener','823754UKBWak','connectedCallback','content','top','_titleText','left','addEventListener','_dragging','pointerup','shadowRoot','style','clientX','adoptedStyleSheets','_onPointerUp','template','_visibilityObserver','_onPointerMove','getBoundingClientRect','415647JgFvuu','1242063mYatKV','_designerCanvas','title-text','_titleBar','2875686PccNQi','string','appendChild','close-btn','min','textContent','windowTitle','_getDomElement','window-content','424RJhKBs','_contentArea','right','windowContentStyle','clientY','cloneNode','120px','pointerdown','236DeotYH','button'];a=function(){return r;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xa4))/0x1+-parseInt(h(0x99))/0x2+-parseInt(h(0x7e))/0x3+-parseInt(h(0x93))/0x4*(parseInt(h(0xa0))/0x5)+-parseInt(h(0x82))/0x6+-parseInt(h(0x95))/0x7+parseInt(h(0x8b))/0x8*(parseInt(h(0x7d))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69c8a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x6c;const e=a();let f=e[c];return f;}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x79)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;[i(0x81)];[i(0x6f)];[i(0xa1)];[i(0x8c)];[i(0x7f)];[i(0x7a)];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this[j(0x89)]('title-bar'),this[j(0x6f)]=this['_getDomElement'](j(0x80)),this['_closeBtn']=this['_getDomElement'](j(0x85)),this[j(0x8c)]=this[j(0x89)](j(0x8a)),this['_titleText'][j(0x87)]=this[j(0x88)];const d=this[j(0xa2)];if(typeof d===j(0x83)){const f=document['createElement'](j(0x79));f['innerHTML']=d,this[j(0x8c)]['appendChild'](f[j(0x6d)]['cloneNode'](!![]));}else this['_contentArea'][j(0x84)](d[j(0x6d)][j(0x90)](!![]));const e=this[j(0x8e)];e&&(this[j(0x74)][j(0x77)]=[...this['shadowRoot']['adoptedStyleSheets'],e]),this['_closeBtn']['onclick']=()=>this['_close'](),this[j(0x81)][j(0x71)](j(0x92),g=>this[j(0x96)](g));}[i(0x6c)](){const k=i;!this[k(0x75)][k(0x70)]&&!this['style']['top']&&(this['style']['left']=k(0x97),this['style']['top']='100px'),this[k(0x7f)]&&!this[k(0x7a)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1]['isIntersecting'])this[l(0x9f)]();}),this[k(0x7a)]['observe'](this['_designerCanvas']));}['disconnectedCallback'](){const m=i;this['_visibilityObserver']?.[m(0x9b)](),this['_visibilityObserver']=null;}['_close'](){this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const n=i;if(c[n(0x94)]!==0x0)return;if(c[n(0x9d)]===this['_closeBtn'])return;c['preventDefault'](),this['_dragging']=!![];const d=this[n(0x7c)]();this[n(0x98)]=c[n(0x76)]-d[n(0x70)],this['_dragOffsetY']=c[n(0x8f)]-d['top'],this['_titleBar']['setPointerCapture'](c[n(0x9c)]),this['_titleBar'][n(0x71)]('pointermove',this[n(0x7b)]),this['_titleBar'][n(0x71)](n(0x73),this['_onPointerUp']);}[i(0x7b)]=c=>{const o=i;if(!this[o(0x72)])return;let d=c['clientX']-this[o(0x98)],f=c['clientY']-this['_dragOffsetY'];d=Math['max'](0x0,Math[o(0x86)](d,window[o(0x9a)]-0x28)),f=Math['max'](0x0,Math[o(0x86)](f,window['innerHeight']-0x1e)),this['style'][o(0x70)]=d+'px',this['style'][o(0x6e)]=f+'px';};[i(0x78)]=c=>{const p=i;this['_dragging']=![],this[p(0x81)][p(0x9e)](c['pointerId']),this['_titleBar']['removeEventListener']('pointermove',this[p(0x7b)]),this['_titleBar'][p(0xa3)](p(0x73),this[p(0x78)]);};static['showWindow'](c,d){const q=i;if(d){const e=d['getBoundingClientRect']();c[q(0x75)]['left']=e[q(0x8d)]+0x8+'px',c['style']['top']=e[q(0x6e)]+'px';}else c['style']['left']=Math['max'](0x0,(window[q(0x9a)]-0x104)/0x2)+'px',c['style'][q(0x6e)]=q(0x91);document['body']['appendChild'](c);}}