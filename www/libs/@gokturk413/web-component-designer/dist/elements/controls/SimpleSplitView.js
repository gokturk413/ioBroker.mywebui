const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xfa))/0x1*(-parseInt(h(0x109))/0x2)+parseInt(h(0xf6))/0x3*(parseInt(h(0xfd))/0x4)+parseInt(h(0x102))/0x5+parseInt(h(0x10b))/0x6+parseInt(h(0x103))/0x7+-parseInt(h(0xf3))/0x8+-parseInt(h(0x10c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5924f));function a(){const n=['437826quWTzB','4945194zXqEjB','4258704LLvMZr','pointermove','clientHeight','276753uigPzU','split','addEventListener','style','295511fdPlgr','setAttribute','setProperty','28CcwoBj','define','pointerdown','ready','releasePointerCapture','1692335pVTBvE','659631OMoLZa','movementY','orientation','splitter','properties','_parseAttributesToProperties','2bpBHeU','_orientation'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xf3;const e=a();let f=e[c];return f;}export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    </div>`;static [i(0x107)]={'orientation':String};[i(0x10a)]='vertical';get['orientation'](){return this['_orientation'];}set['orientation'](c){const j=i;this['_orientation']=c,this['setAttribute'](j(0x105),c);}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x100)](){const k=i;this[k(0x108)](),this[k(0xfb)](k(0x105),this[k(0x105)]);const c=this['_getDomElement'](k(0xf7)),d=this['_getDomElement'](k(0x106));let e=null;d['addEventListener'](k(0xff),f=>{d['setPointerCapture'](f['pointerId']),e=!![];}),d[k(0xf8)]('pointerup',f=>{const l=k;d[l(0x101)](f['pointerId']),e=null;}),d[k(0xf8)](k(0xf4),f=>{const m=k;if(e!==null){let g=parseFloat(c['style']['getPropertyValue']('--split'));if(this[m(0x105)]==='horizontal')g+=f['movementX']*0x64/c['clientWidth'];else g+=f[m(0x104)]*0x64/c[m(0xf5)];if(!isNaN(g))c[m(0xf9)][m(0xfc)]('--split',g);}});}}customElements[i(0xfe)]('node-projects-simple-split-view',SimpleSplitView);