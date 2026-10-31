function b(c,d){c=c-0x1e8;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x204))/0x1*(-parseInt(h(0x1f2))/0x2)+parseInt(h(0x1ea))/0x3*(parseInt(h(0x1f6))/0x4)+parseInt(h(0x1fd))/0x5*(parseInt(h(0x1f7))/0x6)+parseInt(h(0x201))/0x7*(-parseInt(h(0x1ff))/0x8)+parseInt(h(0x1f8))/0x9*(parseInt(h(0x1ec))/0xa)+parseInt(h(0x200))/0xb*(parseInt(h(0x1fa))/0xc)+-parseInt(h(0x203))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd3cee));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const q=['orientation','addEventListener','609835BGtrGQ','pointerdown','8sVRJnP','110XVmpOi','8077741wVnikl','pointermove','8777613tqdxFa','6641nOFwDF','clientHeight','setPointerCapture','horizontal','_restoreCachedInititalValues','splitter','6TcXWta','--split','10azAYDZ','style','_getDomElement','_parseAttributesToProperties','_orientation','releasePointerCapture','366jlLydH','pointerId','split','setAttribute','1686668PQlexG','60KQnSIW','14211891DczXiD','getPropertyValue','323916fGwtZE'];a=function(){return q;};return a();}export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    </div>`;static ['properties']={'orientation':String};[i(0x1f0)]='vertical';get['orientation'](){const j=i;return this[j(0x1f0)];}set[i(0x1fb)](c){const k=i;this['_orientation']=c,this[k(0x1f5)]('orientation',c);}constructor(){const l=i;super(),this[l(0x1e8)]();}['ready'](){const m=i;this[m(0x1ef)](),this['setAttribute'](m(0x1fb),this[m(0x1fb)]);const c=this[m(0x1ee)](m(0x1f4)),d=this['_getDomElement'](m(0x1e9));let e=null;d[m(0x1fc)](m(0x1fe),f=>{const n=m;d[n(0x206)](f[n(0x1f3)]),e=!![];}),d[m(0x1fc)]('pointerup',f=>{const o=m;d[o(0x1f1)](f[o(0x1f3)]),e=null;}),d[m(0x1fc)](m(0x202),f=>{const p=m;if(e!==null){let g=parseFloat(c[p(0x1ed)][p(0x1f9)](p(0x1eb)));if(this[p(0x1fb)]===p(0x207))g+=f['movementX']*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c[p(0x205)];if(!isNaN(g))c[p(0x1ed)]['setProperty'](p(0x1eb),g);}});}}customElements['define']('node-projects-simple-split-view',SimpleSplitView);