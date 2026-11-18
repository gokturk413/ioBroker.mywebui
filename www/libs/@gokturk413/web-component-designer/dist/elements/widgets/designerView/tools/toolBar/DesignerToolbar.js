function b(c,d){c=c-0x1a9;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1ca))/0x1*(parseInt(h(0x1c1))/0x2)+parseInt(h(0x1b6))/0x3*(-parseInt(h(0x1c4))/0x4)+parseInt(h(0x1ad))/0x5*(parseInt(h(0x1c0))/0x6)+parseInt(h(0x1bd))/0x7+-parseInt(h(0x1b1))/0x8*(-parseInt(h(0x1aa))/0x9)+-parseInt(h(0x1c6))/0xa+parseInt(h(0x1b7))/0xb*(parseInt(h(0x1bc))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1fce));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function a(){const q=['close','83560jtCGAj','createElement','dispose','get','onToolChanged','51RsqhSd','2779513wYWGWt','newValue','remove','designerView','showWindow','12OuhlOH','1990653UTaUYy','setTool','_toolSubscription','70602ddvzbC','580gPMXSX','name','_toolWindows','125220QTDfMS','children','10655260rTgRPh','popup','_popupContainer','set','2252pThXlj','initialize','provideButton','_getDomElement','_toolButtonsElem','appendChild','addEventListener','639rSlDCK','style','designerCanvas','140HhjlAW','_serviceContainer','length'];a=function(){return q;};return a();}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x1ab)]=css`
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
        <div id="toolButtons"></div>`;[i(0x1bf)];[i(0x1c3)]=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.['dispose'](),this[j(0x1ce)]['replaceChildren'](),this['_popupContainer']['replaceChildren']();}['_toolButtonsElem'];['_serviceContainer'];[i(0x1c8)];['designerView'];constructor(){const k=i;super(),this[k(0x1ce)]=this['_getDomElement']('toolButtons'),this[k(0x1ce)]['onwheel']=c=>c['stopPropagation'](),this['_popupContainer']=this[k(0x1cd)](k(0x1c7));}[i(0x1cb)](c,d){const l=i;this[l(0x1b3)](),this[l(0x1ae)]=c,this[l(0x1ba)]=d;for(let e of this[l(0x1ae)]['designViewToolbarButtons']){this[l(0x1ce)][l(0x1cf)](e[l(0x1cc)](d[l(0x1ac)]));}this['_toolSubscription']=this[l(0x1ae)]['globalContext'][l(0x1b5)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0x1c5)]){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0x1b8)][m(0x1c2)]);}});}['showPopup'](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d[n(0x1b9)](),this[n(0x1c3)]['delete'](c);return;}this['_toolWindows']['delete'](c);if(this['_popupContainer'][n(0x1c5)][n(0x1af)])this[n(0x1c8)]['innerHTML']='';else{let e;if(typeof c[n(0x1c7)]==='string')e=document[n(0x1b2)](c['popup']);else e=new c[(n(0x1c7))](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x1bb)](e,c),this['_toolWindows'][n(0x1c9)](c,e),e[n(0x1a9)](n(0x1b0),()=>{const o=n;if(this['_toolWindows'][o(0x1b4)](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this[n(0x1c8)][n(0x1cf)](e);}}[i(0x1be)](c){const p=i;this['_popupContainer'][p(0x1c5)][p(0x1af)]&&(this['_popupContainer']['innerHTML']=''),this['designerView'][p(0x1ac)]['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);