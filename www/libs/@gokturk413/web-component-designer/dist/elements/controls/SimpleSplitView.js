const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x163))/0x1*(parseInt(h(0x166))/0x2)+-parseInt(h(0x165))/0x3*(parseInt(h(0x164))/0x4)+-parseInt(h(0x15c))/0x5+-parseInt(h(0x15b))/0x6+-parseInt(h(0x160))/0x7+parseInt(h(0x15e))/0x8*(parseInt(h(0x159))/0x9)+-parseInt(h(0x155))/0xa*(-parseInt(h(0x161))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6fff));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x158)]=css`
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
    }`;static [i(0x157)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x168)]=i(0x153);get[i(0x154)](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0x168)]=c,this[j(0x15d)](j(0x154),c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this[k(0x16e)](),this['setAttribute']('orientation',this[k(0x154)]);const c=this[k(0x16d)](k(0x169)),d=this[k(0x16d)]('splitter');let e=null;d['addEventListener'](k(0x15f),f=>{const l=k;d[l(0x152)](f[l(0x16a)]),e=!![];}),d[k(0x156)](k(0x16c),f=>{const m=k;d[m(0x15a)](f[m(0x16a)]),e=null;}),d[k(0x156)]('pointermove',f=>{const n=k;if(e!==null){let g=parseFloat(c[n(0x158)]['getPropertyValue']('--split'));if(this['orientation']===n(0x167))g+=f[n(0x16f)]*0x64/c[n(0x151)];else g+=f['movementY']*0x64/c[n(0x162)];if(!isNaN(g))c['style']['setProperty']('--split',g);}});}}function a(){const o=['8264809isZHEk','11bSZVGM','clientHeight','116pUSPJE','4HssZnS','631119UZUvZA','10748DwqZLS','horizontal','_orientation','split','pointerId','node-projects-simple-split-view','pointerup','_getDomElement','_parseAttributesToProperties','movementX','clientWidth','setPointerCapture','vertical','orientation','38143870pWBOqa','addEventListener','template','style','4955139HjMiUI','releasePointerCapture','6308466hOJYfJ','5172855yempDv','setAttribute','16NxWGqw','pointerdown'];a=function(){return o;};return a();}function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}customElements['define'](i(0x16b),SimpleSplitView);