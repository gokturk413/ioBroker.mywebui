const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x128))/0x1+-parseInt(h(0x12b))/0x2*(-parseInt(h(0x144))/0x3)+parseInt(h(0x12d))/0x4*(parseInt(h(0x13b))/0x5)+parseInt(h(0x130))/0x6*(-parseInt(h(0x13e))/0x7)+parseInt(h(0x139))/0x8+-parseInt(h(0x153))/0x9*(-parseInt(h(0x13c))/0xa)+-parseInt(h(0x127))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x86c99));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x127;const e=a();let f=e[c];return f;}import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function a(){const q=['remove','innerHTML','_toolWindows','showPopup','1307736NYdjVb','14223451xcjhKG','26763jyWMUO','executeCommand','onwheel','230wHxRcP','onToolChanged','320872RBOWUb','_toolSubscription','newValue','6450plNjwd','set','appendChild','designerCanvas','initialize','children','_toolButtonsElem','provideButton','dispose','5729408RuUZgt','setTool','35ibYDMd','50bSUsMX','_serviceContainer','5376pXUxTS','stopPropagation','setActiveTool','_getDomElement','toolButtons','delete','16689NSZDzb','addEventListener','string','popup','node-projects-designer-toolbar','replaceChildren','showWindow','length','designerView','style','_popupContainer'];a=function(){return q;};return a();}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x14d)]=css`
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
        <div id="toolButtons"></div>`;[i(0x12e)];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.[j(0x138)](),this[j(0x136)]['replaceChildren'](),this[j(0x14e)][j(0x149)]();}['_toolButtonsElem'];[i(0x13d)];['_popupContainer'];[i(0x14c)];constructor(){const k=i;super(),this['_toolButtonsElem']=this[k(0x141)](k(0x142)),this['_toolButtonsElem'][k(0x12a)]=c=>c[k(0x13f)](),this[k(0x14e)]=this['_getDomElement']('popup');}[i(0x134)](c,d){const l=i;this[l(0x138)](),this['_serviceContainer']=c,this['designerView']=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this['_toolButtonsElem'][l(0x132)](e[l(0x137)](d['designerCanvas']));}this[l(0x12e)]=this['_serviceContainer']['globalContext'][l(0x12c)]['on'](f=>{const m=l;for(const g of this[m(0x136)][m(0x135)]){g instanceof DesignerToolbarButton&&g[m(0x140)](f[m(0x12f)]['name']);}});}[i(0x152)](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d[n(0x14f)](),this['_toolWindows']['delete'](c);return;}this['_toolWindows'][n(0x143)](c);if(this[n(0x14e)]['children'][n(0x14b)])this[n(0x14e)][n(0x150)]='';else{let e;if(typeof c['popup']===n(0x146))e=document['createElement'](c[n(0x147)]);else e=new c['popup'](this[n(0x14c)][n(0x133)]);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x14a)](e,c),this['_toolWindows'][n(0x131)](c,e),e[n(0x145)]('close',()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0x151)]['delete'](c);},{'once':!![]})):this[n(0x14e)]['appendChild'](e);}}['setTool'](c){const p=i;this['_popupContainer'][p(0x135)]['length']&&(this['_popupContainer'][p(0x150)]=''),this[p(0x14c)][p(0x133)][p(0x129)]({'type':CommandType[p(0x13a)],'parameter':c});}}customElements['define'](i(0x148),DesignerToolbar);