const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x104))/0x1*(-parseInt(h(0x105))/0x2)+-parseInt(h(0x106))/0x3*(parseInt(h(0x101))/0x4)+-parseInt(h(0xea))/0x5*(parseInt(h(0x108))/0x6)+parseInt(h(0x100))/0x7*(parseInt(h(0xf7))/0x8)+parseInt(h(0xfe))/0x9+parseInt(h(0xf1))/0xa+parseInt(h(0xed))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb0988));function a(){const q=['setTool','src','1880765uhLXsX','onpointerdown','tools','16122480ykCVxh','define','aria-label','setAttribute','885550OHrllw','detail','onclick','currentToolOnButton','style','_longPress','8xHuDsr','getRootNode','_getDomElement','icon','node-projects-designer-toolbar-button','div','onpointerup','9388539XxKHmG','host','4186021zQxYfx','164yolSjA','_div','Transform','436322EeoHMb','4Stwtwu','89508AshbUp','showTool','6CMeLcM','setActiveTool','showPopup','_img','template','getOwnPropertyNames'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0xf5)]=css`
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
    `;static [i(0xe6)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xec)];['popup'];['currentToolOnButton'];[i(0x10b)];[i(0x102)];['_longPress'];constructor(c,d){const j=i;super(),this[j(0xec)]=d,this['_img']=this['_getDomElement']('img'),this[j(0x102)]=this[j(0xf9)](j(0xfc)),this['_div'][j(0xf3)]=f=>{const k=j;if(f[k(0xf2)]===0x0){const g=this[k(0xf8)]()['host'];if(this[k(0xf4)])g[k(0xe8)](this[k(0xf4)]);else{if(this['popup'])g['showPopup'](this);}}},this['_div'][j(0xeb)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0xff)]['setTool'](this['currentToolOnButton']),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const m=l;this[m(0xf6)]=null,this['getRootNode']()['host'][m(0x10a)](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host'][l(0x10a)](this);}},this['_div'][j(0xfd)]=()=>{const n=j;this['_longPress']&&(clearTimeout(this['_longPress']),this[n(0xf6)]=null);},this[j(0x107)](Object[j(0xe7)](d)[0x0]);}['showTool'](c){const o=i,d=this['tools'][c];d&&(this['_div']['title']=c||o(0x103),this[o(0x102)]['setAttribute'](o(0xef),c||'Transform'),this[o(0x10b)][o(0xe9)]=d[o(0xfa)],this['currentToolOnButton']=c);}[i(0x109)](c){const p=i;this['showTool'](c);const d=this[p(0xec)][c];this[p(0x102)][p(0xf0)]('aria-pressed',String(!!d));}}function b(c,d){c=c-0xe6;const e=a();let f=e[c];return f;}customElements[i(0xee)](i(0xfb),DesignerToolbarButton);