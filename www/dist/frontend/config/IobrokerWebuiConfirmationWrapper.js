var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x16e))/0x1+-parseInt(h(0x171))/0x2*(-parseInt(h(0x174))/0x3)+-parseInt(h(0x177))/0x4+parseInt(h(0x179))/0x5*(-parseInt(h(0x170))/0x6)+parseInt(h(0x16d))/0x7*(parseInt(h(0x17a))/0x8)+-parseInt(h(0x167))/0x9*(parseInt(h(0x16f))/0xa)+parseInt(h(0x178))/0xb*(parseInt(h(0x175))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe4d7f));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x172)]();if(c?.['okText'])this[i(0x16c)]('ok')[i(0x173)]=c['okText'];if(c?.['cancelText'])this['_getDomElement'](i(0x169))['textContent']=c[i(0x17c)];}[j(0x16b)](){var k=j;this[k(0x176)]();}['_ok'](){var l=j;this['okClicked']?.[l(0x168)]();}['_cancel'](){this['cancelClicked']?.['emit']();}[j(0x17b)]=new TypedEvent();['cancelClicked']=new TypedEvent();}function b(c,d){c=c-0x167;var e=a();var f=e[c];return f;}function a(){var m=['7263GQGtVN','emit','cancel','define','ready','_getDomElement','10731lVoJCj','380807grSMhb','20170PuXjyi','6BCEFkb','345142RfgNbH','_restoreCachedInititalValues','textContent','3svWNtF','86532AUxAzv','_assignEvents','3527040GWnDVn','4873mgTomO','6327865vcFPZm','9008wuKBlC','okClicked','cancelText'];a=function(){return m;};return a();}customElements[j(0x16a)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);