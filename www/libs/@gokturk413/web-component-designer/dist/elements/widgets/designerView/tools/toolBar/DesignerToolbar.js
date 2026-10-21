const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xf4))/0x1+-parseInt(h(0xfc))/0x2*(parseInt(h(0xfb))/0x3)+parseInt(h(0xe6))/0x4+parseInt(h(0xf0))/0x5*(-parseInt(h(0xef))/0x6)+-parseInt(h(0xee))/0x7*(-parseInt(h(0xf6))/0x8)+parseInt(h(0xfa))/0x9+parseInt(h(0xdd))/0xa*(parseInt(h(0xe5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68435));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0xdd;const e=a();let f=e[c];return f;}function a(){const q=['globalContext','_toolWindows','string','399663RovYvT','1059516fWFQVi','executeCommand','onwheel','node-projects-designer-toolbar','designerView','define','_toolSubscription','_getDomElement','410704wBBwaj','18ymAPVF','312885pcSDEC','_toolButtonsElem','replaceChildren','children','209710LXZUTh','style','48fZPQDa','addEventListener','popup','_popupContainer','4172139mVKHuN','3wkSXCz','1456618cgSPMP','get','set','length','isConnected','designerCanvas','setTool','130PIzAUu','appendChild','innerHTML','newValue','initialize'];a=function(){return q;};return a();}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xf5)]=css`
        node-projects-designer-tools-buttons {
            height: 100%;
            width: 100%;
        }        

        #toolButtons {
          scrollbar-width: none; /* for Firefox */
          overflow-y: auto;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 6px 2px;
        }
        #toolButtons::-webkit-scrollbar {
          display: none; /* for Chrome, Safari, and Opera */
        }

        #popup {
            position: absolute;
            top: calc(0px + 10px);
            height: 100%;
            left: calc(100% + 10px);
        }`;static ['template']=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0xec)];[i(0xe3)]=new WeakMap();['dispose'](){const j=i;this[j(0xec)]?.['dispose'](),this['_toolButtonsElem']['replaceChildren'](),this['_popupContainer'][j(0xf2)]();}[i(0xf1)];['_serviceContainer'];[i(0xf9)];['designerView'];constructor(){const k=i;super(),this['_toolButtonsElem']=this[k(0xed)]('toolButtons'),this[k(0xf1)][k(0xe8)]=c=>c['stopPropagation'](),this['_popupContainer']=this[k(0xed)]('popup');}[i(0xe1)](c,d){const l=i;this['dispose'](),this['_serviceContainer']=c,this[l(0xea)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this['_toolButtonsElem'][l(0xde)](e['provideButton'](d[l(0x101)]));}this['_toolSubscription']=this['_serviceContainer'][l(0xe2)]['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0xf1)]['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0xe0)]['name']);}});}['showPopup'](c){const n=i,d=this['_toolWindows'][n(0xfd)](c);if(d?.[n(0x100)]){d['remove'](),this[n(0xe3)]['delete'](c);return;}this[n(0xe3)]['delete'](c);if(this[n(0xf9)][n(0xf3)]['length'])this['_popupContainer']['innerHTML']='';else{let e;if(typeof c[n(0xf8)]===n(0xe4))e=document['createElement'](c['popup']);else e=new c[(n(0xf8))](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0xe3)][n(0xfe)](c,e),e[n(0xf7)]('close',()=>{const o=n;if(this['_toolWindows'][o(0xfd)](c)===e)this[o(0xe3)]['delete'](c);},{'once':!![]})):this[n(0xf9)]['appendChild'](e);}}[i(0x102)](c){const p=i;this['_popupContainer'][p(0xf3)][p(0xff)]&&(this[p(0xf9)][p(0xdf)]=''),this['designerView'][p(0x101)][p(0xe7)]({'type':CommandType[p(0x102)],'parameter':c});}}customElements[i(0xeb)](i(0xe9),DesignerToolbar);