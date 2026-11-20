const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x110))/0x1+parseInt(h(0x121))/0x2*(parseInt(h(0x118))/0x3)+parseInt(h(0x119))/0x4*(parseInt(h(0x10f))/0x5)+parseInt(h(0x116))/0x6*(-parseInt(h(0x107))/0x7)+-parseInt(h(0x11c))/0x8*(-parseInt(h(0x10a))/0x9)+parseInt(h(0x117))/0xa*(-parseInt(h(0x120))/0xb)+parseInt(h(0x11b))/0xc*(parseInt(h(0x106))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1d689));function a(){const q=['getPropertyValue','13XOupkI','491197awDuNz','releasePointerCapture','_orientation','14247cZbboT','addEventListener','_parseAttributesToProperties','setPointerCapture','_getDomElement','29015kwyQlt','75537qHLMbN','orientation','setAttribute','split','vertical','_restoreCachedInititalValues','6aRaESE','40RLQNcL','5541PufIAA','12OHOyZH','properties','440940VfZBwG','496vWjzwg','--split','template','style','210034oDoeUS','206wVvaQa','define'];a=function(){return q;};return a();}function b(c,d){c=c-0x105;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x11e)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static [i(0x11a)]={'orientation':String};['_orientation']=i(0x114);get['orientation'](){const j=i;return this[j(0x109)];}set['orientation'](c){const k=i;this[k(0x109)]=c,this[k(0x112)]('orientation',c);}constructor(){const l=i;super(),this[l(0x115)]();}['ready'](){const m=i;this[m(0x10c)](),this['setAttribute']('orientation',this[m(0x111)]);const c=this[m(0x10e)](m(0x113)),d=this['_getDomElement']('splitter');let e=null;d[m(0x10b)]('pointerdown',f=>{const n=m;d[n(0x10d)](f['pointerId']),e=!![];}),d['addEventListener']('pointerup',f=>{const o=m;d[o(0x108)](f['pointerId']),e=null;}),d['addEventListener']('pointermove',f=>{const p=m;if(e!==null){let g=parseFloat(c[p(0x11f)][p(0x105)](p(0x11d)));if(this['orientation']==='horizontal')g+=f['movementX']*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c[p(0x11f)]['setProperty']('--split',g);}});}}customElements[i(0x122)]('node-projects-simple-split-view',SimpleSplitView);