function b(c,d){c=c-0x68;const e=a();let f=e[c];return f;}const i=b;function a(){const q=['187PaqigC','35474cQbPco','510572uqxWwR','168396DQJuFR','_orientation','2246730hzUbJA','5vArbsf','setAttribute','style','setPointerCapture','pointerdown','12658428ZVvHic','clientHeight','splitter','7ImCkII','clientWidth','4354986gWIVxf','orientation','define','--split','releasePointerCapture','_restoreCachedInititalValues','vertical','67fnTKst','template','node-projects-simple-split-view','8863912dXXunv'];a=function(){return q;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x80))/0x1*(parseInt(h(0x6a))/0x2)+parseInt(h(0x6c))/0x3+parseInt(h(0x6b))/0x4+parseInt(h(0x6f))/0x5*(parseInt(h(0x79))/0x6)+parseInt(h(0x77))/0x7*(parseInt(h(0x68))/0x8)+parseInt(h(0x74))/0x9+parseInt(h(0x6e))/0xa*(-parseInt(h(0x69))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc19c1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x71)]=css`
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
    }`;static [i(0x81)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x6d)]=i(0x7f);get[i(0x7a)](){const j=i;return this[j(0x6d)];}set[i(0x7a)](c){const k=i;this[k(0x6d)]=c,this[k(0x70)]('orientation',c);}constructor(){const l=i;super(),this[l(0x7e)]();}['ready'](){const m=i;this['_parseAttributesToProperties'](),this[m(0x70)]('orientation',this[m(0x7a)]);const c=this['_getDomElement']('split'),d=this['_getDomElement'](m(0x76));let e=null;d['addEventListener'](m(0x73),f=>{const n=m;d[n(0x72)](f['pointerId']),e=!![];}),d['addEventListener']('pointerup',f=>{const o=m;d[o(0x7d)](f['pointerId']),e=null;}),d['addEventListener']('pointermove',f=>{const p=m;if(e!==null){let g=parseFloat(c[p(0x71)]['getPropertyValue'](p(0x7c)));if(this[p(0x7a)]==='horizontal')g+=f['movementX']*0x64/c[p(0x78)];else g+=f['movementY']*0x64/c[p(0x75)];if(!isNaN(g))c[p(0x71)]['setProperty']('--split',g);}});}}customElements[i(0x7b)](i(0x82),SimpleSplitView);