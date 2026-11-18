function b(c,d){c=c-0x8a;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xa3))/0x1*(parseInt(h(0xa2))/0x2)+parseInt(h(0x8e))/0x3+-parseInt(h(0x98))/0x4+parseInt(h(0xa6))/0x5*(parseInt(h(0x94))/0x6)+-parseInt(h(0x90))/0x7*(parseInt(h(0x9a))/0x8)+parseInt(h(0x8a))/0x9+-parseInt(h(0x96))/0xa*(parseInt(h(0x8d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f5d0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x99)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xa4)];['popup'];[i(0x97)];['_img'];[i(0x9f)];[i(0x9d)];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x9e)]=this['_getDomElement']('img'),this[j(0x9f)]=this['_getDomElement']('div'),this['_div'][j(0x8c)]=f=>{const k=j;if(f[k(0xa0)]===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g['setTool'](this[k(0x97)]);else{if(this[k(0xa1)])g['showPopup'](this);}}},this['_div'][j(0x8f)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0x93)]['setTool'](this[l(0x97)]),setTimeout(()=>{const m=l;c[m(0x92)]['focus']();},0x32),this['popup']&&(this[l(0x9d)]=setTimeout(()=>{const n=l;this['_longPress']=null,this[n(0x95)]()[n(0x93)]['showPopup'](this);},0xc8));else{if(this[l(0xa1)])this[l(0x95)]()['host'][l(0xa5)](this);}},this[j(0x9f)]['onpointerup']=()=>{const o=j;this[o(0x9d)]&&(clearTimeout(this[o(0x9d)]),this[o(0x9d)]=null);},this['showTool'](Object['getOwnPropertyNames'](d)[0x0]);}[i(0x9c)](c){const p=i,d=this[p(0xa4)][c];d&&(this[p(0x9f)][p(0x8b)]=c||p(0x9b),this['_div'][p(0xa7)](p(0x91),c||'Transform'),this[p(0x9e)]['src']=d['icon'],this[p(0x97)]=c);}['setActiveTool'](c){const q=i;this[q(0x9c)](c);const d=this['tools'][c];this[q(0x9f)][q(0xa7)]('aria-pressed',String(!!d));}}function a(){const r=['Transform','showTool','_longPress','_img','_div','detail','popup','1054294ujlNKX','2BWsKRC','tools','showPopup','5GazIct','setAttribute','5728275oLcfyl','title','onclick','869HPMgeG','32601azqEHt','onpointerdown','7228074VmlHeh','aria-label','clickOverlay','host','2638572eXAHOa','getRootNode','60310OoBluS','currentToolOnButton','180604WPhtCx','style','8loCnWW'];a=function(){return r;};return a();}customElements['define']('node-projects-designer-toolbar-button',DesignerToolbarButton);