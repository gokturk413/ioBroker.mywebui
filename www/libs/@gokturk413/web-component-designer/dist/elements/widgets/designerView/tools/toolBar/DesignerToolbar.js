const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x190))/0x1+-parseInt(h(0x193))/0x2*(-parseInt(h(0x194))/0x3)+-parseInt(h(0x185))/0x4*(parseInt(h(0x197))/0x5)+parseInt(h(0x19c))/0x6*(parseInt(h(0x189))/0x7)+-parseInt(h(0x18b))/0x8*(parseInt(h(0x18e))/0x9)+-parseInt(h(0x19d))/0xa+parseInt(h(0x183))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7d6f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="toolButtons"></div>`;[i(0x18d)];[i(0x19f)]=new WeakMap();['dispose'](){const j=i;this[j(0x18d)]?.['dispose'](),this['_toolButtonsElem']['replaceChildren'](),this[j(0x18c)][j(0x184)]();}[i(0x191)];[i(0x188)];[i(0x18c)];[i(0x18a)];constructor(){const k=i;super(),this[k(0x191)]=this['_getDomElement'](k(0x192)),this['_toolButtonsElem']['onwheel']=c=>c['stopPropagation'](),this['_popupContainer']=this['_getDomElement'](k(0x1a1));}[i(0x196)](c,d){const l=i;this[l(0x1a5)](),this[l(0x188)]=c,this['designerView']=d;for(let e of this[l(0x188)][l(0x18f)]){this[l(0x191)][l(0x187)](e[l(0x1a4)](d[l(0x1a3)]));}this[l(0x18d)]=this[l(0x188)]['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g[m(0x1a0)](f['newValue'][m(0x186)]);}});}[i(0x19a)](c){const n=i,d=this[n(0x19f)]['get'](c);if(d?.['isConnected']){d['remove'](),this['_toolWindows'][n(0x199)](c);return;}this['_toolWindows'][n(0x199)](c);if(this['_popupContainer'][n(0x198)][n(0x195)])this['_popupContainer'][n(0x19b)]='';else{let e;if(typeof c[n(0x1a1)]===n(0x1a2))e=document['createElement'](c['popup']);else e=new c[(n(0x1a1))](this['designerView'][n(0x1a3)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0x19f)]['set'](c,e),e['addEventListener']('close',()=>{const o=n;if(this['_toolWindows'][o(0x19e)](c)===e)this['_toolWindows'][o(0x199)](c);},{'once':!![]})):this[n(0x18c)]['appendChild'](e);}}['setTool'](c){const p=i;this['_popupContainer'][p(0x198)][p(0x195)]&&(this[p(0x18c)]['innerHTML']=''),this['designerView'][p(0x1a3)]['executeCommand']({'type':CommandType[p(0x1a6)],'parameter':c});}}function b(c,d){c=c-0x183;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);function a(){const q=['16hFQKbP','_popupContainer','_toolSubscription','203976nbGgmi','designViewToolbarButtons','786730MSUyHu','_toolButtonsElem','toolButtons','4RToISu','843069cmEEcy','length','initialize','55bywMGB','children','delete','showPopup','innerHTML','6mecLjW','9941780NfOvjv','get','_toolWindows','setActiveTool','popup','string','designerCanvas','provideButton','dispose','setTool','7433987hUvqrB','replaceChildren','263804PyFZJv','name','appendChild','_serviceContainer','2994915MXyptd','designerView'];a=function(){return q;};return a();}