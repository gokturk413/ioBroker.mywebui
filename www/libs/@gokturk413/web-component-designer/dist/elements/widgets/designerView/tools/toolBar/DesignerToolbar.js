const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xfb))/0x1+-parseInt(h(0xfe))/0x2*(-parseInt(h(0x115))/0x3)+parseInt(h(0x101))/0x4*(parseInt(h(0x10a))/0x5)+parseInt(h(0x105))/0x6*(-parseInt(h(0x113))/0x7)+parseInt(h(0xf9))/0x8+-parseInt(h(0x112))/0x9*(parseInt(h(0x102))/0xa)+parseInt(h(0x104))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x800ea));function b(c,d){c=c-0xf8;const e=a();let f=e[c];return f;}function a(){const q=['_getDomElement','children','createElement','designerCanvas','innerHTML','string','appendChild','9gahevX','7WRFOJc','designerView','156dmwbjf','designViewToolbarButtons','stopPropagation','replaceChildren','newValue','style','_toolSubscription','dispose','7561104cyyFxa','_popupContainer','757135sTzIYd','remove','_toolWindows','27878WSqVSX','popup','_toolButtonsElem','576308euzpDu','3682570CGZZHZ','delete','551551QWOchT','4743468cTfmGC','isConnected','_serviceContainer','setActiveTool','globalContext','25FiXapy'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';import{CommandType}from'../../../../../commandHandling/CommandType.js';import{DesignerToolbarButton}from'./DesignerToolbarButton.js';import{DraggableToolWindow}from'./popups/DraggableToolWindow.js';export class DesignerToolbar extends BaseCustomWebComponentConstructorAppend{static [i(0x11a)]=css`
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
        <div id="toolButtons"></div>`;['_toolSubscription'];[i(0xfd)]=new WeakMap();[i(0xf8)](){const j=i;this[j(0x11b)]?.['dispose'](),this['_toolButtonsElem'][j(0x118)](),this[j(0xfa)][j(0x118)]();}['_toolButtonsElem'];[i(0x107)];['_popupContainer'];[i(0x114)];constructor(){const k=i;super(),this[k(0x100)]=this[k(0x10b)]('toolButtons'),this['_toolButtonsElem']['onwheel']=c=>c[k(0x117)](),this[k(0xfa)]=this[k(0x10b)](k(0xff));}['initialize'](c,d){const l=i;this['dispose'](),this[l(0x107)]=c,this[l(0x114)]=d;for(let e of this['_serviceContainer'][l(0x116)]){this[l(0x100)][l(0x111)](e['provideButton'](d[l(0x10e)]));}this[l(0x11b)]=this['_serviceContainer'][l(0x109)]['onToolChanged']['on'](f=>{const m=l;for(const g of this[m(0x100)]['children']){g instanceof DesignerToolbarButton&&g[m(0x108)](f[m(0x119)]['name']);}});}['showPopup'](c){const n=i,d=this[n(0xfd)]['get'](c);if(d?.[n(0x106)]){d[n(0xfc)](),this['_toolWindows'][n(0x103)](c);return;}this[n(0xfd)][n(0x103)](c);if(this[n(0xfa)]['children']['length'])this[n(0xfa)]['innerHTML']='';else{let e;if(typeof c[n(0xff)]===n(0x110))e=document[n(0x10d)](c[n(0xff)]);else e=new c[(n(0xff))](this[n(0x114)]['designerCanvas']);e instanceof DraggableToolWindow?(DraggableToolWindow['showWindow'](e,c),this['_toolWindows']['set'](c,e),e['addEventListener']('close',()=>{const o=n;if(this[o(0xfd)]['get'](c)===e)this[o(0xfd)][o(0x103)](c);},{'once':!![]})):this[n(0xfa)][n(0x111)](e);}}['setTool'](c){const p=i;this[p(0xfa)][p(0x10c)]['length']&&(this['_popupContainer'][p(0x10f)]=''),this[p(0x114)][p(0x10e)]['executeCommand']({'type':CommandType['setTool'],'parameter':c});}}customElements['define']('node-projects-designer-toolbar',DesignerToolbar);