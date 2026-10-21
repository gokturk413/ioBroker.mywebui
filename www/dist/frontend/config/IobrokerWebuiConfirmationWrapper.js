var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xf7))/0x1+-parseInt(h(0x102))/0x2+parseInt(h(0xfa))/0x3+parseInt(h(0xf5))/0x4+parseInt(h(0xf4))/0x5+parseInt(h(0xf3))/0x6+-parseInt(h(0xfd))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9fe56));function b(c,d){c=c-0xf3;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0xf6)]=css`
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
        </div>`;constructor(c){var j=i;super(),this[j(0x103)]();if(c?.[j(0xfb)])this[j(0xff)]('ok')['textContent']=c['okText'];if(c?.[j(0xfe)])this['_getDomElement'](j(0xf8))[j(0x100)]=c[j(0xfe)];}['ready'](){var k=i;this[k(0x101)]();}['_ok'](){var l=i;this['okClicked']?.[l(0xf9)]();}['_cancel'](){var m=i;this[m(0xfc)]?.[m(0xf9)]();}[i(0x104)]=new TypedEvent();['cancelClicked']=new TypedEvent();}function a(){var n=['4979244aOAGHO','style','365213kqYFVb','cancel','emit','3412335cDznor','okText','cancelClicked','13056435DAPUkN','cancelText','_getDomElement','textContent','_assignEvents','2137724ufZhHF','_restoreCachedInititalValues','okClicked','4273038CZVZdj','646795HkeyeF'];a=function(){return n;};return a();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);