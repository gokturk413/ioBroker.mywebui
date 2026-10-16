const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb8))/0x1+parseInt(h(0xce))/0x2*(parseInt(h(0xb1))/0x3)+-parseInt(h(0xbd))/0x4*(parseInt(h(0xb7))/0x5)+parseInt(h(0xae))/0x6+parseInt(h(0xb3))/0x7*(-parseInt(h(0xaf))/0x8)+parseInt(h(0xaa))/0x9+parseInt(h(0xc5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x370ad));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0xa8;const e=a();let f=e[c];return f;}function a(){const q=['innerHTML','showPopup','popup','delete','setTool','name','dispose','16BjzMLl','designViewToolbarButtons','replaceChildren','3705588oTCFDf','_toolButtonsElem','set','provideButton','453900YHXZOC','2403136bhSTFe','onwheel','106839boLJRD','length','7LAgivU','toolButtons','_toolWindows','children','10kFcANN','149545nedfIx','_popupContainer','addEventListener','executeCommand','define','828368rhCzpf','newValue','initialize','designerCanvas','appendChild','_toolSubscription','designerView','_serviceContainer','181980lTmuzP','get'];a=function(){return q;};return a();}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="toolButtons"></div>`;[i(0xc2)];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.[j(0xcd)](),this[j(0xab)][j(0xa9)](),this[j(0xb9)][j(0xa9)]();}['_toolButtonsElem'];['_serviceContainer'];[i(0xb9)];['designerView'];constructor(){const k=i;super(),this[k(0xab)]=this['_getDomElement'](k(0xb4)),this['_toolButtonsElem'][k(0xb0)]=c=>c['stopPropagation'](),this[k(0xb9)]=this['_getDomElement'](k(0xc9));}[i(0xbf)](c,d){const l=i;this['dispose'](),this[l(0xc4)]=c,this[l(0xc3)]=d;for(let e of this['_serviceContainer'][l(0xa8)]){this['_toolButtonsElem'][l(0xc1)](e[l(0xad)](d[l(0xc0)]));}this['_toolSubscription']=this[l(0xc4)]['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0xbe)][m(0xcc)]);}});}[i(0xc8)](c){const n=i,d=this['_toolWindows'][n(0xc6)](c);if(d?.['isConnected']){d['remove'](),this['_toolWindows'][n(0xca)](c);return;}this[n(0xb5)]['delete'](c);if(this[n(0xb9)][n(0xb6)]['length'])this[n(0xb9)][n(0xc7)]='';else{let e;if(typeof c['popup']==='string')e=document['createElement'](c[n(0xc9)]);else e=new c['popup'](this['designerView'][n(0xc0)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows'][n(0xac)](c,e),e[n(0xba)]('close',()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0xb5)][o(0xca)](c);},{'once':!![]})):this['_popupContainer'][n(0xc1)](e);}}[i(0xcb)](c){const p=i;this[p(0xb9)][p(0xb6)][p(0xb2)]&&(this['_popupContainer'][p(0xc7)]=''),this['designerView']['designerCanvas'][p(0xbb)]({'type':CommandType[p(0xcb)],'parameter':c});}}customElements[i(0xbc)]('node-projects-designer-toolbar',DesignerToolbar);