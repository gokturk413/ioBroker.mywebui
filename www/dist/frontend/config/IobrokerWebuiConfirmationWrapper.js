var i=b;function b(c,d){c=c-0x114;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x118))/0x1*(-parseInt(h(0x11d))/0x2)+parseInt(h(0x11b))/0x3*(-parseInt(h(0x128))/0x4)+parseInt(h(0x115))/0x5+parseInt(h(0x114))/0x6*(parseInt(h(0x11a))/0x7)+-parseInt(h(0x11e))/0x8*(parseInt(h(0x116))/0x9)+parseInt(h(0x124))/0xa+-parseInt(h(0x11f))/0xb*(-parseInt(h(0x127))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x355e7));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function a(){var n=['4476FyBVOe','100YhNSyn','_restoreCachedInititalValues','12wzOImC','874975AlWhbi','636327OvnVJa','_assignEvents','61aNKtcu','emit','177863qmQKNS','51927ryEiVA','textContent','11270JteabC','8zwDByO','19492DwVWJL','style','cancelText','_getDomElement','okClicked','1789930oSbRRk','define','iobroker-webui-confirmation-wrapper'];a=function(){return n;};return a();}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x120)]=css`
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
        </div>`;constructor(c){var j=i;super(),this[j(0x129)]();if(c?.['okText'])this[j(0x122)]('ok')[j(0x11c)]=c['okText'];if(c?.[j(0x121)])this[j(0x122)]('cancel')['textContent']=c[j(0x121)];}['ready'](){var k=i;this[k(0x117)]();}['_ok'](){var l=i;this[l(0x123)]?.[l(0x119)]();}['_cancel'](){var m=i;this['cancelClicked']?.[m(0x119)]();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[i(0x125)](i(0x126),IobrokerWebuiConfirmationWrapper);