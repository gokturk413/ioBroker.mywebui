const i=b;function b(c,d){c=c-0x6b;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x77))/0x1*(parseInt(h(0x6d))/0x2)+-parseInt(h(0x75))/0x3+-parseInt(h(0x71))/0x4+-parseInt(h(0x85))/0x5*(parseInt(h(0x7b))/0x6)+-parseInt(h(0x8b))/0x7*(-parseInt(h(0x87))/0x8)+parseInt(h(0x76))/0x9*(parseInt(h(0x83))/0xa)+-parseInt(h(0x7a))/0xb*(parseInt(h(0x7f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3c372));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [i(0x6c)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static ['properties']={'orientation':String};[i(0x6f)]=i(0x7c);get[i(0x70)](){return this['_orientation'];}set[i(0x70)](c){const j=i;this['_orientation']=c,this['setAttribute'](j(0x70),c);}constructor(){const k=i;super(),this[k(0x8a)]();}['ready'](){const l=i;this[l(0x8c)](),this[l(0x6b)](l(0x70),this[l(0x70)]);const c=this['_getDomElement'](l(0x7d)),d=this['_getDomElement'](l(0x7e));let e=null;d[l(0x6e)]('pointerdown',f=>{const m=l;d[m(0x89)](f['pointerId']),e=!![];}),d[l(0x6e)](l(0x74),f=>{const n=l;d[n(0x80)](f[n(0x86)]),e=null;}),d['addEventListener'](l(0x78),f=>{const o=l;if(e!==null){let g=parseFloat(c['style']['getPropertyValue']('--split'));if(this[o(0x70)]===o(0x73))g+=f[o(0x72)]*0x64/c[o(0x81)];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c[o(0x79)][o(0x8d)](o(0x88),g);}});}}customElements[i(0x84)](i(0x82),SimpleSplitView);function a(){const p=['releasePointerCapture','clientWidth','node-projects-simple-split-view','20CcpvPx','define','20mjrYTA','pointerId','46544soAIEA','--split','setPointerCapture','_restoreCachedInititalValues','182VDUSmi','_parseAttributesToProperties','setProperty','setAttribute','template','772014elNddY','addEventListener','_orientation','orientation','77484tuTsLO','movementX','horizontal','pointerup','467976bmwhFo','1068993ptPxlF','1CCnEaz','pointermove','style','28028lHelhX','510126mGanMH','vertical','split','splitter','60abYYvn'];a=function(){return p;};return a();}