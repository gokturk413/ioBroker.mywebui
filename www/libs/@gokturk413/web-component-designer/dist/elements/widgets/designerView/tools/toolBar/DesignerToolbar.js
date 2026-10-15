const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x11b))/0x1*(parseInt(h(0x11e))/0x2)+parseInt(h(0x110))/0x3+-parseInt(h(0x106))/0x4*(-parseInt(h(0x117))/0x5)+parseInt(h(0x11a))/0x6+parseInt(h(0x101))/0x7*(parseInt(h(0x11d))/0x8)+parseInt(h(0x122))/0x9*(-parseInt(h(0xfb))/0xa)+parseInt(h(0x121))/0xb*(-parseInt(h(0x108))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd48ad));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';function b(c,d){c=c-0xfa;const e=a();let f=e[c];return f;}function a(){const q=['4mSiXvt','createElement','_toolWindows','1230702uqperY','927621XntUcU','provideButton','_popupContainer','executeCommand','10OWwUNt','string','onwheel','designerCanvas','define','_toolSubscription','7NgkuUv','replaceChildren','designerView','newValue','toolButtons','32RIPFIs','onToolChanged','384qTzroo','style','delete','_getDomElement','_serviceContainer','name','dispose','showPopup','4017438IbjGen','remove','popup','initialize','close','showWindow','length','538910IcmtMj','setTool','_toolButtonsElem','1423590egfRIt','806644EwDEgP','appendChild','4015288rtopYd'];a=function(){return q;};return a();}import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x109)]=css`
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
        <div id="toolButtons"></div>`;['_toolSubscription'];[i(0x120)]=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.[j(0x10e)](),this['_toolButtonsElem']['replaceChildren'](),this[j(0x124)][j(0x102)]();}[i(0x119)];['_serviceContainer'];[i(0x124)];['designerView'];constructor(){const k=i;super(),this[k(0x119)]=this['_getDomElement'](k(0x105)),this[k(0x119)][k(0xfd)]=c=>c['stopPropagation'](),this[k(0x124)]=this[k(0x10b)]('popup');}[i(0x113)](c,d){const l=i;this[l(0x10e)](),this[l(0x10c)]=c,this[l(0x103)]=d;for(let e of this[l(0x10c)]['designViewToolbarButtons']){this[l(0x119)][l(0x11c)](e[l(0x123)](d['designerCanvas']));}this[l(0x100)]=this['_serviceContainer']['globalContext'][l(0x107)]['on'](f=>{const m=l;for(const g of this[m(0x119)]['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0x104)][m(0x10d)]);}});}[i(0x10f)](c){const n=i,d=this[n(0x120)]['get'](c);if(d?.['isConnected']){d[n(0x111)](),this[n(0x120)][n(0x10a)](c);return;}this[n(0x120)]['delete'](c);if(this[n(0x124)]['children']['length'])this[n(0x124)]['innerHTML']='';else{let e;if(typeof c['popup']===n(0xfc))e=document[n(0x11f)](c[n(0x112)]);else e=new c['popup'](this[n(0x103)][n(0xfe)]);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x115)](e,c),this['_toolWindows']['set'](c,e),e['addEventListener'](n(0x114),()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0x120)]['delete'](c);},{'once':!![]})):this[n(0x124)]['appendChild'](e);}}[i(0x118)](c){const p=i;this['_popupContainer']['children'][p(0x116)]&&(this[p(0x124)]['innerHTML']=''),this['designerView'][p(0xfe)][p(0xfa)]({'type':CommandType[p(0x118)],'parameter':c});}}customElements[i(0xff)]('node-projects-designer-toolbar',DesignerToolbar);