function a(){const s=['windowTitle','7GOJmzL','_dragging','innerWidth','setPointerCapture','title-bar','textContent','1318009bDXHLk','clientY','button','addEventListener','preventDefault','dispatchEvent','_onPointerUp','_titleText','pointerId','observe','appendChild','3382696HwrZIG','_getDomElement','25wQErvt','_close','_closeBtn','left','getBoundingClientRect','max','9184386wRAQIF','_dragOffsetX','1120300TadeNP','onclick','_visibilityObserver','innerHTML','_contentArea','100px','pointerup','window-content','remove','windowContentStyle','1359982gKOKnu','_dragOffsetY','2979186HuhrRE','innerHeight','windowTemplate','length','style','clientX','_titleBar','_onPointerMove','29685582mlTQEp','min','adoptedStyleSheets','pointerdown','removeEventListener','pointermove','cloneNode','_designerCanvas','content','disconnectedCallback','close','top','shadowRoot'];a=function(){return s;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e5))/0x1+-parseInt(h(0x204))/0x2+-parseInt(h(0x206))/0x3+parseInt(h(0x1fa))/0x4*(-parseInt(h(0x1f2))/0x5)+parseInt(h(0x1f8))/0x6+-parseInt(h(0x1df))/0x7*(-parseInt(h(0x1f0))/0x8)+parseInt(h(0x20e))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd2171));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1d8;const e=a();let f=e[c];return f;}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;get['windowContentStyle'](){return null;}['_dragging']=![];[i(0x1f9)]=0x0;[i(0x205)]=0x0;[i(0x20c)];['_titleText'];[i(0x1f4)];[i(0x1fe)];[i(0x1d8)];[i(0x1fc)];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this['_getDomElement'](j(0x1e3)),this[j(0x1ec)]=this[j(0x1f1)]('title-text'),this['_closeBtn']=this['_getDomElement']('close-btn'),this['_contentArea']=this[j(0x1f1)](j(0x201)),this['_titleText'][j(0x1e4)]=this[j(0x1de)];const d=this[j(0x208)];if(typeof d==='string'){const f=document['createElement']('template');f[j(0x1fd)]=d,this[j(0x1fe)]['appendChild'](f[j(0x1d9)][j(0x214)](!![]));}else this[j(0x1fe)][j(0x1ef)](d['content'][j(0x214)](!![]));const e=this[j(0x203)];e&&(this[j(0x1dd)][j(0x210)]=[...this[j(0x1dd)][j(0x210)],e]),this['_closeBtn'][j(0x1fb)]=()=>this[j(0x1f3)](),this[j(0x20c)][j(0x1e8)](j(0x211),g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this['style'][k(0x1f5)]&&!this[k(0x20a)][k(0x1dc)]&&(this[k(0x20a)]['left']='100px',this['style']['top']=k(0x1ff)),this['_designerCanvas']&&!this[k(0x1fc)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x209)]-0x1]['isIntersecting'])this[l(0x1f3)]();}),this['_visibilityObserver'][k(0x1ee)](this['_designerCanvas']));}[i(0x1da)](){const m=i;this['_visibilityObserver']?.['disconnect'](),this[m(0x1fc)]=null;}[i(0x1f3)](){const n=i;this[n(0x1ea)](new CustomEvent(n(0x1db),{'bubbles':!![],'composed':!![]})),this[n(0x202)]();}['_onPointerDown'](c){const o=i;if(c[o(0x1e7)]!==0x0)return;if(c['target']===this[o(0x1f4)])return;c[o(0x1e9)](),this['_dragging']=!![];const d=this[o(0x1f6)]();this[o(0x1f9)]=c[o(0x20b)]-d['left'],this['_dragOffsetY']=c[o(0x1e6)]-d['top'],this['_titleBar'][o(0x1e2)](c[o(0x1ed)]),this['_titleBar']['addEventListener'](o(0x213),this['_onPointerMove']),this['_titleBar'][o(0x1e8)](o(0x200),this['_onPointerUp']);}[i(0x20d)]=c=>{const p=i;if(!this[p(0x1e0)])return;let d=c['clientX']-this[p(0x1f9)],f=c[p(0x1e6)]-this['_dragOffsetY'];d=Math[p(0x1f7)](0x0,Math[p(0x20f)](d,window[p(0x1e1)]-0x28)),f=Math['max'](0x0,Math[p(0x20f)](f,window[p(0x207)]-0x1e)),this[p(0x20a)]['left']=d+'px',this['style']['top']=f+'px';};[i(0x1eb)]=c=>{const q=i;this['_dragging']=![],this['_titleBar']['releasePointerCapture'](c['pointerId']),this[q(0x20c)]['removeEventListener']('pointermove',this['_onPointerMove']),this['_titleBar'][q(0x212)](q(0x200),this[q(0x1eb)]);};static['showWindow'](c,d){const r=i;if(d){const e=d[r(0x1f6)]();c['style']['left']=e['right']+0x8+'px',c[r(0x20a)][r(0x1dc)]=e['top']+'px';}else c[r(0x20a)]['left']=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c['style'][r(0x1dc)]='120px';document['body']['appendChild'](c);}}