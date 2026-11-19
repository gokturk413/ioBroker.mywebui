const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb9))/0x1+-parseInt(h(0xd3))/0x2+-parseInt(h(0xbe))/0x3*(-parseInt(h(0xb6))/0x4)+-parseInt(h(0xcd))/0x5+-parseInt(h(0xbc))/0x6*(parseInt(h(0xb7))/0x7)+parseInt(h(0xb8))/0x8+parseInt(h(0xc4))/0x9*(parseInt(h(0xca))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5cc61));function b(c,d){c=c-0xb3;const e=a();let f=e[c];return f;}function a(){const q=['designerView','setTool','7470ZvbyzG','set','close','dispose','newValue','_toolWindows','170CAPbuC','initialize','popup','2156135vgbDmQ','stopPropagation','name','isConnected','_toolButtonsElem','string','104756yWwmzz','addEventListener','children','globalContext','define','delete','64pnhmPt','959mjrxOk','216248BSmoIO','521189UuRnoZ','executeCommand','_serviceContainer','120GqkCnn','style','57003NFAAfE','_popupContainer','_toolSubscription','template'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0xbd)]=css`
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
        }`;static [i(0xc1)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;['_toolSubscription'];[i(0xc9)]=new WeakMap();[i(0xc7)](){const j=i;this['_toolSubscription']?.['dispose'](),this['_toolButtonsElem']['replaceChildren'](),this[j(0xbf)]['replaceChildren']();}[i(0xd1)];['_serviceContainer'];['_popupContainer'];['designerView'];constructor(){const k=i;super(),this[k(0xd1)]=this['_getDomElement']('toolButtons'),this['_toolButtonsElem']['onwheel']=c=>c[k(0xce)](),this[k(0xbf)]=this['_getDomElement']('popup');}[i(0xcb)](c,d){const l=i;this['dispose'](),this['_serviceContainer']=c,this[l(0xc2)]=d;for(let e of this['_serviceContainer']['designViewToolbarButtons']){this[l(0xd1)]['appendChild'](e['provideButton'](d['designerCanvas']));}this[l(0xc0)]=this[l(0xbb)][l(0xb3)]['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem'][m(0xd5)]){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0xc8)][m(0xcf)]);}});}['showPopup'](c){const n=i,d=this[n(0xc9)]['get'](c);if(d?.[n(0xd0)]){d['remove'](),this[n(0xc9)][n(0xb5)](c);return;}this[n(0xc9)][n(0xb5)](c);if(this['_popupContainer']['children']['length'])this[n(0xbf)]['innerHTML']='';else{let e;if(typeof c['popup']===n(0xd2))e=document['createElement'](c[n(0xcc)]);else e=new c['popup'](this[n(0xc2)]['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0xc9)][n(0xc5)](c,e),e[n(0xd4)](n(0xc6),()=>{const o=n;if(this[o(0xc9)]['get'](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this[n(0xbf)]['appendChild'](e);}}[i(0xc3)](c){const p=i;this[p(0xbf)][p(0xd5)]['length']&&(this[p(0xbf)]['innerHTML']=''),this['designerView']['designerCanvas'][p(0xba)]({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0xb4)]('node-projects-designer-toolbar',DesignerToolbar);