function a(){const q=['18vfjtfa','setTool','11LLUbfc','9216fGPhsH','define','template','popup','detail','title','20XVcMHi','host','aria-label','8930832Bdvazr','getOwnPropertyNames','icon','div','style','1630044frSbDS','onpointerup','img','_div','_longPress','72975576cCuUzq','currentToolOnButton','10290RBpnjm','5944712ONTYBL','_img','aria-pressed','onclick','showTool','130886NaKzEm','1513572VxkWKU','getRootNode','showPopup','Transform','7dzOCLe'];a=function(){return q;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f5))/0x1*(parseInt(h(0x1ef))/0x2)+parseInt(h(0x206))/0x3+-parseInt(h(0x1ea))/0x4+parseInt(h(0x1fe))/0x5*(-parseInt(h(0x1f0))/0x6)+parseInt(h(0x1f4))/0x7*(-parseInt(h(0x201))/0x8)+-parseInt(h(0x1f8))/0x9*(parseInt(h(0x1e9))/0xa)+parseInt(h(0x1f7))/0xb*(parseInt(h(0x1e7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbec54));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x205)]=css`
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
    `;static [i(0x1fa)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x1fb)];[i(0x1e8)];[i(0x1eb)];['_div'];[i(0x1e6)];constructor(c,d){const j=i;super(),this['tools']=d,this[j(0x1eb)]=this['_getDomElement'](j(0x208)),this[j(0x1e5)]=this['_getDomElement'](j(0x204)),this['_div'][j(0x1ed)]=f=>{const k=j;if(f[k(0x1fc)]===0x0){const g=this[k(0x1f1)]()[k(0x1ff)];if(this[k(0x1e8)])g[k(0x1f6)](this['currentToolOnButton']);else{if(this[k(0x1fb)])g[k(0x1f2)](this);}}},this[j(0x1e5)]['onpointerdown']=()=>{const l=j;if(this[l(0x1e8)])this['getRootNode']()['host'][l(0x1f6)](this[l(0x1e8)]),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const m=l;this['_longPress']=null,this[m(0x1f1)]()[m(0x1ff)]['showPopup'](this);},0xc8));else{if(this['popup'])this['getRootNode']()['host'][l(0x1f2)](this);}},this[j(0x1e5)][j(0x207)]=()=>{const n=j;this[n(0x1e6)]&&(clearTimeout(this[n(0x1e6)]),this['_longPress']=null);},this[j(0x1ee)](Object[j(0x202)](d)[0x0]);}[i(0x1ee)](c){const o=i,d=this['tools'][c];d&&(this[o(0x1e5)][o(0x1fd)]=c||o(0x1f3),this['_div']['setAttribute'](o(0x200),c||'Transform'),this['_img']['src']=d[o(0x203)],this[o(0x1e8)]=c);}['setActiveTool'](c){const p=i;this[p(0x1ee)](c);const d=this['tools'][c];this[p(0x1e5)]['setAttribute'](p(0x1ec),String(!!d));}}function b(c,d){c=c-0x1e5;const e=a();let f=e[c];return f;}customElements[i(0x1f9)]('node-projects-designer-toolbar-button',DesignerToolbarButton);