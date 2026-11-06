var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x117))/0x1+-parseInt(h(0x121))/0x2+parseInt(h(0x11a))/0x3*(-parseInt(h(0x123))/0x4)+-parseInt(h(0x113))/0x5*(parseInt(h(0x11d))/0x6)+parseInt(h(0x115))/0x7*(-parseInt(h(0x11f))/0x8)+parseInt(h(0x114))/0x9*(parseInt(h(0x11b))/0xa)+parseInt(h(0x111))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6137b));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function a(){var m=['765584yTVcUt','_cancel','okClicked','3pflEkJ','369330cUaSMy','emit','150YPvHqY','define','56fBqmQV','_restoreCachedInititalValues','1283492ebbbTS','okText','2226776sbywLP','cancelClicked','25701632WeMfqW','cancelText','49360oDopiN','171wqoRaz','429212pGydrN','template'];a=function(){return m;};return a();}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x116)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0x120)]();if(c?.[j(0x122)])this['_getDomElement']('ok')['textContent']=c[j(0x122)];if(c?.[j(0x112)])this['_getDomElement']('cancel')['textContent']=c[j(0x112)];}['ready'](){this['_assignEvents']();}['_ok'](){var k=i;this[k(0x119)]?.['emit']();}[i(0x118)](){var l=i;this['cancelClicked']?.[l(0x11c)]();}['okClicked']=new TypedEvent();[i(0x110)]=new TypedEvent();}function b(c,d){c=c-0x110;var e=a();var f=e[c];return f;}customElements[i(0x11e)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);