const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xa0))/0x1+-parseInt(h(0xb4))/0x2+-parseInt(h(0xb0))/0x3+parseInt(h(0xb1))/0x4*(parseInt(h(0xb5))/0x5)+-parseInt(h(0xa3))/0x6*(-parseInt(h(0xa1))/0x7)+parseInt(h(0xa7))/0x8*(-parseInt(h(0xaf))/0x9)+-parseInt(h(0xa2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x663b5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0xae)]=css`
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
    }`;static [i(0xab)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};['_orientation']='vertical';get['orientation'](){return this['_orientation'];}set[i(0xa9)](c){const j=i;this[j(0xa4)]=c,this['setAttribute'](j(0xa9),c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this[k(0xac)](),this['setAttribute']('orientation',this['orientation']);const c=this[k(0xb7)]('split'),d=this[k(0xb7)]('splitter');let e=null;d[k(0xa8)]('pointerdown',f=>{const l=k;d['setPointerCapture'](f[l(0xa5)]),e=!![];}),d[k(0xa8)]('pointerup',f=>{const m=k;d[m(0xb2)](f[m(0xa5)]),e=null;}),d[k(0xa8)](k(0xad),f=>{const n=k;if(e!==null){let g=parseFloat(c[n(0xae)][n(0xb3)](n(0xa6)));if(this[n(0xa9)]===n(0xaa))g+=f[n(0xb6)]*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c['style']['setProperty'](n(0xa6),g);}});}}function b(c,d){c=c-0xa0;const e=a();let f=e[c];return f;}function a(){const o=['--split','13064OghmGH','addEventListener','orientation','horizontal','template','_parseAttributesToProperties','pointermove','style','396kGAUrg','114756ovZzWS','284nUgSPQ','releasePointerCapture','getPropertyValue','927232QRvKUa','17905lmNfTA','movementX','_getDomElement','128937WUUrxC','7NIQuDH','861460fWiGOy','4172514gvqFDj','_orientation','pointerId'];a=function(){return o;};return a();}customElements['define']('node-projects-simple-split-view',SimpleSplitView);