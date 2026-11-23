const i=b;function b(c,d){c=c-0x6b;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x7a))/0x1*(parseInt(h(0x78))/0x2)+-parseInt(h(0x86))/0x3*(parseInt(h(0x75))/0x4)+parseInt(h(0x8b))/0x5+-parseInt(h(0x73))/0x6+parseInt(h(0x88))/0x7*(parseInt(h(0x6e))/0x8)+-parseInt(h(0x8c))/0x9+parseInt(h(0x87))/0xa*(-parseInt(h(0x89))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xac555));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function a(){const q=['delete','1OOjZIA','dispose','children','popup','setActiveTool','globalContext','_getDomElement','_serviceContainer','length','designerView','get','_toolButtonsElem','1122921GJNuFe','452420kEZetK','4548565RqKRbR','220crMfaG','string','5814430rQcMZI','1027071mKUHbQ','toolButtons','setTool','onToolChanged','set','_toolWindows','_popupContainer','8EtUmAc','template','isConnected','_toolSubscription','showPopup','2990430BGMtgJ','remove','4kxIpjA','close','showWindow','1569734MEYrNU'];a=function(){return q;};return a();}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x6f)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0x71)];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this[j(0x71)]?.['dispose'](),this[j(0x85)]['replaceChildren'](),this[j(0x6d)]['replaceChildren']();}[i(0x85)];[i(0x81)];[i(0x6d)];[i(0x83)];constructor(){const k=i;super(),this['_toolButtonsElem']=this[k(0x80)](k(0x8d)),this['_toolButtonsElem']['onwheel']=c=>c['stopPropagation'](),this['_popupContainer']=this['_getDomElement'](k(0x7d));}['initialize'](c,d){const l=i;this[l(0x7b)](),this[l(0x81)]=c,this[l(0x83)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this['_toolButtonsElem']['appendChild'](e['provideButton'](d['designerCanvas']));}this['_toolSubscription']=this['_serviceContainer'][l(0x7f)][l(0x8f)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g[m(0x7e)](f['newValue']['name']);}});}[i(0x72)](c){const n=i,d=this[n(0x6c)][n(0x84)](c);if(d?.[n(0x70)]){d[n(0x74)](),this['_toolWindows'][n(0x79)](c);return;}this['_toolWindows']['delete'](c);if(this[n(0x6d)][n(0x7c)]['length'])this['_popupContainer']['innerHTML']='';else{let e;if(typeof c[n(0x7d)]===n(0x8a))e=document['createElement'](c['popup']);else e=new c['popup'](this[n(0x83)]['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x77)](e,c),this['_toolWindows'][n(0x6b)](c,e),e['addEventListener'](n(0x76),()=>{const o=n;if(this[o(0x6c)][o(0x84)](c)===e)this[o(0x6c)][o(0x79)](c);},{'once':!![]})):this['_popupContainer']['appendChild'](e);}}[i(0x8e)](c){const p=i;this['_popupContainer']['children'][p(0x82)]&&(this[p(0x6d)]['innerHTML']=''),this['designerView']['designerCanvas']['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);