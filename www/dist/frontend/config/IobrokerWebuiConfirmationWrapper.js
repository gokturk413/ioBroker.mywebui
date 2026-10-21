function a(){var n=['5804670JtiPAs','6259LWtFUS','574985eSUBSc','cancelText','_assignEvents','52PuxOCS','2668TWCwOh','14uGpEKB','4359UgMduz','50814ovHYIE','okClicked','cancelClicked','iobroker-webui-confirmation-wrapper','693120EOTBpD','1205561RuWDAi','define','256CVZhSY','_cancel','_ok','emit','_getDomElement','8928wHHQus'];a=function(){return n;};return a();}var k=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xfe))/0x1+parseInt(h(0xf6))/0x2*(-parseInt(h(0xf8))/0x3)+parseInt(h(0xf5))/0x4*(parseInt(h(0xf2))/0x5)+-parseInt(h(0xfd))/0x6*(-parseInt(h(0xf7))/0x7)+-parseInt(h(0x100))/0x8*(parseInt(h(0xf9))/0x9)+parseInt(h(0xf0))/0xa+-parseInt(h(0xf1))/0xb*(parseInt(h(0xef))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xecbf7));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xed;var e=a();var f=e[c];return f;}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[i(0xee)]('ok')['textContent']=c['okText'];if(c?.[i(0xf3)])this[i(0xee)]('cancel')['textContent']=c[i(0xf3)];}['ready'](){var j=b;this[j(0xf4)]();}[k(0x102)](){var l=k;this['okClicked']?.[l(0xed)]();}[k(0x101)](){var m=k;this[m(0xfb)]?.['emit']();}[k(0xfa)]=new TypedEvent();[k(0xfb)]=new TypedEvent();}customElements[k(0xff)](k(0xfc),IobrokerWebuiConfirmationWrapper);