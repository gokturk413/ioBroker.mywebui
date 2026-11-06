const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x13f))/0x1+parseInt(h(0x13b))/0x2+-parseInt(h(0x131))/0x3*(-parseInt(h(0x13c))/0x4)+parseInt(h(0x125))/0x5+parseInt(h(0x130))/0x6*(parseInt(h(0x129))/0x7)+-parseInt(h(0x12c))/0x8*(parseInt(h(0x136))/0x9)+parseInt(h(0x13a))/0xa*(parseInt(h(0x139))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56128));function b(c,d){c=c-0x125;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x13d)]=css`
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
    </div>`;static [i(0x12e)]={'orientation':String};[i(0x126)]=i(0x12f);get[i(0x128)](){return this['_orientation'];}set[i(0x128)](c){const j=i;this['_orientation']=c,this[j(0x13e)](j(0x128),c);}constructor(){const k=i;super(),this[k(0x127)]();}['ready'](){const l=i;this['_parseAttributesToProperties'](),this[l(0x13e)]('orientation',this[l(0x128)]);const c=this['_getDomElement']('split'),d=this[l(0x134)](l(0x133));let e=null;d['addEventListener']('pointerdown',f=>{const m=l;d[m(0x140)](f[m(0x141)]),e=!![];}),d['addEventListener']('pointerup',f=>{const n=l;d[n(0x12a)](f['pointerId']),e=null;}),d[l(0x137)]('pointermove',f=>{const o=l;if(e!==null){let g=parseFloat(c['style']['getPropertyValue'](o(0x12d)));if(this['orientation']==='horizontal')g+=f[o(0x12b)]*0x64/c[o(0x135)];else g+=f[o(0x138)]*0x64/c[o(0x132)];if(!isNaN(g))c[o(0x13d)]['setProperty']('--split',g);}});}}function a(){const p=['--split','properties','vertical','179226POzjQZ','61917ZUAHJO','clientHeight','splitter','_getDomElement','clientWidth','29574AutqYs','addEventListener','movementY','418FwXtIP','168040tMycwQ','112194wdQjSe','24BIduZf','style','setAttribute','607922VIbBQc','setPointerCapture','pointerId','2942950OLosjF','_orientation','_restoreCachedInititalValues','orientation','7rgKulD','releasePointerCapture','movementX','1160oWUeoz'];a=function(){return p;};return a();}customElements['define']('node-projects-simple-split-view',SimpleSplitView);