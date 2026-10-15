const i=b;function b(c,d){c=c-0xdf;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xec))/0x1+-parseInt(h(0xee))/0x2+-parseInt(h(0xe2))/0x3*(parseInt(h(0xf9))/0x4)+parseInt(h(0xfb))/0x5+parseInt(h(0xf0))/0x6*(-parseInt(h(0xe8))/0x7)+-parseInt(h(0xf4))/0x8+parseInt(h(0xfc))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa3328));function a(){const r=['host','showTool','307614fgDZBj','tools','Transform','currentToolOnButton','node-projects-designer-toolbar-button','detail','4199069ubcYVo','define','onpointerdown','_getDomElement','1011593hlXSbt','_div','1556704okgkzE','clickOverlay','6xfekFt','_img','popup','showPopup','9031216HlhWTK','_longPress','title','onclick','img','4wxNLQy','src','692765PBQcyI','37360395AGQtiR','getRootNode','div'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xe3)];['popup'];[i(0xe5)];[i(0xf1)];['_div'];[i(0xf5)];constructor(c,d){const j=i;super(),this[j(0xe3)]=d,this['_img']=this['_getDomElement'](j(0xf8)),this['_div']=this[j(0xeb)](j(0xdf)),this['_div'][j(0xf7)]=f=>{const k=j;if(f[k(0xe7)]===0x0){const g=this['getRootNode']()['host'];if(this['currentToolOnButton'])g['setTool'](this['currentToolOnButton']);else{if(this[k(0xf2)])g['showPopup'](this);}}},this[j(0xed)][j(0xea)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()['host']['setTool'](this[l(0xe5)]),setTimeout(()=>{const m=l;c[m(0xef)]['focus']();},0x32),this['popup']&&(this['_longPress']=setTimeout(()=>{const n=l;this['_longPress']=null,this[n(0xfd)]()[n(0xe0)][n(0xf3)](this);},0xc8));else{if(this[l(0xf2)])this[l(0xfd)]()[l(0xe0)][l(0xf3)](this);}},this[j(0xed)]['onpointerup']=()=>{const o=j;this[o(0xf5)]&&(clearTimeout(this[o(0xf5)]),this['_longPress']=null);},this[j(0xe1)](Object['getOwnPropertyNames'](d)[0x0]);}[i(0xe1)](c){const p=i,d=this[p(0xe3)][c];d&&(this['_div'][p(0xf6)]=c||p(0xe4),this['_div']['setAttribute']('aria-label',c||p(0xe4)),this[p(0xf1)][p(0xfa)]=d['icon'],this['currentToolOnButton']=c);}['setActiveTool'](c){const q=i;this[q(0xe1)](c);const d=this[q(0xe3)][c];this[q(0xed)]['setAttribute']('aria-pressed',String(!!d));}}customElements[i(0xe9)](i(0xe6),DesignerToolbarButton);