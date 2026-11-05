const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x126))/0x1+parseInt(h(0x11c))/0x2+parseInt(h(0x125))/0x3*(-parseInt(h(0x117))/0x4)+-parseInt(h(0x124))/0x5+parseInt(h(0x120))/0x6+-parseInt(h(0x130))/0x7*(-parseInt(h(0x129))/0x8)+-parseInt(h(0x11f))/0x9*(-parseInt(h(0x12c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1957c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
      display: block;
    }  
    #split {
      position: relative;
      height: 100%;
      width: 100%;
      grid-template-rows: calc(var(--split) * 1%) 5px calc(((100 - var(--split)) * 1%) - 5px);
      grid-template-columns: 100%;
      display: grid;
      align-items: center;
    }
    :host([orientation="horizontal"]) #split {
      grid-template-rows: 100%;
      grid-template-columns: calc(var(--split) * 1%) 5px calc(((100 - var(--split)) * 1%) - 5px);
    }
    #splitter {
      user-select: none;
      -webkit-user-select: none;
    }
    :host([orientation="horizontal"]) > div > #splitter {
      cursor: ew-resize;
      width: 5px;
      height: 100%;
    }
    :host([orientation="vertical"]) > div > #splitter {
      cursor: ns-resize;
      height: 5px;
      width: 100%;
    }`;static ['template']=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x119)]=i(0x12f);get[i(0x11d)](){const j=i;return this[j(0x119)];}set['orientation'](c){const k=i;this[k(0x119)]=c,this[k(0x123)]('orientation',c);}constructor(){const l=i;super(),this[l(0x11b)]();}['ready'](){const m=i;this['_parseAttributesToProperties'](),this['setAttribute']('orientation',this[m(0x11d)]);const c=this[m(0x122)](m(0x132)),d=this[m(0x122)]('splitter');let e=null;d[m(0x12e)](m(0x131),f=>{const n=m;d[n(0x11a)](f['pointerId']),e=!![];}),d[m(0x12e)]('pointerup',f=>{const o=m;d['releasePointerCapture'](f[o(0x12a)]),e=null;}),d['addEventListener']('pointermove',f=>{const p=m;if(e!==null){let g=parseFloat(c[p(0x128)]['getPropertyValue'](p(0x127)));if(this[p(0x11d)]==='horizontal')g+=f[p(0x118)]*0x64/c[p(0x12d)];else g+=f[p(0x12b)]*0x64/c[p(0x121)];if(!isNaN(g))c[p(0x128)]['setProperty']('--split',g);}});}}function b(c,d){c=c-0x117;const e=a();let f=e[c];return f;}customElements[i(0x11e)]('node-projects-simple-split-view',SimpleSplitView);function a(){const q=['movementX','_orientation','setPointerCapture','_restoreCachedInititalValues','180946ytuFvF','orientation','define','9BkDfME','567840vsqoPN','clientHeight','_getDomElement','setAttribute','1027945nsUpYZ','3dWNsgS','31868ebPSwZ','--split','style','91696suuiuN','pointerId','movementY','38900HJIpwo','clientWidth','addEventListener','vertical','126GgHbaj','pointerdown','split','471176tTNcvF'];a=function(){return q;};return a();}