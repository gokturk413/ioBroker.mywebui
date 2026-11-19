const i=b;function b(c,d){c=c-0xf1;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x10e))/0x1*(-parseInt(h(0x10f))/0x2)+-parseInt(h(0x105))/0x3*(-parseInt(h(0xf7))/0x4)+-parseInt(h(0xf9))/0x5*(parseInt(h(0x100))/0x6)+-parseInt(h(0x101))/0x7+-parseInt(h(0x109))/0x8+parseInt(h(0xf1))/0x9*(-parseInt(h(0xfc))/0xa)+parseInt(h(0x10c))/0xb*(parseInt(h(0xfe))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd8a99));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    </div>`;static ['properties']={'orientation':String};['_orientation']=i(0xf8);get['orientation'](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0x104)]=c,this['setAttribute']('orientation',c);}constructor(){const k=i;super(),this[k(0xf6)]();}[i(0xfd)](){const l=i;this[l(0x10a)](),this[l(0x106)](l(0x107),this['orientation']);const c=this['_getDomElement']('split'),d=this[l(0x112)]('splitter');let e=null;d['addEventListener']('pointerdown',f=>{const m=l;d[m(0x10d)](f['pointerId']),e=!![];}),d[l(0xf4)](l(0x111),f=>{const n=l;d[n(0xf3)](f[n(0x102)]),e=null;}),d['addEventListener'](l(0x103),f=>{const o=l;if(e!==null){let g=parseFloat(c[o(0x110)]['getPropertyValue']('--split'));if(this['orientation']==='horizontal')g+=f[o(0xf2)]*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c[o(0x10b)];if(!isNaN(g))c[o(0x110)][o(0x108)](o(0xf5),g);}});}}customElements[i(0xfb)](i(0xff),SimpleSplitView);function a(){const p=['_getDomElement','41805nbDSqh','movementX','releasePointerCapture','addEventListener','--split','_restoreCachedInititalValues','131184ZtFkZh','vertical','108995IHYOak','template','define','2570GQyZRF','ready','3876fHwnPh','node-projects-simple-split-view','228pujdnd','8876448MCGPnf','pointerId','pointermove','_orientation','126CIcbcT','setAttribute','orientation','setProperty','4630160pKmXUS','_parseAttributesToProperties','clientHeight','125444sWeIKx','setPointerCapture','21751AbFcHn','28MKGgfG','style','pointerup'];a=function(){return p;};return a();}