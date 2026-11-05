function a(){const r=['getOwnPropertyNames','_longPress','tools','236pqHJhR','onpointerup','showPopup','detail','focus','onpointerdown','getRootNode','21927690ywWBTy','Transform','img','onclick','title','1051810LHKOeQ','aria-label','186684tOoUZr','div','21VaFqze','showTool','_div','popup','setTool','5316504yylFGg','define','_img','host','2827858RJjXXh','3713272GmcfAG','currentToolOnButton','120145ABhtZo','icon'];a=function(){return r;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x7d))/0x1+-parseInt(h(0x69))/0x2+-parseInt(h(0x86))/0x3+parseInt(h(0x71))/0x4*(parseInt(h(0x6c))/0x5)+-parseInt(h(0x7f))/0x6+parseInt(h(0x81))/0x7*(parseInt(h(0x6a))/0x8)+parseInt(h(0x78))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeeaa9));function b(c,d){c=c-0x68;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x70)];[i(0x84)];['currentToolOnButton'];[i(0x88)];[i(0x83)];[i(0x6f)];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x88)]=this['_getDomElement'](j(0x7a)),this[j(0x83)]=this['_getDomElement'](j(0x80)),this[j(0x83)][j(0x7b)]=f=>{const k=j;if(f[k(0x74)]===0x0){const g=this[k(0x77)]()['host'];if(this[k(0x6b)])g[k(0x85)](this['currentToolOnButton']);else{if(this['popup'])g['showPopup'](this);}}},this[j(0x83)][j(0x76)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()['host']['setTool'](this[l(0x6b)]),setTimeout(()=>{const m=l;c['clickOverlay'][m(0x75)]();},0x32),this[l(0x84)]&&(this['_longPress']=setTimeout(()=>{const n=l;this[n(0x6f)]=null,this['getRootNode']()['host'][n(0x73)](this);},0xc8));else{if(this['popup'])this['getRootNode']()[l(0x68)][l(0x73)](this);}},this[j(0x83)][j(0x72)]=()=>{const o=j;this[o(0x6f)]&&(clearTimeout(this['_longPress']),this['_longPress']=null);},this['showTool'](Object[j(0x6e)](d)[0x0]);}[i(0x82)](c){const p=i,d=this[p(0x70)][c];d&&(this[p(0x83)][p(0x7c)]=c||p(0x79),this['_div']['setAttribute'](p(0x7e),c||p(0x79)),this['_img']['src']=d[p(0x6d)],this['currentToolOnButton']=c);}['setActiveTool'](c){const q=i;this[q(0x82)](c);const d=this['tools'][c];this[q(0x83)]['setAttribute']('aria-pressed',String(!!d));}}customElements[i(0x87)]('node-projects-designer-toolbar-button',DesignerToolbarButton);