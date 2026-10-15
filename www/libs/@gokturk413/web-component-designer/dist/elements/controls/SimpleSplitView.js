const i=b;function b(c,d){c=c-0x1cf;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1d6))/0x1+parseInt(h(0x1d4))/0x2+parseInt(h(0x1d2))/0x3*(parseInt(h(0x1da))/0x4)+parseInt(h(0x1e0))/0x5*(parseInt(h(0x1de))/0x6)+parseInt(h(0x1d7))/0x7+-parseInt(h(0x1d5))/0x8+parseInt(h(0x1cf))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70b70));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const o=['7922916GsBjcg','setAttribute','pointerdown','654204MXdSPD','addEventListener','336342DcaeYE','5403728SEJdLA','605637VjBQwk','982247gNXOve','style','pointerId','4AbteRy','pointerup','orientation','_orientation','6UUtUGl','movementX','1679495LBzohG','_getDomElement','split'];a=function(){return o;};return a();}export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x1d8)]=css`
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
    </div>`;static ['properties']={'orientation':String};[i(0x1dd)]='vertical';get['orientation'](){return this['_orientation'];}set['orientation'](c){const j=i;this[j(0x1dd)]=c,this['setAttribute'](j(0x1dc),c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this['_parseAttributesToProperties'](),this[k(0x1d0)]('orientation',this[k(0x1dc)]);const c=this[k(0x1e1)](k(0x1e2)),d=this[k(0x1e1)]('splitter');let e=null;d['addEventListener'](k(0x1d1),f=>{const l=k;d['setPointerCapture'](f[l(0x1d9)]),e=!![];}),d[k(0x1d3)](k(0x1db),f=>{const m=k;d['releasePointerCapture'](f[m(0x1d9)]),e=null;}),d[k(0x1d3)]('pointermove',f=>{const n=k;if(e!==null){let g=parseFloat(c[n(0x1d8)]['getPropertyValue']('--split'));if(this[n(0x1dc)]==='horizontal')g+=f[n(0x1df)]*0x64/c['clientWidth'];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c[n(0x1d8)]['setProperty']('--split',g);}});}}customElements['define']('node-projects-simple-split-view',SimpleSplitView);