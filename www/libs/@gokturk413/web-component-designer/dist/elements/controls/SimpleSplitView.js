const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xde))/0x1*(parseInt(h(0xd5))/0x2)+-parseInt(h(0xd9))/0x3+parseInt(h(0xe1))/0x4*(-parseInt(h(0xdb))/0x5)+-parseInt(h(0xe5))/0x6+-parseInt(h(0xe8))/0x7*(parseInt(h(0xdd))/0x8)+-parseInt(h(0xe3))/0x9*(-parseInt(h(0xd0))/0xa)+parseInt(h(0xdc))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5f8ce));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0xd6)]=css`
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
    #splitter {
      user-select: none;
      -webkit-user-select: none;
    }
    :host(:not([orientation="vertical"])) > div > #splitter {
      cursor: ew-resize;
      width: 5px;
    }
    :host([orientation="vertical"]) > div > #splitter {
      cursor: ns-resize;
      height: 5px;
    }`;static ['template']=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0xe6)]=i(0xd8);constructor(){super();}[i(0xd1)](){const j=i;this['_parseAttributesToProperties'](),this['setAttribute']('orientation',this[j(0xe6)]);const c=this['_getDomElement']('split'),d=this[j(0xd2)](j(0xdf));let e=null;d[j(0xda)]('pointerdown',f=>{const k=j;d['setPointerCapture'](f[k(0xe2)]),e=!![];}),d['addEventListener'](j(0xce),f=>{const l=j;d[l(0xe4)](f['pointerId']),e=null;}),d[j(0xda)]('pointermove',f=>{const m=j;if(e!==null){let g=parseFloat(c['style']['getPropertyValue'](m(0xd7)));if(this[m(0xe6)]===m(0xd3))g+=f[m(0xe7)]*0x64/c[m(0xe0)];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c[m(0xd6)][m(0xd4)](m(0xd7),g);}});}}function b(c,d){c=c-0xce;const e=a();let f=e[c];return f;}function a(){const n=['360YLIVsd','205ByYpuL','splitter','clientWidth','328744XahMCU','pointerId','27ndKDVf','releasePointerCapture','2600526YiSUdE','orientation','movementX','5859OBpQGS','pointerup','node-projects-simple-split-view','1324370EqjNpM','ready','_getDomElement','horizontal','setProperty','3246gdRelR','style','--split','vertical','1481265RQtzvR','addEventListener','45ccpeOO','22344223ncmkVa'];a=function(){return n;};return a();}customElements['define'](i(0xcf),SimpleSplitView);