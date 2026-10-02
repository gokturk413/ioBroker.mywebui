var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x120))/0x1*(-parseInt(h(0x112))/0x2)+-parseInt(h(0x123))/0x3*(-parseInt(h(0x10f))/0x4)+-parseInt(h(0x118))/0x5*(parseInt(h(0x115))/0x6)+parseInt(h(0x110))/0x7*(parseInt(h(0x117))/0x8)+parseInt(h(0x11e))/0x9+parseInt(h(0x113))/0xa+parseInt(h(0x11d))/0xb*(-parseInt(h(0x122))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd6d14));function a(){var m=['cancelText','1526442XnjBdm','_getDomElement','3622376rWSOpL','30KzYawh','okClicked','_assignEvents','define','textContent','14485295OTUipw','11497293wwThNm','_cancel','26UEajSr','ready','12VmAYXB','580407NWtubp','16nJoMsx','21jouMra','cancelClicked','7856aDsbIV','2113070pLGlGp'];a=function(){return m;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[i(0x116)]('ok')[i(0x11c)]=c['okText'];if(c?.['cancelText'])this[i(0x116)]('cancel')[i(0x11c)]=c[i(0x114)];}[j(0x121)](){var k=j;this[k(0x11a)]();}['_ok'](){var l=j;this[l(0x119)]?.['emit']();}[j(0x11f)](){this['cancelClicked']?.['emit']();}['okClicked']=new TypedEvent();[j(0x111)]=new TypedEvent();}function b(c,d){c=c-0x10f;var e=a();var f=e[c];return f;}customElements[j(0x11b)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);