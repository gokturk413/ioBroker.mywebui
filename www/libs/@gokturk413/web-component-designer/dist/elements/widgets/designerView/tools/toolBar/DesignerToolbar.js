const i=b;function a(){const q=['name','171tmcfZU','setTool','children','227454IFYxKm','designerCanvas','delete','executeCommand','provideButton','972zGdZIl','set','8145160Cjcmnr','replaceChildren','_getDomElement','345672kMswlu','1021981xhjHrS','206184kaTgLD','designerView','9WjnKfv','_serviceContainer','appendChild','dispose','innerHTML','42diaDwC','addEventListener','_popupContainer','stopPropagation','_toolWindows','2885JymZKj','remove','createElement','21777657kRhcsZ','_toolButtonsElem','get'];a=function(){return q;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x205))/0x1+parseInt(h(0x206))/0x2*(-parseInt(h(0x1e6))/0x3)+-parseInt(h(0x1ff))/0x4*(-parseInt(h(0x1f0))/0x5)+-parseInt(h(0x1fa))/0x6*(parseInt(h(0x1eb))/0x7)+-parseInt(h(0x204))/0x8*(parseInt(h(0x1f7))/0x9)+parseInt(h(0x201))/0xa+parseInt(h(0x1f3))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x87750));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';function b(c,d){c=c-0x1e5;const e=a();let f=e[c];return f;}import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="toolButtons"></div>`;['_toolSubscription'];[i(0x1ef)]=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.[j(0x1e9)](),this['_toolButtonsElem']['replaceChildren'](),this[j(0x1ed)][j(0x202)]();}['_toolButtonsElem'];['_serviceContainer'];['_popupContainer'];[i(0x1e5)];constructor(){const k=i;super(),this[k(0x1f4)]=this[k(0x203)]('toolButtons'),this[k(0x1f4)]['onwheel']=c=>c[k(0x1ee)](),this[k(0x1ed)]=this['_getDomElement']('popup');}['initialize'](c,d){const l=i;this[l(0x1e9)](),this[l(0x1e7)]=c,this[l(0x1e5)]=d;for(let e of this[l(0x1e7)]['designViewToolbarButtons']){this['_toolButtonsElem']['appendChild'](e[l(0x1fe)](d[l(0x1fb)]));}this['_toolSubscription']=this[l(0x1e7)]['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0x1f4)]['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f['newValue'][m(0x1f6)]);}});}['showPopup'](c){const n=i,d=this[n(0x1ef)]['get'](c);if(d?.['isConnected']){d[n(0x1f1)](),this['_toolWindows'][n(0x1fc)](c);return;}this[n(0x1ef)]['delete'](c);if(this[n(0x1ed)]['children']['length'])this['_popupContainer']['innerHTML']='';else{let e;if(typeof c['popup']==='string')e=document[n(0x1f2)](c['popup']);else e=new c['popup'](this[n(0x1e5)]['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows'][n(0x200)](c,e),e[n(0x1ec)]('close',()=>{const o=n;if(this[o(0x1ef)][o(0x1f5)](c)===e)this[o(0x1ef)]['delete'](c);},{'once':!![]})):this[n(0x1ed)][n(0x1e8)](e);}}[i(0x1f8)](c){const p=i;this['_popupContainer'][p(0x1f9)]['length']&&(this['_popupContainer'][p(0x1ea)]=''),this['designerView']['designerCanvas'][p(0x1fd)]({'type':CommandType[p(0x1f8)],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);