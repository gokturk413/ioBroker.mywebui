const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x11a))/0x1*(-parseInt(h(0x114))/0x2)+parseInt(h(0x108))/0x3*(-parseInt(h(0x125))/0x4)+-parseInt(h(0x118))/0x5+parseInt(h(0x111))/0x6+-parseInt(h(0x10d))/0x7+parseInt(h(0x104))/0x8+parseInt(h(0x102))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x35f41));function a(){const q=['addEventListener','_onPointerMove','_onPointerDown','getBoundingClientRect','_close','style','min','isIntersecting','window-content','onclick','template','pointerdown','innerHeight','2607534PHMoBe','_titleBar','1690608wKaQvN','right','appendChild','cloneNode','3aVATNT','textContent','title-text','observe','close-btn','237881WLNygp','_closeBtn','content','left','1670532LntNat','innerHTML','_getDomElement','176BMmJUf','100px','pointermove','120px','948475GcDPKi','string','3260PBilyL','top','_designerCanvas','_dragOffsetY','clientY','_titleText','_dragging','shadowRoot','max','connectedCallback','_dragOffsetX','191692rlCsVL','_visibilityObserver','_contentArea','_onPointerUp'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xfa;const e=a();let f=e[c];return f;}export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0xff)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get['windowContentStyle'](){return null;}[i(0x120)]=![];[i(0x124)]=0x0;[i(0x11d)]=0x0;['_titleBar'];['_titleText'];['_closeBtn'];['_contentArea'];[i(0x11c)];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x11c)]=c,this[j(0x103)]=this['_getDomElement']('title-bar'),this['_titleText']=this[j(0x113)](j(0x10a)),this[j(0x10e)]=this['_getDomElement'](j(0x10c)),this[j(0x127)]=this['_getDomElement'](j(0xfd)),this[j(0x11f)][j(0x109)]=this['windowTitle'];const d=this['windowTemplate'];if(typeof d===j(0x119)){const f=document['createElement'](j(0xff));f[j(0x112)]=d,this[j(0x127)][j(0x106)](f[j(0x10f)][j(0x107)](!![]));}else this[j(0x127)][j(0x106)](d[j(0x10f)]['cloneNode'](!![]));const e=this['windowContentStyle'];e&&(this[j(0x121)]['adoptedStyleSheets']=[...this[j(0x121)]['adoptedStyleSheets'],e]),this[j(0x10e)][j(0xfe)]=()=>this[j(0x12d)](),this['_titleBar']['addEventListener'](j(0x100),g=>this['_onPointerDown'](g));}[i(0x123)](){const k=i;!this['style'][k(0x110)]&&!this[k(0xfa)]['top']&&(this[k(0xfa)][k(0x110)]=k(0x115),this['style']['top']=k(0x115)),this['_designerCanvas']&&!this[k(0x126)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0xfc)])this[l(0x12d)]();}),this[k(0x126)][k(0x10b)](this[k(0x11c)]));}['disconnectedCallback'](){this['_visibilityObserver']?.['disconnect'](),this['_visibilityObserver']=null;}[i(0x12d)](){this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}[i(0x12b)](c){const m=i;if(c['button']!==0x0)return;if(c['target']===this['_closeBtn'])return;c['preventDefault'](),this['_dragging']=!![];const d=this['getBoundingClientRect']();this[m(0x124)]=c['clientX']-d['left'],this['_dragOffsetY']=c[m(0x11e)]-d[m(0x11b)],this[m(0x103)]['setPointerCapture'](c['pointerId']),this[m(0x103)][m(0x129)](m(0x116),this['_onPointerMove']),this['_titleBar']['addEventListener']('pointerup',this[m(0x128)]);}[i(0x12a)]=c=>{const n=i;if(!this[n(0x120)])return;let d=c['clientX']-this['_dragOffsetX'],f=c['clientY']-this[n(0x11d)];d=Math[n(0x122)](0x0,Math[n(0xfb)](d,window['innerWidth']-0x28)),f=Math['max'](0x0,Math[n(0xfb)](f,window[n(0x101)]-0x1e)),this['style'][n(0x110)]=d+'px',this['style']['top']=f+'px';};[i(0x128)]=c=>{const o=i;this[o(0x120)]=![],this['_titleBar']['releasePointerCapture'](c['pointerId']),this[o(0x103)]['removeEventListener'](o(0x116),this[o(0x12a)]),this[o(0x103)]['removeEventListener']('pointerup',this['_onPointerUp']);};static['showWindow'](c,d){const p=i;if(d){const e=d[p(0x12c)]();c[p(0xfa)]['left']=e[p(0x105)]+0x8+'px',c['style']['top']=e['top']+'px';}else c['style']['left']=Math['max'](0x0,(window['innerWidth']-0x104)/0x2)+'px',c[p(0xfa)]['top']=p(0x117);document['body']['appendChild'](c);}}