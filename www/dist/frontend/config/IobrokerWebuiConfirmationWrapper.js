var k=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x10c))/0x1+parseInt(h(0x110))/0x2+-parseInt(h(0x10e))/0x3*(-parseInt(h(0x118))/0x4)+-parseInt(h(0x111))/0x5+-parseInt(h(0x10d))/0x6+parseInt(h(0x10b))/0x7+-parseInt(h(0x114))/0x8*(parseInt(h(0x113))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4698f));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x117)]();if(c?.[i(0x119)])this[i(0x115)]('ok')['textContent']=c['okText'];if(c?.['cancelText'])this[i(0x115)]('cancel')[i(0x11b)]=c['cancelText'];}['ready'](){var j=b;this[j(0x11a)]();}[k(0x11c)](){var l=k;this['okClicked']?.[l(0x112)]();}[k(0x11e)](){var m=k;this[m(0x116)]?.[m(0x112)]();}[k(0x10f)]=new TypedEvent();[k(0x116)]=new TypedEvent();}customElements[k(0x11d)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);function b(c,d){c=c-0x10b;var e=a();var f=e[c];return f;}function a(){var n=['_cancel','3588473YiHGxf','357928rJFAQr','1154616CCdFHj','1648473nRzBbF','okClicked','720050vQoxjv','1655895HvznIL','emit','9DrJGzy','2011560VQxLoY','_getDomElement','cancelClicked','_restoreCachedInititalValues','4oDgjFn','okText','_assignEvents','textContent','_ok','define'];a=function(){return n;};return a();}