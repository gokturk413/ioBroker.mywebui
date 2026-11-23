const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15f))/0x1*(parseInt(h(0x167))/0x2)+-parseInt(h(0x15b))/0x3*(-parseInt(h(0x163))/0x4)+-parseInt(h(0x16d))/0x5*(parseInt(h(0x151))/0x6)+-parseInt(h(0x16b))/0x7*(-parseInt(h(0x14f))/0x8)+parseInt(h(0x159))/0x9+-parseInt(h(0x15d))/0xa+-parseInt(h(0x14e))/0xb*(-parseInt(h(0x162))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb2307));function b(c,d){c=c-0x14e;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x150)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static [i(0x154)]={'orientation':String};['_orientation']=i(0x156);get[i(0x152)](){const j=i;return this[j(0x169)];}set['orientation'](c){const k=i;this[k(0x169)]=c,this['setAttribute']('orientation',c);}constructor(){const l=i;super(),this[l(0x155)]();}['ready'](){const m=i;this['_parseAttributesToProperties'](),this[m(0x164)]('orientation',this['orientation']);const c=this[m(0x168)](m(0x15e)),d=this[m(0x168)](m(0x160));let e=null;d[m(0x153)]('pointerdown',f=>{d['setPointerCapture'](f['pointerId']),e=!![];}),d[m(0x153)]('pointerup',f=>{const n=m;d['releasePointerCapture'](f[n(0x15a)]),e=null;}),d[m(0x153)](m(0x15c),f=>{const o=m;if(e!==null){let g=parseFloat(c[o(0x16a)][o(0x161)]('--split'));if(this[o(0x152)]===o(0x165))g+=f[o(0x16c)]*0x64/c['clientWidth'];else g+=f[o(0x157)]*0x64/c[o(0x166)];if(!isNaN(g))c['style'][o(0x158)]('--split',g);}});}}function a(){const p=['6HJAbUL','orientation','addEventListener','properties','_restoreCachedInititalValues','vertical','movementY','setProperty','12237165kMJGaH','pointerId','36XjLtOI','pointermove','8246320YFKUgG','split','268633QpvjQL','splitter','getPropertyValue','1188KnXMjR','125932ySXKCX','setAttribute','horizontal','clientHeight','2ZWzvCT','_getDomElement','_orientation','style','7VQBCNz','movementX','4463005lvXIGt','48873Biqhzp','4307128GdfZwD','template'];a=function(){return p;};return a();}customElements['define']('node-projects-simple-split-view',SimpleSplitView);