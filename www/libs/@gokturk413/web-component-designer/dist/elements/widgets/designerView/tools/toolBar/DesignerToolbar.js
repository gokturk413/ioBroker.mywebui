const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x99))/0x1*(-parseInt(h(0xa1))/0x2)+parseInt(h(0x90))/0x3*(parseInt(h(0x94))/0x4)+parseInt(h(0xa7))/0x5+-parseInt(h(0x92))/0x6*(-parseInt(h(0x96))/0x7)+parseInt(h(0xb0))/0x8*(parseInt(h(0x9c))/0x9)+-parseInt(h(0x8d))/0xa+-parseInt(h(0x98))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa73fa));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function a(){const p=['_toolWindows','node-projects-designer-toolbar','designerCanvas','showPopup','3170415RkIIVc','popup','onToolChanged','_popupContainer','dispose','_getDomElement','string','_serviceContainer','_toolButtonsElem','5901128zIlWQx','replaceChildren','name','setActiveTool','provideButton','895110tIvhKK','set','length','3307143nNQEZZ','designerView','6qiFfAn','children','4tLAult','appendChild','5291146orqYkA','createElement','37813512PJUvrO','9354ShpPmr','setTool','_toolSubscription','9GzDaUW','delete','executeCommand','designViewToolbarButtons','innerHTML','210ApieUY','onwheel'];a=function(){return p;};return a();}function b(c,d){c=c-0x89;const e=a();let f=e[c];return f;}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="toolButtons"></div>`;[i(0x9b)];[i(0xa3)]=new WeakMap();['dispose'](){const j=i;this[j(0x9b)]?.['dispose'](),this['_toolButtonsElem']['replaceChildren'](),this[j(0xaa)][j(0x89)]();}[i(0xaf)];['_serviceContainer'];[i(0xaa)];[i(0x91)];constructor(){const k=i;super(),this[k(0xaf)]=this[k(0xac)]('toolButtons'),this['_toolButtonsElem'][k(0xa2)]=c=>c['stopPropagation'](),this['_popupContainer']=this[k(0xac)]('popup');}['initialize'](c,d){const l=i;this[l(0xab)](),this[l(0xae)]=c,this[l(0x91)]=d;for(let e of this[l(0xae)][l(0x9f)]){this['_toolButtonsElem'][l(0x95)](e[l(0x8c)](d['designerCanvas']));}this[l(0x9b)]=this[l(0xae)]['globalContext'][l(0xa9)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0x93)]){g instanceof DesignerToolbarButton&&g[m(0x8b)](f['newValue'][m(0x8a)]);}});}[i(0xa6)](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d['remove'](),this['_toolWindows']['delete'](c);return;}this['_toolWindows'][n(0x9d)](c);if(this[n(0xaa)]['children'][n(0x8f)])this['_popupContainer']['innerHTML']='';else{let e;if(typeof c['popup']===n(0xad))e=document[n(0x97)](c[n(0xa8)]);else e=new c['popup'](this['designerView'][n(0xa5)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows'][n(0x8e)](c,e),e['addEventListener']('close',()=>{if(this['_toolWindows']['get'](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this[n(0xaa)][n(0x95)](e);}}[i(0x9a)](c){const o=i;this[o(0xaa)]['children'][o(0x8f)]&&(this[o(0xaa)][o(0xa0)]=''),this[o(0x91)][o(0xa5)][o(0x9e)]({'type':CommandType['setTool'],'parameter':c});}}customElements['define'](i(0xa4),DesignerToolbar);