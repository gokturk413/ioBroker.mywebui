var k=b;function a(){var m=['_assignEvents','cancel','3kIBjdB','1056158ngVFqE','okText','define','textContent','okClicked','10312632SGItIx','638735XpVzCD','_cancel','23659668gZEeHH','_ok','1122205RxzOiZ','5035048AHMKMD','2227860JlilSa','1qgUGer'];a=function(){return m;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x115))/0x1*(-parseInt(h(0x119))/0x2)+parseInt(h(0x118))/0x3*(parseInt(h(0x113))/0x4)+-parseInt(h(0x10e))/0x5+parseInt(h(0x114))/0x6+parseInt(h(0x112))/0x7+parseInt(h(0x10d))/0x8+-parseInt(h(0x110))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcfc02));function b(c,d){c=c-0x10d;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.[i(0x11a)])this['_getDomElement']('ok')[i(0x11c)]=c[i(0x11a)];if(c?.['cancelText'])this['_getDomElement'](i(0x117))['textContent']=c['cancelText'];}['ready'](){var j=b;this[j(0x116)]();}[k(0x111)](){var l=k;this[l(0x11d)]?.['emit']();}[k(0x10f)](){this['cancelClicked']?.['emit']();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements[k(0x11b)]('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);