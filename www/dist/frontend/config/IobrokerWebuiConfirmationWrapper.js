var j=b;function b(c,d){c=c-0x79;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x7e))/0x1+parseInt(h(0x7a))/0x2+-parseInt(h(0x85))/0x3*(-parseInt(h(0x82))/0x4)+parseInt(h(0x83))/0x5+parseInt(h(0x81))/0x6*(-parseInt(h(0x7c))/0x7)+-parseInt(h(0x87))/0x8*(-parseInt(h(0x7f))/0x9)+parseInt(h(0x84))/0xa*(-parseInt(h(0x88))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb4dfe));function a(){var l=['_getDomElement','okClicked','emit','785004SSvAJR','_ok','1204jpOXhK','cancelText','1012647EswUzL','13288869GwTQno','textContent','30906IrZrNp','4QEcWam','1326520sbrARs','4812790rnrmoO','2658705kUyzdt','ready','8LNclDD','55gdndZL','define'];a=function(){return l;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[i(0x8a)]('ok')[i(0x80)]=c['okText'];if(c?.[i(0x7d)])this['_getDomElement']('cancel')[i(0x80)]=c['cancelText'];}[j(0x86)](){this['_assignEvents']();}[j(0x7b)](){var k=j;this[k(0x8b)]?.[k(0x79)]();}['_cancel'](){this['cancelClicked']?.['emit']();}[j(0x8b)]=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[j(0x89)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);