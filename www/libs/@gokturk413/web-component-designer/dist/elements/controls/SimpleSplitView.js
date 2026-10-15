const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xdc))/0x1+parseInt(h(0xd6))/0x2*(parseInt(h(0xde))/0x3)+-parseInt(h(0xcc))/0x4*(parseInt(h(0xd0))/0x5)+parseInt(h(0xc7))/0x6+-parseInt(h(0xc2))/0x7*(-parseInt(h(0xc3))/0x8)+parseInt(h(0xdb))/0x9*(-parseInt(h(0xca))/0xa)+-parseInt(h(0xd8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf315a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const n=['2517WVmosw','movementX','49qZMiQo','1770064vkJGkW','--split','setProperty','setAttribute','1455300gqwZkE','node-projects-simple-split-view','properties','59240izMmZz','vertical','2486392pqYlpu','split','pointermove','_parseAttributesToProperties','5NSLkpB','getPropertyValue','addEventListener','ready','setPointerCapture','movementY','1414TUpwYu','style','7308059XqqQOu','_orientation','_getDomElement','2583nTsVMw','1597300gtpDhR','orientation'];a=function(){return n;};return a();}function b(c,d){c=c-0xc1;const e=a();let f=e[c];return f;}export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0xd7)]=css`
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
    </div>`;static [i(0xc9)]={'orientation':String};['_orientation']=i(0xcb);get[i(0xdd)](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0xd9)]=c,this[j(0xc6)](j(0xdd),c);}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0xd3)](){const k=i;this[k(0xcf)](),this['setAttribute']('orientation',this[k(0xdd)]);const c=this[k(0xda)](k(0xcd)),d=this['_getDomElement']('splitter');let e=null;d['addEventListener']('pointerdown',f=>{const l=k;d[l(0xd4)](f['pointerId']),e=!![];}),d[k(0xd2)]('pointerup',f=>{d['releasePointerCapture'](f['pointerId']),e=null;}),d[k(0xd2)](k(0xce),f=>{const m=k;if(e!==null){let g=parseFloat(c['style'][m(0xd1)]('--split'));if(this[m(0xdd)]==='horizontal')g+=f[m(0xc1)]*0x64/c['clientWidth'];else g+=f[m(0xd5)]*0x64/c['clientHeight'];if(!isNaN(g))c[m(0xd7)][m(0xc5)](m(0xc4),g);}});}}customElements['define'](i(0xc8),SimpleSplitView);