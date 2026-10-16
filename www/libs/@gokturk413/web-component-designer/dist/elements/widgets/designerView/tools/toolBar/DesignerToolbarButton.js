function b(c,d){c=c-0x7d;const e=a();let f=e[c];return f;}const i=b;function a(){const p=['img','aria-label','popup','_longPress','title','_getDomElement','40pagDas','showTool','onclick','5908qRSJTK','700IelMKR','tools','showPopup','314595auEyQa','17153844QtHVan','_div','getRootNode','onpointerup','getOwnPropertyNames','onpointerdown','90013piyPdJ','host','currentToolOnButton','node-projects-designer-toolbar-button','3001374IbFKzD','div','1370HyHqht','setTool','10LdcHYJ','6vWQEML','_img','Transform','1045443kCClYZ','12396ptxJvG'];a=function(){return p;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x9e))/0x1*(parseInt(h(0x81))/0x2)+parseInt(h(0x9a))/0x3+-parseInt(h(0x8b))/0x4*(-parseInt(h(0x8c))/0x5)+parseInt(h(0x7d))/0x6*(-parseInt(h(0x80))/0x7)+parseInt(h(0x88))/0x8*(-parseInt(h(0x8f))/0x9)+-parseInt(h(0x9c))/0xa*(-parseInt(h(0x96))/0xb)+-parseInt(h(0x90))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9b706));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x8d)];[i(0x84)];['currentToolOnButton'];['_img'];['_div'];[i(0x85)];constructor(c,d){const j=i;super(),this[j(0x8d)]=d,this[j(0x7e)]=this[j(0x87)](j(0x82)),this[j(0x91)]=this[j(0x87)](j(0x9b)),this[j(0x91)][j(0x8a)]=f=>{const k=j;if(f['detail']===0x0){const g=this[k(0x92)]()[k(0x97)];if(this['currentToolOnButton'])g[k(0x9d)](this[k(0x98)]);else{if(this['popup'])g['showPopup'](this);}}},this[j(0x91)][j(0x95)]=()=>{const l=j;if(this['currentToolOnButton'])this[l(0x92)]()['host']['setTool'](this['currentToolOnButton']),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this[l(0x85)]=setTimeout(()=>{const m=l;this[m(0x85)]=null,this['getRootNode']()[m(0x97)]['showPopup'](this);},0xc8));else{if(this[l(0x84)])this[l(0x92)]()['host'][l(0x8e)](this);}},this[j(0x91)][j(0x93)]=()=>{this['_longPress']&&(clearTimeout(this['_longPress']),this['_longPress']=null);},this[j(0x89)](Object[j(0x94)](d)[0x0]);}['showTool'](c){const n=i,d=this[n(0x8d)][c];d&&(this[n(0x91)][n(0x86)]=c||n(0x7f),this['_div']['setAttribute'](n(0x83),c||'Transform'),this[n(0x7e)]['src']=d['icon'],this[n(0x98)]=c);}['setActiveTool'](c){const o=i;this['showTool'](c);const d=this['tools'][c];this[o(0x91)]['setAttribute']('aria-pressed',String(!!d));}}customElements['define'](i(0x99),DesignerToolbarButton);