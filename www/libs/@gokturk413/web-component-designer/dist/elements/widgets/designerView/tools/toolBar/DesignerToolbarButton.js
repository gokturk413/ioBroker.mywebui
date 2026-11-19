const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x9a))/0x1*(parseInt(h(0xa4))/0x2)+-parseInt(h(0x9f))/0x3*(-parseInt(h(0x9d))/0x4)+-parseInt(h(0xa0))/0x5*(-parseInt(h(0x93))/0x6)+parseInt(h(0xa1))/0x7+parseInt(h(0x92))/0x8*(-parseInt(h(0x9e))/0x9)+parseInt(h(0xb1))/0xa*(-parseInt(h(0xaa))/0xb)+-parseInt(h(0x9c))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9f7af));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0xac)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];['popup'];['currentToolOnButton'];[i(0x95)];[i(0xb2)];['_longPress'];constructor(c,d){const j=i;super(),this[j(0xae)]=d,this['_img']=this['_getDomElement']('img'),this[j(0xb2)]=this['_getDomElement'](j(0xb0)),this[j(0xb2)]['onclick']=f=>{const k=j;if(f[k(0xa3)]===0x0){const g=this[k(0x97)]()['host'];if(this[k(0x9b)])g[k(0x98)](this['currentToolOnButton']);else{if(this['popup'])g[k(0x99)](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this[l(0x9b)])this['getRootNode']()['host'][l(0x98)](this[l(0x9b)]),setTimeout(()=>{const m=l;c[m(0xa2)]['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()['host'][n(0x99)](this);},0xc8));else{if(this[l(0xaf)])this['getRootNode']()[l(0x90)]['showPopup'](this);}},this[j(0xb2)][j(0xab)]=()=>{const o=j;this['_longPress']&&(clearTimeout(this[o(0xa5)]),this['_longPress']=null);},this['showTool'](Object[j(0x94)](d)[0x0]);}[i(0xad)](c){const p=i,d=this['tools'][c];d&&(this[p(0xb2)]['title']=c||p(0xa7),this[p(0xb2)]['setAttribute']('aria-label',c||'Transform'),this['_img'][p(0xa9)]=d[p(0x96)],this[p(0x9b)]=c);}[i(0xa6)](c){const q=i;this['showTool'](c);const d=this[q(0xae)][c];this['_div'][q(0xa8)]('aria-pressed',String(!!d));}}function b(c,d){c=c-0x90;const e=a();let f=e[c];return f;}function a(){const r=['setActiveTool','Transform','setAttribute','src','10901hDYYSR','onpointerup','style','showTool','tools','popup','div','4160hZSNAr','_div','host','node-projects-designer-toolbar-button','1416904WNRyXa','6vKhOYB','getOwnPropertyNames','_img','icon','getRootNode','setTool','showPopup','1049pKMZRJ','currentToolOnButton','12408948LrvNmP','245692rIHXBZ','9vfpjdk','36NGPAkP','2293945gtMAbT','9041641LZoXbe','clickOverlay','detail','402gAIFyH','_longPress'];a=function(){return r;};return a();}customElements['define'](i(0x91),DesignerToolbarButton);