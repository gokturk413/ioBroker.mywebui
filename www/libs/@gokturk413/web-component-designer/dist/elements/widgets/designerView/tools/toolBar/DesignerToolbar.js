const i=b;function a(){const p=['117IhNeLn','1897230mTcwlq','children','1084344MkBWsc','designerView','template','659464kJIqjF','5050262VHCDJz','provideButton','innerHTML','onToolChanged','length','_toolWindows','designerCanvas','_popupContainer','227208bCahQH','_getDomElement','dispose','remove','popup','get','close','appendChild','1330264AFOcHH','replaceChildren','8fUeVHk','541740bEEnBn','setTool','_serviceContainer','style','_toolButtonsElem','onwheel','delete'];a=function(){return p;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xff))/0x1+-parseInt(h(0x107))/0x2+-parseInt(h(0x114))/0x3+-parseInt(h(0x109))/0x4*(-parseInt(h(0x10a))/0x5)+-parseInt(h(0x112))/0x6+parseInt(h(0xf7))/0x7+parseInt(h(0x117))/0x8*(parseInt(h(0x111))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6b5f6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x10d)]=css`
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
        }`;static [i(0x116)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;['_toolSubscription'];[i(0xfc)]=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.['dispose'](),this[j(0x10e)][j(0x108)](),this['_popupContainer']['replaceChildren']();}['_toolButtonsElem'];['_serviceContainer'];['_popupContainer'];['designerView'];constructor(){const k=i;super(),this['_toolButtonsElem']=this['_getDomElement']('toolButtons'),this[k(0x10e)][k(0x10f)]=c=>c['stopPropagation'](),this[k(0xfe)]=this[k(0x100)](k(0x103));}['initialize'](c,d){const l=i;this[l(0x101)](),this['_serviceContainer']=c,this[l(0x115)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this['_toolButtonsElem'][l(0x106)](e[l(0xf8)](d[l(0xfd)]));}this['_toolSubscription']=this[l(0x10c)]['globalContext'][l(0xfa)]['on'](f=>{for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f['newValue']['name']);}});}['showPopup'](c){const m=i,d=this['_toolWindows'][m(0x104)](c);if(d?.['isConnected']){d[m(0x102)](),this[m(0xfc)][m(0x110)](c);return;}this[m(0xfc)]['delete'](c);if(this['_popupContainer']['children'][m(0xfb)])this['_popupContainer']['innerHTML']='';else{let e;if(typeof c[m(0x103)]==='string')e=document['createElement'](c['popup']);else e=new c['popup'](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows']['set'](c,e),e['addEventListener'](m(0x105),()=>{const n=m;if(this[n(0xfc)][n(0x104)](c)===e)this[n(0xfc)][n(0x110)](c);},{'once':!![]})):this['_popupContainer'][m(0x106)](e);}}['setTool'](c){const o=i;this['_popupContainer'][o(0x113)]['length']&&(this[o(0xfe)][o(0xf9)]=''),this['designerView'][o(0xfd)]['executeCommand']({'type':CommandType[o(0x10b)],'parameter':c});}}function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);