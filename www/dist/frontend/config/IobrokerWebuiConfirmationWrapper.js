var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x106))/0x1+-parseInt(h(0x10b))/0x2*(-parseInt(h(0x108))/0x3)+-parseInt(h(0x111))/0x4*(parseInt(h(0x10a))/0x5)+-parseInt(h(0x100))/0x6+parseInt(h(0xff))/0x7*(parseInt(h(0x102))/0x8)+-parseInt(h(0x109))/0x9*(parseInt(h(0x10d))/0xa)+parseInt(h(0x101))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd58d4));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x110)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0x113)]();if(c?.['okText'])this[j(0xfe)]('ok')['textContent']=c[j(0x10c)];if(c?.[j(0x115)])this[j(0xfe)](j(0x104))['textContent']=c['cancelText'];}[i(0x112)](){this['_assignEvents']();}[i(0x107)](){var k=i;this['okClicked']?.[k(0x114)]();}['_cancel'](){var l=i;this[l(0x10f)]?.[l(0x114)]();}[i(0x105)]=new TypedEvent();[i(0x10f)]=new TypedEvent();}function b(c,d){c=c-0xfe;var e=a();var f=e[c];return f;}function a(){var m=['288veNexu','745DEouJk','34nHbzkr','okText','435320XlNeYp','iobroker-webui-confirmation-wrapper','cancelClicked','template','16364KFnCml','ready','_restoreCachedInititalValues','emit','cancelText','_getDomElement','7kLJtiD','1165110aKxgzn','26208622ZsUvHS','4228208UqnWVe','define','cancel','okClicked','15967taakLD','_ok','25479dnciib'];a=function(){return m;};return a();}customElements[i(0x103)](i(0x10e),IobrokerWebuiConfirmationWrapper);