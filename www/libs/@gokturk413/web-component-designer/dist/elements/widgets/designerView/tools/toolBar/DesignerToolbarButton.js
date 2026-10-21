const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf2))/0x1+-parseInt(h(0xf3))/0x2+-parseInt(h(0x104))/0x3*(-parseInt(h(0xfa))/0x4)+parseInt(h(0x105))/0x5*(parseInt(h(0xf5))/0x6)+-parseInt(h(0x108))/0x7+parseInt(h(0xfe))/0x8+-parseInt(h(0x103))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f0ca));function a(){const r=['6HviBKA','15565SsTgup','title','showPopup','954457LLuXXs','_longPress','onpointerup','_getDomElement','img','getOwnPropertyNames','getRootNode','_div','detail','div','859186QAyFvy','1700454nOQTjX','host','1422oDmBZh','node-projects-designer-toolbar-button','aria-pressed','showTool','currentToolOnButton','914476hJfJfu','tools','setAttribute','aria-label','4223096mrESES','popup','_img','template','clickOverlay','10265904pYCAQc'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [i(0x101)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xfb)];[i(0xff)];['currentToolOnButton'];[i(0x100)];[i(0xef)];['_longPress'];constructor(c,d){const j=i;super(),this[j(0xfb)]=d,this[j(0x100)]=this[j(0xeb)](j(0xec)),this['_div']=this[j(0xeb)](j(0xf1)),this[j(0xef)]['onclick']=f=>{const k=j;if(f[k(0xf0)]===0x0){const g=this[k(0xee)]()[k(0xf4)];if(this[k(0xf9)])g['setTool'](this[k(0xf9)]);else{if(this[k(0xff)])g[k(0x107)](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this[l(0xf9)])this[l(0xee)]()['host']['setTool'](this[l(0xf9)]),setTimeout(()=>{const m=l;c[m(0x102)]['focus']();},0x32),this[l(0xff)]&&(this[l(0xe9)]=setTimeout(()=>{const n=l;this['_longPress']=null,this[n(0xee)]()['host'][n(0x107)](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host']['showPopup'](this);}},this[j(0xef)][j(0xea)]=()=>{const o=j;this[o(0xe9)]&&(clearTimeout(this[o(0xe9)]),this[o(0xe9)]=null);},this['showTool'](Object[j(0xed)](d)[0x0]);}[i(0xf8)](c){const p=i,d=this[p(0xfb)][c];d&&(this['_div'][p(0x106)]=c||'Transform',this['_div']['setAttribute'](p(0xfd),c||'Transform'),this[p(0x100)]['src']=d['icon'],this[p(0xf9)]=c);}['setActiveTool'](c){const q=i;this[q(0xf8)](c);const d=this['tools'][c];this[q(0xef)][q(0xfc)](q(0xf7),String(!!d));}}function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}customElements['define'](i(0xf6),DesignerToolbarButton);