function a(){const r=['onclick','86496fEqeWK','549310GZhiGf','232AhfSpL','591456AKXfrg','icon','_longPress','4303810gzgDXi','9254GmvVBB','12JlGvDF','72QlKPEZ','setAttribute','setActiveTool','host','currentToolOnButton','define','tools','Transform','popup','1269830efAKfE','node-projects-designer-toolbar-button','120Mqgqyz','title','_div','154kjAfix','focus','_img','onpointerup','393219wnEflw','showTool','_getDomElement','showPopup','getRootNode','src'];a=function(){return r;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1bc))/0x1*(parseInt(h(0x1b7))/0x2)+parseInt(h(0x1a7))/0x3*(-parseInt(h(0x1b5))/0x4)+-parseInt(h(0x1a5))/0x5*(parseInt(h(0x1bd))/0x6)+parseInt(h(0x1bb))/0x7+-parseInt(h(0x1be))/0x8*(parseInt(h(0x1ae))/0x9)+-parseInt(h(0x1b6))/0xa*(-parseInt(h(0x1aa))/0xb)+-parseInt(h(0x1b8))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9cb89));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x1a2)];['popup'];[i(0x1a0)];[i(0x1ac)];[i(0x1a9)];[i(0x1ba)];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x1ac)]=this[j(0x1b0)]('img'),this['_div']=this['_getDomElement']('div'),this[j(0x1a9)][j(0x1b4)]=f=>{const k=j;if(f['detail']===0x0){const g=this[k(0x1b2)]()[k(0x19f)];if(this['currentToolOnButton'])g['setTool'](this['currentToolOnButton']);else{if(this[k(0x1a4)])g[k(0x1b1)](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0x19f)]['setTool'](this['currentToolOnButton']),setTimeout(()=>{const m=l;c['clickOverlay'][m(0x1ab)]();},0x32),this['popup']&&(this[l(0x1ba)]=setTimeout(()=>{const n=l;this[n(0x1ba)]=null,this['getRootNode']()[n(0x19f)][n(0x1b1)](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host'][l(0x1b1)](this);}},this[j(0x1a9)][j(0x1ad)]=()=>{const o=j;this['_longPress']&&(clearTimeout(this[o(0x1ba)]),this['_longPress']=null);},this[j(0x1af)](Object['getOwnPropertyNames'](d)[0x0]);}['showTool'](c){const p=i,d=this['tools'][c];d&&(this['_div'][p(0x1a8)]=c||'Transform',this[p(0x1a9)][p(0x1bf)]('aria-label',c||p(0x1a3)),this[p(0x1ac)][p(0x1b3)]=d[p(0x1b9)],this[p(0x1a0)]=c);}[i(0x1c0)](c){const q=i;this[q(0x1af)](c);const d=this[q(0x1a2)][c];this['_div'][q(0x1bf)]('aria-pressed',String(!!d));}}customElements[i(0x1a1)](i(0x1a6),DesignerToolbarButton);