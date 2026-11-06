const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x15a))/0x1*(parseInt(h(0x16d))/0x2)+-parseInt(h(0x15d))/0x3+-parseInt(h(0x154))/0x4*(-parseInt(h(0x15e))/0x5)+parseInt(h(0x181))/0x6*(parseInt(h(0x168))/0x7)+parseInt(h(0x178))/0x8*(-parseInt(h(0x183))/0x9)+-parseInt(h(0x16c))/0xa*(parseInt(h(0x180))/0xb)+parseInt(h(0x17b))/0xc*(-parseInt(h(0x169))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb269b));function b(c,d){c=c-0x154;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x172)]=css`
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
  `;get['windowContentStyle'](){return null;}[i(0x18a)]=![];[i(0x156)]=0x0;['_dragOffsetY']=0x0;['_titleBar'];['_titleText'];[i(0x163)];['_contentArea'];[i(0x175)];[i(0x16f)];constructor(c){const j=i;super(),this[j(0x175)]=c,this[j(0x173)]=this['_getDomElement'](j(0x185)),this[j(0x177)]=this[j(0x189)]('title-text'),this[j(0x163)]=this[j(0x189)](j(0x170)),this['_contentArea']=this[j(0x189)]('window-content'),this[j(0x177)]['textContent']=this[j(0x157)];const d=this[j(0x15f)];if(typeof d==='string'){const f=document['createElement']('template');f[j(0x17e)]=d,this[j(0x166)][j(0x176)](f['content']['cloneNode'](!![]));}else this['_contentArea'][j(0x176)](d['content']['cloneNode'](!![]));const e=this[j(0x164)];e&&(this['shadowRoot'][j(0x17c)]=[...this[j(0x15c)]['adoptedStyleSheets'],e]),this['_closeBtn']['onclick']=()=>this[j(0x182)](),this['_titleBar']['addEventListener'](j(0x188),g=>this[j(0x16b)](g));}[i(0x18b)](){const k=i;!this['style'][k(0x16a)]&&!this['style']['top']&&(this[k(0x172)][k(0x16a)]=k(0x155),this[k(0x172)][k(0x17a)]='100px'),this['_designerCanvas']&&!this[k(0x16f)]&&(this[k(0x16f)]=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x15b)]-0x1]['isIntersecting'])this['_close']();}),this[k(0x16f)]['observe'](this[k(0x175)]));}['disconnectedCallback'](){const m=i;this[m(0x16f)]?.['disconnect'](),this[m(0x16f)]=null;}[i(0x182)](){const n=i;this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this[n(0x174)]();}[i(0x16b)](c){const o=i;if(c['button']!==0x0)return;if(c['target']===this['_closeBtn'])return;c['preventDefault'](),this[o(0x18a)]=!![];const d=this[o(0x17f)]();this[o(0x156)]=c['clientX']-d[o(0x16a)],this['_dragOffsetY']=c['clientY']-d[o(0x17a)],this['_titleBar'][o(0x187)](c[o(0x160)]),this['_titleBar'][o(0x16e)]('pointermove',this['_onPointerMove']),this['_titleBar']['addEventListener']('pointerup',this['_onPointerUp']);}['_onPointerMove']=c=>{const p=i;if(!this['_dragging'])return;let d=c['clientX']-this['_dragOffsetX'],f=c['clientY']-this['_dragOffsetY'];d=Math['max'](0x0,Math[p(0x179)](d,window[p(0x162)]-0x28)),f=Math[p(0x165)](0x0,Math['min'](f,window[p(0x184)]-0x1e)),this['style'][p(0x16a)]=d+'px',this['style']['top']=f+'px';};[i(0x158)]=c=>{const q=i;this[q(0x18a)]=![],this['_titleBar'][q(0x159)](c[q(0x160)]),this[q(0x173)]['removeEventListener']('pointermove',this['_onPointerMove']),this[q(0x173)][q(0x186)](q(0x161),this['_onPointerUp']);};static[i(0x167)](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c[r(0x172)]['left']=e[r(0x17d)]+0x8+'px',c[r(0x172)]['top']=e[r(0x17a)]+'px';}else c[r(0x172)][r(0x16a)]=Math[r(0x165)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[r(0x172)]['top']=r(0x171);document['body'][r(0x176)](c);}}function a(){const s=['18840mqZEmm','1582514ZAgQLz','addEventListener','_visibilityObserver','close-btn','120px','style','_titleBar','remove','_designerCanvas','appendChild','_titleText','8UwRfqB','min','top','382764gpOsZN','adoptedStyleSheets','right','innerHTML','getBoundingClientRect','7546WNYMpa','66mhpdoe','_close','157419eXdzfn','innerHeight','title-bar','removeEventListener','setPointerCapture','pointerdown','_getDomElement','_dragging','connectedCallback','1036064iauuvG','100px','_dragOffsetX','windowTitle','_onPointerUp','releasePointerCapture','1IClJsU','length','shadowRoot','2689332epDHYE','25BQELAj','windowTemplate','pointerId','pointerup','innerWidth','_closeBtn','windowContentStyle','max','_contentArea','showWindow','805294JVBodS','169mSwrmL','left','_onPointerDown'];a=function(){return s;};return a();}