const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x176))/0x1+parseInt(h(0x171))/0x2+-parseInt(h(0x161))/0x3*(-parseInt(h(0x15f))/0x4)+-parseInt(h(0x17f))/0x5*(-parseInt(h(0x17b))/0x6)+parseInt(h(0x177))/0x7*(-parseInt(h(0x168))/0x8)+parseInt(h(0x179))/0x9+-parseInt(h(0x17a))/0xa*(parseInt(h(0x162))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe3a9f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';function a(){const q=['_popupContainer','346210fqeFlJ','replaceChildren','string','innerHTML','globalContext','4010636hUkupP','designerCanvas','3PDqQIz','517yjwdau','executeCommand','delete','newValue','designerView','_toolButtonsElem','8XEuLJJ','toolButtons','_toolWindows','onwheel','showWindow','style','define','_toolSubscription','length','737492FgLoia','dispose','_serviceContainer','children','stopPropagation','1226070rAIMQC','1779764kdzpEW','popup','454365pjvmDL','355090xIAaTc','18sDTUBx','node-projects-designer-toolbar','_getDomElement'];a=function(){return q;};return a();}import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0x15f;const e=a();let f=e[c];return f;}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x16d)]=css`
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
        <div id="toolButtons"></div>`;[i(0x16f)];[i(0x16a)]=new WeakMap();['dispose'](){const j=i;this[j(0x16f)]?.[j(0x172)](),this[j(0x167)][j(0x180)](),this[j(0x17e)][j(0x180)]();}[i(0x167)];['_serviceContainer'];['_popupContainer'];[i(0x166)];constructor(){const k=i;super(),this[k(0x167)]=this['_getDomElement'](k(0x169)),this['_toolButtonsElem'][k(0x16b)]=c=>c[k(0x175)](),this['_popupContainer']=this[k(0x17d)]('popup');}['initialize'](c,d){const l=i;this[l(0x172)](),this['_serviceContainer']=c,this['designerView']=d;for(let e of this[l(0x173)]['designViewToolbarButtons']){this[l(0x167)]['appendChild'](e['provideButton'](d[l(0x160)]));}this[l(0x16f)]=this['_serviceContainer'][l(0x183)]['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0x174)]){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0x165)]['name']);}});}['showPopup'](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d['remove'](),this['_toolWindows'][n(0x164)](c);return;}this['_toolWindows']['delete'](c);if(this[n(0x17e)]['children'][n(0x170)])this[n(0x17e)][n(0x182)]='';else{let e;if(typeof c['popup']===n(0x181))e=document['createElement'](c['popup']);else e=new c[(n(0x178))](this['designerView'][n(0x160)]);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x16c)](e,c),this['_toolWindows']['set'](c,e),e['addEventListener']('close',()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0x16a)]['delete'](c);},{'once':!![]})):this['_popupContainer']['appendChild'](e);}}['setTool'](c){const p=i;this['_popupContainer'][p(0x174)]['length']&&(this['_popupContainer']['innerHTML']=''),this[p(0x166)]['designerCanvas'][p(0x163)]({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0x16e)](i(0x17c),DesignerToolbar);