function a(){var n=['30pNqacz','5yChEOX','cancelClicked','9193349rWLaCs','textContent','style','8vvgDaY','_assignEvents','okClicked','45gTxEeh','8692796qdVSMl','4088448KUwEPS','4948rajYZw','18248GUtGMx','1092739fJXyQL','2389374icLYPd'];a=function(){return n;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x16f))/0x1+parseInt(h(0x16e))/0x2*(-parseInt(h(0x16a))/0x3)+-parseInt(h(0x16d))/0x4*(-parseInt(h(0x172))/0x5)+parseInt(h(0x16c))/0x6+parseInt(h(0x16b))/0x7+-parseInt(h(0x177))/0x8*(-parseInt(h(0x170))/0x9)+parseInt(h(0x171))/0xa*(-parseInt(h(0x174))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9be61));function b(c,d){c=c-0x168;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x176)]=css`
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
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this['_getDomElement']('ok')[j(0x175)]=c['okText'];if(c?.['cancelText'])this['_getDomElement']('cancel')['textContent']=c['cancelText'];}['ready'](){var k=i;this[k(0x168)]();}['_ok'](){var l=i;this[l(0x169)]?.['emit']();}['_cancel'](){var m=i;this[m(0x173)]?.['emit']();}[i(0x169)]=new TypedEvent();[i(0x173)]=new TypedEvent();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);