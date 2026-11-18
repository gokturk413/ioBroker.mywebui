function b(c,d){c=c-0x1e2;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1ee))/0x1+-parseInt(h(0x1ff))/0x2*(-parseInt(h(0x214))/0x3)+parseInt(h(0x1f8))/0x4+parseInt(h(0x1f0))/0x5+parseInt(h(0x1ec))/0x6*(-parseInt(h(0x218))/0x7)+-parseInt(h(0x1ea))/0x8*(-parseInt(h(0x1fa))/0x9)+-parseInt(h(0x208))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x71620));function a(){const s=['_dragging','_onPointerUp','preventDefault','3544yuafuz','showWindow','7734nWRfqO','appendChild','827789FTwrMS','windowContentStyle','2445000CsTlZN','disconnectedCallback','_dragOffsetX','_designerCanvas','_getDomElement','shadowRoot','_dragOffsetY','_onPointerDown','2338860nvyKRK','removeEventListener','9135HtdVmY','getBoundingClientRect','_onPointerMove','top','close-btn','764jErRze','body','_closeBtn','length','left','window-content','string','target','pointerdown','766600sDWwOj','dispatchEvent','right','style','adoptedStyleSheets','clientX','_visibilityObserver','_titleText','_titleBar','observe','pointerup','createElement','5559AtgAHA','isIntersecting','title-text','clientY','4683yXIMwB','setPointerCapture','content','title-bar','addEventListener','template'];a=function(){return s;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x20b)]=css`
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
  `;static [i(0x1e6)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get[i(0x1ef)](){return null;}[i(0x1e7)]=![];[i(0x1f2)]=0x0;[i(0x1f6)]=0x0;[i(0x210)];[i(0x20f)];[i(0x201)];['_contentArea'];[i(0x1f3)];[i(0x20e)];constructor(c){const j=i;super(),this['_designerCanvas']=c,this['_titleBar']=this['_getDomElement'](j(0x1e4)),this[j(0x20f)]=this['_getDomElement'](j(0x216)),this['_closeBtn']=this[j(0x1f4)](j(0x1fe)),this['_contentArea']=this[j(0x1f4)](j(0x204)),this[j(0x20f)]['textContent']=this['windowTitle'];const d=this['windowTemplate'];if(typeof d===j(0x205)){const f=document[j(0x213)](j(0x1e6));f['innerHTML']=d,this['_contentArea'][j(0x1ed)](f['content']['cloneNode'](!![]));}else this['_contentArea']['appendChild'](d[j(0x1e3)]['cloneNode'](!![]));const e=this[j(0x1ef)];e&&(this['shadowRoot'][j(0x20c)]=[...this[j(0x1f5)][j(0x20c)],e]),this[j(0x201)]['onclick']=()=>this['_close'](),this['_titleBar'][j(0x1e5)](j(0x207),g=>this[j(0x1f7)](g));}['connectedCallback'](){const k=i;!this['style'][k(0x203)]&&!this[k(0x20b)][k(0x1fd)]&&(this[k(0x20b)][k(0x203)]='100px',this[k(0x20b)][k(0x1fd)]='100px'),this['_designerCanvas']&&!this['_visibilityObserver']&&(this[k(0x20e)]=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x202)]-0x1][l(0x215)])this['_close']();}),this[k(0x20e)][k(0x211)](this[k(0x1f3)]));}[i(0x1f1)](){const m=i;this['_visibilityObserver']?.['disconnect'](),this[m(0x20e)]=null;}['_close'](){const n=i;this[n(0x209)](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const o=i;if(c['button']!==0x0)return;if(c[o(0x206)]===this['_closeBtn'])return;c[o(0x1e9)](),this[o(0x1e7)]=!![];const d=this['getBoundingClientRect']();this[o(0x1f2)]=c['clientX']-d['left'],this['_dragOffsetY']=c[o(0x217)]-d['top'],this['_titleBar'][o(0x1e2)](c['pointerId']),this['_titleBar']['addEventListener']('pointermove',this[o(0x1fc)]),this['_titleBar'][o(0x1e5)](o(0x212),this[o(0x1e8)]);}['_onPointerMove']=c=>{const p=i;if(!this['_dragging'])return;let d=c[p(0x20d)]-this['_dragOffsetX'],f=c[p(0x217)]-this['_dragOffsetY'];d=Math['max'](0x0,Math['min'](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math['min'](f,window['innerHeight']-0x1e)),this[p(0x20b)]['left']=d+'px',this[p(0x20b)][p(0x1fd)]=f+'px';};[i(0x1e8)]=c=>{const q=i;this['_dragging']=![],this['_titleBar']['releasePointerCapture'](c['pointerId']),this['_titleBar'][q(0x1f9)]('pointermove',this[q(0x1fc)]),this['_titleBar']['removeEventListener']('pointerup',this[q(0x1e8)]);};static[i(0x1eb)](c,d){const r=i;if(d){const e=d[r(0x1fb)]();c[r(0x20b)]['left']=e[r(0x20a)]+0x8+'px',c['style']['top']=e[r(0x1fd)]+'px';}else c['style'][r(0x203)]=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[r(0x20b)][r(0x1fd)]='120px';document[r(0x200)][r(0x1ed)](c);}}