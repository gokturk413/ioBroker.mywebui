const i=b;function b(c,d){c=c-0x126;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x12b))/0x1*(-parseInt(h(0x133))/0x2)+-parseInt(h(0x13a))/0x3*(parseInt(h(0x12d))/0x4)+parseInt(h(0x130))/0x5*(parseInt(h(0x13d))/0x6)+-parseInt(h(0x142))/0x7*(parseInt(h(0x147))/0x8)+-parseInt(h(0x13e))/0x9*(parseInt(h(0x139))/0xa)+parseInt(h(0x127))/0xb+-parseInt(h(0x126))/0xc*(-parseInt(h(0x141))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x884be));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];['popup'];['currentToolOnButton'];[i(0x12e)];[i(0x12f)];['_longPress'];constructor(c,d){const j=i;super(),this[j(0x13f)]=d,this[j(0x12e)]=this['_getDomElement']('img'),this['_div']=this['_getDomElement']('div'),this[j(0x12f)][j(0x132)]=f=>{const k=j;if(f[k(0x146)]===0x0){const g=this[k(0x134)]()['host'];if(this[k(0x136)])g[k(0x129)](this['currentToolOnButton']);else{if(this['popup'])g[k(0x13c)](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()['host']['setTool'](this[l(0x136)]),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this[l(0x138)]&&(this['_longPress']=setTimeout(()=>{const m=l;this[m(0x145)]=null,this['getRootNode']()[m(0x128)]['showPopup'](this);},0xc8));else{if(this[l(0x138)])this['getRootNode']()['host'][l(0x13c)](this);}},this['_div']['onpointerup']=()=>{const n=j;this[n(0x145)]&&(clearTimeout(this['_longPress']),this['_longPress']=null);},this['showTool'](Object[j(0x12a)](d)[0x0]);}[i(0x13b)](c){const o=i,d=this['tools'][c];d&&(this[o(0x12f)][o(0x131)]=c||'Transform',this['_div']['setAttribute'](o(0x137),c||o(0x144)),this[o(0x12e)]['src']=d[o(0x140)],this[o(0x136)]=c);}[i(0x143)](c){const p=i;this[p(0x13b)](c);const d=this[p(0x13f)][c];this[p(0x12f)][p(0x135)]('aria-pressed',String(!!d));}}customElements[i(0x12c)]('node-projects-designer-toolbar-button',DesignerToolbarButton);function a(){const q=['aria-label','popup','430RPGlkl','253215wiSkGw','showTool','showPopup','2756634qPedAx','213777pTPNzG','tools','icon','91REcDIY','4627ndHaBl','setActiveTool','Transform','_longPress','detail','3176lymAli','2803260hWCuwa','9069324BGiuYW','host','setTool','getOwnPropertyNames','21121VyrXSZ','define','4PAdWeB','_img','_div','5ExLojJ','title','onclick','94DOGwpv','getRootNode','setAttribute','currentToolOnButton'];a=function(){return q;};return a();}