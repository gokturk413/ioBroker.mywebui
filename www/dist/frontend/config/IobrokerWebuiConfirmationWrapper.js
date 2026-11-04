function a(){var n=['_assignEvents','define','okClicked','emit','1107480iqmhZQ','1544216jaBQre','cancel','okText','_getDomElement','textContent','cancelClicked','cancelText','2401130NqKkTM','1760108uvNrrj','168371gtWMoM','6828368xQVgqf','7wrdJtP','1915722KYjHcF'];a=function(){return n;};return a();}function b(c,d){c=c-0xd0;var e=a();var f=e[c];return f;}var m=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xdc))/0x1+parseInt(h(0xd3))/0x2+-parseInt(h(0xdf))/0x3+-parseInt(h(0xdb))/0x4+-parseInt(h(0xda))/0x5+parseInt(h(0xd2))/0x6+parseInt(h(0xde))/0x7*(parseInt(h(0xdd))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x667c2));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.[i(0xd5)])this[i(0xd6)]('ok')[i(0xd7)]=c[i(0xd5)];if(c?.['cancelText'])this['_getDomElement'](i(0xd4))['textContent']=c[i(0xd9)];}['ready'](){var j=b;this[j(0xe0)]();}['_ok'](){var k=b;this[k(0xd0)]?.[k(0xd1)]();}['_cancel'](){var l=b;this[l(0xd8)]?.['emit']();}[m(0xd0)]=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[m(0xe1)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);