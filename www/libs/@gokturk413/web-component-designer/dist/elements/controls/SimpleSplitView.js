function b(c,d){c=c-0x1bb;const e=a();let f=e[c];return f;}function a(){const p=['2791026LTAQMg','4573597GtxmrO','21039876eyPatE','_orientation','orientation','ready','11684900hCDxBo','node-projects-simple-split-view','style','clientWidth','2ulKEbs','--split','6SGWZml','properties','678935XztiCo','setAttribute','2525091Ayqqxc','1142282vdjUqW','4ThqBNz','movementX','16RApgbA','pointerId','addEventListener'];a=function(){return p;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c1))/0x1+-parseInt(h(0x1d1))/0x2*(parseInt(h(0x1c0))/0x3)+parseInt(h(0x1c2))/0x4*(-parseInt(h(0x1be))/0x5)+-parseInt(h(0x1bc))/0x6*(-parseInt(h(0x1c8))/0x7)+parseInt(h(0x1c4))/0x8*(parseInt(h(0x1c7))/0x9)+parseInt(h(0x1cd))/0xa+-parseInt(h(0x1c9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa979b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    </div>`;static [i(0x1bd)]={'orientation':String};['_orientation']='vertical';get[i(0x1cb)](){const j=i;return this[j(0x1ca)];}set['orientation'](c){const k=i;this[k(0x1ca)]=c,this[k(0x1bf)]('orientation',c);}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x1cc)](){const l=i;this['_parseAttributesToProperties'](),this['setAttribute'](l(0x1cb),this[l(0x1cb)]);const c=this['_getDomElement']('split'),d=this['_getDomElement']('splitter');let e=null;d[l(0x1c6)]('pointerdown',f=>{const m=l;d['setPointerCapture'](f[m(0x1c5)]),e=!![];}),d['addEventListener']('pointerup',f=>{const n=l;d['releasePointerCapture'](f[n(0x1c5)]),e=null;}),d['addEventListener']('pointermove',f=>{const o=l;if(e!==null){let g=parseFloat(c['style']['getPropertyValue'](o(0x1bb)));if(this['orientation']==='horizontal')g+=f[o(0x1c3)]*0x64/c[o(0x1d0)];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c[o(0x1cf)]['setProperty']('--split',g);}});}}customElements['define'](i(0x1ce),SimpleSplitView);