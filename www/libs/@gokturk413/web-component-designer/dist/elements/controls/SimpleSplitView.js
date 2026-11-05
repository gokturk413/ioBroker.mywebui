const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x199))/0x1*(-parseInt(h(0x1a8))/0x2)+parseInt(h(0x19c))/0x3+parseInt(h(0x1af))/0x4+parseInt(h(0x1a6))/0x5+-parseInt(h(0x1aa))/0x6+-parseInt(h(0x1ab))/0x7*(-parseInt(h(0x1a0))/0x8)+-parseInt(h(0x19a))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9beef));function b(c,d){c=c-0x197;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x19f)]=css`
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
    </div>`;static [i(0x19d)]={'orientation':String};[i(0x1b2)]='vertical';get['orientation'](){return this['_orientation'];}set[i(0x1a3)](c){const j=i;this[j(0x1b2)]=c,this[j(0x19b)]('orientation',c);}constructor(){const k=i;super(),this[k(0x1a7)]();}['ready'](){const l=i;this[l(0x19e)](),this['setAttribute'](l(0x1a3),this['orientation']);const c=this['_getDomElement'](l(0x1a9)),d=this['_getDomElement']('splitter');let e=null;d[l(0x1a5)](l(0x1b1),f=>{const m=l;d[m(0x1a2)](f['pointerId']),e=!![];}),d[l(0x1a5)](l(0x1ae),f=>{const n=l;d[n(0x1ad)](f['pointerId']),e=null;}),d[l(0x1a5)]('pointermove',f=>{const o=l;if(e!==null){let g=parseFloat(c[o(0x19f)][o(0x1a4)]('--split'));if(this[o(0x1a3)]===o(0x197))g+=f[o(0x198)]*0x64/c[o(0x1ac)];else g+=f['movementY']*0x64/c[o(0x1a1)];if(!isNaN(g))c['style'][o(0x1b0)]('--split',g);}});}}function a(){const p=['_parseAttributesToProperties','style','8KsTYgz','clientHeight','setPointerCapture','orientation','getPropertyValue','addEventListener','2841710buIOuv','_restoreCachedInititalValues','28DsEjvA','split','663684VXFqSV','8445199BgyuXH','clientWidth','releasePointerCapture','pointerup','214064iScIsC','setProperty','pointerdown','_orientation','horizontal','movementX','63751rVBhYs','7975800vAfgIH','setAttribute','2099148pRjPvr','properties'];a=function(){return p;};return a();}customElements['define']('node-projects-simple-split-view',SimpleSplitView);