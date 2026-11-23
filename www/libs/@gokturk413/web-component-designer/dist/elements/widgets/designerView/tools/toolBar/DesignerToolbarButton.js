const i=b;function a(){const r=['583016FSBCFl','87ONbGGm','showTool','tools','55lgzZzN','setActiveTool','_longPress','_img','Transform','357906OyQDRg','onpointerup','71216FmmXSe','_getDomElement','315oHcxby','2338296BzplDs','currentToolOnButton','popup','setAttribute','getOwnPropertyNames','showPopup','src','3207302eIxQFb','define','195UNmAtd','template','icon','122510unsKWB','35hxYAFf','clickOverlay','detail','img','1938YskuGj','host','getRootNode','aria-pressed','_div'];a=function(){return r;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xb1))/0x1*(parseInt(h(0x95))/0x2)+parseInt(h(0x9b))/0x3*(parseInt(h(0xa5))/0x4)+-parseInt(h(0xb5))/0x5*(-parseInt(h(0xa3))/0x6)+parseInt(h(0xaf))/0x7+-parseInt(h(0x9a))/0x8+parseInt(h(0xa7))/0x9*(parseInt(h(0xb4))/0xa)+parseInt(h(0x9e))/0xb*(-parseInt(h(0xa8))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8ec12));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [i(0xb2)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0x9d)];['popup'];[i(0xa9)];['_img'];['_div'];['_longPress'];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0xa1)]=this[j(0xa6)](j(0xb8)),this['_div']=this['_getDomElement']('div'),this[j(0x99)]['onclick']=f=>{const k=j;if(f[k(0xb7)]===0x0){const g=this[k(0x97)]()[k(0x96)];if(this['currentToolOnButton'])g['setTool'](this['currentToolOnButton']);else{if(this['popup'])g[k(0xad)](this);}}},this[j(0x99)]['onpointerdown']=()=>{const l=j;if(this[l(0xa9)])this['getRootNode']()[l(0x96)]['setTool'](this[l(0xa9)]),setTimeout(()=>{const m=l;c[m(0xb6)]['focus']();},0x32),this[l(0xaa)]&&(this[l(0xa0)]=setTimeout(()=>{const n=l;this[n(0xa0)]=null,this['getRootNode']()['host']['showPopup'](this);},0xc8));else{if(this[l(0xaa)])this['getRootNode']()[l(0x96)][l(0xad)](this);}},this['_div'][j(0xa4)]=()=>{const o=j;this[o(0xa0)]&&(clearTimeout(this[o(0xa0)]),this[o(0xa0)]=null);},this[j(0x9c)](Object[j(0xac)](d)[0x0]);}[i(0x9c)](c){const p=i,d=this['tools'][c];d&&(this[p(0x99)]['title']=c||'Transform',this['_div'][p(0xab)]('aria-label',c||p(0xa2)),this[p(0xa1)][p(0xae)]=d[p(0xb3)],this['currentToolOnButton']=c);}[i(0x9f)](c){const q=i;this[q(0x9c)](c);const d=this[q(0x9d)][c];this[q(0x99)]['setAttribute'](q(0x98),String(!!d));}}function b(c,d){c=c-0x95;const e=a();let f=e[c];return f;}customElements[i(0xb0)]('node-projects-designer-toolbar-button',DesignerToolbarButton);