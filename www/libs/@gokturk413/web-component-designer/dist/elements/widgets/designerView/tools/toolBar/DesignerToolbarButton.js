const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x83))/0x1+-parseInt(h(0x6e))/0x2*(parseInt(h(0x7f))/0x3)+-parseInt(h(0x71))/0x4+parseInt(h(0x7a))/0x5*(parseInt(h(0x6c))/0x6)+parseInt(h(0x80))/0x7*(parseInt(h(0x85))/0x8)+parseInt(h(0x78))/0x9*(parseInt(h(0x6b))/0xa)+-parseInt(h(0x7c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6d541));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x6a;const e=a();let f=e[c];return f;}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x81)];['currentToolOnButton'];[i(0x88)];[i(0x76)];['_longPress'];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x88)]=this['_getDomElement'](j(0x84)),this[j(0x76)]=this[j(0x6a)](j(0x6d)),this[j(0x76)]['onclick']=f=>{const k=j;if(f[k(0x74)]===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g['setTool'](this[k(0x77)]);else{if(this['popup'])g[k(0x73)](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this[l(0x7e)]()['host']['setTool'](this[l(0x77)]),setTimeout(()=>{const m=l;c[m(0x6f)]['focus']();},0x32),this[l(0x81)]&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()[n(0x75)]['showPopup'](this);},0xc8));else{if(this[l(0x81)])this[l(0x7e)]()['host'][l(0x73)](this);}},this['_div']['onpointerup']=()=>{const o=j;this[o(0x7b)]&&(clearTimeout(this[o(0x7b)]),this['_longPress']=null);},this[j(0x82)](Object[j(0x72)](d)[0x0]);}[i(0x82)](c){const p=i,d=this[p(0x7d)][c];d&&(this[p(0x76)]['title']=c||p(0x87),this['_div'][p(0x70)]('aria-label',c||p(0x87)),this[p(0x88)]['src']=d['icon'],this[p(0x77)]=c);}[i(0x79)](c){const q=i;this['showTool'](c);const d=this['tools'][c];this[q(0x76)][q(0x70)]('aria-pressed',String(!!d));}}function a(){const r=['8454010mTysLn','527874VJtxIm','div','2Sbevcg','clickOverlay','setAttribute','3433564mlVwGv','getOwnPropertyNames','showPopup','detail','host','_div','currentToolOnButton','9pyczun','setActiveTool','35xvgBIt','_longPress','9307815WISUVb','tools','getRootNode','1118889vhcgom','4587268xTqElX','popup','showTool','408750iYnciQ','img','8MDigRT','node-projects-designer-toolbar-button','Transform','_img','_getDomElement'];a=function(){return r;};return a();}customElements['define'](i(0x86),DesignerToolbarButton);