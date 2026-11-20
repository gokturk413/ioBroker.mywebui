const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1f6))/0x1+parseInt(h(0x1e4))/0x2*(parseInt(h(0x1f0))/0x3)+parseInt(h(0x1de))/0x4*(-parseInt(h(0x1e8))/0x5)+-parseInt(h(0x1ea))/0x6*(-parseInt(h(0x1eb))/0x7)+-parseInt(h(0x1e5))/0x8*(-parseInt(h(0x1f3))/0x9)+parseInt(h(0x1f8))/0xa*(-parseInt(h(0x1e0))/0xb)+-parseInt(h(0x1f2))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8acb5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x1ef)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;[i(0x1fe)];[i(0x1fa)]=new WeakMap();[i(0x200)](){const j=i;this['_toolSubscription']?.['dispose'](),this[j(0x1ed)][j(0x1df)](),this['_popupContainer'][j(0x1df)]();}[i(0x1ed)];['_serviceContainer'];[i(0x1e6)];['designerView'];constructor(){const k=i;super(),this[k(0x1ed)]=this[k(0x1ff)](k(0x1ec)),this[k(0x1ed)][k(0x1e7)]=c=>c['stopPropagation'](),this['_popupContainer']=this['_getDomElement'](k(0x1fd));}[i(0x1f4)](c,d){const l=i;this['dispose'](),this['_serviceContainer']=c,this['designerView']=d;for(let e of this[l(0x1f9)]['designViewToolbarButtons']){this['_toolButtonsElem'][l(0x1e3)](e['provideButton'](d['designerCanvas']));}this[l(0x1fe)]=this['_serviceContainer']['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f['newValue'][m(0x202)]);}});}['showPopup'](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.['isConnected']){d['remove'](),this[n(0x1fa)][n(0x1e9)](c);return;}this['_toolWindows']['delete'](c);if(this['_popupContainer'][n(0x201)][n(0x1e1)])this[n(0x1e6)]['innerHTML']='';else{let e;if(typeof c['popup']==='string')e=document[n(0x1fb)](c['popup']);else e=new c[(n(0x1fd))](this['designerView'][n(0x1e2)]);e instanceof DraggableToolWindow?(DraggableToolWindow[n(0x1f1)](e,c),this['_toolWindows']['set'](c,e),e[n(0x1ee)]('close',()=>{if(this['_toolWindows']['get'](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this['_popupContainer']['appendChild'](e);}}['setTool'](c){const o=i;this[o(0x1e6)]['children']['length']&&(this['_popupContainer'][o(0x1f7)]=''),this['designerView']['designerCanvas'][o(0x1f5)]({'type':CommandType['setTool'],'parameter':c});}}customElements[i(0x1fc)](i(0x203),DesignerToolbar);function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}function a(){const p=['name','node-projects-designer-toolbar','8nwdRTq','replaceChildren','6457jlBfFP','length','designerCanvas','appendChild','1178110osKHpD','816PbJkWq','_popupContainer','onwheel','1763465RjmyKp','delete','3732378wBJIiW','7qrNJHV','toolButtons','_toolButtonsElem','addEventListener','template','3SfZQbp','showWindow','1293324MxSJfy','33021fnziRr','initialize','executeCommand','751357tfesxV','innerHTML','16270UeStTp','_serviceContainer','_toolWindows','createElement','define','popup','_toolSubscription','_getDomElement','dispose','children'];a=function(){return p;};return a();}