const i=b;function a(){const r=['showPopup','style','4926944LalarO','getOwnPropertyNames','508ljhCeY','onpointerup','1180795LrRZOZ','host','1278960QewkkB','_getDomElement','currentToolOnButton','popup','setTool','detail','setActiveTool','aria-label','focus','div','_div','aria-pressed','onpointerdown','icon','getRootNode','55745EwWvtn','1125028PazWOV','_longPress','img','1527988IwUZwc','setAttribute','clickOverlay','showTool','Transform','tools','3911070UOHYNc'];a=function(){return r;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1e3))/0x1+-parseInt(h(0x1e6))/0x2+parseInt(h(0x1ec))/0x3+parseInt(h(0x1f1))/0x4*(-parseInt(h(0x1e2))/0x5)+-parseInt(h(0x1f5))/0x6+parseInt(h(0x1f3))/0x7+parseInt(h(0x1ef))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc83e2));function b(c,d){c=c-0x1da;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x1ee)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;['tools'];[i(0x1f8)];['currentToolOnButton'];['_img'];['_div'];[i(0x1e4)];constructor(c,d){const j=i;super(),this[j(0x1eb)]=d,this['_img']=this['_getDomElement'](j(0x1e5)),this[j(0x1dd)]=this[j(0x1f6)](j(0x1dc)),this[j(0x1dd)]['onclick']=f=>{const k=j;if(f[k(0x1fa)]===0x0){const g=this['getRootNode']()[k(0x1f4)];if(this['currentToolOnButton'])g[k(0x1f9)](this[k(0x1f7)]);else{if(this['popup'])g['showPopup'](this);}}},this['_div'][j(0x1df)]=()=>{const l=j;if(this['currentToolOnButton'])this[l(0x1e1)]()['host'][l(0x1f9)](this['currentToolOnButton']),setTimeout(()=>{const m=l;c[m(0x1e8)][m(0x1db)]();},0x32),this[l(0x1f8)]&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this['getRootNode']()[n(0x1f4)][n(0x1ed)](this);},0xc8));else{if(this[l(0x1f8)])this['getRootNode']()['host'][l(0x1ed)](this);}},this['_div'][j(0x1f2)]=()=>{const o=j;this['_longPress']&&(clearTimeout(this[o(0x1e4)]),this['_longPress']=null);},this[j(0x1e9)](Object[j(0x1f0)](d)[0x0]);}[i(0x1e9)](c){const p=i,d=this[p(0x1eb)][c];d&&(this['_div']['title']=c||p(0x1ea),this[p(0x1dd)][p(0x1e7)](p(0x1da),c||p(0x1ea)),this['_img']['src']=d[p(0x1e0)],this['currentToolOnButton']=c);}[i(0x1fb)](c){const q=i;this['showTool'](c);const d=this['tools'][c];this[q(0x1dd)][q(0x1e7)](q(0x1de),String(!!d));}}customElements['define']('node-projects-designer-toolbar-button',DesignerToolbarButton);