var j=b;function a(){var l=['cancelText','2MgppgJ','98925YZFtYt','1143602mUdmSG','643270ceayUX','8210755fyPpxy','emit','_ok','textContent','okText','11977936pGzPoe','6034104qjbNoA','cancelClicked','2369972lEmdgC','_getDomElement'];a=function(){return l;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x10e))/0x1+parseInt(h(0x11b))/0x2*(-parseInt(h(0x11c))/0x3)+parseInt(h(0x118))/0x4+-parseInt(h(0x10f))/0x5+parseInt(h(0x116))/0x6+-parseInt(h(0x110))/0x7+parseInt(h(0x115))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96b07));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.[i(0x114)])this[i(0x119)]('ok')[i(0x113)]=c[i(0x114)];if(c?.[i(0x11a)])this['_getDomElement']('cancel')[i(0x113)]=c['cancelText'];}['ready'](){this['_assignEvents']();}[j(0x112)](){this['okClicked']?.['emit']();}['_cancel'](){var k=j;this[k(0x117)]?.[k(0x111)]();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}function b(c,d){c=c-0x10e;var e=a();var f=e[c];return f;}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);