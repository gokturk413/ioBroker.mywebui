var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x10c))/0x1*(parseInt(h(0x118))/0x2)+-parseInt(h(0x115))/0x3+-parseInt(h(0x11e))/0x4+-parseInt(h(0x116))/0x5*(-parseInt(h(0x11d))/0x6)+-parseInt(h(0x11a))/0x7+parseInt(h(0x113))/0x8*(-parseInt(h(0x117))/0x9)+parseInt(h(0x11c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x81598));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x114)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0x10f)]();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c['okText'];if(c?.[j(0x10e)])this[j(0x10d)]('cancel')['textContent']=c['cancelText'];}[i(0x11f)](){var k=i;this[k(0x111)]();}[i(0x110)](){this['okClicked']?.['emit']();}[i(0x119)](){var l=i;this[l(0x11b)]?.['emit']();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}function b(c,d){c=c-0x10c;var e=a();var f=e[c];return f;}function a(){var m=['cancelClicked','27869500PfoKar','1470mPKlfO','1111216whYwYX','ready','97eAxLtE','_getDomElement','cancelText','_restoreCachedInititalValues','_ok','_assignEvents','define','8AmqIXy','template','2360892uRdCfN','335CAPsmc','4268799fZmaaZ','2734czzEYr','_cancel','4213097IZUysf'];a=function(){return m;};return a();}customElements[i(0x112)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);