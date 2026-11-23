function b(c,d){c=c-0xd1;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xdc))/0x1*(parseInt(h(0xe2))/0x2)+-parseInt(h(0xd2))/0x3+-parseInt(h(0xe0))/0x4+-parseInt(h(0xda))/0x5+parseInt(h(0xdb))/0x6+parseInt(h(0xe3))/0x7*(parseInt(h(0xd4))/0x8)+parseInt(h(0xd9))/0x9*(parseInt(h(0xd1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc732e));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0xdf)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0xd3)]();if(c?.[j(0xde)])this[j(0xd8)]('ok')['textContent']=c[j(0xde)];if(c?.['cancelText'])this[j(0xd8)]('cancel')[j(0xe5)]=c['cancelText'];}[i(0xdd)](){var k=i;this[k(0xe4)]();}[i(0xe1)](){var l=i;this[l(0xd6)]?.['emit']();}['_cancel'](){var m=i;this[m(0xd7)]?.['emit']();}['okClicked']=new TypedEvent();[i(0xd7)]=new TypedEvent();}function a(){var n=['3536060dBLJCc','4946448GrWfxI','529hZYxdj','ready','okText','template','5116060QAvEOc','_ok','4702nuEZOQ','706517UVooaS','_assignEvents','textContent','2668670egEvQe','805215hmTtVO','_restoreCachedInititalValues','16yezUPO','iobroker-webui-confirmation-wrapper','okClicked','cancelClicked','_getDomElement','27IExQOM'];a=function(){return n;};return a();}customElements['define'](i(0xd5),IobrokerWebuiConfirmationWrapper);