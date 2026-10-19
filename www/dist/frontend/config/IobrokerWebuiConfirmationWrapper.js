var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x8d))/0x1*(-parseInt(h(0x9f))/0x2)+parseInt(h(0x9a))/0x3*(parseInt(h(0x92))/0x4)+-parseInt(h(0x8f))/0x5+parseInt(h(0x94))/0x6*(parseInt(h(0xa2))/0x7)+parseInt(h(0x9e))/0x8+-parseInt(h(0x96))/0x9*(-parseInt(h(0x9d))/0xa)+parseInt(h(0x91))/0xb*(-parseInt(h(0xa0))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x415ca));function a(){var m=['1826153RzsVBc','15329CPjgcx','ready','1600800WxaQAt','_restoreCachedInititalValues','3245EATdhd','4lmHVjh','cancelClicked','6zxocfj','cancelText','558HbYqWU','style','emit','okText','1015968xaDkeW','okClicked','define','28560bVKuRB','533080VLvUtQ','20jdZOrZ','4152fWwyvU','iobroker-webui-confirmation-wrapper'];a=function(){return m;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x8d;var e=a();var f=e[c];return f;}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x97)]=css`
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
        </div>`;constructor(c){var j=i;super(),this[j(0x90)]();if(c?.[j(0x99)])this['_getDomElement']('ok')['textContent']=c[j(0x99)];if(c?.[j(0x95)])this['_getDomElement']('cancel')['textContent']=c[j(0x95)];}[i(0x8e)](){this['_assignEvents']();}['_ok'](){var k=i;this[k(0x9b)]?.['emit']();}['_cancel'](){var l=i;this['cancelClicked']?.[l(0x98)]();}[i(0x9b)]=new TypedEvent();[i(0x93)]=new TypedEvent();}customElements[i(0x9c)](i(0xa1),IobrokerWebuiConfirmationWrapper);