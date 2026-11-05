var i=b;function b(c,d){c=c-0xd2;var e=a();var f=e[c];return f;}function a(){var l=['975366nSotDK','_getDomElement','cancel','45054wPJpLL','template','cancelText','7878cCsXAq','1179234NzuNvk','355skcjfh','okText','26ALAJjp','cancelClicked','1333112DnjynZ','21771uXDbuq','_restoreCachedInititalValues','style','636476MMePTf','_ok'];a=function(){return l;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xd2))/0x1+-parseInt(h(0xd9))/0x2*(-parseInt(h(0xdc))/0x3)+-parseInt(h(0xdf))/0x4+parseInt(h(0xd7))/0x5*(parseInt(h(0xd5))/0x6)+-parseInt(h(0xe1))/0x7+parseInt(h(0xdb))/0x8+parseInt(h(0xd6))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22996));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0xde)]=css`
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
        }`;static [i(0xd3)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0xdd)]();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c[j(0xd8)];if(c?.[j(0xd4)])this[j(0xe2)](j(0xe3))['textContent']=c[j(0xd4)];}['ready'](){this['_assignEvents']();}[i(0xe0)](){this['okClicked']?.['emit']();}['_cancel'](){var k=i;this[k(0xda)]?.['emit']();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);