const i=b;function b(c,d){c=c-0x77;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x88))/0x1*(-parseInt(h(0x86))/0x2)+parseInt(h(0x8e))/0x3*(-parseInt(h(0x8d))/0x4)+-parseInt(h(0x8f))/0x5*(-parseInt(h(0x81))/0x6)+-parseInt(h(0x92))/0x7+-parseInt(h(0x90))/0x8+-parseInt(h(0x85))/0x9*(-parseInt(h(0x93))/0xa)+-parseInt(h(0x7c))/0xb*(-parseInt(h(0x7a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeb428));function a(){const m=['properties','movementY','addEventListener','6502896mtOrrB','72kFEJsY','--split','10449DMzXqv','pointerId','getPropertyValue','setAttribute','_orientation','8qbUdSO','1180398IZWRgF','5ogMJvx','5652696Rvrghq','pointerdown','11617200tRahAR','10nWzVBq','setProperty','split','pointerup','splitter','1644fjnyCa','style','91003CStnkN','_getDomElement','node-projects-simple-split-view','orientation','vertical','11307804aVShev'];a=function(){return m;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static ['template']=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static [i(0x82)]={'orientation':String};[i(0x8c)]=i(0x80);get[i(0x7f)](){return this['_orientation'];}set['orientation'](c){this['_orientation']=c,this['setAttribute']('orientation',c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const j=i;this['_parseAttributesToProperties'](),this[j(0x8b)](j(0x7f),this['orientation']);const c=this['_getDomElement'](j(0x77)),d=this[j(0x7d)](j(0x79));let e=null;d[j(0x84)](j(0x91),f=>{const k=j;d['setPointerCapture'](f[k(0x89)]),e=!![];}),d['addEventListener'](j(0x78),f=>{d['releasePointerCapture'](f['pointerId']),e=null;}),d['addEventListener']('pointermove',f=>{const l=j;if(e!==null){let g=parseFloat(c[l(0x7b)][l(0x8a)](l(0x87)));if(this[l(0x7f)]==='horizontal')g+=f['movementX']*0x64/c['clientWidth'];else g+=f[l(0x83)]*0x64/c['clientHeight'];if(!isNaN(g))c[l(0x7b)][l(0x94)]('--split',g);}});}}customElements['define'](i(0x7e),SimpleSplitView);