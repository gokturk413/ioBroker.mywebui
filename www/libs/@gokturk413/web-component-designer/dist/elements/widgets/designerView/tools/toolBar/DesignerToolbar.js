function b(c,d){c=c-0x17e;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x180))/0x1+parseInt(h(0x18e))/0x2*(-parseInt(h(0x190))/0x3)+parseInt(h(0x1a7))/0x4*(-parseInt(h(0x1a3))/0x5)+parseInt(h(0x19e))/0x6*(-parseInt(h(0x19a))/0x7)+-parseInt(h(0x1a2))/0x8+parseInt(h(0x18b))/0x9*(parseInt(h(0x199))/0xa)+-parseInt(h(0x197))/0xb*(-parseInt(h(0x1a6))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x94252));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const q=['string','_toolButtonsElem','dispose','innerHTML','3229137KaSglP','setActiveTool','node-projects-designer-toolbar','799646tKXjNp','template','3ZXWnaX','onToolChanged','setTool','_getDomElement','get','createElement','stopPropagation','369732lrTRMb','close','10bCqezB','7vZnEqx','showPopup','designerCanvas','_popupContainer','6565692dtrZrO','toolButtons','define','globalContext','2606352zvkjYm','40hdtdGK','replaceChildren','isConnected','912zhRjAi','425128IJsXfh','newValue','children','363652TBdarI','_serviceContainer','_toolWindows','_toolSubscription','delete','showWindow','popup'];a=function(){return q;};return a();}import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x18f)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0x183)];[i(0x182)]=new WeakMap();[i(0x189)](){const j=i;this['_toolSubscription']?.['dispose'](),this[j(0x188)]['replaceChildren'](),this[j(0x19d)][j(0x1a4)]();}[i(0x188)];[i(0x181)];['_popupContainer'];['designerView'];constructor(){const k=i;super(),this[k(0x188)]=this[k(0x193)](k(0x19f)),this['_toolButtonsElem']['onwheel']=c=>c[k(0x196)](),this[k(0x19d)]=this[k(0x193)]('popup');}['initialize'](c,d){const l=i;this['dispose'](),this['_serviceContainer']=c,this['designerView']=d;for(let e of this[l(0x181)]['designViewToolbarButtons']){this['_toolButtonsElem']['appendChild'](e['provideButton'](d['designerCanvas']));}this[l(0x183)]=this['_serviceContainer'][l(0x1a1)][l(0x191)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0x17f)]){g instanceof DesignerToolbarButton&&g[m(0x18c)](f[m(0x17e)]['name']);}});}[i(0x19b)](c){const n=i,d=this[n(0x182)][n(0x194)](c);if(d?.[n(0x1a5)]){d['remove'](),this['_toolWindows'][n(0x184)](c);return;}this['_toolWindows']['delete'](c);if(this[n(0x19d)][n(0x17f)]['length'])this['_popupContainer'][n(0x18a)]='';else{let e;if(typeof c[n(0x186)]===n(0x187))e=document[n(0x195)](c['popup']);else e=new c[(n(0x186))](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x185)](e,c),this['_toolWindows']['set'](c,e),e['addEventListener'](n(0x198),()=>{const o=n;if(this[o(0x182)]['get'](c)===e)this[o(0x182)]['delete'](c);},{'once':!![]})):this[n(0x19d)]['appendChild'](e);}}[i(0x192)](c){const p=i;this[p(0x19d)][p(0x17f)]['length']&&(this[p(0x19d)][p(0x18a)]=''),this['designerView'][p(0x19c)]['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0x1a0)](i(0x18d),DesignerToolbar);