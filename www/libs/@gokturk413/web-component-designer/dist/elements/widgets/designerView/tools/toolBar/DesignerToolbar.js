const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd0))/0x1*(parseInt(h(0xd6))/0x2)+-parseInt(h(0xcc))/0x3+parseInt(h(0xbe))/0x4+-parseInt(h(0xb0))/0x5*(parseInt(h(0xc8))/0x6)+-parseInt(h(0xd5))/0x7*(-parseInt(h(0xaf))/0x8)+-parseInt(h(0xbd))/0x9+parseInt(h(0xc4))/0xa*(parseInt(h(0xc3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe0a85));function b(c,d){c=c-0xaf;const e=a();let f=e[c];return f;}function a(){const q=['remove','globalContext','popup','set','_toolSubscription','showPopup','setActiveTool','designViewToolbarButtons','length','addEventListener','node-projects-designer-toolbar','_toolButtonsElem','2842272GqTWls','2150092MXVdqf','replaceChildren','name','designerCanvas','dispose','1524149BZKRUm','190yyUuWV','_serviceContainer','_popupContainer','designerView','434916abiPEn','_getDomElement','appendChild','delete','5476137dVbEna','setTool','children','close','6625BjeAIp','executeCommand','get','string','createElement','2354849tlXZcx','264xdmHlL','_toolWindows','32ZHECpD','40RhQRnN'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="toolButtons"></div>`;['_toolSubscription'];['_toolWindows']=new WeakMap();['dispose'](){const i=b;this[i(0xb5)]?.[i(0xc2)](),this['_toolButtonsElem'][i(0xbf)](),this[i(0xc6)]['replaceChildren']();}[j(0xbc)];[j(0xc5)];['_popupContainer'];['designerView'];constructor(){const k=j;super(),this['_toolButtonsElem']=this['_getDomElement']('toolButtons'),this['_toolButtonsElem']['onwheel']=c=>c['stopPropagation'](),this['_popupContainer']=this[k(0xc9)](k(0xb3));}['initialize'](c,d){const l=j;this[l(0xc2)](),this['_serviceContainer']=c,this['designerView']=d;for(let e of this['_serviceContainer'][l(0xb8)]){this[l(0xbc)]['appendChild'](e['provideButton'](d['designerCanvas']));}this[l(0xb5)]=this[l(0xc5)][l(0xb2)]['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0xbc)][m(0xce)]){g instanceof DesignerToolbarButton&&g[m(0xb7)](f['newValue'][m(0xc0)]);}});}[j(0xb6)](c){const n=j,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d[n(0xb1)](),this[n(0xd7)][n(0xcb)](c);return;}this['_toolWindows']['delete'](c);if(this['_popupContainer'][n(0xce)][n(0xb9)])this[n(0xc6)]['innerHTML']='';else{let e;if(typeof c[n(0xb3)]===n(0xd3))e=document[n(0xd4)](c['popup']);else e=new c[(n(0xb3))](this[n(0xc7)][n(0xc1)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows'][n(0xb4)](c,e),e[n(0xba)](n(0xcf),()=>{const o=n;if(this[o(0xd7)][o(0xd2)](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this['_popupContainer'][n(0xca)](e);}}[j(0xcd)](c){const p=j;this['_popupContainer'][p(0xce)]['length']&&(this[p(0xc6)]['innerHTML']=''),this[p(0xc7)]['designerCanvas'][p(0xd1)]({'type':CommandType[p(0xcd)],'parameter':c});}}customElements['define'](j(0xbb),DesignerToolbar);