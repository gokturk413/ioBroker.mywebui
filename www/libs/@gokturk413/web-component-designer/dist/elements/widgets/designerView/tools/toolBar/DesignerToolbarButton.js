const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x164))/0x1+parseInt(h(0x144))/0x2+-parseInt(h(0x149))/0x3*(-parseInt(h(0x15a))/0x4)+parseInt(h(0x160))/0x5+-parseInt(h(0x154))/0x6+parseInt(h(0x15b))/0x7+parseInt(h(0x15f))/0x8*(-parseInt(h(0x147))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc3720));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const r=['Transform','img','tools','style','setAttribute','644AoPQOT','10121195UrkSSK','currentToolOnButton','setTool','onclick','8BKKczv','1237465XtFEwo','aria-pressed','showTool','_img','1570973PDDKGb','2348188OnTNzC','popup','focus','26103591tFpJqw','node-projects-designer-toolbar-button','13047ZSDjwD','host','showPopup','_longPress','aria-label','clickOverlay','detail','getOwnPropertyNames','getRootNode','_div','title','8626146WhTSRl'];a=function(){return r;};return a();}function b(c,d){c=c-0x144;const e=a();let f=e[c];return f;}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x158)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x157)];['popup'];[i(0x15c)];['_img'];['_div'];[i(0x14c)];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x163)]=this['_getDomElement'](j(0x156)),this[j(0x152)]=this['_getDomElement']('div'),this[j(0x152)][j(0x15e)]=f=>{const k=j;if(f[k(0x14f)]===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g['setTool'](this[k(0x15c)]);else{if(this[k(0x145)])g['showPopup'](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this[l(0x15c)])this[l(0x151)]()['host'][l(0x15d)](this[l(0x15c)]),setTimeout(()=>{const m=l;c[m(0x14e)][m(0x146)]();},0x32),this['popup']&&(this[l(0x14c)]=setTimeout(()=>{const n=l;this[n(0x14c)]=null,this['getRootNode']()[n(0x14a)][n(0x14b)](this);},0xc8));else{if(this['popup'])this[l(0x151)]()['host'][l(0x14b)](this);}},this['_div']['onpointerup']=()=>{const o=j;this['_longPress']&&(clearTimeout(this['_longPress']),this[o(0x14c)]=null);},this[j(0x162)](Object[j(0x150)](d)[0x0]);}[i(0x162)](c){const p=i,d=this[p(0x157)][c];d&&(this[p(0x152)][p(0x153)]=c||p(0x155),this['_div']['setAttribute'](p(0x14d),c||p(0x155)),this['_img']['src']=d['icon'],this[p(0x15c)]=c);}['setActiveTool'](c){const q=i;this[q(0x162)](c);const d=this['tools'][c];this[q(0x152)][q(0x159)](q(0x161),String(!!d));}}customElements['define'](i(0x148),DesignerToolbarButton);