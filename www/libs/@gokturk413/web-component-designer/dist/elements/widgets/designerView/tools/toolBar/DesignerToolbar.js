const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xea))/0x1+-parseInt(h(0xed))/0x2+-parseInt(h(0xf7))/0x3*(-parseInt(h(0xf4))/0x4)+-parseInt(h(0xe1))/0x5+parseInt(h(0x101))/0x6+-parseInt(h(0xe8))/0x7*(-parseInt(h(0xf5))/0x8)+-parseInt(h(0xe0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8a265));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';function a(){const q=['provideButton','executeCommand','innerHTML','isConnected','_toolButtonsElem','children','714lfcgxz','string','1060438SDXmNo','node-projects-designer-toolbar','style','507664kMkcjx','globalContext','initialize','close','newValue','define','designerView','676uiRXxm','31480yJjMCp','remove','450HMVFcW','get','dispose','toolButtons','_popupContainer','_serviceContainer','setTool','_toolWindows','stopPropagation','appendChild','3074742TqTjle','onToolChanged','designerCanvas','_toolSubscription','name','8448093JLxWTP','1206225jAtYYJ'];a=function(){return q;};return a();}import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0xdc;const e=a();let f=e[c];return f;}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xec)]=css`
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
        <div id="toolButtons"></div>`;[i(0xde)];['_toolWindows']=new WeakMap();[i(0xf9)](){const j=i;this[j(0xde)]?.[j(0xf9)](),this[j(0xe6)]['replaceChildren'](),this['_popupContainer']['replaceChildren']();}[i(0xe6)];[i(0xfc)];[i(0xfb)];['designerView'];constructor(){const k=i;super(),this[k(0xe6)]=this['_getDomElement'](k(0xfa)),this[k(0xe6)]['onwheel']=c=>c[k(0xff)](),this['_popupContainer']=this['_getDomElement']('popup');}[i(0xef)](c,d){const l=i;this['dispose'](),this[l(0xfc)]=c,this['designerView']=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this[l(0xe6)]['appendChild'](e[l(0xe2)](d['designerCanvas']));}this['_toolSubscription']=this[l(0xfc)][l(0xee)][l(0xdc)]['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0xf1)][m(0xdf)]);}});}['showPopup'](c){const n=i,d=this['_toolWindows'][n(0xf8)](c);if(d?.[n(0xe5)]){d[n(0xf6)](),this[n(0xfe)]['delete'](c);return;}this['_toolWindows']['delete'](c);if(this['_popupContainer']['children']['length'])this[n(0xfb)][n(0xe4)]='';else{let e;if(typeof c['popup']===n(0xe9))e=document['createElement'](c['popup']);else e=new c['popup'](this['designerView'][n(0xdd)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0xfe)]['set'](c,e),e['addEventListener'](n(0xf0),()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0xfe)]['delete'](c);},{'once':!![]})):this[n(0xfb)][n(0x100)](e);}}[i(0xfd)](c){const p=i;this[p(0xfb)][p(0xe7)]['length']&&(this['_popupContainer']['innerHTML']=''),this[p(0xf3)]['designerCanvas'][p(0xe3)]({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0xf2)](i(0xeb),DesignerToolbar);