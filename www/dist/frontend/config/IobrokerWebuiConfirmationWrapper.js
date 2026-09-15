function b(c,d){c=c-0xec;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xf0))/0x1*(parseInt(h(0xf2))/0x2)+-parseInt(h(0xfa))/0x3*(-parseInt(h(0x101))/0x4)+-parseInt(h(0xec))/0x5*(-parseInt(h(0xf6))/0x6)+-parseInt(h(0xfd))/0x7+-parseInt(h(0xf3))/0x8*(parseInt(h(0xf4))/0x9)+parseInt(h(0xee))/0xa*(-parseInt(h(0xfb))/0xb)+parseInt(h(0xf5))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4208c));function a(){var n=['965943DLgRGc','_assignEvents','3422321ejTuXE','template','cancel','cancelText','69988ReTOYu','661865eoSYfq','_getDomElement','10CQXKPw','iobroker-webui-confirmation-wrapper','1dCthMZ','okClicked','446984JOXFMp','264560VAntOx','72Ysivfp','1274484qLhJFb','18BAOnEb','textContent','cancelClicked','okText','66AOYlyp'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0xfe)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0xf9)])this[j(0xed)]('ok')[j(0xf7)]=c[j(0xf9)];if(c?.[j(0x100)])this['_getDomElement'](j(0xff))[j(0xf7)]=c['cancelText'];}['ready'](){var k=i;this[k(0xfc)]();}['_ok'](){var l=i;this[l(0xf1)]?.['emit']();}['_cancel'](){var m=i;this[m(0xf8)]?.['emit']();}[i(0xf1)]=new TypedEvent();[i(0xf8)]=new TypedEvent();}customElements['define'](i(0xef),IobrokerWebuiConfirmationWrapper);