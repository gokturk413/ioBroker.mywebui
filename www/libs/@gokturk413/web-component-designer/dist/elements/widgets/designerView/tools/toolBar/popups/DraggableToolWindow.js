function b(c,d){c=c-0x1c1;const e=a();let f=e[c];return f;}const i=b;function a(){const s=['_closeBtn','left','pointerdown','14fVjhIy','setPointerCapture','connectedCallback','_titleText','_getDomElement','string','window-content','297ncfZtn','274389pTpXeb','_dragOffsetX','100px','removeEventListener','windowTitle','appendChild','innerHTML','_dragging','6697720elAjuG','windowContentStyle','min','36KwGUqL','_contentArea','2316xDVlSq','innerWidth','1965FNAsDk','max','_close','onclick','_dragOffsetY','textContent','target','_onPointerMove','observe','120px','isIntersecting','body','style','top','4rMqHbu','737291aDkJPA','_visibilityObserver','adoptedStyleSheets','showWindow','_onPointerUp','pointerup','pointermove','64216SRbjBS','1862070HzYZNI','close-btn','_designerCanvas','right','button','3289308jDFmVb','content','dispatchEvent','_titleBar','cloneNode','shadowRoot','pointerId','title-text','disconnect','disconnectedCallback','_onPointerDown'];a=function(){return s;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f0))/0x1+parseInt(h(0x1ef))/0x2*(parseInt(h(0x1d2))/0x3)+-parseInt(h(0x1df))/0x4*(parseInt(h(0x1e1))/0x5)+parseInt(h(0x1f8))/0x6*(-parseInt(h(0x1ca))/0x7)+-parseInt(h(0x1f7))/0x8*(-parseInt(h(0x1d1))/0x9)+parseInt(h(0x1da))/0xa+-parseInt(h(0x1fd))/0xb*(-parseInt(h(0x1dd))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68c59));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static [i(0x1ed)]=css`
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
  `;get[i(0x1db)](){return null;}[i(0x1d9)]=![];['_dragOffsetX']=0x0;['_dragOffsetY']=0x0;[i(0x200)];[i(0x1cd)];[i(0x1c7)];['_contentArea'];['_designerCanvas'];['_visibilityObserver'];constructor(c){const j=i;super(),this[j(0x1fa)]=c,this[j(0x200)]=this[j(0x1ce)]('title-bar'),this[j(0x1cd)]=this[j(0x1ce)](j(0x1c3)),this[j(0x1c7)]=this['_getDomElement'](j(0x1f9)),this['_contentArea']=this['_getDomElement'](j(0x1d0)),this[j(0x1cd)][j(0x1e6)]=this[j(0x1d6)];const d=this['windowTemplate'];if(typeof d===j(0x1cf)){const f=document['createElement']('template');f[j(0x1d8)]=d,this[j(0x1de)][j(0x1d7)](f['content'][j(0x201)](!![]));}else this[j(0x1de)][j(0x1d7)](d[j(0x1fe)][j(0x201)](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot']['adoptedStyleSheets']=[...this[j(0x1c1)][j(0x1f2)],e]),this[j(0x1c7)][j(0x1e4)]=()=>this[j(0x1e3)](),this['_titleBar']['addEventListener'](j(0x1c9),g=>this[j(0x1c6)](g));}[i(0x1cc)](){const k=i;!this['style'][k(0x1c8)]&&!this['style']['top']&&(this[k(0x1ed)][k(0x1c8)]='100px',this[k(0x1ed)][k(0x1ee)]=k(0x1d4)),this[k(0x1fa)]&&!this['_visibilityObserver']&&(this[k(0x1f1)]=new IntersectionObserver(c=>{const l=k;if(!c[c['length']-0x1][l(0x1eb)])this['_close']();}),this[k(0x1f1)][k(0x1e9)](this['_designerCanvas']));}[i(0x1c5)](){const m=i;this[m(0x1f1)]?.[m(0x1c4)](),this['_visibilityObserver']=null;}[i(0x1e3)](){const n=i;this[n(0x1ff)](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this['remove']();}['_onPointerDown'](c){const o=i;if(c[o(0x1fc)]!==0x0)return;if(c[o(0x1e7)]===this['_closeBtn'])return;c['preventDefault'](),this['_dragging']=!![];const d=this['getBoundingClientRect']();this[o(0x1d3)]=c['clientX']-d['left'],this['_dragOffsetY']=c['clientY']-d['top'],this['_titleBar'][o(0x1cb)](c[o(0x1c2)]),this['_titleBar']['addEventListener'](o(0x1f6),this['_onPointerMove']),this['_titleBar']['addEventListener']('pointerup',this['_onPointerUp']);}[i(0x1e8)]=c=>{const p=i;if(!this[p(0x1d9)])return;let d=c['clientX']-this['_dragOffsetX'],f=c['clientY']-this[p(0x1e5)];d=Math['max'](0x0,Math[p(0x1dc)](d,window[p(0x1e0)]-0x28)),f=Math[p(0x1e2)](0x0,Math['min'](f,window['innerHeight']-0x1e)),this[p(0x1ed)]['left']=d+'px',this['style'][p(0x1ee)]=f+'px';};[i(0x1f4)]=c=>{const q=i;this['_dragging']=![],this['_titleBar']['releasePointerCapture'](c[q(0x1c2)]),this['_titleBar'][q(0x1d5)]('pointermove',this[q(0x1e8)]),this['_titleBar'][q(0x1d5)](q(0x1f5),this[q(0x1f4)]);};static[i(0x1f3)](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c[r(0x1ed)][r(0x1c8)]=e[r(0x1fb)]+0x8+'px',c['style']['top']=e['top']+'px';}else c['style']['left']=Math['max'](0x0,(window[r(0x1e0)]-0x104)/0x2)+'px',c[r(0x1ed)][r(0x1ee)]=r(0x1ea);document[r(0x1ec)]['appendChild'](c);}}