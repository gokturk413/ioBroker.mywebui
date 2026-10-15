const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c2))/0x1*(parseInt(h(0x1ce))/0x2)+parseInt(h(0x1de))/0x3*(-parseInt(h(0x1c3))/0x4)+parseInt(h(0x1da))/0x5*(-parseInt(h(0x1cf))/0x6)+parseInt(h(0x1c5))/0x7+parseInt(h(0x1ca))/0x8+parseInt(h(0x1bf))/0x9*(-parseInt(h(0x1cc))/0xa)+parseInt(h(0x1d9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5ec8c));function a(){const q=['toolButtons','appendChild','designerCanvas','setTool','_toolWindows','replaceChildren','dispose','32058IeUMtn','designerView','initialize','4WGGgzy','1140020InWlLF','createElement','1202635rPHSmK','_serviceContainer','get','length','define','1344880SQdQvR','_toolButtonsElem','530XiIUqB','popup','320082VUnrVi','6aUquHD','close','name','style','children','node-projects-designer-toolbar','showWindow','remove','_getDomElement','isConnected','2840365OrGtgw','1881335rWdUAC','delete','template','_popupContainer','3MnlhHX','innerHTML','setActiveTool','onToolChanged'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1bc;const e=a();let f=e[c];return f;}import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x1d2)]=css`
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
        }`;static [i(0x1dc)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;['_toolSubscription'];[i(0x1bc)]=new WeakMap();[i(0x1be)](){const j=i;this['_toolSubscription']?.[j(0x1be)](),this['_toolButtonsElem'][j(0x1bd)](),this[j(0x1dd)]['replaceChildren']();}[i(0x1cb)];[i(0x1c6)];['_popupContainer'];['designerView'];constructor(){const k=i;super(),this[k(0x1cb)]=this[k(0x1d7)](k(0x1e2)),this['_toolButtonsElem']['onwheel']=c=>c['stopPropagation'](),this[k(0x1dd)]=this[k(0x1d7)]('popup');}[i(0x1c1)](c,d){const l=i;this[l(0x1be)](),this[l(0x1c6)]=c,this['designerView']=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this[l(0x1cb)][l(0x1e3)](e['provideButton'](d[l(0x1e4)]));}this['_toolSubscription']=this['_serviceContainer']['globalContext'][l(0x1e1)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g[m(0x1e0)](f['newValue'][m(0x1d1)]);}});}['showPopup'](c){const n=i,d=this[n(0x1bc)][n(0x1c7)](c);if(d?.[n(0x1d8)]){d[n(0x1d6)](),this['_toolWindows'][n(0x1db)](c);return;}this[n(0x1bc)][n(0x1db)](c);if(this[n(0x1dd)][n(0x1d3)][n(0x1c8)])this[n(0x1dd)]['innerHTML']='';else{let e;if(typeof c['popup']==='string')e=document[n(0x1c4)](c['popup']);else e=new c[(n(0x1cd))](this[n(0x1c0)]['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x1d5)](e,c),this['_toolWindows']['set'](c,e),e['addEventListener'](n(0x1d0),()=>{const o=n;if(this[o(0x1bc)][o(0x1c7)](c)===e)this[o(0x1bc)]['delete'](c);},{'once':!![]})):this['_popupContainer'][n(0x1e3)](e);}}[i(0x1e5)](c){const p=i;this['_popupContainer']['children']['length']&&(this[p(0x1dd)][p(0x1df)]=''),this[p(0x1c0)]['designerCanvas']['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0x1c9)](i(0x1d4),DesignerToolbar);