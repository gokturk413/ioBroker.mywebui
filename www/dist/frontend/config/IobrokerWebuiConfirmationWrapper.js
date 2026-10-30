var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xd1))/0x1+-parseInt(h(0xd8))/0x2*(-parseInt(h(0xe3))/0x3)+parseInt(h(0xe1))/0x4*(-parseInt(h(0xe7))/0x5)+-parseInt(h(0xe0))/0x6*(parseInt(h(0xd4))/0x7)+parseInt(h(0xda))/0x8*(-parseInt(h(0xe2))/0x9)+parseInt(h(0xd5))/0xa+parseInt(h(0xd6))/0xb*(parseInt(h(0xdc))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x30a4c));function a(){var n=['_cancel','_getDomElement','cancelClicked','30KVPHcN','4KDiUlw','14499rKXzOo','22497BLTrPO','cancel','emit','textContent','1188365JbuQft','template','273129VjAQjD','cancelText','_assignEvents','24374pEdFLh','371730SJZOiQ','208505zvFgUq','okText','22YnwADe','okClicked','88yJFMax','iobroker-webui-confirmation-wrapper','396PBcdkp'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xd1;var e=a();var f=e[c];return f;}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0xe8)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0xd7)])this['_getDomElement']('ok')[j(0xe6)]=c['okText'];if(c?.[j(0xd2)])this[j(0xde)](j(0xe4))[j(0xe6)]=c[j(0xd2)];}['ready'](){var k=i;this[k(0xd3)]();}['_ok'](){var l=i;this[l(0xd9)]?.['emit']();}[i(0xdd)](){var m=i;this['cancelClicked']?.[m(0xe5)]();}['okClicked']=new TypedEvent();[i(0xdf)]=new TypedEvent();}customElements['define'](i(0xdb),IobrokerWebuiConfirmationWrapper);