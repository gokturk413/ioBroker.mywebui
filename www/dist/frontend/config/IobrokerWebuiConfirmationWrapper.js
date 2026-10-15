var i=b;function b(c,d){c=c-0x1a6;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1b4))/0x1*(parseInt(h(0x1b6))/0x2)+-parseInt(h(0x1b9))/0x3*(-parseInt(h(0x1ae))/0x4)+-parseInt(h(0x1b2))/0x5+parseInt(h(0x1b3))/0x6*(-parseInt(h(0x1ac))/0x7)+parseInt(h(0x1bb))/0x8*(parseInt(h(0x1bd))/0x9)+-parseInt(h(0x1a6))/0xa+parseInt(h(0x1ba))/0xb*(parseInt(h(0x1a8))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeda2c));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function a(){var n=['cancelText','emit','2116743eiQTzt','7865ypZarv','8odZQhV','ready','2276658uWSxZU','486050ZfJbVo','_getDomElement','37728yfmmCe','cancelClicked','iobroker-webui-confirmation-wrapper','cancel','7rtkYPu','okText','4gAWggm','template','textContent','_assignEvents','8058690seECIz','656526gWRBHY','154461nCfmUw','define','6EsFrrG'];a=function(){return n;};return a();}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x1af)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0x1ad)])this[j(0x1a7)]('ok')[j(0x1b0)]=c['okText'];if(c?.[j(0x1b7)])this[j(0x1a7)](j(0x1ab))[j(0x1b0)]=c['cancelText'];}[i(0x1bc)](){var k=i;this[k(0x1b1)]();}['_ok'](){var l=i;this['okClicked']?.[l(0x1b8)]();}['_cancel'](){var m=i;this[m(0x1a9)]?.['emit']();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[i(0x1b5)](i(0x1aa),IobrokerWebuiConfirmationWrapper);