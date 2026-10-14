var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1cf))/0x1*(parseInt(h(0x1da))/0x2)+-parseInt(h(0x1e2))/0x3+-parseInt(h(0x1d2))/0x4+parseInt(h(0x1d7))/0x5*(parseInt(h(0x1de))/0x6)+-parseInt(h(0x1df))/0x7*(parseInt(h(0x1d9))/0x8)+-parseInt(h(0x1d8))/0x9*(parseInt(h(0x1d6))/0xa)+parseInt(h(0x1db))/0xb*(parseInt(h(0x1d4))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9fcfd));function b(c,d){c=c-0x1ce;var e=a();var f=e[c];return f;}function a(){var n=['cancel','23484BmuUcN','cancelClicked','230290VxUFjJ','430235EpNAvO','9CKtMsB','2097584TTFJjU','197764OYEHwF','9427dQflve','ready','_assignEvents','60jQJyLU','21nofQvG','cancelText','okClicked','3424509SLwDBf','template','_getDomElement','1TlGisV','textContent','define','123144JbhWrn'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x1e3)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[j(0x1ce)]('ok')[j(0x1d0)]=c['okText'];if(c?.['cancelText'])this['_getDomElement'](j(0x1d3))['textContent']=c[j(0x1e0)];}[i(0x1dc)](){var k=i;this[k(0x1dd)]();}['_ok'](){var l=i;this[l(0x1e1)]?.['emit']();}['_cancel'](){var m=i;this[m(0x1d5)]?.['emit']();}[i(0x1e1)]=new TypedEvent();[i(0x1d5)]=new TypedEvent();}customElements[i(0x1d1)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);