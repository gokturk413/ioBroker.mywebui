var i=b;function b(c,d){c=c-0x76;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x81))/0x1+parseInt(h(0x77))/0x2+-parseInt(h(0x83))/0x3+-parseInt(h(0x87))/0x4*(parseInt(h(0x84))/0x5)+parseInt(h(0x7e))/0x6*(parseInt(h(0x78))/0x7)+parseInt(h(0x7b))/0x8*(parseInt(h(0x7f))/0x9)+parseInt(h(0x76))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4023a));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x7d)]=css`
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
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0x82)])this['_getDomElement']('ok')[j(0x7c)]=c[j(0x82)];if(c?.[j(0x79)])this['_getDomElement']('cancel')['textContent']=c['cancelText'];}[i(0x80)](){this['_assignEvents']();}['_ok'](){var k=i;this[k(0x86)]?.[k(0x88)]();}['_cancel'](){var l=i;this[l(0x7a)]?.['emit']();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[i(0x89)](i(0x85),IobrokerWebuiConfirmationWrapper);function a(){var m=['144046UAWkoz','cancelText','cancelClicked','24PykzRZ','textContent','style','42XkBKTX','586053YANoBz','ready','458043OusboG','okText','781734QhjXFK','1818885nYXNRI','iobroker-webui-confirmation-wrapper','okClicked','4sNCuvr','emit','define','9429120rMsecQ','125606IEJkeK'];a=function(){return m;};return a();}