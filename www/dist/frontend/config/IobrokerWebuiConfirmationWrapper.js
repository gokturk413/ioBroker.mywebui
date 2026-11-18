var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1ef))/0x1*(-parseInt(h(0x1e6))/0x2)+-parseInt(h(0x1f4))/0x3*(parseInt(h(0x1ea))/0x4)+parseInt(h(0x1fa))/0x5+parseInt(h(0x1f3))/0x6*(-parseInt(h(0x1ec))/0x7)+parseInt(h(0x1f7))/0x8*(-parseInt(h(0x1f8))/0x9)+parseInt(h(0x1f2))/0xa*(-parseInt(h(0x1f5))/0xb)+-parseInt(h(0x1e9))/0xc*(-parseInt(h(0x1eb))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6e0ab));function b(c,d){c=c-0x1e6;var e=a();var f=e[c];return f;}function a(){var l=['_cancel','cancelText','377510WnuMkU','ready','_getDomElement','50MlwGOs','18mcqNWl','341337DisLZr','619300eWlSaI','define','64oPOHtL','45558ecXiWh','okClicked','3576840RlLXtU','2WIoAql','cancelClicked','textContent','1553268VhyMeg','8NrQfpU','65rEoOQy','1726172qzQhEx'];a=function(){return l;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
            display: block;
            height: 100%;
            box-sizing: border-box;
            background: var(--ui-surface, #252b38);
            color: var(--text-color, #e8e8ea);
        }
        #upper {
            height: calc(100% - 35px);
            position: relative;
        }
        #lower {
            height: 35px;
            display: grid;
            gap: 5px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            padding: 5px;
            box-sizing: border-box;
        }`;static ['template']=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c['okText'];if(c?.[i(0x1ee)])this[i(0x1f1)]('cancel')[i(0x1e8)]=c['cancelText'];}[j(0x1f0)](){this['_assignEvents']();}['_ok'](){var k=j;this[k(0x1f9)]?.['emit']();}[j(0x1ed)](){this['cancelClicked']?.['emit']();}['okClicked']=new TypedEvent();[j(0x1e7)]=new TypedEvent();}customElements[j(0x1f6)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);