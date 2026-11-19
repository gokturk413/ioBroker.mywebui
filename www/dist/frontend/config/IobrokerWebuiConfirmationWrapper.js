function b(c,d){c=c-0xb1;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xb2))/0x1+parseInt(h(0xc0))/0x2+parseInt(h(0xb9))/0x3*(parseInt(h(0xc1))/0x4)+parseInt(h(0xb4))/0x5*(parseInt(h(0xb8))/0x6)+parseInt(h(0xba))/0x7+parseInt(h(0xbd))/0x8+-parseInt(h(0xc2))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdbb6c));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0xb3)]=css`
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
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0xb6)])this['_getDomElement']('ok')[j(0xb5)]=c[j(0xb6)];if(c?.[j(0xb7)])this[j(0xbf)](j(0xbe))[j(0xb5)]=c[j(0xb7)];}['ready'](){var k=i;this[k(0xbb)]();}['_ok'](){this['okClicked']?.['emit']();}['_cancel'](){var l=i;this['cancelClicked']?.[l(0xb1)]();}[i(0xc3)]=new TypedEvent();[i(0xbc)]=new TypedEvent();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);function a(){var m=['okClicked','emit','1139232jPaWAW','style','7145MfsNYe','textContent','okText','cancelText','7548DyuLOb','1389LDeOzC','3838534NLbbKo','_assignEvents','cancelClicked','835440zytXHx','cancel','_getDomElement','880754yyNnag','1896TvUeIq','30146373SjsiRH'];a=function(){return m;};return a();}