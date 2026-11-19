function b(c,d){c=c-0x64;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x86))/0x1*(-parseInt(h(0x6f))/0x2)+parseInt(h(0x77))/0x3*(parseInt(h(0x73))/0x4)+parseInt(h(0x82))/0x5*(-parseInt(h(0x74))/0x6)+-parseInt(h(0x9e))/0x7*(parseInt(h(0x8b))/0x8)+-parseInt(h(0x9c))/0x9*(-parseInt(h(0x85))/0xa)+-parseInt(h(0x88))/0xb+-parseInt(h(0x90))/0xc*(-parseInt(h(0x9f))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb121f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const r=['_onPointerUp','clientY','setPointerCapture','disconnectedCallback','title-text','120px','innerWidth','_titleBar','_closeBtn','177678fvbqoS','_dragging','12607DlzwbC','474279bpMKOT','body','windowContentStyle','innerHeight','_contentArea','close-btn','disconnect','preventDefault','adoptedStyleSheets','windowTemplate','pointerup','shadowRoot','top','style','pointerId','_onPointerDown','getBoundingClientRect','_dragOffsetX','3032cPqRAD','_visibilityObserver','left','_onPointerMove','1184852JPRmii','18eIjVBc','remove','appendChild','9onMNWT','min','template','_titleText','clientX','removeEventListener','pointermove','string','windowTitle','innerHTML','target','2291130WRiUVz','_close','cloneNode','20NzBnSc','633hKVpoO','showWindow','6238749iwiHft','onclick','dispatchEvent','5288YdtLQR','button','100px','_dragOffsetY','_getDomElement','648yUhIjh','max','close'];a=function(){return r;};return a();}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;get['windowContentStyle'](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;[i(0x8e)]=0x0;['_titleBar'];[i(0x7a)];['_closeBtn'];[i(0xa3)];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this['_designerCanvas']=c,this[j(0x9a)]=this[j(0x8f)]('title-bar'),this[j(0x7a)]=this['_getDomElement'](j(0x97)),this[j(0x9b)]=this['_getDomElement'](j(0xa4)),this['_contentArea']=this['_getDomElement']('window-content'),this['_titleText']['textContent']=this[j(0x7f)];const d=this[j(0x66)];if(typeof d===j(0x7e)){const f=document['createElement'](j(0x79));f[j(0x80)]=d,this[j(0xa3)][j(0x76)](f['content'][j(0x84)](!![]));}else this[j(0xa3)]['appendChild'](d['content'][j(0x84)](!![]));const e=this[j(0xa1)];e&&(this[j(0x68)][j(0x65)]=[...this['shadowRoot']['adoptedStyleSheets'],e]),this[j(0x9b)][j(0x89)]=()=>this[j(0x83)](),this[j(0x9a)]['addEventListener']('pointerdown',g=>this['_onPointerDown'](g));}['connectedCallback'](){const k=i;!this['style']['left']&&!this['style']['top']&&(this['style'][k(0x71)]='100px',this['style']['top']=k(0x8d)),this['_designerCanvas']&&!this['_visibilityObserver']&&(this['_visibilityObserver']=new IntersectionObserver(c=>{if(!c[c['length']-0x1]['isIntersecting'])this['_close']();}),this[k(0x70)]['observe'](this['_designerCanvas']));}[i(0x96)](){const l=i;this['_visibilityObserver']?.[l(0xa5)](),this['_visibilityObserver']=null;}['_close'](){const m=i;this[m(0x8a)](new CustomEvent(m(0x92),{'bubbles':!![],'composed':!![]})),this[m(0x75)]();}[i(0x6c)](c){const n=i;if(c[n(0x8c)]!==0x0)return;if(c[n(0x81)]===this['_closeBtn'])return;c[n(0x64)](),this['_dragging']=!![];const d=this[n(0x6d)]();this['_dragOffsetX']=c['clientX']-d['left'],this['_dragOffsetY']=c['clientY']-d['top'],this['_titleBar'][n(0x95)](c[n(0x6b)]),this['_titleBar']['addEventListener'](n(0x7d),this[n(0x72)]),this['_titleBar']['addEventListener']('pointerup',this[n(0x93)]);}[i(0x72)]=c=>{const o=i;if(!this[o(0x9d)])return;let d=c[o(0x7b)]-this[o(0x6e)],f=c[o(0x94)]-this[o(0x8e)];d=Math['max'](0x0,Math['min'](d,window[o(0x99)]-0x28)),f=Math['max'](0x0,Math[o(0x78)](f,window[o(0xa2)]-0x1e)),this['style']['left']=d+'px',this[o(0x6a)]['top']=f+'px';};['_onPointerUp']=c=>{const p=i;this[p(0x9d)]=![],this['_titleBar']['releasePointerCapture'](c['pointerId']),this[p(0x9a)][p(0x7c)](p(0x7d),this[p(0x72)]),this['_titleBar']['removeEventListener'](p(0x67),this[p(0x93)]);};static[i(0x87)](c,d){const q=i;if(d){const e=d[q(0x6d)]();c[q(0x6a)]['left']=e['right']+0x8+'px',c['style'][q(0x69)]=e[q(0x69)]+'px';}else c[q(0x6a)][q(0x71)]=Math[q(0x91)](0x0,(window[q(0x99)]-0x104)/0x2)+'px',c[q(0x6a)]['top']=q(0x98);document[q(0xa0)]['appendChild'](c);}}