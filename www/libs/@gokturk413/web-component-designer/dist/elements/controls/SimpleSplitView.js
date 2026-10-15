const i=b;function b(c,d){c=c-0x12c;const e=a();let f=e[c];return f;}function a(){const p=['clientHeight','orientation','90GaFIdO','1eMVbzd','52208bBNFRz','pointerup','21632TXhkZs','split','26328bRHUad','pointermove','movementX','3808NNqBCN','316188RKWYqv','12sIxMxv','pointerId','setProperty','_getDomElement','horizontal','setAttribute','5229983WUlVhf','_restoreCachedInititalValues','137784PLbjoz','605770gWTKWP','splitter','213dNXnRt','addEventListener','movementY','_orientation','18ZQgeAD','style','releasePointerCapture','203VrMVaY','clientWidth'];a=function(){return p;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x139))/0x1*(parseInt(h(0x142))/0x2)+parseInt(h(0x12d))/0x3*(-parseInt(h(0x13e))/0x4)+parseInt(h(0x138))/0x5*(-parseInt(h(0x14b))/0x6)+parseInt(h(0x134))/0x7*(-parseInt(h(0x13c))/0x8)+-parseInt(h(0x131))/0x9*(parseInt(h(0x14c))/0xa)+parseInt(h(0x149))/0xb*(parseInt(h(0x143))/0xc)+-parseInt(h(0x13a))/0xd*(-parseInt(h(0x141))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x506fb));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    </div>`;static ['properties']={'orientation':String};[i(0x130)]='vertical';get['orientation'](){const j=i;return this[j(0x130)];}set['orientation'](c){this['_orientation']=c,this['setAttribute']('orientation',c);}constructor(){const k=i;super(),this[k(0x14a)]();}['ready'](){const l=i;this['_parseAttributesToProperties'](),this[l(0x148)]('orientation',this[l(0x137)]);const c=this[l(0x146)](l(0x13d)),d=this['_getDomElement'](l(0x12c));let e=null;d[l(0x12e)]('pointerdown',f=>{const m=l;d['setPointerCapture'](f[m(0x144)]),e=!![];}),d['addEventListener'](l(0x13b),f=>{const n=l;d[n(0x133)](f[n(0x144)]),e=null;}),d['addEventListener'](l(0x13f),f=>{const o=l;if(e!==null){let g=parseFloat(c[o(0x132)]['getPropertyValue']('--split'));if(this[o(0x137)]===o(0x147))g+=f[o(0x140)]*0x64/c[o(0x135)];else g+=f[o(0x12f)]*0x64/c[o(0x136)];if(!isNaN(g))c['style'][o(0x145)]('--split',g);}});}}customElements['define']('node-projects-simple-split-view',SimpleSplitView);