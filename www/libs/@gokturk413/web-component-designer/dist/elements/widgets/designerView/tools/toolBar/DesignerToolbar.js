const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x188))/0x1+-parseInt(h(0x18f))/0x2*(-parseInt(h(0x181))/0x3)+-parseInt(h(0x19a))/0x4+-parseInt(h(0x192))/0x5+-parseInt(h(0x18a))/0x6+parseInt(h(0x17f))/0x7+parseInt(h(0x19d))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5ac5));function a(){const q=['innerHTML','isConnected','replaceChildren','template','10WqMQEg','designViewToolbarButtons','_getDomElement','6959090uLQtFS','get','appendChild','_popupContainer','toolButtons','createElement','_toolButtonsElem','dispose','6194324cjbmBG','_serviceContainer','executeCommand','15482600owADzf','stopPropagation','9125914orktWM','newValue','825276uKsvlV','style','designerView','popup','string','_toolWindows','length','300309cWBran','designerCanvas','3384660ZwEcIF'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';function b(c,d){c=c-0x17f;const e=a();let f=e[c];return f;}export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x182)]=css`
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
        }`;static [i(0x18e)]=html`
        <div id="popup"></div>
        <div id="toolButtons"></div>`;['_toolSubscription'];['_toolWindows']=new WeakMap();['dispose'](){const j=i;this['_toolSubscription']?.['dispose'](),this[j(0x198)]['replaceChildren'](),this['_popupContainer'][j(0x18d)]();}[i(0x198)];[i(0x19b)];['_popupContainer'];[i(0x183)];constructor(){const k=i;super(),this[k(0x198)]=this[k(0x191)](k(0x196)),this[k(0x198)]['onwheel']=c=>c[k(0x19e)](),this[k(0x195)]=this[k(0x191)](k(0x184));}['initialize'](c,d){const l=i;this[l(0x199)](),this[l(0x19b)]=c,this['designerView']=d;for(let e of this[l(0x19b)][l(0x190)]){this['_toolButtonsElem']['appendChild'](e['provideButton'](d[l(0x189)]));}this['_toolSubscription']=this[l(0x19b)]['globalContext']['onToolChanged']['on'](f=>{const m=l;for(const g of this['_toolButtonsElem']['children']){g instanceof DesignerToolbarButton&&g['setActiveTool'](f[m(0x180)]['name']);}});}['showPopup'](c){const n=i,d=this['_toolWindows']['get'](c);if(d?.[n(0x18c)]){d['remove'](),this['_toolWindows']['delete'](c);return;}this[n(0x186)]['delete'](c);if(this[n(0x195)]['children']['length'])this[n(0x195)]['innerHTML']='';else{let e;if(typeof c[n(0x184)]===n(0x185))e=document[n(0x197)](c['popup']);else e=new c['popup'](this['designerView']['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this[n(0x186)]['set'](c,e),e['addEventListener']('close',()=>{const o=n;if(this['_toolWindows'][o(0x193)](c)===e)this['_toolWindows']['delete'](c);},{'once':!![]})):this[n(0x195)][n(0x194)](e);}}['setTool'](c){const p=i;this['_popupContainer']['children'][p(0x187)]&&(this['_popupContainer'][p(0x18b)]=''),this[p(0x183)]['designerCanvas'][p(0x19c)]({'type':CommandType['setTool'],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);