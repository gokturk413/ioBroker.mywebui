function b(c,d){c=c-0xfa;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xfd))/0x1*(-parseInt(h(0xff))/0x2)+parseInt(h(0x109))/0x3*(-parseInt(h(0x102))/0x4)+parseInt(h(0xfc))/0x5*(parseInt(h(0x10e))/0x6)+-parseInt(h(0xfe))/0x7+parseInt(h(0x104))/0x8*(-parseInt(h(0x107))/0x9)+-parseInt(h(0x105))/0xa*(-parseInt(h(0x103))/0xb)+parseInt(h(0x10d))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8c56));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x10c)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0xfb)]();if(c?.['okText'])this[j(0xfa)]('ok')['textContent']=c[j(0x100)];if(c?.[j(0x108)])this['_getDomElement']('cancel')['textContent']=c[j(0x108)];}['ready'](){this['_assignEvents']();}['_ok'](){var k=i;this['okClicked']?.[k(0x10b)]();}['_cancel'](){var l=i;this[l(0x101)]?.['emit']();}[i(0x106)]=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[i(0x10a)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);function a(){var m=['1604VvivJc','6285370rlGvjt','352FnwcxM','okText','cancelClicked','20JJCMbU','14388OIuwpk','776doUYGQ','7550jMzZce','okClicked','15939fduKwE','cancelText','627309mHTdmg','define','emit','template','18927252ibqYKz','210GsueyR','_getDomElement','_restoreCachedInititalValues','112305qPtboG'];a=function(){return m;};return a();}