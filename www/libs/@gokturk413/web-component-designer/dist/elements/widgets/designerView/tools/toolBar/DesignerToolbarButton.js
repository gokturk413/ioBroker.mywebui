const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x91))/0x1+parseInt(h(0x8f))/0x2+-parseInt(h(0x94))/0x3+parseInt(h(0x7a))/0x4*(parseInt(h(0x8b))/0x5)+parseInt(h(0x92))/0x6*(parseInt(h(0x81))/0x7)+parseInt(h(0x90))/0x8*(-parseInt(h(0x8e))/0x9)+-parseInt(h(0x7d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc113f));function b(c,d){c=c-0x7a;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const p=['86787aTNrfx','2430282UxJvub','216MMpRys','928422IKdSIm','40578zocfKV','setActiveTool','1678164gdvHZc','setAttribute','1136gLMajz','onpointerdown','_longPress','11310560IbnElG','onclick','_getDomElement','currentToolOnButton','77QLyWkJ','title','_div','aria-pressed','icon','define','_img','tools','focus','showPopup','9220ItmBHl','clickOverlay','src'];a=function(){return p;};return a();}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x88)];['popup'];['currentToolOnButton'];['_img'];[i(0x83)];[i(0x7c)];constructor(c,d){const j=i;super(),this[j(0x88)]=d,this[j(0x87)]=this[j(0x7f)]('img'),this['_div']=this[j(0x7f)]('div'),this[j(0x83)][j(0x7e)]=f=>{if(f['detail']===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g['setTool'](this['currentToolOnButton']);else{if(this['popup'])g['showPopup'](this);}}},this[j(0x83)][j(0x7b)]=()=>{const k=j;if(this[k(0x80)])this['getRootNode']()['host']['setTool'](this['currentToolOnButton']),setTimeout(()=>{const l=k;c[l(0x8c)][l(0x89)]();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{this['_longPress']=null,this['getRootNode']()['host']['showPopup'](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host'][k(0x8a)](this);}},this['_div']['onpointerup']=()=>{const m=j;this['_longPress']&&(clearTimeout(this[m(0x7c)]),this[m(0x7c)]=null);},this['showTool'](Object['getOwnPropertyNames'](d)[0x0]);}['showTool'](c){const n=i,d=this['tools'][c];d&&(this['_div'][n(0x82)]=c||'Transform',this[n(0x83)]['setAttribute']('aria-label',c||'Transform'),this[n(0x87)][n(0x8d)]=d[n(0x85)],this['currentToolOnButton']=c);}[i(0x93)](c){const o=i;this['showTool'](c);const d=this['tools'][c];this['_div'][o(0x95)](o(0x84),String(!!d));}}customElements[i(0x86)]('node-projects-designer-toolbar-button',DesignerToolbarButton);