const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xcb))/0x1+-parseInt(h(0xb6))/0x2*(-parseInt(h(0xbc))/0x3)+-parseInt(h(0xc6))/0x4*(-parseInt(h(0xba))/0x5)+-parseInt(h(0xbf))/0x6*(-parseInt(h(0xb7))/0x7)+parseInt(h(0xc7))/0x8*(-parseInt(h(0xb9))/0x9)+-parseInt(h(0xc5))/0xa*(parseInt(h(0xc8))/0xb)+-parseInt(h(0xc0))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x381e0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class SimpleSplitView extends BaseCustomWebComponentConstructorAppend{static [i(0xb2)]=css`
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
    </div>`;static [i(0xbb)]={'orientation':String};[i(0xbd)]='vertical';get[i(0xcd)](){return this['_orientation'];}set[i(0xcd)](c){const j=i;this[j(0xbd)]=c,this['setAttribute']('orientation',c);}constructor(){super(),this['_restoreCachedInititalValues']();}[i(0xc1)](){const k=i;this[k(0xb4)](),this['setAttribute'](k(0xcd),this['orientation']);const c=this['_getDomElement'](k(0xc2)),d=this[k(0xc4)](k(0xc3));let e=null;d[k(0xb8)]('pointerdown',f=>{const l=k;d['setPointerCapture'](f[l(0xb3)]),e=!![];}),d[k(0xb8)]('pointerup',f=>{d['releasePointerCapture'](f['pointerId']),e=null;}),d['addEventListener'](k(0xcc),f=>{const m=k;if(e!==null){let g=parseFloat(c['style']['getPropertyValue']('--split'));if(this[m(0xcd)]===m(0xb5))g+=f[m(0xbe)]*0x64/c[m(0xc9)];else g+=f['movementY']*0x64/c['clientHeight'];if(!isNaN(g))c[m(0xb2)]['setProperty']('--split',g);}});}}function b(c,d){c=c-0xb2;const e=a();let f=e[c];return f;}customElements[i(0xca)]('node-projects-simple-split-view',SimpleSplitView);function a(){const n=['1114794HPCnSU','12205EENXNY','properties','3mkVfxH','_orientation','movementX','6hOhTJU','9995916GiEyZO','ready','split','splitter','_getDomElement','7350bOLWJt','684oNOWMr','8UbDTIz','55oKtkyR','clientWidth','define','47957ZBLSdV','pointermove','orientation','style','pointerId','_parseAttributesToProperties','horizontal','847510HXumFD','2780267cRNorq','addEventListener'];a=function(){return n;};return a();}