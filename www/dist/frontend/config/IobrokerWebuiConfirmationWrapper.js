function b(c,d){c=c-0x7f;var e=a();var f=e[c];return f;}var i=b;function a(){var m=['style','15GRgqcq','okText','cancelText','ready','19160130htULnc','3602772GoedHL','_restoreCachedInititalValues','emit','5563372sUJqsO','_assignEvents','1391742CLYgvm','textContent','3keELdv','_ok','885034slQuIC','99OzjhnQ','cancel','2293410tXGPGA','okClicked','933672Lvpcar'];a=function(){return m;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x88))/0x1+parseInt(h(0x7f))/0x2+parseInt(h(0x86))/0x3*(-parseInt(h(0x82))/0x4)+-parseInt(h(0x8f))/0x5*(parseInt(h(0x84))/0x6)+-parseInt(h(0x8b))/0x7+parseInt(h(0x8d))/0x8*(-parseInt(h(0x89))/0x9)+parseInt(h(0x93))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdcc62));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x8e)]=css`
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
        </div>`;constructor(c){var j=i;super(),this[j(0x80)]();if(c?.[j(0x90)])this['_getDomElement']('ok')[j(0x85)]=c['okText'];if(c?.[j(0x91)])this['_getDomElement'](j(0x8a))[j(0x85)]=c['cancelText'];}[i(0x92)](){var k=i;this[k(0x83)]();}[i(0x87)](){this['okClicked']?.['emit']();}['_cancel'](){var l=i;this['cancelClicked']?.[l(0x81)]();}[i(0x8c)]=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);