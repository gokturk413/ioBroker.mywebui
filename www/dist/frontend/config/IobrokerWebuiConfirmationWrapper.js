var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x163))/0x1*(parseInt(h(0x15d))/0x2)+-parseInt(h(0x16d))/0x3*(parseInt(h(0x165))/0x4)+-parseInt(h(0x160))/0x5*(-parseInt(h(0x166))/0x6)+-parseInt(h(0x15f))/0x7*(-parseInt(h(0x170))/0x8)+parseInt(h(0x167))/0x9+-parseInt(h(0x16e))/0xa+-parseInt(h(0x16b))/0xb*(-parseInt(h(0x16c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbcd70));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x15d;var e=a();var f=e[c];return f;}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x168)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c[j(0x161)];if(c?.[j(0x169)])this['_getDomElement']('cancel')[j(0x164)]=c[j(0x169)];}['ready'](){this['_assignEvents']();}[i(0x16f)](){var k=i;this['okClicked']?.[k(0x16a)]();}['_cancel'](){var l=i;this[l(0x15e)]?.['emit']();}['okClicked']=new TypedEvent();[i(0x15e)]=new TypedEvent();}customElements['define'](i(0x162),IobrokerWebuiConfirmationWrapper);function a(){var m=['cancelClicked','3318581JmtVdT','5SWjnty','okText','iobroker-webui-confirmation-wrapper','104942DhdPdK','textContent','8gGkNRg','157254RPeapq','6794586rJgCPF','template','cancelText','emit','11fULNbp','14782884bTWNcY','1673151cYDbJg','14920820lLfECF','_ok','16oyHOjf','8ANGmXk'];a=function(){return m;};return a();}