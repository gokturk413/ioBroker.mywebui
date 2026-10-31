function b(c,d){c=c-0x1be;var e=a();var f=e[c];return f;}var i=b;function a(){var l=['_ok','16867864zGbXwQ','3501QRaciq','cancelClicked','4597800KtoJDC','6840198gkrBMX','1684958yFqqzm','iobroker-webui-confirmation-wrapper','583978QuwzPK','cancel','3523611wLSZyz','okClicked','1208DIlEzC','style','okText'];a=function(){return l;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1c4))/0x1+parseInt(h(0x1c2))/0x2+-parseInt(h(0x1be))/0x3*(parseInt(h(0x1c8))/0x4)+-parseInt(h(0x1c0))/0x5+-parseInt(h(0x1c1))/0x6+-parseInt(h(0x1c6))/0x7+parseInt(h(0x1cc))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x97414));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x1c9)]=css`
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
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0x1ca)])this['_getDomElement']('ok')['textContent']=c[j(0x1ca)];if(c?.['cancelText'])this['_getDomElement'](j(0x1c5))['textContent']=c['cancelText'];}['ready'](){this['_assignEvents']();}[i(0x1cb)](){this['okClicked']?.['emit']();}['_cancel'](){var k=i;this[k(0x1bf)]?.['emit']();}[i(0x1c7)]=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements['define'](i(0x1c3),IobrokerWebuiConfirmationWrapper);