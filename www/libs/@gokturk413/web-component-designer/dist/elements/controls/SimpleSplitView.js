function a(){const p=['1692813Xviwbz','651HvioRb','2718JraNSh','3735WGgwbW','pointerdown','2459030jOooRF','movementX','_orientation','vertical','_getDomElement','style','9ijsLZY','movementY','define','horizontal','--split','pointermove','_parseAttributesToProperties','3rIsSGm','addEventListener','178238VuyuPY','setAttribute','444jxVPXE','split','properties','2875624gWVZLL','44936roqkLs','clientHeight','template','168817PRnFsB','pointerId','orientation'];a=function(){return p;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb1))/0x1+parseInt(h(0xa5))/0x2*(-parseInt(h(0xa3))/0x3)+-parseInt(h(0xaa))/0x4+-parseInt(h(0x94))/0x5*(-parseInt(h(0x93))/0x6)+-parseInt(h(0xb2))/0x7*(-parseInt(h(0xab))/0x8)+parseInt(h(0x9c))/0x9*(-parseInt(h(0x96))/0xa)+-parseInt(h(0xae))/0xb*(parseInt(h(0xa7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe37ea));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x9b)]=css`
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
    }`;static [i(0xad)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static [i(0xa9)]={'orientation':String};[i(0x98)]=i(0x99);get['orientation'](){const j=i;return this[j(0x98)];}set['orientation'](c){const k=i;this['_orientation']=c,this[k(0xa6)]('orientation',c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const l=i;this[l(0xa2)](),this['setAttribute'](l(0xb0),this['orientation']);const c=this['_getDomElement'](l(0xa8)),d=this[l(0x9a)]('splitter');let e=null;d['addEventListener'](l(0x95),f=>{const m=l;d['setPointerCapture'](f[m(0xaf)]),e=!![];}),d[l(0xa4)]('pointerup',f=>{const n=l;d['releasePointerCapture'](f[n(0xaf)]),e=null;}),d['addEventListener'](l(0xa1),f=>{const o=l;if(e!==null){let g=parseFloat(c['style']['getPropertyValue'](o(0xa0)));if(this[o(0xb0)]===o(0x9f))g+=f[o(0x97)]*0x64/c['clientWidth'];else g+=f[o(0x9d)]*0x64/c[o(0xac)];if(!isNaN(g))c[o(0x9b)]['setProperty']('--split',g);}});}}function b(c,d){c=c-0x93;const e=a();let f=e[c];return f;}customElements[i(0x9e)]('node-projects-simple-split-view',SimpleSplitView);