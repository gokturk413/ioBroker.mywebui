const i=b;function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x101))/0x1+-parseInt(h(0xf0))/0x2+parseInt(h(0x100))/0x3+parseInt(h(0xf3))/0x4+parseInt(h(0xf4))/0x5+parseInt(h(0xf1))/0x6*(-parseInt(h(0xf8))/0x7)+parseInt(h(0xf2))/0x8*(parseInt(h(0xfb))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x44a86));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0xfd)]=css`
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
    }`;static [i(0x102)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0xef)]='vertical';get['orientation'](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0xef)]=c,this['setAttribute'](j(0x104),c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this['_parseAttributesToProperties'](),this['setAttribute'](k(0x104),this[k(0x104)]);const c=this['_getDomElement']('split'),d=this['_getDomElement']('splitter');let e=null;d['addEventListener'](k(0xf9),f=>{const l=k;d[l(0xff)](f['pointerId']),e=!![];}),d[k(0xfe)](k(0x103),f=>{d['releasePointerCapture'](f['pointerId']),e=null;}),d['addEventListener']('pointermove',f=>{const m=k;if(e!==null){let g=parseFloat(c[m(0xfd)]['getPropertyValue']('--split'));if(this[m(0x104)]===m(0xfa))g+=f[m(0xf7)]*0x64/c[m(0xf6)];else g+=f['movementY']*0x64/c[m(0xfc)];if(!isNaN(g))c['style']['setProperty']('--split',g);}});}}function a(){const n=['557865UZPbxk','template','pointerup','orientation','_orientation','227968UdRpwS','102198uDmmqk','103144npmodB','567304MHUGxn','2015045plnRiI','define','clientWidth','movementX','119eOWKRX','pointerdown','horizontal','405kBRxwL','clientHeight','style','addEventListener','setPointerCapture','352836QNyrIO'];a=function(){return n;};return a();}customElements[i(0xf5)]('node-projects-simple-split-view',SimpleSplitView);