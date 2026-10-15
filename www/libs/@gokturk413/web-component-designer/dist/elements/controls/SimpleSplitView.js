const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x133))/0x1*(-parseInt(h(0x12c))/0x2)+-parseInt(h(0x135))/0x3+parseInt(h(0x11c))/0x4*(parseInt(h(0x12e))/0x5)+-parseInt(h(0x11d))/0x6*(-parseInt(h(0x128))/0x7)+parseInt(h(0x12d))/0x8+-parseInt(h(0x127))/0x9*(parseInt(h(0x134))/0xa)+parseInt(h(0x11e))/0xb*(parseInt(h(0x132))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x89553));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x125)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x124)]='vertical';get[i(0x122)](){const j=i;return this[j(0x124)];}set['orientation'](c){const k=i;this['_orientation']=c,this['setAttribute'](k(0x122),c);}constructor(){const l=i;super(),this[l(0x12b)]();}['ready'](){const m=i;this['_parseAttributesToProperties'](),this['setAttribute'](m(0x122),this[m(0x122)]);const c=this[m(0x121)]('split'),d=this[m(0x121)]('splitter');let e=null;d['addEventListener'](m(0x123),f=>{d['setPointerCapture'](f['pointerId']),e=!![];}),d['addEventListener']('pointerup',f=>{const n=m;d[n(0x129)](f['pointerId']),e=null;}),d['addEventListener'](m(0x136),f=>{const o=m;if(e!==null){let g=parseFloat(c['style'][o(0x130)](o(0x12a)));if(this[o(0x122)]===o(0x126))g+=f['movementX']*0x64/c[o(0x131)];else g+=f[o(0x12f)]*0x64/c['clientHeight'];if(!isNaN(g))c['style'][o(0x11f)]('--split',g);}});}}function a(){const p=['7088936YhVGxy','815XAivTe','movementY','getPropertyValue','clientWidth','12rlSNbs','38122CUPnmZ','10ZpEndp','2939703xoaATQ','pointermove','3524HlpxHd','2180766jkAOni','5560709OGEvbb','setProperty','define','_getDomElement','orientation','pointerdown','_orientation','template','horizontal','5105313EboRdy','14sHDEtb','releasePointerCapture','--split','_restoreCachedInititalValues','8LjhWez'];a=function(){return p;};return a();}function b(c,d){c=c-0x11c;const e=a();let f=e[c];return f;}customElements[i(0x120)]('node-projects-simple-split-view',SimpleSplitView);