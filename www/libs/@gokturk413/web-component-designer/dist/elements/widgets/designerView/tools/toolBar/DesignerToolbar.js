const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x191))/0x1*(parseInt(h(0x17b))/0x2)+-parseInt(h(0x18f))/0x3+parseInt(h(0x19f))/0x4*(parseInt(h(0x19c))/0x5)+-parseInt(h(0x184))/0x6+-parseInt(h(0x182))/0x7*(-parseInt(h(0x17f))/0x8)+parseInt(h(0x199))/0x9*(parseInt(h(0x19b))/0xa)+-parseInt(h(0x17d))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9dd3c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const q=['string','_getDomElement','length','1717671XbGFwU','_toolSubscription','8uOBbRy','innerHTML','define','onToolChanged','get','popup','designerCanvas','_toolWindows','453294couJJv','remove','200dKJzNk','419005WcOlNw','_serviceContainer','_popupContainer','20IEWXgw','delete','designerView','266298KeODtK','appendChild','13748339GwFfDS','stopPropagation','1528BGuuTN','executeCommand','setTool','39669wAbBeD','createElement','6630288COYQQn','setActiveTool','children','node-projects-designer-toolbar','name','showPopup','newValue','_toolButtonsElem'];a=function(){return q;};return a();}import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0x17b;const e=a();let f=e[c];return f;}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="toolButtons"></div>`;[i(0x190)];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this[j(0x190)]?.['dispose'](),this[j(0x18b)]['replaceChildren'](),this[j(0x19e)]['replaceChildren']();}[i(0x18b)];[i(0x19d)];[i(0x19e)];['designerView'];constructor(){const k=i;super(),this[k(0x18b)]=this[k(0x18d)]('toolButtons'),this[k(0x18b)]['onwheel']=c=>c[k(0x17e)](),this[k(0x19e)]=this['_getDomElement']('popup');}['initialize'](c,d){const l=i;this['dispose'](),this['_serviceContainer']=c,this[l(0x1a1)]=d;for(let e of this[l(0x19d)]['designViewToolbarButtons']){this[l(0x18b)][l(0x17c)](e['provideButton'](d[l(0x197)]));}this[l(0x190)]=this['_serviceContainer']['globalContext'][l(0x194)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0x186)]){g instanceof DesignerToolbarButton&&g[m(0x185)](f[m(0x18a)][m(0x188)]);}});}[i(0x189)](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d[n(0x19a)](),this['_toolWindows'][n(0x1a0)](c);return;}this[n(0x198)]['delete'](c);if(this[n(0x19e)][n(0x186)][n(0x18e)])this[n(0x19e)][n(0x192)]='';else{let e;if(typeof c[n(0x196)]===n(0x18c))e=document[n(0x183)](c['popup']);else e=new c[(n(0x196))](this['designerView'][n(0x197)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0x198)]['set'](c,e),e['addEventListener']('close',()=>{const o=n;if(this[o(0x198)][o(0x195)](c)===e)this[o(0x198)]['delete'](c);},{'once':!![]})):this['_popupContainer']['appendChild'](e);}}[i(0x181)](c){const p=i;this['_popupContainer']['children'][p(0x18e)]&&(this[p(0x19e)]['innerHTML']=''),this[p(0x1a1)]['designerCanvas'][p(0x180)]({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0x193)](i(0x187),DesignerToolbar);