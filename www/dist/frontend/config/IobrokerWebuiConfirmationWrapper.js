var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xae))/0x1+-parseInt(h(0xa9))/0x2+-parseInt(h(0xaa))/0x3+-parseInt(h(0xb3))/0x4*(-parseInt(h(0xa6))/0x5)+-parseInt(h(0xab))/0x6*(-parseInt(h(0xb4))/0x7)+-parseInt(h(0xb6))/0x8*(parseInt(h(0xb1))/0x9)+parseInt(h(0xac))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2a1e0));function a(){var m=['emit','220494XktOxW','118236DdEcTf','844422cMdjVw','610540EsLFKP','_getDomElement','195872JxGoNZ','_assignEvents','iobroker-webui-confirmation-wrapper','10107JhrfaW','textContent','7152ORGinU','7SfDVtx','_cancel','576oCNhKm','template','ready','cancel','15VhdmkR','cancelText'];a=function(){return m;};return a();}function b(c,d){c=c-0xa3;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0xa3)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[j(0xad)]('ok')[j(0xb2)]=c['okText'];if(c?.[j(0xa7)])this[j(0xad)](j(0xa5))['textContent']=c[j(0xa7)];}[i(0xa4)](){var k=i;this[k(0xaf)]();}['_ok'](){this['okClicked']?.['emit']();}[i(0xb5)](){var l=i;this['cancelClicked']?.[l(0xa8)]();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements['define'](i(0xb0),IobrokerWebuiConfirmationWrapper);