const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xac))/0x1+-parseInt(h(0xb2))/0x2*(-parseInt(h(0xbc))/0x3)+-parseInt(h(0xa6))/0x4*(-parseInt(h(0xa8))/0x5)+-parseInt(h(0xb6))/0x6*(parseInt(h(0xad))/0x7)+parseInt(h(0xab))/0x8*(parseInt(h(0xc1))/0x9)+parseInt(h(0xb4))/0xa+-parseInt(h(0xc6))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xba632));function a(){const q=['detail','img','9661289WYIZjS','title','8Znrnnb','showPopup','1837865DKoTEO','setTool','node-projects-designer-toolbar-button','2670296sGMshH','767667rsFCyh','5870515eYsNYl','tools','icon','_longPress','getRootNode','2DToKRP','setActiveTool','509800OEObUR','Transform','6VxGddk','template','getOwnPropertyNames','popup','onpointerup','currentToolOnButton','777057PXGUaW','setAttribute','onclick','_getDomElement','style','18IiwXKm','showTool','_div'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xa5;const e=a();let f=e[c];return f;}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0xc0)]=css`
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
    `;static [i(0xb7)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0xb9)];['currentToolOnButton'];['_img'];['_div'];[i(0xb0)];constructor(c,d){const j=i;super(),this['tools']=d,this['_img']=this[j(0xbf)](j(0xc5)),this[j(0xc3)]=this['_getDomElement']('div'),this['_div'][j(0xbe)]=f=>{const k=j;if(f[k(0xc4)]===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g[k(0xa9)](this['currentToolOnButton']);else{if(this['popup'])g[k(0xa7)](this);}}},this[j(0xc3)]['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this[l(0xb1)]()['host'][l(0xa9)](this['currentToolOnButton']),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const m=l;this['_longPress']=null,this[m(0xb1)]()['host']['showPopup'](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host']['showPopup'](this);}},this['_div'][j(0xba)]=()=>{const n=j;this[n(0xb0)]&&(clearTimeout(this['_longPress']),this[n(0xb0)]=null);},this[j(0xc2)](Object[j(0xb8)](d)[0x0]);}['showTool'](c){const o=i,d=this['tools'][c];d&&(this['_div'][o(0xa5)]=c||'Transform',this[o(0xc3)]['setAttribute']('aria-label',c||o(0xb5)),this['_img']['src']=d[o(0xaf)],this[o(0xbb)]=c);}[i(0xb3)](c){const p=i;this[p(0xc2)](c);const d=this[p(0xae)][c];this[p(0xc3)][p(0xbd)]('aria-pressed',String(!!d));}}customElements['define'](i(0xaa),DesignerToolbarButton);