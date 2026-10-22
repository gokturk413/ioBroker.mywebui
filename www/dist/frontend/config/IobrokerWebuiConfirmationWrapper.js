function b(c,d){c=c-0x150;var e=a();var f=e[c];return f;}var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x154))/0x1+-parseInt(h(0x159))/0x2*(parseInt(h(0x153))/0x3)+-parseInt(h(0x151))/0x4*(-parseInt(h(0x161))/0x5)+parseInt(h(0x150))/0x6*(parseInt(h(0x157))/0x7)+-parseInt(h(0x15b))/0x8*(-parseInt(h(0x152))/0x9)+parseInt(h(0x163))/0xa+-parseInt(h(0x15a))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6c537));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x160)]();if(c?.[i(0x158)])this[i(0x15e)]('ok')['textContent']=c['okText'];if(c?.[i(0x15d)])this[i(0x15e)]('cancel')[i(0x156)]=c['cancelText'];}[j(0x155)](){this['_assignEvents']();}[j(0x164)](){var k=j;this[k(0x15c)]?.['emit']();}['_cancel'](){this['cancelClicked']?.['emit']();}['okClicked']=new TypedEvent();[j(0x162)]=new TypedEvent();}customElements[j(0x15f)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);function a(){var l=['cancelText','_getDomElement','define','_restoreCachedInititalValues','5QNTsKl','cancelClicked','5242170DPpHum','_ok','3261474Unyaiu','2749028OpUoDI','328059LJArRs','9mahpvN','569331ugwFKr','ready','textContent','7rUWLUR','okText','327358PecZeV','3161763wpoXYw','8rCwQfB','okClicked'];a=function(){return l;};return a();}