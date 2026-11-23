const i=b;function b(c,d){c=c-0x8c;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x8d))/0x1+parseInt(h(0xa6))/0x2+parseInt(h(0xb1))/0x3*(-parseInt(h(0xa8))/0x4)+parseInt(h(0x9a))/0x5+-parseInt(h(0x9d))/0x6*(-parseInt(h(0xb2))/0x7)+-parseInt(h(0xac))/0x8*(-parseInt(h(0x8f))/0x9)+-parseInt(h(0x98))/0xa*(parseInt(h(0xa7))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96d19));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';function a(){const q=['children','7949079cYqwza','addEventListener','isConnected','_getDomElement','innerHTML','_serviceContainer','name','_toolWindows','_toolButtonsElem','80CDzWtv','showPopup','1742175jARTdv','provideButton','template','18qdRniE','setActiveTool','dispose','designerCanvas','replaceChildren','get','_toolSubscription','define','delete','2464698DsdNfp','1668469WVZsKi','46484ChmPIu','initialize','executeCommand','designerView','8WQOJaG','_popupContainer','length','popup','appendChild','141THRdmg','1246994iihbJC','string','621069Rbrlug'];a=function(){return q;};return a();}import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x9c)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;['_toolSubscription'];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this[j(0xa3)]?.['dispose'](),this[j(0x97)][j(0xa1)](),this['_popupContainer']['replaceChildren']();}['_toolButtonsElem'];[i(0x94)];[i(0xad)];[i(0xab)];constructor(){const k=i;super(),this[k(0x97)]=this[k(0x92)]('toolButtons'),this[k(0x97)]['onwheel']=c=>c['stopPropagation'](),this['_popupContainer']=this['_getDomElement'](k(0xaf));}[i(0xa9)](c,d){const l=i;this[l(0x9f)](),this['_serviceContainer']=c,this['designerView']=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this[l(0x97)][l(0xb0)](e[l(0x9b)](d['designerCanvas']));}this['_toolSubscription']=this[l(0x94)]['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0x97)][m(0x8e)]){g instanceof DesignerToolbarButton&&g[m(0x9e)](f['newValue'][m(0x95)]);}});}[i(0x99)](c){const n=i,d=this[n(0x96)][n(0xa2)](c);if(d?.[n(0x91)]){d['remove'](),this[n(0x96)]['delete'](c);return;}this['_toolWindows'][n(0xa5)](c);if(this[n(0xad)]['children']['length'])this['_popupContainer'][n(0x93)]='';else{let e;if(typeof c[n(0xaf)]===n(0x8c))e=document['createElement'](c[n(0xaf)]);else e=new c['popup'](this[n(0xab)][n(0xa0)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0x96)]['set'](c,e),e[n(0x90)]('close',()=>{const o=n;if(this['_toolWindows'][o(0xa2)](c)===e)this[o(0x96)][o(0xa5)](c);},{'once':!![]})):this['_popupContainer'][n(0xb0)](e);}}['setTool'](c){const p=i;this['_popupContainer'][p(0x8e)][p(0xae)]&&(this['_popupContainer']['innerHTML']=''),this['designerView']['designerCanvas'][p(0xaa)]({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0xa4)]('node-projects-designer-toolbar',DesignerToolbar);