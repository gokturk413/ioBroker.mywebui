const i=b;function b(c,d){c=c-0xd0;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd6))/0x1+parseInt(h(0xe5))/0x2*(-parseInt(h(0xd0))/0x3)+parseInt(h(0xd9))/0x4*(parseInt(h(0xe4))/0x5)+parseInt(h(0xe1))/0x6+-parseInt(h(0xe3))/0x7+parseInt(h(0xeb))/0x8+parseInt(h(0xe6))/0x9*(-parseInt(h(0xd7))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x54338));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0xe0)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};['_orientation']=i(0xd1);get['orientation'](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0xe2)]=c,this['setAttribute'](j(0xea),c);}constructor(){const k=i;super(),this[k(0xd4)]();}[i(0xd5)](){const l=i;this['_parseAttributesToProperties'](),this['setAttribute']('orientation',this['orientation']);const c=this[l(0xdd)](l(0xed)),d=this['_getDomElement'](l(0xe7));let e=null;d[l(0xd8)](l(0xd3),f=>{const m=l;d['setPointerCapture'](f[m(0xde)]),e=!![];}),d[l(0xd8)](l(0xdc),f=>{const n=l;d[n(0xe9)](f['pointerId']),e=null;}),d[l(0xd8)]('pointermove',f=>{const o=l;if(e!==null){let g=parseFloat(c[o(0xda)][o(0xd2)]('--split'));if(this['orientation']==='horizontal')g+=f['movementX']*0x64/c[o(0xdb)];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c['style'][o(0xe8)](o(0xdf),g);}});}}customElements[i(0xec)]('node-projects-simple-split-view',SimpleSplitView);function a(){const p=['1208712WdJLWn','vertical','getPropertyValue','pointerdown','_restoreCachedInititalValues','ready','294329kFrWVN','10JpoBAa','addEventListener','16kBnDUk','style','clientWidth','pointerup','_getDomElement','pointerId','--split','template','3501486cZdgwY','_orientation','104216RQSmNd','749885zyLzyr','2xlJbBs','5214249myqzKr','splitter','setProperty','releasePointerCapture','orientation','3623048nLrIpV','define','split'];a=function(){return p;};return a();}