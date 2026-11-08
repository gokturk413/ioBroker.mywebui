const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x101))/0x1*(parseInt(h(0xfb))/0x2)+parseInt(h(0xf9))/0x3+-parseInt(h(0xfa))/0x4+parseInt(h(0xf7))/0x5*(-parseInt(h(0x106))/0x6)+-parseInt(h(0xff))/0x7+-parseInt(h(0xf8))/0x8*(parseInt(h(0x105))/0x9)+parseInt(h(0x109))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x55103));function a(){const r=['img','currentToolOnButton','tools','_div','Transform','showTool','style','setTool','445215oDFcyv','732184DqeExa','1935402TPviOK','1329724JBpoIx','164284UxOtcV','div','_longPress','_img','1545341IVWpkz','getRootNode','4dffDUp','showPopup','popup','focus','63eQexxJ','6hhgwDm','host','setAttribute','13147510DOhORD'];a=function(){return r;};return a();}function b(c,d){c=c-0xf0;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0xf5)]=css`
    :host {
      display: block;
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
    }

    button {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      padding: 4px;
      border: 0;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      color: inherit;
      cursor: pointer;
    }

    button[aria-pressed="true"] {
      background-color: var(--wcd-designer-view-tool-selected-background, deepskyblue);
    }

    button:hover {
      background-color: var(--wcd-designer-view-tool-hover-background, rgba(164,206,249,.6));
    }

    button:focus-visible {
      outline: 2px solid var(--wcd-color-focus, #47977c);
      outline-offset: -2px;
    }

    img {
      width: 16px;
      height: 16px;
      pointer-events: none;
      -webkit-user-drag: none;
      filter: var(--wcd-designer-view-toolbar-icon-filter, none);
    }
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x103)];[i(0xf0)];[i(0xfe)];[i(0xf2)];[i(0xfd)];constructor(c,d){const j=i;super(),this['tools']=d,this['_img']=this['_getDomElement'](j(0x10a)),this['_div']=this['_getDomElement'](j(0xfc)),this['_div']['onclick']=f=>{const k=j;if(f['detail']===0x0){const g=this[k(0x100)]()[k(0x107)];if(this[k(0xf0)])g['setTool'](this['currentToolOnButton']);else{if(this['popup'])g['showPopup'](this);}}},this[j(0xf2)]['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this[l(0x100)]()[l(0x107)][l(0xf6)](this[l(0xf0)]),setTimeout(()=>{const m=l;c['clickOverlay'][m(0x104)]();},0x32),this[l(0x103)]&&(this[l(0xfd)]=setTimeout(()=>{const n=l;this[n(0xfd)]=null,this[n(0x100)]()['host'][n(0x102)](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host'][l(0x102)](this);}},this[j(0xf2)]['onpointerup']=()=>{const o=j;this[o(0xfd)]&&(clearTimeout(this[o(0xfd)]),this[o(0xfd)]=null);},this[j(0xf4)](Object['getOwnPropertyNames'](d)[0x0]);}['showTool'](c){const p=i,d=this['tools'][c];d&&(this[p(0xf2)]['title']=c||'Transform',this['_div'][p(0x108)]('aria-label',c||p(0xf3)),this['_img']['src']=d['icon'],this['currentToolOnButton']=c);}['setActiveTool'](c){const q=i;this[q(0xf4)](c);const d=this[q(0xf1)][c];this['_div']['setAttribute']('aria-pressed',String(!!d));}}customElements['define']('node-projects-designer-toolbar-button',DesignerToolbarButton);