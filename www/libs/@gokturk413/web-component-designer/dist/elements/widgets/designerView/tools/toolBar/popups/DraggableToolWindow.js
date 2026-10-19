const i=b;function b(c,d){c=c-0xea;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xfe))/0x1*(parseInt(h(0xff))/0x2)+-parseInt(h(0x108))/0x3+-parseInt(h(0x119))/0x4*(-parseInt(h(0x112))/0x5)+-parseInt(h(0x10f))/0x6+-parseInt(h(0x103))/0x7*(parseInt(h(0xf0))/0x8)+parseInt(h(0x10c))/0x9+-parseInt(h(0xf4))/0xa*(parseInt(h(0x100))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f445));function a(){const r=['shadowRoot','max','min','88uCLQsf','windowTitle','_dragging','_close','1584080HsoSvP','disconnectedCallback','clientX','_visibilityObserver','close','_titleBar','_onPointerUp','dispatchEvent','removeEventListener','_closeBtn','3HMJQtl','574930OpYHSx','33UNlpRV','top','_onPointerDown','659981vdZHyo','innerHTML','pointerdown','_dragOffsetX','innerHeight','228471qGzeyp','_designerCanvas','template','connectedCallback','5769036WoIjhr','_dragOffsetY','pointerId','157896EiJBez','window-content','title-text','60ueujKS','_getDomElement','_contentArea','adoptedStyleSheets','showWindow','_titleText','string','232744KTFsFL','setPointerCapture','pointerup','style','content','appendChild','100px','length','textContent','left','addEventListener'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x11c)]=css`
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
  `;static [i(0x10a)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}['_dragging']=![];['_dragOffsetX']=0x0;[i(0x10d)]=0x0;[i(0xf9)];[i(0x117)];[i(0xfd)];['_contentArea'];[i(0x109)];[i(0xf7)];constructor(c){const j=i;super(),this[j(0x109)]=c,this['_titleBar']=this['_getDomElement']('title-bar'),this['_titleText']=this[j(0x113)](j(0x111)),this['_closeBtn']=this[j(0x113)]('close-btn'),this['_contentArea']=this[j(0x113)](j(0x110)),this[j(0x117)][j(0xea)]=this[j(0xf1)];const d=this['windowTemplate'];if(typeof d===j(0x118)){const f=document['createElement'](j(0x10a));f[j(0x104)]=d,this[j(0x114)][j(0x11e)](f[j(0x11d)]['cloneNode'](!![]));}else this[j(0x114)][j(0x11e)](d['content']['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this[j(0xed)][j(0x115)]=[...this[j(0xed)]['adoptedStyleSheets'],e]),this[j(0xfd)]['onclick']=()=>this['_close'](),this['_titleBar']['addEventListener'](j(0x105),g=>this[j(0x102)](g));}[i(0x10b)](){const k=i;!this['style']['left']&&!this['style']['top']&&(this['style']['left']=k(0x11f),this[k(0x11c)][k(0x101)]='100px'),this['_designerCanvas']&&!this['_visibilityObserver']&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x120)]-0x1]['isIntersecting'])this[l(0xf3)]();}),this['_visibilityObserver']['observe'](this[k(0x109)]));}[i(0xf5)](){this['_visibilityObserver']?.['disconnect'](),this['_visibilityObserver']=null;}['_close'](){const m=i;this[m(0xfb)](new CustomEvent(m(0xf8),{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0x102)](c){const n=i;if(c['button']!==0x0)return;if(c['target']===this[n(0xfd)])return;c['preventDefault'](),this['_dragging']=!![];const d=this['getBoundingClientRect']();this['_dragOffsetX']=c['clientX']-d[n(0xeb)],this['_dragOffsetY']=c['clientY']-d['top'],this[n(0xf9)][n(0x11a)](c['pointerId']),this['_titleBar'][n(0xec)]('pointermove',this['_onPointerMove']),this[n(0xf9)][n(0xec)]('pointerup',this['_onPointerUp']);}['_onPointerMove']=c=>{const o=i;if(!this['_dragging'])return;let d=c[o(0xf6)]-this[o(0x106)],f=c['clientY']-this[o(0x10d)];d=Math[o(0xee)](0x0,Math[o(0xef)](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math['min'](f,window[o(0x107)]-0x1e)),this['style'][o(0xeb)]=d+'px',this[o(0x11c)]['top']=f+'px';};[i(0xfa)]=c=>{const p=i;this[p(0xf2)]=![],this['_titleBar']['releasePointerCapture'](c[p(0x10e)]),this['_titleBar'][p(0xfc)]('pointermove',this['_onPointerMove']),this[p(0xf9)]['removeEventListener'](p(0x11b),this['_onPointerUp']);};static[i(0x116)](c,d){const q=i;if(d){const e=d['getBoundingClientRect']();c['style']['left']=e['right']+0x8+'px',c[q(0x11c)]['top']=e['top']+'px';}else c[q(0x11c)][q(0xeb)]=Math[q(0xee)](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[q(0x11c)]['top']='120px';document['body'][q(0x11e)](c);}}