const i=b;function a(){const q=['designerView','489XUvRfP','2368845iGXiUl','appendChild','_toolWindows','_toolSubscription','13338018IGUkpL','replaceChildren','toolButtons','_getDomElement','setTool','name','12bDDgTV','remove','innerHTML','1544832tUJrBz','2044cAMtQY','2667680dDcGPD','designerCanvas','_popupContainer','popup','addEventListener','string','children','_serviceContainer','isConnected','delete','1041700hPbqWh','createElement','style','newValue','dispose','853517WznuYb','showWindow'];a=function(){return q;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x6d))/0x1*(-parseInt(h(0x7c))/0x2)+-parseInt(h(0x7b))/0x3+-parseInt(h(0x87))/0x4+-parseInt(h(0x6e))/0x5+-parseInt(h(0x78))/0x6*(-parseInt(h(0x8c))/0x7)+parseInt(h(0x7d))/0x8+parseInt(h(0x72))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4bc9c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0x6d;const e=a();let f=e[c];return f;}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x89)]=css`
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
        <div id="toolButtons"></div>`;['_toolSubscription'];['_toolWindows']=new WeakMap();[i(0x8b)](){const j=i;this[j(0x71)]?.[j(0x8b)](),this['_toolButtonsElem'][j(0x73)](),this['_popupContainer']['replaceChildren']();}['_toolButtonsElem'];['_serviceContainer'];['_popupContainer'];['designerView'];constructor(){const k=i;super(),this['_toolButtonsElem']=this[k(0x75)](k(0x74)),this['_toolButtonsElem']['onwheel']=c=>c['stopPropagation'](),this[k(0x7f)]=this[k(0x75)](k(0x80));}['initialize'](c,d){const l=i;this['dispose'](),this[l(0x84)]=c,this['designerView']=d;for(let e of this[l(0x84)]['designViewToolbarButtons']){this['_toolButtonsElem'][l(0x6f)](e['provideButton'](d[l(0x7e)]));}this[l(0x71)]=this[l(0x84)]['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0x8a)][m(0x77)]);}});}['showPopup'](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.[n(0x85)]){d[n(0x79)](),this['_toolWindows']['delete'](c);return;}this['_toolWindows']['delete'](c);if(this[n(0x7f)][n(0x83)]['length'])this[n(0x7f)]['innerHTML']='';else{let e;if(typeof c['popup']===n(0x82))e=document[n(0x88)](c['popup']);else e=new c['popup'](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x8d)](e,c),this[n(0x70)]['set'](c,e),e[n(0x81)]('close',()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0x70)][o(0x86)](c);},{'once':!![]})):this[n(0x7f)][n(0x6f)](e);}}[i(0x76)](c){const p=i;this['_popupContainer'][p(0x83)]['length']&&(this[p(0x7f)][p(0x7a)]=''),this[p(0x8e)]['designerCanvas']['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);