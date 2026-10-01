var i=b;function a(){var m=['484942aaAqKf','emit','okClicked','textContent','1287608MaUFNb','84570MPVzbA','template','5093880FauEcb','iobroker-webui-confirmation-wrapper','18ExOpvn','1euYmyN','style','17032brjCMy','cancelClicked','_ok','okText','18hsQjFu','ready','1730007qhBhdT','809448kAoHCs','_cancel'];a=function(){return m;};return a();}function b(c,d){c=c-0x12e;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x13e))/0x1*(parseInt(h(0x134))/0x2)+-parseInt(h(0x12f))/0x3*(-parseInt(h(0x140))/0x4)+parseInt(h(0x139))/0x5*(-parseInt(h(0x13d))/0x6)+parseInt(h(0x138))/0x7+-parseInt(h(0x132))/0x8+-parseInt(h(0x131))/0x9+parseInt(h(0x13b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x204a7));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x13f)]=css`
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
        }`;static [i(0x13a)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this['_getDomElement']('ok')[j(0x137)]=c[j(0x12e)];if(c?.['cancelText'])this['_getDomElement']('cancel')[j(0x137)]=c['cancelText'];}[i(0x130)](){this['_assignEvents']();}[i(0x142)](){var k=i;this[k(0x136)]?.['emit']();}[i(0x133)](){var l=i;this[l(0x141)]?.[l(0x135)]();}[i(0x136)]=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements['define'](i(0x13c),IobrokerWebuiConfirmationWrapper);