const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xdd))/0x1+parseInt(h(0xe2))/0x2+parseInt(h(0xf7))/0x3+-parseInt(h(0xf4))/0x4*(-parseInt(h(0xda))/0x5)+parseInt(h(0xed))/0x6+-parseInt(h(0xec))/0x7+-parseInt(h(0xe6))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xedcee));function b(c,d){c=c-0xd6;const e=a();let f=e[c];return f;}function a(){const q=['10tmzWqt','node-projects-designer-toolbar-button','setAttribute','1574957ZdWjZE','getRootNode','getOwnPropertyNames','template','title','2024472YHcOGA','currentToolOnButton','showPopup','onpointerup','30567608YDUdKz','focus','setTool','host','detail','showTool','8980293hoBadf','10739424SobeDS','_div','clickOverlay','div','_longPress','onclick','setActiveTool','572864dFQxbo','aria-pressed','tools','4243149tzIRLy','popup','onpointerdown','_img','define','icon'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [i(0xe0)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0xf8)];['currentToolOnButton'];['_img'];['_div'];['_longPress'];constructor(c,d){const j=i;super(),this[j(0xf6)]=d,this[j(0xd7)]=this['_getDomElement']('img'),this[j(0xee)]=this['_getDomElement'](j(0xf0)),this[j(0xee)][j(0xf2)]=f=>{const k=j;if(f[k(0xea)]===0x0){const g=this[k(0xde)]()[k(0xe9)];if(this['currentToolOnButton'])g[k(0xe8)](this[k(0xe3)]);else{if(this['popup'])g[k(0xe4)](this);}}},this['_div'][j(0xd6)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0xe9)]['setTool'](this['currentToolOnButton']),setTimeout(()=>{const m=l;c[m(0xef)][m(0xe7)]();},0x32),this[l(0xf8)]&&(this['_longPress']=setTimeout(()=>{this['_longPress']=null,this['getRootNode']()['host']['showPopup'](this);},0xc8));else{if(this[l(0xf8)])this[l(0xde)]()['host']['showPopup'](this);}},this[j(0xee)][j(0xe5)]=()=>{const n=j;this[n(0xf1)]&&(clearTimeout(this['_longPress']),this['_longPress']=null);},this[j(0xeb)](Object[j(0xdf)](d)[0x0]);}['showTool'](c){const o=i,d=this['tools'][c];d&&(this[o(0xee)][o(0xe1)]=c||'Transform',this['_div']['setAttribute']('aria-label',c||'Transform'),this['_img']['src']=d[o(0xd9)],this['currentToolOnButton']=c);}[i(0xf3)](c){const p=i;this['showTool'](c);const d=this[p(0xf6)][c];this['_div'][p(0xdc)](p(0xf5),String(!!d));}}customElements[i(0xd8)](i(0xdb),DesignerToolbarButton);