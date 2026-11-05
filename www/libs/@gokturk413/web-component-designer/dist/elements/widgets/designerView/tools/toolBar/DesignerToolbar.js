const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1c3))/0x1+-parseInt(h(0x1c2))/0x2*(parseInt(h(0x1b3))/0x3)+parseInt(h(0x1b7))/0x4*(parseInt(h(0x1cb))/0x5)+-parseInt(h(0x1a7))/0x6*(parseInt(h(0x1be))/0x7)+parseInt(h(0x1bd))/0x8*(-parseInt(h(0x1ca))/0x9)+-parseInt(h(0x1c0))/0xa*(-parseInt(h(0x1a2))/0xb)+parseInt(h(0x1a8))/0xc*(parseInt(h(0x1c5))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x61f01));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function a(){const q=['143096VFFrdD','770497ZYKZtL','setTool','180vdxCCo','createElement','1053920VgFaEx','354814jeMKvF','define','12307685Olhvvo','showPopup','_toolButtonsElem','executeCommand','_popupContainer','9QEkbXh','1297585LeDHxC','initialize','length','144188sNRISf','onToolChanged','designerCanvas','designViewToolbarButtons','replaceChildren','36SjyihO','12StBdSX','delete','isConnected','style','dispose','innerHTML','_toolWindows','appendChild','globalContext','_serviceContainer','set','3hStBqz','toolButtons','popup','provideButton','12sbjrph','_getDomElement','string','designerView','children','get'];a=function(){return q;};return a();}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x1ab)]=css`
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
        <div id="toolButtons"></div>`;['_toolSubscription'];['_toolWindows']=new WeakMap();[i(0x1ac)](){const j=i;this['_toolSubscription']?.[j(0x1ac)](),this[j(0x1c7)][j(0x1a6)](),this[j(0x1c9)]['replaceChildren']();}[i(0x1c7)];[i(0x1b1)];[i(0x1c9)];[i(0x1ba)];constructor(){const k=i;super(),this['_toolButtonsElem']=this['_getDomElement'](k(0x1b4)),this[k(0x1c7)]['onwheel']=c=>c['stopPropagation'](),this[k(0x1c9)]=this[k(0x1b8)]('popup');}[i(0x1cc)](c,d){const l=i;this[l(0x1ac)](),this[l(0x1b1)]=c,this['designerView']=d;for(let e of this['_serviceContainer'][l(0x1a5)]){this['_toolButtonsElem']['appendChild'](e[l(0x1b6)](d[l(0x1a4)]));}this['_toolSubscription']=this[l(0x1b1)][l(0x1b0)][l(0x1a3)]['on'](f=>{const m=l;for(const g of this[m(0x1c7)]['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f['newValue']['name']);}});}[i(0x1c6)](c){const n=i,d=this[n(0x1ae)][n(0x1bc)](c);if(d?.[n(0x1aa)]){d['remove'](),this[n(0x1ae)][n(0x1a9)](c);return;}this[n(0x1ae)][n(0x1a9)](c);if(this[n(0x1c9)][n(0x1bb)][n(0x1a1)])this[n(0x1c9)][n(0x1ad)]='';else{let e;if(typeof c[n(0x1b5)]===n(0x1b9))e=document[n(0x1c1)](c['popup']);else e=new c[(n(0x1b5))](this['designerView'][n(0x1a4)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows'][n(0x1b2)](c,e),e['addEventListener']('close',()=>{const o=n;if(this[o(0x1ae)][o(0x1bc)](c)===e)this[o(0x1ae)][o(0x1a9)](c);},{'once':!![]})):this['_popupContainer'][n(0x1af)](e);}}['setTool'](c){const p=i;this['_popupContainer']['children'][p(0x1a1)]&&(this['_popupContainer']['innerHTML']=''),this['designerView']['designerCanvas'][p(0x1c8)]({'type':CommandType[p(0x1bf)],'parameter':c});}}function b(c,d){c=c-0x1a1;const e=a();let f=e[c];return f;}customElements[i(0x1c4)]('node-projects-designer-toolbar',DesignerToolbar);