var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x154))/0x1+-parseInt(h(0x14b))/0x2*(parseInt(h(0x155))/0x3)+parseInt(h(0x148))/0x4+-parseInt(h(0x158))/0x5*(-parseInt(h(0x14c))/0x6)+parseInt(h(0x14f))/0x7*(parseInt(h(0x159))/0x8)+-parseInt(h(0x14a))/0x9+-parseInt(h(0x149))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4f918));function b(c,d){c=c-0x148;var e=a();var f=e[c];return f;}function a(){var l=['132iesvxK','cancelClicked','define','56FOrALn','emit','cancel','okClicked','_restoreCachedInititalValues','262949QUytUR','711567krjTgB','okText','cancelText','88685xBRwXl','402592eXVbvH','_ok','1630360ifWumU','511280jAwARL','5507343vTpYpW','4qHJdBP'];a=function(){return l;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x153)]();if(c?.[i(0x156)])this['_getDomElement']('ok')['textContent']=c[i(0x156)];if(c?.[i(0x157)])this['_getDomElement'](i(0x151))['textContent']=c['cancelText'];}['ready'](){this['_assignEvents']();}[j(0x15a)](){var k=j;this['okClicked']?.[k(0x150)]();}['_cancel'](){this['cancelClicked']?.['emit']();}[j(0x152)]=new TypedEvent();[j(0x14d)]=new TypedEvent();}customElements[j(0x14e)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);