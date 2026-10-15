var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1bd))/0x1+parseInt(h(0x1bc))/0x2*(parseInt(h(0x1bb))/0x3)+-parseInt(h(0x1be))/0x4*(-parseInt(h(0x1ba))/0x5)+parseInt(h(0x1b7))/0x6*(parseInt(h(0x1c2))/0x7)+-parseInt(h(0x1c0))/0x8+parseInt(h(0x1b6))/0x9*(-parseInt(h(0x1c1))/0xa)+parseInt(h(0x1bf))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd2175));function a(){var m=['define','textContent','_restoreCachedInititalValues','style','okClicked','cancelClicked','_ok','5526801AOcUTi','2925366KmxkaC','emit','okText','111515OqYscF','33xdyECo','267382OkxZyR','1360746BdjUuH','104tdjiTR','22368379CihkSa','8976576nnBzDP','20ZVrFGx','7XVcOpR'];a=function(){return m;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x1c6)]=css`
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
        </div>`;constructor(c){var j=i;super(),this[j(0x1c5)]();if(c?.[j(0x1b9)])this['_getDomElement']('ok')[j(0x1c4)]=c[j(0x1b9)];if(c?.['cancelText'])this['_getDomElement']('cancel')[j(0x1c4)]=c['cancelText'];}['ready'](){this['_assignEvents']();}[i(0x1c9)](){var k=i;this[k(0x1c7)]?.['emit']();}['_cancel'](){var l=i;this['cancelClicked']?.[l(0x1b8)]();}[i(0x1c7)]=new TypedEvent();[i(0x1c8)]=new TypedEvent();}function b(c,d){c=c-0x1b6;var e=a();var f=e[c];return f;}customElements[i(0x1c3)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);