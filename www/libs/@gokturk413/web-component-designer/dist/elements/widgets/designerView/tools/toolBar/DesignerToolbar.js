function b(c,d){c=c-0xb0;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb2))/0x1+-parseInt(h(0xb1))/0x2*(parseInt(h(0xbb))/0x3)+-parseInt(h(0xc9))/0x4+parseInt(h(0xce))/0x5+-parseInt(h(0xcf))/0x6+parseInt(h(0xcb))/0x7+-parseInt(h(0xb8))/0x8*(-parseInt(h(0xcd))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22cf7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';function a(){const p=['dispose','template','innerHTML','children','style','addEventListener','409600ZuiOMw','_popupContainer','116543uvCITH','remove','4995rYFFep','39975iuCUMO','405432dZmEvn','replaceChildren','setTool','6hvEAkF','100231rsKLcM','_getDomElement','_toolSubscription','initialize','name','designerView','4472NjfQTI','set','get','122565vCzhrn','toolButtons','popup','node-projects-designer-toolbar','_toolButtonsElem','stopPropagation','globalContext','_toolWindows'];a=function(){return p;};return a();}import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xc7)]=css`
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
        }`;static [i(0xc4)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0xb4)];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.[j(0xc3)](),this[j(0xbf)][j(0xd0)](),this[j(0xca)]['replaceChildren']();}['_toolButtonsElem'];['_serviceContainer'];['_popupContainer'];[i(0xb7)];constructor(){const k=i;super(),this[k(0xbf)]=this[k(0xb3)](k(0xbc)),this['_toolButtonsElem']['onwheel']=c=>c[k(0xc0)](),this[k(0xca)]=this['_getDomElement']('popup');}[i(0xb5)](c,d){const l=i;this[l(0xc3)](),this['_serviceContainer']=c,this[l(0xb7)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this[l(0xbf)]['appendChild'](e['provideButton'](d['designerCanvas']));}this['_toolSubscription']=this['_serviceContainer'][l(0xc1)]['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0xbf)][m(0xc6)]){g instanceof DesignerToolbarButton&&g['setActiveTool'](f['newValue'][m(0xb6)]);}});}['showPopup'](c){const n=i,d=this['_toolWindows'][n(0xba)](c);if(d?.['isConnected']){d[n(0xcc)](),this['_toolWindows']['delete'](c);return;}this[n(0xc2)]['delete'](c);if(this['_popupContainer'][n(0xc6)]['length'])this[n(0xca)][n(0xc5)]='';else{let e;if(typeof c[n(0xbd)]==='string')e=document['createElement'](c['popup']);else e=new c['popup'](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows'][n(0xb9)](c,e),e[n(0xc8)]('close',()=>{if(this['_toolWindows']['get'](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this[n(0xca)]['appendChild'](e);}}['setTool'](c){const o=i;this[o(0xca)][o(0xc6)]['length']&&(this['_popupContainer'][o(0xc5)]=''),this[o(0xb7)]['designerCanvas']['executeCommand']({'type':CommandType[o(0xb0)],'parameter':c});}}customElements['define'](i(0xbe),DesignerToolbar);