const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x185))/0x1*(parseInt(h(0x193))/0x2)+parseInt(h(0x19e))/0x3+-parseInt(h(0x18a))/0x4+-parseInt(h(0x19a))/0x5+parseInt(h(0x198))/0x6+parseInt(h(0x18e))/0x7+-parseInt(h(0x182))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb8c23));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x18c)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x197)];['currentToolOnButton'];[i(0x18d)];['_div'];[i(0x183)];constructor(c,d){const j=i;super(),this[j(0x196)]=d,this['_img']=this[j(0x190)](j(0x184)),this[j(0x195)]=this[j(0x190)]('div'),this['_div']['onclick']=f=>{const k=j;if(f['detail']===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g[k(0x187)](this['currentToolOnButton']);else{if(this['popup'])g[k(0x186)](this);}}},this[j(0x195)][j(0x188)]=()=>{const l=j;if(this['currentToolOnButton'])this[l(0x19f)]()[l(0x18f)]['setTool'](this['currentToolOnButton']),setTimeout(()=>{const m=l;c['clickOverlay'][m(0x199)]();},0x32),this[l(0x197)]&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()['host'][n(0x186)](this);},0xc8));else{if(this[l(0x197)])this['getRootNode']()['host'][l(0x186)](this);}},this[j(0x195)]['onpointerup']=()=>{this['_longPress']&&(clearTimeout(this['_longPress']),this['_longPress']=null);},this[j(0x19d)](Object['getOwnPropertyNames'](d)[0x0]);}['showTool'](c){const o=i,d=this['tools'][c];d&&(this[o(0x195)]['title']=c||'Transform',this['_div'][o(0x192)]('aria-label',c||o(0x194)),this[o(0x18d)][o(0x191)]=d[o(0x19b)],this['currentToolOnButton']=c);}[i(0x19c)](c){this['showTool'](c);const d=this['tools'][c];this['_div']['setAttribute']('aria-pressed',String(!!d));}}function a(){const p=['_getDomElement','src','setAttribute','1094788rbCssx','Transform','_div','tools','popup','2598540fLUOGH','focus','824400yBMOyl','icon','setActiveTool','showTool','3428211IoLFcE','getRootNode','4882192ugPKWf','_longPress','img','1KGljNP','showPopup','setTool','onpointerdown','node-projects-designer-toolbar-button','1595804XihwKC','define','style','_img','6317101xetZmA','host'];a=function(){return p;};return a();}function b(c,d){c=c-0x182;const e=a();let f=e[c];return f;}customElements[i(0x18b)](i(0x189),DesignerToolbarButton);