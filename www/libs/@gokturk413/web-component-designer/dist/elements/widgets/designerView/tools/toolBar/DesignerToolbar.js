function a(){const q=['217136Eqlxsi','length','2409180FpGiMO','6086392PlbiOd','_toolWindows','32497218gLKgED','initialize','6gNvMzl','2490232oeOhGd','name','designerCanvas','children','_popupContainer','dispose','_toolSubscription','replaceChildren','designerView','remove','addEventListener','showWindow','_serviceContainer','executeCommand','4967688cQivFO','style','appendChild','createElement','innerHTML','set','onwheel','_getDomElement','stopPropagation','setActiveTool','provideButton','221324JfOGDJ','_toolButtonsElem','delete','14NplArr','template','showPopup','popup'];a=function(){return q;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xc9))/0x1+-parseInt(h(0xc2))/0x2*(parseInt(h(0xd0))/0x3)+parseInt(h(0xd1))/0x4+-parseInt(h(0xcb))/0x5+parseInt(h(0xdf))/0x6*(-parseInt(h(0xc5))/0x7)+-parseInt(h(0xcc))/0x8+parseInt(h(0xce))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdad71));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xe0)]=css`
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
        }`;static [i(0xc6)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;['_toolSubscription'];['_toolWindows']=new WeakMap();[i(0xd6)](){const j=i;this[j(0xd7)]?.['dispose'](),this[j(0xc3)]['replaceChildren'](),this['_popupContainer'][j(0xd8)]();}['_toolButtonsElem'];[i(0xdd)];[i(0xd5)];['designerView'];constructor(){const k=i;super(),this[k(0xc3)]=this['_getDomElement']('toolButtons'),this['_toolButtonsElem'][k(0xbd)]=c=>c[k(0xbf)](),this[k(0xd5)]=this[k(0xbe)](k(0xc8));}[i(0xcf)](c,d){const l=i;this['dispose'](),this[l(0xdd)]=c,this[l(0xd9)]=d;for(let e of this[l(0xdd)]['designViewToolbarButtons']){this[l(0xc3)]['appendChild'](e[l(0xc1)](d['designerCanvas']));}this['_toolSubscription']=this['_serviceContainer']['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0xd4)]){g instanceof DesignerToolbarButton&&g[m(0xc0)](f['newValue'][m(0xd2)]);}});}[i(0xc7)](c){const n=i,d=this[n(0xcd)]['get'](c);if(d?.['isConnected']){d[n(0xda)](),this[n(0xcd)]['delete'](c);return;}this['_toolWindows']['delete'](c);if(this['_popupContainer'][n(0xd4)][n(0xca)])this['_popupContainer'][n(0xe3)]='';else{let e;if(typeof c['popup']==='string')e=document[n(0xe2)](c[n(0xc8)]);else e=new c['popup'](this[n(0xd9)][n(0xd3)]);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0xdc)](e,c),this['_toolWindows'][n(0xe4)](c,e),e[n(0xdb)]('close',()=>{const o=n;if(this[o(0xcd)]['get'](c)===e)this['_toolWindows'][o(0xc4)](c);},{'once':!![]})):this[n(0xd5)][n(0xe1)](e);}}['setTool'](c){const p=i;this['_popupContainer'][p(0xd4)]['length']&&(this['_popupContainer']['innerHTML']=''),this[p(0xd9)]['designerCanvas'][p(0xde)]({'type':CommandType['setTool'],'parameter':c});}}function b(c,d){c=c-0xbd;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);