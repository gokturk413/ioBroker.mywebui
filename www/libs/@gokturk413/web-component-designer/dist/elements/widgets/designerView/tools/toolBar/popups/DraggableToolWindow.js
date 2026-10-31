const i=b;function b(c,d){c=c-0x1a8;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1de))/0x1+parseInt(h(0x1d8))/0x2+parseInt(h(0x1c4))/0x3+parseInt(h(0x1c8))/0x4*(-parseInt(h(0x1ba))/0x5)+parseInt(h(0x1d0))/0x6*(-parseInt(h(0x1bc))/0x7)+parseInt(h(0x1c5))/0x8*(parseInt(h(0x1d2))/0x9)+parseInt(h(0x1cd))/0xa*(parseInt(h(0x1dd))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xed5c8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DraggableToolWindow extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x1cb)]=html`
    <div class="window-frame">
      <div class="title-bar" id="title-bar">
        <span class="title-text" id="title-text"></span>
        <button class="close-btn" id="close-btn" title="Close">&#x2715;</button>
      </div>
      <div class="window-content" id="window-content"></div>
    </div>
  `;get[i(0x1e1)](){return null;}[i(0x1bd)]=![];[i(0x1e0)]=0x0;[i(0x1b7)]=0x0;['_titleBar'];[i(0x1ae)];[i(0x1ac)];['_contentArea'];[i(0x1d9)];[i(0x1b3)];constructor(c){const j=i;super(),this['_designerCanvas']=c,this[j(0x1be)]=this[j(0x1d7)](j(0x1cc)),this['_titleText']=this['_getDomElement'](j(0x1e3)),this['_closeBtn']=this['_getDomElement'](j(0x1d1)),this[j(0x1b8)]=this[j(0x1d7)]('window-content'),this['_titleText']['textContent']=this[j(0x1cf)];const d=this['windowTemplate'];if(typeof d===j(0x1ce)){const f=document[j(0x1b6)](j(0x1cb));f[j(0x1af)]=d,this['_contentArea'][j(0x1e2)](f['content'][j(0x1bb)](!![]));}else this[j(0x1b8)][j(0x1e2)](d[j(0x1ad)][j(0x1bb)](!![]));const e=this['windowContentStyle'];e&&(this['shadowRoot'][j(0x1b5)]=[...this['shadowRoot']['adoptedStyleSheets'],e]),this[j(0x1ac)][j(0x1c2)]=()=>this[j(0x1d4)](),this['_titleBar'][j(0x1d3)](j(0x1c9),g=>this['_onPointerDown'](g));}[i(0x1a9)](){const k=i;!this[k(0x1d5)]['left']&&!this[k(0x1d5)][k(0x1c6)]&&(this[k(0x1d5)][k(0x1b1)]='100px',this[k(0x1d5)][k(0x1c6)]=k(0x1da)),this['_designerCanvas']&&!this[k(0x1b3)]&&(this['_visibilityObserver']=new IntersectionObserver(c=>{const l=k;if(!c[c[l(0x1aa)]-0x1][l(0x1c0)])this['_close']();}),this['_visibilityObserver'][k(0x1c1)](this[k(0x1d9)]));}['disconnectedCallback'](){const m=i;this['_visibilityObserver']?.[m(0x1ab)](),this[m(0x1b3)]=null;}['_close'](){const n=i;this['dispatchEvent'](new CustomEvent('close',{'bubbles':!![],'composed':!![]})),this[n(0x1d6)]();}['_onPointerDown'](c){const o=i;if(c['button']!==0x0)return;if(c['target']===this['_closeBtn'])return;c[o(0x1b4)](),this[o(0x1bd)]=!![];const d=this[o(0x1a8)]();this[o(0x1e0)]=c['clientX']-d[o(0x1b1)],this[o(0x1b7)]=c[o(0x1ca)]-d[o(0x1c6)],this[o(0x1be)][o(0x1bf)](c[o(0x1b0)]),this[o(0x1be)]['addEventListener']('pointermove',this[o(0x1dc)]),this['_titleBar'][o(0x1d3)](o(0x1df),this['_onPointerUp']);}[i(0x1dc)]=c=>{const p=i;if(!this[p(0x1bd)])return;let d=c['clientX']-this['_dragOffsetX'],f=c['clientY']-this[p(0x1b7)];d=Math['max'](0x0,Math['min'](d,window['innerWidth']-0x28)),f=Math[p(0x1b2)](0x0,Math['min'](f,window[p(0x1c3)]-0x1e)),this['style']['left']=d+'px',this['style']['top']=f+'px';};['_onPointerUp']=c=>{const q=i;this['_dragging']=![],this[q(0x1be)][q(0x1b9)](c['pointerId']),this[q(0x1be)]['removeEventListener']('pointermove',this['_onPointerMove']),this[q(0x1be)]['removeEventListener']('pointerup',this[q(0x1c7)]);};static['showWindow'](c,d){const r=i;if(d){const e=d['getBoundingClientRect']();c['style'][r(0x1b1)]=e['right']+0x8+'px',c['style']['top']=e['top']+'px';}else c[r(0x1d5)][r(0x1b1)]=Math['max'](0x0,(window[r(0x1db)]-0x104)/0x2)+'px',c[r(0x1d5)][r(0x1c6)]='120px';document['body']['appendChild'](c);}}function a(){const s=['innerHeight','2211159jYyGQS','40GtCMOx','top','_onPointerUp','471508nrSiwo','pointerdown','clientY','template','title-bar','21550RmIona','string','windowTitle','119982WOGlGX','close-btn','672678YUNPEV','addEventListener','_close','style','remove','_getDomElement','1845650nqnAlq','_designerCanvas','100px','innerWidth','_onPointerMove','5005iWTQfN','9390PCCBlx','pointerup','_dragOffsetX','windowContentStyle','appendChild','title-text','getBoundingClientRect','connectedCallback','length','disconnect','_closeBtn','content','_titleText','innerHTML','pointerId','left','max','_visibilityObserver','preventDefault','adoptedStyleSheets','createElement','_dragOffsetY','_contentArea','releasePointerCapture','20AuIUxO','cloneNode','553SKGAeS','_dragging','_titleBar','setPointerCapture','isIntersecting','observe','onclick'];a=function(){return s;};return a();}