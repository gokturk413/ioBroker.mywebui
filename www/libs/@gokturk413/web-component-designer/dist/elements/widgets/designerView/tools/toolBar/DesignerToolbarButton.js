const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x12c))/0x1+-parseInt(h(0x122))/0x2*(parseInt(h(0x13a))/0x3)+parseInt(h(0x134))/0x4*(parseInt(h(0x141))/0x5)+-parseInt(h(0x135))/0x6*(-parseInt(h(0x142))/0x7)+-parseInt(h(0x130))/0x8*(parseInt(h(0x128))/0x9)+-parseInt(h(0x13e))/0xa*(-parseInt(h(0x138))/0xb)+-parseInt(h(0x13c))/0xc*(parseInt(h(0x131))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4649f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x140)];['currentToolOnButton'];[i(0x139)];[i(0x129)];['_longPress'];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x139)]=this['_getDomElement']('img'),this[j(0x129)]=this[j(0x13f)]('div'),this[j(0x129)]['onclick']=f=>{const k=j;if(f[k(0x12f)]===0x0){const g=this['getRootNode']()[k(0x136)];if(this[k(0x12d)])g[k(0x13b)](this['currentToolOnButton']);else{if(this['popup'])g['showPopup'](this);}}},this['_div'][j(0x123)]=()=>{const l=j;if(this[l(0x12d)])this['getRootNode']()[l(0x136)][l(0x13b)](this[l(0x12d)]),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this[l(0x137)]=setTimeout(()=>{const m=l;this[m(0x137)]=null,this['getRootNode']()[m(0x136)]['showPopup'](this);},0xc8));else{if(this[l(0x140)])this['getRootNode']()['host'][l(0x133)](this);}},this['_div'][j(0x12b)]=()=>{this['_longPress']&&(clearTimeout(this['_longPress']),this['_longPress']=null);},this[j(0x126)](Object['getOwnPropertyNames'](d)[0x0]);}[i(0x126)](c){const n=i,d=this['tools'][c];d&&(this[n(0x129)][n(0x125)]=c||'Transform',this[n(0x129)][n(0x13d)](n(0x143),c||n(0x127)),this['_img'][n(0x124)]=d[n(0x132)],this[n(0x12d)]=c);}['setActiveTool'](c){const o=i;this[o(0x126)](c);const d=this['tools'][c];this[o(0x129)]['setAttribute']('aria-pressed',String(!!d));}}function a(){const p=['node-projects-designer-toolbar-button','detail','8XBYXhn','203424BzJlVn','icon','showPopup','233908mgLuKl','686634kLpbWR','host','_longPress','5492333uifsrM','_img','879WorwcL','setTool','372rrmLTn','setAttribute','10CzzGBa','_getDomElement','popup','5tdlsOZ','7LDPCEB','aria-label','298CFPLkd','onpointerdown','src','title','showTool','Transform','808479QvvJpF','_div','define','onpointerup','234260FAbxWy','currentToolOnButton'];a=function(){return p;};return a();}function b(c,d){c=c-0x122;const e=a();let f=e[c];return f;}customElements[i(0x12a)](i(0x12e),DesignerToolbarButton);