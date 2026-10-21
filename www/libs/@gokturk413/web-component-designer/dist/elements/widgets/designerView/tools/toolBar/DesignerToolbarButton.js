function b(c,d){c=c-0xe3;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xf7))/0x1+parseInt(h(0xfa))/0x2+-parseInt(h(0xff))/0x3*(parseInt(h(0xf6))/0x4)+parseInt(h(0xfb))/0x5*(parseInt(h(0xed))/0x6)+parseInt(h(0xf4))/0x7*(-parseInt(h(0xeb))/0x8)+-parseInt(h(0xef))/0x9*(-parseInt(h(0xf2))/0xa)+parseInt(h(0xe7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe2bd8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [i(0xfd)]=html`<button id="div" type="button" aria-pressed="false"><img id="img" alt=""></button>`;[i(0xfc)];[i(0xe9)];['currentToolOnButton'];[i(0xe4)];[i(0xe3)];[i(0xea)];constructor(c,d){const j=i;super(),this[j(0xfc)]=d,this['_img']=this[j(0xf0)](j(0xe8)),this[j(0xe3)]=this['_getDomElement']('div'),this[j(0xe3)]['onclick']=f=>{const k=j;if(f['detail']===0x0){const g=this['getRootNode']()['host'];if(this[k(0xe5)])g['setTool'](this['currentToolOnButton']);else{if(this[k(0xe9)])g[k(0xfe)](this);}}},this[j(0xe3)][j(0xf9)]=()=>{const l=j;if(this['currentToolOnButton'])this['getRootNode']()[l(0xf3)]['setTool'](this[l(0xe5)]),setTimeout(()=>{const m=l;c[m(0xf1)][m(0xee)]();},0x32),this[l(0xe9)]&&(this['_longPress']=setTimeout(()=>{const n=l;this[n(0xea)]=null,this[n(0xe6)]()['host']['showPopup'](this);},0xc8));else{if(this['popup'])this['getRootNode']()[l(0xf3)][l(0xfe)](this);}},this[j(0xe3)]['onpointerup']=()=>{const o=j;this[o(0xea)]&&(clearTimeout(this['_longPress']),this[o(0xea)]=null);},this['showTool'](Object['getOwnPropertyNames'](d)[0x0]);}['showTool'](c){const p=i,d=this[p(0xfc)][c];d&&(this['_div'][p(0xf5)]=c||'Transform',this['_div']['setAttribute'](p(0xf8),c||'Transform'),this['_img']['src']=d['icon'],this[p(0xe5)]=c);}[i(0xec)](c){const q=i;this['showTool'](c);const d=this[q(0xfc)][c];this[q(0xe3)]['setAttribute']('aria-pressed',String(!!d));}}customElements['define']('node-projects-designer-toolbar-button',DesignerToolbarButton);function a(){const r=['host','7BVjaev','title','154244xyPAcZ','1307723ozdiDF','aria-label','onpointerdown','844366oJjgNa','239480ZmArVU','tools','template','showPopup','81LFGftp','_div','_img','currentToolOnButton','getRootNode','22572429YLKklW','img','popup','_longPress','4805168OXSRMv','setActiveTool','6IufSOk','focus','18LynQWB','_getDomElement','clickOverlay','6780630BtGKJk'];a=function(){return r;};return a();}