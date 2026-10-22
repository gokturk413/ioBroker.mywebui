const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1b0))/0x1*(parseInt(h(0x1b4))/0x2)+-parseInt(h(0x1aa))/0x3*(parseInt(h(0x1a7))/0x4)+parseInt(h(0x1b3))/0x5+parseInt(h(0x1a1))/0x6*(parseInt(h(0x1a2))/0x7)+parseInt(h(0x1ab))/0x8*(-parseInt(h(0x1a3))/0x9)+parseInt(h(0x1ad))/0xa+parseInt(h(0x1a0))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4919f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x1b2)]=css`
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
    </div>`;static ['properties']={'orientation':String};[i(0x1a9)]='vertical';get['orientation'](){return this['_orientation'];}set[i(0x1a6)](c){const j=i;this['_orientation']=c,this['setAttribute'](j(0x1a6),c);}constructor(){const k=i;super(),this[k(0x1a8)]();}['ready'](){const l=i;this['_parseAttributesToProperties'](),this['setAttribute'](l(0x1a6),this[l(0x1a6)]);const c=this['_getDomElement']('split'),d=this['_getDomElement']('splitter');let e=null;d[l(0x1af)]('pointerdown',f=>{d['setPointerCapture'](f['pointerId']),e=!![];}),d[l(0x1af)](l(0x1b1),f=>{const m=l;d['releasePointerCapture'](f[m(0x1a4)]),e=null;}),d[l(0x1af)](l(0x1a5),f=>{const n=l;if(e!==null){let g=parseFloat(c[n(0x1b2)][n(0x1ae)](n(0x19d)));if(this[n(0x1a6)]==='horizontal')g+=f['movementX']*0x64/c[n(0x1ac)];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c['style']['setProperty'](n(0x19d),g);}});}}function b(c,d){c=c-0x19d;const e=a();let f=e[c];return f;}customElements[i(0x19f)](i(0x19e),SimpleSplitView);function a(){const o=['64104ILZVlv','_restoreCachedInititalValues','_orientation','105tOMcdX','8dcxYKE','clientWidth','2437030EiqMnD','getPropertyValue','addEventListener','271434gdCooA','pointerup','style','60705TURDll','4dPKUlv','--split','node-projects-simple-split-view','define','14849791yVAvxM','2270778uGlOKy','7ufKuvd','5229783JXBWqI','pointerId','pointermove','orientation'];a=function(){return o;};return a();}