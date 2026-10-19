const i=b;function a(){const q=['8582vaChwD','setProperty','15215882qsqock','3304ARxoEG','9Rxxojq','_getDomElement','setAttribute','releasePointerCapture','properties','define','3599844jemOTx','pointerdown','horizontal','addEventListener','getPropertyValue','9832afjFKn','clientHeight','30250lFPPfY','80312Yoriib','ready','style','template','32989116yJginR','23fMDVPp','splitter','_orientation','setPointerCapture','pointerId','_restoreCachedInititalValues','vertical','765KWOWmJ','orientation','10gpaVFS','pointerup'];a=function(){return q;};return a();}function b(c,d){c=c-0xea;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xfc))/0x1*(-parseInt(h(0x107))/0x2)+parseInt(h(0x10b))/0x3*(-parseInt(h(0xf7))/0x4)+parseInt(h(0x105))/0x5*(parseInt(h(0xef))/0x6)+parseInt(h(0x10a))/0x7*(parseInt(h(0xf4))/0x8)+-parseInt(h(0x103))/0x9*(-parseInt(h(0xf6))/0xa)+parseInt(h(0x109))/0xb+-parseInt(h(0xfb))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xad49d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0xfa)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static [i(0xed)]={'orientation':String};['_orientation']=i(0x102);get[i(0x104)](){const j=i;return this[j(0xfe)];}set[i(0x104)](c){const k=i;this[k(0xfe)]=c,this['setAttribute'](k(0x104),c);}constructor(){const l=i;super(),this[l(0x101)]();}[i(0xf8)](){const m=i;this['_parseAttributesToProperties'](),this[m(0xeb)]('orientation',this['orientation']);const c=this['_getDomElement']('split'),d=this[m(0xea)](m(0xfd));let e=null;d['addEventListener'](m(0xf0),f=>{const n=m;d[n(0xff)](f[n(0x100)]),e=!![];}),d['addEventListener'](m(0x106),f=>{const o=m;d[o(0xec)](f['pointerId']),e=null;}),d[m(0xf2)]('pointermove',f=>{const p=m;if(e!==null){let g=parseFloat(c['style'][p(0xf3)]('--split'));if(this['orientation']===p(0xf1))g+=f['movementX']*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c[p(0xf5)];if(!isNaN(g))c[p(0xf9)][p(0x108)]('--split',g);}});}}customElements[i(0xee)]('node-projects-simple-split-view',SimpleSplitView);