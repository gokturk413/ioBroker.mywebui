var i=b;function b(c,d){c=c-0x118;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x11e))/0x1+-parseInt(h(0x11c))/0x2+-parseInt(h(0x129))/0x3+parseInt(h(0x125))/0x4*(-parseInt(h(0x126))/0x5)+-parseInt(h(0x11d))/0x6+-parseInt(h(0x11a))/0x7*(parseInt(h(0x121))/0x8)+parseInt(h(0x12b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x24478));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x12a)]=css`
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
        </div>`;constructor(c){var j=i;super(),this[j(0x128)]();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c[j(0x11b)];if(c?.['cancelText'])this['_getDomElement'](j(0x124))['textContent']=c[j(0x123)];}['ready'](){var k=i;this[k(0x119)]();}[i(0x120)](){var l=i;this[l(0x127)]?.[l(0x118)]();}['_cancel'](){this['cancelClicked']?.['emit']();}[i(0x127)]=new TypedEvent();[i(0x11f)]=new TypedEvent();}function a(){var m=['style','8226324UOoVNa','define','emit','_assignEvents','1078gMQKty','okText','41120vOYgLl','488316hMdKkB','227722CTMOTE','cancelClicked','_ok','2368ESsbgG','iobroker-webui-confirmation-wrapper','cancelText','cancel','12nFkoIr','245245yecWDy','okClicked','_restoreCachedInititalValues','729111OZKRhf'];a=function(){return m;};return a();}customElements[i(0x12c)](i(0x122),IobrokerWebuiConfirmationWrapper);