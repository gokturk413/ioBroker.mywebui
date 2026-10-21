function b(c,d){c=c-0x111;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x124))/0x1*(-parseInt(h(0x117))/0x2)+parseInt(h(0x127))/0x3*(parseInt(h(0x11e))/0x4)+-parseInt(h(0x120))/0x5+parseInt(h(0x112))/0x6+parseInt(h(0x11f))/0x7+-parseInt(h(0x114))/0x8+parseInt(h(0x11d))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96898));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const n=['movementX','13263Lnukle','ready','addEventListener','define','setPointerCapture','5981334FhbKHZ','style','3927544CEIEiB','pointerId','setAttribute','634jGlyTb','clientWidth','_orientation','pointerdown','orientation','_parseAttributesToProperties','5398578ZMwfgb','148ruRSqq','5468519pAPgzB','3050495ofOytP','--split','split','template','2599MFrBGr','clientHeight'];a=function(){return n;};return a();}export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x123)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x119)]='vertical';get[i(0x11b)](){return this['_orientation'];}set[i(0x11b)](c){const j=i;this[j(0x119)]=c,this['setAttribute'](j(0x11b),c);}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x128)](){const k=i;this[k(0x11c)](),this[k(0x116)]('orientation',this[k(0x11b)]);const c=this['_getDomElement'](k(0x122)),d=this['_getDomElement']('splitter');let e=null;d[k(0x129)](k(0x11a),f=>{const l=k;d[l(0x111)](f[l(0x115)]),e=!![];}),d[k(0x129)]('pointerup',f=>{d['releasePointerCapture'](f['pointerId']),e=null;}),d['addEventListener']('pointermove',f=>{const m=k;if(e!==null){let g=parseFloat(c[m(0x113)]['getPropertyValue'](m(0x121)));if(this[m(0x11b)]==='horizontal')g+=f[m(0x126)]*0x64/c[m(0x118)];else g+=f['movementY']*0x64/c[m(0x125)];if(!isNaN(g))c[m(0x113)]['setProperty'](m(0x121),g);}});}}customElements[i(0x12a)]('node-projects-simple-split-view',SimpleSplitView);