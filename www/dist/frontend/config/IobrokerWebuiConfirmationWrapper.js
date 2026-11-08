var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x120))/0x1*(-parseInt(h(0x126))/0x2)+-parseInt(h(0x130))/0x3*(-parseInt(h(0x12d))/0x4)+-parseInt(h(0x12e))/0x5+parseInt(h(0x136))/0x6*(parseInt(h(0x12a))/0x7)+-parseInt(h(0x125))/0x8*(-parseInt(h(0x12f))/0x9)+-parseInt(h(0x12b))/0xa*(-parseInt(h(0x131))/0xb)+parseInt(h(0x134))/0xc*(parseInt(h(0x133))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5a0c3));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x121)]=css`
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
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0x132)])this['_getDomElement']('ok')['textContent']=c['okText'];if(c?.[j(0x127)])this[j(0x124)]('cancel')[j(0x128)]=c['cancelText'];}['ready'](){this['_assignEvents']();}[i(0x123)](){this['okClicked']?.['emit']();}[i(0x129)](){var k=i;this['cancelClicked']?.[k(0x135)]();}[i(0x122)]=new TypedEvent();['cancelClicked']=new TypedEvent();}function b(c,d){c=c-0x120;var e=a();var f=e[c];return f;}customElements['define'](i(0x12c),IobrokerWebuiConfirmationWrapper);function a(){var l=['2899dHsSIz','6468Exlpwh','emit','30jzdiyd','336051GMGnsC','style','okClicked','_ok','_getDomElement','8IOiqqG','2txybzD','cancelText','textContent','_cancel','163254kjeLAg','6173030AdIQKL','iobroker-webui-confirmation-wrapper','631832UclAJJ','2560705yisYvl','423009TImbyE','6gzEHbb','11JnmKac','okText'];a=function(){return l;};return a();}