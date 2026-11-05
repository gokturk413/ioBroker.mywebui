const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1b9))/0x1+-parseInt(h(0x1c5))/0x2*(-parseInt(h(0x1c0))/0x3)+-parseInt(h(0x1b2))/0x4*(-parseInt(h(0x1b3))/0x5)+-parseInt(h(0x1c6))/0x6*(-parseInt(h(0x1c1))/0x7)+parseInt(h(0x1b7))/0x8+parseInt(h(0x1c8))/0x9*(-parseInt(h(0x1c9))/0xa)+-parseInt(h(0x1bd))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x258ba));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const q=['tools','_getDomElement','2MDuFcA','6ksxLvE','onpointerdown','45xpnMLB','510460HvKElO','popup','onclick','_longPress','onpointerup','div','getOwnPropertyNames','setAttribute','showTool','setTool','node-projects-designer-toolbar-button','183308amckiw','5JnuFAw','icon','Transform','host','344632RYrDQf','title','262183MjKBDw','showPopup','_div','currentToolOnButton','2860088OGjYtH','setActiveTool','getRootNode','401031zdxFcP','1289806RYCmKE','_img'];a=function(){return q;};return a();}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];['popup'];['currentToolOnButton'];[i(0x1c2)];[i(0x1bb)];[i(0x1cc)];constructor(c,d){const j=i;super(),this[j(0x1c3)]=d,this[j(0x1c2)]=this[j(0x1c4)]('img'),this['_div']=this[j(0x1c4)](j(0x1ce)),this[j(0x1bb)][j(0x1cb)]=f=>{const k=j;if(f['detail']===0x0){const g=this[k(0x1bf)]()['host'];if(this['currentToolOnButton'])g[k(0x1b0)](this['currentToolOnButton']);else{if(this[k(0x1ca)])g[k(0x1ba)](this);}}},this[j(0x1bb)][j(0x1c7)]=()=>{const l=j;if(this[l(0x1bc)])this[l(0x1bf)]()[l(0x1b6)]['setTool'](this['currentToolOnButton']),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this[l(0x1ca)]&&(this['_longPress']=setTimeout(()=>{const m=l;this['_longPress']=null,this[m(0x1bf)]()[m(0x1b6)]['showPopup'](this);},0xc8));else{if(this[l(0x1ca)])this[l(0x1bf)]()[l(0x1b6)][l(0x1ba)](this);}},this[j(0x1bb)][j(0x1cd)]=()=>{const n=j;this[n(0x1cc)]&&(clearTimeout(this['_longPress']),this[n(0x1cc)]=null);},this[j(0x1af)](Object[j(0x1cf)](d)[0x0]);}[i(0x1af)](c){const o=i,d=this[o(0x1c3)][c];d&&(this['_div'][o(0x1b8)]=c||o(0x1b5),this['_div']['setAttribute']('aria-label',c||'Transform'),this[o(0x1c2)]['src']=d[o(0x1b4)],this['currentToolOnButton']=c);}[i(0x1be)](c){const p=i;this[p(0x1af)](c);const d=this[p(0x1c3)][c];this['_div'][p(0x1d0)]('aria-pressed',String(!!d));}}function b(c,d){c=c-0x1af;const e=a();let f=e[c];return f;}customElements['define'](i(0x1b1),DesignerToolbarButton);