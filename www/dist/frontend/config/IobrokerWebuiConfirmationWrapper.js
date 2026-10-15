var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x10c))/0x1+parseInt(h(0x113))/0x2+-parseInt(h(0x111))/0x3+parseInt(h(0x11b))/0x4*(-parseInt(h(0x10d))/0x5)+parseInt(h(0x110))/0x6+-parseInt(h(0x10b))/0x7+parseInt(h(0x119))/0x8*(parseInt(h(0x116))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb56fe));function b(c,d){c=c-0x10a;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function a(){var k=['56AXZUeX','_ok','154468ZzGYAO','define','ready','textContent','308525GqKBAM','1090871JzKaDz','5sSkxjh','cancelClicked','template','6933246IdeOei','796797HwjXIK','_getDomElement','868110VYJrzn','cancelText','iobroker-webui-confirmation-wrapper','762084HAIpqE','cancel','style'];a=function(){return k;};return a();}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x118)]=css`
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
        }`;static [i(0x10f)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[j(0x112)]('ok')[j(0x10a)]=c['okText'];if(c?.[j(0x114)])this['_getDomElement'](j(0x117))[j(0x10a)]=c['cancelText'];}[i(0x11d)](){this['_assignEvents']();}[i(0x11a)](){this['okClicked']?.['emit']();}['_cancel'](){this['cancelClicked']?.['emit']();}['okClicked']=new TypedEvent();[i(0x10e)]=new TypedEvent();}customElements[i(0x11c)](i(0x115),IobrokerWebuiConfirmationWrapper);