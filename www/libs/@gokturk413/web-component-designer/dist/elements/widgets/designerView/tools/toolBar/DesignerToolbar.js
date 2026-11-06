const i=b;function a(){const q=['onwheel','dispose','popup','_toolSubscription','stopPropagation','932910OsDfgU','designerCanvas','executeCommand','name','_popupContainer','globalContext','style','_serviceContainer','5428944kVyjJj','368KrDDcO','15mWMsjM','replaceChildren','designerView','40hxOhAk','setTool','children','get','_toolButtonsElem','string','showPopup','showWindow','661674RIUnrl','239024OTwtln','appendChild','set','toolButtons','1717639hwPlCX','109320oKQGWQ','15126GsbjFG','newValue','length','_toolWindows','35cucRkC','innerHTML'];a=function(){return q;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xcd))/0x1+-parseInt(h(0xc7))/0x2+parseInt(h(0xce))/0x3*(parseInt(h(0xe2))/0x4)+parseInt(h(0xe3))/0x5*(parseInt(h(0xd9))/0x6)+parseInt(h(0xd2))/0x7*(-parseInt(h(0xc8))/0x8)+parseInt(h(0xe1))/0x9+parseInt(h(0xe6))/0xa*(-parseInt(h(0xcc))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4dfa0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';function b(c,d){c=c-0xc5;const e=a();let f=e[c];return f;}import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xdf)]=css`
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
        <div id="toolButtons"></div>`;[i(0xd7)];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this[j(0xd7)]?.[j(0xd5)](),this[j(0xea)][j(0xe4)](),this['_popupContainer'][j(0xe4)]();}['_toolButtonsElem'];[i(0xe0)];['_popupContainer'];[i(0xe5)];constructor(){const k=i;super(),this[k(0xea)]=this['_getDomElement'](k(0xcb)),this['_toolButtonsElem'][k(0xd4)]=c=>c[k(0xd8)](),this['_popupContainer']=this['_getDomElement'](k(0xd6));}['initialize'](c,d){const l=i;this['dispose'](),this[l(0xe0)]=c,this[l(0xe5)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this['_toolButtonsElem'][l(0xc9)](e['provideButton'](d[l(0xda)]));}this['_toolSubscription']=this[l(0xe0)][l(0xde)]['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0xea)][m(0xe8)]){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0xcf)][m(0xdc)]);}});}[i(0xc5)](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d['remove'](),this[n(0xd1)]['delete'](c);return;}this['_toolWindows']['delete'](c);if(this[n(0xdd)][n(0xe8)]['length'])this[n(0xdd)][n(0xd3)]='';else{let e;if(typeof c['popup']===n(0xeb))e=document['createElement'](c[n(0xd6)]);else e=new c['popup'](this['designerView'][n(0xda)]);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0xc6)](e,c),this['_toolWindows'][n(0xca)](c,e),e['addEventListener']('close',()=>{const o=n;if(this['_toolWindows'][o(0xe9)](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this['_popupContainer'][n(0xc9)](e);}}[i(0xe7)](c){const p=i;this['_popupContainer']['children'][p(0xd0)]&&(this['_popupContainer']['innerHTML']=''),this['designerView'][p(0xda)][p(0xdb)]({'type':CommandType['setTool'],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);