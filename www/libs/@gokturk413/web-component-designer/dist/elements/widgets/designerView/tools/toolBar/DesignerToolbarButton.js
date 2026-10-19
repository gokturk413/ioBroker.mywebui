const i=b;function b(c,d){c=c-0xaa;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb2))/0x1*(parseInt(h(0xb4))/0x2)+parseInt(h(0xaf))/0x3+-parseInt(h(0xc8))/0x4+-parseInt(h(0xbd))/0x5*(-parseInt(h(0xb6))/0x6)+-parseInt(h(0xaa))/0x7*(parseInt(h(0xae))/0x8)+parseInt(h(0xb8))/0x9+parseInt(h(0xb0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c45a));function a(){const q=['onpointerup','clickOverlay','style','tools','define','icon','1035560kLGlrt','4977atQOGl','detail','Transform','setTool','2440AJkruW','43626rKTbWl','5022600alvUKz','host','49368xKLFcP','getRootNode','10OBUJar','currentToolOnButton','12OfRFon','_getDomElement','555759WdHeOi','showTool','onclick','showPopup','_longPress','70745ptiTFx','popup','_div','getOwnPropertyNames','div'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0xc4)]=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xc5)];[i(0xbe)];[i(0xb5)];['_img'];['_div'];['_longPress'];constructor(c,d){const j=i;super(),this[j(0xc5)]=d,this['_img']=this['_getDomElement']('img'),this[j(0xbf)]=this[j(0xb7)](j(0xc1)),this[j(0xbf)][j(0xba)]=f=>{const k=j;if(f[k(0xab)]===0x0){const g=this[k(0xb3)]()[k(0xb1)];if(this[k(0xb5)])g[k(0xad)](this['currentToolOnButton']);else{if(this['popup'])g[k(0xbb)](this);}}},this['_div']['onpointerdown']=()=>{const l=j;if(this['currentToolOnButton'])this[l(0xb3)]()['host'][l(0xad)](this[l(0xb5)]),setTimeout(()=>{const m=l;c[m(0xc3)]['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const n=l;this[n(0xbc)]=null,this['getRootNode']()[n(0xb1)][n(0xbb)](this);},0xc8));else{if(this['popup'])this[l(0xb3)]()['host'][l(0xbb)](this);}},this[j(0xbf)][j(0xc2)]=()=>{const o=j;this['_longPress']&&(clearTimeout(this[o(0xbc)]),this['_longPress']=null);},this['showTool'](Object[j(0xc0)](d)[0x0]);}[i(0xb9)](c){const p=i,d=this[p(0xc5)][c];d&&(this['_div']['title']=c||p(0xac),this[p(0xbf)]['setAttribute']('aria-label',c||'Transform'),this['_img']['src']=d[p(0xc7)],this[p(0xb5)]=c);}['setActiveTool'](c){this['showTool'](c);const d=this['tools'][c];this['_div']['setAttribute']('aria-pressed',String(!!d));}}customElements[i(0xc6)]('node-projects-designer-toolbar-button',DesignerToolbarButton);