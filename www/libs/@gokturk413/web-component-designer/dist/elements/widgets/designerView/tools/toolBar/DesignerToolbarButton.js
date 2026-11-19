const i=b;function b(c,d){c=c-0x161;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x168))/0x1+-parseInt(h(0x163))/0x2+parseInt(h(0x181))/0x3+parseInt(h(0x176))/0x4*(-parseInt(h(0x161))/0x5)+parseInt(h(0x173))/0x6*(parseInt(h(0x180))/0x7)+-parseInt(h(0x170))/0x8*(parseInt(h(0x171))/0x9)+parseInt(h(0x17b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x607ae));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x172)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x177)];['currentToolOnButton'];[i(0x167)];['_div'];['_longPress'];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x167)]=this[j(0x16f)](j(0x165)),this['_div']=this['_getDomElement'](j(0x174)),this['_div'][j(0x162)]=f=>{const k=j;if(f[k(0x179)]===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g['setTool'](this['currentToolOnButton']);else{if(this['popup'])g['showPopup'](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this[l(0x164)]()[l(0x182)]['setTool'](this[l(0x16b)]),setTimeout(()=>{const m=l;c[m(0x17d)][m(0x16c)]();},0x32),this['popup']&&(this[l(0x178)]=setTimeout(()=>{this['_longPress']=null,this['getRootNode']()['host']['showPopup'](this);},0xc8));else{if(this[l(0x177)])this[l(0x164)]()[l(0x182)][l(0x166)](this);}},this['_div'][j(0x175)]=()=>{const n=j;this[n(0x178)]&&(clearTimeout(this[n(0x178)]),this['_longPress']=null);},this['showTool'](Object['getOwnPropertyNames'](d)[0x0]);}[i(0x17a)](c){const o=i,d=this['tools'][c];d&&(this['_div']['title']=c||'Transform',this[o(0x16a)]['setAttribute']('aria-label',c||o(0x16e)),this['_img'][o(0x17f)]=d['icon'],this[o(0x16b)]=c);}[i(0x169)](c){const p=i;this['showTool'](c);const d=this['tools'][c];this[p(0x16a)]['setAttribute'](p(0x17e),String(!!d));}}customElements[i(0x16d)](i(0x17c),DesignerToolbarButton);function a(){const q=['1039414ZsdTgk','getRootNode','img','showPopup','_img','87890EhDcCJ','setActiveTool','_div','currentToolOnButton','focus','define','Transform','_getDomElement','1551176iSJBqB','27LlJYqA','style','9318ptjswO','div','onpointerup','2876KcjTjC','popup','_longPress','detail','showTool','7173950aAyVzL','node-projects-designer-toolbar-button','clickOverlay','aria-pressed','src','3311KeEaxR','1333656xsrkLx','host','2170OSBDlq','onclick'];a=function(){return q;};return a();}