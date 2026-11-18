function b(c,d){c=c-0x13e;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x151))/0x1*(parseInt(h(0x152))/0x2)+-parseInt(h(0x14c))/0x3*(-parseInt(h(0x146))/0x4)+parseInt(h(0x148))/0x5*(-parseInt(h(0x140))/0x6)+-parseInt(h(0x149))/0x7+parseInt(h(0x147))/0x8*(parseInt(h(0x153))/0x9)+parseInt(h(0x145))/0xa+-parseInt(h(0x13e))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x78235));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0x13f)]=css`
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
    }`;static [i(0x144)]=html`
    <div id="split" style="--split: 50;">
      <slot name="top"></slot>  
      <div id="splitter"></div>
      <slot name="bottom"></slot>
    </div>`;static [i(0x156)]={'orientation':String};['_orientation']=i(0x155);get[i(0x14a)](){return this['_orientation'];}set[i(0x14a)](c){const j=i;this['_orientation']=c,this[j(0x141)]('orientation',c);}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const k=i;this['_parseAttributesToProperties'](),this['setAttribute']('orientation',this[k(0x14a)]);const c=this['_getDomElement'](k(0x143)),d=this['_getDomElement']('splitter');let e=null;d['addEventListener']('pointerdown',f=>{const l=k;d[l(0x14b)](f['pointerId']),e=!![];}),d[k(0x154)](k(0x14d),f=>{d['releasePointerCapture'](f['pointerId']),e=null;}),d[k(0x154)]('pointermove',f=>{const m=k;if(e!==null){let g=parseFloat(c[m(0x13f)][m(0x150)]('--split'));if(this[m(0x14a)]==='horizontal')g+=f[m(0x142)]*0x64/c['clientWidth'];else g+=f[m(0x14f)]*0x64/c[m(0x157)];if(!isNaN(g))c[m(0x13f)][m(0x14e)]('--split',g);}});}}customElements['define']('node-projects-simple-split-view',SimpleSplitView);function a(){const n=['4574VKgRRr','1647819DlVXeY','addEventListener','vertical','properties','clientHeight','4117245wgaHHK','style','631644GCXovt','setAttribute','movementX','split','template','7068880JtpoEB','4aTaMXG','24POvCnd','30ZQhyuc','935410VTjolO','orientation','setPointerCapture','76746IUlgNp','pointerup','setProperty','movementY','getPropertyValue','153CrUGZg'];a=function(){return n;};return a();}