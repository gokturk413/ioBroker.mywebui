function a(){const r=['node-projects-designer-toolbar-button','setAttribute','488361MdNCBJ','4750188KbYfKt','img','onpointerdown','693637JEcnPD','template','host','312795FGxFff','icon','src','2qkMzqX','focus','_img','currentToolOnButton','_div','onclick','1877128ZuTpCP','showPopup','24CIMnrI','145386ywoPVJ','830IQsecH','getOwnPropertyNames','tools','78jvQpWm','_longPress','showTool','44kWpLJS','137889BUgPjs','getRootNode','Transform','onpointerup','popup'];a=function(){return r;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15a))/0x1*(parseInt(h(0x16b))/0x2)+-parseInt(h(0x161))/0x3*(parseInt(h(0x173))/0x4)+parseInt(h(0x168))/0x5*(-parseInt(h(0x156))/0x6)+parseInt(h(0x165))/0x7+-parseInt(h(0x171))/0x8+parseInt(h(0x174))/0x9*(parseInt(h(0x175))/0xa)+-parseInt(h(0x159))/0xb*(-parseInt(h(0x162))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd224e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [i(0x166)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x155)];[i(0x15e)];[i(0x16e)];[i(0x16d)];['_div'];[i(0x157)];constructor(c,d){const j=i;super(),this[j(0x155)]=d,this['_img']=this['_getDomElement'](j(0x163)),this[j(0x16f)]=this['_getDomElement']('div'),this['_div'][j(0x170)]=f=>{const k=j;if(f['detail']===0x0){const g=this[k(0x15b)]()[k(0x167)];if(this[k(0x16e)])g['setTool'](this['currentToolOnButton']);else{if(this[k(0x15e)])g[k(0x172)](this);}}},this[j(0x16f)][j(0x164)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0x167)]['setTool'](this[l(0x16e)]),setTimeout(()=>{const m=l;c['clickOverlay'][m(0x16c)]();},0x32),this['popup']&&(this[l(0x157)]=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()['host'][n(0x172)](this);},0xc8));else{if(this['popup'])this['getRootNode']()[l(0x167)]['showPopup'](this);}},this['_div'][j(0x15d)]=()=>{const o=j;this[o(0x157)]&&(clearTimeout(this[o(0x157)]),this['_longPress']=null);},this['showTool'](Object[j(0x176)](d)[0x0]);}['showTool'](c){const p=i,d=this['tools'][c];d&&(this['_div']['title']=c||p(0x15c),this['_div'][p(0x160)]('aria-label',c||'Transform'),this[p(0x16d)][p(0x16a)]=d[p(0x169)],this[p(0x16e)]=c);}['setActiveTool'](c){const q=i;this[q(0x158)](c);const d=this['tools'][c];this['_div']['setAttribute']('aria-pressed',String(!!d));}}function b(c,d){c=c-0x155;const e=a();let f=e[c];return f;}customElements['define'](i(0x15f),DesignerToolbarButton);