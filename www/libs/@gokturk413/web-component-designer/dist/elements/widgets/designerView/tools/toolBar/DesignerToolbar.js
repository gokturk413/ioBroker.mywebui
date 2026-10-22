function b(c,d){c=c-0xda;const e=a();let f=e[c];return f;}const i=b;function a(){const q=['11416390fHaZEg','_getDomElement','initialize','style','dispose','node-projects-designer-toolbar','get','7702635fgWgHk','12VWfcHt','_toolWindows','provideButton','6MjmehC','stopPropagation','addEventListener','_toolButtonsElem','_popupContainer','onToolChanged','newValue','3889064vMisQz','2998aQRiob','popup','designerView','define','showWindow','7920261qsPoSm','designerCanvas','_toolSubscription','2521629kmLKkG','length','showPopup','appendChild','createElement','delete','replaceChildren','onwheel','4sgfOLU','_serviceContainer','toolButtons','children','5347524ELaemx','innerHTML','string'];a=function(){return q;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xf9))/0x1*(parseInt(h(0xda))/0x2)+parseInt(h(0xe2))/0x3*(parseInt(h(0xea))/0x4)+-parseInt(h(0xf8))/0x5*(parseInt(h(0xfc))/0x6)+parseInt(h(0xee))/0x7+parseInt(h(0x103))/0x8+-parseInt(h(0xdf))/0x9+parseInt(h(0xf1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc1c67));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xf4)]=css`
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
        <div id="toolButtons"></div>`;[i(0xe1)];[i(0xfa)]=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.[j(0xf5)](),this['_toolButtonsElem'][j(0xe8)](),this['_popupContainer']['replaceChildren']();}['_toolButtonsElem'];['_serviceContainer'];[i(0x100)];['designerView'];constructor(){const k=i;super(),this[k(0xff)]=this[k(0xf2)](k(0xec)),this[k(0xff)][k(0xe9)]=c=>c[k(0xfd)](),this['_popupContainer']=this[k(0xf2)](k(0xdb));}[i(0xf3)](c,d){const l=i;this['dispose'](),this['_serviceContainer']=c,this[l(0xdc)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this['_toolButtonsElem'][l(0xe5)](e[l(0xfb)](d['designerCanvas']));}this[l(0xe1)]=this[l(0xeb)]['globalContext'][l(0x101)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0x102)]['name']);}});}[i(0xe4)](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d['remove'](),this['_toolWindows'][n(0xe7)](c);return;}this[n(0xfa)]['delete'](c);if(this[n(0x100)]['children']['length'])this['_popupContainer'][n(0xef)]='';else{let e;if(typeof c['popup']===n(0xf0))e=document[n(0xe6)](c['popup']);else e=new c['popup'](this[n(0xdc)]['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0xde)](e,c),this['_toolWindows']['set'](c,e),e[n(0xfe)]('close',()=>{const o=n;if(this[o(0xfa)][o(0xf7)](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this[n(0x100)]['appendChild'](e);}}['setTool'](c){const p=i;this[p(0x100)][p(0xed)][p(0xe3)]&&(this[p(0x100)][p(0xef)]=''),this[p(0xdc)][p(0xe0)]['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0xdd)](i(0xf6),DesignerToolbar);