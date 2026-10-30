function a(){const q=['4741913YJHfgL','_popupContainer','delete','202042suRNYD','163495bniegb','globalContext','designerView','designerCanvas','_toolSubscription','1773kcsHVR','1248556KMtByg','207739AjOpdn','appendChild','initialize','_getDomElement','style','_toolWindows','executeCommand','designViewToolbarButtons','template','112874iOagHF','dispose','onwheel','replaceChildren','length','15760FSgWFL','addEventListener','_serviceContainer','isConnected','stopPropagation','3gAgtQU','30EOJsYu','48vSqpPS','_toolButtonsElem','close','node-projects-designer-toolbar'];a=function(){return q;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x139))/0x1+-parseInt(h(0x128))/0x2*(-parseInt(h(0x11f))/0x3)+parseInt(h(0x12f))/0x4+parseInt(h(0x129))/0x5*(parseInt(h(0x120))/0x6)+-parseInt(h(0x130))/0x7*(parseInt(h(0x121))/0x8)+-parseInt(h(0x12e))/0x9*(-parseInt(h(0x13e))/0xa)+-parseInt(h(0x125))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x284f4));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x134)]=css`
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
        }`;static [i(0x138)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0x12d)];[i(0x135)]=new WeakMap();[i(0x13a)](){const j=i;this['_toolSubscription']?.['dispose'](),this['_toolButtonsElem']['replaceChildren'](),this['_popupContainer'][j(0x13c)]();}[i(0x122)];[i(0x140)];['_popupContainer'];[i(0x12b)];constructor(){const k=i;super(),this[k(0x122)]=this[k(0x133)]('toolButtons'),this[k(0x122)][k(0x13b)]=c=>c[k(0x11e)](),this[k(0x126)]=this['_getDomElement']('popup');}[i(0x132)](c,d){const l=i;this['dispose'](),this[l(0x140)]=c,this['designerView']=d;for(let e of this['_serviceContainer'][l(0x137)]){this['_toolButtonsElem'][l(0x131)](e['provideButton'](d['designerCanvas']));}this['_toolSubscription']=this['_serviceContainer'][l(0x12a)]['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0x122)]['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f['newValue']['name']);}});}['showPopup'](c){const n=i,d=this[n(0x135)]['get'](c);if(d?.[n(0x11d)]){d['remove'](),this[n(0x135)]['delete'](c);return;}this['_toolWindows'][n(0x127)](c);if(this[n(0x126)]['children'][n(0x13d)])this['_popupContainer']['innerHTML']='';else{let e;if(typeof c['popup']==='string')e=document['createElement'](c['popup']);else e=new c['popup'](this['designerView'][n(0x12c)]);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0x135)]['set'](c,e),e[n(0x13f)](n(0x123),()=>{const o=n;if(this['_toolWindows']['get'](c)===e)this[o(0x135)]['delete'](c);},{'once':!![]})):this[n(0x126)]['appendChild'](e);}}['setTool'](c){const p=i;this['_popupContainer']['children']['length']&&(this['_popupContainer']['innerHTML']=''),this['designerView'][p(0x12c)][p(0x136)]({'type':CommandType['setTool'],'parameter':c});}}customElements['define'](i(0x124),DesignerToolbar);