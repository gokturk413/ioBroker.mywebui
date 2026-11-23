var k=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1bb))/0x1+parseInt(h(0x1ae))/0x2*(parseInt(h(0x1bd))/0x3)+parseInt(h(0x1ba))/0x4*(parseInt(h(0x1b6))/0x5)+parseInt(h(0x1b7))/0x6+-parseInt(h(0x1af))/0x7+-parseInt(h(0x1b2))/0x8+-parseInt(h(0x1b8))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xadeca));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1ac;var e=a();var f=e[c];return f;}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x1bf)]();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c['okText'];if(c?.['cancelText'])this[i(0x1be)](i(0x1b5))[i(0x1b1)]=c[i(0x1b9)];}['ready'](){var j=b;this[j(0x1bc)]();}[k(0x1b4)](){var l=k;this[l(0x1b0)]?.['emit']();}[k(0x1c0)](){var m=k;this[m(0x1ad)]?.[m(0x1b3)]();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}function a(){var n=['2920953FBphXH','okClicked','textContent','1218104ILmtNR','emit','_ok','cancel','2160iFFSrf','2107488mJJytw','10361259YInZrI','cancelText','8104KFrRtV','1018727xJbFWu','_assignEvents','390EmjmrH','_getDomElement','_restoreCachedInititalValues','_cancel','define','cancelClicked','2892pBXXvl'];a=function(){return n;};return a();}customElements[k(0x1ac)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);