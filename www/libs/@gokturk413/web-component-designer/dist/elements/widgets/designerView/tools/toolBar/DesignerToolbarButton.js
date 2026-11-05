function a(){const q=['host','802725uBTtVS','76TsKYwg','div','onclick','6884550vXPFqV','setTool','_getDomElement','onpointerdown','Transform','popup','_div','detail','6rjTVpb','86696mjkRIF','6hpvmSb','_longPress','getRootNode','title','374059EgpAaS','24335454fOSOoQ','style','63jGUxZF','tools','12293hDydvE','169923OxQWix','getOwnPropertyNames','showPopup','currentToolOnButton'];a=function(){return q;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xd8))/0x1*(-parseInt(h(0xcd))/0x2)+parseInt(h(0xd9))/0x3*(-parseInt(h(0xc2))/0x4)+parseInt(h(0xc1))/0x5+-parseInt(h(0xcf))/0x6*(-parseInt(h(0xd3))/0x7)+parseInt(h(0xce))/0x8*(parseInt(h(0xd6))/0x9)+-parseInt(h(0xc5))/0xa+parseInt(h(0xd4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xab0e2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xc1;const e=a();let f=e[c];return f;}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0xd5)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xd7)];[i(0xca)];['currentToolOnButton'];['_img'];['_div'];['_longPress'];constructor(c,d){const j=i;super(),this['tools']=d,this['_img']=this[j(0xc7)]('img'),this[j(0xcb)]=this[j(0xc7)](j(0xc3)),this['_div'][j(0xc4)]=f=>{const k=j;if(f[k(0xcc)]===0x0){const g=this['getRootNode']()['host'];if(this[k(0xdc)])g[k(0xc6)](this[k(0xdc)]);else{if(this[k(0xca)])g[k(0xdb)](this);}}},this[j(0xcb)][j(0xc8)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0xdd)][l(0xc6)](this[l(0xdc)]),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const m=l;this[m(0xd0)]=null,this['getRootNode']()['host']['showPopup'](this);},0xc8));else{if(this[l(0xca)])this[l(0xd1)]()['host']['showPopup'](this);}},this[j(0xcb)]['onpointerup']=()=>{const n=j;this[n(0xd0)]&&(clearTimeout(this[n(0xd0)]),this['_longPress']=null);},this['showTool'](Object[j(0xda)](d)[0x0]);}['showTool'](c){const o=i,d=this[o(0xd7)][c];d&&(this[o(0xcb)][o(0xd2)]=c||'Transform',this[o(0xcb)]['setAttribute']('aria-label',c||o(0xc9)),this['_img']['src']=d['icon'],this[o(0xdc)]=c);}['setActiveTool'](c){const p=i;this['showTool'](c);const d=this[p(0xd7)][c];this[p(0xcb)]['setAttribute']('aria-pressed',String(!!d));}}customElements['define']('node-projects-designer-toolbar-button',DesignerToolbarButton);